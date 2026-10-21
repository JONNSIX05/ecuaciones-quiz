// js/results.js
// Adaptador para quiz_attempts: persiste en la API del VPS cuando hay sesión;
// si no, fallback a localStorage.

import { api } from './api.js';
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
 * Guarda un intento de quiz. Primero intenta la API; si falla, va a localStorage.
 * @param {AttemptInput} attempt
 * @returns {Promise<{source:'cloud'|'local'}>}
 */
export async function saveAttempt(attempt) {
  try {
    const user = await getUser();
    if (user) {
      await api.post('/attempts/quiz', {
        sectionId: attempt.sectionId,
        subtemaId: attempt.subtemaId,
        lawId: attempt.lawId,
        lawName: attempt.lawName || '',
        score: attempt.score,
        total: attempt.total,
        difficulty: attempt.difficulty || 'balanced',
      });
      saveLocal(attempt.lawId, attempt);
      return { source: 'cloud' };
    }
  } catch (_) {
    // Si la API falla, cae a almacenamiento local
  }

  saveLocal(attempt.lawId, attempt);
  return { source: 'local' };
}

/**
 * Devuelve el último intento del usuario actual para una ley.
 * Si hay sesión: consulta la API; si no, lee de localStorage.
 * @param {string} lawId
 * @returns {Promise<object|null>}
 */
export async function getLatestByLaw(lawId) {
  try {
    const user = await getUser();
    if (user) {
      const data = await api.get(`/attempts/quiz/latest?lawId=${encodeURIComponent(lawId)}`);
      if (data?.attempt) return data.attempt;
    }
  } catch (_) {
    // Fallback a almacenamiento local
  }
  return getLocal(lawId);
}

/**
 * Elimina el resultado guardado (local). En el servidor no borramos.
 * @param {string} lawId
 */
export function clearAttemptLocal(lawId) {
  clearLocal(lawId);
}
