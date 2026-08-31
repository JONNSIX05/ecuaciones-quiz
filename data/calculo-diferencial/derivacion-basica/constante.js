// data/calculo-diferencial/derivacion-basica/constante.js
// Ley (fórmula I): Derivada de una constante  ->  d/dx(c) = 0.

export default {
  lawId: 'der-constante',
  lawName: 'Derivada de una constante',
  lawFormula: '\\frac{d}{dx}(c) = 0',
  prerequisites: 'Concepto de función constante y de pendiente.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dconst-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = 7$?',
      options: [
        { latex: '\\text{Derivada de una constante (I)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Regla de la identidad (II)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false }
      ],
      explanation:
        '$7$ no depende de $x$: es una constante y su derivada es 0 (fórmula I).'
    },
    {
      id: 'dconst-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 9$',
      options: [
        { latex: '0', correct: true },
        { latex: '9', correct: false },
        { latex: '1', correct: false },
        { latex: '9x', correct: false }
      ],
      explanation:
        'La derivada de toda constante es 0: $f\'(x) = 0$.'
    },
    {
      id: 'dconst-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = -5$',
      options: [
        { latex: '0', correct: true },
        { latex: '-5', correct: false },
        { latex: '-1', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        'El signo no importa: $-5$ es constante y su derivada es 0.'
    },
    {
      id: 'dconst-f-04',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\pi$?',
      options: [
        { latex: '\\text{Derivada de una constante (I)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Regla logarítmica (X)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false }
      ],
      explanation:
        '$\\pi$ es un número, no una variable: es constante y deriva 0.'
    },
    {
      id: 'dconst-f-05',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 0$',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: 'x', correct: false },
        { latex: '\\text{No se puede derivar}', correct: false }
      ],
      explanation:
        'El cero también es constante: su derivada es 0.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dconst-m-01',
      difficulty: 'medium',
      prompt: 'En $f(x) = 5x + 3$, ¿qué término desaparece al derivar?',
      options: [
        { latex: '3 \\text{ (es constante)}', correct: true },
        { latex: '5x', correct: false },
        { latex: '5', correct: false },
        { latex: '\\text{Ninguno}', correct: false }
      ],
      explanation:
        'El $3$ es una constante: su derivada es 0. Queda $f\'(x) = 5$.'
    },
    {
      id: 'dconst-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\sqrt{2}$',
      options: [
        { latex: '0', correct: true },
        { latex: '\\frac{1}{2\\sqrt{2}}', correct: false },
        { latex: '\\sqrt{2}', correct: false },
        { latex: '\\frac{1}{\\sqrt{2}}', correct: false }
      ],
      explanation:
        '$\\sqrt{2}$ es un número fijo: es constante, no una función de $x$. Derivada: 0.'
    },
    {
      id: 'dconst-m-03',
      difficulty: 'medium',
      prompt: '¿Cuál es la derivada de una función constante?',
      options: [
        { latex: '\\text{Siempre } 0', correct: true },
        { latex: '\\text{La misma constante}', correct: false },
        { latex: '\\text{Siempre } 1', correct: false },
        { latex: '\\text{Depende del valor de } x', correct: false }
      ],
      explanation:
        'Una constante no cambia: su razón de cambio es 0 en todo punto.'
    },
    {
      id: 'dconst-m-04',
      difficulty: 'medium',
      prompt: 'Si $f(x) = 100$, ¿cuánto vale $f\'(x)$?',
      options: [
        { latex: '0', correct: true },
        { latex: '100', correct: false },
        { latex: '10', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        'Fórmula I: la derivada de la constante 100 es 0.'
    },
    {
      id: 'dconst-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es la diferencia entre derivar $f(x) = x$ y $g(x) = 5$?',
      options: [
        { latex: 'f\'(x) = 1 \\text{ y } g\'(x) = 0', correct: true },
        { latex: 'f\'(x) = 0 \\text{ y } g\'(x) = 1', correct: false },
        { latex: '\\text{Ambas derivan } 0', correct: false },
        { latex: '\\text{Ambas derivan } 1', correct: false }
      ],
      explanation:
        '$x$ es la identidad (fórmula II, deriva 1); $5$ es constante (fórmula I, deriva 0).'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dconst-h-01',
      difficulty: 'hard',
      prompt: 'Si $f(x) = 8$, ¿cuánto vale $f\'(3)$?',
      options: [
        { latex: '0', correct: true },
        { latex: '8', correct: false },
        { latex: '3', correct: false },
        { latex: '24', correct: false }
      ],
      explanation:
        '$f\'(x) = 0$ para toda $x$, así que $f\'(3) = 0$.'
    },
    {
      id: 'dconst-h-02',
      difficulty: 'hard',
      prompt: '¿Cuál de estas funciones tiene derivada igual a 0?',
      options: [
        { latex: 'f(x) = -12', correct: true },
        { latex: 'f(x) = e^x', correct: false },
        { latex: 'f(x) = x', correct: false },
        { latex: 'f(x) = \\ln x', correct: false }
      ],
      explanation:
        'Solo $-12$ es constante. $e^x$ deriva $e^x$, $x$ deriva 1 y $\\ln x$ deriva $\\frac{1}{x}$.'
    },
    {
      id: 'dconst-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = 5 \\cdot 3$',
      options: [
        { latex: '0', correct: true },
        { latex: '15', correct: false },
        { latex: '5', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        '$5 \\cdot 3 = 15$ es una constante: su derivada es 0. No confundir con $5x$.'
    },
    {
      id: 'dconst-h-04',
      difficulty: 'hard',
      prompt: 'Una recta horizontal $y = c$ tiene pendiente...',
      options: [
        { latex: '0, \\text{ por eso } \\frac{d}{dx}(c) = 0', correct: true },
        { latex: '1, \\text{ por eso } \\frac{d}{dx}(c) = 1', correct: false },
        { latex: 'c', correct: false },
        { latex: '\\text{Infinita}', correct: false }
      ],
      explanation:
        'La derivada es la pendiente de la recta tangente: una recta horizontal tiene pendiente 0.'
    },
    {
      id: 'dconst-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\pi^2$',
      options: [
        { latex: '0', correct: true },
        { latex: '2\\pi', correct: false },
        { latex: '\\pi^2', correct: false },
        { latex: '\\pi', correct: false }
      ],
      explanation:
        '$\\pi^2$ es un número fijo: es constante, su derivada es 0. No es una potencia de $x$.'
    }
  ]
};
