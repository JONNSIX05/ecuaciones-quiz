// data/calculo-integral/partes/index.js
// Subtema: Integración por partes.

import preguntas from './preguntas-partes.js';
import { contenido } from './contenido-partes.js';

export default {
  id: 'partes',
  name: 'Integración por partes',
  laws: [
    {
      lawId: 'partes',
      lawName: 'Integración por partes',
      lawFormula: '\\int u\\,dv = uv - \\int v\\,du',
      prerequisites: 'Integrales inmediatas y regla de la cadena.',
      available: true,
      questions: preguntas,
    },
  ],
  studyContent: {
    title: 'Resumen: integración por partes',
    intro:
      'Revisa la teoría antes de empezar. Podrás consultar el formulario durante el quiz.',
    groups: contenido,
    ctaLabel: 'Empezar quiz',
  },
};
