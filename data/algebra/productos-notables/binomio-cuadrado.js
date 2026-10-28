// data/algebra/productos-notables/binomio-cuadrado.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "binomio-cuadrado",
  lawName: "Cuadrado de un binomio",
  lawFormula: "(a \\pm b)^2 = a^2 \\pm 2ab + b^2",
  prerequisites: "Conocer potencias y el producto de polinomios.",
  available: true,
  questions: [
  {
    "id": "bincuad-f-01",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 3)^2$",
    "options": [
      {
        "latex": "x^2 + 6x + 9",
        "correct": true
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 6",
        "correct": false
      },
      {
        "latex": "x^2 + 3x + 9",
        "correct": false
      }
    ],
    "explanation": "$(x+3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$. No olvides el término central $2ab$."
  },
  {
    "id": "bincuad-f-02",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(a + b)^2$",
    "options": [
      {
        "latex": "a^2 + 2ab + b^2",
        "correct": true
      },
      {
        "latex": "a^2 + b^2",
        "correct": false
      },
      {
        "latex": "a^2 + ab + b^2",
        "correct": false
      },
      {
        "latex": "2a + 2b",
        "correct": false
      }
    ],
    "explanation": "$(a+b)^2 = a^2 + 2ab + b^2$. El error clásico es olvidar $2ab$ y escribir $a^2 + b^2$."
  },
  {
    "id": "bincuad-f-03",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x - 5)^2$",
    "options": [
      {
        "latex": "x^2 - 10x + 25",
        "correct": true
      },
      {
        "latex": "x^2 - 25",
        "correct": false
      },
      {
        "latex": "x^2 - 10x + 10",
        "correct": false
      },
      {
        "latex": "x^2 + 25",
        "correct": false
      }
    ],
    "explanation": "$(x-5)^2 = x^2 - 2(x)(5) + 5^2 = x^2 - 10x + 25$. El cuadrado de $5$ es $25$, no $5$."
  },
  {
    "id": "bincuad-f-04",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(y + 1)^2$",
    "options": [
      {
        "latex": "y^2 + 2y + 1",
        "correct": true
      },
      {
        "latex": "y^2 + 1",
        "correct": false
      },
      {
        "latex": "y^2 + 2y + 2",
        "correct": false
      },
      {
        "latex": "y^2 + y + 1",
        "correct": false
      }
    ],
    "explanation": "$(y+1)^2 = y^2 + 2(y)(1) + 1^2 = y^2 + 2y + 1$."
  },
  {
    "id": "bincuad-f-05",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(m - 2)^2$",
    "options": [
      {
        "latex": "m^2 - 4m + 4",
        "correct": true
      },
      {
        "latex": "m^2 - 4",
        "correct": false
      },
      {
        "latex": "m^2 - 4m + 2",
        "correct": false
      },
      {
        "latex": "m^2 + 4",
        "correct": false
      }
    ],
    "explanation": "$(m-2)^2 = m^2 - 2(m)(2) + 2^2 = m^2 - 4m + 4$."
  },
  {
    "id": "bincuad-f-06",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 6)^2$",
    "options": [
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 12x + 12",
        "correct": false
      },
      {
        "latex": "x^2 + 6x + 36",
        "correct": false
      },
      {
        "latex": "x^2 + 12x + 36",
        "correct": true
      }
    ],
    "explanation": "$(x+6)^2 = x^2 + 2(6)x + 6^2 = x^2 + 12x + 36$."
  },
  {
    "id": "bincuad-f-07",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x - 7)^2$",
    "options": [
      {
        "latex": "x^2 - 7x + 49",
        "correct": false
      },
      {
        "latex": "x^2 + 14x + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 49",
        "correct": false
      },
      {
        "latex": "x^2 - 14x + 49",
        "correct": true
      }
    ],
    "explanation": "$(x-7)^2 = x^2 - 2(7)x + 7^2 = x^2 - 14x + 49$."
  },
  {
    "id": "bincuad-f-08",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(y + 8)^2$",
    "options": [
      {
        "latex": "y^2 + 64",
        "correct": false
      },
      {
        "latex": "y^2 + 8y + 64",
        "correct": false
      },
      {
        "latex": "2y + 16",
        "correct": false
      },
      {
        "latex": "y^2 + 16y + 64",
        "correct": true
      }
    ],
    "explanation": "$(y+8)^2 = y^2 + 16y + 64$."
  },
  {
    "id": "bincuad-f-09",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(a - 9)^2$",
    "options": [
      {
        "latex": "a^2 - 81",
        "correct": false
      },
      {
        "latex": "a^2 + 18a + 81",
        "correct": false
      },
      {
        "latex": "a^2 - 9a + 81",
        "correct": false
      },
      {
        "latex": "a^2 - 18a + 81",
        "correct": true
      }
    ],
    "explanation": "$(a-9)^2 = a^2 - 18a + 81$."
  },
  {
    "id": "bincuad-f-10",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(x + 10)^2$",
    "options": [
      {
        "latex": "x^2 + 100",
        "correct": false
      },
      {
        "latex": "x^2 + 10x + 100",
        "correct": false
      },
      {
        "latex": "x^2 + 20x + 20",
        "correct": false
      },
      {
        "latex": "x^2 + 20x + 100",
        "correct": true
      }
    ],
    "explanation": "$x^2 + 2(10)x + 10^2 = x^2 + 20x + 100$."
  },
  {
    "id": "bincuad-f-11",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(m - 4)^2$",
    "options": [
      {
        "latex": "m^2 - 16",
        "correct": false
      },
      {
        "latex": "m^2 + 8m + 16",
        "correct": false
      },
      {
        "latex": "m^2 - 4m + 16",
        "correct": false
      },
      {
        "latex": "m^2 - 8m + 16",
        "correct": true
      }
    ],
    "explanation": "$m^2 - 2(4)m + 4^2 = m^2 - 8m + 16$."
  },
  {
    "id": "bincuad-f-12",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(z + 12)^2$",
    "options": [
      {
        "latex": "z^2 + 12z + 144",
        "correct": false
      },
      {
        "latex": "z^2 + 24z + 24",
        "correct": false
      },
      {
        "latex": "z^2 + 144",
        "correct": false
      },
      {
        "latex": "z^2 + 24z + 144",
        "correct": true
      }
    ],
    "explanation": "$z^2 + 2(12)z + 12^2 = z^2 + 24z + 144$."
  },
  {
    "id": "bincuad-f-13",
    "difficulty": "easy",
    "prompt": "Desarrolla: $(b - 11)^2$",
    "options": [
      {
        "latex": "b^2 - 121",
        "correct": false
      },
      {
        "latex": "b^2 - 11b + 121",
        "correct": false
      },
      {
        "latex": "b^2 + 22b + 121",
        "correct": false
      },
      {
        "latex": "b^2 - 22b + 121",
        "correct": true
      }
    ],
    "explanation": "$b^2 - 2(11)b + 11^2 = b^2 - 22b + 121$."
  },
  {
    "id": "bincuad-m-01",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(2x + 3)^2$",
    "options": [
      {
        "latex": "4x^2 + 12x + 9",
        "correct": true
      },
      {
        "latex": "2x^2 + 12x + 9",
        "correct": false
      },
      {
        "latex": "4x^2 + 6x + 9",
        "correct": false
      },
      {
        "latex": "4x^2 + 9",
        "correct": false
      }
    ],
    "explanation": "$(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$. El $2$ también se eleva al cuadrado."
  },
  {
    "id": "bincuad-m-02",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(3a - 2)^2$",
    "options": [
      {
        "latex": "9a^2 - 12a + 4",
        "correct": true
      },
      {
        "latex": "9a^2 - 6a + 4",
        "correct": false
      },
      {
        "latex": "9a^2 - 12a - 4",
        "correct": false
      },
      {
        "latex": "9a^2 - 4",
        "correct": false
      }
    ],
    "explanation": "$(3a-2)^2 = (3a)^2 - 2(3a)(2) + 2^2 = 9a^2 - 12a + 4$."
  },
  {
    "id": "bincuad-m-03",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(-x + 4)^2$",
    "options": [
      {
        "latex": "x^2 - 8x + 16",
        "correct": true
      },
      {
        "latex": "x^2 + 8x + 16",
        "correct": false
      },
      {
        "latex": "x^2 - 16",
        "correct": false
      },
      {
        "latex": "-x^2 + 8x - 16",
        "correct": false
      }
    ],
    "explanation": "$(-x+4)^2 = (-x)^2 + 2(-x)(4) + 4^2 = x^2 - 8x + 16$."
  },
  {
    "id": "bincuad-m-04",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(\\frac{x}{2} + 1)^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{4} + x + 1",
        "correct": true
      },
      {
        "latex": "\\frac{x^2}{4} + 1",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{2} + x + 1",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{4} + x + 2",
        "correct": false
      }
    ],
    "explanation": "$(\\frac{x}{2})^2 = \\frac{x^2}{4}$, $2(\\frac{x}{2})(1) = x$ y $1^2 = 1$: $\\frac{x^2}{4} + x + 1$."
  },
  {
    "id": "bincuad-m-05",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(5x - y)^2$",
    "options": [
      {
        "latex": "25x^2 - 10xy + y^2",
        "correct": true
      },
      {
        "latex": "25x^2 - 10xy - y^2",
        "correct": false
      },
      {
        "latex": "25x^2 - 5xy + y^2",
        "correct": false
      },
      {
        "latex": "25x^2 + y^2",
        "correct": false
      }
    ],
    "explanation": "$(5x-y)^2 = (5x)^2 - 2(5x)(y) + y^2 = 25x^2 - 10xy + y^2$."
  },
  {
    "id": "bincuad-m-06",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(4x + 3)^2$",
    "options": [
      {
        "latex": "16x^2 + 9",
        "correct": false
      },
      {
        "latex": "4x^2 + 24x + 9",
        "correct": false
      },
      {
        "latex": "16x^2 + 12x + 9",
        "correct": false
      },
      {
        "latex": "16x^2 + 24x + 9",
        "correct": true
      }
    ],
    "explanation": "$(4x)^2 + 2(4x)(3) + 3^2 = 16x^2 + 24x + 9$."
  },
  {
    "id": "bincuad-m-07",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(5x - 2y)^2$",
    "options": [
      {
        "latex": "25x^2 - 4y^2",
        "correct": false
      },
      {
        "latex": "25x^2 + 20xy + 4y^2",
        "correct": false
      },
      {
        "latex": "25x^2 - 10xy + 4y^2",
        "correct": false
      },
      {
        "latex": "25x^2 - 20xy + 4y^2",
        "correct": true
      }
    ],
    "explanation": "$(5x)^2 - 2(5x)(2y) + (2y)^2 = 25x^2 - 20xy + 4y^2$."
  },
  {
    "id": "bincuad-m-08",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(3a^2 + 2)^2$",
    "options": [
      {
        "latex": "9a^2 + 12a^2 + 4",
        "correct": false
      },
      {
        "latex": "9a^4 + 6a^2 + 4",
        "correct": false
      },
      {
        "latex": "9a^4 + 4",
        "correct": false
      },
      {
        "latex": "9a^4 + 12a^2 + 4",
        "correct": true
      }
    ],
    "explanation": "$(3a^2)^2 + 2(3a^2)(2) + 2^2 = 9a^4 + 12a^2 + 4$."
  },
  {
    "id": "bincuad-m-09",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(2x^3 - 5)^2$",
    "options": [
      {
        "latex": "4x^6 - 25",
        "correct": false
      },
      {
        "latex": "4x^5 - 20x^3 + 25",
        "correct": false
      },
      {
        "latex": "4x^6 - 10x^3 + 25",
        "correct": false
      },
      {
        "latex": "4x^6 - 20x^3 + 25",
        "correct": true
      }
    ],
    "explanation": "$(2x^3)^2 - 2(2x^3)(5) + 5^2 = 4x^6 - 20x^3 + 25$."
  },
  {
    "id": "bincuad-m-10",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(7u + 3v)^2$",
    "options": [
      {
        "latex": "49u^2 + 9v^2",
        "correct": false
      },
      {
        "latex": "49u^2 + 21uv + 9v^2",
        "correct": false
      },
      {
        "latex": "14u^2 + 42uv + 6v^2",
        "correct": false
      },
      {
        "latex": "49u^2 + 42uv + 9v^2",
        "correct": true
      }
    ],
    "explanation": "$(7u)^2 + 2(7u)(3v) + (3v)^2 = 49u^2 + 42uv + 9v^2$."
  },
  {
    "id": "bincuad-m-11",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(6x - 5y)^2$",
    "options": [
      {
        "latex": "36x^2 - 25y^2",
        "correct": false
      },
      {
        "latex": "36x^2 - 30xy + 25y^2",
        "correct": false
      },
      {
        "latex": "36x^2 + 60xy + 25y^2",
        "correct": false
      },
      {
        "latex": "36x^2 - 60xy + 25y^2",
        "correct": true
      }
    ],
    "explanation": "$(6x)^2 - 2(6x)(5y) + (5y)^2 = 36x^2 - 60xy + 25y^2$."
  },
  {
    "id": "bincuad-m-12",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(x^2 - 4y^2)^2$",
    "options": [
      {
        "latex": "x^4 - 16y^4",
        "correct": false
      },
      {
        "latex": "x^4 + 8x^2y^2 + 16y^4",
        "correct": false
      },
      {
        "latex": "x^4 - 4x^2y^2 + 16y^4",
        "correct": false
      },
      {
        "latex": "x^4 - 8x^2y^2 + 16y^4",
        "correct": true
      }
    ],
    "explanation": "$(x^2)^2 - 2(x^2)(4y^2) + (4y^2)^2 = x^4 - 8x^2y^2 + 16y^4$."
  },
  {
    "id": "bincuad-m-13",
    "difficulty": "medium",
    "prompt": "Desarrolla: $(10x + 1)^2$",
    "options": [
      {
        "latex": "100x^2 + 10x + 1",
        "correct": false
      },
      {
        "latex": "20x^2 + 20x + 1",
        "correct": false
      },
      {
        "latex": "100x^2 + 1",
        "correct": false
      },
      {
        "latex": "100x^2 + 20x + 1",
        "correct": true
      }
    ],
    "explanation": "$(10x)^2 + 2(10x)(1) + 1^2 = 100x^2 + 20x + 1$."
  },
  {
    "id": "bincuad-h-01",
    "difficulty": "hard",
    "prompt": "Si $(x + a)^2 = x^2 + 12x + 36$, ¿cuál es el valor de $a$?",
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
        "latex": "36",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      }
    ],
    "explanation": "$(x+a)^2 = x^2 + 2ax + a^2$. Como $2a = 12$ y $a^2 = 36$, entonces $a = 6$."
  },
  {
    "id": "bincuad-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x + y)^2 - (x - y)^2$",
    "options": [
      {
        "latex": "4xy",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2xy",
        "correct": false
      },
      {
        "latex": "2x^2 + 2y^2",
        "correct": false
      }
    ],
    "explanation": "$(x+y)^2 = x^2+2xy+y^2$ y $(x-y)^2 = x^2-2xy+y^2$. Al restar: $4xy$."
  },
  {
    "id": "bincuad-h-03",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(2x + 3y)^2$",
    "options": [
      {
        "latex": "4x^2 + 12xy + 9y^2",
        "correct": true
      },
      {
        "latex": "4x^2 + 6xy + 9y^2",
        "correct": false
      },
      {
        "latex": "4x^2 + 9y^2",
        "correct": false
      },
      {
        "latex": "2x^2 + 12xy + 3y^2",
        "correct": false
      }
    ],
    "explanation": "$(2x+3y)^2 = (2x)^2 + 2(2x)(3y) + (3y)^2 = 4x^2 + 12xy + 9y^2$."
  },
  {
    "id": "bincuad-h-04",
    "difficulty": "hard",
    "prompt": "¿Qué término falta? $(x + 5)^2 = x^2 + 10x + \\_\\_\\_$",
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
        "latex": "50",
        "correct": false
      }
    ],
    "explanation": "El último término es el cuadrado de $5$: $5^2 = 25$."
  },
  {
    "id": "bincuad-h-05",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(x - \\frac{1}{2})^2$",
    "options": [
      {
        "latex": "x^2 - x + \\frac{1}{4}",
        "correct": true
      },
      {
        "latex": "x^2 - \\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "x^2 + x + \\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "x^2 - x + \\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "$(x-\\frac12)^2 = x^2 - 2(x)(\\frac12) + (\\frac12)^2 = x^2 - x + \\frac14$."
  },
  {
    "id": "bincuad-h-06",
    "difficulty": "hard",
    "prompt": "Desarrolla: $\\left(\\frac{x}{3} + \\frac{3}{2}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{9} + \\frac{9}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{9} + 2x + \\frac{9}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{6} + x + \\frac{9}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{9} + x + \\frac{9}{4}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{x}{3}\\right)^2 + 2\\left(\\frac{x}{3}\\right)\\left(\\frac{3}{2}\\right) + \\left(\\frac{3}{2}\\right)^2 = \\frac{x^2}{9} + x + \\frac{9}{4}$."
  },
  {
    "id": "bincuad-h-07",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(x^{n+1} - 2)^2$",
    "options": [
      {
        "latex": "x^{n^2+1} - 4x^{n+1} + 4",
        "correct": false
      },
      {
        "latex": "x^{2n+2} - 2x^{n+1} + 4",
        "correct": false
      },
      {
        "latex": "x^{2n+2} - 4",
        "correct": false
      },
      {
        "latex": "x^{2n+2} - 4x^{n+1} + 4",
        "correct": true
      }
    ],
    "explanation": "$(x^{n+1})^2 - 2(x^{n+1})(2) + 4 = x^{2n+2} - 4x^{n+1} + 4$."
  },
  {
    "id": "bincuad-h-08",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(2x^a + 3y^b)^2$",
    "options": [
      {
        "latex": "4x^{a^2} + 12x^ay^b + 9y^{b^2}",
        "correct": false
      },
      {
        "latex": "4x^{2a} + 6x^ay^b + 9y^{2b}",
        "correct": false
      },
      {
        "latex": "4x^{2a} + 9y^{2b}",
        "correct": false
      },
      {
        "latex": "4x^{2a} + 12x^ay^b + 9y^{2b}",
        "correct": true
      }
    ],
    "explanation": "Aplicamos la regla con exponentes literales: $4x^{2a} + 12x^ay^b + 9y^{2b}$."
  },
  {
    "id": "bincuad-h-09",
    "difficulty": "hard",
    "prompt": "Desarrolla: $\\left(x - \\frac{1}{x}\\right)^2$",
    "options": [
      {
        "latex": "x^2 + 2 + \\frac{1}{x^2}",
        "correct": false
      },
      {
        "latex": "x^2 - 2x + \\frac{1}{x^2}",
        "correct": false
      },
      {
        "latex": "x^2 - \\frac{1}{x^2}",
        "correct": false
      },
      {
        "latex": "x^2 - 2 + \\frac{1}{x^2}",
        "correct": true
      }
    ],
    "explanation": "$x^2 - 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = x^2 - 2 + \\frac{1}{x^2}$."
  },
  {
    "id": "bincuad-h-10",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(\\sqrt{x} + 3)^2$ para $x > 0$",
    "options": [
      {
        "latex": "x^2 + 6\\sqrt{x} + 9",
        "correct": false
      },
      {
        "latex": "x + 3\\sqrt{x} + 9",
        "correct": false
      },
      {
        "latex": "x + 9",
        "correct": false
      },
      {
        "latex": "x + 6\\sqrt{x} + 9",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt{x})^2 + 2(3)\\sqrt{x} + 9 = x + 6\\sqrt{x} + 9$."
  },
  {
    "id": "bincuad-h-11",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(e^x - e^{-x})^2$",
    "options": [
      {
        "latex": "e^{2x} + 2 + e^{-2x}",
        "correct": false
      },
      {
        "latex": "e^{x^2} - 2 + e^{-x^2}",
        "correct": false
      },
      {
        "latex": "e^{2x} - e^{-2x}",
        "correct": false
      },
      {
        "latex": "e^{2x} - 2 + e^{-2x}",
        "correct": true
      }
    ],
    "explanation": "$(e^x)^2 - 2(e^x)(e^{-x}) + (e^{-x})^2 = e^{2x} - 2(1) + e^{-2x}$."
  },
  {
    "id": "bincuad-h-12",
    "difficulty": "hard",
    "prompt": "Desarrolla: $(x+y+1)^2$ agrupando como $((x+y)+1)^2$",
    "options": [
      {
        "latex": "x^2+y^2+1",
        "correct": false
      },
      {
        "latex": "x^2+y^2+2xy+1",
        "correct": false
      },
      {
        "latex": "x^2+2xy+y^2+x+y+1",
        "correct": false
      },
      {
        "latex": "x^2+2xy+y^2+2x+2y+1",
        "correct": true
      }
    ],
    "explanation": "$(x+y)^2 + 2(x+y)(1) + 1 = x^2 + 2xy + y^2 + 2x + 2y + 1$."
  },
  {
    "id": "bincuad-h-13",
    "difficulty": "hard",
    "prompt": "Si $x + \\frac{1}{x} = 5$, ¿cuánto vale $x^2 + \\frac{1}{x^2}$?",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "23",
        "correct": true
      }
    ],
    "explanation": "Elevando al cuadrado: $x^2 + 2 + \\frac{1}{x^2} = 25 \\implies x^2 + \\frac{1}{x^2} = 23$."
  }
]
};
