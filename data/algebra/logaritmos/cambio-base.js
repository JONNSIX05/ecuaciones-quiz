// data/algebra/logaritmos/cambio-base.js
// Ley: Cambio de base  ->  log_a(b) = log_c(b) / log_c(a)

export default {
  lawId: 'log-cambio-base',
  lawName: 'Cambio de base',
  lawFormula: '\\log_a b = \\frac{\\log_c b}{\\log_c a}',
  prerequisites: 'Conocer las propiedades básicas de los logaritmos.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'logcb-f-01',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula del cambio de base?',
      options: [
        { latex: '\\frac{\\log_c b}{\\log_c a}', correct: true },
        { latex: '\\frac{\\log_c a}{\\log_c b}', correct: false },
        { latex: '\\log_a b \\cdot \\log_c a', correct: false },
        { latex: '\\frac{\\log_a c}{\\log_b c}', correct: false }
      ],
      explanation:
        '$\\log_a b = \\frac{\\log_c b}{\\log_c a}$. El argumento va en el numerador y la base en el denominador.'
    },
    {
      id: 'logcb-f-02',
      difficulty: 'easy',
      prompt: 'Expresa $\\log_2 5$ en base 10',
      options: [
        { latex: '\\frac{\\log 5}{\\log 2}', correct: true },
        { latex: '\\frac{\\log 2}{\\log 5}', correct: false },
        { latex: '\\log(5/2)', correct: false },
        { latex: '\\log 5 \\cdot \\log 2', correct: false }
      ],
      explanation:
        'Usando base 10: $\\log_2 5 = \\frac{\\log 5}{\\log 2}$.'
    },
    {
      id: 'logcb-f-03',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_4 16$?',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '16', correct: false },
        { latex: '8', correct: false }
      ],
      explanation:
        '$4^2 = 16$, por lo que $\\log_4 16 = 2$.'
    },
    {
      id: 'logcb-f-04',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_5 25$?',
      options: [
        { latex: '2', correct: true },
        { latex: '5', correct: false },
        { latex: '25', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$5^2 = 25$, por lo que $\\log_5 25 = 2$.'
    },
    {
      id: 'logcb-f-05',
      difficulty: 'easy',
      prompt: 'El cambio de base a base 10 de $\\log_3 9$ es...',
      options: [
        { latex: '\\frac{\\log 9}{\\log 3}', correct: true },
        { latex: '\\frac{\\log 3}{\\log 9}', correct: false },
        { latex: '\\log 6', correct: false },
        { latex: '\\log 27', correct: false }
      ],
      explanation:
        '$\\log_3 9 = \\frac{\\log 9}{\\log 3} = \\frac{2}{1} \\cdot \\frac{\\log 3}{\\log 3} = 2$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'logcb-m-01',
      difficulty: 'medium',
      prompt: 'Calcula $\\log_2 8$ usando base 10: $\\frac{\\log 8}{\\log 2} = ?$',
      options: [
        { latex: '3', correct: true },
        { latex: '4', correct: false },
        { latex: '2', correct: false },
        { latex: '6', correct: false }
      ],
      explanation:
        '$\\log_2 8 = \\frac{\\log 8}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$.'
    },
    {
      id: 'logcb-m-02',
      difficulty: 'medium',
      prompt: 'Expresa $\\log_5 10$ en base $e$ (natural)',
      options: [
        { latex: '\\frac{\\ln 10}{\\ln 5}', correct: true },
        { latex: '\\frac{\\ln 5}{\\ln 10}', correct: false },
        { latex: '\\ln 2', correct: false },
        { latex: '\\ln 50', correct: false }
      ],
      explanation:
        'Usando base $e$: $\\log_5 10 = \\frac{\\ln 10}{\\ln 5}$.'
    },
    {
      id: 'logcb-m-03',
      difficulty: 'medium',
      prompt: 'Si $\\log 2 = 0.301$ y $\\log 3 = 0.477$, ¿cuánto vale $\\log_3 2$?',
      options: [
        { latex: '0.631', correct: true },
        { latex: '1.585', correct: false },
        { latex: '0.477', correct: false },
        { latex: '0.176', correct: false }
      ],
      explanation:
        '$\\log_3 2 = \\frac{\\log 2}{\\log 3} = \\frac{0.301}{0.477} \\approx 0.631$.'
    },
    {
      id: 'logcb-m-04',
      difficulty: 'medium',
      prompt: '¿A qué es igual $\\log_4 2$?',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '2', correct: false },
        { latex: '\\frac{1}{4}', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        '$4^{1/2} = \\sqrt{4} = 2$, por lo que $\\log_4 2 = \\frac{1}{2}$.'
    },
    {
      id: 'logcb-m-05',
      difficulty: 'medium',
      prompt: 'Expresa $\\log_7 9$ en base 3',
      options: [
        { latex: '\\frac{\\log_3 9}{\\log_3 7}', correct: true },
        { latex: '\\frac{\\log_3 7}{\\log_3 9}', correct: false },
        { latex: '\\log_3(9/7)', correct: false },
        { latex: '\\log_3 63', correct: false }
      ],
      explanation:
        '$\\log_7 9 = \\frac{\\log_3 9}{\\log_3 7}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'logcb-h-01',
      difficulty: 'hard',
      prompt: 'Calcula $\\log_8 4$ usando cambio de base',
      options: [
        { latex: '\\frac{2}{3}', correct: true },
        { latex: '\\frac{3}{2}', correct: false },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        '$\\log_8 4 = \\frac{\\log 4}{\\log 8} = \\frac{2\\log 2}{3\\log 2} = \\frac{2}{3}$.'
    },
    {
      id: 'logcb-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\log 2 = a$, ¿cuánto vale $\\log_4 8$?',
      options: [
        { latex: '\\frac{3}{2}', correct: true },
        { latex: '\\frac{2}{3}', correct: false },
        { latex: '2', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        '$\\log_4 8 = \\frac{\\log 8}{\\log 4} = \\frac{3\\log 2}{2\\log 2} = \\frac{3}{2}$.'
    },
    {
      id: 'logcb-h-03',
      difficulty: 'hard',
      prompt: '¿A qué es igual $\\log_2 7 \\cdot \\log_7 2$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '\\log 14', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        'Por cambio de base, $\\log_2 7 = \\frac{1}{\\log_7 2}$, así que su producto es 1.'
    },
    {
      id: 'logcb-h-04',
      difficulty: 'hard',
      prompt: 'Calcula $\\log_{27} 9$',
      options: [
        { latex: '\\frac{2}{3}', correct: true },
        { latex: '\\frac{3}{2}', correct: false },
        { latex: '3', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        '$\\log_{27} 9 = \\frac{\\log 9}{\\log 27} = \\frac{2\\log 3}{3\\log 3} = \\frac{2}{3}$.'
    },
    {
      id: 'logcb-h-05',
      difficulty: 'hard',
      prompt: 'Si $\\log_x 5 = 2$, ¿cuánto vale $x$?',
      options: [
        { latex: '\\sqrt{5}', correct: true },
        { latex: '25', correct: false },
        { latex: '5', correct: false },
        { latex: '\\frac{5}{2}', correct: false }
      ],
      explanation:
        '$\\log_x 5 = 2$ significa $x^2 = 5$, por lo que $x = \\sqrt{5}$.'
    }
  ]
};
