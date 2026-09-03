// data/practica-libre/index.js
// Registro de la sección "Práctica libre" (misma API que las demás secciones).

import { rules } from './rules.js';

export const sectionId = 'practica-libre';
export const sectionName = 'Práctica libre';

export const subtemas = [
  {
    id: 'practica-libre',
    name: 'Práctica libre',
    available: true,
    rules,
  },
];

/**
 * Devuelve todos los subtemas de la sección.
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
 * Devuelve una regla dentro de un subtema.
 * @param {string} subtemaId
 * @param {string} ruleId
 * @returns {object|null}
 */
export function getLaw(subtemaId, ruleId) {
  const sub = getSubtema(subtemaId);
  if (!sub) return null;
  return sub.rules.find((r) => r.id === ruleId) || null;
}
