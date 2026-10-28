// data/algebra/cuadratica/formula-general.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default {
  lawId: "cuadratica-formula-general",
  lawName: "Ecuación cuadrática (fórmula general)",
  lawFormula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  prerequisites: "Conocer operaciones algebraicas y raíces cuadradas.",
  available: true,
  questions: [
  {
    "id": "cuad-f-01",
    "difficulty": "easy",
    "prompt": "En $ax^2 + bx + c = 0$, ¿cuál es la fórmula general?",
    "options": [
      {
        "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        "correct": true
      },
      {
        "latex": "x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}",
        "correct": false
      },
      {
        "latex": "x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        "correct": false
      },
      {
        "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}",
        "correct": false
      }
    ],
    "explanation": "La fórmula general es $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. El discriminante es $b^2 - 4ac$."
  },
  {
    "id": "cuad-f-02",
    "difficulty": "easy",
    "prompt": "Resuelve: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = \\pm 2",
        "correct": true
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      }
    ],
    "explanation": "$x^2 = 4$, por lo que $x = \\pm 2$."
  },
  {
    "id": "cuad-f-03",
    "difficulty": "easy",
    "prompt": "Resuelve: $x^2 - 9 = 0$",
    "options": [
      {
        "latex": "x = \\pm 3",
        "correct": true
      },
      {
        "latex": "x = 3",
        "correct": false
      },
      {
        "latex": "x = 9",
        "correct": false
      },
      {
        "latex": "x = \\pm 9",
        "correct": false
      }
    ],
    "explanation": "$x^2 = 9$, por lo que $x = \\pm 3$."
  },
  {
    "id": "cuad-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuál es el discriminante de $x^2 + 2x + 1 = 0$?",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      }
    ],
    "explanation": "$b^2 - 4ac = 2^2 - 4(1)(1) = 4 - 4 = 0$."
  },
  {
    "id": "cuad-f-05",
    "difficulty": "easy",
    "prompt": "Resuelve: $x^2 - x = 0$",
    "options": [
      {
        "latex": "x = 0 \\text{ o } x = 1",
        "correct": true
      },
      {
        "latex": "x = 1 \\text{ o } x = -1",
        "correct": false
      },
      {
        "latex": "x = 0 \\text{ o } x = -1",
        "correct": false
      },
      {
        "latex": "x = 0",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $x(x - 1) = 0$, por lo que $x = 0$ o $x = 1$."
  },
  {
    "id": "cuad-f-06",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-07",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 2) = 0$?",
    "options": [
      {
        "latex": "x = 2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -2",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "cuad-f-08",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 1 = 0$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "37",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(1) = 25 - 12 = 13$."
  },
  {
    "id": "cuad-f-09",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-10",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 8) = 0$?",
    "options": [
      {
        "latex": "x = 5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -8",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -8",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 8 = 0 \\implies x = -8$."
  },
  {
    "id": "cuad-f-100",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 6) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -6",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 6 = 0 \\implies x = -6$."
  },
  {
    "id": "cuad-f-11",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 4 = 0$",
    "options": [
      {
        "latex": "-35",
        "correct": false
      },
      {
        "latex": "57",
        "correct": false
      },
      {
        "latex": "-43",
        "correct": false
      },
      {
        "latex": "-39",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(4) = 9 - 48 = -39$."
  },
  {
    "id": "cuad-f-12",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-13",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 7) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -7",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -7",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 7 = 0 \\implies x = -7$."
  },
  {
    "id": "cuad-f-14",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 3 = 0$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "72",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(3) = 36 - 36 = 0$."
  },
  {
    "id": "cuad-f-15",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-16",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 6) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -6",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 6 = 0 \\implies x = -6$."
  },
  {
    "id": "cuad-f-17",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 2 = 0$",
    "options": [
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(2) = 16 - 24 = -8$."
  },
  {
    "id": "cuad-f-18",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-19",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 5) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -5",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 5 = 0 \\implies x = -5$."
  },
  {
    "id": "cuad-f-20",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 1 = 0$",
    "options": [
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(1) = 4 - 12 = -8$."
  },
  {
    "id": "cuad-f-21",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-22",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 4) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -4",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 4 = 0 \\implies x = -4$."
  },
  {
    "id": "cuad-f-23",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 4 = 0$",
    "options": [
      {
        "latex": "-19",
        "correct": false
      },
      {
        "latex": "73",
        "correct": false
      },
      {
        "latex": "-27",
        "correct": false
      },
      {
        "latex": "-23",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(4) = 25 - 48 = -23$."
  },
  {
    "id": "cuad-f-24",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-25",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 3) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -3",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 3 = 0 \\implies x = -3$."
  },
  {
    "id": "cuad-f-26",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 3 = 0$",
    "options": [
      {
        "latex": "-23",
        "correct": false
      },
      {
        "latex": "-31",
        "correct": false
      },
      {
        "latex": "45",
        "correct": false
      },
      {
        "latex": "-27",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(3) = 9 - 36 = -27$."
  },
  {
    "id": "cuad-f-27",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-28",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 2) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -2",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "cuad-f-29",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 2 = 0$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "60",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(2) = 36 - 24 = 12$."
  },
  {
    "id": "cuad-f-30",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-31",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 8) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -8",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -8",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 8 = 0 \\implies x = -8$."
  },
  {
    "id": "cuad-f-32",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 1 = 0$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(1) = 16 - 12 = 4$."
  },
  {
    "id": "cuad-f-33",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-34",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 7) = 0$?",
    "options": [
      {
        "latex": "x = 5, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -7",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -7",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 7 = 0 \\implies x = -7$."
  },
  {
    "id": "cuad-f-35",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 4 = 0$",
    "options": [
      {
        "latex": "-40",
        "correct": false
      },
      {
        "latex": "-48",
        "correct": false
      },
      {
        "latex": "52",
        "correct": false
      },
      {
        "latex": "-44",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(4) = 4 - 48 = -44$."
  },
  {
    "id": "cuad-f-36",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-37",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 6) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -6",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 6 = 0 \\implies x = -6$."
  },
  {
    "id": "cuad-f-38",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 3 = 0$",
    "options": [
      {
        "latex": "-15",
        "correct": false
      },
      {
        "latex": "61",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-11",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(3) = 25 - 36 = -11$."
  },
  {
    "id": "cuad-f-39",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-40",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 5) = 0$?",
    "options": [
      {
        "latex": "x = 5, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -5",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 5 = 0 \\implies x = -5$."
  },
  {
    "id": "cuad-f-41",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 2 = 0$",
    "options": [
      {
        "latex": "-11",
        "correct": false
      },
      {
        "latex": "-19",
        "correct": false
      },
      {
        "latex": "33",
        "correct": false
      },
      {
        "latex": "-15",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(2) = 9 - 24 = -15$."
  },
  {
    "id": "cuad-f-42",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-43",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 4) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -4",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 4 = 0 \\implies x = -4$."
  },
  {
    "id": "cuad-f-44",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 1 = 0$",
    "options": [
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "48",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "24",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(1) = 36 - 12 = 24$."
  },
  {
    "id": "cuad-f-45",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-46",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 3) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -3",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 3 = 0 \\implies x = -3$."
  },
  {
    "id": "cuad-f-47",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 4 = 0$",
    "options": [
      {
        "latex": "-28",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "-36",
        "correct": false
      },
      {
        "latex": "-32",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(4) = 16 - 48 = -32$."
  },
  {
    "id": "cuad-f-48",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-49",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 2) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -2",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "cuad-f-50",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 3 = 0$",
    "options": [
      {
        "latex": "-28",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "-36",
        "correct": false
      },
      {
        "latex": "-32",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(3) = 4 - 36 = -32$."
  },
  {
    "id": "cuad-f-51",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-52",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 8) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -8",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -8",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 8 = 0 \\implies x = -8$."
  },
  {
    "id": "cuad-f-53",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 2 = 0$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "49",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(2) = 25 - 24 = 1$."
  },
  {
    "id": "cuad-f-54",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-55",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 7) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -7",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -7",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 7 = 0 \\implies x = -7$."
  },
  {
    "id": "cuad-f-56",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 1 = 0$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(1) = 9 - 12 = -3$."
  },
  {
    "id": "cuad-f-57",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-58",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 6) = 0$?",
    "options": [
      {
        "latex": "x = 5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -6",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 6 = 0 \\implies x = -6$."
  },
  {
    "id": "cuad-f-59",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 4 = 0$",
    "options": [
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "84",
        "correct": false
      },
      {
        "latex": "-12",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(4) = 36 - 48 = -12$."
  },
  {
    "id": "cuad-f-60",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-61",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 5) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -5",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 5 = 0 \\implies x = -5$."
  },
  {
    "id": "cuad-f-62",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 3 = 0$",
    "options": [
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "-24",
        "correct": false
      },
      {
        "latex": "52",
        "correct": false
      },
      {
        "latex": "-20",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(3) = 16 - 36 = -20$."
  },
  {
    "id": "cuad-f-63",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-64",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 4) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -4",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 4 = 0 \\implies x = -4$."
  },
  {
    "id": "cuad-f-65",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 2 = 0$",
    "options": [
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "-24",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "-20",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(2) = 4 - 24 = -20$."
  },
  {
    "id": "cuad-f-66",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-67",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 3) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -3",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 3 = 0 \\implies x = -3$."
  },
  {
    "id": "cuad-f-68",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 1 = 0$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "37",
        "correct": false
      },
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(1) = 25 - 12 = 13$."
  },
  {
    "id": "cuad-f-69",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-70",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 2) = 0$?",
    "options": [
      {
        "latex": "x = 5, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -2",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "cuad-f-71",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 4 = 0$",
    "options": [
      {
        "latex": "-35",
        "correct": false
      },
      {
        "latex": "57",
        "correct": false
      },
      {
        "latex": "-43",
        "correct": false
      },
      {
        "latex": "-39",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(4) = 9 - 48 = -39$."
  },
  {
    "id": "cuad-f-72",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-73",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 8) = 0$?",
    "options": [
      {
        "latex": "x = 2, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -8",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -8",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 8 = 0 \\implies x = -8$."
  },
  {
    "id": "cuad-f-74",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 3 = 0$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "72",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(3) = 36 - 36 = 0$."
  },
  {
    "id": "cuad-f-75",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-76",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 7) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -7",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -7",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 7 = 0 \\implies x = -7$."
  },
  {
    "id": "cuad-f-77",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 2 = 0$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(2) = 16 - 24 = -8$."
  },
  {
    "id": "cuad-f-78",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-79",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 6) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -6",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 6 = 0 \\implies x = -6$."
  },
  {
    "id": "cuad-f-80",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 1 = 0$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(1) = 4 - 12 = -8$."
  },
  {
    "id": "cuad-f-81",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-82",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 5) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -5",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 5 = 0 \\implies x = -5$."
  },
  {
    "id": "cuad-f-83",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 4 = 0$",
    "options": [
      {
        "latex": "-27",
        "correct": false
      },
      {
        "latex": "73",
        "correct": false
      },
      {
        "latex": "-19",
        "correct": false
      },
      {
        "latex": "-23",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(4) = 25 - 48 = -23$."
  },
  {
    "id": "cuad-f-84",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-85",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 4) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -4",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 4 = 0 \\implies x = -4$."
  },
  {
    "id": "cuad-f-86",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 3x + 3 = 0$",
    "options": [
      {
        "latex": "-23",
        "correct": false
      },
      {
        "latex": "-31",
        "correct": false
      },
      {
        "latex": "45",
        "correct": false
      },
      {
        "latex": "-27",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (3)^2 - 4(3)(3) = 9 - 36 = -27$."
  },
  {
    "id": "cuad-f-87",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-f-88",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 3) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -3",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 3 = 0 \\implies x = -3$."
  },
  {
    "id": "cuad-f-89",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 6x + 2 = 0$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "60",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (6)^2 - 4(3)(2) = 36 - 24 = 12$."
  },
  {
    "id": "cuad-f-90",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 64 = 0$",
    "options": [
      {
        "latex": "x = 8",
        "correct": false
      },
      {
        "latex": "x = 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 64",
        "correct": false
      },
      {
        "latex": "x = \\pm 8",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 64$, aplicando raíz cuadrada: $x = \\pm \\sqrt{64} = \\pm 8$."
  },
  {
    "id": "cuad-f-91",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 2) = 0$?",
    "options": [
      {
        "latex": "x = -2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -2",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "cuad-f-92",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 4x + 1 = 0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (4)^2 - 4(3)(1) = 16 - 12 = 4$."
  },
  {
    "id": "cuad-f-93",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 121 = 0$",
    "options": [
      {
        "latex": "x = 121",
        "correct": false
      },
      {
        "latex": "x = \\pm 121",
        "correct": false
      },
      {
        "latex": "x = 11",
        "correct": false
      },
      {
        "latex": "x = \\pm 11",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 121$, aplicando raíz cuadrada: $x = \\pm \\sqrt{121} = \\pm 11$."
  },
  {
    "id": "cuad-f-94",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 5)(x + 8) = 0$?",
    "options": [
      {
        "latex": "x = -5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = -5, \\; x = -8",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = -8",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 5 = 0 \\implies x = 5$; $x + 8 = 0 \\implies x = -8$."
  },
  {
    "id": "cuad-f-95",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 2x + 4 = 0$",
    "options": [
      {
        "latex": "-40",
        "correct": false
      },
      {
        "latex": "52",
        "correct": false
      },
      {
        "latex": "-48",
        "correct": false
      },
      {
        "latex": "-44",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (2)^2 - 4(3)(4) = 4 - 48 = -44$."
  },
  {
    "id": "cuad-f-96",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 4 = 0$",
    "options": [
      {
        "latex": "x = 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 4$, aplicando raíz cuadrada: $x = \\pm \\sqrt{4} = \\pm 2$."
  },
  {
    "id": "cuad-f-97",
    "difficulty": "easy",
    "prompt": "¿Cuáles son las soluciones de $(x - 2)(x + 7) = 0$?",
    "options": [
      {
        "latex": "x = 2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = -7",
        "correct": false
      },
      {
        "latex": "x = -2, \\; x = 7",
        "correct": false
      },
      {
        "latex": "x = 2, \\; x = -7",
        "correct": true
      }
    ],
    "explanation": "Igualando cada factor a cero: $x - 2 = 0 \\implies x = 2$; $x + 7 = 0 \\implies x = -7$."
  },
  {
    "id": "cuad-f-98",
    "difficulty": "easy",
    "prompt": "Calcula el discriminante $\\Delta = b^2 - 4ac$ para $3x^2 + 5x + 3 = 0$",
    "options": [
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "61",
        "correct": false
      },
      {
        "latex": "-15",
        "correct": false
      },
      {
        "latex": "-11",
        "correct": true
      }
    ],
    "explanation": "$\\Delta = b^2 - 4ac = (5)^2 - 4(3)(3) = 25 - 36 = -11$."
  },
  {
    "id": "cuad-f-99",
    "difficulty": "easy",
    "prompt": "Resuelve la ecuación cuadrática pura: $x^2 - 25 = 0$",
    "options": [
      {
        "latex": "x = 5",
        "correct": false
      },
      {
        "latex": "x = 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 25",
        "correct": false
      },
      {
        "latex": "x = \\pm 5",
        "correct": true
      }
    ],
    "explanation": "Despejando $x^2 = 25$, aplicando raíz cuadrada: $x = \\pm \\sqrt{25} = \\pm 5$."
  },
  {
    "id": "cuad-m-01",
    "difficulty": "medium",
    "prompt": "Resuelve: $x^2 - 5x + 6 = 0$",
    "options": [
      {
        "latex": "x = 2 \\text{ y } x = 3",
        "correct": true
      },
      {
        "latex": "x = -2 \\text{ y } x = -3",
        "correct": false
      },
      {
        "latex": "x = 1 \\text{ y } x = 6",
        "correct": false
      },
      {
        "latex": "x = -1 \\text{ y } x = -6",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $(x-2)(x-3) = 0$, por lo que $x = 2$ o $x = 3$."
  },
  {
    "id": "cuad-m-02",
    "difficulty": "medium",
    "prompt": "Resuelve: $x^2 + 4x + 4 = 0$",
    "options": [
      {
        "latex": "x = -2",
        "correct": true
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = \\pm 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 4x + 4 = (x+2)^2 = 0$, por lo que $x = -2$ (raíz doble)."
  },
  {
    "id": "cuad-m-03",
    "difficulty": "medium",
    "prompt": "¿Cuántas soluciones reales tiene $x^2 + 1 = 0$?",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\text{infinitas}",
        "correct": false
      }
    ],
    "explanation": "El discriminante es $0^2 - 4(1)(1) = -4 < 0$, así que no hay soluciones reales."
  },
  {
    "id": "cuad-m-04",
    "difficulty": "medium",
    "prompt": "Resuelve: $2x^2 - 8 = 0$",
    "options": [
      {
        "latex": "x = \\pm 2",
        "correct": true
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 2",
        "correct": false
      },
      {
        "latex": "x = 4",
        "correct": false
      }
    ],
    "explanation": "$2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$."
  },
  {
    "id": "cuad-m-05",
    "difficulty": "medium",
    "prompt": "Si el discriminante $b^2 - 4ac = 0$, la ecuación tiene...",
    "options": [
      {
        "latex": "\\text{una solución real (doble)}",
        "correct": true
      },
      {
        "latex": "\\text{dos soluciones reales distintas}",
        "correct": false
      },
      {
        "latex": "\\text{ninguna solución real}",
        "correct": false
      },
      {
        "latex": "\\text{infinitas soluciones}",
        "correct": false
      }
    ],
    "explanation": "Cuando el discriminante es 0, las dos raíces coinciden: hay una solución real doble."
  },
  {
    "id": "cuad-m-06",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 4x + 3 = 0$",
    "options": [
      {
        "latex": "x = 4, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 3) = 0$, por lo que las soluciones son $x = 1$ y $x = 3$."
  },
  {
    "id": "cuad-m-07",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-08",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-09",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 10x + 24 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 10, \\; x = 24",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 6) = 0$, por lo que las soluciones son $x = 4$ y $x = 6$."
  },
  {
    "id": "cuad-m-10",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-100",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-11",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-12",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 5x + 4 = 0$",
    "options": [
      {
        "latex": "x = 5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 4) = 0$, por lo que las soluciones son $x = 1$ y $x = 4$."
  },
  {
    "id": "cuad-m-13",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-14",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-15",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 8 = 0$",
    "options": [
      {
        "latex": "x = 6, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 2) = 0$, por lo que las soluciones son $x = 4$ y $x = 2$."
  },
  {
    "id": "cuad-m-16",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-17",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-18",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 5 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 6, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 5) = 0$, por lo que las soluciones son $x = 1$ y $x = 5$."
  },
  {
    "id": "cuad-m-19",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-20",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-21",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 12 = 0$",
    "options": [
      {
        "latex": "x = 7, \\; x = 12",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = -4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 3) = 0$, por lo que las soluciones son $x = 4$ y $x = 3$."
  },
  {
    "id": "cuad-m-22",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-23",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-24",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 6 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 7, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 6) = 0$, por lo que las soluciones son $x = 1$ y $x = 6$."
  },
  {
    "id": "cuad-m-25",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-26",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-27",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 8x + 16 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 8, \\; x = 16",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 4) = 0$, por lo que las soluciones son $x = 4$ y $x = 4$."
  },
  {
    "id": "cuad-m-28",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-29",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-30",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 3x + 2 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 3, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 2) = 0$, por lo que las soluciones son $x = 1$ y $x = 2$."
  },
  {
    "id": "cuad-m-31",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-32",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-33",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 9x + 20 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 9, \\; x = 20",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 5) = 0$, por lo que las soluciones son $x = 4$ y $x = 5$."
  },
  {
    "id": "cuad-m-34",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-35",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "2",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-36",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 4x + 3 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 3) = 0$, por lo que las soluciones son $x = 1$ y $x = 3$."
  },
  {
    "id": "cuad-m-37",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-38",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-39",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 10x + 24 = 0$",
    "options": [
      {
        "latex": "x = 10, \\; x = 24",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = -4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 6) = 0$, por lo que las soluciones son $x = 4$ y $x = 6$."
  },
  {
    "id": "cuad-m-40",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-41",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-42",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 5x + 4 = 0$",
    "options": [
      {
        "latex": "x = 5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 4) = 0$, por lo que las soluciones son $x = 1$ y $x = 4$."
  },
  {
    "id": "cuad-m-43",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-44",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-45",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 8 = 0$",
    "options": [
      {
        "latex": "x = 6, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 2) = 0$, por lo que las soluciones son $x = 4$ y $x = 2$."
  },
  {
    "id": "cuad-m-46",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-47",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-48",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 5 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 6, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 5) = 0$, por lo que las soluciones son $x = 1$ y $x = 5$."
  },
  {
    "id": "cuad-m-49",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-50",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "2",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-51",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 12 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 7, \\; x = 12",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 3) = 0$, por lo que las soluciones son $x = 4$ y $x = 3$."
  },
  {
    "id": "cuad-m-52",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-53",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-54",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 6 = 0$",
    "options": [
      {
        "latex": "x = 7, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 6) = 0$, por lo que las soluciones son $x = 1$ y $x = 6$."
  },
  {
    "id": "cuad-m-55",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-56",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-57",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 8x + 16 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 8, \\; x = 16",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 4) = 0$, por lo que las soluciones son $x = 4$ y $x = 4$."
  },
  {
    "id": "cuad-m-58",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-59",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-60",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 3x + 2 = 0$",
    "options": [
      {
        "latex": "x = 3, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 2) = 0$, por lo que las soluciones son $x = 1$ y $x = 2$."
  },
  {
    "id": "cuad-m-61",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-62",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-63",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 9x + 20 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 9, \\; x = 20",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 5) = 0$, por lo que las soluciones son $x = 4$ y $x = 5$."
  },
  {
    "id": "cuad-m-64",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-65",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "6",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-66",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 4x + 3 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 3) = 0$, por lo que las soluciones son $x = 1$ y $x = 3$."
  },
  {
    "id": "cuad-m-67",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-68",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-69",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 10x + 24 = 0$",
    "options": [
      {
        "latex": "x = 10, \\; x = 24",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = -4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 6) = 0$, por lo que las soluciones son $x = 4$ y $x = 6$."
  },
  {
    "id": "cuad-m-70",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-71",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "12",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-72",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 5x + 4 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 5, \\; x = 4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 4) = 0$, por lo que las soluciones son $x = 1$ y $x = 4$."
  },
  {
    "id": "cuad-m-73",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-74",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-75",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 8 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 6, \\; x = 8",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 2) = 0$, por lo que las soluciones son $x = 4$ y $x = 2$."
  },
  {
    "id": "cuad-m-76",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-77",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-78",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 6x + 5 = 0$",
    "options": [
      {
        "latex": "x = 6, \\; x = 5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 5) = 0$, por lo que las soluciones son $x = 1$ y $x = 5$."
  },
  {
    "id": "cuad-m-79",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-80",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "2",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-81",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 12 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 7, \\; x = 12",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 3) = 0$, por lo que las soluciones son $x = 4$ y $x = 3$."
  },
  {
    "id": "cuad-m-82",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-83",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-84",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 7x + 6 = 0$",
    "options": [
      {
        "latex": "x = 7, \\; x = 6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 6) = 0$, por lo que las soluciones son $x = 1$ y $x = 6$."
  },
  {
    "id": "cuad-m-85",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-86",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 12x + 3$",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "12",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$."
  },
  {
    "id": "cuad-m-87",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 8x + 16 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -4",
        "correct": false
      },
      {
        "latex": "x = 8, \\; x = 16",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 4) = 0$, por lo que las soluciones son $x = 4$ y $x = 4$."
  },
  {
    "id": "cuad-m-88",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-89",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 30x + 3$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "30",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-30}{2(3)} = \\frac{30}{6} = 5$."
  },
  {
    "id": "cuad-m-90",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 3x + 2 = 0$",
    "options": [
      {
        "latex": "x = 3, \\; x = 2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = -1, \\; x = -2",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 2) = 0$, por lo que las soluciones son $x = 1$ y $x = 2$."
  },
  {
    "id": "cuad-m-91",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-92",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 18x + 3$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    "id": "cuad-m-93",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 9x + 20 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 9, \\; x = 20",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -5",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 5) = 0$, por lo que las soluciones son $x = 4$ y $x = 5$."
  },
  {
    "id": "cuad-m-94",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-95",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 6x + 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "2",
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
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(3)} = \\frac{6}{6} = 1$."
  },
  {
    "id": "cuad-m-96",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 4x + 3 = 0$",
    "options": [
      {
        "latex": "x = -1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = -3",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 3",
        "correct": false
      },
      {
        "latex": "x = 1, \\; x = 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 1)(x - 3) = 0$, por lo que las soluciones son $x = 1$ y $x = 3$."
  },
  {
    "id": "cuad-m-97",
    "difficulty": "medium",
    "prompt": "Si en una cuadrática el discriminante es $\\Delta = 0$, ¿cómo son sus raíces?",
    "options": [
      {
        "latex": "Dos raíces reales distintas",
        "correct": false
      },
      {
        "latex": "Infinitas soluciones",
        "correct": false
      },
      {
        "latex": "Dos raíces imaginarias puras",
        "correct": false
      },
      {
        "latex": "Una raíz real doble (repetida)",
        "correct": true
      }
    ],
    "explanation": "Cuando $\\Delta = 0$, el término $\\pm \\sqrt{0} = 0$, resultando en una única solución real doble $x = -b/(2a)$."
  },
  {
    "id": "cuad-m-98",
    "difficulty": "medium",
    "prompt": "Determina la coordenada $x$ del vértice de la parábola $y = 3x^2 - 24x + 3$",
    "options": [
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "La abscisa del vértice es $x_v = -\\frac{b}{2a} = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$."
  },
  {
    "id": "cuad-m-99",
    "difficulty": "medium",
    "prompt": "Resuelve por factorización o fórmula general: $x^2 - 10x + 24 = 0$",
    "options": [
      {
        "latex": "x = -4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 10, \\; x = 24",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = -6",
        "correct": false
      },
      {
        "latex": "x = 4, \\; x = 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando: $(x - 4)(x - 6) = 0$, por lo que las soluciones son $x = 4$ y $x = 6$."
  },
  {
    "id": "cuad-h-01",
    "difficulty": "hard",
    "prompt": "Resuelve: $x^2 - 2x - 8 = 0$",
    "options": [
      {
        "latex": "x = 4 \\text{ y } x = -2",
        "correct": true
      },
      {
        "latex": "x = -4 \\text{ y } x = 2",
        "correct": false
      },
      {
        "latex": "x = 2 \\text{ y } x = 4",
        "correct": false
      },
      {
        "latex": "x = -2 \\text{ y } x = 8",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $(x-4)(x+2) = 0$, por lo que $x = 4$ o $x = -2$."
  },
  {
    "id": "cuad-h-02",
    "difficulty": "hard",
    "prompt": "Resuelve: $2x^2 + 3x - 2 = 0$",
    "options": [
      {
        "latex": "x = \\frac{1}{2} \\text{ y } x = -2",
        "correct": true
      },
      {
        "latex": "x = -\\frac{1}{2} \\text{ y } x = 2",
        "correct": false
      },
      {
        "latex": "x = 2 \\text{ y } x = -\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "x = 1 \\text{ y } x = -2",
        "correct": false
      }
    ],
    "explanation": "$x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4} = \\frac{-3 \\pm 5}{4}$, que da $\\frac{1}{2}$ y $-2$."
  },
  {
    "id": "cuad-h-03",
    "difficulty": "hard",
    "prompt": "Resuelve: $x^2 + 2x + 5 = 0$",
    "options": [
      {
        "latex": "x = -1 \\pm 2i",
        "correct": true
      },
      {
        "latex": "x = -1 \\pm 2",
        "correct": false
      },
      {
        "latex": "x = 1 \\pm 2i",
        "correct": false
      },
      {
        "latex": "x = -2 \\pm i",
        "correct": false
      }
    ],
    "explanation": "$x = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$. Raíces complejas."
  },
  {
    "id": "cuad-h-04",
    "difficulty": "hard",
    "prompt": "Si una raíz de $x^2 - 7x + k = 0$ es $2$, ¿cuánto vale $k$?",
    "options": [
      {
        "latex": "10",
        "correct": true
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      }
    ],
    "explanation": "Sustituye $x=2$: $4 - 14 + k = 0 \\Rightarrow k = 10$."
  },
  {
    "id": "cuad-h-05",
    "difficulty": "hard",
    "prompt": "La suma de las raíces de $2x^2 - 6x + 4 = 0$ es...",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      }
    ],
    "explanation": "La suma de raíces es $-\\frac{b}{a} = -\\frac{-6}{2} = 3$."
  },
  {
    "id": "cuad-h-06",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-07",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 2x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{2}{2}$."
  },
  {
    "id": "cuad-h-08",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-09",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-10",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 5x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{2}$."
  },
  {
    "id": "cuad-h-100",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 4x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{4}{2}$."
  },
  {
    "id": "cuad-h-11",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-12",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-13",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 8x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{8}{2}$."
  },
  {
    "id": "cuad-h-14",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-15",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-16",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 4x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{4}{2}$."
  },
  {
    "id": "cuad-h-17",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-18",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-19",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 7x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{7}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{7}{2}$."
  },
  {
    "id": "cuad-h-20",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-21",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-22",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 3x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{3}{2} + 1",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2} + 1",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{3}{2}$."
  },
  {
    "id": "cuad-h-23",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-24",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-25",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 6x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{6}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{6}{2}$."
  },
  {
    "id": "cuad-h-26",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-27",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-28",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 2x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{2}{2}$."
  },
  {
    "id": "cuad-h-29",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-30",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-31",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 5x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{2}$."
  },
  {
    "id": "cuad-h-32",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-33",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-34",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 8x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{8}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{8}{2}$."
  },
  {
    "id": "cuad-h-35",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-36",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-37",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 4x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{4}{2}$."
  },
  {
    "id": "cuad-h-38",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-39",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-40",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 7x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{7}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{7}{2}$."
  },
  {
    "id": "cuad-h-41",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-42",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-43",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 3x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{3}{2}$."
  },
  {
    "id": "cuad-h-44",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-45",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-46",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 6x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{6}{2}$."
  },
  {
    "id": "cuad-h-47",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-48",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-49",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 2x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{2}{2}$."
  },
  {
    "id": "cuad-h-50",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-51",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-52",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 5x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{2}$."
  },
  {
    "id": "cuad-h-53",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-54",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-55",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 8x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{8}{2}$."
  },
  {
    "id": "cuad-h-56",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-57",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-58",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 4x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2} + 1",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2} + 1",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{4}{2}$."
  },
  {
    "id": "cuad-h-59",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-60",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-61",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 7x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{7}{2}$."
  },
  {
    "id": "cuad-h-62",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-63",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-64",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 3x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{3}{2}$."
  },
  {
    "id": "cuad-h-65",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-66",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-67",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 6x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{6}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{6}{2}$."
  },
  {
    "id": "cuad-h-68",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-69",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-70",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 2x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{2}{2}$."
  },
  {
    "id": "cuad-h-71",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-72",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-73",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 5x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{2}$."
  },
  {
    "id": "cuad-h-74",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-75",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-76",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 8x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{8}{2}$."
  },
  {
    "id": "cuad-h-77",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-78",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-79",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 4x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{4}{2}$."
  },
  {
    "id": "cuad-h-80",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-81",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-82",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 7x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{7}{2}$."
  },
  {
    "id": "cuad-h-83",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-84",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-85",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 3x + 1 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{3}{2}$."
  },
  {
    "id": "cuad-h-86",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 4x + 1 = 0$",
    "options": [
      {
        "latex": "4 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "-2 \\pm \\sqrt{3}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{3}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$."
  },
  {
    "id": "cuad-h-87",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-88",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 6x + 4 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{6}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{6}{2}$."
  },
  {
    "id": "cuad-h-89",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 10x + 1 = 0$",
    "options": [
      {
        "latex": "10 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{26}",
        "correct": false
      },
      {
        "latex": "-5 \\pm \\sqrt{24}",
        "correct": false
      },
      {
        "latex": "5 \\pm \\sqrt{24}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{10 \\pm \\sqrt{10^2 - 4(1)(1)}}{2} = \\frac{10 \\pm \\sqrt{96}}{2} = 5 \\pm \\sqrt{24}$."
  },
  {
    "id": "cuad-h-90",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-91",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 2x + 2 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{2} + 1",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2} + 1",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{2}{2}$."
  },
  {
    "id": "cuad-h-92",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 6x + 1 = 0$",
    "options": [
      {
        "latex": "6 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{10}",
        "correct": false
      },
      {
        "latex": "-3 \\pm \\sqrt{8}",
        "correct": false
      },
      {
        "latex": "3 \\pm \\sqrt{8}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{6 \\pm \\sqrt{6^2 - 4(1)(1)}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm \\sqrt{8}$."
  },
  {
    "id": "cuad-h-93",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  },
  {
    "id": "cuad-h-94",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 5x + 5 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2} + 1",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2} + 1",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{2}$."
  },
  {
    "id": "cuad-h-95",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 2x + 1 = 0$",
    "options": [
      {
        "latex": "-1 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "2 \\pm \\sqrt{0}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{2}",
        "correct": false
      },
      {
        "latex": "1 \\pm \\sqrt{0}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{2 \\pm \\sqrt{2^2 - 4(1)(1)}}{2} = \\frac{2 \\pm \\sqrt{0}}{2} = 1 \\pm \\sqrt{0}$."
  },
  {
    "id": "cuad-h-96",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 1 = 0$",
    "options": [
      {
        "latex": "x = 1i",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i + 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1",
        "correct": false
      },
      {
        "latex": "x = \\pm 1i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -1 \\implies x = \\pm \\sqrt{-1} = \\pm \\sqrt{1}i = \\pm 1i$."
  },
  {
    "id": "cuad-h-97",
    "difficulty": "hard",
    "prompt": "Para la ecuación $2x^2 + 8x + 3 = 0$, ¿cuál es la suma de sus raíces $x_1 + x_2$?",
    "options": [
      {
        "latex": "\\frac{8}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{2}",
        "correct": true
      }
    ],
    "explanation": "Por las relaciones de Viète, la suma de las raíces es $x_1 + x_2 = -\\frac{b}{a} = -\\frac{8}{2}$."
  },
  {
    "id": "cuad-h-98",
    "difficulty": "hard",
    "prompt": "Resuelve usando la fórmula general simplificada: $x^2 - 8x + 1 = 0$",
    "options": [
      {
        "latex": "-4 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "8 \\pm \\sqrt{15}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{17}",
        "correct": false
      },
      {
        "latex": "4 \\pm \\sqrt{15}",
        "correct": true
      }
    ],
    "explanation": "$x = \\frac{8 \\pm \\sqrt{8^2 - 4(1)(1)}}{2} = \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$."
  },
  {
    "id": "cuad-h-99",
    "difficulty": "hard",
    "prompt": "Resuelve en el conjunto de los números complejos: $x^2 + 16 = 0$",
    "options": [
      {
        "latex": "x = 4i",
        "correct": false
      },
      {
        "latex": "x = \\pm 16i",
        "correct": false
      },
      {
        "latex": "x = \\pm 4",
        "correct": false
      },
      {
        "latex": "x = \\pm 4i",
        "correct": true
      }
    ],
    "explanation": "$x^2 = -16 \\implies x = \\pm \\sqrt{-16} = \\pm \\sqrt{16}i = \\pm 4i$."
  }
]
};
