// data/calculo-diferencial/derivacion/index.js
// Subtema: Derivación (pool unificado de fórmulas I–XXVI).
// Una sola ley con todas las preguntas + pantalla de estudio previa.

import preguntasBasicas from './preguntas-basicas.js';
import preguntasLogExp from './preguntas-log-exp.js';
import preguntasTrig from './preguntas-trig.js';
import preguntasTrigInv from './preguntas-trig-inv.js';

const questions = [
  ...preguntasBasicas,
  ...preguntasLogExp,
  ...preguntasTrig,
  ...preguntasTrigInv,
];

export default {
  id: 'derivacion',
  name: 'Derivación',
  laws: [
    {
      lawId: 'derivacion',
      lawName: 'Reglas de derivación (I–XXVI)',
      lawFormula: '\\text{Fórmulas I a XXVI del formulario}',
      prerequisites: 'Álgebra, exponentes, trigonometría y logaritmos.',
      available: true,
      questions,
    },
  ],
  studyContent: {
    title: 'Formulario de derivación (I–XXVI)',
    intro:
      'Revisa las fórmulas antes de empezar. Podrás consultarlas de nuevo durante el quiz.',
    groups: [
      { title: 'Reglas básicas', sectionIndex: 0 },
      { title: 'Regla de la cadena y función inversa', sectionIndex: 1 },
      { title: 'Logarítmicas y exponenciales', sectionIndex: 2 },
      { title: 'Trigonométricas', sectionIndex: 3 },
      { title: 'Trigonométricas inversas', sectionIndex: 4 },
    ],
    ctaLabel: 'Empezar quiz',
  },
};
