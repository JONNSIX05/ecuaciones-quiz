// data/algebra/productos-notables/binomios-conjugados.js
// Ley: Producto de binomios conjugados  ->  (a + b)(a - b) = a² - b²

export default {
  lawId: 'binomios-conjugados',
  lawName: 'Binomios conjugados',
  lawFormula: '(a + b)(a - b) = a^2 - b^2',
  prerequisites: 'Conocer la diferencia de cuadrados.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'binconj-f-01',
      difficulty: 'easy',
      prompt: 'Multiplica: $(x + 3)(x - 3)$',
      options: [
        { latex: 'x^2 - 9', correct: true },
        { latex: 'x^2 + 9', correct: false },
        { latex: 'x^2 - 6x + 9', correct: false },
        { latex: 'x^2 - 3', correct: false }
      ],
      explanation:
        '$(x+3)(x-3) = x^2 - 3^2 = x^2 - 9$. Los términos cruzados se cancelan.'
    },
    {
      id: 'binconj-f-02',
      difficulty: 'easy',
      prompt: 'Multiplica: $(a + b)(a - b)$',
      options: [
        { latex: 'a^2 - b^2', correct: true },
        { latex: 'a^2 + b^2', correct: false },
        { latex: 'a^2 - 2ab + b^2', correct: false },
        { latex: 'a^2 + 2ab + b^2', correct: false }
      ],
      explanation:
        '$(a+b)(a-b) = a^2 - b^2$. El término central se elimina: $ab - ab = 0$.'
    },
    {
      id: 'binconj-f-03',
      difficulty: 'easy',
      prompt: 'Multiplica: $(m + 1)(m - 1)$',
      options: [
        { latex: 'm^2 - 1', correct: true },
        { latex: 'm^2 + 1', correct: false },
        { latex: 'm^2 - 2m + 1', correct: false },
        { latex: 'm - 1', correct: false }
      ],
      explanation:
        '$(m+1)(m-1) = m^2 - 1^2 = m^2 - 1$.'
    },
    {
      id: 'binconj-f-04',
      difficulty: 'easy',
      prompt: 'Multiplica: $(5 + y)(5 - y)$',
      options: [
        { latex: '25 - y^2', correct: true },
        { latex: '25 + y^2', correct: false },
        { latex: '25 - 10y + y^2', correct: false },
        { latex: '10 - y^2', correct: false }
      ],
      explanation:
        '$(5+y)(5-y) = 5^2 - y^2 = 25 - y^2$.'
    },
    {
      id: 'binconj-f-05',
      difficulty: 'easy',
      prompt: 'Multiplica: $(x + 2)(x - 2)$',
      options: [
        { latex: 'x^2 - 4', correct: true },
        { latex: 'x^2 + 4', correct: false },
        { latex: 'x^2 - 4x + 4', correct: false },
        { latex: 'x^2 - 2', correct: false }
      ],
      explanation:
        '$(x+2)(x-2) = x^2 - 2^2 = x^2 - 4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'binconj-m-01',
      difficulty: 'medium',
      prompt: 'Multiplica: $(2x + 3)(2x - 3)$',
      options: [
        { latex: '4x^2 - 9', correct: true },
        { latex: '4x^2 + 9', correct: false },
        { latex: '2x^2 - 9', correct: false },
        { latex: '4x^2 - 12x + 9', correct: false }
      ],
      explanation:
        '$(2x+3)(2x-3) = (2x)^2 - 3^2 = 4x^2 - 9$.'
    },
    {
      id: 'binconj-m-02',
      difficulty: 'medium',
      prompt: 'Multiplica: $(3a - b)(3a + b)$',
      options: [
        { latex: '9a^2 - b^2', correct: true },
        { latex: '9a^2 + b^2', correct: false },
        { latex: '6a^2 - b^2', correct: false },
        { latex: '9a^2 - 6ab + b^2', correct: false }
      ],
      explanation:
        '$(3a-b)(3a+b) = (3a)^2 - b^2 = 9a^2 - b^2$.'
    },
    {
      id: 'binconj-m-03',
      difficulty: 'medium',
      prompt: 'Multiplica: $(x - 7)(x + 7)$',
      options: [
        { latex: 'x^2 - 49', correct: true },
        { latex: 'x^2 + 49', correct: false },
        { latex: 'x^2 - 14x + 49', correct: false },
        { latex: 'x^2 - 7', correct: false }
      ],
      explanation:
        '$(x-7)(x+7) = x^2 - 7^2 = x^2 - 49$.'
    },
    {
      id: 'binconj-m-04',
      difficulty: 'medium',
      prompt: 'Multiplica: $(\\frac{1}{2} + x)(\\frac{1}{2} - x)$',
      options: [
        { latex: '\\frac{1}{4} - x^2', correct: true },
        { latex: '\\frac{1}{4} + x^2', correct: false },
        { latex: '\\frac{1}{2} - x^2', correct: false },
        { latex: '\\frac{1}{4} - x', correct: false }
      ],
      explanation:
        '$(\\frac12+x)(\\frac12-x) = (\\frac12)^2 - x^2 = \\frac14 - x^2$.'
    },
    {
      id: 'binconj-m-05',
      difficulty: 'medium',
      prompt: 'Multiplica: $(5x + 2y)(5x - 2y)$',
      options: [
        { latex: '25x^2 - 4y^2', correct: true },
        { latex: '25x^2 + 4y^2', correct: false },
        { latex: '5x^2 - 2y^2', correct: false },
        { latex: '25x^2 - 10xy + 4y^2', correct: false }
      ],
      explanation:
        '$(5x+2y)(5x-2y) = (5x)^2 - (2y)^2 = 25x^2 - 4y^2$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'binconj-h-01',
      difficulty: 'hard',
      prompt: 'Multiplica: $(x^2 + 1)(x^2 - 1)$',
      options: [
        { latex: 'x^4 - 1', correct: true },
        { latex: 'x^4 + 1', correct: false },
        { latex: 'x^2 - 1', correct: false },
        { latex: 'x^4 - 2x^2 + 1', correct: false }
      ],
      explanation:
        '$(x^2+1)(x^2-1) = (x^2)^2 - 1^2 = x^4 - 1$.'
    },
    {
      id: 'binconj-h-02',
      difficulty: 'hard',
      prompt: 'Si $(a + b)(a - b) = 39$ y $a + b = 13$, ¿cuánto vale $a - b$?',
      options: [
        { latex: '3', correct: true },
        { latex: '13', correct: false },
        { latex: '26', correct: false },
        { latex: '39', correct: false }
      ],
      explanation:
        '$(a+b)(a-b) = 39$ y $a+b = 13$, entonces $13(a-b) = 39$, por lo que $a-b = 3$.'
    },
    {
      id: 'binconj-h-03',
      difficulty: 'hard',
      prompt: 'Multiplica: $(x + 2)(x - 2)(x^2 + 4)$',
      options: [
        { latex: 'x^4 - 16', correct: true },
        { latex: 'x^4 + 16', correct: false },
        { latex: 'x^2 - 16', correct: false },
        { latex: 'x^4 - 8', correct: false }
      ],
      explanation:
        '$(x+2)(x-2) = x^2 - 4$. Luego $(x^2-4)(x^2+4) = (x^2)^2 - 4^2 = x^4 - 16$.'
    },
    {
      id: 'binconj-h-04',
      difficulty: 'hard',
      prompt: 'Multiplica: $(a + 2b)(a - 2b)$',
      options: [
        { latex: 'a^2 - 4b^2', correct: true },
        { latex: 'a^2 + 4b^2', correct: false },
        { latex: 'a^2 - 2b^2', correct: false },
        { latex: 'a^2 - 4ab + 4b^2', correct: false }
      ],
      explanation:
        '$(a+2b)(a-2b) = a^2 - (2b)^2 = a^2 - 4b^2$.'
    },
    {
      id: 'binconj-h-05',
      difficulty: 'hard',
      prompt: '¿Qué término falta? $(x + 9)(x - 9) = x^2 - \\_\\_\\_$',
      options: [
        { latex: '81', correct: true },
        { latex: '9', correct: false },
        { latex: '18', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        '$(x+9)(x-9) = x^2 - 9^2 = x^2 - 81$.'
    }
  ]
};
