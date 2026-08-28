// data/algebra/trigonometria/cociente.js
// Ley: Identidades de cociente  ->  tan x = sin x / cos x, cot x = cos x / sin x

export default {
  lawId: 'trig-cociente',
  lawName: 'Identidades de cociente',
  lawFormula: '\\tan x = \\frac{\\sin x}{\\cos x}, \\quad \\cot x = \\frac{\\cos x}{\\sin x}',
  prerequisites: 'Conocer seno, coseno y las identidades recíprocas.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'trigcoc-f-01',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\tan x$?',
      options: [
        { latex: '\\frac{\\sin x}{\\cos x}', correct: true },
        { latex: '\\frac{\\cos x}{\\sin x}', correct: false },
        { latex: '\\frac{1}{\\sin x}', correct: false },
        { latex: '\\frac{1}{\\cos x}', correct: false }
      ],
      explanation:
        '$\\tan x = \\frac{\\sin x}{\\cos x}$. Es la identidad de cociente de la tangente.'
    },
    {
      id: 'trigcoc-f-02',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\cot x$?',
      options: [
        { latex: '\\frac{\\cos x}{\\sin x}', correct: true },
        { latex: '\\frac{\\sin x}{\\cos x}', correct: false },
        { latex: '\\frac{1}{\\sin x}', correct: false },
        { latex: '\\frac{1}{\\cos x}', correct: false }
      ],
      explanation:
        '$\\cot x = \\frac{\\cos x}{\\sin x}$. Es el recíproco de la tangente.'
    },
    {
      id: 'trigcoc-f-03',
      difficulty: 'easy',
      prompt: 'Si $\\sin x = \\frac{3}{5}$ y $\\cos x = \\frac{4}{5}$, ¿cuánto vale $\\tan x$?',
      options: [
        { latex: '\\frac{3}{4}', correct: true },
        { latex: '\\frac{4}{3}', correct: false },
        { latex: '\\frac{5}{4}', correct: false },
        { latex: '\\frac{5}{3}', correct: false }
      ],
      explanation:
        '$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{3/5}{4/5} = \\frac{3}{4}$.'
    },
    {
      id: 'trigcoc-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\tan x \\cdot \\cos x$',
      options: [
        { latex: '\\sin x', correct: true },
        { latex: '\\cos x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\tan x', correct: false }
      ],
      explanation:
        '$\\tan x \\cdot \\cos x = \\frac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin x$.'
    },
    {
      id: 'trigcoc-f-05',
      difficulty: 'easy',
      prompt: 'Si $\\sin x = \\frac{1}{2}$ y $\\cos x = \\frac{\\sqrt{3}}{2}$, ¿cuánto vale $\\tan x$?',
      options: [
        { latex: '\\frac{1}{\\sqrt{3}}', correct: true },
        { latex: '\\sqrt{3}', correct: false },
        { latex: '\\frac{2}{\\sqrt{3}}', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        '$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'trigcoc-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\cot x \\cdot \\sin x$',
      options: [
        { latex: '\\cos x', correct: true },
        { latex: '\\sin x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\cot x', correct: false }
      ],
      explanation:
        '$\\cot x \\cdot \\sin x = \\frac{\\cos x}{\\sin x} \\cdot \\sin x = \\cos x$.'
    },
    {
      id: 'trigcoc-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\sin x \\cdot \\cot x$',
      options: [
        { latex: '\\cos x', correct: true },
        { latex: '\\sin x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\tan x', correct: false }
      ],
      explanation:
        '$\\sin x \\cdot \\cot x = \\sin x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x$.'
    },
    {
      id: 'trigcoc-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\tan x \\cdot \\cos x \\cdot \\cot x$',
      options: [
        { latex: '\\cos x', correct: true },
        { latex: '\\sin x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\tan x', correct: false }
      ],
      explanation:
        '$\\tan x \\cdot \\cot x = 1$, así que queda $\\cos x$.'
    },
    {
      id: 'trigcoc-m-04',
      difficulty: 'medium',
      prompt: 'Si $\\tan x = \\frac{3}{4}$, ¿cuánto vale $\\cot x$?',
      options: [
        { latex: '\\frac{4}{3}', correct: true },
        { latex: '\\frac{3}{4}', correct: false },
        { latex: '-\\frac{3}{4}', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\cot x = \\frac{1}{\\tan x} = \\frac{1}{3/4} = \\frac{4}{3}$.'
    },
    {
      id: 'trigcoc-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{\\sin x}{\\cos x} \\cdot \\frac{\\cos x}{\\sin x}$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '\\tan^2 x', correct: false },
        { latex: '\\sin x \\cos x', correct: false }
      ],
      explanation:
        '$\\tan x \\cdot \\cot x = 1$, porque se cancelan numerador y denominador.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'trigcoc-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{\\sin x}{\\tan x}$',
      options: [
        { latex: '\\cos x', correct: true },
        { latex: '\\sin x', correct: false },
        { latex: '\\tan x', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\frac{\\sin x}{\\tan x} = \\sin x \\div \\frac{\\sin x}{\\cos x} = \\sin x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x$.'
    },
    {
      id: 'trigcoc-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\sin x = \\frac{5}{13}$ y $\\cos x = \\frac{12}{13}$, ¿cuánto vale $\\cot x$?',
      options: [
        { latex: '\\frac{12}{5}', correct: true },
        { latex: '\\frac{5}{12}', correct: false },
        { latex: '\\frac{13}{5}', correct: false },
        { latex: '\\frac{13}{12}', correct: false }
      ],
      explanation:
        '$\\cot x = \\frac{\\cos x}{\\sin x} = \\frac{12/13}{5/13} = \\frac{12}{5}$.'
    },
    {
      id: 'trigcoc-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{\\tan x}{\\cot x}$',
      options: [
        { latex: '\\tan^2 x', correct: true },
        { latex: '1', correct: false },
        { latex: '\\sin^2 x', correct: false },
        { latex: '\\cos^2 x', correct: false }
      ],
      explanation:
        '$\\frac{\\tan x}{\\cot x} = \\tan x \\div \\frac{1}{\\tan x} = \\tan x \\cdot \\tan x = \\tan^2 x$.'
    },
    {
      id: 'trigcoc-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{\\sin x + \\cos x}{\\cos x}$',
      options: [
        { latex: '\\tan x + 1', correct: true },
        { latex: '\\cot x + 1', correct: false },
        { latex: '\\tan x', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\frac{\\sin x + \\cos x}{\\cos x} = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\cos x} = \\tan x + 1$.'
    },
    {
      id: 'trigcoc-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\cos x \\cdot \\tan x + \\sin x$',
      options: [
        { latex: '2\\sin x', correct: true },
        { latex: '\\sin x', correct: false },
        { latex: '2\\cos x', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        '$\\cos x \\cdot \\tan x = \\cos x \\cdot \\frac{\\sin x}{\\cos x} = \\sin x$. Sumando $\\sin x$: $2\\sin x$.'
    }
  ]
};
