// data/calculo-diferencial/derivacion-basica/producto.js
// Ley (fórmula V): Producto de dos funciones  ->  d/dx(uv) = u dv/dx + v du/dx.

export default {
  lawId: 'der-producto',
  lawName: 'Regla del producto',
  lawFormula: '\\frac{d}{dx}(u v) = u \\frac{dv}{dx} + v \\frac{du}{dx}',
  prerequisites: 'Derivadas básicas y regla de constante por función.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dprod-f-01',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = x^2 \\sin x$?',
      options: [
        { latex: '\\text{Regla del producto (V)}', correct: true },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Constante por función (IV)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'Es el producto de dos funciones de $x$: $u = x^2$ y $v = \\sin x$. Aplica la fórmula V.'
    },
    {
      id: 'dprod-f-02',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula del producto (V)?',
      options: [
        { latex: '\\frac{d}{dx}(uv) = u \\frac{dv}{dx} + v \\frac{du}{dx}', correct: true },
        { latex: '\\frac{d}{dx}(uv) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(uv) = u \\frac{du}{dx} + v \\frac{dv}{dx}', correct: false },
        { latex: '\\frac{d}{dx}(uv) = u \\frac{dv}{dx} - v \\frac{du}{dx}', correct: false }
      ],
      explanation:
        'La derivada de un producto NO es el producto de las derivadas: es $u v\' + v u\'$.'
    },
    {
      id: 'dprod-f-03',
      difficulty: 'easy',
      prompt: 'Deriva $f(x) = x \\cdot x$ usando la regla del producto.',
      options: [
        { latex: '2x', correct: true },
        { latex: 'x', correct: false },
        { latex: 'x^2', correct: false },
        { latex: '1', correct: false }
      ],
      explanation:
        '$u = v = x$: $x(1) + x(1) = 2x$. Coincide con derivar $x^2$ por potencia.'
    },
    {
      id: 'dprod-f-04',
      difficulty: 'easy',
      prompt: '¿Cuándo se usa la regla del producto?',
      options: [
        { latex: '\\text{Cuando la función es producto de dos funciones de } x', correct: true },
        { latex: '\\text{Cuando hay una constante por una función}', correct: false },
        { latex: '\\text{Cuando hay una función dentro de otra}', correct: false },
        { latex: '\\text{Siempre que haya una multiplicación}', correct: false }
      ],
      explanation:
        'Si uno de los factores es constante basta la fórmula IV; la regla V es para dos funciones de $x$.'
    },
    {
      id: 'dprod-f-05',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = x e^x$',
      options: [
        { latex: 'e^x + x e^x', correct: true },
        { latex: 'e^x', correct: false },
        { latex: 'x e^x', correct: false },
        { latex: '1 + e^x', correct: false }
      ],
      explanation:
        'Producto (V) con $u = x$, $v = e^x$: $x e^x + e^x \\cdot 1 = e^x + x e^x$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dprod-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x^2 e^x$',
      options: [
        { latex: '2x e^x + x^2 e^x', correct: true },
        { latex: '2x e^x', correct: false },
        { latex: 'x^2 e^x', correct: false },
        { latex: '2x + e^x', correct: false }
      ],
      explanation:
        'Producto (V): $x^2 e^x + e^x (2x) = 2x e^x + x^2 e^x$.'
    },
    {
      id: 'dprod-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x \\ln x$',
      options: [
        { latex: '\\ln x + 1', correct: true },
        { latex: '\\frac{1}{x}', correct: false },
        { latex: '\\ln x', correct: false },
        { latex: 'x \\ln x + 1', correct: false }
      ],
      explanation:
        'Producto (V): $x \\cdot \\frac{1}{x} + \\ln x \\cdot 1 = 1 + \\ln x$.'
    },
    {
      id: 'dprod-m-03',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = (x + 1)(x - 2)$?',
      options: [
        { latex: '\\text{Producto (V), o expandir primero y derivar término a término}', correct: true },
        { latex: '\\text{Solo regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Solo cociente (VII)}', correct: false },
        { latex: '\\text{Derivación logarítmica (XII)}', correct: false }
      ],
      explanation:
        'Ambos factores dependen de $x$: producto (V). También puedes expandir: $x^2 - x - 2$ y derivar.'
    },
    {
      id: 'dprod-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x \\cos x$',
      options: [
        { latex: '\\cos x - x \\sin x', correct: true },
        { latex: '\\cos x + x \\sin x', correct: false },
        { latex: '-\\sin x', correct: false },
        { latex: '-x \\sin x', correct: false }
      ],
      explanation:
        'Producto (V): $x(-\\sin x) + \\cos x(1) = \\cos x - x \\sin x$.'
    },
    {
      id: 'dprod-m-05',
      difficulty: 'medium',
      prompt: 'La expresión $u \\frac{dv}{dx} + v \\frac{du}{dx}$ corresponde a...',
      options: [
        { latex: '\\text{La regla del producto (V)}', correct: true },
        { latex: '\\text{La regla del cociente (VII)}', correct: false },
        { latex: '\\text{La regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{La suma de funciones (III)}', correct: false }
      ],
      explanation:
        'Es la fórmula V escrita con $u$ y $v$ como funciones de $x$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dprod-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^2 \\ln x$',
      options: [
        { latex: '2x \\ln x + x', correct: true },
        { latex: '2x \\ln x', correct: false },
        { latex: '2x + \\frac{1}{x}', correct: false },
        { latex: 'x \\ln x + x^2', correct: false }
      ],
      explanation:
        'Producto (V): $x^2 \\cdot \\frac{1}{x} + \\ln x \\cdot 2x = x + 2x \\ln x$.'
    },
    {
      id: 'dprod-h-02',
      difficulty: 'hard',
      prompt: 'Si $f(x) = x e^x$, ¿cuánto vale $f\'(0)$?',
      options: [
        { latex: '1', correct: true },
        { latex: '0', correct: false },
        { latex: 'e', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        '$f\'(x) = e^x + x e^x$; en $x = 0$: $1 + 0 = 1$.'
    },
    {
      id: 'dprod-h-03',
      difficulty: 'hard',
      prompt: '¿Qué regla usas para derivar $f(x) = \\sin x \\cos x$?',
      options: [
        { latex: '\\text{Regla del producto (V)}', correct: true },
        { latex: '\\text{Regla de la cadena (VIII)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false },
        { latex: '\\text{Identidad trigonométrica solamente}', correct: false }
      ],
      explanation:
        'Dos funciones de $x$ multiplicadas: producto (V). (Alternativa: $\\sin x \\cos x = \\frac{1}{2}\\sin 2x$.)'
    },
    {
      id: 'dprod-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = (2x + 1)(x^2 - 3)$',
      options: [
        { latex: '6x^2 + 2x - 6', correct: true },
        { latex: '2x^2 - 3', correct: false },
        { latex: '4x(2x+1)', correct: false },
        { latex: '6x^2 - 6', correct: false }
      ],
      explanation:
        'Producto (V): $(2x+1)(2x) + (x^2-3)(2) = 4x^2 + 2x + 2x^2 - 6 = 6x^2 + 2x - 6$.'
    },
    {
      id: 'dprod-h-05',
      difficulty: 'hard',
      prompt: '¿Por qué es falso que $\\frac{d}{dx}(uv) = \\frac{du}{dx} \\cdot \\frac{dv}{dx}$?',
      options: [
        { latex: '\\text{Porque en } x \\cdot x \\text{ daría } 1, \\text{ pero } (x^2)\' = 2x', correct: true },
        { latex: '\\text{Porque las derivadas no se pueden multiplicar}', correct: false },
        { latex: '\\text{Porque solo aplica a constantes}', correct: false },
        { latex: '\\text{No es falso: siempre es correcto}', correct: false }
      ],
      explanation:
        'Contraejemplo: $u = v = x$. El producto de derivadas daría $1$, pero $(x^2)\' = 2x$.'
    }
  ]
};
