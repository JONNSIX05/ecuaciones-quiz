// js/admin-questions.js
// Sub-vista CRUD de preguntas para el admin: explorar (paginado + filtros + búsqueda) +
// editar + eliminar + subir JSON + ver detalle expandible.

import { isAdmin } from './auth.js';
import { getSupabase } from './supabase.js';
import { listQuestions, updateQuestion, deleteQuestion, insertQuestions, listQuestionsRange } from './questions.js';
import { validateQuestionJSON } from '../data/questions/upload-schema.js';
import { sections } from './sections.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;');
}

// Estado interno (módulo)
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

/**
 * Renderiza la sub-vista CRUD dentro de `view`.
 * @param {HTMLElement} view
 */
export async function renderAdminQuestions(view) {
  if (!(await isAdmin())) {
    view.innerHTML = `<div class="card"><h2>Acceso restringido</h2></div>`;
    return;
  }

  view.innerHTML = `
    <div class="back-row"><a class="back-link" href="#/admin">← Volver al dashboard</a></div>
    <section class="admin-card">
      <header class="admin-head">
        <div>
          <h2>Catálogo de preguntas</h2>
          <p class="admin-sub">Explora, edita o elimina reactivos del banco general de preguntas.</p>
        </div>
      </header>
      <div class="admin-tab-bar">
        <button data-tab="browse" class="admin-tab is-active">Explorar banco</button>
        <button data-tab="upload" class="admin-tab">Subir preguntas (JSON)</button>
      </div>
      <div id="admin-questions-body"></div>
    </section>`;

  const backLink = view.querySelector('.back-link');
  backLink?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/admin';
  });

  const tabs = view.querySelectorAll('.admin-tab');
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

// ============ Browse (paginado + filtros + búsqueda + detalle expandible) ============

async function showBrowse() {
  const body = document.querySelector('#admin-questions-body');
  if (!body) return;
  body.innerHTML = renderFilters() + `<div id="questions-result"><p class="admin-loading">Cargando preguntas…</p></div>`;
  bindFilters();
  populateSubtema();

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
      <select id="f-section" title="Sección">
        <option value="">Todas las secciones</option>
        ${sectionOptions}
      </select>
      <select id="f-subtema" title="Subtema">
        <option value="">Todos los subtemas</option>
      </select>
      <select id="f-law" title="Ley">
        <option value="">Todas las leyes</option>
      </select>
      <select id="f-diff" title="Dificultad">
        <option value="">Cualquier dificultad</option>
        <option value="easy"${f.difficulty === 'easy' ? ' selected' : ''}>Fácil</option>
        <option value="medium"${f.difficulty === 'medium' ? ' selected' : ''}>Medio</option>
        <option value="hard"${f.difficulty === 'hard' ? ' selected' : ''}>Difícil</option>
      </select>
      <input id="f-search" type="search" placeholder="Buscar en texto del ejercicio…" value="${escapeAttr(f.search)}">
      <button id="f-reset" class="btn btn-soft btn-small" type="button">Limpiar</button>
    </div>
  `;
}

function bindFilters() {
  const ids = ['f-section', 'f-subtema', 'f-law', 'f-diff', 'f-search'];
  for (const id of ids) {
    document.getElementById(id)?.addEventListener('input', () => {
      state.page = 1;
      if (id === 'f-section') {
        state.filters.section_id = document.getElementById(id).value;
        populateSubtema();
      } else if (id === 'f-subtema') {
        state.filters.subtema_id = document.getElementById(id).value;
        populateLaw();
      } else if (id === 'f-law') {
        state.filters.law_id = document.getElementById(id).value;
      } else if (id === 'f-diff') {
        state.filters.difficulty = document.getElementById(id).value;
      } else if (id === 'f-search') {
        state.filters.search = document.getElementById(id).value;
      }
      loadQuestions();
    });
  }
  document.getElementById('f-reset')?.addEventListener('click', () => {
    state.filters = { section_id: '', subtema_id: '', law_id: '', difficulty: '', search: '' };
    state.page = 1;
    showBrowse();
  });
}

function populateSubtema() {
  const sub = document.getElementById('f-subtema');
  const law = document.getElementById('f-law');
  if (!sub || !law) return;

  const currentSec = sections.find((s) => s.id === state.filters.section_id);
  const subs = currentSec?.module?.getAllSubtemas?.() || [];

  sub.innerHTML = '<option value="">Todos los subtemas</option>' +
    subs.map((s) => `<option value="${s.id}"${s.id === state.filters.subtema_id ? ' selected' : ''}>${escapeHtml(s.name)}</option>`).join('');

  state.filters.subtema_id = '';
  populateLaw();
}

function populateLaw() {
  const law = document.getElementById('f-law');
  if (!law) return;

  const currentSec = sections.find((s) => s.id === state.filters.section_id);
  const currentSub = currentSec?.module?.getSubtema?.(state.filters.subtema_id);
  const laws = currentSub?.laws || [];

  law.innerHTML = '<option value="">Todas las leyes</option>' +
    laws.map((l) => `<option value="${l.lawId}"${l.lawId === state.filters.law_id ? ' selected' : ''}>${escapeHtml(l.lawName || l.lawId)}</option>`).join('');

  state.filters.law_id = '';
}

async function loadQuestions() {
  const target = document.getElementById('questions-result');
  if (!target) return;
  target.innerHTML = `<p class="admin-loading">Cargando preguntas…</p>`;
  try {
    const from = (state.page - 1) * state.pageSize;
    const to = from + state.pageSize - 1;
    const res = await listQuestionsRange({
      from, to,
      section_id: state.filters.section_id || null,
      subtema_id: state.filters.subtema_id || null,
      law_id: state.filters.law_id || null,
      difficulty: state.filters.difficulty || null,
      search: state.filters.search || null,
    });
    currentRows = res.rows || [];
    target.innerHTML = renderQuestions(res);
    bindPagination();
    bindRowEvents(currentRows);
  } catch (e) {
    target.innerHTML = `<div class="alert-warn"><strong>Error:</strong> ${escapeHtml(e.message)}</div>`;
  }
}

function renderQuestions({ rows, count, from }) {
  if (count === 0 || !rows || rows.length === 0) {
    return '<p class="admin-empty">No hay preguntas (con esos filtros).</p>';
  }
  const safeRows = rows.map(r => {
    return `<tr data-id="${escapeAttr(r.id)}">
      <td><code>${escapeHtml(r.id)}</code></td>
      <td>${escapeHtml(r.section_id || '')}</td>
      <td>${escapeHtml(r.subtema_id || '')}</td>
      <td>${escapeHtml(r.law_id || '')}</td>
      <td>${escapeHtml(r.difficulty || '')}</td>
      <td>
        <button data-action="expand" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small">Ver</button>
        <button data-action="edit" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small">Editar</button>
        <button data-action="delete" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small" style="color:var(--wrong);">Eliminar</button>
      </td>
    </tr>
    <tr class="questions-detail-row" data-detail-id="${escapeAttr(r.id)}">
      <td colspan="6">
        <div class="questions-detail-content" data-id="${escapeAttr(r.id)}">
          <em>Cargando…</em>
        </div>
      </td>
    </tr>`;
  }).join('');

  const totalPages = Math.max(1, Math.ceil(count / state.pageSize));
  const start = (from ?? 0) + 1;
  const end = Math.min(start + rows.length - 1, count);
  return `
    <p class="admin-hint">Mostrando ${start}–${end} de ${count} (${totalPages} páginas).</p>
    <div class="questions-table-wrap">
      <table class="questions-table">
        <thead>
          <tr>
            <th>ID</th><th>Sección</th><th>Subtema</th><th>Ley</th><th>Dificultad</th><th></th>
          </tr>
        </thead>
        <tbody>${safeRows}</tbody>
      </table>
    </div>
    <div class="questions-pager">
      <button id="pg-prev" class="btn btn-soft btn-small" ${state.page<=1?'disabled':''}>« Anterior</button>
      <span>Página ${state.page} de ${totalPages}</span>
      <button id="pg-next" class="btn btn-soft btn-small" ${state.page>=totalPages?'disabled':''}>Siguiente »</button>
    </div>`;
}

function bindPagination() {
  document.getElementById('pg-prev')?.addEventListener('click', () => {
    if (state.page > 1) { state.page--; loadQuestions(); }
  });
  document.getElementById('pg-next')?.addEventListener('click', () => {
    state.page++; loadQuestions();
  });
}

function bindRowEvents(rows) {
  const body = document.querySelector('#admin-questions-body');
  body.querySelectorAll('button[data-action]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'expand') {
        toggleExpand(id);
        return;
      }
      if (action === 'edit') {
        const row = (rows || currentRows || []).find(r => r.id === id);
        if (!row) { alert('No se encontró la fila en memoria. Recarga la página.'); return; }
        openEditor(body, row);
        return;
      }
      if (action === 'delete') {
        if (!confirm(`¿Eliminar la pregunta ${id}?`)) return;
        try {
          await deleteQuestion(id);
          await loadQuestions();
        } catch (e) { alert(e.message); }
      }
    });
  });
}

let currentRows = null;

async function toggleExpand(id) {
  const detail = document.querySelector(`.questions-detail-row[data-detail-id="${id}"]`);
  if (!detail) return;
  detail.classList.toggle('is-open');
  if (!detail.classList.contains('is-open')) return;
  const content = detail.querySelector('.questions-detail-content');
  if (content.dataset.loaded === 'true') return;
  // Lazy load: cargamos la pregunta completa desde BD
  try {
    const sb = (await import('./supabase.js')).getSupabase();
    const { data } = await sb.from('questions').select('*').eq('id', id).maybeSingle();
    if (data) {
      content.innerHTML = renderDetail(data);
      content.dataset.loaded = 'true';
    }
  } catch (e) {
    content.innerHTML = 'Error: ' + escapeHtml(e.message);
  }
}

function renderDetail(q) {
  return `
    <div class="questions-detail-grid">
      <div><strong>Prompt:</strong> <code>${escapeHtml(q.prompt)}</code></div>
      <div><strong>Opciones:</strong>
        <ol>
          ${(q.options || []).map((o, i) => `<li${o.correct?' class="q-correct"':''}>${escapeHtml(o.latex || '')}</li>`).join('')}
        </ol>
      </div>
      <div><strong>Explicación:</strong> ${escapeHtml(q.explanation || '')}</div>
    </div>`;
}

async function openEditor(body, row) {
  const wrap = document.createElement('div');
  wrap.className = 'card mt-2';
  wrap.innerHTML = `
    <h3>Editar <code>${escapeHtml(row.id)}</code></h3>
    <form id="edit-form" class="auth-form">
      <label class="auth-field"><span>Dificultad</span>
        <select id="edit-diff">
          ${['easy','medium','hard'].map((d) => `<option value="${d}" ${d===row.difficulty?'selected':''}>${d}</option>`).join('')}
        </select>
      </label>
      <label class="auth-field"><span>Prompt (LaTeX)</span>
        <textarea id="edit-prompt" rows="3">${escapeHtml(row.prompt)}</textarea>
      </label>
      <label class="auth-field"><span>Options (JSON array)</span>
        <textarea id="edit-opts" rows="8">${escapeHtml(JSON.stringify(row.options, null, 2))}</textarea>
      </label>
      <label class="auth-field"><span>Explicación (HTML seguro)</span>
        <textarea id="edit-expl" rows="3">${escapeHtml(row.explanation ?? '')}</textarea>
      </label>
      <div class="d-flex" style="display:flex;gap:.5rem;">
        <button type="submit" class="btn btn-primary">Guardar</button>
        <button type="button" id="edit-cancel" class="btn btn-soft">Cancelar</button>
      </div>
    </form>`;
  body.appendChild(wrap);

  wrap.querySelector('#edit-cancel').addEventListener('click', () => wrap.remove());
  wrap.querySelector('#edit-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const difficulty = wrap.querySelector('#edit-diff').value;
    const promptText = wrap.querySelector('#edit-prompt').value.trim();
    let options;
    try { options = JSON.parse(wrap.querySelector('#edit-opts').value); }
    catch (err) { alert('Options no es JSON válido'); return; }
    const explanation = wrap.querySelector('#edit-expl').value;
    try {
      await updateQuestion(row.id, { difficulty, prompt: promptText, options, explanation });
      wrap.remove();
      await loadQuestions();
    } catch (err) {
      alert('Error al guardar: ' + err.message);
    }
  });
}

// ============ Subir JSON ============

function showUpload() {
  const body = document.querySelector('#admin-questions-body');
  body.innerHTML = `
    <p class="admin-hint">Sube un archivo <code>.json</code> con preguntas. Formato JSON:
      array de preguntas o <code>{section, subtema, law, questions:[...]}</code>.</p>
    <input id="upload-file" type="file" accept=".json,application/json" class="btn btn-soft mb-2" />
    <textarea id="upload-textarea" rows="10" style="width:100%;font-family:var(--font-mono);"
      class="js-api-json"></textarea>
    <div class="d-flex" style="display:flex;gap:.5rem;">
      <button id="upload-preview" class="btn btn-primary">Previsualizar</button>
      <button id="upload-commit" class="btn btn-primary" disabled>Insertar en BD</button>
    </div>
    <div id="upload-preview-body" class="mt-2"></div>
    <div id="upload-msg" class="auth-msg"></div>`;

  const file = body.querySelector('#upload-file');
  const ta = body.querySelector('#upload-textarea');
  const previewBtn = body.querySelector('#upload-preview');
  const commitBtn = body.querySelector('#upload-commit');
  const previewBody = body.querySelector('#upload-preview-body');
  const msg = body.querySelector('#upload-msg');

  let validated = null;

  file.addEventListener('change', async () => {
    const f = file.files[0];
    if (!f) return;
    ta.value = await f.text();
    doValidate();
  });
  ta.addEventListener('input', () => { validated = null; commitBtn.disabled = true; });

  function doValidate() {
    const r = validateQuestionJSON(ta.value);
    if (!r.ok) {
      msg.textContent = 'Error: ' + r.error;
      msg.className = 'auth-msg auth-err';
      previewBody.innerHTML = '';
      commitBtn.disabled = true;
      validated = null;
      return;
    }
    validated = r;
    msg.textContent = `${r.questions.length} preguntas validadas.`;
    msg.className = 'auth-msg auth-ok';
    previewBody.innerHTML = renderPreview(r.questions);
    commitBtn.disabled = false;
  }

  previewBtn.addEventListener('click', doValidate);
  commitBtn.addEventListener('click', async () => {
    if (!validated) return;
    const meta = validated.meta;
    const sb = (await import('./supabase.js')).getSupabase();
    if (!sb) { alert('Supabase no disponible'); return; }
    const rows = validated.questions.map((q) => ({
      id: q.id,
      section_id: meta.sectionId || q.section || '',
      subtema_id: meta.subtemaId || q.subtema || '',
      law_id:     meta.lawId     || q.law     || '',
      difficulty: q.difficulty,
      prompt: q.prompt,
      options: q.options,
      explanation: q.explanation ?? '',
    })).filter((r) => r.section_id && r.subtema_id && r.law_id);

    if (!rows.length) { alert('Faltan section/subtema/law en cada pregunta o en el JSON.'); return; }
    try {
      await insertQuestions(rows);
      msg.textContent = `Insertadas ${rows.length} preguntas.`;
      msg.className = 'auth-msg auth-ok';
      ta.value = '';
      file.value = '';
      validated = null;
      commitBtn.disabled = true;
      previewBody.innerHTML = '';
    } catch (err) {
      msg.textContent = 'Error al insertar: ' + err.message;
      msg.className = 'auth-msg auth-err';
    }
  });
}

function renderPreview(questions) {
  return `
    <details class="mt-1">
      <summary>Ver preview (${questions.length} preguntas)</summary>
      <ol class="preview-list">
        ${questions.slice(0, 5).map((q) => `
          <li>
            <div class="preview-prompt">${escapeHtml(q.prompt)}</div>
            <ul class="preview-opts">
              ${q.options.map((o) => `<li${o.correct?' class="preview-correct"':''}>${escapeHtml(o.latex)}</li>`).join('')}
            </ul>
          </li>`).join('')}
        ${questions.length > 5 ? `<li><em>... y ${questions.length - 5} más</em></li>` : ''}
      </ol>
    </details>`;
}