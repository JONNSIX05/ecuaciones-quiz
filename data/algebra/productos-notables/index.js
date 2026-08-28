// data/algebra/productos-notables/index.js
// Subtema: Productos notables y factorización (8 leyes).

import binomioCuadrado from './binomio-cuadrado.js';
import binomioCubo from './binomio-cubo.js';
import binomiosConjugados from './binomios-conjugados.js';
import trinomioCuadradoPerfecto from './trinomio-cuadrado-perfecto.js';
import diferenciaCuadrados from './diferencia-cuadrados.js';
import sumaCubos from './suma-cubos.js';
import diferenciaCubos from './diferencia-cubos.js';
import factorComun from './factor-comun.js';

export default {
  id: 'productos-notables',
  name: 'Productos notables y factorización',
  laws: [
    binomioCuadrado,
    binomioCubo,
    binomiosConjugados,
    trinomioCuadradoPerfecto,
    diferenciaCuadrados,
    sumaCubos,
    diferenciaCubos,
    factorComun,
  ],
};
