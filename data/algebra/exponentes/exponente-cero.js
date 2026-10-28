// data/algebra/exponentes/exponente-cero.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "exponente-cero",
  lawName: "Exponente cero",
  lawFormula: "a^0 = 1 \\quad (a \\neq 0)",
  prerequisites: "Conocer potencias y la condición a ≠ 0.",
  available: true,
  questions: [
  {
    "id": "exp0-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $5^0$",
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
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      }
    ],
    "explanation": "Todo número distinto de cero elevado a la 0 es 1: $5^0 = 1$."
  },
  {
    "id": "exp0-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^0$",
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
        "latex": "x",
        "correct": false
      },
      {
        "latex": "-x",
        "correct": false
      }
    ],
    "explanation": "Para cualquier $x \\neq 0$: $x^0 = 1$."
  },
  {
    "id": "exp0-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $(-3)^0$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      }
    ],
    "explanation": "La base completa (con su signo) elevada a la 0 es 1: $(-3)^0 = 1$."
  },
  {
    "id": "exp0-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $(2x)^0$",
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
        "latex": "2x",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      }
    ],
    "explanation": "Toda la expresión $(2x)$ elevada a la 0 es 1 (siempre que $2x \\neq 0$)."
  },
  {
    "id": "exp0-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $100^0$",
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
        "latex": "100",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      }
    ],
    "explanation": "Sin importar el tamaño del número: $100^0 = 1$."
  },
  {
    "id": "exp0-f-06",
    "difficulty": "easy",
    "prompt": "Calcula: $15^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "undefined",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Todo número no nulo elevado a 0 es 1."
  },
  {
    "id": "exp0-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $(-8)^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "El paréntesis abarca el signo negativo: $(-8)^0 = 1$."
  },
  {
    "id": "exp0-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $-8^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Sin paréntesis el signo queda fuera: $-(8^0) = -1$."
  },
  {
    "id": "exp0-f-09",
    "difficulty": "easy",
    "prompt": "Calcula: $(1000)^0$",
    "options": [
      {
        "latex": "1000",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "$1000^0 = 1$."
  },
  {
    "id": "exp0-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^0$ con $x \\neq 0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "x",
        "correct": false
      },
      {
        "latex": "undefined",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Por definición $x^0 = 1$."
  },
  {
    "id": "exp0-f-11",
    "difficulty": "easy",
    "prompt": "Calcula: $\\left(\\frac{3}{7}\\right)^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{7}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{7}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Toda fracción no nula elevada a la 0 es 1."
  },
  {
    "id": "exp0-f-12",
    "difficulty": "easy",
    "prompt": "Calcula: $4 \\cdot 5^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "20",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$5^0 = 1$, luego $4 \\cdot 1 = 4$."
  },
  {
    "id": "exp0-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $7^0 + 3^0$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "$1 + 1 = 2$."
  },
  {
    "id": "exp0-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $3x^0$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "3x",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "Solo la $x$ está elevada a la 0: $3 \\cdot x^0 = 3 \\cdot 1 = 3$."
  },
  {
    "id": "exp0-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $(5^2)^0$",
    "options": [
      {
        "latex": "1",
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
        "latex": "0",
        "correct": false
      }
    ],
    "explanation": "Cualquier potencia elevada a la 0 es 1: $(5^2)^0 = 1$."
  },
  {
    "id": "exp0-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $x^0 + y^0$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "x + y",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$x^0 = 1$ y $y^0 = 1$, por lo que $x^0 + y^0 = 1 + 1 = 2$."
  },
  {
    "id": "exp0-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $(ab)^0$",
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
        "latex": "ab",
        "correct": false
      },
      {
        "latex": "a + b",
        "correct": false
      }
    ],
    "explanation": "Toda la expresión $(ab)$ elevada a la 0 es 1 (con $a,b \\neq 0$)."
  },
  {
    "id": "exp0-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $-(4)^0$",
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
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      }
    ],
    "explanation": "Primero $4^0 = 1$ y luego se aplica el signo de afuera: $-(4^0) = -1$."
  },
  {
    "id": "exp0-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $5x^0$ con $x \\neq 0$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5x",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Solo $x$ está elevado a 0: $5(1) = 5$."
  },
  {
    "id": "exp0-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $(5x)^0$ con $x \\neq 0$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "5x",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "El paréntesis completo está elevado a 0, resultado 1."
  },
  {
    "id": "exp0-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $3x^0 - 2y^0$",
    "options": [
      {
        "latex": "xy",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "$3(1) - 2(1) = 3 - 2 = 1$."
  },
  {
    "id": "exp0-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-4x^3)^0$",
    "options": [
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Todo el bloque con paréntesis elevado a 0 es 1."
  },
  {
    "id": "exp0-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $-4(x^3)^0$",
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
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": true
      }
    ],
    "explanation": "El coeficiente $-4$ queda intacto: $-4(1) = -4$."
  },
  {
    "id": "exp0-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\frac{6x^0}{2y^0}$",
    "options": [
      {
        "latex": "3xy",
        "correct": false
      },
      {
        "latex": "0",
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
    "explanation": "$\\frac{6(1)}{2(1)} = \\frac{6}{2} = 3$."
  },
  {
    "id": "exp0-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $(x^2 + 5)^0$",
    "options": [
      {
        "latex": "x^2+5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Cualquier expresión real positiva elevada a la 0 es 1."
  },
  {
    "id": "exp0-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $2^0 + 3^0 + 4^0 + 5^0$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$1+1+1+1 = 4$."
  },
  {
    "id": "exp0-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $7x^0 y^0$",
    "options": [
      {
        "latex": "7",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "7xy",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$x^0 = 1$ y $y^0 = 1$, así que $7 \\cdot 1 \\cdot 1 = 7$."
  },
  {
    "id": "exp0-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^2 y)^0 \\cdot 3$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "3x^2 y",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$(x^2 y)^0 = 1$, por lo que $1 \\cdot 3 = 3$."
  },
  {
    "id": "exp0-h-03",
    "difficulty": "hard",
    "prompt": "Si $2^0 + 3^0 + 4^0 = n$, ¿cuál es el valor de $n$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$2^0 = 3^0 = 4^0 = 1$, por lo que $1 + 1 + 1 = 3$."
  },
  {
    "id": "exp0-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{5^3}{5^3}$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      }
    ],
    "explanation": "$\\frac{5^3}{5^3} = 5^{3-3} = 5^0 = 1$. Todo número dividido entre sí mismo es 1."
  },
  {
    "id": "exp0-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $(2x^2 - y)^0$",
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
        "latex": "2x^2 - y",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      }
    ],
    "explanation": "Toda expresión distinta de cero elevada a la 0 es 1, sin importar lo compleja que sea."
  },
  {
    "id": "exp0-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^2 + b^2 + c^2)^0$ con $a,b,c \\in \\mathbb{R}$ no todos nulos",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "a^2+b^2+c^2",
        "correct": false
      },
      {
        "latex": "a+b+c",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "La suma es estrictamente positiva, elevada a la 0 da 1."
  },
  {
    "id": "exp0-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{(3x+1)^0}{(2x-5)^0}$ para $x \\neq 5/2, -1/3$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "undefined",
        "correct": false
      },
      {
        "latex": "\\frac{3x+1}{2x-5}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{1} = 1$."
  },
  {
    "id": "exp0-h-08",
    "difficulty": "hard",
    "prompt": "¿Para qué valor de $x$ NO está definida la expresión $x^0$?",
    "options": [
      {
        "latex": "x = 1",
        "correct": false
      },
      {
        "latex": "x = -1",
        "correct": false
      },
      {
        "latex": "x = \\infty",
        "correct": false
      },
      {
        "latex": "x = 0",
        "correct": true
      }
    ],
    "explanation": "$0^0$ es una forma indeterminada en álgebra."
  },
  {
    "id": "exp0-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $5^{x-x} + 2^{y-y}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "$5^0 + 2^0 = 1 + 1 = 2$."
  },
  {
    "id": "exp0-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $(-1)^{2n} + (-1)^0$ con $n \\in \\mathbb{Z}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "$(-1)^{2n} = 1$ (exponente par) y $(-1)^0 = 1$; suma $1+1=2$."
  },
  {
    "id": "exp0-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^a \\cdot x^{-a})^5$ con $x \\neq 0$",
    "options": [
      {
        "latex": "x^{10a}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "x^5",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "$x^{a-a} = x^0 = 1$, y $1^5 = 1$."
  },
  {
    "id": "exp0-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{a^3 b^2}{c^4}\\right)^0 - 1$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\text{indefinido}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "$1 - 1 = 0$."
  },
  {
    "id": "exp0-h-13",
    "difficulty": "hard",
    "prompt": "Calcula el valor de $k$ si $(x^2+1)^0 + k = 10$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "$1 + k = 10 \\implies k = 9$."
  }
]
};
