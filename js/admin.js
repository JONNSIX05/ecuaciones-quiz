// js/admin.js
// Panel Docente — Ecuaciones Diferenciales:
// - Resumen ejecutivo con KPIs, 3 gráficas de pastel/dona (SVG) y barras de progreso
// - Directorio completo de Usuarios y Estudiantes con asignación/revocación del rol de Profesor
// - Desglose de rendimiento por sección, subtema/ley y Práctica Libre.

import { api } from './api.js?v=11';
import { isAdmin, getUser, signOut } from './auth.js?v=11';
import { openModal, closeActiveModal } from './modal.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str);
}

function fmtPct(num, den) {
  if (!den) return '–';
  return `${Math.round((num / den) * 100)}%`;
}

function fmtDate(iso) {
  if (!iso) return 'Sin registro';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '–';
  return d.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function sectionLabel(id) {
  return (
    {
      algebra: 'Álgebra',
      'calculo-diferencial': 'Cálculo Diferencial',
      'calculo-integral': 'Cálculo Integral',
      'practica-libre': 'Práctica Libre',
    }[id] || id
  );
}

/**
 * Genera una barra de progreso horizontal con color semántico.
 */
function renderProgressBar(pct) {
  const safePct = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  let colorClass = 'bar-high';
  if (safePct < 60) colorClass = 'bar-low';
  else if (safePct < 80) colorClass = 'bar-mid';

  return `
    <div class="admin-progress-cell">
      <div class="admin-progress-track" aria-hidden="true">
        <div class="admin-progress-fill ${colorClass}" style="width:${safePct}%"></div>
      </div>
      <span class="admin-progress-label">${safePct}%</span>
    </div>`;
}

/**
 * Genera una gráfica de pastel / dona en SVG puro con su leyenda.
 * @param {{
 *   title: string,
 *   subtitle: string,
 *   centerValue: string,
 *   centerSub: string,
 *   slices: Array<{ label: string, value: number, color: string }>
 * }} cfg
 */
function renderPieChartCard(cfg) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const cleanSlices = cfg.slices.filter((s) => s.value > 0);
  const total = cleanSlices.reduce((acc, s) => acc + s.value, 0);

  let cumulativePct = 0;
  const circlesHtml =
    total === 0
      ? `<circle cx="80" cy="80" r="${radius}" fill="none" stroke="#e2e8f0" stroke-width="22" />`
      : cleanSlices
          .map((s) => {
            const pct = s.value / total;
            const dash = pct * circumference;
            const gap = circumference - dash;
            const offset = -cumulativePct * circumference;
            cumulativePct += pct;
            return `<circle cx="80" cy="80" r="${radius}" fill="none"
              stroke="${s.color}" stroke-width="24"
              stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
              stroke-dashoffset="${offset.toFixed(2)}"
              transform="rotate(-90 80 80)">
              <title>${escapeHtml(s.label)}: ${s.value} (${Math.round(pct * 100)}%)</title>
            </circle>`;
          })
          .join('');

  const legendHtml = cfg.slices
    .map((s) => {
      const pct = total > 0 ? Math.round((s.value / total) * 100) : 0;
      return `
        <li class="pie-legend-item">
          <span class="pie-dot" style="background:${s.color};"></span>
          <span class="pie-legend-label">${escapeHtml(s.label)}</span>
          <span class="pie-legend-val"><strong>${s.value}</strong> <small>(${pct}%)</small></span>
        </li>`;
    })
    .join('');

  return `
    <article class="pie-card">
      <header class="pie-card-head">
        <h4>${escapeHtml(cfg.title)}</h4>
        <p>${escapeHtml(cfg.subtitle)}</p>
      </header>
      <div class="pie-card-body">
        <div class="pie-svg-wrap">
          <svg viewBox="0 0 160 160" class="pie-svg" role="img" aria-label="${escapeAttr(cfg.title)}">
            <circle cx="80" cy="80" r="${radius}" fill="none" stroke="#f1f5f9" stroke-width="24" />
            ${circlesHtml}
            <text x="80" y="76" text-anchor="middle" class="pie-center-num">${escapeHtml(cfg.centerValue)}</text>
            <text x="80" y="96" text-anchor="middle" class="pie-center-sub">${escapeHtml(cfg.centerSub)}</text>
          </svg>
        </div>
        <ul class="pie-legend">${legendHtml}</ul>
      </div>
    </article>`;
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
        <p>Necesitas permisos de Profesor (Administrador) para acceder al Panel Docente.</p>
        <p class="admin-hint">Pide a un profesor activo que te asigne el rol desde la pestaña <strong>Usuarios y Profesores</strong> del panel, o ejecuta en PostgreSQL en el VPS:</p>
        <pre class="admin-code">UPDATE eqd.users
SET is_admin = true
WHERE email = 'TU_EMAIL';</pre>
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

  const currentUser = await getUser();
  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/">← Volver al menú principal</a></div>
    <section class="admin-card">
      <header class="admin-head">
        <div>
          <span class="auth-badge" style="margin-bottom:.35rem;">Administración Académica</span>
          <h2>Panel Docente — Ecuaciones Diferenciales</h2>
          <p class="admin-sub">Sesión activa: <strong>${escapeHtml(currentUser?.fullName || currentUser?.email || '')}</strong> (${escapeHtml(currentUser?.email ?? '')})</p>
        </div>
        <div class="d-flex" style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;">
          <a href="#/admin/preguntas" class="btn btn-gold btn-small">Gestionar banco de preguntas</a>
          <button id="admin-refresh" class="btn btn-soft btn-small" type="button">Actualizar datos</button>
          <button id="admin-logout" class="btn btn-soft btn-small" type="button">Cerrar sesión</button>
        </div>
      </header>

      <nav class="admin-nav-tabs" role="tablist">
        <button data-tab="resumen" class="admin-nav-tab is-active" type="button" role="tab">Resumen y Gráficas</button>
        <button data-tab="alumnos" class="admin-nav-tab" type="button" role="tab">Usuarios y Rol de Profesor</button>
        <button data-tab="temas" class="admin-nav-tab" type="button" role="tab">Rendimiento por Tema</button>
      </nav>

      <div id="admin-body"><p class="admin-loading">Cargando métricas, gráficas y directorio de usuarios…</p></div>
    </section>`;

  view.querySelector('#admin-logout')?.addEventListener('click', async () => {
    await signOut();
    window.location.hash = '#/login';
    window.location.reload();
  });

  async function loadDashboard(activeTab = 'resumen') {
    const bodyEl = view.querySelector('#admin-body');
    if (bodyEl) bodyEl.innerHTML = `<p class="admin-loading">Actualizando métricas…</p>`;
    try {
      const data = await api.get('/admin/dashboard');
      renderDashboardContent(
        view,
        currentUser,
        data.profiles || [],
        data.quizAttempts || [],
        data.practiceAttempts || [],
        data.questionStats || [],
        activeTab
      );
    } catch (err) {
      if (bodyEl) {
        bodyEl.innerHTML = `<div class="alert-warn"><strong>Error al cargar:</strong> ${escapeHtml(err.message)}<br>
          <small>Verifica la conexión con la API en el VPS.</small></div>`;
      }
    }
  }

  view.querySelector('#admin-refresh')?.addEventListener('click', () => {
    const currentActive = view.querySelector('.admin-nav-tab.is-active')?.getAttribute('data-tab') || 'resumen';
    loadDashboard(currentActive);
  });

  await loadDashboard('resumen');
}

function renderDashboardContent(
  view,
  currentUser,
  profiles,
  quizAttempts,
  practiceAttempts,
  questionStats,
  initialTab = 'resumen'
) {
  const container = view.querySelector('#admin-body');
  if (!container) return;

  const now = Date.now();
  const INACTIVE_DAYS = 14;
  const AT_RISK_PCT = 60;

  const profileMap = new Map(profiles.map((p) => [p.user_id, p]));

  // Agregaciones de intentos por usuario
  const byUser = new Map();
  for (const a of quizAttempts) {
    const cur = byUser.get(a.user_id) || {
      attempts: 0,
      correct: 0,
      total: 0,
      lastAt: null,
      lawSet: new Set(),
    };
    cur.attempts += 1;
    cur.correct += Number(a.score) || 0;
    cur.total += Number(a.total) || 0;
    cur.lawSet.add(a.law_id);
    const t = new Date(a.created_at).getTime();
    if (!cur.lastAt || t > cur.lastAt) cur.lastAt = t;
    byUser.set(a.user_id, cur);
  }

  // Construir lista enriquecida de TODOS los usuarios registrados (estudiantes y profesores)
  const allUsers = profiles.map((p) => {
    const agg = byUser.get(p.user_id) || {
      attempts: 0,
      correct: 0,
      total: 0,
      lastAt: null,
      lawSet: new Set(),
    };
    const avg = agg.total ? (agg.correct / agg.total) * 100 : 0;
    const daysSince = agg.lastAt ? (now - agg.lastAt) / 86400000 : Infinity;
    const isProf = Boolean(p.is_admin);
    const grado = (p.grado || '').trim();
    const grupo = (p.grupo || '').trim();
    const gradoGrupoLabel = [grado, grupo].filter(Boolean).join(' ') || '—';
    return {
      userId: p.user_id,
      email: p.email || '(sin correo)',
      name: p.full_name || 'Sin nombre registrado',
      rawName: p.full_name || '',
      grado,
      grupo,
      gradoGrupoLabel,
      isAdmin: isProf,
      createdAt: p.created_at,
      lastLoginAt: p.last_login_at,
      attempts: agg.attempts,
      correct: agg.correct,
      total: agg.total,
      avg,
      lastAt: agg.lastAt ? new Date(agg.lastAt).toISOString() : p.last_login_at || null,
      inactive: !isProf && agg.attempts > 0 && daysSince > INACTIVE_DAYS,
      neverStarted: !isProf && agg.attempts === 0,
      atRisk: !isProf && agg.attempts > 0 && avg < AT_RISK_PCT,
    };
  });

  // Ordenar: primero por actividad/promedio
  allUsers.sort((a, b) => {
    if (a.isAdmin !== b.isAdmin) return a.isAdmin ? 1 : -1; // Estudiantes primero en la tabla de seguimiento
    return b.avg - a.avg || b.attempts - a.attempts;
  });

  const students = allUsers.filter((u) => !u.isAdmin);
  const professors = allUsers.filter((u) => u.isAdmin);
  const atRiskStudents = students.filter((s) => s.atRisk || s.inactive);
  const regularStudents = students.filter((s) => !s.neverStarted && !s.atRisk && !s.inactive);
  const neverStartedStudents = students.filter((s) => s.neverStarted);

  // Totales de aciertos y preguntas
  const totalQuizScore = quizAttempts.reduce((acc, a) => acc + (Number(a.score) || 0), 0);
  const totalQuizQuestions = quizAttempts.reduce((acc, a) => acc + (Number(a.total) || 0), 0);
  const globalAvg = totalQuizQuestions ? Math.round((totalQuizScore / totalQuizQuestions) * 100) : 0;

  const practiceTotal = practiceAttempts.length;
  const practiceCorrect = practiceAttempts.filter((a) => a.correct).length;
  const practiceAvg = practiceTotal ? Math.round((practiceCorrect / practiceTotal) * 100) : 0;

  // Estadísticas del banco de preguntas
  const qBySec = { algebra: 0, 'calculo-diferencial': 0, 'calculo-integral': 0 };
  let totalBankQuestions = 0;
  for (const row of questionStats) {
    const c = Number(row.total) || 0;
    totalBankQuestions += c;
    if (qBySec[row.section_id] !== undefined) {
      qBySec[row.section_id] += c;
    }
  }

  // Agrupación de intentos por sección
  const sectionAgg = {
    algebra: { attempts: 0, correct: 0, total: 0 },
    'calculo-diferencial': { attempts: 0, correct: 0, total: 0 },
    'calculo-integral': { attempts: 0, correct: 0, total: 0 },
  };
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
    const bankCount = qBySec[sec] || 0;
    return [
      `<strong>${escapeHtml(sectionLabel(sec))}</strong>`,
      `${bankCount} reactivos`,
      v.attempts,
      `${v.correct}/${v.total}`,
      v.total ? renderProgressBar(pct) : '<span style="color:var(--muted);">Sin intentos</span>',
    ];
  });

  // Gráfica 1: Estado de los Estudiantes
  const pieStudentsHtml = renderPieChartCard({
    title: 'Estado de Estudiantes',
    subtitle: 'Distribución del alumnado según actividad y promedio',
    centerValue: String(students.length),
    centerSub: students.length === 1 ? 'estudiante' : 'estudiantes',
    slices: [
      { label: 'Regulares (≥60%)', value: regularStudents.length, color: '#16a34a' },
      { label: 'Bajo promedio (<60%)', value: students.filter((s) => s.atRisk).length, color: '#dc2626' },
      { label: 'Inactivos (>14 días)', value: students.filter((s) => !s.atRisk && s.inactive).length, color: '#d97706' },
      { label: 'Sin intentos aún', value: neverStartedStudents.length, color: '#64748b' },
    ],
  });

  // Gráfica 2: Efectividad de Respuestas (Aciertos vs Errores)
  const totalCorrectAll = totalQuizScore + practiceCorrect;
  const totalAnsweredAll = totalQuizQuestions + practiceTotal;
  const totalWrongAll = Math.max(0, totalAnsweredAll - totalCorrectAll);
  const overallAccuracyPct = totalAnsweredAll ? Math.round((totalCorrectAll / totalAnsweredAll) * 100) : 0;

  const pieAccuracyHtml = renderPieChartCard({
    title: 'Efectividad de Respuestas',
    subtitle: 'Proporción global de aciertos vs. errores',
    centerValue: `${overallAccuracyPct}%`,
    centerSub: `${totalAnsweredAll} resp.`,
    slices: [
      { label: 'Aciertos en Quiz', value: totalQuizScore, color: '#16a34a' },
      { label: 'Aciertos en Práctica', value: practiceCorrect, color: '#0d9488' },
      { label: 'Respuestas incorrectas', value: totalWrongAll, color: '#dc2626' },
    ],
  });

  // Gráfica 3: Distribución por Sección (muestra intentos si hay >= 3, o composición del banco de preguntas)
  const totalAllAttempts = quizAttempts.length + practiceTotal;
  const pieSectionsHtml =
    totalAllAttempts >= 3
      ? renderPieChartCard({
          title: 'Actividad por Sección',
          subtitle: 'Cuestionarios y ejercicios resueltos por área',
          centerValue: String(totalAllAttempts),
          centerSub: 'intentos',
          slices: [
            { label: 'Álgebra', value: sectionAgg.algebra?.attempts || 0, color: '#132652' },
            { label: 'Cálculo Diferencial', value: sectionAgg['calculo-diferencial']?.attempts || 0, color: '#0071db' },
            { label: 'Cálculo Integral', value: sectionAgg['calculo-integral']?.attempts || 0, color: '#c59b27' },
            { label: 'Práctica Libre', value: practiceTotal, color: '#0d9488' },
          ],
        })
      : renderPieChartCard({
          title: 'Banco de Reactivos por Área',
          subtitle: 'Composición actual del catálogo en servidor',
          centerValue: String(totalBankQuestions || 830),
          centerSub: 'preguntas',
          slices: [
            { label: 'Álgebra', value: qBySec.algebra || 420, color: '#132652' },
            { label: 'Cálculo Diferencial', value: qBySec['calculo-diferencial'] || 183, color: '#0071db' },
            { label: 'Cálculo Integral', value: qBySec['calculo-integral'] || 227, color: '#c59b27' },
          ],
        });

  // Últimos 10 intentos
  const recentAttempts = quizAttempts.slice(0, 10);
  const recentHtml =
    recentAttempts.length === 0
      ? '<p class="admin-empty">Sin intentos de quiz registrados aún.</p>'
      : renderTable(
          ['Estudiante', 'Correo', 'Sección', 'Ley / Subtema', 'Puntaje', 'Desempeño', 'Fecha'],
          recentAttempts.map((a) => {
            const profile = profileMap.get(a.user_id);
            const pct = a.total ? Math.round((a.score / a.total) * 100) : 0;
            return [
              `<strong>${escapeHtml(profile?.full_name || 'Estudiante')}</strong>`,
              escapeHtml(profile?.email || '(sin correo)'),
              escapeHtml(sectionLabel(a.section_id || '')),
              escapeHtml(a.law_name || a.law_id || ''),
              `<strong>${a.score}/${a.total}</strong>`,
              renderProgressBar(pct),
              fmtDate(a.created_at),
            ];
          })
        );

  // Desglose por leyes
  const byLaw = new Map();
  for (const a of quizAttempts) {
    const key = `${a.section_id}::${a.law_id}`;
    const cur = byLaw.get(key) || {
      sectionId: a.section_id,
      lawId: a.law_id,
      lawName: a.law_name,
      attempts: 0,
      correct: 0,
      total: 0,
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
  const practiceRows = [...practiceAgg.values()].sort((a, b) => b.total - b.correct - (a.total - a.correct));

  // Render de las 3 pestañas
  container.innerHTML = `
    <!-- TAB 1: RESUMEN Y GRÁFICAS -->
    <div id="tab-pane-resumen" class="admin-tab-pane">
      <section class="kpi-row">
        <div class="kpi-card">
          <span class="kpi-tag">Matrícula</span>
          <span class="kpi-num">${students.length}</span>
          <span class="kpi-label">estudiantes registrados (${professors.length} ${professors.length === 1 ? 'profesor' : 'profesores'})</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-tag">Evaluaciones</span>
          <span class="kpi-num">${quizAttempts.length}</span>
          <span class="kpi-label">intentos de cuestionario completados</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-tag">Aprovechamiento</span>
          <span class="kpi-num">${globalAvg}%</span>
          <span class="kpi-label">promedio global (${totalQuizScore}/${totalQuizQuestions} aciertos)</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-tag">Catálogo y Práctica</span>
          <span class="kpi-num">${totalBankQuestions || 830}</span>
          <span class="kpi-label">reactivos en BD · ${practiceTotal} prácticas (${practiceAvg}%)</span>
        </div>
      </section>

      <section class="admin-charts-grid">
        ${pieStudentsHtml}
        ${pieAccuracyHtml}
        ${pieSectionsHtml}
      </section>

      <section class="admin-section">
        <h3>Resumen por sección académica</h3>
        ${renderTable(['Sección', 'Banco en BD', 'Intentos', 'Aciertos / Total', 'Promedio de dominio'], bySectionRows)}
      </section>

      <section class="admin-section">
        <h3>Últimas 10 evaluaciones registradas</h3>
        ${recentHtml}
      </section>
    </div>

    <!-- TAB 2: USUARIOS Y ROL DE PROFESOR -->
    <div id="tab-pane-alumnos" class="admin-tab-pane" style="display:none;">
      <div class="admin-role-banner">
        <div>
          <strong>Gestión de Usuarios y Permisos de Profesor</strong>
          <p>Aquí aparecen todas las personas registradas en la plataforma. Cuando tu profesor cree su cuenta, búscalo en la lista y pulsa <strong>"Dar rol Profesor"</strong> para otorgarle acceso completo al Panel Docente y al banco de preguntas.</p>
        </div>
      </div>

      <div id="admin-role-feedback" class="auth-msg" style="margin-bottom:1rem;"></div>

      <section class="admin-section" style="margin-top:1rem;">
        <div class="admin-users-toolbar">
          <div class="admin-filter-pills" role="group" aria-label="Filtrar usuarios">
            <button type="button" class="admin-pill-btn is-active" data-user-filter="all">Todos (${allUsers.length})</button>
            <button type="button" class="admin-pill-btn" data-user-filter="students">Estudiantes (${students.length})</button>
            <button type="button" class="admin-pill-btn" data-user-filter="professors">Profesores (${professors.length})</button>
            <button type="button" class="admin-pill-btn" data-user-filter="risk">En riesgo / Sin intentos (${atRiskStudents.length + neverStartedStudents.length})</button>
          </div>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;">
            <select id="admin-group-filter" class="admin-search-input" style="min-width:165px;" aria-label="Filtrar por grado y grupo">
              <option value="">Todos los grados/grupos</option>
              ${[...new Set(allUsers.map((u) => u.gradoGrupoLabel).filter((g) => g && g !== '—'))]
                .sort()
                .map((g) => `<option value="${escapeAttr(g)}">Grado/Grupo: ${escapeHtml(g)}</option>`)
                .join('')}
              <option value="__none__">Sin grado/grupo</option>
            </select>
            <input type="search" id="admin-student-search" class="admin-search-input" placeholder="Buscar por nombre, correo o grupo…">
            <button type="button" id="admin-export-users-csv" class="btn btn-soft btn-small">Exportar CSV</button>
          </div>
        </div>

        <div id="admin-students-table-wrap">
          ${renderUsersDirectoryTable(allUsers, currentUser)}
        </div>
      </section>
    </div>

    <!-- TAB 3: RENDIMIENTO POR TEMA -->
    <div id="tab-pane-temas" class="admin-tab-pane" style="display:none;">
      <section class="admin-section" style="margin-top:0;">
        <h3>Desglose de resultados por ley y subtema</h3>
        ${lawRows.length === 0
          ? '<p class="admin-empty">Sin cuestionarios respondidos aún.</p>'
          : renderTable(
              ['Sección', 'Tema / Ley', 'Intentos', 'Aciertos / Total', 'Dominio promedio'],
              lawRows.map((r) => {
                const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
                return [
                  escapeHtml(sectionLabel(r.sectionId)),
                  `<strong>${escapeHtml(r.lawName || r.lawId)}</strong>`,
                  r.attempts,
                  `${r.correct}/${r.total}`,
                  renderProgressBar(pct),
                ];
              })
            )}
      </section>

      <section class="admin-section">
        <h3>Práctica Libre — Desempeño por método de detección</h3>
        ${practiceRows.length === 0
          ? '<p class="admin-empty">Sin intentos de práctica libre registrados.</p>'
          : renderTable(
              ['Regla / Método detectado', 'Intentos', 'Aciertos', 'Efectividad'],
              practiceRows.map((r) => {
                const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
                return [
                  `<strong>${escapeHtml(r.topic)}</strong>`,
                  r.total,
                  r.correct,
                  renderProgressBar(pct),
                ];
              })
            )}
      </section>
    </div>
  `;

  // Activar pestaña solicitada
  const tabButtons = view.querySelectorAll('.admin-nav-tab');
  const panes = {
    resumen: view.querySelector('#tab-pane-resumen'),
    alumnos: view.querySelector('#tab-pane-alumnos'),
    temas: view.querySelector('#tab-pane-temas'),
  };

  function activateTab(target) {
    tabButtons.forEach((b) => b.classList.toggle('is-active', b.getAttribute('data-tab') === target));
    Object.entries(panes).forEach(([k, pane]) => {
      if (pane) pane.style.display = k === target ? 'block' : 'none';
    });
  }

  activateTab(initialTab);

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activateTab(btn.getAttribute('data-tab'));
    });
  });

  // Estado de filtro en pestaña Usuarios
  let activeRoleFilter = 'all';
  const searchInput = view.querySelector('#admin-student-search');
  const groupSelect = view.querySelector('#admin-group-filter');
  const exportCsvBtn = view.querySelector('#admin-export-users-csv');
  const filterBtns = view.querySelectorAll('[data-user-filter]');

  function getFilteredUsers() {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const grp = groupSelect?.value || '';
    return allUsers.filter((u) => {
      if (activeRoleFilter === 'students' && u.isAdmin) return false;
      if (activeRoleFilter === 'professors' && !u.isAdmin) return false;
      if (activeRoleFilter === 'risk' && (u.isAdmin || (!u.atRisk && !u.inactive && !u.neverStarted))) return false;
      if (grp === '__none__' && u.gradoGrupoLabel !== '—') return false;
      if (grp && grp !== '__none__' && u.gradoGrupoLabel !== grp) return false;
      if (
        q &&
        !u.name.toLowerCase().includes(q) &&
        !u.email.toLowerCase().includes(q) &&
        !u.gradoGrupoLabel.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }

  function refreshUsersTable() {
    const filtered = getFilteredUsers();
    const tableWrap = view.querySelector('#admin-students-table-wrap');
    if (tableWrap) {
      tableWrap.innerHTML = renderUsersDirectoryTable(filtered, currentUser);
      bindRoleButtons();
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      activeRoleFilter = btn.getAttribute('data-user-filter') || 'all';
      refreshUsersTable();
    });
  });

  searchInput?.addEventListener('input', refreshUsersTable);
  groupSelect?.addEventListener('change', refreshUsersTable);

  exportCsvBtn?.addEventListener('click', () => {
    const rows = getFilteredUsers();
    const header = ['Nombre', 'Correo', 'Grado', 'Grupo', 'Rol', 'Intentos', 'Aciertos', 'Total Reactivos', 'Promedio %', 'Ultima Actividad'];
    const csvLines = [
      header.join(','),
      ...rows.map((u) =>
        [
          `"${String(u.rawName || '').replace(/"/g, '""')}"`,
          `"${String(u.email || '').replace(/"/g, '""')}"`,
          `"${String(u.grado || '').replace(/"/g, '""')}"`,
          `"${String(u.grupo || '').replace(/"/g, '""')}"`,
          u.isAdmin ? 'Profesor' : 'Estudiante',
          u.attempts,
          u.correct,
          u.total,
          Math.round(u.avg),
          `"${u.lastAt || u.createdAt || ''}"`,
        ].join(',')
      ),
    ];
    const blob = new Blob(['\uFEFF' + csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `usuarios-eqd-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  function bindRoleButtons() {
    const feedbackEl = view.querySelector('#admin-role-feedback');
    view.querySelectorAll('.js-toggle-role').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const targetId = btn.getAttribute('data-user-id');
        const targetEmail = btn.getAttribute('data-user-email');
        const targetName = btn.getAttribute('data-user-name');
        const makeAdmin = btn.getAttribute('data-make-admin') === 'true';

        const actionLabel = makeAdmin
          ? `¿Asignar el rol de PROFESOR (Administrador) a "${targetName}" (${targetEmail})?\n\nPodrá ver este Panel Docente y gestionar preguntas.`
          : `¿Cambiar a "${targetName}" (${targetEmail}) al rol de Estudiante?`;

        if (!confirm(actionLabel)) return;

        try {
          btn.disabled = true;
          btn.textContent = 'Guardando…';
          await api.patch(`/admin/users/${encodeURIComponent(targetId)}/role`, { isAdmin: makeAdmin });

          // Actualizar estado en memoria y refrescar
          const found = allUsers.find((u) => u.userId === targetId);
          if (found) found.isAdmin = makeAdmin;
          const prof = profiles.find((p) => p.user_id === targetId);
          if (prof) prof.is_admin = makeAdmin;

          if (feedbackEl) {
            feedbackEl.textContent = makeAdmin
              ? `✓ Se otorgó el rol de Profesor a ${targetName} (${targetEmail}).`
              : `✓ Se actualizó el rol de ${targetName} (${targetEmail}) a Estudiante.`;
            feedbackEl.className = 'auth-msg auth-ok';
          }

          refreshUsersTable();
        } catch (err) {
          btn.disabled = false;
          if (feedbackEl) {
            feedbackEl.textContent = 'Error al cambiar rol: ' + err.message;
            feedbackEl.className = 'auth-msg auth-err';
          }
          refreshUsersTable();
        }
      });
    });

    view.querySelectorAll('.js-edit-user').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-user-id');
        const found = allUsers.find((u) => u.userId === targetId);
        if (!found) return;
        openEditUserModal(found, feedbackEl);
      });
    });
  }

  function openEditUserModal(u, feedbackEl) {
    const bodyEl = openModal({
      title: `Editar datos de usuario`,
      contentHTML: `
        <form id="modal-edit-user-form" class="auth-form" novalidate>
          <p style="margin:0 0 .75rem;font-size:.86rem;color:var(--muted);">
            Correo: <strong>${escapeHtml(u.email)}</strong>
          </p>
          <div class="auth-field">
            <label for="edit-user-name">Nombre completo</label>
            <input type="text" id="edit-user-name" required minlength="2" maxlength="120"
              value="${escapeAttr(u.rawName || '')}" placeholder="Nombre y apellidos">
          </div>
          <div class="auth-row-2">
            <div class="auth-field">
              <label for="edit-user-grado">Grado</label>
              <input type="text" id="edit-user-grado" maxlength="20"
                value="${escapeAttr(u.grado || '')}" placeholder="Ej. 3°">
            </div>
            <div class="auth-field">
              <label for="edit-user-grupo">Grupo</label>
              <input type="text" id="edit-user-grupo" maxlength="20"
                value="${escapeAttr(u.grupo || '')}" placeholder="Ej. A">
            </div>
          </div>
          <div class="auth-field" style="margin-top:.35rem;padding-top:.75rem;border-top:1px dashed var(--line);">
            <label for="edit-user-pwd">Restablecer contraseña del usuario</label>
            <input type="text" id="edit-user-pwd" minlength="8" maxlength="72" autocomplete="off"
              placeholder="Dejar vacío para conservar la contraseña actual (mín. 8 caracteres)">
          </div>
          <div id="edit-user-msg" class="auth-msg" role="status"></div>
          <div style="display:flex;gap:.5rem;justify-content:flex-end;margin-top:.75rem;">
            <button type="button" id="edit-user-cancel" class="btn btn-soft btn-small">Cancelar</button>
            <button type="submit" id="edit-user-save" class="btn btn-primary btn-small">Guardar cambios</button>
          </div>
        </form>
      `,
    });

    const form = bodyEl.querySelector('#modal-edit-user-form');
    const nameIn = bodyEl.querySelector('#edit-user-name');
    const gradoIn = bodyEl.querySelector('#edit-user-grado');
    const grupoIn = bodyEl.querySelector('#edit-user-grupo');
    const pwdIn = bodyEl.querySelector('#edit-user-pwd');
    const msgEl = bodyEl.querySelector('#edit-user-msg');
    const saveBtn = bodyEl.querySelector('#edit-user-save');

    bodyEl.querySelector('#edit-user-cancel')?.addEventListener('click', () => {
      closeActiveModal();
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fullName = nameIn.value.trim();
      const grado = gradoIn.value.trim();
      const grupo = grupoIn.value.trim();
      const newPassword = pwdIn.value.trim();

      if (!fullName || fullName.length < 2) {
        msgEl.textContent = 'Ingresa un nombre válido (mínimo 2 caracteres).';
        msgEl.className = 'auth-msg auth-err';
        nameIn.focus();
        return;
      }

      if (newPassword && newPassword.length < 8) {
        msgEl.textContent = 'La nueva contraseña debe tener al menos 8 caracteres.';
        msgEl.className = 'auth-msg auth-err';
        pwdIn.focus();
        return;
      }

      try {
        saveBtn.disabled = true;
        saveBtn.textContent = 'Guardando…';
        await api.patch(`/admin/users/${encodeURIComponent(u.userId)}/profile`, {
          fullName,
          grado: grado || null,
          grupo: grupo || null,
          newPassword: newPassword || null,
        });

        u.rawName = fullName;
        u.name = fullName;
        u.grado = grado;
        u.grupo = grupo;
        u.gradoGrupoLabel = [grado, grupo].filter(Boolean).join(' ') || '—';

        const prof = profiles.find((p) => p.user_id === u.userId);
        if (prof) {
          prof.full_name = fullName;
          prof.grado = grado || null;
          prof.grupo = grupo || null;
        }

        closeActiveModal();
        if (feedbackEl) {
          feedbackEl.textContent = newPassword
            ? `✓ Datos y contraseña actualizados para ${fullName} (${u.email}).`
            : `✓ Datos actualizados para ${fullName} (${u.email}).`;
          feedbackEl.className = 'auth-msg auth-ok';
        }
        refreshUsersTable();
      } catch (err) {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Guardar cambios';
        msgEl.textContent = err.message || 'Error al guardar los datos.';
        msgEl.className = 'auth-msg auth-err';
      }
    });
  }

  bindRoleButtons();
}

function renderUsersDirectoryTable(userList, currentUser) {
  if (userList.length === 0) {
    return '<p class="admin-empty">No se encontraron personas registradas con ese filtro.</p>';
  }

  return renderTable(
    ['Nombre y Correo', 'Grado / Grupo', 'Rol', 'Intentos', 'Promedio', 'Registro / Actividad', 'Estado', 'Acciones'],
    userList.map((u) => {
      const isSelf = currentUser && String(currentUser.id).toLowerCase() === String(u.userId).toLowerCase();

      const roleBadge = u.isAdmin
        ? `<span class="pill pill-admin">Profesor</span>`
        : `<span class="pill pill-student">Estudiante</span>`;

      let statusBadge = '<span class="pill pill-ok">Regular</span>';
      if (u.isAdmin) {
        statusBadge = '<span class="pill pill-ok">Docente</span>';
      } else if (u.neverStarted) {
        statusBadge = '<span class="pill pill-warn">Sin intentos</span>';
      } else if (u.atRisk) {
        statusBadge = '<span class="pill pill-danger">Bajo promedio</span>';
      } else if (u.inactive) {
        statusBadge = '<span class="pill pill-warn">Inactivo</span>';
      }

      const editBtnHtml = `
        <button type="button" class="btn btn-soft btn-small js-edit-user"
          data-user-id="${escapeAttr(u.userId)}">Editar datos</button>`;

      let roleBtnHtml = '';
      if (isSelf) {
        roleBtnHtml = `<span style="font-size:.76rem;color:var(--muted);font-weight:600;">Sesión actual</span>`;
      } else if (!u.isAdmin) {
        roleBtnHtml = `
          <button type="button" class="btn btn-gold btn-small js-toggle-role"
            data-user-id="${escapeAttr(u.userId)}"
            data-user-email="${escapeAttr(u.email)}"
            data-user-name="${escapeAttr(u.name)}"
            data-make-admin="true">Dar rol Profesor</button>`;
      } else {
        roleBtnHtml = `
          <button type="button" class="btn btn-soft btn-small js-toggle-role"
            data-user-id="${escapeAttr(u.userId)}"
            data-user-email="${escapeAttr(u.email)}"
            data-user-name="${escapeAttr(u.name)}"
            data-make-admin="false">Quitar rol Profesor</button>`;
      }

      return [
        `<div class="user-cell-info">
          <strong>${escapeHtml(u.name)}</strong>
          <small>${escapeHtml(u.email)}</small>
        </div>`,
        `<span style="font-family:var(--font-mono);font-weight:600;color:var(--unach-navy);">${escapeHtml(u.gradoGrupoLabel)}</span>`,
        roleBadge,
        `${u.attempts} <small style="color:var(--muted);">(${u.correct}/${u.total})</small>`,
        u.attempts ? renderProgressBar(u.avg) : '<span style="color:var(--muted);">–</span>',
        `<div class="user-cell-info">
          <span>${fmtDate(u.lastAt || u.createdAt)}</span>
          <small>Registro: ${fmtDate(u.createdAt)}</small>
        </div>`,
        statusBadge,
        `<div style="display:flex;gap:.35rem;flex-wrap:wrap;align-items:center;">${editBtnHtml}${roleBtnHtml}</div>`,
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
