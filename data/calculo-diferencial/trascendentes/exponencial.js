// data/calculo-diferencial/trascendentes/exponencial.js
// Ley (fórmulas XI y XIa): Exponenciales  ->  d/dx(e^v) = e^v dv/dx, d/dx(a^v) = a^v ln a dv/dx.

export default {
  lawId: 'der-exponencial',
  lawName: 'Derivada de funciones exponenciales',
  lawFormula: '\\frac{d}{dx}(e^v) = e^v \\frac{dv}{dx}',
  prerequisites: 'Propiedades de exponenciales y logaritmo natural.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dexp-f-01',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = e^x$',
      options: [
        { latex: 'e^x', correct: true },
        { latex: 'x e^{x-1}', correct: false },
        { latex: '\\ln x', correct: false },
        { latex: 'e', correct: false }
      ],
      explanation:
        'Fórmula XIa con $v = x$: $e^x$ es la única función igual a su propia derivada.'
    },
    {
      id: 'dexp-f-02',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = e^x$?',
      options: [
        { latex: '\\text{Exponencial natural (XIa)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Logaritmo natural (X)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false }
      ],
      explanation:
        'La base es $e$ y el exponente es $x$: fórmula XIa, $\\frac{d}{dx}(e^x) = e^x$.'
    },
    {
      id: 'dexp-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = 2^x$',
      options: [
        { latex: '2^x \\ln 2', correct: true },
        { latex: 'x \\cdot 2^{x-1}', correct: false },
        { latex: '2^x', correct: false },
        { latex: '\\frac{2^x}{x}', correct: false }
      ],
      explanation:
        'Fórmula XI con base $a = 2$: aparece el factor $\\ln 2$.'
    },
    {
      id: 'dexp-f-04',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula XI para $\\frac{d}{dx}(a^v)$?',
      options: [
        { latex: 'a^v \\ln a \\cdot \\frac{dv}{dx}', correct: true },
        { latex: 'v a^{v-1} \\frac{da}{dx}', correct: false },
        { latex: 'a^v \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{a^v}{\\ln a} \\cdot \\frac{dv}{dx}', correct: false }
      ],
      explanation:
        'La exponencial se queda y se multiplica por $\\ln a$ y por la derivada del exponente.'
    },
    {
      id: 'dexp-f-05',
      difficulty: 'easy',
      prompt: '¿Qué función es igual a su propia derivada?',
      options: [
        { latex: 'f(x) = e^x', correct: true },
        { latex: 'f(x) = x^e', correct: false },
        { latex: 'f(x) = \\ln x', correct: false },
        { latex: 'f(x) = x^x', correct: false }
      ],
      explanation:
        '$\\frac{d}{dx}(e^x) = e^x$: por eso $e$ es la base natural. $x^e$ es una potencia y $\\ln x$ deriva $\\frac{1}{x}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dexp-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = e^{3x}$',
      options: [
        { latex: '3e^{3x}', correct: true },
        { latex: 'e^{3x}', correct: false },
        { latex: '3x e^{3x-1}', correct: false },
        { latex: '\\frac{e^{3x}}{3}', correct: false }
      ],
      explanation:
        'XIa con cadena (VIII): $e^{3x} \\cdot (3x)\' = 3e^{3x}$.'
    },
    {
      id: 'dexp-m-02',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = 5^x$?',
      options: [
        { latex: '\\text{Exponencial de base } a \\text{ (XI)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false },
        { latex: '\\text{Derivación logarítmica (XII)}', correct: false }
      ],
      explanation:
        'Base constante 5, exponente variable $x$: es exponencial, no potencia. Queda $5^x \\ln 5$.'
    },
    {
      id: 'dexp-m-03',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = 3^x$',
      options: [
        { latex: '3^x \\ln 3', correct: true },
        { latex: 'x \\cdot 3^{x-1}', correct: false },
        { latex: '3^x', correct: false },
        { latex: '\\frac{3^x}{\\ln 3}', correct: false }
      ],
      explanation:
        'Fórmula XI: $a^v \\ln a \\cdot \\frac{dv}{dx} = 3^x \\ln 3 \\cdot 1$.'
    },
    {
      id: 'dexp-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = 2e^x$',
      options: [
        { latex: '2e^x', correct: true },
        { latex: '2x e^x', correct: false },
        { latex: 'e^x', correct: false },
        { latex: '2e', correct: false }
      ],
      explanation:
        'Constante por función (IV) + XIa: $2 \\cdot e^x = 2e^x$.'
    },
    {
      id: 'dexp-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es la diferencia entre derivar $x^2$ y $2^x$?',
      options: [
        { latex: 'x^2 \\text{ usa potencia (VIa); } 2^x \\text{ usa exponencial (XI)}', correct: true },
        { latex: '\\text{Ambas usan la regla de la potencia}', correct: false },
        { latex: '\\text{Ambas usan la fórmula XI}', correct: false },
        { latex: 'x^2 \\text{ usa exponencial; } 2^x \\text{ usa potencia}', correct: false }
      ],
      explanation:
        'En $x^2$ la base es variable (potencia): $2x$. En $2^x$ el exponente es variable (exponencial): $2^x \\ln 2$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dexp-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = e^{x^2}$',
      options: [
        { latex: '2x e^{x^2}', correct: true },
        { latex: 'e^{x^2}', correct: false },
        { latex: 'x^2 e^{x^2 - 1}', correct: false },
        { latex: '2 e^{x^2}', correct: false }
      ],
      explanation:
        'XIa con cadena: $e^{x^2} \\cdot (x^2)\' = 2x e^{x^2}$.'
    },
    {
      id: 'dexp-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = e^{-x}$',
      options: [
        { latex: '-e^{-x}', correct: true },
        { latex: 'e^{-x}', correct: false },
        { latex: '-x e^{-x-1}', correct: false },
        { latex: '\\frac{1}{e^x} \\ln(-x)', correct: false }
      ],
      explanation:
        'XIa con cadena: $e^{-x} \\cdot (-1) = -e^{-x}$.'
    },
    {
      id: 'dexp-h-03',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = 10^{2x}$?',
      options: [
        { latex: '\\text{Exponencial base } a \\text{ (XI) + cadena (VIII)}', correct: true },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Solo constante por función (IV)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false }
      ],
      explanation:
        'Fórmula XI con $v = 2x$: queda $10^{2x} \\ln 10 \\cdot 2$.'
    },
    {
      id: 'dexp-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = 4^{x^2}$',
      options: [
        { latex: '4^{x^2} \\ln 4 \\cdot 2x', correct: true },
        { latex: '4^{x^2} \\cdot 2x', correct: false },
        { latex: 'x^2 \\cdot 4^{x^2 - 1}', correct: false },
        { latex: '4^{x^2} \\ln(2x)', correct: false }
      ],
      explanation:
        'Fórmula XI con cadena: $a^v \\ln a \\cdot v\' = 4^{x^2} \\ln 4 \\cdot 2x$.'
    },
    {
      id: 'dexp-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = e^x + x^e$',
      options: [
        { latex: 'e^x + e x^{e-1}', correct: true },
        { latex: 'e^x + x^e \\ln x', correct: false },
        { latex: 'e^x + e x^e', correct: false },
        { latex: 'e^x + e^x', correct: false }
      ],
      explanation:
        '$e^x$ es exponencial (XIa): deriva $e^x$. $x^e$ es potencia de $x$ con exponente constante (VIa): $e x^{e-1}$.'
    }
  ]
};
