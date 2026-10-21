// data/questions/client.js
// Fachada que carga preguntas desde la API del VPS con cache en memoria.

import { api } from '../../js/api.js';

const cache = new Map();
const TTL_MS = 60_000;
const PENDING = new Map();

function key(sectionId, subtemaId, lawId) {
  return `${sectionId}::${subtemaId}::${lawId}`;
}

/**
 * Devuelve las preguntas de una ley desde la API (con cache).
 */
export async function getQuestions(ref) {
  const k = key(ref.sectionId, ref.subtemaId, ref.lawId);
  const cached = cache.get(k);
  if (cached && (Date.now() - cached.ts) < TTL_MS) {
    return cached.list;
  }
  if (PENDING.has(k)) return PENDING.get(k);

  const promise = (async () => {
    try {
      const q = new URLSearchParams({
        sectionId: ref.sectionId,
        subtemaId: ref.subtemaId,
        lawId: ref.lawId,
      });
      const data = await api.get(`/questions?${q.toString()}`);
      const list = data?.questions ?? [];
      cache.set(k, { list, ts: Date.now() });
      return list;
    } catch (_) {
      return cached ? cached.list : [];
    }
  })();

  PENDING.set(k, promise);
  try {
    return await promise;
  } finally {
    PENDING.delete(k);
  }
}

/**
 * Devuelve un objeto ley con `questions[]`.
 */
export async function getLaw(ref) {
  const list = await getQuestions(ref);
  return {
    lawId: ref.lawId,
    questions: list,
  };
}

/** Limpia el cache (útil tras CRUD). */
export function invalidateCache() {
  cache.clear();
}

/** Inserta un array de preguntas (panel admin). */
export async function insertQuestions(rows) {
  await api.post('/admin/questions', rows);
  invalidateCache();
}

/** Actualiza una pregunta por su id. */
export async function updateQuestion(id, fields) {
  await api.patch(`/admin/questions/${encodeURIComponent(id)}`, fields);
  invalidateCache();
}

/** Elimina una pregunta por su id. */
export async function deleteQuestion(id) {
  await api.del(`/admin/questions/${encodeURIComponent(id)}`);
  invalidateCache();
}

/**
 * Lista preguntas por sección/subtema/ley (DEPRECATED: usar listQuestionsRange).
 */
export async function listQuestions(filter = {}) {
  const q = new URLSearchParams();
  if (filter.sectionId) q.set('section_id', filter.sectionId);
  if (filter.subtemaId) q.set('subtema_id', filter.subtemaId);
  if (filter.lawId) q.set('law_id', filter.lawId);
  q.set('from', '0');
  q.set('to', '500');
  const res = await api.get(`/admin/questions?${q.toString()}`);
  return res?.rows ?? [];
}

/**
 * Lista paginada con búsqueda para el panel de administración.
 * @param {{from:number, to:number, section_id?:string, subtema_id?:string, law_id?:string, difficulty?:string, search?:string}} filter
 * @returns {Promise<{rows:object[], count:number, from:number}>}
 */
export async function listQuestionsRange(filter = {}) {
  const q = new URLSearchParams();
  if (Number.isFinite(filter.from)) q.set('from', String(filter.from));
  if (Number.isFinite(filter.to)) q.set('to', String(filter.to));
  if (filter.section_id) q.set('section_id', filter.section_id);
  if (filter.subtema_id) q.set('subtema_id', filter.subtema_id);
  if (filter.law_id) q.set('law_id', filter.law_id);
  if (filter.difficulty) q.set('difficulty', filter.difficulty);
  if (filter.search) q.set('search', filter.search);

  const res = await api.get(`/admin/questions?${q.toString()}`);
  return {
    rows: res?.rows ?? [],
    count: res?.count ?? 0,
    from: res?.from ?? (filter.from || 0),
  };
}
