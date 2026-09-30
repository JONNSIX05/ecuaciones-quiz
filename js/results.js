// js/results.js
// Adaptador para quiz_attempts: si hay sesión Supabase, persiste en la nube;
// si no, fallback a localStorage.

import { getSupabase } from './supabase.js';
import { getUser } from './auth.js';
import {
  saveResult as saveLocal,
  getResult as getLocal,
  clearResult as clearLocal,
} from './storage.js';

/**
 * @typedef {{sectionId:string,subtemaId:string,lawId:string,lawName:string,score:number,total:number,difficulty?:string}} AttemptInput
 */

/**
 * Guarda un intento de quiz. Primero intenta Supabase; si falla, va a localStorage.
 * @param {AttemptInput} attempt
 * @returns {Promise<{source:'cloud'|'local'}>}
 */
export async function saveAttempt(attempt) {
  const sb = getSupabase();
  if (sb) {
    try {
      const user = await getUser();
      if (user) {
        const { error } = await sb.from('quiz_attempts').insert({
          user_id: user.id,
          section_id: attempt.sectionId,
          subtema_id: attempt.subtemaId,
          law_id: attempt.lawId,
          law_name: attempt.lawName,
          score: attempt.score,
          total: attempt.total,
          difficulty: attempt.difficulty || 'balanced',
        });
        if (!error) {
          saveLocal(attempt.lawId, attempt); // cache local también
          return { source: 'cloud' };
        }
        // Si hubo error de schema, caemos a localStorage
      }
    } catch (_) {
      // ignorar y caer a local
    }
  }
  saveLocal(attempt.lawId, attempt);
  return { source: 'local' };
}

/**
 * Devuelve el último intento del usuario actual para una ley.
 * Si hay sesión: lee de Supabase; si no, de localStorage.
 * @param {string} lawId
 * @returns {Promise<object|null>}
 */
export async function getLatestByLaw(lawId) {
  const sb = getSupabase();
  if (sb) {
    try {
      const user = await getUser();
      if (user) {
        const { data, error } = await sb
          .from('quiz_attempts')
          .select('*')
          .eq('law_id', lawId)
          .order('created_at', { ascending: false })
          .limit(1);
        if (!error && data && data.length) return data[0];
      }
    } catch (_) {
      // ignorar
    }
  }
  return getLocal(lawId);
}

/**
 * Elimina el resultado guardado (local). En Supabase no borramos.
 * @param {string} lawId
 */
export function clearAttemptLocal(lawId) {
  clearLocal(lawId);
}
