// data/algebra/productos-notables/factor-comun.js
// Ley: Factor común  ->  k·a + k·b + k·c = k(a + b + c)

export default {
  lawId: 'factor-comun',
  lawName: 'Factor común',
  lawFormula: 'ka + kb + kc = k(a + b + c)',
  prerequisites: 'Conocer la propiedad distributiva.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'faccom-f-01',
      difficulty: 'easy',
      prompt: 'Factoriza: $3x + 6$',
      options: [
        { latex: '3(x + 2)', correct: true },
        { latex: '3x(1 + 2)', correct: false },
        { latex: '6(x + 1)', correct: false },
        { latex: '3(x + 6)', correct: false }
      ],
      explanation:
        'El factor común es 3: $3x + 6 = 3(x + 2)$.'
    },
    {
      id: 'faccom-f-02',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 + x$',
      options: [
        { latex: 'x(x + 1)', correct: true },
        { latex: 'x(x^2 + 1)', correct: false },
        { latex: '2x(x + 1)', correct: false },
        { latex: 'x(2x)', correct: false }
      ],
      explanation:
        'El factor común es $x$: $x^2 + x = x(x + 1)$.'
    },
    {
      id: 'faccom-f-03',
      difficulty: 'easy',
      prompt: 'Factoriza: $5a + 5b$',
      options: [
        { latex: '5(a + b)', correct: true },
        { latex: '5(ab)', correct: false },
        { latex: '10(a + b)', correct: false },
        { latex: '5a(1 + b)', correct: false }
      ],
      explanation:
        'El factor común es 5: $5a + 5b = 5(a + b)$.'
    },
    {
      id: 'faccom-f-04',
      difficulty: 'easy',
      prompt: 'Factoriza: $2x + 4y$',
      options: [
        { latex: '2(x + 2y)', correct: true },
        { latex: '2(2x + y)', correct: false },
        { latex: '4(x + y)', correct: false },
        { latex: '2x(1 + 2y)', correct: false }
      ],
      explanation:
        'El factor común es 2: $2x + 4y = 2(x + 2y)$.'
    },
    {
      id: 'faccom-f-05',
      difficulty: 'easy',
      prompt: 'Factoriza: $7x - 7$',
      options: [
        { latex: '7(x - 1)', correct: true },
        { latex: '7(x + 1)', correct: false },
        { latex: '7x(1 - 1)', correct: false },
        { latex: '7(x - 7)', correct: false }
      ],
      explanation:
        'El factor común es 7: $7x - 7 = 7(x - 1)$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'faccom-m-01',
      difficulty: 'medium',
      prompt: 'Factoriza: $6x^2 + 9x$',
      options: [
        { latex: '3x(2x + 3)', correct: true },
        { latex: '3(2x^2 + 3x)', correct: false },
        { latex: '6x(x + 3)', correct: false },
        { latex: '3x(2x^2 + 3)', correct: false }
      ],
      explanation:
        'El máximo factor común es $3x$: $6x^2 + 9x = 3x(2x + 3)$.'
    },
    {
      id: 'faccom-m-02',
      difficulty: 'medium',
      prompt: 'Factoriza: $4x^3 - 8x^2$',
      options: [
        { latex: '4x^2(x - 2)', correct: true },
        { latex: '4x(x^2 - 2x)', correct: false },
        { latex: '4x^2(x^2 - 2)', correct: false },
        { latex: '2x^2(2x - 4)', correct: false }
      ],
      explanation:
        'El máximo factor común es $4x^2$: $4x^3 - 8x^2 = 4x^2(x - 2)$.'
    },
    {
      id: 'faccom-m-03',
      difficulty: 'medium',
      prompt: 'Factoriza: $ax + ay$',
      options: [
        { latex: 'a(x + y)', correct: true },
        { latex: 'a(xy)', correct: false },
        { latex: 'x(a + y)', correct: false },
        { latex: 'a(x + y + a)', correct: false }
      ],
      explanation:
        'El factor común es $a$: $ax + ay = a(x + y)$.'
    },
    {
      id: 'faccom-m-04',
      difficulty: 'medium',
      prompt: 'Factoriza: $5x^2 + 10xy$',
      options: [
        { latex: '5x(x + 2y)', correct: true },
        { latex: '5x(x + y)', correct: false },
        { latex: '10x(x + y)', correct: false },
        { latex: '5(x^2 + 2y)', correct: false }
      ],
      explanation:
        'El máximo factor común es $5x$: $5x^2 + 10xy = 5x(x + 2y)$.'
    },
    {
      id: 'faccom-m-05',
      difficulty: 'medium',
      prompt: 'Factoriza: $12x - 18y$',
      options: [
        { latex: '6(2x - 3y)', correct: true },
        { latex: '6(2x + 3y)', correct: false },
        { latex: '3(4x - 6y)', correct: false },
        { latex: '6(12x - 18y)', correct: false }
      ],
      explanation:
        'El máximo factor común es 6: $12x - 18y = 6(2x - 3y)$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'faccom-h-01',
      difficulty: 'hard',
      prompt: 'Factoriza: $2x^3 + 4x^2 + 6x$',
      options: [
        { latex: '2x(x^2 + 2x + 3)', correct: true },
        { latex: '2(x^3 + 2x^2 + 3x)', correct: false },
        { latex: '2x(x^2 + 2x + 6)', correct: false },
        { latex: '2x^2(x + 2 + 3)', correct: false }
      ],
      explanation:
        'El máximo factor común es $2x$: $2x^3 + 4x^2 + 6x = 2x(x^2 + 2x + 3)$.'
    },
    {
      id: 'faccom-h-02',
      difficulty: 'hard',
      prompt: 'Factoriza: $ab + ac + ad$',
      options: [
        { latex: 'a(b + c + d)', correct: true },
        { latex: 'a(bcd)', correct: false },
        { latex: 'a(b + c) + d', correct: false },
        { latex: 'a(b + c + d + a)', correct: false }
      ],
      explanation:
        'El factor común es $a$: $ab + ac + ad = a(b + c + d)$.'
    },
    {
      id: 'faccom-h-03',
      difficulty: 'hard',
      prompt: 'Factoriza: $x(a + b) + y(a + b)$',
      options: [
        { latex: '(a + b)(x + y)', correct: true },
        { latex: '(a + b)(xy)', correct: false },
        { latex: '(x + y)(a + b + 1)', correct: false },
        { latex: '(a + b)^2(x + y)', correct: false }
      ],
      explanation:
        'El factor común es $(a+b)$: $x(a+b) + y(a+b) = (a+b)(x+y)$.'
    },
    {
      id: 'faccom-h-04',
      difficulty: 'hard',
      prompt: 'Factoriza: $6x^2y + 9xy^2$',
      options: [
        { latex: '3xy(2x + 3y)', correct: true },
        { latex: '3xy(2 + 3)', correct: false },
        { latex: '6xy(x + y)', correct: false },
        { latex: '3x^2y^2(2 + 3)', correct: false }
      ],
      explanation:
        'El máximo factor común es $3xy$: $6x^2y + 9xy^2 = 3xy(2x + 3y)$.'
    },
    {
      id: 'faccom-h-05',
      difficulty: 'hard',
      prompt: 'Factoriza por agrupación: $x^2 - 3x + 5x - 15$',
      options: [
        { latex: '(x + 5)(x - 3)', correct: true },
        { latex: '(x - 5)(x + 3)', correct: false },
        { latex: '(x + 5)(x + 3)', correct: false },
        { latex: '(x - 5)(x - 3)', correct: false }
      ],
      explanation:
        'Agrupa: $x(x-3) + 5(x-3) = (x-3)(x+5)$.'
    }
  ]
};
