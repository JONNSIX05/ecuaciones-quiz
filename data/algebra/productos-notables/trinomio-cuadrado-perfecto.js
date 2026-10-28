// data/algebra/productos-notables/trinomio-cuadrado-perfecto.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "trinomio-cuadrado-perfecto",
  lawName: "Trinomio cuadrado perfecto",
  lawFormula: "a^2 \\pm 2ab + b^2 = (a \\pm b)^2",
  prerequisites: "Conocer el cuadrado de un binomio.",
  available: true,
  questions: [
  {
    "id": "tricp-f-01",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + 6x + 9$",
    "options": [
      {
        "latex": "(x + 3)^2",
        "correct": true
      },
      {
        "latex": "(x + 3)(x - 3)",
        "correct": false
      },
      {
        "latex": "(x + 9)^2",
        "correct": false
      },
      {
        "latex": "(x + 3)(x + 6)",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 6x + 9 = (x+3)^2$ porque $2 \\cdot 3 = 6$ y $3^2 = 9$."
  },
  {
    "id": "tricp-f-02",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 2x + 1$",
    "options": [
      {
        "latex": "(x - 1)^2",
        "correct": true
      },
      {
        "latex": "(x + 1)^2",
        "correct": false
      },
      {
        "latex": "(x - 1)(x + 1)",
        "correct": false
      },
      {
        "latex": "(x - 2)^2",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 2x + 1 = (x-1)^2$ porque $-2x = -2(x)(1)$ y $1 = 1^2$."
  },
  {
    "id": "tricp-f-03",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^2 + 2ab + b^2$",
    "options": [
      {
        "latex": "(a + b)^2",
        "correct": true
      },
      {
        "latex": "(a + b)(a - b)",
        "correct": false
      },
      {
        "latex": "(a - b)^2",
        "correct": false
      },
      {
        "latex": "a^2 + b^2",
        "correct": false
      }
    ],
    "explanation": "$a^2 + 2ab + b^2 = (a+b)^2$. Es el cuadrado de un binomio."
  },
  {
    "id": "tricp-f-04",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + 10x + 25$",
    "options": [
      {
        "latex": "(x + 5)^2",
        "correct": true
      },
      {
        "latex": "(x + 5)(x - 5)",
        "correct": false
      },
      {
        "latex": "(x + 10)^2",
        "correct": false
      },
      {
        "latex": "(x + 5)(x + 2)",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 10x + 25 = (x+5)^2$ porque $2 \\cdot 5 = 10$ y $5^2 = 25$."
  },
  {
    "id": "tricp-f-05",
    "difficulty": "easy",
    "prompt": "Factoriza: $y^2 - 4y + 4$",
    "options": [
      {
        "latex": "(y - 2)^2",
        "correct": true
      },
      {
        "latex": "(y + 2)^2",
        "correct": false
      },
      {
        "latex": "(y - 2)(y + 2)",
        "correct": false
      },
      {
        "latex": "(y - 4)^2",
        "correct": false
      }
    ],
    "explanation": "$y^2 - 4y + 4 = (y-2)^2$ porque $2 \\cdot 2 = 4$ y $2^2 = 4$."
  },
  {
    "id": "tricp-f-06",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + 14x + 49$",
    "options": [
      {
        "latex": "(x - 7)^2",
        "correct": false
      },
      {
        "latex": "(x + 14)^2",
        "correct": false
      },
      {
        "latex": "(x + 7)(x - 7)",
        "correct": false
      },
      {
        "latex": "(x + 7)^2",
        "correct": true
      }
    ],
    "explanation": "Raíces: $\\sqrt{x^2}=x$, $\\sqrt{49}=7$, y $2(x)(7)=14x$. Resultado: $(x+7)^2$."
  },
  {
    "id": "tricp-f-07",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 - 16x + 64$",
    "options": [
      {
        "latex": "(x + 8)^2",
        "correct": false
      },
      {
        "latex": "(x - 16)^2",
        "correct": false
      },
      {
        "latex": "(x - 8)(x + 8)",
        "correct": false
      },
      {
        "latex": "(x - 8)^2",
        "correct": true
      }
    ],
    "explanation": "Doble producto negativo: $2(x)(8)=16x \\implies (x-8)^2$."
  },
  {
    "id": "tricp-f-08",
    "difficulty": "easy",
    "prompt": "Factoriza: $y^2 + 18y + 81$",
    "options": [
      {
        "latex": "(y - 9)^2",
        "correct": false
      },
      {
        "latex": "(y + 9)(y - 9)",
        "correct": false
      },
      {
        "latex": "(y + 18)^2",
        "correct": false
      },
      {
        "latex": "(y + 9)^2",
        "correct": true
      }
    ],
    "explanation": "Raíces: $y$ y $9$, doble producto $2(9)y=18y$."
  },
  {
    "id": "tricp-f-09",
    "difficulty": "easy",
    "prompt": "Factoriza: $a^2 - 20a + 100$",
    "options": [
      {
        "latex": "(a - 20)^2",
        "correct": false
      },
      {
        "latex": "(a - 10)(a + 10)",
        "correct": false
      },
      {
        "latex": "(a + 10)^2",
        "correct": false
      },
      {
        "latex": "(a - 10)^2",
        "correct": true
      }
    ],
    "explanation": "Raíces: $a$ y $10$, signo medio negativo: $(a-10)^2$."
  },
  {
    "id": "tricp-f-10",
    "difficulty": "easy",
    "prompt": "Factoriza: $m^2 + 22m + 121$",
    "options": [
      {
        "latex": "(m + 22)^2",
        "correct": false
      },
      {
        "latex": "(m + 11)(m - 11)",
        "correct": false
      },
      {
        "latex": "(m - 11)^2",
        "correct": false
      },
      {
        "latex": "(m + 11)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{121}=11$, $2(11)m = 22m \\implies (m+11)^2$."
  },
  {
    "id": "tricp-f-11",
    "difficulty": "easy",
    "prompt": "Factoriza: $z^2 - 24z + 144$",
    "options": [
      {
        "latex": "(z - 24)^2",
        "correct": false
      },
      {
        "latex": "(z - 12)(z + 12)",
        "correct": false
      },
      {
        "latex": "(z + 12)^2",
        "correct": false
      },
      {
        "latex": "(z - 12)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{144}=12$, $2(12)z = 24z \\implies (z-12)^2$."
  },
  {
    "id": "tricp-f-12",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + 2x + 1$",
    "options": [
      {
        "latex": "(x - 1)^2",
        "correct": false
      },
      {
        "latex": "(x + 2)^2",
        "correct": false
      },
      {
        "latex": "(x + 1)(x - 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^2",
        "correct": true
      }
    ],
    "explanation": "$2(1)x = 2x \\implies (x+1)^2$."
  },
  {
    "id": "tricp-f-13",
    "difficulty": "easy",
    "prompt": "Factoriza: $b^2 - 26b + 169$",
    "options": [
      {
        "latex": "(b + 13)^2",
        "correct": false
      },
      {
        "latex": "(b - 26)^2",
        "correct": false
      },
      {
        "latex": "(b - 13)(b + 13)",
        "correct": false
      },
      {
        "latex": "(b - 13)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{169}=13$, doble producto $-26b \\implies (b-13)^2$."
  },
  {
    "id": "tricp-m-01",
    "difficulty": "medium",
    "prompt": "Factoriza: $4x^2 + 12x + 9$",
    "options": [
      {
        "latex": "(2x + 3)^2",
        "correct": true
      },
      {
        "latex": "(2x + 3)(2x - 3)",
        "correct": false
      },
      {
        "latex": "(2x + 9)^2",
        "correct": false
      },
      {
        "latex": "(4x + 9)^2",
        "correct": false
      }
    ],
    "explanation": "$4x^2 + 12x + 9 = (2x+3)^2$ porque $(2x)^2 = 4x^2$, $2(2x)(3) = 12x$ y $3^2 = 9$."
  },
  {
    "id": "tricp-m-02",
    "difficulty": "medium",
    "prompt": "Factoriza: $9x^2 - 6x + 1$",
    "options": [
      {
        "latex": "(3x - 1)^2",
        "correct": true
      },
      {
        "latex": "(3x + 1)^2",
        "correct": false
      },
      {
        "latex": "(3x - 1)(3x + 1)",
        "correct": false
      },
      {
        "latex": "(9x - 1)^2",
        "correct": false
      }
    ],
    "explanation": "$9x^2 - 6x + 1 = (3x-1)^2$ porque $(3x)^2 = 9x^2$ y $2(3x)(1) = 6x$."
  },
  {
    "id": "tricp-m-03",
    "difficulty": "medium",
    "prompt": "Factoriza: $x^2 + 2xy + y^2$",
    "options": [
      {
        "latex": "(x + y)^2",
        "correct": true
      },
      {
        "latex": "(x - y)^2",
        "correct": false
      },
      {
        "latex": "(x + y)(x - y)",
        "correct": false
      },
      {
        "latex": "x^2 + y^2",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 2xy + y^2 = (x+y)^2$."
  },
  {
    "id": "tricp-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuál de los siguientes es un trinomio cuadrado perfecto?",
    "options": [
      {
        "latex": "x^2 + 8x + 16",
        "correct": true
      },
      {
        "latex": "x^2 + 8x + 8",
        "correct": false
      },
      {
        "latex": "x^2 + 16x + 8",
        "correct": false
      },
      {
        "latex": "x^2 + 4x + 16",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 8x + 16 = (x+4)^2$ porque $2 \\cdot 4 = 8$ y $4^2 = 16$. Los demás no cumplen que el término constante sea el cuadrado de la mitad del coeficiente."
  },
  {
    "id": "tricp-m-05",
    "difficulty": "medium",
    "prompt": "Factoriza: $25x^2 - 20x + 4$",
    "options": [
      {
        "latex": "(5x - 2)^2",
        "correct": true
      },
      {
        "latex": "(5x + 2)^2",
        "correct": false
      },
      {
        "latex": "(5x - 2)(5x + 2)",
        "correct": false
      },
      {
        "latex": "(5x - 4)^2",
        "correct": false
      }
    ],
    "explanation": "$25x^2 - 20x + 4 = (5x-2)^2$ porque $(5x)^2 = 25x^2$ y $2^2 = 4$."
  },
  {
    "id": "tricp-m-06",
    "difficulty": "medium",
    "prompt": "Factoriza: $16x^2 + 24x + 9$",
    "options": [
      {
        "latex": "(8x + 3)^2",
        "correct": false
      },
      {
        "latex": "(4x + 9)^2",
        "correct": false
      },
      {
        "latex": "(4x - 3)^2",
        "correct": false
      },
      {
        "latex": "(4x + 3)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{16x^2}=4x$, $\\sqrt{9}=3$, y $2(4x)(3)=24x$."
  },
  {
    "id": "tricp-m-07",
    "difficulty": "medium",
    "prompt": "Factoriza: $25x^2 - 30xy + 9y^2$",
    "options": [
      {
        "latex": "(25x - 9y)^2",
        "correct": false
      },
      {
        "latex": "(5x - 3y)(5x + 3y)",
        "correct": false
      },
      {
        "latex": "(5x + 3y)^2",
        "correct": false
      },
      {
        "latex": "(5x - 3y)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{25x^2}=5x$, $\\sqrt{9y^2}=3y$, $2(5x)(3y)=30xy$."
  },
  {
    "id": "tricp-m-08",
    "difficulty": "medium",
    "prompt": "Factoriza: $4a^2 + 28a + 49$",
    "options": [
      {
        "latex": "(2a - 7)^2",
        "correct": false
      },
      {
        "latex": "(4a + 7)^2",
        "correct": false
      },
      {
        "latex": "(2a + 49)^2",
        "correct": false
      },
      {
        "latex": "(2a + 7)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{4a^2}=2a$, $\\sqrt{49}=7$, $2(2a)(7)=28a$."
  },
  {
    "id": "tricp-m-09",
    "difficulty": "medium",
    "prompt": "Factoriza: $9x^4 - 24x^2 + 16$",
    "options": [
      {
        "latex": "(3x^2 + 4)^2",
        "correct": false
      },
      {
        "latex": "(9x^2 - 4)^2",
        "correct": false
      },
      {
        "latex": "(3x^2 - 16)^2",
        "correct": false
      },
      {
        "latex": "(3x^2 - 4)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{9x^4}=3x^2$, $\\sqrt{16}=4$, $2(3x^2)(4)=24x^2$."
  },
  {
    "id": "tricp-m-10",
    "difficulty": "medium",
    "prompt": "Factoriza: $49u^2 - 42uv + 9v^2$",
    "options": [
      {
        "latex": "(7u + 3v)^2",
        "correct": false
      },
      {
        "latex": "(7u - 3v)(7u + 3v)",
        "correct": false
      },
      {
        "latex": "(49u - 9v)^2",
        "correct": false
      },
      {
        "latex": "(7u - 3v)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{49u^2}=7u$, $\\sqrt{9v^2}=3v$, $2(7u)(3v)=42uv$."
  },
  {
    "id": "tricp-m-11",
    "difficulty": "medium",
    "prompt": "Factoriza: $36x^2 + 60xy + 25y^2$",
    "options": [
      {
        "latex": "(36x + 25y)^2",
        "correct": false
      },
      {
        "latex": "(6x + 5y)(6x - 5y)",
        "correct": false
      },
      {
        "latex": "(6x - 5y)^2",
        "correct": false
      },
      {
        "latex": "(6x + 5y)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{36x^2}=6x$, $\\sqrt{25y^2}=5y$, $2(6x)(5y)=60xy$."
  },
  {
    "id": "tricp-m-12",
    "difficulty": "medium",
    "prompt": "Factoriza: $64a^2 - 80ab + 25b^2$",
    "options": [
      {
        "latex": "(8a + 5b)^2",
        "correct": false
      },
      {
        "latex": "(16a - 5b)^2",
        "correct": false
      },
      {
        "latex": "(8a - 25b)^2",
        "correct": false
      },
      {
        "latex": "(8a - 5b)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{64a^2}=8a$, $\\sqrt{25b^2}=5b$, $2(8a)(5b)=80ab$."
  },
  {
    "id": "tricp-m-13",
    "difficulty": "medium",
    "prompt": "Factoriza: $100x^2 + 40x + 4$",
    "options": [
      {
        "latex": "(10x - 2)^2",
        "correct": false
      },
      {
        "latex": "(100x + 4)^2",
        "correct": false
      },
      {
        "latex": "(20x + 2)^2",
        "correct": false
      },
      {
        "latex": "(10x + 2)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{100x^2}=10x$, $\\sqrt{4}=2$, $2(10x)(2)=40x$."
  },
  {
    "id": "tricp-h-01",
    "difficulty": "hard",
    "prompt": "¿Qué valor de $c$ hace que $x^2 + 10x + c$ sea un cuadrado perfecto?",
    "options": [
      {
        "latex": "25",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      }
    ],
    "explanation": "Para ser cuadrado perfecto, $c$ debe ser $(\\frac{10}{2})^2 = 5^2 = 25$."
  },
  {
    "id": "tricp-h-02",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^4 + 2x^2 + 1$",
    "options": [
      {
        "latex": "(x^2 + 1)^2",
        "correct": true
      },
      {
        "latex": "(x^2 + 1)(x^2 - 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^4",
        "correct": false
      },
      {
        "latex": "x^4 + 1",
        "correct": false
      }
    ],
    "explanation": "$x^4 + 2x^2 + 1 = (x^2+1)^2$, tratando a $x^2$ como la variable."
  },
  {
    "id": "tricp-h-03",
    "difficulty": "hard",
    "prompt": "Factoriza: $4a^2 + 12ab + 9b^2$",
    "options": [
      {
        "latex": "(2a + 3b)^2",
        "correct": true
      },
      {
        "latex": "(2a + 3b)(2a - 3b)",
        "correct": false
      },
      {
        "latex": "(2a + 9b)^2",
        "correct": false
      },
      {
        "latex": "(4a + 9b)^2",
        "correct": false
      }
    ],
    "explanation": "$4a^2 + 12ab + 9b^2 = (2a+3b)^2$ porque $(2a)^2 = 4a^2$ y $(3b)^2 = 9b^2$."
  },
  {
    "id": "tricp-h-04",
    "difficulty": "hard",
    "prompt": "¿Para qué valor de $n$ es $x^2 + nx + 49$ un cuadrado perfecto?",
    "options": [
      {
        "latex": "14",
        "correct": true
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "49",
        "correct": false
      },
      {
        "latex": "98",
        "correct": false
      }
    ],
    "explanation": "Como $49 = 7^2$, se necesita $n = 2 \\cdot 7 = 14$ para que sea $(x+7)^2$."
  },
  {
    "id": "tricp-h-05",
    "difficulty": "hard",
    "prompt": "Factoriza: $9x^2 - 12xy + 4y^2$",
    "options": [
      {
        "latex": "(3x - 2y)^2",
        "correct": true
      },
      {
        "latex": "(3x + 2y)^2",
        "correct": false
      },
      {
        "latex": "(3x - 2y)(3x + 2y)",
        "correct": false
      },
      {
        "latex": "(9x - 4y)^2",
        "correct": false
      }
    ],
    "explanation": "$9x^2 - 12xy + 4y^2 = (3x-2y)^2$ porque $(3x)^2 = 9x^2$ y $(2y)^2 = 4y^2$."
  },
  {
    "id": "tricp-h-06",
    "difficulty": "hard",
    "prompt": "Factoriza: $\\frac{x^2}{4} + x + 1$",
    "options": [
      {
        "latex": "\\left(\\frac{x}{2} - 1\\right)^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}(x+1)^2",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{x}{4} + 1\\right)^2",
        "correct": false
      },
      {
        "latex": "\\left(\\frac{x}{2} + 1\\right)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x^2/4} = x/2$, $\\sqrt{1}=1$, y $2(x/2)(1) = x$."
  },
  {
    "id": "tricp-h-07",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^{2n} + 6x^n + 9$",
    "options": [
      {
        "latex": "(x^n + 9)^2",
        "correct": false
      },
      {
        "latex": "(x^{2n} + 3)^2",
        "correct": false
      },
      {
        "latex": "(x^n - 3)^2",
        "correct": false
      },
      {
        "latex": "(x^n + 3)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x^{2n}} = x^n$, $\\sqrt{9}=3$, $2(3)x^n = 6x^n$."
  },
  {
    "id": "tricp-h-08",
    "difficulty": "hard",
    "prompt": "¿Qué término debe sumarse a $x^2 + 10x$ para completar un TCP?",
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
        "latex": "100",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "Tomamos la mitad del coeficiente lineal al cuadrado: $(10/2)^2 = 5^2 = 25$."
  },
  {
    "id": "tricp-h-09",
    "difficulty": "hard",
    "prompt": "Factoriza: $e^{2x} - 2e^x + 1$",
    "options": [
      {
        "latex": "(e^x + 1)^2",
        "correct": false
      },
      {
        "latex": "(e^x - 2)^2",
        "correct": false
      },
      {
        "latex": "(e^{2x} - 1)^2",
        "correct": false
      },
      {
        "latex": "(e^x - 1)^2",
        "correct": true
      }
    ],
    "explanation": "Con $u = e^x$, es $u^2 - 2u + 1 = (u-1)^2 = (e^x-1)^2$."
  },
  {
    "id": "tricp-h-10",
    "difficulty": "hard",
    "prompt": "¿Qué término debe sumarse a $4x^2 - 12x$ para completar un TCP?",
    "options": [
      {
        "latex": "36",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "$4(x^2 - 3x) \\implies$ mitad de $-3$ al cuadrado es $9/4$, multiplicado por $4$ es $9$."
  },
  {
    "id": "tricp-h-11",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^2 - 2 + \\frac{1}{x^2}$ para $x \\neq 0$",
    "options": [
      {
        "latex": "\\left(x + \\frac{1}{x}\\right)^2",
        "correct": false
      },
      {
        "latex": "x^2 - \\frac{1}{x^2}",
        "correct": false
      },
      {
        "latex": "\\left(x - \\frac{1}{x^2}\\right)^2",
        "correct": false
      },
      {
        "latex": "\\left(x - \\frac{1}{x}\\right)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x^2}=x$, $\\sqrt{1/x^2}=1/x$, y $-2(x)(1/x) = -2$."
  },
  {
    "id": "tricp-h-12",
    "difficulty": "hard",
    "prompt": "Factoriza: $9x^{2a} - 12x^ay^b + 4y^{2b}$",
    "options": [
      {
        "latex": "(9x^a - 4y^b)^2",
        "correct": false
      },
      {
        "latex": "(3x^a - 2y^b)(3x^a + 2y^b)",
        "correct": false
      },
      {
        "latex": "(3x^a + 2y^b)^2",
        "correct": false
      },
      {
        "latex": "(3x^a - 2y^b)^2",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{9x^{2a}}=3x^a$, $\\sqrt{4y^{2b}}=2y^b$, $2(3x^a)(2y^b)=12x^ay^b$."
  },
  {
    "id": "tricp-h-13",
    "difficulty": "hard",
    "prompt": "Si $4x^2 + kx + 25$ es un trinomio cuadrado perfecto con $k > 0$, ¿cuánto vale $k$?",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "$k = 2\\sqrt{4}\\sqrt{25} = 2(2)(5) = 20$."
  }
]
};
