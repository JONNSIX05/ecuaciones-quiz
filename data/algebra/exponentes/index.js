// data/algebra/exponentes/index.js
// Subtema: Leyes de los exponentes (8 leyes).

import producto from './producto.js';
import cociente from './cociente.js';
import potenciaPotencia from './potencia-potencia.js';
import potenciaProducto from './potencia-producto.js';
import potenciaCociente from './potencia-cociente.js';
import exponenteCero from './exponente-cero.js';
import exponenteNegativo from './exponente-negativo.js';
import exponenteFraccionario from './exponente-fraccionario.js';

export default {
  id: 'exponentes',
  name: 'Leyes de los exponentes',
  laws: [
    producto,
    cociente,
    potenciaPotencia,
    potenciaProducto,
    potenciaCociente,
    exponenteCero,
    exponenteNegativo,
    exponenteFraccionario,
  ],
};
