// data/algebra/productos-notables/trinomio-cuadrado-perfecto.js
// Ley: Trinomio cuadrado perfecto  ->  a² ± 2ab + b² = (a ± b)²

export default {
  lawId: 'trinomio-cuadrado-perfecto',
  lawName: 'Trinomio cuadrado perfecto',
  lawFormula: 'a^2 \\pm 2ab + b^2 = (a \\pm b)^2',
  prerequisites: 'Conocer el cuadrado de un binomio.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'tricp-f-01',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 + 6x + 9$',
      options: [
        { latex: '(x + 3)^2', correct: true },
        { latex: '(x + 3)(x - 3)', correct: false },
        { latex: '(x + 9)^2', correct: false },
        { latex: '(x + 3)(x + 6)', correct: false }
      ],
      explanation:
        '$x^2 + 6x + 9 = (x+3)^2$ porque $2 \\cdot 3 = 6$ y $3^2 = 9$.'
    },
    {
      id: 'tricp-f-02',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 - 2x + 1$',
      options: [
        { latex: '(x - 1)^2', correct: true },
        { latex: '(x + 1)^2', correct: false },
        { latex: '(x - 1)(x + 1)', correct: false },
        { latex: '(x - 2)^2', correct: false }
      ],
      explanation:
        '$x^2 - 2x + 1 = (x-1)^2$ porque $-2x = -2(x)(1)$ y $1 = 1^2$.'
    },
    {
      id: 'tricp-f-03',
      difficulty: 'easy',
      prompt: 'Factoriza: $a^2 + 2ab + b^2$',
      options: [
        { latex: '(a + b)^2', correct: true },
        { latex: '(a + b)(a - b)', correct: false },
        { latex: '(a - b)^2', correct: false },
        { latex: 'a^2 + b^2', correct: false }
      ],
      explanation:
        '$a^2 + 2ab + b^2 = (a+b)^2$. Es el cuadrado de un binomio.'
    },
    {
      id: 'tricp-f-04',
      difficulty: 'easy',
      prompt: 'Factoriza: $x^2 + 10x + 25$',
      options: [
        { latex: '(x + 5)^2', correct: true },
        { latex: '(x + 5)(x - 5)', correct: false },
        { latex: '(x + 10)^2', correct: false },
        { latex: '(x + 5)(x + 2)', correct: false }
      ],
      explanation:
        '$x^2 + 10x + 25 = (x+5)^2$ porque $2 \\cdot 5 = 10$ y $5^2 = 25$.'
    },
    {
      id: 'tricp-f-05',
      difficulty: 'easy',
      prompt: 'Factoriza: $y^2 - 4y + 4$',
      options: [
        { latex: '(y - 2)^2', correct: true },
        { latex: '(y + 2)^2', correct: false },
        { latex: '(y - 2)(y + 2)', correct: false },
        { latex: '(y - 4)^2', correct: false }
      ],
      explanation:
        '$y^2 - 4y + 4 = (y-2)^2$ porque $2 \\cdot 2 = 4$ y $2^2 = 4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'tricp-m-01',
      difficulty: 'medium',
      prompt: 'Factoriza: $4x^2 + 12x + 9$',
      options: [
        { latex: '(2x + 3)^2', correct: true },
        { latex: '(2x + 3)(2x - 3)', correct: false },
        { latex: '(2x + 9)^2', correct: false },
        { latex: '(4x + 9)^2', correct: false }
      ],
      explanation:
        '$4x^2 + 12x + 9 = (2x+3)^2$ porque $(2x)^2 = 4x^2$, $2(2x)(3) = 12x$ y $3^2 = 9$.'
    },
    {
      id: 'tricp-m-02',
      difficulty: 'medium',
      prompt: 'Factoriza: $9x^2 - 6x + 1$',
      options: [
        { latex: '(3x - 1)^2', correct: true },
        { latex: '(3x + 1)^2', correct: false },
        { latex: '(3x - 1)(3x + 1)', correct: false },
        { latex: '(9x - 1)^2', correct: false }
      ],
      explanation:
        '$9x^2 - 6x + 1 = (3x-1)^2$ porque $(3x)^2 = 9x^2$ y $2(3x)(1) = 6x$.'
    },
    {
      id: 'tricp-m-03',
      difficulty: 'medium',
      prompt: 'Factoriza: $x^2 + 2xy + y^2$',
      options: [
        { latex: '(x + y)^2', correct: true },
        { latex: '(x - y)^2', correct: false },
        { latex: '(x + y)(x - y)', correct: false },
        { latex: 'x^2 + y^2', correct: false }
      ],
      explanation:
        '$x^2 + 2xy + y^2 = (x+y)^2$.'
    },
    {
      id: 'tricp-m-04',
      difficulty: 'medium',
      prompt: '¿Cuál de los siguientes es un trinomio cuadrado perfecto?',
      options: [
        { latex: 'x^2 + 8x + 16', correct: true },
        { latex: 'x^2 + 8x + 8', correct: false },
        { latex: 'x^2 + 16x + 8', correct: false },
        { latex: 'x^2 + 4x + 16', correct: false }
      ],
      explanation:
        '$x^2 + 8x + 16 = (x+4)^2$ porque $2 \\cdot 4 = 8$ y $4^2 = 16$. Los demás no cumplen que el término constante sea el cuadrado de la mitad del coeficiente.'
    },
    {
      id: 'tricp-m-05',
      difficulty: 'medium',
      prompt: 'Factoriza: $25x^2 - 20x + 4$',
      options: [
        { latex: '(5x - 2)^2', correct: true },
        { latex: '(5x + 2)^2', correct: false },
        { latex: '(5x - 2)(5x + 2)', correct: false },
        { latex: '(5x - 4)^2', correct: false }
      ],
      explanation:
        '$25x^2 - 20x + 4 = (5x-2)^2$ porque $(5x)^2 = 25x^2$ y $2^2 = 4$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'tricp-h-01',
      difficulty: 'hard',
      prompt: '¿Qué valor de $c$ hace que $x^2 + 10x + c$ sea un cuadrado perfecto?',
      options: [
        { latex: '25', correct: true },
        { latex: '10', correct: false },
        { latex: '5', correct: false },
        { latex: '100', correct: false }
      ],
      explanation:
        'Para ser cuadrado perfecto, $c$ debe ser $(\\frac{10}{2})^2 = 5^2 = 25$.'
    },
    {
      id: 'tricp-h-02',
      difficulty: 'hard',
      prompt: 'Factoriza: $x^4 + 2x^2 + 1$',
      options: [
        { latex: '(x^2 + 1)^2', correct: true },
        { latex: '(x^2 + 1)(x^2 - 1)', correct: false },
        { latex: '(x + 1)^4', correct: false },
        { latex: 'x^4 + 1', correct: false }
      ],
      explanation:
        '$x^4 + 2x^2 + 1 = (x^2+1)^2$, tratando a $x^2$ como la variable.'
    },
    {
      id: 'tricp-h-03',
      difficulty: 'hard',
      prompt: 'Factoriza: $4a^2 + 12ab + 9b^2$',
      options: [
        { latex: '(2a + 3b)^2', correct: true },
        { latex: '(2a + 3b)(2a - 3b)', correct: false },
        { latex: '(2a + 9b)^2', correct: false },
        { latex: '(4a + 9b)^2', correct: false }
      ],
      explanation:
        '$4a^2 + 12ab + 9b^2 = (2a+3b)^2$ porque $(2a)^2 = 4a^2$ y $(3b)^2 = 9b^2$.'
    },
    {
      id: 'tricp-h-04',
      difficulty: 'hard',
      prompt: '¿Para qué valor de $n$ es $x^2 + nx + 49$ un cuadrado perfecto?',
      options: [
        { latex: '14', correct: true },
        { latex: '7', correct: false },
        { latex: '49', correct: false },
        { latex: '98', correct: false }
      ],
      explanation:
        'Como $49 = 7^2$, se necesita $n = 2 \\cdot 7 = 14$ para que sea $(x+7)^2$.'
    },
    {
      id: 'tricp-h-05',
      difficulty: 'hard',
      prompt: 'Factoriza: $9x^2 - 12xy + 4y^2$',
      options: [
        { latex: '(3x - 2y)^2', correct: true },
        { latex: '(3x + 2y)^2', correct: false },
        { latex: '(3x - 2y)(3x + 2y)', correct: false },
        { latex: '(9x - 4y)^2', correct: false }
      ],
      explanation:
        '$9x^2 - 12xy + 4y^2 = (3x-2y)^2$ porque $(3x)^2 = 9x^2$ y $(2y)^2 = 4y^2$.'
    }
  ]
};
