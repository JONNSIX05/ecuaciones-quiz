// data/calculo-diferencial/derivacion-basica/constante-producto.js
// Ley (fórmula IV): Constante por una función  ->  d/dx(cv) = c dv/dx.

export default {
  lawId: 'der-constante-funcion',
  lawName: 'Constante por una función',
  lawFormula: '\\frac{d}{dx}(c v) = c \\frac{dv}{dx}',
  prerequisites: 'Derivada de identidad y potencia.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dcf-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = 5x^2$?',
      options: [
        { latex: '\\text{Constante por función (IV) + potencia (VIa)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Solo constante (I)}', correct: false }
      ],
      explanation:
        'El 5 es constante y sale de la derivada: $5 \\cdot 2x = 10x$. No hace falta la regla del producto.'
    },
    {
      id: 'dcf-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 3x$',
      options: [
        { latex: '3', correct: true },
        { latex: '3x', correct: false },
        { latex: 'x', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Fórmula IV: $3 \\cdot \\frac{d}{dx}(x) = 3 \\cdot 1 = 3$.'
    },
    {
      id: 'dcf-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 7x^3$',
      options: [
        { latex: '21x^2', correct: true },
        { latex: '7x^2', correct: false },
        { latex: '21x^3', correct: false },
        { latex: '3x^2', correct: false }
      ],
      explanation:
        'La constante sale: $7 \\cdot 3x^2 = 21x^2$.'
    },
    {
      id: 'dcf-f-04',
      difficulty: 'easy',
      prompt: 'En la fórmula IV, $\\frac{d}{dx}(cv) = \\ldots$, ¿qué pasa con la constante $c$?',
      options: [
        { latex: '\\text{Sale de la derivada y multiplica a } \\frac{dv}{dx}', correct: true },
        { latex: '\\text{Se deriva y se vuelve } 0', correct: false },
        { latex: '\\text{Se eleva al exponente de } v', correct: false },
        { latex: '\\text{Se suma al resultado}', correct: false }
      ],
      explanation:
        'La constante permanece: solo se deriva la función $v$. Es la fórmula IV.'
    },
    {
      id: 'dcf-f-05',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 2x$',
      options: [
        { latex: '2', correct: true },
        { latex: '2x', correct: false },
        { latex: '1', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        '$2 \\cdot \\frac{d}{dx}(x) = 2 \\cdot 1 = 2$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dcf-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = 4x^3$',
      options: [
        { latex: '12x^2', correct: true },
        { latex: '4x^2', correct: false },
        { latex: '12x^3', correct: false },
        { latex: '3x^2', correct: false }
      ],
      explanation:
        'Constante fuera (IV) y potencia (VIa): $4 \\cdot 3x^2 = 12x^2$.'
    },
    {
      id: 'dcf-m-02',
      difficulty: 'medium',
      prompt: '¿Qué reglas usas para derivar $f(x) = -2 \\sin x$?',
      options: [
        { latex: '\\text{Constante por función (IV) + derivada del seno (XIII)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Solo constante (I)}', correct: false }
      ],
      explanation:
        'El $-2$ sale y queda $-2 \\cos x$. No es un producto de dos funciones de $x$.'
    },
    {
      id: 'dcf-m-03',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{x}{3}$',
      options: [
        { latex: '\\frac{1}{3}', correct: true },
        { latex: '\\frac{1}{9}', correct: false },
        { latex: '3', correct: false },
        { latex: '\\frac{x}{3}', correct: false }
      ],
      explanation:
        'Dividir entre 3 es multiplicar por $\\frac{1}{3}$ (fórmula VIIa/IV): queda $\\frac{1}{3}$.'
    },
    {
      id: 'dcf-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = -5x^2$',
      options: [
        { latex: '-10x', correct: true },
        { latex: '10x', correct: false },
        { latex: '-5x', correct: false },
        { latex: '-10x^2', correct: false }
      ],
      explanation:
        'El $-5$ sale: $-5 \\cdot 2x = -10x$. El signo se conserva.'
    },
    {
      id: 'dcf-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es la forma correcta de la fórmula IV?',
      options: [
        { latex: '\\frac{d}{dx}(cv) = c \\frac{dv}{dx}', correct: true },
        { latex: '\\frac{d}{dx}(cv) = \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(cv) = c^2 \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(cv) = v \\frac{dc}{dx}', correct: false }
      ],
      explanation:
        'La constante multiplica a la derivada de la función, sin modificarse.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dcf-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = 6\\sqrt{x}$',
      options: [
        { latex: '\\frac{3}{\\sqrt{x}}', correct: true },
        { latex: '\\frac{6}{\\sqrt{x}}', correct: false },
        { latex: '3\\sqrt{x}', correct: false },
        { latex: '\\frac{1}{2\\sqrt{x}}', correct: false }
      ],
      explanation:
        '$6 \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{3}{\\sqrt{x}}$.'
    },
    {
      id: 'dcf-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\pi x^2$',
      options: [
        { latex: '2\\pi x', correct: true },
        { latex: '\\pi x', correct: false },
        { latex: '2x', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        '$\\pi$ es una constante y sale de la derivada: $\\pi \\cdot 2x = 2\\pi x$.'
    },
    {
      id: 'dcf-h-03',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = 10e^x$?',
      options: [
        { latex: '\\text{Constante por función (IV) + exponencial natural (XIa)}', correct: true },
        { latex: '\\text{Producto (V)}', correct: false },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Potencia (VIa)}', correct: false }
      ],
      explanation:
        'El 10 sale y $e^x$ deriva $e^x$: queda $10e^x$. No es producto de dos funciones de $x$.'
    },
    {
      id: 'dcf-h-04',
      difficulty: 'hard',
      prompt: 'Si $f\'(x)$ existe, ¿cuánto vale $\\frac{d}{dx}(3f(x))$?',
      options: [
        { latex: '3 f\'(x)', correct: true },
        { latex: 'f\'(x)', correct: false },
        { latex: '3 f(x)', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Fórmula IV en forma general: la constante sale y se deriva la función.'
    },
    {
      id: 'dcf-h-05',
      difficulty: 'hard',
      prompt: '¿Cuál es la diferencia entre derivar $5x$ y derivar $5 \\cdot 3$?',
      options: [
        { latex: '(5x)\' = 5 \\text{ y } (5 \\cdot 3)\' = 0', correct: true },
        { latex: '(5x)\' = 0 \\text{ y } (5 \\cdot 3)\' = 5', correct: false },
        { latex: '\\text{Ambas derivan } 5', correct: false },
        { latex: '\\text{Ambas derivan } 0', correct: false }
      ],
      explanation:
        '$5x$ usa la fórmula IV (queda 5); $5 \\cdot 3 = 15$ es constante y usa la fórmula I (queda 0).'
    }
  ]
};
