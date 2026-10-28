// data/algebra/exponentes/potencia-producto.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "potencia-producto",
  lawName: "Potencia de un producto",
  lawFormula: "(a \\cdot b)^n = a^n \\cdot b^n",
  prerequisites: "Conocer el producto de potencias.",
  available: true,
  questions: [
  {
    "id": "potpro-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $(ab)^2$",
    "options": [
      {
        "latex": "a^2 b^2",
        "correct": true
      },
      {
        "latex": "a^2 b",
        "correct": false
      },
      {
        "latex": "ab^2",
        "correct": false
      },
      {
        "latex": "a^2 + b^2",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte a cada factor: $(ab)^2 = a^2 b^2$. No se distribuye sobre una suma."
  },
  {
    "id": "potpro-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $(xy)^3$",
    "options": [
      {
        "latex": "x^3 y^3",
        "correct": true
      },
      {
        "latex": "x^3 y",
        "correct": false
      },
      {
        "latex": "xy^3",
        "correct": false
      },
      {
        "latex": "x^3 + y^3",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte: $(xy)^3 = x^3 y^3$."
  },
  {
    "id": "potpro-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica: $(2x)^2$",
    "options": [
      {
        "latex": "4x^2",
        "correct": true
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "4x",
        "correct": false
      },
      {
        "latex": "2x",
        "correct": false
      }
    ],
    "explanation": "Eleva ambos factores al cuadrado: $2^2 \\cdot x^2 = 4x^2$."
  },
  {
    "id": "potpro-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $(3y)^2$",
    "options": [
      {
        "latex": "9y^2",
        "correct": true
      },
      {
        "latex": "6y^2",
        "correct": false
      },
      {
        "latex": "3y^2",
        "correct": false
      },
      {
        "latex": "9y",
        "correct": false
      }
    ],
    "explanation": "$3^2 \\cdot y^2 = 9y^2$. El 3 también se eleva al cuadrado."
  },
  {
    "id": "potpro-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $(mn)^4$",
    "options": [
      {
        "latex": "m^4 n^4",
        "correct": true
      },
      {
        "latex": "m^4 n",
        "correct": false
      },
      {
        "latex": "mn^4",
        "correct": false
      },
      {
        "latex": "4mn",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte: $(mn)^4 = m^4 n^4$."
  },
  {
    "id": "potpro-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $(xy)^6$",
    "options": [
      {
        "latex": "xy^6",
        "correct": false
      },
      {
        "latex": "x^6y^6",
        "correct": true
      },
      {
        "latex": "x^6y",
        "correct": false
      },
      {
        "latex": "6xy",
        "correct": false
      }
    ],
    "explanation": "La potencia se distribuye a cada factor: $x^6y^6$."
  },
  {
    "id": "potpro-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $(ab)^7$",
    "options": [
      {
        "latex": "ab^7",
        "correct": false
      },
      {
        "latex": "7ab",
        "correct": false
      },
      {
        "latex": "a^7b",
        "correct": false
      },
      {
        "latex": "a^7b^7",
        "correct": true
      }
    ],
    "explanation": "Se distribuye: $a^7b^7$."
  },
  {
    "id": "potpro-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $(2x)^4$",
    "options": [
      {
        "latex": "16x",
        "correct": false
      },
      {
        "latex": "16x^4",
        "correct": true
      },
      {
        "latex": "8x^4",
        "correct": false
      },
      {
        "latex": "2x^4",
        "correct": false
      }
    ],
    "explanation": "$2^4 x^4 = 16x^4$."
  },
  {
    "id": "potpro-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $(3y)^3$",
    "options": [
      {
        "latex": "3y^3",
        "correct": false
      },
      {
        "latex": "27y^3",
        "correct": true
      },
      {
        "latex": "27y",
        "correct": false
      },
      {
        "latex": "9y^3",
        "correct": false
      }
    ],
    "explanation": "$3^3 y^3 = 27y^3$."
  },
  {
    "id": "potpro-f-10",
    "difficulty": "easy",
    "prompt": "Simplifica: $(uv)^8$",
    "options": [
      {
        "latex": "u^8v",
        "correct": false
      },
      {
        "latex": "8uv",
        "correct": false
      },
      {
        "latex": "uv^8",
        "correct": false
      },
      {
        "latex": "u^8v^8",
        "correct": true
      }
    ],
    "explanation": "Distribución directa: $u^8v^8$."
  },
  {
    "id": "potpro-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $(5a)^2$",
    "options": [
      {
        "latex": "10a^2",
        "correct": false
      },
      {
        "latex": "25a^2",
        "correct": true
      },
      {
        "latex": "25a",
        "correct": false
      },
      {
        "latex": "5a^2",
        "correct": false
      }
    ],
    "explanation": "$5^2 a^2 = 25a^2$."
  },
  {
    "id": "potpro-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $(xyz)^4$",
    "options": [
      {
        "latex": "xyz^4",
        "correct": false
      },
      {
        "latex": "x^4y^4z^4",
        "correct": true
      },
      {
        "latex": "4xyz",
        "correct": false
      },
      {
        "latex": "x^4yz",
        "correct": false
      }
    ],
    "explanation": "Aplica a los tres factores: $x^4y^4z^4$."
  },
  {
    "id": "potpro-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $(4m)^3$",
    "options": [
      {
        "latex": "12m^3",
        "correct": false
      },
      {
        "latex": "64m^3",
        "correct": true
      },
      {
        "latex": "4m^3",
        "correct": false
      },
      {
        "latex": "64m",
        "correct": false
      }
    ],
    "explanation": "$4^3 m^3 = 64m^3$."
  },
  {
    "id": "potpro-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $(2xy)^3$",
    "options": [
      {
        "latex": "8x^3 y^3",
        "correct": true
      },
      {
        "latex": "6x^3 y^3",
        "correct": false
      },
      {
        "latex": "8x^3 y",
        "correct": false
      },
      {
        "latex": "2x^3 y^3",
        "correct": false
      }
    ],
    "explanation": "$2^3 = 8$, $x^3$ y $y^3$. Resultado: $8x^3 y^3$. No se multiplica el 2 por 3."
  },
  {
    "id": "potpro-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-2x)^2$",
    "options": [
      {
        "latex": "4x^2",
        "correct": true
      },
      {
        "latex": "-4x^2",
        "correct": false
      },
      {
        "latex": "2x^2",
        "correct": false
      },
      {
        "latex": "-2x^2",
        "correct": false
      }
    ],
    "explanation": "$(-2)^2 = 4$ (el signo negativo se anula al elevar al cuadrado) y $x^2$: $4x^2$."
  },
  {
    "id": "potpro-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3a^2 b)^2$",
    "options": [
      {
        "latex": "9a^4 b^2",
        "correct": true
      },
      {
        "latex": "6a^4 b^2",
        "correct": false
      },
      {
        "latex": "9a^4 b",
        "correct": false
      },
      {
        "latex": "3a^4 b^2",
        "correct": false
      }
    ],
    "explanation": "$3^2 = 9$, $(a^2)^2 = a^4$ y $b^2$. Resultado: $9a^4 b^2$."
  },
  {
    "id": "potpro-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $(5xy^2)^2$",
    "options": [
      {
        "latex": "25x^2 y^4",
        "correct": true
      },
      {
        "latex": "10x^2 y^4",
        "correct": false
      },
      {
        "latex": "25x^2 y^2",
        "correct": false
      },
      {
        "latex": "25x y^4",
        "correct": false
      }
    ],
    "explanation": "$5^2 = 25$, $x^2$ y $(y^2)^2 = y^4$. Resultado: $25x^2 y^4$."
  },
  {
    "id": "potpro-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-3x^2)^2$",
    "options": [
      {
        "latex": "9x^4",
        "correct": true
      },
      {
        "latex": "-9x^4",
        "correct": false
      },
      {
        "latex": "6x^4",
        "correct": false
      },
      {
        "latex": "-6x^4",
        "correct": false
      }
    ],
    "explanation": "$(-3)^2 = 9$ y $(x^2)^2 = x^4$. Resultado: $9x^4$."
  },
  {
    "id": "potpro-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $(2x^3y^2)^4$",
    "options": [
      {
        "latex": "8x^7y^6",
        "correct": false
      },
      {
        "latex": "16x^7y^6",
        "correct": false
      },
      {
        "latex": "2x^{12}y^8",
        "correct": false
      },
      {
        "latex": "16x^{12}y^8",
        "correct": true
      }
    ],
    "explanation": "$2^4 = 16$, $(x^3)^4 = x^{12}$, $(y^2)^4 = y^8$."
  },
  {
    "id": "potpro-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-3a^2b^4)^3$",
    "options": [
      {
        "latex": "-27a^5b^7",
        "correct": false
      },
      {
        "latex": "-27a^6b^{12}",
        "correct": true
      },
      {
        "latex": "-9a^5b^7",
        "correct": false
      },
      {
        "latex": "27a^6b^{12}",
        "correct": false
      }
    ],
    "explanation": "$(-3)^3 = -27$, exponentes multiplicados: $a^{2 \\cdot 3}=a^6$, $b^{4 \\cdot 3}=b^{12}$."
  },
  {
    "id": "potpro-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $(4u^4v^3)^2$",
    "options": [
      {
        "latex": "4u^8v^6",
        "correct": false
      },
      {
        "latex": "16u^8v^6",
        "correct": true
      },
      {
        "latex": "8u^6v^5",
        "correct": false
      },
      {
        "latex": "16u^6v^5",
        "correct": false
      }
    ],
    "explanation": "$4^2 = 16$, $u^{4 \\cdot 2}=u^8$, $v^{3 \\cdot 2}=v^6$."
  },
  {
    "id": "potpro-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-2x^5y^3)^4$",
    "options": [
      {
        "latex": "-16x^{20}y^{12}",
        "correct": false
      },
      {
        "latex": "16x^{20}y^{12}",
        "correct": true
      },
      {
        "latex": "16x^9y^7",
        "correct": false
      },
      {
        "latex": "-8x^{20}y^{12}",
        "correct": false
      }
    ],
    "explanation": "Potencia par da positivo: $(-2)^4 = 16$, $x^{20}y^{12}$."
  },
  {
    "id": "potpro-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $(3a^3b^2c)^3$",
    "options": [
      {
        "latex": "27a^9b^6c",
        "correct": false
      },
      {
        "latex": "27a^6b^5c^3",
        "correct": false
      },
      {
        "latex": "27a^9b^6c^3",
        "correct": true
      },
      {
        "latex": "9a^6b^5c^3",
        "correct": false
      }
    ],
    "explanation": "$3^3 = 27$, exponentes multiplicados por 3: $a^9b^6c^3$."
  },
  {
    "id": "potpro-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $(5x^2y^{-3})^2$",
    "options": [
      {
        "latex": "10x^4y^{-6}",
        "correct": false
      },
      {
        "latex": "25x^2y^{-6}",
        "correct": false
      },
      {
        "latex": "25x^4y^{-6}",
        "correct": true
      },
      {
        "latex": "25x^4y^{-1}",
        "correct": false
      }
    ],
    "explanation": "$5^2 = 25$, $x^{2 \\cdot 2}=x^4$, $y^{(-3) \\cdot 2}=y^{-6}$."
  },
  {
    "id": "potpro-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-a^3b^5)^5$",
    "options": [
      {
        "latex": "-a^8b^{10}",
        "correct": false
      },
      {
        "latex": "-a^{15}b^{25}",
        "correct": true
      },
      {
        "latex": "a^{15}b^{25}",
        "correct": false
      },
      {
        "latex": "-5a^{15}b^{25}",
        "correct": false
      }
    ],
    "explanation": "Potencia impar conserva el signo negativo: $-a^{15}b^{25}$."
  },
  {
    "id": "potpro-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $(6p^4q^3)^2$",
    "options": [
      {
        "latex": "12p^6q^5",
        "correct": false
      },
      {
        "latex": "6p^8q^6",
        "correct": false
      },
      {
        "latex": "36p^6q^5",
        "correct": false
      },
      {
        "latex": "36p^8q^6",
        "correct": true
      }
    ],
    "explanation": "$6^2 = 36$, $p^{4 \\cdot 2}=p^8$, $q^{3 \\cdot 2}=q^6$."
  },
  {
    "id": "potpro-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica: $(2x^2 y^3)^3$",
    "options": [
      {
        "latex": "8x^6 y^9",
        "correct": true
      },
      {
        "latex": "6x^6 y^9",
        "correct": false
      },
      {
        "latex": "8x^5 y^6",
        "correct": false
      },
      {
        "latex": "6x^5 y^6",
        "correct": false
      }
    ],
    "explanation": "$2^3 = 8$, $(x^2)^3 = x^6$ y $(y^3)^3 = y^9$. Resultado: $8x^6 y^9$."
  },
  {
    "id": "potpro-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $(-2x^3 y)^3$",
    "options": [
      {
        "latex": "-8x^9 y^3",
        "correct": true
      },
      {
        "latex": "8x^9 y^3",
        "correct": false
      },
      {
        "latex": "-6x^9 y^3",
        "correct": false
      },
      {
        "latex": "-8x^6 y^3",
        "correct": false
      }
    ],
    "explanation": "$(-2)^3 = -8$ (exponente impar conserva el signo), $(x^3)^3 = x^9$ y $y^3$. Resultado: $-8x^9 y^3$."
  },
  {
    "id": "potpro-h-03",
    "difficulty": "hard",
    "prompt": "Simplifica y evalúa: $(2 \\cdot 3)^2$",
    "options": [
      {
        "latex": "36",
        "correct": true
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "72",
        "correct": false
      }
    ],
    "explanation": "$(2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$."
  },
  {
    "id": "potpro-h-04",
    "difficulty": "hard",
    "prompt": "Si $(2x)^n = 8x^3$, ¿cuál es el valor de $n$?",
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
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      }
    ],
    "explanation": "$(2x)^3 = 2^3 x^3 = 8x^3$, por lo que $n = 3$."
  },
  {
    "id": "potpro-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $(ab^2 c)^2$",
    "options": [
      {
        "latex": "a^2 b^4 c^2",
        "correct": true
      },
      {
        "latex": "a^2 b^4 c",
        "correct": false
      },
      {
        "latex": "a^2 b^2 c^2",
        "correct": false
      },
      {
        "latex": "ab^4 c^2",
        "correct": false
      }
    ],
    "explanation": "Se reparte el exponente a todos: $a^2$, $(b^2)^2 = b^4$ y $c^2$. Resultado: $a^2 b^4 c^2$."
  },
  {
    "id": "potpro-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $(2^n x^n y^{2n})^2$",
    "options": [
      {
        "latex": "4^n x^n y^{2n}",
        "correct": false
      },
      {
        "latex": "2^{n+2} x^{2n} y^{4n}",
        "correct": false
      },
      {
        "latex": "4^n x^{2n} y^{4n}",
        "correct": true
      },
      {
        "latex": "2^{2n} x^{n^2} y^{4n^2}",
        "correct": false
      }
    ],
    "explanation": "Elevamos al cuadrado cada factor: $(2^n)^2 = 2^{2n} = 4^n$, $x^{2n}$, $y^{4n}$."
  },
  {
    "id": "potpro-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $(-3x^{a+1}y^b)^3$",
    "options": [
      {
        "latex": "27x^{3a+3}y^{3b}",
        "correct": false
      },
      {
        "latex": "-9x^{3a+3}y^{3b}",
        "correct": false
      },
      {
        "latex": "-27x^{3a+3}y^{3b}",
        "correct": true
      },
      {
        "latex": "-27x^{a+4}y^{b+3}",
        "correct": false
      }
    ],
    "explanation": "$(-3)^3 = -27$, multiplicamos exponentes por 3: $3(a+1)=3a+3$, $3b$."
  },
  {
    "id": "potpro-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $(a^m b^n c^k)^p$",
    "options": [
      {
        "latex": "a^{m+p}b^{n+p}c^{k+p}",
        "correct": false
      },
      {
        "latex": "a^{mp}b^{np}c^{kp}",
        "correct": true
      },
      {
        "latex": "p(a^mb^nc^k)",
        "correct": false
      },
      {
        "latex": "a^{m^p}b^{n^p}c^{k^p}",
        "correct": false
      }
    ],
    "explanation": "Se multiplica cada exponente por $p$: $a^{mp}b^{np}c^{kp}$."
  },
  {
    "id": "potpro-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $(2^{k-1} x^{2k})^3$",
    "options": [
      {
        "latex": "2^{3k-1} x^{6k}",
        "correct": false
      },
      {
        "latex": "8^k x^{6k}",
        "correct": false
      },
      {
        "latex": "6^{k-1} x^{6k}",
        "correct": false
      },
      {
        "latex": "8^{k-1} x^{6k}",
        "correct": true
      }
    ],
    "explanation": "$(2^{k-1})^3 = 2^{3(k-1)} = (2^3)^{k-1} = 8^{k-1}$, y $x^{2k \\cdot 3} = x^{6k}$."
  },
  {
    "id": "potpro-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $(-1)^n (x^2 y)^n$ cuando $n$ es par",
    "options": [
      {
        "latex": "-x^{2n}y^n",
        "correct": false
      },
      {
        "latex": "x^{2n}y^n",
        "correct": true
      },
      {
        "latex": "(-xy)^{3n}",
        "correct": false
      },
      {
        "latex": "x^{2+n}y^{1+n}",
        "correct": false
      }
    ],
    "explanation": "Si $n$ es par, $(-1)^n = 1$, por lo que queda $x^{2n}y^n$."
  },
  {
    "id": "potpro-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $(5^{1/2} x^{3/2} y)^2$",
    "options": [
      {
        "latex": "25x^3y^2",
        "correct": false
      },
      {
        "latex": "5x^{9/4}y^2",
        "correct": false
      },
      {
        "latex": "5x^3y^2",
        "correct": true
      },
      {
        "latex": "5x^3y",
        "correct": false
      }
    ],
    "explanation": "$(5^{1/2})^2 = 5$, $(x^{3/2})^2 = x^3$, $y^2$."
  },
  {
    "id": "potpro-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $(x^{a-1} y^{b+1})^2 \\cdot (x^2 y^{-1})$",
    "options": [
      {
        "latex": "x^{2a-1} y^{2b}",
        "correct": false
      },
      {
        "latex": "x^{2a} y^{2b}",
        "correct": false
      },
      {
        "latex": "x^{2a+1} y^{2b+1}",
        "correct": false
      },
      {
        "latex": "x^{2a} y^{2b+1}",
        "correct": true
      }
    ],
    "explanation": "Primero $(x^{a-1}y^{b+1})^2 = x^{2a-2}y^{2b+2}$. Luego sumamos exponentes: $x^{2a-2+2}y^{2b+2-1} = x^{2a}y^{2b+1}$."
  },
  {
    "id": "potpro-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $(3^{-1} a^2 b^{-3})^{-2}$",
    "options": [
      {
        "latex": "\\frac{1}{9}a^{-4}b^6",
        "correct": false
      },
      {
        "latex": "9a^{-4}b^6",
        "correct": true
      },
      {
        "latex": "9a^4b^{-6}",
        "correct": false
      },
      {
        "latex": "3a^{-4}b^6",
        "correct": false
      }
    ],
    "explanation": "$(3^{-1})^{-2} = 3^2 = 9$, $a^{2(-2)} = a^{-4}$, $b^{-3(-2)} = b^6$."
  }
]
};
