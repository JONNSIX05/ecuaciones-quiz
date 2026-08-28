// app.js — Router por hash + bootstrap + render de vistas (SPA).

import { isReady, render, sanitize } from './latex.js';
import { saveResult, getResult } from './storage.js';
import {
  selectQuestions,
  balancedSplit,
  resultMessage,
  meterLevel,
  availableByDifficulty,
} from './quiz-engine.js';
import {
  sectionName,
  getAllSubtemas,
  getSubtema,
  getLaw,
} from '../data/algebra/index.js';

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

  if (seg.length === 0) {
    renderMenu();
    return;
  }

  if (seg[0] !== 'algebra') {
    renderNotFound();
    return;
  }

  // seg = ['algebra', subId?, lawId?, action?]
  if (seg.length === 1) {
    renderSubtemaList();
    return;
  }

  const sub = getSubtema(seg[1]);
  if (!sub) {
    renderNotFound();
    return;
  }

  if (seg.length === 2) {
    renderLawList(sub);
    return;
  }

  const law = getLaw(seg[1], seg[2]);
  if (!law) {
    renderNotFound();
    return;
  }

  if (seg.length === 3) {
    renderConfig(law, sub);
    return;
  }

  if (seg[3] === 'play') {
    renderQuiz(law, sub);
    return;
  }
  if (seg[3] === 'result') {
    renderResult(law, sub);
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

/* -------------------------------------------------------------
   Vista: menú principal
   ------------------------------------------------------------- */
function renderMenu() {
  const sections = [
    {
      id: 'algebra',
      name: 'Álgebra',
      desc: 'Exponentes, productos notables, trigonometría, logaritmos, complejos y más.',
      available: true,
    },
    {
      id: 'calculo-diferencial',
      name: 'Cálculo Diferencial',
      desc: 'Derivadas, reglas de derivación y aplicaciones.',
      available: false,
    },
    {
      id: 'calculo-integral',
      name: 'Cálculo Integral',
      desc: 'Integrales y métodos de integración.',
      available: false,
    },
  ];

  const cards = sections
    .map((s) => {
      const index = s.id === 'algebra' ? '01' : s.id === 'calculo-diferencial' ? '02' : '03';
      if (s.available) {
        return `
          <a class="section-card" href="#/${s.id}">
            <span class="index">${index}</span>
            <h3>${escapeHtml(s.name)}</h3>
            <p>${escapeHtml(s.desc)}</p>
          </a>`;
      }
      return `
        <div class="section-card is-locked" aria-disabled="true">
          <span class="index">${index}</span>
          <h3>${escapeHtml(s.name)}</h3>
          <p>${escapeHtml(s.desc)}</p>
          <span class="badge">Próximamente</span>
        </div>`;
    })
    .join('');

  view.innerHTML = `
    <h2 class="visually-hidden">Secciones</h2>
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

function renderSubtemaList() {
  const subs = getAllSubtemas();
  const cards = subs
    .map((sub, i) => {
      const best = subtemaBest(sub);
      const bestHtml =
        best !== null
          ? `<span class="badge">Mejor: ${Math.round(best * 100)}%</span>`
          : `<span class="badge">Sin intentos</span>`;
      return `
        <a class="section-card" href="#/algebra/${sub.id}">
          <span class="index">${String(i + 1).padStart(2, '0')}</span>
          <h3>${escapeHtml(sub.name)}</h3>
          <p>${sub.laws.length} leyes · 15 preguntas por ley</p>
          ${bestHtml}
        </a>`;
    })
    .join('');

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
    <div class="section-title-row">
      <h2>${escapeHtml(sectionName)}</h2>
      <span class="count">${subs.length} ${subs.length === 1 ? 'subtema' : 'subtemas'}</span>
    </div>
    <div class="section-grid">${cards}</div>`;
}

/* -------------------------------------------------------------
   Vista: lista de leyes de un subtema
   ------------------------------------------------------------- */
function renderLawList(sub) {
  const rows = sub.laws
    .map((law, i) => {
      const number = String(i + 1).padStart(2, '0');
      const best = getResult(law.lawId);
      const bestHtml = best
        ? `<span class="law-best">Mejor<br><strong>${best.score}/${best.total}</strong></span>`
        : '';

      if (law.available) {
        return `
          <a class="law-row" href="#/algebra/${sub.id}/${law.lawId}">
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
    <div class="back-row"><a class="back-link" href="#/algebra">← Volver a los subtemas</a></div>
    <div class="section-title-row">
      <h2>${escapeHtml(sectionName)} — ${escapeHtml(sub.name)}</h2>
      <span class="count">${sub.laws.length} leyes</span>
    </div>
    <div class="law-list">${rows}</div>`;

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

function renderConfig(law, sub) {
  if (!law.available) {
    renderNotFound();
    return;
  }
  const total = law.questions.length;
  const avail = availableByDifficulty(law);

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/algebra/${sub.id}">← Volver a las leyes</a></div>
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

    session = {
      law,
      sub,
      questions,
      distribution,
      index: 0,
      score: 0,
      answers: [],
      answered: false,
      difficultyLabel: label,
    };
    window.location.hash = `#/algebra/${sub.id}/${law.lawId}/play`;
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
   Vista: quiz (juego)
   ------------------------------------------------------------- */
function renderQuiz(law, sub) {
  if (!session || session.law.lawId !== law.lawId) {
    window.location.hash = `#/algebra/${sub.id}/${law.lawId}`;
    return;
  }

  const total = session.questions.length;
  const q = session.questions[session.index];
  const idx = session.index + 1;
  session.answered = false;

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
      <a class="back-link" href="#/algebra/${sub.id}/${law.lawId}">← Salir</a>
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
      window.location.hash = `#/algebra/${sub.id}/${law.lawId}/result`;
    } else {
      session.index += 1;
      renderQuiz(law, sub);
    }
  });
}

/* -------------------------------------------------------------
   Vista: resultados
   ------------------------------------------------------------- */
function renderResult(law, sub) {
  if (!session || !session.finished || session.law.lawId !== law.lawId) {
    window.location.hash = `#/algebra/${sub.id}/${law.lawId}`;
    return;
  }

  const { score, answers } = session;
  const total = session.questions.length;
  const level = meterLevel(score, total);

  saveResult(law.lawId, {
    score,
    total,
    difficulty: session.difficultyLabel,
  });

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
    <div class="back-row"><a class="back-link" href="#/algebra/${sub.id}">← Volver a las leyes</a></div>
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
        <a class="btn btn-soft" href="#/algebra/${sub.id}/${law.lawId}">Otra dificultad</a>
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
      law,
      sub,
      questions,
      distribution,
      index: 0,
      score: 0,
      answers: [],
      answered: false,
      difficultyLabel: session.difficultyLabel,
    };
    window.location.hash = `#/algebra/${sub.id}/${law.lawId}/play`;
  });
}

/* -------------------------------------------------------------
   Atajos de teclado (1-4 para elegir opción)
   ------------------------------------------------------------- */
document.addEventListener('keydown', (e) => {
  if (!session || session.finished || session.answered) return;
  if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= 4) {
    const btn = view.querySelector(`.option-btn[data-key="${num}"]`);
    if (btn && !btn.disabled) btn.click();
  }
});

/* -------------------------------------------------------------
   Bootstrap
   ------------------------------------------------------------- */
function boot() {
  window.addEventListener('hashchange', route);
  if (isReady()) {
    route();
    return;
  }
  let tries = 0;
  const timer = setInterval(() => {
    if (isReady() || ++tries > 50) {
      clearInterval(timer);
      route();
    }
  }, 50);
}

boot();
