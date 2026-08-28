// data/algebra/logaritmos/index.js
// Subtema: Propiedades de los logaritmos (5 leyes).

import definicion from './definicion.js';
import producto from './producto.js';
import cociente from './cociente.js';
import potencia from './potencia.js';
import cambioBase from './cambio-base.js';

export default {
  id: 'logaritmos',
  name: 'Propiedades de los logaritmos',
  laws: [definicion, producto, cociente, potencia, cambioBase],
};
