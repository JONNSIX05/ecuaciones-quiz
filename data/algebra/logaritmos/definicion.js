// data/algebra/logaritmos/definicion.js
// Ley: Definición de logaritmo  ->  log_a(x) = y  ⟺  a^y = x

export default {
  lawId: 'log-definicion',
  lawName: 'Definición de logaritmo',
  lawFormula: '\\log_a x = y \\iff a^y = x',
  prerequisites: 'Conocer potencias y exponentes.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'logdef-f-01',
      difficulty: 'easy',
      prompt: 'Si $2^3 = 8$, ¿cuánto vale $\\log_2 8$?',
      options: [
        { latex: '3', correct: true },
        { latex: '2', correct: false },
        { latex: '8', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        '$\\log_2 8$ pregunta "¿a qué exponente debo elevar 2 para obtener 8?". Como $2^3 = 8$, la respuesta es 3.'
    },
    {
      id: 'logdef-f-02',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_{10} 100$?',
      options: [
        { latex: '2', correct: true },
        { latex: '10', correct: false },
        { latex: '100', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        'Como $10^2 = 100$, entonces $\\log_{10} 100 = 2$.'
    },
    {
      id: 'logdef-f-03',
      difficulty: 'easy',
      prompt: 'Si $\\log_2 16 = x$, ¿cuánto vale $x$?',
      options: [
        { latex: '4', correct: true },
        { latex: '2', correct: false },
        { latex: '8', correct: false },
        { latex: '16', correct: false }
      ],
      explanation:
        '$2^4 = 16$, por lo que $\\log_2 16 = 4$.'
    },
    {
      id: 'logdef-f-04',
      difficulty: 'easy',
      prompt: 'La forma exponencial de $\\log_3 9 = 2$ es...',
      options: [
        { latex: '3^2 = 9', correct: true },
        { latex: '2^3 = 9', correct: false },
        { latex: '3^9 = 2', correct: false },
        { latex: '9^2 = 3', correct: false }
      ],
      explanation:
        '$\\log_3 9 = 2$ significa $3^2 = 9$.'
    },
    {
      id: 'logdef-f-05',
      difficulty: 'easy',
      prompt: '¿A qué es igual $\\log_5 5$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '5', correct: false },
        { latex: '25', correct: false }
      ],
      explanation:
        '$\\log_5 5 = 1$ porque $5^1 = 5$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'logdef-m-01',
      difficulty: 'medium',
      prompt: 'Si $\\log_x 49 = 2$, ¿cuánto vale $x$?',
      options: [
        { latex: '7', correct: true },
        { latex: '49', correct: false },
        { latex: '2', correct: false },
        { latex: '98', correct: false }
      ],
      explanation:
        '$\\log_x 49 = 2$ significa $x^2 = 49$, por lo que $x = 7$.'
    },
    {
      id: 'logdef-m-02',
      difficulty: 'medium',
      prompt: '¿A qué es igual $\\log_3 81$?',
      options: [
        { latex: '4', correct: true },
        { latex: '3', correct: false },
        { latex: '27', correct: false },
        { latex: '9', correct: false }
      ],
      explanation:
        '$3^4 = 81$, por lo que $\\log_3 81 = 4$.'
    },
    {
      id: 'logdef-m-03',
      difficulty: 'medium',
      prompt: 'Resuelve: $\\log_2 x = 5$',
      options: [
        { latex: '32', correct: true },
        { latex: '10', correct: false },
        { latex: '25', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        '$\\log_2 x = 5$ significa $2^5 = x$, por lo que $x = 32$.'
    },
    {
      id: 'logdef-m-04',
      difficulty: 'medium',
      prompt: '¿A qué es igual $\\log_{10} 1000$?',
      options: [
        { latex: '3', correct: true },
        { latex: '10', correct: false },
        { latex: '100', correct: false },
        { latex: '1000', correct: false }
      ],
      explanation:
        '$10^3 = 1000$, por lo que $\\log_{10} 1000 = 3$.'
    },
    {
      id: 'logdef-m-05',
      difficulty: 'medium',
      prompt: 'La forma logarítmica de $5^2 = 25$ es...',
      options: [
        { latex: '\\log_5 25 = 2', correct: true },
        { latex: '\\log_2 25 = 5', correct: false },
        { latex: '\\log_5 2 = 25', correct: false },
        { latex: '\\log_2 5 = 25', correct: false }
      ],
      explanation:
        '$5^2 = 25$ equivale a $\\log_5 25 = 2$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'logdef-h-01',
      difficulty: 'hard',
      prompt: 'Resuelve: $\\log_3 x = 4$',
      options: [
        { latex: '81', correct: true },
        { latex: '12', correct: false },
        { latex: '64', correct: false },
        { latex: '27', correct: false }
      ],
      explanation:
        '$\\log_3 x = 4$ significa $3^4 = x$, por lo que $x = 81$.'
    },
    {
      id: 'logdef-h-02',
      difficulty: 'hard',
      prompt: 'Si $\\log_x 64 = 3$, ¿cuánto vale $x$?',
      options: [
        { latex: '4', correct: true },
        { latex: '8', correct: false },
        { latex: '2', correct: false },
        { latex: '64', correct: false }
      ],
      explanation:
        '$x^3 = 64$. Como $4^3 = 64$, entonces $x = 4$.'
    },
    {
      id: 'logdef-h-03',
      difficulty: 'hard',
      prompt: '¿A qué es igual $\\log_{10} 0.001$?',
      options: [
        { latex: '-3', correct: true },
        { latex: '3', correct: false },
        { latex: '-1', correct: false },
        { latex: '0.001', correct: false }
      ],
      explanation:
        '$0.001 = 10^{-3}$, por lo que $\\log_{10} 0.001 = -3$.'
    },
    {
      id: 'logdef-h-04',
      difficulty: 'hard',
      prompt: 'Resuelve: $\\log_5 x = 0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '5', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        '$\\log_5 x = 0$ significa $5^0 = x = 1$.'
    },
    {
      id: 'logdef-h-05',
      difficulty: 'hard',
      prompt: '¿A qué es igual $\\log_4 \\frac{1}{16}$?',
      options: [
        { latex: '-2', correct: true },
        { latex: '2', correct: false },
        { latex: '-4', correct: false },
        { latex: '\\frac{1}{4}', correct: false }
      ],
      explanation:
        '$\\frac{1}{16} = 4^{-2}$, por lo que $\\log_4 \\frac{1}{16} = -2$.'
    }
  ]
};
