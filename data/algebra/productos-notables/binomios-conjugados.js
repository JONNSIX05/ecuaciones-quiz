// data/algebra/productos-notables/binomios-conjugados.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "binomios-conjugados",
  lawName: "Binomios conjugados",
  lawFormula: "(a + b)(a - b) = a^2 - b^2",
  prerequisites: "Conocer la diferencia de cuadrados.",
  available: true,
  questions: [
  {
    "id": "binconj-f-01",
    "difficulty": "easy",
    "prompt": "Multiplica: $(x + 3)(x - 3)$",
    "options": [
      {
        "latex": "x^2 - 9",
        "correct": true
      },
      {
        "latex": "x^2 + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 6x + 9",
        "correct": false
      },
      {
        "latex": "x^2 - 3",
        "correct": false
      }
    ],
    "explanation": "$(x+3)(x-3) = x^2 - 3^2 = x^2 - 9$. Los términos cruzados se cancelan."
  },
  {
    "id": "binconj-f-02",
    "difficulty": "easy",
    "prompt": "Multiplica: $(a + b)(a - b)$",
    "options": [
      {
        "latex": "a^2 - b^2",
        "correct": true
      },
      {
        "latex": "a^2 + b^2",
        "correct": false
      },
      {
        "latex": "a^2 - 2ab + b^2",
        "correct": false
      },
      {
        "latex": "a^2 + 2ab + b^2",
        "correct": false
      }
    ],
    "explanation": "$(a+b)(a-b) = a^2 - b^2$. El término central se elimina: $ab - ab = 0$."
  },
  {
    "id": "binconj-f-03",
    "difficulty": "easy",
    "prompt": "Multiplica: $(m + 1)(m - 1)$",
    "options": [
      {
        "latex": "m^2 - 1",
        "correct": true
      },
      {
        "latex": "m^2 + 1",
        "correct": false
      },
      {
        "latex": "m^2 - 2m + 1",
        "correct": false
      },
      {
        "latex": "m - 1",
        "correct": false
      }
    ],
    "explanation": "$(m+1)(m-1) = m^2 - 1^2 = m^2 - 1$."
  },
  {
    "id": "binconj-f-04",
    "difficulty": "easy",
    "prompt": "Multiplica: $(5 + y)(5 - y)$",
    "options": [
      {
        "latex": "25 - y^2",
        "correct": true
      },
      {
        "latex": "25 + y^2",
        "correct": false
      },
      {
        "latex": "25 - 10y + y^2",
        "correct": false
      },
      {
        "latex": "10 - y^2",
        "correct": false
      }
    ],
    "explanation": "$(5+y)(5-y) = 5^2 - y^2 = 25 - y^2$."
  },
  {
    "id": "binconj-f-05",
    "difficulty": "easy",
    "prompt": "Multiplica: $(x + 2)(x - 2)$",
    "options": [
      {
        "latex": "x^2 - 4",
        "correct": true
      },
      {
        "latex": "x^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 4x + 4",
        "correct": false
      },
      {
        "latex": "x^2 - 2",
        "correct": false
      }
    ],
    "explanation": "$(x+2)(x-2) = x^2 - 2^2 = x^2 - 4$."
  },
  {
    "id": "binconj-f-06",
    "difficulty": "easy",
    "prompt": "Multiplica: $(x + 6)(x - 6)$",
    "options": [
      {
        "latex": "x^2 + 36",
        "correct": false
      },
      {
        "latex": "x^2 - 12x - 36",
        "correct": false
      },
      {
        "latex": "x^2 - 12",
        "correct": false
      },
      {
        "latex": "x^2 - 36",
        "correct": true
      }
    ],
    "explanation": "Diferencia de cuadrados: $x^2 - 6^2 = x^2 - 36$."
  },
  {
    "id": "binconj-f-07",
    "difficulty": "easy",
    "prompt": "Multiplica: $(x - 7)(x + 7)$",
    "options": [
      {
        "latex": "x^2 + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 14",
        "correct": false
      },
      {
        "latex": "x^2 - 14x - 49",
        "correct": false
      },
      {
        "latex": "x^2 - 49",
        "correct": true
      }
    ],
    "explanation": "$x^2 - 7^2 = x^2 - 49$."
  },
  {
    "id": "binconj-f-08",
    "difficulty": "easy",
    "prompt": "Multiplica: $(y + 8)(y - 8)$",
    "options": [
      {
        "latex": "y^2 + 64",
        "correct": false
      },
      {
        "latex": "y^2 - 8y - 64",
        "correct": false
      },
      {
        "latex": "y^2 - 16",
        "correct": false
      },
      {
        "latex": "y^2 - 64",
        "correct": true
      }
    ],
    "explanation": "$y^2 - 8^2 = y^2 - 64$."
  },
  {
    "id": "binconj-f-09",
    "difficulty": "easy",
    "prompt": "Multiplica: $(a - 9)(a + 9)$",
    "options": [
      {
        "latex": "a^2 - 18",
        "correct": false
      },
      {
        "latex": "a^2 - 9a - 81",
        "correct": false
      },
      {
        "latex": "a^2 + 81",
        "correct": false
      },
      {
        "latex": "a^2 - 81",
        "correct": true
      }
    ],
    "explanation": "$a^2 - 9^2 = a^2 - 81$."
  },
  {
    "id": "binconj-f-10",
    "difficulty": "easy",
    "prompt": "Multiplica: $(m + 10)(m - 10)$",
    "options": [
      {
        "latex": "m^2 - 20",
        "correct": false
      },
      {
        "latex": "m^2 - 10m - 100",
        "correct": false
      },
      {
        "latex": "m^2 + 100",
        "correct": false
      },
      {
        "latex": "m^2 - 100",
        "correct": true
      }
    ],
    "explanation": "$m^2 - 10^2 = m^2 - 100$."
  },
  {
    "id": "binconj-f-11",
    "difficulty": "easy",
    "prompt": "Multiplica: $(b - 12)(b + 12)$",
    "options": [
      {
        "latex": "b^2 - 24",
        "correct": false
      },
      {
        "latex": "b^2 - 12b - 144",
        "correct": false
      },
      {
        "latex": "b^2 + 144",
        "correct": false
      },
      {
        "latex": "b^2 - 144",
        "correct": true
      }
    ],
    "explanation": "$b^2 - 12^2 = b^2 - 144$."
  },
  {
    "id": "binconj-f-12",
    "difficulty": "easy",
    "prompt": "Multiplica: $(z + 1)(z - 1)$",
    "options": [
      {
        "latex": "z^2 + 1",
        "correct": false
      },
      {
        "latex": "z^2 - 2",
        "correct": false
      },
      {
        "latex": "z^2 - z - 1",
        "correct": false
      },
      {
        "latex": "z^2 - 1",
        "correct": true
      }
    ],
    "explanation": "$z^2 - 1^2 = z^2 - 1$."
  },
  {
    "id": "binconj-f-13",
    "difficulty": "easy",
    "prompt": "Multiplica: $(x - 15)(x + 15)$",
    "options": [
      {
        "latex": "x^2 + 225",
        "correct": false
      },
      {
        "latex": "x^2 - 30",
        "correct": false
      },
      {
        "latex": "x^2 - 15x - 225",
        "correct": false
      },
      {
        "latex": "x^2 - 225",
        "correct": true
      }
    ],
    "explanation": "$x^2 - 15^2 = x^2 - 225$."
  },
  {
    "id": "binconj-m-01",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2x + 3)(2x - 3)$",
    "options": [
      {
        "latex": "4x^2 - 9",
        "correct": true
      },
      {
        "latex": "4x^2 + 9",
        "correct": false
      },
      {
        "latex": "2x^2 - 9",
        "correct": false
      },
      {
        "latex": "4x^2 - 12x + 9",
        "correct": false
      }
    ],
    "explanation": "$(2x+3)(2x-3) = (2x)^2 - 3^2 = 4x^2 - 9$."
  },
  {
    "id": "binconj-m-02",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3a - b)(3a + b)$",
    "options": [
      {
        "latex": "9a^2 - b^2",
        "correct": true
      },
      {
        "latex": "9a^2 + b^2",
        "correct": false
      },
      {
        "latex": "6a^2 - b^2",
        "correct": false
      },
      {
        "latex": "9a^2 - 6ab + b^2",
        "correct": false
      }
    ],
    "explanation": "$(3a-b)(3a+b) = (3a)^2 - b^2 = 9a^2 - b^2$."
  },
  {
    "id": "binconj-m-03",
    "difficulty": "medium",
    "prompt": "Multiplica: $(x - 7)(x + 7)$",
    "options": [
      {
        "latex": "x^2 - 49",
        "correct": true
      },
      {
        "latex": "x^2 + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 14x + 49",
        "correct": false
      },
      {
        "latex": "x^2 - 7",
        "correct": false
      }
    ],
    "explanation": "$(x-7)(x+7) = x^2 - 7^2 = x^2 - 49$."
  },
  {
    "id": "binconj-m-04",
    "difficulty": "medium",
    "prompt": "Multiplica: $(\\frac{1}{2} + x)(\\frac{1}{2} - x)$",
    "options": [
      {
        "latex": "\\frac{1}{4} - x^2",
        "correct": true
      },
      {
        "latex": "\\frac{1}{4} + x^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2} - x^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4} - x",
        "correct": false
      }
    ],
    "explanation": "$(\\frac12+x)(\\frac12-x) = (\\frac12)^2 - x^2 = \\frac14 - x^2$."
  },
  {
    "id": "binconj-m-05",
    "difficulty": "medium",
    "prompt": "Multiplica: $(5x + 2y)(5x - 2y)$",
    "options": [
      {
        "latex": "25x^2 - 4y^2",
        "correct": true
      },
      {
        "latex": "25x^2 + 4y^2",
        "correct": false
      },
      {
        "latex": "5x^2 - 2y^2",
        "correct": false
      },
      {
        "latex": "25x^2 - 10xy + 4y^2",
        "correct": false
      }
    ],
    "explanation": "$(5x+2y)(5x-2y) = (5x)^2 - (2y)^2 = 25x^2 - 4y^2$."
  },
  {
    "id": "binconj-m-06",
    "difficulty": "medium",
    "prompt": "Multiplica: $(4x + 3)(4x - 3)$",
    "options": [
      {
        "latex": "16x^2 + 9",
        "correct": false
      },
      {
        "latex": "16x^2 - 24x - 9",
        "correct": false
      },
      {
        "latex": "4x^2 - 9",
        "correct": false
      },
      {
        "latex": "16x^2 - 9",
        "correct": true
      }
    ],
    "explanation": "$(4x)^2 - 3^2 = 16x^2 - 9$."
  },
  {
    "id": "binconj-m-07",
    "difficulty": "medium",
    "prompt": "Multiplica: $(5a - 2b)(5a + 2b)$",
    "options": [
      {
        "latex": "10a^2 - 4b^2",
        "correct": false
      },
      {
        "latex": "25a^2 - 20ab - 4b^2",
        "correct": false
      },
      {
        "latex": "25a^2 + 4b^2",
        "correct": false
      },
      {
        "latex": "25a^2 - 4b^2",
        "correct": true
      }
    ],
    "explanation": "$(5a)^2 - (2b)^2 = 25a^2 - 4b^2$."
  },
  {
    "id": "binconj-m-08",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3x^2 + 4)(3x^2 - 4)$",
    "options": [
      {
        "latex": "9x^2 - 16",
        "correct": false
      },
      {
        "latex": "6x^4 - 16",
        "correct": false
      },
      {
        "latex": "9x^4 + 16",
        "correct": false
      },
      {
        "latex": "9x^4 - 16",
        "correct": true
      }
    ],
    "explanation": "$(3x^2)^2 - 4^2 = 9x^4 - 16$."
  },
  {
    "id": "binconj-m-09",
    "difficulty": "medium",
    "prompt": "Multiplica: $(7u - 6v)(7u + 6v)$",
    "options": [
      {
        "latex": "49u^2 + 36v^2",
        "correct": false
      },
      {
        "latex": "14u^2 - 12v^2",
        "correct": false
      },
      {
        "latex": "49u^2 - 42uv - 36v^2",
        "correct": false
      },
      {
        "latex": "49u^2 - 36v^2",
        "correct": true
      }
    ],
    "explanation": "$(7u)^2 - (6v)^2 = 49u^2 - 36v^2$."
  },
  {
    "id": "binconj-m-10",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2x^3 - 5y)(2x^3 + 5y)$",
    "options": [
      {
        "latex": "4x^6 + 25y^2",
        "correct": false
      },
      {
        "latex": "4x^6 - 20x^3y - 25y^2",
        "correct": false
      },
      {
        "latex": "4x^5 - 25y^2",
        "correct": false
      },
      {
        "latex": "4x^6 - 25y^2",
        "correct": true
      }
    ],
    "explanation": "$(2x^3)^2 - (5y)^2 = 4x^6 - 25y^2$."
  },
  {
    "id": "binconj-m-11",
    "difficulty": "medium",
    "prompt": "Multiplica: $(8a + 9b^2)(8a - 9b^2)$",
    "options": [
      {
        "latex": "64a^2 + 81b^4",
        "correct": false
      },
      {
        "latex": "16a^2 - 18b^4",
        "correct": false
      },
      {
        "latex": "64a^2 - 81b^2",
        "correct": false
      },
      {
        "latex": "64a^2 - 81b^4",
        "correct": true
      }
    ],
    "explanation": "$(8a)^2 - (9b^2)^2 = 64a^2 - 81b^4$."
  },
  {
    "id": "binconj-m-12",
    "difficulty": "medium",
    "prompt": "Multiplica: $(10x - 3)(10x + 3)$",
    "options": [
      {
        "latex": "100x^2 + 9",
        "correct": false
      },
      {
        "latex": "20x^2 - 9",
        "correct": false
      },
      {
        "latex": "100x^2 - 60x - 9",
        "correct": false
      },
      {
        "latex": "100x^2 - 9",
        "correct": true
      }
    ],
    "explanation": "$(10x)^2 - 3^2 = 100x^2 - 9$."
  },
  {
    "id": "binconj-m-13",
    "difficulty": "medium",
    "prompt": "Multiplica: $(x^3 - y^3)(x^3 + y^3)$",
    "options": [
      {
        "latex": "x^9 - y^9",
        "correct": false
      },
      {
        "latex": "x^5 - y^5",
        "correct": false
      },
      {
        "latex": "x^6 + y^6",
        "correct": false
      },
      {
        "latex": "x^6 - y^6",
        "correct": true
      }
    ],
    "explanation": "$(x^3)^2 - (y^3)^2 = x^6 - y^6$."
  },
  {
    "id": "binconj-h-01",
    "difficulty": "hard",
    "prompt": "Multiplica: $(x^2 + 1)(x^2 - 1)$",
    "options": [
      {
        "latex": "x^4 - 1",
        "correct": true
      },
      {
        "latex": "x^4 + 1",
        "correct": false
      },
      {
        "latex": "x^2 - 1",
        "correct": false
      },
      {
        "latex": "x^4 - 2x^2 + 1",
        "correct": false
      }
    ],
    "explanation": "$(x^2+1)(x^2-1) = (x^2)^2 - 1^2 = x^4 - 1$."
  },
  {
    "id": "binconj-h-02",
    "difficulty": "hard",
    "prompt": "Si $(a + b)(a - b) = 39$ y $a + b = 13$, ¿cuánto vale $a - b$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "13",
        "correct": false
      },
      {
        "latex": "26",
        "correct": false
      },
      {
        "latex": "39",
        "correct": false
      }
    ],
    "explanation": "$(a+b)(a-b) = 39$ y $a+b = 13$, entonces $13(a-b) = 39$, por lo que $a-b = 3$."
  },
  {
    "id": "binconj-h-03",
    "difficulty": "hard",
    "prompt": "Multiplica: $(x + 2)(x - 2)(x^2 + 4)$",
    "options": [
      {
        "latex": "x^4 - 16",
        "correct": true
      },
      {
        "latex": "x^4 + 16",
        "correct": false
      },
      {
        "latex": "x^2 - 16",
        "correct": false
      },
      {
        "latex": "x^4 - 8",
        "correct": false
      }
    ],
    "explanation": "$(x+2)(x-2) = x^2 - 4$. Luego $(x^2-4)(x^2+4) = (x^2)^2 - 4^2 = x^4 - 16$."
  },
  {
    "id": "binconj-h-04",
    "difficulty": "hard",
    "prompt": "Multiplica: $(a + 2b)(a - 2b)$",
    "options": [
      {
        "latex": "a^2 - 4b^2",
        "correct": true
      },
      {
        "latex": "a^2 + 4b^2",
        "correct": false
      },
      {
        "latex": "a^2 - 2b^2",
        "correct": false
      },
      {
        "latex": "a^2 - 4ab + 4b^2",
        "correct": false
      }
    ],
    "explanation": "$(a+2b)(a-2b) = a^2 - (2b)^2 = a^2 - 4b^2$."
  },
  {
    "id": "binconj-h-05",
    "difficulty": "hard",
    "prompt": "¿Qué término falta? $(x + 9)(x - 9) = x^2 - \\_\\_\\_$",
    "options": [
      {
        "latex": "81",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      }
    ],
    "explanation": "$(x+9)(x-9) = x^2 - 9^2 = x^2 - 81$."
  },
  {
    "id": "binconj-h-06",
    "difficulty": "hard",
    "prompt": "Multiplica: $\\left(\\frac{2x}{3} + \\frac{5}{4}\\right)\\left(\\frac{2x}{3} - \\frac{5}{4}\\right)$",
    "options": [
      {
        "latex": "\\frac{2x^2}{9} - \\frac{5}{16}",
        "correct": false
      },
      {
        "latex": "\\frac{4x^2}{6} - \\frac{25}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{4x^2}{9} + \\frac{25}{16}",
        "correct": false
      },
      {
        "latex": "\\frac{4x^2}{9} - \\frac{25}{16}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{2x}{3}\\right)^2 - \\left(\\frac{5}{4}\\right)^2 = \\frac{4x^2}{9} - \\frac{25}{16}$."
  },
  {
    "id": "binconj-h-07",
    "difficulty": "hard",
    "prompt": "Multiplica: $(x^{n+1} - y^m)(x^{n+1} + y^m)$",
    "options": [
      {
        "latex": "x^{2n+2} + y^{2m}",
        "correct": false
      },
      {
        "latex": "x^{2n+1} - y^{2m}",
        "correct": false
      },
      {
        "latex": "x^{n^2+1} - y^{m^2}",
        "correct": false
      },
      {
        "latex": "x^{2n+2} - y^{2m}",
        "correct": true
      }
    ],
    "explanation": "$(x^{n+1})^2 - (y^m)^2 = x^{2n+2} - y^{2m}$."
  },
  {
    "id": "binconj-h-08",
    "difficulty": "hard",
    "prompt": "Multiplica: $(2^x - 3)(2^x + 3)$",
    "options": [
      {
        "latex": "2^{2x} + 9",
        "correct": false
      },
      {
        "latex": "2^{x^2} - 9",
        "correct": false
      },
      {
        "latex": "4^x - 6",
        "correct": false
      },
      {
        "latex": "4^x - 9",
        "correct": true
      }
    ],
    "explanation": "$(2^x)^2 - 3^2 = 2^{2x} - 9 = 4^x - 9$."
  },
  {
    "id": "binconj-h-09",
    "difficulty": "hard",
    "prompt": "Multiplica: $(\\sqrt{x+2} - \\sqrt{x})(\\sqrt{x+2} + \\sqrt{x})$",
    "options": [
      {
        "latex": "2x+2",
        "correct": false
      },
      {
        "latex": "x+2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt{x+2})^2 - (\\sqrt{x})^2 = (x+2) - x = 2$."
  },
  {
    "id": "binconj-h-10",
    "difficulty": "hard",
    "prompt": "Multiplica: $(e^x - e^{-x})(e^x + e^{-x})$",
    "options": [
      {
        "latex": "e^{2x} + e^{-2x}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "e^{x^2} - e^{-x^2}",
        "correct": false
      },
      {
        "latex": "e^{2x} - e^{-2x}",
        "correct": true
      }
    ],
    "explanation": "$(e^x)^2 - (e^{-x})^2 = e^{2x} - e^{-2x}$."
  },
  {
    "id": "binconj-h-11",
    "difficulty": "hard",
    "prompt": "Calcula sin calculadora: $1005 \\cdot 995$",
    "options": [
      {
        "latex": "999925",
        "correct": false
      },
      {
        "latex": "999900",
        "correct": false
      },
      {
        "latex": "999950",
        "correct": false
      },
      {
        "latex": "999975",
        "correct": true
      }
    ],
    "explanation": "$(1000 + 5)(1000 - 5) = 1000^2 - 5^2 = 1\\,000\\,000 - 25 = 999\\,975$."
  },
  {
    "id": "binconj-h-12",
    "difficulty": "hard",
    "prompt": "Multiplica: $(x+y-2)(x+y+2)$ agrupando como $((x+y)-2)((x+y)+2)$",
    "options": [
      {
        "latex": "x^2+y^2-4",
        "correct": false
      },
      {
        "latex": "(x+y)^2 + 4",
        "correct": false
      },
      {
        "latex": "x^2+2xy+y^2+4",
        "correct": false
      },
      {
        "latex": "(x+y)^2 - 4",
        "correct": true
      }
    ],
    "explanation": "$((x+y)-2)((x+y)+2) = (x+y)^2 - 2^2 = (x+y)^2 - 4$."
  },
  {
    "id": "binconj-h-13",
    "difficulty": "hard",
    "prompt": "Multiplica: $(a-b)(a+b)(a^2+b^2)(a^4+b^4)$",
    "options": [
      {
        "latex": "a^8 + b^8",
        "correct": false
      },
      {
        "latex": "a^{16} - b^{16}",
        "correct": false
      },
      {
        "latex": "a^6 - b^6",
        "correct": false
      },
      {
        "latex": "a^8 - b^8",
        "correct": true
      }
    ],
    "explanation": "Consecutivamente: $(a^2-b^2)(a^2+b^2) = a^4-b^4$; luego $(a^4-b^4)(a^4+b^4) = a^8-b^8$."
  }
]
};
