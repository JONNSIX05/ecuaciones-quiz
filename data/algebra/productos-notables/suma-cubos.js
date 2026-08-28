// data/algebra/productos-notables/suma-cubos.js
// Ley: Suma de cubos  ->  a³ + b³ = (a + b)(a² - ab + b²)

export default {
  lawId: 'suma-cubos',
  lawName: 'Suma de cubos',
  lawFormula: 'a^3 + b^3 = (a + b)(a^2 - ab + b^2)',
  prerequisites: 'Conocer la diferencia de cuadrados.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'sumcub-f-01',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^3 + 1$',
      options: [
        { latex: '(x + 1)(x^2 - x + 1)', correct: true },
        { latex: '(x + 1)^3', correct: false },
        { latex: '(x + 1)(x^2 + x + 1)', correct: false },
        { latex: '(x + 1)(x^2 - 2x + 1)', correct: false }
      ],
      explanation:
        '$x^3 + 1 = (x+1)(x^2 - x + 1)$. El signo del término central es negativo.'
    },
    {
      id: 'sumcub-f-02',
      difficulty: 'easy',
      prompt: 'Factoriza: $a^3 + b^3$',
      options: [
        { latex: '(a + b)(a^2 - ab + b^2)', correct: true },
        { latex: '(a + b)^3', correct: false },
        { latex: '(a + b)(a^2 + ab + b^2)', correct: false },
        { latex: '(a + b)(a^2 - 2ab + b^2)', correct: false }
      ],
      explanation:
        '$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.'
    },
    {
      id: 'sumcub-f-03',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^3 + 8$',
      options: [
        { latex: '(x + 2)(x^2 - 2x + 4)', correct: true },
        { latex: '(x + 2)^3', correct: false },
        { latex: '(x + 2)(x^2 + 2x + 4)', correct: false },
        { latex: '(x + 2)(x^2 - 4x + 4)', correct: false }
      ],
      explanation:
        '$x^3 + 8 = x^3 + 2^3 = (x+2)(x^2 - 2x + 4)$.'
    },
    {
      id: 'sumcub-f-04',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^3 + 27$',
      options: [
        { latex: '(x + 3)(x^2 - 3x + 9)', correct: true },
        { latex: '(x + 3)^3', correct: false },
        { latex: '(x + 3)(x^2 + 3x + 9)', correct: false },
        { latex: '(x + 3)(x^2 - 6x + 9)', correct: false }
      ],
      explanation:
        '$x^3 + 27 = x^3 + 3^3 = (x+3)(x^2 - 3x + 9)$.'
    },
    {
      id: 'sumcub-f-05',
      difficulty: 'easy',
      prompt: 'Factoriza: $1 + y^3$',
      options: [
        { latex: '(1 + y)(1 - y + y^2)', correct: true },
        { latex: '(1 + y)^3', correct: false },
        { latex: '(1 + y)(1 + y + y^2)', correct: false },
        { latex: '(1 + y)(1 - 2y + y^2)', correct: false }
      ],
      explanation:
        '$1 + y^3 = 1^3 + y^3 = (1+y)(1 - y + y^2)$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'sumcub-m-01',
      difficulty: 'medium',
      prompt: 'Factoriza: $8x^3 + 1$',
      options: [
        { latex: '(2x + 1)(4x^2 - 2x + 1)', correct: true },
        { latex: '(2x + 1)^3', correct: false },
        { latex: '(2x + 1)(4x^2 + 2x + 1)', correct: false },
        { latex: '(2x + 1)(2x^2 - 2x + 1)', correct: false }
      ],
      explanation:
        '$8x^3 + 1 = (2x)^3 + 1^3 = (2x+1)((2x)^2 - (2x)(1) + 1) = (2x+1)(4x^2 - 2x + 1)$.'
    },
    {
      id: 'sumcub-m-02',
      difficulty: 'medium',
      prompt: 'Factoriza: $27x^3 + 8$',
      options: [
        { latex: '(3x + 2)(9x^2 - 6x + 4)', correct: true },
        { latex: '(3x + 2)^3', correct: false },
        { latex: '(3x + 2)(9x^2 + 6x + 4)', correct: false },
        { latex: '(3x + 2)(9x^2 - 12x + 4)', correct: false }
      ],
      explanation:
        '$27x^3 + 8 = (3x)^3 + 2^3 = (3x+2)(9x^2 - 6x + 4)$.'
    },
    {
      id: 'sumcub-m-03',
      difficulty: 'medium',
      prompt: 'Factoriza: $x^3 + 64$',
      options: [
        { latex: '(x + 4)(x^2 - 4x + 16)', correct: true },
        { latex: '(x + 4)^3', correct: false },
        { latex: '(x + 4)(x^2 + 4x + 16)', correct: false },
        { latex: '(x + 4)(x^2 - 8x + 16)', correct: false }
      ],
      explanation:
        '$x^3 + 64 = x^3 + 4^3 = (x+4)(x^2 - 4x + 16)$.'
    },
    {
      id: 'sumcub-m-04',
      difficulty: 'medium',
      prompt: 'Factoriza: $125a^3 + b^3$',
      options: [
        { latex: '(5a + b)(25a^2 - 5ab + b^2)', correct: true },
        { latex: '(5a + b)^3', correct: false },
        { latex: '(5a + b)(25a^2 + 5ab + b^2)', correct: false },
        { latex: '(5a + b)(25a^2 - 10ab + b^2)', correct: false }
      ],
      explanation:
        '$125a^3 + b^3 = (5a)^3 + b^3 = (5a+b)(25a^2 - 5ab + b^2)$.'
    },
    {
      id: 'sumcub-m-05',
      difficulty: 'medium',
      prompt: 'Factoriza: $8x^3 + 27y^3$',
      options: [
        { latex: '(2x + 3y)(4x^2 - 6xy + 9y^2)', correct: true },
        { latex: '(2x + 3y)^3', correct: false },
        { latex: '(2x + 3y)(4x^2 + 6xy + 9y^2)', correct: false },
        { latex: '(2x + 3y)(4x^2 - 12xy + 9y^2)', correct: false }
      ],
      explanation:
        '$8x^3 + 27y^3 = (2x)^3 + (3y)^3 = (2x+3y)(4x^2 - 6xy + 9y^2)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'sumcub-h-01',
      difficulty: 'hard',
      prompt: 'Factoriza: $x^6 + 1$',
      options: [
        { latex: '(x^2 + 1)(x^4 - x^2 + 1)', correct: true },
        { latex: '(x^2 + 1)^3', correct: false },
        { latex: '(x^2 + 1)(x^4 + x^2 + 1)', correct: false },
        { latex: '(x^2 + 1)(x^4 - 2x^2 + 1)', correct: false }
      ],
      explanation:
        '$x^6 + 1 = (x^2)^3 + 1^3 = (x^2+1)(x^4 - x^2 + 1)$.'
    },
    {
      id: 'sumcub-h-02',
      difficulty: 'hard',
      prompt: 'Si $x^3 + 27 = (x + 3)(x^2 + ax + 9)$, ¿cuál es el valor de $a$?',
      options: [
        { latex: '-3', correct: true },
        { latex: '3', correct: false },
        { latex: '-6', correct: false },
        { latex: '6', correct: false }
      ],
      explanation:
        'En $x^3 + b^3 = (x+b)(x^2 - bx + b^2)$ con $b=3$, el término central es $-bx = -3x$, por lo que $a = -3$.'
    },
    {
      id: 'sumcub-h-03',
      difficulty: 'hard',
      prompt: 'Factoriza: $64x^3 + 1$',
      options: [
        { latex: '(4x + 1)(16x^2 - 4x + 1)', correct: true },
        { latex: '(4x + 1)^3', correct: false },
        { latex: '(4x + 1)(16x^2 + 4x + 1)', correct: false },
        { latex: '(4x + 1)(16x^2 - 8x + 1)', correct: false }
      ],
      explanation:
        '$64x^3 + 1 = (4x)^3 + 1^3 = (4x+1)(16x^2 - 4x + 1)$.'
    },
    {
      id: 'sumcub-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{x^3 + 8}{x + 2}$',
      options: [
        { latex: 'x^2 - 2x + 4', correct: true },
        { latex: 'x^2 + 2x + 4', correct: false },
        { latex: 'x + 4', correct: false },
        { latex: 'x^2 - 4', correct: false }
      ],
      explanation:
        '$x^3 + 8 = (x+2)(x^2 - 2x + 4)$. Al dividir entre $x+2$ queda $x^2 - 2x + 4$.'
    },
    {
      id: 'sumcub-h-05',
      difficulty: 'hard',
      prompt: 'Factoriza: $27x^3 + 8y^3$',
      options: [
        { latex: '(3x + 2y)(9x^2 - 6xy + 4y^2)', correct: true },
        { latex: '(3x + 2y)^3', correct: false },
        { latex: '(3x + 2y)(9x^2 + 6xy + 4y^2)', correct: false },
        { latex: '(3x + 2y)(9x^2 - 12xy + 4y^2)', correct: false }
      ],
      explanation:
        '$27x^3 + 8y^3 = (3x)^3 + (2y)^3 = (3x+2y)(9x^2 - 6xy + 4y^2)$.'
    }
  ]
};
