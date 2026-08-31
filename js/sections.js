// sections.js — Registro central de secciones del quiz.
// Cada entrada apunta al módulo índice de la sección (misma API que
// data/algebra/index.js: sectionId, sectionName, subtemas, getSubtema, getLaw).

import * as algebra from '../data/algebra/index.js';
import * as calculoDiferencial from '../data/calculo-diferencial/index.js';

export const sections = [
  {
    id: 'algebra',
    index: '01',
    name: 'Álgebra',
    desc: 'Exponentes, productos notables, trigonometría, logaritmos, complejos y más.',
    module: algebra,
    available: true,
  },
  {
    id: 'calculo-diferencial',
    index: '02',
    name: 'Cálculo Diferencial',
    desc: 'Límites, reglas de derivación, funciones trascendentes y regla de la cadena.',
    module: calculoDiferencial,
    available: true,
  },
  {
    id: 'calculo-integral',
    index: '03',
    name: 'Cálculo Integral',
    desc: 'Integrales y métodos de integración.',
    module: null,
    available: false,
  },
];

/**
 * Devuelve una sección por su `id`.
 * @param {string} id
 * @returns {object|null}
 */
export function getSection(id) {
  return sections.find((s) => s.id === id) || null;
}
