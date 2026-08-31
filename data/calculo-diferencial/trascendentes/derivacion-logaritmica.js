// data/calculo-diferencial/trascendentes/derivacion-logaritmica.js
// Ley (fórmula XII): Derivación logarítmica  ->  d/dx(u^v) con u y v funciones de x.

export default {
  lawId: 'der-logaritmica-uv',
  lawName: 'Derivación logarítmica (base y exponente funciones)',
  lawFormula: '\\frac{d}{dx}(u^v) = v u^{v-1} \\frac{du}{dx} + \\ln u \\cdot u^v \\frac{dv}{dx}',
  prerequisites: 'Reglas del producto, potencia y exponencial; logaritmos.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dlogder-f-01',
      difficulty: 'easy',
      prompt: '¿Cuándo se usa la derivación logarítmica (fórmula XII)?',
      options: [
        { latex: '\\text{Cuando la base y el exponente son funciones de } x', correct: true },
        { latex: '\\text{Siempre que aparezca un logaritmo}', correct: false },
        { latex: '\\text{Cuando la base es constante}', correct: false },
        { latex: '\\text{Cuando el exponente es constante}', correct: false }
      ],
      explanation:
        'Si el exponente es constante basta la potencia (VI); si la base es constante, la exponencial (XI). La XII es para $u(x)^{v(x)}$.'
    },
    {
      id: 'dlogder-f-02',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula XII para $\\frac{d}{dx}(u^v)$?',
      options: [
        { latex: 'v u^{v-1} \\frac{du}{dx} + \\ln u \\cdot u^v \\frac{dv}{dx}', correct: true },
        { latex: 'v u^{v-1} \\frac{du}{dx}', correct: false },
        { latex: '\\ln u \\cdot u^v \\frac{dv}{dx}', correct: false },
        { latex: 'u^v \\left( \\frac{du}{dx} + \\frac{dv}{dx} \\right)', correct: false }
      ],
      explanation:
        'Combina dos términos: uno como si $v$ fuera constante (potencia) y otro como si $u$ fuera constante (exponencial).'
    },
    {
      id: 'dlogder-f-03',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = x^x$?',
      options: [
        { latex: '\\text{Derivación logarítmica (XII)}', correct: true },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
        { latex: '\\text{Exponencial natural (XIa)}', correct: false },
        { latex: '\\text{Regla del producto (V)}', correct: false }
      ],
      explanation:
        'Base $x$ y exponente $x$: ambos dependen de $x$. No es potencia ni exponencial pura.'
    },
    {
      id: 'dlogder-f-04',
      difficulty: 'easy',
      prompt: 'En la fórmula XII, si $v$ es constante, ¿en qué se reduce?',
      options: [
        { latex: 'v u^{v-1} \\frac{du}{dx} \\text{ (regla de la potencia general, VI)}', correct: true },
        { latex: '\\ln u \\cdot u^v \\frac{dv}{dx}', correct: false },
        { latex: '0', correct: false },
        { latex: 'u^v', correct: false }
      ],
      explanation:
        'Si $v$ es constante, $\\frac{dv}{dx} = 0$ y el segundo término desaparece: queda la potencia.'
    },
    {
      id: 'dlogder-f-05',
      difficulty: 'easy',
      prompt: 'En la fórmula XII, si $u$ es constante, ¿en qué se reduce?',
      options: [
        { latex: '\\ln u \\cdot u^v \\frac{dv}{dx} \\text{ (exponencial de base } u\\text{, XI)}', correct: true },
        { latex: 'v u^{v-1} \\frac{du}{dx}', correct: false },
        { latex: '0', correct: false },
        { latex: 'u^v \\ln v', correct: false }
      ],
      explanation:
        'Si $u$ es constante, $\\frac{du}{dx} = 0$ y el primer término desaparece: queda la exponencial.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dlogder-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = x^x$',
      options: [
        { latex: 'x^x (\\ln x + 1)', correct: true },
        { latex: 'x \\cdot x^{x-1}', correct: false },
        { latex: 'x^x \\ln x', correct: false },
        { latex: 'x^x', correct: false }
      ],
      explanation:
        'Con $u = v = x$: $x \\cdot x^{x-1} + \\ln x \\cdot x^x = x^x + x^x \\ln x = x^x(1 + \\ln x)$.'
    },
    {
      id: 'dlogder-m-02',
      difficulty: 'medium',
      prompt: '¿Qué regla usas para derivar $f(x) = (x + 1)^{\\sin x}$?',
      options: [
        { latex: '\\text{Derivación logarítmica (XII)}', correct: true },
        { latex: '\\text{Solo potencia general (VI)}', correct: false },
        { latex: '\\text{Solo exponencial (XI)}', correct: false },
        { latex: '\\text{Regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'Base $(x+1)$ y exponente $\\sin x$: ambos dependen de $x$, así que aplica la fórmula XII.'
    },
    {
      id: 'dlogder-m-03',
      difficulty: 'medium',
      prompt: '¿Cuál es el primer término de la fórmula XII, $v u^{v-1} \\frac{du}{dx}$?',
      options: [
        { latex: '\\text{El aporte de derivar la base (como regla de la potencia)}', correct: true },
        { latex: '\\text{El aporte de derivar el exponente}', correct: false },
        { latex: '\\text{El logaritmo de la función}', correct: false },
        { latex: '\\text{Una constante de integración}', correct: false }
      ],
      explanation:
        'Trata el exponente como constante: es exactamente la regla de la potencia general (VI).'
    },
    {
      id: 'dlogder-m-04',
      difficulty: 'medium',
      prompt: 'Deriva $f(x) = 2^x$ usando la fórmula XII.',
      options: [
        { latex: '2^x \\ln 2', correct: true },
        { latex: 'x \\cdot 2^{x-1}', correct: false },
        { latex: '2^x', correct: false },
        { latex: '2^x \\ln x', correct: false }
      ],
      explanation:
        'Con $u = 2$ (constante) el primer término es 0: queda $\\ln 2 \\cdot 2^x \\cdot 1 = 2^x \\ln 2$ (fórmula XI).'
    },
    {
      id: 'dlogder-m-05',
      difficulty: 'medium',
      prompt: 'El segundo término de la fórmula XII, $\\ln u \\cdot u^v \\frac{dv}{dx}$, corresponde a...',
      options: [
        { latex: '\\text{Derivar el exponente (como regla exponencial)}', correct: true },
        { latex: '\\text{Derivar la base}', correct: false },
        { latex: '\\text{La regla del producto (V)}', correct: false },
        { latex: '\\text{La regla del cociente (VII)}', correct: false }
      ],
      explanation:
        'Trata la base como constante: es la regla exponencial (XI) aplicada al exponente $v$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dlogder-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^x$ para $x > 0$',
      options: [
        { latex: 'x^x(1 + \\ln x)', correct: true },
        { latex: 'x^x \\cdot x', correct: false },
        { latex: 'x^{x-1}(1 + \\ln x)', correct: false },
        { latex: 'x^x(1 - \\ln x)', correct: false }
      ],
      explanation:
        'Fórmula XII con $u = v = x$: $x \\cdot x^{x-1} + \\ln x \\cdot x^x = x^x(1 + \\ln x)$.'
    },
    {
      id: 'dlogder-h-02',
      difficulty: 'hard',
      prompt: 'Aplica la XII con $u = x^2$ y $v = 3$ (constante). ¿Qué resulta?',
      options: [
        { latex: '6x^5', correct: true },
        { latex: '3x^5 \\ln(x^2)', correct: false },
        { latex: '2x^3', correct: false },
        { latex: '6x^5 + \\ln(x^2) x^6', correct: false }
      ],
      explanation:
        'Como $v\' = 0$ solo queda el primer término: $3(x^2)^2 \\cdot 2x = 6x^5$. Coincide con la potencia: $(x^2)^3 = x^6$.'
    },
    {
      id: 'dlogder-h-03',
      difficulty: 'hard',
      prompt: '¿Por qué $f(x) = x^{\\sin x}$ no se deriva con la regla de la potencia?',
      options: [
        { latex: '\\text{Porque el exponente } \\sin x \\text{ no es constante}', correct: true },
        { latex: '\\text{Porque la base es } x', correct: false },
        { latex: '\\text{Porque } \\sin x \\text{ no tiene derivada}', correct: false },
        { latex: '\\text{Sí se puede: } (\\sin x) x^{\\sin x - 1}', correct: false }
      ],
      explanation:
        'La potencia (VI) exige exponente constante. Aquí ambos varían: se necesita la fórmula XII.'
    },
    {
      id: 'dlogder-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = x^e$',
      options: [
        { latex: 'e x^{e-1}', correct: true },
        { latex: 'x^e \\ln x', correct: false },
        { latex: 'e x^e', correct: false },
        { latex: 'x^e(\\ln x + e)', correct: false }
      ],
      explanation:
        'El exponente $e$ es constante: es potencia (VIa), no derivación logarítmica. Queda $e x^{e-1}$.'
    },
    {
      id: 'dlogder-h-05',
      difficulty: 'hard',
      prompt: 'Deriva $f(x) = 3^{2x}$ usando la fórmula XII.',
      options: [
        { latex: '3^{2x} \\ln 3 \\cdot 2', correct: true },
        { latex: '2x \\cdot 3^{2x-1}', correct: false },
        { latex: '3^{2x} \\ln(2x)', correct: false },
        { latex: '3^{2x} \\cdot 2', correct: false }
      ],
      explanation:
        'Con $u = 3$ constante, solo queda el segundo término: $\\ln 3 \\cdot 3^{2x} \\cdot 2$.'
    }
  ]
};
