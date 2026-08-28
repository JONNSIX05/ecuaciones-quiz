// data/algebra/trigonometria/pitagorica.js
// Ley: Identidad pitagórica  ->  sin²x + cos²x = 1

export default {
  lawId: 'trig-pitagorica',
  lawName: 'Identidad pitagórica',
  lawFormula: '\\sin^2 x + \\cos^2 x = 1',
  prerequisites: 'Conocer las funciones trigonométricas seno y coseno.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'trigpit-f-01',
      difficulty: 'easy',
      prompt: '¿Cuál es la identidad pitagórica fundamental?',
      options: [
        { latex: '\\sin^2 x + \\cos^2 x = 1', correct: true },
        { latex: '\\sin^2 x - \\cos^2 x = 1', correct: false },
        { latex: '\\sin^2 x + \\cos^2 x = 0', correct: false },
        { latex: '\\sin x + \\cos x = 1', correct: false }
      ],
      explanation:
        'La identidad fundamental es $\\sin^2 x + \\cos^2 x = 1$. Vale para cualquier ángulo $x$.'
    },
    {
      id: 'trigpit-f-02',
      difficulty: 'easy',
      prompt: 'Si $\\sin x = \\frac{3}{5}$, ¿cuánto vale $\\cos^2 x$?',
      options: [
        { latex: '\\frac{16}{25}', correct: true },
        { latex: '\\frac{4}{5}', correct: false },
        { latex: '\\frac{9}{25}', correct: false },
        { latex: '\\frac{1}{25}', correct: false }
      ],
      explanation:
        '$\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$.'
    },
    {
      id: 'trigpit-f-03',
      difficulty: 'easy',
      prompt: 'Despeja $\\sin^2 x$ de la identidad $\\sin^2 x + \\cos^2 x = 1$',
      options: [
        { latex: '\\sin^2 x = 1 - \\cos^2 x', correct: true },
        { latex: '\\sin^2 x = 1 + \\cos^2 x', correct: false },
        { latex: '\\sin^2 x = \\cos^2 x - 1', correct: false },
        { latex: '\\sin^2 x = \\cos^2 x', correct: false }
      ],
      explanation:
        'Restando $\\cos^2 x$ a ambos lados: $\\sin^2 x = 1 - \\cos^2 x$.'
    },
    {
      id: 'trigpit-f-04',
      difficulty: 'easy',
      prompt: '¿Cuánto vale $\\sin^2 x + \\cos^2 x$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '2', correct: false },
        { latex: '\\sin 2x', correct: false }
      ],
      explanation:
        '$\\sin^2 x + \\cos^2 x = 1$ para todo $x$.'
    },
    {
      id: 'trigpit-f-05',
      difficulty: 'easy',
      prompt: 'Si $\\cos x = \\frac{1}{2}$, ¿cuánto vale $\\sin^2 x$?',
      options: [
        { latex: '\\frac{3}{4}', correct: true },
        { latex: '\\frac{1}{4}', correct: false },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$\\sin^2 x = 1 - \\cos^2 x = 1 - \\frac{1}{4} = \\frac{3}{4}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'trigpit-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $1 - \\sin^2 x$',
      options: [
        { latex: '\\cos^2 x', correct: true },
        { latex: '\\sin^2 x', correct: false },
        { latex: '1', correct: false },
        { latex: '-\\cos^2 x', correct: false }
      ],
      explanation:
        'De $\\sin^2 x + \\cos^2 x = 1$ se obtiene $1 - \\sin^2 x = \\cos^2 x$.'
    },
    {
      id: 'trigpit-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $1 - \\cos^2 x$',
      options: [
        { latex: '\\sin^2 x', correct: true },
        { latex: '\\cos^2 x', correct: false },
        { latex: '1', correct: false },
        { latex: '-\\sin^2 x', correct: false }
      ],
      explanation:
        'De la identidad fundamental: $1 - \\cos^2 x = \\sin^2 x$.'
    },
    {
      id: 'trigpit-m-03',
      difficulty: 'medium',
      prompt: '¿A qué es igual $1 + \\tan^2 x$?',
      options: [
        { latex: '\\sec^2 x', correct: true },
        { latex: '\\csc^2 x', correct: false },
        { latex: '\\cot^2 x', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$1 + \\tan^2 x = \\sec^2 x$ es otra forma de la identidad pitagórica.'
    },
    {
      id: 'trigpit-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\sec^2 x - 1$',
      options: [
        { latex: '\\tan^2 x', correct: true },
        { latex: '\\cot^2 x', correct: false },
        { latex: '1', correct: false },
        { latex: '\\sin^2 x', correct: false }
      ],
      explanation:
        'Como $\\sec^2 x = 1 + \\tan^2 x$, entonces $\\sec^2 x - 1 = \\tan^2 x$.'
    },
    {
      id: 'trigpit-m-05',
      difficulty: 'medium',
      prompt: 'Si $\\tan x = 3$, ¿cuánto vale $\\sec^2 x$?',
      options: [
        { latex: '10', correct: true },
        { latex: '9', correct: false },
        { latex: '3', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        '$\\sec^2 x = 1 + \\tan^2 x = 1 + 9 = 10$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'trigpit-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\sin^2 x + \\cos^2 x + \\tan^2 x$',
      options: [
        { latex: '\\sec^2 x', correct: true },
        { latex: '\\csc^2 x', correct: false },
        { latex: '1', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        '$\\sin^2 x + \\cos^2 x = 1$, así que queda $1 + \\tan^2 x = \\sec^2 x$.'
    },
    {
      id: 'trigpit-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\sin x = \\frac{5}{13}$ y $x$ está en el primer cuadrante, ¿cuánto vale $\\cos x$?',
      options: [
        { latex: '\\frac{12}{13}', correct: true },
        { latex: '\\frac{8}{13}', correct: false },
        { latex: '\\frac{144}{169}', correct: false },
        { latex: '\\frac{12}{169}', correct: false }
      ],
      explanation:
        '$\\cos^2 x = 1 - \\frac{25}{169} = \\frac{144}{169}$, y como $x$ está en el primer cuadrante, $\\cos x = \\frac{12}{13}$.'
    },
    {
      id: 'trigpit-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\sin^2 x\\,(1 + \\cot^2 x)$',
      options: [
        { latex: '1', correct: true },
        { latex: '\\sin^2 x', correct: false },
        { latex: '\\cos^2 x', correct: false },
        { latex: '\\csc^2 x', correct: false }
      ],
      explanation:
        '$1 + \\cot^2 x = \\csc^2 x$, así que $\\sin^2 x \\cdot \\csc^2 x = \\sin^2 x \\cdot \\frac{1}{\\sin^2 x} = 1$.'
    },
    {
      id: 'trigpit-h-04',
      difficulty: 'hard',
      prompt: 'Si $\\cos x = \\frac{1}{3}$, ¿cuánto vale $1 - \\cos^2 x$?',
      options: [
        { latex: '\\frac{8}{9}', correct: true },
        { latex: '\\frac{1}{9}', correct: false },
        { latex: '\\frac{2}{3}', correct: false },
        { latex: '\\frac{8}{3}', correct: false }
      ],
      explanation:
        '$1 - \\cos^2 x = 1 - \\frac{1}{9} = \\frac{8}{9}$, que es $\\sin^2 x$.'
    },
    {
      id: 'trigpit-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $(\\sin x + \\cos x)^2 - 1$',
      options: [
        { latex: '2 \\sin x \\cos x', correct: true },
        { latex: '0', correct: false },
        { latex: '2', correct: false },
        { latex: '\\sin x \\cos x', correct: false }
      ],
      explanation:
        '$(\\sin x + \\cos x)^2 = \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1 + 2\\sin x \\cos x$. Al restar 1: $2\\sin x \\cos x$.'
    }
  ]
};
