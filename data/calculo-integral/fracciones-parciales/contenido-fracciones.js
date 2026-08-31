// data/calculo-integral/fracciones-parciales/contenido-fracciones.js
// Resumen teórico para la pantalla de estudio de fracciones parciales.

export const contenido = [
  {
    title: 'Pasos del método',
    items: [
      {
        id: 'FP1',
        formula: '\\frac{P(x)}{Q(x)}',
        desc: 'Verifica que grado de P(x) < grado de Q(x). Si no, haz división larga primero.',
      },
      {
        id: 'FP2',
        formula: 'Q(x) \\to \\text{factores}',
        desc: 'Factoriza el denominador en factores lineales y cuadráticos irreducibles.',
      },
      {
        id: 'FP3',
        formula: '\\frac{P(x)}{Q(x)} = \\frac{A}{x+a} + \\frac{B}{x+b} + \\dots',
        desc: 'Escribe la descomposición según el tipo de cada factor.',
      },
      {
        id: 'FP4',
        formula: 'A, B, C \\dots',
        desc: 'Determina las constantes (evaluando o igualando coeficientes).',
      },
      {
        id: 'FP5',
        formula: '\\int \\frac{A}{x+a}\\,dx = A\\ln|x+a| + C',
        desc: 'Integra cada término: los lineales dan logaritmos; los cuadráticos, arctan.',
      },
    ],
  },
  {
    title: 'Tipos de factor y descomposición',
    items: [
      {
        id: 'T1',
        formula: '\\frac{1}{(x+a)(x+b)} = \\frac{A}{x+a} + \\frac{B}{x+b}',
        desc: 'Factores lineales distintos.',
      },
      {
        id: 'T2',
        formula: '\\frac{1}{(x+a)^2} = \\frac{A}{x+a} + \\frac{B}{(x+a)^2}',
        desc: 'Factor lineal repetido: un término por cada potencia.',
      },
      {
        id: 'T3',
        formula: '\\frac{1}{(x^2 + ax + b)} = \\frac{Ax + B}{x^2 + ax + b}',
        desc: 'Factor cuadrático irreducible: numerador lineal Ax + B.',
      },
    ],
  },
];
