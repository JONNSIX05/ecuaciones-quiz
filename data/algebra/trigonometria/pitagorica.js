// data/algebra/trigonometria/pitagorica.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "trig-pitagorica",
  lawName: "Identidad pitagórica",
  lawFormula: "\\sin^2 x + \\cos^2 x = 1",
  prerequisites: "Conocer las funciones trigonométricas seno y coseno.",
  available: true,
  questions: [
  {
    "id": "trigpit-f-01",
    "difficulty": "easy",
    "prompt": "¿Cuál es la identidad pitagórica fundamental?",
    "options": [
      {
        "latex": "\\sin^2 x + \\cos^2 x = 1",
        "correct": true
      },
      {
        "latex": "\\sin^2 x - \\cos^2 x = 1",
        "correct": false
      },
      {
        "latex": "\\sin^2 x + \\cos^2 x = 0",
        "correct": false
      },
      {
        "latex": "\\sin x + \\cos x = 1",
        "correct": false
      }
    ],
    "explanation": "La identidad fundamental es $\\sin^2 x + \\cos^2 x = 1$. Vale para cualquier ángulo $x$."
  },
  {
    "id": "trigpit-f-02",
    "difficulty": "easy",
    "prompt": "Si $\\sin x = \\frac{3}{5}$, ¿cuánto vale $\\cos^2 x$?",
    "options": [
      {
        "latex": "\\frac{16}{25}",
        "correct": true
      },
      {
        "latex": "\\frac{4}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{9}{25}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}",
        "correct": false
      }
    ],
    "explanation": "$\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$."
  },
  {
    "id": "trigpit-f-03",
    "difficulty": "easy",
    "prompt": "Despeja $\\sin^2 x$ de la identidad $\\sin^2 x + \\cos^2 x = 1$",
    "options": [
      {
        "latex": "\\sin^2 x = 1 - \\cos^2 x",
        "correct": true
      },
      {
        "latex": "\\sin^2 x = 1 + \\cos^2 x",
        "correct": false
      },
      {
        "latex": "\\sin^2 x = \\cos^2 x - 1",
        "correct": false
      },
      {
        "latex": "\\sin^2 x = \\cos^2 x",
        "correct": false
      }
    ],
    "explanation": "Restando $\\cos^2 x$ a ambos lados: $\\sin^2 x = 1 - \\cos^2 x$."
  },
  {
    "id": "trigpit-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $\\sin^2 x + \\cos^2 x$?",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\sin 2x",
        "correct": false
      }
    ],
    "explanation": "$\\sin^2 x + \\cos^2 x = 1$ para todo $x$."
  },
  {
    "id": "trigpit-f-05",
    "difficulty": "easy",
    "prompt": "Si $\\cos x = \\frac{1}{2}$, ¿cuánto vale $\\sin^2 x$?",
    "options": [
      {
        "latex": "\\frac{3}{4}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\sin^2 x = 1 - \\cos^2 x = 1 - \\frac{1}{4} = \\frac{3}{4}$."
  },
  {
    "id": "trigpit-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(y)$",
    "options": [
      {
        "latex": "\\sin^2(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(y)",
        "correct": false
      },
      {
        "latex": "\\cos^2(y)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(y) + \\cos^2(y) = 1$: $1 - \\sin^2(y) = \\cos^2(y)$."
  },
  {
    "id": "trigpit-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(z)$",
    "options": [
      {
        "latex": "\\csc^2(z)",
        "correct": false
      },
      {
        "latex": "\\cos^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec^2(z)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(z) = \\sec^2(z)$."
  },
  {
    "id": "trigpit-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(\\phi) + \\cos^2(\\phi)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\phi)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(\\phi) + \\cos^2(\\phi) = 1$."
  },
  {
    "id": "trigpit-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(w)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(w)",
        "correct": false
      },
      {
        "latex": "\\cos^2(w)",
        "correct": false
      },
      {
        "latex": "\\sin^2(w)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(w) + \\cos^2(w) = 1$: $1 - \\cos^2(w) = \\sin^2(w)$."
  },
  {
    "id": "trigpit-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(x)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(x)",
        "correct": false
      },
      {
        "latex": "\\sin^2(x)",
        "correct": false
      },
      {
        "latex": "\\cos^2(x)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(x) + \\cos^2(x) = 1$: $1 - \\sin^2(x) = \\cos^2(x)$."
  },
  {
    "id": "trigpit-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(\\theta)$",
    "options": [
      {
        "latex": "\\csc^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(\\theta) = \\sec^2(\\theta)$."
  },
  {
    "id": "trigpit-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(\\alpha) + \\cos^2(\\alpha)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$."
  },
  {
    "id": "trigpit-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(\\beta)$",
    "options": [
      {
        "latex": "\\cos^2(\\beta)",
        "correct": false
      },
      {
        "latex": "-\\sin^2(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(\\beta) + \\cos^2(\\beta) = 1$: $1 - \\cos^2(\\beta) = \\sin^2(\\beta)$."
  },
  {
    "id": "trigpit-f-14",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(t)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(t)",
        "correct": false
      },
      {
        "latex": "\\sin^2(t)",
        "correct": false
      },
      {
        "latex": "\\cos^2(t)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(t) + \\cos^2(t) = 1$: $1 - \\sin^2(t) = \\cos^2(t)$."
  },
  {
    "id": "trigpit-f-15",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(u)$",
    "options": [
      {
        "latex": "\\csc^2(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(u)",
        "correct": false
      },
      {
        "latex": "\\sec^2(u)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(u) = \\sec^2(u)$."
  },
  {
    "id": "trigpit-f-16",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(y) + \\cos^2(y)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\tan^2(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(y) + \\cos^2(y) = 1$."
  },
  {
    "id": "trigpit-f-17",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(z)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(z)",
        "correct": false
      },
      {
        "latex": "\\cos^2(z)",
        "correct": false
      },
      {
        "latex": "\\sin^2(z)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(z) + \\cos^2(z) = 1$: $1 - \\cos^2(z) = \\sin^2(z)$."
  },
  {
    "id": "trigpit-f-18",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(\\phi)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\phi)",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\phi)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(\\phi) + \\cos^2(\\phi) = 1$: $1 - \\sin^2(\\phi) = \\cos^2(\\phi)$."
  },
  {
    "id": "trigpit-f-19",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(w)$",
    "options": [
      {
        "latex": "\\cos^2(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc^2(w)",
        "correct": false
      },
      {
        "latex": "\\sec^2(w)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(w) = \\sec^2(w)$."
  },
  {
    "id": "trigpit-f-20",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(x) + \\cos^2(x)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\tan^2(x)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(x) + \\cos^2(x) = 1$."
  },
  {
    "id": "trigpit-f-21",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(\\theta)$",
    "options": [
      {
        "latex": "\\cos^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$: $1 - \\cos^2(\\theta) = \\sin^2(\\theta)$."
  },
  {
    "id": "trigpit-f-22",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(\\alpha)$",
    "options": [
      {
        "latex": "\\sin^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "-\\cos^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$: $1 - \\sin^2(\\alpha) = \\cos^2(\\alpha)$."
  },
  {
    "id": "trigpit-f-23",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(\\beta)$",
    "options": [
      {
        "latex": "\\csc^2(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\beta)",
        "correct": false
      },
      {
        "latex": "\\sec^2(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(\\beta) = \\sec^2(\\beta)$."
  },
  {
    "id": "trigpit-f-24",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(t) + \\cos^2(t)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\tan^2(t)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(t) + \\cos^2(t) = 1$."
  },
  {
    "id": "trigpit-f-25",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(u)$",
    "options": [
      {
        "latex": "\\cos^2(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(u)",
        "correct": false
      },
      {
        "latex": "\\sin^2(u)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(u) + \\cos^2(u) = 1$: $1 - \\cos^2(u) = \\sin^2(u)$."
  },
  {
    "id": "trigpit-f-26",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(y)$",
    "options": [
      {
        "latex": "\\sin^2(y)",
        "correct": false
      },
      {
        "latex": "-\\cos^2(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(y)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(y) + \\cos^2(y) = 1$: $1 - \\sin^2(y) = \\cos^2(y)$."
  },
  {
    "id": "trigpit-f-27",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(z)$",
    "options": [
      {
        "latex": "\\csc^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(z)",
        "correct": false
      },
      {
        "latex": "\\sec^2(z)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(z) = \\sec^2(z)$."
  },
  {
    "id": "trigpit-f-28",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(\\phi) + \\cos^2(\\phi)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\phi)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(\\phi) + \\cos^2(\\phi) = 1$."
  },
  {
    "id": "trigpit-f-29",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(w)$",
    "options": [
      {
        "latex": "\\cos^2(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(w)",
        "correct": false
      },
      {
        "latex": "\\sin^2(w)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(w) + \\cos^2(w) = 1$: $1 - \\cos^2(w) = \\sin^2(w)$."
  },
  {
    "id": "trigpit-f-30",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(x)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(x)",
        "correct": false
      },
      {
        "latex": "\\sin^2(x)",
        "correct": false
      },
      {
        "latex": "\\cos^2(x)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(x) + \\cos^2(x) = 1$: $1 - \\sin^2(x) = \\cos^2(x)$."
  },
  {
    "id": "trigpit-f-31",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 + \\tan^2(\\theta)$",
    "options": [
      {
        "latex": "\\csc^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Segunda identidad pitagórica: $1 + \\tan^2(\\theta) = \\sec^2(\\theta)$."
  },
  {
    "id": "trigpit-f-32",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin^2(\\alpha) + \\cos^2(\\alpha)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Identidad fundamental pitagórica: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$."
  },
  {
    "id": "trigpit-f-33",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\cos^2(\\beta)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\beta)",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(\\beta) + \\cos^2(\\beta) = 1$: $1 - \\cos^2(\\beta) = \\sin^2(\\beta)$."
  },
  {
    "id": "trigpit-f-34",
    "difficulty": "easy",
    "prompt": "Simplifica: $1 - \\sin^2(t)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2(t)",
        "correct": false
      },
      {
        "latex": "\\sin^2(t)",
        "correct": false
      },
      {
        "latex": "\\cos^2(t)",
        "correct": true
      }
    ],
    "explanation": "Despejando de $\\sin^2(t) + \\cos^2(t) = 1$: $1 - \\sin^2(t) = \\cos^2(t)$."
  },
  {
    "id": "trigpit-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $1 - \\sin^2 x$",
    "options": [
      {
        "latex": "\\cos^2 x",
        "correct": true
      },
      {
        "latex": "\\sin^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\cos^2 x",
        "correct": false
      }
    ],
    "explanation": "De $\\sin^2 x + \\cos^2 x = 1$ se obtiene $1 - \\sin^2 x = \\cos^2 x$."
  },
  {
    "id": "trigpit-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $1 - \\cos^2 x$",
    "options": [
      {
        "latex": "\\sin^2 x",
        "correct": true
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\sin^2 x",
        "correct": false
      }
    ],
    "explanation": "De la identidad fundamental: $1 - \\cos^2 x = \\sin^2 x$."
  },
  {
    "id": "trigpit-m-03",
    "difficulty": "medium",
    "prompt": "¿A qué es igual $1 + \\tan^2 x$?",
    "options": [
      {
        "latex": "\\sec^2 x",
        "correct": true
      },
      {
        "latex": "\\csc^2 x",
        "correct": false
      },
      {
        "latex": "\\cot^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$1 + \\tan^2 x = \\sec^2 x$ es otra forma de la identidad pitagórica."
  },
  {
    "id": "trigpit-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2 x - 1$",
    "options": [
      {
        "latex": "\\tan^2 x",
        "correct": true
      },
      {
        "latex": "\\cot^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2 x",
        "correct": false
      }
    ],
    "explanation": "Como $\\sec^2 x = 1 + \\tan^2 x$, entonces $\\sec^2 x - 1 = \\tan^2 x$."
  },
  {
    "id": "trigpit-m-05",
    "difficulty": "medium",
    "prompt": "Si $\\tan x = 3$, ¿cuánto vale $\\sec^2 x$?",
    "options": [
      {
        "latex": "10",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      }
    ],
    "explanation": "$\\sec^2 x = 1 + \\tan^2 x = 1 + 9 = 10$."
  },
  {
    "id": "trigpit-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $8\\sin^2(y) + 8\\cos^2(y)$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8\\tan^2(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factor común $8(\\sin^2(y) + \\cos^2(y)) = 8(1) = 8$."
  },
  {
    "id": "trigpit-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(z) - 1$",
    "options": [
      {
        "latex": "\\cot^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(z)",
        "correct": false
      },
      {
        "latex": "\\tan^2(z)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(z) = \\sec^2(z)$, restando 1 obtenemos $\\tan^2(z)$."
  },
  {
    "id": "trigpit-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\phi) - \\tan^2(\\phi)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "2\\tan^2(\\phi)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\phi) = \\sec^2(\\phi)$, restando $\\tan^2(\\phi)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(w) - \\cot^2(w)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2(w)",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(w) = \\csc^2(w)$, restando $\\cot^2(w)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\sin^2(x) + 5\\cos^2(x)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5\\tan^2(x)",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Factor común $5(\\sin^2(x) + \\cos^2(x)) = 5(1) = 5$."
  },
  {
    "id": "trigpit-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\theta) - 1$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\cot^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\theta) = \\sec^2(\\theta)$, restando 1 obtenemos $\\tan^2(\\theta)$."
  },
  {
    "id": "trigpit-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\alpha) - \\tan^2(\\alpha)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2\\tan^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\alpha) = \\sec^2(\\alpha)$, restando $\\tan^2(\\alpha)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(\\beta) - \\cot^2(\\beta)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\beta)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(\\beta) = \\csc^2(\\beta)$, restando $\\cot^2(\\beta)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-14",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\sin^2(t) + 2\\cos^2(t)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2\\tan^2(t)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Factor común $2(\\sin^2(t) + \\cos^2(t)) = 2(1) = 2$."
  },
  {
    "id": "trigpit-m-15",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(u) - 1$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(u)",
        "correct": false
      },
      {
        "latex": "\\cot^2(u)",
        "correct": false
      },
      {
        "latex": "\\tan^2(u)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(u) = \\sec^2(u)$, restando 1 obtenemos $\\tan^2(u)$."
  },
  {
    "id": "trigpit-m-16",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(y) - \\tan^2(y)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2\\tan^2(y)",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(y) = \\sec^2(y)$, restando $\\tan^2(y)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-17",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(z) - \\cot^2(z)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(z) = \\csc^2(z)$, restando $\\cot^2(z)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-18",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\sin^2(\\phi) + 6\\cos^2(\\phi)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "6\\tan^2(\\phi)",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factor común $6(\\sin^2(\\phi) + \\cos^2(\\phi)) = 6(1) = 6$."
  },
  {
    "id": "trigpit-m-19",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(w) - 1$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(w)",
        "correct": false
      },
      {
        "latex": "\\cot^2(w)",
        "correct": false
      },
      {
        "latex": "\\tan^2(w)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(w) = \\sec^2(w)$, restando 1 obtenemos $\\tan^2(w)$."
  },
  {
    "id": "trigpit-m-20",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(x) - \\tan^2(x)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "2\\tan^2(x)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(x) = \\sec^2(x)$, restando $\\tan^2(x)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-21",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(\\theta) - \\cot^2(\\theta)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(\\theta) = \\csc^2(\\theta)$, restando $\\cot^2(\\theta)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-22",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\sin^2(\\alpha) + 3\\cos^2(\\alpha)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3\\tan^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factor común $3(\\sin^2(\\alpha) + \\cos^2(\\alpha)) = 3(1) = 3$."
  },
  {
    "id": "trigpit-m-23",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\beta) - 1$",
    "options": [
      {
        "latex": "\\cot^2(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\beta)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\beta) = \\sec^2(\\beta)$, restando 1 obtenemos $\\tan^2(\\beta)$."
  },
  {
    "id": "trigpit-m-24",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(t) - \\tan^2(t)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "2\\tan^2(t)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(t) = \\sec^2(t)$, restando $\\tan^2(t)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-25",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(u) - \\cot^2(u)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2(u)",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(u) = \\csc^2(u)$, restando $\\cot^2(u)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-26",
    "difficulty": "medium",
    "prompt": "Simplifica: $7\\sin^2(y) + 7\\cos^2(y)$",
    "options": [
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "7\\tan^2(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factor común $7(\\sin^2(y) + \\cos^2(y)) = 7(1) = 7$."
  },
  {
    "id": "trigpit-m-27",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(z) - 1$",
    "options": [
      {
        "latex": "\\cot^2(z)",
        "correct": false
      },
      {
        "latex": "\\cos^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2(z)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(z) = \\sec^2(z)$, restando 1 obtenemos $\\tan^2(z)$."
  },
  {
    "id": "trigpit-m-28",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\phi) - \\tan^2(\\phi)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2\\tan^2(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\phi) = \\sec^2(\\phi)$, restando $\\tan^2(\\phi)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-29",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(w) - \\cot^2(w)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2(w)",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(w) = \\csc^2(w)$, restando $\\cot^2(w)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-30",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\sin^2(x) + 4\\cos^2(x)$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4\\tan^2(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Factor común $4(\\sin^2(x) + \\cos^2(x)) = 4(1) = 4$."
  },
  {
    "id": "trigpit-m-31",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\theta) - 1$",
    "options": [
      {
        "latex": "\\cot^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\tan^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\theta) = \\sec^2(\\theta)$, restando 1 obtenemos $\\tan^2(\\theta)$."
  },
  {
    "id": "trigpit-m-32",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec^2(\\alpha) - \\tan^2(\\alpha)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "2\\tan^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\tan^2(\\alpha) = \\sec^2(\\alpha)$, restando $\\tan^2(\\alpha)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-33",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc^2(\\beta) - \\cot^2(\\beta)$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\beta)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "De $1 + \\cot^2(\\beta) = \\csc^2(\\beta)$, restando $\\cot^2(\\beta)$ obtenemos 1."
  },
  {
    "id": "trigpit-m-34",
    "difficulty": "medium",
    "prompt": "Simplifica: $8\\sin^2(t) + 8\\cos^2(t)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "8\\tan^2(t)",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factor común $8(\\sin^2(t) + \\cos^2(t)) = 8(1) = 8$."
  },
  {
    "id": "trigpit-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin^2 x + \\cos^2 x + \\tan^2 x$",
    "options": [
      {
        "latex": "\\sec^2 x",
        "correct": true
      },
      {
        "latex": "\\csc^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "$\\sin^2 x + \\cos^2 x = 1$, así que queda $1 + \\tan^2 x = \\sec^2 x$."
  },
  {
    "id": "trigpit-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\sin x = \\frac{5}{13}$ y $x$ está en el primer cuadrante, ¿cuánto vale $\\cos x$?",
    "options": [
      {
        "latex": "\\frac{12}{13}",
        "correct": true
      },
      {
        "latex": "\\frac{8}{13}",
        "correct": false
      },
      {
        "latex": "\\frac{144}{169}",
        "correct": false
      },
      {
        "latex": "\\frac{12}{169}",
        "correct": false
      }
    ],
    "explanation": "$\\cos^2 x = 1 - \\frac{25}{169} = \\frac{144}{169}$, y como $x$ está en el primer cuadrante, $\\cos x = \\frac{12}{13}$."
  },
  {
    "id": "trigpit-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin^2 x\\,(1 + \\cot^2 x)$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "\\sin^2 x",
        "correct": false
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      },
      {
        "latex": "\\csc^2 x",
        "correct": false
      }
    ],
    "explanation": "$1 + \\cot^2 x = \\csc^2 x$, así que $\\sin^2 x \\cdot \\csc^2 x = \\sin^2 x \\cdot \\frac{1}{\\sin^2 x} = 1$."
  },
  {
    "id": "trigpit-h-04",
    "difficulty": "hard",
    "prompt": "Si $\\cos x = \\frac{1}{3}$, ¿cuánto vale $1 - \\cos^2 x$?",
    "options": [
      {
        "latex": "\\frac{8}{9}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{3}",
        "correct": false
      }
    ],
    "explanation": "$1 - \\cos^2 x = 1 - \\frac{1}{9} = \\frac{8}{9}$, que es $\\sin^2 x$."
  },
  {
    "id": "trigpit-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin x + \\cos x)^2 - 1$",
    "options": [
      {
        "latex": "2 \\sin x \\cos x",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\sin x \\cos x",
        "correct": false
      }
    ],
    "explanation": "$(\\sin x + \\cos x)^2 = \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1 + 2\\sin x \\cos x$. Al restar 1: $2\\sin x \\cos x$."
  },
  {
    "id": "trigpit-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec y - 1)(\\sec y + 1)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2 y",
        "correct": false
      },
      {
        "latex": "\\cot^2 y",
        "correct": false
      },
      {
        "latex": "\\tan^2 y",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 y - 1 = \\tan^2 y$."
  },
  {
    "id": "trigpit-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 z}{1 - \\cos z}$",
    "options": [
      {
        "latex": "\\cos z",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "1 - \\cos z",
        "correct": false
      },
      {
        "latex": "1 + \\cos z",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 z}{1 - \\cos z} = \\frac{(1+\\cos z)(1-\\cos z)}{1-\\cos z} = 1 + \\cos z$."
  },
  {
    "id": "trigpit-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin \\phi + \\cos \\phi)^2 - 2\\sin \\phi\\cos \\phi$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(2\\phi)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 \\phi + 2\\sin \\phi\\cos \\phi + \\cos^2 \\phi - 2\\sin \\phi\\cos \\phi = \\sin^2 \\phi + \\cos^2 \\phi = 1$."
  },
  {
    "id": "trigpit-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 w}{\\cos w}$ para $\\cos w \\neq 0$",
    "options": [
      {
        "latex": "\\sin w",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec w",
        "correct": false
      },
      {
        "latex": "\\cos w",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 w = \\cos^2 w$, tenemos $\\frac{\\cos^2 w}{\\cos w} = \\cos w$."
  },
  {
    "id": "trigpit-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec x - 1)(\\sec x + 1)$",
    "options": [
      {
        "latex": "\\cot^2 x",
        "correct": false
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2 x",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 x - 1 = \\tan^2 x$."
  },
  {
    "id": "trigpit-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 \\theta}{1 - \\cos \\theta}$",
    "options": [
      {
        "latex": "\\cos \\theta",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "1 - \\cos \\theta",
        "correct": false
      },
      {
        "latex": "1 + \\cos \\theta",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 \\theta}{1 - \\cos \\theta} = \\frac{(1+\\cos \\theta)(1-\\cos \\theta)}{1-\\cos \\theta} = 1 + \\cos \\theta$."
  },
  {
    "id": "trigpit-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin \\alpha + \\cos \\alpha)^2 - 2\\sin \\alpha\\cos \\alpha$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\cos(2\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 \\alpha + 2\\sin \\alpha\\cos \\alpha + \\cos^2 \\alpha - 2\\sin \\alpha\\cos \\alpha = \\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
  },
  {
    "id": "trigpit-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 \\beta}{\\cos \\beta}$ para $\\cos \\beta \\neq 0$",
    "options": [
      {
        "latex": "\\sin \\beta",
        "correct": false
      },
      {
        "latex": "\\sec \\beta",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos \\beta",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 \\beta = \\cos^2 \\beta$, tenemos $\\frac{\\cos^2 \\beta}{\\cos \\beta} = \\cos \\beta$."
  },
  {
    "id": "trigpit-h-14",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec t - 1)(\\sec t + 1)$",
    "options": [
      {
        "latex": "\\cot^2 t",
        "correct": false
      },
      {
        "latex": "\\cos^2 t",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2 t",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 t - 1 = \\tan^2 t$."
  },
  {
    "id": "trigpit-h-15",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 u}{1 - \\cos u}$",
    "options": [
      {
        "latex": "1 - \\cos u",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos u",
        "correct": false
      },
      {
        "latex": "1 + \\cos u",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 u}{1 - \\cos u} = \\frac{(1+\\cos u)(1-\\cos u)}{1-\\cos u} = 1 + \\cos u$."
  },
  {
    "id": "trigpit-h-16",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin y + \\cos y)^2 - 2\\sin y\\cos y$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\cos(2y)",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 y + 2\\sin y\\cos y + \\cos^2 y - 2\\sin y\\cos y = \\sin^2 y + \\cos^2 y = 1$."
  },
  {
    "id": "trigpit-h-17",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 z}{\\cos z}$ para $\\cos z \\neq 0$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec z",
        "correct": false
      },
      {
        "latex": "\\sin z",
        "correct": false
      },
      {
        "latex": "\\cos z",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 z = \\cos^2 z$, tenemos $\\frac{\\cos^2 z}{\\cos z} = \\cos z$."
  },
  {
    "id": "trigpit-h-18",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec \\phi - 1)(\\sec \\phi + 1)$",
    "options": [
      {
        "latex": "\\cot^2 \\phi",
        "correct": false
      },
      {
        "latex": "\\cos^2 \\phi",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2 \\phi",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 \\phi - 1 = \\tan^2 \\phi$."
  },
  {
    "id": "trigpit-h-19",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 w}{1 - \\cos w}$",
    "options": [
      {
        "latex": "1 - \\cos w",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos w",
        "correct": false
      },
      {
        "latex": "1 + \\cos w",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 w}{1 - \\cos w} = \\frac{(1+\\cos w)(1-\\cos w)}{1-\\cos w} = 1 + \\cos w$."
  },
  {
    "id": "trigpit-h-20",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin x + \\cos x)^2 - 2\\sin x\\cos x$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(2x)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 x + 2\\sin x\\cos x + \\cos^2 x - 2\\sin x\\cos x = \\sin^2 x + \\cos^2 x = 1$."
  },
  {
    "id": "trigpit-h-21",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 \\theta}{\\cos \\theta}$ para $\\cos \\theta \\neq 0$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec \\theta",
        "correct": false
      },
      {
        "latex": "\\sin \\theta",
        "correct": false
      },
      {
        "latex": "\\cos \\theta",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 \\theta = \\cos^2 \\theta$, tenemos $\\frac{\\cos^2 \\theta}{\\cos \\theta} = \\cos \\theta$."
  },
  {
    "id": "trigpit-h-22",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec \\alpha - 1)(\\sec \\alpha + 1)$",
    "options": [
      {
        "latex": "\\cot^2 \\alpha",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2 \\alpha",
        "correct": false
      },
      {
        "latex": "\\tan^2 \\alpha",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 \\alpha - 1 = \\tan^2 \\alpha$."
  },
  {
    "id": "trigpit-h-23",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 \\beta}{1 - \\cos \\beta}$",
    "options": [
      {
        "latex": "1 - \\cos \\beta",
        "correct": false
      },
      {
        "latex": "\\cos \\beta",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "1 + \\cos \\beta",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 \\beta}{1 - \\cos \\beta} = \\frac{(1+\\cos \\beta)(1-\\cos \\beta)}{1-\\cos \\beta} = 1 + \\cos \\beta$."
  },
  {
    "id": "trigpit-h-24",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin t + \\cos t)^2 - 2\\sin t\\cos t$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(2t)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 t + 2\\sin t\\cos t + \\cos^2 t - 2\\sin t\\cos t = \\sin^2 t + \\cos^2 t = 1$."
  },
  {
    "id": "trigpit-h-25",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 u}{\\cos u}$ para $\\cos u \\neq 0$",
    "options": [
      {
        "latex": "\\sin u",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec u",
        "correct": false
      },
      {
        "latex": "\\cos u",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 u = \\cos^2 u$, tenemos $\\frac{\\cos^2 u}{\\cos u} = \\cos u$."
  },
  {
    "id": "trigpit-h-26",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec y - 1)(\\sec y + 1)$",
    "options": [
      {
        "latex": "\\cot^2 y",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2 y",
        "correct": false
      },
      {
        "latex": "\\tan^2 y",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 y - 1 = \\tan^2 y$."
  },
  {
    "id": "trigpit-h-27",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 z}{1 - \\cos z}$",
    "options": [
      {
        "latex": "1 - \\cos z",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos z",
        "correct": false
      },
      {
        "latex": "1 + \\cos z",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 z}{1 - \\cos z} = \\frac{(1+\\cos z)(1-\\cos z)}{1-\\cos z} = 1 + \\cos z$."
  },
  {
    "id": "trigpit-h-28",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin \\phi + \\cos \\phi)^2 - 2\\sin \\phi\\cos \\phi$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(2\\phi)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 \\phi + 2\\sin \\phi\\cos \\phi + \\cos^2 \\phi - 2\\sin \\phi\\cos \\phi = \\sin^2 \\phi + \\cos^2 \\phi = 1$."
  },
  {
    "id": "trigpit-h-29",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 w}{\\cos w}$ para $\\cos w \\neq 0$",
    "options": [
      {
        "latex": "\\sin w",
        "correct": false
      },
      {
        "latex": "\\sec w",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos w",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 w = \\cos^2 w$, tenemos $\\frac{\\cos^2 w}{\\cos w} = \\cos w$."
  },
  {
    "id": "trigpit-h-30",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec x - 1)(\\sec x + 1)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      },
      {
        "latex": "\\cot^2 x",
        "correct": false
      },
      {
        "latex": "\\tan^2 x",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 x - 1 = \\tan^2 x$."
  },
  {
    "id": "trigpit-h-31",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin^2 \\theta}{1 - \\cos \\theta}$",
    "options": [
      {
        "latex": "\\cos \\theta",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "1 - \\cos \\theta",
        "correct": false
      },
      {
        "latex": "1 + \\cos \\theta",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1 - \\cos^2 \\theta}{1 - \\cos \\theta} = \\frac{(1+\\cos \\theta)(1-\\cos \\theta)}{1-\\cos \\theta} = 1 + \\cos \\theta$."
  },
  {
    "id": "trigpit-h-32",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sin \\alpha + \\cos \\alpha)^2 - 2\\sin \\alpha\\cos \\alpha$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\cos(2\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Desarrollo: $\\sin^2 \\alpha + 2\\sin \\alpha\\cos \\alpha + \\cos^2 \\alpha - 2\\sin \\alpha\\cos \\alpha = \\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
  },
  {
    "id": "trigpit-h-33",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 - \\sin^2 \\beta}{\\cos \\beta}$ para $\\cos \\beta \\neq 0$",
    "options": [
      {
        "latex": "\\sin \\beta",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec \\beta",
        "correct": false
      },
      {
        "latex": "\\cos \\beta",
        "correct": true
      }
    ],
    "explanation": "Como $1 - \\sin^2 \\beta = \\cos^2 \\beta$, tenemos $\\frac{\\cos^2 \\beta}{\\cos \\beta} = \\cos \\beta$."
  },
  {
    "id": "trigpit-h-34",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\sec t - 1)(\\sec t + 1)$",
    "options": [
      {
        "latex": "\\cot^2 t",
        "correct": false
      },
      {
        "latex": "\\cos^2 t",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan^2 t",
        "correct": true
      }
    ],
    "explanation": "Binomios conjugados: $\\sec^2 t - 1 = \\tan^2 t$."
  }
]
};
