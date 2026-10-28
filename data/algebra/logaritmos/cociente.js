// data/algebra/logaritmos/cociente.js
// Catálogo ampliado a 60 preguntas (20 fáciles, 20 medias, 20 difíciles).

export default {
  lawId: "log-cociente",
  lawName: "Logaritmo de un cociente",
  lawFormula: "\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y",
  prerequisites: "Conocer el logaritmo de un producto.",
  available: true,
  questions: [
  {
    "id": "logcoc-f-01",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_a(x/y)$?",
    "options": [
      {
        "latex": "\\log_a x - \\log_a y",
        "correct": true
      },
      {
        "latex": "\\log_a x + \\log_a y",
        "correct": false
      },
      {
        "latex": "\\log_a x \\cdot \\log_a y",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_a x}{\\log_a y}",
        "correct": false
      }
    ],
    "explanation": "$\\log_a(x/y) = \\log_a x - \\log_a y$. El logaritmo de un cociente es la resta de logaritmos."
  },
  {
    "id": "logcoc-f-02",
    "difficulty": "easy",
    "prompt": "Expande: $\\log_{10}(8/2)$",
    "options": [
      {
        "latex": "\\log_{10} 8 - \\log_{10} 2",
        "correct": true
      },
      {
        "latex": "\\log_{10} 8 + \\log_{10} 2",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{10} 8}{\\log_{10} 2}",
        "correct": false
      },
      {
        "latex": "\\log_{10} 6",
        "correct": false
      }
    ],
    "explanation": "$\\log_{10}(8/2) = \\log_{10} 8 - \\log_{10} 2$."
  },
  {
    "id": "logcoc-f-03",
    "difficulty": "easy",
    "prompt": "Combina: $\\log_2 x - \\log_2 y$",
    "options": [
      {
        "latex": "\\log_2(x/y)",
        "correct": true
      },
      {
        "latex": "\\log_2(xy)",
        "correct": false
      },
      {
        "latex": "\\log_2(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_2 x}{\\log_2 y}",
        "correct": false
      }
    ],
    "explanation": "La resta de logaritmos de la misma base es el logaritmo del cociente: $\\log_2(x/y)$."
  },
  {
    "id": "logcoc-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $\\log_{10} 100 - \\log_{10} 10$?",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "\\log_{10} 90",
        "correct": false
      },
      {
        "latex": "90",
        "correct": false
      }
    ],
    "explanation": "$\\log_{10} 100 - \\log_{10} 10 = \\log_{10}(100/10) = \\log_{10} 10 = 1$."
  },
  {
    "id": "logcoc-f-05",
    "difficulty": "easy",
    "prompt": "Expande: $\\log_5(x/25)$",
    "options": [
      {
        "latex": "\\log_5 x - \\log_5 25",
        "correct": true
      },
      {
        "latex": "\\log_5 x + \\log_5 25",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_5 x}{\\log_5 25}",
        "correct": false
      },
      {
        "latex": "\\log_5(x - 25)",
        "correct": false
      }
    ],
    "explanation": "$\\log_5(x/25) = \\log_5 x - \\log_5 25$."
  },
  {
    "id": "logcoc-f-06",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{4}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{4}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{\\log_{4}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{4}(x) - \\log_{4}(y)$."
  },
  {
    "id": "logcoc-f-07",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{5}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\frac{\\log_{5}(x)}{\\log_{5}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{5}(x) - \\log_{5}(y)$."
  },
  {
    "id": "logcoc-f-08",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{2}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{\\log_{2}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{2}(x) - \\log_{2}(y)$."
  },
  {
    "id": "logcoc-f-09",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{3}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{3}(x)}{\\log_{3}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{3}(x) - \\log_{3}(y)$."
  },
  {
    "id": "logcoc-f-10",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{4}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{\\log_{4}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{4}(x) - \\log_{4}(y)$."
  },
  {
    "id": "logcoc-f-11",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{5}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{\\log_{5}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{5}(x) - \\log_{5}(y)$."
  },
  {
    "id": "logcoc-f-12",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{2}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{\\log_{2}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{2}(x) - \\log_{2}(y)$."
  },
  {
    "id": "logcoc-f-13",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{3}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{3}(x)}{\\log_{3}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{3}(x) - \\log_{3}(y)$."
  },
  {
    "id": "logcoc-f-14",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{4}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{\\log_{4}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{4}(x) - \\log_{4}(y)$."
  },
  {
    "id": "logcoc-f-15",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{5}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{\\log_{5}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{5}(x) - \\log_{5}(y)$."
  },
  {
    "id": "logcoc-f-16",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{2}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{\\log_{2}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{2}(x) - \\log_{2}(y)$."
  },
  {
    "id": "logcoc-f-17",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{3}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\frac{\\log_{3}(x)}{\\log_{3}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{3}(x) - \\log_{3}(y)$."
  },
  {
    "id": "logcoc-f-18",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{4}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{\\log_{4}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x - y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{4}(x) - \\log_{4}(y)$."
  },
  {
    "id": "logcoc-f-19",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{5}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{\\log_{5}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{5}(x) - \\log_{5}(y)$."
  },
  {
    "id": "logcoc-f-20",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del cociente: $\\log_{2}\\left(\\frac{x}{y}\\right)$",
    "options": [
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - y)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{\\log_{2}(y)}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un cociente es la resta de logaritmos: $\\log_{2}(x) - \\log_{2}(y)$."
  },
  {
    "id": "logcoc-m-01",
    "difficulty": "medium",
    "prompt": "Combina: $\\log 20 - \\log 4$",
    "options": [
      {
        "latex": "\\log 5",
        "correct": true
      },
      {
        "latex": "\\log 16",
        "correct": false
      },
      {
        "latex": "\\log 80",
        "correct": false
      },
      {
        "latex": "\\log 24",
        "correct": false
      }
    ],
    "explanation": "$\\log 20 - \\log 4 = \\log(20/4) = \\log 5$."
  },
  {
    "id": "logcoc-m-02",
    "difficulty": "medium",
    "prompt": "Expande: $\\log_3(27/9)$",
    "options": [
      {
        "latex": "\\log_3 27 - \\log_3 9",
        "correct": true
      },
      {
        "latex": "\\log_3 27 + \\log_3 9",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_3 27}{\\log_3 9}",
        "correct": false
      },
      {
        "latex": "\\log_3 18",
        "correct": false
      }
    ],
    "explanation": "$\\log_3(27/9) = \\log_3 27 - \\log_3 9$."
  },
  {
    "id": "logcoc-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\log(x^2) - \\log x$",
    "options": [
      {
        "latex": "\\log x",
        "correct": true
      },
      {
        "latex": "\\log(x^2)",
        "correct": false
      },
      {
        "latex": "\\log(x^3)",
        "correct": false
      },
      {
        "latex": "\\log(2x)",
        "correct": false
      }
    ],
    "explanation": "$\\log(x^2) - \\log x = \\log(x^2/x) = \\log x$."
  },
  {
    "id": "logcoc-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuánto vale $\\log_6 12 - \\log_6 2$?",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "\\log_6 10",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      }
    ],
    "explanation": "$\\log_6 12 - \\log_6 2 = \\log_6(12/2) = \\log_6 6 = 1$."
  },
  {
    "id": "logcoc-m-05",
    "difficulty": "medium",
    "prompt": "Combina: $\\log a - \\log b - \\log c$",
    "options": [
      {
        "latex": "\\log\\left(\\frac{a}{bc}\\right)",
        "correct": true
      },
      {
        "latex": "\\log(a - b - c)",
        "correct": false
      },
      {
        "latex": "\\log\\left(\\frac{a}{b + c}\\right)",
        "correct": false
      },
      {
        "latex": "\\log(abc)",
        "correct": false
      }
    ],
    "explanation": "$\\log a - \\log b - \\log c = \\log\\left(\\frac{a}{bc}\\right)$."
  },
  {
    "id": "logcoc-m-06",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(x) - \\log_{4}(9)$",
    "options": [
      {
        "latex": "\\log_{4}(x - 9)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{9}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(9x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{x}{9}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{4}\\left(\\frac{x}{9}\\right)$."
  },
  {
    "id": "logcoc-m-07",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(x) - \\log_{5}(10)$",
    "options": [
      {
        "latex": "\\log_{5}(x - 10)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{10}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(10x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{x}{10}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{5}\\left(\\frac{x}{10}\\right)$."
  },
  {
    "id": "logcoc-m-08",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(x) - \\log_{2}(11)$",
    "options": [
      {
        "latex": "\\log_{2}(11x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{11}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - 11)",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{x}{11}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{2}\\left(\\frac{x}{11}\\right)$."
  },
  {
    "id": "logcoc-m-09",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(x) - \\log_{3}(12)$",
    "options": [
      {
        "latex": "\\log_{3}(12x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{3}(x)}{12}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x - 12)",
        "correct": false
      },
      {
        "latex": "\\log_{3}\\left(\\frac{x}{12}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{3}\\left(\\frac{x}{12}\\right)$."
  },
  {
    "id": "logcoc-m-10",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(x) - \\log_{4}(13)$",
    "options": [
      {
        "latex": "\\log_{4}(x - 13)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(13x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{13}",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{x}{13}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{4}\\left(\\frac{x}{13}\\right)$."
  },
  {
    "id": "logcoc-m-11",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(x) - \\log_{5}(14)$",
    "options": [
      {
        "latex": "\\log_{5}(14x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{14}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - 14)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{x}{14}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{5}\\left(\\frac{x}{14}\\right)$."
  },
  {
    "id": "logcoc-m-12",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(x) - \\log_{2}(15)$",
    "options": [
      {
        "latex": "\\log_{2}(15x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{15}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - 15)",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{x}{15}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{2}\\left(\\frac{x}{15}\\right)$."
  },
  {
    "id": "logcoc-m-13",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(x) - \\log_{3}(16)$",
    "options": [
      {
        "latex": "\\log_{3}(x - 16)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(16x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{3}(x)}{16}",
        "correct": false
      },
      {
        "latex": "\\log_{3}\\left(\\frac{x}{16}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{3}\\left(\\frac{x}{16}\\right)$."
  },
  {
    "id": "logcoc-m-14",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(x) - \\log_{4}(17)$",
    "options": [
      {
        "latex": "\\log_{4}(17x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{17}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x - 17)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{x}{17}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{4}\\left(\\frac{x}{17}\\right)$."
  },
  {
    "id": "logcoc-m-15",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(x) - \\log_{5}(18)$",
    "options": [
      {
        "latex": "\\log_{5}(18x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{18}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - 18)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{x}{18}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{5}\\left(\\frac{x}{18}\\right)$."
  },
  {
    "id": "logcoc-m-16",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(x) - \\log_{2}(19)$",
    "options": [
      {
        "latex": "\\log_{2}(19x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{19}",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x - 19)",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{x}{19}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{2}\\left(\\frac{x}{19}\\right)$."
  },
  {
    "id": "logcoc-m-17",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(x) - \\log_{3}(20)$",
    "options": [
      {
        "latex": "\\log_{3}(x - 20)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{3}(x)}{20}",
        "correct": false
      },
      {
        "latex": "\\log_{3}(20x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}\\left(\\frac{x}{20}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{3}\\left(\\frac{x}{20}\\right)$."
  },
  {
    "id": "logcoc-m-18",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(x) - \\log_{4}(21)$",
    "options": [
      {
        "latex": "\\log_{4}(21x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{4}(x)}{21}",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x - 21)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{x}{21}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{4}\\left(\\frac{x}{21}\\right)$."
  },
  {
    "id": "logcoc-m-19",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(x) - \\log_{5}(22)$",
    "options": [
      {
        "latex": "\\log_{5}(22x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{5}(x)}{22}",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x - 22)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{x}{22}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{5}\\left(\\frac{x}{22}\\right)$."
  },
  {
    "id": "logcoc-m-20",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(x) - \\log_{2}(23)$",
    "options": [
      {
        "latex": "\\log_{2}(x - 23)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(23x)",
        "correct": false
      },
      {
        "latex": "\\frac{\\log_{2}(x)}{23}",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{x}{23}\\right)",
        "correct": true
      }
    ],
    "explanation": "Resta de logaritmos se convierte en cociente de argumentos: $\\log_{2}\\left(\\frac{x}{23}\\right)$."
  },
  {
    "id": "logcoc-h-01",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = 0.301$, ¿cuánto vale $\\log 5$?",
    "options": [
      {
        "latex": "0.699",
        "correct": true
      },
      {
        "latex": "0.301",
        "correct": false
      },
      {
        "latex": "0.5",
        "correct": false
      },
      {
        "latex": "1.301",
        "correct": false
      }
    ],
    "explanation": "$\\log 5 = \\log(10/2) = \\log 10 - \\log 2 = 1 - 0.301 = 0.699$."
  },
  {
    "id": "logcoc-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\log x = 4$ y $\\log y = 1$, ¿cuánto vale $\\log(x/y)$?",
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
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0.25",
        "correct": false
      }
    ],
    "explanation": "$\\log(x/y) = \\log x - \\log y = 4 - 1 = 3$."
  },
  {
    "id": "logcoc-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\log_2(x^3/y) - \\log_2 x$",
    "options": [
      {
        "latex": "\\log_2(x^2/y)",
        "correct": true
      },
      {
        "latex": "\\log_2(x^3/y)",
        "correct": false
      },
      {
        "latex": "\\log_2(x^2 y)",
        "correct": false
      },
      {
        "latex": "\\log_2(x^2)",
        "correct": false
      }
    ],
    "explanation": "$\\log_2(x^3/y) - \\log_2 x = \\log_2\\left(\\frac{x^3/y}{x}\\right) = \\log_2(x^2/y)$."
  },
  {
    "id": "logcoc-h-04",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = a$ y $\\log 5 = b$, ¿cuánto vale $\\log(2/5)$?",
    "options": [
      {
        "latex": "a - b",
        "correct": true
      },
      {
        "latex": "a + b",
        "correct": false
      },
      {
        "latex": "b - a",
        "correct": false
      },
      {
        "latex": "a / b",
        "correct": false
      }
    ],
    "explanation": "$\\log(2/5) = \\log 2 - \\log 5 = a - b$."
  },
  {
    "id": "logcoc-h-05",
    "difficulty": "hard",
    "prompt": "¿Cuánto vale $\\log_3 9 - \\log_3 27$?",
    "options": [
      {
        "latex": "-1",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\log_3 18",
        "correct": false
      }
    ],
    "explanation": "$\\log_3 9 - \\log_3 27 = \\log_3(9/27) = \\log_3(1/3) = -1$."
  },
  {
    "id": "logcoc-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(1024) - \\log_{4}(16)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(1024) = 5$ y $\\log_{4}(16) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(3125) - \\log_{5}(25)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{5}(3125) = 5$ y $\\log_{5}(25) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(32) - \\log_{2}(4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2.5",
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
    "explanation": "$\\log_{2}(32) = 5$ y $\\log_{2}(4) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(243) - \\log_{3}(9)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(243) = 5$ y $\\log_{3}(9) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(1024) - \\log_{4}(16)$",
    "options": [
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(1024) = 5$ y $\\log_{4}(16) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(3125) - \\log_{5}(25)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2.5",
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
    "explanation": "$\\log_{5}(3125) = 5$ y $\\log_{5}(25) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(32) - \\log_{2}(4)$",
    "options": [
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(32) = 5$ y $\\log_{2}(4) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(243) - \\log_{3}(9)$",
    "options": [
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(243) = 5$ y $\\log_{3}(9) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(1024) - \\log_{4}(16)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(1024) = 5$ y $\\log_{4}(16) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(3125) - \\log_{5}(25)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2.5",
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
    "explanation": "$\\log_{5}(3125) = 5$ y $\\log_{5}(25) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(32) - \\log_{2}(4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(32) = 5$ y $\\log_{2}(4) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(243) - \\log_{3}(9)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(243) = 5$ y $\\log_{3}(9) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-18",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(1024) - \\log_{4}(16)$",
    "options": [
      {
        "latex": "2.5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(1024) = 5$ y $\\log_{4}(16) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(3125) - \\log_{5}(25)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2.5",
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
    "explanation": "$\\log_{5}(3125) = 5$ y $\\log_{5}(25) = 2$; $5 - 2 = 3$."
  },
  {
    "id": "logcoc-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(32) - \\log_{2}(4)$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "2.5",
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
    "explanation": "$\\log_{2}(32) = 5$ y $\\log_{2}(4) = 2$; $5 - 2 = 3$."
  }
]
};
