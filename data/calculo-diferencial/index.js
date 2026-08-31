// data/calculo-diferencial/index.js
// Registro central de subtemas de la sección Cálculo Diferencial.

import limites from './limites/index.js';
import derivacion from './derivacion/index.js';

export const sectionId = 'calculo-diferencial';
export const sectionName = 'Cálculo Diferencial';

export const subtemas = [limites, derivacion];

/**
 * Devuelve todos los subtemas de Cálculo Diferencial.
 * @returns {object[]}
 */
export function getAllSubtemas() {
  return subtemas;
}

/**
 * Devuelve un subtema por su `id`.
 * @param {string} id
 * @returns {object|null}
 */
export function getSubtema(id) {
  return subtemas.find((s) => s.id === id) || null;
}

/**
 * Devuelve una ley dentro de un subtema.
 * @param {string} subtemaId
 * @param {string} lawId
 * @returns {object|null}
 */
export function getLaw(subtemaId, lawId) {
  const sub = getSubtema(subtemaId);
  if (!sub) return null;
  return sub.laws.find((l) => l.lawId === lawId) || null;
}
