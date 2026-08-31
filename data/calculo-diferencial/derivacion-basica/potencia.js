// data/calculo-diferencial/derivacion-basica/potencia.js
// Ley (fórmulas VI y VIa): Potencia  ->  d/dx(x^n) = n x^{n-1}.

export default {
  lawId: 'der-potencia',
  lawName: 'Regla de la potencia',
  lawFormula: '\\frac{d}{dx}(x^n) = n x^{n-1}',
  prerequisites: 'Leyes de los exponentes (incluidos negativos y fraccionarios).',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dpot-f-01',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x^3$',
      options: [
        { latex: '3x^2', correct: true },
        { latex: 'x^2', correct: false },
        { latex: '3x^3', correct: false },
        { latex: '2x^3', correct: false }
      ],
      explanation:
        'Fórmula VIa: baja el exponente y réstale 1: $3x^{3-1} = 3x^2$.'
    },
    {
      id: 'dpot-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x^5$',
      options: [
        { latex: '5x^4', correct: true },
        { latex: 'x^4', correct: false },
        { latex: '5x^5', correct: false },
        { latex: '4x^5', correct: false }
      ],
      explanation:
        '$5x^{5-1} = 5x^4$.'
    },
    {
      id: 'dpot-f-03',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = x^7$?',
      options: [
        { latex: '\\text{Regla de la potencia (VIa)}', correct: true },
        { latex: '\\text{Regla del producto (V)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Derivada de la identidad (II)}', correct: false }
      ],
      explanation:
        'Es una potencia de $x$: directamente la fórmula VIa, $7x^6$.'
    },
    {
      id: 'dpot-f-04',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x^2$',
      options: [
        { latex: '2x', correct: true },
        { latex: 'x', correct: false },
        { latex: '2', correct: false },
        { latex: 'x^2', correct: false }
      ],
      explanation:
        '$2x^{2-1} = 2x$.'
    },
    {
      id: 'dpot-f-05',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula VIa?',
      options: [
        { latex: '\\frac{d}{dx}(x^n) = n x^{n-1}', correct: true },
        { latex: '\\frac{d}{dx}(x^n) = x^{n-1}', correct: false },
        { latex: '\\frac{d}{dx}(x^n) = n x^{n+1}', correct: false },
        { latex: '\\frac{d}{dx}(x^n) = (n-1) x^n', correct: false }
      ],
      explanation:
        'El exponente baja como coeficiente y el nuevo exponente es $n - 1$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dpot-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x^{-2}$',
      options: [
        { latex: '-2x^{-3}', correct: true },
        { latex: '2x^{-3}', correct: false },
        { latex: '-2x^{-1}', correct: false },
        { latex: '-\\frac{2}{x}', correct: false }
      ],
      explanation:
        'La fórmula vale para exponentes negativos: $-2x^{-2-1} = -2x^{-3}$.'
    },
    {
      id: 'dpot-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\sqrt{x}$',
      options: [
        { latex: '\\frac{1}{2\\sqrt{x}}', correct: true },
        { latex: '\\frac{1}{\\sqrt{x}}', correct: false },
        { latex: '2\\sqrt{x}', correct: false },
        { latex: '\\frac{\\sqrt{x}}{2}', correct: false }
      ],
      explanation:
        'Escribe $\\sqrt{x} = x^{1/2}$: $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.'
    },
    {
      id: 'dpot-m-03',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = x^{-4}$?',
      options: [
        { latex: '\\text{Regla de la potencia (VIa) con exponente negativo}', correct: true },
        { latex: '\\text{Regla del cociente (VII)}', correct: false },
        { latex: '\\text{Derivada de una constante (I)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false }
      ],
      explanation:
        'La potencia con exponente negativo se deriva igual: $-4x^{-5}$.'
    },
    {
      id: 'dpot-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x^{3/2}$',
      options: [
        { latex: '\\frac{3}{2} x^{1/2}', correct: true },
        { latex: '\\frac{3}{2} x^{3/2}', correct: false },
        { latex: '\\frac{1}{2} x^{1/2}', correct: false },
        { latex: '3 x^{1/2}', correct: false }
      ],
      explanation:
        '$\\frac{3}{2} x^{3/2 - 1} = \\frac{3}{2} x^{1/2}$.'
    },
    {
      id: 'dpot-m-05',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{1}{x^2}$',
      options: [
        { latex: '-\\frac{2}{x^3}', correct: true },
        { latex: '\\frac{2}{x^3}', correct: false },
        { latex: '-\\frac{1}{x^3}', correct: false },
        { latex: '-\\frac{2}{x}', correct: false }
      ],
      explanation:
        'Escribe $x^{-2}$: la potencia da $-2x^{-3} = -\\frac{2}{x^3}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dpot-h-01',
      difficulty: 'hard',
      prompt: '¿Cuál es la forma general de la regla de la potencia (fórmula VI)?',
      options: [
        { latex: '\\frac{d}{dx}(v^n) = n v^{n-1} \\frac{dv}{dx}', correct: true },
        { latex: '\\frac{d}{dx}(v^n) = n v^{n-1}', correct: false },
        { latex: '\\frac{d}{dx}(v^n) = v^{n-1} \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(v^n) = n v^{n+1} \\frac{dv}{dx}', correct: false }
      ],
      explanation:
        'Cuando la base es una función $v(x)$, aparece el factor $\\frac{dv}{dx}$ (regla de la cadena).'
    },
    {
      id: 'dpot-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\frac{1}{x^3}$',
      options: [
        { latex: '-\\frac{3}{x^4}', correct: true },
        { latex: '\\frac{3}{x^4}', correct: false },
        { latex: '-\\frac{3}{x^2}', correct: false },
        { latex: '-\\frac{1}{x^4}', correct: false }
      ],
      explanation:
        '$x^{-3}$ deriva $-3x^{-4} = -\\frac{3}{x^4}$.'
    },
    {
      id: 'dpot-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^{\\pi}$',
      options: [
        { latex: '\\pi x^{\\pi - 1}', correct: true },
        { latex: 'x^{\\pi - 1}', correct: false },
        { latex: '\\pi x^{\\pi}', correct: false },
        { latex: 'e^{\\pi} x^{\\pi - 1}', correct: false }
      ],
      explanation:
        'La fórmula VIa vale para cualquier exponente real constante, incluido $\\pi$.'
    },
    {
      id: 'dpot-h-04',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = (2x + 1)^5$?',
      options: [
        { latex: '\\text{Potencia general (VI) + regla de la cadena (VIII)}', correct: true },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Solo producto (V)}', correct: false },
        { latex: '\\text{Solo cociente (VII)}', correct: false }
      ],
      explanation:
        'La base $2x + 1$ no es $x$: se usa la fórmula VI con el factor $\\frac{d}{dx}(2x+1) = 2$.'
    },
    {
      id: 'dpot-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^{-1/2}$',
      options: [
        { latex: '-\\frac{1}{2 x^{3/2}}', correct: true },
        { latex: '\\frac{1}{2 x^{3/2}}', correct: false },
        { latex: '-\\frac{1}{2 x^{1/2}}', correct: false },
        { latex: '-\\frac{1}{2} x^{1/2}', correct: false }
      ],
      explanation:
        '$-\\frac{1}{2} x^{-1/2 - 1} = -\\frac{1}{2} x^{-3/2} = -\\frac{1}{2 x^{3/2}}$.'
    }
  ]
};
