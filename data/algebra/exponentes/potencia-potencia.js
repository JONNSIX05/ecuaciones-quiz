// data/algebra/exponentes/potencia-potencia.js
// Ley 3: Potencia de una potencia  ->  (a^m)^n = a^{m·n}

export default {
  lawId: 'potencia-potencia',
  lawName: 'Potencia de una potencia',
  lawFormula: '(a^m)^n = a^{m \\cdot n}',
  prerequisites: 'Conocer el producto de potencias.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'potpot-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $(2^3)^2$',
      options: [
        { latex: '2^6', correct: true },
        { latex: '2^5', correct: false },
        { latex: '2^9', correct: false },
        { latex: '2^{32}', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $(2^3)^2 = 2^{3 \\cdot 2} = 2^6$.'
    },
    {
      id: 'potpot-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $(x^2)^4$',
      options: [
        { latex: 'x^8', correct: true },
        { latex: 'x^6', correct: false },
        { latex: 'x^{16}', correct: false },
        { latex: 'x^2', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $2 \\cdot 4 = 8$, por lo que $x^8$.'
    },
    {
      id: 'potpot-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $(a^5)^3$',
      options: [
        { latex: 'a^{15}', correct: true },
        { latex: 'a^8', correct: false },
        { latex: 'a^{125}', correct: false },
        { latex: 'a^2', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $5 \\cdot 3 = 15$, por lo que $a^{15}$.'
    },
    {
      id: 'potpot-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $(y^4)^2$',
      options: [
        { latex: 'y^8', correct: true },
        { latex: 'y^6', correct: false },
        { latex: 'y^{16}', correct: false },
        { latex: 'y^2', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $4 \\cdot 2 = 8$, por lo que $y^8$.'
    },
    {
      id: 'potpot-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $(z^2)^5$',
      options: [
        { latex: 'z^{10}', correct: true },
        { latex: 'z^7', correct: false },
        { latex: 'z^{32}', correct: false },
        { latex: 'z^2', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $2 \\cdot 5 = 10$, por lo que $z^{10}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'potpot-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $3(x^2)^4$',
      options: [
        { latex: '3x^8', correct: true },
        { latex: '3x^6', correct: false },
        { latex: '3x^{16}', correct: false },
        { latex: '12x^8', correct: false }
      ],
      explanation:
        'El coeficiente 3 queda fuera: $3 \\cdot x^{2 \\cdot 4} = 3x^8$. El 4 no multiplica al 3.'
    },
    {
      id: 'potpot-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica y evalúa: $(2^2)^3$',
      options: [
        { latex: '64', correct: true },
        { latex: '32', correct: false },
        { latex: '12', correct: false },
        { latex: '128', correct: false }
      ],
      explanation:
        '$(2^2)^3 = 2^{2 \\cdot 3} = 2^6 = 64$.'
    },
    {
      id: 'potpot-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $(m^3)^4$',
      options: [
        { latex: 'm^{12}', correct: true },
        { latex: 'm^7', correct: false },
        { latex: 'm^{64}', correct: false },
        { latex: 'm^3', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $3 \\cdot 4 = 12$, por lo que $m^{12}$.'
    },
    {
      id: 'potpot-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $-(x^2)^3$',
      options: [
        { latex: '-x^6', correct: true },
        { latex: 'x^6', correct: false },
        { latex: '-x^5', correct: false },
        { latex: 'x^5', correct: false }
      ],
      explanation:
        '$(x^2)^3 = x^6$ y el signo negativo de afuera se conserva: $-x^6$.'
    },
    {
      id: 'potpot-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $(3^2)^4$',
      options: [
        { latex: '3^8', correct: true },
        { latex: '3^6', correct: false },
        { latex: '3^{16}', correct: false },
        { latex: '3^2', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $2 \\cdot 4 = 8$, por lo que $3^8$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'potpot-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $((x^2)^3)^2$',
      options: [
        { latex: 'x^{12}', correct: true },
        { latex: 'x^7', correct: false },
        { latex: 'x^{36}', correct: false },
        { latex: 'x^{24}', correct: false }
      ],
      explanation:
        'De adentro hacia afuera: $(x^2)^3 = x^6$, luego $(x^6)^2 = x^{12}$. O multiplica $2 \\cdot 3 \\cdot 2 = 12$.'
    },
    {
      id: 'potpot-h-02',
      difficulty: 'hard',
      prompt: 'Si $(2^x)^2 = 64$, ¿cuál es el valor de $x$?',
      options: [
        { latex: '3', correct: true },
        { latex: '6', correct: false },
        { latex: '2', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        '$(2^x)^2 = 2^{2x}$. Como $64 = 2^6$, entonces $2x = 6$, luego $x = 3$.'
    },
    {
      id: 'potpot-h-03',
      difficulty: 'hard',
      prompt: 'Si $(x^3)^n = x^{15}$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '5', correct: true },
        { latex: '3', correct: false },
        { latex: '15', correct: false },
        { latex: '12', correct: false }
      ],
      explanation:
        '$(x^3)^n = x^{3n}$. Igualamos: $3n = 15$, por lo que $n = 5$.'
    },
    {
      id: 'potpot-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $(a^2)^3 \\cdot (a^2)^2$',
      options: [
        { latex: 'a^{10}', correct: true },
        { latex: 'a^7', correct: false },
        { latex: 'a^{24}', correct: false },
        { latex: 'a^{12}', correct: false }
      ],
      explanation:
        '$(a^2)^3 = a^6$ y $(a^2)^2 = a^4$. Luego $a^6 \\cdot a^4 = a^{6+4} = a^{10}$.'
    },
    {
      id: 'potpot-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica y evalúa: $(10^2)^2$',
      options: [
        { latex: '10000', correct: true },
        { latex: '100', correct: false },
        { latex: '40', correct: false },
        { latex: '1000', correct: false }
      ],
      explanation:
        '$(10^2)^2 = 10^{2 \\cdot 2} = 10^4 = 10000$.'
    }
  ]
};
