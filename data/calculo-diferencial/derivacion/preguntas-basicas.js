// data/calculo-diferencial/derivacion/preguntas-basicas.js
// Pool de derivación — Bloque I–IX: constantes, identidad, suma/resta,
// constante por función, producto, potencia, cociente, cadena e inversa.
// Cada pregunta usa el esquema canónico { id, difficulty, prompt, options, explanation }.

export default [
  // ================= Constante (I) — 2/2/2 =================
  {
    id: 'derb-f-01',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = 9$',
    options: [
      { latex: '0', correct: true },
      { latex: '9', correct: false },
      { latex: '1', correct: false },
      { latex: '9x', correct: false }
    ],
    explanation: 'La derivada de toda constante es 0: $f\'(x) = 0$.'
  },
  {
    id: 'derb-f-02',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = -5$',
    options: [
      { latex: '0', correct: true },
      { latex: '-5', correct: false },
      { latex: '-1', correct: false },
      { latex: '5', correct: false }
    ],
    explanation: 'El signo no importa: $-5$ es constante y su derivada es 0.'
  },
  {
    id: 'derb-m-01',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\sqrt{2}$',
    options: [
      { latex: '0', correct: true },
      { latex: '\\frac{1}{2\\sqrt{2}}', correct: false },
      { latex: '\\sqrt{2}', correct: false },
      { latex: '\\frac{1}{\\sqrt{2}}', correct: false }
    ],
    explanation: '$\\sqrt{2}$ es un número fijo: es constante, no una función de $x$. Derivada: 0.'
  },
  {
    id: 'derb-m-02',
    difficulty: 'medium',
    prompt: 'Si $f(x) = 100$, ¿cuánto vale $f\'(x)$?',
    options: [
      { latex: '0', correct: true },
      { latex: '100', correct: false },
      { latex: '10', correct: false },
      { latex: '1', correct: false }
    ],
    explanation: 'Fórmula I: la derivada de la constante 100 es 0.'
  },
  {
    id: 'derb-h-01',
    difficulty: 'hard',
    prompt: '¿Cuál de estas funciones tiene derivada igual a 0?',
    options: [
      { latex: 'f(x) = -12', correct: true },
      { latex: 'f(x) = e^x', correct: false },
      { latex: 'f(x) = x', correct: false },
      { latex: 'f(x) = \\ln x', correct: false }
    ],
    explanation: 'Solo $-12$ es constante. $e^x$ deriva $e^x$, $x$ deriva 1 y $\\ln x$ deriva $\\frac{1}{x}$.'
  },
  {
    id: 'derb-h-02',
    difficulty: 'hard',
    prompt: 'Una recta horizontal $y = c$ tiene pendiente...',
    options: [
      { latex: '0, \\text{ por eso } \\frac{d}{dx}(c) = 0', correct: true },
      { latex: '1, \\text{ por eso } \\frac{d}{dx}(c) = 1', correct: false },
      { latex: 'c', correct: false },
      { latex: '\\text{Infinita}', correct: false }
    ],
    explanation: 'La derivada es la pendiente de la recta tangente: una recta horizontal tiene pendiente 0.'
  },

  // ================= Identidad (II) — 2/2/2 =================
  {
    id: 'derb-f-03',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x$',
    options: [
      { latex: '1', correct: true },
      { latex: '0', correct: false },
      { latex: 'x', correct: false },
      { latex: 'x^2', correct: false }
    ],
    explanation: 'Fórmula II: $\\frac{d}{dx}(x) = 1$.'
  },
  {
    id: 'derb-f-04',
    difficulty: 'easy',
    prompt: 'Si $f(x) = x$, ¿cuánto vale $f\'(5)$?',
    options: [
      { latex: '1', correct: true },
      { latex: '5', correct: false },
      { latex: '0', correct: false },
      { latex: '\\frac{1}{5}', correct: false }
    ],
    explanation: '$f\'(x) = 1$ en todo punto, incluido $x = 5$.'
  },
  {
    id: 'derb-m-03',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = -x$',
    options: [
      { latex: '-1', correct: true },
      { latex: '1', correct: false },
      { latex: '-x', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: '$-x = (-1) \\cdot x$: sale la constante $-1$ y queda $(-1)(1) = -1$.'
  },
  {
    id: 'derb-m-04',
    difficulty: 'medium',
    prompt: 'Si $f(x) = x + 7$, ¿cuánto vale $f\'(x)$?',
    options: [
      { latex: '1', correct: true },
      { latex: '8', correct: false },
      { latex: 'x', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: 'Suma (III): la identidad deriva 1 y la constante 7 deriva 0. Queda $1$.'
  },
  {
    id: 'derb-h-03',
    difficulty: 'hard',
    prompt: '¿Cuál par de fórmulas es correcto?',
    options: [
      { latex: '\\frac{d}{dx}(c) = 0 \\text{ y } \\frac{d}{dx}(x) = 1', correct: true },
      { latex: '\\frac{d}{dx}(c) = 1 \\text{ y } \\frac{d}{dx}(x) = 0', correct: false },
      { latex: '\\frac{d}{dx}(c) = c \\text{ y } \\frac{d}{dx}(x) = x', correct: false },
      { latex: '\\frac{d}{dx}(c) = 0 \\text{ y } \\frac{d}{dx}(x) = 0', correct: false }
    ],
    explanation: 'Fórmulas I y II: las constantes derivan 0 y la identidad deriva 1.'
  },
  {
    id: 'derb-h-04',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x - 4$',
    options: [
      { latex: '1', correct: true },
      { latex: '-4', correct: false },
      { latex: 'x', correct: false },
      { latex: '-3', correct: false }
    ],
    explanation: 'Resta (III): $x$ deriva 1 y $-4$ deriva 0. Queda $1$.'
  },

  // ================= Suma y resta (III) — 3/3/3 =================
  {
    id: 'derb-f-05',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x + 3$',
    options: [
      { latex: '1', correct: true },
      { latex: 'x', correct: false },
      { latex: '3', correct: false },
      { latex: '4', correct: false }
    ],
    explanation: 'Suma (III): $x$ deriva 1 y la constante 3 deriva 0. Queda $1$.'
  },
  {
    id: 'derb-f-06',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x^2 - x$',
    options: [
      { latex: '2x - 1', correct: true },
      { latex: '2x + 1', correct: false },
      { latex: 'x^2 - 1', correct: false },
      { latex: '2x', correct: false }
    ],
    explanation: 'Término a término: $(x^2)\' = 2x$ y $(x)\' = 1$, conservando el signo: $2x - 1$.'
  },
  {
    id: 'derb-f-07',
    difficulty: 'easy',
    prompt: 'La derivada de una suma de funciones es...',
    options: [
      { latex: '\\text{La suma de las derivadas}', correct: true },
      { latex: '\\text{El producto de las derivadas}', correct: false },
      { latex: '\\text{La derivada del primer término solamente}', correct: false },
      { latex: '\\text{Siempre una constante}', correct: false }
    ],
    explanation: 'Fórmula III: $\\frac{d}{dx}(u + v) = \\frac{du}{dx} + \\frac{dv}{dx}$.'
  },
  {
    id: 'derb-m-05',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = 3x^2 - 2x$',
    options: [
      { latex: '6x - 2', correct: true },
      { latex: '6x + 2', correct: false },
      { latex: '3x - 2', correct: false },
      { latex: '6x^2 - 2', correct: false }
    ],
    explanation: 'Término a término con (III), (IV) y (VIa): $6x - 2$.'
  },
  {
    id: 'derb-m-06',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x^3 - x$',
    options: [
      { latex: '3x^2 - 1', correct: true },
      { latex: '3x^2 + 1', correct: false },
      { latex: 'x^2 - 1', correct: false },
      { latex: '3x - 1', correct: false }
    ],
    explanation: 'Potencia (VIa) en cada término: $3x^2 - 1$.'
  },
  {
    id: 'derb-m-07',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = 2x - 5$',
    options: [
      { latex: '2', correct: true },
      { latex: '-5', correct: false },
      { latex: '2x', correct: false },
      { latex: '-3', correct: false }
    ],
    explanation: 'La resta (III) separa los términos: $(2x)\' = 2$ y $(-5)\' = 0$.'
  },
  {
    id: 'derb-h-05',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x^4 - 3x^2 + x - 8$',
    options: [
      { latex: '4x^3 - 6x + 1', correct: true },
      { latex: '4x^3 - 6x - 8', correct: false },
      { latex: '4x^3 - 3x + 1', correct: false },
      { latex: 'x^3 - 6x + 1', correct: false }
    ],
    explanation: 'Término a término: $4x^3 - 6x + 1 - 0$. El $-8$ deriva 0.'
  },
  {
    id: 'derb-h-06',
    difficulty: 'hard',
    prompt: 'Si $f(x) = x^2 - 4x$, ¿cuánto vale $f\'(2)$?',
    options: [
      { latex: '0', correct: true },
      { latex: '4', correct: false },
      { latex: '-4', correct: false },
      { latex: '2', correct: false }
    ],
    explanation: '$f\'(x) = 2x - 4$; evaluando: $2(2) - 4 = 0$.'
  },
  {
    id: 'derb-h-07',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\sqrt{x} - \\frac{1}{x}$',
    options: [
      { latex: '\\frac{1}{2\\sqrt{x}} + \\frac{1}{x^2}', correct: true },
      { latex: '\\frac{1}{2\\sqrt{x}} - \\frac{1}{x^2}', correct: false },
      { latex: '\\frac{1}{\\sqrt{x}} + \\frac{1}{x^2}', correct: false },
      { latex: '\\frac{1}{2\\sqrt{x}} + \\ln x', correct: false }
    ],
    explanation: '$\\sqrt{x} = x^{1/2}$ deriva $\\frac{1}{2\\sqrt{x}}$ y $\\frac{1}{x} = x^{-1}$ deriva $-\\frac{1}{x^2}$; con el signo menos queda $+\\frac{1}{x^2}$.'
  },

  // ================= Constante por función (IV) — 3/3/3 =================
  {
    id: 'derb-f-08',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = 3x$',
    options: [
      { latex: '3', correct: true },
      { latex: '3x', correct: false },
      { latex: 'x', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: 'Fórmula IV: $3 \\cdot \\frac{d}{dx}(x) = 3 \\cdot 1 = 3$.'
  },
  {
    id: 'derb-f-09',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = 7x^3$',
    options: [
      { latex: '21x^2', correct: true },
      { latex: '7x^2', correct: false },
      { latex: '21x^3', correct: false },
      { latex: '3x^2', correct: false }
    ],
    explanation: 'La constante sale: $7 \\cdot 3x^2 = 21x^2$.'
  },
  {
    id: 'derb-f-10',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = 2x$',
    options: [
      { latex: '2', correct: true },
      { latex: '2x', correct: false },
      { latex: '1', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: '$2 \\cdot \\frac{d}{dx}(x) = 2 \\cdot 1 = 2$.'
  },
  {
    id: 'derb-m-08',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = 4x^3$',
    options: [
      { latex: '12x^2', correct: true },
      { latex: '4x^2', correct: false },
      { latex: '12x^3', correct: false },
      { latex: '3x^2', correct: false }
    ],
    explanation: 'Constante fuera (IV) y potencia (VIa): $4 \\cdot 3x^2 = 12x^2$.'
  },
  {
    id: 'derb-m-09',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\frac{x}{3}$',
    options: [
      { latex: '\\frac{1}{3}', correct: true },
      { latex: '\\frac{1}{9}', correct: false },
      { latex: '3', correct: false },
      { latex: '\\frac{x}{3}', correct: false }
    ],
    explanation: 'Dividir entre 3 es multiplicar por $\\frac{1}{3}$ (fórmula VIIa/IV): queda $\\frac{1}{3}$.'
  },
  {
    id: 'derb-m-10',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = -5x^2$',
    options: [
      { latex: '-10x', correct: true },
      { latex: '10x', correct: false },
      { latex: '-5x', correct: false },
      { latex: '-10x^2', correct: false }
    ],
    explanation: 'El $-5$ sale: $-5 \\cdot 2x = -10x$. El signo se conserva.'
  },
  {
    id: 'derb-h-08',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = 6\\sqrt{x}$',
    options: [
      { latex: '\\frac{3}{\\sqrt{x}}', correct: true },
      { latex: '\\frac{6}{\\sqrt{x}}', correct: false },
      { latex: '3\\sqrt{x}', correct: false },
      { latex: '\\frac{1}{2\\sqrt{x}}', correct: false }
    ],
    explanation: '$6 \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{3}{\\sqrt{x}}$.'
  },
  {
    id: 'derb-h-09',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\pi x^2$',
    options: [
      { latex: '2\\pi x', correct: true },
      { latex: '\\pi x', correct: false },
      { latex: '2x', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: '$\\pi$ es una constante y sale de la derivada: $\\pi \\cdot 2x = 2\\pi x$.'
  },
  {
    id: 'derb-h-10',
    difficulty: 'hard',
    prompt: 'Si $f\'(x)$ existe, ¿cuánto vale $\\frac{d}{dx}(3f(x))$?',
    options: [
      { latex: '3 f\'(x)', correct: true },
      { latex: 'f\'(x)', correct: false },
      { latex: '3 f(x)', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: 'Fórmula IV en forma general: la constante sale y se deriva la función.'
  },

  // ================= Producto (V) — 3/3/3 =================
  {
    id: 'derb-f-11',
    difficulty: 'easy',
    prompt: 'Deriva $f(x) = x \\cdot x$ usando la regla del producto.',
    options: [
      { latex: '2x', correct: true },
      { latex: 'x', correct: false },
      { latex: 'x^2', correct: false },
      { latex: '1', correct: false }
    ],
    explanation: '$u = v = x$: $x(1) + x(1) = 2x$. Coincide con derivar $x^2$ por potencia.'
  },
  {
    id: 'derb-f-12',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x e^x$',
    options: [
      { latex: 'e^x + x e^x', correct: true },
      { latex: 'e^x', correct: false },
      { latex: 'x e^x', correct: false },
      { latex: '1 + e^x', correct: false }
    ],
    explanation: 'Producto (V) con $u = x$, $v = e^x$: $x e^x + e^x \\cdot 1 = e^x + x e^x$.'
  },
  {
    id: 'derb-f-13',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula del producto (V)?',
    options: [
      { latex: '\\frac{d}{dx}(uv) = u \\frac{dv}{dx} + v \\frac{du}{dx}', correct: true },
      { latex: '\\frac{d}{dx}(uv) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '\\frac{d}{dx}(uv) = u \\frac{du}{dx} + v \\frac{dv}{dx}', correct: false },
      { latex: '\\frac{d}{dx}(uv) = u \\frac{dv}{dx} - v \\frac{du}{dx}', correct: false }
    ],
    explanation: 'La derivada de un producto NO es el producto de las derivadas: es $u v\' + v u\'$.'
  },
  {
    id: 'derb-m-11',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x^2 e^x$',
    options: [
      { latex: '2x e^x + x^2 e^x', correct: true },
      { latex: '2x e^x', correct: false },
      { latex: 'x^2 e^x', correct: false },
      { latex: '2x + e^x', correct: false }
    ],
    explanation: 'Producto (V): $x^2 e^x + e^x (2x) = 2x e^x + x^2 e^x$.'
  },
  {
    id: 'derb-m-12',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x \\ln x$',
    options: [
      { latex: '\\ln x + 1', correct: true },
      { latex: '\\frac{1}{x}', correct: false },
      { latex: '\\ln x', correct: false },
      { latex: 'x \\ln x + 1', correct: false }
    ],
    explanation: 'Producto (V): $x \\cdot \\frac{1}{x} + \\ln x \\cdot 1 = 1 + \\ln x$.'
  },
  {
    id: 'derb-m-13',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x \\cos x$',
    options: [
      { latex: '\\cos x - x \\sin x', correct: true },
      { latex: '\\cos x + x \\sin x', correct: false },
      { latex: '-\\sin x', correct: false },
      { latex: '-x \\sin x', correct: false }
    ],
    explanation: 'Producto (V): $x(-\\sin x) + \\cos x(1) = \\cos x - x \\sin x$.'
  },
  {
    id: 'derb-h-11',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x^2 \\ln x$',
    options: [
      { latex: '2x \\ln x + x', correct: true },
      { latex: '2x \\ln x', correct: false },
      { latex: '2x + \\frac{1}{x}', correct: false },
      { latex: 'x \\ln x + x^2', correct: false }
    ],
    explanation: 'Producto (V): $x^2 \\cdot \\frac{1}{x} + \\ln x \\cdot 2x = x + 2x \\ln x$.'
  },
  {
    id: 'derb-h-12',
    difficulty: 'hard',
    prompt: 'Si $f(x) = x e^x$, ¿cuánto vale $f\'(0)$?',
    options: [
      { latex: '1', correct: true },
      { latex: '0', correct: false },
      { latex: 'e', correct: false },
      { latex: '-1', correct: false }
    ],
    explanation: '$f\'(x) = e^x + x e^x$; en $x = 0$: $1 + 0 = 1$.'
  },
  {
    id: 'derb-h-13',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = (2x + 1)(x^2 - 3)$',
    options: [
      { latex: '6x^2 + 2x - 6', correct: true },
      { latex: '2x^2 - 3', correct: false },
      { latex: '4x(2x+1)', correct: false },
      { latex: '6x^2 - 6', correct: false }
    ],
    explanation: 'Producto (V): $(2x+1)(2x) + (x^2-3)(2) = 4x^2 + 2x + 2x^2 - 6 = 6x^2 + 2x - 6$.'
  },

  // ================= Potencia (VI / VIa) — 3/3/3 =================
  {
    id: 'derb-f-14',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x^3$',
    options: [
      { latex: '3x^2', correct: true },
      { latex: 'x^2', correct: false },
      { latex: '3x^3', correct: false },
      { latex: '2x^3', correct: false }
    ],
    explanation: 'Fórmula VIa: baja el exponente y réstale 1: $3x^{3-1} = 3x^2$.'
  },
  {
    id: 'derb-f-15',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x^5$',
    options: [
      { latex: '5x^4', correct: true },
      { latex: 'x^4', correct: false },
      { latex: '5x^5', correct: false },
      { latex: '4x^5', correct: false }
    ],
    explanation: '$5x^{5-1} = 5x^4$.'
  },
  {
    id: 'derb-f-16',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = x^2$',
    options: [
      { latex: '2x', correct: true },
      { latex: 'x', correct: false },
      { latex: '2', correct: false },
      { latex: 'x^2', correct: false }
    ],
    explanation: '$2x^{2-1} = 2x$.'
  },
  {
    id: 'derb-m-14',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x^{-2}$',
    options: [
      { latex: '-2x^{-3}', correct: true },
      { latex: '2x^{-3}', correct: false },
      { latex: '-2x^{-1}', correct: false },
      { latex: '-\\frac{2}{x}', correct: false }
    ],
    explanation: 'La fórmula vale para exponentes negativos: $-2x^{-2-1} = -2x^{-3}$.'
  },
  {
    id: 'derb-m-15',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\sqrt{x}$',
    options: [
      { latex: '\\frac{1}{2\\sqrt{x}}', correct: true },
      { latex: '\\frac{1}{\\sqrt{x}}', correct: false },
      { latex: '2\\sqrt{x}', correct: false },
      { latex: '\\frac{\\sqrt{x}}{2}', correct: false }
    ],
    explanation: 'Escribe $\\sqrt{x} = x^{1/2}$: $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.'
  },
  {
    id: 'derb-m-16',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x^{3/2}$',
    options: [
      { latex: '\\frac{3}{2} x^{1/2}', correct: true },
      { latex: '\\frac{3}{2} x^{3/2}', correct: false },
      { latex: '\\frac{1}{2} x^{1/2}', correct: false },
      { latex: '3 x^{1/2}', correct: false }
    ],
    explanation: '$\\frac{3}{2} x^{3/2 - 1} = \\frac{3}{2} x^{1/2}$.'
  },
  {
    id: 'derb-h-14',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\frac{1}{x^3}$',
    options: [
      { latex: '-\\frac{3}{x^4}', correct: true },
      { latex: '\\frac{3}{x^4}', correct: false },
      { latex: '-\\frac{3}{x^2}', correct: false },
      { latex: '-\\frac{1}{x^4}', correct: false }
    ],
    explanation: '$x^{-3}$ deriva $-3x^{-4} = -\\frac{3}{x^4}$.'
  },
  {
    id: 'derb-h-15',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x^{\\pi}$',
    options: [
      { latex: '\\pi x^{\\pi - 1}', correct: true },
      { latex: 'x^{\\pi - 1}', correct: false },
      { latex: '\\pi x^{\\pi}', correct: false },
      { latex: 'e^{\\pi} x^{\\pi - 1}', correct: false }
    ],
    explanation: 'La fórmula VIa vale para cualquier exponente real constante, incluido $\\pi$.'
  },
  {
    id: 'derb-h-16',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x^{-1/2}$',
    options: [
      { latex: '-\\frac{1}{2 x^{3/2}}', correct: true },
      { latex: '\\frac{1}{2 x^{3/2}}', correct: false },
      { latex: '-\\frac{1}{2 x^{1/2}}', correct: false },
      { latex: '-\\frac{1}{2} x^{1/2}', correct: false }
    ],
    explanation: '$-\\frac{1}{2} x^{-1/2 - 1} = -\\frac{1}{2} x^{-3/2} = -\\frac{1}{2 x^{3/2}}$.'
  },

  // ================= Cociente (VII / VIIa) — 3/3/3 =================
  {
    id: 'derb-f-17',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\frac{x}{x}$',
    options: [
      { latex: '0', correct: true },
      { latex: '1', correct: false },
      { latex: '\\frac{1}{x}', correct: false },
      { latex: 'x', correct: false }
    ],
    explanation: '$\\frac{x}{x} = 1$ (para $x \\neq 0$), una constante: deriva 0. La fórmula VII da $\\frac{x - x}{x^2} = 0$.'
  },
  {
    id: 'derb-f-18',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\frac{1}{x}$',
    options: [
      { latex: '-\\frac{1}{x^2}', correct: true },
      { latex: '\\frac{1}{x^2}', correct: false },
      { latex: '\\ln x', correct: false },
      { latex: '-\\frac{1}{x}', correct: false }
    ],
    explanation: 'Con VII: $\\frac{x \\cdot 0 - 1 \\cdot 1}{x^2} = -\\frac{1}{x^2}$. También es potencia: $(x^{-1})\' = -x^{-2}$.'
  },
  {
    id: 'derb-f-19',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula del cociente (VII)?',
    options: [
      { latex: '\\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}', correct: true },
      { latex: '\\frac{u \\frac{dv}{dx} - v \\frac{du}{dx}}{v^2}', correct: false },
      { latex: '\\frac{\\frac{du}{dx}}{\\frac{dv}{dx}}', correct: false },
      { latex: '\\frac{v \\frac{du}{dx} + u \\frac{dv}{dx}}{v^2}', correct: false }
    ],
    explanation: 'El orden importa: es (denominador)(derivada del numerador) − (numerador)(derivada del denominador), entre $v^2$.'
  },
  {
    id: 'derb-m-17',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\frac{x}{x^2 + 1}$',
    options: [
      { latex: '\\frac{1 - x^2}{(x^2 + 1)^2}', correct: true },
      { latex: '\\frac{1 + x^2}{(x^2 + 1)^2}', correct: false },
      { latex: '\\frac{1}{2x}', correct: false },
      { latex: '\\frac{x^2 - 1}{(x^2 + 1)^2}', correct: false }
    ],
    explanation: 'Fórmula VII: $\\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$.'
  },
  {
    id: 'derb-m-18',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\frac{x^2}{x + 1}$',
    options: [
      { latex: '\\frac{x^2 + 2x}{(x + 1)^2}', correct: true },
      { latex: '\\frac{2x}{(x + 1)^2}', correct: false },
      { latex: '\\frac{x^2 - 2x}{(x + 1)^2}', correct: false },
      { latex: '2x', correct: false }
    ],
    explanation: 'Fórmula VII: $\\frac{(x+1)(2x) - x^2(1)}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}$.'
  },
  {
    id: 'derb-m-19',
    difficulty: 'medium',
    prompt: '¿Qué regla usas para derivar $f(x) = \\frac{\\sin x}{x}$?',
    options: [
      { latex: '\\text{Regla del cociente (VII)}', correct: true },
      { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
      { latex: '\\text{Solo derivada del seno (XIII)}', correct: false },
      { latex: '\\text{Constante por función (IV)}', correct: false }
    ],
    explanation: 'Ambos, $\\sin x$ y $x$, dependen de $x$: cociente (VII).'
  },
  {
    id: 'derb-h-17',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\frac{e^x}{x}$',
    options: [
      { latex: '\\frac{x e^x - e^x}{x^2}', correct: true },
      { latex: '\\frac{e^x}{x^2}', correct: false },
      { latex: '\\frac{x e^x + e^x}{x^2}', correct: false },
      { latex: '\\frac{e^x - x e^x}{x^2}', correct: false }
    ],
    explanation: 'Fórmula VII: $\\frac{x e^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$.'
  },
  {
    id: 'derb-h-18',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\frac{\\ln x}{x}$',
    options: [
      { latex: '\\frac{1 - \\ln x}{x^2}', correct: true },
      { latex: '\\frac{1 + \\ln x}{x^2}', correct: false },
      { latex: '\\frac{1}{x^2}', correct: false },
      { latex: '\\frac{\\ln x - 1}{x^2}', correct: false }
    ],
    explanation: 'Fórmula VII: $\\frac{x \\cdot \\frac{1}{x} - \\ln x}{x^2} = \\frac{1 - \\ln x}{x^2}$.'
  },
  {
    id: 'derb-h-19',
    difficulty: 'hard',
    prompt: 'Si $f(x) = \\frac{x}{x + 1}$, ¿cuánto vale $f\'(1)$?',
    options: [
      { latex: '\\frac{1}{4}', correct: true },
      { latex: '\\frac{1}{2}', correct: false },
      { latex: '1', correct: false },
      { latex: '\\frac{3}{4}', correct: false }
    ],
    explanation: '$f\'(x) = \\frac{(x+1) - x}{(x+1)^2} = \\frac{1}{(x+1)^2}$; en $x = 1$: $\\frac{1}{4}$.'
  },

  // ================= Cadena (VIII) — 4/4/4 =================
  {
    id: 'derb-f-20',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = (3x)^2$',
    options: [
      { latex: '18x', correct: true },
      { latex: '9x', correct: false },
      { latex: '6x^2', correct: false },
      { latex: '3x^2', correct: false }
    ],
    explanation: 'Cadena: $2(3x) \\cdot 3 = 18x$. (También: $(3x)^2 = 9x^2$ y su derivada es $18x$.)'
  },
  {
    id: 'derb-f-21',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = (x + 1)^3$',
    options: [
      { latex: '3(x + 1)^2', correct: true },
      { latex: '(x + 1)^2', correct: false },
      { latex: '3x^2', correct: false },
      { latex: '3(x + 1)^3', correct: false }
    ],
    explanation: 'Cadena con $v = x + 1$: $3(x+1)^2 \\cdot 1 = 3(x+1)^2$.'
  },
  {
    id: 'derb-f-22',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\sin(2x)$',
    options: [
      { latex: '2\\cos(2x)', correct: true },
      { latex: '\\cos(2x)', correct: false },
      { latex: '2\\sin(2x)', correct: false },
      { latex: '-2\\cos(2x)', correct: false }
    ],
    explanation: 'Cadena con XIII: $\\cos(2x) \\cdot 2 = 2\\cos(2x)$.'
  },
  {
    id: 'derb-f-23',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\cos(5x)$',
    options: [
      { latex: '-5\\sin(5x)', correct: true },
      { latex: '5\\sin(5x)', correct: false },
      { latex: '-\\sin(5x)', correct: false },
      { latex: '-5\\cos(5x)', correct: false }
    ],
    explanation: 'Cadena con XIV: $-\\sin(5x) \\cdot 5 = -5\\sin(5x)$.'
  },
  {
    id: 'derb-m-20',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = (x^2 + 1)^4$',
    options: [
      { latex: '8x(x^2 + 1)^3', correct: true },
      { latex: '4(x^2 + 1)^3', correct: false },
      { latex: '8x(x^2 + 1)^4', correct: false },
      { latex: '4x(x^2 + 1)^3', correct: false }
    ],
    explanation: 'Cadena: $4(x^2+1)^3 \\cdot 2x = 8x(x^2+1)^3$.'
  },
  {
    id: 'derb-m-21',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\sqrt{2x + 1}$',
    options: [
      { latex: '\\frac{1}{\\sqrt{2x + 1}}', correct: true },
      { latex: '\\frac{2}{\\sqrt{2x + 1}}', correct: false },
      { latex: '\\frac{1}{2\\sqrt{2x + 1}}', correct: false },
      { latex: '\\frac{1}{2x + 1}', correct: false }
    ],
    explanation: 'Cadena con potencia $\\frac{1}{2}$: $\\frac{1}{2}(2x+1)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x+1}}$.'
  },
  {
    id: 'derb-m-22',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\sin(x^2)$',
    options: [
      { latex: '2x \\cos(x^2)', correct: true },
      { latex: '\\cos(x^2)', correct: false },
      { latex: '2x \\sin(x^2)', correct: false },
      { latex: '\\cos(2x)', correct: false }
    ],
    explanation: 'Cadena con XIII: $\\cos(x^2) \\cdot 2x = 2x \\cos(x^2)$.'
  },
  {
    id: 'derb-m-23',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = e^{-x^2}$',
    options: [
      { latex: '-2x e^{-x^2}', correct: true },
      { latex: '2x e^{-x^2}', correct: false },
      { latex: '-e^{-x^2}', correct: false },
      { latex: '-x^2 e^{-x^2 - 1}', correct: false }
    ],
    explanation: 'Cadena con XIa: $e^{-x^2} \\cdot (-2x) = -2x e^{-x^2}$.'
  },
  {
    id: 'derb-h-20',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\sqrt[3]{x^2 + 1}$',
    options: [
      { latex: '\\frac{2x}{3(x^2 + 1)^{2/3}}', correct: true },
      { latex: '\\frac{1}{3(x^2 + 1)^{2/3}}', correct: false },
      { latex: '\\frac{2}{3}(x^2 + 1)^{1/3}', correct: false },
      { latex: '\\frac{2x}{(x^2 + 1)^{2/3}}', correct: false }
    ],
    explanation: 'Potencia $\\frac{1}{3}$ con cadena: $\\frac{1}{3}(x^2+1)^{-2/3} \\cdot 2x = \\frac{2x}{3(x^2+1)^{2/3}}$.'
  },
  {
    id: 'derb-h-21',
    difficulty: 'hard',
    prompt: 'Si $y = v^3$ y $v = 2x$, ¿cuánto vale $\\frac{dy}{dx}$ según la fórmula VIII?',
    options: [
      { latex: '24x^2', correct: true },
      { latex: '12x^2', correct: false },
      { latex: '3v^2', correct: false },
      { latex: '6x^2', correct: false }
    ],
    explanation: '$\\frac{dy}{dv} = 3v^2$ y $\\frac{dv}{dx} = 2$: producto $6v^2 = 6(2x)^2 = 24x^2$.'
  },
  {
    id: 'derb-h-22',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\sin^3 x$',
    options: [
      { latex: '3 \\sin^2 x \\cos x', correct: true },
      { latex: '3 \\sin^2 x', correct: false },
      { latex: '\\sin^2 x \\cos x', correct: false },
      { latex: '3 \\cos^2 x \\sin x', correct: false }
    ],
    explanation: 'Doble cadena: potencia del seno. $3(\\sin x)^2 \\cdot \\cos x$.'
  },
  {
    id: 'derb-h-23',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\ln(\\cos x)$',
    options: [
      { latex: '-\\tan x', correct: true },
      { latex: '\\frac{1}{\\cos x}', correct: false },
      { latex: '\\tan x', correct: false },
      { latex: '-\\frac{1}{\\cos x}', correct: false }
    ],
    explanation: 'Cadena con X: $\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
  },

  // ================= Inversa (IX) — 3/3/3 =================
  {
    id: 'derb-f-24',
    difficulty: 'easy',
    prompt: 'Si $\\frac{dx}{dy} = 2$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{2}', correct: true },
      { latex: '2', correct: false },
      { latex: '-2', correct: false },
      { latex: '0', correct: false }
    ],
    explanation: 'Fórmula IX: $\\frac{dy}{dx} = \\frac{1}{2}$.'
  },
  {
    id: 'derb-f-25',
    difficulty: 'easy',
    prompt: 'Si $x = y^3$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{3y^2}', correct: true },
      { latex: '3y^2', correct: false },
      { latex: '\\frac{1}{y^2}', correct: false },
      { latex: 'y^2', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = 3y^2$; por la fórmula IX: $\\frac{dy}{dx} = \\frac{1}{3y^2}$.'
  },
  {
    id: 'derb-f-26',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula IX (derivación de la función inversa)?',
    options: [
      { latex: '\\frac{dy}{dx} = \\frac{1}{\\frac{dx}{dy}}', correct: true },
      { latex: '\\frac{dy}{dx} = \\frac{dx}{dy}', correct: false },
      { latex: '\\frac{dy}{dx} = -\\frac{dx}{dy}', correct: false },
      { latex: '\\frac{dy}{dx} = \\frac{dx}{dy} \\cdot \\frac{dy}{dx}', correct: false }
    ],
    explanation: 'La derivada de la función inversa es el recíproco de la derivada directa.'
  },
  {
    id: 'derb-m-24',
    difficulty: 'medium',
    prompt: 'Si $x = 2y + 1$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{2}', correct: true },
      { latex: '2', correct: false },
      { latex: '1', correct: false },
      { latex: '\\frac{1}{2y + 1}', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = 2$; recíproco: $\\frac{1}{2}$.'
  },
  {
    id: 'derb-m-25',
    difficulty: 'medium',
    prompt: 'Si $x = y^2$ con $y > 0$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{2y}', correct: true },
      { latex: '2y', correct: false },
      { latex: '\\frac{1}{y}', correct: false },
      { latex: '\\frac{1}{2x}', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = 2y$; por IX: $\\frac{dy}{dx} = \\frac{1}{2y}$. (Coincide con derivar $y = \\sqrt{x}$.)'
  },
  {
    id: 'derb-m-26',
    difficulty: 'medium',
    prompt: 'Si $x = \\sin y$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{\\cos y}', correct: true },
      { latex: '\\cos y', correct: false },
      { latex: '-\\frac{1}{\\cos y}', correct: false },
      { latex: '\\frac{1}{\\sin y}', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = \\cos y$; por IX: $\\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y$. Así se deriva $\\arcsin x$.'
  },
  {
    id: 'derb-h-24',
    difficulty: 'hard',
    prompt: 'Si $x = e^y$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: 'e^{-y}', correct: true },
      { latex: 'e^y', correct: false },
      { latex: '\\frac{1}{y}', correct: false },
      { latex: '-e^y', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = e^y$; por IX: $\\frac{dy}{dx} = \\frac{1}{e^y} = e^{-y}$. Así se deriva $\\ln x$.'
  },
  {
    id: 'derb-h-25',
    difficulty: 'hard',
    prompt: 'Si $x = y^3 + y$ y $y = 1$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{4}', correct: true },
      { latex: '4', correct: false },
      { latex: '\\frac{1}{3}', correct: false },
      { latex: '\\frac{1}{2}', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = 3y^2 + 1 = 4$ en $y = 1$; por IX: $\\frac{dy}{dx} = \\frac{1}{4}$.'
  },
  {
    id: 'derb-h-26',
    difficulty: 'hard',
    prompt: 'Si $x = y + e^y$ y $y = 0$, ¿cuánto vale $\\frac{dy}{dx}$?',
    options: [
      { latex: '\\frac{1}{2}', correct: true },
      { latex: '2', correct: false },
      { latex: '1', correct: false },
      { latex: '\\frac{1}{e}', correct: false }
    ],
    explanation: '$\\frac{dx}{dy} = 1 + e^y = 2$ en $y = 0$; por IX: $\\frac{dy}{dx} = \\frac{1}{2}$.'
  }
];
