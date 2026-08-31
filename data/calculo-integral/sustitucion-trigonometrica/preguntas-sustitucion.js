// data/calculo-integral/sustitucion-trigonometrica/preguntas-sustitucion.js
// Pool de sustitución trigonométrica. 15 preguntas: 5 easy / 6 medium / 4 hard.

export default [
  // ================= Fáciles (5) =================
  {
    id: 'sust-f-01',
    difficulty: 'easy',
    prompt: '¿Qué sustitución usas para una integral con $\\sqrt{a^2 - x^2}$?',
    options: [
      { latex: 'x = a\\sin\\theta', correct: true },
      { latex: 'x = a\\tan\\theta', correct: false },
      { latex: 'x = a\\sec\\theta', correct: false },
      { latex: 'x = a\\cos^2\\theta', correct: false }
    ],
    explanation: 'Para $\\sqrt{a^2 - x^2}$ se usa $x = a\\sin\\theta$, pues $a^2 - a^2\\sin^2\\theta = a^2\\cos^2\\theta$.'
  },
  {
    id: 'sust-f-02',
    difficulty: 'easy',
    prompt: '¿Qué sustitución usas para una integral con $\\sqrt{a^2 + x^2}$?',
    options: [
      { latex: 'x = a\\tan\\theta', correct: true },
      { latex: 'x = a\\sin\\theta', correct: false },
      { latex: 'x = a\\sec\\theta', correct: false },
      { latex: 'x = a\\csc\\theta', correct: false }
    ],
    explanation: 'Para $\\sqrt{a^2 + x^2}$ se usa $x = a\\tan\\theta$: $a^2 + a^2\\tan^2\\theta = a^2\\sec^2\\theta$.'
  },
  {
    id: 'sust-f-03',
    difficulty: 'easy',
    prompt: '¿Qué sustitución usas para una integral con $\\sqrt{x^2 - a^2}$?',
    options: [
      { latex: 'x = a\\sec\\theta', correct: true },
      { latex: 'x = a\\tan\\theta', correct: false },
      { latex: 'x = a\\sin\\theta', correct: false },
      { latex: 'x = a\\cos\\theta', correct: false }
    ],
    explanation: 'Para $\\sqrt{x^2 - a^2}$ se usa $x = a\\sec\\theta$: $a^2\\sec^2\\theta - a^2 = a^2\\tan^2\\theta$.'
  },
  {
    id: 'sust-f-04',
    difficulty: 'easy',
    prompt: 'Para $\\int \\frac{dx}{\\sqrt{4 - x^2}}$, ¿qué sustitución usas?',
    options: [
      { latex: 'x = 2\\sin\\theta', correct: true },
      { latex: 'x = 2\\tan\\theta', correct: false },
      { latex: 'x = 2\\sec\\theta', correct: false },
      { latex: 'x = \\sin\\theta', correct: false }
    ],
    explanation: '$a^2 = 4$, así que $a = 2$ y $x = 2\\sin\\theta$.'
  },
  {
    id: 'sust-f-05',
    difficulty: 'easy',
    prompt: 'Para $\\int \\frac{dx}{\\sqrt{9 + x^2}}$, ¿qué sustitución usas?',
    options: [
      { latex: 'x = 3\\tan\\theta', correct: true },
      { latex: 'x = 3\\sin\\theta', correct: false },
      { latex: 'x = 3\\sec\\theta', correct: false },
      { latex: 'x = 9\\tan\\theta', correct: false }
    ],
    explanation: '$a^2 = 9$, así que $a = 3$ y $x = 3\\tan\\theta$.'
  },

  // ================= Medias (6) =================
  {
    id: 'sust-m-01',
    difficulty: 'medium',
    prompt: '¿Qué identidad pitagórica se usa con la sustitución $x = a\\sin\\theta$?',
    options: [
      { latex: '1 - \\sin^2\\theta = \\cos^2\\theta', correct: true },
      { latex: '1 + \\tan^2\\theta = \\sec^2\\theta', correct: false },
      { latex: '\\sec^2\\theta - 1 = \\tan^2\\theta', correct: false },
      { latex: '\\sin^2\\theta + \\cos^2\\theta = 0', correct: false }
    ],
    explanation: '$a^2 - a^2\\sin^2\\theta = a^2(1 - \\sin^2\\theta) = a^2\\cos^2\\theta$.'
  },
  {
    id: 'sust-m-02',
    difficulty: 'medium',
    prompt: '¿Qué identidad pitagórica se usa con la sustitución $x = a\\tan\\theta$?',
    options: [
      { latex: '1 + \\tan^2\\theta = \\sec^2\\theta', correct: true },
      { latex: '1 - \\sin^2\\theta = \\cos^2\\theta', correct: false },
      { latex: '\\sec^2\\theta - 1 = \\tan^2\\theta', correct: false },
      { latex: '\\tan^2\\theta = \\sin^2\\theta', correct: false }
    ],
    explanation: '$a^2 + a^2\\tan^2\\theta = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta$.'
  },
  {
    id: 'sust-m-03',
    difficulty: 'medium',
    prompt: '¿Qué identidad pitagórica se usa con la sustitución $x = a\\sec\\theta$?',
    options: [
      { latex: '\\sec^2\\theta - 1 = \\tan^2\\theta', correct: true },
      { latex: '1 - \\sin^2\\theta = \\cos^2\\theta', correct: false },
      { latex: '1 + \\tan^2\\theta = \\sec^2\\theta', correct: false },
      { latex: '\\sec^2\\theta + 1 = \\tan^2\\theta', correct: false }
    ],
    explanation: '$a^2\\sec^2\\theta - a^2 = a^2(\\sec^2\\theta - 1) = a^2\\tan^2\\theta$.'
  },
  {
    id: 'sust-m-04',
    difficulty: 'medium',
    prompt: 'Con $x = 2\\sec\\theta$, ¿cuánto vale $dx$?',
    options: [
      { latex: 'dx = 2\\sec\\theta\\tan\\theta\\,d\\theta', correct: true },
      { latex: 'dx = 2\\sec^2\\theta\\,d\\theta', correct: false },
      { latex: 'dx = 2\\tan\\theta\\,d\\theta', correct: false },
      { latex: 'dx = 2\\cos\\theta\\,d\\theta', correct: false }
    ],
    explanation: 'La derivada de $\\sec\\theta$ es $\\sec\\theta\\tan\\theta$.'
  },
  {
    id: 'sust-m-05',
    difficulty: 'medium',
    prompt: 'En $x = 3\\sin\\theta$, ¿a qué equivale $\\sqrt{9 - x^2}$?',
    options: [
      { latex: '3\\cos\\theta', correct: true },
      { latex: '3\\sin\\theta', correct: false },
      { latex: '\\cos\\theta', correct: false },
      { latex: '9\\cos\\theta', correct: false }
    ],
    explanation: '$\\sqrt{9 - 9\\sin^2\\theta} = \\sqrt{9\\cos^2\\theta} = 3\\cos\\theta$ (con $\\cos\\theta \\geq 0$).'
  },
  {
    id: 'sust-m-06',
    difficulty: 'medium',
    prompt: '¿Qué sustitución transforma $\\frac{dx}{x^2 + 4}$ en una integral trigonométrica?',
    options: [
      { latex: 'x = 2\\tan\\theta', correct: true },
      { latex: 'x = 2\\sin\\theta', correct: false },
      { latex: 'x = 2\\sec\\theta', correct: false },
      { latex: 'x = 4\\tan\\theta', correct: false }
    ],
    explanation: 'El denominador es $x^2 + 4 = x^2 + a^2$, con $a = 2$: $x = 2\\tan\\theta$.'
  },

  // ================= Difíciles (4) =================
  {
    id: 'sust-h-01',
    difficulty: 'hard',
    prompt: 'Calcula $\\int \\frac{dx}{x^2 + 4}$ usando $x = 2\\tan\\theta$.',
    options: [
      { latex: '\\frac{1}{2}\\arctan\\frac{x}{2} + C', correct: true },
      { latex: '\\arctan\\frac{x}{2} + C', correct: false },
      { latex: '\\frac{1}{4}\\arctan x + C', correct: false },
      { latex: '\\ln(x^2 + 4) + C', correct: false }
    ],
    explanation: '$dx = 2\\sec^2\\theta\\,d\\theta$; la integral da $\\frac{1}{2}\\theta + C = \\frac{1}{2}\\arctan\\frac{x}{2} + C$.'
  },
  {
    id: 'sust-h-02',
    difficulty: 'hard',
    prompt: 'Calcula $\\int \\frac{dx}{\\sqrt{9 - x^2}}$ usando $x = 3\\sin\\theta$.',
    options: [
      { latex: '\\arcsin\\frac{x}{3} + C', correct: true },
      { latex: '\\arcsin\\frac{x}{9} + C', correct: false },
      { latex: '\\frac{1}{3}\\arcsin x + C', correct: false },
      { latex: '\\arccos\\frac{x}{3} + C', correct: false }
    ],
    explanation: '$\\int d\\theta = \\theta + C = \\arcsin\\frac{x}{3} + C$.'
  },
  {
    id: 'sust-h-03',
    difficulty: 'hard',
    prompt: 'Calcula $\\int \\frac{dx}{x\\sqrt{x^2 - 9}}$ usando $x = 3\\sec\\theta$.',
    options: [
      { latex: '\\frac{1}{3}\\operatorname{arcsec}\\frac{x}{3} + C', correct: true },
      { latex: '\\operatorname{arcsec}\\frac{x}{3} + C', correct: false },
      { latex: '\\frac{1}{3}\\arctan\\frac{x}{3} + C', correct: false },
      { latex: '\\frac{1}{3}\\ln\\left|x + \\sqrt{x^2-9}\\right| + C', correct: false }
    ],
    explanation: 'Simplifica a $\\int\\frac{1}{3}\\,d\\theta = \\frac{1}{3}\\theta + C = \\frac{1}{3}\\operatorname{arcsec}\\frac{x}{3} + C$.'
  },
  {
    id: 'sust-h-04',
    difficulty: 'hard',
    prompt: '¿Para qué se usa principalmente la sustitución trigonométrica?',
    options: [
      { latex: '\\text{Eliminar raíces cuadradas usando identidades pitagóricas}', correct: true },
      { latex: '\\text{Convertir logaritmos en potencias}', correct: false },
      { latex: '\\text{Derivar funciones compuestas}', correct: false },
      { latex: '\\text{Resolver ecuaciones diferenciales lineales}', correct: false }
    ],
    explanation: 'Convierte $\\sqrt{a^2 \\pm x^2}$ o $\\sqrt{x^2 - a^2}$ en expresiones trigonométricas sin raíz.'
  }
];
