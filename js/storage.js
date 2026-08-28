// storage.js — Persistencia en localStorage (último intento por ley).

const PREFIX = 'eqd:';

function key(lawId) {
  return `${PREFIX}result:${lawId}`;
}

/**
 * Guarda el último resultado de una ley.
 * @param {string} lawId
 * @param {{score:number,total:number,date:number,difficulty:string}} result
 */
export function saveResult(lawId, result) {
  try {
    const payload = {
      lawId,
      score: result.score,
      total: result.total,
      date: result.date || Date.now(),
      difficulty: result.difficulty || 'balanced',
    };
    window.localStorage.setItem(key(lawId), JSON.stringify(payload));
  } catch (err) {
    // localStorage puede fallar en modo privado / file://. Ignorar.
  }
}

/**
 * Recupera el último resultado de una ley.
 * @param {string} lawId
 * @returns {object|null}
 */
export function getResult(lawId) {
  try {
    const raw = window.localStorage.getItem(key(lawId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.score !== 'number' || typeof parsed.total !== 'number') {
      return null;
    }
    return parsed;
  } catch (err) {
    return null;
  }
}

/**
 * Elimina el resultado guardado de una ley.
 * @param {string} lawId
 */
export function clearResult(lawId) {
  try {
    window.localStorage.removeItem(key(lawId));
  } catch (err) {
    // ignorar
  }
}
