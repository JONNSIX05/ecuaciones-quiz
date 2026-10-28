// data/algebra/division-polinomios/algoritmo.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default {
  lawId: "division-polinomios",
  lawName: "División de polinomios",
  lawFormula: "P(x) = Q(x) \\cdot C(x) + R(x)",
  prerequisites: "Conocer la suma, resta y multiplicación de polinomios.",
  available: true,
  questions: [
  {
    "id": "divpol-f-01",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 3x + 2) \\div (x + 1)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": true
      },
      {
        "latex": "x + 1",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x^2 + 2",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 3x + 2 = (x+1)(x+2)$, así que al dividir entre $x+1$ queda $x+2$."
  },
  {
    "id": "divpol-f-02",
    "difficulty": "easy",
    "prompt": "Divide: $(x^3 - x^2) \\div x$",
    "options": [
      {
        "latex": "x^2 - x",
        "correct": true
      },
      {
        "latex": "x^2 + x",
        "correct": false
      },
      {
        "latex": "x^3 - x",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      }
    ],
    "explanation": "Divide cada término entre $x$: $\\frac{x^3}{x} - \\frac{x^2}{x} = x^2 - x$."
  },
  {
    "id": "divpol-f-03",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^2 + 3x) \\div 3x$",
    "options": [
      {
        "latex": "2x + 1",
        "correct": true
      },
      {
        "latex": "2x - 1",
        "correct": false
      },
      {
        "latex": "6x + 3",
        "correct": false
      },
      {
        "latex": "2x",
        "correct": false
      }
    ],
    "explanation": "$\\frac{6x^2}{3x} + \\frac{3x}{3x} = 2x + 1$."
  },
  {
    "id": "divpol-f-04",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 9) \\div (x - 3)$",
    "options": [
      {
        "latex": "x + 3",
        "correct": true
      },
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 9 = (x-3)(x+3)$, así que al dividir entre $x-3$ queda $x+3$."
  },
  {
    "id": "divpol-f-05",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 4x) \\div x$",
    "options": [
      {
        "latex": "x - 4",
        "correct": true
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 4",
        "correct": false
      },
      {
        "latex": "4 - x",
        "correct": false
      }
    ],
    "explanation": "$\\frac{x^2}{x} - \\frac{4x}{x} = x - 4$."
  },
  {
    "id": "divpol-f-06",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 49) \\div (x - 7)$",
    "options": [
      {
        "latex": "x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 49",
        "correct": false
      },
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 49 = (x-7)(x+7)$. Al dividir entre $(x-7)$ queda $x+7$."
  },
  {
    "id": "divpol-f-07",
    "difficulty": "easy",
    "prompt": "Divide: $(4x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "4x - 8",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "4x^2 + 8",
        "correct": false
      },
      {
        "latex": "4x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{4x^3}{x^2} + \\frac{8x^2}{x^2} = 4x + 8$."
  },
  {
    "id": "divpol-f-08",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 10x + 9) \\div (x + 9)$",
    "options": [
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 10x + 9 = (x+9)(x+1)$. Al dividir entre $(x+9)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-09",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 3x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 3",
        "correct": false
      },
      {
        "latex": "5x - 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "5x + 3",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{3x}{x} = 5x + 3$."
  },
  {
    "id": "divpol-f-10",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x^2 + 2",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 4 = (x-2)(x+2)$. Al dividir entre $(x-2)$ queda $x+2$."
  },
  {
    "id": "divpol-f-100",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 3x + 2) \\div (x + 2)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 3x + 2 = (x+2)(x+1)$. Al dividir entre $(x+2)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-11",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "3x^2 + 4",
        "correct": false
      },
      {
        "latex": "3x - 4",
        "correct": false
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "3x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{3x^3}{x^2} + \\frac{4x^2}{x^2} = 3x + 4$."
  },
  {
    "id": "divpol-f-12",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 5x + 4) \\div (x + 4)$",
    "options": [
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 5x + 4 = (x+4)(x+1)$. Al dividir entre $(x+4)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-13",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 7x) \\div x$",
    "options": [
      {
        "latex": "3x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "3x - 7",
        "correct": false
      },
      {
        "latex": "3x + 7",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{7x}{x} = 3x + 7$."
  },
  {
    "id": "divpol-f-14",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 36) \\div (x - 6)$",
    "options": [
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 36",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 36 = (x-6)(x+6)$. Al dividir entre $(x-6)$ queda $x+6$."
  },
  {
    "id": "divpol-f-15",
    "difficulty": "easy",
    "prompt": "Divide: $(2x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "2x^2 + 8",
        "correct": false
      },
      {
        "latex": "2x - 8",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "2x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{2x^3}{x^2} + \\frac{8x^2}{x^2} = 2x + 8$."
  },
  {
    "id": "divpol-f-16",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 9x + 8) \\div (x + 8)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 9x + 8 = (x+8)(x+1)$. Al dividir entre $(x+8)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-17",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 4x) \\div x$",
    "options": [
      {
        "latex": "7x^2 + 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "7x - 4",
        "correct": false
      },
      {
        "latex": "7x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{4x}{x} = 7x + 4$."
  },
  {
    "id": "divpol-f-18",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 1) \\div (x - 1)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1 + 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$. Al dividir entre $(x-1)$ queda $x+1$."
  },
  {
    "id": "divpol-f-19",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "6x - 4",
        "correct": false
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "6x^2 + 4",
        "correct": false
      },
      {
        "latex": "6x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{6x^3}{x^2} + \\frac{4x^2}{x^2} = 6x + 4$."
  },
  {
    "id": "divpol-f-20",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 4x + 3) \\div (x + 3)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 4x + 3 = (x+3)(x+1)$. Al dividir entre $(x+3)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-21",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 1x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 1",
        "correct": false
      },
      {
        "latex": "5x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": false
      },
      {
        "latex": "5x + 1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{1x}{x} = 5x + 1$."
  },
  {
    "id": "divpol-f-22",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 25) \\div (x - 5)$",
    "options": [
      {
        "latex": "x^2 + 5",
        "correct": false
      },
      {
        "latex": "x + 25",
        "correct": false
      },
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 25 = (x-5)(x+5)$. Al dividir entre $(x-5)$ queda $x+5$."
  },
  {
    "id": "divpol-f-23",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "5x^2 + 8",
        "correct": false
      },
      {
        "latex": "5x^2",
        "correct": false
      },
      {
        "latex": "5x - 8",
        "correct": false
      },
      {
        "latex": "5x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{5x^3}{x^2} + \\frac{8x^2}{x^2} = 5x + 8$."
  },
  {
    "id": "divpol-f-24",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 8x + 7) \\div (x + 7)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 8x + 7 = (x+7)(x+1)$. Al dividir entre $(x+7)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-25",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 5x) \\div x$",
    "options": [
      {
        "latex": "3x^2 + 5",
        "correct": false
      },
      {
        "latex": "3x - 5",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": false
      },
      {
        "latex": "3x + 5",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{5x}{x} = 3x + 5$."
  },
  {
    "id": "divpol-f-26",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 81) \\div (x - 9)$",
    "options": [
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x + 81",
        "correct": false
      },
      {
        "latex": "x - 9",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 81 = (x-9)(x+9)$. Al dividir entre $(x-9)$ queda $x+9$."
  },
  {
    "id": "divpol-f-27",
    "difficulty": "easy",
    "prompt": "Divide: $(4x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "4x^2 + 4",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "4x - 4",
        "correct": false
      },
      {
        "latex": "4x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{4x^3}{x^2} + \\frac{4x^2}{x^2} = 4x + 4$."
  },
  {
    "id": "divpol-f-28",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 3x + 2) \\div (x + 2)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 3x + 2 = (x+2)(x+1)$. Al dividir entre $(x+2)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-29",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 2x) \\div x$",
    "options": [
      {
        "latex": "7x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "7x^2 + 2",
        "correct": false
      },
      {
        "latex": "7x + 2",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{2x}{x} = 7x + 2$."
  },
  {
    "id": "divpol-f-30",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 16) \\div (x - 4)$",
    "options": [
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x + 16",
        "correct": false
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 16 = (x-4)(x+4)$. Al dividir entre $(x-4)$ queda $x+4$."
  },
  {
    "id": "divpol-f-31",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "3x^2 + 8",
        "correct": false
      },
      {
        "latex": "3x - 8",
        "correct": false
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "3x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{3x^3}{x^2} + \\frac{8x^2}{x^2} = 3x + 8$."
  },
  {
    "id": "divpol-f-32",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 7x + 6) \\div (x + 6)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 7x + 6 = (x+6)(x+1)$. Al dividir entre $(x+6)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-33",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 6x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      },
      {
        "latex": "5x - 6",
        "correct": false
      },
      {
        "latex": "5x + 6",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{6x}{x} = 5x + 6$."
  },
  {
    "id": "divpol-f-34",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 64) \\div (x - 8)$",
    "options": [
      {
        "latex": "x^2 + 8",
        "correct": false
      },
      {
        "latex": "x + 64",
        "correct": false
      },
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 64 = (x-8)(x+8)$. Al dividir entre $(x-8)$ queda $x+8$."
  },
  {
    "id": "divpol-f-35",
    "difficulty": "easy",
    "prompt": "Divide: $(2x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "2x^2 + 4",
        "correct": false
      },
      {
        "latex": "2x - 4",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "2x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{2x^3}{x^2} + \\frac{4x^2}{x^2} = 2x + 4$."
  },
  {
    "id": "divpol-f-36",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 2x + 1) \\div (x + 1)$",
    "options": [
      {
        "latex": "x + 1 + 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 2x + 1 = (x+1)(x+1)$. Al dividir entre $(x+1)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-37",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 3x) \\div x$",
    "options": [
      {
        "latex": "3x^2 + 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "3x - 3",
        "correct": false
      },
      {
        "latex": "3x + 3",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{3x}{x} = 3x + 3$."
  },
  {
    "id": "divpol-f-38",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 9) \\div (x - 3)$",
    "options": [
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x^2 + 3",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 9 = (x-3)(x+3)$. Al dividir entre $(x-3)$ queda $x+3$."
  },
  {
    "id": "divpol-f-39",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "6x^2 + 8",
        "correct": false
      },
      {
        "latex": "6x - 8",
        "correct": false
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "6x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{6x^3}{x^2} + \\frac{8x^2}{x^2} = 6x + 8$."
  },
  {
    "id": "divpol-f-40",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 6x + 5) \\div (x + 5)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 6x + 5 = (x+5)(x+1)$. Al dividir entre $(x+5)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-41",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 7x) \\div x$",
    "options": [
      {
        "latex": "7x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "7x - 7",
        "correct": false
      },
      {
        "latex": "7x + 7",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{7x}{x} = 7x + 7$."
  },
  {
    "id": "divpol-f-42",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 49) \\div (x - 7)$",
    "options": [
      {
        "latex": "x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 49",
        "correct": false
      },
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 49 = (x-7)(x+7)$. Al dividir entre $(x-7)$ queda $x+7$."
  },
  {
    "id": "divpol-f-43",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "5x^2 + 4",
        "correct": false
      },
      {
        "latex": "5x - 4",
        "correct": false
      },
      {
        "latex": "5x^2",
        "correct": false
      },
      {
        "latex": "5x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{5x^3}{x^2} + \\frac{4x^2}{x^2} = 5x + 4$."
  },
  {
    "id": "divpol-f-44",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 10x + 9) \\div (x + 9)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 10x + 9 = (x+9)(x+1)$. Al dividir entre $(x+9)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-45",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 4x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "5x - 4",
        "correct": false
      },
      {
        "latex": "5x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{4x}{x} = 5x + 4$."
  },
  {
    "id": "divpol-f-46",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 + 2",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 4 = (x-2)(x+2)$. Al dividir entre $(x-2)$ queda $x+2$."
  },
  {
    "id": "divpol-f-47",
    "difficulty": "easy",
    "prompt": "Divide: $(4x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "4x^2 + 8",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "4x - 8",
        "correct": false
      },
      {
        "latex": "4x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{4x^3}{x^2} + \\frac{8x^2}{x^2} = 4x + 8$."
  },
  {
    "id": "divpol-f-48",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 5x + 4) \\div (x + 4)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 5x + 4 = (x+4)(x+1)$. Al dividir entre $(x+4)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-49",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 1x) \\div x$",
    "options": [
      {
        "latex": "3x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": false
      },
      {
        "latex": "3x^2 + 1",
        "correct": false
      },
      {
        "latex": "3x + 1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{1x}{x} = 3x + 1$."
  },
  {
    "id": "divpol-f-50",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 36) \\div (x - 6)$",
    "options": [
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 36 = (x-6)(x+6)$. Al dividir entre $(x-6)$ queda $x+6$."
  },
  {
    "id": "divpol-f-51",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "3x^2 + 4",
        "correct": false
      },
      {
        "latex": "3x - 4",
        "correct": false
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "3x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{3x^3}{x^2} + \\frac{4x^2}{x^2} = 3x + 4$."
  },
  {
    "id": "divpol-f-52",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 9x + 8) \\div (x + 8)$",
    "options": [
      {
        "latex": "x + 8",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 9x + 8 = (x+8)(x+1)$. Al dividir entre $(x+8)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-53",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 5x) \\div x$",
    "options": [
      {
        "latex": "7x^2 + 5",
        "correct": false
      },
      {
        "latex": "7x - 5",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": false
      },
      {
        "latex": "7x + 5",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{5x}{x} = 7x + 5$."
  },
  {
    "id": "divpol-f-54",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 1) \\div (x - 1)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1 + 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$. Al dividir entre $(x-1)$ queda $x+1$."
  },
  {
    "id": "divpol-f-55",
    "difficulty": "easy",
    "prompt": "Divide: $(2x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "2x^2 + 8",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "2x - 8",
        "correct": false
      },
      {
        "latex": "2x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{2x^3}{x^2} + \\frac{8x^2}{x^2} = 2x + 8$."
  },
  {
    "id": "divpol-f-56",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 4x + 3) \\div (x + 3)$",
    "options": [
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 4x + 3 = (x+3)(x+1)$. Al dividir entre $(x+3)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-57",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 2x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 2",
        "correct": false
      },
      {
        "latex": "5x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "5x + 2",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{2x}{x} = 5x + 2$."
  },
  {
    "id": "divpol-f-58",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 25) \\div (x - 5)$",
    "options": [
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x^2 + 5",
        "correct": false
      },
      {
        "latex": "x + 25",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 25 = (x-5)(x+5)$. Al dividir entre $(x-5)$ queda $x+5$."
  },
  {
    "id": "divpol-f-59",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "6x^2 + 4",
        "correct": false
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "6x - 4",
        "correct": false
      },
      {
        "latex": "6x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{6x^3}{x^2} + \\frac{4x^2}{x^2} = 6x + 4$."
  },
  {
    "id": "divpol-f-60",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 8x + 7) \\div (x + 7)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 8x + 7 = (x+7)(x+1)$. Al dividir entre $(x+7)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-61",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 6x) \\div x$",
    "options": [
      {
        "latex": "3x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      },
      {
        "latex": "3x - 6",
        "correct": false
      },
      {
        "latex": "3x + 6",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{6x}{x} = 3x + 6$."
  },
  {
    "id": "divpol-f-62",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 81) \\div (x - 9)$",
    "options": [
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x + 81",
        "correct": false
      },
      {
        "latex": "x - 9",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 81 = (x-9)(x+9)$. Al dividir entre $(x-9)$ queda $x+9$."
  },
  {
    "id": "divpol-f-63",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "5x^2 + 8",
        "correct": false
      },
      {
        "latex": "5x^2",
        "correct": false
      },
      {
        "latex": "5x - 8",
        "correct": false
      },
      {
        "latex": "5x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{5x^3}{x^2} + \\frac{8x^2}{x^2} = 5x + 8$."
  },
  {
    "id": "divpol-f-64",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 3x + 2) \\div (x + 2)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 3x + 2 = (x+2)(x+1)$. Al dividir entre $(x+2)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-65",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 3x) \\div x$",
    "options": [
      {
        "latex": "7x^2 + 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "7x - 3",
        "correct": false
      },
      {
        "latex": "7x + 3",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{3x}{x} = 7x + 3$."
  },
  {
    "id": "divpol-f-66",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 16) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x + 16",
        "correct": false
      },
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 16 = (x-4)(x+4)$. Al dividir entre $(x-4)$ queda $x+4$."
  },
  {
    "id": "divpol-f-67",
    "difficulty": "easy",
    "prompt": "Divide: $(4x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "4x^2 + 4",
        "correct": false
      },
      {
        "latex": "4x - 4",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "4x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{4x^3}{x^2} + \\frac{4x^2}{x^2} = 4x + 4$."
  },
  {
    "id": "divpol-f-68",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 7x + 6) \\div (x + 6)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 7x + 6 = (x+6)(x+1)$. Al dividir entre $(x+6)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-69",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 7x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "5x - 7",
        "correct": false
      },
      {
        "latex": "5x + 7",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{7x}{x} = 5x + 7$."
  },
  {
    "id": "divpol-f-70",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 64) \\div (x - 8)$",
    "options": [
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x^2 + 8",
        "correct": false
      },
      {
        "latex": "x + 64",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 64 = (x-8)(x+8)$. Al dividir entre $(x-8)$ queda $x+8$."
  },
  {
    "id": "divpol-f-71",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "3x - 8",
        "correct": false
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "3x^2 + 8",
        "correct": false
      },
      {
        "latex": "3x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{3x^3}{x^2} + \\frac{8x^2}{x^2} = 3x + 8$."
  },
  {
    "id": "divpol-f-72",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 2x + 1) \\div (x + 1)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 2x + 1 = (x+1)(x+1)$. Al dividir entre $(x+1)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-73",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 4x) \\div x$",
    "options": [
      {
        "latex": "3x - 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "3x^2 + 4",
        "correct": false
      },
      {
        "latex": "3x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{4x}{x} = 3x + 4$."
  },
  {
    "id": "divpol-f-74",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 9) \\div (x - 3)$",
    "options": [
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 9 = (x-3)(x+3)$. Al dividir entre $(x-3)$ queda $x+3$."
  },
  {
    "id": "divpol-f-75",
    "difficulty": "easy",
    "prompt": "Divide: $(2x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "2x^2 + 4",
        "correct": false
      },
      {
        "latex": "2x - 4",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "2x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{2x^3}{x^2} + \\frac{4x^2}{x^2} = 2x + 4$."
  },
  {
    "id": "divpol-f-76",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 6x + 5) \\div (x + 5)$",
    "options": [
      {
        "latex": "x + 5",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 6x + 5 = (x+5)(x+1)$. Al dividir entre $(x+5)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-77",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 1x) \\div x$",
    "options": [
      {
        "latex": "7x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": false
      },
      {
        "latex": "7x^2 + 1",
        "correct": false
      },
      {
        "latex": "7x + 1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{1x}{x} = 7x + 1$."
  },
  {
    "id": "divpol-f-78",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 49) \\div (x - 7)$",
    "options": [
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x + 49",
        "correct": false
      },
      {
        "latex": "x^2 + 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 49 = (x-7)(x+7)$. Al dividir entre $(x-7)$ queda $x+7$."
  },
  {
    "id": "divpol-f-79",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "6x^2 + 8",
        "correct": false
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "6x - 8",
        "correct": false
      },
      {
        "latex": "6x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{6x^3}{x^2} + \\frac{8x^2}{x^2} = 6x + 8$."
  },
  {
    "id": "divpol-f-80",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 10x + 9) \\div (x + 9)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 10x + 9 = (x+9)(x+1)$. Al dividir entre $(x+9)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-81",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 5x) \\div x$",
    "options": [
      {
        "latex": "5x - 5",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": false
      },
      {
        "latex": "5x^2 + 5",
        "correct": false
      },
      {
        "latex": "5x + 5",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{5x}{x} = 5x + 5$."
  },
  {
    "id": "divpol-f-82",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 + 2",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 4 = (x-2)(x+2)$. Al dividir entre $(x-2)$ queda $x+2$."
  },
  {
    "id": "divpol-f-83",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "5x^2 + 4",
        "correct": false
      },
      {
        "latex": "5x - 4",
        "correct": false
      },
      {
        "latex": "5x^2",
        "correct": false
      },
      {
        "latex": "5x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{5x^3}{x^2} + \\frac{4x^2}{x^2} = 5x + 4$."
  },
  {
    "id": "divpol-f-84",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 5x + 4) \\div (x + 4)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 5x + 4 = (x+4)(x+1)$. Al dividir entre $(x+4)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-85",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 2x) \\div x$",
    "options": [
      {
        "latex": "3x^2 + 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "3x - 2",
        "correct": false
      },
      {
        "latex": "3x + 2",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{2x}{x} = 3x + 2$."
  },
  {
    "id": "divpol-f-86",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 36) \\div (x - 6)$",
    "options": [
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 36 = (x-6)(x+6)$. Al dividir entre $(x-6)$ queda $x+6$."
  },
  {
    "id": "divpol-f-87",
    "difficulty": "easy",
    "prompt": "Divide: $(4x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "4x^2 + 8",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "4x - 8",
        "correct": false
      },
      {
        "latex": "4x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{4x^3}{x^2} + \\frac{8x^2}{x^2} = 4x + 8$."
  },
  {
    "id": "divpol-f-88",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 9x + 8) \\div (x + 8)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 9x + 8 = (x+8)(x+1)$. Al dividir entre $(x+8)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-89",
    "difficulty": "easy",
    "prompt": "Divide: $(7x^2 + 6x) \\div x$",
    "options": [
      {
        "latex": "7x^2 + 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      },
      {
        "latex": "7x - 6",
        "correct": false
      },
      {
        "latex": "7x + 6",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{7x^2}{x} + \\frac{6x}{x} = 7x + 6$."
  },
  {
    "id": "divpol-f-90",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 1) \\div (x - 1)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1 + 1",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$. Al dividir entre $(x-1)$ queda $x+1$."
  },
  {
    "id": "divpol-f-91",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "3x - 4",
        "correct": false
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "3x^2 + 4",
        "correct": false
      },
      {
        "latex": "3x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{3x^3}{x^2} + \\frac{4x^2}{x^2} = 3x + 4$."
  },
  {
    "id": "divpol-f-92",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 4x + 3) \\div (x + 3)$",
    "options": [
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 4x + 3 = (x+3)(x+1)$. Al dividir entre $(x+3)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-93",
    "difficulty": "easy",
    "prompt": "Divide: $(5x^2 + 3x) \\div x$",
    "options": [
      {
        "latex": "5x^2 + 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": false
      },
      {
        "latex": "5x - 3",
        "correct": false
      },
      {
        "latex": "5x + 3",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{5x^2}{x} + \\frac{3x}{x} = 5x + 3$."
  },
  {
    "id": "divpol-f-94",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 25) \\div (x - 5)$",
    "options": [
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x^2 + 5",
        "correct": false
      },
      {
        "latex": "x + 25",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 25 = (x-5)(x+5)$. Al dividir entre $(x-5)$ queda $x+5$."
  },
  {
    "id": "divpol-f-95",
    "difficulty": "easy",
    "prompt": "Divide: $(2x^3 + 8x^2) \\div x^2$",
    "options": [
      {
        "latex": "2x - 8",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "2x^2 + 8",
        "correct": false
      },
      {
        "latex": "2x + 8",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{2x^3}{x^2} + \\frac{8x^2}{x^2} = 2x + 8$."
  },
  {
    "id": "divpol-f-96",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 + 8x + 7) \\div (x + 7)$",
    "options": [
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $x^2 + 8x + 7 = (x+7)(x+1)$. Al dividir entre $(x+7)$ se obtiene $x+1$."
  },
  {
    "id": "divpol-f-97",
    "difficulty": "easy",
    "prompt": "Divide: $(3x^2 + 7x) \\div x$",
    "options": [
      {
        "latex": "3x - 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": false
      },
      {
        "latex": "3x^2 + 7",
        "correct": false
      },
      {
        "latex": "3x + 7",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x$: $\\frac{3x^2}{x} + \\frac{7x}{x} = 3x + 7$."
  },
  {
    "id": "divpol-f-98",
    "difficulty": "easy",
    "prompt": "Divide: $(x^2 - 81) \\div (x - 9)$",
    "options": [
      {
        "latex": "x - 9",
        "correct": false
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x + 81",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": true
      }
    ],
    "explanation": "Por diferencia de cuadrados: $x^2 - 81 = (x-9)(x+9)$. Al dividir entre $(x-9)$ queda $x+9$."
  },
  {
    "id": "divpol-f-99",
    "difficulty": "easy",
    "prompt": "Divide: $(6x^3 + 4x^2) \\div x^2$",
    "options": [
      {
        "latex": "6x^2 + 4",
        "correct": false
      },
      {
        "latex": "6x - 4",
        "correct": false
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "6x + 4",
        "correct": true
      }
    ],
    "explanation": "Dividiendo cada término entre $x^2$: $\\frac{6x^3}{x^2} + \\frac{4x^2}{x^2} = 6x + 4$."
  },
  {
    "id": "divpol-m-01",
    "difficulty": "medium",
    "prompt": "Divide: $(x^2 + 5x + 6) \\div (x + 2)$",
    "options": [
      {
        "latex": "x + 3",
        "correct": true
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x^2 + 3",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 5x + 6 = (x+2)(x+3)$, así que el cociente es $x+3$."
  },
  {
    "id": "divpol-m-02",
    "difficulty": "medium",
    "prompt": "Divide: $(x^3 + 2x^2 + x) \\div x$",
    "options": [
      {
        "latex": "x^2 + 2x + 1",
        "correct": true
      },
      {
        "latex": "x^2 + 2x",
        "correct": false
      },
      {
        "latex": "x^3 + 2x + 1",
        "correct": false
      },
      {
        "latex": "x^2 + x + 1",
        "correct": false
      }
    ],
    "explanation": "Divide término a término: $x^2 + 2x + 1$."
  },
  {
    "id": "divpol-m-03",
    "difficulty": "medium",
    "prompt": "Divide: $(2x^2 + 6x) \\div 2x$",
    "options": [
      {
        "latex": "x + 3",
        "correct": true
      },
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "2x + 3",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": false
      }
    ],
    "explanation": "$\\frac{2x^2}{2x} + \\frac{6x}{2x} = x + 3$."
  },
  {
    "id": "divpol-m-04",
    "difficulty": "medium",
    "prompt": "Divide: $(x^2 - 1) \\div (x + 1)$",
    "options": [
      {
        "latex": "x - 1",
        "correct": true
      },
      {
        "latex": "x + 1",
        "correct": false
      },
      {
        "latex": "x^2 - 1",
        "correct": false
      },
      {
        "latex": "1 - x",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 1 = (x+1)(x-1)$, así que el cociente es $x-1$."
  },
  {
    "id": "divpol-m-05",
    "difficulty": "medium",
    "prompt": "Divide: $(x^3 - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 + 2x + 4",
        "correct": true
      },
      {
        "latex": "x^2 - 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 2x - 4",
        "correct": false
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      }
    ],
    "explanation": "Es una diferencia de cubos: $x^3 - 8 = (x-2)(x^2 + 2x + 4)$."
  },
  {
    "id": "divpol-m-06",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-07",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x - 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 2x + 4",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 2^3}{x - 2} = x^2 + 2x + 4$."
  },
  {
    "id": "divpol-m-08",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 4$ entre $(x - 3)$",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(3) = (3)^2 + 1(3) + 4 = 9 + 3 + 4 = 16$."
  },
  {
    "id": "divpol-m-09",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 2x - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 4)$. El cociente exacto es $x + 4$."
  },
  {
    "id": "divpol-m-10",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-100",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 1$ entre $(x - 4)$",
    "options": [
      {
        "latex": "23",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "26",
        "correct": false
      },
      {
        "latex": "21",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(4) = (4)^2 + 1(4) + 1 = 16 + 4 + 1 = 21$."
  },
  {
    "id": "divpol-m-11",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 216) \\div (x - 6)$",
    "options": [
      {
        "latex": "x^2 - 6x + 36",
        "correct": false
      },
      {
        "latex": "x^2 - 6x - 36",
        "correct": false
      },
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 36",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 6^3}{x - 6} = x^2 + 6x + 36$."
  },
  {
    "id": "divpol-m-12",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 3$ entre $(x - 7)$",
    "options": [
      {
        "latex": "61",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "56",
        "correct": false
      },
      {
        "latex": "59",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(7) = (7)^2 + 1(7) + 3 = 49 + 7 + 3 = 59$."
  },
  {
    "id": "divpol-m-13",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 6x - 16) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 8)$. El cociente exacto es $x + 8$."
  },
  {
    "id": "divpol-m-14",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-15",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 27) \\div (x - 3)$",
    "options": [
      {
        "latex": "x^2 - 3x + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3x - 9",
        "correct": false
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3x + 9",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 3^3}{x - 3} = x^2 + 3x + 9$."
  },
  {
    "id": "divpol-m-16",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 2$ entre $(x - 4)$",
    "options": [
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "22",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(4) = (4)^2 + 1(4) + 2 = 16 + 4 + 2 = 22$."
  },
  {
    "id": "divpol-m-17",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 3x - 10) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 5)$. El cociente exacto es $x + 5$."
  },
  {
    "id": "divpol-m-18",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-19",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 343) \\div (x - 7)$",
    "options": [
      {
        "latex": "x^2 - 7x + 49",
        "correct": false
      },
      {
        "latex": "x^2 + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 7x - 49",
        "correct": false
      },
      {
        "latex": "x^2 + 7x + 49",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 7^3}{x - 7} = x^2 + 7x + 49$."
  },
  {
    "id": "divpol-m-20",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 1$ entre $(x - 8)$",
    "options": [
      {
        "latex": "75",
        "correct": false
      },
      {
        "latex": "70",
        "correct": false
      },
      {
        "latex": "78",
        "correct": false
      },
      {
        "latex": "73",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(8) = (8)^2 + 1(8) + 1 = 64 + 8 + 1 = 73$."
  },
  {
    "id": "divpol-m-21",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 0x - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2 + 1",
        "correct": false
      },
      {
        "latex": "x - 2 + 1",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 2)$. El cociente exacto es $x + 2$."
  },
  {
    "id": "divpol-m-22",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-23",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 64) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^2 + 16",
        "correct": false
      },
      {
        "latex": "x^2 - 4x - 16",
        "correct": false
      },
      {
        "latex": "x^2 - 4x + 16",
        "correct": false
      },
      {
        "latex": "x^2 + 4x + 16",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 4^3}{x - 4} = x^2 + 4x + 16$."
  },
  {
    "id": "divpol-m-24",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 5$ entre $(x - 5)$",
    "options": [
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "37",
        "correct": false
      },
      {
        "latex": "35",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(5) = (5)^2 + 1(5) + 5 = 25 + 5 + 5 = 35$."
  },
  {
    "id": "divpol-m-25",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 4x - 12) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 6)$. El cociente exacto es $x + 6$."
  },
  {
    "id": "divpol-m-26",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "4",
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
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-27",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 512) \\div (x - 8)$",
    "options": [
      {
        "latex": "x^2 - 8x + 64",
        "correct": false
      },
      {
        "latex": "x^2 + 64",
        "correct": false
      },
      {
        "latex": "x^2 - 8x - 64",
        "correct": false
      },
      {
        "latex": "x^2 + 8x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 8^3}{x - 8} = x^2 + 8x + 64$."
  },
  {
    "id": "divpol-m-28",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 4$ entre $(x - 2)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(2) = (2)^2 + 1(2) + 4 = 4 + 2 + 4 = 10$."
  },
  {
    "id": "divpol-m-29",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 1x - 6) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 3)$. El cociente exacto es $x + 3$."
  },
  {
    "id": "divpol-m-30",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-31",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 125) \\div (x - 5)$",
    "options": [
      {
        "latex": "x^2 - 5x + 25",
        "correct": false
      },
      {
        "latex": "x^2 - 5x - 25",
        "correct": false
      },
      {
        "latex": "x^2 + 25",
        "correct": false
      },
      {
        "latex": "x^2 + 5x + 25",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 5^3}{x - 5} = x^2 + 5x + 25$."
  },
  {
    "id": "divpol-m-32",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 3$ entre $(x - 6)$",
    "options": [
      {
        "latex": "47",
        "correct": false
      },
      {
        "latex": "42",
        "correct": false
      },
      {
        "latex": "50",
        "correct": false
      },
      {
        "latex": "45",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(6) = (6)^2 + 1(6) + 3 = 36 + 6 + 3 = 45$."
  },
  {
    "id": "divpol-m-33",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 5x - 14) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 7)$. El cociente exacto es $x + 7$."
  },
  {
    "id": "divpol-m-34",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-35",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 - 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x - 4",
        "correct": false
      },
      {
        "latex": "x^2 + 2x + 4",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 2^3}{x - 2} = x^2 + 2x + 4$."
  },
  {
    "id": "divpol-m-36",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 2$ entre $(x - 3)$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(3) = (3)^2 + 1(3) + 2 = 9 + 3 + 2 = 14$."
  },
  {
    "id": "divpol-m-37",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 2x - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 4)$. El cociente exacto es $x + 4$."
  },
  {
    "id": "divpol-m-38",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-39",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 216) \\div (x - 6)$",
    "options": [
      {
        "latex": "x^2 - 6x + 36",
        "correct": false
      },
      {
        "latex": "x^2 - 6x - 36",
        "correct": false
      },
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 36",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 6^3}{x - 6} = x^2 + 6x + 36$."
  },
  {
    "id": "divpol-m-40",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 1$ entre $(x - 7)$",
    "options": [
      {
        "latex": "54",
        "correct": false
      },
      {
        "latex": "62",
        "correct": false
      },
      {
        "latex": "59",
        "correct": false
      },
      {
        "latex": "57",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(7) = (7)^2 + 1(7) + 1 = 49 + 7 + 1 = 57$."
  },
  {
    "id": "divpol-m-41",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 6x - 16) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 8)$. El cociente exacto es $x + 8$."
  },
  {
    "id": "divpol-m-42",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-43",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 27) \\div (x - 3)$",
    "options": [
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3x - 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3x + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3x + 9",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 3^3}{x - 3} = x^2 + 3x + 9$."
  },
  {
    "id": "divpol-m-44",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 5$ entre $(x - 4)$",
    "options": [
      {
        "latex": "22",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(4) = (4)^2 + 1(4) + 5 = 16 + 4 + 5 = 25$."
  },
  {
    "id": "divpol-m-45",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 3x - 10) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 5)$. El cociente exacto es $x + 5$."
  },
  {
    "id": "divpol-m-46",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-47",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 343) \\div (x - 7)$",
    "options": [
      {
        "latex": "x^2 + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 7x - 49",
        "correct": false
      },
      {
        "latex": "x^2 - 7x + 49",
        "correct": false
      },
      {
        "latex": "x^2 + 7x + 49",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 7^3}{x - 7} = x^2 + 7x + 49$."
  },
  {
    "id": "divpol-m-48",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 4$ entre $(x - 8)$",
    "options": [
      {
        "latex": "73",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      },
      {
        "latex": "78",
        "correct": false
      },
      {
        "latex": "76",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(8) = (8)^2 + 1(8) + 4 = 64 + 8 + 4 = 76$."
  },
  {
    "id": "divpol-m-49",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 0x - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2 + 1",
        "correct": false
      },
      {
        "latex": "x - 2 + 1",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 2)$. El cociente exacto es $x + 2$."
  },
  {
    "id": "divpol-m-50",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-51",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 64) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^2 - 4x + 16",
        "correct": false
      },
      {
        "latex": "x^2 + 16",
        "correct": false
      },
      {
        "latex": "x^2 - 4x - 16",
        "correct": false
      },
      {
        "latex": "x^2 + 4x + 16",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 4^3}{x - 4} = x^2 + 4x + 16$."
  },
  {
    "id": "divpol-m-52",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 3$ entre $(x - 5)$",
    "options": [
      {
        "latex": "35",
        "correct": false
      },
      {
        "latex": "38",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "33",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(5) = (5)^2 + 1(5) + 3 = 25 + 5 + 3 = 33$."
  },
  {
    "id": "divpol-m-53",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 4x - 12) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 6)$. El cociente exacto es $x + 6$."
  },
  {
    "id": "divpol-m-54",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-55",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 512) \\div (x - 8)$",
    "options": [
      {
        "latex": "x^2 - 8x + 64",
        "correct": false
      },
      {
        "latex": "x^2 - 8x - 64",
        "correct": false
      },
      {
        "latex": "x^2 + 64",
        "correct": false
      },
      {
        "latex": "x^2 + 8x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 8^3}{x - 8} = x^2 + 8x + 64$."
  },
  {
    "id": "divpol-m-56",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 2$ entre $(x - 2)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(2) = (2)^2 + 1(2) + 2 = 4 + 2 + 2 = 8$."
  },
  {
    "id": "divpol-m-57",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 1x - 6) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 3)$. El cociente exacto es $x + 3$."
  },
  {
    "id": "divpol-m-58",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-59",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 125) \\div (x - 5)$",
    "options": [
      {
        "latex": "x^2 - 5x + 25",
        "correct": false
      },
      {
        "latex": "x^2 + 25",
        "correct": false
      },
      {
        "latex": "x^2 - 5x - 25",
        "correct": false
      },
      {
        "latex": "x^2 + 5x + 25",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 5^3}{x - 5} = x^2 + 5x + 25$."
  },
  {
    "id": "divpol-m-60",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 1$ entre $(x - 6)$",
    "options": [
      {
        "latex": "45",
        "correct": false
      },
      {
        "latex": "48",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "43",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(6) = (6)^2 + 1(6) + 1 = 36 + 6 + 1 = 43$."
  },
  {
    "id": "divpol-m-61",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 5x - 14) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 7)$. El cociente exacto es $x + 7$."
  },
  {
    "id": "divpol-m-62",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-63",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 - 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x - 4",
        "correct": false
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 2x + 4",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 2^3}{x - 2} = x^2 + 2x + 4$."
  },
  {
    "id": "divpol-m-64",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 5$ entre $(x - 3)$",
    "options": [
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "22",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(3) = (3)^2 + 1(3) + 5 = 9 + 3 + 5 = 17$."
  },
  {
    "id": "divpol-m-65",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 2x - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 4)$. El cociente exacto es $x + 4$."
  },
  {
    "id": "divpol-m-66",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-67",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 216) \\div (x - 6)$",
    "options": [
      {
        "latex": "x^2 - 6x + 36",
        "correct": false
      },
      {
        "latex": "x^2 - 6x - 36",
        "correct": false
      },
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 36",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 6^3}{x - 6} = x^2 + 6x + 36$."
  },
  {
    "id": "divpol-m-68",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 4$ entre $(x - 7)$",
    "options": [
      {
        "latex": "57",
        "correct": false
      },
      {
        "latex": "65",
        "correct": false
      },
      {
        "latex": "62",
        "correct": false
      },
      {
        "latex": "60",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(7) = (7)^2 + 1(7) + 4 = 49 + 7 + 4 = 60$."
  },
  {
    "id": "divpol-m-69",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 6x - 16) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 8)$. El cociente exacto es $x + 8$."
  },
  {
    "id": "divpol-m-70",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-71",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 27) \\div (x - 3)$",
    "options": [
      {
        "latex": "x^2 - 3x + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3x - 9",
        "correct": false
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3x + 9",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 3^3}{x - 3} = x^2 + 3x + 9$."
  },
  {
    "id": "divpol-m-72",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 3$ entre $(x - 4)$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "23",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(4) = (4)^2 + 1(4) + 3 = 16 + 4 + 3 = 23$."
  },
  {
    "id": "divpol-m-73",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 3x - 10) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 5",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 5",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 5)$. El cociente exacto es $x + 5$."
  },
  {
    "id": "divpol-m-74",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-75",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 343) \\div (x - 7)$",
    "options": [
      {
        "latex": "x^2 - 7x + 49",
        "correct": false
      },
      {
        "latex": "x^2 + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 7x - 49",
        "correct": false
      },
      {
        "latex": "x^2 + 7x + 49",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 7^3}{x - 7} = x^2 + 7x + 49$."
  },
  {
    "id": "divpol-m-76",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 2$ entre $(x - 8)$",
    "options": [
      {
        "latex": "71",
        "correct": false
      },
      {
        "latex": "79",
        "correct": false
      },
      {
        "latex": "76",
        "correct": false
      },
      {
        "latex": "74",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(8) = (8)^2 + 1(8) + 2 = 64 + 8 + 2 = 74$."
  },
  {
    "id": "divpol-m-77",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 0x - 4) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2 + 1",
        "correct": false
      },
      {
        "latex": "x - 2 + 1",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 2)$. El cociente exacto es $x + 2$."
  },
  {
    "id": "divpol-m-78",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-79",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 64) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^2 - 4x + 16",
        "correct": false
      },
      {
        "latex": "x^2 + 16",
        "correct": false
      },
      {
        "latex": "x^2 - 4x - 16",
        "correct": false
      },
      {
        "latex": "x^2 + 4x + 16",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 4^3}{x - 4} = x^2 + 4x + 16$."
  },
  {
    "id": "divpol-m-80",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 1$ entre $(x - 5)$",
    "options": [
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "33",
        "correct": false
      },
      {
        "latex": "31",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(5) = (5)^2 + 1(5) + 1 = 25 + 5 + 1 = 31$."
  },
  {
    "id": "divpol-m-81",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 4x - 12) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 6",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 6)$. El cociente exacto es $x + 6$."
  },
  {
    "id": "divpol-m-82",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-83",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 512) \\div (x - 8)$",
    "options": [
      {
        "latex": "x^2 - 8x + 64",
        "correct": false
      },
      {
        "latex": "x^2 + 64",
        "correct": false
      },
      {
        "latex": "x^2 - 8x - 64",
        "correct": false
      },
      {
        "latex": "x^2 + 8x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 8^3}{x - 8} = x^2 + 8x + 64$."
  },
  {
    "id": "divpol-m-84",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 5$ entre $(x - 2)$",
    "options": [
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "11",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(2) = (2)^2 + 1(2) + 5 = 4 + 2 + 5 = 11$."
  },
  {
    "id": "divpol-m-85",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 1x - 6) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 3",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 3",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 3)$. El cociente exacto es $x + 3$."
  },
  {
    "id": "divpol-m-86",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "4",
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
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-87",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 125) \\div (x - 5)$",
    "options": [
      {
        "latex": "x^2 + 25",
        "correct": false
      },
      {
        "latex": "x^2 - 5x - 25",
        "correct": false
      },
      {
        "latex": "x^2 - 5x + 25",
        "correct": false
      },
      {
        "latex": "x^2 + 5x + 25",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 5^3}{x - 5} = x^2 + 5x + 25$."
  },
  {
    "id": "divpol-m-88",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 4$ entre $(x - 6)$",
    "options": [
      {
        "latex": "48",
        "correct": false
      },
      {
        "latex": "43",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "46",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(6) = (6)^2 + 1(6) + 4 = 36 + 6 + 4 = 46$."
  },
  {
    "id": "divpol-m-89",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 5x - 14) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 7",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x + 7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 7)$. El cociente exacto es $x + 7$."
  },
  {
    "id": "divpol-m-90",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 4 se divide entre uno de grado 1, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 4 - 1 = 3$."
  },
  {
    "id": "divpol-m-91",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x - 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 2x + 4",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 2^3}{x - 2} = x^2 + 2x + 4$."
  },
  {
    "id": "divpol-m-92",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 3$ entre $(x - 3)$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(3) = (3)^2 + 1(3) + 3 = 9 + 3 + 3 = 15$."
  },
  {
    "id": "divpol-m-93",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 2x - 8) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 4",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 4)$. El cociente exacto es $x + 4$."
  },
  {
    "id": "divpol-m-94",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 8 se divide entre uno de grado 2, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 8 - 2 = 6$."
  },
  {
    "id": "divpol-m-95",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 216) \\div (x - 6)$",
    "options": [
      {
        "latex": "x^2 - 6x + 36",
        "correct": false
      },
      {
        "latex": "x^2 - 6x - 36",
        "correct": false
      },
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 36",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 6^3}{x - 6} = x^2 + 6x + 36$."
  },
  {
    "id": "divpol-m-96",
    "difficulty": "medium",
    "prompt": "Halla el residuo de dividir $P(x) = x^2 + 1x + 2$ entre $(x - 7)$",
    "options": [
      {
        "latex": "60",
        "correct": false
      },
      {
        "latex": "55",
        "correct": false
      },
      {
        "latex": "63",
        "correct": false
      },
      {
        "latex": "58",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del residuo, $R = P(7) = (7)^2 + 1(7) + 2 = 49 + 7 + 2 = 58$."
  },
  {
    "id": "divpol-m-97",
    "difficulty": "medium",
    "prompt": "Calcula el cociente de $(x^2 + 6x - 16) \\div (x - 2)$",
    "options": [
      {
        "latex": "x - 8",
        "correct": false
      },
      {
        "latex": "x + 2",
        "correct": false
      },
      {
        "latex": "x - 2",
        "correct": false
      },
      {
        "latex": "x + 8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $(x - 2)(x + 8)$. El cociente exacto es $x + 8$."
  },
  {
    "id": "divpol-m-98",
    "difficulty": "medium",
    "prompt": "Si un polinomio de grado 6 se divide entre uno de grado 3, ¿cuál es el grado del cociente?",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "El grado del cociente es $\\text{gr}(C) = \\text{gr}(P) - \\text{gr}(Q) = 6 - 3 = 3$."
  },
  {
    "id": "divpol-m-99",
    "difficulty": "medium",
    "prompt": "Divide la diferencia de cubos: $(x^3 - 27) \\div (x - 3)$",
    "options": [
      {
        "latex": "x^2 - 3x + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3x - 9",
        "correct": false
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 3x + 9",
        "correct": true
      }
    ],
    "explanation": "Por cocientes notables: $\\frac{x^3 - 3^3}{x - 3} = x^2 + 3x + 9$."
  },
  {
    "id": "divpol-h-01",
    "difficulty": "hard",
    "prompt": "Divide: $(x^3 - 1) \\div (x - 1)$",
    "options": [
      {
        "latex": "x^2 + x + 1",
        "correct": true
      },
      {
        "latex": "x^2 - x + 1",
        "correct": false
      },
      {
        "latex": "x^2 + x - 1",
        "correct": false
      },
      {
        "latex": "x^3 + x + 1",
        "correct": false
      }
    ],
    "explanation": "Diferencia de cubos: $x^3 - 1 = (x-1)(x^2 + x + 1)$."
  },
  {
    "id": "divpol-h-02",
    "difficulty": "hard",
    "prompt": "Divide: $(2x^3 + 4x^2 - 6x) \\div 2x$",
    "options": [
      {
        "latex": "x^2 + 2x - 3",
        "correct": true
      },
      {
        "latex": "x^2 + 2x + 3",
        "correct": false
      },
      {
        "latex": "2x^2 + 4x - 6",
        "correct": false
      },
      {
        "latex": "x^2 - 2x - 3",
        "correct": false
      }
    ],
    "explanation": "Divide cada término entre $2x$: $x^2 + 2x - 3$."
  },
  {
    "id": "divpol-h-03",
    "difficulty": "hard",
    "prompt": "Divide: $(x^2 + 1) \\div (x - 1)$. ¿Cuál es el residuo?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "x + 1",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 1 = (x-1)(x+1) + 2$, por lo que el residuo es $2$."
  },
  {
    "id": "divpol-h-04",
    "difficulty": "hard",
    "prompt": "Divide: $(x^3 + x^2 - x - 1) \\div (x + 1)$",
    "options": [
      {
        "latex": "x^2 - 1",
        "correct": true
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x - 1",
        "correct": false
      },
      {
        "latex": "x^2 - x + 1",
        "correct": false
      }
    ],
    "explanation": "Agrupa: $x^2(x+1) - (x+1) = (x+1)(x^2-1)$, así que el cociente es $x^2 - 1$."
  },
  {
    "id": "divpol-h-05",
    "difficulty": "hard",
    "prompt": "Divide: $(3x^3 - 3x) \\div 3x$",
    "options": [
      {
        "latex": "x^2 - 1",
        "correct": true
      },
      {
        "latex": "x^2 + 1",
        "correct": false
      },
      {
        "latex": "x^3 - 1",
        "correct": false
      },
      {
        "latex": "3x^2 - 3",
        "correct": false
      }
    ],
    "explanation": "$\\frac{3x^3}{3x} - \\frac{3x}{3x} = x^2 - 1$."
  },
  {
    "id": "divpol-h-06",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 8$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 8 = 0 \\implies 2k + 12 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-07",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 2)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "2",
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
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 2 = 1 - 4 + 2 = -1$."
  },
  {
    "id": "divpol-h-08",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-09",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 15$",
    "options": [
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 15 = 0 \\implies 5k + 40 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-10",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 5)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 5 = 1 - 7 + 5 = -1$."
  },
  {
    "id": "divpol-h-100",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 4)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 4 = 1 - 7 + 4 = -2$."
  },
  {
    "id": "divpol-h-11",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-12",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 6$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 6 = 0 \\implies 3k + 15 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-13",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 8)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 8 = 1 - 4 + 8 = 5$."
  },
  {
    "id": "divpol-h-14",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-15",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 5$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 5 = 0 \\implies 1k + 6 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-16",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 4)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 4 = 1 - 7 + 4 = -2$."
  },
  {
    "id": "divpol-h-17",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-18",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 16$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 16 = 0 \\implies 4k + 32 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-19",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 7)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 7 = 1 - 4 + 7 = 4$."
  },
  {
    "id": "divpol-h-20",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-21",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 6$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 6 = 0 \\implies 2k + 10 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-22",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 3)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "0",
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
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 3 = 1 - 7 + 3 = -3$."
  },
  {
    "id": "divpol-h-23",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-24",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 10$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 10 = 0 \\implies 5k + 35 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-25",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 6)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
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
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 6 = 1 - 4 + 6 = 3$."
  },
  {
    "id": "divpol-h-26",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-27",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 15$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 15 = 0 \\implies 3k + 24 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-28",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 2)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 2 = 1 - 7 + 2 = -4$."
  },
  {
    "id": "divpol-h-29",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-30",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 4$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 4 = 0 \\implies 1k + 5 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-31",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 5)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 5 = 1 - 4 + 5 = 2$."
  },
  {
    "id": "divpol-h-32",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-33",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 12$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 12 = 0 \\implies 4k + 28 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-34",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 8)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 8 = 1 - 7 + 8 = 2$."
  },
  {
    "id": "divpol-h-35",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-36",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 4$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 4 = 0 \\implies 2k + 8 = 0 \\implies k = -4$."
  },
  {
    "id": "divpol-h-37",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 4)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 4 = 1 - 4 + 4 = 1$."
  },
  {
    "id": "divpol-h-38",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-39",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 25$",
    "options": [
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 25 = 0 \\implies 5k + 50 = 0 \\implies k = -10$."
  },
  {
    "id": "divpol-h-40",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 7)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 7 = 1 - 7 + 7 = 1$."
  },
  {
    "id": "divpol-h-41",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-42",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 12$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 12 = 0 \\implies 3k + 21 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-43",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 3)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 3 = 1 - 4 + 3 = 0$."
  },
  {
    "id": "divpol-h-44",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-45",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 3$",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 3 = 0 \\implies 1k + 4 = 0 \\implies k = -4$."
  },
  {
    "id": "divpol-h-46",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 6)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 6 = 1 - 7 + 6 = 0$."
  },
  {
    "id": "divpol-h-47",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-48",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 8$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 8 = 0 \\implies 4k + 24 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-49",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 2)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
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
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 2 = 1 - 4 + 2 = -1$."
  },
  {
    "id": "divpol-h-50",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-51",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 10$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 10 = 0 \\implies 2k + 14 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-52",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 5)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 5 = 1 - 7 + 5 = -1$."
  },
  {
    "id": "divpol-h-53",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-54",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 20$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-11",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 20 = 0 \\implies 5k + 45 = 0 \\implies k = -9$."
  },
  {
    "id": "divpol-h-55",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 8)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 8 = 1 - 4 + 8 = 5$."
  },
  {
    "id": "divpol-h-56",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-57",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 9$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 9 = 0 \\implies 3k + 18 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-58",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 4)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 4 = 1 - 7 + 4 = -2$."
  },
  {
    "id": "divpol-h-59",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-60",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 2$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 2 = 0 \\implies 1k + 3 = 0 \\implies k = -3$."
  },
  {
    "id": "divpol-h-61",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 7)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 7 = 1 - 4 + 7 = 4$."
  },
  {
    "id": "divpol-h-62",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-63",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 20$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "-11",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 20 = 0 \\implies 4k + 36 = 0 \\implies k = -9$."
  },
  {
    "id": "divpol-h-64",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 3)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 3 = 1 - 7 + 3 = -3$."
  },
  {
    "id": "divpol-h-65",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-66",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 8$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 8 = 0 \\implies 2k + 12 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-67",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 6)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
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
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 6 = 1 - 4 + 6 = 3$."
  },
  {
    "id": "divpol-h-68",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-69",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 15$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 15 = 0 \\implies 5k + 40 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-70",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 2)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 2 = 1 - 7 + 2 = -4$."
  },
  {
    "id": "divpol-h-71",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-72",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 6$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 6 = 0 \\implies 3k + 15 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-73",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 5)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 5 = 1 - 4 + 5 = 2$."
  },
  {
    "id": "divpol-h-74",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-75",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 5$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 5 = 0 \\implies 1k + 6 = 0 \\implies k = -6$."
  },
  {
    "id": "divpol-h-76",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 8)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 8 = 1 - 7 + 8 = 2$."
  },
  {
    "id": "divpol-h-77",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-78",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 16$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 16 = 0 \\implies 4k + 32 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-79",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 4)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 4 = 1 - 4 + 4 = 1$."
  },
  {
    "id": "divpol-h-80",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-81",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 6$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 6 = 0 \\implies 2k + 10 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-82",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 7)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "14",
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
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 7 = 1 - 7 + 7 = 1$."
  },
  {
    "id": "divpol-h-83",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-84",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 10$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 10 = 0 \\implies 5k + 35 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-85",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 3)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 3 = 1 - 4 + 3 = 0$."
  },
  {
    "id": "divpol-h-86",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-87",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 3)$ sea divisible exactamente por $P(x) = x^2 + kx + 15$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(3) = 0 \\implies (3)^2 + k(3) + 15 = 0 \\implies 3k + 24 = 0 \\implies k = -8$."
  },
  {
    "id": "divpol-h-88",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 6)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 6 = 1 - 7 + 6 = 0$."
  },
  {
    "id": "divpol-h-89",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-90",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 1)$ sea divisible exactamente por $P(x) = x^2 + kx + 4$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(1) = 0 \\implies (1)^2 + k(1) + 4 = 0 \\implies 1k + 5 = 0 \\implies k = -5$."
  },
  {
    "id": "divpol-h-91",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 2)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "2",
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
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 2 = 1 - 4 + 2 = -1$."
  },
  {
    "id": "divpol-h-92",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-93",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 4)$ sea divisible exactamente por $P(x) = x^2 + kx + 12$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "-7",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(4) = 0 \\implies (4)^2 + k(4) + 12 = 0 \\implies 4k + 28 = 0 \\implies k = -7$."
  },
  {
    "id": "divpol-h-94",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 7x + 5)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 7(-1) + 5 = 1 - 7 + 5 = -1$."
  },
  {
    "id": "divpol-h-95",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-96",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 2)$ sea divisible exactamente por $P(x) = x^2 + kx + 4$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(2) = 0 \\implies (2)^2 + k(2) + 4 = 0 \\implies 2k + 8 = 0 \\implies k = -4$."
  },
  {
    "id": "divpol-h-97",
    "difficulty": "hard",
    "prompt": "Al dividir $(x^2 + 4x + 8)$ entre $(x + 1)$, ¿cuál es el residuo $R$?",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Evaluando en $x = -1$: $R = (-1)^2 + 4(-1) + 8 = 1 - 4 + 8 = 5$."
  },
  {
    "id": "divpol-h-98",
    "difficulty": "hard",
    "prompt": "Efectúa la división: $(x^4 - 256) \\div (x - 4)$",
    "options": [
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 - 4x^2 + 16x - 64",
        "correct": false
      },
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": true
      }
    ],
    "explanation": "Por cociente notable: $\\frac{x^4 - 4^4}{x - 4} = x^3 + 4x^2 + 16x + 64$."
  },
  {
    "id": "divpol-h-99",
    "difficulty": "hard",
    "prompt": "Determina el valor de $k$ para que $(x - 5)$ sea divisible exactamente por $P(x) = x^2 + kx + 25$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "-10",
        "correct": true
      }
    ],
    "explanation": "Por el teorema del factor, $P(5) = 0 \\implies (5)^2 + k(5) + 25 = 0 \\implies 5k + 50 = 0 \\implies k = -10$."
  }
]
};
