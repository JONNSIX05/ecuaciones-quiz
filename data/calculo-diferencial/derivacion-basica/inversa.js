// data/calculo-diferencial/derivacion-basica/inversa.js
// Ley (fórmula IX): Derivación de la función inversa  ->  dy/dx = 1 / (dx/dy).

export default {
  lawId: 'der-funcion-inversa',
  lawName: 'Derivación de la función inversa',
  lawFormula: '\\frac{dy}{dx} = \\frac{1}{\\frac{dx}{dy}}',
  prerequisites: 'Despejar variables y derivar respecto a otra variable.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'dinv-f-01',
      difficulty: 'easy',
      prompt: '¿Cuál es la fórmula IX (derivación de la función inversa)?',
      options: [
        { latex: '\\frac{dy}{dx} = \\frac{1}{\\frac{dx}{dy}}', correct: true },
        { latex: '\\frac{dy}{dx} = \\frac{dx}{dy}', correct: false },
        { latex: '\\frac{dy}{dx} = -\\frac{dx}{dy}', correct: false },
        { latex: '\\frac{dy}{dx} = \\frac{dx}{dy} \\cdot \\frac{dy}{dx}', correct: false }
      ],
      explanation:
        'La derivada de la función inversa es el recíproco de la derivada directa.'
    },
    {
      id: 'dinv-f-02',
      difficulty: 'easy',
      prompt: 'Si $\\frac{dx}{dy} = 2$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '2', correct: false },
        { latex: '-2', correct: false },
        { latex: '0', correct: false }
      ],
      explanation:
        'Fórmula IX: $\\frac{dy}{dx} = \\frac{1}{2}$.'
    },
    {
      id: 'dinv-f-03',
      difficulty: 'easy',
      prompt: '¿Cuándo conviene usar la fórmula IX?',
      options: [
        { latex: '\\text{Cuando } x \\text{ está dada en función de } y', correct: true },
        { latex: '\\text{Cuando hay una composición de funciones}', correct: false },
        { latex: '\\text{Siempre que haya una fracción}', correct: false },
        { latex: '\\text{Cuando la función es constante}', correct: false }
      ],
      explanation:
        'Si despejar $y$ es difícil pero $x = g(y)$ es simple, se deriva $x$ respecto a $y$ y se toma el recíproco.'
    },
    {
      id: 'dinv-f-04',
      difficulty: 'easy',
      prompt: 'Si $x = y^3$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{3y^2}', correct: true },
        { latex: '3y^2', correct: false },
        { latex: '\\frac{1}{y^2}', correct: false },
        { latex: 'y^2', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = 3y^2$; por la fórmula IX: $\\frac{dy}{dx} = \\frac{1}{3y^2}$.'
    },
    {
      id: 'dinv-f-05',
      difficulty: 'easy',
      prompt: 'Para que la fórmula IX esté definida se necesita...',
      options: [
        { latex: '\\frac{dx}{dy} \\neq 0', correct: true },
        { latex: '\\frac{dx}{dy} > 0', correct: false },
        { latex: 'y = x', correct: false },
        { latex: '\\frac{dx}{dy} = 1', correct: false }
      ],
      explanation:
        'Se toma el recíproco: si $\\frac{dx}{dy} = 0$ la expresión no está definida.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'dinv-m-01',
      difficulty: 'medium',
      prompt: 'Si $x = 2y + 1$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '2', correct: false },
        { latex: '1', correct: false },
        { latex: '\\frac{1}{2y + 1}', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = 2$; recíproco: $\\frac{1}{2}$.'
    },
    {
      id: 'dinv-m-02',
      difficulty: 'medium',
      prompt: 'Si $x = y^2$ con $y > 0$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{2y}', correct: true },
        { latex: '2y', correct: false },
        { latex: '\\frac{1}{y}', correct: false },
        { latex: '\\frac{1}{2x}', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = 2y$; por IX: $\\frac{dy}{dx} = \\frac{1}{2y}$. (Coincide con derivar $y = \\sqrt{x}$.)'
    },
    {
      id: 'dinv-m-03',
      difficulty: 'medium',
      prompt: '¿Cuál expresión es igual a $\\frac{dy}{dx}$ según la fórmula IX?',
      options: [
        { latex: '\\left(\\frac{dx}{dy}\\right)^{-1}', correct: true },
        { latex: '\\left(\\frac{dx}{dy}\\right)^2', correct: false },
        { latex: '-\\frac{dx}{dy}', correct: false },
        { latex: '\\frac{dx}{dy} + 1', correct: false }
      ],
      explanation:
        'El recíproco: elevar a $-1$ es lo mismo que invertir la fracción.'
    },
    {
      id: 'dinv-m-04',
      difficulty: 'medium',
      prompt: 'Si $x = \\sin y$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{\\cos y}', correct: true },
        { latex: '\\cos y', correct: false },
        { latex: '-\\frac{1}{\\cos y}', correct: false },
        { latex: '\\frac{1}{\\sin y}', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = \\cos y$; por IX: $\\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y$. Así se deriva $\\arcsin x$.'
    },
    {
      id: 'dinv-m-05',
      difficulty: 'medium',
      prompt: 'La fórmula IX relaciona las pendientes de una función y su inversa como...',
      options: [
        { latex: '\\text{Recíprocas: } m_{\\text{inv}} = \\frac{1}{m}', correct: true },
        { latex: '\\text{Opuestas: } m_{\\text{inv}} = -m', correct: false },
        { latex: '\\text{Iguales: } m_{\\text{inv}} = m', correct: false },
        { latex: '\\text{Cuadradas: } m_{\\text{inv}} = m^2', correct: false }
      ],
      explanation:
        'Las gráficas de $f$ y $f^{-1}$ son simétricas respecto a $y = x$: sus pendientes en puntos correspondientes son recíprocas.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'dinv-h-01',
      difficulty: 'hard',
      prompt: 'Si $x = e^y$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: 'e^{-y}', correct: true },
        { latex: 'e^y', correct: false },
        { latex: '\\frac{1}{y}', correct: false },
        { latex: '-e^y', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = e^y$; por IX: $\\frac{dy}{dx} = \\frac{1}{e^y} = e^{-y}$. Así se deriva $\\ln x$.'
    },
    {
      id: 'dinv-h-02',
      difficulty: 'hard',
      prompt: 'Si $x = \\ln y$ (con $y > 0$), ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: 'y', correct: true },
        { latex: '\\frac{1}{y}', correct: false },
        { latex: 'e^x', correct: false },
        { latex: '\\ln y', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = \\frac{1}{y}$; por IX: $\\frac{dy}{dx} = y$.'
    },
    {
      id: 'dinv-h-03',
      difficulty: 'hard',
      prompt: 'Si $\\frac{dx}{dy} = 0$ en un punto, la fórmula IX indica que $\\frac{dy}{dx}$ es...',
      options: [
        { latex: '\\text{No está definida (tangente vertical)}', correct: true },
        { latex: '0', correct: false },
        { latex: '1', correct: false },
        { latex: '-1', correct: false }
      ],
      explanation:
        'El recíproco de 0 no existe: la función inversa tendría tangente vertical en ese punto.'
    },
    {
      id: 'dinv-h-04',
      difficulty: 'hard',
      prompt: 'Si $x = y^3 + y$ y $y = 1$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{4}', correct: true },
        { latex: '4', correct: false },
        { latex: '\\frac{1}{3}', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = 3y^2 + 1 = 4$ en $y = 1$; por IX: $\\frac{dy}{dx} = \\frac{1}{4}$.'
    },
    {
      id: 'dinv-h-05',
      difficulty: 'hard',
      prompt: 'Si $x = y + e^y$ y $y = 0$, ¿cuánto vale $\\frac{dy}{dx}$?',
      options: [
        { latex: '\\frac{1}{2}', correct: true },
        { latex: '2', correct: false },
        { latex: '1', correct: false },
        { latex: '\\frac{1}{e}', correct: false }
      ],
      explanation:
        '$\\frac{dx}{dy} = 1 + e^y = 2$ en $y = 0$; por IX: $\\frac{dy}{dx} = \\frac{1}{2}$.'
    }
  ]
};
