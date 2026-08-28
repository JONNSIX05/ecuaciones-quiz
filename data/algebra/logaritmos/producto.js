// data/algebra/logaritmos/producto.js
// Ley: Logaritmo de un producto  ->  log_a(xy) = log_a(x) + log_a(y)

export default {
  lawId: 'log-producto',
  lawName: 'Logaritmo de un producto',
  lawFormula: '\\log_a(xy) = \\log_a x + \\log_a y',
  prerequisites: 'Conocer la definición de logaritmo.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'logprod-f-01',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_a(xy)$?',
      options: [
        { latex: '\\log_a x + \\log_a y', correct: true },
        { latex: '\\log_a x \\cdot \\log_a y', correct: false },
        { latex: '\\log_a x - \\log_a y', correct: false },
        { latex: '\\log_a(x + y)', correct: false }
      ],
      explanation:
        '$\\log_a(xy) = \\log_a x + \\log_a y$. El logaritmo de un producto es la suma de logaritmos.'
    },
    {
      id: 'logprod-f-02',
      difficulty: 'easy',
      prompt: 'Expande: $\\log_{10}(3 \\cdot 5)$',
      options: [
        { latex: '\\log_{10} 3 + \\log_{10} 5', correct: true },
        { latex: '\\log_{10} 3 \\cdot \\log_{10} 5', correct: false },
        { latex: '\\log_{10} 8', correct: false },
        { latex: '\\log_{10} 3 - \\log_{10} 5', correct: false }
      ],
      explanation:
        '$\\log_{10}(3 \\cdot 5) = \\log_{10} 3 + \\log_{10} 5$.'
    },
    {
      id: 'logprod-f-03',
      difficulty: 'easy',
      prompt: 'Combina: $\\log_2 x + \\log_2 y$',
      options: [
        { latex: '\\log_2(xy)', correct: true },
        { latex: '\\log_2(x + y)', correct: false },
        { latex: '\\log_2 x \\cdot \\log_2 y', correct: false },
        { latex: '\\log_2(x/y)', correct: false }
      ],
      explanation:
        'La suma de logaritmos de la misma base es el logaritmo del producto: $\\log_2(xy)$.'
    },
    {
      id: 'logprod-f-04',
      difficulty: 'easy',
      prompt: '¿Cuánto vale $\\log_{10} 2 + \\log_{10} 5$?',
      options: [
        { latex: '1', correct: true },
        { latex: '10', correct: false },
        { latex: '7', correct: false },
        { latex: '25', correct: false }
      ],
      explanation:
        '$\\log_{10} 2 + \\log_{10} 5 = \\log_{10}(2 \\cdot 5) = \\log_{10} 10 = 1$.'
    },
    {
      id: 'logprod-f-05',
      difficulty: 'easy',
      prompt: 'Expande: $\\log_3(9x)$',
      options: [
        { latex: '\\log_3 9 + \\log_3 x', correct: true },
        { latex: '\\log_3 9 \\cdot \\log_3 x', correct: false },
        { latex: '\\log_3(9 + x)', correct: false },
        { latex: '\\log_3 9 - \\log_3 x', correct: false }
      ],
      explanation:
        '$\\log_3(9x) = \\log_3 9 + \\log_3 x$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'logprod-m-01',
      difficulty: 'medium',
      prompt: 'Combina: $\\log 3 + \\log 4$',
      options: [
        { latex: '\\log 12', correct: true },
        { latex: '\\log 7', correct: false },
        { latex: '\\log 34', correct: false },
        { latex: '\\log(3/4)', correct: false }
      ],
      explanation:
        '$\\log 3 + \\log 4 = \\log(3 \\cdot 4) = \\log 12$.'
    },
    {
      id: 'logprod-m-02',
      difficulty: 'medium',
      prompt: 'Expande: $\\log_5(125 \\cdot 5)$',
      options: [
        { latex: '\\log_5 125 + \\log_5 5', correct: true },
        { latex: '\\log_5 125 \\cdot \\log_5 5', correct: false },
        { latex: '\\log_5 130', correct: false },
        { latex: '\\log_5 125 - \\log_5 5', correct: false }
      ],
      explanation:
        '$\\log_5(125 \\cdot 5) = \\log_5 125 + \\log_5 5$.'
    },
    {
      id: 'logprod-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\log_2(xy) - \\log_2 y$',
      options: [
        { latex: '\\log_2 x', correct: true },
        { latex: '\\log_2(xy)', correct: false },
        { latex: '\\log_2(xy^2)', correct: false },
        { latex: '\\log_2(x + y)', correct: false }
      ],
      explanation:
        '$\\log_2(xy) - \\log_2 y = \\log_2\\left(\\frac{xy}{y}\\right) = \\log_2 x$.'
    },
    {
      id: 'logprod-m-04',
      difficulty: 'medium',
      prompt: '¿Cuánto vale $\\log_6 2 + \\log_6 3$?',
      options: [
        { latex: '1', correct: true },
        { latex: '6', correct: false },
        { latex: '\\log_6 5', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        '$\\log_6 2 + \\log_6 3 = \\log_6(2 \\cdot 3) = \\log_6 6 = 1$.'
    },
    {
      id: 'logprod-m-05',
      difficulty: 'medium',
      prompt: 'Combina: $\\log a + \\log b + \\log c$',
      options: [
        { latex: '\\log(abc)', correct: true },
        { latex: '\\log(a + b + c)', correct: false },
        { latex: '3 \\log a', correct: false },
        { latex: '\\log(a/bc)', correct: false }
      ],
      explanation:
        '$\\log a + \\log b + \\log c = \\log(abc)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'logprod-h-01',
      difficulty: 'hard',
      prompt: 'Si $\\log 2 = 0.301$, ¿cuánto vale $\\log 20$?',
      options: [
        { latex: '1.301', correct: true },
        { latex: '0.602', correct: false },
        { latex: '2.301', correct: false },
        { latex: '3.01', correct: false }
      ],
      explanation:
        '$\\log 20 = \\log(2 \\cdot 10) = \\log 2 + \\log 10 = 0.301 + 1 = 1.301$.'
    },
    {
      id: 'logprod-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\log 2 = a$ y $\\log 3 = b$, ¿cuánto vale $\\log 6$?',
      options: [
        { latex: 'a + b', correct: true },
        { latex: 'a \\cdot b', correct: false },
        { latex: 'a - b', correct: false },
        { latex: '2a + 3b', correct: false }
      ],
      explanation:
        '$\\log 6 = \\log(2 \\cdot 3) = \\log 2 + \\log 3 = a + b$.'
    },
    {
      id: 'logprod-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\log_2(x^2 y) - \\log_2 x$',
      options: [
        { latex: '\\log_2(xy)', correct: true },
        { latex: '\\log_2(x^2 y)', correct: false },
        { latex: '\\log_2 x', correct: false },
        { latex: '\\log_2(x^2 y^2)', correct: false }
      ],
      explanation:
        '$\\log_2(x^2 y) - \\log_2 x = \\log_2\\left(\\frac{x^2 y}{x}\\right) = \\log_2(xy)$.'
    },
    {
      id: 'logprod-h-04',
      difficulty: 'hard',
      prompt: 'Si $\\log x = 2$ y $\\log y = 3$, ¿cuánto vale $\\log(xy)$?',
      options: [
        { latex: '5', correct: true },
        { latex: '6', correct: false },
        { latex: '1', correct: false },
        { latex: '9', correct: false }
      ],
      explanation:
        '$\\log(xy) = \\log x + \\log y = 2 + 3 = 5$.'
    },
    {
      id: 'logprod-h-05',
      difficulty: 'hard',
      prompt: 'Combina: $\\log_7 3 + \\log_7 \\frac{1}{3}$',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: '\\log_7 9', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        '$\\log_7 3 + \\log_7 \\frac{1}{3} = \\log_7\\left(3 \\cdot \\frac{1}{3}\\right) = \\log_7 1 = 0$.'
    }
  ]
};
