// app.js — Router por hash + bootstrap + render de vistas (SPA).

import { isReady, render, sanitize } from './latex.js';
import { getResult } from './storage.js';
import {
  selectQuestions,
  balancedSplit,
  resultMessage,
  meterLevel,
  availableByDifficulty,
} from './quiz-engine.js';
import { sections, getSection } from './sections.js';
import { openModal, closeActiveModal, isModalOpen } from './modal.js';
import { renderPracticaLibre } from './practica-libre.js';
import { formulario } from '../data/calculo-diferencial/formulario.js';
import { formulario as formularioIntegral } from '../data/calculo-integral/formulario.js';
import { api, isApiConfigured } from './api.js?v=12';
import {
  getSession,
  getUser,
  signIn,
  signUp,
  signOut,
  isAdmin,
  getCurrentTermsVersion,
  hasAcceptedCurrentTerms,
  acceptTerms,
  requestPasswordReset,
  resetPassword,
  changePassword,
  updateOwnProfile,
} from './auth.js?v=12';
import { TERMS_DEFAULT, termsToHtml } from './terms.js?v=12';
import { saveAttempt } from './results.js?v=12';
import { renderAdminDashboard } from './admin.js?v=12';
import { renderAdminQuestions } from './admin-questions.js?v=12';
import { getLaw as getLawRemote } from './questions.js?v=12';

const view = document.getElementById('view');

// Estado de autenticación del usuario y estado de la partida activa del cuestionario.
let authSession = null;
let quizSession = null;

/* -------------------------------------------------------------
   Utilidades de escape
   ------------------------------------------------------------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* -------------------------------------------------------------
   Render mixto: texto plano + matemáticas en línea con $...$
   ------------------------------------------------------------- */
function renderInlineMath(latex) {
  if (!isReady()) return escapeHtml(latex);
  try {
    return window.katex.renderToString(sanitize(latex), {
      throwOnError: false,
      strict: false,
      trust: false,
      displayMode: false,
    });
  } catch (err) {
    return escapeHtml(latex);
  }
}

function renderMixed(text) {
  const source = String(text ?? '');
  if (!source.includes('$')) return escapeHtml(source);
  const parts = source.split(/\$(.+?)\$/g);
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    html += i % 2 === 0 ? escapeHtml(parts[i]) : renderInlineMath(parts[i]);
  }
  return html;
}

/**
 * Renderiza todos los elementos `[data-latex]` dentro de `root`.
 * @param {HTMLElement} root
 */
function hydrate(root) {
  if (!isReady()) return;
  const nodes = root.querySelectorAll('[data-latex]');
  nodes.forEach((el) => {
    const latex = el.getAttribute('data-latex');
    const display = el.getAttribute('data-display') !== 'inline';
    render(latex, el, { displayMode: display });
  });
}

/* -------------------------------------------------------------
   Barra de usuario global en el header institucional
   ------------------------------------------------------------- */
/* -------------------------------------------------------------
   Barra de usuario global en el header institucional
   ------------------------------------------------------------- */
function updateUserBar(user, isUserAdmin) {
  const bar = document.getElementById('user-bar');
  if (!bar) return;
  if (!user) {
    const isRegisterRoute = (window.location.hash || '').includes('registro');
    const isRecoveryRoute = (window.location.hash || '').includes('recuperar');
    if (isRegisterRoute || isRecoveryRoute) {
      bar.innerHTML = `<a class="btn btn-gold btn-small" href="#/">Iniciar sesión</a>`;
    } else {
      bar.innerHTML = `<a class="btn btn-gold btn-small" href="#/registro">Registrarse</a>`;
    }
    return;
  }
  const adminBadge = isUserAdmin ? `<span class="badge badge-admin">Profesor</span>` : '';
  const adminBtn = isUserAdmin ? `<a class="btn btn-gold btn-small" href="#/admin">Dashboard</a>` : '';
  const displayName = (user.fullName || user.full_name || '').trim();
  const labelText = displayName ? `${displayName} (${user.email})` : user.email;
  bar.innerHTML = `
    <a href="#/perfil" class="user-email-link" title="Mi Perfil (${escapeAttr(labelText)})" style="text-decoration:none;">
      <span class="user-email" style="cursor:pointer;">${escapeHtml(displayName || user.email)}</span>
    </a>
    ${adminBadge}
    <a class="btn btn-soft btn-small" href="#/perfil" title="Panel de estudiante">Mi Perfil</a>
    ${adminBtn}
    <button id="nav-logout-btn" class="btn btn-soft btn-small" type="button">Cerrar sesión</button>
  `;
  bar.querySelector('#nav-logout-btn')?.addEventListener('click', async () => {
    await signOut();
    window.__currentEmail = null;
    window.__isAdmin = false;
    authSession = null;
    quizSession = null;
    updateUserBar(null, false);
    window.location.hash = '#/';
    route();
  });
}

/* -------------------------------------------------------------
   Router
   ------------------------------------------------------------- */
async function route() {
  const hash = window.location.hash || '#/';
  const seg = hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean);

  // Verificacion de sesion en API
  if (isApiConfigured()) {
    if (!authSession || !authSession.user) {
      authSession = await getSession();
      if (authSession) {
        window.__currentEmail = authSession.user?.email || '';
        window.__isAdmin = await isAdmin();
      }
    }

    // Usuario no autenticado: el Login es la página principal
    if (!authSession || !authSession.user) {
      updateUserBar(null, false);
      if (seg[0] === 'registro') {
        renderRegister();
        return;
      }
      if (seg[0] === 'recuperar') {
        renderPasswordRecovery();
        return;
      }
      // Cualquier otra ruta o la raíz (#/) muestra la vista principal de login
      renderLogin();
      return;
    }

    // Siempre mantener la barra superior sincronizada con el usuario autenticado
    updateUserBar(authSession.user, window.__isAdmin);

    // Usuario autenticado que navega a login o registro es llevado al menú
    if (seg[0] === 'login' || seg[0] === 'registro') {
      window.location.hash = '#/';
      return;
    }

    if (seg[0] === 'recuperar') {
      renderPasswordRecovery();
      return;
    }

    if (seg[0] === 'perfil') {
      renderStudentProfile();
      return;
    }
  } else if (seg[0] === 'perfil') {
    renderStudentProfile();
    return;
  }

  // Rutas del profesor
  if (seg[0] === 'admin') {
    if (seg[1] === 'preguntas') {
      renderAdminQuestions(view);
      return;
    }
    renderAdminDashboard(view);
    return;
  }

  if (seg.length === 0) {
    renderMenu();
    return;
  }

  const section = getSection(seg[0]);
  if (!section || !section.available || !section.module) {
    renderNotFound();
    return;
  }

  // seg = [sectionId, subId?, lawId?, action?]
  if (seg.length === 1) {
    if (section.id === 'practica-libre') {
      renderPracticaLibre(view);
      return;
    }
    renderSubtemaList(section);
    return;
  }

  const sub = section.module.getSubtema(seg[1]);
  if (!sub) {
    renderNotFound();
    return;
  }

  if (seg.length === 2) {
    if (sub.studyContent) {
      renderStudySection(section, sub);
      return;
    }
    renderLawList(section, sub);
    return;
  }

  const law = section.module.getLaw(seg[1], seg[2]);
  if (!law) {
    renderNotFound();
    return;
  }

  if (seg.length === 3) {
    showQuizLoader(section, sub, law);
    getLawRemote({ sectionId: section.id, subtemaId: sub.id, lawId: law.lawId })
      .then((remoteLaw) => {
        if (!remoteLaw.questions.length) {
          renderNoQuestions(section, sub, law);
          return;
        }
        renderConfig(section, { ...law, questions: remoteLaw.questions }, sub);
      })
      .catch(() => renderQuizLoadError(section, sub, law));
    return;
  }

  if (seg[3] === 'play') {
    showQuizLoader(section, sub, law);
    getLawRemote({ sectionId: section.id, subtemaId: sub.id, lawId: law.lawId })
      .then((remoteLaw) => {
        renderQuiz(section, { ...law, questions: remoteLaw.questions }, sub);
      })
      .catch(() => renderQuizLoadError(section, sub, law));
    return;
  }
  if (seg[3] === 'result') {
    renderResult(section, law, sub);
    return;
  }

  renderNotFound();
}

function renderNotFound() {
  view.innerHTML = `
    <div class="card text-center">
      <h2>No encontrado</h2>
      <p class="mt-1">La ruta no existe.</p>
      <a class="btn btn-primary mt-2" href="#/">Volver al menú</a>
    </div>`;
}

function showQuizLoader(section, sub, law) {
  view.innerHTML = `
    <div class="card text-center quiz-loading-card">
      <p class="quiz-loading">Cargando preguntas…</p>
    </div>`;
}

function renderNoQuestions(section, sub, law) {
  view.innerHTML = `
    <div class="card text-center">
      <h2>Sin preguntas</h2>
      <p>No se encontraron preguntas en el servidor. Contacta al profesor.</p>
      <a class="btn btn-primary mt-2" href="#/${section.id}">← Volver</a>
    </div>`;
}

function renderQuizLoadError(section, sub, law) {
  view.innerHTML = `
    <div class="card text-center">
      <h2>No se pudieron cargar las preguntas</h2>
      <p>Revisa tu conexión a internet e inténtalo de nuevo.</p>
      <button class="btn btn-primary mt-2" id="quiz-retry">Reintentar</button>
      <a class="btn btn-soft mt-2 ml-2" href="#/${section.id}">← Volver</a>
    </div>`;
  view.querySelector('#quiz-retry')?.addEventListener('click', () => route());
}

/* -------------------------------------------------------------
   Vista: menú principal
   ------------------------------------------------------------- */
function renderMenu() {
  const cards = sections
    .map((s) => {
      if (s.available) {
        return `
          <a class="section-card" href="#/${s.id}">
            <span class="index">${s.index}</span>
            <h3>${escapeHtml(s.name)}</h3>
            <p>${escapeHtml(s.desc)}</p>
          </a>`;
      }
      return `
        <div class="section-card is-locked" aria-disabled="true">
          <span class="index">${s.index}</span>
          <h3>${escapeHtml(s.name)}</h3>
          <p>${escapeHtml(s.desc)}</p>
          <span class="badge">Próximamente</span>
        </div>`;
    })
    .join('');

  view.innerHTML = `
    <div class="menu-hero">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;">
        <div>
          <span class="auth-badge">Plataforma de Estudio</span>
          <h2>Módulos de Preparación Matemática</h2>
          <p class="menu-sub">Repasa conceptos teóricos, formularios integrales y resuelve cuestionarios interactivos de opción múltiple.</p>
        </div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
          <a class="btn btn-primary btn-small" href="#/perfil">Ver mi perfil y calificaciones</a>
          ${window.__isAdmin ? '<a class="btn btn-gold btn-small" href="#/admin">Panel Docente</a>' : ''}
        </div>
      </div>
    </div>
    <div class="section-grid">${cards}</div>`;
}

/* -------------------------------------------------------------
   Vista: lista de subtemas
   ------------------------------------------------------------- */
function subtemaBest(sub) {
  let best = null;
  for (const law of sub.laws) {
    const r = getResult(law.lawId);
    if (r && r.total > 0) {
      const pct = r.score / r.total;
      if (best === null || pct > best) best = pct;
    }
  }
  return best;
}

function renderSubtemaList(section) {
  const subs = section.module.getAllSubtemas();
  const cards = subs
    .map((sub, i) => {
      const best = subtemaBest(sub);
      const bestHtml =
        best !== null
          ? `<span class="badge">Mejor: ${Math.round(best * 100)}%</span>`
          : `<span class="badge">Sin intentos</span>`;
      return `
        <a class="section-card" href="#/${section.id}/${sub.id}">
          <span class="index">${String(i + 1).padStart(2, '0')}</span>
          <h3>${escapeHtml(sub.name)}</h3>
          <p>${sub.laws.length} ${sub.laws.length === 1 ? 'ley' : 'leyes'} · ${sub.laws.reduce((n, l) => n + l.questions.length, 0)} preguntas</p>
          ${bestHtml}
        </a>`;
    })
    .join('');

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
    <div class="section-title-row">
      <h2>${escapeHtml(section.module.sectionName)}</h2>
      <span class="count">${subs.length} ${subs.length === 1 ? 'subtema' : 'subtemas'}</span>
    </div>
    <div class="section-grid">${cards}</div>`;
}

/* -------------------------------------------------------------
   Vista: lista de leyes de un subtema
   ------------------------------------------------------------- */
function renderLawList(section, sub) {
  const rows = sub.laws
    .map((law, i) => {
      const number = String(i + 1).padStart(2, '0');
      const best = getResult(law.lawId);
      const bestHtml = best
        ? `<span class="law-best">Mejor<br><strong>${best.score}/${best.total}</strong></span>`
        : '';

      if (law.available) {
        return `
          <a class="law-row" href="#/${section.id}/${sub.id}/${law.lawId}">
            <span class="law-number">${number}</span>
            <span class="law-info">
              <span class="law-name">${escapeHtml(law.lawName)}</span>
              <span class="law-formula" data-latex="${escapeAttr(law.lawFormula)}"></span>
            </span>
            ${bestHtml}
          </a>`;
      }
      return `
        <div class="law-row is-locked" aria-disabled="true">
          <span class="law-number">${number}</span>
          <span class="law-info">
            <span class="law-name">${escapeHtml(law.lawName)}</span>
            <span class="law-formula" data-latex="${escapeAttr(law.lawFormula)}"></span>
          </span>
          <span class="badge">Próximamente</span>
        </div>`;
    })
    .join('');

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/${section.id}">← Volver a los subtemas</a></div>
    <div class="section-title-row">
      <h2>${escapeHtml(section.module.sectionName)} — ${escapeHtml(sub.name)}</h2>
      <span class="count">${sub.laws.length} leyes</span>
    </div>
    <div class="law-list">${rows}</div>`;

  hydrate(view);
}

/* -------------------------------------------------------------
   Vista: pantalla de estudio (previo al quiz)
   ------------------------------------------------------------- */
function renderStudySection(section, sub) {
  const study = sub.studyContent;
  const form = getSectionFormulario(section);
  const groupsHtml = study.groups
    .map((group) => {
      let items = [];
      if (Array.isArray(group.items)) {
        items = group.items;
      } else if (group.sectionIndex !== undefined) {
        const data = form.sections[group.sectionIndex];
        items = data ? data.items : [];
      }
      if (!items.length) return '';
      const itemsHtml = items
        .map(
          (item) => `
            <li class="formula-row">
              <span class="formula-id">${escapeHtml(item.id)}</span>
              <span class="formula-math" data-latex="${escapeAttr(item.formula)}"></span>
              <span class="formula-desc">${escapeHtml(item.desc)}</span>
            </li>`
        )
        .join('');
      return `
        <section class="formula-group">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="formula-list">${itemsHtml}</ul>
        </section>`;
    })
    .join('');

  const law = sub.laws[0];

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/${section.id}">← Volver a ${escapeHtml(section.module.sectionName)}</a></div>
    <div class="study-section">
      <header class="study-head">
        <h2>${escapeHtml(sub.name)}</h2>
        <p class="study-prereq">${escapeHtml(law.prerequisites)}</p>
        <p class="study-intro">${escapeHtml(study.intro)}</p>
      </header>

      <div class="study-formulario">${groupsHtml}</div>

      <div class="study-cta">
        <a class="btn btn-primary" href="#/${section.id}/${sub.id}/${law.lawId}">
          ${escapeHtml(study.ctaLabel)}
        </a>
      </div>
    </div>`;

  hydrate(view);
}

/* -------------------------------------------------------------
   Vista: configuración
   ------------------------------------------------------------- */
const DIFF_LABELS = {
  balanced: 'Equilibrado',
  easy: 'Solo fácil',
  medium: 'Solo medio',
  hard: 'Solo difícil',
};

function renderConfig(section, law, sub) {
  if (!law.available) {
    renderNotFound();
    return;
  }
  const total = law.questions.length;
  const avail = availableByDifficulty(law);
  const hintsAvailable = isHintsSection(section);

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/${section.id}/${sub.id}">← ${sub.studyContent ? 'Volver al estudio' : 'Volver a las leyes'}</a></div>
    <div class="config-card">
      <div class="config-head">
        <h2>${escapeHtml(law.lawName)}</h2>
        <div class="law-formula-big" data-latex="${escapeAttr(law.lawFormula)}"></div>
        <p class="prereq">${escapeHtml(law.prerequisites)}</p>
      </div>

      <div class="config-group">
        <label for="count">Número de preguntas</label>
        <div class="mix-row">
          <input type="range" id="count" min="1" max="${total}" value="5">
          <output id="count-out">5</output>
        </div>
      </div>

      <div class="config-group">
        <label>Nivel de dificultad</label>
        <div class="mode-grid">
          ${modeOption('balanced', 'Equilibrado', 'mezcla de niveles', true)}
          ${modeOption('easy', 'Solo fácil', `${avail.easy} disponibles`)}
          ${modeOption('medium', 'Solo medio', `${avail.medium} disponibles`)}
          ${modeOption('hard', 'Solo difícil', `${avail.hard} disponibles`)}
          ${modeOption('custom', 'Personalizado', 'elige la mezcla')}
        </div>
      </div>

      ${
        hintsAvailable
          ? `
      <div class="config-group">
        <label class="checkbox-row">
          <input type="checkbox" id="hints-toggle" checked>
          <span>
            Permitir consultar el formulario durante el quiz
            <small>Útil para practicar. Desactívalo para modo examen.</small>
          </span>
        </label>
      </div>`
          : ''
      }

      <div class="custom-mix" id="custom-mix">
        ${mixSlider('easy', 'Fáciles', avail.easy)}
        ${mixSlider('medium', 'Medias', avail.medium)}
        ${mixSlider('hard', 'Difíciles', avail.hard)}
        <p class="mix-total" id="mix-total"></p>
      </div>

      <button id="start-btn" class="btn btn-primary btn-block">Iniciar</button>
    </div>`;

  hydrate(view);

  const countRange = view.querySelector('#count');
  const countOut = view.querySelector('#count-out');
  const radios = view.querySelectorAll('input[name="diff-mode"]');
  const customMix = view.querySelector('#custom-mix');

  function syncCountMax() {
    const mode = view.querySelector('input[name="diff-mode"]:checked').value;
    if (mode === 'easy' || mode === 'medium' || mode === 'hard') {
      countRange.max = String(avail[mode]);
    } else {
      countRange.max = String(total);
    }
    if (Number(countRange.value) > Number(countRange.max)) {
      countRange.value = countRange.max;
    }
    countOut.textContent = countRange.value;
  }

  function syncMix() {
    const easy = readMix('easy');
    const medium = readMix('medium');
    const hard = readMix('hard');
    const sum = easy + medium + hard;
    const totalEl = view.querySelector('#mix-total');
    if (sum < 1) {
      totalEl.textContent = 'Selecciona al menos 1 pregunta.';
      totalEl.classList.add('is-error');
    } else {
      totalEl.textContent = `Total: ${sum} preguntas`;
      totalEl.classList.remove('is-error');
    }
  }

  radios.forEach((r) => {
    r.addEventListener('change', () => {
      const isCustom = r.value === 'custom';
      customMix.classList.toggle('is-visible', isCustom);
      view.querySelector('#count').closest('.config-group').style.display = isCustom
        ? 'none'
        : '';
      if (!isCustom) syncCountMax();
      else syncMix();
    });
  });

  countRange.addEventListener('input', () => {
    countOut.textContent = countRange.value;
  });

  ['easy', 'medium', 'hard'].forEach((d) => {
    const input = view.querySelector(`#mix-${d}`);
    const out = view.querySelector(`#mix-${d}-out`);
    if (input) {
      input.addEventListener('input', () => {
        out.textContent = input.value;
        syncMix();
      });
    }
  });

  view.querySelector('#start-btn').addEventListener('click', () => {
    const mode = view.querySelector('input[name="diff-mode"]:checked').value;
    let distribution;
    let label;

    if (mode === 'custom') {
      distribution = {
        easy: readMix('easy'),
        medium: readMix('medium'),
        hard: readMix('hard'),
      };
      const sum = distribution.easy + distribution.medium + distribution.hard;
      if (sum < 1) return;
      label = 'Personalizado';
    } else if (mode === 'balanced') {
      const count = clampInt(readRange('#count'));
      distribution = balancedSplit(count);
      label = 'Equilibrado';
    } else {
      const count = Math.min(clampInt(readRange('#count')), avail[mode]);
      distribution = { easy: 0, medium: 0, hard: 0 };
      distribution[mode] = count;
      label = DIFF_LABELS[mode];
    }

    const questions = selectQuestions(law, distribution);
    if (!questions.length) return;

    const hintsToggle = view.querySelector('#hints-toggle');

    quizSession = {
      section,
      law,
      sub,
      questions,
      distribution,
      index: 0,
      score: 0,
      answers: [],
      answered: false,
      difficultyLabel: label,
      withHints: hintsToggle ? hintsToggle.checked : false,
    };
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}/play`;
  });
}

function modeOption(value, label, sub, checked = false) {
  return `
    <label class="mode-option">
      <input type="radio" name="diff-mode" value="${value}" ${checked ? 'checked' : ''}>
      <span class="mode-label">${escapeHtml(label)}<span class="sub">${escapeHtml(sub)}</span></span>
    </label>`;
}

function mixSlider(diff, label, max) {
  return `
    <div class="mix-row">
      <span class="mix-label">${escapeHtml(label)}</span>
      <input type="range" id="mix-${diff}" min="0" max="${max}" value="0">
      <output id="mix-${diff}-out">0</output>
    </div>`;
}

function readMix(diff) {
  const el = view.querySelector(`#mix-${diff}`);
  return el ? clampInt(el.value) : 0;
}

function readRange(selector) {
  const el = view.querySelector(selector);
  return el ? clampInt(el.value) : 0;
}

function clampInt(n) {
  const v = Math.floor(Number(n));
  return Number.isFinite(v) && v > 0 ? v : 0;
}

/* -------------------------------------------------------------
   Formulario (pista) — Cálculo Diferencial e Integral
   ------------------------------------------------------------- */
function getSectionFormulario(section) {
  return section.id === 'calculo-integral' ? formularioIntegral : formulario;
}

function isHintsSection(section) {
  return section.id === 'calculo-diferencial' || section.id === 'calculo-integral';
}

function buildFormularioHtml(form) {
  return `
    <p class="modal-intro">${escapeHtml(form.intro)}</p>
    ${form.sections
      .map(
        (group) => `
      <section class="formula-group">
        <h3>${escapeHtml(group.title)}</h3>
        <ul class="formula-list">
          ${group.items
            .map(
              (item) => `
            <li class="formula-row">
              <span class="formula-id">${escapeHtml(item.id)}</span>
              <span class="formula-math" data-latex="${escapeAttr(item.formula)}"></span>
              <span class="formula-desc">${escapeHtml(item.desc)}</span>
            </li>`
            )
            .join('')}
        </ul>
      </section>`
      )
      .join('')}`;
}

function openFormularioModal(section) {
  const form = getSectionFormulario(section);
  const modal = openModal({
    title: form.title,
    contentHTML: buildFormularioHtml(form),
  });
  hydrate(modal.root);
}

/* -------------------------------------------------------------
   Vista: quiz (juego)
   ------------------------------------------------------------- */
function renderQuiz(section, law, sub) {
  if (!quizSession || quizSession.law.lawId !== law.lawId) {
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}`;
    return;
  }

  const total = quizSession.questions.length;
  const q = quizSession.questions[quizSession.index];
  const idx = quizSession.index + 1;
  quizSession.answered = false;

  const showHints =
    Boolean(quizSession.withHints) && isHintsSection(section);

  const optionsHtml = q.options
    .map((opt, i) => {
      const key = i + 1;
      return `
        <button class="option-btn" data-idx="${i}" data-key="${key}" type="button"
          aria-label="Opción ${key}">
          <span class="key" aria-hidden="true">${key}</span>
          <span class="option-latex" data-latex="${escapeAttr(opt.latex)}"></span>
        </button>`;
    })
    .join('');

  const isLast = idx === total;

  view.innerHTML = `
    <div class="quiz-topbar">
      <a class="back-link" href="#/${section.id}/${sub.id}/${law.lawId}">← Salir</a>
      ${showHints ? '<button id="hints-btn" class="btn btn-soft btn-small" type="button">Formulario</button>' : ''}
      <span class="meta">Pregunta ${idx} de ${total} · Aciertos: ${quizSession.score}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width: ${((idx - 1) / total) * 100}%"></div>
    </div>
    <div class="question-card">
      <p class="question-prompt" id="prompt"></p>
      <div class="options-list">${optionsHtml}</div>
      <div id="feedback-slot"></div>
      <div class="quiz-actions">
        <button id="next-btn" class="btn btn-primary" disabled>${isLast ? 'Ver resultados' : 'Siguiente'}</button>
      </div>
    </div>`;

  view.querySelector('#prompt').innerHTML = renderMixed(q.prompt);
  hydrate(view);

  if (showHints) {
    view.querySelector('#hints-btn').addEventListener('click', () => openFormularioModal(section));
  }

  const buttons = view.querySelectorAll('.option-btn');
  const nextBtn = view.querySelector('#next-btn');
  const correctIdx = q.options.findIndex((o) => o.correct);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (quizSession.answered) return;
      quizSession.answered = true;

      const chosen = Number(btn.dataset.idx);
      const isCorrect = chosen === correctIdx;

      buttons.forEach((b) => (b.disabled = true));

      if (isCorrect) {
        btn.classList.add('is-correct');
        quizSession.score += 1;
      } else {
        btn.classList.add('is-wrong');
        buttons[correctIdx].classList.add('is-correct');
      }

      const meta = view.querySelector('.quiz-topbar .meta');
      if (meta) {
        meta.textContent = `Pregunta ${idx} de ${total} · Aciertos: ${quizSession.score}`;
      }

      quizSession.answers.push({ question: q, chosen });

      const slot = view.querySelector('#feedback-slot');
      slot.innerHTML = `
        <div class="feedback ${isCorrect ? 'correct' : 'wrong'}" role="status">
          <div class="feedback-title">${isCorrect ? 'Correcto' : 'Incorrecto'}</div>
          <div class="feedback-body">${renderMixed(q.explanation)}</div>
        </div>`;
      hydrate(slot);

      nextBtn.disabled = false;
      nextBtn.focus();
    });
  });

  nextBtn.addEventListener('click', () => {
    if (quizSession.index + 1 >= total) {
      quizSession.finished = true;
      window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}/result`;
    } else {
      quizSession.index += 1;
      renderQuiz(section, law, sub);
    }
  });
}

/* -------------------------------------------------------------
   Vista: resultados
   ------------------------------------------------------------- */
function renderResult(section, law, sub) {
  if (!quizSession || !quizSession.finished || quizSession.law.lawId !== law.lawId) {
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}`;
    return;
  }

  const { score, answers } = quizSession;
  const total = quizSession.questions.length;
  const level = meterLevel(score, total);

  // Persistencia en la API (con fallback a localStorage) — fire-and-forget.
  saveAttempt({
    sectionId: section.id,
    subtemaId: sub.id,
    lawId: law.lawId,
    lawName: law.lawName,
    score,
    total,
    difficulty: quizSession.difficultyLabel,
  }).catch(() => {});

  const reviewItems = answers
    .map((a) => {
      const correctIdx = a.question.options.findIndex((o) => o.correct);
      const pass = a.chosen === correctIdx;
      const correctLatex = a.question.options[correctIdx].latex;
      return `
        <div class="review-item ${pass ? 'pass' : 'fail'}">
          <span class="review-icon">${pass ? '✓' : '✗'}</span>
          <div class="review-body">
            <div class="review-prompt">${renderMixed(a.question.prompt)}</div>
            <div class="review-answer">Respuesta correcta: <span data-latex="${escapeAttr(correctLatex)}" data-display="inline"></span></div>
          </div>
        </div>`;
    })
    .join('');

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/${section.id}/${sub.id}">← ${sub.studyContent ? 'Volver al estudio' : 'Volver a las leyes'}</a></div>
    <div class="result-card">
      <p class="kicker" style="font-family: var(--font-mono); letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); font-size: 0.75rem;">${escapeHtml(law.lawName)}</p>
      <div class="result-score">${score}<span class="total"> / ${total}</span></div>
      <div class="result-meter ${level === 'high' ? '' : level === 'mid' ? 'is-mid' : 'is-low'}">
        <div class="meter-fill" style="width: ${total ? (score / total) * 100 : 0}%"></div>
      </div>
      <p class="result-message">${escapeHtml(resultMessage(score, total))}</p>
      <div class="review-list">${reviewItems}</div>
      <div class="result-actions">
        <button id="retry-btn" class="btn btn-primary" type="button">Reintentar</button>
        <a class="btn btn-soft" href="#/${section.id}/${sub.id}/${law.lawId}">Otra dificultad</a>
        <a class="btn btn-ghost" href="#/">Menú</a>
      </div>
    </div>`;

  hydrate(view);

  view.querySelector('#retry-btn').addEventListener('click', () => {
    const distribution = quizSession.distribution || {
      easy: 0,
      medium: 0,
      hard: 0,
    };
    const questions = selectQuestions(law, distribution);
    if (!questions.length) return;
    quizSession = {
      section,
      law,
      sub,
      questions,
      distribution,
      index: 0,
      score: 0,
      answers: [],
      answered: false,
      difficultyLabel: quizSession.difficultyLabel,
      withHints: quizSession.withHints,
    };
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}/play`;
  });
}

/* -------------------------------------------------------------
   Atajos de teclado (1-4 para elegir opción, p para formulario)
   ------------------------------------------------------------- */
document.addEventListener('keydown', (e) => {
  if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

  if (e.key === 'p' || e.key === 'P') {
    if (isModalOpen()) {
      closeActiveModal();
      return;
    }
    const hintsBtn = view.querySelector('#hints-btn');
    if (hintsBtn) hintsBtn.click();
    return;
  }

  if (isModalOpen()) return;
  if (!quizSession || quizSession.finished || quizSession.answered) return;
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= 4) {
    const btn = view.querySelector(`.option-btn[data-key="${num}"]`);
    if (btn && !btn.disabled) btn.click();
  }
});

/* -------------------------------------------------------------
   Vista: inicio de sesión (página principal para visitantes)
   ------------------------------------------------------------- */
function renderLogin() {
  view.innerHTML = `
    <div class="login-portal">
      <div class="login-portal-intro">
        <span class="auth-badge">Ecuaciones Diferenciales</span>
        <h1 class="login-portal-title">Quiz de Matemáticas y Ecuaciones Diferenciales</h1>
        <p class="login-portal-desc">Plataforma de evaluación continua y estudio interactivo. Repasa conceptos clave, fórmulas y reactivos de opción múltiple con retroalimentación inmediata.</p>
        <ul class="login-portal-features">
          <li>Álgebra: exponentes, polinomios, trigonometría y números complejos</li>
          <li>Cálculo Diferencial: límites algebraicos y reglas de derivación</li>
          <li>Cálculo Integral: integrales inmediatas, por partes y fracciones parciales</li>
          <li>Práctica Libre: detección de métodos y fórmulas recomendadas</li>
        </ul>
      </div>

      <div class="auth-wrapper">
        <div class="auth-card">
          <header class="auth-header">
            <span class="auth-badge">Acceso a la plataforma</span>
            <h2 class="auth-title">Iniciar sesión</h2>
            <p class="auth-sub">Ingresa con tu correo y contraseña para acceder a los cuestionarios.</p>
          </header>

          <form id="login-form" class="auth-form" novalidate autocomplete="on">
            <div class="auth-field">
              <label for="login-email">Correo electrónico</label>
              <input type="email" id="login-email" name="email" required autocomplete="email" placeholder="correo@ejemplo.com">
            </div>

            <div class="auth-field">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <label for="login-password">Contraseña</label>
                <a href="#/recuperar" class="auth-forgot-link">¿Olvidaste tu contraseña?</a>
              </div>
              <div class="auth-input-wrapper">
                <input type="password" id="login-password" name="password" required autocomplete="current-password" placeholder="Tu contraseña">
                <button type="button" class="auth-pwd-toggle" id="login-pwd-toggle" aria-label="Mostrar contraseña">Ver</button>
              </div>
            </div>

            <div id="login-msg" class="auth-msg" role="status"></div>

            <button id="login-submit" class="btn btn-primary btn-block" type="submit">Iniciar sesión</button>

            <div class="auth-switch">
              ¿No tienes una cuenta aún? <a href="#/registro">Regístrate aquí</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  const form = view.querySelector('#login-form');
  const emailInput = view.querySelector('#login-email');
  const pwdInput = view.querySelector('#login-password');
  const toggleBtn = view.querySelector('#login-pwd-toggle');
  const submitBtn = view.querySelector('#login-submit');
  const msgEl = view.querySelector('#login-msg');

  toggleBtn.addEventListener('click', () => {
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';
    toggleBtn.textContent = isPwd ? 'Ocultar' : 'Ver';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = pwdInput.value;

    if (!email || !password) {
      msgEl.textContent = 'Por favor ingresa tu correo y contraseña.';
      msgEl.className = 'auth-msg auth-err';
      return;
    }

    submitBtn.disabled = true;
    msgEl.textContent = 'Iniciando sesión…';
    msgEl.className = 'auth-msg';

    try {
      const { user, error } = await signIn(email, password);
      if (error) {
        msgEl.textContent = (error.message && error.message.includes('Invalid login credentials'))
          ? 'Correo o contraseña incorrectos.'
          : (error.message || 'Error de autenticación.');
        msgEl.className = 'auth-msg auth-err';
        submitBtn.disabled = false;
        return;
      }

      msgEl.textContent = 'Sesión iniciada. Redirigiendo…';
      msgEl.className = 'auth-msg auth-ok';
      authSession = await getSession();
      window.__currentEmail = user?.email || email;
      window.__isAdmin = await isAdmin();
      updateUserBar(user, window.__isAdmin);
      setTimeout(() => {
        window.location.hash = '#/';
        route();
      }, 300);
    } catch (err) {
      msgEl.textContent = err.message || 'Error inesperado.';
      msgEl.className = 'auth-msg auth-err';
      submitBtn.disabled = false;
    }
  });
}

/* -------------------------------------------------------------
   Vista: registro de cuenta (con nombre, confirmación y términos)
   ------------------------------------------------------------- */
function renderRegister() {
  view.innerHTML = `
    <div class="auth-wrapper">
      <div class="auth-card">
        <header class="auth-header">
          <span class="auth-badge">Nuevo Estudiante</span>
          <h2 class="auth-title">Crear cuenta</h2>
          <p class="auth-sub">Regístrate para guardar tu progreso académico y resolver los cuestionarios.</p>
        </header>

        <form id="reg-form" class="auth-form" novalidate autocomplete="on">
          <div class="auth-field">
            <label for="reg-name">Nombre completo</label>
            <input type="text" id="reg-name" name="name" required minlength="2" maxlength="120" autocomplete="name" placeholder="Tu nombre y apellidos">
          </div>

          <div class="auth-row-2">
            <div class="auth-field">
              <label for="reg-grado">Grado</label>
              <input type="text" id="reg-grado" name="grado" maxlength="20" placeholder="Ej. 3°">
            </div>
            <div class="auth-field">
              <label for="reg-grupo">Grupo</label>
              <input type="text" id="reg-grupo" name="grupo" maxlength="20" placeholder="Ej. A">
            </div>
          </div>

          <div class="auth-field">
            <label for="reg-email">Correo electrónico</label>
            <input type="email" id="reg-email" name="email" required autocomplete="email" placeholder="correo@ejemplo.com">
          </div>

          <div class="auth-field">
            <label for="reg-password">Contraseña</label>
            <div class="auth-input-wrapper">
              <input type="password" id="reg-password" name="password" required minlength="8" autocomplete="new-password" placeholder="Mínimo 8 caracteres">
              <button type="button" class="auth-pwd-toggle" id="reg-pwd-toggle" aria-label="Mostrar contraseña">Ver</button>
            </div>
          </div>

          <div class="auth-field">
            <label for="reg-password-confirm">Confirmar contraseña</label>
            <input type="password" id="reg-password-confirm" name="password-confirm" required minlength="8" autocomplete="new-password" placeholder="Repite tu contraseña">
          </div>

          <div class="auth-terms-box">
            <input type="checkbox" id="reg-terms-check" required>
            <label for="reg-terms-check">
              He leído y acepto los <button type="button" class="terms-link" id="reg-open-terms">Términos y Condiciones</button> y el aviso de privacidad de la plataforma.
            </label>
          </div>

          <div id="reg-msg" class="auth-msg" role="status"></div>

          <button id="reg-submit" class="btn btn-primary btn-block" type="submit">Crear cuenta</button>

          <div class="auth-switch">
            ¿Ya tienes una cuenta? <a href="#/">Inicia sesión aquí</a>
          </div>
        </form>
      </div>
    </div>
  `;

  const form = view.querySelector('#reg-form');
  const nameInput = view.querySelector('#reg-name');
  const gradoInput = view.querySelector('#reg-grado');
  const grupoInput = view.querySelector('#reg-grupo');
  const emailInput = view.querySelector('#reg-email');
  const pwdInput = view.querySelector('#reg-password');
  const pwdConfInput = view.querySelector('#reg-password-confirm');
  const toggleBtn = view.querySelector('#reg-pwd-toggle');
  const termsCheck = view.querySelector('#reg-terms-check');
  const openTermsBtn = view.querySelector('#reg-open-terms');
  const submitBtn = view.querySelector('#reg-submit');
  const msgEl = view.querySelector('#reg-msg');

  toggleBtn.addEventListener('click', () => {
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';
    toggleBtn.textContent = isPwd ? 'Ocultar' : 'Ver';
  });

  openTermsBtn.addEventListener('click', () => {
    openModal({
      title: 'Términos y Condiciones',
      contentHTML: `<div class="terms-modal__content">${termsToHtml(TERMS_DEFAULT)}</div>`,
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fullName = nameInput.value.trim();
    const grado = gradoInput.value.trim();
    const grupo = grupoInput.value.trim();
    const email = emailInput.value.trim();
    const password = pwdInput.value;
    const confirm = pwdConfInput.value;

    if (!fullName || fullName.length < 2) {
      msgEl.textContent = 'Por favor ingresa tu nombre completo.';
      msgEl.className = 'auth-msg auth-err';
      nameInput.focus();
      return;
    }
    if (!email || !password) {
      msgEl.textContent = 'Por favor ingresa correo y contraseña.';
      msgEl.className = 'auth-msg auth-err';
      return;
    }
    if (password.length < 8) {
      msgEl.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      msgEl.className = 'auth-msg auth-err';
      pwdInput.focus();
      return;
    }
    if (password !== confirm) {
      msgEl.textContent = 'Las contraseñas no coinciden.';
      msgEl.className = 'auth-msg auth-err';
      pwdConfInput.focus();
      return;
    }
    if (!termsCheck.checked) {
      msgEl.textContent = 'Debes aceptar los Términos y Condiciones para continuar.';
      msgEl.className = 'auth-msg auth-err';
      termsCheck.focus();
      return;
    }

    submitBtn.disabled = true;
    msgEl.textContent = 'Creando cuenta…';
    msgEl.className = 'auth-msg';

    try {
      const version = await getCurrentTermsVersion();
      const { user, error } = await signUp(email, password, fullName, version, { grado, grupo });
      if (error) {
        msgEl.textContent = error.message || 'Error al crear la cuenta.';
        msgEl.className = 'auth-msg auth-err';
        submitBtn.disabled = false;
        return;
      }
      msgEl.textContent = 'Cuenta creada exitosamente. Redirigiendo…';
      msgEl.className = 'auth-msg auth-ok';
      authSession = await getSession();
      window.__currentEmail = user?.email || email;
      window.__isAdmin = false;
      updateUserBar(user, false);
      setTimeout(() => {
        window.location.hash = '#/';
        route();
      }, 400);
    } catch (err) {
      msgEl.textContent = err.message || 'Error desconocido.';
      msgEl.className = 'auth-msg auth-err';
      submitBtn.disabled = false;
    }
  });
}

/* -------------------------------------------------------------
   Vista: Recuperación de contraseña (pública)
   ------------------------------------------------------------- */
function renderPasswordRecovery() {
  // Extraer token y email si vienen en URL (hash o query)
  const fullHash = window.location.hash || '';
  const qIdx = fullHash.indexOf('?');
  const hashQuery = qIdx !== -1 ? fullHash.slice(qIdx) : '';
  const urlParams = new URLSearchParams(window.location.search || hashQuery);
  const initialToken = urlParams.get('token') || '';
  const initialEmail = urlParams.get('email') || '';

  const defaultTab = initialToken ? 'reset' : 'request';

  view.innerHTML = `
    <div class="auth-wrapper">
      <div class="auth-card">
        <header class="auth-header">
          <span class="auth-badge">Seguridad de la cuenta</span>
          <h2 class="auth-title">Recuperar contraseña</h2>
          <p class="auth-sub">Restaura el acceso a tu cuenta académica para continuar practicando.</p>
        </header>

        <div class="auth-tabs" role="tablist">
          <button type="button" id="tab-btn-request" class="auth-tab-btn ${defaultTab === 'request' ? 'is-active' : ''}" role="tab">1. Solicitar enlace</button>
          <button type="button" id="tab-btn-reset" class="auth-tab-btn ${defaultTab === 'reset' ? 'is-active' : ''}" role="tab">2. Ingresar código/token</button>
        </div>

        <!-- Panel 1: Solicitar código/enlace -->
        <div id="panel-request" style="display:${defaultTab === 'request' ? 'block' : 'none'};">
          <form id="recovery-req-form" class="auth-form" novalidate>
            <div class="auth-field">
              <label for="recovery-req-email">Correo electrónico registrado</label>
              <input type="email" id="recovery-req-email" name="email" required autocomplete="email"
                value="${escapeAttr(initialEmail)}" placeholder="alumno@ejemplo.com">
            </div>

            <p style="font-size:0.84rem;color:var(--muted);line-height:1.4;margin:0;">
              Ingresa el correo con el que te diste de alta. Te enviaremos instrucciones con un token de un solo uso válido por 30 minutos.
            </p>

            <div id="recovery-req-msg" class="auth-msg" role="status"></div>

            <button id="recovery-req-submit" class="btn btn-primary btn-block" type="submit">
              Enviar instrucciones de recuperación
            </button>
          </form>
        </div>

        <!-- Panel 2: Restablecer con código/token -->
        <div id="panel-reset" style="display:${defaultTab === 'reset' ? 'block' : 'none'};">
          <form id="recovery-reset-form" class="auth-form" novalidate>
            <div class="auth-field">
              <label for="recovery-token">Código o token de recuperación</label>
              <input type="text" id="recovery-token" name="token" required minlength="6"
                value="${escapeAttr(initialToken)}" placeholder="Ingresa o pega el token">
            </div>

            <div class="auth-field">
              <label for="recovery-new-password">Nueva contraseña</label>
              <div class="auth-input-wrapper">
                <input type="password" id="recovery-new-password" name="password" required minlength="8"
                  autocomplete="new-password" placeholder="Mínimo 8 caracteres">
                <button type="button" class="auth-pwd-toggle" id="recovery-pwd-toggle" aria-label="Mostrar contraseña">Ver</button>
              </div>
            </div>

            <div class="auth-field">
              <label for="recovery-confirm-password">Confirmar nueva contraseña</label>
              <input type="password" id="recovery-confirm-password" name="confirm-password" required minlength="8"
                autocomplete="new-password" placeholder="Repite la contraseña">
            </div>

            <div id="recovery-reset-msg" class="auth-msg" role="status"></div>

            <button id="recovery-reset-submit" class="btn btn-primary btn-block" type="submit">
              Restablecer contraseña
            </button>
          </form>
        </div>

        <div class="auth-switch">
          ¿Recordaste tu contraseña? <a href="#/">Inicia sesión aquí</a>
        </div>
      </div>
    </div>
  `;

  // Gestión de pestañas
  const tabBtnRequest = view.querySelector('#tab-btn-request');
  const tabBtnReset = view.querySelector('#tab-btn-reset');
  const panelRequest = view.querySelector('#panel-request');
  const panelReset = view.querySelector('#panel-reset');

  function setTab(tab) {
    if (tab === 'request') {
      tabBtnRequest.classList.add('is-active');
      tabBtnReset.classList.remove('is-active');
      panelRequest.style.display = 'block';
      panelReset.style.display = 'none';
    } else {
      tabBtnRequest.classList.remove('is-active');
      tabBtnReset.classList.add('is-active');
      panelRequest.style.display = 'none';
      panelReset.style.display = 'block';
    }
  }

  tabBtnRequest.addEventListener('click', () => setTab('request'));
  tabBtnReset.addEventListener('click', () => setTab('reset'));

  // Toggle de visualización de contraseña
  const newPwdInput = view.querySelector('#recovery-new-password');
  const pwdToggleBtn = view.querySelector('#recovery-pwd-toggle');
  pwdToggleBtn.addEventListener('click', () => {
    const isPwd = newPwdInput.type === 'password';
    newPwdInput.type = isPwd ? 'text' : 'password';
    pwdToggleBtn.textContent = isPwd ? 'Ocultar' : 'Ver';
  });

  // Manejador del Formulario 1: Solicitar
  const reqForm = view.querySelector('#recovery-req-form');
  const reqEmailInput = view.querySelector('#recovery-req-email');
  const reqMsgEl = view.querySelector('#recovery-req-msg');
  const reqSubmitBtn = view.querySelector('#recovery-req-submit');

  reqForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = reqEmailInput.value.trim();
    if (!email || !email.includes('@')) {
      reqMsgEl.textContent = 'Por favor ingresa un correo electrónico válido.';
      reqMsgEl.className = 'auth-msg auth-err';
      reqEmailInput.focus();
      return;
    }

    reqSubmitBtn.disabled = true;
    reqMsgEl.textContent = 'Procesando solicitud…';
    reqMsgEl.className = 'auth-msg';

    try {
      const res = await requestPasswordReset(email);
      if (!res.ok && res.error) {
        reqMsgEl.textContent = res.error.message || 'Error al procesar la solicitud.';
        reqMsgEl.className = 'auth-msg auth-err';
        reqSubmitBtn.disabled = false;
        return;
      }

      reqMsgEl.innerHTML = `
        ✓ ${escapeHtml(res.message || 'Solicitud enviada.')}<br>
        <span style="font-size:0.8rem;color:var(--ink-soft);font-weight:normal;display:block;margin-top:0.35rem;">
          Revisa tu bandeja de entrada o carpeta de spam. Cuando tengas tu código, abre la pestaña <strong>"2. Ingresar código/token"</strong> para definir tu nueva contraseña.
        </span>
      `;
      reqMsgEl.className = 'auth-msg auth-ok';
      reqSubmitBtn.disabled = false;
    } catch (err) {
      reqMsgEl.textContent = err.message || 'Error inesperado.';
      reqMsgEl.className = 'auth-msg auth-err';
      reqSubmitBtn.disabled = false;
    }
  });

  // Manejador del Formulario 2: Restablecer
  const resetForm = view.querySelector('#recovery-reset-form');
  const tokenInput = view.querySelector('#recovery-token');
  const confirmPwdInput = view.querySelector('#recovery-confirm-password');
  const resetMsgEl = view.querySelector('#recovery-reset-msg');
  const resetSubmitBtn = view.querySelector('#recovery-reset-submit');

  resetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = tokenInput.value.trim();
    const password = newPwdInput.value;
    const confirm = confirmPwdInput.value;

    if (!token) {
      resetMsgEl.textContent = 'Ingresa el código o token de recuperación.';
      resetMsgEl.className = 'auth-msg auth-err';
      tokenInput.focus();
      return;
    }
    if (!password || password.length < 8) {
      resetMsgEl.textContent = 'La nueva contraseña debe tener al menos 8 caracteres.';
      resetMsgEl.className = 'auth-msg auth-err';
      newPwdInput.focus();
      return;
    }
    if (password !== confirm) {
      resetMsgEl.textContent = 'Las contraseñas no coinciden.';
      resetMsgEl.className = 'auth-msg auth-err';
      confirmPwdInput.focus();
      return;
    }

    resetSubmitBtn.disabled = true;
    resetMsgEl.textContent = 'Restableciendo contraseña…';
    resetMsgEl.className = 'auth-msg';

    try {
      const res = await resetPassword(token, password);
      if (!res.ok && res.error) {
        resetMsgEl.textContent = res.error.message || 'El token es inválido o ha expirado.';
        resetMsgEl.className = 'auth-msg auth-err';
        resetSubmitBtn.disabled = false;
        return;
      }

      resetMsgEl.textContent = '¡Contraseña restablecida exitosamente! Redirigiendo al inicio de sesión…';
      resetMsgEl.className = 'auth-msg auth-ok';

      setTimeout(() => {
        window.location.hash = '#/';
        route();
      }, 1500);
    } catch (err) {
      resetMsgEl.textContent = err.message || 'Error al actualizar contraseña.';
      resetMsgEl.className = 'auth-msg auth-err';
      resetSubmitBtn.disabled = false;
    }
  });
}

/* -------------------------------------------------------------
   Vista: Panel de Usuario / Dashboard Personal de Estudiante
   ------------------------------------------------------------- */
function renderStudentProgressBar(pct) {
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

function renderStudentDonutCard(cfg) {
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
        <h3>${escapeHtml(cfg.title)}</h3>
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

function fmtShortDate(iso) {
  if (!iso) return 'Reciente';
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

function sectionNameById(secId) {
  return (
    {
      algebra: 'Álgebra',
      'calculo-diferencial': 'Cálculo Diferencial',
      'calculo-integral': 'Cálculo Integral',
      'practica-libre': 'Práctica Libre',
    }[secId] || secId || 'General'
  );
}

function formatDifficultyBadge(diff) {
  const raw = String(diff || 'balanced').trim();
  const norm = raw.toLowerCase();
  if (norm === 'easy' || norm.includes('fácil') || norm.includes('facil')) {
    return `<span class="pill pill-ok">Fácil</span>`;
  }
  if (norm === 'medium' || norm.includes('medio')) {
    return `<span class="pill pill-warn">Medio</span>`;
  }
  if (norm === 'hard' || norm.includes('difícil') || norm.includes('dificil')) {
    return `<span class="pill pill-danger">Difícil</span>`;
  }
  if (norm === 'custom' || norm.includes('personalizado')) {
    return `<span class="pill pill-student">Personalizado</span>`;
  }
  return `<span class="pill pill-student">Equilibrado</span>`;
}

async function renderStudentProfile() {
  const user = authSession?.user || (await getUser());
  if (!user) {
    window.location.hash = '#/';
    route();
    return;
  }

  view.innerHTML = `
    <div class="back-row">
      <a class="back-link" href="#/">← Volver al menú de módulos</a>
    </div>
    <div class="profile-wrapper" style="max-width:1020px;">
      <article class="profile-card">
        <p class="admin-loading">Cargando tu dashboard personal y resultados…</p>
      </article>
    </div>
  `;

  let quizAttempts = [];
  let practiceAttempts = [];

  try {
    const data = await api.get('/attempts/me');
    quizAttempts = Array.isArray(data?.quizAttempts) ? data.quizAttempts : [];
    practiceAttempts = Array.isArray(data?.practiceAttempts) ? data.practiceAttempts : [];
  } catch (_) {
    // Fallback a localStorage si no hay red
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith('eqd:result:')) {
        try {
          const item = JSON.parse(window.localStorage.getItem(k));
          if (item && typeof item.score === 'number' && typeof item.total === 'number') {
            quizAttempts.push({
              section_id: item.sectionId || 'algebra',
              subtema_id: item.subtemaId || '',
              law_id: item.lawId || k.replace('eqd:result:', ''),
              law_name: item.lawName || k.replace('eqd:result:', ''),
              difficulty: item.difficulty || 'balanced',
              score: item.score,
              total: item.total,
              created_at: item.at ? new Date(item.at).toISOString() : null,
            });
          }
        } catch (__) {}
      }
    }
  }

  const fullName = (user.fullName || user.full_name || 'Estudiante').trim();
  const initial = (fullName.charAt(0) || user.email.charAt(0) || 'E').toUpperCase();
  const grado = user.grado || '';
  const grupo = user.grupo || '';
  const gradoGrupo = [grado, grupo].filter(Boolean).join(' ') || 'Sin asignar';
  const roleLabel = window.__isAdmin ? 'Profesor' : 'Estudiante';
  const roleBadgeClass = window.__isAdmin ? 'badge-admin' : 'auth-badge';

  const attemptsCount = quizAttempts.length;
  const totalScore = quizAttempts.reduce((acc, a) => acc + (Number(a.score) || 0), 0);
  const totalQuestions = quizAttempts.reduce((acc, a) => acc + (Number(a.total) || 0), 0);
  const accuracyPct = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  const practiceTotal = practiceAttempts.length;
  const practiceCorrect = practiceAttempts.filter((p) => p.correct).length;
  const practicePct = practiceTotal > 0 ? Math.round((practiceCorrect / practiceTotal) * 100) : 0;

  // Agregación por sección
  const secAgg = {
    algebra: { attempts: 0, correct: 0, total: 0 },
    'calculo-diferencial': { attempts: 0, correct: 0, total: 0 },
    'calculo-integral': { attempts: 0, correct: 0, total: 0 },
  };
  for (const a of quizAttempts) {
    const sId = a.section_id || 'algebra';
    if (!secAgg[sId]) secAgg[sId] = { attempts: 0, correct: 0, total: 0 };
    secAgg[sId].attempts += 1;
    secAgg[sId].correct += Number(a.score) || 0;
    secAgg[sId].total += Number(a.total) || 0;
  }

  // Agregación por ley/subtema
  const byLaw = new Map();
  for (const a of quizAttempts) {
    const key = `${a.section_id || ''}::${a.law_id || ''}`;
    const cur = byLaw.get(key) || {
      sectionId: a.section_id || '',
      subtemaId: a.subtema_id || '',
      lawId: a.law_id || '',
      lawName: a.law_name || a.law_id || 'Tema',
      attempts: 0,
      correct: 0,
      total: 0,
      bestPct: 0,
      lastAt: a.created_at,
    };
    cur.attempts += 1;
    cur.correct += Number(a.score) || 0;
    cur.total += Number(a.total) || 0;
    const thisPct = a.total ? Math.round((Number(a.score) / Number(a.total)) * 100) : 0;
    if (thisPct > cur.bestPct) cur.bestPct = thisPct;
    byLaw.set(key, cur);
  }
  const lawList = [...byLaw.values()].sort((a, b) => {
    const avgA = a.total ? a.correct / a.total : 0;
    const avgB = b.total ? b.correct / b.total : 0;
    return avgA - avgB; // Mostrar primero los temas que necesitan más refuerzo
  });

  // Gráfica 1: Efectividad personal
  const totalRightAll = totalScore + practiceCorrect;
  const totalAskedAll = totalQuestions + practiceTotal;
  const totalWrongAll = Math.max(0, totalAskedAll - totalRightAll);
  const globalPersonalPct = totalAskedAll > 0 ? Math.round((totalRightAll / totalAskedAll) * 100) : 0;

  const pieAccuracyHtml = renderStudentDonutCard({
    title: 'Efectividad Personal',
    subtitle: 'Proporción de aciertos y errores en tus evaluaciones',
    centerValue: totalAskedAll > 0 ? `${globalPersonalPct}%` : '–',
    centerSub: `${totalAskedAll} reactivos`,
    slices: [
      { label: 'Aciertos en Quiz', value: totalScore, color: '#16a34a' },
      { label: 'Aciertos en Práctica', value: practiceCorrect, color: '#0d9488' },
      { label: 'Por reforzar (errores)', value: totalWrongAll, color: '#dc2626' },
    ],
  });

  // Gráfica 2: Actividad por sección
  const totalSessionsAll = attemptsCount + practiceTotal;
  const pieSectionsHtml = renderStudentDonutCard({
    title: 'Distribución de Estudio',
    subtitle: 'Cuestionarios y prácticas realizados por área',
    centerValue: String(totalSessionsAll),
    centerSub: totalSessionsAll === 1 ? 'actividad' : 'actividades',
    slices: [
      { label: 'Álgebra', value: secAgg.algebra.attempts, color: '#132652' },
      { label: 'Cálculo Diferencial', value: secAgg['calculo-diferencial'].attempts, color: '#0071db' },
      { label: 'Cálculo Integral', value: secAgg['calculo-integral'].attempts, color: '#c59b27' },
      { label: 'Práctica Libre', value: practiceTotal, color: '#0d9488' },
    ],
  });

  const sectionRowsHtml = Object.entries(secAgg)
    .map(([secId, v]) => {
      const pct = v.total > 0 ? Math.round((v.correct / v.total) * 100) : 0;
      return `
        <tr>
          <td><strong>${escapeHtml(sectionNameById(secId))}</strong></td>
          <td>${v.attempts}</td>
          <td>${v.correct} / ${v.total}</td>
          <td>${v.total > 0 ? renderStudentProgressBar(pct) : '<span style="color:var(--muted);">Sin intentos aún</span>'}</td>
          <td><a class="btn btn-soft btn-small" href="#/${escapeAttr(secId)}">Ir a sección</a></td>
        </tr>`;
    })
    .join('');

  const lawsTableHtml =
    lawList.length === 0
      ? `<p class="admin-empty">Aún no has completado ningún cuestionario. <a href="#/">Explora los módulos aquí</a> para comenzar.</p>`
      : `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Sección</th>
                <th>Tema / Ley</th>
                <th>Intentos</th>
                <th>Aciertos</th>
                <th>Mejor Nota</th>
                <th>Dominio Promedio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              ${lawList
                .map((item) => {
                  const avg = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
                  const targetHref =
                    item.sectionId && item.subtemaId && item.lawId
                      ? `#/${item.sectionId}/${item.subtemaId}/${item.lawId}`
                      : item.sectionId
                      ? `#/${item.sectionId}`
                      : '#/';
                  return `
                    <tr>
                      <td>${escapeHtml(sectionNameById(item.sectionId))}</td>
                      <td><strong>${escapeHtml(item.lawName)}</strong></td>
                      <td>${item.attempts}</td>
                      <td>${item.correct}/${item.total}</td>
                      <td><strong>${item.bestPct}%</strong></td>
                      <td>${renderStudentProgressBar(avg)}</td>
                      <td><a class="btn btn-gold btn-small" href="${escapeAttr(targetHref)}">Practicar</a></td>
                    </tr>`;
                })
                .join('')}
            </tbody>
          </table>
        </div>`;

  function renderStudentQuizHistoryRows(list) {
    if (list.length === 0) {
      return `<p class="admin-empty">No se encontraron intentos con ese filtro.</p>`;
    }
    return `
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Sección</th>
              <th>Tema / Ley</th>
              <th>Dificultad</th>
              <th>Puntaje</th>
              <th>Desempeño</th>
            </tr>
          </thead>
          <tbody>
            ${list
              .map((a, idx) => {
                const pct = a.total ? Math.round((Number(a.score) / Number(a.total)) * 100) : 0;
                return `
                  <tr>
                    <td><small style="color:var(--muted);font-family:var(--font-mono);">${list.length - idx}</small></td>
                    <td>${fmtShortDate(a.created_at)}</td>
                    <td>${escapeHtml(sectionNameById(a.section_id))}</td>
                    <td><strong>${escapeHtml(a.law_name || a.law_id)}</strong></td>
                    <td>${formatDifficultyBadge(a.difficulty)}</td>
                    <td><strong>${a.score}/${a.total}</strong></td>
                    <td>${renderStudentProgressBar(pct)}</td>
                  </tr>`;
              })
              .join('')}
          </tbody>
        </table>
      </div>`;
  }

  const recentQuizHtml =
    quizAttempts.length === 0
      ? `<p class="admin-empty">Sin cuestionarios registrados todavía.</p>`
      : `
        <div class="admin-users-toolbar" style="margin-bottom:0.85rem;">
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;">
            <select id="stu-quiz-sec-filter" class="admin-search-input" style="min-width:170px;" aria-label="Filtrar por sección">
              <option value="">Todas las secciones</option>
              <option value="algebra">Álgebra</option>
              <option value="calculo-diferencial">Cálculo Diferencial</option>
              <option value="calculo-integral">Cálculo Integral</option>
            </select>
            <select id="stu-quiz-diff-filter" class="admin-search-input" style="min-width:155px;" aria-label="Filtrar por dificultad">
              <option value="">Todas las dificultades</option>
              <option value="easy">Fácil</option>
              <option value="medium">Medio</option>
              <option value="hard">Difícil</option>
              <option value="balanced">Equilibrado</option>
              <option value="custom">Personalizado</option>
            </select>
            <input type="search" id="stu-quiz-search" class="admin-search-input" placeholder="Buscar por tema o ley…">
          </div>
          <span id="stu-quiz-count" style="font-size:0.82rem;color:var(--muted);font-weight:600;">
            Mostrando ${quizAttempts.length} ${quizAttempts.length === 1 ? 'intento' : 'intentos'}
          </span>
        </div>
        <div id="stu-quiz-history-wrap">
          ${renderStudentQuizHistoryRows(quizAttempts)}
        </div>`;

  const recentPracticeHtml =
    practiceAttempts.length === 0
      ? `<p class="admin-empty">Aún no tienes ejercicios en Práctica Libre. <a href="#/practica-libre">Probar Práctica Libre</a>.</p>`
      : `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Expresión analizada</th>
                <th>Método / Fórmula detectada</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              ${practiceAttempts
                .map(
                  (p, idx) => `
                  <tr>
                    <td><small style="color:var(--muted);font-family:var(--font-mono);">${practiceAttempts.length - idx}</small></td>
                    <td>${fmtShortDate(p.created_at)}</td>
                    <td><code>${escapeHtml(p.input)}</code></td>
                    <td><strong>${escapeHtml(p.topic || 'General')}</strong></td>
                    <td>${
                      p.correct
                        ? '<span class="pill pill-ok">Correcto</span>'
                        : '<span class="pill pill-danger">Incorrecto</span>'
                    }</td>
                  </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>`;

  view.innerHTML = `
    <div class="back-row">
      <a class="back-link" href="#/">← Volver al menú de módulos</a>
    </div>

    <div class="profile-wrapper" style="max-width:1020px;">
      <!-- Tarjeta Principal: Identidad y KPIs del Estudiante -->
      <article class="profile-card">
        <div class="profile-hero">
          <div class="profile-avatar" id="prof-hero-avatar">${escapeHtml(initial)}</div>
          <div class="profile-details">
            <h2 id="prof-hero-name">${escapeHtml(fullName)}</h2>
            <div class="profile-email">${escapeHtml(user.email)}</div>
            <div class="profile-meta-badges">
              <span class="badge ${roleBadgeClass}">${escapeHtml(roleLabel)}</span>
              <span class="badge" id="prof-hero-group">Grado/Grupo: ${escapeHtml(gradoGrupo)}</span>
            </div>
          </div>
          <div>
            <a href="#/" class="btn btn-gold btn-small">Resolver cuestionarios</a>
          </div>
        </div>

        <div class="profile-stats-grid">
          <div class="profile-stat-box">
            <div class="profile-stat-value">${attemptsCount}</div>
            <div class="profile-stat-label">Cuestionarios resueltos</div>
          </div>
          <div class="profile-stat-box">
            <div class="profile-stat-value">${totalScore} / ${totalQuestions}</div>
            <div class="profile-stat-label">Reactivos acertados</div>
          </div>
          <div class="profile-stat-box">
            <div class="profile-stat-value" style="color:${accuracyPct >= 60 ? 'var(--correct)' : 'var(--unach-navy)'};">
              ${totalQuestions > 0 ? accuracyPct + '%' : '–'}
            </div>
            <div class="profile-stat-label">Promedio en cuestionarios</div>
          </div>
          <div class="profile-stat-box">
            <div class="profile-stat-value">${practiceCorrect} / ${practiceTotal}</div>
            <div class="profile-stat-label">Práctica Libre (${practiceTotal > 0 ? practicePct + '%' : '–'})</div>
          </div>
        </div>

        <nav class="admin-nav-tabs" role="tablist" style="margin-top:1.5rem;margin-bottom:0;">
          <button type="button" class="admin-nav-tab is-active" data-prof-tab="resultados" role="tab">
            Mi Dashboard de Resultados
          </button>
          <button type="button" class="admin-nav-tab" data-prof-tab="cuenta" role="tab">
            Editar Datos y Contraseña
          </button>
        </nav>
      </article>

      <!-- PESTAÑA 1: DASHBOARD PERSONAL DE RESULTADOS -->
      <div id="prof-pane-resultados" style="display:flex;flex-direction:column;gap:1.5rem;">
        <section class="admin-charts-grid" style="margin-bottom:0;">
          ${pieAccuracyHtml}
          ${pieSectionsHtml}
        </section>

        <article class="profile-card">
          <h3 style="font-size:1.15rem;color:var(--unach-navy);font-weight:800;margin:0 0 0.85rem;">
            Avance por sección académica
          </h3>
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Sección</th>
                  <th>Intentos</th>
                  <th>Aciertos / Total</th>
                  <th>Dominio promedio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>${sectionRowsHtml}</tbody>
            </table>
          </div>
        </article>

        <article class="profile-card">
          <h3 style="font-size:1.15rem;color:var(--unach-navy);font-weight:800;margin:0 0 0.3rem;">
            Dominio por tema y ley practicada
          </h3>
          <p style="font-size:0.84rem;color:var(--muted);margin:0 0 0.9rem;">
            Ordenado empezando por los temas donde puedes mejorar tu calificación.
          </p>
          ${lawsTableHtml}
        </article>

        <article class="profile-card">
          <h3 style="font-size:1.15rem;color:var(--unach-navy);font-weight:800;margin:0 0 0.85rem;">
            Historial reciente de cuestionarios
          </h3>
          ${recentQuizHtml}
        </article>

        <article class="profile-card">
          <h3 style="font-size:1.15rem;color:var(--unach-navy);font-weight:800;margin:0 0 0.85rem;">
            Historial reciente en Práctica Libre
          </h3>
          ${recentPracticeHtml}
        </article>
      </div>

      <!-- PESTAÑA 2: DATOS PERSONALES Y CAMBIO DE CONTRASEÑA -->
      <div id="prof-pane-cuenta" style="display:none;flex-direction:column;gap:1.5rem;">
        <article class="profile-card">
          <header style="margin-bottom:1.2rem;">
            <h3 style="font-size:1.2rem;color:var(--unach-navy);font-weight:800;margin-bottom:0.25rem;">
              Mis datos académicos
            </h3>
            <p style="font-size:0.88rem;color:var(--muted);margin:0;">
              Mantén actualizado tu nombre completo, grado y grupo para que tu profesor identifique tu progreso.
            </p>
          </header>

          <form id="profile-info-form" class="auth-form" novalidate style="max-width:520px;">
            <div class="auth-field">
              <label for="prof-edit-name">Nombre completo</label>
              <input type="text" id="prof-edit-name" required minlength="2" maxlength="120"
                value="${escapeAttr(user.fullName || user.full_name || '')}" placeholder="Tu nombre y apellidos">
            </div>

            <div class="auth-row-2">
              <div class="auth-field">
                <label for="prof-edit-grado">Grado</label>
                <input type="text" id="prof-edit-grado" maxlength="20"
                  value="${escapeAttr(grado)}" placeholder="Ej. 3°">
              </div>
              <div class="auth-field">
                <label for="prof-edit-grupo">Grupo</label>
                <input type="text" id="prof-edit-grupo" maxlength="20"
                  value="${escapeAttr(grupo)}" placeholder="Ej. A">
              </div>
            </div>

            <div id="prof-info-msg" class="auth-msg" role="status"></div>

            <div>
              <button id="prof-info-submit" class="btn btn-primary" type="submit">
                Guardar mis datos
              </button>
            </div>
          </form>
        </article>

        <article class="profile-card">
          <header style="margin-bottom:1.2rem;">
            <h3 style="font-size:1.2rem;color:var(--unach-navy);font-weight:800;margin-bottom:0.25rem;">
              Cambiar contraseña
            </h3>
            <p style="font-size:0.88rem;color:var(--muted);margin:0;">
              Ingresa tu contraseña actual para definir una nueva clave de acceso.
            </p>
          </header>

          <form id="profile-pwd-form" class="auth-form" novalidate style="max-width:520px;">
            <div class="auth-field">
              <label for="prof-curr-pwd">Contraseña actual</label>
              <div class="auth-input-wrapper">
                <input type="password" id="prof-curr-pwd" name="currentPassword" required autocomplete="current-password" placeholder="Tu contraseña actual">
                <button type="button" class="auth-pwd-toggle" id="prof-curr-toggle">Ver</button>
              </div>
            </div>

            <div class="auth-field">
              <label for="prof-new-pwd">Nueva contraseña</label>
              <div class="auth-input-wrapper">
                <input type="password" id="prof-new-pwd" name="newPassword" required minlength="8" autocomplete="new-password" placeholder="Mínimo 8 caracteres">
                <button type="button" class="auth-pwd-toggle" id="prof-new-toggle">Ver</button>
              </div>
            </div>

            <div class="auth-field">
              <label for="prof-conf-pwd">Confirmar nueva contraseña</label>
              <input type="password" id="prof-conf-pwd" name="confirmPassword" required minlength="8" autocomplete="new-password" placeholder="Repite tu nueva contraseña">
            </div>

            <div id="prof-pwd-msg" class="auth-msg" role="status"></div>

            <div>
              <button id="prof-pwd-submit" class="btn btn-primary" type="submit">
                Guardar nueva contraseña
              </button>
            </div>
          </form>
        </article>

        <article class="profile-card" style="border-left:4px solid var(--wrong);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <div>
              <h4 style="color:var(--ink);font-weight:700;margin-bottom:0.25rem;">Cerrar sesión</h4>
              <p style="color:var(--muted);font-size:0.86rem;margin:0;">
                Finaliza tu sesión activa en este dispositivo para salvaguardar tu cuenta.
              </p>
            </div>
            <button id="profile-logout-btn" class="btn btn-soft" style="color:var(--wrong);border-color:#fca5a5;font-weight:700;" type="button">
              Cerrar sesión
            </button>
          </div>
        </article>
      </div>
    </div>
  `;

  // Navegación entre las 2 pestañas del perfil
  const profTabBtns = view.querySelectorAll('[data-prof-tab]');
  const paneResultados = view.querySelector('#prof-pane-resultados');
  const paneCuenta = view.querySelector('#prof-pane-cuenta');

  profTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-prof-tab');
      profTabBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      if (paneResultados) paneResultados.style.display = target === 'resultados' ? 'flex' : 'none';
      if (paneCuenta) paneCuenta.style.display = target === 'cuenta' ? 'flex' : 'none';
    });
  });

  // Filtros interactivos del historial de cuestionarios del estudiante
  const stuSecFilter = view.querySelector('#stu-quiz-sec-filter');
  const stuDiffFilter = view.querySelector('#stu-quiz-diff-filter');
  const stuSearchIn = view.querySelector('#stu-quiz-search');
  const stuHistoryWrap = view.querySelector('#stu-quiz-history-wrap');
  const stuCountEl = view.querySelector('#stu-quiz-count');

  function matchDiffFilter(rawDiff, filterVal) {
    if (!filterVal) return true;
    const norm = String(rawDiff || 'balanced').toLowerCase();
    if (filterVal === 'easy') return norm === 'easy' || norm.includes('fácil') || norm.includes('facil');
    if (filterVal === 'medium') return norm === 'medium' || norm.includes('medio');
    if (filterVal === 'hard') return norm === 'hard' || norm.includes('difícil') || norm.includes('dificil');
    if (filterVal === 'custom') return norm === 'custom' || norm.includes('personalizado');
    if (filterVal === 'balanced') return norm === 'balanced' || norm.includes('equilibrado');
    return true;
  }

  function applyStudentQuizFilters() {
    if (!stuHistoryWrap) return;
    const secVal = stuSecFilter?.value || '';
    const diffVal = stuDiffFilter?.value || '';
    const q = (stuSearchIn?.value || '').toLowerCase().trim();
    const filtered = quizAttempts.filter((a) => {
      if (secVal && a.section_id !== secVal) return false;
      if (!matchDiffFilter(a.difficulty, diffVal)) return false;
      if (q) {
        const hay = `${a.law_name || ''} ${a.law_id || ''} ${a.subtema_id || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    stuHistoryWrap.innerHTML = renderStudentQuizHistoryRows(filtered);
    if (stuCountEl) {
      stuCountEl.textContent = `Mostrando ${filtered.length} de ${quizAttempts.length} ${quizAttempts.length === 1 ? 'intento' : 'intentos'}`;
    }
  }

  stuSecFilter?.addEventListener('change', applyStudentQuizFilters);
  stuDiffFilter?.addEventListener('change', applyStudentQuizFilters);
  stuSearchIn?.addEventListener('input', applyStudentQuizFilters);

  // Formulario de actualización de Nombre, Grado y Grupo
  const infoForm = view.querySelector('#profile-info-form');
  const editNameIn = view.querySelector('#prof-edit-name');
  const editGradoIn = view.querySelector('#prof-edit-grado');
  const editGrupoIn = view.querySelector('#prof-edit-grupo');
  const infoMsg = view.querySelector('#prof-info-msg');
  const infoSubmit = view.querySelector('#prof-info-submit');

  infoForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newName = editNameIn.value.trim();
    const newGrado = editGradoIn.value.trim();
    const newGrupo = editGrupoIn.value.trim();

    if (!newName || newName.length < 2) {
      infoMsg.textContent = 'Ingresa tu nombre completo (mínimo 2 caracteres).';
      infoMsg.className = 'auth-msg auth-err';
      editNameIn.focus();
      return;
    }

    infoSubmit.disabled = true;
    infoMsg.textContent = 'Guardando cambios…';
    infoMsg.className = 'auth-msg';

    try {
      const res = await updateOwnProfile({
        fullName: newName,
        grado: newGrado || null,
        grupo: newGrupo || null,
      });

      if (!res.ok && res.error) {
        infoMsg.textContent = res.error.message || 'No se pudieron actualizar tus datos.';
        infoMsg.className = 'auth-msg auth-err';
        infoSubmit.disabled = false;
        return;
      }

      if (authSession?.user && res.user) {
        authSession.user = res.user;
      }
      updateUserBar(res.user || user, window.__isAdmin);

      const heroName = view.querySelector('#prof-hero-name');
      const heroAvatar = view.querySelector('#prof-hero-avatar');
      const heroGroup = view.querySelector('#prof-hero-group');
      if (heroName) heroName.textContent = newName;
      if (heroAvatar) heroAvatar.textContent = newName.charAt(0).toUpperCase();
      if (heroGroup) {
        const label = [newGrado, newGrupo].filter(Boolean).join(' ') || 'Sin asignar';
        heroGroup.textContent = `Grado/Grupo: ${label}`;
      }

      infoMsg.textContent = '✓ Tus datos académicos se actualizaron correctamente.';
      infoMsg.className = 'auth-msg auth-ok';
      infoSubmit.disabled = false;
    } catch (err) {
      infoMsg.textContent = err.message || 'Error inesperado al guardar tus datos.';
      infoMsg.className = 'auth-msg auth-err';
      infoSubmit.disabled = false;
    }
  });

  // Toggle visualización para contraseñas en perfil
  const currPwdIn = view.querySelector('#prof-curr-pwd');
  const newPwdIn = view.querySelector('#prof-new-pwd');
  const confPwdIn = view.querySelector('#prof-conf-pwd');
  const currToggle = view.querySelector('#prof-curr-toggle');
  const newToggle = view.querySelector('#prof-new-toggle');

  currToggle?.addEventListener('click', () => {
    const isPwd = currPwdIn.type === 'password';
    currPwdIn.type = isPwd ? 'text' : 'password';
    currToggle.textContent = isPwd ? 'Ocultar' : 'Ver';
  });

  newToggle?.addEventListener('click', () => {
    const isPwd = newPwdIn.type === 'password';
    newPwdIn.type = isPwd ? 'text' : 'password';
    newToggle.textContent = isPwd ? 'Ocultar' : 'Ver';
  });

  // Manejo de cambio de contraseña
  const pwdForm = view.querySelector('#profile-pwd-form');
  const pwdMsg = view.querySelector('#prof-pwd-msg');
  const pwdSubmitBtn = view.querySelector('#prof-pwd-submit');

  pwdForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const currentPassword = currPwdIn.value;
    const newPassword = newPwdIn.value;
    const confirm = confPwdIn.value;

    if (!currentPassword) {
      pwdMsg.textContent = 'Ingresa tu contraseña actual.';
      pwdMsg.className = 'auth-msg auth-err';
      currPwdIn.focus();
      return;
    }
    if (!newPassword || newPassword.length < 8) {
      pwdMsg.textContent = 'La nueva contraseña debe tener al menos 8 caracteres.';
      pwdMsg.className = 'auth-msg auth-err';
      newPwdIn.focus();
      return;
    }
    if (newPassword !== confirm) {
      pwdMsg.textContent = 'La nueva contraseña y su confirmación no coinciden.';
      pwdMsg.className = 'auth-msg auth-err';
      confPwdIn.focus();
      return;
    }

    pwdSubmitBtn.disabled = true;
    pwdMsg.textContent = 'Actualizando contraseña…';
    pwdMsg.className = 'auth-msg';

    try {
      const res = await changePassword(currentPassword, newPassword);
      if (!res.ok && res.error) {
        pwdMsg.textContent = res.error.message || 'Error al actualizar contraseña.';
        pwdMsg.className = 'auth-msg auth-err';
        pwdSubmitBtn.disabled = false;
        return;
      }

      pwdMsg.textContent = '✓ ' + (res.message || 'Contraseña actualizada con éxito.');
      pwdMsg.className = 'auth-msg auth-ok';
      pwdSubmitBtn.disabled = false;
      pwdForm.reset();
    } catch (err) {
      pwdMsg.textContent = err.message || 'Error inesperado al guardar la contraseña.';
      pwdMsg.className = 'auth-msg auth-err';
      pwdSubmitBtn.disabled = false;
    }
  });

  // Botón de cerrar sesión dentro del panel
  view.querySelector('#profile-logout-btn')?.addEventListener('click', async () => {
    if (!confirm('¿Estás seguro de que deseas cerrar sesión?')) return;
    await signOut();
    window.__currentEmail = null;
    window.__isAdmin = false;
    authSession = null;
    quizSession = null;
    updateUserBar(null, false);
    window.location.hash = '#/';
    route();
  });
}

/* -------------------------------------------------------------
   Bootstrap
   ------------------------------------------------------------- */
async function boot() {
  window.addEventListener('hashchange', () => {
    route();
  });

  if (!isReady()) {
    let tries = 0;
    await new Promise((resolve) => {
      const timer = setInterval(() => {
        if (isReady() || ++tries > 50) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  }

  if (isApiConfigured()) {
    authSession = await getSession();
    if (authSession) {
      window.__currentEmail = authSession.user?.email || '';
      window.__isAdmin = await isAdmin();
      updateUserBar(authSession.user, window.__isAdmin);
    } else {
      updateUserBar(null, false);
    }
  }

  route();
}

boot();
