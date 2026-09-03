// js/practica-libre.js
// Vista de "Práctica libre": el alumno escribe una expresión LaTeX y la app
// detecta qué método/fórmula aplicar, mostrando opciones + explicación.
// Port de la lógica del repo UlisesAriasS/Ecuaciones-quiziz.

import { render, isReady, sanitize } from './latex.js';
import { rules } from '../data/practica-libre/rules.js';

const STORAGE_KEY = 'eqd:practice';

let currentScore = 0;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Escapa el HTML pero preserva las etiquetas seguras (<b>, <i>, <br>).
 * @param {string} html
 * @returns {string}
 */
export function renderRichText(html) {
  const allowed = /^(<br\s*\/?>|<b>|<\/b>|<i>|<\/i>)$/i;
  return String(html ?? '')
    .split(/(<br\s*\/?>|<b>|<\/b>|<i>|<\/i>)/i)
    .map((piece) => (allowed.test(piece) ? piece : escapeHtml(piece)))
    .join('');
}

/**
 * Busca la primera regla cuyo `match` acepte la expresión.
 * @param {string} latex
 * @returns {{topic:string, correct:string, explanation:string, distractors:string[]}|null}
 */
export function analyzeExpression(latex) {
  const normalized = latex.replace(/\s+/g, '');
  for (const rule of rules) {
    if (rule.match(normalized)) {
      const opts = rule.getOptions();
      return {
        topic: rule.topic,
        correct: opts.correct,
        explanation: opts.explanation,
        distractors: opts.distractors,
      };
    }
  }
  return null;
}

function saveAttempt(record) {
  try {
    const list = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    list.push(record);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (_) {
    // ignorar
  }
}

/**
 * Renderiza la vista de práctica libre dentro de `view`.
 * @param {HTMLElement} view
 */
export function renderPracticaLibre(view) {
  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/">← Volver al menú</a></div>
    <div class="practica-layout">
      <section class="card practica-input-card">
        <h2>Práctica libre</h2>
        <p class="practica-sub">Escribe tu ecuación o integral en LaTeX. La app detectará qué método aplicar.</p>
        <textarea id="pl-input" class="practica-input" placeholder="\\int x^2 dx" spellcheck="false"></textarea>
        <div class="practica-preview" id="pl-preview"></div>
        <button id="pl-start" class="btn btn-primary btn-block" type="button">Detectar método</button>
      </section>

      <section class="card practica-quiz-card" id="pl-quiz" hidden>
        <div class="practica-score">Puntos: <span id="pl-score">${currentScore}</span></div>
        <div class="practica-topic" id="pl-topic"></div>
        <div class="practica-expression" id="pl-expr"></div>
        <div class="practica-options" id="pl-options"></div>
        <div class="practica-explanation" id="pl-explanation" hidden>
          <h3>Explicación</h3>
          <div id="pl-explanation-text"></div>
        </div>
        <div class="practica-feedback" id="pl-feedback"></div>
        <button id="pl-reset" class="btn btn-soft btn-block" type="button">Probar otra expresión</button>
      </section>
    </div>`;

  const input = view.querySelector('#pl-input');
  const preview = view.querySelector('#pl-preview');
  const startBtn = view.querySelector('#pl-start');
  const quizCard = view.querySelector('#pl-quiz');
  const topicEl = view.querySelector('#pl-topic');
  const exprEl = view.querySelector('#pl-expr');
  const optionsEl = view.querySelector('#pl-options');
  const explanationEl = view.querySelector('#pl-explanation');
  const explanationText = view.querySelector('#pl-explanation-text');
  const feedbackEl = view.querySelector('#pl-feedback');
  const scoreEl = view.querySelector('#pl-score');
  const resetBtn = view.querySelector('#pl-reset');

  let answered = false;

  input.addEventListener('input', () => {
    render(input.value || '\\text{Esperando expresión...}', preview, { displayMode: true });
  });

  startBtn.addEventListener('click', () => {
    const latex = input.value.trim();
    if (!latex) {
      alert('Por favor, escribe una ecuación o integral en la caja de texto.');
      return;
    }
    const found = analyzeExpression(latex);
    if (!found) {
      alert('Aún no reconozco ese tipo de expresión. Prueba con: \\int x^2 dx');
      return;
    }
    answered = false;
    explanationEl.hidden = true;
    feedbackEl.textContent = '';
    feedbackEl.className = 'practica-feedback';

    topicEl.textContent = `Tema detectado: ${found.topic}`;
    render(latex, exprEl, { displayMode: true });

    renderOptions(found);
    view.querySelector('.practica-input-card').hidden = true;
    quizCard.hidden = false;
  });

  resetBtn.addEventListener('click', () => {
    quizCard.hidden = true;
    view.querySelector('.practica-input-card').hidden = false;
    input.value = '';
    render('\\text{Esperando expresión...}', preview, { displayMode: true });
  });

  function renderOptions(found) {
    optionsEl.innerHTML = '';
    const all = [
      { latex: found.correct, correct: true },
      ...found.distractors.map((d) => ({ latex: d, correct: false })),
    ];
    const shuffled = shuffle(all);

    shuffled.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn practica-option';
      btn.type = 'button';

      const latexSpan = document.createElement('span');
      latexSpan.className = 'option-latex';
      render(opt.latex, latexSpan, { displayMode: false });

      btn.appendChild(latexSpan);
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        if (opt.correct) {
          btn.classList.add('is-correct');
          currentScore += 10;
        } else {
          btn.classList.add('is-wrong');
          currentScore = Math.max(0, currentScore - 5);
        }
        scoreEl.textContent = currentScore;

        feedbackEl.textContent = opt.correct ? 'Correcto' : 'Incorrecto';
        feedbackEl.classList.add(opt.correct ? 'practica-correct' : 'practica-wrong');

        explanationText.innerHTML = renderRichText(found.explanation);
        explanationEl.hidden = false;

        saveAttempt({
          input: sanitize(input.value),
          topic: found.topic,
          correct: opt.correct,
          date: Date.now(),
        });
      });
      optionsEl.appendChild(btn);
    });
  }
}
