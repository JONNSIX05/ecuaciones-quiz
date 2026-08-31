// data/calculo-diferencial/regla-cadena/cadena-trascendente.js
// Ley (fórmula VIII): Regla de la cadena con funciones trascendentes.

export default {
  lawId: 'der-cadena-trascendente',
  lawName: 'Regla de la cadena con funciones trascendentes',
  lawFormula: '\\frac{dy}{dx} = \\frac{dy}{dv} \\cdot \\frac{dv}{dx}',
  prerequisites: 'Derivadas exponenciales, logarítmicas y trigonométricas.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dcadt-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\sin(3x)$?',
      options: [
        { latex: '\\text{Regla de la cadena (VIII) + derivada del seno (XIII)}', correct: true },
        { latex: '\\text{Solo derivada del seno (XIII)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'El argumento del seno es $3x$, no $x$: hay composición y aplica la cadena.'
    },
    {
      id: 'dcadt-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\sin(2x)$',
      options: [
        { latex: '2\\cos(2x)', correct: true },
        { latex: '\\cos(2x)', correct: false },
        { latex: '2\\sin(2x)', correct: false },
        { latex: '-2\\cos(2x)', correct: false }
      ],
      explanation:
        'Cadena con XIII: $\\cos(2x) \\cdot 2 = 2\\cos(2x)$.'
    },
    {
      id: 'dcadt-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = e^{3x}$',
      options: [
        { latex: '3e^{3x}', correct: true },
        { latex: 'e^{3x}', correct: false },
        { latex: '3x e^{3x - 1}', correct: false },
        { latex: '\\frac{e^{3x}}{3}', correct: false }
      ],
      explanation:
        'Cadena con XIa: $e^{3x} \\cdot 3 = 3e^{3x}$.'
    },
    {
      id: 'dcadt-f-04',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\ln(x^2 + 1)$?',
      options: [
        { latex: '\\text{Cadena (VIII) + logaritmo natural (X)}', correct: true },
        { latex: '\\text{Solo logaritmo natural (X)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false }
      ],
      explanation:
        'El argumento del logaritmo no es $x$: se multiplica por su derivada. Queda $\\frac{2x}{x^2+1}$.'
    },
    {
      id: 'dcadt-f-05',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\cos(5x)$',
      options: [
        { latex: '-5\\sin(5x)', correct: true },
        { latex: '5\\sin(5x)', correct: false },
        { latex: '-\\sin(5x)', correct: false },
        { latex: '-5\\cos(5x)', correct: false }
      ],
      explanation:
        'Cadena con XIV: $-\\sin(5x) \\cdot 5 = -5\\sin(5x)$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dcadt-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\sin(x^2)$',
      options: [
        { latex: '2x \\cos(x^2)', correct: true },
        { latex: '\\cos(x^2)', correct: false },
        { latex: '2x \\sin(x^2)', correct: false },
        { latex: '\\cos(2x)', correct: false }
      ],
      explanation:
        'Cadena con XIII: $\\cos(x^2) \\cdot 2x = 2x \\cos(x^2)$.'
    },
    {
      id: 'dcadt-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\ln(3x^2)$',
      options: [
        { latex: '\\frac{2}{x}', correct: true },
        { latex: '\\frac{1}{3x^2}', correct: false },
        { latex: '\\frac{6x}{x}', correct: false },
        { latex: '\\frac{2}{3x}', correct: false }
      ],
      explanation:
        'Cadena con X: $\\frac{6x}{3x^2} = \\frac{2}{x}$. (También: $\\ln(3x^2) = \\ln 3 + 2\\ln x$.)'
    },
    {
      id: 'dcadt-m-03',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = e^{-x^2}$',
      options: [
        { latex: '-2x e^{-x^2}', correct: true },
        { latex: '2x e^{-x^2}', correct: false },
        { latex: '-e^{-x^2}', correct: false },
        { latex: '-x^2 e^{-x^2 - 1}', correct: false }
      ],
      explanation:
        'Cadena con XIa: $e^{-x^2} \\cdot (-2x) = -2x e^{-x^2}$.'
    },
    {
      id: 'dcadt-m-04',
      difficulty: 'medium',
      prompt: 'En $f(x) = \\tan(4x)$, ¿cuál es la función interior?',
      options: [
        { latex: 'v = 4x', correct: true },
        { latex: 'v = \\tan x', correct: false },
        { latex: 'v = 4', correct: false },
        { latex: 'v = \\tan(4x)', correct: false }
      ],
      explanation:
        'La tangente se aplica a $4x$: la interior es $v = 4x$ y la exterior es $\\tan v$.'
    },
    {
      id: 'dcadt-m-05',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\sec(x^2)$',
      options: [
        { latex: '2x \\sec(x^2) \\tan(x^2)', correct: true },
        { latex: '\\sec(x^2) \\tan(x^2)', correct: false },
        { latex: '2x \\sec^2(x^2)', correct: false },
        { latex: 'x^2 \\sec(x^2) \\tan(x^2)', correct: false }
      ],
      explanation:
        'Cadena con XVII: $\\sec(x^2) \\tan(x^2) \\cdot 2x$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dcadt-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\sin^3 x$',
      options: [
        { latex: '3 \\sin^2 x \\cos x', correct: true },
        { latex: '3 \\sin^2 x', correct: false },
        { latex: '\\sin^2 x \\cos x', correct: false },
        { latex: '3 \\cos^2 x \\sin x', correct: false }
      ],
      explanation:
        'Doble cadena: potencia del seno. $3(\\sin x)^2 \\cdot \\cos x$.'
    },
    {
      id: 'dcadt-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\ln(\\cos x)$',
      options: [
        { latex: '-\\tan x', correct: true },
        { latex: '\\frac{1}{\\cos x}', correct: false },
        { latex: '\\tan x', correct: false },
        { latex: '-\\frac{1}{\\cos x}', correct: false }
      ],
      explanation:
        'Cadena con X: $\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
    },
    {
      id: 'dcadt-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = e^{\\sin x}$',
      options: [
        { latex: '\\cos x \\cdot e^{\\sin x}', correct: true },
        { latex: 'e^{\\sin x}', correct: false },
        { latex: '\\sin x \\cdot e^{\\sin x - 1}', correct: false },
        { latex: 'e^{\\cos x}', correct: false }
      ],
      explanation:
        'Cadena con XIa: $e^{\\sin x} \\cdot \\cos x$.'
    },
    {
      id: 'dcadt-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\arctan(2x)$',
      options: [
        { latex: '\\frac{2}{1 + 4x^2}', correct: true },
        { latex: '\\frac{1}{1 + 4x^2}', correct: false },
        { latex: '\\frac{2}{1 + 2x^2}', correct: false },
        { latex: '\\frac{2}{\\sqrt{1 - 4x^2}}', correct: false }
      ],
      explanation:
        'Cadena con XXII: $\\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$.'
    },
    {
      id: 'dcadt-h-05',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\sqrt{\\ln x}$',
      options: [
        { latex: '\\frac{1}{2x \\sqrt{\\ln x}}', correct: true },
        { latex: '\\frac{1}{\\sqrt{\\ln x}}', correct: false },
        { latex: '\\frac{1}{2x \\ln x}', correct: false },
        { latex: '\\frac{\\ln x}{2x}', correct: false }
      ],
      explanation:
        'Cadena: $\\frac{1}{2}(\\ln x)^{-1/2} \\cdot \\frac{1}{x} = \\frac{1}{2x \\sqrt{\\ln x}}$.'
    }
  ]
};
