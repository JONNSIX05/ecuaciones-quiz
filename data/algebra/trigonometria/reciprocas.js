// data/algebra/trigonometria/reciprocas.js
// Ley: Identidades recíprocas  ->  sec x = 1/cos x, csc x = 1/sin x, cot x = 1/tan x

export default {
  lawId: 'trig-reciprocas',
  lawName: 'Identidades recíprocas',
  lawFormula: '\\sec x = \\frac{1}{\\cos x}, \\quad \\csc x = \\frac{1}{\\sin x}',
  prerequisites: 'Conocer las funciones seno, coseno y tangente.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'trigrec-f-01',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\sec x$?',
      options: [
        { latex: '\\frac{1}{\\cos x}', correct: true },
        { latex: '\\frac{1}{\\sin x}', correct: false },
        { latex: '\\cos x', correct: false },
        { latex: '\\frac{1}{\\tan x}', correct: false }
      ],
      explanation:
        '$\\sec x$ es el recíproco de $\\cos x$: $\\sec x = \\frac{1}{\\cos x}$.'
    },
    {
      id: 'trigrec-f-02',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\csc x$?',
      options: [
        { latex: '\\frac{1}{\\sin x}', correct: true },
        { latex: '\\frac{1}{\\cos x}', correct: false },
        { latex: '\\frac{1}{\\tan x}', correct: false },
        { latex: '\\sin x', correct: false }
      ],
      explanation:
        '$\\csc x$ es el recíproco de $\\sin x$: $\\csc x = \\frac{1}{\\sin x}$.'
    },
    {
      id: 'trigrec-f-03',
      difficulty: 'easy',
      prompt: '¿Cuál es el recíproco de $\\cos x$?',
      options: [
        { latex: '\\sec x', correct: true },
        { latex: '\\csc x', correct: false },
        { latex: '\\tan x', correct: false },
        { latex: '\\cot x', correct: false }
      ],
      explanation:
        'El recíproco de $\\cos x$ es $\\sec x$.'
    },
    {
      id: 'trigrec-f-04',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\cot x$?',
      options: [
        { latex: '\\frac{1}{\\tan x}', correct: true },
        { latex: '\\tan x', correct: false },
        { latex: '\\frac{1}{\\sin x}', correct: false },
        { latex: '\\frac{1}{\\cos x}', correct: false }
      ],
      explanation:
        '$\\cot x$ es el recíproco de $\\tan x$: $\\cot x = \\frac{1}{\\tan x}$.'
    },
    {
      id: 'trigrec-f-05',
      difficulty: 'easy',
      prompt: 'Si $\\cos x = \\frac{1}{2}$, ¿cuánto vale $\\sec x$?',
      options: [
        { latex: '2', correct: true },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '-2', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\sec x = \\frac{1}{\\cos x} = \\frac{1}{1/2} = 2$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'trigrec-m-01',
      difficulty: 'medium',
      prompt: 'Si $\\sin x = \\frac{1}{3}$, ¿cuánto vale $\\csc x$?',
      options: [
        { latex: '3', correct: true },
        { latex: '\\frac{1}{3}', correct: false },
        { latex: '-3', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\csc x = \\frac{1}{\\sin x} = \\frac{1}{1/3} = 3$.'
    },
    {
      id: 'trigrec-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\sec x \\cdot \\cos x$',
      options: [
        { latex: '1', correct: true },
        { latex: '\\sec^2 x', correct: false },
        { latex: '0', correct: false },
        { latex: '\\cos^2 x', correct: false }
      ],
      explanation:
        '$\\sec x \\cdot \\cos x = \\frac{1}{\\cos x} \\cdot \\cos x = 1$.'
    },
    {
      id: 'trigrec-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\csc x \\cdot \\sin x$',
      options: [
        { latex: '1', correct: true },
        { latex: '\\csc^2 x', correct: false },
        { latex: '0', correct: false },
        { latex: '\\sin^2 x', correct: false }
      ],
      explanation:
        '$\\csc x \\cdot \\sin x = \\frac{1}{\\sin x} \\cdot \\sin x = 1$.'
    },
    {
      id: 'trigrec-m-04',
      difficulty: 'medium',
      prompt: '¿A qué es igual $\\tan x \\cdot \\cot x$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '\\tan^2 x', correct: false },
        { latex: '\\cot^2 x', correct: false }
      ],
      explanation:
        '$\\tan x \\cdot \\cot x = \\tan x \\cdot \\frac{1}{\\tan x} = 1$.'
    },
    {
      id: 'trigrec-m-05',
      difficulty: 'medium',
      prompt: 'Si $\\sec x = 4$, ¿cuánto vale $\\cos x$?',
      options: [
        { latex: '\\frac{1}{4}', correct: true },
        { latex: '4', correct: false },
        { latex: '-4', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\cos x = \\frac{1}{\\sec x} = \\frac{1}{4}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'trigrec-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\sec x \\cdot \\csc x \\cdot \\cos x$',
      options: [
        { latex: '\\csc x', correct: true },
        { latex: '\\sec x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\sin x', correct: false }
      ],
      explanation:
        '$\\sec x \\cdot \\cos x = 1$, por lo que queda $\\csc x$.'
    },
    {
      id: 'trigrec-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\cot x = 3$, ¿cuánto vale $\\tan x$?',
      options: [
        { latex: '\\frac{1}{3}', correct: true },
        { latex: '3', correct: false },
        { latex: '-3', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\tan x = \\frac{1}{\\cot x} = \\frac{1}{3}$.'
    },
    {
      id: 'trigrec-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\csc x \\cdot \\tan x$',
      options: [
        { latex: '\\sec x', correct: true },
        { latex: '\\csc x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\cot x', correct: false }
      ],
      explanation:
        '$\\csc x \\cdot \\tan x = \\frac{1}{\\sin x} \\cdot \\frac{\\sin x}{\\cos x} = \\frac{1}{\\cos x} = \\sec x$.'
    },
    {
      id: 'trigrec-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\sec x \\cdot \\sin x$',
      options: [
        { latex: '\\tan x', correct: true },
        { latex: '\\cot x', correct: false },
        { latex: '\\sec x', correct: false },
        { latex: '\\sin x', correct: false }
      ],
      explanation:
        '$\\sec x \\cdot \\sin x = \\frac{1}{\\cos x} \\cdot \\sin x = \\frac{\\sin x}{\\cos x} = \\tan x$.'
    },
    {
      id: 'trigrec-h-05',
      difficulty: 'hard',
      prompt: 'Si $\\sin x = \\frac{5}{13}$, ¿cuánto vale $\\csc x$?',
      options: [
        { latex: '\\frac{13}{5}', correct: true },
        { latex: '\\frac{5}{13}', correct: false },
        { latex: '\\frac{12}{13}', correct: false },
        { latex: '\\frac{13}{12}', correct: false }
      ],
      explanation:
        '$\\csc x = \\frac{1}{\\sin x} = \\frac{1}{5/13} = \\frac{13}{5}$.'
    }
  ]
};
