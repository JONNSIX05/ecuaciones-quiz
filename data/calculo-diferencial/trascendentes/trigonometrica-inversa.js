// data/calculo-diferencial/trascendentes/trigonometrica-inversa.js
// Ley (fórmulas XX–XXVI): Trigonométricas inversas.

export default {
  lawId: 'der-trig-inversa',
  lawName: 'Derivada de funciones trigonométricas inversas',
  lawFormula: '\\frac{d}{dx}(\\arcsin v) = \\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}',
  prerequisites: 'Funciones inversas y regla de la cadena.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dinvtrig-f-01',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\arcsin x$',
      options: [
        { latex: '\\frac{1}{\\sqrt{1 - x^2}}', correct: true },
        { latex: '-\\frac{1}{\\sqrt{1 - x^2}}', correct: false },
        { latex: '\\frac{1}{1 + x^2}', correct: false },
        { latex: '\\cos x', correct: false }
      ],
      explanation:
        'Fórmula XX con $v = x$. No es $\\cos x$: la derivada no es la función inversa del coseno.'
    },
    {
      id: 'dinvtrig-f-02',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\arccos x$',
      options: [
        { latex: '-\\frac{1}{\\sqrt{1 - x^2}}', correct: true },
        { latex: '\\frac{1}{\\sqrt{1 - x^2}}', correct: false },
        { latex: '-\\frac{1}{\\sqrt{1 + x^2}}', correct: false },
        { latex: '\\frac{1}{1 + x^2}', correct: false }
      ],
      explanation:
        'Fórmula XXI: igual que el arcoseno pero con signo negativo.'
    },
    {
      id: 'dinvtrig-f-03',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula XXII para $\\frac{d}{dx}(\\arctan v)$?',
      options: [
        { latex: '\\frac{\\frac{dv}{dx}}{1 + v^2}', correct: true },
        { latex: '\\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}', correct: false },
        { latex: '\\frac{\\frac{dv}{dx}}{1 - v^2}', correct: false },
        { latex: '\\frac{\\frac{dv}{dx}}{v^2 + v}', correct: false }
      ],
      explanation:
        'La arcotangente deriva $\\frac{1}{1 + v^2}$ por la derivada del argumento.'
    },
    {
      id: 'dinvtrig-f-04',
      difficulty: 'easy',
      prompt: 'Deriva: $f(x) = \\arctan x$',
      options: [
        { latex: '\\frac{1}{1 + x^2}', correct: true },
        { latex: '\\frac{1}{\\sqrt{1 + x^2}}', correct: false },
        { latex: '-\\frac{1}{1 + x^2}', correct: false },
        { latex: '\\frac{1}{1 - x^2}', correct: false }
      ],
      explanation:
        'Fórmula XXII con $v = x$.'
    },
    {
      id: 'dinvtrig-f-05',
      difficulty: 'easy',
      prompt: '¿Qué regla usas para derivar $f(x) = \\arcsin x$?',
      options: [
        { latex: '\\text{Derivada del arcoseno (XX)}', correct: true },
        { latex: '\\text{Derivada del seno (XIII)}', correct: false },
        { latex: '\\text{Derivación de la función inversa (IX) directamente}', correct: false },
        { latex: '\\text{Regla de la potencia (VIa)}', correct: false }
      ],
      explanation:
        'Es una función trigonométrica inversa: se usa su fórmula directa (XX).'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dinvtrig-m-01',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\operatorname{arccot} x$',
      options: [
        { latex: '-\\frac{1}{1 + x^2}', correct: true },
        { latex: '\\frac{1}{1 + x^2}', correct: false },
        { latex: '-\\frac{1}{\\sqrt{1 - x^2}}', correct: false },
        { latex: '\\frac{1}{x^2}', correct: false }
      ],
      explanation:
        'Fórmula XXIII: igual que la arcotangente pero con signo negativo.'
    },
    {
      id: 'dinvtrig-m-02',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\operatorname{arcsec} x$ (con $x > 1$)',
      options: [
        { latex: '\\frac{1}{x \\sqrt{x^2 - 1}}', correct: true },
        { latex: '\\frac{1}{x \\sqrt{1 - x^2}}', correct: false },
        { latex: '\\frac{1}{\\sqrt{x^2 - 1}}', correct: false },
        { latex: '-\\frac{1}{x \\sqrt{x^2 - 1}}', correct: false }
      ],
      explanation:
        'Fórmula XXIV con $v = x$: denominador $x \\sqrt{x^2 - 1}$.'
    },
    {
      id: 'dinvtrig-m-03',
      difficulty: 'medium',
      prompt: '¿Cuál es la fórmula XXV para $\\frac{d}{dx}(\\operatorname{arccsc} v)$?',
      options: [
        { latex: '-\\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}', correct: true },
        { latex: '\\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}', correct: false },
        { latex: '-\\frac{\\frac{dv}{dx}}{v \\sqrt{1 - v^2}}', correct: false },
        { latex: '\\frac{\\frac{dv}{dx}}{1 + v^2}', correct: false }
      ],
      explanation:
        'La arcocosecante deriva la expresión de la arcosecante con signo negativo.'
    },
    {
      id: 'dinvtrig-m-04',
      difficulty: 'medium',
      prompt: 'Deriva: $f(x) = \\operatorname{arccsc} x$ (con $x > 1$)',
      options: [
        { latex: '-\\frac{1}{x \\sqrt{x^2 - 1}}', correct: true },
        { latex: '\\frac{1}{x \\sqrt{x^2 - 1}}', correct: false },
        { latex: '-\\frac{1}{\\sqrt{x^2 - 1}}', correct: false },
        { latex: '\\frac{1}{x \\sqrt{1 + x^2}}', correct: false }
      ],
      explanation:
        'Fórmula XXV con $v = x$.'
    },
    {
      id: 'dinvtrig-m-05',
      difficulty: 'medium',
      prompt: '¿Qué par de derivadas difiere solo en el signo?',
      options: [
        { latex: '\\arctan x \\text{ y } \\operatorname{arccot} x', correct: true },
        { latex: '\\arcsin x \\text{ y } \\arctan x', correct: false },
        { latex: '\\arctan x \\text{ y } \\operatorname{arcsec} x', correct: false },
        { latex: '\\arcsin x \\text{ y } \\operatorname{arccsc} x', correct: false }
      ],
      explanation:
        '$\\frac{1}{1+x^2}$ contra $-\\frac{1}{1+x^2}$. Lo mismo pasa con arcsen/arccos y arcsec/arccsc.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dinvtrig-h-01',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\arctan(x^2)$',
      options: [
        { latex: '\\frac{2x}{1 + x^4}', correct: true },
        { latex: '\\frac{1}{1 + x^4}', correct: false },
        { latex: '\\frac{2x}{1 + 2x}', correct: false },
        { latex: '\\frac{2x}{\\sqrt{1 - x^4}}', correct: false }
      ],
      explanation:
        'Fórmula XXII con cadena: $\\frac{(x^2)\'}{1 + (x^2)^2} = \\frac{2x}{1 + x^4}$.'
    },
    {
      id: 'dinvtrig-h-02',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\arcsin(2x)$',
      options: [
        { latex: '\\frac{2}{\\sqrt{1 - 4x^2}}', correct: true },
        { latex: '\\frac{1}{\\sqrt{1 - 4x^2}}', correct: false },
        { latex: '\\frac{2}{\\sqrt{1 - 2x^2}}', correct: false },
        { latex: '\\frac{2}{1 + 4x^2}', correct: false }
      ],
      explanation:
        'Fórmula XX con cadena: $\\frac{(2x)\'}{\\sqrt{1 - (2x)^2}} = \\frac{2}{\\sqrt{1 - 4x^2}}$.'
    },
    {
      id: 'dinvtrig-h-03',
      difficulty: 'hard',
      prompt: '¿Cuál es la fórmula XXVI para $\\frac{d}{dx}(\\operatorname{arcvers} v)$?',
      options: [
        { latex: '\\frac{\\frac{dv}{dx}}{\\sqrt{2v - v^2}}', correct: true },
        { latex: '\\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}', correct: false },
        { latex: '\\frac{\\frac{dv}{dx}}{\\sqrt{2v + v^2}}', correct: false },
        { latex: '\\frac{\\frac{dv}{dx}}{2v - v^2}', correct: false }
      ],
      explanation:
        'El arco verso deriva $\\frac{1}{\\sqrt{2v - v^2}}$ por la derivada del argumento.'
    },
    {
      id: 'dinvtrig-h-04',
      difficulty: 'hard',
      prompt: 'Deriva: $f(x) = \\operatorname{arcsec}(e^x)$',
      options: [
        { latex: '\\frac{1}{\\sqrt{e^{2x} - 1}}', correct: true },
        { latex: '\\frac{e^x}{\\sqrt{e^{2x} - 1}}', correct: false },
        { latex: '\\frac{1}{e^x \\sqrt{1 - e^{2x}}}', correct: false },
        { latex: '\\frac{e^x}{e^{2x} - 1}', correct: false }
      ],
      explanation:
        'Fórmula XXIV con cadena: $\\frac{e^x}{e^x \\sqrt{e^{2x} - 1}} = \\frac{1}{\\sqrt{e^{2x} - 1}}$.'
    },
    {
      id: 'dinvtrig-h-05',
      difficulty: 'hard',
      prompt: '¿Qué reglas usas para derivar $f(x) = \\arctan(3x + 1)$?',
      options: [
        { latex: '\\text{Arcotangente (XXII) + cadena (VIII)}', correct: true },
        { latex: '\\text{Solo arcotangente (XXII)}', correct: false },
        { latex: '\\text{Tangente (XV) + cadena (VIII)}', correct: false },
        { latex: '\\text{Cociente (VII)}', correct: false }
      ],
      explanation:
        'El argumento no es $x$: fórmula XXII multiplicada por $(3x + 1)\' = 3$. Queda $\\frac{3}{1 + (3x+1)^2}$.'
    }
  ]
};
