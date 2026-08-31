// data/calculo-diferencial/derivacion-basica/cociente.js
// Ley (fórmulas VII y VIIa): Cociente  ->  d/dx(u/v) = (v du/dx - u dv/dx) / v².

export default {
  lawId: 'der-cociente',
  lawName: 'Regla del cociente',
  lawFormula: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}',
  prerequisites: 'Regla del producto y de la potencia.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dcoc-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\frac{x}{x + 1}$?',
      options: [
        { latex: '\\text{Regla del cociente (VII)}', correct: true },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false },
        { latex: '\\text{Constante por función (IV)}', correct: false }
      ],
      explanation:
        'Numerador y denominador son funciones de $x$: aplica la fórmula VII.'
    },
    {
      id: 'dcoc-f-02',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula del cociente (VII)?',
      options: [
        { latex: '\\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}', correct: true },
        { latex: '\\frac{u \\frac{dv}{dx} - v \\frac{du}{dx}}{v^2}', correct: false },
        { latex: '\\frac{\\frac{du}{dx}}{\\frac{dv}{dx}}', correct: false },
        { latex: '\\frac{v \\frac{du}{dx} + u \\frac{dv}{dx}}{v^2}', correct: false }
      ],
      explanation:
        'El orden importa: es (denominador)(derivada del numerador) − (numerador)(derivada del denominador), entre $v^2$.'
    },
    {
      id: 'dcoc-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\frac{x}{x}$',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: '\\frac{1}{x}', correct: false },
        { latex: 'x', correct: false }
      ],
      explanation:
        '$\\frac{x}{x} = 1$ (para $x \\neq 0$), una constante: deriva 0. La fórmula VII da $\\frac{x - x}{x^2} = 0$.'
    },
    {
      id: 'dcoc-f-04',
      difficulty: 'easy',
      prompt: '¿Cuándo se usa la regla del cociente?',
      options: [
        { latex: '\\text{Cuando una función de } x \\text{ divide a otra función de } x', correct: true },
        { latex: '\\text{Cuando se divide entre una constante}', correct: false },
        { latex: '\\text{Siempre que aparezca una fracción}', correct: false },
        { latex: '\\text{Solo con funciones trigonométricas}', correct: false }
      ],
      explanation:
        'Si el denominador es constante basta la fórmula VIIa/IV; la regla VII es para dos funciones de $x$.'
    },
    {
      id: 'dcoc-f-05',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\frac{1}{x}$',
      options: [
        { latex: '-\\frac{1}{x^2}', correct: true },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: '\\ln x', correct: false },
        { latex: '-\\frac{1}{x}', correct: false }
      ],
      explanation:
        'Con VII: $\\frac{x \\cdot 0 - 1 \\cdot 1}{x^2} = -\\frac{1}{x^2}$. También es potencia: $(x^{-1})\' = -x^{-2}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dcoc-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{x}{x^2 + 1}$',
      options: [
        { latex: '\\frac{1 - x^2}{(x^2 + 1)^2}', correct: true },
        { latex: '\\frac{1 + x^2}{(x^2 + 1)^2}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false },
        { latex: '\\frac{x^2 - 1}{(x^2 + 1)^2}', correct: false }
      ],
      explanation:
        'Fórmula VII: $\\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$.'
    },
    {
      id: 'dcoc-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{1}{x^2}$',
      options: [
        { latex: '-\\frac{2}{x^3}', correct: true },
        { latex: '\\frac{2}{x^3}', correct: false },
        { latex: '-\\frac{1}{x^3}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false }
      ],
      explanation:
        'Con VII: $\\frac{x^2(0) - 1(2x)}{x^4} = -\\frac{2x}{x^4} = -\\frac{2}{x^3}$.'
    },
    {
      id: 'dcoc-m-03',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = \\frac{\\sin x}{x}$?',
      options: [
        { latex: '\\text{Regla del cociente (VII)}', correct: true },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Solo derivada del seno (XIII)}', correct: false },
        { latex: '\\text{Constante por función (IV)}', correct: false }
      ],
      explanation:
        'Ambos, $\\sin x$ y $x$, dependen de $x$: cociente (VII).'
    },
    {
      id: 'dcoc-m-04',
      difficulty: 'medium',
      prompt: 'En la fórmula VII, el numerador del resultado es...',
      options: [
        { latex: 'v \\frac{du}{dx} - u \\frac{dv}{dx}', correct: true },
        { latex: 'u \\frac{dv}{dx} - v \\frac{du}{dx}', correct: false },
        { latex: 'v \\frac{du}{dx} + u \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{du}{dx} - \\frac{dv}{dx}', correct: false }
      ],
      explanation:
        'Empieza con el denominador por la derivada del numerador; invertir el orden cambia el signo.'
    },
    {
      id: 'dcoc-m-05',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{x^2}{x + 1}$',
      options: [
        { latex: '\\frac{x^2 + 2x}{(x + 1)^2}', correct: true },
        { latex: '\\frac{2x}{(x + 1)^2}', correct: false },
        { latex: '\\frac{x^2 - 2x}{(x + 1)^2}', correct: false },
        { latex: '2x', correct: false }
      ],
      explanation:
        'Fórmula VII: $\\frac{(x+1)(2x) - x^2(1)}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dcoc-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\frac{e^x}{x}$',
      options: [
        { latex: '\\frac{x e^x - e^x}{x^2}', correct: true },
        { latex: '\\frac{e^x}{x^2}', correct: false },
        { latex: '\\frac{x e^x + e^x}{x^2}', correct: false },
        { latex: '\\frac{e^x - x e^x}{x^2}', correct: false }
      ],
      explanation:
        'Fórmula VII: $\\frac{x e^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$.'
    },
    {
      id: 'dcoc-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\frac{\\ln x}{x}$',
      options: [
        { latex: '\\frac{1 - \\ln x}{x^2}', correct: true },
        { latex: '\\frac{1 + \\ln x}{x^2}', correct: false },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: '\\frac{\\ln x - 1}{x^2}', correct: false }
      ],
      explanation:
        'Fórmula VII: $\\frac{x \\cdot \\frac{1}{x} - \\ln x}{x^2} = \\frac{1 - \\ln x}{x^2}$.'
    },
    {
      id: 'dcoc-h-03',
      difficulty: 'hard',
      prompt: '¿Cuál versión de la fórmula del cociente es correcta?',
      options: [
        { latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u\' - u v\'}{v^2}', correct: true },
        { latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u v\' - v u\'}{v^2}', correct: false },
        { latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u\' - u v\'}{v}', correct: false },
        { latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u\'}{v\'}', correct: false }
      ],
      explanation:
        'Numerador $v u\' - u v\'$ y denominador $v^2$. Derivar "arriba entre abajo" es un error común.'
    },
    {
      id: 'dcoc-h-04',
      difficulty: 'hard',
      prompt: 'Si $f(x) = \\frac{x}{x + 1}$, ¿cuánto vale $f\'(1)$?',
      options: [
        { latex: '\\frac{1}{4}', correct: true },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '1', correct: false },
        { latex: '\\frac{3}{4}', correct: false }
      ],
      explanation:
        '$f\'(x) = \\frac{(x+1) - x}{(x+1)^2} = \\frac{1}{(x+1)^2}$; en $x = 1$: $\\frac{1}{4}$.'
    },
    {
      id: 'dcoc-h-05',
      difficulty: 'hard',
      prompt: '¿Qué dice la fórmula VIIa para $\\frac{d}{dx}\\left(\\frac{u}{c}\\right)$?',
      options: [
        { latex: '\\frac{\\frac{du}{dx}}{c}', correct: true },
        { latex: '\\frac{c \\frac{du}{dx} - u}{c^2}', correct: false },
        { latex: '0', correct: false },
        { latex: '\\frac{u}{c^2}', correct: false }
      ],
      explanation:
        'Con denominador constante no hace falta la regla completa: es la fórmula IV con $\\frac{1}{c}$.'
    }
  ]
};
