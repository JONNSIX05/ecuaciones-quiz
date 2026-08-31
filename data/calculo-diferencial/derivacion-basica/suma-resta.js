// data/calculo-diferencial/derivacion-basica/suma-resta.js
// Ley (fórmula III): Suma y resta  ->  d/dx(u ± v) = du/dx ± dv/dx.

export default {
  lawId: 'der-suma-resta',
  lawName: 'Derivada de una suma y resta',
  lawFormula: '\\frac{d}{dx}(u + v - w) = \\frac{du}{dx} + \\frac{dv}{dx} - \\frac{dw}{dx}',
  prerequisites: 'Derivada de constantes, identidad y potencia.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dsum-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas primero para derivar $f(x) = x^2 + x$?',
      options: [
        { latex: '\\text{Suma de funciones (III)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false }
      ],
      explanation:
        'Hay dos términos sumados: se deriva cada uno por separado (fórmula III).'
    },
    {
      id: 'dsum-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x + 3$',
      options: [
        { latex: '1', correct: true },
        { latex: 'x', correct: false },
        { latex: '3', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        'Suma (III): $x$ deriva 1 y la constante 3 deriva 0. Queda $1$.'
    },
    {
      id: 'dsum-f-03',
      difficulty: 'easy',
      prompt: 'La derivada de una suma de funciones es...',
      options: [
        { latex: '\\text{La suma de las derivadas}', correct: true },
        { latex: '\\text{El producto de las derivadas}', correct: false },
        { latex: '\\text{La derivada del primer término solamente}', correct: false },
        { latex: '\\text{Siempre una constante}', correct: false }
      ],
      explanation:
        'Fórmula III: $\\frac{d}{dx}(u + v) = \\frac{du}{dx} + \\frac{dv}{dx}$.'
    },
    {
      id: 'dsum-f-04',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x^2 - x$',
      options: [
        { latex: '2x - 1', correct: true },
        { latex: '2x + 1', correct: false },
        { latex: 'x^2 - 1', correct: false },
        { latex: '2x', correct: false }
      ],
      explanation:
        'Término a término: $(x^2)\' = 2x$ y $(x)\' = 1$, conservando el signo: $2x - 1$.'
    },
    {
      id: 'dsum-f-05',
      difficulty: 'easy',
      prompt: '¿Qué regla usas primero para derivar $f(x) = \\sin x + \\cos x$?',
      options: [
        { latex: '\\text{Suma de funciones (III)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false }
      ],
      explanation:
        'Primero separas la suma (III); luego cada trigonométrica se deriva con XIII y XIV.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dsum-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = 3x^2 - 2x$',
      options: [
        { latex: '6x - 2', correct: true },
        { latex: '6x + 2', correct: false },
        { latex: '3x - 2', correct: false },
        { latex: '6x^2 - 2', correct: false }
      ],
      explanation:
        'Término a término con (III), (IV) y (VIa): $6x - 2$.'
    },
    {
      id: 'dsum-m-02',
      difficulty: 'medium',
      prompt: 'Para derivar $f(x) = 5x^3 - x^2 + 7x - 4$, ¿qué reglas usas?',
      options: [
        { latex: '\\text{Suma/resta (III), constante por función (IV) y potencia (VIa)}', correct: true },
        { latex: '\\text{Producto (V) y cociente (VII)}', correct: false },
        { latex: '\\text{Solo regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Derivación logarítmica (XII)}', correct: false }
      ],
      explanation:
        'Cada término se deriva por separado: constantes fuera (IV), potencias con (VIa) y la constante $-4$ deriva 0.'
    },
    {
      id: 'dsum-m-03',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x^3 - x$',
      options: [
        { latex: '3x^2 - 1', correct: true },
        { latex: '3x^2 + 1', correct: false },
        { latex: 'x^2 - 1', correct: false },
        { latex: '3x - 1', correct: false }
      ],
      explanation:
        'Potencia (VIa) en cada término: $3x^2 - 1$.'
    },
    {
      id: 'dsum-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = 2x - 5$',
      options: [
        { latex: '2', correct: true },
        { latex: '-5', correct: false },
        { latex: '2x', correct: false },
        { latex: '-3', correct: false }
      ],
      explanation:
        'La resta (III) separa los términos: $(2x)\' = 2$ y $(-5)\' = 0$.'
    },
    {
      id: 'dsum-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es la forma correcta de la fórmula III?',
      options: [
        { latex: '\\frac{d}{dx}(u - v) = \\frac{du}{dx} - \\frac{dv}{dx}', correct: true },
        { latex: '\\frac{d}{dx}(u - v) = \\frac{du}{dx} + \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(u - v) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(u - v) = \\frac{dv}{dx} - \\frac{du}{dx}', correct: false }
      ],
      explanation:
        'El signo menos se conserva: cada término aporta su derivada con su propio signo.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dsum-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^4 - 3x^2 + x - 8$',
      options: [
        { latex: '4x^3 - 6x + 1', correct: true },
        { latex: '4x^3 - 6x - 8', correct: false },
        { latex: '4x^3 - 3x + 1', correct: false },
        { latex: 'x^3 - 6x + 1', correct: false }
      ],
      explanation:
        'Término a término: $4x^3 - 6x + 1 - 0$. El $-8$ deriva 0.'
    },
    {
      id: 'dsum-h-02',
      difficulty: 'hard',
      prompt: '¿Qué regla permite derivar cualquier polinomio término a término?',
      options: [
        { latex: '\\text{Suma/resta (III)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false }
      ],
      explanation:
        'Un polinomio es una suma de términos: la fórmula III autoriza derivar cada uno por separado.'
    },
    {
      id: 'dsum-h-03',
      difficulty: 'hard',
      prompt: 'Si $f(x) = x^2 - 4x$, ¿cuánto vale $f\'(2)$?',
      options: [
        { latex: '0', correct: true },
        { latex: '4', correct: false },
        { latex: '-4', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        '$f\'(x) = 2x - 4$; evaluando: $2(2) - 4 = 0$.'
    },
    {
      id: 'dsum-h-04',
      difficulty: 'hard',
      prompt: '¿Cuál afirmación es verdadera?',
      options: [
        { latex: '\\text{La derivada de una resta es la resta de las derivadas}', correct: true },
        { latex: '\\text{La derivada de una resta es la suma de las derivadas}', correct: false },
        { latex: '\\text{El signo de cada término no importa al derivar}', correct: false },
        { latex: '\\text{Solo se deriva el término de mayor grado}', correct: false }
      ],
      explanation:
        'Fórmula III: los signos se conservan término a término.'
    },
    {
      id: 'dsum-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\sqrt{x} - \\frac{1}{x}$',
      options: [
        { latex: '\\frac{1}{2\\sqrt{x}} + \\frac{1}{x^2}', correct: true },
        { latex: '\\frac{1}{2\\sqrt{x}} - \\frac{1}{x^2}', correct: false },
        { latex: '\\frac{1}{\\sqrt{x}} + \\frac{1}{x^2}', correct: false },
        { latex: '\\frac{1}{2\\sqrt{x}} + \\ln x', correct: false }
      ],
      explanation:
        '$\\sqrt{x} = x^{1/2}$ deriva $\\frac{1}{2\\sqrt{x}}$ y $\\frac{1}{x} = x^{-1}$ deriva $-\\frac{1}{x^2}$; con el signo menos queda $+\\frac{1}{x^2}$.'
    }
  ]
};
