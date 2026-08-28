// data/algebra/productos-notables/diferencia-cuadrados.js
// Ley: Diferencia de cuadrados  ->  a² - b² = (a + b)(a - b)

export default {
  lawId: 'diferencia-cuadrados',
  lawName: 'Diferencia de cuadrados',
  lawFormula: 'a^2 - b^2 = (a + b)(a - b)',
  prerequisites: 'Conocer binomios conjugados.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'difcuad-f-01',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 - 9$',
      options: [
        { latex: '(x + 3)(x - 3)', correct: true },
        { latex: '(x + 3)^2', correct: false },
        { latex: '(x - 3)^2', correct: false },
        { latex: '(x + 9)(x - 1)', correct: false }
      ],
      explanation:
        '$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$.'
    },
    {
      id: 'difcuad-f-02',
      difficulty: 'easy',
      prompt: 'Factoriza: $a^2 - b^2$',
      options: [
        { latex: '(a + b)(a - b)', correct: true },
        { latex: '(a + b)^2', correct: false },
        { latex: '(a - b)^2', correct: false },
        { latex: 'a^2 - b', correct: false }
      ],
      explanation:
        '$a^2 - b^2 = (a+b)(a-b)$. Es la diferencia de cuadrados.'
    },
    {
      id: 'difcuad-f-03',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 - 16$',
      options: [
        { latex: '(x + 4)(x - 4)', correct: true },
        { latex: '(x + 4)^2', correct: false },
        { latex: '(x - 4)^2', correct: false },
        { latex: '(x + 8)(x - 2)', correct: false }
      ],
      explanation:
        '$x^2 - 16 = x^2 - 4^2 = (x+4)(x-4)$.'
    },
    {
      id: 'difcuad-f-04',
      difficulty: 'easy',
      prompt: 'Factoriza: $m^2 - 1$',
      options: [
        { latex: '(m + 1)(m - 1)', correct: true },
        { latex: '(m + 1)^2', correct: false },
        { latex: '(m - 1)^2', correct: false },
        { latex: '(m + 1)(m + 1)', correct: false }
      ],
      explanation:
        '$m^2 - 1 = m^2 - 1^2 = (m+1)(m-1)$.'
    },
    {
      id: 'difcuad-f-05',
      difficulty: 'easy',
      prompt: 'Factoriza: $25 - x^2$',
      options: [
        { latex: '(5 + x)(5 - x)', correct: true },
        { latex: '(5 + x)^2', correct: false },
        { latex: '(5 - x)^2', correct: false },
        { latex: '(25 + x)(1 - x)', correct: false }
      ],
      explanation:
        '$25 - x^2 = 5^2 - x^2 = (5+x)(5-x)$. El orden de los términos no importa.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'difcuad-m-01',
      difficulty: 'medium',
      prompt: 'Factoriza: $4x^2 - 9$',
      options: [
        { latex: '(2x + 3)(2x - 3)', correct: true },
        { latex: '(2x + 3)^2', correct: false },
        { latex: '(2x - 3)^2', correct: false },
        { latex: '(2x + 9)(2x - 1)', correct: false }
      ],
      explanation:
        '$4x^2 - 9 = (2x)^2 - 3^2 = (2x+3)(2x-3)$.'
    },
    {
      id: 'difcuad-m-02',
      difficulty: 'medium',
      prompt: 'Factoriza: $16a^2 - b^2$',
      options: [
        { latex: '(4a + b)(4a - b)', correct: true },
        { latex: '(4a + b)^2', correct: false },
        { latex: '(4a - b)^2', correct: false },
        { latex: '(16a + b)(a - b)', correct: false }
      ],
      explanation:
        '$16a^2 - b^2 = (4a)^2 - b^2 = (4a+b)(4a-b)$.'
    },
    {
      id: 'difcuad-m-03',
      difficulty: 'medium',
      prompt: 'Factoriza: $x^2 - \\frac{1}{4}$',
      options: [
        { latex: '(x + \\frac{1}{2})(x - \\frac{1}{2})', correct: true },
        { latex: '(x + \\frac{1}{2})^2', correct: false },
        { latex: '(x - \\frac{1}{2})^2', correct: false },
        { latex: '(x + \\frac{1}{4})(x - \\frac{1}{4})', correct: false }
      ],
      explanation:
        '$x^2 - \\frac14 = x^2 - (\\frac12)^2 = (x+\\frac12)(x-\\frac12)$.'
    },
    {
      id: 'difcuad-m-04',
      difficulty: 'medium',
      prompt: 'Factoriza: $49x^2 - 36$',
      options: [
        { latex: '(7x + 6)(7x - 6)', correct: true },
        { latex: '(7x + 6)^2', correct: false },
        { latex: '(7x - 6)^2', correct: false },
        { latex: '(49x + 6)(x - 6)', correct: false }
      ],
      explanation:
        '$49x^2 - 36 = (7x)^2 - 6^2 = (7x+6)(7x-6)$.'
    },
    {
      id: 'difcuad-m-05',
      difficulty: 'medium',
      prompt: 'Factoriza: $x^2 - 25y^2$',
      options: [
        { latex: '(x + 5y)(x - 5y)', correct: true },
        { latex: '(x + 5y)^2', correct: false },
        { latex: '(x - 5y)^2', correct: false },
        { latex: '(x + 25y)(x - y)', correct: false }
      ],
      explanation:
        '$x^2 - 25y^2 = x^2 - (5y)^2 = (x+5y)(x-5y)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'difcuad-h-01',
      difficulty: 'hard',
      prompt: 'Factoriza: $x^4 - 16$',
      options: [
        { latex: '(x^2 + 4)(x + 2)(x - 2)', correct: true },
        { latex: '(x^2 + 4)^2', correct: false },
        { latex: '(x + 2)^4', correct: false },
        { latex: '(x^2 - 4)^2', correct: false }
      ],
      explanation:
        '$x^4 - 16 = (x^2)^2 - 4^2 = (x^2-4)(x^2+4)$. Y $x^2-4$ vuelve a factorizar: $(x+2)(x-2)(x^2+4)$.'
    },
    {
      id: 'difcuad-h-02',
      difficulty: 'hard',
      prompt: 'Calcula usando diferencia de cuadrados: $101^2 - 1$',
      options: [
        { latex: '10200', correct: true },
        { latex: '10000', correct: false },
        { latex: '10100', correct: false },
        { latex: '10201', correct: false }
      ],
      explanation:
        '$101^2 - 1 = 101^2 - 1^2 = (101+1)(101-1) = 102 \\cdot 100 = 10200$.'
    },
    {
      id: 'difcuad-h-03',
      difficulty: 'hard',
      prompt: 'Si $a^2 - b^2 = 45$ y $a + b = 9$, ¿cuánto vale $a - b$?',
      options: [
        { latex: '5', correct: true },
        { latex: '9', correct: false },
        { latex: '36', correct: false },
        { latex: '45', correct: false }
      ],
      explanation:
        '$a^2 - b^2 = (a+b)(a-b) = 45$. Como $a+b = 9$, entonces $9(a-b) = 45$, por lo que $a-b = 5$.'
    },
    {
      id: 'difcuad-h-04',
      difficulty: 'hard',
      prompt: 'Factoriza: $9x^4 - 4$',
      options: [
        { latex: '(3x^2 + 2)(3x^2 - 2)', correct: true },
        { latex: '(3x^2 + 2)^2', correct: false },
        { latex: '(3x^2 - 2)^2', correct: false },
        { latex: '(9x^2 + 2)(x^2 - 2)', correct: false }
      ],
      explanation:
        '$9x^4 - 4 = (3x^2)^2 - 2^2 = (3x^2+2)(3x^2-2)$.'
    },
    {
      id: 'difcuad-h-05',
      difficulty: 'hard',
      prompt: 'Factoriza: $(x + 1)^2 - 9$',
      options: [
        { latex: '(x + 4)(x - 2)', correct: true },
        { latex: '(x + 4)(x + 2)', correct: false },
        { latex: '(x - 2)^2', correct: false },
        { latex: '(x + 1)(x - 3)', correct: false }
      ],
      explanation:
        '$(x+1)^2 - 9 = (x+1)^2 - 3^2 = [(x+1)+3][(x+1)-3] = (x+4)(x-2)$.'
    }
  ]
};
