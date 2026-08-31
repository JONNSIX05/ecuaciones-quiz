// data/calculo-diferencial/regla-cadena/cadena-simple.js
// Ley (fórmula VIII): Regla de la cadena  ->  dy/dx = dy/dv · dv/dx (funciones algebraicas).

export default {
  lawId: 'der-cadena',
  lawName: 'Regla de la cadena (funciones algebraicas)',
  lawFormula: '\\frac{dy}{dx} = \\frac{dy}{dv} \\cdot \\frac{dv}{dx}',
  prerequisites: 'Regla de la potencia y composición de funciones.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dcad-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = (2x + 1)^5$?',
      options: [
        { latex: '\\text{Regla de la cadena (VIII) + potencia general (VI)}', correct: true },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'La base $2x + 1$ es una función de $x$: hay composición, así que aplica la cadena.'
    },
    {
      id: 'dcad-f-02',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula VIII (regla de la cadena)?',
      options: [
        { latex: '\\frac{dy}{dx} = \\frac{dy}{dv} \\cdot \\frac{dv}{dx}', correct: true },
        { latex: '\\frac{dy}{dx} = \\frac{dy}{dv} + \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{dy}{dx} = \\frac{1}{\\frac{dv}{dx}}', correct: false },
        { latex: '\\frac{dy}{dx} = \\frac{dy}{dx} \\cdot \\frac{dv}{dv}', correct: false }
      ],
      explanation:
        'Se deriva la función exterior respecto a la interior, y se multiplica por la derivada de la interior.'
    },
    {
      id: 'dcad-f-03',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = (3x)^2$',
      options: [
        { latex: '18x', correct: true },
        { latex: '9x', correct: false },
        { latex: '6x^2', correct: false },
        { latex: '3x^2', correct: false }
      ],
      explanation:
        'Cadena: $2(3x) \\cdot 3 = 18x$. (También: $(3x)^2 = 9x^2$ y su derivada es $18x$.)'
    },
    {
      id: 'dcad-f-04',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = (x + 1)^3$',
      options: [
        { latex: '3(x + 1)^2', correct: true },
        { latex: '(x + 1)^2', correct: false },
        { latex: '3x^2', correct: false },
        { latex: '3(x + 1)^3', correct: false }
      ],
      explanation:
        'Cadena con $v = x + 1$: $3(x+1)^2 \\cdot 1 = 3(x+1)^2$.'
    },
    {
      id: 'dcad-f-05',
      difficulty: 'easy',
      prompt: '¿Cuándo se aplica la regla de la cadena?',
      options: [
        { latex: '\\text{Cuando hay una función compuesta: una función dentro de otra}', correct: true },
        { latex: '\\text{Siempre que haya una potencia}', correct: false },
        { latex: '\\text{Solo con funciones trigonométricas}', correct: false },
        { latex: '\\text{Cuando hay una suma de funciones}', correct: false }
      ],
      explanation:
        'La cadena resuelve composiciones $f(g(x))$: se deriva la exterior y se multiplica por la derivada de la interior.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dcad-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = (x^2 + 1)^4$',
      options: [
        { latex: '8x(x^2 + 1)^3', correct: true },
        { latex: '4(x^2 + 1)^3', correct: false },
        { latex: '8x(x^2 + 1)^4', correct: false },
        { latex: '4x(x^2 + 1)^3', correct: false }
      ],
      explanation:
        'Cadena: $4(x^2+1)^3 \\cdot 2x = 8x(x^2+1)^3$.'
    },
    {
      id: 'dcad-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\sqrt{2x + 1}$',
      options: [
        { latex: '\\frac{1}{\\sqrt{2x + 1}}', correct: true },
        { latex: '\\frac{2}{\\sqrt{2x + 1}}', correct: false },
        { latex: '\\frac{1}{2\\sqrt{2x + 1}}', correct: false },
        { latex: '\\frac{1}{2x + 1}', correct: false }
      ],
      explanation:
        'Cadena con potencia $\\frac{1}{2}$: $\\frac{1}{2}(2x+1)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x+1}}$.'
    },
    {
      id: 'dcad-m-03',
      difficulty: 'medium',
      prompt: 'En $f(x) = (x^3 - 2)^7$, ¿cuál es la función exterior?',
      options: [
        { latex: '(\\cdot)^7 \\text{ (la potencia)}', correct: true },
        { latex: 'x^3 - 2', correct: false },
        { latex: 'x^3', correct: false },
        { latex: '7', correct: false }
      ],
      explanation:
        'La exterior es la potencia 7 aplicada al resultado de la interior $v = x^3 - 2$.'
    },
    {
      id: 'dcad-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\frac{1}{x^2 + 1}$',
      options: [
        { latex: '-\\frac{2x}{(x^2 + 1)^2}', correct: true },
        { latex: '\\frac{2x}{(x^2 + 1)^2}', correct: false },
        { latex: '-\\frac{1}{(x^2 + 1)^2}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false }
      ],
      explanation:
        'Como potencia negativa con cadena: $-(x^2+1)^{-2} \\cdot 2x = -\\frac{2x}{(x^2+1)^2}$.'
    },
    {
      id: 'dcad-m-05',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = (5 - 2x)^3$',
      options: [
        { latex: '-6(5 - 2x)^2', correct: true },
        { latex: '3(5 - 2x)^2', correct: false },
        { latex: '6(5 - 2x)^2', correct: false },
        { latex: '-2(5 - 2x)^3', correct: false }
      ],
      explanation:
        'Cadena: $3(5-2x)^2 \\cdot (-2) = -6(5-2x)^2$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dcad-h-01',
      difficulty: 'hard',
      prompt: 'Si $f(x) = (x^2 + 3x)^5$, ¿cuánto vale $f\'(0)$?',
      options: [
        { latex: '0', correct: true },
        { latex: '3', correct: false },
        { latex: '15', correct: false },
        { latex: '5', correct: false }
      ],
      explanation:
        '$f\'(x) = 5(x^2+3x)^4(2x+3)$; en $x = 0$ el factor $(0)^4 = 0$, así que $f\'(0) = 0$.'
    },
    {
      id: 'dcad-h-02',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = \\sqrt{x^2 + 1}$?',
      options: [
        { latex: '\\text{Cadena (VIII) + potencia general (VI)}', correct: true },
        { latex: '\\text{Solo potencia (VIa)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false },
        { latex: '\\text{Producto (V)}', correct: false }
      ],
      explanation:
        'Raíz (potencia $\\frac{1}{2}$) aplicada a $x^2 + 1$: composición, aplica la cadena. Queda $\\frac{x}{\\sqrt{x^2+1}}$.'
    },
    {
      id: 'dcad-h-03',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\sqrt[3]{x^2 + 1}$',
      options: [
        { latex: '\\frac{2x}{3(x^2 + 1)^{2/3}}', correct: true },
        { latex: '\\frac{1}{3(x^2 + 1)^{2/3}}', correct: false },
        { latex: '\\frac{2}{3}(x^2 + 1)^{1/3}', correct: false },
        { latex: '\\frac{2x}{(x^2 + 1)^{2/3}}', correct: false }
      ],
      explanation:
        'Potencia $\\frac{1}{3}$ con cadena: $\\frac{1}{3}(x^2+1)^{-2/3} \\cdot 2x = \\frac{2x}{3(x^2+1)^{2/3}}$.'
    },
    {
      id: 'dcad-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = (x + 1)^6$',
      options: [
        { latex: '6(x + 1)^5', correct: true },
        { latex: '(x + 1)^5', correct: false },
        { latex: '6x^5', correct: false },
        { latex: '6(x + 1)^6', correct: false }
      ],
      explanation:
        'Cadena con derivada interior 1: $6(x+1)^5 \\cdot 1 = 6(x+1)^5$.'
    },
    {
      id: 'dcad-h-05',
      difficulty: 'hard',
      prompt: 'Si $y = v^3$ y $v = 2x$, ¿cuánto vale $\\frac{dy}{dx}$ según la fórmula VIII?',
      options: [
        { latex: '24x^2', correct: true },
        { latex: '12x^2', correct: false },
        { latex: '3v^2', correct: false },
        { latex: '6x^2', correct: false }
      ],
      explanation:
        '$\\frac{dy}{dv} = 3v^2$ y $\\frac{dv}{dx} = 2$: producto $6v^2 = 6(2x)^2 = 24x^2$.'
    }
  ]
};
