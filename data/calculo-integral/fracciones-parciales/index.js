// data/calculo-integral/fracciones-parciales/index.js
// Subtema: Integración por fracciones parciales.

import preguntas from './preguntas-fracciones-parciales.js';
import { contenido } from './contenido-fracciones.js';

export default {
  id: 'fracciones-parciales',
  name: 'Fracciones parciales',
  laws: [
    {
      lawId: 'fracciones-parciales',
      lawName: 'Integración por fracciones parciales',
      lawFormula: '\\int \\frac{P(x)}{Q(x)}\\,dx',
      prerequisites: 'Factorización de polinomios e integrales inmediatas.',
      available: true,
      questions: preguntas,
    },
  ],
  studyContent: {
    title: 'Resumen: fracciones parciales',
    intro:
      'Revisa la teoría antes de empezar. Podrás consultar el formulario durante el quiz.',
    groups: contenido,
    ctaLabel: 'Empezar quiz',
  },
};
