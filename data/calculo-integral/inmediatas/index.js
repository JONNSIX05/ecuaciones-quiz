// data/calculo-integral/inmediatas/index.js
// Subtema: Integrales inmediatas (fórmulas 1–23 + sustitución).
// Una sola ley con todas las preguntas + pantalla de estudio (formulario).

import preguntas from './preguntas-inmediatas.js';

export default {
  id: 'inmediatas',
  name: 'Integrales inmediatas',
  laws: [
    {
      lawId: 'inmediatas',
      lawName: 'Integrales inmediatas (fórmulas 1–23)',
      lawFormula: '\\int f(v)\\,dv',
      prerequisites: 'Álgebra, exponentes, trigonometría e identidades básicas.',
      available: true,
      questions: preguntas,
    },
  ],
  studyContent: {
    title: 'Formulario de integrales inmediatas (1–23)',
    intro:
      'Revisa las fórmulas antes de empezar. Podrás consultarlas de nuevo durante el quiz.',
    groups: [
      { title: 'Linealidad y básicas', sectionIndex: 0 },
      { title: 'Potencia y logaritmo', sectionIndex: 1 },
      { title: 'Exponenciales', sectionIndex: 2 },
      { title: 'Trigonométricas directas', sectionIndex: 3 },
      { title: 'Trigonométricas no directas', sectionIndex: 4 },
      { title: 'Con inversas trigonométricas y logaritmos', sectionIndex: 5 },
      { title: 'Con raíces cuadradas', sectionIndex: 6 },
    ],
    ctaLabel: 'Empezar quiz',
  },
};
