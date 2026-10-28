// data/algebra/exponentes/producto.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "producto",
  lawName: "Producto de potencias de igual base",
  lawFormula: "a^m \\cdot a^n = a^{m+n}",
  prerequisites: "Conocer potencias y exponentes enteros.",
  available: true,
  questions: [
  {
    "id": "prod-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $3^2 \\cdot 3^4$",
    "options": [
      {
        "latex": "3^6",
        "correct": true
      },
      {
        "latex": "3^8",
        "correct": false
      },
      {
        "latex": "9^6",
        "correct": false
      },
      {
        "latex": "3^2",
        "correct": false
      }
    ],
    "explanation": "Misma base, se suman los exponentes: $3^{2+4} = 3^6$. Multiplicar los exponentes ($3^8$) o las bases ($9^6$) es un error común."
  },
  {
    "id": "prod-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^5 \\cdot x^3$",
    "options": [
      {
        "latex": "x^8",
        "correct": true
      },
      {
        "latex": "x^{15}",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      },
      {
        "latex": "2x^8",
        "correct": false
      }
    ],
    "explanation": "Se suman los exponentes: $x^{5+3} = x^8$. No se multiplican ($x^{15}$) ni se suman las bases."
  },
  {
    "id": "prod-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $2^3 \\cdot 2^2$",
    "options": [
      {
        "latex": "2^5",
        "correct": true
      },
      {
        "latex": "2^6",
        "correct": false
      },
      {
        "latex": "4^5",
        "correct": false
      },
      {
        "latex": "2^1",
        "correct": false
      }
    ],
    "explanation": "Exponentes: $3 + 2 = 5$, por lo que $2^3 \\cdot 2^2 = 2^5$."
  },
  {
    "id": "prod-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $a^4 \\cdot a$",
    "options": [
      {
        "latex": "a^5",
        "correct": true
      },
      {
        "latex": "a^4",
        "correct": false
      },
      {
        "latex": "a^3",
        "correct": false
      },
      {
        "latex": "2a^4",
        "correct": false
      }
    ],
    "explanation": "Recuerda que $a = a^1$. Entonces $a^4 \\cdot a^1 = a^{4+1} = a^5$."
  },
  {
    "id": "prod-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $5^2 \\cdot 5^3$",
    "options": [
      {
        "latex": "5^5",
        "correct": true
      },
      {
        "latex": "5^6",
        "correct": false
      },
      {
        "latex": "25^5",
        "correct": false
      },
      {
        "latex": "10^5",
        "correct": false
      }
    ],
    "explanation": "Misma base 5: se suman exponentes, $2 + 3 = 5$, por lo que $5^5$."
  },
  {
    "id": "prod-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $x^4 \\cdot x^6$",
    "options": [
      {
        "latex": "x^2",
        "correct": false
      },
      {
        "latex": "2x^{10}",
        "correct": false
      },
      {
        "latex": "x^{24}",
        "correct": false
      },
      {
        "latex": "x^{10}",
        "correct": true
      }
    ],
    "explanation": "Se suman los exponentes: $4+6=10$."
  },
  {
    "id": "prod-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $y^7 \\cdot y^2$",
    "options": [
      {
        "latex": "y^{14}",
        "correct": false
      },
      {
        "latex": "2y^9",
        "correct": false
      },
      {
        "latex": "y^5",
        "correct": false
      },
      {
        "latex": "y^9",
        "correct": true
      }
    ],
    "explanation": "Se suman los exponentes: $7+2=9$."
  },
  {
    "id": "prod-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $4^2 \\cdot 4^3$",
    "options": [
      {
        "latex": "4^6",
        "correct": false
      },
      {
        "latex": "16^5",
        "correct": false
      },
      {
        "latex": "4^1",
        "correct": false
      },
      {
        "latex": "4^5",
        "correct": true
      }
    ],
    "explanation": "Misma base, se suman exponentes: $2+3=5$."
  },
  {
    "id": "prod-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $b^3 \\cdot b^8$",
    "options": [
      {
        "latex": "b^5",
        "correct": false
      },
      {
        "latex": "2b^{11}",
        "correct": false
      },
      {
        "latex": "b^{24}",
        "correct": false
      },
      {
        "latex": "b^{11}",
        "correct": true
      }
    ],
    "explanation": "Se suman exponentes: $3+8=11$."
  },
  {
    "id": "prod-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $7^3 \\cdot 7^4$",
    "options": [
      {
        "latex": "49^7",
        "correct": false
      },
      {
        "latex": "7^1",
        "correct": false
      },
      {
        "latex": "7^{12}",
        "correct": false
      },
      {
        "latex": "7^7",
        "correct": true
      }
    ],
    "explanation": "Se suman exponentes: $3+4=7$."
  },
  {
    "id": "prod-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $m^9 \\cdot m$",
    "options": [
      {
        "latex": "m^9",
        "correct": false
      },
      {
        "latex": "m^{18}",
        "correct": false
      },
      {
        "latex": "2m^{10}",
        "correct": false
      },
      {
        "latex": "m^{10}",
        "correct": true
      }
    ],
    "explanation": "Recuerda que $m = m^1$, entonces $9+1=10$."
  },
  {
    "id": "prod-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $6^2 \\cdot 6^5$",
    "options": [
      {
        "latex": "6^{10}",
        "correct": false
      },
      {
        "latex": "36^7",
        "correct": false
      },
      {
        "latex": "6^3",
        "correct": false
      },
      {
        "latex": "6^7",
        "correct": true
      }
    ],
    "explanation": "Se suman exponentes: $2+5=7$."
  },
  {
    "id": "prod-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $z^6 \\cdot z^6$",
    "options": [
      {
        "latex": "z^{36}",
        "correct": false
      },
      {
        "latex": "2z^{12}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "z^{12}",
        "correct": true
      }
    ],
    "explanation": "Se suman exponentes: $6+6=12$."
  },
  {
    "id": "prod-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $2x^3 \\cdot 5x^4$",
    "options": [
      {
        "latex": "10x^7",
        "correct": true
      },
      {
        "latex": "7x^7",
        "correct": false
      },
      {
        "latex": "10x^{12}",
        "correct": false
      },
      {
        "latex": "7x^{12}",
        "correct": false
      }
    ],
    "explanation": "Multiplica coeficientes ($2 \\cdot 5 = 10$) y suma exponentes de $x$ ($3 + 4 = 7$): $10x^7$."
  },
  {
    "id": "prod-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-a)^2 \\cdot (-a)^5$",
    "options": [
      {
        "latex": "(-a)^7",
        "correct": true
      },
      {
        "latex": "a^7",
        "correct": false
      },
      {
        "latex": "(-a)^{10}",
        "correct": false
      },
      {
        "latex": "a^{10}",
        "correct": false
      }
    ],
    "explanation": "La base es $(-a)$ en ambos factores: $(-a)^{2+5} = (-a)^7$. El signo negativo forma parte de la base."
  },
  {
    "id": "prod-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $m^2 n^3 \\cdot m^4 n$",
    "options": [
      {
        "latex": "m^6 n^4",
        "correct": true
      },
      {
        "latex": "m^8 n^4",
        "correct": false
      },
      {
        "latex": "m^6 n^3",
        "correct": false
      },
      {
        "latex": "m^8 n^3",
        "correct": false
      }
    ],
    "explanation": "Suma exponentes por base: $m^{2+4} = m^6$ y $n^{3+1} = n^4$. Resultado: $m^6 n^4$."
  },
  {
    "id": "prod-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $3x^2 y \\cdot 2x^3 y^2$",
    "options": [
      {
        "latex": "6x^5 y^3",
        "correct": true
      },
      {
        "latex": "5x^5 y^3",
        "correct": false
      },
      {
        "latex": "6x^6 y^2",
        "correct": false
      },
      {
        "latex": "6x^5 y^2",
        "correct": false
      }
    ],
    "explanation": "Coeficientes: $3 \\cdot 2 = 6$. Exponentes: $x^{2+3} = x^5$, $y^{1+2} = y^3$. Resultado: $6x^5 y^3$."
  },
  {
    "id": "prod-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-2x^3)(3x^2)$",
    "options": [
      {
        "latex": "-6x^5",
        "correct": true
      },
      {
        "latex": "6x^5",
        "correct": false
      },
      {
        "latex": "-6x^6",
        "correct": false
      },
      {
        "latex": "-5x^5",
        "correct": false
      }
    ],
    "explanation": "$(-2)(3) = -6$ y $x^{3+2} = x^5$. El signo negativo se conserva: $-6x^5$."
  },
  {
    "id": "prod-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3x^4)(5x^7)$",
    "options": [
      {
        "latex": "8x^{11}",
        "correct": false
      },
      {
        "latex": "15x^3",
        "correct": false
      },
      {
        "latex": "15x^{28}",
        "correct": false
      },
      {
        "latex": "15x^{11}",
        "correct": true
      }
    ],
    "explanation": "Se multiplican coeficientes ($3 \\cdot 5 = 15$) y se suman exponentes ($4+7=11$)."
  },
  {
    "id": "prod-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $(2a^3b^2)(4a^5b)$",
    "options": [
      {
        "latex": "8a^{15}b^2",
        "correct": false
      },
      {
        "latex": "6a^8b^3",
        "correct": false
      },
      {
        "latex": "8a^8b^2",
        "correct": false
      },
      {
        "latex": "8a^8b^3",
        "correct": true
      }
    ],
    "explanation": "Coeficientes: $2 \\cdot 4 = 8$; exponentes: $a^{3+5}=a^8$, $b^{2+1}=b^3$."
  },
  {
    "id": "prod-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-3x^2)(6x^5)$",
    "options": [
      {
        "latex": "18x^7",
        "correct": false
      },
      {
        "latex": "3x^7",
        "correct": false
      },
      {
        "latex": "-18x^{10}",
        "correct": false
      },
      {
        "latex": "-18x^7",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos: $(-3)(6)=-18$; exponentes: $2+5=7$."
  },
  {
    "id": "prod-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $(x^2y^4)(x^5y^3)$",
    "options": [
      {
        "latex": "x^{10}y^{12}",
        "correct": false
      },
      {
        "latex": "2x^7y^7",
        "correct": false
      },
      {
        "latex": "x^3y",
        "correct": false
      },
      {
        "latex": "x^7y^7",
        "correct": true
      }
    ],
    "explanation": "Sumamos exponentes por variable: $x^{2+5} = x^7$, $y^{4+3} = y^7$."
  },
  {
    "id": "prod-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-4a^4)(-2a^6)$",
    "options": [
      {
        "latex": "8a^{24}",
        "correct": false
      },
      {
        "latex": "-6a^{10}",
        "correct": false
      },
      {
        "latex": "-8a^{10}",
        "correct": false
      },
      {
        "latex": "8a^{10}",
        "correct": true
      }
    ],
    "explanation": "Signos $(-)(-) = +$, $4 \\cdot 2 = 8$, exponentes: $4+6=10$."
  },
  {
    "id": "prod-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $(5u^3v^2)(2u^2v^5)$",
    "options": [
      {
        "latex": "10u^6v^{10}",
        "correct": false
      },
      {
        "latex": "10u^5v^6",
        "correct": false
      },
      {
        "latex": "7u^5v^7",
        "correct": false
      },
      {
        "latex": "10u^5v^7",
        "correct": true
      }
    ],
    "explanation": "Multiplicación directa: $5 \\cdot 2 = 10$, $u^{3+2}=u^5$, $v^{2+5}=v^7$."
  },
  {
    "id": "prod-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $a^{2k} \\cdot a^{3k}$",
    "options": [
      {
        "latex": "a^{6k^2}",
        "correct": false
      },
      {
        "latex": "a^{6k}",
        "correct": false
      },
      {
        "latex": "2a^{5k}",
        "correct": false
      },
      {
        "latex": "a^{5k}",
        "correct": true
      }
    ],
    "explanation": "Misma base, se suman exponentes: $2k + 3k = 5k$."
  },
  {
    "id": "prod-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $(7x^3y)(2x^2y^4)$",
    "options": [
      {
        "latex": "9x^5y^5",
        "correct": false
      },
      {
        "latex": "14x^5y^4",
        "correct": false
      },
      {
        "latex": "14x^6y^4",
        "correct": false
      },
      {
        "latex": "14x^5y^5",
        "correct": true
      }
    ],
    "explanation": "$7 \\cdot 2 = 14$, $x^{3+2}=x^5$, $y^{1+4}=y^5$."
  },
  {
    "id": "prod-h-01",
    "difficulty": "hard",
    "prompt": "Si $3^x \\cdot 3^{x+1} = 243$, ¿cuál es el valor de $x$?",
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
        "latex": "5",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      }
    ],
    "explanation": "Suma exponentes: $3^{x+x+1} = 3^{2x+1}$. Como $243 = 3^5$, entonces $2x+1 = 5$, luego $x = 2$."
  },
  {
    "id": "prod-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica y evalúa: $2^3 \\cdot 2^4$",
    "options": [
      {
        "latex": "128",
        "correct": true
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "2^{12}",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      }
    ],
    "explanation": "$2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$. Evalúa después de aplicar la ley."
  },
  {
    "id": "prod-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica: $x^2 \\cdot x^3 \\cdot x$",
    "options": [
      {
        "latex": "x^6",
        "correct": true
      },
      {
        "latex": "x^5",
        "correct": false
      },
      {
        "latex": "x^7",
        "correct": false
      },
      {
        "latex": "3x^6",
        "correct": false
      }
    ],
    "explanation": "Tres factores con la misma base: $x^{2+3+1} = x^6$ (recuerda $x = x^1$)."
  },
  {
    "id": "prod-h-04",
    "difficulty": "hard",
    "prompt": "Si $5^2 \\cdot 5^n = 5^7$, ¿cuál es el valor de $n$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      }
    ],
    "explanation": "Igualamos exponentes: $2 + n = 7$, por lo que $n = 5$."
  },
  {
    "id": "prod-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^2 b)(a^3 b^2)(a b^3)$",
    "options": [
      {
        "latex": "a^6 b^6",
        "correct": true
      },
      {
        "latex": "a^6 b^5",
        "correct": false
      },
      {
        "latex": "a^5 b^6",
        "correct": false
      },
      {
        "latex": "a^6 b^7",
        "correct": false
      }
    ],
    "explanation": "Para $a$: $2+3+1 = 6$. Para $b$: $1+2+3 = 6$. Resultado: $a^6 b^6$."
  },
  {
    "id": "prod-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $x^{n+2} \\cdot x^{2n-1}$",
    "options": [
      {
        "latex": "x^{2n^2+3n-2}",
        "correct": false
      },
      {
        "latex": "x^{n+1}",
        "correct": false
      },
      {
        "latex": "x^{3n-1}",
        "correct": false
      },
      {
        "latex": "x^{3n+1}",
        "correct": true
      }
    ],
    "explanation": "Se suman exponentes algebraicos: $(n+2) + (2n-1) = 3n+1$."
  },
  {
    "id": "prod-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $2^{x+3} \\cdot 2^{2x-1}$",
    "options": [
      {
        "latex": "4^{3x+2}",
        "correct": false
      },
      {
        "latex": "2^{2x^2+5x-3}",
        "correct": false
      },
      {
        "latex": "2^{3x+4}",
        "correct": false
      },
      {
        "latex": "2^{3x+2}",
        "correct": true
      }
    ],
    "explanation": "Misma base 2: $(x+3) + (2x-1) = 3x+2$."
  },
  {
    "id": "prod-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $(3a^{m-1})(2a^{2m+3})$",
    "options": [
      {
        "latex": "5a^{3m+2}",
        "correct": false
      },
      {
        "latex": "6a^{3m-2}",
        "correct": false
      },
      {
        "latex": "6a^{2m^2+m-3}",
        "correct": false
      },
      {
        "latex": "6a^{3m+2}",
        "correct": true
      }
    ],
    "explanation": "Coeficientes: $3 \\cdot 2 = 6$; exponentes: $(m-1) + (2m+3) = 3m+2$."
  },
  {
    "id": "prod-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $x^{a+b} \\cdot x^{a-b}$",
    "options": [
      {
        "latex": "x^{a^2-b^2}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "x^{2b}",
        "correct": false
      },
      {
        "latex": "x^{2a}",
        "correct": true
      }
    ],
    "explanation": "Sumamos los exponentes: $(a+b) + (a-b) = 2a$."
  },
  {
    "id": "prod-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $(-2x^a y^{b+1})(5x^{2a} y^{2b})$",
    "options": [
      {
        "latex": "10x^{3a} y^{3b+1}",
        "correct": false
      },
      {
        "latex": "-10x^{2a^2} y^{2b^2+2b}",
        "correct": false
      },
      {
        "latex": "-7x^{3a} y^{3b+1}",
        "correct": false
      },
      {
        "latex": "-10x^{3a} y^{3b+1}",
        "correct": true
      }
    ],
    "explanation": "$-2 \\cdot 5 = -10$, exponentes: $a+2a=3a$, $(b+1)+2b = 3b+1$."
  },
  {
    "id": "prod-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $e^{2x+1} \\cdot e^{3-x}$",
    "options": [
      {
        "latex": "e^{6x+3}",
        "correct": false
      },
      {
        "latex": "e^{4x+4}",
        "correct": false
      },
      {
        "latex": "e^{x-2}",
        "correct": false
      },
      {
        "latex": "e^{x+4}",
        "correct": true
      }
    ],
    "explanation": "Base de Euler: $(2x+1) + (3-x) = x+4$."
  },
  {
    "id": "prod-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^x b^y)(a^{2x} b^{3y})(a^{-x} b^{-y})$",
    "options": [
      {
        "latex": "a^{2x} b^{2y}",
        "correct": false
      },
      {
        "latex": "a^x b^{2y}",
        "correct": false
      },
      {
        "latex": "a^{3x} b^{4y}",
        "correct": false
      },
      {
        "latex": "a^{2x} b^{3y}",
        "correct": true
      }
    ],
    "explanation": "Sumamos por base: $a^{x+2x-x} = a^{2x}$, $b^{y+3y-y} = b^{3y}$."
  },
  {
    "id": "prod-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $5^{2n+1} \\cdot 25^n$",
    "options": [
      {
        "latex": "125^{3n+1}",
        "correct": false
      },
      {
        "latex": "5^{2n^2+n}",
        "correct": false
      },
      {
        "latex": "5^{3n+1}",
        "correct": false
      },
      {
        "latex": "5^{4n+1}",
        "correct": true
      }
    ],
    "explanation": "Como $25^n = (5^2)^n = 5^{2n}$, sumamos exponentes: $2n+1 + 2n = 4n+1$."
  }
]
};
