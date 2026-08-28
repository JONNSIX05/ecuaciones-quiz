// data/algebra/productos-notables/binomio-cubo.js
// Ley: Cubo de un binomio  ->  (a ± b)³ = a³ ± 3a²b + 3ab² ± b³

export default {
  lawId: 'binomio-cubo',
  lawName: 'Cubo de un binomio',
  lawFormula: '(a \\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3',
  prerequisites: 'Conocer el cuadrado de un binomio.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'bincub-f-01',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(x + 1)^3$',
      options: [
        { latex: 'x^3 + 3x^2 + 3x + 1', correct: true },
        { latex: 'x^3 + 1', correct: false },
        { latex: 'x^3 + 3x + 1', correct: false },
        { latex: 'x^3 + 3x^2 + 1', correct: false }
      ],
      explanation:
        '$(x+1)^3 = x^3 + 3x^2(1) + 3x(1)^2 + 1^3 = x^3 + 3x^2 + 3x + 1$.'
    },
    {
      id: 'bincub-f-02',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(a + b)^3$',
      options: [
        { latex: 'a^3 + 3a^2b + 3ab^2 + b^3', correct: true },
        { latex: 'a^3 + b^3', correct: false },
        { latex: 'a^3 + 3ab + b^3', correct: false },
        { latex: 'a^3 + 3a^2b + b^3', correct: false }
      ],
      explanation:
        '$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. No es lo mismo que $a^3 + b^3$.'
    },
    {
      id: 'bincub-f-03',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(x - 2)^3$',
      options: [
        { latex: 'x^3 - 6x^2 + 12x - 8', correct: true },
        { latex: 'x^3 - 8', correct: false },
        { latex: 'x^3 - 6x^2 - 8', correct: false },
        { latex: 'x^3 - 12x + 8', correct: false }
      ],
      explanation:
        '$(x-2)^3 = x^3 - 3x^2(2) + 3x(2)^2 - 2^3 = x^3 - 6x^2 + 12x - 8$.'
    },
    {
      id: 'bincub-f-04',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(y + 2)^3$',
      options: [
        { latex: 'y^3 + 6y^2 + 12y + 8', correct: true },
        { latex: 'y^3 + 8', correct: false },
        { latex: 'y^3 + 6y^2 + 8', correct: false },
        { latex: 'y^3 + 6y + 8', correct: false }
      ],
      explanation:
        '$(y+2)^3 = y^3 + 3y^2(2) + 3y(2)^2 + 2^3 = y^3 + 6y^2 + 12y + 8$.'
    },
    {
      id: 'bincub-f-05',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(m - 1)^3$',
      options: [
        { latex: 'm^3 - 3m^2 + 3m - 1', correct: true },
        { latex: 'm^3 - 1', correct: false },
        { latex: 'm^3 - 3m^2 - 1', correct: false },
        { latex: 'm^3 - 3m + 1', correct: false }
      ],
      explanation:
        '$(m-1)^3 = m^3 - 3m^2 + 3m - 1$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'bincub-m-01',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(2x + 1)^3$',
      options: [
        { latex: '8x^3 + 12x^2 + 6x + 1', correct: true },
        { latex: '2x^3 + 12x^2 + 6x + 1', correct: false },
        { latex: '8x^3 + 6x^2 + 6x + 1', correct: false },
        { latex: '8x^3 + 1', correct: false }
      ],
      explanation:
        '$(2x+1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + 1 = 8x^3 + 12x^2 + 6x + 1$.'
    },
    {
      id: 'bincub-m-02',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(x - 3)^3$',
      options: [
        { latex: 'x^3 - 9x^2 + 27x - 27', correct: true },
        { latex: 'x^3 - 27', correct: false },
        { latex: 'x^3 - 9x^2 - 27', correct: false },
        { latex: 'x^3 - 9x^2 + 27x + 27', correct: false }
      ],
      explanation:
        '$(x-3)^3 = x^3 - 3x^2(3) + 3x(3)^2 - 3^3 = x^3 - 9x^2 + 27x - 27$.'
    },
    {
      id: 'bincub-m-03',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(a - b)^3$',
      options: [
        { latex: 'a^3 - 3a^2b + 3ab^2 - b^3', correct: true },
        { latex: 'a^3 - b^3', correct: false },
        { latex: 'a^3 - 3a^2b - 3ab^2 - b^3', correct: false },
        { latex: 'a^3 + 3a^2b + 3ab^2 + b^3', correct: false }
      ],
      explanation:
        '$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Los signos se alternan: $+ - + -$.'
    },
    {
      id: 'bincub-m-04',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(3x - 1)^3$',
      options: [
        { latex: '27x^3 - 27x^2 + 9x - 1', correct: true },
        { latex: '27x^3 - 9x^2 + 9x - 1', correct: false },
        { latex: '27x^3 - 27x^2 + 3x - 1', correct: false },
        { latex: '27x^3 - 1', correct: false }
      ],
      explanation:
        '$(3x-1)^3 = (3x)^3 - 3(3x)^2(1) + 3(3x)(1)^2 - 1 = 27x^3 - 27x^2 + 9x - 1$.'
    },
    {
      id: 'bincub-m-05',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(x + 2y)^3$',
      options: [
        { latex: 'x^3 + 6x^2y + 12xy^2 + 8y^3', correct: true },
        { latex: 'x^3 + 8y^3', correct: false },
        { latex: 'x^3 + 6x^2y + 8y^3', correct: false },
        { latex: 'x^3 + 6xy + 8y^3', correct: false }
      ],
      explanation:
        '$(x+2y)^3 = x^3 + 3x^2(2y) + 3x(2y)^2 + (2y)^3 = x^3 + 6x^2y + 12xy^2 + 8y^3$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'bincub-h-01',
      difficulty: 'hard',
      prompt: '¿Cuál es el coeficiente de $x^2$ en el desarrollo de $(x + 4)^3$?',
      options: [
        { latex: '12', correct: true },
        { latex: '48', correct: false },
        { latex: '3', correct: false },
        { latex: '64', correct: false }
      ],
      explanation:
        'El término en $x^2$ es $3x^2(4) = 12x^2$, por lo que el coeficiente es $12$.'
    },
    {
      id: 'bincub-h-02',
      difficulty: 'hard',
      prompt: 'Si $(x + 2)^3 = x^3 + 6x^2 + 12x + n$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '8', correct: true },
        { latex: '2', correct: false },
        { latex: '6', correct: false },
        { latex: '12', correct: false }
      ],
      explanation:
        'El último término es $2^3 = 8$, por lo que $n = 8$.'
    },
    {
      id: 'bincub-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $(x - 1)^3 + (x + 1)^3$',
      options: [
        { latex: '2x^3 + 6x', correct: true },
        { latex: '2x^3', correct: false },
        { latex: '6x', correct: false },
        { latex: '2x^3 + 6x^2', correct: false }
      ],
      explanation:
        '$(x-1)^3 = x^3-3x^2+3x-1$ y $(x+1)^3 = x^3+3x^2+3x+1$. Al sumar, los términos en $x^2$ se cancelan: $2x^3 + 6x$.'
    },
    {
      id: 'bincub-h-04',
      difficulty: 'hard',
      prompt: '¿Qué término falta? $(2x + 1)^3 = 8x^3 + \\_\\_\\_ + 6x + 1$',
      options: [
        { latex: '12x^2', correct: true },
        { latex: '6x^2', correct: false },
        { latex: '4x^2', correct: false },
        { latex: '12x', correct: false }
      ],
      explanation:
        'El término en $x^2$ es $3(2x)^2(1) = 3 \\cdot 4x^2 = 12x^2$.'
    },
    {
      id: 'bincub-h-05',
      difficulty: 'hard',
      prompt: '¿Cuál es el término lineal (de $x$) en el desarrollo de $(2x - 1)^3$?',
      options: [
        { latex: '6x', correct: true },
        { latex: '12x', correct: false },
        { latex: '-6x', correct: false },
        { latex: '-12x', correct: false }
      ],
      explanation:
        'El término lineal es $3(2x)(-1)^2 = 3 \\cdot 2x \\cdot 1 = 6x$.'
    }
  ]
};
