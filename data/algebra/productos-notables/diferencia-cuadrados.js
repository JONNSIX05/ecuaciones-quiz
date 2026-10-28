// data/algebra/productos-notables/diferencia-cuadrados.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "diferencia-cuadrados",
  lawName: "Diferencia de cuadrados",
  lawFormula: "a^2 - b^2 = (a + b)(a - b)",
  prerequisites: "Conocer binomios conjugados.",
  available: true,
  questions: [
  {
    "id": "difcuad-f-01",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 9$",
    "options": [
      {
        "latex": "(x + 3)(x - 3)",
        "correct": true
      },
      {
        "latex": "(x + 3)^2",
        "correct": false
      },
      {
        "latex": "(x - 3)^2",
        "correct": false
      },
      {
        "latex": "(x + 9)(x - 1)",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$."
  },
  {
    "id": "difcuad-f-02",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^2 - b^2$",
    "options": [
      {
        "latex": "(a + b)(a - b)",
        "correct": true
      },
      {
        "latex": "(a + b)^2",
        "correct": false
      },
      {
        "latex": "(a - b)^2",
        "correct": false
      },
      {
        "latex": "a^2 - b",
        "correct": false
      }
    ],
    "explanation": "$a^2 - b^2 = (a+b)(a-b)$. Es la diferencia de cuadrados."
  },
  {
    "id": "difcuad-f-03",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 16$",
    "options": [
      {
        "latex": "(x + 4)(x - 4)",
        "correct": true
      },
      {
        "latex": "(x + 4)^2",
        "correct": false
      },
      {
        "latex": "(x - 4)^2",
        "correct": false
      },
      {
        "latex": "(x + 8)(x - 2)",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 16 = x^2 - 4^2 = (x+4)(x-4)$."
  },
  {
    "id": "difcuad-f-04",
    "difficulty": "easy",
    "prompt": "Factoriza: $m^2 - 1$",
    "options": [
      {
        "latex": "(m + 1)(m - 1)",
        "correct": true
      },
      {
        "latex": "(m + 1)^2",
        "correct": false
      },
      {
        "latex": "(m - 1)^2",
        "correct": false
      },
      {
        "latex": "(m + 1)(m + 1)",
        "correct": false
      }
    ],
    "explanation": "$m^2 - 1 = m^2 - 1^2 = (m+1)(m-1)$."
  },
  {
    "id": "difcuad-f-05",
    "difficulty": "easy",
    "prompt": "Factoriza: $25 - x^2$",
    "options": [
      {
        "latex": "(5 + x)(5 - x)",
        "correct": true
      },
      {
        "latex": "(5 + x)^2",
        "correct": false
      },
      {
        "latex": "(5 - x)^2",
        "correct": false
      },
      {
        "latex": "(25 + x)(1 - x)",
        "correct": false
      }
    ],
    "explanation": "$25 - x^2 = 5^2 - x^2 = (5+x)(5-x)$. El orden de los términos no importa."
  },
  {
    "id": "difcuad-f-06",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 36$",
    "options": [
      {
        "latex": "(x - 6)^2",
        "correct": false
      },
      {
        "latex": "(x + 6)^2",
        "correct": false
      },
      {
        "latex": "(x - 18)(x + 18)",
        "correct": false
      },
      {
        "latex": "(x + 6)(x - 6)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x^2}=x$, $\\sqrt{36}=6 \\implies (x+6)(x-6)$."
  },
  {
    "id": "difcuad-f-07",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 49$",
    "options": [
      {
        "latex": "(x - 7)^2",
        "correct": false
      },
      {
        "latex": "(x + 7)^2",
        "correct": false
      },
      {
        "latex": "(x - 14)(x + 14)",
        "correct": false
      },
      {
        "latex": "(x + 7)(x - 7)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{49}=7 \\implies (x+7)(x-7)$."
  },
  {
    "id": "difcuad-f-08",
    "difficulty": "easy",
    "prompt": "Factoriza: $y^2 - 64$",
    "options": [
      {
        "latex": "(y - 8)^2",
        "correct": false
      },
      {
        "latex": "(y + 8)^2",
        "correct": false
      },
      {
        "latex": "(y - 16)(y + 16)",
        "correct": false
      },
      {
        "latex": "(y + 8)(y - 8)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{64}=8 \\implies (y+8)(y-8)$."
  },
  {
    "id": "difcuad-f-09",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^2 - 81$",
    "options": [
      {
        "latex": "(a - 9)^2",
        "correct": false
      },
      {
        "latex": "(a + 9)^2",
        "correct": false
      },
      {
        "latex": "(a - 18)(a + 18)",
        "correct": false
      },
      {
        "latex": "(a + 9)(a - 9)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{81}=9 \\implies (a+9)(a-9)$."
  },
  {
    "id": "difcuad-f-10",
    "difficulty": "easy",
    "prompt": "Factoriza: $m^2 - 100$",
    "options": [
      {
        "latex": "(m + 10)^2",
        "correct": false
      },
      {
        "latex": "(m - 50)(m + 50)",
        "correct": false
      },
      {
        "latex": "(m - 10)^2",
        "correct": false
      },
      {
        "latex": "(m + 10)(m - 10)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{100}=10 \\implies (m+10)(m-10)$."
  },
  {
    "id": "difcuad-f-11",
    "difficulty": "easy",
    "prompt": "Factoriza: $b^2 - 121$",
    "options": [
      {
        "latex": "(b + 11)^2",
        "correct": false
      },
      {
        "latex": "(b - 22)(b + 22)",
        "correct": false
      },
      {
        "latex": "(b - 11)^2",
        "correct": false
      },
      {
        "latex": "(b + 11)(b - 11)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{121}=11 \\implies (b+11)(b-11)$."
  },
  {
    "id": "difcuad-f-12",
    "difficulty": "easy",
    "prompt": "Factoriza: $z^2 - 144$",
    "options": [
      {
        "latex": "(z - 12)^2",
        "correct": false
      },
      {
        "latex": "(z + 12)^2",
        "correct": false
      },
      {
        "latex": "(z - 24)(z + 24)",
        "correct": false
      },
      {
        "latex": "(z + 12)(z - 12)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{144}=12 \\implies (z+12)(z-12)$."
  },
  {
    "id": "difcuad-f-13",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 1$",
    "options": [
      {
        "latex": "(x - 1)^2",
        "correct": false
      },
      {
        "latex": "x(x - 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^2",
        "correct": false
      },
      {
        "latex": "(x + 1)(x - 1)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{1}=1 \\implies (x+1)(x-1)$."
  },
  {
    "id": "difcuad-m-01",
    "difficulty": "medium",
    "prompt": "Factoriza: $4x^2 - 9$",
    "options": [
      {
        "latex": "(2x + 3)(2x - 3)",
        "correct": true
      },
      {
        "latex": "(2x + 3)^2",
        "correct": false
      },
      {
        "latex": "(2x - 3)^2",
        "correct": false
      },
      {
        "latex": "(2x + 9)(2x - 1)",
        "correct": false
      }
    ],
    "explanation": "$4x^2 - 9 = (2x)^2 - 3^2 = (2x+3)(2x-3)$."
  },
  {
    "id": "difcuad-m-02",
    "difficulty": "medium",
    "prompt": "Factoriza: $16a^2 - b^2$",
    "options": [
      {
        "latex": "(4a + b)(4a - b)",
        "correct": true
      },
      {
        "latex": "(4a + b)^2",
        "correct": false
      },
      {
        "latex": "(4a - b)^2",
        "correct": false
      },
      {
        "latex": "(16a + b)(a - b)",
        "correct": false
      }
    ],
    "explanation": "$16a^2 - b^2 = (4a)^2 - b^2 = (4a+b)(4a-b)$."
  },
  {
    "id": "difcuad-m-03",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^2 - \\frac{1}{4}$",
    "options": [
      {
        "latex": "(x + \\frac{1}{2})(x - \\frac{1}{2})",
        "correct": true
      },
      {
        "latex": "(x + \\frac{1}{2})^2",
        "correct": false
      },
      {
        "latex": "(x - \\frac{1}{2})^2",
        "correct": false
      },
      {
        "latex": "(x + \\frac{1}{4})(x - \\frac{1}{4})",
        "correct": false
      }
    ],
    "explanation": "$x^2 - \\frac14 = x^2 - (\\frac12)^2 = (x+\\frac12)(x-\\frac12)$."
  },
  {
    "id": "difcuad-m-04",
    "difficulty": "medium",
    "prompt": "Factoriza: $49x^2 - 36$",
    "options": [
      {
        "latex": "(7x + 6)(7x - 6)",
        "correct": true
      },
      {
        "latex": "(7x + 6)^2",
        "correct": false
      },
      {
        "latex": "(7x - 6)^2",
        "correct": false
      },
      {
        "latex": "(49x + 6)(x - 6)",
        "correct": false
      }
    ],
    "explanation": "$49x^2 - 36 = (7x)^2 - 6^2 = (7x+6)(7x-6)$."
  },
  {
    "id": "difcuad-m-05",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^2 - 25y^2$",
    "options": [
      {
        "latex": "(x + 5y)(x - 5y)",
        "correct": true
      },
      {
        "latex": "(x + 5y)^2",
        "correct": false
      },
      {
        "latex": "(x - 5y)^2",
        "correct": false
      },
      {
        "latex": "(x + 25y)(x - y)",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 25y^2 = x^2 - (5y)^2 = (x+5y)(x-5y)$."
  },
  {
    "id": "difcuad-m-06",
    "difficulty": "medium",
    "prompt": "Factoriza: $16x^2 - 9$",
    "options": [
      {
        "latex": "(4x - 3)^2",
        "correct": false
      },
      {
        "latex": "(8x + 3)(8x - 3)",
        "correct": false
      },
      {
        "latex": "(4x + 9)(4x - 9)",
        "correct": false
      },
      {
        "latex": "(4x + 3)(4x - 3)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{16x^2}=4x$, $\\sqrt{9}=3 \\implies (4x+3)(4x-3)$."
  },
  {
    "id": "difcuad-m-07",
    "difficulty": "medium",
    "prompt": "Factoriza: $25x^2 - 4y^2$",
    "options": [
      {
        "latex": "(5x - 2y)^2",
        "correct": false
      },
      {
        "latex": "(5x + 4y)(5x - 4y)",
        "correct": false
      },
      {
        "latex": "(25x + 4y)(25x - 4y)",
        "correct": false
      },
      {
        "latex": "(5x + 2y)(5x - 2y)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{25x^2}=5x$, $\\sqrt{4y^2}=2y \\implies (5x+2y)(5x-2y)$."
  },
  {
    "id": "difcuad-m-08",
    "difficulty": "medium",
    "prompt": "Factoriza: $9a^4 - 16$",
    "options": [
      {
        "latex": "(9a^2 + 4)(9a^2 - 4)",
        "correct": false
      },
      {
        "latex": "(3a + 4)(3a - 4)",
        "correct": false
      },
      {
        "latex": "(3a^2 - 4)^2",
        "correct": false
      },
      {
        "latex": "(3a^2 + 4)(3a^2 - 4)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{9a^4}=3a^2$, $\\sqrt{16}=4 \\implies (3a^2+4)(3a^2-4)$."
  },
  {
    "id": "difcuad-m-09",
    "difficulty": "medium",
    "prompt": "Factoriza: $49u^2 - 36v^2$",
    "options": [
      {
        "latex": "(7u - 6v)^2",
        "correct": false
      },
      {
        "latex": "(49u + 36v)(49u - 36v)",
        "correct": false
      },
      {
        "latex": "(7u + 18v)(7u - 18v)",
        "correct": false
      },
      {
        "latex": "(7u + 6v)(7u - 6v)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{49u^2}=7u$, $\\sqrt{36v^2}=6v$."
  },
  {
    "id": "difcuad-m-10",
    "difficulty": "medium",
    "prompt": "Factoriza: $4x^6 - 25y^2$",
    "options": [
      {
        "latex": "(2x^3 - 5y)^2",
        "correct": false
      },
      {
        "latex": "(4x^3 + 5y)(4x^3 - 5y)",
        "correct": false
      },
      {
        "latex": "(2x^2 + 5y)(2x^2 - 5y)",
        "correct": false
      },
      {
        "latex": "(2x^3 + 5y)(2x^3 - 5y)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{4x^6}=2x^3$, $\\sqrt{25y^2}=5y$."
  },
  {
    "id": "difcuad-m-11",
    "difficulty": "medium",
    "prompt": "Factoriza: $64a^2 - 81b^4$",
    "options": [
      {
        "latex": "(8a - 9b^2)^2",
        "correct": false
      },
      {
        "latex": "(16a + 9b^2)(16a - 9b^2)",
        "correct": false
      },
      {
        "latex": "(8a + 81b^2)(8a - 81b^2)",
        "correct": false
      },
      {
        "latex": "(8a + 9b^2)(8a - 9b^2)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{64a^2}=8a$, $\\sqrt{81b^4}=9b^2$."
  },
  {
    "id": "difcuad-m-12",
    "difficulty": "medium",
    "prompt": "Factoriza: $100x^2 - 9y^2$",
    "options": [
      {
        "latex": "(10x - 3y)^2",
        "correct": false
      },
      {
        "latex": "(20x + 3y)(20x - 3y)",
        "correct": false
      },
      {
        "latex": "(10x + 9y)(10x - 9y)",
        "correct": false
      },
      {
        "latex": "(10x + 3y)(10x - 3y)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{100x^2}=10x$, $\\sqrt{9y^2}=3y$."
  },
  {
    "id": "difcuad-m-13",
    "difficulty": "medium",
    "prompt": "Factoriza: $1 - 64m^2$",
    "options": [
      {
        "latex": "(1 - 8m)^2",
        "correct": false
      },
      {
        "latex": "(1 + 32m)(1 - 32m)",
        "correct": false
      },
      {
        "latex": "(8m + 1)(8m - 1)",
        "correct": false
      },
      {
        "latex": "(1 + 8m)(1 - 8m)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{1}=1$, $\\sqrt{64m^2}=8m \\implies (1+8m)(1-8m)$."
  },
  {
    "id": "difcuad-h-01",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^4 - 16$",
    "options": [
      {
        "latex": "(x^2 + 4)(x + 2)(x - 2)",
        "correct": true
      },
      {
        "latex": "(x^2 + 4)^2",
        "correct": false
      },
      {
        "latex": "(x + 2)^4",
        "correct": false
      },
      {
        "latex": "(x^2 - 4)^2",
        "correct": false
      }
    ],
    "explanation": "$x^4 - 16 = (x^2)^2 - 4^2 = (x^2-4)(x^2+4)$. Y $x^2-4$ vuelve a factorizar: $(x+2)(x-2)(x^2+4)$."
  },
  {
    "id": "difcuad-h-02",
    "difficulty": "hard",
    "prompt": "Calcula usando diferencia de cuadrados: $101^2 - 1$",
    "options": [
      {
        "latex": "10200",
        "correct": true
      },
      {
        "latex": "10000",
        "correct": false
      },
      {
        "latex": "10100",
        "correct": false
      },
      {
        "latex": "10201",
        "correct": false
      }
    ],
    "explanation": "$101^2 - 1 = 101^2 - 1^2 = (101+1)(101-1) = 102 \\cdot 100 = 10200$."
  },
  {
    "id": "difcuad-h-03",
    "difficulty": "hard",
    "prompt": "Si $a^2 - b^2 = 45$ y $a + b = 9$, ¿cuánto vale $a - b$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "45",
        "correct": false
      }
    ],
    "explanation": "$a^2 - b^2 = (a+b)(a-b) = 45$. Como $a+b = 9$, entonces $9(a-b) = 45$, por lo que $a-b = 5$."
  },
  {
    "id": "difcuad-h-04",
    "difficulty": "hard",
    "prompt": "Factoriza: $9x^4 - 4$",
    "options": [
      {
        "latex": "(3x^2 + 2)(3x^2 - 2)",
        "correct": true
      },
      {
        "latex": "(3x^2 + 2)^2",
        "correct": false
      },
      {
        "latex": "(3x^2 - 2)^2",
        "correct": false
      },
      {
        "latex": "(9x^2 + 2)(x^2 - 2)",
        "correct": false
      }
    ],
    "explanation": "$9x^4 - 4 = (3x^2)^2 - 2^2 = (3x^2+2)(3x^2-2)$."
  },
  {
    "id": "difcuad-h-05",
    "difficulty": "hard",
    "prompt": "Factoriza: $(x + 1)^2 - 9$",
    "options": [
      {
        "latex": "(x + 4)(x - 2)",
        "correct": true
      },
      {
        "latex": "(x + 4)(x + 2)",
        "correct": false
      },
      {
        "latex": "(x - 2)^2",
        "correct": false
      },
      {
        "latex": "(x + 1)(x - 3)",
        "correct": false
      }
    ],
    "explanation": "$(x+1)^2 - 9 = (x+1)^2 - 3^2 = [(x+1)+3][(x+1)-3] = (x+4)(x-2)$."
  },
  {
    "id": "difcuad-h-06",
    "difficulty": "hard",
    "prompt": "Factoriza completamente: $x^4 - 81$",
    "options": [
      {
        "latex": "(x^2 + 9)(x^2 - 9)",
        "correct": false
      },
      {
        "latex": "(x^2 - 9)^2",
        "correct": false
      },
      {
        "latex": "(x + 3)^2(x - 3)^2",
        "correct": false
      },
      {
        "latex": "(x^2 + 9)(x + 3)(x - 3)",
        "correct": true
      }
    ],
    "explanation": "$x^4-81 = (x^2+9)(x^2-9) = (x^2+9)(x+3)(x-3)$."
  },
  {
    "id": "difcuad-h-07",
    "difficulty": "hard",
    "prompt": "Factoriza: $\\frac{4x^2}{9} - \\frac{25}{16}$",
    "options": [
      {
        "latex": "\\left(\\frac{4x}{9} + \\frac{25}{16}\\right)\\left(\\frac{4x}{9} - \\frac{25}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{2x}{9} + \\frac{5}{16}\\right)\\left(\\frac{2x}{9} - \\frac{5}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{2x}{3} - \\frac{5}{4}\\right)^2",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{2x}{3} + \\frac{5}{4}\\right)\\left(\\frac{2x}{3} - \\frac{5}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Raíces: $\\frac{2x}{3}$ y $\\frac{5}{4}$."
  },
  {
    "id": "difcuad-h-08",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^{2n} - y^{2m}$",
    "options": [
      {
        "latex": "(x^2 + y^2)(x^n - y^m)",
        "correct": false
      },
      {
        "latex": "(x^n + y^m)^2",
        "correct": false
      },
      {
        "latex": "(x^n - y^m)^2",
        "correct": false
      },
      {
        "latex": "(x^n + y^m)(x^n - y^m)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x^{2n}}=x^n$, $\\sqrt{y^{2m}}=y^m \\implies (x^n+y^m)(x^n-y^m)$."
  },
  {
    "id": "difcuad-h-09",
    "difficulty": "hard",
    "prompt": "Factoriza: $4^x - 9$",
    "options": [
      {
        "latex": "(2^x - 3)^2",
        "correct": false
      },
      {
        "latex": "(2x + 3)(2x - 3)",
        "correct": false
      },
      {
        "latex": "(4^{x/2} + 3)^2",
        "correct": false
      },
      {
        "latex": "(2^x + 3)(2^x - 3)",
        "correct": true
      }
    ],
    "explanation": "Como $4^x = (2^x)^2$, tenemos $(2^x+3)(2^x-3)$."
  },
  {
    "id": "difcuad-h-10",
    "difficulty": "hard",
    "prompt": "Factoriza: $(x+1)^2 - 4$",
    "options": [
      {
        "latex": "(x - 1)^2",
        "correct": false
      },
      {
        "latex": "(x + 1 - 4)(x + 1 + 4)",
        "correct": false
      },
      {
        "latex": "(x + 3)^2",
        "correct": false
      },
      {
        "latex": "(x + 3)(x - 1)",
        "correct": true
      }
    ],
    "explanation": "$((x+1)+2)((x+1)-2) = (x+3)(x-1)$."
  },
  {
    "id": "difcuad-h-11",
    "difficulty": "hard",
    "prompt": "Factoriza: $e^{2x} - 1$",
    "options": [
      {
        "latex": "(e^x + 1)^2",
        "correct": false
      },
      {
        "latex": "e^x(e^x - 1)",
        "correct": false
      },
      {
        "latex": "(e^x - 1)^2",
        "correct": false
      },
      {
        "latex": "(e^x + 1)(e^x - 1)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{e^{2x}} = e^x \\implies (e^x+1)(e^x-1)$."
  },
  {
    "id": "difcuad-h-12",
    "difficulty": "hard",
    "prompt": "Calcula sin calculadora: $87^2 - 13^2$",
    "options": [
      {
        "latex": "7200",
        "correct": false
      },
      {
        "latex": "7000",
        "correct": false
      },
      {
        "latex": "7600",
        "correct": false
      },
      {
        "latex": "7400",
        "correct": true
      }
    ],
    "explanation": "$(87 + 13)(87 - 13) = 100 \\cdot 74 = 7400$."
  },
  {
    "id": "difcuad-h-13",
    "difficulty": "hard",
    "prompt": "Factoriza completamente: $a^8 - b^8$",
    "options": [
      {
        "latex": "(a^4+b^4)(a^4-b^4)",
        "correct": false
      },
      {
        "latex": "(a+b)^4(a-b)^4",
        "correct": false
      },
      {
        "latex": "(a^4-b^4)^2",
        "correct": false
      },
      {
        "latex": "(a^4+b^4)(a^2+b^2)(a+b)(a-b)",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo sucesivamente las diferencias de cuadrados: $(a^4+b^4)(a^2+b^2)(a+b)(a-b)$."
  }
]
};
