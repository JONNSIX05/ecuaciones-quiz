// data/calculo-diferencial/limites/sustitucion.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "lim-sustitucion",
  lawName: "Límite por sustitución directa",
  lawFormula: "\\lim_{x \\to a} f(x) = f(a) \\text{ si } f \\text{ es continua en } a",
  prerequisites: "Conocer evaluación de funciones y continuidad básica.",
  available: true,
  questions: [
  {
    "id": "limsus-f-01",
    "difficulty": "easy",
    "prompt": "¿Cómo evalúas $\\lim_{x \\to 2} (3x + 1)$?",
    "options": [
      {
        "latex": "\\text{Sustitución directa}",
        "correct": true
      },
      {
        "latex": "\\text{Factorización}",
        "correct": false
      },
      {
        "latex": "\\text{Racionalización}",
        "correct": false
      },
      {
        "latex": "\\text{Regla de L'Hôpital}",
        "correct": false
      }
    ],
    "explanation": "$3x + 1$ es un polinomio, continuo en todo $\\mathbb{R}$: basta sustituir $x = 2$."
  },
  {
    "id": "limsus-f-02",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 2} (3x + 1)$",
    "options": [
      {
        "latex": "7",
        "correct": true
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
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "Sustituye directamente: $3(2) + 1 = 7$."
  },
  {
    "id": "limsus-f-03",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 5} 8$",
    "options": [
      {
        "latex": "8",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "La función constante vale 8 para toda $x$; su límite es 8."
  },
  {
    "id": "limsus-f-04",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 4x - 2)$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      }
    ],
    "explanation": "Sustituye: $1^2 + 4(1) - 2 = 3$."
  },
  {
    "id": "limsus-f-05",
    "difficulty": "easy",
    "prompt": "¿Cuándo se puede usar la sustitución directa para calcular $\\lim_{x \\to a} f(x)$?",
    "options": [
      {
        "latex": "\\text{Cuando } f \\text{ es continua en } a",
        "correct": true
      },
      {
        "latex": "\\text{Siempre, en cualquier función}",
        "correct": false
      },
      {
        "latex": "\\text{Solo cuando el resultado es } \\frac{0}{0}",
        "correct": false
      },
      {
        "latex": "\\text{Solo si } f \\text{ es una constante}",
        "correct": false
      }
    ],
    "explanation": "La sustitución directa es válida cuando $f$ es continua en $a$: el límite coincide con $f(a)$."
  },
  {
    "id": "limsus-f-06",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 1} (3x + 7)$",
    "options": [
      {
        "latex": "12",
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
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 1$: $3(1) + 7 = 3 + 7 = 10$."
  },
  {
    "id": "limsus-f-07",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 2} (4x + 1)$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 2$: $4(2) + 1 = 8 + 1 = 9$."
  },
  {
    "id": "limsus-f-08",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 3} (5x + 2)$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 3$: $5(3) + 2 = 15 + 2 = 17$."
  },
  {
    "id": "limsus-f-09",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 4} (6x + 3)$",
    "options": [
      {
        "latex": "29",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 4$: $6(4) + 3 = 24 + 3 = 27$."
  },
  {
    "id": "limsus-f-10",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 5} (2x + 4)$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 5$: $2(5) + 4 = 10 + 4 = 14$."
  },
  {
    "id": "limsus-f-11",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 6} (3x + 5)$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "23",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 6$: $3(6) + 5 = 18 + 5 = 23$."
  },
  {
    "id": "limsus-f-12",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 1} (4x + 6)$",
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
        "latex": "7",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 1$: $4(1) + 6 = 4 + 6 = 10$."
  },
  {
    "id": "limsus-f-13",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 2} (5x + 7)$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 2$: $5(2) + 7 = 10 + 7 = 17$."
  },
  {
    "id": "limsus-f-14",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 3} (6x + 1)$",
    "options": [
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "19",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 3$: $6(3) + 1 = 18 + 1 = 19$."
  },
  {
    "id": "limsus-f-15",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 4} (2x + 2)$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 4$: $2(4) + 2 = 8 + 2 = 10$."
  },
  {
    "id": "limsus-f-16",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 5} (3x + 3)$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 5$: $3(5) + 3 = 15 + 3 = 18$."
  },
  {
    "id": "limsus-f-17",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 6} (4x + 4)$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 6$: $4(6) + 4 = 24 + 4 = 28$."
  },
  {
    "id": "limsus-f-18",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 1} (5x + 5)$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 1$: $5(1) + 5 = 5 + 5 = 10$."
  },
  {
    "id": "limsus-f-19",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 2} (6x + 6)$",
    "options": [
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 2$: $6(2) + 6 = 12 + 6 = 18$."
  },
  {
    "id": "limsus-f-20",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 3} (2x + 7)$",
    "options": [
      {
        "latex": "15",
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
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 3$: $2(3) + 7 = 6 + 7 = 13$."
  },
  {
    "id": "limsus-f-21",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 4} (3x + 1)$",
    "options": [
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
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 4$: $3(4) + 1 = 12 + 1 = 13$."
  },
  {
    "id": "limsus-f-22",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 5} (4x + 2)$",
    "options": [
      {
        "latex": "24",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "22",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 5$: $4(5) + 2 = 20 + 2 = 22$."
  },
  {
    "id": "limsus-f-23",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 6} (5x + 3)$",
    "options": [
      {
        "latex": "35",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "31",
        "correct": false
      },
      {
        "latex": "33",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 6$: $5(6) + 3 = 30 + 3 = 33$."
  },
  {
    "id": "limsus-f-24",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 1} (6x + 4)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
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
    "explanation": "Sustituyendo directamente $x = 1$: $6(1) + 4 = 6 + 4 = 10$."
  },
  {
    "id": "limsus-f-25",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 2} (2x + 5)$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 2$: $2(2) + 5 = 4 + 5 = 9$."
  },
  {
    "id": "limsus-f-26",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 3} (3x + 6)$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 3$: $3(3) + 6 = 9 + 6 = 15$."
  },
  {
    "id": "limsus-f-27",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 4} (4x + 7)$",
    "options": [
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "23",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 4$: $4(4) + 7 = 16 + 7 = 23$."
  },
  {
    "id": "limsus-f-28",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 5} (5x + 1)$",
    "options": [
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "23",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "26",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 5$: $5(5) + 1 = 25 + 1 = 26$."
  },
  {
    "id": "limsus-f-29",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 6} (6x + 2)$",
    "options": [
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "35",
        "correct": false
      },
      {
        "latex": "38",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 6$: $6(6) + 2 = 36 + 2 = 38$."
  },
  {
    "id": "limsus-f-30",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 1} (2x + 3)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 1$: $2(1) + 3 = 2 + 3 = 5$."
  },
  {
    "id": "limsus-f-31",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 2} (3x + 4)$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 2$: $3(2) + 4 = 6 + 4 = 10$."
  },
  {
    "id": "limsus-f-32",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 3} (4x + 5)$",
    "options": [
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "12",
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
    "explanation": "Sustituyendo directamente $x = 3$: $4(3) + 5 = 12 + 5 = 17$."
  },
  {
    "id": "limsus-f-33",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 4} (5x + 6)$",
    "options": [
      {
        "latex": "23",
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
        "latex": "26",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 4$: $5(4) + 6 = 20 + 6 = 26$."
  },
  {
    "id": "limsus-f-34",
    "difficulty": "easy",
    "prompt": "Calcula por sustitución: $\\lim_{x \\to 5} (6x + 7)$",
    "options": [
      {
        "latex": "34",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "39",
        "correct": false
      },
      {
        "latex": "37",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo directamente $x = 5$: $6(5) + 7 = 30 + 7 = 37$."
  },
  {
    "id": "limsus-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 1}{x + 1}$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "\\frac{8}{3}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{0}{0}",
        "correct": false
      }
    ],
    "explanation": "El denominador no se anula: sustituye $\\frac{9 - 1}{3 + 1} = \\frac{8}{4} = 2$."
  },
  {
    "id": "limsus-m-02",
    "difficulty": "medium",
    "prompt": "¿Qué pasa si intentas evaluar $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ por sustitución directa?",
    "options": [
      {
        "latex": "\\text{Obtienes } \\frac{0}{0} \\text{ y no aplica}",
        "correct": true
      },
      {
        "latex": "\\text{Obtienes } 1 \\text{ directamente}",
        "correct": false
      },
      {
        "latex": "\\text{Obtienes } 0",
        "correct": false
      },
      {
        "latex": "\\text{El límite no existe}",
        "correct": false
      }
    ],
    "explanation": "Sustituir da $\\frac{\\sin 0}{0} = \\frac{0}{0}$, una indeterminación: se necesita otro método (el límite es 1)."
  },
  {
    "id": "limsus-m-03",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^3 - 2x + 5)$",
    "options": [
      {
        "latex": "9",
        "correct": true
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "13",
        "correct": false
      }
    ],
    "explanation": "Sustituye: $8 - 4 + 5 = 9$."
  },
  {
    "id": "limsus-m-04",
    "difficulty": "medium",
    "prompt": "¿Qué método conviene para $\\lim_{x \\to 4} \\frac{x - 4}{x^2 - 16}$?",
    "options": [
      {
        "latex": "\\text{Factorizar y simplificar}",
        "correct": true
      },
      {
        "latex": "\\text{Sustitución directa}",
        "correct": false
      },
      {
        "latex": "\\text{Derivar numerador y denominador}",
        "correct": false
      },
      {
        "latex": "\\text{Dividir entre la mayor potencia de } x",
        "correct": false
      }
    ],
    "explanation": "Sustituir da $\\frac{0}{0}$: se factoriza $x^2 - 16 = (x-4)(x+4)$ y se simplifica."
  },
  {
    "id": "limsus-m-05",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to -1} (2x^2 - 3x + 1)$",
    "options": [
      {
        "latex": "6",
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
        "latex": "-4",
        "correct": false
      }
    ],
    "explanation": "Sustituye: $2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$."
  },
  {
    "id": "limsus-m-06",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 2)$",
    "options": [
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "9",
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
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 2 = 9 + 2 = 11$."
  },
  {
    "id": "limsus-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 3)$",
    "options": [
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "19",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 3 = 16 + 3 = 19$."
  },
  {
    "id": "limsus-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 4)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 4 = 1 + 4 = 5$."
  },
  {
    "id": "limsus-m-09",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 5)$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 5 = 4 + 5 = 9$."
  },
  {
    "id": "limsus-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 1)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "8",
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
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 1 = 9 + 1 = 10$."
  },
  {
    "id": "limsus-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 2)$",
    "options": [
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 2 = 16 + 2 = 18$."
  },
  {
    "id": "limsus-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 3)$",
    "options": [
      {
        "latex": "5",
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
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 3 = 1 + 3 = 4$."
  },
  {
    "id": "limsus-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 4 = 4 + 4 = 8$."
  },
  {
    "id": "limsus-m-14",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 5)$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 5 = 9 + 5 = 14$."
  },
  {
    "id": "limsus-m-15",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 1)$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "15",
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
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 1 = 16 + 1 = 17$."
  },
  {
    "id": "limsus-m-16",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 2)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "1",
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
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 2 = 1 + 2 = 3$."
  },
  {
    "id": "limsus-m-17",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 3)$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 3 = 4 + 3 = 7$."
  },
  {
    "id": "limsus-m-18",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 4 = 9 + 4 = 13$."
  },
  {
    "id": "limsus-m-19",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 5)$",
    "options": [
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "23",
        "correct": false
      },
      {
        "latex": "21",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 5 = 16 + 5 = 21$."
  },
  {
    "id": "limsus-m-20",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 1)$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
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
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 1 = 1 + 1 = 2$."
  },
  {
    "id": "limsus-m-21",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 2)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 2 = 4 + 2 = 6$."
  },
  {
    "id": "limsus-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 3)$",
    "options": [
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 3 = 9 + 3 = 12$."
  },
  {
    "id": "limsus-m-23",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 4)$",
    "options": [
      {
        "latex": "22",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 4 = 16 + 4 = 20$."
  },
  {
    "id": "limsus-m-24",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 5)$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
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
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 5 = 1 + 5 = 6$."
  },
  {
    "id": "limsus-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 1)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 1 = 4 + 1 = 5$."
  },
  {
    "id": "limsus-m-26",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 2)$",
    "options": [
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "11",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 2 = 9 + 2 = 11$."
  },
  {
    "id": "limsus-m-27",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 3)$",
    "options": [
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "19",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 3 = 16 + 3 = 19$."
  },
  {
    "id": "limsus-m-28",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 4)$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 4 = 1 + 4 = 5$."
  },
  {
    "id": "limsus-m-29",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 5)$",
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
        "latex": "11",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 5 = 4 + 5 = 9$."
  },
  {
    "id": "limsus-m-30",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 1)$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 1 = 9 + 1 = 10$."
  },
  {
    "id": "limsus-m-31",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} (x^2 + 2)$",
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
        "latex": "20",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 4$: $(4)^2 + 2 = 16 + 2 = 18$."
  },
  {
    "id": "limsus-m-32",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} (x^2 + 3)$",
    "options": [
      {
        "latex": "5",
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
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 1$: $(1)^2 + 3 = 1 + 3 = 4$."
  },
  {
    "id": "limsus-m-33",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} (x^2 + 4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2$: $(2)^2 + 4 = 4 + 4 = 8$."
  },
  {
    "id": "limsus-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} (x^2 + 5)$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 3$: $(3)^2 + 5 = 9 + 5 = 14$."
  },
  {
    "id": "limsus-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 3x}{x - 1}$",
    "options": [
      {
        "latex": "10",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{10}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{0}{0}",
        "correct": false
      }
    ],
    "explanation": "El denominador vale $1 \\neq 0$: sustituye $\\frac{4 + 6}{1} = 10$."
  },
  {
    "id": "limsus-h-02",
    "difficulty": "hard",
    "prompt": "¿Cómo analizas $\\lim_{x \\to 0} \\frac{|x|}{x}$?",
    "options": [
      {
        "latex": "\\text{Con límites laterales: no existe}",
        "correct": true
      },
      {
        "latex": "\\text{Sustitución directa: da } 1",
        "correct": false
      },
      {
        "latex": "\\text{Factorización}",
        "correct": false
      },
      {
        "latex": "\\text{Sustitución directa: da } 0",
        "correct": false
      }
    ],
    "explanation": "En $x = 0$ no está definida; por la izquierda da $-1$ y por la derecha $1$: el límite no existe."
  },
  {
    "id": "limsus-h-03",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\sqrt{x + 6}$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "\\sqrt{3}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "La raíz es continua donde está definida: sustituye $\\sqrt{3 + 6} = \\sqrt{9} = 3$."
  },
  {
    "id": "limsus-h-04",
    "difficulty": "hard",
    "prompt": "¿Cuál de estos límites se resuelve por sustitución directa?",
    "options": [
      {
        "latex": "\\lim_{x \\to 1} \\frac{x^3 + 1}{x + 1}",
        "correct": true
      },
      {
        "latex": "\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\lim_{x \\to 0} \\frac{\\sin x}{x}",
        "correct": false
      },
      {
        "latex": "\\lim_{x \\to 3} \\frac{x - 3}{x^2 - 9}",
        "correct": false
      }
    ],
    "explanation": "Solo $\\frac{x^3 + 1}{x + 1}$ no se indetermina en el punto: da $\\frac{2}{2} = 1$. Los demás producen $\\frac{0}{0}$."
  },
  {
    "id": "limsus-h-05",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^4 + x^2 + 1}{x^2 + x + 1}$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{0}{0}",
        "correct": false
      }
    ],
    "explanation": "El denominador vale $3 \\neq 0$: sustituye $\\frac{1 + 1 + 1}{1 + 1 + 1} = 1$."
  },
  {
    "id": "limsus-h-06",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 1}{4^2 + 1} = \\frac{5}{17}$."
  },
  {
    "id": "limsus-h-07",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{8}{26}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{28}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 2}{5^2 + 1} = \\frac{7}{26}$."
  },
  {
    "id": "limsus-h-08",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{5}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 3}{2^2 + 1} = \\frac{5}{5}$."
  },
  {
    "id": "limsus-h-09",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{4}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 1}{3^2 + 1} = \\frac{4}{10}$."
  },
  {
    "id": "limsus-h-10",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 2}{4^2 + 1} = \\frac{6}{17}$."
  },
  {
    "id": "limsus-h-11",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{9}{26}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{28}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{8}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 3}{5^2 + 1} = \\frac{8}{26}$."
  },
  {
    "id": "limsus-h-12",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{3}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{4}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 1}{2^2 + 1} = \\frac{3}{5}$."
  },
  {
    "id": "limsus-h-13",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{10}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{12}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 2}{3^2 + 1} = \\frac{5}{10}$."
  },
  {
    "id": "limsus-h-14",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{8}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 3}{4^2 + 1} = \\frac{7}{17}$."
  },
  {
    "id": "limsus-h-15",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{26}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{28}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{6}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 1}{5^2 + 1} = \\frac{6}{26}$."
  },
  {
    "id": "limsus-h-16",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 2}{2^2 + 1} = \\frac{4}{5}$."
  },
  {
    "id": "limsus-h-17",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 3}{3^2 + 1} = \\frac{6}{10}$."
  },
  {
    "id": "limsus-h-18",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 1}{4^2 + 1} = \\frac{5}{17}$."
  },
  {
    "id": "limsus-h-19",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{28}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{8}{26}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 2}{5^2 + 1} = \\frac{7}{26}$."
  },
  {
    "id": "limsus-h-20",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{5}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 3}{2^2 + 1} = \\frac{5}{5}$."
  },
  {
    "id": "limsus-h-21",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{5}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{4}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 1}{3^2 + 1} = \\frac{4}{10}$."
  },
  {
    "id": "limsus-h-22",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{6}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 2}{4^2 + 1} = \\frac{6}{17}$."
  },
  {
    "id": "limsus-h-23",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{8}{28}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{9}{26}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 3}{5^2 + 1} = \\frac{8}{26}$."
  },
  {
    "id": "limsus-h-24",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{4}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 1}{2^2 + 1} = \\frac{3}{5}$."
  },
  {
    "id": "limsus-h-25",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 2}{3^2 + 1} = \\frac{5}{10}$."
  },
  {
    "id": "limsus-h-26",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{8}{17}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{19}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 3}{4^2 + 1} = \\frac{7}{17}$."
  },
  {
    "id": "limsus-h-27",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{26}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{6}{28}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 1}{5^2 + 1} = \\frac{6}{26}$."
  },
  {
    "id": "limsus-h-28",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 2}{2^2 + 1} = \\frac{4}{5}$."
  },
  {
    "id": "limsus-h-29",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{7}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{6}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 3}{3^2 + 1} = \\frac{6}{10}$."
  },
  {
    "id": "limsus-h-30",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 1}{4^2 + 1} = \\frac{5}{17}$."
  },
  {
    "id": "limsus-h-31",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 5} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{8}{26}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{28}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{26}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 5$ es $(5)^2 + 1 = 26 \\neq 0$. Evaluando: $\\frac{5 + 2}{5^2 + 1} = \\frac{7}{26}$."
  },
  {
    "id": "limsus-h-32",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 2} \\frac{x + 3}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{5}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{6}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{5}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 2$ es $(2)^2 + 1 = 5 \\neq 0$. Evaluando: $\\frac{2 + 3}{2^2 + 1} = \\frac{5}{5}$."
  },
  {
    "id": "limsus-h-33",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 3} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{4}{12}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{10}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{10}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 3$ es $(3)^2 + 1 = 10 \\neq 0$. Evaluando: $\\frac{3 + 1}{3^2 + 1} = \\frac{4}{10}$."
  },
  {
    "id": "limsus-h-34",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución directa: $\\lim_{x \\to 4} \\frac{x + 2}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\frac{6}{19}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{17}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{17}",
        "correct": true
      }
    ],
    "explanation": "El denominador en $x = 4$ es $(4)^2 + 1 = 17 \\neq 0$. Evaluando: $\\frac{4 + 2}{4^2 + 1} = \\frac{6}{17}$."
  }
]
};
