// data/algebra/complejos/forma-polar.js
// Ley: Módulo y forma polar  ->  |z| = √(a² + b²)

export default {
  lawId: 'complejos-forma-polar',
  lawName: 'Módulo y forma polar',
  lawFormula: '|z| = \\sqrt{a^2 + b^2}',
  prerequisites: 'Conocer operaciones con complejos y trigonometría básica.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'comppol-f-01',
      difficulty: 'easy',
      prompt: '¿Cuál es el módulo de $3 + 4i$?',
      options: [
        { latex: '5', correct: true },
        { latex: '7', correct: false },
        { latex: '25', correct: false },
        { latex: '\\sqrt{7}', correct: false }
      ],
      explanation:
        '$|3+4i| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.'
    },
    {
      id: 'comppol-f-02',
      difficulty: 'easy',
      prompt: '¿Cuál es el módulo de $1 + i$?',
      options: [
        { latex: '\\sqrt{2}', correct: true },
        { latex: '2', correct: false },
        { latex: '1', correct: false },
        { latex: '\\sqrt{3}', correct: false }
      ],
      explanation:
        '$|1+i| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.'
    },
    {
      id: 'comppol-f-03',
      difficulty: 'easy',
      prompt: '¿Cuál es el módulo de $5i$?',
      options: [
        { latex: '5', correct: true },
        { latex: '0', correct: false },
        { latex: '25', correct: false },
        { latex: 'i', correct: false }
      ],
      explanation:
        '$|5i| = \\sqrt{0^2 + 5^2} = 5$.'
    },
    {
      id: 'comppol-f-04',
      difficulty: 'easy',
      prompt: 'El módulo de $z = a + bi$ es...',
      options: [
        { latex: '\\sqrt{a^2 + b^2}', correct: true },
        { latex: 'a + b', correct: false },
        { latex: 'a^2 + b^2', correct: false },
        { latex: '\\sqrt{a - b}', correct: false }
      ],
      explanation:
        '$|z| = \\sqrt{a^2 + b^2}$, la distancia al origen en el plano complejo.'
    },
    {
      id: 'comppol-f-05',
      difficulty: 'easy',
      prompt: '¿Cuál es el módulo de $6 + 8i$?',
      options: [
        { latex: '10', correct: true },
        { latex: '14', correct: false },
        { latex: '100', correct: false },
        { latex: '\\sqrt{14}', correct: false }
      ],
      explanation:
        '$|6+8i| = \\sqrt{36 + 64} = \\sqrt{100} = 10$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'comppol-m-01',
      difficulty: 'medium',
      prompt: '¿Cuál es el módulo de $1 + \\sqrt{3}\\,i$?',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '\\sqrt{3}', correct: false },
        { latex: '1 + \\sqrt{3}', correct: false }
      ],
      explanation:
        '$|1+\\sqrt{3}i| = \\sqrt{1 + 3} = \\sqrt{4} = 2$.'
    },
    {
      id: 'comppol-m-02',
      difficulty: 'medium',
      prompt: '¿Cuál es el argumento de $1 + i$?',
      options: [
        { latex: '45^\\circ', correct: true },
        { latex: '90^\\circ', correct: false },
        { latex: '30^\\circ', correct: false },
        { latex: '60^\\circ', correct: false }
      ],
      explanation:
        '$1 + i$ está en el primer cuadrante con partes iguales, así que su ángulo es $45^\\circ$.'
    },
    {
      id: 'comppol-m-03',
      difficulty: 'medium',
      prompt: '¿Cuál es el módulo de $-3 + 4i$?',
      options: [
        { latex: '5', correct: true },
        { latex: '1', correct: false },
        { latex: '7', correct: false },
        { latex: '-5', correct: false }
      ],
      explanation:
        '$|-3+4i| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9+16} = 5$. El módulo siempre es positivo.'
    },
    {
      id: 'comppol-m-04',
      difficulty: 'medium',
      prompt: 'Escribe $2(\\cos 60^\\circ + i \\sin 60^\\circ)$ en forma rectangular',
      options: [
        { latex: '1 + \\sqrt{3}\\,i', correct: true },
        { latex: '\\sqrt{3} + i', correct: false },
        { latex: '2 + \\sqrt{3}\\,i', correct: false },
        { latex: '1 + i', correct: false }
      ],
      explanation:
        '$2\\cos 60^\\circ = 2 \\cdot \\frac12 = 1$ y $2\\sin 60^\\circ = 2 \\cdot \\frac{\\sqrt3}{2} = \\sqrt3$. Resultado: $1 + \\sqrt{3}i$.'
    },
    {
      id: 'comppol-m-05',
      difficulty: 'medium',
      prompt: '¿Cuál es el módulo de $2 - 2i$?',
      options: [
        { latex: '2\\sqrt{2}', correct: true },
        { latex: '4', correct: false },
        { latex: '2', correct: false },
        { latex: '8', correct: false }
      ],
      explanation:
        '$|2-2i| = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'comppol-h-01',
      difficulty: 'hard',
      prompt: 'Si $z = 3 + 4i$ y $w = 1 + 2i$, ¿cuánto vale $|z \\cdot w|$?',
      options: [
        { latex: '5\\sqrt{5}', correct: true },
        { latex: '5 + \\sqrt{5}', correct: false },
        { latex: '\\sqrt{5}', correct: false },
        { latex: '25', correct: false }
      ],
      explanation:
        '$|z \\cdot w| = |z| \\cdot |w| = 5 \\cdot \\sqrt{5} = 5\\sqrt{5}$.'
    },
    {
      id: 'comppol-h-02',
      difficulty: 'hard',
      prompt: '¿Cuál es el argumento de $-1 + i$?',
      options: [
        { latex: '135^\\circ', correct: true },
        { latex: '45^\\circ', correct: false },
        { latex: '225^\\circ', correct: false },
        { latex: '315^\\circ', correct: false }
      ],
      explanation:
        '$-1 + i$ está en el segundo cuadrante, así que su argumento es $180^\\circ - 45^\\circ = 135^\\circ$.'
    },
    {
      id: 'comppol-h-03',
      difficulty: 'hard',
      prompt: 'Usa De Moivre: $(\\cos 30^\\circ + i \\sin 30^\\circ)^3 = ?$',
      options: [
        { latex: 'i', correct: true },
        { latex: '1', correct: false },
        { latex: '-i', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        'De Moivre multiplica el ángulo: $3 \\cdot 30^\\circ = 90^\\circ$. $\\cos 90^\\circ + i\\sin 90^\\circ = i$.'
    },
    {
      id: 'comppol-h-04',
      difficulty: 'hard',
      prompt: '¿Cuál es el módulo de $\\frac{3 + 4i}{1 + 2i}$?',
      options: [
        { latex: '\\sqrt{5}', correct: true },
        { latex: '5\\sqrt{5}', correct: false },
        { latex: '5', correct: false },
        { latex: '\\frac{1}{\\sqrt{5}}', correct: false }
      ],
      explanation:
        '$\\left|\\frac{z}{w}\\right| = \\frac{|z|}{|w|} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$.'
    },
    {
      id: 'comppol-h-05',
      difficulty: 'hard',
      prompt: 'Escribe $4(\\cos 90^\\circ + i \\sin 90^\\circ)$ en forma rectangular',
      options: [
        { latex: '4i', correct: true },
        { latex: '4', correct: false },
        { latex: '-4i', correct: false },
        { latex: '4 + 4i', correct: false }
      ],
      explanation:
        '$4\\cos 90^\\circ = 0$ y $4\\sin 90^\\circ = 4$. Resultado: $4i$.'
    }
  ]
};
