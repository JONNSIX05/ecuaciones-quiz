// data/calculo-diferencial/limites/indeterminacion-00.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "lim-indeterminacion",
  lawName: "Indeterminación 0/0 (factorización y racionalización)",
  lawFormula: "\\lim \\frac{0}{0} \\Rightarrow \\text{factorizar o racionalizar y simplificar}",
  prerequisites: "Factorización, diferencia de cuadrados y conjugados.",
  available: true,
  questions: [
  {
    "id": "limind-f-01",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
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
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Da $\\frac{0}{0}$: factoriza $\\frac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$."
  },
  {
    "id": "limind-f-02",
    "difficulty": "easy",
    "prompt": "¿Qué forma tiene $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ al sustituir?",
    "options": [
      {
        "latex": "\\frac{0}{0}",
        "correct": true
      },
      {
        "latex": "\\frac{\\infty}{\\infty}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{0}",
        "correct": false
      },
      {
        "latex": "\\text{Un número real}",
        "correct": false
      }
    ],
    "explanation": "Numerador: $9 - 9 = 0$. Denominador: $3 - 3 = 0$. Forma indeterminada $\\frac{0}{0}$."
  },
  {
    "id": "limind-f-03",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    "options": [
      {
        "latex": "4",
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
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $\\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$."
  },
  {
    "id": "limind-f-04",
    "difficulty": "easy",
    "prompt": "¿Qué método se usa ante una forma $\\frac{0}{0}$ en un cociente de polinomios?",
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
        "latex": "\\text{Dividir entre la mayor potencia}",
        "correct": false
      },
      {
        "latex": "\\text{Evaluar en el infinito}",
        "correct": false
      }
    ],
    "explanation": "Con $\\frac{0}{0}$, el factor que se anula está presente en ambos polinomios: se factoriza y se simplifica."
  },
  {
    "id": "limind-f-05",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$",
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
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $\\frac{(x-1)(x+1)}{x-1} = x + 1 \\to 2$."
  },
  {
    "id": "limind-f-06",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 8} \\frac{x^2 - 64}{x - 8}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 8)(x + 8)}{x - 8} = x + 8$. Evaluando en $x = 8$: $8 + 8 = 16$."
  },
  {
    "id": "limind-f-07",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 9} \\frac{x^2 - 81}{x - 9}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 9)(x + 9)}{x - 9} = x + 9$. Evaluando en $x = 9$: $9 + 9 = 18$."
  },
  {
    "id": "limind-f-08",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 10} \\frac{x^2 - 100}{x - 10}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 10)(x + 10)}{x - 10} = x + 10$. Evaluando en $x = 10$: $10 + 10 = 20$."
  },
  {
    "id": "limind-f-09",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$. Evaluando en $x = 2$: $2 + 2 = 4$."
  },
  {
    "id": "limind-f-10",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 3)(x + 3)}{x - 3} = x + 3$. Evaluando en $x = 3$: $3 + 3 = 6$."
  },
  {
    "id": "limind-f-11",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 4)(x + 4)}{x - 4} = x + 4$. Evaluando en $x = 4$: $4 + 4 = 8$."
  },
  {
    "id": "limind-f-12",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$",
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
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 5)(x + 5)}{x - 5} = x + 5$. Evaluando en $x = 5$: $5 + 5 = 10$."
  },
  {
    "id": "limind-f-13",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 6} \\frac{x^2 - 36}{x - 6}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 6)(x + 6)}{x - 6} = x + 6$. Evaluando en $x = 6$: $6 + 6 = 12$."
  },
  {
    "id": "limind-f-14",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 7} \\frac{x^2 - 49}{x - 7}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 7)(x + 7)}{x - 7} = x + 7$. Evaluando en $x = 7$: $7 + 7 = 14$."
  },
  {
    "id": "limind-f-15",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 8} \\frac{x^2 - 64}{x - 8}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 8)(x + 8)}{x - 8} = x + 8$. Evaluando en $x = 8$: $8 + 8 = 16$."
  },
  {
    "id": "limind-f-16",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 9} \\frac{x^2 - 81}{x - 9}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 9)(x + 9)}{x - 9} = x + 9$. Evaluando en $x = 9$: $9 + 9 = 18$."
  },
  {
    "id": "limind-f-17",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 10} \\frac{x^2 - 100}{x - 10}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 10)(x + 10)}{x - 10} = x + 10$. Evaluando en $x = 10$: $10 + 10 = 20$."
  },
  {
    "id": "limind-f-18",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$. Evaluando en $x = 2$: $2 + 2 = 4$."
  },
  {
    "id": "limind-f-19",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 3)(x + 3)}{x - 3} = x + 3$. Evaluando en $x = 3$: $3 + 3 = 6$."
  },
  {
    "id": "limind-f-20",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 4)(x + 4)}{x - 4} = x + 4$. Evaluando en $x = 4$: $4 + 4 = 8$."
  },
  {
    "id": "limind-f-21",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
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
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 5)(x + 5)}{x - 5} = x + 5$. Evaluando en $x = 5$: $5 + 5 = 10$."
  },
  {
    "id": "limind-f-22",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 6} \\frac{x^2 - 36}{x - 6}$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 6)(x + 6)}{x - 6} = x + 6$. Evaluando en $x = 6$: $6 + 6 = 12$."
  },
  {
    "id": "limind-f-23",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 7} \\frac{x^2 - 49}{x - 7}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 7)(x + 7)}{x - 7} = x + 7$. Evaluando en $x = 7$: $7 + 7 = 14$."
  },
  {
    "id": "limind-f-24",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 8} \\frac{x^2 - 64}{x - 8}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 8)(x + 8)}{x - 8} = x + 8$. Evaluando en $x = 8$: $8 + 8 = 16$."
  },
  {
    "id": "limind-f-25",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 9} \\frac{x^2 - 81}{x - 9}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 9)(x + 9)}{x - 9} = x + 9$. Evaluando en $x = 9$: $9 + 9 = 18$."
  },
  {
    "id": "limind-f-26",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 10} \\frac{x^2 - 100}{x - 10}$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 10)(x + 10)}{x - 10} = x + 10$. Evaluando en $x = 10$: $10 + 10 = 20$."
  },
  {
    "id": "limind-f-27",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$. Evaluando en $x = 2$: $2 + 2 = 4$."
  },
  {
    "id": "limind-f-28",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 3)(x + 3)}{x - 3} = x + 3$. Evaluando en $x = 3$: $3 + 3 = 6$."
  },
  {
    "id": "limind-f-29",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 4)(x + 4)}{x - 4} = x + 4$. Evaluando en $x = 4$: $4 + 4 = 8$."
  },
  {
    "id": "limind-f-30",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
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
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 5)(x + 5)}{x - 5} = x + 5$. Evaluando en $x = 5$: $5 + 5 = 10$."
  },
  {
    "id": "limind-f-31",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 6} \\frac{x^2 - 36}{x - 6}$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 6)(x + 6)}{x - 6} = x + 6$. Evaluando en $x = 6$: $6 + 6 = 12$."
  },
  {
    "id": "limind-f-32",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 7} \\frac{x^2 - 49}{x - 7}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "14",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 7)(x + 7)}{x - 7} = x + 7$. Evaluando en $x = 7$: $7 + 7 = 14$."
  },
  {
    "id": "limind-f-33",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 8} \\frac{x^2 - 64}{x - 8}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 8)(x + 8)}{x - 8} = x + 8$. Evaluando en $x = 8$: $8 + 8 = 16$."
  },
  {
    "id": "limind-f-34",
    "difficulty": "easy",
    "prompt": "Resuelve la indeterminación $\\frac{0}{0}$: $\\lim_{x \\to 9} \\frac{x^2 - 81}{x - 9}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cuadrados: $\\frac{(x - 9)(x + 9)}{x - 9} = x + 9$. Evaluando en $x = 9$: $9 + 9 = 18$."
  },
  {
    "id": "limind-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Racionaliza con el conjugado: $\\frac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)} \\to \\frac{1}{4}$."
  },
  {
    "id": "limind-m-02",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to -2} \\frac{x^2 + x - 2}{x + 2}$",
    "options": [
      {
        "latex": "-3",
        "correct": true
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
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Factoriza: $\\frac{(x+2)(x-1)}{x+2} = x - 1 \\to -3$."
  },
  {
    "id": "limind-m-03",
    "difficulty": "medium",
    "prompt": "¿Cuándo conviene racionalizar para resolver un límite $\\frac{0}{0}$?",
    "options": [
      {
        "latex": "\\text{Cuando aparecen raíces en el numerador o denominador}",
        "correct": true
      },
      {
        "latex": "\\text{Cuando hay solo polinomios}",
        "correct": false
      },
      {
        "latex": "\\text{Cuando el límite es en el infinito}",
        "correct": false
      },
      {
        "latex": "\\text{Nunca: siempre se factoriza}",
        "correct": false
      }
    ],
    "explanation": "Multiplicar por el conjugado elimina la raíz y revela el factor común que produce el cero."
  },
  {
    "id": "limind-m-04",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Nota que $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$: el cociente es $\\sqrt{x} + 2 \\to 4$."
  },
  {
    "id": "limind-m-05",
    "difficulty": "medium",
    "prompt": "¿Qué forma indeterminada produce $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$?",
    "options": [
      {
        "latex": "\\frac{0}{0}",
        "correct": true
      },
      {
        "latex": "\\frac{\\infty}{\\infty}",
        "correct": false
      },
      {
        "latex": "0 \\cdot \\infty",
        "correct": false
      },
      {
        "latex": "\\text{No hay indeterminación}",
        "correct": false
      }
    ],
    "explanation": "$8 - 8 = 0$ arriba y $2 - 2 = 0$ abajo: forma $\\frac{0}{0}$. Se usa diferencia de cubos."
  },
  {
    "id": "limind-m-06",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 2x - 8}{x - 2}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 4)}{x - 2} = x + 4$. Evaluando en $x = 2$: $2 + 4 = 6$."
  },
  {
    "id": "limind-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 + 2x - 15}{x - 3}$",
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
        "latex": "10",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 5)}{x - 3} = x + 5$. Evaluando en $x = 3$: $3 + 5 = 8$."
  },
  {
    "id": "limind-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2 - 2x - 8}{x - 4}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 2)}{x - 4} = x + 2$. Evaluando en $x = 4$: $4 + 2 = 6$."
  },
  {
    "id": "limind-m-09",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2 - 2x - 15}{x - 5}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 3)}{x - 5} = x + 3$. Evaluando en $x = 5$: $5 + 3 = 8$."
  },
  {
    "id": "limind-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 + 3x - 4}{x - 1}$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 1)(x + 4)}{x - 1} = x + 4$. Evaluando en $x = 1$: $1 + 4 = 5$."
  },
  {
    "id": "limind-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 3x - 10}{x - 2}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 5)}{x - 2} = x + 5$. Evaluando en $x = 2$: $2 + 5 = 7$."
  },
  {
    "id": "limind-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 1x - 6}{x - 3}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 2)}{x - 3} = x + 2$. Evaluando en $x = 3$: $3 + 2 = 5$."
  },
  {
    "id": "limind-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2 - 1x - 12}{x - 4}$",
    "options": [
      {
        "latex": "3",
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
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 3)}{x - 4} = x + 3$. Evaluando en $x = 4$: $4 + 3 = 7$."
  },
  {
    "id": "limind-m-14",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2 - 1x - 20}{x - 5}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 4)}{x - 5} = x + 4$. Evaluando en $x = 5$: $5 + 4 = 9$."
  },
  {
    "id": "limind-m-15",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 + 4x - 5}{x - 1}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 1)(x + 5)}{x - 1} = x + 5$. Evaluando en $x = 1$: $1 + 5 = 6$."
  },
  {
    "id": "limind-m-16",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2  - 4}{x - 2}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$. Evaluando en $x = 2$: $2 + 2 = 4$."
  },
  {
    "id": "limind-m-17",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2  - 9}{x - 3}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 3)}{x - 3} = x + 3$. Evaluando en $x = 3$: $3 + 3 = 6$."
  },
  {
    "id": "limind-m-18",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2  - 16}{x - 4}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 4)}{x - 4} = x + 4$. Evaluando en $x = 4$: $4 + 4 = 8$."
  },
  {
    "id": "limind-m-19",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2  - 25}{x - 5}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 5)}{x - 5} = x + 5$. Evaluando en $x = 5$: $5 + 5 = 10$."
  },
  {
    "id": "limind-m-20",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 + 1x - 2}{x - 1}$",
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
        "latex": "2",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 1)(x + 2)}{x - 1} = x + 2$. Evaluando en $x = 1$: $1 + 2 = 3$."
  },
  {
    "id": "limind-m-21",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 1x - 6}{x - 2}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 3)}{x - 2} = x + 3$. Evaluando en $x = 2$: $2 + 3 = 5$."
  },
  {
    "id": "limind-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 + 1x - 12}{x - 3}$",
    "options": [
      {
        "latex": "4",
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
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 4)}{x - 3} = x + 4$. Evaluando en $x = 3$: $3 + 4 = 7$."
  },
  {
    "id": "limind-m-23",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2 + 1x - 20}{x - 4}$",
    "options": [
      {
        "latex": "11",
        "correct": false
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
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 5)}{x - 4} = x + 5$. Evaluando en $x = 4$: $4 + 5 = 9$."
  },
  {
    "id": "limind-m-24",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2 - 3x - 10}{x - 5}$",
    "options": [
      {
        "latex": "9",
        "correct": false
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
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 2)}{x - 5} = x + 2$. Evaluando en $x = 5$: $5 + 2 = 7$."
  },
  {
    "id": "limind-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$",
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
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 1)(x + 3)}{x - 1} = x + 3$. Evaluando en $x = 1$: $1 + 3 = 4$."
  },
  {
    "id": "limind-m-26",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 2x - 8}{x - 2}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 4)}{x - 2} = x + 4$. Evaluando en $x = 2$: $2 + 4 = 6$."
  },
  {
    "id": "limind-m-27",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 + 2x - 15}{x - 3}$",
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
        "latex": "10",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 5)}{x - 3} = x + 5$. Evaluando en $x = 3$: $3 + 5 = 8$."
  },
  {
    "id": "limind-m-28",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2 - 2x - 8}{x - 4}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 2)}{x - 4} = x + 2$. Evaluando en $x = 4$: $4 + 2 = 6$."
  },
  {
    "id": "limind-m-29",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2 - 2x - 15}{x - 5}$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 3)}{x - 5} = x + 3$. Evaluando en $x = 5$: $5 + 3 = 8$."
  },
  {
    "id": "limind-m-30",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^2 + 3x - 4}{x - 1}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 1)(x + 4)}{x - 1} = x + 4$. Evaluando en $x = 1$: $1 + 4 = 5$."
  },
  {
    "id": "limind-m-31",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 + 3x - 10}{x - 2}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 2)(x + 5)}{x - 2} = x + 5$. Evaluando en $x = 2$: $2 + 5 = 7$."
  },
  {
    "id": "limind-m-32",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 3} \\frac{x^2 - 1x - 6}{x - 3}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "Factorizando el trinomio: $\\frac{(x - 3)(x + 2)}{x - 3} = x + 2$. Evaluando en $x = 3$: $3 + 2 = 5$."
  },
  {
    "id": "limind-m-33",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 4} \\frac{x^2 - 1x - 12}{x - 4}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 4)(x + 3)}{x - 4} = x + 3$. Evaluando en $x = 4$: $4 + 3 = 7$."
  },
  {
    "id": "limind-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to 5} \\frac{x^2 - 1x - 20}{x - 5}$",
    "options": [
      {
        "latex": "11",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Factorizando el trinomio: $\\frac{(x - 5)(x + 4)}{x - 5} = x + 4$. Evaluando en $x = 5$: $5 + 4 = 9$."
  },
  {
    "id": "limind-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Diferencia de cubos: $\\frac{(x-1)(x^2+x+1)}{x-1} = x^2 + x + 1 \\to 3$."
  },
  {
    "id": "limind-h-02",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - 1}{x}$",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "Racionaliza: $\\frac{x}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1} \\to \\frac{1}{2}$."
  },
  {
    "id": "limind-h-03",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 3x + 2}$",
    "options": [
      {
        "latex": "4",
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
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Factoriza ambos: $\\frac{(x-2)(x+2)}{(x-1)(x-2)} = \\frac{x+2}{x-1} \\to \\frac{4}{1} = 4$."
  },
  {
    "id": "limind-h-04",
    "difficulty": "hard",
    "prompt": "El patrón $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a}$ es igual a...",
    "options": [
      {
        "latex": "n a^{n-1}",
        "correct": true
      },
      {
        "latex": "a^n",
        "correct": false
      },
      {
        "latex": "n a^n",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      }
    ],
    "explanation": "Al factorizar y simplificar queda $x^{n-1} + a x^{n-2} + \\cdots + a^{n-1}$, que en $x = a$ suma $n a^{n-1}$."
  },
  {
    "id": "limind-h-05",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to 9} \\frac{x - 9}{\\sqrt{x} - 3}$",
    "options": [
      {
        "latex": "6",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "$x - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$: el cociente es $\\sqrt{x} + 3 \\to 6$."
  },
  {
    "id": "limind-h-06",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-07",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-08",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "1",
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-09",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "15",
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
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-10",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-11",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-12",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "1",
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-13",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-14",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-15",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-16",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "1",
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-17",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-18",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-19",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-20",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "1",
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-21",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-22",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-23",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-24",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-25",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-26",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-27",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-28",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-29",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-30",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  },
  {
    "id": "limind-h-31",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "51",
        "correct": false
      },
      {
        "latex": "48",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 4)(x^2 + 4x + 16)}{x - 4} = x^2 + 4x + 16$. Evaluando en $x = 4$: $3(4^2) = 48$."
  },
  {
    "id": "limind-h-32",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$",
    "options": [
      {
        "latex": "1",
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 1)(x^2 + 1x + 1)}{x - 1} = x^2 + 1x + 1$. Evaluando en $x = 1$: $3(1^2) = 3$."
  },
  {
    "id": "limind-h-33",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "15",
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
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$. Evaluando en $x = 2$: $3(2^2) = 12$."
  },
  {
    "id": "limind-h-34",
    "difficulty": "hard",
    "prompt": "Calcula el límite: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Factorizando diferencia de cubos: $\\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} = x^2 + 3x + 9$. Evaluando en $x = 3$: $3(3^2) = 27$."
  }
]
};
