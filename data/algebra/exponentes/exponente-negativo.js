// data/algebra/exponentes/exponente-negativo.js
// Ley 7: Exponente negativo  ->  a^{-n} = 1 / a^n

export default {
  lawId: 'exponente-negativo',
  lawName: 'Exponente negativo',
  lawFormula: 'a^{-n} = \\dfrac{1}{a^n}',
  prerequisites: 'Conocer el cociente de potencias.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'expneg-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $2^{-3}$',
      options: [
        { latex: '\\frac{1}{8}', correct: true },
        { latex: '-8', correct: false },
        { latex: '-6', correct: false },
        { latex: '8', correct: false }
      ],
      explanation:
        '$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. El signo del exponente no cambia el signo del resultado.'
    },
    {
      id: 'expneg-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $x^{-2}$',
      options: [
        { latex: '\\frac{1}{x^2}', correct: true },
        { latex: '-x^2', correct: false },
        { latex: 'x^2', correct: false },
        { latex: '-\\frac{1}{x^2}', correct: false }
      ],
      explanation:
        '$x^{-2} = \\frac{1}{x^2}$. Un exponente negativo NO vuelve negativa a la base.'
    },
    {
      id: 'expneg-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $5^{-1}$',
      options: [
        { latex: '\\frac{1}{5}', correct: true },
        { latex: '-5', correct: false },
        { latex: '5', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        '$5^{-1} = \\frac{1}{5^1} = \\frac{1}{5}$.'
    },
    {
      id: 'expneg-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $a^{-1}$',
      options: [
        { latex: '\\frac{1}{a}', correct: true },
        { latex: '-a', correct: false },
        { latex: 'a', correct: false },
        { latex: '-\\frac{1}{a}', correct: false }
      ],
      explanation:
        '$a^{-1} = \\frac{1}{a}$, que es el recíproco de $a$.'
    },
    {
      id: 'expneg-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $10^{-2}$',
      options: [
        { latex: '\\frac{1}{100}', correct: true },
        { latex: '-100', correct: false },
        { latex: '100', correct: false },
        { latex: '-20', correct: false }
      ],
      explanation:
        '$10^{-2} = \\frac{1}{10^2} = \\frac{1}{100}$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'expneg-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $3x^{-2}$',
      options: [
        { latex: '\\frac{3}{x^2}', correct: true },
        { latex: '3x^2', correct: false },
        { latex: '-3x^2', correct: false },
        { latex: '\\frac{1}{3x^2}', correct: false }
      ],
      explanation:
        'Solo la $x$ tiene exponente negativo: $3 \\cdot x^{-2} = \\frac{3}{x^2}$. El 3 queda arriba.'
    },
    {
      id: 'expneg-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $(2x)^{-1}$',
      options: [
        { latex: '\\frac{1}{2x}', correct: true },
        { latex: '-2x', correct: false },
        { latex: '\\frac{2}{x}', correct: false },
        { latex: '2x', correct: false }
      ],
      explanation:
        'El exponente aplica a toda la base: $(2x)^{-1} = \\frac{1}{2x}$.'
    },
    {
      id: 'expneg-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-2)^{-2}$',
      options: [
        { latex: '\\frac{1}{4}', correct: true },
        { latex: '-\\frac{1}{4}', correct: false },
        { latex: '4', correct: false },
        { latex: '-4', correct: false }
      ],
      explanation:
        '$(-2)^{-2} = \\frac{1}{(-2)^2} = \\frac{1}{4}$. El exponente par elimina el signo.'
    },
    {
      id: 'expneg-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{1}{x^{-2}}$',
      options: [
        { latex: 'x^2', correct: true },
        { latex: '\\frac{1}{x^2}', correct: false },
        { latex: '-x^2', correct: false },
        { latex: 'x^{-2}', correct: false }
      ],
      explanation:
        '$\frac{1}{x^{-2}} = x^2$, porque un exponente negativo en el denominador sube al numerador.'
    },
    {
      id: 'expneg-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $(3^{-1})^{-1}$',
      options: [
        { latex: '3', correct: true },
        { latex: '\\frac{1}{3}', correct: false },
        { latex: '-3', correct: false },
        { latex: '\\frac{1}{9}', correct: false }
      ],
      explanation:
        'Se multiplican los exponentes: $(-1) \\cdot (-1) = 1$, por lo que $3^1 = 3$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'expneg-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $2^{-2} \\cdot 2^3$',
      options: [
        { latex: '2', correct: true },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '8', correct: false },
        { latex: '\\frac{1}{8}', correct: false }
      ],
      explanation:
        'Suma de exponentes: $-2 + 3 = 1$, por lo que $2^1 = 2$.'
    },
    {
      id: 'expneg-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{x^2}{x^{-3}}$',
      options: [
        { latex: 'x^5', correct: true },
        { latex: 'x^{-1}', correct: false },
        { latex: 'x^{-5}', correct: false },
        { latex: 'x^6', correct: false }
      ],
      explanation:
        'Resta de exponentes: $2 - (-3) = 2 + 3 = 5$, por lo que $x^5$.'
    },
    {
      id: 'expneg-h-03',
      difficulty: 'hard',
      prompt: 'Si $2^x = \\frac{1}{8}$, ¿cuál es el valor de $x$?',
      options: [
        { latex: '-3', correct: true },
        { latex: '3', correct: false },
        { latex: '-8', correct: false },
        { latex: '\\frac{1}{3}', correct: false }
      ],
      explanation:
        '$\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$, por lo que $x = -3$.'
    },
    {
      id: 'expneg-h-04',
      difficulty: 'hard',
      prompt: 'Simplifica: $(2x^2)^{-2}$',
      options: [
        { latex: '\\frac{1}{4x^4}', correct: true },
        { latex: '\\frac{1}{2x^4}', correct: false },
        { latex: '4x^4', correct: false },
        { latex: '\\frac{4}{x^4}', correct: false }
      ],
      explanation:
        '$(2x^2)^{-2} = \\frac{1}{(2x^2)^2} = \\frac{1}{4x^4}$.'
    },
    {
      id: 'expneg-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{3x^{-2}}{y^{-3}}$',
      options: [
        { latex: '\\frac{3y^3}{x^2}', correct: true },
        { latex: '\\frac{3x^2}{y^3}', correct: false },
        { latex: '\\frac{3}{x^2 y^3}', correct: false },
        { latex: '\\frac{x^2}{3y^3}', correct: false }
      ],
      explanation:
        'Los exponentes negativos cambian de lugar: $\\frac{3x^{-2}}{y^{-3}} = 3 \\cdot \\frac{y^3}{x^2} = \\frac{3y^3}{x^2}$.'
    }
  ]
};
