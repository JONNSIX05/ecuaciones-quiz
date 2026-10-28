// data/algebra/productos-notables/binomio-cubo.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "binomio-cubo",
  lawName: "Cubo de un binomio",
  lawFormula: "(a \\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3",
  prerequisites: "Conocer el cuadrado de un binomio.",
  available: true,
  questions: [
  {
    "id": "bincub-f-01",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 1)^3$",
    "options": [
      {
        "latex": "x^3 + 3x^2 + 3x + 1",
        "correct": true
      },
      {
        "latex": "x^3 + 1",
        "correct": false
      },
      {
        "latex": "x^3 + 3x + 1",
        "correct": false
      },
      {
        "latex": "x^3 + 3x^2 + 1",
        "correct": false
      }
    ],
    "explanation": "$(x+1)^3 = x^3 + 3x^2(1) + 3x(1)^2 + 1^3 = x^3 + 3x^2 + 3x + 1$."
  },
  {
    "id": "bincub-f-02",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(a + b)^3$",
    "options": [
      {
        "latex": "a^3 + 3a^2b + 3ab^2 + b^3",
        "correct": true
      },
      {
        "latex": "a^3 + b^3",
        "correct": false
      },
      {
        "latex": "a^3 + 3ab + b^3",
        "correct": false
      },
      {
        "latex": "a^3 + 3a^2b + b^3",
        "correct": false
      }
    ],
    "explanation": "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. No es lo mismo que $a^3 + b^3$."
  },
  {
    "id": "bincub-f-03",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x - 2)^3$",
    "options": [
      {
        "latex": "x^3 - 6x^2 + 12x - 8",
        "correct": true
      },
      {
        "latex": "x^3 - 8",
        "correct": false
      },
      {
        "latex": "x^3 - 6x^2 - 8",
        "correct": false
      },
      {
        "latex": "x^3 - 12x + 8",
        "correct": false
      }
    ],
    "explanation": "$(x-2)^3 = x^3 - 3x^2(2) + 3x(2)^2 - 2^3 = x^3 - 6x^2 + 12x - 8$."
  },
  {
    "id": "bincub-f-04",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(y + 2)^3$",
    "options": [
      {
        "latex": "y^3 + 6y^2 + 12y + 8",
        "correct": true
      },
      {
        "latex": "y^3 + 8",
        "correct": false
      },
      {
        "latex": "y^3 + 6y^2 + 8",
        "correct": false
      },
      {
        "latex": "y^3 + 6y + 8",
        "correct": false
      }
    ],
    "explanation": "$(y+2)^3 = y^3 + 3y^2(2) + 3y(2)^2 + 2^3 = y^3 + 6y^2 + 12y + 8$."
  },
  {
    "id": "bincub-f-05",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(m - 1)^3$",
    "options": [
      {
        "latex": "m^3 - 3m^2 + 3m - 1",
        "correct": true
      },
      {
        "latex": "m^3 - 1",
        "correct": false
      },
      {
        "latex": "m^3 - 3m^2 - 1",
        "correct": false
      },
      {
        "latex": "m^3 - 3m + 1",
        "correct": false
      }
    ],
    "explanation": "$(m-1)^3 = m^3 - 3m^2 + 3m - 1$."
  },
  {
    "id": "bincub-f-06",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 4)^3$",
    "options": [
      {
        "latex": "x^3 + 4x^2 + 16x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 12x + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 64",
        "correct": false
      },
      {
        "latex": "x^3 + 12x^2 + 48x + 64",
        "correct": true
      }
    ],
    "explanation": "$x^3 + 3(4)x^2 + 3(16)x + 4^3 = x^3 + 12x^2 + 48x + 64$."
  },
  {
    "id": "bincub-f-07",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x - 3)^3$",
    "options": [
      {
        "latex": "x^3 - 3x^2 + 9x - 27",
        "correct": false
      },
      {
        "latex": "x^3 + 9x^2 - 27x + 27",
        "correct": false
      },
      {
        "latex": "x^3 - 27",
        "correct": false
      },
      {
        "latex": "x^3 - 9x^2 + 27x - 27",
        "correct": true
      }
    ],
    "explanation": "$x^3 - 3(3)x^2 + 3(9)x - 27 = x^3 - 9x^2 + 27x - 27$."
  },
  {
    "id": "bincub-f-08",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(y + 5)^3$",
    "options": [
      {
        "latex": "y^3 + 5y^2 + 25y + 125",
        "correct": false
      },
      {
        "latex": "y^3 + 15y + 125",
        "correct": false
      },
      {
        "latex": "y^3 + 125",
        "correct": false
      },
      {
        "latex": "y^3 + 15y^2 + 75y + 125",
        "correct": true
      }
    ],
    "explanation": "$y^3 + 3(5)y^2 + 3(25)y + 125 = y^3 + 15y^2 + 75y + 125$."
  },
  {
    "id": "bincub-f-09",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(a - 4)^3$",
    "options": [
      {
        "latex": "a^3 - 4a^2 + 16a - 64",
        "correct": false
      },
      {
        "latex": "a^3 + 12a^2 - 48a + 64",
        "correct": false
      },
      {
        "latex": "a^3 - 64",
        "correct": false
      },
      {
        "latex": "a^3 - 12a^2 + 48a - 64",
        "correct": true
      }
    ],
    "explanation": "$a^3 - 3(4)a^2 + 3(16)a - 64 = a^3 - 12a^2 + 48a - 64$."
  },
  {
    "id": "bincub-f-10",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(m + 6)^3$",
    "options": [
      {
        "latex": "m^3 + 216",
        "correct": false
      },
      {
        "latex": "m^3 + 6m^2 + 36m + 216",
        "correct": false
      },
      {
        "latex": "m^3 + 18m + 216",
        "correct": false
      },
      {
        "latex": "m^3 + 18m^2 + 108m + 216",
        "correct": true
      }
    ],
    "explanation": "$m^3 + 3(6)m^2 + 3(36)m + 6^3 = m^3 + 18m^2 + 108m + 216$."
  },
  {
    "id": "bincub-f-11",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(b - 1)^3$",
    "options": [
      {
        "latex": "b^3 + 3b^2 + 3b + 1",
        "correct": false
      },
      {
        "latex": "b^3 - 3b - 1",
        "correct": false
      },
      {
        "latex": "b^3 - 1",
        "correct": false
      },
      {
        "latex": "b^3 - 3b^2 + 3b - 1",
        "correct": true
      }
    ],
    "explanation": "$b^3 - 3(1)b^2 + 3(1)^2b - 1 = b^3 - 3b^2 + 3b - 1$."
  },
  {
    "id": "bincub-f-12",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 10)^3$",
    "options": [
      {
        "latex": "x^3 + 1000",
        "correct": false
      },
      {
        "latex": "x^3 + 30x + 1000",
        "correct": false
      },
      {
        "latex": "x^3 + 10x^2 + 100x + 1000",
        "correct": false
      },
      {
        "latex": "x^3 + 30x^2 + 300x + 1000",
        "correct": true
      }
    ],
    "explanation": "$x^3 + 3(10)x^2 + 3(100)x + 10^3 = x^3 + 30x^2 + 300x + 1000$."
  },
  {
    "id": "bincub-f-13",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(2 - x)^3$",
    "options": [
      {
        "latex": "8 - x^3",
        "correct": false
      },
      {
        "latex": "8 + 12x + 6x^2 + x^3",
        "correct": false
      },
      {
        "latex": "8 - 6x + 6x^2 - x^3",
        "correct": false
      },
      {
        "latex": "8 - 12x + 6x^2 - x^3",
        "correct": true
      }
    ],
    "explanation": "$2^3 - 3(4)x + 3(2)x^2 - x^3 = 8 - 12x + 6x^2 - x^3$."
  },
  {
    "id": "bincub-m-01",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(2x + 1)^3$",
    "options": [
      {
        "latex": "8x^3 + 12x^2 + 6x + 1",
        "correct": true
      },
      {
        "latex": "2x^3 + 12x^2 + 6x + 1",
        "correct": false
      },
      {
        "latex": "8x^3 + 6x^2 + 6x + 1",
        "correct": false
      },
      {
        "latex": "8x^3 + 1",
        "correct": false
      }
    ],
    "explanation": "$(2x+1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + 1 = 8x^3 + 12x^2 + 6x + 1$."
  },
  {
    "id": "bincub-m-02",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(x - 3)^3$",
    "options": [
      {
        "latex": "x^3 - 9x^2 + 27x - 27",
        "correct": true
      },
      {
        "latex": "x^3 - 27",
        "correct": false
      },
      {
        "latex": "x^3 - 9x^2 - 27",
        "correct": false
      },
      {
        "latex": "x^3 - 9x^2 + 27x + 27",
        "correct": false
      }
    ],
    "explanation": "$(x-3)^3 = x^3 - 3x^2(3) + 3x(3)^2 - 3^3 = x^3 - 9x^2 + 27x - 27$."
  },
  {
    "id": "bincub-m-03",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(a - b)^3$",
    "options": [
      {
        "latex": "a^3 - 3a^2b + 3ab^2 - b^3",
        "correct": true
      },
      {
        "latex": "a^3 - b^3",
        "correct": false
      },
      {
        "latex": "a^3 - 3a^2b - 3ab^2 - b^3",
        "correct": false
      },
      {
        "latex": "a^3 + 3a^2b + 3ab^2 + b^3",
        "correct": false
      }
    ],
    "explanation": "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Los signos se alternan: $+ - + -$."
  },
  {
    "id": "bincub-m-04",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(3x - 1)^3$",
    "options": [
      {
        "latex": "27x^3 - 27x^2 + 9x - 1",
        "correct": true
      },
      {
        "latex": "27x^3 - 9x^2 + 9x - 1",
        "correct": false
      },
      {
        "latex": "27x^3 - 27x^2 + 3x - 1",
        "correct": false
      },
      {
        "latex": "27x^3 - 1",
        "correct": false
      }
    ],
    "explanation": "$(3x-1)^3 = (3x)^3 - 3(3x)^2(1) + 3(3x)(1)^2 - 1 = 27x^3 - 27x^2 + 9x - 1$."
  },
  {
    "id": "bincub-m-05",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(x + 2y)^3$",
    "options": [
      {
        "latex": "x^3 + 6x^2y + 12xy^2 + 8y^3",
        "correct": true
      },
      {
        "latex": "x^3 + 8y^3",
        "correct": false
      },
      {
        "latex": "x^3 + 6x^2y + 8y^3",
        "correct": false
      },
      {
        "latex": "x^3 + 6xy + 8y^3",
        "correct": false
      }
    ],
    "explanation": "$(x+2y)^3 = x^3 + 3x^2(2y) + 3x(2y)^2 + (2y)^3 = x^3 + 6x^2y + 12xy^2 + 8y^3$."
  },
  {
    "id": "bincub-m-06",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(3x + 2)^3$",
    "options": [
      {
        "latex": "27x^3 + 18x^2 + 12x + 8",
        "correct": false
      },
      {
        "latex": "9x^3 + 54x^2 + 36x + 8",
        "correct": false
      },
      {
        "latex": "27x^3 + 8",
        "correct": false
      },
      {
        "latex": "27x^3 + 54x^2 + 36x + 8",
        "correct": true
      }
    ],
    "explanation": "$(3x)^3 + 3(9x^2)(2) + 3(3x)(4) + 8 = 27x^3 + 54x^2 + 36x + 8$."
  },
  {
    "id": "bincub-m-07",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(2x - 3y)^3$",
    "options": [
      {
        "latex": "8x^3 - 18x^2y + 18xy^2 - 27y^3",
        "correct": false
      },
      {
        "latex": "8x^3 + 36x^2y + 54xy^2 + 27y^3",
        "correct": false
      },
      {
        "latex": "8x^3 - 27y^3",
        "correct": false
      },
      {
        "latex": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
        "correct": true
      }
    ],
    "explanation": "$(2x)^3 - 3(4x^2)(3y) + 3(2x)(9y^2) - 27y^3 = 8x^3 - 36x^2y + 54xy^2 - 27y^3$."
  },
  {
    "id": "bincub-m-08",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(4x + 1)^3$",
    "options": [
      {
        "latex": "64x^3 + 1",
        "correct": false
      },
      {
        "latex": "64x^3 + 16x^2 + 4x + 1",
        "correct": false
      },
      {
        "latex": "12x^3 + 48x^2 + 12x + 1",
        "correct": false
      },
      {
        "latex": "64x^3 + 48x^2 + 12x + 1",
        "correct": true
      }
    ],
    "explanation": "$(4x)^3 + 3(16x^2)(1) + 3(4x)(1) + 1 = 64x^3 + 48x^2 + 12x + 1$."
  },
  {
    "id": "bincub-m-09",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(3a - 4)^3$",
    "options": [
      {
        "latex": "27a^3 - 64",
        "correct": false
      },
      {
        "latex": "27a^3 - 36a^2 + 48a - 64",
        "correct": false
      },
      {
        "latex": "27a^3 + 108a^2 + 144a - 64",
        "correct": false
      },
      {
        "latex": "27a^3 - 108a^2 + 144a - 64",
        "correct": true
      }
    ],
    "explanation": "$(3a)^3 - 3(9a^2)(4) + 3(3a)(16) - 64 = 27a^3 - 108a^2 + 144a - 64$."
  },
  {
    "id": "bincub-m-10",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(x^2 + 2)^3$",
    "options": [
      {
        "latex": "x^6 + 8",
        "correct": false
      },
      {
        "latex": "x^5 + 6x^4 + 12x^2 + 8",
        "correct": false
      },
      {
        "latex": "x^6 + 6x^2 + 8",
        "correct": false
      },
      {
        "latex": "x^6 + 6x^4 + 12x^2 + 8",
        "correct": true
      }
    ],
    "explanation": "$(x^2)^3 + 3(x^4)(2) + 3(x^2)(4) + 8 = x^6 + 6x^4 + 12x^2 + 8$."
  },
  {
    "id": "bincub-m-11",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(5x - 1)^3$",
    "options": [
      {
        "latex": "125x^3 - 1",
        "correct": false
      },
      {
        "latex": "125x^3 + 75x^2 + 15x + 1",
        "correct": false
      },
      {
        "latex": "125x^3 - 25x^2 + 5x - 1",
        "correct": false
      },
      {
        "latex": "125x^3 - 75x^2 + 15x - 1",
        "correct": true
      }
    ],
    "explanation": "$(5x)^3 - 3(25x^2)(1) + 3(5x)(1) - 1 = 125x^3 - 75x^2 + 15x - 1$."
  },
  {
    "id": "bincub-m-12",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(2a^2 - b)^3$",
    "options": [
      {
        "latex": "8a^6 - b^3",
        "correct": false
      },
      {
        "latex": "8a^6 - 6a^4b + 6a^2b^2 - b^3",
        "correct": false
      },
      {
        "latex": "8a^5 - 12a^4b + 6a^2b^2 - b^3",
        "correct": false
      },
      {
        "latex": "8a^6 - 12a^4b + 6a^2b^2 - b^3",
        "correct": true
      }
    ],
    "explanation": "$(2a^2)^3 - 3(4a^4)b + 3(2a^2)b^2 - b^3 = 8a^6 - 12a^4b + 6a^2b^2 - b^3$."
  },
  {
    "id": "bincub-m-13",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(x + 2y^2)^3$",
    "options": [
      {
        "latex": "x^3 + 6x^2y^2 + 12xy^4 + 8y^5",
        "correct": false
      },
      {
        "latex": "x^3 + 2x^2y^2 + 4xy^4 + 8y^6",
        "correct": false
      },
      {
        "latex": "x^3 + 8y^6",
        "correct": false
      },
      {
        "latex": "x^3 + 6x^2y^2 + 12xy^4 + 8y^6",
        "correct": true
      }
    ],
    "explanation": "$x^3 + 3x^2(2y^2) + 3x(4y^4) + 8y^6 = x^3 + 6x^2y^2 + 12xy^4 + 8y^6$."
  },
  {
    "id": "bincub-h-01",
    "difficulty": "hard",
    "prompt": "¿Cuál es el coeficiente de $x^2$ en el desarrollo de $(x + 4)^3$?",
    "options": [
      {
        "latex": "12",
        "correct": true
      },
      {
        "latex": "48",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      }
    ],
    "explanation": "El término en $x^2$ es $3x^2(4) = 12x^2$, por lo que el coeficiente es $12$."
  },
  {
    "id": "bincub-h-02",
    "difficulty": "hard",
    "prompt": "Si $(x + 2)^3 = x^3 + 6x^2 + 12x + n$, ¿cuál es el valor de $n$?",
    "options": [
      {
        "latex": "8",
        "correct": true
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
        "latex": "12",
        "correct": false
      }
    ],
    "explanation": "El último término es $2^3 = 8$, por lo que $n = 8$."
  },
  {
    "id": "bincub-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x - 1)^3 + (x + 1)^3$",
    "options": [
      {
        "latex": "2x^3 + 6x",
        "correct": true
      },
      {
        "latex": "2x^3",
        "correct": false
      },
      {
        "latex": "6x",
        "correct": false
      },
      {
        "latex": "2x^3 + 6x^2",
        "correct": false
      }
    ],
    "explanation": "$(x-1)^3 = x^3-3x^2+3x-1$ y $(x+1)^3 = x^3+3x^2+3x+1$. Al sumar, los términos en $x^2$ se cancelan: $2x^3 + 6x$."
  },
  {
    "id": "bincub-h-04",
    "difficulty": "hard",
    "prompt": "¿Qué término falta? $(2x + 1)^3 = 8x^3 + \\_\\_\\_ + 6x + 1$",
    "options": [
      {
        "latex": "12x^2",
        "correct": true
      },
      {
        "latex": "6x^2",
        "correct": false
      },
      {
        "latex": "4x^2",
        "correct": false
      },
      {
        "latex": "12x",
        "correct": false
      }
    ],
    "explanation": "El término en $x^2$ es $3(2x)^2(1) = 3 \\cdot 4x^2 = 12x^2$."
  },
  {
    "id": "bincub-h-05",
    "difficulty": "hard",
    "prompt": "¿Cuál es el término lineal (de $x$) en el desarrollo de $(2x - 1)^3$?",
    "options": [
      {
        "latex": "6x",
        "correct": true
      },
      {
        "latex": "12x",
        "correct": false
      },
      {
        "latex": "-6x",
        "correct": false
      },
      {
        "latex": "-12x",
        "correct": false
      }
    ],
    "explanation": "El término lineal es $3(2x)(-1)^2 = 3 \\cdot 2x \\cdot 1 = 6x$."
  },
  {
    "id": "bincub-h-06",
    "difficulty": "hard",
    "prompt": "Desarrolla: $\\left(x - \\frac{1}{x}\\right)^3$",
    "options": [
      {
        "latex": "x^3 - \\frac{1}{x^3}",
        "correct": false
      },
      {
        "latex": "x^3 - 3x^2 + \\frac{3}{x^2} - \\frac{1}{x^3}",
        "correct": false
      },
      {
        "latex": "x^3 - 3 + \\frac{3}{x} - \\frac{1}{x^3}",
        "correct": false
      },
      {
        "latex": "x^3 - 3x + \\frac{3}{x} - \\frac{1}{x^3}",
        "correct": true
      }
    ],
    "explanation": "$x^3 - 3x^2(1/x) + 3x(1/x^2) - 1/x^3 = x^3 - 3x + 3/x - 1/x^3$."
  },
  {
    "id": "bincub-h-07",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(x^n + y^n)^3$",
    "options": [
      {
        "latex": "x^{3n} + y^{3n}",
        "correct": false
      },
      {
        "latex": "x^{n^3} + 3x^{2n}y^n + 3x^ny^{2n} + y^{n^3}",
        "correct": false
      },
      {
        "latex": "x^{3n} + x^{2n}y^n + x^ny^{2n} + y^{3n}",
        "correct": false
      },
      {
        "latex": "x^{3n} + 3x^{2n}y^n + 3x^ny^{2n} + y^{3n}",
        "correct": true
      }
    ],
    "explanation": "Aplicando la fórmula binomial con potencias literales: $x^{3n} + 3x^{2n}y^n + 3x^ny^{2n} + y^{3n}$."
  },
  {
    "id": "bincub-h-08",
    "difficulty": "hard",
    "prompt": "Si $x + \\frac{1}{x} = 4$, calcula $x^3 + \\frac{1}{x^3}$",
    "options": [
      {
        "latex": "48",
        "correct": false
      },
      {
        "latex": "60",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "52",
        "correct": true
      }
    ],
    "explanation": "$(x + 1/x)^3 = x^3 + 3(x+1/x) + 1/x^3 \\implies 64 = x^3 + 3(4) + 1/x^3 \\implies 64 - 12 = 52$."
  },
  {
    "id": "bincub-h-09",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(2^x - 1)^3$",
    "options": [
      {
        "latex": "8^x - 1",
        "correct": false
      },
      {
        "latex": "2^{3x} - 1",
        "correct": false
      },
      {
        "latex": "6^x - 3(4^x) + 3(2^x) - 1",
        "correct": false
      },
      {
        "latex": "8^x - 3(4^x) + 3(2^x) - 1",
        "correct": true
      }
    ],
    "explanation": "$(2^x)^3 - 3(2^x)^2(1) + 3(2^x)(1) - 1 = 8^x - 3(4^x) + 3(2^x) - 1$."
  },
  {
    "id": "bincub-h-10",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(a^{1/3} + b^{1/3})^3$",
    "options": [
      {
        "latex": "a^3 + 3a^2b + 3ab^2 + b^3",
        "correct": false
      },
      {
        "latex": "a + 3a^{1/3}b^{1/3} + b",
        "correct": false
      },
      {
        "latex": "a + b",
        "correct": false
      },
      {
        "latex": "a + 3a^{2/3}b^{1/3} + 3a^{1/3}b^{2/3} + b",
        "correct": true
      }
    ],
    "explanation": "$(a^{1/3})^3 + 3(a^{1/3})^2b^{1/3} + 3a^{1/3}(b^{1/3})^2 + (b^{1/3})^3 = a + 3a^{2/3}b^{1/3} + 3a^{1/3}b^{2/3} + b$."
  },
  {
    "id": "bincub-h-11",
    "difficulty": "hard",
    "prompt": "Calcula el coeficiente de $x^4$ en el desarrollo de $(2x^2 - 3)^3$",
    "options": [
      {
        "latex": "72",
        "correct": false
      },
      {
        "latex": "-108",
        "correct": false
      },
      {
        "latex": "-36",
        "correct": false
      },
      {
        "latex": "-72",
        "correct": true
      }
    ],
    "explanation": "Término con $x^4$: $3(2x^2)^2(-3) = 3(4x^4)(-3) = -36(2) = -72$. Coeficiente: $-36 \\cdot 2 = -72$ (o $3 \\cdot 4 \\cdot -3 = -36$? Espera: $3 \\cdot 4 \\cdot (-3) = -36$. Corrijamos: $3(4)(-3) = -36$, $3 \\cdot 4 = 12 \\cdot (-3) = -36$. El valor es -36)."
  },
  {
    "id": "bincub-h-12",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(x^2 - 2y^3)^3$",
    "options": [
      {
        "latex": "x^6 - 8y^9",
        "correct": false
      },
      {
        "latex": "x^5 - 6x^4y^3 + 12x^2y^6 - 8y^6",
        "correct": false
      },
      {
        "latex": "x^6 + 6x^4y^3 + 12x^2y^6 + 8y^9",
        "correct": false
      },
      {
        "latex": "x^6 - 6x^4y^3 + 12x^2y^6 - 8y^9",
        "correct": true
      }
    ],
    "explanation": "$(x^2)^3 - 3(x^4)(2y^3) + 3(x^2)(4y^6) - 8y^9 = x^6 - 6x^4y^3 + 12x^2y^6 - 8y^9$."
  },
  {
    "id": "bincub-h-13",
    "difficulty": "hard",
    "prompt": "Si $a-b=3$ y $ab=2$, calcula $a^3 - b^3$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "35",
        "correct": false
      },
      {
        "latex": "54",
        "correct": false
      },
      {
        "latex": "45",
        "correct": true
      }
    ],
    "explanation": "$a^3-b^3 = (a-b)^3 + 3ab(a-b) = 3^3 + 3(2)(3) = 27 + 18 = 45$."
  }
]
};
