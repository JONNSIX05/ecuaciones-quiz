// data/calculo-diferencial/limites/infinito.js
// Ley: Límites en el infinito  ->  comparar grados de numerador y denominador.

export default {
  lawId: 'lim-infinito',
  lawName: 'Límites en el infinito',
  lawFormula: '\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}: \\text{comparar grados de } P \\text{ y } Q',
  prerequisites: 'Grado de polinomios y división entre la mayor potencia de x.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'liminf-f-01',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3}$',
      options: [
        { latex: '2', correct: true },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '-3', correct: false }
      ],
      explanation:
        'Mismo grado: el límite es el cociente de coeficientes principales, $\\frac{2}{1} = 2$.'
    },
    {
      id: 'liminf-f-02',
      difficulty: 'easy',
      prompt: '¿Qué método se usa para $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3}$?',
      options: [
        { latex: '\\text{Dividir todo entre la mayor potencia de } x', correct: true },
        { latex: '\\text{Sustitución directa}', correct: false },
        { latex: '\\text{Factorización}', correct: false },
        { latex: '\\text{Racionalización}', correct: false }
      ],
      explanation:
        'Dividir entre $x$ deja $\\frac{2 + 1/x}{1 - 3/x}$; los términos con $1/x$ tienden a 0.'
    },
    {
      id: 'liminf-f-03',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{1}{x}$',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Cuando $x$ crece sin límite, $\\frac{1}{x}$ se hace arbitrariamente pequeño: tiende a 0.'
    },
    {
      id: 'liminf-f-04',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} 5$',
      options: [
        { latex: '5', correct: true },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Una constante no depende de $x$: su límite es la misma constante.'
    },
    {
      id: 'liminf-f-05',
      difficulty: 'easy',
      prompt: 'Si el grado del numerador es menor que el del denominador, $\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}$ es...',
      options: [
        { latex: '0', correct: true },
        { latex: '\\infty', correct: false },
        { latex: '\\text{El cociente de coeficientes principales}', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        'El denominador crece más rápido que el numerador: el cociente tiende a 0.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'liminf-m-01',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$',
      options: [
        { latex: '\\frac{3}{5}', correct: true },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\frac{5}{3}', correct: false }
      ],
      explanation:
        'Grados iguales: cociente de coeficientes principales, $\\frac{3}{5}$.'
    },
    {
      id: 'liminf-m-02',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{x^2}{x + 1}$',
      options: [
        { latex: '\\infty', correct: true },
        { latex: '0', correct: false },
        { latex: '1', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        'El numerador tiene mayor grado: crece más rápido y el cociente diverge a $\\infty$.'
    },
    {
      id: 'liminf-m-03',
      difficulty: 'medium',
      prompt: '¿Qué regla aplica para decidir $\\lim_{x \\to \\infty} \\frac{4x^3 + 2x}{x^3 + 7}$?',
      options: [
        { latex: '\\text{Comparar grados y usar coeficientes principales}', correct: true },
        { latex: '\\text{Factorizar y simplificar}', correct: false },
        { latex: '\\text{Racionalizar con el conjugado}', correct: false },
        { latex: '\\text{Sustituir } x = 0', correct: false }
      ],
      explanation:
        'Ambos polinomios tienen grado 3: el límite es $\\frac{4}{1} = 4$.'
    },
    {
      id: 'liminf-m-04',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{4x^3 + 2x}{x^3 + 7}$',
      options: [
        { latex: '4', correct: true },
        { latex: '0', correct: false },
        { latex: '\\frac{2}{7}', correct: false },
        { latex: '\\infty', correct: false }
      ],
      explanation:
        'Divide entre $x^3$: $\\frac{4 + 2/x^2}{1 + 7/x^3} \\to 4$.'
    },
    {
      id: 'liminf-m-05',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{2x}{x^2 + 1}$',
      options: [
        { latex: '0', correct: true },
        { latex: '2', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        'Grado del denominador (2) mayor que el del numerador (1): el límite es 0.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'liminf-h-01',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{\\sqrt{4x^2 + 1}}{x}$ (con $x > 0$)',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false }
      ],
      explanation:
        'Mete $x$ a la raíz: $\\sqrt{\\frac{4x^2+1}{x^2}} = \\sqrt{4 + \\frac{1}{x^2}} \\to 2$.'
    },
    {
      id: 'liminf-h-02',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + x}$',
      options: [
        { latex: '\\frac{5}{2}', correct: true },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\frac{5}{3}', correct: false }
      ],
      explanation:
        'Grados iguales: divide entre $x^2$ y queda $\\frac{5 - 3/x^2}{2 + 1/x} \\to \\frac{5}{2}$.'
    },
    {
      id: 'liminf-h-03',
      difficulty: 'hard',
      prompt: 'Si $\\lim_{x \\to \\infty} f(x) = L$ con $L$ finito, la recta $y = L$ es...',
      options: [
        { latex: '\\text{Una asíntota horizontal}', correct: true },
        { latex: '\\text{Una asíntota vertical}', correct: false },
        { latex: '\\text{Una tangente en } x = 0', correct: false },
        { latex: '\\text{Un eje de simetría}', correct: false }
      ],
      explanation:
        'Cuando la función se acerca a un valor finito en el infinito, su gráfica se aproxima a la recta $y = L$.'
    },
    {
      id: 'liminf-h-04',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} \\frac{x + 1}{x^2 + 1}$',
      options: [
        { latex: '0', correct: true },
        { latex: '1', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        'Divide entre $x^2$: $\\frac{1/x + 1/x^2}{1 + 1/x^2} \\to 0$.'
    },
    {
      id: 'liminf-h-05',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x)$',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '0', correct: false },
        { latex: '\\infty', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        'Racionaliza: $\\frac{x}{\\sqrt{x^2+x}+x} = \\frac{1}{\\sqrt{1+1/x}+1} \\to \\frac{1}{2}$.'
    }
  ]
};
