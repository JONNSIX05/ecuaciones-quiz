// data/algebra/exponentes/potencia-producto.js
// Ley 4: Potencia de un producto  ->  (a·b)^n = a^n · b^n

export default {
  lawId: 'potencia-producto',
  lawName: 'Potencia de un producto',
  lawFormula: '(a \\cdot b)^n = a^n \\cdot b^n',
  prerequisites: 'Conocer el producto de potencias.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'potpro-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $(ab)^2$',
      options: [
        { latex: 'a^2 b^2', correct: true },
        { latex: 'a^2 b', correct: false },
        { latex: 'ab^2', correct: false },
        { latex: 'a^2 + b^2', correct: false }
      ],
      explanation:
        'El exponente se reparte a cada factor: $(ab)^2 = a^2 b^2$. No se distribuye sobre una suma.'
    },
    {
      id: 'potpro-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $(xy)^3$',
      options: [
        { latex: 'x^3 y^3', correct: true },
        { latex: 'x^3 y', correct: false },
        { latex: 'xy^3', correct: false },
        { latex: 'x^3 + y^3', correct: false }
      ],
      explanation:
        'El exponente se reparte: $(xy)^3 = x^3 y^3$.'
    },
    {
      id: 'potpro-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $(2x)^2$',
      options: [
        { latex: '4x^2', correct: true },
        { latex: '2x^2', correct: false },
        { latex: '4x', correct: false },
        { latex: '2x', correct: false }
      ],
      explanation:
        'Eleva ambos factores al cuadrado: $2^2 \\cdot x^2 = 4x^2$.'
    },
    {
      id: 'potpro-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $(3y)^2$',
      options: [
        { latex: '9y^2', correct: true },
        { latex: '6y^2', correct: false },
        { latex: '3y^2', correct: false },
        { latex: '9y', correct: false }
      ],
      explanation:
        '$3^2 \\cdot y^2 = 9y^2$. El 3 también se eleva al cuadrado.'
    },
    {
      id: 'potpro-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $(mn)^4$',
      options: [
        { latex: 'm^4 n^4', correct: true },
        { latex: 'm^4 n', correct: false },
        { latex: 'mn^4', correct: false },
        { latex: '4mn', correct: false }
      ],
      explanation:
        'El exponente se reparte: $(mn)^4 = m^4 n^4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'potpro-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $(2xy)^3$',
      options: [
        { latex: '8x^3 y^3', correct: true },
        { latex: '6x^3 y^3', correct: false },
        { latex: '8x^3 y', correct: false },
        { latex: '2x^3 y^3', correct: false }
      ],
      explanation:
        '$2^3 = 8$, $x^3$ y $y^3$. Resultado: $8x^3 y^3$. No se multiplica el 2 por 3.'
    },
    {
      id: 'potpro-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-2x)^2$',
      options: [
        { latex: '4x^2', correct: true },
        { latex: '-4x^2', correct: false },
        { latex: '2x^2', correct: false },
        { latex: '-2x^2', correct: false }
      ],
      explanation:
        '$(-2)^2 = 4$ (el signo negativo se anula al elevar al cuadrado) y $x^2$: $4x^2$.'
    },
    {
      id: 'potpro-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $(3a^2 b)^2$',
      options: [
        { latex: '9a^4 b^2', correct: true },
        { latex: '6a^4 b^2', correct: false },
        { latex: '9a^4 b', correct: false },
        { latex: '3a^4 b^2', correct: false }
      ],
      explanation:
        '$3^2 = 9$, $(a^2)^2 = a^4$ y $b^2$. Resultado: $9a^4 b^2$.'
    },
    {
      id: 'potpro-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $(5xy^2)^2$',
      options: [
        { latex: '25x^2 y^4', correct: true },
        { latex: '10x^2 y^4', correct: false },
        { latex: '25x^2 y^2', correct: false },
        { latex: '25x y^4', correct: false }
      ],
      explanation:
        '$5^2 = 25$, $x^2$ y $(y^2)^2 = y^4$. Resultado: $25x^2 y^4$.'
    },
    {
      id: 'potpro-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-3x^2)^2$',
      options: [
        { latex: '9x^4', correct: true },
        { latex: '-9x^4', correct: false },
        { latex: '6x^4', correct: false },
        { latex: '-6x^4', correct: false }
      ],
      explanation:
        '$(-3)^2 = 9$ y $(x^2)^2 = x^4$. Resultado: $9x^4$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'potpro-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $(2x^2 y^3)^3$',
      options: [
        { latex: '8x^6 y^9', correct: true },
        { latex: '6x^6 y^9', correct: false },
        { latex: '8x^5 y^6', correct: false },
        { latex: '6x^5 y^6', correct: false }
      ],
      explanation:
        '$2^3 = 8$, $(x^2)^3 = x^6$ y $(y^3)^3 = y^9$. Resultado: $8x^6 y^9$.'
    },
    {
      id: 'potpro-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $(-2x^3 y)^3$',
      options: [
        { latex: '-8x^9 y^3', correct: true },
        { latex: '8x^9 y^3', correct: false },
        { latex: '-6x^9 y^3', correct: false },
        { latex: '-8x^6 y^3', correct: false }
      ],
      explanation:
        '$(-2)^3 = -8$ (exponente impar conserva el signo), $(x^3)^3 = x^9$ y $y^3$. Resultado: $-8x^9 y^3$.'
    },
    {
      id: 'potpro-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica y evalúa: $(2 \\cdot 3)^2$',
      options: [
        { latex: '36', correct: true },
        { latex: '12', correct: false },
        { latex: '18', correct: false },
        { latex: '72', correct: false }
      ],
      explanation:
        '$(2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$.'
    },
    {
      id: 'potpro-h-04',
      difficulty: 'hard',
      prompt: 'Si $(2x)^n = 8x^3$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '3', correct: true },
        { latex: '2', correct: false },
        { latex: '4', correct: false },
        { latex: '8', correct: false }
      ],
      explanation:
        '$(2x)^3 = 2^3 x^3 = 8x^3$, por lo que $n = 3$.'
    },
    {
      id: 'potpro-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $(ab^2 c)^2$',
      options: [
        { latex: 'a^2 b^4 c^2', correct: true },
        { latex: 'a^2 b^4 c', correct: false },
        { latex: 'a^2 b^2 c^2', correct: false },
        { latex: 'ab^4 c^2', correct: false }
      ],
      explanation:
        'Se reparte el exponente a todos: $a^2$, $(b^2)^2 = b^4$ y $c^2$. Resultado: $a^2 b^4 c^2$.'
    }
  ]
};
