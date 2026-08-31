// data/calculo-integral/index.js
// Registro central de subtemas de la sección Cálculo Integral.

import inmediatas from './inmediatas/index.js';
import partes from './partes/index.js';
import fraccionesParciales from './fracciones-parciales/index.js';
import sustitucionTrigonometrica from './sustitucion-trigonometrica/index.js';

export const sectionId = 'calculo-integral';
export const sectionName = 'Cálculo Integral';

export const subtemas = [
  inmediatas,
  partes,
  fraccionesParciales,
  sustitucionTrigonometrica,
];

/**
 * Devuelve todos los subtemas de Cálculo Integral.
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
