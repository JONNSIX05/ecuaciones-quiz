// data/algebra/exponentes/index.js
// Registro de las 8 leyes de los exponentes.

import producto from './producto.js';
import cociente from './cociente.js';
import potenciaPotencia from './potencia-potencia.js';
import potenciaProducto from './potencia-producto.js';
import potenciaCociente from './potencia-cociente.js';
import exponenteCero from './exponente-cero.js';
import exponenteNegativo from './exponente-negativo.js';
import exponenteFraccionario from './exponente-fraccionario.js';

const laws = [
  producto,
  cociente,
  potenciaPotencia,
  potenciaProducto,
  potenciaCociente,
  exponenteCero,
  exponenteNegativo,
  exponenteFraccionario,
];

export const sectionId = 'algebra';
export const sectionName = 'Álgebra';
export const topicName = 'Leyes de los exponentes';

/**
 * Devuelve todas las leyes (incluidas las aún no disponibles).
 * @returns {object[]}
 */
export function getAllLaws() {
  return laws;
}

/**
 * Devuelve una ley por su `lawId`.
 * @param {string} lawId
 * @returns {object|null}
 */
export function getLaw(lawId) {
  return laws.find((law) => law.lawId === lawId) || null;
}

/**
 * Devuelve solo las leyes disponibles (con preguntas cargadas).
 * @returns {object[]}
 */
export function getAvailableLaws() {
  return laws.filter((law) => law.available && law.questions.length > 0);
}
