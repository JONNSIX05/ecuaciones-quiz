// data/questions/client.js
// Fachada que carga preguntas desde Supabase con cache en memoria.

import { getSupabase } from '../../js/supabase.js';

const cache = new Map();
const TTL_MS = 60_000;
const PENDING = new Map();

function key(sectionId, subtemaId, lawId) {
  return `${sectionId}::${subtemaId}::${lawId}`;
}

function shape(row) {
  return {
    id: row.id,
    difficulty: row.difficulty,
    prompt: row.prompt,
    options: row.options,
    explanation: row.explanation ?? '',
  };
}

/**
 * Devuelve las preguntas de una ley desde Supabase (con cache).
 */
export async function getQuestions(ref) {
  const k = key(ref.sectionId, ref.subtemaId, ref.lawId);
  const cached = cache.get(k);
  if (cached && (Date.now() - cached.ts) < TTL_MS) {
    return cached.list;
  }
  if (PENDING.has(k)) return PENDING.get(k);

  const sb = getSupabase();
  if (!sb) return cached ? cached.list : [];

  const promise = (async () => {
    const { data, error } = await sb
      .from('questions')
      .select('id, difficulty, prompt, options, explanation')
      .eq('section_id', ref.sectionId)
      .eq('subtema_id', ref.subtemaId)
      .eq('law_id', ref.lawId);
    if (error) return [];
    const list = (data ?? []).map(shape);
    cache.set(k, { list, ts: Date.now() });
    return list;
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

/** Inserta un array de preguntas. */
export async function insertQuestions(rows) {
  const sb = getSupabase();
  if (!sb) throw new Error('SUPABASE_NOT_READY');
  const { error } = await sb.from('questions').insert(rows);
  if (error) throw error;
  invalidateCache();
}

/** Actualiza una pregunta por su id. */
export async function updateQuestion(id, fields) {
  const sb = getSupabase();
  if (!sb) throw new Error('SUPABASE_NOT_READY');
  const { error } = await sb.from('questions').update(fields).eq('id', id);
  if (error) throw error;
  invalidateCache();
}

/** Elimina una pregunta por su id. */
export async function deleteQuestion(id) {
  const sb = getSupabase();
  if (!sb) throw new Error('SUPABASE_NOT_READY');
  const { error } = await sb.from('questions').delete().eq('id', id);
  if (error) throw error;
  invalidateCache();
}

/**
 * Lista paginada con búsqueda en el campo `prompt`.
 * @param {{from:number, to:number, section_id?:string, subtema_id?:string, law_id?:string, difficulty?:string, search?:string}} filter
 * @returns {Promise<{rows:object[], count:number, from:number}>}
 */
export async function listQuestionsRange(filter = {}) {
  const sb = getSupabase();
  if (!sb) throw new Error('SUPABASE_NOT_READY');
  let q = sb.from('questions')
    .select('id, section_id, subtema_id, law_id, difficulty, prompt', { count: 'exact' })
    .order('id');
  if (filter.section_id) q = q.eq('section_id', filter.section_id);
  if (filter.subtema_id) q = q.eq('subtema_id', filter.subtema_id);
  if (filter.law_id) q = q.eq('law_id', filter.law_id);
  if (filter.difficulty) q = q.eq('difficulty', filter.difficulty);
  if (filter.search) q = q.ilike('prompt', '%s', filter.search);
  if (Number.isFinite(filter.from) && Number.isFinite(filter.to)) {
    q = q.range(filter.from, filter.to);
  }
  const { data, error, count } = await q;
  if (error) throw error;
  return {
    rows: data ?? [],
    count: count ?? 0,
    from: filter.from ?? 0,
  };
}