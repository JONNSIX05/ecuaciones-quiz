// data/algebra/exponentes/exponente-cero.js
// Ley 6: Exponente cero  ->  a^0 = 1  (con a ≠ 0)

export default {
  lawId: 'exponente-cero',
  lawName: 'Exponente cero',
  lawFormula: 'a^0 = 1 \\quad (a \\neq 0)',
  prerequisites: 'Conocer potencias y la condición a ≠ 0.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'exp0-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $5^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '5', correct: false },
        { latex: '-5', correct: false }
      ],
      explanation:
        'Todo número distinto de cero elevado a la 0 es 1: $5^0 = 1$.'
    },
    {
      id: 'exp0-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $x^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: 'x', correct: false },
        { latex: '-x', correct: false }
      ],
      explanation:
        'Para cualquier $x \\neq 0$: $x^0 = 1$.'
    },
    {
      id: 'exp0-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $(-3)^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '-1', correct: false },
        { latex: '0', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        'La base completa (con su signo) elevada a la 0 es 1: $(-3)^0 = 1$.'
    },
    {
      id: 'exp0-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $(2x)^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '2x', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        'Toda la expresión $(2x)$ elevada a la 0 es 1 (siempre que $2x \\neq 0$).'
    },
    {
      id: 'exp0-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $100^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '100', correct: false },
        { latex: '10', correct: false }
      ],
      explanation:
        'Sin importar el tamaño del número: $100^0 = 1$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'exp0-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $3x^0$',
      options: [
        { latex: '3', correct: true },
        { latex: '0', correct: false },
        { latex: '3x', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        'Solo la $x$ está elevada a la 0: $3 \\cdot x^0 = 3 \\cdot 1 = 3$.'
    },
    {
      id: 'exp0-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $(5^2)^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '5', correct: false },
        { latex: '25', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Cualquier potencia elevada a la 0 es 1: $(5^2)^0 = 1$.'
    },
    {
      id: 'exp0-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $x^0 + y^0$',
      options: [
        { latex: '2', correct: true },
        { latex: '0', correct: false },
        { latex: 'x + y', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$x^0 = 1$ y $y^0 = 1$, por lo que $x^0 + y^0 = 1 + 1 = 2$.'
    },
    {
      id: 'exp0-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $(ab)^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: 'ab', correct: false },
        { latex: 'a + b', correct: false }
      ],
      explanation:
        'Toda la expresión $(ab)$ elevada a la 0 es 1 (con $a,b \\neq 0$).'
    },
    {
      id: 'exp0-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $-(4)^0$',
      options: [
        { latex: '-1', correct: true },
        { latex: '1', correct: false },
        { latex: '0', correct: false },
        { latex: '-4', correct: false }
      ],
      explanation:
        'Primero $4^0 = 1$ y luego se aplica el signo de afuera: $-(4^0) = -1$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'exp0-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $7x^0 y^0$',
      options: [
        { latex: '7', correct: true },
        { latex: '0', correct: false },
        { latex: '7xy', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$x^0 = 1$ y $y^0 = 1$, así que $7 \\cdot 1 \\cdot 1 = 7$.'
    },
    {
      id: 'exp0-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $(x^2 y)^0 \\cdot 3$',
      options: [
        { latex: '3', correct: true },
        { latex: '0', correct: false },
        { latex: '3x^2 y', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$(x^2 y)^0 = 1$, por lo que $1 \\cdot 3 = 3$.'
    },
    {
      id: 'exp0-h-03',
      difficulty: 'hard',
      prompt: 'Si $2^0 + 3^0 + 4^0 = n$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '3', correct: true },
        { latex: '0', correct: false },
        { latex: '9', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$2^0 = 3^0 = 4^0 = 1$, por lo que $1 + 1 + 1 = 3$.'
    },
    {
      id: 'exp0-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{5^3}{5^3}$',
      options: [
        { latex: '1', correct: true },
        { latex: '5', correct: false },
        { latex: '0', correct: false },
        { latex: '25', correct: false }
      ],
      explanation:
        '$\\frac{5^3}{5^3} = 5^{3-3} = 5^0 = 1$. Todo número dividido entre sí mismo es 1.'
    },
    {
      id: 'exp0-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $(2x^2 - y)^0$',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: '2x^2 - y', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        'Toda expresión distinta de cero elevada a la 0 es 1, sin importar lo compleja que sea.'
    }
  ]
};
