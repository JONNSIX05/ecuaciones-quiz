// data/algebra/exponentes/exponente-fraccionario.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "exponente-fraccionario",
  lawName: "Exponente fraccionario",
  lawFormula: "a^{m/n} = \\sqrt[n]{a^m}",
  prerequisites: "Conocer radicales y potencias.",
  available: true,
  questions: [
  {
    "id": "expfrac-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $4^{1/2}$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      }
    ],
    "explanation": "$4^{1/2} = \\sqrt{4} = 2$. El exponente $1/2$ es la raíz cuadrada."
  },
  {
    "id": "expfrac-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^{1/2}$",
    "options": [
      {
        "latex": "\\sqrt{x}",
        "correct": true
      },
      {
        "latex": "x",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x}",
        "correct": false
      }
    ],
    "explanation": "$x^{1/2} = \\sqrt{x}$. El exponente fraccionario se convierte en radical."
  },
  {
    "id": "expfrac-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $9^{1/2}$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      }
    ],
    "explanation": "$9^{1/2} = \\sqrt{9} = 3$."
  },
  {
    "id": "expfrac-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $8^{1/3}$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "$8^{1/3} = \\sqrt[3]{8} = 2$, porque $2^3 = 8$."
  },
  {
    "id": "expfrac-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $16^{1/2}$",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      }
    ],
    "explanation": "$16^{1/2} = \\sqrt{16} = 4$."
  },
  {
    "id": "expfrac-f-06",
    "difficulty": "easy",
    "prompt": "Escribe en forma radical: $x^{1/4}$",
    "options": [
      {
        "latex": "\\sqrt{x^4}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "4x",
        "correct": false
      },
      {
        "latex": "\\sqrt[4]{x}",
        "correct": true
      }
    ],
    "explanation": "$a^{1/n} = \\sqrt[n]{a}$."
  },
  {
    "id": "expfrac-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $16^{1/2}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$16^{1/2} = \\sqrt{16} = 4$."
  },
  {
    "id": "expfrac-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $27^{1/3}$",
    "options": [
      {
        "latex": "81",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "$27^{1/3} = \\sqrt[3]{27} = 3$."
  },
  {
    "id": "expfrac-f-09",
    "difficulty": "easy",
    "prompt": "Escribe en forma radical: $y^{1/5}$",
    "options": [
      {
        "latex": "\\sqrt{y^5}",
        "correct": false
      },
      {
        "latex": "5y",
        "correct": false
      },
      {
        "latex": "\\frac{y}{5}",
        "correct": false
      },
      {
        "latex": "\\sqrt[5]{y}",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[5]{y}$."
  },
  {
    "id": "expfrac-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $8^{1/3}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "2.66",
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
    "explanation": "$8^{1/3} = \\sqrt[3]{8} = 2$."
  },
  {
    "id": "expfrac-f-11",
    "difficulty": "easy",
    "prompt": "Calcula: $81^{1/2}$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "40.5",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{81} = 9$."
  },
  {
    "id": "expfrac-f-12",
    "difficulty": "easy",
    "prompt": "Escribe en forma radical: $a^{2/3}$",
    "options": [
      {
        "latex": "\\sqrt{a^3}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}a",
        "correct": false
      },
      {
        "latex": "a^6",
        "correct": false
      },
      {
        "latex": "\\sqrt[3]{a^2}",
        "correct": true
      }
    ],
    "explanation": "$a^{m/n} = \\sqrt[n]{a^m}$."
  },
  {
    "id": "expfrac-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $64^{1/3}$",
    "options": [
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "21.3",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt[3]{64} = 4$."
  },
  {
    "id": "expfrac-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $8^{2/3}$",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      }
    ],
    "explanation": "$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Primero la raíz, luego la potencia."
  },
  {
    "id": "expfrac-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $27^{1/3}$",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      }
    ],
    "explanation": "$27^{1/3} = \\sqrt[3]{27} = 3$, porque $3^3 = 27$."
  },
  {
    "id": "expfrac-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $16^{3/4}$",
    "options": [
      {
        "latex": "8",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      }
    ],
    "explanation": "$16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$, porque $2^4 = 16$."
  },
  {
    "id": "expfrac-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $x^{3/2}$",
    "options": [
      {
        "latex": "x\\sqrt{x}",
        "correct": true
      },
      {
        "latex": "\\sqrt{x}",
        "correct": false
      },
      {
        "latex": "x^3",
        "correct": false
      },
      {
        "latex": "x^{2/3}",
        "correct": false
      }
    ],
    "explanation": "$x^{3/2} = x^{1 + 1/2} = x \\cdot x^{1/2} = x\\sqrt{x}$."
  },
  {
    "id": "expfrac-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $32^{1/5}$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}",
        "correct": false
      }
    ],
    "explanation": "$32^{1/5} = \\sqrt[5]{32} = 2$, porque $2^5 = 32$."
  },
  {
    "id": "expfrac-m-06",
    "difficulty": "medium",
    "prompt": "Calcula: $8^{2/3}$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "5.33",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt[3]{8})^2 = 2^2 = 4$."
  },
  {
    "id": "expfrac-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $27^{2/3}$",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "81",
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
    "explanation": "$(\\sqrt[3]{27})^2 = 3^2 = 9$."
  },
  {
    "id": "expfrac-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $16^{3/4}$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt[4]{16})^3 = 2^3 = 8$."
  },
  {
    "id": "expfrac-m-09",
    "difficulty": "medium",
    "prompt": "Calcula: $25^{3/2}$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "37.5",
        "correct": false
      },
      {
        "latex": "75",
        "correct": false
      },
      {
        "latex": "125",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt{25})^3 = 5^3 = 125$."
  },
  {
    "id": "expfrac-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $32^{2/5}$",
    "options": [
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "12.8",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt[5]{32})^2 = 2^2 = 4$."
  },
  {
    "id": "expfrac-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $81^{3/4}$",
    "options": [
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "54",
        "correct": false
      },
      {
        "latex": "243",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt[4]{81})^3 = 3^3 = 27$."
  },
  {
    "id": "expfrac-m-12",
    "difficulty": "medium",
    "prompt": "Escribe con exponente fraccionario: $\\sqrt[4]{x^3}$",
    "options": [
      {
        "latex": "x^{12}",
        "correct": false
      },
      {
        "latex": "x^{3-4}",
        "correct": false
      },
      {
        "latex": "x^{4/3}",
        "correct": false
      },
      {
        "latex": "x^{3/4}",
        "correct": true
      }
    ],
    "explanation": "El índice de la raíz va al denominador: $x^{3/4}$."
  },
  {
    "id": "expfrac-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $64^{2/3}$",
    "options": [
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "42.6",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "$(\\sqrt[3]{64})^2 = 4^2 = 16$."
  },
  {
    "id": "expfrac-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $64^{2/3}$",
    "options": [
      {
        "latex": "16",
        "correct": true
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      }
    ],
    "explanation": "$64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = 16$, porque $4^3 = 64$."
  },
  {
    "id": "expfrac-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $27^{2/3}$",
    "options": [
      {
        "latex": "9",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      }
    ],
    "explanation": "$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$."
  },
  {
    "id": "expfrac-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $x^{1/2} \\cdot x^{1/2}$",
    "options": [
      {
        "latex": "x",
        "correct": true
      },
      {
        "latex": "\\sqrt{x}",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      },
      {
        "latex": "x^{1/4}",
        "correct": false
      }
    ],
    "explanation": "Suma de exponentes: $\\frac{1}{2} + \\frac{1}{2} = 1$, por lo que $x^1 = x$."
  },
  {
    "id": "expfrac-h-04",
    "difficulty": "hard",
    "prompt": "Si $x^{1/2} = 5$, ¿cuál es el valor de $x$?",
    "options": [
      {
        "latex": "25",
        "correct": true
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      }
    ],
    "explanation": "Si $\\sqrt{x} = 5$, entonces $x = 5^2 = 25$."
  },
  {
    "id": "expfrac-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $81^{3/4}$",
    "options": [
      {
        "latex": "27",
        "correct": true
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "243",
        "correct": false
      }
    ],
    "explanation": "$81^{3/4} = (\\sqrt[4]{81})^3 = 3^3 = 27$, porque $3^4 = 81$."
  },
  {
    "id": "expfrac-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $16^{-3/4}$",
    "options": [
      {
        "latex": "-\\frac{1}{8}",
        "correct": false
      },
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{16^{3/4}} = \\frac{1}{2^3} = \\frac{1}{8}$."
  },
  {
    "id": "expfrac-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $27^{-2/3}$",
    "options": [
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{(\\sqrt[3]{27})^2} = \\frac{1}{3^2} = \\frac{1}{9}$."
  },
  {
    "id": "expfrac-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\left(\\frac{8}{27}\\right)^{-2/3}$",
    "options": [
      {
        "latex": "\\frac{4}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{27}{8}",
        "correct": false
      },
      {
        "latex": "-\\frac{9}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{9}{4}",
        "correct": true
      }
    ],
    "explanation": "Invertimos: $\\left(\\frac{27}{8}\\right)^{2/3} = \\frac{3^2}{2^2} = \\frac{9}{4}$."
  },
  {
    "id": "expfrac-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^{1/2} \\cdot x^{1/3})^6$",
    "options": [
      {
        "latex": "x",
        "correct": false
      },
      {
        "latex": "x^6",
        "correct": false
      },
      {
        "latex": "x^{1/5}",
        "correct": false
      },
      {
        "latex": "x^5",
        "correct": true
      }
    ],
    "explanation": "Dentro: $x^{1/2+1/3} = x^{5/6}$. Luego $(x^{5/6})^6 = x^5$."
  },
  {
    "id": "expfrac-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $32^{-3/5}$",
    "options": [
      {
        "latex": "-8",
        "correct": false
      },
      {
        "latex": "\\frac{1}{16}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{(\\sqrt[5]{32})^3} = \\frac{1}{2^3} = \\frac{1}{8}$."
  },
  {
    "id": "expfrac-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^{2/3}y^{1/2}}{x^{-1/3}y^{-1/2}}$",
    "options": [
      {
        "latex": "x^{2/3}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "x^{1/3}y",
        "correct": false
      },
      {
        "latex": "xy",
        "correct": true
      }
    ],
    "explanation": "$x^{2/3 - (-1/3)} y^{1/2 - (-1/2)} = x^1 y^1 = xy$."
  },
  {
    "id": "expfrac-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\left(\\frac{81}{16}\\right)^{-3/4}$",
    "options": [
      {
        "latex": "\\frac{27}{8}",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{27}",
        "correct": false
      },
      {
        "latex": "\\frac{16}{81}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{27}",
        "correct": true
      }
    ],
    "explanation": "$\\left(\\frac{16}{81}\\right)^{3/4} = \\frac{2^3}{3^3} = \\frac{8}{27}$."
  },
  {
    "id": "expfrac-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\sqrt{x\\sqrt{x}}$ en forma exponencial",
    "options": [
      {
        "latex": "x^{1/4}",
        "correct": false
      },
      {
        "latex": "x^{5/4}",
        "correct": false
      },
      {
        "latex": "x^{1/2}",
        "correct": false
      },
      {
        "latex": "x^{3/4}",
        "correct": true
      }
    ],
    "explanation": "$\\sqrt{x \\cdot x^{1/2}} = \\sqrt{x^{3/2}} = (x^{3/2})^{1/2} = x^{3/4}$."
  }
]
};
