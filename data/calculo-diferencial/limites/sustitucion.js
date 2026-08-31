// data/calculo-diferencial/limites/sustitucion.js
// Ley: Límite por sustitución directa  ->  lim x→a f(x) = f(a) si f es continua en a.

export default {
  lawId: 'lim-sustitucion',
  lawName: 'Límite por sustitución directa',
  lawFormula: '\\lim_{x \\to a} f(x) = f(a) \\text{ si } f \\text{ es continua en } a',
  prerequisites: 'Conocer evaluación de funciones y continuidad básica.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'limsus-f-01',
      difficulty: 'easy',
      prompt: '¿Cómo evalúas $\\lim_{x \\to 2} (3x + 1)$?',
      options: [
        { latex: '\\text{Sustitución directa}', correct: true },
        { latex: '\\text{Factorización}', correct: false },
        { latex: '\\text{Racionalización}', correct: false },
        { latex: "\\text{Regla de L'Hôpital}", correct: false }
      ],
      explanation:
        '$3x + 1$ es un polinomio, continuo en todo $\\mathbb{R}$: basta sustituir $x = 2$.'
    },
    {
      id: 'limsus-f-02',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 2} (3x + 1)$',
      options: [
        { latex: '7', correct: true },
        { latex: '6', correct: false },
        { latex: '5', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        'Sustituye directamente: $3(2) + 1 = 7$.'
    },
    {
      id: 'limsus-f-03',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 5} 8$',
      options: [
        { latex: '8', correct: true },
        { latex: '0', correct: false },
        { latex: '5', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'La función constante vale 8 para toda $x$; su límite es 8.'
    },
    {
      id: 'limsus-f-04',
      difficulty: 'easy',
      prompt: 'Calcula: $\\lim_{x \\to 1} (x^2 + 4x - 2)$',
      options: [
        { latex: '3', correct: true },
        { latex: '5', correct: false },
        { latex: '1', correct: false },
        { latex: '-2', correct: false }
      ],
      explanation:
        'Sustituye: $1^2 + 4(1) - 2 = 3$.'
    },
    {
      id: 'limsus-f-05',
      difficulty: 'easy',
      prompt: '¿Cuándo se puede usar la sustitución directa para calcular $\\lim_{x \\to a} f(x)$?',
      options: [
        { latex: '\\text{Cuando } f \\text{ es continua en } a', correct: true },
        { latex: '\\text{Siempre, en cualquier función}', correct: false },
        { latex: '\\text{Solo cuando el resultado es } \\frac{0}{0}', correct: false },
        { latex: '\\text{Solo si } f \\text{ es una constante}', correct: false }
      ],
      explanation:
        'La sustitución directa es válida cuando $f$ es continua en $a$: el límite coincide con $f(a)$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'limsus-m-01',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 1}{x + 1}$',
      options: [
        { latex: '2', correct: true },
        { latex: '\\frac{8}{3}', correct: false },
        { latex: '4', correct: false },
        { latex: '\\frac{0}{0}', correct: false }
      ],
      explanation:
        'El denominador no se anula: sustituye $\\frac{9 - 1}{3 + 1} = \\frac{8}{4} = 2$.'
    },
    {
      id: 'limsus-m-02',
      difficulty: 'medium',
      prompt: '¿Qué pasa si intentas evaluar $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ por sustitución directa?',
      options: [
        { latex: '\\text{Obtienes } \\frac{0}{0} \\text{ y no aplica}', correct: true },
        { latex: '\\text{Obtienes } 1 \\text{ directamente}', correct: false },
        { latex: '\\text{Obtienes } 0', correct: false },
        { latex: '\\text{El límite no existe}', correct: false }
      ],
      explanation:
        'Sustituir da $\\frac{\\sin 0}{0} = \\frac{0}{0}$, una indeterminación: se necesita otro método (el límite es 1).'
    },
    {
      id: 'limsus-m-03',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to 2} (x^3 - 2x + 5)$',
      options: [
        { latex: '9', correct: true },
        { latex: '7', correct: false },
        { latex: '5', correct: false },
        { latex: '13', correct: false }
      ],
      explanation:
        'Sustituye: $8 - 4 + 5 = 9$.'
    },
    {
      id: 'limsus-m-04',
      difficulty: 'medium',
      prompt: '¿Qué método conviene para $\\lim_{x \\to 4} \\frac{x - 4}{x^2 - 16}$?',
      options: [
        { latex: '\\text{Factorizar y simplificar}', correct: true },
        { latex: '\\text{Sustitución directa}', correct: false },
        { latex: '\\text{Derivar numerador y denominador}', correct: false },
        { latex: '\\text{Dividir entre la mayor potencia de } x', correct: false }
      ],
      explanation:
        'Sustituir da $\\frac{0}{0}$: se factoriza $x^2 - 16 = (x-4)(x+4)$ y se simplifica.'
    },
    {
      id: 'limsus-m-05',
      difficulty: 'medium',
      prompt: 'Calcula: $\\lim_{x \\to -1} (2x^2 - 3x + 1)$',
      options: [
        { latex: '6', correct: true },
        { latex: '0', correct: false },
        { latex: '2', correct: false },
        { latex: '-4', correct: false }
      ],
      explanation:
        'Sustituye: $2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'limsus-h-01',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 3x}{x - 1}$',
      options: [
        { latex: '10', correct: true },
        { latex: '4', correct: false },
        { latex: '\\frac{10}{3}', correct: false },
        { latex: '\\frac{0}{0}', correct: false }
      ],
      explanation:
        'El denominador vale $1 \\neq 0$: sustituye $\\frac{4 + 6}{1} = 10$.'
    },
    {
      id: 'limsus-h-02',
      difficulty: 'hard',
      prompt: '¿Cómo analizas $\\lim_{x \\to 0} \\frac{|x|}{x}$?',
      options: [
        { latex: '\\text{Con límites laterales: no existe}', correct: true },
        { latex: '\\text{Sustitución directa: da } 1', correct: false },
        { latex: '\\text{Factorización}', correct: false },
        { latex: '\\text{Sustitución directa: da } 0', correct: false }
      ],
      explanation:
        'En $x = 0$ no está definida; por la izquierda da $-1$ y por la derecha $1$: el límite no existe.'
    },
    {
      id: 'limsus-h-03',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 3} \\sqrt{x + 6}$',
      options: [
        { latex: '3', correct: true },
        { latex: '9', correct: false },
        { latex: '\\sqrt{3}', correct: false },
        { latex: '\\text{No existe}', correct: false }
      ],
      explanation:
        'La raíz es continua donde está definida: sustituye $\\sqrt{3 + 6} = \\sqrt{9} = 3$.'
    },
    {
      id: 'limsus-h-04',
      difficulty: 'hard',
      prompt: '¿Cuál de estos límites se resuelve por sustitución directa?',
      options: [
        { latex: '\\lim_{x \\to 1} \\frac{x^3 + 1}{x + 1}', correct: true },
        { latex: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}', correct: false },
        { latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x}', correct: false },
        { latex: '\\lim_{x \\to 3} \\frac{x - 3}{x^2 - 9}', correct: false }
      ],
      explanation:
        'Solo $\\frac{x^3 + 1}{x + 1}$ no se indetermina en el punto: da $\\frac{2}{2} = 1$. Los demás producen $\\frac{0}{0}$.'
    },
    {
      id: 'limsus-h-05',
      difficulty: 'hard',
      prompt: 'Calcula: $\\lim_{x \\to 1} \\frac{x^4 + x^2 + 1}{x^2 + x + 1}$',
      options: [
        { latex: '1', correct: true },
        { latex: '3', correct: false },
        { latex: '\\frac{1}{3}', correct: false },
        { latex: '\\frac{0}{0}', correct: false }
      ],
      explanation:
        'El denominador vale $3 \\neq 0$: sustituye $\\frac{1 + 1 + 1}{1 + 1 + 1} = 1$.'
    }
  ]
};
