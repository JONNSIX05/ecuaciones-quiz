// data/calculo-diferencial/trascendentes/index.js
// Subtema: Funciones trascendentes (5 leyes, fórmulas X–XXVI).

import exponencial from './exponencial.js';
import logaritmica from './logaritmica.js';
import trigonometrica from './trigonometrica.js';
import trigonometricaInversa from './trigonometrica-inversa.js';
import derivacionLogaritmica from './derivacion-logaritmica.js';

export default {
  id: 'trascendentes',
  name: 'Funciones trascendentes',
  laws: [
    exponencial,
    logaritmica,
    trigonometrica,
    trigonometricaInversa,
    derivacionLogaritmica,
  ],
};
