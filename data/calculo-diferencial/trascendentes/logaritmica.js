// data/calculo-diferencial/trascendentes/logaritmica.js
// Ley (fórmulas X y Xa): Logarítmicas  ->  d/dx(ln v) = (dv/dx)/v.

export default {
  lawId: 'der-logaritmica',
  lawName: 'Derivada de funciones logarítmicas',
  lawFormula: '\\frac{d}{dx}(\\ln v) = \\frac{\\frac{dv}{dx}}{v}',
  prerequisites: 'Leyes de los logaritmos y regla de la cadena.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dlog-f-01',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\ln x$',
      options: [
        { latex: '\\frac{1}{x}', correct: true },
        { latex: '\\ln x', correct: false },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: 'e^x', correct: false }
      ],
      explanation:
        'Fórmula X con $v = x$: $\\frac{1}{x}$.'
    },
    {
      id: 'dlog-f-02',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\ln x$?',
      options: [
        { latex: '\\text{Logaritmo natural (X)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Exponencial natural (XIa)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'Es el logaritmo natural de $x$: fórmula X, $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$.'
    },
    {
      id: 'dlog-f-03',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula X para $\\frac{d}{dx}(\\ln v)$?',
      options: [
        { latex: '\\frac{\\frac{dv}{dx}}{v}', correct: true },
        { latex: 'v \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{v}{\\frac{dv}{dx}}', correct: false },
        { latex: '\\ln v \\cdot \\frac{dv}{dx}', correct: false }
      ],
      explanation:
        'La derivada del argumento va en el numerador y el argumento en el denominador.'
    },
    {
      id: 'dlog-f-04',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\ln 5$',
      options: [
        { latex: '0', correct: true },
        { latex: '\\frac{1}{5}', correct: false },
        { latex: '\\ln 5', correct: false },
        { latex: '\\frac{1}{x}', correct: false }
      ],
      explanation:
        '$\\ln 5$ es una constante: se usa la fórmula I, no la X. Deriva 0.'
    },
    {
      id: 'dlog-f-05',
      difficulty: 'easy',
      prompt: '¿Cuánto vale la derivada de $\\ln x$?',
      options: [
        { latex: '\\frac{1}{x}', correct: true },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: '-\\frac{1}{x}', correct: false },
        { latex: 'x', correct: false }
      ],
      explanation:
        'Fórmula X con $v = x$: $\\frac{1}{x}$, definida para $x > 0$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dlog-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\ln(3x)$',
      options: [
        { latex: '\\frac{1}{x}', correct: true },
        { latex: '\\frac{1}{3x}', correct: false },
        { latex: '\\frac{3}{x}', correct: false },
        { latex: '\\frac{1}{3}', correct: false }
      ],
      explanation:
        'Fórmula X con cadena: $\\frac{(3x)\'}{3x} = \\frac{3}{3x} = \\frac{1}{x}$.'
    },
    {
      id: 'dlog-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\ln(x^2)$',
      options: [
        { latex: '\\frac{2}{x}', correct: true },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: '\\frac{2x}{x}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false }
      ],
      explanation:
        'Fórmula X con cadena: $\\frac{2x}{x^2} = \\frac{2}{x}$.'
    },
    {
      id: 'dlog-m-03',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = \\log x$ (logaritmo decimal)?',
      options: [
        { latex: '\\text{Logaritmo decimal (Xa)}', correct: true },
        { latex: '\\text{Logaritmo natural (X), sin más}', correct: false },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Exponencial base } a \\text{ (XI)}', correct: false }
      ],
      explanation:
        'Para base 10 aplica la fórmula Xa: $\\frac{d}{dx}(\\log x) = \\frac{\\log e}{x} = \\frac{1}{x \\ln 10}$.'
    },
    {
      id: 'dlog-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\log x$',
      options: [
        { latex: '\\frac{1}{x \\ln 10}', correct: true },
        { latex: '\\frac{1}{x}', correct: false },
        { latex: '\\frac{\\ln 10}{x}', correct: false },
        { latex: '\\frac{1}{10x}', correct: false }
      ],
      explanation:
        'Fórmula Xa: $\\frac{\\log e}{x}$, y como $\\log e = \\frac{1}{\\ln 10}$, queda $\\frac{1}{x \\ln 10}$.'
    },
    {
      id: 'dlog-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es la fórmula Xa para $\\frac{d}{dx}(\\log v)$?',
      options: [
        { latex: '\\frac{\\log e}{v} \\cdot \\frac{dv}{dx}', correct: true },
        { latex: '\\frac{1}{v} \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\log v \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{v}{\\log e} \\cdot \\frac{dv}{dx}', correct: false }
      ],
      explanation:
        'El logaritmo decimal aporta el factor $\\log e$ respecto al natural.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dlog-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\ln(x^2 + 1)$',
      options: [
        { latex: '\\frac{2x}{x^2 + 1}', correct: true },
        { latex: '\\frac{1}{x^2 + 1}', correct: false },
        { latex: '\\frac{x}{x^2 + 1}', correct: false },
        { latex: '2x \\ln(x^2 + 1)', correct: false }
      ],
      explanation:
        'Fórmula X con cadena: $\\frac{(x^2+1)\'}{x^2+1} = \\frac{2x}{x^2+1}$.'
    },
    {
      id: 'dlog-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\ln(\\sin x)$',
      options: [
        { latex: '\\cot x', correct: true },
        { latex: '\\frac{1}{\\sin x}', correct: false },
        { latex: '\\tan x', correct: false },
        { latex: '\\cos x', correct: false }
      ],
      explanation:
        'Fórmula X con cadena: $\\frac{\\cos x}{\\sin x} = \\cot x$.'
    },
    {
      id: 'dlog-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\ln \\sqrt{x}$',
      options: [
        { latex: '\\frac{1}{2x}', correct: true },
        { latex: '\\frac{1}{x}', correct: false },
        { latex: '\\frac{1}{2\\sqrt{x}}', correct: false },
        { latex: '\\frac{2}{x}', correct: false }
      ],
      explanation:
        'Cadena: $\\frac{(\\sqrt{x})\'}{\\sqrt{x}} = \\frac{1}{2\\sqrt{x} \\cdot \\sqrt{x}} = \\frac{1}{2x}$. (También: $\\ln\\sqrt{x} = \\frac{1}{2}\\ln x$.)'
    },
    {
      id: 'dlog-h-04',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = \\ln(2x^3 + 1)$?',
      options: [
        { latex: '\\text{Logaritmo natural (X) + cadena (VIII) + potencia (VIa)}', correct: true },
        { latex: '\\text{Solo logaritmo natural (X)}', correct: false },
        { latex: '\\text{Cociente (VII) + potencia (VIa)}', correct: false },
        { latex: '\\text{Producto (V) + cadena (VIII)}', correct: false }
      ],
      explanation:
        'El argumento no es $x$: se aplica la fórmula X multiplicada por la derivada del argumento, $6x^2$.'
    },
    {
      id: 'dlog-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\log_2 x$',
      options: [
        { latex: '\\frac{1}{x \\ln 2}', correct: true },
        { latex: '\\frac{1}{x}', correct: false },
        { latex: '\\frac{\\ln 2}{x}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false }
      ],
      explanation:
        'Fórmula Xa generalizada: $\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$. Con $a = 2$: $\\frac{1}{x \\ln 2}$.'
    }
  ]
};
