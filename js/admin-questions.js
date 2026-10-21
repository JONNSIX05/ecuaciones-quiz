// js/admin-questions.js
// Sub-vista CRUD de preguntas para el panel docente:
// - Explorar banco (paginado, filtros en cascada con preservación, búsqueda con debounce)
// - Ver detalle con renderizado KaTeX
// - Editar pregunta en modal (consultando el registro completo desde la API)
// - Subir preguntas por lote (.json) con Guía interactiva de formato, catálogo de IDs y plantilla descargable.

import { isAdmin } from './auth.js?v=8';
import { api } from './api.js?v=8';
import { updateQuestion, deleteQuestion, insertQuestions, listQuestionsRange } from './questions.js?v=8';
import { validateQuestionJSON } from '../data/questions/upload-schema.js?v=8';
import { sections } from './sections.js';
import { isReady, sanitize } from './latex.js';
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

function renderLatexInline(latex, displayMode = false) {
  const raw = String(latex ?? '');
  if (!isReady() || !window.katex) return `<code>${escapeHtml(raw)}</code>`;
  try {
    return window.katex.renderToString(sanitize(raw), {
      throwOnError: false,
      strict: false,
      trust: false,
      displayMode,
    });
  } catch (_) {
    return `<code>${escapeHtml(raw)}</code>`;
  }
}

function renderMixedText(text) {
  const source = String(text ?? '');
  if (!source.includes('$')) return escapeHtml(source);
  const parts = source.split(/\$(.+?)\$/g);
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    html += i % 2 === 0 ? escapeHtml(parts[i]) : renderLatexInline(parts[i], false);
  }
  return html;
}

function diffBadge(diff) {
  const map = {
    easy: { label: 'Fácil', cls: 'pill-ok' },
    medium: { label: 'Medio', cls: 'pill-warn' },
    hard: { label: 'Difícil', cls: 'pill-danger' },
  };
  const info = map[diff] || { label: diff || '–', cls: '' };
  return `<span class="pill ${info.cls}">${escapeHtml(info.label)}</span>`;
}

// Estado interno del explorador
const state = {
  page: 1,
  pageSize: 25,
  filters: {
    section_id: '',
    subtema_id: '',
    law_id: '',
    difficulty: '',
    search: '',
  },
};

let currentRows = [];
let searchTimer = null;

/**
 * Construye el catálogo completo de IDs válidos (section -> subtema -> law)
 */
function getCatalogTree() {
  const tree = [];
  for (const sec of sections) {
    if (!sec.available || sec.id === 'practica-libre') continue;
    const subs = sec.module?.getAllSubtemas?.() || [];
    tree.push({
      sectionId: sec.id,
      sectionName: sec.name,
      subtemas: subs.map((sub) => ({
        subtemaId: sub.id,
        subtemaName: sub.name,
        laws: (sub.laws || []).map((l) => ({
          lawId: l.lawId,
          lawName: l.lawName || l.lawId,
        })),
      })),
    });
  }
  return tree;
}

/**
 * Renderiza la sub-vista CRUD dentro de `view`.
 * @param {HTMLElement} view
 */
export async function renderAdminQuestions(view) {
  if (!(await isAdmin())) {
    view.innerHTML = `<div class="card"><h2>Acceso restringido</h2><p>Se requiere cuenta de profesor para gestionar el banco de preguntas.</p></div>`;
    return;
  }

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/admin">← Volver al Panel Docente</a></div>
    <section class="admin-card">
      <header class="admin-head">
        <div>
          <h2>Gestión del Banco de Preguntas</h2>
          <p class="admin-sub">Explora, previsualiza en LaTeX, edita, elimina o importa nuevos reactivos en formato JSON.</p>
        </div>
      </header>
      <div class="admin-nav-tabs" role="tablist">
        <button data-tab="browse" class="admin-nav-tab is-active" type="button" role="tab">Explorar banco</button>
        <button data-tab="upload" class="admin-nav-tab" type="button" role="tab">Subir preguntas (.json) y Guía</button>
      </div>
      <div id="admin-questions-body"></div>
    </section>`;

  const tabs = view.querySelectorAll('.admin-nav-tab');
  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      tabs.forEach((x) => x.classList.toggle('is-active', x === t));
      const name = t.dataset.tab;
      if (name === 'browse') showBrowse();
      if (name === 'upload') showUpload();
    });
  });

  showBrowse();
}

// ============================================================================
// TAB 1: Explorar banco (paginado + filtros + búsqueda + Ver/Editar/Eliminar)
// ============================================================================

async function showBrowse() {
  const body = document.querySelector('#admin-questions-body');
  if (!body) return;
  body.innerHTML = renderFilters() + `<div id="questions-result"><p class="admin-loading">Cargando preguntas…</p></div>`;
  populateSubtema(true);
  populateLaw(true);
  bindFilters();

  await loadQuestions();
}

function renderFilters() {
  const f = state.filters;
  const sectionOptions = sections
    .filter((s) => s.available && s.id !== 'practica-libre')
    .map((s) => `<option value="${s.id}"${s.id === f.section_id ? ' selected' : ''}>${escapeHtml(s.name)}</option>`)
    .join('');

  return `
    <div class="questions-filters">
      <select id="f-section" title="Filtrar por sección">
        <option value="">Todas las secciones</option>
        ${sectionOptions}
      </select>
      <select id="f-subtema" title="Filtrar por subtema">
        <option value="">Todos los subtemas</option>
      </select>
      <select id="f-law" title="Filtrar por ley o tema">
        <option value="">Todas las leyes</option>
      </select>
      <select id="f-diff" title="Filtrar por dificultad">
        <option value="">Cualquier dificultad</option>
        <option value="easy"${f.difficulty === 'easy' ? ' selected' : ''}>Fácil (easy)</option>
        <option value="medium"${f.difficulty === 'medium' ? ' selected' : ''}>Medio (medium)</option>
        <option value="hard"${f.difficulty === 'hard' ? ' selected' : ''}>Difícil (hard)</option>
      </select>
      <input id="f-search" type="search" placeholder="Buscar en el enunciado…" value="${escapeAttr(f.search)}">
      <button id="f-reset" class="btn btn-soft btn-small" type="button">Limpiar filtros</button>
    </div>
  `;
}

function bindFilters() {
  const secEl = document.getElementById('f-section');
  const subEl = document.getElementById('f-subtema');
  const lawEl = document.getElementById('f-law');
  const diffEl = document.getElementById('f-diff');
  const searchEl = document.getElementById('f-search');

  secEl?.addEventListener('change', () => {
    state.page = 1;
    state.filters.section_id = secEl.value;
    state.filters.subtema_id = '';
    state.filters.law_id = '';
    populateSubtema(false);
    populateLaw(false);
    loadQuestions();
  });

  subEl?.addEventListener('change', () => {
    state.page = 1;
    state.filters.subtema_id = subEl.value;
    state.filters.law_id = '';
    populateLaw(false);
    loadQuestions();
  });

  lawEl?.addEventListener('change', () => {
    state.page = 1;
    state.filters.law_id = lawEl.value;
    loadQuestions();
  });

  diffEl?.addEventListener('change', () => {
    state.page = 1;
    state.filters.difficulty = diffEl.value;
    loadQuestions();
  });

  searchEl?.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.page = 1;
      state.filters.search = searchEl.value.trim();
      loadQuestions();
    }, 250);
  });

  document.getElementById('f-reset')?.addEventListener('click', () => {
    state.filters = { section_id: '', subtema_id: '', law_id: '', difficulty: '', search: '' };
    state.page = 1;
    showBrowse();
  });
}

function populateSubtema(preserve = false) {
  const sub = document.getElementById('f-subtema');
  if (!sub) return;

  const currentSec = sections.find((s) => s.id === state.filters.section_id);
  const subs = currentSec?.module?.getAllSubtemas?.() || [];

  if (!preserve) state.filters.subtema_id = '';

  sub.innerHTML =
    '<option value="">Todos los subtemas</option>' +
    subs
      .map((s) => `<option value="${s.id}"${s.id === state.filters.subtema_id ? ' selected' : ''}>${escapeHtml(s.name)}</option>`)
      .join('');
}

function populateLaw(preserve = false) {
  const law = document.getElementById('f-law');
  if (!law) return;

  const currentSec = sections.find((s) => s.id === state.filters.section_id);
  const currentSub = currentSec?.module?.getSubtema?.(state.filters.subtema_id);
  const laws = currentSub?.laws || [];

  if (!preserve) state.filters.law_id = '';

  law.innerHTML =
    '<option value="">Todas las leyes</option>' +
    laws
      .map((l) => `<option value="${l.lawId}"${l.lawId === state.filters.law_id ? ' selected' : ''}>${escapeHtml(l.lawName || l.lawId)}</option>`)
      .join('');
}

async function loadQuestions() {
  const target = document.getElementById('questions-result');
  if (!target) return;
  target.innerHTML = `<p class="admin-loading">Cargando preguntas…</p>`;
  try {
    const from = (state.page - 1) * state.pageSize;
    const to = from + state.pageSize - 1;
    const res = await listQuestionsRange({
      from,
      to,
      section_id: state.filters.section_id || null,
      subtema_id: state.filters.subtema_id || null,
      law_id: state.filters.law_id || null,
      difficulty: state.filters.difficulty || null,
      search: state.filters.search || null,
    });
    currentRows = res.rows || [];
    target.innerHTML = renderQuestions(res);
    bindPagination(res.count || 0);
    bindRowEvents();
  } catch (e) {
    target.innerHTML = `<div class="alert-warn"><strong>Error al consultar preguntas:</strong> ${escapeHtml(e.message)}</div>`;
  }
}

function renderQuestions({ rows, count, from }) {
  if (count === 0 || !rows || rows.length === 0) {
    return '<p class="admin-empty">No se encontraron preguntas con los filtros seleccionados.</p>';
  }
  const safeRows = rows
    .map((r) => {
      return `<tr data-id="${escapeAttr(r.id)}">
      <td><code>${escapeHtml(r.id)}</code></td>
      <td>${escapeHtml(r.section_id || '')}</td>
      <td>${escapeHtml(r.subtema_id || '')}</td>
      <td>${escapeHtml(r.law_id || '')}</td>
      <td>${diffBadge(r.difficulty)}</td>
      <td class="q-prompt-cell" title="${escapeAttr(r.prompt || '')}">${renderMixedText(
        (r.prompt || '').length > 75 ? r.prompt.slice(0, 75) + '…' : r.prompt
      )}</td>
      <td style="text-align:right;">
        <button data-action="expand" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small" type="button">Ver</button>
        <button data-action="edit" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small" type="button">Editar</button>
        <button data-action="delete" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small" style="color:var(--wrong);" type="button">Eliminar</button>
      </td>
    </tr>
    <tr class="questions-detail-row" data-detail-id="${escapeAttr(r.id)}">
      <td colspan="7">
        <div class="questions-detail-content" data-id="${escapeAttr(r.id)}">
          <em>Cargando detalle de la pregunta…</em>
        </div>
      </td>
    </tr>`;
    })
    .join('');

  const totalPages = Math.max(1, Math.ceil(count / state.pageSize));
  const start = (from ?? 0) + 1;
  const end = Math.min(start + rows.length - 1, count);
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.65rem;flex-wrap:wrap;gap:.5rem;">
      <p class="admin-hint" style="margin:0;">Mostrando <strong>${start}–${end}</strong> de <strong>${count}</strong> preguntas (${totalPages} páginas).</p>
    </div>
    <div class="questions-table-wrap">
      <table class="questions-table">
        <thead>
          <tr>
            <th>ID</th><th>Sección</th><th>Subtema</th><th>Ley</th><th>Dificultad</th><th>Enunciado</th><th style="text-align:right;">Acciones</th>
          </tr>
        </thead>
        <tbody>${safeRows}</tbody>
      </table>
    </div>
    <div class="questions-pager">
      <button id="pg-prev" class="btn btn-soft btn-small" type="button" ${state.page <= 1 ? 'disabled' : ''}>« Anterior</button>
      <span>Página <strong>${state.page}</strong> de <strong>${totalPages}</strong></span>
      <button id="pg-next" class="btn btn-soft btn-small" type="button" ${state.page >= totalPages ? 'disabled' : ''}>Siguiente »</button>
    </div>`;
}

function bindPagination(totalCount) {
  const totalPages = Math.max(1, Math.ceil(totalCount / state.pageSize));
  document.getElementById('pg-prev')?.addEventListener('click', () => {
    if (state.page > 1) {
      state.page--;
      loadQuestions();
    }
  });
  document.getElementById('pg-next')?.addEventListener('click', () => {
    if (state.page < totalPages) {
      state.page++;
      loadQuestions();
    }
  });
}

function bindRowEvents() {
  const body = document.querySelector('#admin-questions-body');
  if (!body) return;
  body.querySelectorAll('button[data-action]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'expand') {
        await toggleExpand(id);
        return;
      }
      if (action === 'edit') {
        await openEditorModal(id);
        return;
      }
      if (action === 'delete') {
        if (!confirm(`¿Seguro que deseas eliminar permanentemente la pregunta "${id}"?`)) return;
        try {
          btn.disabled = true;
          await deleteQuestion(id);
          await loadQuestions();
        } catch (e) {
          btn.disabled = false;
          alert('Error al eliminar: ' + e.message);
        }
      }
    });
  });
}

async function toggleExpand(id) {
  const detail = document.querySelector(`.questions-detail-row[data-detail-id="${CSS.escape(id)}"]`);
  if (!detail) return;
  detail.classList.toggle('is-open');
  if (!detail.classList.contains('is-open')) return;
  const content = detail.querySelector('.questions-detail-content');
  if (content.dataset.loaded === 'true') return;

  try {
    const res = await api.get(`/admin/questions/${encodeURIComponent(id)}`);
    if (res?.question) {
      content.innerHTML = renderDetail(res.question);
      content.dataset.loaded = 'true';
    }
  } catch (e) {
    content.innerHTML = `<span style="color:var(--wrong);">Error al cargar detalle: ${escapeHtml(e.message)}</span>`;
  }
}

function renderDetail(q) {
  const optionsHtml = (q.options || [])
    .map(
      (o, idx) => `
      <li class="q-detail-opt ${o.correct ? 'is-correct' : ''}">
        <span class="q-detail-letter">${idx + 1}.</span>
        <div class="q-detail-math">${renderLatexInline(o.latex || '', false)}</div>
        <code class="q-detail-raw">${escapeHtml(o.latex || '')}</code>
        ${o.correct ? '<span class="pill pill-ok">Correcta</span>' : ''}
      </li>`
    )
    .join('');

  return `
    <div class="questions-detail-grid">
      <div class="q-detail-block">
        <strong>Enunciado (Vista previa y LaTeX):</strong>
        <div class="q-detail-rendered">${renderMixedText(q.prompt)}</div>
        <code class="q-detail-raw">${escapeHtml(q.prompt)}</code>
      </div>
      <div class="q-detail-block">
        <strong>Opciones (4):</strong>
        <ol class="q-detail-opt-list">${optionsHtml}</ol>
      </div>
      <div class="q-detail-block">
        <strong>Explicación paso a paso:</strong>
        <div class="q-detail-rendered">${renderMixedText(q.explanation || 'Sin explicación registrada.')}</div>
      </div>
    </div>`;
}

/**
 * Carga la pregunta completa desde el servidor y abre el editor en un modal.
 */
async function openEditorModal(id) {
  let q;
  try {
    const res = await api.get(`/admin/questions/${encodeURIComponent(id)}`);
    q = res?.question;
    if (!q) throw new Error('No se recibió el detalle de la pregunta.');
  } catch (err) {
    alert('Error al cargar la pregunta para editar: ' + err.message);
    return;
  }

  const opts = Array.isArray(q.options) && q.options.length === 4
    ? q.options
    : [
        { latex: '', correct: true },
        { latex: '', correct: false },
        { latex: '', correct: false },
        { latex: '', correct: false },
      ];

  const html = `
    <form id="edit-question-form" class="auth-form">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;">
        <div class="auth-field">
          <label>ID de la pregunta</label>
          <input type="text" value="${escapeAttr(q.id)}" disabled style="opacity:.7;font-family:var(--font-mono);">
        </div>
        <div class="auth-field">
          <label for="edit-diff">Dificultad</label>
          <select id="edit-diff" style="padding:.7rem;border:1.5px solid var(--line-strong);border-radius:var(--radius-sm);background:var(--paper);">
            <option value="easy" ${q.difficulty === 'easy' ? 'selected' : ''}>Fácil (easy)</option>
            <option value="medium" ${q.difficulty === 'medium' ? 'selected' : ''}>Medio (medium)</option>
            <option value="hard" ${q.difficulty === 'hard' ? 'selected' : ''}>Difícil (hard)</option>
          </select>
        </div>
      </div>

      <div class="auth-field">
        <label for="edit-prompt">Enunciado (usa <code>$...$</code> para fórmulas en línea)</label>
        <textarea id="edit-prompt" rows="2" required style="padding:.7rem;border:1.5px solid var(--line-strong);border-radius:var(--radius-sm);font-family:var(--font-mono);font-size:.9rem;">${escapeHtml(q.prompt)}</textarea>
      </div>

      <div class="auth-field">
        <label>Opciones en LaTeX (marca con el botón circular cuál es la respuesta correcta)</label>
        <div class="edit-options-grid">
          ${opts
            .map(
              (o, i) => `
            <div class="edit-opt-row">
              <label class="edit-opt-radio" title="Marcar opción ${i + 1} como correcta">
                <input type="radio" name="edit-correct-opt" value="${i}" ${o.correct ? 'checked' : ''}>
                <span>Opción ${i + 1}</span>
              </label>
              <input type="text" class="edit-opt-input" data-opt-index="${i}" value="${escapeAttr(o.latex)}" required placeholder="Expresión LaTeX, ej. x^2 + 2x + 1">
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="auth-field">
        <label for="edit-expl">Explicación del procedimiento</label>
        <textarea id="edit-expl" rows="3" style="padding:.7rem;border:1.5px solid var(--line-strong);border-radius:var(--radius-sm);font-size:.9rem;">${escapeHtml(q.explanation ?? '')}</textarea>
      </div>

      <div id="edit-live-preview" class="q-detail-block" style="background:var(--paper);padding:.8rem;border-radius:var(--radius-sm);border:1px solid var(--line);"></div>
      <div id="edit-msg" class="auth-msg"></div>

      <div style="display:flex;justify-content:flex-end;gap:.6rem;margin-top:.5rem;">
        <button type="button" id="edit-cancel-btn" class="btn btn-soft">Cancelar</button>
        <button type="submit" id="edit-save-btn" class="btn btn-primary">Guardar cambios</button>
      </div>
    </form>
  `;

  openModal({
    title: `Editar pregunta: ${q.id}`,
    contentHTML: html,
  });

  const form = document.getElementById('edit-question-form');
  const promptEl = document.getElementById('edit-prompt');
  const explEl = document.getElementById('edit-expl');
  const previewEl = document.getElementById('edit-live-preview');
  const msgEl = document.getElementById('edit-msg');
  const saveBtn = document.getElementById('edit-save-btn');

  function updatePreview() {
    if (!previewEl) return;
    const optInputs = [...form.querySelectorAll('.edit-opt-input')];
    const checkedRadio = form.querySelector('input[name="edit-correct-opt"]:checked');
    const correctIdx = checkedRadio ? Number(checkedRadio.value) : 0;

    previewEl.innerHTML = `
      <div style="font-size:.8rem;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:.35rem;">Vista previa en vivo</div>
      <div style="margin-bottom:.5rem;font-weight:600;">${renderMixedText(promptEl.value)}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.5rem;">
        ${optInputs
          .map(
            (inp, idx) => `
          <div style="padding:.35rem .6rem;border-radius:4px;border:1px solid ${
            idx === correctIdx ? 'var(--correct)' : 'var(--line)'
          };background:${idx === correctIdx ? 'var(--correct-bg)' : '#fff'};">
            <strong>${idx + 1})</strong> ${renderLatexInline(inp.value, false)}
          </div>`
          )
          .join('')}
      </div>
      <div style="font-size:.85rem;color:var(--ink-soft);"><strong>Explicación:</strong> ${renderMixedText(explEl.value)}</div>
    `;
  }

  updatePreview();
  form?.addEventListener('input', updatePreview);

  document.getElementById('edit-cancel-btn')?.addEventListener('click', () => closeActiveModal());

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const difficulty = document.getElementById('edit-diff').value;
    const promptText = promptEl.value.trim();
    const explanation = explEl.value.trim();
    const optInputs = [...form.querySelectorAll('.edit-opt-input')];
    const checkedRadio = form.querySelector('input[name="edit-correct-opt"]:checked');
    const correctIdx = checkedRadio ? Number(checkedRadio.value) : 0;

    const options = optInputs.map((inp, idx) => ({
      latex: inp.value.trim(),
      correct: idx === correctIdx,
    }));

    if (!promptText || options.some((o) => !o.latex)) {
      msgEl.textContent = 'El enunciado y las 4 opciones son obligatorios.';
      msgEl.className = 'auth-msg auth-err';
      return;
    }

    try {
      saveBtn.disabled = true;
      saveBtn.textContent = 'Guardando…';
      await updateQuestion(q.id, { difficulty, prompt: promptText, options, explanation });
      closeActiveModal();
      await loadQuestions();
    } catch (err) {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Guardar cambios';
      msgEl.textContent = 'Error al guardar: ' + err.message;
      msgEl.className = 'auth-msg auth-err';
    }
  });
}

// ============================================================================
// TAB 2: Subir preguntas (.json) + Guía interactiva de formato y plantillas
// ============================================================================

function buildSampleTemplate(sectionId = 'algebra', subtemaId = 'exponentes', lawId = 'producto') {
  return JSON.stringify(
    {
      section: sectionId,
      subtema: subtemaId,
      law: lawId,
      questions: [
        {
          id: `${lawId.slice(0, 6)}-f-99`,
          difficulty: 'easy',
          prompt: 'Simplifica la siguiente expresión aplicando leyes de exponentes: $x^3 \\cdot x^4$',
          options: [
            { latex: 'x^7', correct: true },
            { latex: 'x^{12}', correct: false },
            { latex: '2x^7', correct: false },
            { latex: 'x^{-1}', correct: false },
          ],
          explanation: 'Al multiplicar potencias de la misma base, se conserva la base y se suman los exponentes: $x^{3+4} = x^7$.',
        },
      ],
    },
    null,
    2
  );
}

function showUpload() {
  const body = document.querySelector('#admin-questions-body');
  if (!body) return;

  const catalog = getCatalogTree();
  const catalogRowsHtml = catalog
    .map((sec) =>
      sec.subtemas
        .map((sub) =>
          sub.laws
            .map(
              (law) => `
              <tr>
                <td><code>${escapeHtml(sec.sectionId)}</code> <small style="color:var(--muted);">(${escapeHtml(sec.sectionName)})</small></td>
                <td><code>${escapeHtml(sub.subtemaId)}</code> <small style="color:var(--muted);">(${escapeHtml(sub.subtemaName)})</small></td>
                <td><code>${escapeHtml(law.lawId)}</code> <small style="color:var(--muted);">(${escapeHtml(law.lawName)})</small></td>
                <td style="text-align:right;">
                  <button type="button" class="btn btn-soft btn-small js-use-template"
                    data-sec="${escapeAttr(sec.sectionId)}"
                    data-sub="${escapeAttr(sub.subtemaId)}"
                    data-law="${escapeAttr(law.lawId)}">Usar en plantilla</button>
                </td>
              </tr>`
            )
            .join('')
        )
        .join('')
    )
    .join('');

  body.innerHTML = `
    <div class="upload-guide-box">
      <div class="upload-guide-header">
        <div>
          <h3>Guía de formato para subir preguntas (<code>.json</code>)</h3>
          <p class="admin-sub">Puedes subir desde 1 hasta 500 preguntas en un solo archivo JSON. Si un <code>id</code> ya existe, se actualizará automáticamente.</p>
        </div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
          <button type="button" id="btn-load-example" class="btn btn-gold btn-small">Cargar ejemplo en el editor</button>
          <button type="button" id="btn-download-template" class="btn btn-soft btn-small">Descargar plantilla .json</button>
        </div>
      </div>

      <div class="upload-guide-grid">
        <div class="upload-guide-col">
          <h4>1. Reglas de los campos</h4>
          <ul class="upload-rules-list">
            <li><code>id</code>: Único por pregunta, solo minúsculas, números y guiones (ej. <code>prod-f-16</code>). Usa sufijo <code>-f-</code> (fácil), <code>-m-</code> (medio) o <code>-h-</code> (difícil).</li>
            <li><code>section</code>, <code>subtema</code>, <code>law</code>: Identificadores del tema (puedes ponerlos una sola vez en la raíz del JSON o dentro de cada pregunta).</li>
            <li><code>difficulty</code>: Solo acepta <code>"easy"</code>, <code>"medium"</code> o <code>"hard"</code>.</li>
            <li><code>prompt</code>: Enunciado de la pregunta. Escribe las ecuaciones entre signos de pesos <code>$...$</code>.</li>
            <li><code>options</code>: Arreglo de <strong>exactamente 4 objetos</strong> <code>{"latex": "...", "correct": true/false}</code>. Solo <strong>1 opción</strong> debe tener <code>"correct": true</code>.</li>
            <li><code>explanation</code>: Explicación paso a paso del razonamiento (también acepta <code>$...$</code>).</li>
            <li><strong>Nota LaTeX en JSON:</strong> Recuerda usar <strong>doble barra invertida</strong> <code>\\\\</code> para comandos LaTeX dentro de JSON (ejemplo: <code>"\\\\frac{1}{2}"</code>, <code>"\\\\sqrt{x}"</code>, <code>"\\\\int"</code>).</li>
          </ul>
        </div>
        <div class="upload-guide-col">
          <h4>2. Ejemplo de estructura válida</h4>
          <pre class="admin-code" style="margin:0;font-size:.78rem;max-height:245px;overflow:auto;">${escapeHtml(buildSampleTemplate())}</pre>
        </div>
      </div>

      <details class="upload-catalog-details">
        <summary>Ver catálogo de identificadores válidos (<code>section</code> / <code>subtema</code> / <code>law</code>)</summary>
        <div class="questions-table-wrap" style="margin-top:.75rem;max-height:260px;overflow-y:auto;">
          <table class="questions-table">
            <thead>
              <tr><th>section</th><th>subtema</th><th>law</th><th style="text-align:right;">Acción rápida</th></tr>
            </thead>
            <tbody>${catalogRowsHtml}</tbody>
          </table>
        </div>
      </details>
    </div>

    <div class="upload-editor-section">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem;margin-bottom:.65rem;">
        <label for="upload-textarea" style="font-weight:700;color:var(--unach-navy);">Selecciona un archivo <code>.json</code> o pega el contenido aquí:</label>
        <input id="upload-file" type="file" accept=".json,application/json" class="btn btn-soft btn-small" />
      </div>

      <textarea id="upload-textarea" rows="12" placeholder='Pega aquí tu JSON o pulsa "Cargar ejemplo en el editor"…'
        style="width:100%;font-family:var(--font-mono);font-size:.86rem;padding:.85rem;border:1.5px solid var(--line-strong);border-radius:var(--radius-sm);background:var(--paper);"></textarea>

      <div style="display:flex;gap:.65rem;align-items:center;flex-wrap:wrap;margin-top:.85rem;">
        <button id="upload-preview" class="btn btn-soft" type="button">1. Validar y Previsualizar LaTeX</button>
        <button id="upload-commit" class="btn btn-primary" type="button" disabled>2. Insertar en Base de Datos</button>
      </div>

      <div id="upload-msg" class="auth-msg" style="margin-top:.85rem;"></div>
      <div id="upload-preview-body" style="margin-top:1rem;"></div>
    </div>`;

  const file = body.querySelector('#upload-file');
  const ta = body.querySelector('#upload-textarea');
  const previewBtn = body.querySelector('#upload-preview');
  const commitBtn = body.querySelector('#upload-commit');
  const previewBody = body.querySelector('#upload-preview-body');
  const msg = body.querySelector('#upload-msg');

  let validated = null;

  function doValidate() {
    const r = validateQuestionJSON(ta.value);
    if (!r.ok) {
      msg.textContent = 'Error de validación: ' + r.error;
      msg.className = 'auth-msg auth-err';
      previewBody.innerHTML = '';
      commitBtn.disabled = true;
      validated = null;
      return;
    }
    validated = r;
    msg.textContent = `✓ ${r.questions.length} pregunta(s) validada(s) correctamente. Revisa la vista previa antes de insertar.`;
    msg.className = 'auth-msg auth-ok';
    previewBody.innerHTML = renderPreview(r.questions);
    commitBtn.disabled = false;
  }

  // Botón cargar ejemplo
  body.querySelector('#btn-load-example')?.addEventListener('click', () => {
    ta.value = buildSampleTemplate();
    doValidate();
  });

  // Botón descargar plantilla
  body.querySelector('#btn-download-template')?.addEventListener('click', () => {
    const blob = new Blob([buildSampleTemplate()], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'plantilla_preguntas_unach.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Botones "Usar en plantilla" de la tabla de catálogo
  body.querySelectorAll('.js-use-template').forEach((btn) => {
    btn.addEventListener('click', () => {
      ta.value = buildSampleTemplate(btn.dataset.sec, btn.dataset.sub, btn.dataset.law);
      doValidate();
      ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  file.addEventListener('change', async () => {
    const f = file.files[0];
    if (!f) return;
    ta.value = await f.text();
    doValidate();
  });

  ta.addEventListener('input', () => {
    validated = null;
    commitBtn.disabled = true;
  });

  previewBtn.addEventListener('click', doValidate);

  commitBtn.addEventListener('click', async () => {
    if (!validated || !validated.questions?.length) return;
    try {
      commitBtn.disabled = true;
      commitBtn.textContent = 'Insertando…';
      await insertQuestions(validated.questions);
      msg.textContent = `✓ Se insertaron/actualizaron ${validated.questions.length} pregunta(s) exitosamente en la base de datos.`;
      msg.className = 'auth-msg auth-ok';
      ta.value = '';
      file.value = '';
      validated = null;
      previewBody.innerHTML = '';
    } catch (err) {
      commitBtn.disabled = false;
      msg.textContent = 'Error al insertar en la base de datos: ' + err.message;
      msg.className = 'auth-msg auth-err';
    } finally {
      commitBtn.textContent = '2. Insertar en Base de Datos';
    }
  });
}

function renderPreview(questions) {
  return `
    <div class="upload-preview-card">
      <h4 style="margin-bottom:.75rem;">Vista previa matemática (${questions.length} reactivos)</h4>
      <ol class="preview-list">
        ${questions
          .slice(0, 10)
          .map(
            (q) => `
          <li class="preview-item">
            <div class="preview-item-head">
              <code>${escapeHtml(q.id)}</code>
              <span>${escapeHtml(q.section_id)} → ${escapeHtml(q.subtema_id)} → ${escapeHtml(q.law_id)}</span>
              ${diffBadge(q.difficulty)}
            </div>
            <div class="preview-prompt">${renderMixedText(q.prompt)}</div>
            <div class="preview-opts-grid">
              ${q.options
                .map(
                  (o, idx) => `
                <div class="preview-opt ${o.correct ? 'is-correct' : ''}">
                  <strong>${idx + 1})</strong> ${renderLatexInline(o.latex, false)}
                </div>`
                )
                .join('')}
            </div>
            <div class="preview-expl"><strong>Explicación:</strong> ${renderMixedText(q.explanation)}</div>
          </li>`
          )
          .join('')}
        ${questions.length > 10 ? `<li style="padding:.5rem;color:var(--muted);"><em>… y ${questions.length - 10} pregunta(s) más validadas.</em></li>` : ''}
      </ol>
    </div>`;
}
