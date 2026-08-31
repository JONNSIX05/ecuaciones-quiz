// data/calculo-diferencial/derivacion/preguntas-trig.js
// Pool de derivación — Bloque XIII–XIX: trigonométricas directas.
// 15 preguntas (5 easy / 5 medium / 5 hard).

export default [
  // ---------- Fáciles (5) ----------
  {
    id: 'dert-f-01',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\sin x$',
    options: [
      { latex: '\\cos x', correct: true },
      { latex: '-\\cos x', correct: false },
      { latex: '\\sin x', correct: false },
      { latex: '-\\sin x', correct: false }
    ],
    explanation: 'Fórmula XIII con $v = x$: la derivada del seno es el coseno.'
  },
  {
    id: 'dert-f-02',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\cos x$',
    options: [
      { latex: '-\\sin x', correct: true },
      { latex: '\\sin x', correct: false },
      { latex: '\\cos x', correct: false },
      { latex: '-\\cos x', correct: false }
    ],
    explanation: 'Fórmula XIV: la derivada del coseno es menos seno. El signo negativo es clave.'
  },
  {
    id: 'dert-f-03',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\tan x$',
    options: [
      { latex: '\\sec^2 x', correct: true },
      { latex: '\\tan^2 x', correct: false },
      { latex: '\\cot x', correct: false },
      { latex: '\\frac{1}{\\cos x}', correct: false }
    ],
    explanation: 'Fórmula XV: la derivada de la tangente es secante al cuadrado.'
  },
  {
    id: 'dert-f-04',
    difficulty: 'easy',
    prompt: '¿Qué regla usas para derivar $f(x) = \\tan x$?',
    options: [
      { latex: '\\text{Derivada de la tangente (XV)}', correct: true },
      { latex: '\\text{Regla del cociente (VII) obligatoriamente}', correct: false },
      { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
      { latex: '\\text{Derivada del seno (XIII)}', correct: false }
    ],
    explanation: 'Fórmula directa XV: $\\frac{d}{dx}(\\tan x) = \\sec^2 x$.'
  },
  {
    id: 'dert-f-05',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula XVI para $\\frac{d}{dx}(\\cot v)$?',
    options: [
      { latex: '-\\csc^2 v \\cdot \\frac{dv}{dx}', correct: true },
      { latex: '\\csc^2 v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '-\\sec^2 v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '\\cot^2 v \\cdot \\frac{dv}{dx}', correct: false }
    ],
    explanation: 'La cotangente deriva menos cosecante al cuadrado.'
  },

  // ---------- Medias (5) ----------
  {
    id: 'dert-m-01',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\sec x$',
    options: [
      { latex: '\\sec x \\tan x', correct: true },
      { latex: '\\sec^2 x', correct: false },
      { latex: '\\sec x \\cot x', correct: false },
      { latex: '-\\sec x \\tan x', correct: false }
    ],
    explanation: 'Fórmula XVII: la secante deriva secante por tangente.'
  },
  {
    id: 'dert-m-02',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\csc x$',
    options: [
      { latex: '-\\csc x \\cot x', correct: true },
      { latex: '\\csc x \\cot x', correct: false },
      { latex: '-\\csc^2 x', correct: false },
      { latex: '\\csc x \\tan x', correct: false }
    ],
    explanation: 'Fórmula XVIII: menos cosecante por cotangente.'
  },
  {
    id: 'dert-m-03',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\operatorname{vers} x$',
    options: [
      { latex: '\\sin x', correct: true },
      { latex: '-\\sin x', correct: false },
      { latex: '\\cos x', correct: false },
      { latex: '1 - \\cos x', correct: false }
    ],
    explanation: 'Fórmula XIX con $v = x$: $(1 - \\cos x)\' = 0 + \\sin x = \\sin x$.'
  },
  {
    id: 'dert-m-04',
    difficulty: 'medium',
    prompt: '¿Cuál derivada lleva signo negativo?',
    options: [
      { latex: '\\frac{d}{dx}(\\cos x)', correct: true },
      { latex: '\\frac{d}{dx}(\\sin x)', correct: false },
      { latex: '\\frac{d}{dx}(\\tan x)', correct: false },
      { latex: '\\frac{d}{dx}(\\sec x)', correct: false }
    ],
    explanation: 'Fórmula XIV: $(\\cos x)\' = -\\sin x$. Las derivadas de $\\sin$, $\\tan$ y $\\sec$ son positivas en esa forma.'
  },
  {
    id: 'dert-m-05',
    difficulty: 'medium',
    prompt: '¿Qué reglas usas para derivar $f(x) = \\operatorname{vers} x$ (seno verso)?',
    options: [
      { latex: '\\text{Derivada del verso (XIX), o escribir } 1 - \\cos x \\text{ y derivar}', correct: true },
      { latex: '\\text{Solo regla de la potencia (VIa)}', correct: false },
      { latex: '\\text{Regla del producto (V)}', correct: false },
      { latex: '\\text{No se puede derivar}', correct: false }
    ],
    explanation: '$\\operatorname{vers} x = 1 - \\cos x$: derivando queda $\\sin x$ (fórmula XIX).'
  },

  // ---------- Difíciles (5) ----------
  {
    id: 'dert-h-01',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\sin x + \\cos x$',
    options: [
      { latex: '\\cos x - \\sin x', correct: true },
      { latex: '\\cos x + \\sin x', correct: false },
      { latex: '-\\cos x - \\sin x', correct: false },
      { latex: '\\sin x - \\cos x', correct: false }
    ],
    explanation: 'Suma (III) con XIII y XIV: $\\cos x + (-\\sin x) = \\cos x - \\sin x$.'
  },
  {
    id: 'dert-h-02',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\tan x + \\cot x$',
    options: [
      { latex: '\\sec^2 x - \\csc^2 x', correct: true },
      { latex: '\\sec^2 x + \\csc^2 x', correct: false },
      { latex: '\\csc^2 x - \\sec^2 x', correct: false },
      { latex: '\\sec^2 x \\cdot \\csc^2 x', correct: false }
    ],
    explanation: 'Fórmulas XV y XVI: $\\sec^2 x + (-\\csc^2 x) = \\sec^2 x - \\csc^2 x$.'
  },
  {
    id: 'dert-h-03',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = 2 \\sec x$',
    options: [
      { latex: '2 \\sec x \\tan x', correct: true },
      { latex: '2 \\sec^2 x', correct: false },
      { latex: '\\sec x \\tan x', correct: false },
      { latex: '2 \\tan x', correct: false }
    ],
    explanation: 'Constante por función (IV) + fórmula XVII: $2 \\sec x \\tan x$.'
  },
  {
    id: 'dert-h-04',
    difficulty: 'hard',
    prompt: '¿Cuál es la fórmula XVII para $\\frac{d}{dx}(\\sec v)$?',
    options: [
      { latex: '\\sec v \\tan v \\cdot \\frac{dv}{dx}', correct: true },
      { latex: '\\sec^2 v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '\\sec v \\cot v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '-\\sec v \\tan v \\cdot \\frac{dv}{dx}', correct: false }
    ],
    explanation: 'La secante deriva secante por tangente, por la derivada del argumento.'
  },
  {
    id: 'dert-h-05',
    difficulty: 'hard',
    prompt: '¿Qué fórmula del formulario corresponde a $\\frac{d}{dx}(\\operatorname{vers} v)$?',
    options: [
      { latex: '\\sin v \\cdot \\frac{dv}{dx} \\text{ (XIX)}', correct: true },
      { latex: '\\cos v \\cdot \\frac{dv}{dx} \\text{ (XIII)}', correct: false },
      { latex: '-\\sin v \\cdot \\frac{dv}{dx} \\text{ (XIV)}', correct: false },
      { latex: '\\sec^2 v \\cdot \\frac{dv}{dx} \\text{ (XV)}', correct: false }
    ],
    explanation: 'Como $\\operatorname{vers} v = 1 - \\cos v$, su derivada es $\\sin v \\cdot \\frac{dv}{dx}$: fórmula XIX.'
  }
];
