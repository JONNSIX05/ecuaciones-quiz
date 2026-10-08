// js/admin.js
// Dashboard del profesor: KPIs, ranking, alumnos en riesgo, desglose por
// sección/ley y resumen de práctica libre. Solo accesible para is_admin = true.

import { getSupabase } from './supabase.js';
import { isAdmin, getUser, signOut } from './auth.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtPct(num, den) {
  if (!den) return '–';
  return `${Math.round((num / den) * 100)}%`;
}

function fmtDate(iso) {
  if (!iso) return '–';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '–';
  return d.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function sectionLabel(id) {
  return ({
    algebra: 'Álgebra',
    'calculo-diferencial': 'Cálculo Diferencial',
    'calculo-integral': 'Cálculo Integral',
    'practica-libre': 'Práctica libre',
  }[id]) || id;
}

/**
 * Renderiza el dashboard del profesor dentro de `view`.
 * @param {HTMLElement} view
 */
export async function renderAdminDashboard(view) {
  if (!(await isAdmin())) {
    view.innerHTML = `
      <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
      <div class="admin-card">
        <h2>Acceso restringido</h2>
        <p>Necesitas permisos de administrador para acceder a este panel docente.</p>
        <p class="admin-hint">Si eres el profesor, ejecuta en Supabase SQL Editor:</p>
        <pre class="admin-code">update public.profiles
set is_admin = true
where email = 'TU_EMAIL';</pre>
        <div class="admin-actions">
          <button id="admin-logout" class="btn btn-soft">Cerrar sesión</button>
        </div>
      </div>`;
    view.querySelector('#admin-logout')?.addEventListener('click', async () => {
      await signOut();
      window.location.hash = '#/';
      window.location.reload();
    });
    return;
  }

  const sb = getSupabase();
  if (!sb) {
    view.innerHTML = `<div class="card"><h2>Supabase no disponible</h2><p>No se pudo cargar el cliente. Revisa tu conexión.</p></div>`;
    return;
  }

  const user = await getUser();
  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
    <section class="admin-card">
      <header class="admin-head">
        <div>
          <h2>Panel Docente UNACH</h2>
          <p class="admin-sub">Profesor: ${escapeHtml(user?.email ?? '')}</p>
        </div>
        <div class="d-flex" style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;">
          <a href="#/admin/preguntas" class="btn btn-gold btn-small">Gestionar preguntas</a>
          <button id="admin-logout" class="btn btn-soft btn-small" type="button">Cerrar sesión</button>
        </div>
      </header>

      <nav class="admin-nav-tabs" role="tablist">
        <button data-tab="resumen" class="admin-nav-tab is-active" type="button" role="tab">Resumen general</button>
        <button data-tab="alumnos" class="admin-nav-tab" type="button" role="tab">Alumnos</button>
        <button data-tab="temas" class="admin-nav-tab" type="button" role="tab">Rendimiento por tema</button>
      </nav>

      <div id="admin-body"><p class="admin-loading">Cargando métricas y alumnos…</p></div>
    </section>`;

  view.querySelector('#admin-logout')?.addEventListener('click', async () => {
    await signOut();
    window.location.hash = '#/login';
    window.location.reload();
  });

  try {
    const [profilesRes, quizRes, practiceRes] = await Promise.all([
      sb.from('profiles').select('user_id, email, full_name, is_admin, created_at'),
      sb.from('quiz_attempts').select('*').order('created_at', { ascending: false }),
      sb.from('practice_attempts').select('*').order('created_at', { ascending: false }),
    ]);

    const profiles = profilesRes.data ?? [];
    const quizAttempts = quizRes.data ?? [];
    const practiceAttempts = practiceRes.data ?? [];

    renderDashboardContent(view, profiles, quizAttempts, practiceAttempts);
  } catch (err) {
    view.querySelector('#admin-body').innerHTML =
      `<div class="alert-warn"><strong>Error al cargar:</strong> ${escapeHtml(err.message)}<br>
      <small>Posible error de conexión o esquema en Supabase.</small></div>`;
  }
}

function renderDashboardContent(view, profiles, quizAttempts, practiceAttempts) {
  const container = view.querySelector('#admin-body');
  if (!container) return;

  const now = Date.now();
  const INACTIVE_DAYS = 14;
  const AT_RISK_PCT = 60;

  const profileMap = new Map(profiles.map((p) => [p.user_id, p]));

  // Agregaciones por alumno
  const byUser = new Map();
  for (const a of quizAttempts) {
    const cur = byUser.get(a.user_id) || {
      attempts: 0, correct: 0, total: 0, lastAt: null, lawSet: new Set(),
    };
    cur.attempts += 1;
    cur.correct += Number(a.score) || 0;
    cur.total += Number(a.total) || 0;
    cur.lawSet.add(a.law_id);
    const t = new Date(a.created_at).getTime();
    if (!cur.lastAt || t > cur.lastAt) cur.lastAt = t;
    byUser.set(a.user_id, cur);
  }

  // Lista de alumnos completa (a partir de profiles, excluyendo administradores)
  const students = [];
  for (const p of profiles) {
    if (p.is_admin) continue;
    const agg = byUser.get(p.user_id) || {
      attempts: 0, correct: 0, total: 0, lastAt: null, lawSet: new Set(),
    };
    const avg = agg.total ? (agg.correct / agg.total) * 100 : 0;
    const daysSince = agg.lastAt ? (now - agg.lastAt) / 86400000 : Infinity;
    students.push({
      userId: p.user_id,
      email: p.email || '(sin email)',
      name: p.full_name || 'Sin nombre registrado',
      attempts: agg.attempts,
      correct: agg.correct,
      total: agg.total,
      avg,
      lastAt: agg.lastAt ? new Date(agg.lastAt).toISOString() : null,
      inactive: agg.attempts > 0 && daysSince > INACTIVE_DAYS,
      neverStarted: agg.attempts === 0,
      atRisk: agg.attempts > 0 && avg < AT_RISK_PCT,
    });
  }

  // Si hay intentos de usuarios que no estén en profiles por alguna razón:
  for (const [uid, agg] of byUser.entries()) {
    if (!students.some((s) => s.userId === uid)) {
      const p = profileMap.get(uid);
      if (p?.is_admin) continue;
      const avg = agg.total ? (agg.correct / agg.total) * 100 : 0;
      const daysSince = agg.lastAt ? (now - agg.lastAt) / 86400000 : Infinity;
      students.push({
        userId: uid,
        email: p?.email || '(sin email)',
        name: p?.full_name || 'Sin nombre registrado',
        attempts: agg.attempts,
        correct: agg.correct,
        total: agg.total,
        avg,
        lastAt: agg.lastAt ? new Date(agg.lastAt).toISOString() : null,
        inactive: daysSince > INACTIVE_DAYS,
        neverStarted: false,
        atRisk: avg < AT_RISK_PCT,
      });
    }
  }

  students.sort((a, b) => b.avg - a.avg || b.attempts - a.attempts);

  const atRiskStudents = students.filter((s) => s.atRisk || s.inactive);

  // Totales y KPIs
  const totalQuizScore = quizAttempts.reduce((acc, a) => acc + (Number(a.score) || 0), 0);
  const totalQuizQuestions = quizAttempts.reduce((acc, a) => acc + (Number(a.total) || 0), 0);
  const globalAvg = totalQuizQuestions ? Math.round((totalQuizScore / totalQuizQuestions) * 100) : 0;

  const practiceTotal = practiceAttempts.length;
  const practiceCorrect = practiceAttempts.filter((a) => a.correct).length;
  const practiceAvg = practiceTotal ? Math.round((practiceCorrect / practiceTotal) * 100) : 0;

  // Agrupación por sección
  const sectionAgg = {};
  for (const a of quizAttempts) {
    const sec = a.section_id || 'sin-seccion';
    const cur = sectionAgg[sec] || { attempts: 0, correct: 0, total: 0 };
    cur.attempts += 1;
    cur.correct += Number(a.score) || 0;
    cur.total += Number(a.total) || 0;
    sectionAgg[sec] = cur;
  }
  const bySectionRows = Object.entries(sectionAgg).map(([sec, v]) => {
    const pct = v.total ? Math.round((v.correct / v.total) * 100) : 0;
    return [escapeHtml(sectionLabel(sec)), v.attempts, `${pct}%`];
  });

  // Últimos 10 intentos
  const recentAttempts = quizAttempts.slice(0, 10);
  const recentHtml = recentAttempts.length === 0
    ? '<p class="admin-empty">Sin intentos de quiz registrados aún.</p>'
    : renderTable(
        ['Alumno', 'Correo', 'Sección', 'Ley / Subtema', 'Puntaje', 'Fecha'],
        recentAttempts.map((a) => {
          const profile = profileMap.get(a.user_id);
          return [
            escapeHtml(profile?.full_name || '–'),
            escapeHtml(profile?.email || '(sin email)'),
            escapeHtml(sectionLabel(a.section_id || '')),
            escapeHtml(a.law_name || a.law_id || ''),
            `${a.score}/${a.total}`,
            fmtDate(a.created_at),
          ];
        })
      );

  // Desglose por leyes
  const byLaw = new Map();
  for (const a of quizAttempts) {
    const key = `${a.section_id}::${a.law_id}`;
    const cur = byLaw.get(key) || {
      sectionId: a.section_id, lawId: a.law_id, lawName: a.law_name,
      attempts: 0, correct: 0, total: 0,
    };
    cur.attempts += 1;
    cur.correct += Number(a.score) || 0;
    cur.total += Number(a.total) || 0;
    byLaw.set(key, cur);
  }
  const lawRows = [...byLaw.values()].sort((a, b) => {
    if (a.sectionId !== b.sectionId) return a.sectionId.localeCompare(b.sectionId);
    return (a.lawName || '').localeCompare(b.lawName || '');
  });

  // Práctica libre agregada
  const practiceAgg = new Map();
  for (const a of practiceAttempts) {
    const cur = practiceAgg.get(a.topic) || { topic: a.topic, total: 0, correct: 0 };
    cur.total += 1;
    if (a.correct) cur.correct += 1;
    practiceAgg.set(a.topic, cur);
  }
  const practiceRows = [...practiceAgg.values()]
    .sort((a, b) => (b.total - b.correct) - (a.total - a.correct));

  // Render inicial de las 3 pestañas
  container.innerHTML = `
    <!-- TAB 1: RESUMEN -->
    <div id="tab-pane-resumen" class="admin-tab-pane">
      <section class="kpi-row">
        <div class="kpi-card">
          <span class="kpi-num">${students.length}</span>
          <span class="kpi-label">alumnos inscritos</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-num">${quizAttempts.length}</span>
          <span class="kpi-label">intentos de quiz</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-num">${globalAvg}%</span>
          <span class="kpi-label">promedio global</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-num">${practiceTotal}</span>
          <span class="kpi-label">práctica libre (${practiceAvg}% aciertos)</span>
        </div>
      </section>

      <section class="admin-section">
        <h3>Actividad por sección</h3>
        ${bySectionRows.length === 0
          ? '<p class="admin-empty">Sin actividad registrada en las secciones.</p>'
          : renderTable(['Sección', 'Intentos', 'Tasa de acierto'], bySectionRows)}
      </section>

      <section class="admin-section">
        <h3>Últimos 10 intentos</h3>
        ${recentHtml}
      </section>
    </div>

    <!-- TAB 2: ALUMNOS -->
    <div id="tab-pane-alumnos" class="admin-tab-pane" style="display:none;">
      <section class="admin-section">
        <h3>Alumnos en riesgo (promedio &lt; ${AT_RISK_PCT}% o inactivos más de ${INACTIVE_DAYS} días)</h3>
        ${atRiskStudents.length === 0
          ? '<p class="admin-empty">Sin alumnos en riesgo.</p>'
          : renderTable(
              ['Nombre', 'Correo', 'Intentos', 'Promedio', 'Último intento', 'Diagnóstico'],
              atRiskStudents.map((r) => [
                escapeHtml(r.name),
                escapeHtml(r.email),
                r.attempts,
                r.attempts ? `${Math.round(r.avg)}%` : '–',
                fmtDate(r.lastAt),
                `<span class="pill ${r.atRisk ? 'pill-danger' : 'pill-warn'}">${r.atRisk ? 'Bajo rendimiento' : 'Inactivo'}</span>`,
              ])
            )}
      </section>

      <section class="admin-section">
        <div class="admin-title-row" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem;margin-bottom:1rem;">
          <h3>Directorio de Alumnos (${students.length})</h3>
          <input type="search" id="admin-student-search" placeholder="Buscar por nombre o correo…" style="max-width:320px;padding:.5rem .75rem;border:1px solid var(--line-strong);border-radius:var(--radius-sm);background:var(--paper);font-size:.9rem;">
        </div>
        <div id="admin-students-table-wrap">
          ${renderStudentsTable(students)}
        </div>
      </section>
    </div>

    <!-- TAB 3: RENDIMIENTO POR TEMA -->
    <div id="tab-pane-temas" class="admin-tab-pane" style="display:none;">
      <section class="admin-section">
        <h3>Desglose de resultados por ley y subtema</h3>
        ${lawRows.length === 0
          ? '<p class="admin-empty">Sin cuestionarios respondidos aún.</p>'
          : renderTable(
              ['Sección', 'Tema / Ley', 'Intentos', 'Aciertos / Total', 'Tasa de acierto'],
              lawRows.map((r) => [
                escapeHtml(sectionLabel(r.sectionId)),
                escapeHtml(r.lawName || r.lawId),
                r.attempts,
                `${r.correct}/${r.total}`,
                `<strong>${fmtPct(r.correct, r.total)}</strong>`,
              ])
            )}
      </section>

      <section class="admin-section">
        <h3>Práctica libre — Métodos con mayor índice de error</h3>
        ${practiceRows.length === 0
          ? '<p class="admin-empty">Sin intentos de práctica libre registrados.</p>'
          : renderTable(
              ['Regla / Método detectado', 'Intentos', 'Aciertos', 'Acierto %'],
              practiceRows.map((r) => [
                escapeHtml(r.topic),
                r.total,
                r.correct,
                `${r.total ? Math.round((r.correct / r.total) * 100) : 0}%`,
              ])
            )}
      </section>
    </div>
  `;

  // Manejo de tabs
  const tabButtons = view.querySelectorAll('.admin-nav-tab');
  const panes = {
    resumen: view.querySelector('#tab-pane-resumen'),
    alumnos: view.querySelector('#tab-pane-alumnos'),
    temas: view.querySelector('#tab-pane-temas'),
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      const target = btn.getAttribute('data-tab');
      Object.entries(panes).forEach(([k, pane]) => {
        if (pane) pane.style.display = k === target ? 'block' : 'none';
      });
    });
  });

  // Filtro en vivo de alumnos
  const searchInput = view.querySelector('#admin-student-search');
  searchInput?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = q
      ? students.filter((s) => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q))
      : students;
    const tableWrap = view.querySelector('#admin-students-table-wrap');
    if (tableWrap) {
      tableWrap.innerHTML = renderStudentsTable(filtered);
    }
  });
}

function renderStudentsTable(studentList) {
  if (studentList.length === 0) {
    return '<p class="admin-empty">No se encontraron alumnos con ese criterio de búsqueda.</p>';
  }
  return renderTable(
    ['Nombre', 'Correo', 'Intentos', 'Aciertos / Total', 'Promedio', 'Última actividad', 'Estado'],
    studentList.map((s) => {
      let statusBadge = '<span class="pill pill-ok">Activo</span>';
      if (s.neverStarted) {
        statusBadge = '<span class="pill pill-warn">Sin intentos</span>';
      } else if (s.atRisk) {
        statusBadge = '<span class="pill pill-danger">Bajo promedio</span>';
      } else if (s.inactive) {
        statusBadge = '<span class="pill pill-warn">Inactivo</span>';
      }
      return [
        `<strong>${escapeHtml(s.name)}</strong>`,
        escapeHtml(s.email),
        s.attempts,
        `${s.correct}/${s.total}`,
        `<strong>${s.attempts ? Math.round(s.avg) + '%' : '–'}</strong>`,
        fmtDate(s.lastAt),
        statusBadge,
      ];
    })
  );
}

function renderTable(headers, rows) {
  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}
