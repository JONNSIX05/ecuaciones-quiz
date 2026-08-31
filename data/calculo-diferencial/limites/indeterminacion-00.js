// data/calculo-diferencial/limites/indeterminacion-00.js
// Ley: Indeterminación 0/0  ->  factorizar o racionalizar y simplificar.

export default {
  lawId: 'lim-indeterminacion',
  lawName: 'Indeterminación 0/0 (factorización y racionalización)',
  lawFormula: '\\lim \\frac{0}{0} \\Rightarrow \\text{factorizar o racionalizar y simplificar}',
  prerequisites: 'Factorización, diferencia de cuadrados y conjugados.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'limind-f-01',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$',
      options: [
        { latex: '6', correct: true },
        { latex: '0', correct: false },
        { latex: '3', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Da $\\frac{0}{0}$: factoriza $\\frac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$.'
    },
    {
      id: 'limind-f-02',
      difficulty: 'easy',
      prompt: '¿Qué forma tiene $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ al sustituir?',
      options: [
        { latex: '\\frac{0}{0}', correct: true },
        { latex: '\\frac{\\infty}{\\infty}', correct: false },
        { latex: '\\frac{6}{0}', correct: false },
        { latex: '\\text{Un número real}', correct: false }
      ],
      explanation:
        'Numerador: $9 - 9 = 0$. Denominador: $3 - 3 = 0$. Forma indeterminada $\\frac{0}{0}$.'
    },
    {
      id: 'limind-f-03',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$',
      options: [
        { latex: '4', correct: true },
        { latex: '0', correct: false },
        { latex: '2', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Factoriza: $\\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$.'
    },
    {
      id: 'limind-f-04',
      difficulty: 'easy',
      prompt: '¿Qué método se usa ante una forma $\\frac{0}{0}$ en un cociente de polinomios?',
      options: [
        { latex: '\\text{Factorizar y simplificar}', correct: true },
        { latex: '\\text{Sustitución directa}', correct: false },
        { latex: '\\text{Dividir entre la mayor potencia}', correct: false },
        { latex: '\\text{Evaluar en el infinito}', correct: false }
      ],
      explanation:
        'Con $\\frac{0}{0}$, el factor que se anula está presente en ambos polinomios: se factoriza y se simplifica.'
    },
    {
      id: 'limind-f-05',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$',
      options: [
        { latex: '2', correct: true },
        { latex: '0', correct: false },
        { latex: '1', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Factoriza: $\\frac{(x-1)(x+1)}{x-1} = x + 1 \\to 2$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'limind-m-01',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$',
      options: [
        { latex: '\\frac{1}{4}', correct: true },
        { latex: '0', correct: false },
        { latex: '4', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Racionaliza con el conjugado: $\\frac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)} \\to \\frac{1}{4}$.'
    },
    {
      id: 'limind-m-02',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to -2} \\frac{x^2 + x - 2}{x + 2}$',
      options: [
        { latex: '-3', correct: true },
        { latex: '3', correct: false },
        { latex: '0', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Factoriza: $\\frac{(x+2)(x-1)}{x+2} = x - 1 \\to -3$.'
    },
    {
      id: 'limind-m-03',
      difficulty: 'medium',
      prompt: '¿Cuándo conviene racionalizar para resolver un límite $\\frac{0}{0}$?',
      options: [
        { latex: '\\text{Cuando aparecen raíces en el numerador o denominador}', correct: true },
        { latex: '\\text{Cuando hay solo polinomios}', correct: false },
        { latex: '\\text{Cuando el límite es en el infinito}', correct: false },
        { latex: '\\text{Nunca: siempre se factoriza}', correct: false }
      ],
      explanation:
        'Multiplicar por el conjugado elimina la raíz y revela el factor común que produce el cero.'
    },
    {
      id: 'limind-m-04',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$',
      options: [
        { latex: '4', correct: true },
        { latex: '2', correct: false },
        { latex: '0', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Nota que $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$: el cociente es $\\sqrt{x} + 2 \\to 4$.'
    },
    {
      id: 'limind-m-05',
      difficulty: 'medium',
      prompt: '¿Qué forma indeterminada produce $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$?',
      options: [
        { latex: '\\frac{0}{0}', correct: true },
        { latex: '\\frac{\\infty}{\\infty}', correct: false },
        { latex: '0 \\cdot \\infty', correct: false },
        { latex: '\\text{No hay indeterminación}', correct: false }
      ],
      explanation:
        '$8 - 8 = 0$ arriba y $2 - 2 = 0$ abajo: forma $\\frac{0}{0}$. Se usa diferencia de cubos.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'limind-h-01',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$',
      options: [
        { latex: '3', correct: true },
        { latex: '1', correct: false },
        { latex: '0', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Diferencia de cubos: $\\frac{(x-1)(x^2+x+1)}{x-1} = x^2 + x + 1 \\to 3$.'
    },
    {
      id: 'limind-h-02',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - 1}{x}$',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '1', correct: false },
        { latex: '0', correct: false },
        { latex: '2', correct: false }
      ],
      explanation:
        'Racionaliza: $\\frac{x}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1} \\to \\frac{1}{2}$.'
    },
    {
      id: 'limind-h-03',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 3x + 2}$',
      options: [
        { latex: '4', correct: true },
        { latex: '0', correct: false },
        { latex: '2', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'Factoriza ambos: $\\frac{(x-2)(x+2)}{(x-1)(x-2)} = \\frac{x+2}{x-1} \\to \\frac{4}{1} = 4$.'
    },
    {
      id: 'limind-h-04',
      difficulty: 'hard',
      prompt: 'El patrón $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a}$ es igual a...',
      options: [
        { latex: 'n a^{n-1}', correct: true },
        { latex: 'a^n', correct: false },
        { latex: 'n a^n', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Al factorizar y simplificar queda $x^{n-1} + a x^{n-2} + \\cdots + a^{n-1}$, que en $x = a$ suma $n a^{n-1}$.'
    },
    {
      id: 'limind-h-05',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 9} \\frac{x - 9}{\\sqrt{x} - 3}$',
      options: [
        { latex: '6', correct: true },
        { latex: '3', correct: false },
        { latex: '9', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        '$x - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$: el cociente es $\\sqrt{x} + 3 \\to 6$.'
    }
  ]
};
