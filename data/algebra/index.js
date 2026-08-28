// data/algebra/index.js
// Registro central de subtemas de la sección Álgebra.

import exponentes from './exponentes/index.js';
import productosNotables from './productos-notables/index.js';
import trigonometria from './trigonometria/index.js';

export const sectionId = 'algebra';
export const sectionName = 'Álgebra';

export const subtemas = [exponentes, productosNotables, trigonometria];

/**
 * Devuelve todos los subtemas de Álgebra.
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
