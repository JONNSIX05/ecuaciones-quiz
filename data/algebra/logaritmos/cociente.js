// data/algebra/logaritmos/cociente.js
// Ley: Logaritmo de un cociente  ->  log_a(x/y) = log_a(x) - log_a(y)

export default {
  lawId: 'log-cociente',
  lawName: 'Logaritmo de un cociente',
  lawFormula: '\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y',
  prerequisites: 'Conocer el logaritmo de un producto.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'logcoc-f-01',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_a(x/y)$?',
      options: [
        { latex: '\\log_a x - \\log_a y', correct: true },
        { latex: '\\log_a x + \\log_a y', correct: false },
        { latex: '\\log_a x \\cdot \\log_a y', correct: false },
        { latex: '\\frac{\\log_a x}{\\log_a y}', correct: false }
      ],
      explanation:
        '$\\log_a(x/y) = \\log_a x - \\log_a y$. El logaritmo de un cociente es la resta de logaritmos.'
    },
    {
      id: 'logcoc-f-02',
      difficulty: 'easy',
      prompt: 'Expande: $\\log_{10}(8/2)$',
      options: [
        { latex: '\\log_{10} 8 - \\log_{10} 2', correct: true },
        { latex: '\\log_{10} 8 + \\log_{10} 2', correct: false },
        { latex: '\\frac{\\log_{10} 8}{\\log_{10} 2}', correct: false },
        { latex: '\\log_{10} 6', correct: false }
      ],
      explanation:
        '$\\log_{10}(8/2) = \\log_{10} 8 - \\log_{10} 2$.'
    },
    {
      id: 'logcoc-f-03',
      difficulty: 'easy',
      prompt: 'Combina: $\\log_2 x - \\log_2 y$',
      options: [
        { latex: '\\log_2(x/y)', correct: true },
        { latex: '\\log_2(xy)', correct: false },
        { latex: '\\log_2(x - y)', correct: false },
        { latex: '\\frac{\\log_2 x}{\\log_2 y}', correct: false }
      ],
      explanation:
        'La resta de logaritmos de la misma base es el logaritmo del cociente: $\\log_2(x/y)$.'
    },
    {
      id: 'logcoc-f-04',
      difficulty: 'easy',
      prompt: '¿Cuánto vale $\\log_{10} 100 - \\log_{10} 10$?',
      options: [
        { latex: '1', correct: true },
        { latex: '10', correct: false },
        { latex: '\\log_{10} 90', correct: false },
        { latex: '90', correct: false }
      ],
      explanation:
        '$\\log_{10} 100 - \\log_{10} 10 = \\log_{10}(100/10) = \\log_{10} 10 = 1$.'
    },
    {
      id: 'logcoc-f-05',
      difficulty: 'easy',
      prompt: 'Expande: $\\log_5(x/25)$',
      options: [
        { latex: '\\log_5 x - \\log_5 25', correct: true },
        { latex: '\\log_5 x + \\log_5 25', correct: false },
        { latex: '\\frac{\\log_5 x}{\\log_5 25}', correct: false },
        { latex: '\\log_5(x - 25)', correct: false }
      ],
      explanation:
        '$\\log_5(x/25) = \\log_5 x - \\log_5 25$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'logcoc-m-01',
      difficulty: 'medium',
      prompt: 'Combina: $\\log 20 - \\log 4$',
      options: [
        { latex: '\\log 5', correct: true },
        { latex: '\\log 16', correct: false },
        { latex: '\\log 80', correct: false },
        { latex: '\\log 24', correct: false }
      ],
      explanation:
        '$\\log 20 - \\log 4 = \\log(20/4) = \\log 5$.'
    },
    {
      id: 'logcoc-m-02',
      difficulty: 'medium',
      prompt: 'Expande: $\\log_3(27/9)$',
      options: [
        { latex: '\\log_3 27 - \\log_3 9', correct: true },
        { latex: '\\log_3 27 + \\log_3 9', correct: false },
        { latex: '\\frac{\\log_3 27}{\\log_3 9}', correct: false },
        { latex: '\\log_3 18', correct: false }
      ],
      explanation:
        '$\\log_3(27/9) = \\log_3 27 - \\log_3 9$.'
    },
    {
      id: 'logcoc-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\log(x^2) - \\log x$',
      options: [
        { latex: '\\log x', correct: true },
        { latex: '\\log(x^2)', correct: false },
        { latex: '\\log(x^3)', correct: false },
        { latex: '\\log(2x)', correct: false }
      ],
      explanation:
        '$\\log(x^2) - \\log x = \\log(x^2/x) = \\log x$.'
    },
    {
      id: 'logcoc-m-04',
      difficulty: 'medium',
      prompt: '¿Cuánto vale $\\log_6 12 - \\log_6 2$?',
      options: [
        { latex: '1', correct: true },
        { latex: '6', correct: false },
        { latex: '\\log_6 10', correct: false },
        { latex: '10', correct: false }
      ],
      explanation:
        '$\\log_6 12 - \\log_6 2 = \\log_6(12/2) = \\log_6 6 = 1$.'
    },
    {
      id: 'logcoc-m-05',
      difficulty: 'medium',
      prompt: 'Combina: $\\log a - \\log b - \\log c$',
      options: [
        { latex: '\\log\\left(\\frac{a}{bc}\\right)', correct: true },
        { latex: '\\log(a - b - c)', correct: false },
        { latex: '\\log\\left(\\frac{a}{b + c}\\right)', correct: false },
        { latex: '\\log(abc)', correct: false }
      ],
      explanation:
        '$\\log a - \\log b - \\log c = \\log\\left(\\frac{a}{bc}\\right)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'logcoc-h-01',
      difficulty: 'hard',
      prompt: 'Si $\\log 2 = 0.301$, ¿cuánto vale $\\log 5$?',
      options: [
        { latex: '0.699', correct: true },
        { latex: '0.301', correct: false },
        { latex: '0.5', correct: false },
        { latex: '1.301', correct: false }
      ],
      explanation:
        '$\\log 5 = \\log(10/2) = \\log 10 - \\log 2 = 1 - 0.301 = 0.699$.'
    },
    {
      id: 'logcoc-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\log x = 4$ y $\\log y = 1$, ¿cuánto vale $\\log(x/y)$?',
      options: [
        { latex: '3', correct: true },
        { latex: '5', correct: false },
        { latex: '4', correct: false },
        { latex: '0.25', correct: false }
      ],
      explanation:
        '$\\log(x/y) = \\log x - \\log y = 4 - 1 = 3$.'
    },
    {
      id: 'logcoc-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\log_2(x^3/y) - \\log_2 x$',
      options: [
        { latex: '\\log_2(x^2/y)', correct: true },
        { latex: '\\log_2(x^3/y)', correct: false },
        { latex: '\\log_2(x^2 y)', correct: false },
        { latex: '\\log_2(x^2)', correct: false }
      ],
      explanation:
        '$\\log_2(x^3/y) - \\log_2 x = \\log_2\\left(\\frac{x^3/y}{x}\\right) = \\log_2(x^2/y)$.'
    },
    {
      id: 'logcoc-h-04',
      difficulty: 'hard',
      prompt: 'Si $\\log 2 = a$ y $\\log 5 = b$, ¿cuánto vale $\\log(2/5)$?',
      options: [
        { latex: 'a - b', correct: true },
        { latex: 'a + b', correct: false },
        { latex: 'b - a', correct: false },
        { latex: 'a / b', correct: false }
      ],
      explanation:
        '$\\log(2/5) = \\log 2 - \\log 5 = a - b$.'
    },
    {
      id: 'logcoc-h-05',
      difficulty: 'hard',
      prompt: '¿Cuánto vale $\\log_3 9 - \\log_3 27$?',
      options: [
        { latex: '-1', correct: true },
        { latex: '1', correct: false },
        { latex: '3', correct: false },
        { latex: '\\log_3 18', correct: false }
      ],
      explanation:
        '$\\log_3 9 - \\log_3 27 = \\log_3(9/27) = \\log_3(1/3) = -1$.'
    }
  ]
};
