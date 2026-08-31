// data/algebra/exponentes/cociente.js
// Ley 2: Cociente de potencias de igual base  ->  a^m / a^n = a^{m-n}

export default {
  lawId: 'cociente',
  lawName: 'Cociente de potencias de igual base',
  lawFormula: '\\dfrac{a^m}{a^n} = a^{m-n}',
  prerequisites: 'Conocer el producto de potencias y la división.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'coc-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\frac{3^5}{3^2}$',
      options: [
        { latex: '3^3', correct: true },
        { latex: '3^7', correct: false },
        { latex: '3^{10}', correct: false },
        { latex: '1^3', correct: false }
      ],
      explanation:
        'Misma base, se restan los exponentes: $3^{5-2} = 3^3$. No se suman ni se multiplican.'
    },
    {
      id: 'coc-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\frac{x^6}{x^2}$',
      options: [
        { latex: 'x^4', correct: true },
        { latex: 'x^8', correct: false },
        { latex: 'x^3', correct: false },
        { latex: 'x^{12}', correct: false }
      ],
      explanation:
        'Se restan los exponentes: $x^{6-2} = x^4$.'
    },
    {
      id: 'coc-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\frac{2^4}{2}$',
      options: [
        { latex: '2^3', correct: true },
        { latex: '2^4', correct: false },
        { latex: '2^2', correct: false },
        { latex: '2^5', correct: false }
      ],
      explanation:
        'Recuerda que $2 = 2^1$. Entonces $2^{4-1} = 2^3$.'
    },
    {
      id: 'coc-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\frac{b^5}{b^2}$',
      options: [
        { latex: 'b^3', correct: true },
        { latex: 'b^7', correct: false },
        { latex: 'b^{10}', correct: false },
        { latex: 'b^{\\frac{5}{2}}', correct: false }
      ],
      explanation:
        'Exponentes: $5 - 2 = 3$, por lo que $b^3$.'
    },
    {
      id: 'coc-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $\\frac{5^6}{5^3}$',
      options: [
        { latex: '5^3', correct: true },
        { latex: '5^9', correct: false },
        { latex: '5^2', correct: false },
        { latex: '5^{18}', correct: false }
      ],
      explanation:
        'Se restan exponentes: $5^{6-3} = 5^3$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'coc-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{12x^5}{3x^2}$',
      options: [
        { latex: '4x^3', correct: true },
        { latex: '9x^3', correct: false },
        { latex: '4x^7', correct: false },
        { latex: '4x^{\\frac{5}{2}}', correct: false }
      ],
      explanation:
        'Divide coeficientes ($12 \\div 3 = 4$) y resta exponentes ($5 - 2 = 3$): $4x^3$.'
    },
    {
      id: 'coc-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{8x^4 y^3}{2x^2 y}$',
      options: [
        { latex: '4x^2 y^2', correct: true },
        { latex: '4x^2 y^3', correct: false },
        { latex: '4x^6 y^4', correct: false },
        { latex: '6x^2 y^2', correct: false }
      ],
      explanation:
        'Coeficientes: $8 \\div 2 = 4$. $x^{4-2} = x^2$, $y^{3-1} = y^2$. Resultado: $4x^2 y^2$.'
    },
    {
      id: 'coc-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{(-a)^5}{(-a)^2}$',
      options: [
        { latex: '(-a)^3', correct: true },
        { latex: 'a^3', correct: false },
        { latex: '(-a)^7', correct: false },
        { latex: '(-a)^{10}', correct: false }
      ],
      explanation:
        'La base es $(-a)$: $(-a)^{5-2} = (-a)^3$. El signo negativo forma parte de la base.'
    },
    {
      id: 'coc-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{15a^3 b^5}{5a^2 b}$',
      options: [
        { latex: '3ab^4', correct: true },
        { latex: '3ab^5', correct: false },
        { latex: '10ab^4', correct: false },
        { latex: '3a^2 b^4', correct: false }
      ],
      explanation:
        '$15 \\div 5 = 3$, $a^{3-2} = a$, $b^{5-1} = b^4$. Resultado: $3ab^4$.'
    },
    {
      id: 'coc-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $\\frac{-6x^4}{2x}$',
      options: [
        { latex: '-3x^3', correct: true },
        { latex: '3x^3', correct: false },
        { latex: '-3x^4', correct: false },
        { latex: '-4x^3', correct: false }
      ],
      explanation:
        '$-6 \\div 2 = -3$ y $x^{4-1} = x^3$. El signo se conserva: $-3x^3$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'coc-h-01',
      difficulty: 'hard',
      prompt: 'Si $\\frac{2^x}{2^3} = 16$, ¿cuál es el valor de $x$?',
      options: [
        { latex: '7', correct: true },
        { latex: '4', correct: false },
        { latex: '3', correct: false },
        { latex: '11', correct: false }
      ],
      explanation:
        '$\\frac{2^x}{2^3} = 2^{x-3}$. Como $16 = 2^4$, entonces $x-3 = 4$, luego $x = 7$.'
    },
    {
      id: 'coc-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica y evalúa: $\\frac{3^5}{3^2}$',
      options: [
        { latex: '27', correct: true },
        { latex: '9', correct: false },
        { latex: '3', correct: false },
        { latex: '81', correct: false }
      ],
      explanation:
        '$\\frac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$.'
    },
    {
      id: 'coc-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{x^4 y^3 z^2}{x y^2 z}$',
      options: [
        { latex: 'x^3 y z', correct: true },
        { latex: 'x^3 y z^2', correct: false },
        { latex: 'x^4 y z', correct: false },
        { latex: 'x^3 y^2 z', correct: false }
      ],
      explanation:
        'Resta por variable: $x^{4-1} = x^3$, $y^{3-2} = y$, $z^{2-1} = z$. Resultado: $x^3 y z$.'
    },
    {
      id: 'coc-h-04',
      difficulty: 'hard',
      prompt: 'Si $\\frac{10^5}{10^n} = 10^2$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '3', correct: true },
        { latex: '2', correct: false },
        { latex: '5', correct: false },
        { latex: '7', correct: false }
      ],
      explanation:
        'Igualamos exponentes: $5 - n = 2$, por lo que $n = 3$.'
    },
    {
      id: 'coc-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $\\frac{6a^4 b^3}{2a^3 b^3}$',
      options: [
        { latex: '3a', correct: true },
        { latex: '3ab', correct: false },
        { latex: '3a^7 b^6', correct: false },
        { latex: '4a', correct: false }
      ],
      explanation:
        '$6 \\div 2 = 3$, $a^{4-3} = a$ y $b^{3-3} = b^0 = 1$. Resultado: $3a$.'
    }
  ]
};
