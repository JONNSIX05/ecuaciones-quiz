// data/algebra/productos-notables/binomio-cuadrado.js
// Ley: Cuadrado de un binomio  ->  (a ± b)² = a² ± 2ab + b²

export default {
  lawId: 'binomio-cuadrado',
  lawName: 'Cuadrado de un binomio',
  lawFormula: '(a \\pm b)^2 = a^2 \\pm 2ab + b^2',
  prerequisites: 'Conocer potencias y el producto de polinomios.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'bincuad-f-01',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(x + 3)^2$',
      options: [
        { latex: 'x^2 + 6x + 9', correct: true },
        { latex: 'x^2 + 9', correct: false },
        { latex: 'x^2 + 6x + 6', correct: false },
        { latex: 'x^2 + 3x + 9', correct: false }
      ],
      explanation:
        '$(x+3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$. No olvides el término central $2ab$.'
    },
    {
      id: 'bincuad-f-02',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(a + b)^2$',
      options: [
        { latex: 'a^2 + 2ab + b^2', correct: true },
        { latex: 'a^2 + b^2', correct: false },
        { latex: 'a^2 + ab + b^2', correct: false },
        { latex: '2a + 2b', correct: false }
      ],
      explanation:
        '$(a+b)^2 = a^2 + 2ab + b^2$. El error clásico es olvidar $2ab$ y escribir $a^2 + b^2$.'
    },
    {
      id: 'bincuad-f-03',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(x - 5)^2$',
      options: [
        { latex: 'x^2 - 10x + 25', correct: true },
        { latex: 'x^2 - 25', correct: false },
        { latex: 'x^2 - 10x + 10', correct: false },
        { latex: 'x^2 + 25', correct: false }
      ],
      explanation:
        '$(x-5)^2 = x^2 - 2(x)(5) + 5^2 = x^2 - 10x + 25$. El cuadrado de $5$ es $25$, no $5$.'
    },
    {
      id: 'bincuad-f-04',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(y + 1)^2$',
      options: [
        { latex: 'y^2 + 2y + 1', correct: true },
        { latex: 'y^2 + 1', correct: false },
        { latex: 'y^2 + 2y + 2', correct: false },
        { latex: 'y^2 + y + 1', correct: false }
      ],
      explanation:
        '$(y+1)^2 = y^2 + 2(y)(1) + 1^2 = y^2 + 2y + 1$.'
    },
    {
      id: 'bincuad-f-05',
      difficulty: 'easy',
      prompt: 'Desarrolla: $(m - 2)^2$',
      options: [
        { latex: 'm^2 - 4m + 4', correct: true },
        { latex: 'm^2 - 4', correct: false },
        { latex: 'm^2 - 4m + 2', correct: false },
        { latex: 'm^2 + 4', correct: false }
      ],
      explanation:
        '$(m-2)^2 = m^2 - 2(m)(2) + 2^2 = m^2 - 4m + 4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'bincuad-m-01',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(2x + 3)^2$',
      options: [
        { latex: '4x^2 + 12x + 9', correct: true },
        { latex: '2x^2 + 12x + 9', correct: false },
        { latex: '4x^2 + 6x + 9', correct: false },
        { latex: '4x^2 + 9', correct: false }
      ],
      explanation:
        '$(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$. El $2$ también se eleva al cuadrado.'
    },
    {
      id: 'bincuad-m-02',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(3a - 2)^2$',
      options: [
        { latex: '9a^2 - 12a + 4', correct: true },
        { latex: '9a^2 - 6a + 4', correct: false },
        { latex: '9a^2 - 12a - 4', correct: false },
        { latex: '9a^2 - 4', correct: false }
      ],
      explanation:
        '$(3a-2)^2 = (3a)^2 - 2(3a)(2) + 2^2 = 9a^2 - 12a + 4$.'
    },
    {
      id: 'bincuad-m-03',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(-x + 4)^2$',
      options: [
        { latex: 'x^2 - 8x + 16', correct: true },
        { latex: 'x^2 + 8x + 16', correct: false },
        { latex: 'x^2 - 16', correct: false },
        { latex: '-x^2 + 8x - 16', correct: false }
      ],
      explanation:
        '$(-x+4)^2 = (-x)^2 + 2(-x)(4) + 4^2 = x^2 - 8x + 16$.'
    },
    {
      id: 'bincuad-m-04',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(\\frac{x}{2} + 1)^2$',
      options: [
        { latex: '\\frac{x^2}{4} + x + 1', correct: true },
        { latex: '\\frac{x^2}{4} + 1', correct: false },
        { latex: '\\frac{x^2}{2} + x + 1', correct: false },
        { latex: '\\frac{x^2}{4} + x + 2', correct: false }
      ],
      explanation:
        '$(\\frac{x}{2})^2 = \\frac{x^2}{4}$, $2(\\frac{x}{2})(1) = x$ y $1^2 = 1$: $\\frac{x^2}{4} + x + 1$.'
    },
    {
      id: 'bincuad-m-05',
      difficulty: 'medium',
      prompt: 'Desarrolla: $(5x - y)^2$',
      options: [
        { latex: '25x^2 - 10xy + y^2', correct: true },
        { latex: '25x^2 - 10xy - y^2', correct: false },
        { latex: '25x^2 - 5xy + y^2', correct: false },
        { latex: '25x^2 + y^2', correct: false }
      ],
      explanation:
        '$(5x-y)^2 = (5x)^2 - 2(5x)(y) + y^2 = 25x^2 - 10xy + y^2$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'bincuad-h-01',
      difficulty: 'hard',
      prompt: 'Si $(x + a)^2 = x^2 + 12x + 36$, ¿cuál es el valor de $a$?',
      options: [
        { latex: '6', correct: true },
        { latex: '12', correct: false },
        { latex: '36', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        '$(x+a)^2 = x^2 + 2ax + a^2$. Como $2a = 12$ y $a^2 = 36$, entonces $a = 6$.'
    },
    {
      id: 'bincuad-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $(x + y)^2 - (x - y)^2$',
      options: [
        { latex: '4xy', correct: true },
        { latex: '0', correct: false },
        { latex: '2xy', correct: false },
        { latex: '2x^2 + 2y^2', correct: false }
      ],
      explanation:
        '$(x+y)^2 = x^2+2xy+y^2$ y $(x-y)^2 = x^2-2xy+y^2$. Al restar: $4xy$.'
    },
    {
      id: 'bincuad-h-03',
      difficulty: 'hard',
      prompt: 'Desarrolla: $(2x + 3y)^2$',
      options: [
        { latex: '4x^2 + 12xy + 9y^2', correct: true },
        { latex: '4x^2 + 6xy + 9y^2', correct: false },
        { latex: '4x^2 + 9y^2', correct: false },
        { latex: '2x^2 + 12xy + 3y^2', correct: false }
      ],
      explanation:
        '$(2x+3y)^2 = (2x)^2 + 2(2x)(3y) + (3y)^2 = 4x^2 + 12xy + 9y^2$.'
    },
    {
      id: 'bincuad-h-04',
      difficulty: 'hard',
      prompt: '¿Qué término falta? $(x + 5)^2 = x^2 + 10x + \\_\\_\\_$',
      options: [
        { latex: '25', correct: true },
        { latex: '10', correct: false },
        { latex: '5', correct: false },
        { latex: '50', correct: false }
      ],
      explanation:
        'El último término es el cuadrado de $5$: $5^2 = 25$.'
    },
    {
      id: 'bincuad-h-05',
      difficulty: 'hard',
      prompt: 'Desarrolla: $(x - \\frac{1}{2})^2$',
      options: [
        { latex: 'x^2 - x + \\frac{1}{4}', correct: true },
        { latex: 'x^2 - \\frac{1}{4}', correct: false },
        { latex: 'x^2 + x + \\frac{1}{4}', correct: false },
        { latex: 'x^2 - x + \\frac{1}{2}', correct: false }
      ],
      explanation:
        '$(x-\\frac12)^2 = x^2 - 2(x)(\\frac12) + (\\frac12)^2 = x^2 - x + \\frac14$.'
    }
  ]
};
