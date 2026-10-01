// js/admin.js
// Dashboard del profesor: KPIs, ranking, alumnos en riesgo, desglose por
// sección/ley y resumen de práctica libre. Solo accesible para is_admin = true.

import { getSupabase } from './supabase.js';
import { isAdmin, getUser, signOut } from './auth.js';
import { renderAdminQuestions } from './admin-questions.js';

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
 * Renderiza el dashboard dentro de `view`.
 * @param {HTMLElement} view
 */
export async function renderAdminDashboard(view) {
  if (!(await isAdmin())) {
    view.innerHTML = `
      <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
      <div class="admin-card">
        <h2>Acceso restringido</h2>
        <p>Necesitas permisos de administrador para acceder a este panel.</p>
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
          <h2>Dashboard del profesor</h2>
          <p class="admin-sub">Sesión iniciada como ${escapeHtml(user?.email ?? '')}</p>
        </div>
        <div class="d-flex" style="display:flex;gap:.5rem;align-items:center;">
          <button id="admin-questions-btn" class="btn btn-soft btn-small" type="button">Gestionar preguntas</button>
          <button id="admin-logout" class="btn btn-soft btn-small" type="button">Cerrar sesión</button>
        </div>
      </header>
      <div id="admin-body"><p class="admin-loading">Cargando datos…</p></div>
    </section>`;
  view.querySelector('#admin-logout')?.addEventListener('click', async () => {
    await signOut();
    window.location.hash = '#/';
    window.location.reload();
  });
  view.querySelector('#admin-questions-btn')?.addEventListener('click', () => {
    renderAdminQuestions(view);
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

    view.querySelector('#admin-body').innerHTML = renderBody(profiles, quizAttempts, practiceAttempts);
  } catch (err) {
    view.querySelector('#admin-body').innerHTML =
      `<div class="alert-warn"><strong>Error al cargar:</strong> ${escapeHtml(err.message)}<br>
      <small>Posible mismatch de schema. Revisa que las columnas coincidan con las esperadas.</small></div>`;
  }
}

function renderBody(profiles, quizAttempts, practiceAttempts) {
  const now = Date.now();
  const INACTIVE_DAYS = 14;
  const AT_RISK_PCT = 60;

  // Mapa de perfil por user_id (para nombres)
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

  // Ranking + Riesgo
  const ranking = [];
  for (const [uid, agg] of byUser.entries()) {
    const p = profileMap.get(uid);
    const avg = agg.total ? (agg.correct / agg.total) * 100 : 0;
    const daysSince = agg.lastAt ? (now - agg.lastAt) / 86400000 : Infinity;
    ranking.push({
      email: p?.email || '(sin email)',
      name: p?.full_name || '',
      attempts: agg.attempts,
      correct: agg.correct,
      total: agg.total,
      avg,
      lastAt: agg.lastAt ? new Date(agg.lastAt).toISOString() : null,
      inactive: daysSince > INACTIVE_DAYS,
      atRisk: avg < AT_RISK_PCT,
    });
  }
  ranking.sort((a, b) => b.avg - a.avg);
  const atRisk = ranking.filter((r) => r.atRisk || r.inactive).sort((a, b) => a.avg - b.avg);

  // Desglose por sección/ley
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

  // Práctica libre — top temas fallados
  const practiceAgg = new Map();
  for (const a of practiceAttempts) {
    const cur = practiceAgg.get(a.topic) || { topic: a.topic, total: 0, correct: 0 };
    cur.total += 1;
    if (a.correct) cur.correct += 1;
    practiceAgg.set(a.topic, cur);
  }
  const practiceRows = [...practiceAgg.values()]
    .sort((a, b) => (b.total - b.correct) - (a.total - a.correct));

  const totals = {
    students: byUser.size,
    attempts: quizAttempts.length,
    avg: (() => {
      let c = 0, t = 0;
      for (const a of quizAttempts) { c += Number(a.score) || 0; t += Number(a.total) || 0; }
      return t ? Math.round((c / t) * 100) : 0;
    })(),
    practiceTotal: practiceAttempts.length,
    practiceCorrect: practiceAttempts.filter((a) => a.correct).length,
  };
  const practiceAvg = totals.practiceTotal
    ? Math.round((totals.practiceCorrect / totals.practiceTotal) * 100)
    : 0;

  return `
    <section class="kpi-row">
      <div class="kpi-card"><span class="kpi-num">${totals.students}</span><span class="kpi-label">alumnos</span></div>
      <div class="kpi-card"><span class="kpi-num">${totals.attempts}</span><span class="kpi-label">intentos de quiz</span></div>
      <div class="kpi-card"><span class="kpi-num">${totals.avg}%</span><span class="kpi-label">promedio global</span></div>
      <div class="kpi-card"><span class="kpi-num">${totals.practiceTotal}</span><span class="kpi-label">práctica libre · ${practiceAvg}% acierto</span></div>
    </section>

    <section class="admin-section">
      <h3>Alumnos en riesgo (promedio &lt; ${AT_RISK_PCT}% o inactivos ${INACTIVE_DAYS}+ días)</h3>
      ${atRisk.length === 0
        ? `<p class="admin-empty">Sin alumnos en riesgo. 🎉</p>`
        : renderTable(['Email', 'Intentos', 'Avg', 'Último intento', 'Estado'],
            atRisk.map((r) => [
              escapeHtml(r.email),
              r.attempts,
              `${Math.round(r.avg)}%`,
              fmtDate(r.lastAt),
              `<span class="pill ${r.atRisk ? 'pill-danger' : 'pill-warn'}">${r.atRisk ? 'bajo' : 'inactivo'}</span>`,
            ]))}
    </section>

    <section class="admin-section">
      <h3>Ranking por promedio</h3>
      ${ranking.length === 0
        ? `<p class="admin-empty">Sin intentos aún.</p>`
        : renderTable(['Email', 'Intentos', 'Aciertos', 'Total', 'Promedio', 'Último intento'],
            ranking.map((r) => [
              escapeHtml(r.email),
              r.attempts,
              r.correct,
              r.total,
              `<strong>${Math.round(r.avg)}%</strong>`,
              fmtDate(r.lastAt),
            ]))}
    </section>

    <section class="admin-section">
      <h3>Desglose por sección y ley</h3>
      ${lawRows.length === 0
        ? `<p class="admin-empty">Sin datos.</p>`
        : renderTable(['Sección', 'Ley', 'Intentos', 'Promedio'],
            lawRows.map((r) => [
              escapeHtml(sectionLabel(r.sectionId)),
              escapeHtml(r.lawName || r.lawId),
              r.attempts,
              fmtPct(r.correct, r.total),
            ]))}
    </section>

    <section class="admin-section">
      <h3>Práctica libre — temas más fallados</h3>
      ${practiceRows.length === 0
        ? `<p class="admin-empty">Sin intentos de práctica libre.</p>`
        : renderTable(['Tema detectado', 'Intentos', 'Aciertos', 'Acierto'],
            practiceRows.map((r) => [
              escapeHtml(r.topic),
              r.total,
              r.correct,
              `${r.total ? Math.round((r.correct / r.total) * 100) : 0}%`,
            ]))}
    </section>
  `;
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
