// data/algebra/exponentes/potencia-cociente.js
// Ley 5: Potencia de un cociente  ->  (a/b)^n = a^n / b^n

export default {
  lawId: 'potencia-cociente',
  lawName: 'Potencia de un cociente',
  lawFormula: '\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}',
  prerequisites: 'Conocer el producto de potencias.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'potcoc-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $(\\frac{x}{y})^2$',
      options: [
        { latex: '\\frac{x^2}{y^2}', correct: true },
        { latex: '\\frac{x^2}{y}', correct: false },
        { latex: '\\frac{x}{y^2}', correct: false },
        { latex: '\\frac{x}{y}', correct: false }
      ],
      explanation:
        'El exponente se reparte al numerador y al denominador: $\\frac{x^2}{y^2}$.'
    },
    {
      id: 'potcoc-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $(\\frac{a}{b})^3$',
      options: [
        { latex: '\\frac{a^3}{b^3}', correct: true },
        { latex: '\\frac{a^3}{b}', correct: false },
        { latex: '\\frac{a}{b^3}', correct: false },
        { latex: '\\frac{3a}{3b}', correct: false }
      ],
      explanation:
        'El exponente se reparte: $\\frac{a^3}{b^3}$. No se multiplica $a$ ni $b$ por 3.'
    },
    {
      id: 'potcoc-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica y evalúa: $(\\frac{2}{3})^2$',
      options: [
        { latex: '\\frac{4}{9}', correct: true },
        { latex: '\\frac{4}{6}', correct: false },
        { latex: '\\frac{2}{9}', correct: false },
        { latex: '\\frac{2}{3}', correct: false }
      ],
      explanation:
        '$(\\frac{2}{3})^2 = \\frac{2^2}{3^2} = \\frac{4}{9}$.'
    },
    {
      id: 'potcoc-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $(\\frac{x}{2})^2$',
      options: [
        { latex: '\\frac{x^2}{4}', correct: true },
        { latex: '\\frac{x^2}{2}', correct: false },
        { latex: '\\frac{x}{4}', correct: false },
        { latex: '\\frac{x}{2}', correct: false }
      ],
      explanation:
        '$(\\frac{x}{2})^2 = \\frac{x^2}{2^2} = \\frac{x^2}{4}$.'
    },
    {
      id: 'potcoc-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $(\\frac{m}{n})^2$',
      options: [
        { latex: '\\frac{m^2}{n^2}', correct: true },
        { latex: '\\frac{m^2}{n}', correct: false },
        { latex: '\\frac{m}{n^2}', correct: false },
        { latex: '\\frac{2m}{2n}', correct: false }
      ],
      explanation:
        'El exponente se reparte: $\\frac{m^2}{n^2}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'potcoc-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $(\\frac{2x}{y})^2$',
      options: [
        { latex: '\\frac{4x^2}{y^2}', correct: true },
        { latex: '\\frac{2x^2}{y^2}', correct: false },
        { latex: '\\frac{4x^2}{y}', correct: false },
        { latex: '\\frac{4x}{y^2}', correct: false }
      ],
      explanation:
        '$2^2 = 4$, $x^2$ y $y^2$: $\\frac{4x^2}{y^2}$.'
    },
    {
      id: 'potcoc-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $(\\frac{x}{y^2})^3$',
      options: [
        { latex: '\\frac{x^3}{y^6}', correct: true },
        { latex: '\\frac{x^3}{y^5}', correct: false },
        { latex: '\\frac{x^3}{y^3}', correct: false },
        { latex: '\\frac{x}{y^6}', correct: false }
      ],
      explanation:
        '$x^3$ arriba y $(y^2)^3 = y^6$ abajo: $\\frac{x^3}{y^6}$.'
    },
    {
      id: 'potcoc-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-\\frac{x}{y})^2$',
      options: [
        { latex: '\\frac{x^2}{y^2}', correct: true },
        { latex: '-\\frac{x^2}{y^2}', correct: false },
        { latex: '\\frac{x^2}{y}', correct: false },
        { latex: '-\\frac{x^2}{y}', correct: false }
      ],
      explanation:
        'El signo negativo también se eleva al cuadrado y se anula: $\\frac{x^2}{y^2}$.'
    },
    {
      id: 'potcoc-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $(\\frac{3x}{2y})^2$',
      options: [
        { latex: '\\frac{9x^2}{4y^2}', correct: true },
        { latex: '\\frac{6x^2}{4y^2}', correct: false },
        { latex: '\\frac{9x^2}{2y^2}', correct: false },
        { latex: '\\frac{9x}{4y^2}', correct: false }
      ],
      explanation:
        '$3^2 = 9$, $x^2$, $2^2 = 4$ y $y^2$: $\\frac{9x^2}{4y^2}$.'
    },
    {
      id: 'potcoc-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $(\\frac{a^2}{b})^2$',
      options: [
        { latex: '\\frac{a^4}{b^2}', correct: true },
        { latex: '\\frac{a^4}{b}', correct: false },
        { latex: '\\frac{a^2}{b^2}', correct: false },
        { latex: '\\frac{a^4}{b^4}', correct: false }
      ],
      explanation:
        '$(a^2)^2 = a^4$ arriba y $b^2$ abajo: $\\frac{a^4}{b^2}$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'potcoc-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica y evalúa: $(\\frac{4}{2})^3$',
      options: [
        { latex: '8', correct: true },
        { latex: '2', correct: false },
        { latex: '6', correct: false },
        { latex: '12', correct: false }
      ],
      explanation:
        '$(\\frac{4}{2})^3 = 2^3 = 8$, o bien $\\frac{4^3}{2^3} = \\frac{64}{8} = 8$.'
    },
    {
      id: 'potcoc-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $(\\frac{2x^2}{3y})^3$',
      options: [
        { latex: '\\frac{8x^6}{27y^3}', correct: true },
        { latex: '\\frac{8x^6}{27y}', correct: false },
        { latex: '\\frac{6x^6}{27y^3}', correct: false },
        { latex: '\\frac{8x^5}{27y^3}', correct: false }
      ],
      explanation:
        'Arriba: $2^3 = 8$ y $(x^2)^3 = x^6$. Abajo: $3^3 = 27$ y $y^3$. Resultado: $\\frac{8x^6}{27y^3}$.'
    },
    {
      id: 'potcoc-h-03',
      difficulty: 'hard',
      prompt: 'Si $(\\frac{x}{2})^n = \\frac{x^3}{8}$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '3', correct: true },
        { latex: '2', correct: false },
        { latex: '4', correct: false },
        { latex: '8', correct: false }
      ],
      explanation:
        '$(\\frac{x}{2})^3 = \\frac{x^3}{2^3} = \\frac{x^3}{8}$, por lo que $n = 3$.'
    },
    {
      id: 'potcoc-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $(\\frac{a^2 b}{c})^2$',
      options: [
        { latex: '\\frac{a^4 b^2}{c^2}', correct: true },
        { latex: '\\frac{a^4 b^2}{c}', correct: false },
        { latex: '\\frac{a^4 b}{c^2}', correct: false },
        { latex: '\\frac{a^2 b^2}{c^2}', correct: false }
      ],
      explanation:
        'Arriba: $(a^2)^2 = a^4$ y $b^2$. Abajo: $c^2$. Resultado: $\\frac{a^4 b^2}{c^2}$.'
    },
    {
      id: 'potcoc-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $(-\\frac{x^3}{2})^2$',
      options: [
        { latex: '\\frac{x^6}{4}', correct: true },
        { latex: '-\\frac{x^6}{4}', correct: false },
        { latex: '\\frac{x^6}{2}', correct: false },
        { latex: '\\frac{x^5}{4}', correct: false }
      ],
      explanation:
        'El signo se anula al elevar al cuadrado: $(x^3)^2 = x^6$ y $2^2 = 4$. Resultado: $\\frac{x^6}{4}$.'
    }
  ]
};
