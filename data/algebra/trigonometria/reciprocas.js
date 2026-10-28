// data/algebra/trigonometria/reciprocas.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "trig-reciprocas",
  lawName: "Identidades recíprocas",
  lawFormula: "\\sec x = \\frac{1}{\\cos x}, \\quad \\csc x = \\frac{1}{\\sin x}",
  prerequisites: "Conocer las funciones seno, coseno y tangente.",
  available: true,
  questions: [
  {
    "id": "trigrec-f-01",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\sec x$?",
    "options": [
      {
        "latex": "\\frac{1}{\\cos x}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{\\sin x}",
        "correct": false
      },
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\tan x}",
        "correct": false
      }
    ],
    "explanation": "$\\sec x$ es el recíproco de $\\cos x$: $\\sec x = \\frac{1}{\\cos x}$."
  },
  {
    "id": "trigrec-f-02",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\csc x$?",
    "options": [
      {
        "latex": "\\frac{1}{\\sin x}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{\\cos x}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\tan x}",
        "correct": false
      },
      {
        "latex": "\\sin x",
        "correct": false
      }
    ],
    "explanation": "$\\csc x$ es el recíproco de $\\sin x$: $\\csc x = \\frac{1}{\\sin x}$."
  },
  {
    "id": "trigrec-f-03",
    "difficulty": "easy",
    "prompt": "¿Cuál es el recíproco de $\\cos x$?",
    "options": [
      {
        "latex": "\\sec x",
        "correct": true
      },
      {
        "latex": "\\csc x",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      },
      {
        "latex": "\\cot x",
        "correct": false
      }
    ],
    "explanation": "El recíproco de $\\cos x$ es $\\sec x$."
  },
  {
    "id": "trigrec-f-04",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\cot x$?",
    "options": [
      {
        "latex": "\\frac{1}{\\tan x}",
        "correct": true
      },
      {
        "latex": "\\tan x",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sin x}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\cos x}",
        "correct": false
      }
    ],
    "explanation": "$\\cot x$ es el recíproco de $\\tan x$: $\\cot x = \\frac{1}{\\tan x}$."
  },
  {
    "id": "trigrec-f-05",
    "difficulty": "easy",
    "prompt": "Si $\\cos x = \\frac{1}{2}$, ¿cuánto vale $\\sec x$?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\sec x = \\frac{1}{\\cos x} = \\frac{1}{1/2} = 2$."
  },
  {
    "id": "trigrec-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(y) \\csc(y)$",
    "options": [
      {
        "latex": "\\tan(y)",
        "correct": false
      },
      {
        "latex": "\\cos(y)",
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
    "explanation": "Como $\\csc(y) = \\frac{1}{\\sin(y)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(z) \\sec(z)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin(z)",
        "correct": false
      },
      {
        "latex": "\\cot(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(z) = \\frac{1}{\\cos(z)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(\\phi) \\cot(\\phi)$",
    "options": [
      {
        "latex": "\\sec(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sin(\\phi)",
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
    "explanation": "Como $\\cot(\\phi) = \\frac{1}{\\tan(\\phi)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(w) \\csc(w)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(w)",
        "correct": false
      },
      {
        "latex": "\\tan(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(w) = \\frac{1}{\\sin(w)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(x) \\sec(x)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cot(x)",
        "correct": false
      },
      {
        "latex": "\\sin(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(x) = \\frac{1}{\\cos(x)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(\\theta) \\cot(\\theta)$",
    "options": [
      {
        "latex": "\\sec(\\theta)",
        "correct": false
      },
      {
        "latex": "\\sin(\\theta)",
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
    "explanation": "Como $\\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(\\alpha) \\csc(\\alpha)$",
    "options": [
      {
        "latex": "\\tan(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cos(\\alpha)",
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
    "explanation": "Como $\\csc(\\alpha) = \\frac{1}{\\sin(\\alpha)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(\\beta) \\sec(\\beta)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(\\beta) = \\frac{1}{\\cos(\\beta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-14",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(t) \\cot(t)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin(t)",
        "correct": false
      },
      {
        "latex": "\\sec(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\cot(t) = \\frac{1}{\\tan(t)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-15",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(u) \\csc(u)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(u)",
        "correct": false
      },
      {
        "latex": "\\tan(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(u) = \\frac{1}{\\sin(u)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-16",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(y) \\sec(y)$",
    "options": [
      {
        "latex": "\\sin(y)",
        "correct": false
      },
      {
        "latex": "\\cot(y)",
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
    "explanation": "Como $\\sec(y) = \\frac{1}{\\cos(y)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-17",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(z) \\cot(z)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sec(z)",
        "correct": false
      },
      {
        "latex": "\\sin(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\cot(z) = \\frac{1}{\\tan(z)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-18",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(\\phi) \\csc(\\phi)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "\\tan(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(\\phi) = \\frac{1}{\\sin(\\phi)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-19",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(w) \\sec(w)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": false
      },
      {
        "latex": "\\sin(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(w) = \\frac{1}{\\cos(w)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-20",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(x) \\cot(x)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin(x)",
        "correct": false
      },
      {
        "latex": "\\sec(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\cot(x) = \\frac{1}{\\tan(x)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-21",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(\\theta) \\csc(\\theta)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(\\theta)",
        "correct": false
      },
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-22",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(\\alpha) \\sec(\\alpha)$",
    "options": [
      {
        "latex": "\\sin(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cot(\\alpha)",
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
    "explanation": "Como $\\sec(\\alpha) = \\frac{1}{\\cos(\\alpha)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-23",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(\\beta) \\cot(\\beta)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sec(\\beta)",
        "correct": false
      },
      {
        "latex": "\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\cot(\\beta) = \\frac{1}{\\tan(\\beta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-24",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(t) \\csc(t)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(t) = \\frac{1}{\\sin(t)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-25",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(u) \\sec(u)$",
    "options": [
      {
        "latex": "\\sin(u)",
        "correct": false
      },
      {
        "latex": "\\cot(u)",
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
    "explanation": "Como $\\sec(u) = \\frac{1}{\\cos(u)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-26",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(y) \\cot(y)$",
    "options": [
      {
        "latex": "\\sec(y)",
        "correct": false
      },
      {
        "latex": "\\sin(y)",
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
    "explanation": "Como $\\cot(y) = \\frac{1}{\\tan(y)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-27",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(z) \\csc(z)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\tan(z)",
        "correct": false
      },
      {
        "latex": "\\cos(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(z) = \\frac{1}{\\sin(z)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-28",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(\\phi) \\sec(\\phi)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sin(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(\\phi) = \\frac{1}{\\cos(\\phi)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-29",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(w) \\cot(w)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin(w)",
        "correct": false
      },
      {
        "latex": "\\sec(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\cot(w) = \\frac{1}{\\tan(w)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-30",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(x) \\csc(x)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\csc(x) = \\frac{1}{\\sin(x)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-31",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(\\theta) \\sec(\\theta)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": false
      },
      {
        "latex": "\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-32",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan(\\alpha) \\cot(\\alpha)$",
    "options": [
      {
        "latex": "\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sin(\\alpha)",
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
    "explanation": "Como $\\cot(\\alpha) = \\frac{1}{\\tan(\\alpha)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-33",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\sin(\\beta) \\csc(\\beta)$",
    "options": [
      {
        "latex": "\\tan(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cos(\\beta)",
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
    "explanation": "Como $\\csc(\\beta) = \\frac{1}{\\sin(\\beta)}$, su producto es 1."
  },
  {
    "id": "trigrec-f-34",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\cos(t) \\sec(t)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cot(t)",
        "correct": false
      },
      {
        "latex": "\\sin(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Como $\\sec(t) = \\frac{1}{\\cos(t)}$, su producto es 1."
  },
  {
    "id": "trigrec-m-01",
    "difficulty": "medium",
    "prompt": "Si $\\sin x = \\frac{1}{3}$, ¿cuánto vale $\\csc x$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\csc x = \\frac{1}{\\sin x} = \\frac{1}{1/3} = 3$."
  },
  {
    "id": "trigrec-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sec x \\cdot \\cos x$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      }
    ],
    "explanation": "$\\sec x \\cdot \\cos x = \\frac{1}{\\cos x} \\cdot \\cos x = 1$."
  },
  {
    "id": "trigrec-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\csc x \\cdot \\sin x$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "\\csc^2 x",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\sin^2 x",
        "correct": false
      }
    ],
    "explanation": "$\\csc x \\cdot \\sin x = \\frac{1}{\\sin x} \\cdot \\sin x = 1$."
  },
  {
    "id": "trigrec-m-04",
    "difficulty": "medium",
    "prompt": "¿A qué es igual $\\tan x \\cdot \\cot x$?",
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
        "latex": "\\tan^2 x",
        "correct": false
      },
      {
        "latex": "\\cot^2 x",
        "correct": false
      }
    ],
    "explanation": "$\\tan x \\cdot \\cot x = \\tan x \\cdot \\frac{1}{\\tan x} = 1$."
  },
  {
    "id": "trigrec-m-05",
    "difficulty": "medium",
    "prompt": "Si $\\sec x = 4$, ¿cuánto vale $\\cos x$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\cos x = \\frac{1}{\\sec x} = \\frac{1}{4}$."
  },
  {
    "id": "trigrec-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{2}{\\csc(y)}$",
    "options": [
      {
        "latex": "2\\cos(y)",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sin(y)}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\sin(y)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(y)} = \\sin(y)$, el resultado es $2\\sin(y)$."
  },
  {
    "id": "trigrec-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{3}{\\sec(z)}$",
    "options": [
      {
        "latex": "3\\sin(z)",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\cos(z)}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\cos(z)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(z)} = \\cos(z)$, el resultado es $3\\cos(z)$."
  },
  {
    "id": "trigrec-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{4}{\\cot(\\phi)}$",
    "options": [
      {
        "latex": "4\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\tan(\\phi)}",
        "correct": false
      },
      {
        "latex": "4\\tan(\\phi)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(\\phi)} = \\tan(\\phi)$, el resultado es $4\\tan(\\phi)$."
  },
  {
    "id": "trigrec-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{5}{\\csc(w)}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sin(w)}",
        "correct": false
      },
      {
        "latex": "5\\cos(w)",
        "correct": false
      },
      {
        "latex": "5\\sin(w)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(w)} = \\sin(w)$, el resultado es $5\\sin(w)$."
  },
  {
    "id": "trigrec-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{6}{\\sec(x)}$",
    "options": [
      {
        "latex": "6\\sin(x)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\cos(x)}",
        "correct": false
      },
      {
        "latex": "6\\cos(x)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(x)} = \\cos(x)$, el resultado es $6\\cos(x)$."
  },
  {
    "id": "trigrec-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{7}{\\cot(\\theta)}$",
    "options": [
      {
        "latex": "7\\cot(\\theta)",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\tan(\\theta)}",
        "correct": false
      },
      {
        "latex": "7\\tan(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(\\theta)} = \\tan(\\theta)$, el resultado es $7\\tan(\\theta)$."
  },
  {
    "id": "trigrec-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{2}{\\csc(\\alpha)}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sin(\\alpha)}",
        "correct": false
      },
      {
        "latex": "2\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "2\\sin(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(\\alpha)} = \\sin(\\alpha)$, el resultado es $2\\sin(\\alpha)$."
  },
  {
    "id": "trigrec-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{3}{\\sec(\\beta)}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\cos(\\beta)}",
        "correct": false
      },
      {
        "latex": "3\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "3\\cos(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(\\beta)} = \\cos(\\beta)$, el resultado es $3\\cos(\\beta)$."
  },
  {
    "id": "trigrec-m-14",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{4}{\\cot(t)}$",
    "options": [
      {
        "latex": "4\\cot(t)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\tan(t)}",
        "correct": false
      },
      {
        "latex": "4\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(t)} = \\tan(t)$, el resultado es $4\\tan(t)$."
  },
  {
    "id": "trigrec-m-15",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{5}{\\csc(u)}$",
    "options": [
      {
        "latex": "5\\cos(u)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sin(u)}",
        "correct": false
      },
      {
        "latex": "5\\sin(u)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(u)} = \\sin(u)$, el resultado es $5\\sin(u)$."
  },
  {
    "id": "trigrec-m-16",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{6}{\\sec(y)}$",
    "options": [
      {
        "latex": "6\\sin(y)",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\cos(y)}",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\cos(y)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(y)} = \\cos(y)$, el resultado es $6\\cos(y)$."
  },
  {
    "id": "trigrec-m-17",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{7}{\\cot(z)}$",
    "options": [
      {
        "latex": "7\\cot(z)",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\tan(z)}",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "7\\tan(z)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(z)} = \\tan(z)$, el resultado es $7\\tan(z)$."
  },
  {
    "id": "trigrec-m-18",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{2}{\\csc(\\phi)}$",
    "options": [
      {
        "latex": "2\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sin(\\phi)}",
        "correct": false
      },
      {
        "latex": "2\\sin(\\phi)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(\\phi)} = \\sin(\\phi)$, el resultado es $2\\sin(\\phi)$."
  },
  {
    "id": "trigrec-m-19",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{3}{\\sec(w)}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\cos(w)}",
        "correct": false
      },
      {
        "latex": "3\\sin(w)",
        "correct": false
      },
      {
        "latex": "3\\cos(w)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(w)} = \\cos(w)$, el resultado es $3\\cos(w)$."
  },
  {
    "id": "trigrec-m-20",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{4}{\\cot(x)}$",
    "options": [
      {
        "latex": "4\\cot(x)",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\tan(x)}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(x)} = \\tan(x)$, el resultado es $4\\tan(x)$."
  },
  {
    "id": "trigrec-m-21",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{5}{\\csc(\\theta)}$",
    "options": [
      {
        "latex": "5\\cos(\\theta)",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sin(\\theta)}",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\sin(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(\\theta)} = \\sin(\\theta)$, el resultado es $5\\sin(\\theta)$."
  },
  {
    "id": "trigrec-m-22",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{6}{\\sec(\\alpha)}$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\cos(\\alpha)}",
        "correct": false
      },
      {
        "latex": "6\\sin(\\alpha)",
        "correct": false
      },
      {
        "latex": "6\\cos(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(\\alpha)} = \\cos(\\alpha)$, el resultado es $6\\cos(\\alpha)$."
  },
  {
    "id": "trigrec-m-23",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{7}{\\cot(\\beta)}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\tan(\\beta)}",
        "correct": false
      },
      {
        "latex": "7\\cot(\\beta)",
        "correct": false
      },
      {
        "latex": "7\\tan(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(\\beta)} = \\tan(\\beta)$, el resultado es $7\\tan(\\beta)$."
  },
  {
    "id": "trigrec-m-24",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{2}{\\csc(t)}$",
    "options": [
      {
        "latex": "2\\cos(t)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sin(t)}",
        "correct": false
      },
      {
        "latex": "2\\sin(t)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(t)} = \\sin(t)$, el resultado es $2\\sin(t)$."
  },
  {
    "id": "trigrec-m-25",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{3}{\\sec(u)}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\cos(u)}",
        "correct": false
      },
      {
        "latex": "3\\sin(u)",
        "correct": false
      },
      {
        "latex": "3\\cos(u)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(u)} = \\cos(u)$, el resultado es $3\\cos(u)$."
  },
  {
    "id": "trigrec-m-26",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{4}{\\cot(y)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\tan(y)}",
        "correct": false
      },
      {
        "latex": "4\\cot(y)",
        "correct": false
      },
      {
        "latex": "4\\tan(y)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(y)} = \\tan(y)$, el resultado es $4\\tan(y)$."
  },
  {
    "id": "trigrec-m-27",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{5}{\\csc(z)}$",
    "options": [
      {
        "latex": "\\frac{5}{\\sin(z)}",
        "correct": false
      },
      {
        "latex": "5\\cos(z)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\sin(z)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(z)} = \\sin(z)$, el resultado es $5\\sin(z)$."
  },
  {
    "id": "trigrec-m-28",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{6}{\\sec(\\phi)}$",
    "options": [
      {
        "latex": "6\\sin(\\phi)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\cos(\\phi)}",
        "correct": false
      },
      {
        "latex": "6\\cos(\\phi)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(\\phi)} = \\cos(\\phi)$, el resultado es $6\\cos(\\phi)$."
  },
  {
    "id": "trigrec-m-29",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{7}{\\cot(w)}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\tan(w)}",
        "correct": false
      },
      {
        "latex": "7\\cot(w)",
        "correct": false
      },
      {
        "latex": "7\\tan(w)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(w)} = \\tan(w)$, el resultado es $7\\tan(w)$."
  },
  {
    "id": "trigrec-m-30",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{2}{\\csc(x)}$",
    "options": [
      {
        "latex": "2\\cos(x)",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sin(x)}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\sin(x)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(x)} = \\sin(x)$, el resultado es $2\\sin(x)$."
  },
  {
    "id": "trigrec-m-31",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{3}{\\sec(\\theta)}$",
    "options": [
      {
        "latex": "3\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\cos(\\theta)}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\cos(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(\\theta)} = \\cos(\\theta)$, el resultado es $3\\cos(\\theta)$."
  },
  {
    "id": "trigrec-m-32",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{4}{\\cot(\\alpha)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\tan(\\alpha)}",
        "correct": false
      },
      {
        "latex": "4\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "4\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\cot(\\alpha)} = \\tan(\\alpha)$, el resultado es $4\\tan(\\alpha)$."
  },
  {
    "id": "trigrec-m-33",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{5}{\\csc(\\beta)}$",
    "options": [
      {
        "latex": "5\\cos(\\beta)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sin(\\beta)}",
        "correct": false
      },
      {
        "latex": "5\\sin(\\beta)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\csc(\\beta)} = \\sin(\\beta)$, el resultado es $5\\sin(\\beta)$."
  },
  {
    "id": "trigrec-m-34",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{6}{\\sec(t)}$",
    "options": [
      {
        "latex": "6\\sin(t)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\cos(t)}",
        "correct": false
      },
      {
        "latex": "6\\cos(t)",
        "correct": true
      }
    ],
    "explanation": "Como $\\frac{1}{\\sec(t)} = \\cos(t)$, el resultado es $6\\cos(t)$."
  },
  {
    "id": "trigrec-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sec x \\cdot \\csc x \\cdot \\cos x$",
    "options": [
      {
        "latex": "\\csc x",
        "correct": true
      },
      {
        "latex": "\\sec x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin x",
        "correct": false
      }
    ],
    "explanation": "$\\sec x \\cdot \\cos x = 1$, por lo que queda $\\csc x$."
  },
  {
    "id": "trigrec-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\cot x = 3$, ¿cuánto vale $\\tan x$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\tan x = \\frac{1}{\\cot x} = \\frac{1}{3}$."
  },
  {
    "id": "trigrec-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\csc x \\cdot \\tan x$",
    "options": [
      {
        "latex": "\\sec x",
        "correct": true
      },
      {
        "latex": "\\csc x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot x",
        "correct": false
      }
    ],
    "explanation": "$\\csc x \\cdot \\tan x = \\frac{1}{\\sin x} \\cdot \\frac{\\sin x}{\\cos x} = \\frac{1}{\\cos x} = \\sec x$."
  },
  {
    "id": "trigrec-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sec x \\cdot \\sin x$",
    "options": [
      {
        "latex": "\\tan x",
        "correct": true
      },
      {
        "latex": "\\cot x",
        "correct": false
      },
      {
        "latex": "\\sec x",
        "correct": false
      },
      {
        "latex": "\\sin x",
        "correct": false
      }
    ],
    "explanation": "$\\sec x \\cdot \\sin x = \\frac{1}{\\cos x} \\cdot \\sin x = \\frac{\\sin x}{\\cos x} = \\tan x$."
  },
  {
    "id": "trigrec-h-05",
    "difficulty": "hard",
    "prompt": "Si $\\sin x = \\frac{5}{13}$, ¿cuánto vale $\\csc x$?",
    "options": [
      {
        "latex": "\\frac{13}{5}",
        "correct": true
      },
      {
        "latex": "\\frac{5}{13}",
        "correct": false
      },
      {
        "latex": "\\frac{12}{13}",
        "correct": false
      },
      {
        "latex": "\\frac{13}{12}",
        "correct": false
      }
    ],
    "explanation": "$\\csc x = \\frac{1}{\\sin x} = \\frac{1}{5/13} = \\frac{13}{5}$."
  },
  {
    "id": "trigrec-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(y) \\sec(y)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(y)",
        "correct": false
      },
      {
        "latex": "\\cot(y)",
        "correct": false
      },
      {
        "latex": "\\tan(y)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(y) \\cdot \\frac{1}{\\cos(y)} = \\frac{\\sin(y)}{\\cos(y)} = \\tan(y)$."
  },
  {
    "id": "trigrec-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(z) \\csc(z)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(z)",
        "correct": false
      },
      {
        "latex": "\\tan(z)",
        "correct": false
      },
      {
        "latex": "\\cot(z)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(z) \\cdot \\frac{1}{\\sin(z)} = \\frac{\\cos(z)}{\\sin(z)} = \\cot(z)$."
  },
  {
    "id": "trigrec-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(\\phi)}{\\csc(\\phi)}$",
    "options": [
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sin(\\phi)\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(\\phi)}{1/\\sin(\\phi)} = \\frac{\\sin(\\phi)}{\\cos(\\phi)} = \\tan(\\phi)$."
  },
  {
    "id": "trigrec-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(w) \\sec(w)$",
    "options": [
      {
        "latex": "\\cot(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(w)",
        "correct": false
      },
      {
        "latex": "\\tan(w)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(w) \\cdot \\frac{1}{\\cos(w)} = \\frac{\\sin(w)}{\\cos(w)} = \\tan(w)$."
  },
  {
    "id": "trigrec-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(x) \\csc(x)$",
    "options": [
      {
        "latex": "\\tan(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(x)",
        "correct": false
      },
      {
        "latex": "\\cot(x)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(x) \\cdot \\frac{1}{\\sin(x)} = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)$."
  },
  {
    "id": "trigrec-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(\\theta)}{\\csc(\\theta)}$",
    "options": [
      {
        "latex": "\\cot(\\theta)",
        "correct": false
      },
      {
        "latex": "\\sin(\\theta)\\cos(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(\\theta)}{1/\\sin(\\theta)} = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\tan(\\theta)$."
  },
  {
    "id": "trigrec-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(\\alpha) \\sec(\\alpha)$",
    "options": [
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(\\alpha) \\cdot \\frac{1}{\\cos(\\alpha)} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\tan(\\alpha)$."
  },
  {
    "id": "trigrec-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(\\beta) \\csc(\\beta)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "\\tan(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(\\beta) \\cdot \\frac{1}{\\sin(\\beta)} = \\frac{\\cos(\\beta)}{\\sin(\\beta)} = \\cot(\\beta)$."
  },
  {
    "id": "trigrec-h-14",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(t)}{\\csc(t)}$",
    "options": [
      {
        "latex": "\\cot(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(t)\\cos(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(t)}{1/\\sin(t)} = \\frac{\\sin(t)}{\\cos(t)} = \\tan(t)$."
  },
  {
    "id": "trigrec-h-15",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(u) \\sec(u)$",
    "options": [
      {
        "latex": "\\cot(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(u)",
        "correct": false
      },
      {
        "latex": "\\tan(u)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(u) \\cdot \\frac{1}{\\cos(u)} = \\frac{\\sin(u)}{\\cos(u)} = \\tan(u)$."
  },
  {
    "id": "trigrec-h-16",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(y) \\csc(y)$",
    "options": [
      {
        "latex": "\\tan(y)",
        "correct": false
      },
      {
        "latex": "\\sin(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(y)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(y) \\cdot \\frac{1}{\\sin(y)} = \\frac{\\cos(y)}{\\sin(y)} = \\cot(y)$."
  },
  {
    "id": "trigrec-h-17",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(z)}{\\csc(z)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(z)\\cos(z)",
        "correct": false
      },
      {
        "latex": "\\cot(z)",
        "correct": false
      },
      {
        "latex": "\\tan(z)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(z)}{1/\\sin(z)} = \\frac{\\sin(z)}{\\cos(z)} = \\tan(z)$."
  },
  {
    "id": "trigrec-h-18",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(\\phi) \\sec(\\phi)$",
    "options": [
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "\\tan(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(\\phi) \\cdot \\frac{1}{\\cos(\\phi)} = \\frac{\\sin(\\phi)}{\\cos(\\phi)} = \\tan(\\phi)$."
  },
  {
    "id": "trigrec-h-19",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(w) \\csc(w)$",
    "options": [
      {
        "latex": "\\tan(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(w)",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(w) \\cdot \\frac{1}{\\sin(w)} = \\frac{\\cos(w)}{\\sin(w)} = \\cot(w)$."
  },
  {
    "id": "trigrec-h-20",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(x)}{\\csc(x)}$",
    "options": [
      {
        "latex": "\\cot(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(x)\\cos(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(x)}{1/\\sin(x)} = \\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$."
  },
  {
    "id": "trigrec-h-21",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(\\theta) \\sec(\\theta)$",
    "options": [
      {
        "latex": "\\cot(\\theta)",
        "correct": false
      },
      {
        "latex": "\\cos(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(\\theta) \\cdot \\frac{1}{\\cos(\\theta)} = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\tan(\\theta)$."
  },
  {
    "id": "trigrec-h-22",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(\\alpha) \\csc(\\alpha)$",
    "options": [
      {
        "latex": "\\tan(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sin(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(\\alpha) \\cdot \\frac{1}{\\sin(\\alpha)} = \\frac{\\cos(\\alpha)}{\\sin(\\alpha)} = \\cot(\\alpha)$."
  },
  {
    "id": "trigrec-h-23",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(\\beta)}{\\csc(\\beta)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(\\beta)\\cos(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\beta)",
        "correct": false
      },
      {
        "latex": "\\tan(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(\\beta)}{1/\\sin(\\beta)} = \\frac{\\sin(\\beta)}{\\cos(\\beta)} = \\tan(\\beta)$."
  },
  {
    "id": "trigrec-h-24",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(t) \\sec(t)$",
    "options": [
      {
        "latex": "\\cot(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(t) \\cdot \\frac{1}{\\cos(t)} = \\frac{\\sin(t)}{\\cos(t)} = \\tan(t)$."
  },
  {
    "id": "trigrec-h-25",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(u) \\csc(u)$",
    "options": [
      {
        "latex": "\\tan(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(u)",
        "correct": false
      },
      {
        "latex": "\\cot(u)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(u) \\cdot \\frac{1}{\\sin(u)} = \\frac{\\cos(u)}{\\sin(u)} = \\cot(u)$."
  },
  {
    "id": "trigrec-h-26",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(y)}{\\csc(y)}$",
    "options": [
      {
        "latex": "\\cot(y)",
        "correct": false
      },
      {
        "latex": "\\sin(y)\\cos(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(y)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(y)}{1/\\sin(y)} = \\frac{\\sin(y)}{\\cos(y)} = \\tan(y)$."
  },
  {
    "id": "trigrec-h-27",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(z) \\sec(z)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(z)",
        "correct": false
      },
      {
        "latex": "\\cot(z)",
        "correct": false
      },
      {
        "latex": "\\tan(z)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(z) \\cdot \\frac{1}{\\cos(z)} = \\frac{\\sin(z)}{\\cos(z)} = \\tan(z)$."
  },
  {
    "id": "trigrec-h-28",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(\\phi) \\csc(\\phi)$",
    "options": [
      {
        "latex": "\\tan(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(\\phi)",
        "correct": false
      },
      {
        "latex": "\\cot(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(\\phi) \\cdot \\frac{1}{\\sin(\\phi)} = \\frac{\\cos(\\phi)}{\\sin(\\phi)} = \\cot(\\phi)$."
  },
  {
    "id": "trigrec-h-29",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(w)}{\\csc(w)}$",
    "options": [
      {
        "latex": "\\cot(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(w)\\cos(w)",
        "correct": false
      },
      {
        "latex": "\\tan(w)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(w)}{1/\\sin(w)} = \\frac{\\sin(w)}{\\cos(w)} = \\tan(w)$."
  },
  {
    "id": "trigrec-h-30",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(x) \\sec(x)$",
    "options": [
      {
        "latex": "\\cot(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(x) \\cdot \\frac{1}{\\cos(x)} = \\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$."
  },
  {
    "id": "trigrec-h-31",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(\\theta) \\csc(\\theta)$",
    "options": [
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(\\theta) \\cdot \\frac{1}{\\sin(\\theta)} = \\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\cot(\\theta)$."
  },
  {
    "id": "trigrec-h-32",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sec(\\alpha)}{\\csc(\\alpha)}$",
    "options": [
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sin(\\alpha)\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/\\cos(\\alpha)}{1/\\sin(\\alpha)} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\tan(\\alpha)$."
  },
  {
    "id": "trigrec-h-33",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sin(\\beta) \\sec(\\beta)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\beta)",
        "correct": false
      },
      {
        "latex": "\\tan(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\sin(\\beta) \\cdot \\frac{1}{\\cos(\\beta)} = \\frac{\\sin(\\beta)}{\\cos(\\beta)} = \\tan(\\beta)$."
  },
  {
    "id": "trigrec-h-34",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos(t) \\csc(t)$",
    "options": [
      {
        "latex": "\\tan(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin(t)",
        "correct": false
      },
      {
        "latex": "\\cot(t)",
        "correct": true
      }
    ],
    "explanation": "$\\cos(t) \\cdot \\frac{1}{\\sin(t)} = \\frac{\\cos(t)}{\\sin(t)} = \\cot(t)$."
  }
]
};
