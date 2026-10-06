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
import { getSupabase, isSupabaseReady } from './supabase.js';
import { getSession, signIn, signUp, signOut, isAdmin, getCurrentTermsVersion, hasAcceptedCurrentTerms, acceptTerms } from './auth.js';
import { TERMS_DEFAULT, termsToHtml } from './terms.js';
import { saveAttempt } from './results.js';
import { renderAdminDashboard } from './admin.js';
import { getLaw as getLawRemote } from './questions.js';

const view = document.getElementById('view');

// Estado de la sesión activa (se pierde al recargar).
let session = null;

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
   Router
   ------------------------------------------------------------- */
function route() {
  const seg = (window.location.hash || '#/')
    .replace(/^#\/?/, '')
    .split('/')
    .filter(Boolean);

  // Ruta oculta del profesor
  if (seg[0] === 'admin') {
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

  const adminBtn = (window.__isAdmin === true)
    ? `<a class="btn btn-soft btn-small" href="#/admin">Dashboard</a>`
    : '';
  const userBar = (window.__currentEmail)
    ? `<div class="user-bar"><span class="user-email">${escapeHtml(window.__currentEmail)}</span>${adminBtn}<button id="logout-btn" class="btn btn-soft btn-small" type="button">Cerrar sesión</button></div>`
    : '';

  view.innerHTML = `
    ${userBar}
    <h2 class="visually-hidden">Secciones</h2>
    <div class="section-grid">${cards}</div>`;

  view.querySelector('#logout-btn')?.addEventListener('click', async () => {
    await signOut();
    window.__isAdmin = false;
    window.__currentEmail = null;
    window.location.hash = '#/';
    window.location.reload();
  });
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

    session = {
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
  if (!session || session.law.lawId !== law.lawId) {
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}`;
    return;
  }

  const total = session.questions.length;
  const q = session.questions[session.index];
  const idx = session.index + 1;
  session.answered = false;

  const showHints =
    Boolean(session.withHints) && isHintsSection(section);

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
      <span class="meta">Pregunta ${idx} de ${total} · Aciertos: ${session.score}</span>
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
      if (session.answered) return;
      session.answered = true;

      const chosen = Number(btn.dataset.idx);
      const isCorrect = chosen === correctIdx;

      buttons.forEach((b) => (b.disabled = true));

      if (isCorrect) {
        btn.classList.add('is-correct');
        session.score += 1;
      } else {
        btn.classList.add('is-wrong');
        buttons[correctIdx].classList.add('is-correct');
      }

      const meta = view.querySelector('.quiz-topbar .meta');
      if (meta) {
        meta.textContent = `Pregunta ${idx} de ${total} · Aciertos: ${session.score}`;
      }

      session.answers.push({ question: q, chosen });

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
    if (session.index + 1 >= total) {
      session.finished = true;
      window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}/result`;
    } else {
      session.index += 1;
      renderQuiz(section, law, sub);
    }
  });
}

/* -------------------------------------------------------------
   Vista: resultados
   ------------------------------------------------------------- */
function renderResult(section, law, sub) {
  if (!session || !session.finished || session.law.lawId !== law.lawId) {
    window.location.hash = `#/${section.id}/${sub.id}/${law.lawId}`;
    return;
  }

  const { score, answers } = session;
  const total = session.questions.length;
  const level = meterLevel(score, total);

  // Persistencia en Supabase (con fallback a localStorage) — fire-and-forget.
  saveAttempt({
    sectionId: section.id,
    subtemaId: sub.id,
    lawId: law.lawId,
    lawName: law.lawName,
    score,
    total,
    difficulty: session.difficultyLabel,
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
    const distribution = session.distribution || {
      easy: 0,
      medium: 0,
      hard: 0,
    };
    const questions = selectQuestions(law, distribution);
    if (!questions.length) return;
    session = {
      section,
      law,
      sub,
      questions,
      distribution,
      index: 0,
      score: 0,
      answers: [],
      answered: false,
      difficultyLabel: session.difficultyLabel,
      withHints: session.withHints,
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
  if (!session || session.finished || session.answered) return;
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= 4) {
    const btn = view.querySelector(`.option-btn[data-key="${num}"]`);
    if (btn && !btn.disabled) btn.click();
  }
});

/* -------------------------------------------------------------
   Vista: autenticación (login / registro)
   ------------------------------------------------------------- */
async function renderAuth() {
  // Si ya aceptó la versión actual de Términos, ir directo al form;
  // si no, mostrar primero el modal de Términos y luego el form.
  const alreadyAccepted = await hasAcceptedCurrentTerms();
  if (alreadyAccepted) {
    showAuthForm();
  } else {
    showTermsModal();
  }
}

function showTermsModal() {
  view.innerHTML = `
    <div class="terms-shell">
      <div class="terms-modal">
        <h1 class="auth-title">Términos y Condiciones</h1>
        <p class="auth-sub">Lee el aviso de privacidad. Al final marca la casilla para continuar.</p>
        <div id="terms-content" class="terms-modal__content"></div>
        <div class="terms-modal__footer">
          <label class="terms-modal__check">
            <input type="checkbox" id="terms-accept" disabled>
            <span>He leído y acepto los Términos y Condiciones y el aviso de privacidad</span>
          </label>
          <button id="terms-continue" class="btn btn-primary btn-block" type="button" disabled>Aceptar y continuar</button>
        </div>
      </div>
    </div>
  `;

  const content = view.querySelector('#terms-content');
  content.innerHTML = termsToHtml(TERMS_DEFAULT);

  const scrollTarget = content;
  const accept = view.querySelector('#terms-accept');
  const continueBtn = view.querySelector('#terms-continue');

  // Habilitar el checkbox solo cuando el usuario haya scrolleado al fondo.
  function checkScroll() {
    const atBottom = scrollTarget.scrollTop + scrollTarget.clientHeight
    >= scrollTarget.scrollHeight - 1;
    if (atBottom) accept.disabled = false;
  }
  scrollTarget.addEventListener('scroll', checkScroll);
  // Trigger inicial (por si el contenido cabe sin scroll).
  checkScroll();

  accept.addEventListener('change', () => {
    continueBtn.disabled = !accept.checked;
  });

  continueBtn.addEventListener('click', async () => {
    const user = await getUser();
    if (user) {
      try {
        const version = await getCurrentTermsVersion();
        await acceptTerms(user.id, version);
      } catch (_) { /* no bloquear por ansiedad de espera */ }
    }
    showAuthForm();
  });
}

function showAuthForm() {
  view.innerHTML = `
    <div class="auth-card">
      <div class="auth-tabs">
        <button id="auth-tab-login" class="auth-tab is-active" type="button">Iniciar sesión</button>
        <button id="auth-tab-register" class="auth-tab" type="button">Registrarse</button>
      </div>
      <form id="auth-form" class="auth-form" autocomplete="on" novalidate>
        <label class="auth-field">
          <span>Correo</span>
          <input type="email" id="auth-email" required autocomplete="email">
        </label>
        <label class="auth-field">
          <span>Contraseña</span>
          <input type="password" id="auth-password" required minlength="6" autocomplete="current-password">
        </label>
        <label class="auth-field" id="auth-name-field" hidden>
          <span>Nombre (opcional)</span>
          <input type="text" id="auth-name" autocomplete="name">
        </label>
        <button id="auth-submit" class="btn btn-primary btn-block" type="submit">Entrar</button>
        <div id="auth-msg" class="auth-msg" role="status"></div>
      </form>
    </div>
  `;

  const tabLogin = view.querySelector('#auth-tab-login');
  const tabRegister = view.querySelector('#auth-tab-register');
  const nameField = view.querySelector('#auth-name-field');
  const submitBtn = view.querySelector('#auth-submit');
  const msgEl = view.querySelector('#auth-msg');

  function setMode(mode) {
    tabLogin.classList.toggle('is-active', mode === 'login');
    tabRegister.classList.toggle('is-active', mode === 'register');
    nameField.hidden = mode !== 'register';
    submitBtn.textContent = mode === 'login' ? 'Entrar' : 'Crear cuenta';
    msgEl.textContent = '';
    msgEl.className = 'auth-msg';
  }
  tabLogin.addEventListener('click', () => setMode('login'));
  tabRegister.addEventListener('click', () => setMode('register'));
  setMode('login');

  view.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = view.querySelector('#auth-email').value.trim();
    const password = view.querySelector('#auth-password').value;
    const fullName = view.querySelector('#auth-name').value.trim();
    const mode = tabRegister.classList.contains('is-active') ? 'register' : 'login';
    if (!email || !password) {
      msgEl.textContent = 'Completa correo y contraseña.';
      msgEl.className = 'auth-msg auth-err';
      return;
    }
    submitBtn.disabled = true;
    msgEl.textContent = mode === 'login' ? 'Iniciando sesión…' : 'Creando cuenta…';
    msgEl.className = 'auth-msg';
    try {
      let result;
      if (mode === 'login') {
        result = await signIn(email, password);
      } else {
        const version = await getCurrentTermsVersion();
        result = await signUp(email, password, fullName, version);
      }
      const { error } = result;
      if (error) {
        msgEl.textContent = error.message || 'Error de autenticación.';
        msgEl.className = 'auth-msg auth-err';
      } else {
        msgEl.textContent = mode === 'login'
          ? 'Sesión iniciada. Redirigiendo…'
          : 'Cuenta creada. Revisa tu correo si Confirm email está activo.';
        msgEl.className = 'auth-msg auth-ok';
        window.location.hash = '#/';
        window.location.reload();
      }
    } catch (err) {
      msgEl.textContent = err.message || 'Error desconocido.';
      msgEl.className = 'auth-msg auth-err';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* -------------------------------------------------------------
   Bootstrap
   ------------------------------------------------------------- */
async function boot() {
  window.addEventListener('hashchange', route);
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

  if (isSupabaseReady()) {
    const session = await getSession();
    if (session) {
      window.__currentEmail = session.user?.email || '';
      window.__isAdmin = await isAdmin();
      route();
      return;
    }
    renderAuth();
    return;
  }
  route();
}

boot();
