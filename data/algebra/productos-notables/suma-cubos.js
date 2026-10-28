// data/algebra/productos-notables/suma-cubos.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "suma-cubos",
  lawName: "Suma de cubos",
  lawFormula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
  prerequisites: "Conocer la diferencia de cuadrados.",
  available: true,
  questions: [
  {
    "id": "sumcub-f-01",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 1$",
    "options": [
      {
        "latex": "(x + 1)(x^2 - x + 1)",
        "correct": true
      },
      {
        "latex": "(x + 1)^3",
        "correct": false
      },
      {
        "latex": "(x + 1)(x^2 + x + 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)(x^2 - 2x + 1)",
        "correct": false
      }
    ],
    "explanation": "$x^3 + 1 = (x+1)(x^2 - x + 1)$. El signo del término central es negativo."
  },
  {
    "id": "sumcub-f-02",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^3 + b^3$",
    "options": [
      {
        "latex": "(a + b)(a^2 - ab + b^2)",
        "correct": true
      },
      {
        "latex": "(a + b)^3",
        "correct": false
      },
      {
        "latex": "(a + b)(a^2 + ab + b^2)",
        "correct": false
      },
      {
        "latex": "(a + b)(a^2 - 2ab + b^2)",
        "correct": false
      }
    ],
    "explanation": "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$."
  },
  {
    "id": "sumcub-f-03",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 8$",
    "options": [
      {
        "latex": "(x + 2)(x^2 - 2x + 4)",
        "correct": true
      },
      {
        "latex": "(x + 2)^3",
        "correct": false
      },
      {
        "latex": "(x + 2)(x^2 + 2x + 4)",
        "correct": false
      },
      {
        "latex": "(x + 2)(x^2 - 4x + 4)",
        "correct": false
      }
    ],
    "explanation": "$x^3 + 8 = x^3 + 2^3 = (x+2)(x^2 - 2x + 4)$."
  },
  {
    "id": "sumcub-f-04",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 27$",
    "options": [
      {
        "latex": "(x + 3)(x^2 - 3x + 9)",
        "correct": true
      },
      {
        "latex": "(x + 3)^3",
        "correct": false
      },
      {
        "latex": "(x + 3)(x^2 + 3x + 9)",
        "correct": false
      },
      {
        "latex": "(x + 3)(x^2 - 6x + 9)",
        "correct": false
      }
    ],
    "explanation": "$x^3 + 27 = x^3 + 3^3 = (x+3)(x^2 - 3x + 9)$."
  },
  {
    "id": "sumcub-f-05",
    "difficulty": "easy",
    "prompt": "Factoriza: $1 + y^3$",
    "options": [
      {
        "latex": "(1 + y)(1 - y + y^2)",
        "correct": true
      },
      {
        "latex": "(1 + y)^3",
        "correct": false
      },
      {
        "latex": "(1 + y)(1 + y + y^2)",
        "correct": false
      },
      {
        "latex": "(1 + y)(1 - 2y + y^2)",
        "correct": false
      }
    ],
    "explanation": "$1 + y^3 = 1^3 + y^3 = (1+y)(1 - y + y^2)$."
  },
  {
    "id": "sumcub-f-06",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 64$",
    "options": [
      {
        "latex": "(x + 4)^3",
        "correct": false
      },
      {
        "latex": "(x - 4)(x^2 + 4x + 16)",
        "correct": false
      },
      {
        "latex": "(x + 4)(x^2 + 4x + 16)",
        "correct": false
      },
      {
        "latex": "(x + 4)(x^2 - 4x + 16)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{64}=4$: $(x+4)(x^2 - 4x + 16)$."
  },
  {
    "id": "sumcub-f-07",
    "difficulty": "easy",
    "prompt": "Factoriza: $y^3 + 125$",
    "options": [
      {
        "latex": "(y + 5)(y^2 + 5y + 25)",
        "correct": false
      },
      {
        "latex": "(y + 5)^3",
        "correct": false
      },
      {
        "latex": "(y - 5)(y^2 + 5y + 25)",
        "correct": false
      },
      {
        "latex": "(y + 5)(y^2 - 5y + 25)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{125}=5$: $(y+5)(y^2 - 5y + 25)$."
  },
  {
    "id": "sumcub-f-08",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^3 + 216$",
    "options": [
      {
        "latex": "(a + 6)(a^2 + 6a + 36)",
        "correct": false
      },
      {
        "latex": "(a + 6)^3",
        "correct": false
      },
      {
        "latex": "(a - 6)(a^2 + 6a + 36)",
        "correct": false
      },
      {
        "latex": "(a + 6)(a^2 - 6a + 36)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{216}=6$: $(a+6)(a^2 - 6a + 36)$."
  },
  {
    "id": "sumcub-f-09",
    "difficulty": "easy",
    "prompt": "Factoriza: $m^3 + 343$",
    "options": [
      {
        "latex": "(m + 7)(m^2 + 7m + 49)",
        "correct": false
      },
      {
        "latex": "(m - 7)(m^2 + 7m + 49)",
        "correct": false
      },
      {
        "latex": "(m + 7)^3",
        "correct": false
      },
      {
        "latex": "(m + 7)(m^2 - 7m + 49)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{343}=7$: $(m+7)(m^2 - 7m + 49)$."
  },
  {
    "id": "sumcub-f-10",
    "difficulty": "easy",
    "prompt": "Factoriza: $z^3 + 512$",
    "options": [
      {
        "latex": "(z + 8)(z^2 + 8z + 64)",
        "correct": false
      },
      {
        "latex": "(z + 8)^3",
        "correct": false
      },
      {
        "latex": "(z - 8)(z^2 + 8z + 64)",
        "correct": false
      },
      {
        "latex": "(z + 8)(z^2 - 8z + 64)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{512}=8$: $(z+8)(z^2 - 8z + 64)$."
  },
  {
    "id": "sumcub-f-11",
    "difficulty": "easy",
    "prompt": "Factoriza: $b^3 + 729$",
    "options": [
      {
        "latex": "(b + 9)^3",
        "correct": false
      },
      {
        "latex": "(b - 9)(b^2 + 9b + 81)",
        "correct": false
      },
      {
        "latex": "(b + 9)(b^2 + 9b + 81)",
        "correct": false
      },
      {
        "latex": "(b + 9)(b^2 - 9b + 81)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{729}=9$: $(b+9)(b^2 - 9b + 81)$."
  },
  {
    "id": "sumcub-f-12",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 1000$",
    "options": [
      {
        "latex": "(x + 10)^3",
        "correct": false
      },
      {
        "latex": "(x - 10)(x^2 + 10x + 100)",
        "correct": false
      },
      {
        "latex": "(x + 10)(x^2 + 10x + 100)",
        "correct": false
      },
      {
        "latex": "(x + 10)(x^2 - 10x + 100)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{1000}=10$: $(x+10)(x^2 - 10x + 100)$."
  },
  {
    "id": "sumcub-f-13",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^3 + 1$",
    "options": [
      {
        "latex": "(x + 1)(x^2 + x + 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^3",
        "correct": false
      },
      {
        "latex": "(x - 1)(x^2 + x + 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)(x^2 - x + 1)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{1}=1$: $(x+1)(x^2 - x + 1)$."
  },
  {
    "id": "sumcub-m-01",
    "difficulty": "medium",
    "prompt": "Factoriza: $8x^3 + 1$",
    "options": [
      {
        "latex": "(2x + 1)(4x^2 - 2x + 1)",
        "correct": true
      },
      {
        "latex": "(2x + 1)^3",
        "correct": false
      },
      {
        "latex": "(2x + 1)(4x^2 + 2x + 1)",
        "correct": false
      },
      {
        "latex": "(2x + 1)(2x^2 - 2x + 1)",
        "correct": false
      }
    ],
    "explanation": "$8x^3 + 1 = (2x)^3 + 1^3 = (2x+1)((2x)^2 - (2x)(1) + 1) = (2x+1)(4x^2 - 2x + 1)$."
  },
  {
    "id": "sumcub-m-02",
    "difficulty": "medium",
    "prompt": "Factoriza: $27x^3 + 8$",
    "options": [
      {
        "latex": "(3x + 2)(9x^2 - 6x + 4)",
        "correct": true
      },
      {
        "latex": "(3x + 2)^3",
        "correct": false
      },
      {
        "latex": "(3x + 2)(9x^2 + 6x + 4)",
        "correct": false
      },
      {
        "latex": "(3x + 2)(9x^2 - 12x + 4)",
        "correct": false
      }
    ],
    "explanation": "$27x^3 + 8 = (3x)^3 + 2^3 = (3x+2)(9x^2 - 6x + 4)$."
  },
  {
    "id": "sumcub-m-03",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^3 + 64$",
    "options": [
      {
        "latex": "(x + 4)(x^2 - 4x + 16)",
        "correct": true
      },
      {
        "latex": "(x + 4)^3",
        "correct": false
      },
      {
        "latex": "(x + 4)(x^2 + 4x + 16)",
        "correct": false
      },
      {
        "latex": "(x + 4)(x^2 - 8x + 16)",
        "correct": false
      }
    ],
    "explanation": "$x^3 + 64 = x^3 + 4^3 = (x+4)(x^2 - 4x + 16)$."
  },
  {
    "id": "sumcub-m-04",
    "difficulty": "medium",
    "prompt": "Factoriza: $125a^3 + b^3$",
    "options": [
      {
        "latex": "(5a + b)(25a^2 - 5ab + b^2)",
        "correct": true
      },
      {
        "latex": "(5a + b)^3",
        "correct": false
      },
      {
        "latex": "(5a + b)(25a^2 + 5ab + b^2)",
        "correct": false
      },
      {
        "latex": "(5a + b)(25a^2 - 10ab + b^2)",
        "correct": false
      }
    ],
    "explanation": "$125a^3 + b^3 = (5a)^3 + b^3 = (5a+b)(25a^2 - 5ab + b^2)$."
  },
  {
    "id": "sumcub-m-05",
    "difficulty": "medium",
    "prompt": "Factoriza: $8x^3 + 27y^3$",
    "options": [
      {
        "latex": "(2x + 3y)(4x^2 - 6xy + 9y^2)",
        "correct": true
      },
      {
        "latex": "(2x + 3y)^3",
        "correct": false
      },
      {
        "latex": "(2x + 3y)(4x^2 + 6xy + 9y^2)",
        "correct": false
      },
      {
        "latex": "(2x + 3y)(4x^2 - 12xy + 9y^2)",
        "correct": false
      }
    ],
    "explanation": "$8x^3 + 27y^3 = (2x)^3 + (3y)^3 = (2x+3y)(4x^2 - 6xy + 9y^2)$."
  },
  {
    "id": "sumcub-m-06",
    "difficulty": "medium",
    "prompt": "Factoriza: $27x^3 + 8$",
    "options": [
      {
        "latex": "(3x + 2)(9x^2 + 6x + 4)",
        "correct": false
      },
      {
        "latex": "(3x + 2)^3",
        "correct": false
      },
      {
        "latex": "(3x - 2)(9x^2 + 6x + 4)",
        "correct": false
      },
      {
        "latex": "(3x + 2)(9x^2 - 6x + 4)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{27x^3}=3x$, $\\sqrt[3]{8}=2$: $(3x+2)((3x)^2 - (3x)(2) + 2^2) = (3x+2)(9x^2-6x+4)$."
  },
  {
    "id": "sumcub-m-07",
    "difficulty": "medium",
    "prompt": "Factoriza: $8a^3 + 27b^3$",
    "options": [
      {
        "latex": "(2a + 3b)^3",
        "correct": false
      },
      {
        "latex": "(2a - 3b)(4a^2 + 6ab + 9b^2)",
        "correct": false
      },
      {
        "latex": "(2a + 3b)(4a^2 + 6ab + 9b^2)",
        "correct": false
      },
      {
        "latex": "(2a + 3b)(4a^2 - 6ab + 9b^2)",
        "correct": true
      }
    ],
    "explanation": "$a=2a$, $b=3b$: $(2a+3b)(4a^2-6ab+9b^2)$."
  },
  {
    "id": "sumcub-m-08",
    "difficulty": "medium",
    "prompt": "Factoriza: $64x^3 + 1$",
    "options": [
      {
        "latex": "(4x + 1)^3",
        "correct": false
      },
      {
        "latex": "(4x - 1)(16x^2 + 4x + 1)",
        "correct": false
      },
      {
        "latex": "(4x + 1)(16x^2 + 4x + 1)",
        "correct": false
      },
      {
        "latex": "(4x + 1)(16x^2 - 4x + 1)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{64x^3}=4x$: $(4x+1)(16x^2-4x+1)$."
  },
  {
    "id": "sumcub-m-09",
    "difficulty": "medium",
    "prompt": "Factoriza: $125u^3 + 8v^3$",
    "options": [
      {
        "latex": "(5u + 2v)(25u^2 + 10uv + 4v^2)",
        "correct": false
      },
      {
        "latex": "(5u - 2v)(25u^2 + 10uv + 4v^2)",
        "correct": false
      },
      {
        "latex": "(5u + 2v)^3",
        "correct": false
      },
      {
        "latex": "(5u + 2v)(25u^2 - 10uv + 4v^2)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{125u^3}=5u$, $\\sqrt[3]{8v^3}=2v$: $(5u+2v)(25u^2-10uv+4v^2)$."
  },
  {
    "id": "sumcub-m-10",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^6 + 27$",
    "options": [
      {
        "latex": "(x^2 + 3)(x^4 + 3x^2 + 9)",
        "correct": false
      },
      {
        "latex": "(x^2 + 3)^3",
        "correct": false
      },
      {
        "latex": "(x^3 + 3)(x^3 - 9)",
        "correct": false
      },
      {
        "latex": "(x^2 + 3)(x^4 - 3x^2 + 9)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{x^6}=x^2$, $\\sqrt[3]{27}=3$: $(x^2+3)(x^4-3x^2+9)$."
  },
  {
    "id": "sumcub-m-11",
    "difficulty": "medium",
    "prompt": "Factoriza: $27m^3 + 64n^3$",
    "options": [
      {
        "latex": "(3m + 4n)(9m^2 + 12mn + 16n^2)",
        "correct": false
      },
      {
        "latex": "(3m - 4n)(9m^2 + 12mn + 16n^2)",
        "correct": false
      },
      {
        "latex": "(3m + 4n)^3",
        "correct": false
      },
      {
        "latex": "(3m + 4n)(9m^2 - 12mn + 16n^2)",
        "correct": true
      }
    ],
    "explanation": "$3m$ y $4n$: $(3m+4n)(9m^2-12mn+16n^2)$."
  },
  {
    "id": "sumcub-m-12",
    "difficulty": "medium",
    "prompt": "Factoriza: $8x^3 + 125$",
    "options": [
      {
        "latex": "(2x + 5)^3",
        "correct": false
      },
      {
        "latex": "(2x - 5)(4x^2 + 10x + 25)",
        "correct": false
      },
      {
        "latex": "(2x + 5)(4x^2 + 10x + 25)",
        "correct": false
      },
      {
        "latex": "(2x + 5)(4x^2 - 10x + 25)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{8x^3}=2x$, $\\sqrt[3]{125}=5$: $(2x+5)(4x^2-10x+25)$."
  },
  {
    "id": "sumcub-m-13",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^3y^3 + 8$",
    "options": [
      {
        "latex": "(xy + 2)(x^2y^2 + 2xy + 4)",
        "correct": false
      },
      {
        "latex": "(xy + 2)^3",
        "correct": false
      },
      {
        "latex": "(xy - 2)(x^2y^2 + 2xy + 4)",
        "correct": false
      },
      {
        "latex": "(xy + 2)(x^2y^2 - 2xy + 4)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{x^3y^3}=xy$: $(xy+2)(x^2y^2-2xy+4)$."
  },
  {
    "id": "sumcub-h-01",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^6 + 1$",
    "options": [
      {
        "latex": "(x^2 + 1)(x^4 - x^2 + 1)",
        "correct": true
      },
      {
        "latex": "(x^2 + 1)^3",
        "correct": false
      },
      {
        "latex": "(x^2 + 1)(x^4 + x^2 + 1)",
        "correct": false
      },
      {
        "latex": "(x^2 + 1)(x^4 - 2x^2 + 1)",
        "correct": false
      }
    ],
    "explanation": "$x^6 + 1 = (x^2)^3 + 1^3 = (x^2+1)(x^4 - x^2 + 1)$."
  },
  {
    "id": "sumcub-h-02",
    "difficulty": "hard",
    "prompt": "Si $x^3 + 27 = (x + 3)(x^2 + ax + 9)$, ¿cuál es el valor de $a$?",
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
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      }
    ],
    "explanation": "En $x^3 + b^3 = (x+b)(x^2 - bx + b^2)$ con $b=3$, el término central es $-bx = -3x$, por lo que $a = -3$."
  },
  {
    "id": "sumcub-h-03",
    "difficulty": "hard",
    "prompt": "Factoriza: $64x^3 + 1$",
    "options": [
      {
        "latex": "(4x + 1)(16x^2 - 4x + 1)",
        "correct": true
      },
      {
        "latex": "(4x + 1)^3",
        "correct": false
      },
      {
        "latex": "(4x + 1)(16x^2 + 4x + 1)",
        "correct": false
      },
      {
        "latex": "(4x + 1)(16x^2 - 8x + 1)",
        "correct": false
      }
    ],
    "explanation": "$64x^3 + 1 = (4x)^3 + 1^3 = (4x+1)(16x^2 - 4x + 1)$."
  },
  {
    "id": "sumcub-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^3 + 8}{x + 2}$",
    "options": [
      {
        "latex": "x^2 - 2x + 4",
        "correct": true
      },
      {
        "latex": "x^2 + 2x + 4",
        "correct": false
      },
      {
        "latex": "x + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 4",
        "correct": false
      }
    ],
    "explanation": "$x^3 + 8 = (x+2)(x^2 - 2x + 4)$. Al dividir entre $x+2$ queda $x^2 - 2x + 4$."
  },
  {
    "id": "sumcub-h-05",
    "difficulty": "hard",
    "prompt": "Factoriza: $27x^3 + 8y^3$",
    "options": [
      {
        "latex": "(3x + 2y)(9x^2 - 6xy + 4y^2)",
        "correct": true
      },
      {
        "latex": "(3x + 2y)^3",
        "correct": false
      },
      {
        "latex": "(3x + 2y)(9x^2 + 6xy + 4y^2)",
        "correct": false
      },
      {
        "latex": "(3x + 2y)(9x^2 - 12xy + 4y^2)",
        "correct": false
      }
    ],
    "explanation": "$27x^3 + 8y^3 = (3x)^3 + (2y)^3 = (3x+2y)(9x^2 - 6xy + 4y^2)$."
  },
  {
    "id": "sumcub-h-06",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^{3n} + 8$",
    "options": [
      {
        "latex": "(x^n + 2)(x^{2n} + 2x^n + 4)",
        "correct": false
      },
      {
        "latex": "(x^n - 2)(x^{2n} + 2x^n + 4)",
        "correct": false
      },
      {
        "latex": "(x^n + 2)^3",
        "correct": false
      },
      {
        "latex": "(x^n + 2)(x^{2n} - 2x^n + 4)",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{x^{3n}}=x^n$, $\\sqrt[3]{8}=2$: $(x^n+2)(x^{2n}-2x^n+4)$."
  },
  {
    "id": "sumcub-h-07",
    "difficulty": "hard",
    "prompt": "Factoriza: $e^{3x} + 1$",
    "options": [
      {
        "latex": "(e^x + 1)^3",
        "correct": false
      },
      {
        "latex": "(e^x - 1)(e^{2x} + e^x + 1)",
        "correct": false
      },
      {
        "latex": "(e^x + 1)(e^{2x} + e^x + 1)",
        "correct": false
      },
      {
        "latex": "(e^x + 1)(e^{2x} - e^x + 1)",
        "correct": true
      }
    ],
    "explanation": "Con $u=e^x$: $(e^x+1)((e^x)^2 - e^x(1) + 1) = (e^x+1)(e^{2x}-e^x+1)$."
  },
  {
    "id": "sumcub-h-08",
    "difficulty": "hard",
    "prompt": "Factoriza: $\\frac{x^3}{8} + \\frac{y^3}{27}$",
    "options": [
      {
        "latex": "\\left(\\frac{x}{2} + \\frac{y}{3}\\right)^3",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{x}{2} - \\frac{y}{3}\\right)\\left(\\frac{x^2}{4} + \\frac{xy}{6} + \\frac{y^2}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{x}{2} + \\frac{y}{3}\\right)\\left(\\frac{x^2}{4} + \\frac{xy}{6} + \\frac{y^2}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{x}{2} + \\frac{y}{3}\\right)\\left(\\frac{x^2}{4} - \\frac{xy}{6} + \\frac{y^2}{9}\\right)",
        "correct": true
      }
    ],
    "explanation": "Raíces cúbicas: $\\frac{x}{2}$ y $\\frac{y}{3}$."
  },
  {
    "id": "sumcub-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica la fracción: $\\frac{x^3 + 8}{x + 2}$",
    "options": [
      {
        "latex": "x^2 + 2x + 4",
        "correct": false
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "(x+2)^2",
        "correct": false
      },
      {
        "latex": "x^2 - 2x + 4",
        "correct": true
      }
    ],
    "explanation": "Como $x^3+8 = (x+2)(x^2-2x+4)$, al dividir entre $(x+2)$ queda $x^2-2x+4$."
  },
  {
    "id": "sumcub-h-10",
    "difficulty": "hard",
    "prompt": "Factoriza: $8^x + 27$",
    "options": [
      {
        "latex": "(2^x + 3)^3",
        "correct": false
      },
      {
        "latex": "(2^x - 3)(4^x + 3(2^x) + 9)",
        "correct": false
      },
      {
        "latex": "(2^x + 3)(4^x + 3(2^x) + 9)",
        "correct": false
      },
      {
        "latex": "(2^x + 3)(4^x - 3(2^x) + 9)",
        "correct": true
      }
    ],
    "explanation": "$8^x = (2^x)^3$: $(2^x+3)((2^x)^2 - 3(2^x) + 9) = (2^x+3)(4^x - 3(2^x) + 9)$."
  },
  {
    "id": "sumcub-h-11",
    "difficulty": "hard",
    "prompt": "Factoriza: $(x+1)^3 + 8$",
    "options": [
      {
        "latex": "(x + 3)(x^2 + 7)",
        "correct": false
      },
      {
        "latex": "(x + 3)((x+1)^2 - 2(x+1) + 4)",
        "correct": false
      },
      {
        "latex": "(x + 3)(x^2 - 2x + 4)",
        "correct": false
      },
      {
        "latex": "(x + 3)(x^2 - 2)",
        "correct": true
      }
    ],
    "explanation": "$((x+1)+2)((x+1)^2 - 2(x+1) + 4) = (x+3)(x^2+2x+1 - 2x-2 + 4) = (x+3)(x^2+3)$ (o $((x+1)+2)((x+1)^2-2(x+1)+4)$)."
  },
  {
    "id": "sumcub-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{a^3+b^3}{a^2-ab+b^2}$",
    "options": [
      {
        "latex": "a - b",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "(a+b)^2",
        "correct": false
      },
      {
        "latex": "a + b",
        "correct": true
      }
    ],
    "explanation": "Factorizando el numerador: $\\frac{(a+b)(a^2-ab+b^2)}{a^2-ab+b^2} = a+b$."
  },
  {
    "id": "sumcub-h-13",
    "difficulty": "hard",
    "prompt": "Factoriza: $a^9 + b^9$",
    "options": [
      {
        "latex": "(a+b)(a^8 - a^7b + \\dots)",
        "correct": false
      },
      {
        "latex": "(a^3 - b^3)(a^6 + a^3b^3 + b^6)",
        "correct": false
      },
      {
        "latex": "(a^3 + b^3)^3",
        "correct": false
      },
      {
        "latex": "(a^3 + b^3)(a^6 - a^3b^3 + b^6)",
        "correct": true
      }
    ],
    "explanation": "Visto como $(a^3)^3 + (b^3)^3$: $(a^3+b^3)(a^6-a^3b^3+b^6)$."
  }
]
};
