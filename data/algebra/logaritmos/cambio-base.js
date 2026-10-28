// data/algebra/logaritmos/cambio-base.js
// Catálogo ampliado a 60 preguntas (20 fáciles, 20 medias, 20 difíciles).

export default {
  lawId: "log-cambio-base",
  lawName: "Cambio de base",
  lawFormula: "\\log_a b = \\frac{\\log_c b}{\\log_c a}",
  prerequisites: "Conocer las propiedades básicas de los logaritmos.",
  available: true,
  questions: [
  {
    "id": "logcb-f-01",
    "difficulty": "easy",
    "prompt": "¿Cuál es la fórmula del cambio de base?",
    "options": [
      {
        "latex": "\\frac{\\log_c b}{\\log_c a}",
        "correct": true
      },
      {
        "latex": "\\frac{\\log_c a}{\\log_c b}",
        "correct": false
      },
      {
        "latex": "\\log_a b \\cdot \\log_c a",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_a c}{\\log_b c}",
        "correct": false
      }
    ],
    "explanation": "$\\log_a b = \\frac{\\log_c b}{\\log_c a}$. El argumento va en el numerador y la base en el denominador."
  },
  {
    "id": "logcb-f-02",
    "difficulty": "easy",
    "prompt": "Expresa $\\log_2 5$ en base 10",
    "options": [
      {
        "latex": "\\frac{\\log 5}{\\log 2}",
        "correct": true
      },
      {
        "latex": "\\frac{\\log 2}{\\log 5}",
        "correct": false
      },
      {
        "latex": "\\log(5/2)",
        "correct": false
      },
      {
        "latex": "\\log 5 \\cdot \\log 2",
        "correct": false
      }
    ],
    "explanation": "Usando base 10: $\\log_2 5 = \\frac{\\log 5}{\\log 2}$."
  },
  {
    "id": "logcb-f-03",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_4 16$?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      }
    ],
    "explanation": "$4^2 = 16$, por lo que $\\log_4 16 = 2$."
  },
  {
    "id": "logcb-f-04",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_5 25$?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$5^2 = 25$, por lo que $\\log_5 25 = 2$."
  },
  {
    "id": "logcb-f-05",
    "difficulty": "easy",
    "prompt": "El cambio de base a base 10 de $\\log_3 9$ es...",
    "options": [
      {
        "latex": "\\frac{\\log 9}{\\log 3}",
        "correct": true
      },
      {
        "latex": "\\frac{\\log 3}{\\log 9}",
        "correct": false
      },
      {
        "latex": "\\log 6",
        "correct": false
      },
      {
        "latex": "\\log 27",
        "correct": false
      }
    ],
    "explanation": "$\\log_3 9 = \\frac{\\log 9}{\\log 3} = \\frac{2}{1} \\cdot \\frac{\\log 3}{\\log 3} = 2$."
  },
  {
    "id": "logcb-f-06",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(3)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(3)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-07",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(4)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(4)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-08",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\ln(x) - \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(5)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(5)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-09",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{6}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(6)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(6)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-10",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(2)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(2)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-11",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\ln(x) - \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(3)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(3)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-12",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(4)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(4)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-13",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(5)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(5)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-14",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{6}(x)$",
    "options": [
      {
        "latex": "\\ln(x) - \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(6)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(6)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-15",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(2)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(2)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-16",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(3)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(3)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(3)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-17",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\ln(x) - \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(4)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(4)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(4)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-18",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\ln(x) - \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(5)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(5)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(5)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-19",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{6}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(6)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(6)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(6)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-f-20",
    "difficulty": "easy",
    "prompt": "Aplica fórmula de cambio de base con logaritmo natural: $\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\frac{\\ln(2)}{\\ln(x)}",
        "correct": false
      },
      {
        "latex": "\\ln(x) - \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\ln(x) \\cdot \\ln(2)",
        "correct": false
      },
      {
        "latex": "\\frac{\\ln(x)}{\\ln(2)}",
        "correct": true
      }
    ],
    "explanation": "Fórmula de cambio de base: $\\log_b(a) = \\frac{\\ln a}{\\ln b}$."
  },
  {
    "id": "logcb-m-01",
    "difficulty": "medium",
    "prompt": "Calcula $\\log_2 8$ usando base 10: $\\frac{\\log 8}{\\log 2} = ?$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "4",
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
    "explanation": "$\\log_2 8 = \\frac{\\log 8}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$."
  },
  {
    "id": "logcb-m-02",
    "difficulty": "medium",
    "prompt": "Expresa $\\log_5 10$ en base $e$ (natural)",
    "options": [
      {
        "latex": "\\frac{\\ln 10}{\\ln 5}",
        "correct": true
      },
      {
        "latex": "\\frac{\\ln 5}{\\ln 10}",
        "correct": false
      },
      {
        "latex": "\\ln 2",
        "correct": false
      },
      {
        "latex": "\\ln 50",
        "correct": false
      }
    ],
    "explanation": "Usando base $e$: $\\log_5 10 = \\frac{\\ln 10}{\\ln 5}$."
  },
  {
    "id": "logcb-m-03",
    "difficulty": "medium",
    "prompt": "Si $\\log 2 = 0.301$ y $\\log 3 = 0.477$, ¿cuánto vale $\\log_3 2$?",
    "options": [
      {
        "latex": "0.631",
        "correct": true
      },
      {
        "latex": "1.585",
        "correct": false
      },
      {
        "latex": "0.477",
        "correct": false
      },
      {
        "latex": "0.176",
        "correct": false
      }
    ],
    "explanation": "$\\log_3 2 = \\frac{\\log 2}{\\log 3} = \\frac{0.301}{0.477} \\approx 0.631$."
  },
  {
    "id": "logcb-m-04",
    "difficulty": "medium",
    "prompt": "¿A qué es igual $\\log_4 2$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      }
    ],
    "explanation": "$4^{1/2} = \\sqrt{4} = 2$, por lo que $\\log_4 2 = \\frac{1}{2}$."
  },
  {
    "id": "logcb-m-05",
    "difficulty": "medium",
    "prompt": "Expresa $\\log_7 9$ en base 3",
    "options": [
      {
        "latex": "\\frac{\\log_3 9}{\\log_3 7}",
        "correct": true
      },
      {
        "latex": "\\frac{\\log_3 7}{\\log_3 9}",
        "correct": false
      },
      {
        "latex": "\\log_3(9/7)",
        "correct": false
      },
      {
        "latex": "\\log_3 63",
        "correct": false
      }
    ],
    "explanation": "$\\log_7 9 = \\frac{\\log_3 9}{\\log_3 7}$."
  },
  {
    "id": "logcb-m-06",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(4)}$",
    "options": [
      {
        "latex": "\\log_x(4)",
        "correct": false
      },
      {
        "latex": "\\log(4x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{4}(x)$."
  },
  {
    "id": "logcb-m-07",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(5)}$",
    "options": [
      {
        "latex": "\\log_x(5)",
        "correct": false
      },
      {
        "latex": "\\log(5x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{5}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{5}(x)$."
  },
  {
    "id": "logcb-m-08",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(2)}$",
    "options": [
      {
        "latex": "\\log(2x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}",
        "correct": false
      },
      {
        "latex": "\\log_x(2)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{2}(x)$."
  },
  {
    "id": "logcb-m-09",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(3)}$",
    "options": [
      {
        "latex": "\\log_x(3)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{3}",
        "correct": false
      },
      {
        "latex": "\\log(3x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{3}(x)$."
  },
  {
    "id": "logcb-m-10",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(4)}$",
    "options": [
      {
        "latex": "\\log(4x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "\\log_x(4)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{4}(x)$."
  },
  {
    "id": "logcb-m-11",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(5)}$",
    "options": [
      {
        "latex": "\\log_x(5)",
        "correct": false
      },
      {
        "latex": "\\log(5x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{5}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{5}(x)$."
  },
  {
    "id": "logcb-m-12",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(2)}$",
    "options": [
      {
        "latex": "\\log_x(2)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}",
        "correct": false
      },
      {
        "latex": "\\log(2x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{2}(x)$."
  },
  {
    "id": "logcb-m-13",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(3)}$",
    "options": [
      {
        "latex": "\\log_x(3)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{3}",
        "correct": false
      },
      {
        "latex": "\\log(3x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{3}(x)$."
  },
  {
    "id": "logcb-m-14",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(4)}$",
    "options": [
      {
        "latex": "\\log(4x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "\\log_x(4)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{4}(x)$."
  },
  {
    "id": "logcb-m-15",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(5)}$",
    "options": [
      {
        "latex": "\\log(5x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{5}",
        "correct": false
      },
      {
        "latex": "\\log_x(5)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{5}(x)$."
  },
  {
    "id": "logcb-m-16",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(2)}$",
    "options": [
      {
        "latex": "\\log_x(2)",
        "correct": false
      },
      {
        "latex": "\\log(2x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{2}(x)$."
  },
  {
    "id": "logcb-m-17",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(3)}$",
    "options": [
      {
        "latex": "\\log(3x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{3}",
        "correct": false
      },
      {
        "latex": "\\log_x(3)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{3}(x)$."
  },
  {
    "id": "logcb-m-18",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(4)}$",
    "options": [
      {
        "latex": "\\log(4x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "\\log_x(4)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{4}(x)$."
  },
  {
    "id": "logcb-m-19",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(5)}$",
    "options": [
      {
        "latex": "\\log(5x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{5}",
        "correct": false
      },
      {
        "latex": "\\log_x(5)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{5}(x)$."
  },
  {
    "id": "logcb-m-20",
    "difficulty": "medium",
    "prompt": "Reescribe como un solo logaritmo: $\\frac{\\log(x)}{\\log(2)}$",
    "options": [
      {
        "latex": "\\log(2x)",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}",
        "correct": false
      },
      {
        "latex": "\\log_x(2)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "Cociente de logaritmos con la misma base corresponde a $\\log_{2}(x)$."
  },
  {
    "id": "logcb-h-01",
    "difficulty": "hard",
    "prompt": "Calcula $\\log_8 4$ usando cambio de base",
    "options": [
      {
        "latex": "\\frac{2}{3}",
        "correct": true
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "$\\log_8 4 = \\frac{\\log 4}{\\log 8} = \\frac{2\\log 2}{3\\log 2} = \\frac{2}{3}$."
  },
  {
    "id": "logcb-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = a$, ¿cuánto vale $\\log_4 8$?",
    "options": [
      {
        "latex": "\\frac{3}{2}",
        "correct": true
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      }
    ],
    "explanation": "$\\log_4 8 = \\frac{\\log 8}{\\log 4} = \\frac{3\\log 2}{2\\log 2} = \\frac{3}{2}$."
  },
  {
    "id": "logcb-h-03",
    "difficulty": "hard",
    "prompt": "¿A qué es igual $\\log_2 7 \\cdot \\log_7 2$?",
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
        "latex": "\\log 14",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "Por cambio de base, $\\log_2 7 = \\frac{1}{\\log_7 2}$, así que su producto es 1."
  },
  {
    "id": "logcb-h-04",
    "difficulty": "hard",
    "prompt": "Calcula $\\log_{27} 9$",
    "options": [
      {
        "latex": "\\frac{2}{3}",
        "correct": true
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "$\\log_{27} 9 = \\frac{\\log 9}{\\log 27} = \\frac{2\\log 3}{3\\log 3} = \\frac{2}{3}$."
  },
  {
    "id": "logcb-h-05",
    "difficulty": "hard",
    "prompt": "Si $\\log_x 5 = 2$, ¿cuánto vale $x$?",
    "options": [
      {
        "latex": "\\sqrt{5}",
        "correct": true
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": false
      }
    ],
    "explanation": "$\\log_x 5 = 2$ significa $x^2 = 5$, por lo que $x = \\sqrt{5}$."
  },
  {
    "id": "logcb-h-06",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(64)}{\\ln(4)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "64",
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
    "explanation": "$\\frac{\\ln(64)}{\\ln(4)} = \\log_{4}(64) = \\log_{4}(4^3) = 3$."
  },
  {
    "id": "logcb-h-07",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(125)}{\\ln(5)}$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "125",
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
    "explanation": "$\\frac{\\ln(125)}{\\ln(5)} = \\log_{5}(125) = \\log_{5}(5^3) = 3$."
  },
  {
    "id": "logcb-h-08",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(8)}{\\ln(2)}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(8)}{\\ln(2)} = \\log_{2}(8) = \\log_{2}(2^3) = 3$."
  },
  {
    "id": "logcb-h-09",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(27)}{\\ln(3)}$",
    "options": [
      {
        "latex": "27",
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
    "explanation": "$\\frac{\\ln(27)}{\\ln(3)} = \\log_{3}(27) = \\log_{3}(3^3) = 3$."
  },
  {
    "id": "logcb-h-10",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(64)}{\\ln(4)}$",
    "options": [
      {
        "latex": "64",
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
    "explanation": "$\\frac{\\ln(64)}{\\ln(4)} = \\log_{4}(64) = \\log_{4}(4^3) = 3$."
  },
  {
    "id": "logcb-h-11",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(125)}{\\ln(5)}$",
    "options": [
      {
        "latex": "125",
        "correct": false
      },
      {
        "latex": "1",
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
    "explanation": "$\\frac{\\ln(125)}{\\ln(5)} = \\log_{5}(125) = \\log_{5}(5^3) = 3$."
  },
  {
    "id": "logcb-h-12",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(8)}{\\ln(2)}$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(8)}{\\ln(2)} = \\log_{2}(8) = \\log_{2}(2^3) = 3$."
  },
  {
    "id": "logcb-h-13",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(27)}{\\ln(3)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(27)}{\\ln(3)} = \\log_{3}(27) = \\log_{3}(3^3) = 3$."
  },
  {
    "id": "logcb-h-14",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(64)}{\\ln(4)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(64)}{\\ln(4)} = \\log_{4}(64) = \\log_{4}(4^3) = 3$."
  },
  {
    "id": "logcb-h-15",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(125)}{\\ln(5)}$",
    "options": [
      {
        "latex": "125",
        "correct": false
      },
      {
        "latex": "1",
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
    "explanation": "$\\frac{\\ln(125)}{\\ln(5)} = \\log_{5}(125) = \\log_{5}(5^3) = 3$."
  },
  {
    "id": "logcb-h-16",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(8)}{\\ln(2)}$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(8)}{\\ln(2)} = \\log_{2}(8) = \\log_{2}(2^3) = 3$."
  },
  {
    "id": "logcb-h-17",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(27)}{\\ln(3)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "27",
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
    "explanation": "$\\frac{\\ln(27)}{\\ln(3)} = \\log_{3}(27) = \\log_{3}(3^3) = 3$."
  },
  {
    "id": "logcb-h-18",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(64)}{\\ln(4)}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(64)}{\\ln(4)} = \\log_{4}(64) = \\log_{4}(4^3) = 3$."
  },
  {
    "id": "logcb-h-19",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(125)}{\\ln(5)}$",
    "options": [
      {
        "latex": "125",
        "correct": false
      },
      {
        "latex": "1",
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
    "explanation": "$\\frac{\\ln(125)}{\\ln(5)} = \\log_{5}(125) = \\log_{5}(5^3) = 3$."
  },
  {
    "id": "logcb-h-20",
    "difficulty": "hard",
    "prompt": "Calcula usando cambio de base: $\\frac{\\ln(8)}{\\ln(2)}$",
    "options": [
      {
        "latex": "8",
        "correct": false
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
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\ln(8)}{\\ln(2)} = \\log_{2}(8) = \\log_{2}(2^3) = 3$."
  }
]
};
