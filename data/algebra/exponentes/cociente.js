// data/algebra/exponentes/cociente.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "cociente",
  lawName: "Cociente de potencias de igual base",
  lawFormula: "\\dfrac{a^m}{a^n} = a^{m-n}",
  prerequisites: "Conocer el producto de potencias y la división.",
  available: true,
  questions: [
  {
    "id": "coc-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{3^5}{3^2}$",
    "options": [
      {
        "latex": "3^3",
        "correct": true
      },
      {
        "latex": "3^7",
        "correct": false
      },
      {
        "latex": "3^{10}",
        "correct": false
      },
      {
        "latex": "1^3",
        "correct": false
      }
    ],
    "explanation": "Misma base, se restan los exponentes: $3^{5-2} = 3^3$. No se suman ni se multiplican."
  },
  {
    "id": "coc-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{x^6}{x^2}$",
    "options": [
      {
        "latex": "x^4",
        "correct": true
      },
      {
        "latex": "x^8",
        "correct": false
      },
      {
        "latex": "x^3",
        "correct": false
      },
      {
        "latex": "x^{12}",
        "correct": false
      }
    ],
    "explanation": "Se restan los exponentes: $x^{6-2} = x^4$."
  },
  {
    "id": "coc-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{2^4}{2}$",
    "options": [
      {
        "latex": "2^3",
        "correct": true
      },
      {
        "latex": "2^4",
        "correct": false
      },
      {
        "latex": "2^2",
        "correct": false
      },
      {
        "latex": "2^5",
        "correct": false
      }
    ],
    "explanation": "Recuerda que $2 = 2^1$. Entonces $2^{4-1} = 2^3$."
  },
  {
    "id": "coc-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{b^5}{b^2}$",
    "options": [
      {
        "latex": "b^3",
        "correct": true
      },
      {
        "latex": "b^7",
        "correct": false
      },
      {
        "latex": "b^{10}",
        "correct": false
      },
      {
        "latex": "b^{\\frac{5}{2}}",
        "correct": false
      }
    ],
    "explanation": "Exponentes: $5 - 2 = 3$, por lo que $b^3$."
  },
  {
    "id": "coc-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{5^6}{5^3}$",
    "options": [
      {
        "latex": "5^3",
        "correct": true
      },
      {
        "latex": "5^9",
        "correct": false
      },
      {
        "latex": "5^2",
        "correct": false
      },
      {
        "latex": "5^{18}",
        "correct": false
      }
    ],
    "explanation": "Se restan exponentes: $5^{6-3} = 5^3$."
  },
  {
    "id": "coc-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{x^9}{x^4}$",
    "options": [
      {
        "latex": "x^{13}",
        "correct": false
      },
      {
        "latex": "x^{9/4}",
        "correct": false
      },
      {
        "latex": "x^{36}",
        "correct": false
      },
      {
        "latex": "x^5",
        "correct": true
      }
    ],
    "explanation": "Se restan exponentes: $9-4=5$."
  },
  {
    "id": "coc-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{y^{12}}{y^5}$",
    "options": [
      {
        "latex": "y^{60}",
        "correct": false
      },
      {
        "latex": "y^{12/5}",
        "correct": false
      },
      {
        "latex": "y^{17}",
        "correct": false
      },
      {
        "latex": "y^7",
        "correct": true
      }
    ],
    "explanation": "Se restan exponentes: $12-5=7$."
  },
  {
    "id": "coc-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{3^8}{3^3}$",
    "options": [
      {
        "latex": "1^5",
        "correct": false
      },
      {
        "latex": "3^{24}",
        "correct": false
      },
      {
        "latex": "3^{11}",
        "correct": false
      },
      {
        "latex": "3^5",
        "correct": true
      }
    ],
    "explanation": "Misma base, se restan exponentes: $8-3=5$."
  },
  {
    "id": "coc-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{a^7}{a}$",
    "options": [
      {
        "latex": "a^7",
        "correct": false
      },
      {
        "latex": "a^8",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "a^6",
        "correct": true
      }
    ],
    "explanation": "Recordando que $a = a^1$, $7-1=6$."
  },
  {
    "id": "coc-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{5^9}{5^7}$",
    "options": [
      {
        "latex": "5^{16}",
        "correct": false
      },
      {
        "latex": "1^2",
        "correct": false
      },
      {
        "latex": "5^{63}",
        "correct": false
      },
      {
        "latex": "5^2",
        "correct": true
      }
    ],
    "explanation": "$9-7=2$, resultado $5^2$."
  },
  {
    "id": "coc-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{b^{15}}{b^6}$",
    "options": [
      {
        "latex": "b^{21}",
        "correct": false
      },
      {
        "latex": "b^{90}",
        "correct": false
      },
      {
        "latex": "b^{5/2}",
        "correct": false
      },
      {
        "latex": "b^9",
        "correct": true
      }
    ],
    "explanation": "Se restan exponentes: $15-6=9$."
  },
  {
    "id": "coc-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{2^{10}}{2^6}$",
    "options": [
      {
        "latex": "2^{16}",
        "correct": false
      },
      {
        "latex": "1^4",
        "correct": false
      },
      {
        "latex": "2^{60}",
        "correct": false
      },
      {
        "latex": "2^4",
        "correct": true
      }
    ],
    "explanation": "$10-6=4$, resultado $2^4$."
  },
  {
    "id": "coc-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\frac{z^{20}}{z^8}$",
    "options": [
      {
        "latex": "z^{28}",
        "correct": false
      },
      {
        "latex": "z^{5/2}",
        "correct": false
      },
      {
        "latex": "z^{160}",
        "correct": false
      },
      {
        "latex": "z^{12}",
        "correct": true
      }
    ],
    "explanation": "Se restan exponentes: $20-8=12$."
  },
  {
    "id": "coc-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{12x^5}{3x^2}$",
    "options": [
      {
        "latex": "4x^3",
        "correct": true
      },
      {
        "latex": "9x^3",
        "correct": false
      },
      {
        "latex": "4x^7",
        "correct": false
      },
      {
        "latex": "4x^{\\frac{5}{2}}",
        "correct": false
      }
    ],
    "explanation": "Divide coeficientes ($12 \\div 3 = 4$) y resta exponentes ($5 - 2 = 3$): $4x^3$."
  },
  {
    "id": "coc-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{8x^4 y^3}{2x^2 y}$",
    "options": [
      {
        "latex": "4x^2 y^2",
        "correct": true
      },
      {
        "latex": "4x^2 y^3",
        "correct": false
      },
      {
        "latex": "4x^6 y^4",
        "correct": false
      },
      {
        "latex": "6x^2 y^2",
        "correct": false
      }
    ],
    "explanation": "Coeficientes: $8 \\div 2 = 4$. $x^{4-2} = x^2$, $y^{3-1} = y^2$. Resultado: $4x^2 y^2$."
  },
  {
    "id": "coc-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{(-a)^5}{(-a)^2}$",
    "options": [
      {
        "latex": "(-a)^3",
        "correct": true
      },
      {
        "latex": "a^3",
        "correct": false
      },
      {
        "latex": "(-a)^7",
        "correct": false
      },
      {
        "latex": "(-a)^{10}",
        "correct": false
      }
    ],
    "explanation": "La base es $(-a)$: $(-a)^{5-2} = (-a)^3$. El signo negativo forma parte de la base."
  },
  {
    "id": "coc-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{15a^3 b^5}{5a^2 b}$",
    "options": [
      {
        "latex": "3ab^4",
        "correct": true
      },
      {
        "latex": "3ab^5",
        "correct": false
      },
      {
        "latex": "10ab^4",
        "correct": false
      },
      {
        "latex": "3a^2 b^4",
        "correct": false
      }
    ],
    "explanation": "$15 \\div 5 = 3$, $a^{3-2} = a$, $b^{5-1} = b^4$. Resultado: $3ab^4$."
  },
  {
    "id": "coc-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{-6x^4}{2x}$",
    "options": [
      {
        "latex": "-3x^3",
        "correct": true
      },
      {
        "latex": "3x^3",
        "correct": false
      },
      {
        "latex": "-3x^4",
        "correct": false
      },
      {
        "latex": "-4x^3",
        "correct": false
      }
    ],
    "explanation": "$-6 \\div 2 = -3$ y $x^{4-1} = x^3$. El signo se conserva: $-3x^3$."
  },
  {
    "id": "coc-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{18x^7}{6x^3}$",
    "options": [
      {
        "latex": "3x^{10}",
        "correct": false
      },
      {
        "latex": "12x^4",
        "correct": false
      },
      {
        "latex": "3x^{21}",
        "correct": false
      },
      {
        "latex": "3x^4",
        "correct": true
      }
    ],
    "explanation": "Coeficientes: $18/6=3$; exponentes: $7-3=4$."
  },
  {
    "id": "coc-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{24a^9b^6}{8a^4b^2}$",
    "options": [
      {
        "latex": "3a^{13}b^8",
        "correct": false
      },
      {
        "latex": "16a^5b^4",
        "correct": false
      },
      {
        "latex": "3a^5b^3",
        "correct": false
      },
      {
        "latex": "3a^5b^4",
        "correct": true
      }
    ],
    "explanation": "Dividimos $24/8=3$; $a^{9-4}=a^5$, $b^{6-2}=b^4$."
  },
  {
    "id": "coc-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{-35x^8}{7x^2}$",
    "options": [
      {
        "latex": "-5x^4",
        "correct": false
      },
      {
        "latex": "-28x^6",
        "correct": false
      },
      {
        "latex": "5x^6",
        "correct": false
      },
      {
        "latex": "-5x^6",
        "correct": true
      }
    ],
    "explanation": "$-35/7 = -5$; $x^{8-2}=x^6$."
  },
  {
    "id": "coc-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{12u^5v^4}{4u^2v}$",
    "options": [
      {
        "latex": "8u^3v^3",
        "correct": false
      },
      {
        "latex": "3u^3v^4",
        "correct": false
      },
      {
        "latex": "3u^7v^5",
        "correct": false
      },
      {
        "latex": "3u^3v^3",
        "correct": true
      }
    ],
    "explanation": "$12/4 = 3$; $u^{5-2}=u^3$, $v^{4-1}=v^3$."
  },
  {
    "id": "coc-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{-48x^6y^8}{-6x^2y^3}$",
    "options": [
      {
        "latex": "-8x^4y^5",
        "correct": false
      },
      {
        "latex": "8x^8y^{11}",
        "correct": false
      },
      {
        "latex": "42x^4y^5",
        "correct": false
      },
      {
        "latex": "8x^4y^5",
        "correct": true
      }
    ],
    "explanation": "Signos $(-)/(-)=+$, $48/6=8$, restamos exponentes: $x^4y^5$."
  },
  {
    "id": "coc-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{a^{5k}}{a^{2k}}$",
    "options": [
      {
        "latex": "a^{7k}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "a^{2.5}",
        "correct": false
      },
      {
        "latex": "a^{3k}",
        "correct": true
      }
    ],
    "explanation": "$5k - 2k = 3k$."
  },
  {
    "id": "coc-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{45m^{10}n^7}{9m^6n^2}$",
    "options": [
      {
        "latex": "5m^{16}n^9",
        "correct": false
      },
      {
        "latex": "5m^4n^3",
        "correct": false
      },
      {
        "latex": "36m^4n^5",
        "correct": false
      },
      {
        "latex": "5m^4n^5",
        "correct": true
      }
    ],
    "explanation": "$45/9 = 5$, $m^{10-6}=m^4$, $n^{7-2}=n^5$."
  },
  {
    "id": "coc-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\frac{100x^8y^5}{25x^3y}$",
    "options": [
      {
        "latex": "75x^5y^4",
        "correct": false
      },
      {
        "latex": "4x^5y^5",
        "correct": false
      },
      {
        "latex": "4x^{11}y^6",
        "correct": false
      },
      {
        "latex": "4x^5y^4",
        "correct": true
      }
    ],
    "explanation": "$100/25 = 4$, $x^{8-3}=x^5$, $y^{5-1}=y^4$."
  },
  {
    "id": "coc-h-01",
    "difficulty": "hard",
    "prompt": "Si $\\frac{2^x}{2^3} = 16$, ¿cuál es el valor de $x$?",
    "options": [
      {
        "latex": "7",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "11",
        "correct": false
      }
    ],
    "explanation": "$\\frac{2^x}{2^3} = 2^{x-3}$. Como $16 = 2^4$, entonces $x-3 = 4$, luego $x = 7$."
  },
  {
    "id": "coc-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica y evalúa: $\\frac{3^5}{3^2}$",
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
        "latex": "3",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      }
    ],
    "explanation": "$\\frac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$."
  },
  {
    "id": "coc-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^4 y^3 z^2}{x y^2 z}$",
    "options": [
      {
        "latex": "x^3 y z",
        "correct": true
      },
      {
        "latex": "x^3 y z^2",
        "correct": false
      },
      {
        "latex": "x^4 y z",
        "correct": false
      },
      {
        "latex": "x^3 y^2 z",
        "correct": false
      }
    ],
    "explanation": "Resta por variable: $x^{4-1} = x^3$, $y^{3-2} = y$, $z^{2-1} = z$. Resultado: $x^3 y z$."
  },
  {
    "id": "coc-h-04",
    "difficulty": "hard",
    "prompt": "Si $\\frac{10^5}{10^n} = 10^2$, ¿cuál es el valor de $n$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      }
    ],
    "explanation": "Igualamos exponentes: $5 - n = 2$, por lo que $n = 3$."
  },
  {
    "id": "coc-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{6a^4 b^3}{2a^3 b^3}$",
    "options": [
      {
        "latex": "3a",
        "correct": true
      },
      {
        "latex": "3ab",
        "correct": false
      },
      {
        "latex": "3a^7 b^6",
        "correct": false
      },
      {
        "latex": "4a",
        "correct": false
      }
    ],
    "explanation": "$6 \\div 2 = 3$, $a^{4-3} = a$ y $b^{3-3} = b^0 = 1$. Resultado: $3a$."
  },
  {
    "id": "coc-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^{3n+4}}{x^{n+1}}$",
    "options": [
      {
        "latex": "x^{4n+5}",
        "correct": false
      },
      {
        "latex": "x^{3n+3}",
        "correct": false
      },
      {
        "latex": "x^{2n+5}",
        "correct": false
      },
      {
        "latex": "x^{2n+3}",
        "correct": true
      }
    ],
    "explanation": "Restamos: $(3n+4) - (n+1) = 2n+3$."
  },
  {
    "id": "coc-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{3^{2x+5}}{3^{x+1}}$",
    "options": [
      {
        "latex": "1^{x+4}",
        "correct": false
      },
      {
        "latex": "3^{2x+4}",
        "correct": false
      },
      {
        "latex": "3^{3x+6}",
        "correct": false
      },
      {
        "latex": "3^{x+4}",
        "correct": true
      }
    ],
    "explanation": "Misma base 3: $(2x+5) - (x+1) = x+4$."
  },
  {
    "id": "coc-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{x^{a+2b}}{x^{a-b}}$",
    "options": [
      {
        "latex": "x^{2a+b}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "x^b",
        "correct": false
      },
      {
        "latex": "x^{3b}",
        "correct": true
      }
    ],
    "explanation": "Restamos exponentes: $(a+2b) - (a-b) = 3b$."
  },
  {
    "id": "coc-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{14x^{2m+1}y^{3n+2}}{7x^{m}y^{n}}$",
    "options": [
      {
        "latex": "7x^{m+1}y^{2n+2}",
        "correct": false
      },
      {
        "latex": "2x^{m}y^{2n}",
        "correct": false
      },
      {
        "latex": "2x^{3m+1}y^{4n+2}",
        "correct": false
      },
      {
        "latex": "2x^{m+1}y^{2n+2}",
        "correct": true
      }
    ],
    "explanation": "Dividimos $14/7=2$, $x^{(2m+1)-m}=x^{m+1}$, $y^{(3n+2)-n}=y^{2n+2}$."
  },
  {
    "id": "coc-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{e^{5x-2}}{e^{2x+3}}$",
    "options": [
      {
        "latex": "e^{7x+1}",
        "correct": false
      },
      {
        "latex": "e^{3x-1}",
        "correct": false
      },
      {
        "latex": "e^{3x+1}",
        "correct": false
      },
      {
        "latex": "e^{3x-5}",
        "correct": true
      }
    ],
    "explanation": "Base de Euler: $(5x-2) - (2x+3) = 3x-5$."
  },
  {
    "id": "coc-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{2^{4n+3}}{8^n}$",
    "options": [
      {
        "latex": "2^{3n+3}",
        "correct": false
      },
      {
        "latex": "1^{n+3}",
        "correct": false
      },
      {
        "latex": "2^{4n}",
        "correct": false
      },
      {
        "latex": "2^{n+3}",
        "correct": true
      }
    ],
    "explanation": "Como $8^n = (2^3)^n = 2^{3n}$, el cociente es $2^{(4n+3)-3n} = 2^{n+3}$."
  },
  {
    "id": "coc-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{a^{x^2-1}}{a^{x-1}}$",
    "options": [
      {
        "latex": "a^{x}",
        "correct": false
      },
      {
        "latex": "a^{x^2-x-2}",
        "correct": false
      },
      {
        "latex": "a^{x+1}",
        "correct": false
      },
      {
        "latex": "a^{x^2-x}",
        "correct": true
      }
    ],
    "explanation": "Restamos exponentes: $(x^2-1) - (x-1) = x^2 - x$."
  },
  {
    "id": "coc-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\frac{6^{2k+4}}{36^k}$",
    "options": [
      {
        "latex": "6^{k+4}",
        "correct": false
      },
      {
        "latex": "36^2",
        "correct": false
      },
      {
        "latex": "1^4",
        "correct": false
      },
      {
        "latex": "6^4",
        "correct": true
      }
    ],
    "explanation": "Como $36^k = (6^2)^k = 6^{2k}$, tenemos $6^{(2k+4)-2k} = 6^4$."
  }
]
};
