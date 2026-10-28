// data/algebra/exponentes/potencia-potencia.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "potencia-potencia",
  lawName: "Potencia de una potencia",
  lawFormula: "(a^m)^n = a^{m \\cdot n}",
  prerequisites: "Conocer el producto de potencias.",
  available: true,
  questions: [
  {
    "id": "potpot-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $(2^3)^2$",
    "options": [
      {
        "latex": "2^6",
        "correct": true
      },
      {
        "latex": "2^5",
        "correct": false
      },
      {
        "latex": "2^9",
        "correct": false
      },
      {
        "latex": "2^{32}",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $(2^3)^2 = 2^{3 \\cdot 2} = 2^6$."
  },
  {
    "id": "potpot-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $(x^2)^4$",
    "options": [
      {
        "latex": "x^8",
        "correct": true
      },
      {
        "latex": "x^6",
        "correct": false
      },
      {
        "latex": "x^{16}",
        "correct": false
      },
      {
        "latex": "x^2",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $2 \\cdot 4 = 8$, por lo que $x^8$."
  },
  {
    "id": "potpot-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $(a^5)^3$",
    "options": [
      {
        "latex": "a^{15}",
        "correct": true
      },
      {
        "latex": "a^8",
        "correct": false
      },
      {
        "latex": "a^{125}",
        "correct": false
      },
      {
        "latex": "a^2",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $5 \\cdot 3 = 15$, por lo que $a^{15}$."
  },
  {
    "id": "potpot-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $(y^4)^2$",
    "options": [
      {
        "latex": "y^8",
        "correct": true
      },
      {
        "latex": "y^6",
        "correct": false
      },
      {
        "latex": "y^{16}",
        "correct": false
      },
      {
        "latex": "y^2",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $4 \\cdot 2 = 8$, por lo que $y^8$."
  },
  {
    "id": "potpot-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $(z^2)^5$",
    "options": [
      {
        "latex": "z^{10}",
        "correct": true
      },
      {
        "latex": "z^7",
        "correct": false
      },
      {
        "latex": "z^{32}",
        "correct": false
      },
      {
        "latex": "z^2",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $2 \\cdot 5 = 10$, por lo que $z^{10}$."
  },
  {
    "id": "potpot-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $(x^4)^5$",
    "options": [
      {
        "latex": "x^9",
        "correct": false
      },
      {
        "latex": "x^{45}",
        "correct": false
      },
      {
        "latex": "5x^4",
        "correct": false
      },
      {
        "latex": "x^{20}",
        "correct": true
      }
    ],
    "explanation": "Se multiplican los exponentes: $4 \\cdot 5 = 20$."
  },
  {
    "id": "potpot-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $(y^6)^3$",
    "options": [
      {
        "latex": "y^9",
        "correct": false
      },
      {
        "latex": "y^{63}",
        "correct": false
      },
      {
        "latex": "3y^6",
        "correct": false
      },
      {
        "latex": "y^{18}",
        "correct": true
      }
    ],
    "explanation": "$6 \\cdot 3 = 18$."
  },
  {
    "id": "potpot-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $(2^3)^4$",
    "options": [
      {
        "latex": "2^7",
        "correct": false
      },
      {
        "latex": "2^{34}",
        "correct": false
      },
      {
        "latex": "8^4",
        "correct": false
      },
      {
        "latex": "2^{12}",
        "correct": true
      }
    ],
    "explanation": "$3 \\cdot 4 = 12$."
  },
  {
    "id": "potpot-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $(a^7)^2$",
    "options": [
      {
        "latex": "a^9",
        "correct": false
      },
      {
        "latex": "2a^7",
        "correct": false
      },
      {
        "latex": "a^{49}",
        "correct": false
      },
      {
        "latex": "a^{14}",
        "correct": true
      }
    ],
    "explanation": "$7 \\cdot 2 = 14$."
  },
  {
    "id": "potpot-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $(m^5)^5$",
    "options": [
      {
        "latex": "m^{10}",
        "correct": false
      },
      {
        "latex": "m^{55}",
        "correct": false
      },
      {
        "latex": "5m^5",
        "correct": false
      },
      {
        "latex": "m^{25}",
        "correct": true
      }
    ],
    "explanation": "$5 \\cdot 5 = 25$."
  },
  {
    "id": "potpot-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $(3^2)^5$",
    "options": [
      {
        "latex": "9^5",
        "correct": false
      },
      {
        "latex": "3^{25}",
        "correct": false
      },
      {
        "latex": "3^7",
        "correct": false
      },
      {
        "latex": "3^{10}",
        "correct": true
      }
    ],
    "explanation": "$2 \\cdot 5 = 10$."
  },
  {
    "id": "potpot-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $(b^8)^3$",
    "options": [
      {
        "latex": "b^{11}",
        "correct": false
      },
      {
        "latex": "b^{83}",
        "correct": false
      },
      {
        "latex": "3b^8",
        "correct": false
      },
      {
        "latex": "b^{24}",
        "correct": true
      }
    ],
    "explanation": "$8 \\cdot 3 = 24$."
  },
  {
    "id": "potpot-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $(z^{10})^4$",
    "options": [
      {
        "latex": "z^{14}",
        "correct": false
      },
      {
        "latex": "z^{104}",
        "correct": false
      },
      {
        "latex": "4z^{10}",
        "correct": false
      },
      {
        "latex": "z^{40}",
        "correct": true
      }
    ],
    "explanation": "$10 \\cdot 4 = 40$."
  },
  {
    "id": "potpot-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $3(x^2)^4$",
    "options": [
      {
        "latex": "3x^8",
        "correct": true
      },
      {
        "latex": "3x^6",
        "correct": false
      },
      {
        "latex": "3x^{16}",
        "correct": false
      },
      {
        "latex": "12x^8",
        "correct": false
      }
    ],
    "explanation": "El coeficiente 3 queda fuera: $3 \\cdot x^{2 \\cdot 4} = 3x^8$. El 4 no multiplica al 3."
  },
  {
    "id": "potpot-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica y evalúa: $(2^2)^3$",
    "options": [
      {
        "latex": "64",
        "correct": true
      },
      {
        "latex": "32",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "128",
        "correct": false
      }
    ],
    "explanation": "$(2^2)^3 = 2^{2 \\cdot 3} = 2^6 = 64$."
  },
  {
    "id": "potpot-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $(m^3)^4$",
    "options": [
      {
        "latex": "m^{12}",
        "correct": true
      },
      {
        "latex": "m^7",
        "correct": false
      },
      {
        "latex": "m^{64}",
        "correct": false
      },
      {
        "latex": "m^3",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $3 \\cdot 4 = 12$, por lo que $m^{12}$."
  },
  {
    "id": "potpot-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $-(x^2)^3$",
    "options": [
      {
        "latex": "-x^6",
        "correct": true
      },
      {
        "latex": "x^6",
        "correct": false
      },
      {
        "latex": "-x^5",
        "correct": false
      },
      {
        "latex": "x^5",
        "correct": false
      }
    ],
    "explanation": "$(x^2)^3 = x^6$ y el signo negativo de afuera se conserva: $-x^6$."
  },
  {
    "id": "potpot-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3^2)^4$",
    "options": [
      {
        "latex": "3^8",
        "correct": true
      },
      {
        "latex": "3^6",
        "correct": false
      },
      {
        "latex": "3^{16}",
        "correct": false
      },
      {
        "latex": "3^2",
        "correct": false
      }
    ],
    "explanation": "Se multiplican los exponentes: $2 \\cdot 4 = 8$, por lo que $3^8$."
  },
  {
    "id": "potpot-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $((x^3)^2)^4$",
    "options": [
      {
        "latex": "x^9",
        "correct": false
      },
      {
        "latex": "x^{14}",
        "correct": false
      },
      {
        "latex": "x^{20}",
        "correct": false
      },
      {
        "latex": "x^{24}",
        "correct": true
      }
    ],
    "explanation": "Multiplicación en cadena de exponentes: $3 \\cdot 2 \\cdot 4 = 24$."
  },
  {
    "id": "potpot-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $(a^{2k})^4$",
    "options": [
      {
        "latex": "a^{16k}",
        "correct": false
      },
      {
        "latex": "a^{8k^2}",
        "correct": false
      },
      {
        "latex": "a^{2k+4}",
        "correct": false
      },
      {
        "latex": "a^{8k}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos: $2k \\cdot 4 = 8k$."
  },
  {
    "id": "potpot-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $((y^4)^3)^2$",
    "options": [
      {
        "latex": "y^{14}",
        "correct": false
      },
      {
        "latex": "y^{432}",
        "correct": false
      },
      {
        "latex": "y^9",
        "correct": false
      },
      {
        "latex": "y^{24}",
        "correct": true
      }
    ],
    "explanation": "$4 \\cdot 3 \\cdot 2 = 24$."
  },
  {
    "id": "potpot-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $(m^{3a})^5$",
    "options": [
      {
        "latex": "m^{3a+5}",
        "correct": false
      },
      {
        "latex": "m^{15a^2}",
        "correct": false
      },
      {
        "latex": "m^{8a}",
        "correct": false
      },
      {
        "latex": "m^{15a}",
        "correct": true
      }
    ],
    "explanation": "$3a \\cdot 5 = 15a$."
  },
  {
    "id": "potpot-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $(x^{-3})^4$",
    "options": [
      {
        "latex": "x^1",
        "correct": false
      },
      {
        "latex": "x^{12}",
        "correct": false
      },
      {
        "latex": "x^{-7}",
        "correct": false
      },
      {
        "latex": "x^{-12}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos con signo: $(-3) \\cdot 4 = -12$."
  },
  {
    "id": "potpot-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $((u^2)^5)^3$",
    "options": [
      {
        "latex": "u^{15}",
        "correct": false
      },
      {
        "latex": "u^{25}",
        "correct": false
      },
      {
        "latex": "u^{10}",
        "correct": false
      },
      {
        "latex": "u^{30}",
        "correct": true
      }
    ],
    "explanation": "$2 \\cdot 5 \\cdot 3 = 30$."
  },
  {
    "id": "potpot-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $(b^{-4})^{-2}$",
    "options": [
      {
        "latex": "b^{-6}",
        "correct": false
      },
      {
        "latex": "b^{-2}",
        "correct": false
      },
      {
        "latex": "b^{-8}",
        "correct": false
      },
      {
        "latex": "b^8",
        "correct": true
      }
    ],
    "explanation": "$(-4) \\cdot (-2) = +8$."
  },
  {
    "id": "potpot-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $((z^3)^{-2})^5$",
    "options": [
      {
        "latex": "z^{30}",
        "correct": false
      },
      {
        "latex": "z^{-10}",
        "correct": false
      },
      {
        "latex": "z^0",
        "correct": false
      },
      {
        "latex": "z^{-30}",
        "correct": true
      }
    ],
    "explanation": "$3 \\cdot (-2) \\cdot 5 = -30$."
  },
  {
    "id": "potpot-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $((x^2)^3)^2$",
    "options": [
      {
        "latex": "x^{12}",
        "correct": true
      },
      {
        "latex": "x^7",
        "correct": false
      },
      {
        "latex": "x^{36}",
        "correct": false
      },
      {
        "latex": "x^{24}",
        "correct": false
      }
    ],
    "explanation": "De adentro hacia afuera: $(x^2)^3 = x^6$, luego $(x^6)^2 = x^{12}$. O multiplica $2 \\cdot 3 \\cdot 2 = 12$."
  },
  {
    "id": "potpot-h-02",
    "difficulty": "hard",
    "prompt": "Si $(2^x)^2 = 64$, ¿cuál es el valor de $x$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      }
    ],
    "explanation": "$(2^x)^2 = 2^{2x}$. Como $64 = 2^6$, entonces $2x = 6$, luego $x = 3$."
  },
  {
    "id": "potpot-h-03",
    "difficulty": "hard",
    "prompt": "Si $(x^3)^n = x^{15}$, ¿cuál es el valor de $n$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      }
    ],
    "explanation": "$(x^3)^n = x^{3n}$. Igualamos: $3n = 15$, por lo que $n = 5$."
  },
  {
    "id": "potpot-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^2)^3 \\cdot (a^2)^2$",
    "options": [
      {
        "latex": "a^{10}",
        "correct": true
      },
      {
        "latex": "a^7",
        "correct": false
      },
      {
        "latex": "a^{24}",
        "correct": false
      },
      {
        "latex": "a^{12}",
        "correct": false
      }
    ],
    "explanation": "$(a^2)^3 = a^6$ y $(a^2)^2 = a^4$. Luego $a^6 \\cdot a^4 = a^{6+4} = a^{10}$."
  },
  {
    "id": "potpot-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica y evalúa: $(10^2)^2$",
    "options": [
      {
        "latex": "10000",
        "correct": true
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "40",
        "correct": false
      },
      {
        "latex": "1000",
        "correct": false
      }
    ],
    "explanation": "$(10^2)^2 = 10^{2 \\cdot 2} = 10^4 = 10000$."
  },
  {
    "id": "potpot-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^{n-2})^{n+2}$",
    "options": [
      {
        "latex": "x^{2n}",
        "correct": false
      },
      {
        "latex": "x^{n^2+4}",
        "correct": false
      },
      {
        "latex": "x^{n^2-2n-4}",
        "correct": false
      },
      {
        "latex": "x^{n^2-4}",
        "correct": true
      }
    ],
    "explanation": "Diferencia de cuadrados en el exponente: $(n-2)(n+2) = n^2-4$."
  },
  {
    "id": "potpot-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^{x+y})^{x-y}$",
    "options": [
      {
        "latex": "a^{x^2+y^2}",
        "correct": false
      },
      {
        "latex": "a^{2y}",
        "correct": false
      },
      {
        "latex": "a^{2x}",
        "correct": false
      },
      {
        "latex": "a^{x^2-y^2}",
        "correct": true
      }
    ],
    "explanation": "Producto de binomios conjugados: $(x+y)(x-y) = x^2-y^2$."
  },
  {
    "id": "potpot-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $((2^x)^y)^z$",
    "options": [
      {
        "latex": "2^{x+y+z}",
        "correct": false
      },
      {
        "latex": "8^{xyz}",
        "correct": false
      },
      {
        "latex": "2^{x^{yz}}",
        "correct": false
      },
      {
        "latex": "2^{xyz}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos las tres potencias: $x \\cdot y \\cdot z = xyz$."
  },
  {
    "id": "potpot-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^{2n+1})^3$",
    "options": [
      {
        "latex": "x^{2n+4}",
        "correct": false
      },
      {
        "latex": "x^{6n+1}",
        "correct": false
      },
      {
        "latex": "x^{8n+3}",
        "correct": false
      },
      {
        "latex": "x^{6n+3}",
        "correct": true
      }
    ],
    "explanation": "Distribuimos el 3: $3(2n+1) = 6n+3$."
  },
  {
    "id": "potpot-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $(y^{a/2})^4$",
    "options": [
      {
        "latex": "y^{a/8}",
        "correct": false
      },
      {
        "latex": "y^{a+4}",
        "correct": false
      },
      {
        "latex": "y^{4a}",
        "correct": false
      },
      {
        "latex": "y^{2a}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos: $\\frac{a}{2} \\cdot 4 = 2a$."
  },
  {
    "id": "potpot-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $(m^{k+1})^{k-1}$",
    "options": [
      {
        "latex": "m^{2k}",
        "correct": false
      },
      {
        "latex": "m^{k^2-2k-1}",
        "correct": false
      },
      {
        "latex": "m^{k^2+1}",
        "correct": false
      },
      {
        "latex": "m^{k^2-1}",
        "correct": true
      }
    ],
    "explanation": "$(k+1)(k-1) = k^2-1$."
  },
  {
    "id": "potpot-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $((x^{a-b})^{a+b}) \\cdot x^{b^2}$",
    "options": [
      {
        "latex": "x^{a^2+2b^2}",
        "correct": false
      },
      {
        "latex": "x^a",
        "correct": false
      },
      {
        "latex": "x^{a^2-2b^2}",
        "correct": false
      },
      {
        "latex": "x^{a^2}",
        "correct": true
      }
    ],
    "explanation": "Primero $(a-b)(a+b) = a^2-b^2$; luego sumamos: $a^2-b^2 + b^2 = a^2$."
  },
  {
    "id": "potpot-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $(e^{3x-1})^2$",
    "options": [
      {
        "latex": "e^{9x^2+1}",
        "correct": false
      },
      {
        "latex": "e^{6x-1}",
        "correct": false
      },
      {
        "latex": "e^{3x+1}",
        "correct": false
      },
      {
        "latex": "e^{6x-2}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos por 2: $2(3x-1) = 6x-2$."
  }
]
};
