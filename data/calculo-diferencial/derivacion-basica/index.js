// data/calculo-diferencial/derivacion-basica/index.js
// Subtema: Reglas básicas de derivación (8 leyes, fórmulas I–VIIa y IX).

import constante from './constante.js';
import identidad from './identidad.js';
import sumaResta from './suma-resta.js';
import constanteFuncion from './constante-producto.js';
import producto from './producto.js';
import potencia from './potencia.js';
import cociente from './cociente.js';
import funcionInversa from './inversa.js';

export default {
  id: 'derivacion-basica',
  name: 'Reglas básicas de derivación',
  laws: [
    constante,
    identidad,
    sumaResta,
    constanteFuncion,
    producto,
    potencia,
    cociente,
    funcionInversa,
  ],
};
