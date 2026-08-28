// data/algebra/complejos/operaciones.js
// Ley: Operaciones con números complejos  ->  z = a + bi, i² = -1

export default {
  lawId: 'complejos-operaciones',
  lawName: 'Operaciones con números complejos',
  lawFormula: 'z = a + bi, \\quad i^2 = -1',
  prerequisites: 'Conocer los números reales y la raíz cuadrada de negativos.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'compop-f-01',
      difficulty: 'easy',
      prompt: '¿Cuánto vale $i^2$?',
      options: [
        { latex: '-1', correct: true },
        { latex: '1', correct: false },
        { latex: 'i', correct: false },
        { latex: '-i', correct: false }
      ],
      explanation:
        'Por definición, $i^2 = -1$. Es la base de los números complejos.'
    },
    {
      id: 'compop-f-02',
      difficulty: 'easy',
      prompt: 'Suma: $(2 + 3i) + (1 + 4i)$',
      options: [
        { latex: '3 + 7i', correct: true },
        { latex: '7 + 3i', correct: false },
        { latex: '2 + 7i', correct: false },
        { latex: '3 - 7i', correct: false }
      ],
      explanation:
        'Suma partes reales e imaginarias por separado: $(2+1) + (3+4)i = 3 + 7i$.'
    },
    {
      id: 'compop-f-03',
      difficulty: 'easy',
      prompt: 'Resta: $(5 + 2i) - (3 + i)$',
      options: [
        { latex: '2 + i', correct: true },
        { latex: '2 - i', correct: false },
        { latex: '8 + 3i', correct: false },
        { latex: '2 + 3i', correct: false }
      ],
      explanation:
        '$(5-3) + (2-1)i = 2 + i$.'
    },
    {
      id: 'compop-f-04',
      difficulty: 'easy',
      prompt: '¿Cuál es el conjugado de $3 + 4i$?',
      options: [
        { latex: '3 - 4i', correct: true },
        { latex: '-3 + 4i', correct: false },
        { latex: '-3 - 4i', correct: false },
        { latex: '4 + 3i', correct: false }
      ],
      explanation:
        'El conjugado cambia el signo de la parte imaginaria: $3 - 4i$.'
    },
    {
      id: 'compop-f-05',
      difficulty: 'easy',
      prompt: 'Suma: $(1 + i) + (1 - i)$',
      options: [
        { latex: '2', correct: true },
        { latex: '2i', correct: false },
        { latex: '0', correct: false },
        { latex: '1 + i', correct: false }
      ],
      explanation:
        'Las partes imaginarias se cancelan: $(1+1) + (i - i) = 2$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'compop-m-01',
      difficulty: 'medium',
      prompt: 'Multiplica: $(2i)(3i)$',
      options: [
        { latex: '-6', correct: true },
        { latex: '6', correct: false },
        { latex: '6i', correct: false },
        { latex: '-6i', correct: false }
      ],
      explanation:
        '$(2i)(3i) = 6i^2 = 6(-1) = -6$.'
    },
    {
      id: 'compop-m-02',
      difficulty: 'medium',
      prompt: 'Multiplica: $(1 + i)(1 - i)$',
      options: [
        { latex: '2', correct: true },
        { latex: '0', correct: false },
        { latex: '1', correct: false },
        { latex: '2i', correct: false }
      ],
      explanation:
        '$(1+i)(1-i) = 1 - i^2 = 1 - (-1) = 2$. Un complejo por su conjugado da un real.'
    },
    {
      id: 'compop-m-03',
      difficulty: 'medium',
      prompt: 'Multiplica: $(2 + i)(1 + i)$',
      options: [
        { latex: '1 + 3i', correct: true },
        { latex: '3 + 3i', correct: false },
        { latex: '1 + i', correct: false },
        { latex: '2 + 3i', correct: false }
      ],
      explanation:
        '$2 + 2i + i + i^2 = 2 + 3i - 1 = 1 + 3i$.'
    },
    {
      id: 'compop-m-04',
      difficulty: 'medium',
      prompt: '¿Cuánto vale $i^3$?',
      options: [
        { latex: '-i', correct: true },
        { latex: 'i', correct: false },
        { latex: '-1', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$.'
    },
    {
      id: 'compop-m-05',
      difficulty: 'medium',
      prompt: 'Multiplica: $(3 + 2i)(3 - 2i)$',
      options: [
        { latex: '13', correct: true },
        { latex: '5', correct: false },
        { latex: '9', correct: false },
        { latex: '13i', correct: false }
      ],
      explanation:
        '$(3+2i)(3-2i) = 9 - 4i^2 = 9 + 4 = 13$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'compop-h-01',
      difficulty: 'hard',
      prompt: 'Divide: $\\frac{1 + i}{1 - i}$',
      options: [
        { latex: 'i', correct: true },
        { latex: '-i', correct: false },
        { latex: '1', correct: false },
        { latex: '2i', correct: false }
      ],
      explanation:
        'Multiplica por el conjugado: $\\frac{(1+i)(1+i)}{(1-i)(1+i)} = \\frac{2i}{2} = i$.'
    },
    {
      id: 'compop-h-02',
      difficulty: 'hard',
      prompt: 'Divide: $\\frac{2 + 3i}{1 + i}$',
      options: [
        { latex: '\\frac{5}{2} + \\frac{1}{2}i', correct: true },
        { latex: '\\frac{5}{2} - \\frac{1}{2}i', correct: false },
        { latex: '1 + i', correct: false },
        { latex: '2 + i', correct: false }
      ],
      explanation:
        '$\\frac{(2+3i)(1-i)}{(1+i)(1-i)} = \\frac{5 + i}{2} = \\frac{5}{2} + \\frac{1}{2}i$.'
    },
    {
      id: 'compop-h-03',
      difficulty: 'hard',
      prompt: '¿Cuánto vale $i^4$?',
      options: [
        { latex: '1', correct: true },
        { latex: '-1', correct: false },
        { latex: 'i', correct: false },
        { latex: '-i', correct: false }
      ],
      explanation:
        '$i^4 = (i^2)^2 = (-1)^2 = 1$.'
    },
    {
      id: 'compop-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $(1 + i)^2$',
      options: [
        { latex: '2i', correct: true },
        { latex: '2', correct: false },
        { latex: '1 + 2i', correct: false },
        { latex: '-2i', correct: false }
      ],
      explanation:
        '$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$.'
    },
    {
      id: 'compop-h-05',
      difficulty: 'hard',
      prompt: 'Divide: $\\frac{4 + 2i}{2}$',
      options: [
        { latex: '2 + i', correct: true },
        { latex: '2 - i', correct: false },
        { latex: '4 + i', correct: false },
        { latex: '2 + 2i', correct: false }
      ],
      explanation:
        '$\\frac{4}{2} + \\frac{2i}{2} = 2 + i$.'
    }
  ]
};
