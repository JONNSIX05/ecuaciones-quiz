// data/calculo-diferencial/derivacion/preguntas-log-exp.js
// Pool de derivación — Bloque X–XII: logarítmicas, exponenciales y
// derivación logarítmica. 30 preguntas (10 easy / 10 medium / 10 hard).

export default [
  // ================= Exponencial (XI / XIa) — 4/3/3 =================
  {
    id: 'derl-f-01',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = e^x$',
    options: [
      { latex: 'e^x', correct: true },
      { latex: 'x e^{x-1}', correct: false },
      { latex: '\\ln x', correct: false },
      { latex: 'e', correct: false }
    ],
    explanation: 'Fórmula XIa con $v = x$: $e^x$ es la única función igual a su propia derivada.'
  },
  {
    id: 'derl-f-02',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = 2^x$',
    options: [
      { latex: '2^x \\ln 2', correct: true },
      { latex: 'x \\cdot 2^{x-1}', correct: false },
      { latex: '2^x', correct: false },
      { latex: '\\frac{2^x}{x}', correct: false }
    ],
    explanation: 'Fórmula XI con base $a = 2$: aparece el factor $\\ln 2$.'
  },
  {
    id: 'derl-f-03',
    difficulty: 'easy',
    prompt: '¿Qué función es igual a su propia derivada?',
    options: [
      { latex: 'f(x) = e^x', correct: true },
      { latex: 'f(x) = x^e', correct: false },
      { latex: 'f(x) = \\ln x', correct: false },
      { latex: 'f(x) = x^x', correct: false }
    ],
    explanation: '$\\frac{d}{dx}(e^x) = e^x$: por eso $e$ es la base natural. $x^e$ es una potencia y $\\ln x$ deriva $\\frac{1}{x}$.'
  },
  {
    id: 'derl-f-04',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula XI para $\\frac{d}{dx}(a^v)$?',
    options: [
      { latex: 'a^v \\ln a \\cdot \\frac{dv}{dx}', correct: true },
      { latex: 'v a^{v-1} \\frac{da}{dx}', correct: false },
      { latex: 'a^v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '\\frac{a^v}{\\ln a} \\cdot \\frac{dv}{dx}', correct: false }
    ],
    explanation: 'La exponencial se queda y se multiplica por $\\ln a$ y por la derivada del exponente.'
  },
  {
    id: 'derl-m-01',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = 3^x$',
    options: [
      { latex: '3^x \\ln 3', correct: true },
      { latex: 'x \\cdot 3^{x-1}', correct: false },
      { latex: '3^x', correct: false },
      { latex: '\\frac{3^x}{\\ln 3}', correct: false }
    ],
    explanation: 'Fórmula XI: $a^v \\ln a \\cdot \\frac{dv}{dx} = 3^x \\ln 3 \\cdot 1$.'
  },
  {
    id: 'derl-m-02',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = 2e^x$',
    options: [
      { latex: '2e^x', correct: true },
      { latex: '2x e^x', correct: false },
      { latex: 'e^x', correct: false },
      { latex: '2e', correct: false }
    ],
    explanation: 'Constante por función (IV) + XIa: $2 \\cdot e^x = 2e^x$.'
  },
  {
    id: 'derl-m-03',
    difficulty: 'medium',
    prompt: '¿Cuál es la diferencia entre derivar $x^2$ y $2^x$?',
    options: [
      { latex: 'x^2 \\text{ usa potencia (VIa); } 2^x \\text{ usa exponencial (XI)}', correct: true },
      { latex: '\\text{Ambas usan la regla de la potencia}', correct: false },
      { latex: '\\text{Ambas usan la fórmula XI}', correct: false },
      { latex: 'x^2 \\text{ usa exponencial; } 2^x \\text{ usa potencia}', correct: false }
    ],
    explanation: 'En $x^2$ la base es variable (potencia): $2x$. En $2^x$ el exponente es variable (exponencial): $2^x \\ln 2$.'
  },
  {
    id: 'derl-h-01',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = e^{x^2}$',
    options: [
      { latex: '2x e^{x^2}', correct: true },
      { latex: 'e^{x^2}', correct: false },
      { latex: 'x^2 e^{x^2 - 1}', correct: false },
      { latex: '2 e^{x^2}', correct: false }
    ],
    explanation: 'XIa con cadena: $e^{x^2} \\cdot (x^2)\' = 2x e^{x^2}$.'
  },
  {
    id: 'derl-h-02',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = e^{-x}$',
    options: [
      { latex: '-e^{-x}', correct: true },
      { latex: 'e^{-x}', correct: false },
      { latex: '-x e^{-x-1}', correct: false },
      { latex: '\\frac{1}{e^x} \\ln(-x)', correct: false }
    ],
    explanation: 'XIa con cadena: $e^{-x} \\cdot (-1) = -e^{-x}$.'
  },
  {
    id: 'derl-h-03',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = e^x + x^e$',
    options: [
      { latex: 'e^x + e x^{e-1}', correct: true },
      { latex: 'e^x + x^e \\ln x', correct: false },
      { latex: 'e^x + e x^e', correct: false },
      { latex: 'e^x + e^x', correct: false }
    ],
    explanation: '$e^x$ es exponencial (XIa): deriva $e^x$. $x^e$ es potencia de $x$ con exponente constante (VIa): $e x^{e-1}$.'
  },

  // ================= Logarítmica (X / Xa) — 3/4/3 =================
  {
    id: 'derl-f-05',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\ln x$',
    options: [
      { latex: '\\frac{1}{x}', correct: true },
      { latex: '\\ln x', correct: false },
      { latex: '\\frac{1}{x^2}', correct: false },
      { latex: 'e^x', correct: false }
    ],
    explanation: 'Fórmula X con $v = x$: $\\frac{1}{x}$.'
  },
  {
    id: 'derl-f-06',
    difficulty: 'easy',
    prompt: 'Deriva: $f(x) = \\ln 5$',
    options: [
      { latex: '0', correct: true },
      { latex: '\\frac{1}{5}', correct: false },
      { latex: '\\ln 5', correct: false },
      { latex: '\\frac{1}{x}', correct: false }
    ],
    explanation: '$\\ln 5$ es una constante: se usa la fórmula I, no la X. Deriva 0.'
  },
  {
    id: 'derl-f-07',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula X para $\\frac{d}{dx}(\\ln v)$?',
    options: [
      { latex: '\\frac{\\frac{dv}{dx}}{v}', correct: true },
      { latex: 'v \\cdot \\frac{dv}{dx}', correct: false },
      { latex: '\\frac{v}{\\frac{dv}{dx}}', correct: false },
      { latex: '\\ln v \\cdot \\frac{dv}{dx}', correct: false }
    ],
    explanation: 'La derivada del argumento va en el numerador y el argumento en el denominador.'
  },
  {
    id: 'derl-m-04',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\ln(3x)$',
    options: [
      { latex: '\\frac{1}{x}', correct: true },
      { latex: '\\frac{1}{3x}', correct: false },
      { latex: '\\frac{3}{x}', correct: false },
      { latex: '\\frac{1}{3}', correct: false }
    ],
    explanation: 'Fórmula X con cadena: $\\frac{(3x)\'}{3x} = \\frac{3}{3x} = \\frac{1}{x}$.'
  },
  {
    id: 'derl-m-05',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\ln(x^2)$',
    options: [
      { latex: '\\frac{2}{x}', correct: true },
      { latex: '\\frac{1}{x^2}', correct: false },
      { latex: '\\frac{2x}{x}', correct: false },
      { latex: '\\frac{1}{2x}', correct: false }
    ],
    explanation: 'Fórmula X con cadena: $\\frac{2x}{x^2} = \\frac{2}{x}$.'
  },
  {
    id: 'derl-m-06',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = \\log x$',
    options: [
      { latex: '\\frac{1}{x \\ln 10}', correct: true },
      { latex: '\\frac{1}{x}', correct: false },
      { latex: '\\frac{\\ln 10}{x}', correct: false },
      { latex: '\\frac{1}{10x}', correct: false }
    ],
    explanation: 'Fórmula Xa: $\\frac{\\log e}{x}$, y como $\\log e = \\frac{1}{\\ln 10}$, queda $\\frac{1}{x \\ln 10}$.'
  },
  {
    id: 'derl-m-07',
    difficulty: 'medium',
    prompt: '¿Qué regla usas para derivar $f(x) = \\log x$ (logaritmo decimal)?',
    options: [
      { latex: '\\text{Logaritmo decimal (Xa)}', correct: true },
      { latex: '\\text{Logaritmo natural (X), sin más}', correct: false },
      { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
      { latex: '\\text{Exponencial base } a \\text{ (XI)}', correct: false }
    ],
    explanation: 'Para base 10 aplica la fórmula Xa: $\\frac{d}{dx}(\\log x) = \\frac{\\log e}{x} = \\frac{1}{x \\ln 10}$.'
  },
  {
    id: 'derl-h-04',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\ln(x^2 + 1)$',
    options: [
      { latex: '\\frac{2x}{x^2 + 1}', correct: true },
      { latex: '\\frac{1}{x^2 + 1}', correct: false },
      { latex: '\\frac{x}{x^2 + 1}', correct: false },
      { latex: '2x \\ln(x^2 + 1)', correct: false }
    ],
    explanation: 'Fórmula X con cadena: $\\frac{(x^2+1)\'}{x^2+1} = \\frac{2x}{x^2+1}$.'
  },
  {
    id: 'derl-h-05',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\ln(\\sin x)$',
    options: [
      { latex: '\\cot x', correct: true },
      { latex: '\\frac{1}{\\sin x}', correct: false },
      { latex: '\\tan x', correct: false },
      { latex: '\\cos x', correct: false }
    ],
    explanation: 'Fórmula X con cadena: $\\frac{\\cos x}{\\sin x} = \\cot x$.'
  },
  {
    id: 'derl-h-06',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = \\log_2 x$',
    options: [
      { latex: '\\frac{1}{x \\ln 2}', correct: true },
      { latex: '\\frac{1}{x}', correct: false },
      { latex: '\\frac{\\ln 2}{x}', correct: false },
      { latex: '\\frac{1}{2x}', correct: false }
    ],
    explanation: 'Fórmula Xa generalizada: $\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$. Con $a = 2$: $\\frac{1}{x \\ln 2}$.'
  },

  // ================= Derivación logarítmica (XII) — 3/3/4 =================
  {
    id: 'derl-f-08',
    difficulty: 'easy',
    prompt: '¿Qué regla usas para derivar $f(x) = x^x$?',
    options: [
      { latex: '\\text{Derivación logarítmica (XII)}', correct: true },
      { latex: '\\text{Regla de la potencia (VIa)}', correct: false },
      { latex: '\\text{Exponencial natural (XIa)}', correct: false },
      { latex: '\\text{Regla del producto (V)}', correct: false }
    ],
    explanation: 'Base $x$ y exponente $x$: ambos dependen de $x$. No es potencia ni exponencial pura.'
  },
  {
    id: 'derl-f-09',
    difficulty: 'easy',
    prompt: 'En la fórmula XII, si $v$ es constante, ¿en qué se reduce?',
    options: [
      { latex: 'v u^{v-1} \\frac{du}{dx} \\text{ (regla de la potencia general, VI)}', correct: true },
      { latex: '\\ln u \\cdot u^v \\frac{dv}{dx}', correct: false },
      { latex: '0', correct: false },
      { latex: 'u^v', correct: false }
    ],
    explanation: 'Si $v$ es constante, $\\frac{dv}{dx} = 0$ y el segundo término desaparece: queda la potencia.'
  },
  {
    id: 'derl-f-10',
    difficulty: 'easy',
    prompt: '¿Cuándo se usa la derivación logarítmica (fórmula XII)?',
    options: [
      { latex: '\\text{Cuando la base y el exponente son funciones de } x', correct: true },
      { latex: '\\text{Siempre que aparezca un logaritmo}', correct: false },
      { latex: '\\text{Cuando la base es constante}', correct: false },
      { latex: '\\text{Cuando el exponente es constante}', correct: false }
    ],
    explanation: 'Si el exponente es constante basta la potencia (VI); si la base es constante, la exponencial (XI). La XII es para $u(x)^{v(x)}$.'
  },
  {
    id: 'derl-m-08',
    difficulty: 'medium',
    prompt: 'Deriva: $f(x) = x^x$',
    options: [
      { latex: 'x^x (\\ln x + 1)', correct: true },
      { latex: 'x \\cdot x^{x-1}', correct: false },
      { latex: 'x^x \\ln x', correct: false },
      { latex: 'x^x', correct: false }
    ],
    explanation: 'Con $u = v = x$: $x \\cdot x^{x-1} + \\ln x \\cdot x^x = x^x + x^x \\ln x = x^x(1 + \\ln x)$.'
  },
  {
    id: 'derl-m-09',
    difficulty: 'medium',
    prompt: '¿Qué regla usas para derivar $f(x) = (x + 1)^{\\sin x}$?',
    options: [
      { latex: '\\text{Derivación logarítmica (XII)}', correct: true },
      { latex: '\\text{Solo potencia general (VI)}', correct: false },
      { latex: '\\text{Solo exponencial (XI)}', correct: false },
      { latex: '\\text{Regla del cociente (VII)}', correct: false }
    ],
    explanation: 'Base $(x+1)$ y exponente $\\sin x$: ambos dependen de $x$, así que aplica la fórmula XII.'
  },
  {
    id: 'derl-m-10',
    difficulty: 'medium',
    prompt: 'Deriva $f(x) = 2^x$ usando la fórmula XII.',
    options: [
      { latex: '2^x \\ln 2', correct: true },
      { latex: 'x \\cdot 2^{x-1}', correct: false },
      { latex: '2^x', correct: false },
      { latex: '2^x \\ln x', correct: false }
    ],
    explanation: 'Con $u = 2$ (constante) el primer término es 0: queda $\\ln 2 \\cdot 2^x \\cdot 1 = 2^x \\ln 2$ (fórmula XI).'
  },
  {
    id: 'derl-h-07',
    difficulty: 'hard',
    prompt: 'Aplica la XII con $u = x^2$ y $v = 3$ (constante). ¿Qué resulta?',
    options: [
      { latex: '6x^5', correct: true },
      { latex: '3x^5 \\ln(x^2)', correct: false },
      { latex: '2x^3', correct: false },
      { latex: '6x^5 + \\ln(x^2) x^6', correct: false }
    ],
    explanation: 'Como $v\' = 0$ solo queda el primer término: $3(x^2)^2 \\cdot 2x = 6x^5$. Coincide con la potencia: $(x^2)^3 = x^6$.'
  },
  {
    id: 'derl-h-08',
    difficulty: 'hard',
    prompt: '¿Por qué $f(x) = x^{\\sin x}$ no se deriva con la regla de la potencia?',
    options: [
      { latex: '\\text{Porque el exponente } \\sin x \\text{ no es constante}', correct: true },
      { latex: '\\text{Porque la base es } x', correct: false },
      { latex: '\\text{Porque } \\sin x \\text{ no tiene derivada}', correct: false },
      { latex: '\\text{Sí se puede: } (\\sin x) x^{\\sin x - 1}', correct: false }
    ],
    explanation: 'La potencia (VI) exige exponente constante. Aquí ambos varían: se necesita la fórmula XII.'
  },
  {
    id: 'derl-h-09',
    difficulty: 'hard',
    prompt: 'Deriva: $f(x) = x^e$',
    options: [
      { latex: 'e x^{e-1}', correct: true },
      { latex: 'x^e \\ln x', correct: false },
      { latex: 'e x^e', correct: false },
      { latex: 'x^e(\\ln x + e)', correct: false }
    ],
    explanation: 'El exponente $e$ es constante: es potencia (VIa), no derivación logarítmica. Queda $e x^{e-1}$.'
  },
  {
    id: 'derl-h-10',
    difficulty: 'hard',
    prompt: 'Deriva $f(x) = 3^{2x}$ usando la fórmula XII.',
    options: [
      { latex: '3^{2x} \\ln 3 \\cdot 2', correct: true },
      { latex: '2x \\cdot 3^{2x-1}', correct: false },
      { latex: '3^{2x} \\ln(2x)', correct: false },
      { latex: '3^{2x} \\cdot 2', correct: false }
    ],
    explanation: 'Con $u = 3$ constante, solo queda el segundo término: $\\ln 3 \\cdot 3^{2x} \\cdot 2$.'
  }
];
