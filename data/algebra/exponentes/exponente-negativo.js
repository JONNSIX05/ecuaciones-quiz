// data/algebra/exponentes/exponente-negativo.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "exponente-negativo",
  lawName: "Exponente negativo",
  lawFormula: "a^{-n} = \\dfrac{1}{a^n}",
  prerequisites: "Conocer el cociente de potencias.",
  available: true,
  questions: [
  {
    "id": "expneg-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $2^{-3}$",
    "options": [
      {
        "latex": "\\frac{1}{8}",
        "correct": true
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-6",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      }
    ],
    "explanation": "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. El signo del exponente no cambia el signo del resultado."
  },
  {
    "id": "expneg-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^{-2}$",
    "options": [
      {
        "latex": "\\frac{1}{x^2}",
        "correct": true
      },
      {
        "latex": "-x^2",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{x^2}",
        "correct": false
      }
    ],
    "explanation": "$x^{-2} = \\frac{1}{x^2}$. Un exponente negativo NO vuelve negativa a la base."
  },
  {
    "id": "expneg-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $5^{-1}$",
    "options": [
      {
        "latex": "\\frac{1}{5}",
        "correct": true
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      }
    ],
    "explanation": "$5^{-1} = \\frac{1}{5^1} = \\frac{1}{5}$."
  },
  {
    "id": "expneg-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $a^{-1}$",
    "options": [
      {
        "latex": "\\frac{1}{a}",
        "correct": true
      },
      {
        "latex": "-a",
        "correct": false
      },
      {
        "latex": "a",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{a}",
        "correct": false
      }
    ],
    "explanation": "$a^{-1} = \\frac{1}{a}$, que es el recíproco de $a$."
  },
  {
    "id": "expneg-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $10^{-2}$",
    "options": [
      {
        "latex": "\\frac{1}{100}",
        "correct": true
      },
      {
        "latex": "-100",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "-20",
        "correct": false
      }
    ],
    "explanation": "$10^{-2} = \\frac{1}{10^2} = \\frac{1}{100}$."
  },
  {
    "id": "expneg-f-06",
    "difficulty": "easy",
    "prompt": "Escribe con exponente positivo: $x^{-4}$",
    "options": [
      {
        "latex": "-x^4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{x^4}",
        "correct": false
      },
      {
        "latex": "x^4",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^4}",
        "correct": true
      }
    ],
    "explanation": "Por definición $a^{-n} = \\frac{1}{a^n}$."
  },
  {
    "id": "expneg-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $2^{-3}$",
    "options": [
      {
        "latex": "-\\frac{1}{8}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}",
        "correct": true
      }
    ],
    "explanation": "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$."
  },
  {
    "id": "expneg-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $3^{-2}$",
    "options": [
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{9}",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}",
        "correct": true
      }
    ],
    "explanation": "$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$."
  },
  {
    "id": "expneg-f-09",
    "difficulty": "easy",
    "prompt": "Escribe con exponente positivo: $y^{-6}$",
    "options": [
      {
        "latex": "-y^6",
        "correct": false
      },
      {
        "latex": "y^6",
        "correct": false
      },
      {
        "latex": "-6y",
        "correct": false
      },
      {
        "latex": "\\frac{1}{y^6}",
        "correct": true
      }
    ],
    "explanation": "Regla del exponente negativo: $\\frac{1}{y^6}$."
  },
  {
    "id": "expneg-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $5^{-1}$",
    "options": [
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}",
        "correct": true
      }
    ],
    "explanation": "$5^{-1} = \\frac{1}{5^1} = \\frac{1}{5}$."
  },
  {
    "id": "expneg-f-11",
    "difficulty": "easy",
    "prompt": "Escribe con exponente positivo: $a^{-8}$",
    "options": [
      {
        "latex": "-a^8",
        "correct": false
      },
      {
        "latex": "a^8",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{a^8}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{a^8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{a^8}$."
  },
  {
    "id": "expneg-f-12",
    "difficulty": "easy",
    "prompt": "Calcula: $4^{-2}$",
    "options": [
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{16}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{16}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{4^2} = \\frac{1}{16}$."
  },
  {
    "id": "expneg-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $10^{-3}$",
    "options": [
      {
        "latex": "-1000",
        "correct": false
      },
      {
        "latex": "0.01",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1000}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1000}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{10^3} = \\frac{1}{1000}$."
  },
  {
    "id": "expneg-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $3x^{-2}$",
    "options": [
      {
        "latex": "\\frac{3}{x^2}",
        "correct": true
      },
      {
        "latex": "3x^2",
        "correct": false
      },
      {
        "latex": "-3x^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3x^2}",
        "correct": false
      }
    ],
    "explanation": "Solo la $x$ tiene exponente negativo: $3 \\cdot x^{-2} = \\frac{3}{x^2}$. El 3 queda arriba."
  },
  {
    "id": "expneg-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $(2x)^{-1}$",
    "options": [
      {
        "latex": "\\frac{1}{2x}",
        "correct": true
      },
      {
        "latex": "-2x",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "2x",
        "correct": false
      }
    ],
    "explanation": "El exponente aplica a toda la base: $(2x)^{-1} = \\frac{1}{2x}$."
  },
  {
    "id": "expneg-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-2)^{-2}$",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": true
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      }
    ],
    "explanation": "$(-2)^{-2} = \\frac{1}{(-2)^2} = \\frac{1}{4}$. El exponente par elimina el signo."
  },
  {
    "id": "expneg-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{1}{x^{-2}}$",
    "options": [
      {
        "latex": "x^2",
        "correct": true
      },
      {
        "latex": "\\frac{1}{x^2}",
        "correct": false
      },
      {
        "latex": "-x^2",
        "correct": false
      },
      {
        "latex": "x^{-2}",
        "correct": false
      }
    ],
    "explanation": "$\\frac{1}{x^{-2}} = x^2$, porque un exponente negativo en el denominador sube al numerador."
  },
  {
    "id": "expneg-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3^{-1})^{-1}$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $(-1) \\cdot (-1) = 1$, por lo que $3^1 = 3$."
  },
  {
    "id": "expneg-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica a exponente positivo: $\\frac{1}{x^{-5}}$",
    "options": [
      {
        "latex": "\\frac{1}{x^5}",
        "correct": false
      },
      {
        "latex": "-x^5",
        "correct": false
      },
      {
        "latex": "-5x",
        "correct": false
      },
      {
        "latex": "x^5",
        "correct": true
      }
    ],
    "explanation": "Subir una potencia del denominador invierte el signo del exponente: $x^5$."
  },
  {
    "id": "expneg-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\left(\\frac{2}{3}\\right)^{-2}$",
    "options": [
      {
        "latex": "-\\frac{9}{4}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{9}{4}",
        "correct": true
      }
    ],
    "explanation": "Se invierte la fracción y se eleva al cuadrado: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$."
  },
  {
    "id": "expneg-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $3x^{-2}$",
    "options": [
      {
        "latex": "-3x^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x^2}",
        "correct": true
      }
    ],
    "explanation": "El 3 no tiene exponente negativo: $\\frac{3}{x^2}$."
  },
  {
    "id": "expneg-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3x)^{-2}$",
    "options": [
      {
        "latex": "\\frac{3}{x^2}",
        "correct": false
      },
      {
        "latex": "-9x^2",
        "correct": false
      },
      {
        "latex": "-\\frac{9}{x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9x^2}",
        "correct": true
      }
    ],
    "explanation": "Todo el paréntesis está afectado: $\\frac{1}{(3x)^2} = \\frac{1}{9x^2}$."
  },
  {
    "id": "expneg-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $\\left(\\frac{1}{4}\\right)^{-3}$",
    "options": [
      {
        "latex": "\\frac{1}{64}",
        "correct": false
      },
      {
        "latex": "-64",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "64",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{4}{1}\\right)^3 = 4^3 = 64$."
  },
  {
    "id": "expneg-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{x^{-3}}{y^{-4}}$",
    "options": [
      {
        "latex": "\\frac{x^3}{y^4}",
        "correct": false
      },
      {
        "latex": "-\\frac{x^3}{y^4}",
        "correct": false
      },
      {
        "latex": "x^3y^4",
        "correct": false
      },
      {
        "latex": "\\frac{y^4}{x^3}",
        "correct": true
      }
    ],
    "explanation": "Se intercambian posiciones para hacer exponentes positivos: $\\frac{y^4}{x^3}$."
  },
  {
    "id": "expneg-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $(-2)^{-3}$",
    "options": [
      {
        "latex": "\\frac{1}{8}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{(-2)^3} = \\frac{1}{-8} = -\\frac{1}{8}$."
  },
  {
    "id": "expneg-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $(-2)^{-4}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{16}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{16}",
        "correct": true
      }
    ],
    "explanation": "Exponente par da positivo: $\\frac{1}{(-2)^4} = \\frac{1}{16}$."
  },
  {
    "id": "expneg-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $2^{-2} \\cdot 2^3$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}",
        "correct": false
      }
    ],
    "explanation": "Suma de exponentes: $-2 + 3 = 1$, por lo que $2^1 = 2$."
  },
  {
    "id": "expneg-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^2}{x^{-3}}$",
    "options": [
      {
        "latex": "x^5",
        "correct": true
      },
      {
        "latex": "x^{-1}",
        "correct": false
      },
      {
        "latex": "x^{-5}",
        "correct": false
      },
      {
        "latex": "x^6",
        "correct": false
      }
    ],
    "explanation": "Resta de exponentes: $2 - (-3) = 2 + 3 = 5$, por lo que $x^5$."
  },
  {
    "id": "expneg-h-03",
    "difficulty": "hard",
    "prompt": "Si $2^x = \\frac{1}{8}$, ¿cuál es el valor de $x$?",
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
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      }
    ],
    "explanation": "$\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$, por lo que $x = -3$."
  },
  {
    "id": "expneg-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $(2x^2)^{-2}$",
    "options": [
      {
        "latex": "\\frac{1}{4x^4}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2x^4}",
        "correct": false
      },
      {
        "latex": "4x^4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x^4}",
        "correct": false
      }
    ],
    "explanation": "$(2x^2)^{-2} = \\frac{1}{(2x^2)^2} = \\frac{1}{4x^4}$."
  },
  {
    "id": "expneg-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{3x^{-2}}{y^{-3}}$",
    "options": [
      {
        "latex": "\\frac{3y^3}{x^2}",
        "correct": true
      },
      {
        "latex": "\\frac{3x^2}{y^3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x^2 y^3}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{3y^3}",
        "correct": false
      }
    ],
    "explanation": "Los exponentes negativos cambian de lugar: $\\frac{3x^{-2}}{y^{-3}} = 3 \\cdot \\frac{y^3}{x^2} = \\frac{3y^3}{x^2}$."
  },
  {
    "id": "expneg-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{a^{-2} + b^{-2}}{(ab)^{-1}}$",
    "options": [
      {
        "latex": "\\frac{ab}{a^2+b^2}",
        "correct": false
      },
      {
        "latex": "a+b",
        "correct": false
      },
      {
        "latex": "a^2+b^2",
        "correct": false
      },
      {
        "latex": "\\frac{a^2+b^2}{ab}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/a^2 + 1/b^2}{1/(ab)} = \\frac{(b^2+a^2)/(a^2b^2)}{1/(ab)} = \\frac{a^2+b^2}{ab}$."
  },
  {
    "id": "expneg-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\left(\\frac{3}{5}\\right)^{-3} \\cdot \\left(\\frac{5}{3}\\right)^{-2}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{25}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{5}{3}\\right)^3 \\cdot \\left(\\frac{3}{5}\\right)^2 = \\frac{125}{27} \\cdot \\frac{9}{25} = \\frac{5}{3}$."
  },
  {
    "id": "expneg-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^{-1} + y^{-1})^{-1}$",
    "options": [
      {
        "latex": "\\frac{x+y}{xy}",
        "correct": false
      },
      {
        "latex": "xy",
        "correct": false
      },
      {
        "latex": "x+y",
        "correct": false
      },
      {
        "latex": "\\frac{xy}{x+y}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{1}{x} + \\frac{1}{y}\\right)^{-1} = \\left(\\frac{y+x}{xy}\\right)^{-1} = \\frac{xy}{x+y}$."
  },
  {
    "id": "expneg-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{2^{-1} + 3^{-1}}{2^{-1} - 3^{-1}}$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "\\frac{5}{6}",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1/2 + 1/3}{1/2 - 1/3} = \\frac{5/6}{1/6} = 5$."
  },
  {
    "id": "expneg-h-10",
    "difficulty": "hard",
    "prompt": "Resuelve para $x$: $4^{-x} = 64$",
    "options": [
      {
        "latex": "-\\frac{1}{3}",
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
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "$4^{-x} = 4^3 \\implies -x = 3 \\implies x = -3$."
  },
  {
    "id": "expneg-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^{-n} - y^{-n}}{x^{-n}y^{-n}}$",
    "options": [
      {
        "latex": "\\frac{1}{x^n-y^n}",
        "correct": false
      },
      {
        "latex": "x^ny^n",
        "correct": false
      },
      {
        "latex": "x^n - y^n",
        "correct": false
      },
      {
        "latex": "y^n - x^n",
        "correct": true
      }
    ],
    "explanation": "$\\frac{\\frac{1}{x^n} - \\frac{1}{y^n}}{\\frac{1}{x^ny^n}} = \\frac{\\frac{y^n-x^n}{x^ny^n}}{\\frac{1}{x^ny^n}} = y^n - x^n$."
  },
  {
    "id": "expneg-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $(2^{-2} - 3^{-2})^{-1}$",
    "options": [
      {
        "latex": "\\frac{5}{36}",
        "correct": false
      },
      {
        "latex": "-\\frac{36}{5}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "\\frac{36}{5}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{1}{4} - \\frac{1}{9}\\right)^{-1} = \\left(\\frac{5}{36}\\right)^{-1} = \\frac{36}{5}$."
  },
  {
    "id": "expneg-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{a^{-3}b^2}{a^2b^{-4}}\\right)^{-2}$",
    "options": [
      {
        "latex": "\\frac{b^{12}}{a^{10}}",
        "correct": false
      },
      {
        "latex": "\\frac{a^6}{b^8}",
        "correct": false
      },
      {
        "latex": "a^{10}b^{12}",
        "correct": false
      },
      {
        "latex": "\\frac{a^{10}}{b^{12}}",
        "correct": true
      }
    ],
    "explanation": "Dentro: $a^{-3-2}b^{2-(-4)} = a^{-5}b^6$. Elevando a $-2$: $a^{10}b^{-12} = \\frac{a^{10}}{b^{12}}$."
  }
]
};
