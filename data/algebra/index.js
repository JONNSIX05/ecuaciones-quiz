// data/algebra/index.js
// Registro central de subtemas de la sección Álgebra.

import exponentes from './exponentes/index.js';
import productosNotables from './productos-notables/index.js';
import trigonometria from './trigonometria/index.js';
import logaritmos from './logaritmos/index.js';
import divisionPolinomios from './division-polinomios/index.js';
import complejos from './complejos/index.js';
import cuadratica from './cuadratica/index.js';

export const sectionId = 'algebra';
export const sectionName = 'Álgebra';

export const subtemas = [
  exponentes,
  productosNotables,
  trigonometria,
  logaritmos,
  divisionPolinomios,
  complejos,
  cuadratica,
];

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
