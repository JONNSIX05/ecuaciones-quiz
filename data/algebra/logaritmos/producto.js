// data/algebra/logaritmos/producto.js
// Catálogo ampliado a 60 preguntas (20 fáciles, 20 medias, 20 difíciles).

export default {
  lawId: "log-producto",
  lawName: "Logaritmo de un producto",
  lawFormula: "\\log_a(xy) = \\log_a x + \\log_a y",
  prerequisites: "Conocer la definición de logaritmo.",
  available: true,
  questions: [
  {
    "id": "logprod-f-01",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_a(xy)$?",
    "options": [
      {
        "latex": "\\log_a x + \\log_a y",
        "correct": true
      },
      {
        "latex": "\\log_a x \\cdot \\log_a y",
        "correct": false
      },
      {
        "latex": "\\log_a x - \\log_a y",
        "correct": false
      },
      {
        "latex": "\\log_a(x + y)",
        "correct": false
      }
    ],
    "explanation": "$\\log_a(xy) = \\log_a x + \\log_a y$. El logaritmo de un producto es la suma de logaritmos."
  },
  {
    "id": "logprod-f-02",
    "difficulty": "easy",
    "prompt": "Expande: $\\log_{10}(3 \\cdot 5)$",
    "options": [
      {
        "latex": "\\log_{10} 3 + \\log_{10} 5",
        "correct": true
      },
      {
        "latex": "\\log_{10} 3 \\cdot \\log_{10} 5",
        "correct": false
      },
      {
        "latex": "\\log_{10} 8",
        "correct": false
      },
      {
        "latex": "\\log_{10} 3 - \\log_{10} 5",
        "correct": false
      }
    ],
    "explanation": "$\\log_{10}(3 \\cdot 5) = \\log_{10} 3 + \\log_{10} 5$."
  },
  {
    "id": "logprod-f-03",
    "difficulty": "easy",
    "prompt": "Combina: $\\log_2 x + \\log_2 y$",
    "options": [
      {
        "latex": "\\log_2(xy)",
        "correct": true
      },
      {
        "latex": "\\log_2(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_2 x \\cdot \\log_2 y",
        "correct": false
      },
      {
        "latex": "\\log_2(x/y)",
        "correct": false
      }
    ],
    "explanation": "La suma de logaritmos de la misma base es el logaritmo del producto: $\\log_2(xy)$."
  },
  {
    "id": "logprod-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $\\log_{10} 2 + \\log_{10} 5$?",
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
        "latex": "7",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      }
    ],
    "explanation": "$\\log_{10} 2 + \\log_{10} 5 = \\log_{10}(2 \\cdot 5) = \\log_{10} 10 = 1$."
  },
  {
    "id": "logprod-f-05",
    "difficulty": "easy",
    "prompt": "Expande: $\\log_3(9x)$",
    "options": [
      {
        "latex": "\\log_3 9 + \\log_3 x",
        "correct": true
      },
      {
        "latex": "\\log_3 9 \\cdot \\log_3 x",
        "correct": false
      },
      {
        "latex": "\\log_3(9 + x)",
        "correct": false
      },
      {
        "latex": "\\log_3 9 - \\log_3 x",
        "correct": false
      }
    ],
    "explanation": "$\\log_3(9x) = \\log_3 9 + \\log_3 x$."
  },
  {
    "id": "logprod-f-06",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{4}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{4}(x) \\cdot \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{4}(x) + \\log_{4}(y)$."
  },
  {
    "id": "logprod-f-07",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{5}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) \\cdot \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{5}(x) + \\log_{5}(y)$."
  },
  {
    "id": "logprod-f-08",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{2}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) \\cdot \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{2}(x) + \\log_{2}(y)$."
  },
  {
    "id": "logprod-f-09",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{3}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) \\cdot \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{3}(x) + \\log_{3}(y)$."
  },
  {
    "id": "logprod-f-10",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{4}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) \\cdot \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{4}(x) + \\log_{4}(y)$."
  },
  {
    "id": "logprod-f-11",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{5}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{5}(x) \\cdot \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{5}(x) + \\log_{5}(y)$."
  },
  {
    "id": "logprod-f-12",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{2}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{2}(x) \\cdot \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{2}(x) + \\log_{2}(y)$."
  },
  {
    "id": "logprod-f-13",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{3}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) \\cdot \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{3}(x) + \\log_{3}(y)$."
  },
  {
    "id": "logprod-f-14",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{4}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) \\cdot \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{4}(x) + \\log_{4}(y)$."
  },
  {
    "id": "logprod-f-15",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{5}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{5}(x) \\cdot \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{5}(x) + \\log_{5}(y)$."
  },
  {
    "id": "logprod-f-16",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{2}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{2}(x) \\cdot \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{2}(x) + \\log_{2}(y)$."
  },
  {
    "id": "logprod-f-17",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{3}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{3}(x) - \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) \\cdot \\log_{3}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(x) + \\log_{3}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{3}(x) + \\log_{3}(y)$."
  },
  {
    "id": "logprod-f-18",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{4}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{4}(x) - \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) \\cdot \\log_{4}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(x) + \\log_{4}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{4}(x) + \\log_{4}(y)$."
  },
  {
    "id": "logprod-f-19",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{5}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{5}(x) \\cdot \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) - \\log_{5}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(x) + \\log_{5}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{5}(x) + \\log_{5}(y)$."
  },
  {
    "id": "logprod-f-20",
    "difficulty": "easy",
    "prompt": "Aplica propiedad del producto: $\\log_{2}(x \\cdot y)$",
    "options": [
      {
        "latex": "\\log_{2}(x) - \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x + y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) \\cdot \\log_{2}(y)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(x) + \\log_{2}(y)",
        "correct": true
      }
    ],
    "explanation": "El logaritmo de un producto es la suma de los logaritmos: $\\log_{2}(x) + \\log_{2}(y)$."
  },
  {
    "id": "logprod-m-01",
    "difficulty": "medium",
    "prompt": "Combina: $\\log 3 + \\log 4$",
    "options": [
      {
        "latex": "\\log 12",
        "correct": true
      },
      {
        "latex": "\\log 7",
        "correct": false
      },
      {
        "latex": "\\log 34",
        "correct": false
      },
      {
        "latex": "\\log(3/4)",
        "correct": false
      }
    ],
    "explanation": "$\\log 3 + \\log 4 = \\log(3 \\cdot 4) = \\log 12$."
  },
  {
    "id": "logprod-m-02",
    "difficulty": "medium",
    "prompt": "Expande: $\\log_5(125 \\cdot 5)$",
    "options": [
      {
        "latex": "\\log_5 125 + \\log_5 5",
        "correct": true
      },
      {
        "latex": "\\log_5 125 \\cdot \\log_5 5",
        "correct": false
      },
      {
        "latex": "\\log_5 130",
        "correct": false
      },
      {
        "latex": "\\log_5 125 - \\log_5 5",
        "correct": false
      }
    ],
    "explanation": "$\\log_5(125 \\cdot 5) = \\log_5 125 + \\log_5 5$."
  },
  {
    "id": "logprod-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\log_2(xy) - \\log_2 y$",
    "options": [
      {
        "latex": "\\log_2 x",
        "correct": true
      },
      {
        "latex": "\\log_2(xy)",
        "correct": false
      },
      {
        "latex": "\\log_2(xy^2)",
        "correct": false
      },
      {
        "latex": "\\log_2(x + y)",
        "correct": false
      }
    ],
    "explanation": "$\\log_2(xy) - \\log_2 y = \\log_2\\left(\\frac{xy}{y}\\right) = \\log_2 x$."
  },
  {
    "id": "logprod-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuánto vale $\\log_6 2 + \\log_6 3$?",
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
        "latex": "\\log_6 5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      }
    ],
    "explanation": "$\\log_6 2 + \\log_6 3 = \\log_6(2 \\cdot 3) = \\log_6 6 = 1$."
  },
  {
    "id": "logprod-m-05",
    "difficulty": "medium",
    "prompt": "Combina: $\\log a + \\log b + \\log c$",
    "options": [
      {
        "latex": "\\log(abc)",
        "correct": true
      },
      {
        "latex": "\\log(a + b + c)",
        "correct": false
      },
      {
        "latex": "3 \\log a",
        "correct": false
      },
      {
        "latex": "\\log(a/bc)",
        "correct": false
      }
    ],
    "explanation": "$\\log a + \\log b + \\log c = \\log(abc)$."
  },
  {
    "id": "logprod-m-06",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(8) + \\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(8+x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{8}{x}\\right)",
        "correct": false
      },
      {
        "latex": "8\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(8x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{4}(8x)$."
  },
  {
    "id": "logprod-m-07",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(9) + \\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(9+x)",
        "correct": false
      },
      {
        "latex": "9\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{9}{x}\\right)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(9x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{5}(9x)$."
  },
  {
    "id": "logprod-m-08",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(10) + \\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(10+x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{10}{x}\\right)",
        "correct": false
      },
      {
        "latex": "10\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(10x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{2}(10x)$."
  },
  {
    "id": "logprod-m-09",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(11) + \\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}(11+x)",
        "correct": false
      },
      {
        "latex": "11\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}\\left(\\frac{11}{x}\\right)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(11x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{3}(11x)$."
  },
  {
    "id": "logprod-m-10",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(12) + \\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(12+x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{12}{x}\\right)",
        "correct": false
      },
      {
        "latex": "12\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(12x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{4}(12x)$."
  },
  {
    "id": "logprod-m-11",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(13) + \\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(13+x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{13}{x}\\right)",
        "correct": false
      },
      {
        "latex": "13\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(13x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{5}(13x)$."
  },
  {
    "id": "logprod-m-12",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(14) + \\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}(14+x)",
        "correct": false
      },
      {
        "latex": "14\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}\\left(\\frac{14}{x}\\right)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(14x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{2}(14x)$."
  },
  {
    "id": "logprod-m-13",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(15) + \\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}\\left(\\frac{15}{x}\\right)",
        "correct": false
      },
      {
        "latex": "15\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(15+x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(15x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{3}(15x)$."
  },
  {
    "id": "logprod-m-14",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(16) + \\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}\\left(\\frac{16}{x}\\right)",
        "correct": false
      },
      {
        "latex": "16\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(16+x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(16x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{4}(16x)$."
  },
  {
    "id": "logprod-m-15",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(17) + \\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(17+x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{17}{x}\\right)",
        "correct": false
      },
      {
        "latex": "17\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(17x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{5}(17x)$."
  },
  {
    "id": "logprod-m-16",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(18) + \\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}\\left(\\frac{18}{x}\\right)",
        "correct": false
      },
      {
        "latex": "18\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(18+x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(18x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{2}(18x)$."
  },
  {
    "id": "logprod-m-17",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{3}(19) + \\log_{3}(x)$",
    "options": [
      {
        "latex": "\\log_{3}(19+x)",
        "correct": false
      },
      {
        "latex": "19\\log_{3}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{3}\\left(\\frac{19}{x}\\right)",
        "correct": false
      },
      {
        "latex": "\\log_{3}(19x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{3}(19x)$."
  },
  {
    "id": "logprod-m-18",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{4}(20) + \\log_{4}(x)$",
    "options": [
      {
        "latex": "\\log_{4}(20+x)",
        "correct": false
      },
      {
        "latex": "20\\log_{4}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{4}\\left(\\frac{20}{x}\\right)",
        "correct": false
      },
      {
        "latex": "\\log_{4}(20x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{4}(20x)$."
  },
  {
    "id": "logprod-m-19",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{5}(21) + \\log_{5}(x)$",
    "options": [
      {
        "latex": "\\log_{5}(21+x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}\\left(\\frac{21}{x}\\right)",
        "correct": false
      },
      {
        "latex": "21\\log_{5}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{5}(21x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{5}(21x)$."
  },
  {
    "id": "logprod-m-20",
    "difficulty": "medium",
    "prompt": "Expresa como un solo logaritmo: $\\log_{2}(22) + \\log_{2}(x)$",
    "options": [
      {
        "latex": "\\log_{2}\\left(\\frac{22}{x}\\right)",
        "correct": false
      },
      {
        "latex": "22\\log_{2}(x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(22+x)",
        "correct": false
      },
      {
        "latex": "\\log_{2}(22x)",
        "correct": true
      }
    ],
    "explanation": "Suma de logaritmos con la misma base se multiplica su argumento: $\\log_{2}(22x)$."
  },
  {
    "id": "logprod-h-01",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = 0.301$, ¿cuánto vale $\\log 20$?",
    "options": [
      {
        "latex": "1.301",
        "correct": true
      },
      {
        "latex": "0.602",
        "correct": false
      },
      {
        "latex": "2.301",
        "correct": false
      },
      {
        "latex": "3.01",
        "correct": false
      }
    ],
    "explanation": "$\\log 20 = \\log(2 \\cdot 10) = \\log 2 + \\log 10 = 0.301 + 1 = 1.301$."
  },
  {
    "id": "logprod-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\log 2 = a$ y $\\log 3 = b$, ¿cuánto vale $\\log 6$?",
    "options": [
      {
        "latex": "a + b",
        "correct": true
      },
      {
        "latex": "a \\cdot b",
        "correct": false
      },
      {
        "latex": "a - b",
        "correct": false
      },
      {
        "latex": "2a + 3b",
        "correct": false
      }
    ],
    "explanation": "$\\log 6 = \\log(2 \\cdot 3) = \\log 2 + \\log 3 = a + b$."
  },
  {
    "id": "logprod-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\log_2(x^2 y) - \\log_2 x$",
    "options": [
      {
        "latex": "\\log_2(xy)",
        "correct": true
      },
      {
        "latex": "\\log_2(x^2 y)",
        "correct": false
      },
      {
        "latex": "\\log_2 x",
        "correct": false
      },
      {
        "latex": "\\log_2(x^2 y^2)",
        "correct": false
      }
    ],
    "explanation": "$\\log_2(x^2 y) - \\log_2 x = \\log_2\\left(\\frac{x^2 y}{x}\\right) = \\log_2(xy)$."
  },
  {
    "id": "logprod-h-04",
    "difficulty": "hard",
    "prompt": "Si $\\log x = 2$ y $\\log y = 3$, ¿cuánto vale $\\log(xy)$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      }
    ],
    "explanation": "$\\log(xy) = \\log x + \\log y = 2 + 3 = 5$."
  },
  {
    "id": "logprod-h-05",
    "difficulty": "hard",
    "prompt": "Combina: $\\log_7 3 + \\log_7 \\frac{1}{3}$",
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
        "latex": "\\log_7 9",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      }
    ],
    "explanation": "$\\log_7 3 + \\log_7 \\frac{1}{3} = \\log_7\\left(3 \\cdot \\frac{1}{3}\\right) = \\log_7 1 = 0$."
  },
  {
    "id": "logprod-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(16) + \\log_{4}(64)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "80",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(16) = 2$ y $\\log_{4}(64) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{4}(16 \\cdot 64) = \\log_{4}(4^5) = 5$)."
  },
  {
    "id": "logprod-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(25) + \\log_{5}(125)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "150",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{5}(25) = 2$ y $\\log_{5}(125) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{5}(25 \\cdot 125) = \\log_{5}(5^5) = 5$)."
  },
  {
    "id": "logprod-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(4) + \\log_{2}(8)$",
    "options": [
      {
        "latex": "12",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(4) = 2$ y $\\log_{2}(8) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{2}(4 \\cdot 8) = \\log_{2}(2^5) = 5$)."
  },
  {
    "id": "logprod-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(9) + \\log_{3}(27)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(9) = 2$ y $\\log_{3}(27) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{3}(9 \\cdot 27) = \\log_{3}(3^5) = 5$)."
  },
  {
    "id": "logprod-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(16) + \\log_{4}(64)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "80",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(16) = 2$ y $\\log_{4}(64) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{4}(16 \\cdot 64) = \\log_{4}(4^5) = 5$)."
  },
  {
    "id": "logprod-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(25) + \\log_{5}(125)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "150",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{5}(25) = 2$ y $\\log_{5}(125) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{5}(25 \\cdot 125) = \\log_{5}(5^5) = 5$)."
  },
  {
    "id": "logprod-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(4) + \\log_{2}(8)$",
    "options": [
      {
        "latex": "6",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(4) = 2$ y $\\log_{2}(8) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{2}(4 \\cdot 8) = \\log_{2}(2^5) = 5$)."
  },
  {
    "id": "logprod-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(9) + \\log_{3}(27)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(9) = 2$ y $\\log_{3}(27) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{3}(9 \\cdot 27) = \\log_{3}(3^5) = 5$)."
  },
  {
    "id": "logprod-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(16) + \\log_{4}(64)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "80",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(16) = 2$ y $\\log_{4}(64) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{4}(16 \\cdot 64) = \\log_{4}(4^5) = 5$)."
  },
  {
    "id": "logprod-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(25) + \\log_{5}(125)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "150",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{5}(25) = 2$ y $\\log_{5}(125) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{5}(25 \\cdot 125) = \\log_{5}(5^5) = 5$)."
  },
  {
    "id": "logprod-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(4) + \\log_{2}(8)$",
    "options": [
      {
        "latex": "6",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(4) = 2$ y $\\log_{2}(8) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{2}(4 \\cdot 8) = \\log_{2}(2^5) = 5$)."
  },
  {
    "id": "logprod-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}(9) + \\log_{3}(27)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{3}(9) = 2$ y $\\log_{3}(27) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{3}(9 \\cdot 27) = \\log_{3}(3^5) = 5$)."
  },
  {
    "id": "logprod-h-18",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}(16) + \\log_{4}(64)$",
    "options": [
      {
        "latex": "80",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{4}(16) = 2$ y $\\log_{4}(64) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{4}(16 \\cdot 64) = \\log_{4}(4^5) = 5$)."
  },
  {
    "id": "logprod-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}(25) + \\log_{5}(125)$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "150",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{5}(25) = 2$ y $\\log_{5}(125) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{5}(25 \\cdot 125) = \\log_{5}(5^5) = 5$)."
  },
  {
    "id": "logprod-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}(4) + \\log_{2}(8)$",
    "options": [
      {
        "latex": "6",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\log_{2}(4) = 2$ y $\\log_{2}(8) = 3$, por tanto $2 + 3 = 5$ (o $\\log_{2}(4 \\cdot 8) = \\log_{2}(2^5) = 5$)."
  }
]
};
