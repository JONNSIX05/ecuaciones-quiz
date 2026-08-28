// data/algebra/cuadratica/formula-general.js
// Ley: Ecuación cuadrática  ->  x = (-b ± √(b² - 4ac)) / 2a

export default {
  lawId: 'cuadratica-formula-general',
  lawName: 'Ecuación cuadrática (fórmula general)',
  lawFormula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
  prerequisites: 'Conocer operaciones algebraicas y raíces cuadradas.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'cuad-f-01',
      difficulty: 'easy',
      prompt: 'En $ax^2 + bx + c = 0$, ¿cuál es la fórmula general?',
      options: [
        { latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', correct: true },
        { latex: 'x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}', correct: false },
        { latex: 'x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}', correct: false },
        { latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}', correct: false }
      ],
      explanation:
        'La fórmula general es $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. El discriminante es $b^2 - 4ac$.'
    },
    {
      id: 'cuad-f-02',
      difficulty: 'easy',
      prompt: 'Resuelve: $x^2 - 4 = 0$',
      options: [
        { latex: 'x = \\pm 2', correct: true },
        { latex: 'x = 2', correct: false },
        { latex: 'x = 4', correct: false },
        { latex: 'x = \\pm 4', correct: false }
      ],
      explanation:
        '$x^2 = 4$, por lo que $x = \\pm 2$.'
    },
    {
      id: 'cuad-f-03',
      difficulty: 'easy',
      prompt: 'Resuelve: $x^2 - 9 = 0$',
      options: [
        { latex: 'x = \\pm 3', correct: true },
        { latex: 'x = 3', correct: false },
        { latex: 'x = 9', correct: false },
        { latex: 'x = \\pm 9', correct: false }
      ],
      explanation:
        '$x^2 = 9$, por lo que $x = \\pm 3$.'
    },
    {
      id: 'cuad-f-04',
      difficulty: 'easy',
      prompt: '¿Cuál es el discriminante de $x^2 + 2x + 1 = 0$?',
      options: [
        { latex: '0', correct: true },
        { latex: '4', correct: false },
        { latex: '1', correct: false },
        { latex: '-4', correct: false }
      ],
      explanation:
        '$b^2 - 4ac = 2^2 - 4(1)(1) = 4 - 4 = 0$.'
    },
    {
      id: 'cuad-f-05',
      difficulty: 'easy',
      prompt: 'Resuelve: $x^2 - x = 0$',
      options: [
        { latex: 'x = 0 \\text{ o } x = 1', correct: true },
        { latex: 'x = 1 \\text{ o } x = -1', correct: false },
        { latex: 'x = 0 \\text{ o } x = -1', correct: false },
        { latex: 'x = 0', correct: false }
      ],
      explanation:
        'Factoriza: $x(x - 1) = 0$, por lo que $x = 0$ o $x = 1$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'cuad-m-01',
      difficulty: 'medium',
      prompt: 'Resuelve: $x^2 - 5x + 6 = 0$',
      options: [
        { latex: 'x = 2 \\text{ y } x = 3', correct: true },
        { latex: 'x = -2 \\text{ y } x = -3', correct: false },
        { latex: 'x = 1 \\text{ y } x = 6', correct: false },
        { latex: 'x = -1 \\text{ y } x = -6', correct: false }
      ],
      explanation:
        'Factoriza: $(x-2)(x-3) = 0$, por lo que $x = 2$ o $x = 3$.'
    },
    {
      id: 'cuad-m-02',
      difficulty: 'medium',
      prompt: 'Resuelve: $x^2 + 4x + 4 = 0$',
      options: [
        { latex: 'x = -2', correct: true },
        { latex: 'x = 2', correct: false },
        { latex: 'x = \\pm 2', correct: false },
        { latex: 'x = 4', correct: false }
      ],
      explanation:
        '$x^2 + 4x + 4 = (x+2)^2 = 0$, por lo que $x = -2$ (raíz doble).'
    },
    {
      id: 'cuad-m-03',
      difficulty: 'medium',
      prompt: '¿Cuántas soluciones reales tiene $x^2 + 1 = 0$?',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: '2', correct: false },
        { latex: '\\text{infinitas}', correct: false }
      ],
      explanation:
        'El discriminante es $0^2 - 4(1)(1) = -4 < 0$, así que no hay soluciones reales.'
    },
    {
      id: 'cuad-m-04',
      difficulty: 'medium',
      prompt: 'Resuelve: $2x^2 - 8 = 0$',
      options: [
        { latex: 'x = \\pm 2', correct: true },
        { latex: 'x = \\pm 4', correct: false },
        { latex: 'x = 2', correct: false },
        { latex: 'x = 4', correct: false }
      ],
      explanation:
        '$2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.'
    },
    {
      id: 'cuad-m-05',
      difficulty: 'medium',
      prompt: 'Si el discriminante $b^2 - 4ac = 0$, la ecuación tiene...',
      options: [
        { latex: '\\text{una solución real (doble)}', correct: true },
        { latex: '\\text{dos soluciones reales distintas}', correct: false },
        { latex: '\\text{ninguna solución real}', correct: false },
        { latex: '\\text{infinitas soluciones}', correct: false }
      ],
      explanation:
        'Cuando el discriminante es 0, las dos raíces coinciden: hay una solución real doble.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'cuad-h-01',
      difficulty: 'hard',
      prompt: 'Resuelve: $x^2 - 2x - 8 = 0$',
      options: [
        { latex: 'x = 4 \\text{ y } x = -2', correct: true },
        { latex: 'x = -4 \\text{ y } x = 2', correct: false },
        { latex: 'x = 2 \\text{ y } x = 4', correct: false },
        { latex: 'x = -2 \\text{ y } x = 8', correct: false }
      ],
      explanation:
        'Factoriza: $(x-4)(x+2) = 0$, por lo que $x = 4$ o $x = -2$.'
    },
    {
      id: 'cuad-h-02',
      difficulty: 'hard',
      prompt: 'Resuelve: $2x^2 + 3x - 2 = 0$',
      options: [
        { latex: 'x = \\frac{1}{2} \\text{ y } x = -2', correct: true },
        { latex: 'x = -\\frac{1}{2} \\text{ y } x = 2', correct: false },
        { latex: 'x = 2 \\text{ y } x = -\\frac{1}{2}', correct: false },
        { latex: 'x = 1 \\text{ y } x = -2', correct: false }
      ],
      explanation:
        '$x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4} = \\frac{-3 \\pm 5}{4}$, que da $\\frac{1}{2}$ y $-2$.'
    },
    {
      id: 'cuad-h-03',
      difficulty: 'hard',
      prompt: 'Resuelve: $x^2 + 2x + 5 = 0$',
      options: [
        { latex: 'x = -1 \\pm 2i', correct: true },
        { latex: 'x = -1 \\pm 2', correct: false },
        { latex: 'x = 1 \\pm 2i', correct: false },
        { latex: 'x = -2 \\pm i', correct: false }
      ],
      explanation:
        '$x = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$. Raíces complejas.'
    },
    {
      id: 'cuad-h-04',
      difficulty: 'hard',
      prompt: 'Si una raíz de $x^2 - 7x + k = 0$ es $2$, ¿cuánto vale $k$?',
      options: [
        { latex: '10', correct: true },
        { latex: '12', correct: false },
        { latex: '-10', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        'Sustituye $x=2$: $4 - 14 + k = 0 \\Rightarrow k = 10$.'
    },
    {
      id: 'cuad-h-05',
      difficulty: 'hard',
      prompt: 'La suma de las raíces de $2x^2 - 6x + 4 = 0$ es...',
      options: [
        { latex: '3', correct: true },
        { latex: '-3', correct: false },
        { latex: '2', correct: false },
        { latex: '6', correct: false }
      ],
      explanation:
        'La suma de raíces es $-\\frac{b}{a} = -\\frac{-6}{2} = 3$.'
    }
  ]
};
