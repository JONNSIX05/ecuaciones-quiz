// data/algebra/logaritmos/potencia.js
// Catálogo ampliado a 60 preguntas (20 fáciles, 20 medias, 20 difíciles).

export default {
  lawId: "log-potencia",
  lawName: "Logaritmo de una potencia",
  lawFormula: "\\log_a(x^n) = n \\cdot \\log_a x",
  prerequisites: "Conocer el logaritmo de un producto.",
  available: true,
  questions: [
  {
    "id": "logpot-f-01",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_a(x^n)$?",
    "options": [
      {
        "latex": "n \\cdot \\log_a x",
        "correct": true
      },
      {
        "latex": "(\\log_a x)^n",
        "correct": false
      },
      {
        "latex": "\\log_a(nx)",
        "correct": false
      },
      {
        "latex": "n + \\log_a x",
        "correct": false
      }
    ],
    "explanation": "$\\log_a(x^n) = n \\cdot \\log_a x$. El exponente \"baja\" como factor."
  },
  {
    "id": "logpot-f-02",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $\\log_{10}(10^3)$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "30",
        "correct": false
      },
      {
        "latex": "1000",
        "correct": false
      },
      {
        "latex": "\\log_{10} 10 + 3",
        "correct": false
      }
    ],
    "explanation": "$\\log_{10}(10^3) = 3 \\cdot \\log_{10} 10 = 3 \\cdot 1 = 3$."
  },
  {
    "id": "logpot-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $2 \\cdot \\log x$",
    "options": [
      {
        "latex": "\\log(x^2)",
        "correct": true
      },
      {
        "latex": "\\log(2x)",
        "correct": false
      },
      {
        "latex": "2 + \\log x",
        "correct": false
      },
      {
        "latex": "(\\log x)^2",
        "correct": false
      }
    ],
    "explanation": "$2 \\cdot \\log x = \\log(x^2)$. El factor entra como exponente."
  },
  {
    "id": "logpot-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $\\log_2(2^5)$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      }
    ],
    "explanation": "$\\log_2(2^5) = 5 \\cdot \\log_2 2 = 5 \\cdot 1 = 5$."
  },
  {
    "id": "logpot-f-05",
    "difficulty": "easy",
    "prompt": "Expande: $\\log_5 x^3$",
    "options": [
      {
        "latex": "3 \\cdot \\log_5 x",
        "correct": true
      },
      {
        "latex": "\\log_5 x + 3",
        "correct": false
      },
      {
        "latex": "(\\log_5 x)^3",
        "correct": false
      },
      {
        "latex": "\\log_5(3x)",
        "correct": false
      }
    ],
    "explanation": "$\\log_5 x^3 = 3 \\cdot \\log_5 x$."
  },
  {
    "id": "logpot-f-06",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{4}(x^{8})$",
    "options": [
      {
        "latex": "(\\log_{4}(x))^{8}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(8x)",
        "correct": false
      },
      {
        "latex": "8\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 8\\log_{4}(x)."
  },
  {
    "id": "logpot-f-07",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{5}(x^{2})$",
    "options": [
      {
        "latex": "\\log_{5}(2x)",
        "correct": false
      },
      {
        "latex": "(\\log_{5}(x))^{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "2\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 2\\log_{5}(x)."
  },
  {
    "id": "logpot-f-08",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{2}(x^{3})$",
    "options": [
      {
        "latex": "\\log_{2}(3x)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{3}",
        "correct": false
      },
      {
        "latex": "3\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 3\\log_{2}(x)."
  },
  {
    "id": "logpot-f-09",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{3}(x^{4})$",
    "options": [
      {
        "latex": "(\\log_{3}(x))^{4}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(4x)",
        "correct": false
      },
      {
        "latex": "4\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 4\\log_{3}(x)."
  },
  {
    "id": "logpot-f-10",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{4}(x^{5})$",
    "options": [
      {
        "latex": "\\log_{4}(5x)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{5}",
        "correct": false
      },
      {
        "latex": "5\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 5\\log_{4}(x)."
  },
  {
    "id": "logpot-f-11",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{5}(x^{6})$",
    "options": [
      {
        "latex": "(\\log_{5}(x))^{6}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(6x)",
        "correct": false
      },
      {
        "latex": "6\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 6\\log_{5}(x)."
  },
  {
    "id": "logpot-f-12",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{2}(x^{7})$",
    "options": [
      {
        "latex": "\\log_{2}(7x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{7}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "7\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 7\\log_{2}(x)."
  },
  {
    "id": "logpot-f-13",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{3}(x^{8})$",
    "options": [
      {
        "latex": "\\log_{3}(8x)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "(\\log_{3}(x))^{8}",
        "correct": false
      },
      {
        "latex": "8\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 8\\log_{3}(x)."
  },
  {
    "id": "logpot-f-14",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{4}(x^{2})$",
    "options": [
      {
        "latex": "(\\log_{4}(x))^{2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(2x)",
        "correct": false
      },
      {
        "latex": "2\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 2\\log_{4}(x)."
  },
  {
    "id": "logpot-f-15",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{5}(x^{3})$",
    "options": [
      {
        "latex": "(\\log_{5}(x))^{3}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(3x)",
        "correct": false
      },
      {
        "latex": "3\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 3\\log_{5}(x)."
  },
  {
    "id": "logpot-f-16",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{2}(x^{4})$",
    "options": [
      {
        "latex": "\\log_{2}(4x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{4}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "4\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 4\\log_{2}(x)."
  },
  {
    "id": "logpot-f-17",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{3}(x^{5})$",
    "options": [
      {
        "latex": "\\log_{3}(5x)",
        "correct": false
      },
      {
        "latex": "(\\log_{3}(x))^{5}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "5\\log_{3}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 5\\log_{3}(x)."
  },
  {
    "id": "logpot-f-18",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{4}(x^{6})$",
    "options": [
      {
        "latex": "\\log_{4}(6x)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{6}",
        "correct": false
      },
      {
        "latex": "6\\log_{4}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 6\\log_{4}(x)."
  },
  {
    "id": "logpot-f-19",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{5}(x^{7})$",
    "options": [
      {
        "latex": "(\\log_{5}(x))^{7}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(7x)",
        "correct": false
      },
      {
        "latex": "7\\log_{5}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 7\\log_{5}(x)."
  },
  {
    "id": "logpot-f-20",
    "difficulty": "easy",
    "prompt": "Aplica propiedad de la potencia: $\\log_{2}(x^{8})$",
    "options": [
      {
        "latex": "\\log_{2}(8x)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{8}",
        "correct": false
      },
      {
        "latex": "8\\log_{2}(x)",
        "correct": true
      }
    ],
    "explanation": "El exponente baja a multiplicar: 8\\log_{2}(x)."
  },
  {
    "id": "logpot-m-01",
    "difficulty": "medium",
    "prompt": "¿Cuánto vale $\\log_{10} 100$?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$100 = 10^2$, así que $\\log_{10} 100 = 2 \\cdot \\log_{10} 10 = 2$."
  },
  {
    "id": "logpot-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $3 \\cdot \\log_2 4$",
    "options": [
      {
        "latex": "6",
        "correct": true
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
        "latex": "8",
        "correct": false
      }
    ],
    "explanation": "$\\log_2 4 = 2$, así que $3 \\cdot 2 = 6$."
  },
  {
    "id": "logpot-m-03",
    "difficulty": "medium",
    "prompt": "Expande: $\\log_3(x^2 y^3)$",
    "options": [
      {
        "latex": "2 \\log_3 x + 3 \\log_3 y",
        "correct": true
      },
      {
        "latex": "6 \\log_3(xy)",
        "correct": false
      },
      {
        "latex": "2 \\log_3 x \\cdot 3 \\log_3 y",
        "correct": false
      },
      {
        "latex": "\\log_3(2x) + \\log_3(3y)",
        "correct": false
      }
    ],
    "explanation": "$\\log_3(x^2 y^3) = \\log_3 x^2 + \\log_3 y^3 = 2\\log_3 x + 3\\log_3 y$."
  },
  {
    "id": "logpot-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuánto vale $\\log 1000$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "1000",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      }
    ],
    "explanation": "$1000 = 10^3$, así que $\\log 1000 = 3$."
  },
  {
    "id": "logpot-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\log(x^3) - \\log(x^2)$",
    "options": [
      {
        "latex": "\\log x",
        "correct": true
      },
      {
        "latex": "\\log(x^6)",
        "correct": false
      },
      {
        "latex": "\\log(x^5)",
        "correct": false
      },
      {
        "latex": "\\log x + 1",
        "correct": false
      }
    ],
    "explanation": "$\\log(x^3) - \\log(x^2) = \\log(x^3/x^2) = \\log x$."
  },
  {
    "id": "logpot-m-06",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $3\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(3x)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{3}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + 3)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x^{3})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{4}(x^{3})$."
  },
  {
    "id": "logpot-m-07",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $4\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(4x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + 4)",
        "correct": false
      },
      {
        "latex": "(\\log_{5}(x))^{4}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x^{4})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{5}(x^{4})$."
  },
  {
    "id": "logpot-m-08",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $5\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(x + 5)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{5}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(5x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x^{5})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{2}(x^{5})$."
  },
  {
    "id": "logpot-m-09",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $6\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}(6x)",
        "correct": false
      },
      {
        "latex": "(\\log_{3}(x))^{6}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + 6)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x^{6})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{3}(x^{6})$."
  },
  {
    "id": "logpot-m-10",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $2\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(2x)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{2}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + 2)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x^{2})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{4}(x^{2})$."
  },
  {
    "id": "logpot-m-11",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $3\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(x + 3)",
        "correct": false
      },
      {
        "latex": "(\\log_{5}(x))^{3}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(3x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x^{3})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{5}(x^{3})$."
  },
  {
    "id": "logpot-m-12",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $4\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(4x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{4}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + 4)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x^{4})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{2}(x^{4})$."
  },
  {
    "id": "logpot-m-13",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $5\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}(5x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + 5)",
        "correct": false
      },
      {
        "latex": "(\\log_{3}(x))^{5}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x^{5})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{3}(x^{5})$."
  },
  {
    "id": "logpot-m-14",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $6\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(x + 6)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{6}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(6x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x^{6})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{4}(x^{6})$."
  },
  {
    "id": "logpot-m-15",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $2\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(2x)",
        "correct": false
      },
      {
        "latex": "(\\log_{5}(x))^{2}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + 2)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x^{2})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{5}(x^{2})$."
  },
  {
    "id": "logpot-m-16",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $3\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(3x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{3}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + 3)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x^{3})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{2}(x^{3})$."
  },
  {
    "id": "logpot-m-17",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $4\\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}(4x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + 4)",
        "correct": false
      },
      {
        "latex": "(\\log_{3}(x))^{4}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x^{4})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{3}(x^{4})$."
  },
  {
    "id": "logpot-m-18",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $5\\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(5x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + 5)",
        "correct": false
      },
      {
        "latex": "(\\log_{4}(x))^{5}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x^{5})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{4}(x^{5})$."
  },
  {
    "id": "logpot-m-19",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $6\\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(6x)",
        "correct": false
      },
      {
        "latex": "(\\log_{5}(x))^{6}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + 6)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x^{6})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{5}(x^{6})$."
  },
  {
    "id": "logpot-m-20",
    "difficulty": "medium",
    "prompt": "Reescribe con exponente dentro: $2\\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(2x)",
        "correct": false
      },
      {
        "latex": "(\\log_{2}(x))^{2}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + 2)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x^{2})",
        "correct": true
      }
    ],
    "explanation": "El coeficiente sube como exponente del argumento: $\\log_{2}(x^{2})$."
  },
  {
    "id": "logpot-h-01",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = 0.301$, ¿cuánto vale $\\log 8$?",
    "options": [
      {
        "latex": "0.903",
        "correct": true
      },
      {
        "latex": "0.301",
        "correct": false
      },
      {
        "latex": "0.602",
        "correct": false
      },
      {
        "latex": "1.204",
        "correct": false
      }
    ],
    "explanation": "$\\log 8 = \\log(2^3) = 3 \\cdot \\log 2 = 3 \\cdot 0.301 = 0.903$."
  },
  {
    "id": "logpot-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\log x = 2$, ¿cuánto vale $\\log(x^3)$?",
    "options": [
      {
        "latex": "6",
        "correct": true
      },
      {
        "latex": "8",
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
    "explanation": "$\\log(x^3) = 3 \\cdot \\log x = 3 \\cdot 2 = 6$."
  },
  {
    "id": "logpot-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\log_2(x^4) - 2 \\cdot \\log_2 x$",
    "options": [
      {
        "latex": "2 \\log_2 x",
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
        "latex": "\\log_2(x^6)",
        "correct": false
      }
    ],
    "explanation": "$\\log_2(x^4) = 4\\log_2 x$. Entonces $4\\log_2 x - 2\\log_2 x = 2\\log_2 x$."
  },
  {
    "id": "logpot-h-04",
    "difficulty": "hard",
    "prompt": "Si $\\log 3 = 0.477$, ¿cuánto vale $\\log 9$?",
    "options": [
      {
        "latex": "0.954",
        "correct": true
      },
      {
        "latex": "0.477",
        "correct": false
      },
      {
        "latex": "0.239",
        "correct": false
      },
      {
        "latex": "1.431",
        "correct": false
      }
    ],
    "explanation": "$\\log 9 = \\log(3^2) = 2 \\cdot \\log 3 = 2 \\cdot 0.477 = 0.954$."
  },
  {
    "id": "logpot-h-05",
    "difficulty": "hard",
    "prompt": "¿Cuánto vale $2 \\cdot \\log_5 5 - \\log_5 25$?",
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
        "latex": "-2",
        "correct": false
      }
    ],
    "explanation": "$2 \\cdot \\log_5 5 = 2 \\cdot 1 = 2$ y $\\log_5 25 = 2$. Entonces $2 - 2 = 0$."
  },
  {
    "id": "logpot-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(4^{4})$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "16",
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
    "explanation": "Por propiedad: $\\log_{4}(4^{4}) = 4\\log_{4}(4) = 4(1) = 4$."
  },
  {
    "id": "logpot-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(5^{5})$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "25",
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
    "explanation": "Por propiedad: $\\log_{5}(5^{5}) = 5\\log_{5}(5) = 5(1) = 5$."
  },
  {
    "id": "logpot-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(2^{6})$",
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
        "latex": "12",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{2}(2^{6}) = 6\\log_{2}(2) = 6(1) = 6$."
  },
  {
    "id": "logpot-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(3^{7})$",
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
        "latex": "3",
        "correct": false
      },
      {
        "latex": "7",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{3}(3^{7}) = 7\\log_{3}(3) = 7(1) = 7$."
  },
  {
    "id": "logpot-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(4^{3})$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
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
    "explanation": "Por propiedad: $\\log_{4}(4^{3}) = 3\\log_{4}(4) = 3(1) = 3$."
  },
  {
    "id": "logpot-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(5^{4})$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "20",
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
    "explanation": "Por propiedad: $\\log_{5}(5^{4}) = 4\\log_{5}(5) = 4(1) = 4$."
  },
  {
    "id": "logpot-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(2^{5})$",
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
        "latex": "2",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{2}(2^{5}) = 5\\log_{2}(2) = 5(1) = 5$."
  },
  {
    "id": "logpot-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(3^{6})$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{3}(3^{6}) = 6\\log_{3}(3) = 6(1) = 6$."
  },
  {
    "id": "logpot-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(4^{7})$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "28",
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
    "explanation": "Por propiedad: $\\log_{4}(4^{7}) = 7\\log_{4}(4) = 7(1) = 7$."
  },
  {
    "id": "logpot-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(5^{3})$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{5}(5^{3}) = 3\\log_{5}(5) = 3(1) = 3$."
  },
  {
    "id": "logpot-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(2^{4})$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "8",
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
    "explanation": "Por propiedad: $\\log_{2}(2^{4}) = 4\\log_{2}(2) = 4(1) = 4$."
  },
  {
    "id": "logpot-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(3^{5})$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{3}(3^{5}) = 5\\log_{3}(3) = 5(1) = 5$."
  },
  {
    "id": "logpot-h-18",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(4^{6})$",
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
        "latex": "24",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{4}(4^{6}) = 6\\log_{4}(4) = 6(1) = 6$."
  },
  {
    "id": "logpot-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(5^{7})$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "35",
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
    "explanation": "Por propiedad: $\\log_{5}(5^{7}) = 7\\log_{5}(5) = 7(1) = 7$."
  },
  {
    "id": "logpot-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(2^{3})$",
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
        "latex": "6",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Por propiedad: $\\log_{2}(2^{3}) = 3\\log_{2}(2) = 3(1) = 3$."
  }
]
};
