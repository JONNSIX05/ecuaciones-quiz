// data/algebra/division-polinomios/algoritmo.js
// Ley: División de polinomios  ->  P(x) = Q(x)·C(x) + R(x)

export default {
  lawId: 'division-polinomios',
  lawName: 'División de polinomios',
  lawFormula: 'P(x) = Q(x) \\cdot C(x) + R(x)',
  prerequisites: 'Conocer la suma, resta y multiplicación de polinomios.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'divpol-f-01',
      difficulty: 'easy',
      prompt: 'Divide: $(x^2 + 3x + 2) \\div (x + 1)$',
      options: [
        { latex: 'x + 2', correct: true },
        { latex: 'x + 1', correct: false },
        { latex: 'x - 2', correct: false },
        { latex: 'x^2 + 2', correct: false }
      ],
      explanation:
        '$x^2 + 3x + 2 = (x+1)(x+2)$, así que al dividir entre $x+1$ queda $x+2$.'
    },
    {
      id: 'divpol-f-02',
      difficulty: 'easy',
      prompt: 'Divide: $(x^3 - x^2) \\div x$',
      options: [
        { latex: 'x^2 - x', correct: true },
        { latex: 'x^2 + x', correct: false },
        { latex: 'x^3 - x', correct: false },
        { latex: 'x^2', correct: false }
      ],
      explanation:
        'Divide cada término entre $x$: $\\frac{x^3}{x} - \\frac{x^2}{x} = x^2 - x$.'
    },
    {
      id: 'divpol-f-03',
      difficulty: 'easy',
      prompt: 'Divide: $(6x^2 + 3x) \\div 3x$',
      options: [
        { latex: '2x + 1', correct: true },
        { latex: '2x - 1', correct: false },
        { latex: '6x + 3', correct: false },
        { latex: '2x', correct: false }
      ],
      explanation:
        '$\\frac{6x^2}{3x} + \\frac{3x}{3x} = 2x + 1$.'
    },
    {
      id: 'divpol-f-04',
      difficulty: 'easy',
      prompt: 'Divide: $(x^2 - 9) \\div (x - 3)$',
      options: [
        { latex: 'x + 3', correct: true },
        { latex: 'x - 3', correct: false },
        { latex: 'x + 9', correct: false },
        { latex: 'x^2 + 3', correct: false }
      ],
      explanation:
        '$x^2 - 9 = (x-3)(x+3)$, así que al dividir entre $x-3$ queda $x+3$.'
    },
    {
      id: 'divpol-f-05',
      difficulty: 'easy',
      prompt: 'Divide: $(x^2 - 4x) \\div x$',
      options: [
        { latex: 'x - 4', correct: true },
        { latex: 'x + 4', correct: false },
        { latex: 'x^2 - 4', correct: false },
        { latex: '4 - x', correct: false }
      ],
      explanation:
        '$\\frac{x^2}{x} - \\frac{4x}{x} = x - 4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'divpol-m-01',
      difficulty: 'medium',
      prompt: 'Divide: $(x^2 + 5x + 6) \\div (x + 2)$',
      options: [
        { latex: 'x + 3', correct: true },
        { latex: 'x + 2', correct: false },
        { latex: 'x - 3', correct: false },
        { latex: 'x^2 + 3', correct: false }
      ],
      explanation:
        '$x^2 + 5x + 6 = (x+2)(x+3)$, así que el cociente es $x+3$.'
    },
    {
      id: 'divpol-m-02',
      difficulty: 'medium',
      prompt: 'Divide: $(x^3 + 2x^2 + x) \\div x$',
      options: [
        { latex: 'x^2 + 2x + 1', correct: true },
        { latex: 'x^2 + 2x', correct: false },
        { latex: 'x^3 + 2x + 1', correct: false },
        { latex: 'x^2 + x + 1', correct: false }
      ],
      explanation:
        'Divide término a término: $x^2 + 2x + 1$.'
    },
    {
      id: 'divpol-m-03',
      difficulty: 'medium',
      prompt: 'Divide: $(2x^2 + 6x) \\div 2x$',
      options: [
        { latex: 'x + 3', correct: true },
        { latex: 'x - 3', correct: false },
        { latex: '2x + 3', correct: false },
        { latex: 'x + 6', correct: false }
      ],
      explanation:
        '$\\frac{2x^2}{2x} + \\frac{6x}{2x} = x + 3$.'
    },
    {
      id: 'divpol-m-04',
      difficulty: 'medium',
      prompt: 'Divide: $(x^2 - 1) \\div (x + 1)$',
      options: [
        { latex: 'x - 1', correct: true },
        { latex: 'x + 1', correct: false },
        { latex: 'x^2 - 1', correct: false },
        { latex: '1 - x', correct: false }
      ],
      explanation:
        '$x^2 - 1 = (x+1)(x-1)$, así que el cociente es $x-1$.'
    },
    {
      id: 'divpol-m-05',
      difficulty: 'medium',
      prompt: 'Divide: $(x^3 - 8) \\div (x - 2)$',
      options: [
        { latex: 'x^2 + 2x + 4', correct: true },
        { latex: 'x^2 - 2x + 4', correct: false },
        { latex: 'x^2 + 2x - 4', correct: false },
        { latex: 'x^2 + 4', correct: false }
      ],
      explanation:
        'Es una diferencia de cubos: $x^3 - 8 = (x-2)(x^2 + 2x + 4)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'divpol-h-01',
      difficulty: 'hard',
      prompt: 'Divide: $(x^3 - 1) \\div (x - 1)$',
      options: [
        { latex: 'x^2 + x + 1', correct: true },
        { latex: 'x^2 - x + 1', correct: false },
        { latex: 'x^2 + x - 1', correct: false },
        { latex: 'x^3 + x + 1', correct: false }
      ],
      explanation:
        'Diferencia de cubos: $x^3 - 1 = (x-1)(x^2 + x + 1)$.'
    },
    {
      id: 'divpol-h-02',
      difficulty: 'hard',
      prompt: 'Divide: $(2x^3 + 4x^2 - 6x) \\div 2x$',
      options: [
        { latex: 'x^2 + 2x - 3', correct: true },
        { latex: 'x^2 + 2x + 3', correct: false },
        { latex: '2x^2 + 4x - 6', correct: false },
        { latex: 'x^2 - 2x - 3', correct: false }
      ],
      explanation:
        'Divide cada término entre $2x$: $x^2 + 2x - 3$.'
    },
    {
      id: 'divpol-h-03',
      difficulty: 'hard',
      prompt: 'Divide: $(x^2 + 1) \\div (x - 1)$. ¿Cuál es el residuo?',
      options: [
        { latex: '2', correct: true },
        { latex: '0', correct: false },
        { latex: '1', correct: false },
        { latex: 'x + 1', correct: false }
      ],
      explanation:
        '$x^2 + 1 = (x-1)(x+1) + 2$, por lo que el residuo es $2$.'
    },
    {
      id: 'divpol-h-04',
      difficulty: 'hard',
      prompt: 'Divide: $(x^3 + x^2 - x - 1) \\div (x + 1)$',
      options: [
        { latex: 'x^2 - 1', correct: true },
        { latex: 'x^2 + 1', correct: false },
        { latex: 'x - 1', correct: false },
        { latex: 'x^2 - x + 1', correct: false }
      ],
      explanation:
        'Agrupa: $x^2(x+1) - (x+1) = (x+1)(x^2-1)$, así que el cociente es $x^2 - 1$.'
    },
    {
      id: 'divpol-h-05',
      difficulty: 'hard',
      prompt: 'Divide: $(3x^3 - 3x) \\div 3x$',
      options: [
        { latex: 'x^2 - 1', correct: true },
        { latex: 'x^2 + 1', correct: false },
        { latex: 'x^3 - 1', correct: false },
        { latex: '3x^2 - 3', correct: false }
      ],
      explanation:
        '$\\frac{3x^3}{3x} - \\frac{3x}{3x} = x^2 - 1$.'
    }
  ]
};
