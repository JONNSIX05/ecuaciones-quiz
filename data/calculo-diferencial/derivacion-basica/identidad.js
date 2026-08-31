// data/calculo-diferencial/derivacion-basica/identidad.js
// Ley (fórmula II): Derivada de la identidad  ->  d/dx(x) = 1.

export default {
  lawId: 'der-identidad',
  lawName: 'Derivada de la identidad',
  lawFormula: '\\frac{d}{dx}(x) = 1',
  prerequisites: 'Concepto de pendiente y de función identidad.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dident-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = x$?',
      options: [
        { latex: '\\text{Derivada de la identidad (II)}', correct: true },
        { latex: '\\text{Derivada de una constante (I)}', correct: false },
        { latex: '\\text{Regla de la potencia (VIa) con } n = 0', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false }
      ],
      explanation:
        'La derivada de $x$ respecto a $x$ es 1 (fórmula II).'
    },
    {
      id: 'dident-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: 'x', correct: false },
        { latex: 'x^2', correct: false }
      ],
      explanation:
        'Fórmula II: $\\frac{d}{dx}(x) = 1$.'
    },
    {
      id: 'dident-f-03',
      difficulty: 'easy',
      prompt: '¿Cuánto vale $\\frac{d}{dx}(x)$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: 'x', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        'La función identidad crece una unidad por cada unidad de $x$: su razón de cambio es 1.'
    },
    {
      id: 'dident-f-04',
      difficulty: 'easy',
      prompt: 'Si $f(x) = x$, ¿cuánto vale $f\'(5)$?',
      options: [
        { latex: '1', correct: true },
        { latex: '5', correct: false },
        { latex: '0', correct: false },
        { latex: '\\frac{1}{5}', correct: false }
      ],
      explanation:
        '$f\'(x) = 1$ en todo punto, incluido $x = 5$.'
    },
    {
      id: 'dident-f-05',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $g(t) = t$ respecto a $t$?',
      options: [
        { latex: '\\text{Derivada de la identidad: } \\frac{d}{dt}(t) = 1', correct: true },
        { latex: '\\text{Derivada de una constante}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{No se puede derivar}', correct: false }
      ],
      explanation:
        'La variable de derivación es $t$ y la función es $t$: identidad, deriva 1.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dident-m-01',
      difficulty: 'medium',
      prompt: 'Para derivar $f(x) = 3x$, ¿qué reglas combinas?',
      options: [
        { latex: '\\text{Constante por función (IV) + identidad (II)}', correct: true },
        { latex: '\\text{Solo constante (I)}', correct: false },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Producto (V) + cadena (VIII)}', correct: false }
      ],
      explanation:
        'El 3 sale como constante: $3 \\cdot \\frac{d}{dx}(x) = 3 \\cdot 1 = 3$.'
    },
    {
      id: 'dident-m-02',
      difficulty: 'medium',
      prompt: '¿Cuál afirmación es correcta?',
      options: [
        { latex: '\\frac{d}{dx}(x) = 1', correct: true },
        { latex: '\\frac{d}{dx}(x) = 0', correct: false },
        { latex: '\\frac{d}{dx}(x) = x', correct: false },
        { latex: '\\frac{d}{dx}(x) = \\frac{1}{x}', correct: false }
      ],
      explanation:
        'Fórmula II: la identidad deriva 1. Derivar 0 es el error de tratar $x$ como constante.'
    },
    {
      id: 'dident-m-03',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = -x$',
      options: [
        { latex: '-1', correct: true },
        { latex: '1', correct: false },
        { latex: '-x', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        '$-x = (-1) \\cdot x$: sale la constante $-1$ y queda $(-1)(1) = -1$.'
    },
    {
      id: 'dident-m-04',
      difficulty: 'medium',
      prompt: 'La recta $y = x$ tiene pendiente...',
      options: [
        { latex: '1, \\text{ por eso su derivada es } 1', correct: true },
        { latex: '0, \\text{ por eso su derivada es } 0', correct: false },
        { latex: 'x', correct: false },
        { latex: '\\text{Variable, depende del punto}', correct: false }
      ],
      explanation:
        'La derivada coincide con la pendiente: $y = x$ sube 1 por cada 1 que avanza $x$.'
    },
    {
      id: 'dident-m-05',
      difficulty: 'medium',
      prompt: 'Si $f(x) = x + 7$, ¿cuánto vale $f\'(x)$?',
      options: [
        { latex: '1', correct: true },
        { latex: '8', correct: false },
        { latex: 'x', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Suma (III): la identidad deriva 1 y la constante 7 deriva 0. Queda $1$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dident-h-01',
      difficulty: 'hard',
      prompt: '¿Cuánto vale la derivada de $f(x) = x$ evaluada en $x = 10$?',
      options: [
        { latex: '1', correct: true },
        { latex: '10', correct: false },
        { latex: '0', correct: false },
        { latex: '\\frac{1}{10}', correct: false }
      ],
      explanation:
        'La derivada es constante e igual a 1: no depende del punto de evaluación.'
    },
    {
      id: 'dident-h-02',
      difficulty: 'hard',
      prompt: '¿Cuál par de fórmulas es correcto?',
      options: [
        { latex: '\\frac{d}{dx}(c) = 0 \\text{ y } \\frac{d}{dx}(x) = 1', correct: true },
        { latex: '\\frac{d}{dx}(c) = 1 \\text{ y } \\frac{d}{dx}(x) = 0', correct: false },
        { latex: '\\frac{d}{dx}(c) = c \\text{ y } \\frac{d}{dx}(x) = x', correct: false },
        { latex: '\\frac{d}{dx}(c) = 0 \\text{ y } \\frac{d}{dx}(x) = 0', correct: false }
      ],
      explanation:
        'Fórmulas I y II: las constantes derivan 0 y la identidad deriva 1.'
    },
    {
      id: 'dident-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x - 4$',
      options: [
        { latex: '1', correct: true },
        { latex: '-4', correct: false },
        { latex: 'x', correct: false },
        { latex: '-3', correct: false }
      ],
      explanation:
        'Resta (III): $x$ deriva 1 y $-4$ deriva 0. Queda $1$.'
    },
    {
      id: 'dident-h-04',
      difficulty: 'hard',
      prompt: '¿Por qué $\\frac{d}{dx}(x) = 1$?',
      options: [
        { latex: '\\text{Porque la pendiente de } y = x \\text{ es } 1 \\text{ en todo punto}', correct: true },
        { latex: '\\text{Porque } x \\text{ es una constante}', correct: false },
        { latex: '\\text{Porque toda función deriva } 1', correct: false },
        { latex: '\\text{Porque } x^0 = 1', correct: false }
      ],
      explanation:
        'La derivada mide la pendiente: la gráfica de $y = x$ es una recta de pendiente 1.'
    },
    {
      id: 'dident-h-05',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = 2x - 9$?',
      options: [
        { latex: '\\text{Suma/resta (III), constante por función (IV) e identidad (II)}', correct: true },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Producto (V) y cociente (VII)}', correct: false },
        { latex: '\\text{Solo constante (I)}', correct: false }
      ],
      explanation:
        'Separas por la resta (III), sacas el 2 (IV) y derivas $x$ con la identidad (II): $f\'(x) = 2$.'
    }
  ]
};
