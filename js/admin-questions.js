// js/admin-questions.js
// Sub-vista CRUD de preguntas para el admin: explorar + editar + eliminar + subir JSON.

import { isAdmin } from './auth.js';
import { getSupabase } from './supabase.js';
import { listQuestions, updateQuestion, deleteQuestion, insertQuestions } from './questions.js';
import { validateQuestionJSON } from '../data/questions/upload-schema.js';
import { render, sanitize } from './latex.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function getSupabaseClient() {
  return getSupabase();
}

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
        <h2>Catálogo de preguntas</h2>
        <p class="admin-sub">Sube, edita o elimina preguntas del banco global.</p>
      </header>
      <div class="admin-tab-bar">
        <button data-tab="browse" class="admin-tab is-active">Explorar</button>
        <button data-tab="upload" class="admin-tab">Subir JSON</button>
      </div>
      <div id="admin-questions-body"></div>
    </section>`;

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

async function showBrowse() {
  const body = document.querySelector('#admin-questions-body');
  body.innerHTML = `<p class="admin-loading">Cargando preguntas…</p>`;
  try {
    const rows = await listQuestions();
    if (!rows.length) {
      body.innerHTML = `<p class="admin-empty">No hay preguntas en el catálogo.</p>`;
      return;
    }
    body.innerHTML = `
      <p class="admin-hint">${rows.length} preguntas en total. Click en una fila para editar.</p>
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sección</th>
              <th>Subtema</th>
              <th>Ley</th>
              <th>Dificultad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((r) => `
              <tr data-id="${escapeAttr(r.id)}">
                <td><code>${escapeHtml(r.id)}</code></td>
                <td>${escapeHtml(r.section_id)}</td>
                <td>${escapeHtml(r.subtema_id)}</td>
                <td>${escapeHtml(r.law_id)}</td>
                <td>${escapeHtml(r.difficulty)}</td>
                <td>
                  <button data-action="edit" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small">Editar</button>
                  <button data-action="delete" data-id="${escapeAttr(r.id)}" class="btn btn-soft btn-small" style="color:var(--wrong);">Eliminar</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;

    body.querySelectorAll('button[data-action]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        const row = rows.find((r) => r.id === id);
        if (action === 'edit') openEditor(body, row);
        if (action === 'delete') {
          if (!confirm(`¿Eliminar la pregunta ${id}?`)) return;
          try { await deleteQuestion(id); showBrowse(); } catch (e) { alert(e.message); }
        }
      });
    });
  } catch (e) {
    body.innerHTML = `<div class="alert-warn"><strong>Error:</strong> ${escapeHtml(e.message)}</div>`;
  }
}

function openEditor(body, row) {
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
      showBrowse();
    } catch (err) {
      alert('Error al guardar: ' + err.message);
    }
  });
}

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
    const sb = getSupabaseClient();
    if (!sb) { alert('Supabase no disponible'); return; }
    const rows = validated.questions.map((q) => ({
      id: q.id,
      section_id: meta.sectionId || q.section || prompt('Sección:') || '',
      subtema_id: meta.subtemaId || q.subtema || prompt('Subtema:') || '',
      law_id:     meta.lawId     || q.law     || prompt('Ley:')     || '',
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
      showBrowse();
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