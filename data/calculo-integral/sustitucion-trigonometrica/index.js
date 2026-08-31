// data/calculo-integral/sustitucion-trigonometrica/index.js
// Subtema: Sustitución trigonométrica.

import preguntas from './preguntas-sustitucion.js';

export default {
  id: 'sustitucion-trigonometrica',
  name: 'Sustitución trigonométrica',
  laws: [
    {
      lawId: 'sustitucion-trigonometrica',
      lawName: 'Sustitución trigonométrica',
      lawFormula: 'x = a\\sin\\theta,\\ x = a\\tan\\theta,\\ x = a\\sec\\theta',
      prerequisites: 'Identidades trigonométricas y fórmulas 18–23.',
      available: true,
      questions: preguntas,
    },
  ],
};
