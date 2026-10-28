// data/algebra/trigonometria/cociente.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "trig-cociente",
  lawName: "Identidades de cociente",
  lawFormula: "\\tan x = \\frac{\\sin x}{\\cos x}, \\quad \\cot x = \\frac{\\cos x}{\\sin x}",
  prerequisites: "Conocer seno, coseno y las identidades recíprocas.",
  available: true,
  questions: [
  {
    "id": "trigcoc-f-01",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\tan x$?",
    "options": [
      {
        "latex": "\\frac{\\sin x}{\\cos x}",
        "correct": true
      },
      {
        "latex": "\\frac{\\cos x}{\\sin x}",
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
    "explanation": "$\\tan x = \\frac{\\sin x}{\\cos x}$. Es la identidad de cociente de la tangente."
  },
  {
    "id": "trigcoc-f-02",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\cot x$?",
    "options": [
      {
        "latex": "\\frac{\\cos x}{\\sin x}",
        "correct": true
      },
      {
        "latex": "\\frac{\\sin x}{\\cos x}",
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
    "explanation": "$\\cot x = \\frac{\\cos x}{\\sin x}$. Es el recíproco de la tangente."
  },
  {
    "id": "trigcoc-f-03",
    "difficulty": "easy",
    "prompt": "Si $\\sin x = \\frac{3}{5}$ y $\\cos x = \\frac{4}{5}$, ¿cuánto vale $\\tan x$?",
    "options": [
      {
        "latex": "\\frac{3}{4}",
        "correct": true
      },
      {
        "latex": "\\frac{4}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": false
      }
    ],
    "explanation": "$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{3/5}{4/5} = \\frac{3}{4}$."
  },
  {
    "id": "trigcoc-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\tan x \\cdot \\cos x$",
    "options": [
      {
        "latex": "\\sin x",
        "correct": true
      },
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      }
    ],
    "explanation": "$\\tan x \\cdot \\cos x = \\frac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin x$."
  },
  {
    "id": "trigcoc-f-05",
    "difficulty": "easy",
    "prompt": "Si $\\sin x = \\frac{1}{2}$ y $\\cos x = \\frac{\\sqrt{3}}{2}$, ¿cuánto vale $\\tan x$?",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{3}}",
        "correct": true
      },
      {
        "latex": "\\sqrt{3}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{3}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$."
  },
  {
    "id": "trigcoc-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(y)}{\\cos(y)}$",
    "options": [
      {
        "latex": "\\cot(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(y)",
        "correct": false
      },
      {
        "latex": "\\tan(y)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(y)}{\\cos(y)} = \\tan(y)$."
  },
  {
    "id": "trigcoc-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(z)}{\\sin(z)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(z)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(z)}{\\sin(z)} = \\cot(z)$."
  },
  {
    "id": "trigcoc-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\phi)}{\\cos(\\phi)}$",
    "options": [
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sec(\\phi)",
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
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\phi)}{\\cos(\\phi)} = \\tan(\\phi)$."
  },
  {
    "id": "trigcoc-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(w)}{\\sin(w)}$",
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
        "latex": "\\csc(w)",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(w)}{\\sin(w)} = \\cot(w)$."
  },
  {
    "id": "trigcoc-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(x)}{\\cos(x)}$",
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
        "latex": "\\sec(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$."
  },
  {
    "id": "trigcoc-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\theta)}{\\sin(\\theta)}$",
    "options": [
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\cot(\\theta)$."
  },
  {
    "id": "trigcoc-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$",
    "options": [
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\tan(\\alpha)$."
  },
  {
    "id": "trigcoc-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\beta)}{\\sin(\\beta)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(\\beta)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\beta)}{\\sin(\\beta)} = \\cot(\\beta)$."
  },
  {
    "id": "trigcoc-f-14",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(t)}{\\cos(t)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(t)",
        "correct": false
      },
      {
        "latex": "\\cot(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(t)}{\\cos(t)} = \\tan(t)$."
  },
  {
    "id": "trigcoc-f-15",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(u)}{\\sin(u)}$",
    "options": [
      {
        "latex": "\\tan(u)",
        "correct": false
      },
      {
        "latex": "\\csc(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(u)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(u)}{\\sin(u)} = \\cot(u)$."
  },
  {
    "id": "trigcoc-f-16",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(y)}{\\cos(y)}$",
    "options": [
      {
        "latex": "\\cot(y)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(y)",
        "correct": false
      },
      {
        "latex": "\\tan(y)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(y)}{\\cos(y)} = \\tan(y)$."
  },
  {
    "id": "trigcoc-f-17",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(z)}{\\sin(z)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(z)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(z)}{\\sin(z)} = \\cot(z)$."
  },
  {
    "id": "trigcoc-f-18",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\phi)}{\\cos(\\phi)}$",
    "options": [
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sec(\\phi)",
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
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\phi)}{\\cos(\\phi)} = \\tan(\\phi)$."
  },
  {
    "id": "trigcoc-f-19",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(w)}{\\sin(w)}$",
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
        "latex": "\\csc(w)",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(w)}{\\sin(w)} = \\cot(w)$."
  },
  {
    "id": "trigcoc-f-20",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(x)}{\\cos(x)}$",
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
        "latex": "\\sec(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$."
  },
  {
    "id": "trigcoc-f-21",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\theta)}{\\sin(\\theta)}$",
    "options": [
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\cot(\\theta)$."
  },
  {
    "id": "trigcoc-f-22",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\tan(\\alpha)$."
  },
  {
    "id": "trigcoc-f-23",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\beta)}{\\sin(\\beta)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(\\beta)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\beta)}{\\sin(\\beta)} = \\cot(\\beta)$."
  },
  {
    "id": "trigcoc-f-24",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(t)}{\\cos(t)}$",
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
        "latex": "\\sec(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(t)}{\\cos(t)} = \\tan(t)$."
  },
  {
    "id": "trigcoc-f-25",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(u)}{\\sin(u)}$",
    "options": [
      {
        "latex": "\\tan(u)",
        "correct": false
      },
      {
        "latex": "\\csc(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(u)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(u)}{\\sin(u)} = \\cot(u)$."
  },
  {
    "id": "trigcoc-f-26",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(y)}{\\cos(y)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(y)",
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
    "explanation": "Identidad del cociente: $\\frac{\\sin(y)}{\\cos(y)} = \\tan(y)$."
  },
  {
    "id": "trigcoc-f-27",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(z)}{\\sin(z)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(z)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(z)}{\\sin(z)} = \\cot(z)$."
  },
  {
    "id": "trigcoc-f-28",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\phi)}{\\cos(\\phi)}$",
    "options": [
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sec(\\phi)",
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
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\phi)}{\\cos(\\phi)} = \\tan(\\phi)$."
  },
  {
    "id": "trigcoc-f-29",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(w)}{\\sin(w)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(w)",
        "correct": false
      },
      {
        "latex": "\\csc(w)",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(w)}{\\sin(w)} = \\cot(w)$."
  },
  {
    "id": "trigcoc-f-30",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(x)}{\\cos(x)}$",
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
        "latex": "\\sec(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$."
  },
  {
    "id": "trigcoc-f-31",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\theta)}{\\sin(\\theta)}$",
    "options": [
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\cot(\\theta)$."
  },
  {
    "id": "trigcoc-f-32",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\tan(\\alpha)$."
  },
  {
    "id": "trigcoc-f-33",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\cos(\\beta)}{\\sin(\\beta)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(\\beta)",
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
    "explanation": "Identidad del cociente: $\\frac{\\cos(\\beta)}{\\sin(\\beta)} = \\cot(\\beta)$."
  },
  {
    "id": "trigcoc-f-34",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{\\sin(t)}{\\cos(t)}$",
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
        "latex": "\\sec(t)",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": true
      }
    ],
    "explanation": "Identidad del cociente: $\\frac{\\sin(t)}{\\cos(t)} = \\tan(t)$."
  },
  {
    "id": "trigcoc-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\cot x \\cdot \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": true
      },
      {
        "latex": "\\sin x",
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
    "explanation": "$\\cot x \\cdot \\sin x = \\frac{\\cos x}{\\sin x} \\cdot \\sin x = \\cos x$."
  },
  {
    "id": "trigcoc-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\sin x \\cdot \\cot x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": true
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      }
    ],
    "explanation": "$\\sin x \\cdot \\cot x = \\sin x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x$."
  },
  {
    "id": "trigcoc-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\tan x \\cdot \\cos x \\cdot \\cot x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": true
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      }
    ],
    "explanation": "$\\tan x \\cdot \\cot x = 1$, así que queda $\\cos x$."
  },
  {
    "id": "trigcoc-m-04",
    "difficulty": "medium",
    "prompt": "Si $\\tan x = \\frac{3}{4}$, ¿cuánto vale $\\cot x$?",
    "options": [
      {
        "latex": "\\frac{4}{3}",
        "correct": true
      },
      {
        "latex": "\\frac{3}{4}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{4}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\cot x = \\frac{1}{\\tan x} = \\frac{1}{3/4} = \\frac{4}{3}$."
  },
  {
    "id": "trigcoc-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{\\sin x}{\\cos x} \\cdot \\frac{\\cos x}{\\sin x}$",
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
        "latex": "\\sin x \\cos x",
        "correct": false
      }
    ],
    "explanation": "$\\tan x \\cdot \\cot x = 1$, porque se cancelan numerador y denominador."
  },
  {
    "id": "trigcoc-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\cos(y) \\tan(y)$",
    "options": [
      {
        "latex": "3\\cos(y)",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\sec(y)",
        "correct": false
      },
      {
        "latex": "3\\sin(y)",
        "correct": true
      }
    ],
    "explanation": "$3\\cos(y) \\cdot \\frac{\\sin(y)}{\\cos(y)} = 3\\sin(y)$."
  },
  {
    "id": "trigcoc-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\sin(z) \\cot(z)$",
    "options": [
      {
        "latex": "4\\sin(z)",
        "correct": false
      },
      {
        "latex": "4\\csc(z)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\cos(z)",
        "correct": true
      }
    ],
    "explanation": "$4\\sin(z) \\cdot \\frac{\\cos(z)}{\\sin(z)} = 4\\cos(z)$."
  },
  {
    "id": "trigcoc-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\cos(\\phi) \\tan(\\phi)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\sec(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\sin(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$5\\cos(\\phi) \\cdot \\frac{\\sin(\\phi)}{\\cos(\\phi)} = 5\\sin(\\phi)$."
  },
  {
    "id": "trigcoc-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\sin(w) \\cot(w)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\csc(w)",
        "correct": false
      },
      {
        "latex": "6\\sin(w)",
        "correct": false
      },
      {
        "latex": "6\\cos(w)",
        "correct": true
      }
    ],
    "explanation": "$6\\sin(w) \\cdot \\frac{\\cos(w)}{\\sin(w)} = 6\\cos(w)$."
  },
  {
    "id": "trigcoc-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\cos(x) \\tan(x)$",
    "options": [
      {
        "latex": "2\\cos(x)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\sec(x)",
        "correct": false
      },
      {
        "latex": "2\\sin(x)",
        "correct": true
      }
    ],
    "explanation": "$2\\cos(x) \\cdot \\frac{\\sin(x)}{\\cos(x)} = 2\\sin(x)$."
  },
  {
    "id": "trigcoc-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\sin(\\theta) \\cot(\\theta)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "3\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "3\\cos(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$3\\sin(\\theta) \\cdot \\frac{\\cos(\\theta)}{\\sin(\\theta)} = 3\\cos(\\theta)$."
  },
  {
    "id": "trigcoc-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\cos(\\alpha) \\tan(\\alpha)$",
    "options": [
      {
        "latex": "4\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "4\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\sin(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$4\\cos(\\alpha) \\cdot \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = 4\\sin(\\alpha)$."
  },
  {
    "id": "trigcoc-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\sin(\\beta) \\cot(\\beta)$",
    "options": [
      {
        "latex": "5\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "5\\csc(\\beta)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\cos(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$5\\sin(\\beta) \\cdot \\frac{\\cos(\\beta)}{\\sin(\\beta)} = 5\\cos(\\beta)$."
  },
  {
    "id": "trigcoc-m-14",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\cos(t) \\tan(t)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\sec(t)",
        "correct": false
      },
      {
        "latex": "6\\cos(t)",
        "correct": false
      },
      {
        "latex": "6\\sin(t)",
        "correct": true
      }
    ],
    "explanation": "$6\\cos(t) \\cdot \\frac{\\sin(t)}{\\cos(t)} = 6\\sin(t)$."
  },
  {
    "id": "trigcoc-m-15",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\sin(u) \\cot(u)$",
    "options": [
      {
        "latex": "2\\sin(u)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\csc(u)",
        "correct": false
      },
      {
        "latex": "2\\cos(u)",
        "correct": true
      }
    ],
    "explanation": "$2\\sin(u) \\cdot \\frac{\\cos(u)}{\\sin(u)} = 2\\cos(u)$."
  },
  {
    "id": "trigcoc-m-16",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\cos(y) \\tan(y)$",
    "options": [
      {
        "latex": "3\\cos(y)",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\sec(y)",
        "correct": false
      },
      {
        "latex": "3\\sin(y)",
        "correct": true
      }
    ],
    "explanation": "$3\\cos(y) \\cdot \\frac{\\sin(y)}{\\cos(y)} = 3\\sin(y)$."
  },
  {
    "id": "trigcoc-m-17",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\sin(z) \\cot(z)$",
    "options": [
      {
        "latex": "4\\sin(z)",
        "correct": false
      },
      {
        "latex": "4\\csc(z)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\cos(z)",
        "correct": true
      }
    ],
    "explanation": "$4\\sin(z) \\cdot \\frac{\\cos(z)}{\\sin(z)} = 4\\cos(z)$."
  },
  {
    "id": "trigcoc-m-18",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\cos(\\phi) \\tan(\\phi)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\sec(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\sin(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$5\\cos(\\phi) \\cdot \\frac{\\sin(\\phi)}{\\cos(\\phi)} = 5\\sin(\\phi)$."
  },
  {
    "id": "trigcoc-m-19",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\sin(w) \\cot(w)$",
    "options": [
      {
        "latex": "6\\sin(w)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\csc(w)",
        "correct": false
      },
      {
        "latex": "6\\cos(w)",
        "correct": true
      }
    ],
    "explanation": "$6\\sin(w) \\cdot \\frac{\\cos(w)}{\\sin(w)} = 6\\cos(w)$."
  },
  {
    "id": "trigcoc-m-20",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\cos(x) \\tan(x)$",
    "options": [
      {
        "latex": "2\\cos(x)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\sec(x)",
        "correct": false
      },
      {
        "latex": "2\\sin(x)",
        "correct": true
      }
    ],
    "explanation": "$2\\cos(x) \\cdot \\frac{\\sin(x)}{\\cos(x)} = 2\\sin(x)$."
  },
  {
    "id": "trigcoc-m-21",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\sin(\\theta) \\cot(\\theta)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "3\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "3\\cos(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$3\\sin(\\theta) \\cdot \\frac{\\cos(\\theta)}{\\sin(\\theta)} = 3\\cos(\\theta)$."
  },
  {
    "id": "trigcoc-m-22",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\cos(\\alpha) \\tan(\\alpha)$",
    "options": [
      {
        "latex": "4\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "4\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\sin(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$4\\cos(\\alpha) \\cdot \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = 4\\sin(\\alpha)$."
  },
  {
    "id": "trigcoc-m-23",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\sin(\\beta) \\cot(\\beta)$",
    "options": [
      {
        "latex": "5\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "5\\csc(\\beta)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\cos(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$5\\sin(\\beta) \\cdot \\frac{\\cos(\\beta)}{\\sin(\\beta)} = 5\\cos(\\beta)$."
  },
  {
    "id": "trigcoc-m-24",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\cos(t) \\tan(t)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\sec(t)",
        "correct": false
      },
      {
        "latex": "6\\cos(t)",
        "correct": false
      },
      {
        "latex": "6\\sin(t)",
        "correct": true
      }
    ],
    "explanation": "$6\\cos(t) \\cdot \\frac{\\sin(t)}{\\cos(t)} = 6\\sin(t)$."
  },
  {
    "id": "trigcoc-m-25",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\sin(u) \\cot(u)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\csc(u)",
        "correct": false
      },
      {
        "latex": "2\\sin(u)",
        "correct": false
      },
      {
        "latex": "2\\cos(u)",
        "correct": true
      }
    ],
    "explanation": "$2\\sin(u) \\cdot \\frac{\\cos(u)}{\\sin(u)} = 2\\cos(u)$."
  },
  {
    "id": "trigcoc-m-26",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\cos(y) \\tan(y)$",
    "options": [
      {
        "latex": "3\\cos(y)",
        "correct": false
      },
      {
        "latex": "3\\sec(y)",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\sin(y)",
        "correct": true
      }
    ],
    "explanation": "$3\\cos(y) \\cdot \\frac{\\sin(y)}{\\cos(y)} = 3\\sin(y)$."
  },
  {
    "id": "trigcoc-m-27",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\sin(z) \\cot(z)$",
    "options": [
      {
        "latex": "4\\sin(z)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\csc(z)",
        "correct": false
      },
      {
        "latex": "4\\cos(z)",
        "correct": true
      }
    ],
    "explanation": "$4\\sin(z) \\cdot \\frac{\\cos(z)}{\\sin(z)} = 4\\cos(z)$."
  },
  {
    "id": "trigcoc-m-28",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\cos(\\phi) \\tan(\\phi)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\sec(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "5\\sin(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$5\\cos(\\phi) \\cdot \\frac{\\sin(\\phi)}{\\cos(\\phi)} = 5\\sin(\\phi)$."
  },
  {
    "id": "trigcoc-m-29",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\sin(w) \\cot(w)$",
    "options": [
      {
        "latex": "6\\sin(w)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\csc(w)",
        "correct": false
      },
      {
        "latex": "6\\cos(w)",
        "correct": true
      }
    ],
    "explanation": "$6\\sin(w) \\cdot \\frac{\\cos(w)}{\\sin(w)} = 6\\cos(w)$."
  },
  {
    "id": "trigcoc-m-30",
    "difficulty": "medium",
    "prompt": "Simplifica: $2\\cos(x) \\tan(x)$",
    "options": [
      {
        "latex": "2\\cos(x)",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "2\\sec(x)",
        "correct": false
      },
      {
        "latex": "2\\sin(x)",
        "correct": true
      }
    ],
    "explanation": "$2\\cos(x) \\cdot \\frac{\\sin(x)}{\\cos(x)} = 2\\sin(x)$."
  },
  {
    "id": "trigcoc-m-31",
    "difficulty": "medium",
    "prompt": "Simplifica: $3\\sin(\\theta) \\cot(\\theta)$",
    "options": [
      {
        "latex": "3\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "3\\csc(\\theta)",
        "correct": false
      },
      {
        "latex": "3\\cos(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$3\\sin(\\theta) \\cdot \\frac{\\cos(\\theta)}{\\sin(\\theta)} = 3\\cos(\\theta)$."
  },
  {
    "id": "trigcoc-m-32",
    "difficulty": "medium",
    "prompt": "Simplifica: $4\\cos(\\alpha) \\tan(\\alpha)$",
    "options": [
      {
        "latex": "4\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "4\\sec(\\alpha)",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "4\\sin(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$4\\cos(\\alpha) \\cdot \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = 4\\sin(\\alpha)$."
  },
  {
    "id": "trigcoc-m-33",
    "difficulty": "medium",
    "prompt": "Simplifica: $5\\sin(\\beta) \\cot(\\beta)$",
    "options": [
      {
        "latex": "5\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "5\\csc(\\beta)",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5\\cos(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$5\\sin(\\beta) \\cdot \\frac{\\cos(\\beta)}{\\sin(\\beta)} = 5\\cos(\\beta)$."
  },
  {
    "id": "trigcoc-m-34",
    "difficulty": "medium",
    "prompt": "Simplifica: $6\\cos(t) \\tan(t)$",
    "options": [
      {
        "latex": "6\\cos(t)",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6\\sec(t)",
        "correct": false
      },
      {
        "latex": "6\\sin(t)",
        "correct": true
      }
    ],
    "explanation": "$6\\cos(t) \\cdot \\frac{\\sin(t)}{\\cos(t)} = 6\\sin(t)$."
  },
  {
    "id": "trigcoc-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin x}{\\tan x}$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": true
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\frac{\\sin x}{\\tan x} = \\sin x \\div \\frac{\\sin x}{\\cos x} = \\sin x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x$."
  },
  {
    "id": "trigcoc-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\sin x = \\frac{5}{13}$ y $\\cos x = \\frac{12}{13}$, ¿cuánto vale $\\cot x$?",
    "options": [
      {
        "latex": "\\frac{12}{5}",
        "correct": true
      },
      {
        "latex": "\\frac{5}{12}",
        "correct": false
      },
      {
        "latex": "\\frac{13}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{13}{12}",
        "correct": false
      }
    ],
    "explanation": "$\\cot x = \\frac{\\cos x}{\\sin x} = \\frac{12/13}{5/13} = \\frac{12}{5}$."
  },
  {
    "id": "trigcoc-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan x}{\\cot x}$",
    "options": [
      {
        "latex": "\\tan^2 x",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2 x",
        "correct": false
      },
      {
        "latex": "\\cos^2 x",
        "correct": false
      }
    ],
    "explanation": "$\\frac{\\tan x}{\\cot x} = \\tan x \\div \\frac{1}{\\tan x} = \\tan x \\cdot \\tan x = \\tan^2 x$."
  },
  {
    "id": "trigcoc-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\sin x + \\cos x}{\\cos x}$",
    "options": [
      {
        "latex": "\\tan x + 1",
        "correct": true
      },
      {
        "latex": "\\cot x + 1",
        "correct": false
      },
      {
        "latex": "\\tan x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$\\frac{\\sin x + \\cos x}{\\cos x} = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\cos x} = \\tan x + 1$."
  },
  {
    "id": "trigcoc-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\cos x \\cdot \\tan x + \\sin x$",
    "options": [
      {
        "latex": "2\\sin x",
        "correct": true
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "2\\cos x",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      }
    ],
    "explanation": "$\\cos x \\cdot \\tan x = \\cos x \\cdot \\frac{\\sin x}{\\cos x} = \\sin x$. Sumando $\\sin x$: $2\\sin x$."
  },
  {
    "id": "trigcoc-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(y)}{\\sin(y)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(y)",
        "correct": false
      },
      {
        "latex": "\\cos(y)",
        "correct": false
      },
      {
        "latex": "\\sec(y)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(y)/\\cos(y)}{\\sin(y)} = \\frac{1}{\\cos(y)} = \\sec(y)$."
  },
  {
    "id": "trigcoc-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(z)}{\\cos(z)}$",
    "options": [
      {
        "latex": "\\sin(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(z)",
        "correct": false
      },
      {
        "latex": "\\csc(z)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(z)/\\sin(z)}{\\cos(z)} = \\frac{1}{\\sin(z)} = \\csc(z)$."
  },
  {
    "id": "trigcoc-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(\\phi)}{\\tan^2(\\phi)}$",
    "options": [
      {
        "latex": "\\sec^2(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\phi)",
        "correct": false
      },
      {
        "latex": "\\csc^2(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(\\phi)}{\\tan^2(\\phi)} = \\frac{1/\\cos^2(\\phi)}{\\sin^2(\\phi)/\\cos^2(\\phi)} = \\frac{1}{\\sin^2(\\phi)} = \\csc^2(\\phi)$."
  },
  {
    "id": "trigcoc-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(w)}{\\sin(w)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(w)",
        "correct": false
      },
      {
        "latex": "\\cos(w)",
        "correct": false
      },
      {
        "latex": "\\sec(w)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(w)/\\cos(w)}{\\sin(w)} = \\frac{1}{\\cos(w)} = \\sec(w)$."
  },
  {
    "id": "trigcoc-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(x)}{\\cos(x)}$",
    "options": [
      {
        "latex": "\\sin(x)",
        "correct": false
      },
      {
        "latex": "\\tan(x)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(x)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(x)/\\sin(x)}{\\cos(x)} = \\frac{1}{\\sin(x)} = \\csc(x)$."
  },
  {
    "id": "trigcoc-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(\\theta)}{\\tan^2(\\theta)}$",
    "options": [
      {
        "latex": "\\sec^2(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\theta)",
        "correct": false
      },
      {
        "latex": "\\csc^2(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(\\theta)}{\\tan^2(\\theta)} = \\frac{1/\\cos^2(\\theta)}{\\sin^2(\\theta)/\\cos^2(\\theta)} = \\frac{1}{\\sin^2(\\theta)} = \\csc^2(\\theta)$."
  },
  {
    "id": "trigcoc-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(\\alpha)}{\\sin(\\alpha)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\cos(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sec(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(\\alpha)/\\cos(\\alpha)}{\\sin(\\alpha)} = \\frac{1}{\\cos(\\alpha)} = \\sec(\\alpha)$."
  },
  {
    "id": "trigcoc-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(\\beta)}{\\cos(\\beta)}$",
    "options": [
      {
        "latex": "\\sin(\\beta)",
        "correct": false
      },
      {
        "latex": "\\tan(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(\\beta)/\\sin(\\beta)}{\\cos(\\beta)} = \\frac{1}{\\sin(\\beta)} = \\csc(\\beta)$."
  },
  {
    "id": "trigcoc-h-14",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(t)}{\\tan^2(t)}$",
    "options": [
      {
        "latex": "\\sec^2(t)",
        "correct": false
      },
      {
        "latex": "\\sin^2(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc^2(t)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(t)}{\\tan^2(t)} = \\frac{1/\\cos^2(t)}{\\sin^2(t)/\\cos^2(t)} = \\frac{1}{\\sin^2(t)} = \\csc^2(t)$."
  },
  {
    "id": "trigcoc-h-15",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(u)}{\\sin(u)}$",
    "options": [
      {
        "latex": "\\cos(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(u)",
        "correct": false
      },
      {
        "latex": "\\sec(u)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(u)/\\cos(u)}{\\sin(u)} = \\frac{1}{\\cos(u)} = \\sec(u)$."
  },
  {
    "id": "trigcoc-h-16",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(y)}{\\cos(y)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(y)",
        "correct": false
      },
      {
        "latex": "\\sin(y)",
        "correct": false
      },
      {
        "latex": "\\csc(y)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(y)/\\sin(y)}{\\cos(y)} = \\frac{1}{\\sin(y)} = \\csc(y)$."
  },
  {
    "id": "trigcoc-h-17",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(z)}{\\tan^2(z)}$",
    "options": [
      {
        "latex": "\\sec^2(z)",
        "correct": false
      },
      {
        "latex": "\\sin^2(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc^2(z)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(z)}{\\tan^2(z)} = \\frac{1/\\cos^2(z)}{\\sin^2(z)/\\cos^2(z)} = \\frac{1}{\\sin^2(z)} = \\csc^2(z)$."
  },
  {
    "id": "trigcoc-h-18",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(\\phi)}{\\sin(\\phi)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cos(\\phi)",
        "correct": false
      },
      {
        "latex": "\\cot(\\phi)",
        "correct": false
      },
      {
        "latex": "\\sec(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(\\phi)/\\cos(\\phi)}{\\sin(\\phi)} = \\frac{1}{\\cos(\\phi)} = \\sec(\\phi)$."
  },
  {
    "id": "trigcoc-h-19",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(w)}{\\cos(w)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(w)",
        "correct": false
      },
      {
        "latex": "\\sin(w)",
        "correct": false
      },
      {
        "latex": "\\csc(w)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(w)/\\sin(w)}{\\cos(w)} = \\frac{1}{\\sin(w)} = \\csc(w)$."
  },
  {
    "id": "trigcoc-h-20",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(x)}{\\tan^2(x)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(x)",
        "correct": false
      },
      {
        "latex": "\\sec^2(x)",
        "correct": false
      },
      {
        "latex": "\\csc^2(x)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(x)}{\\tan^2(x)} = \\frac{1/\\cos^2(x)}{\\sin^2(x)/\\cos^2(x)} = \\frac{1}{\\sin^2(x)} = \\csc^2(x)$."
  },
  {
    "id": "trigcoc-h-21",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(\\theta)}{\\sin(\\theta)}$",
    "options": [
      {
        "latex": "\\cos(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(\\theta)",
        "correct": false
      },
      {
        "latex": "\\sec(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(\\theta)/\\cos(\\theta)}{\\sin(\\theta)} = \\frac{1}{\\cos(\\theta)} = \\sec(\\theta)$."
  },
  {
    "id": "trigcoc-h-22",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(\\alpha)}{\\cos(\\alpha)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sin(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\csc(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(\\alpha)/\\sin(\\alpha)}{\\cos(\\alpha)} = \\frac{1}{\\sin(\\alpha)} = \\csc(\\alpha)$."
  },
  {
    "id": "trigcoc-h-23",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(\\beta)}{\\tan^2(\\beta)}$",
    "options": [
      {
        "latex": "\\sec^2(\\beta)",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc^2(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(\\beta)}{\\tan^2(\\beta)} = \\frac{1/\\cos^2(\\beta)}{\\sin^2(\\beta)/\\cos^2(\\beta)} = \\frac{1}{\\sin^2(\\beta)} = \\csc^2(\\beta)$."
  },
  {
    "id": "trigcoc-h-24",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(t)}{\\sin(t)}$",
    "options": [
      {
        "latex": "\\cos(t)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(t)",
        "correct": false
      },
      {
        "latex": "\\sec(t)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(t)/\\cos(t)}{\\sin(t)} = \\frac{1}{\\cos(t)} = \\sec(t)$."
  },
  {
    "id": "trigcoc-h-25",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(u)}{\\cos(u)}$",
    "options": [
      {
        "latex": "\\sin(u)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(u)",
        "correct": false
      },
      {
        "latex": "\\csc(u)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(u)/\\sin(u)}{\\cos(u)} = \\frac{1}{\\sin(u)} = \\csc(u)$."
  },
  {
    "id": "trigcoc-h-26",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(y)}{\\tan^2(y)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(y)",
        "correct": false
      },
      {
        "latex": "\\sec^2(y)",
        "correct": false
      },
      {
        "latex": "\\csc^2(y)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(y)}{\\tan^2(y)} = \\frac{1/\\cos^2(y)}{\\sin^2(y)/\\cos^2(y)} = \\frac{1}{\\sin^2(y)} = \\csc^2(y)$."
  },
  {
    "id": "trigcoc-h-27",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(z)}{\\sin(z)}$",
    "options": [
      {
        "latex": "\\cos(z)",
        "correct": false
      },
      {
        "latex": "\\cot(z)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(z)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(z)/\\cos(z)}{\\sin(z)} = \\frac{1}{\\cos(z)} = \\sec(z)$."
  },
  {
    "id": "trigcoc-h-28",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(\\phi)}{\\cos(\\phi)}$",
    "options": [
      {
        "latex": "\\sin(\\phi)",
        "correct": false
      },
      {
        "latex": "\\tan(\\phi)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc(\\phi)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(\\phi)/\\sin(\\phi)}{\\cos(\\phi)} = \\frac{1}{\\sin(\\phi)} = \\csc(\\phi)$."
  },
  {
    "id": "trigcoc-h-29",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(w)}{\\tan^2(w)}$",
    "options": [
      {
        "latex": "\\sec^2(w)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sin^2(w)",
        "correct": false
      },
      {
        "latex": "\\csc^2(w)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(w)}{\\tan^2(w)} = \\frac{1/\\cos^2(w)}{\\sin^2(w)/\\cos^2(w)} = \\frac{1}{\\sin^2(w)} = \\csc^2(w)$."
  },
  {
    "id": "trigcoc-h-30",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(x)}{\\sin(x)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\cot(x)",
        "correct": false
      },
      {
        "latex": "\\cos(x)",
        "correct": false
      },
      {
        "latex": "\\sec(x)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(x)/\\cos(x)}{\\sin(x)} = \\frac{1}{\\cos(x)} = \\sec(x)$."
  },
  {
    "id": "trigcoc-h-31",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(\\theta)}{\\cos(\\theta)}$",
    "options": [
      {
        "latex": "\\sin(\\theta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(\\theta)",
        "correct": false
      },
      {
        "latex": "\\csc(\\theta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(\\theta)/\\sin(\\theta)}{\\cos(\\theta)} = \\frac{1}{\\sin(\\theta)} = \\csc(\\theta)$."
  },
  {
    "id": "trigcoc-h-32",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{1 + \\tan^2(\\alpha)}{\\tan^2(\\alpha)}$",
    "options": [
      {
        "latex": "\\sec^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "\\sin^2(\\alpha)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\csc^2(\\alpha)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sec^2(\\alpha)}{\\tan^2(\\alpha)} = \\frac{1/\\cos^2(\\alpha)}{\\sin^2(\\alpha)/\\cos^2(\\alpha)} = \\frac{1}{\\sin^2(\\alpha)} = \\csc^2(\\alpha)$."
  },
  {
    "id": "trigcoc-h-33",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\tan(\\beta)}{\\sin(\\beta)}$",
    "options": [
      {
        "latex": "\\cos(\\beta)",
        "correct": false
      },
      {
        "latex": "\\cot(\\beta)",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sec(\\beta)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\sin(\\beta)/\\cos(\\beta)}{\\sin(\\beta)} = \\frac{1}{\\cos(\\beta)} = \\sec(\\beta)$."
  },
  {
    "id": "trigcoc-h-34",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{\\cot(t)}{\\cos(t)}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\tan(t)",
        "correct": false
      },
      {
        "latex": "\\sin(t)",
        "correct": false
      },
      {
        "latex": "\\csc(t)",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\cos(t)/\\sin(t)}{\\cos(t)} = \\frac{1}{\\sin(t)} = \\csc(t)$."
  }
]
};
