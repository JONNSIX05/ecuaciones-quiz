// data/algebra/exponentes/producto.js
// Ley 1: Producto de potencias de igual base  ->  a^m · a^n = a^{m+n}
// Los prompts y explicaciones usan $...$ para delimitar matemáticas en línea.

export default {
  lawId: 'producto',
  lawName: 'Producto de potencias de igual base',
  lawFormula: 'a^m \\cdot a^n = a^{m+n}',
  prerequisites: 'Conocer potencias y exponentes enteros.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'prod-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $3^2 \\cdot 3^4$',
      options: [
        { latex: '3^6', correct: true },
        { latex: '3^8', correct: false },
        { latex: '9^6', correct: false },
        { latex: '3^2', correct: false }
      ],
      explanation:
        'Misma base, se suman los exponentes: $3^{2+4} = 3^6$. Multiplicar los exponentes ($3^8$) o las bases ($9^6$) es un error común.'
    },
    {
      id: 'prod-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $x^5 \\cdot x^3$',
      options: [
        { latex: 'x^8', correct: true },
        { latex: 'x^{15}', correct: false },
        { latex: 'x^2', correct: false },
        { latex: '2x^8', correct: false }
      ],
      explanation:
        'Se suman los exponentes: $x^{5+3} = x^8$. No se multiplican ($x^{15}$) ni se suman las bases.'
    },
    {
      id: 'prod-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $2^3 \\cdot 2^2$',
      options: [
        { latex: '2^5', correct: true },
        { latex: '2^6', correct: false },
        { latex: '4^5', correct: false },
        { latex: '2^1', correct: false }
      ],
      explanation:
        'Exponentes: $3 + 2 = 5$, por lo que $2^3 \\cdot 2^2 = 2^5$.'
    },
    {
      id: 'prod-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $a^4 \\cdot a$',
      options: [
        { latex: 'a^5', correct: true },
        { latex: 'a^4', correct: false },
        { latex: 'a^3', correct: false },
        { latex: '2a^4', correct: false }
      ],
      explanation:
        'Recuerda que $a = a^1$. Entonces $a^4 \\cdot a^1 = a^{4+1} = a^5$.'
    },
    {
      id: 'prod-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $5^2 \\cdot 5^3$',
      options: [
        { latex: '5^5', correct: true },
        { latex: '5^6', correct: false },
        { latex: '25^5', correct: false },
        { latex: '10^5', correct: false }
      ],
      explanation:
        'Misma base 5: se suman exponentes, $2 + 3 = 5$, por lo que $5^5$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'prod-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $2x^3 \\cdot 5x^4$',
      options: [
        { latex: '10x^7', correct: true },
        { latex: '7x^7', correct: false },
        { latex: '10x^{12}', correct: false },
        { latex: '7x^{12}', correct: false }
      ],
      explanation:
        'Multiplica coeficientes ($2 \\cdot 5 = 10$) y suma exponentes de $x$ ($3 + 4 = 7$): $10x^7$.'
    },
    {
      id: 'prod-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-a)^2 \\cdot (-a)^5$',
      options: [
        { latex: '(-a)^7', correct: true },
        { latex: 'a^7', correct: false },
        { latex: '(-a)^{10}', correct: false },
        { latex: 'a^{10}', correct: false }
      ],
      explanation:
        'La base es $(-a)$ en ambos factores: $(-a)^{2+5} = (-a)^7$. El signo negativo forma parte de la base.'
    },
    {
      id: 'prod-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $m^2 n^3 \\cdot m^4 n$',
      options: [
        { latex: 'm^6 n^4', correct: true },
        { latex: 'm^8 n^4', correct: false },
        { latex: 'm^6 n^3', correct: false },
        { latex: 'm^8 n^3', correct: false }
      ],
      explanation:
        'Suma exponentes por base: $m^{2+4} = m^6$ y $n^{3+1} = n^4$. Resultado: $m^6 n^4$.'
    },
    {
      id: 'prod-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $3x^2 y \\cdot 2x^3 y^2$',
      options: [
        { latex: '6x^5 y^3', correct: true },
        { latex: '5x^5 y^3', correct: false },
        { latex: '6x^6 y^2', correct: false },
        { latex: '6x^5 y^2', correct: false }
      ],
      explanation:
        'Coeficientes: $3 \\cdot 2 = 6$. Exponentes: $x^{2+3} = x^5$, $y^{1+2} = y^3$. Resultado: $6x^5 y^3$.'
    },
    {
      id: 'prod-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $(-2x^3)(3x^2)$',
      options: [
        { latex: '-6x^5', correct: true },
        { latex: '6x^5', correct: false },
        { latex: '-6x^6', correct: false },
        { latex: '-5x^5', correct: false }
      ],
      explanation:
        '$(-2)(3) = -6$ y $x^{3+2} = x^5$. El signo negativo se conserva: $-6x^5$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'prod-h-01',
      difficulty: 'hard',
      prompt: 'Si $3^x \\cdot 3^{x+1} = 243$, ¿cuál es el valor de $x$?',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '5', correct: false },
        { latex: '3', correct: false }
      ],
      explanation:
        'Suma exponentes: $3^{x+x+1} = 3^{2x+1}$. Como $243 = 3^5$, entonces $2x+1 = 5$, luego $x = 2$.'
    },
    {
      id: 'prod-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica y evalúa: $2^3 \\cdot 2^4$',
      options: [
        { latex: '128', correct: true },
        { latex: '64', correct: false },
        { latex: '2^{12}', correct: false },
        { latex: '16', correct: false }
      ],
      explanation:
        '$2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$. Evalúa después de aplicar la ley.'
    },
    {
      id: 'prod-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $x^2 \\cdot x^3 \\cdot x$',
      options: [
        { latex: 'x^6', correct: true },
        { latex: 'x^5', correct: false },
        { latex: 'x^7', correct: false },
        { latex: '3x^6', correct: false }
      ],
      explanation:
        'Tres factores con la misma base: $x^{2+3+1} = x^6$ (recuerda $x = x^1$).'
    },
    {
      id: 'prod-h-04',
      difficulty: 'hard',
      prompt: 'Si $5^2 \\cdot 5^n = 5^7$, ¿cuál es el valor de $n$?',
      options: [
        { latex: '5', correct: true },
        { latex: '2', correct: false },
        { latex: '7', correct: false },
        { latex: '9', correct: false }
      ],
      explanation:
        'Igualamos exponentes: $2 + n = 7$, por lo que $n = 5$.'
    },
    {
      id: 'prod-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $(a^2 b)(a^3 b^2)(a b^3)$',
      options: [
        { latex: 'a^6 b^6', correct: true },
        { latex: 'a^6 b^5', correct: false },
        { latex: 'a^5 b^6', correct: false },
        { latex: 'a^6 b^7', correct: false }
      ],
      explanation:
        'Para $a$: $2+3+1 = 6$. Para $b$: $1+2+3 = 6$. Resultado: $a^6 b^6$.'
    }
  ]
};
