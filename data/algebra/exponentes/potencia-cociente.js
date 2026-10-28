// data/algebra/exponentes/potencia-cociente.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "potencia-cociente",
  lawName: "Potencia de un cociente",
  lawFormula: "\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}",
  prerequisites: "Conocer el producto de potencias.",
  available: true,
  questions: [
  {
    "id": "potcoc-f-01",
    "difficulty": "easy",
    "prompt": "Simplifica: $(\\frac{x}{y})^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{y^2}",
        "correct": true
      },
      {
        "latex": "\\frac{x^2}{y}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{y}",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte al numerador y al denominador: $\\frac{x^2}{y^2}$."
  },
  {
    "id": "potcoc-f-02",
    "difficulty": "easy",
    "prompt": "Simplifica: $(\\frac{a}{b})^3$",
    "options": [
      {
        "latex": "\\frac{a^3}{b^3}",
        "correct": true
      },
      {
        "latex": "\\frac{a^3}{b}",
        "correct": false
      },
      {
        "latex": "\\frac{a}{b^3}",
        "correct": false
      },
      {
        "latex": "\\frac{3a}{3b}",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte: $\\frac{a^3}{b^3}$. No se multiplica $a$ ni $b$ por 3."
  },
  {
    "id": "potcoc-f-03",
    "difficulty": "easy",
    "prompt": "Simplifica y evalúa: $(\\frac{2}{3})^2$",
    "options": [
      {
        "latex": "\\frac{4}{9}",
        "correct": true
      },
      {
        "latex": "\\frac{4}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": false
      }
    ],
    "explanation": "$(\\frac{2}{3})^2 = \\frac{2^2}{3^2} = \\frac{4}{9}$."
  },
  {
    "id": "potcoc-f-04",
    "difficulty": "easy",
    "prompt": "Simplifica: $(\\frac{x}{2})^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{4}",
        "correct": true
      },
      {
        "latex": "\\frac{x^2}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}",
        "correct": false
      }
    ],
    "explanation": "$(\\frac{x}{2})^2 = \\frac{x^2}{2^2} = \\frac{x^2}{4}$."
  },
  {
    "id": "potcoc-f-05",
    "difficulty": "easy",
    "prompt": "Simplifica: $(\\frac{m}{n})^2$",
    "options": [
      {
        "latex": "\\frac{m^2}{n^2}",
        "correct": true
      },
      {
        "latex": "\\frac{m^2}{n}",
        "correct": false
      },
      {
        "latex": "\\frac{m}{n^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2m}{2n}",
        "correct": false
      }
    ],
    "explanation": "El exponente se reparte: $\\frac{m^2}{n^2}$."
  },
  {
    "id": "potcoc-f-06",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{x}{y}\\right)^5$",
    "options": [
      {
        "latex": "\\frac{x}{y^5}",
        "correct": false
      },
      {
        "latex": "5\\frac{x}{y}",
        "correct": false
      },
      {
        "latex": "\\frac{x^5}{y}",
        "correct": false
      },
      {
        "latex": "\\frac{x^5}{y^5}",
        "correct": true
      }
    ],
    "explanation": "La potencia se distribuye a numerador y denominador: $\\frac{x^5}{y^5}$."
  },
  {
    "id": "potcoc-f-07",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{a}{b}\\right)^6$",
    "options": [
      {
        "latex": "\\frac{a}{b^6}",
        "correct": false
      },
      {
        "latex": "6\\frac{a}{b}",
        "correct": false
      },
      {
        "latex": "\\frac{a^6}{b}",
        "correct": false
      },
      {
        "latex": "\\frac{a^6}{b^6}",
        "correct": true
      }
    ],
    "explanation": "Se distribuye: $\\frac{a^6}{b^6}$."
  },
  {
    "id": "potcoc-f-08",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{2}{3}\\right)^3$",
    "options": [
      {
        "latex": "\\frac{6}{9}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{27}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{27}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{2^3}{3^3} = \\frac{8}{27}$."
  },
  {
    "id": "potcoc-f-09",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{x}{4}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{2x}{16}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{16}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{x^2}{4^2} = \\frac{x^2}{16}$."
  },
  {
    "id": "potcoc-f-09b",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{3}{y}\\right)^4$",
    "options": [
      {
        "latex": "\\frac{12}{y^4}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{y^4}",
        "correct": false
      },
      {
        "latex": "\\frac{81}{y}",
        "correct": false
      },
      {
        "latex": "\\frac{81}{y^4}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{3^4}{y^4} = \\frac{81}{y^4}$."
  },
  {
    "id": "potcoc-f-11",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{u}{v}\\right)^7$",
    "options": [
      {
        "latex": "\\frac{u}{v^7}",
        "correct": false
      },
      {
        "latex": "7\\frac{u}{v}",
        "correct": false
      },
      {
        "latex": "\\frac{u^7}{v}",
        "correct": false
      },
      {
        "latex": "\\frac{u^7}{v^7}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{u^7}{v^7}$."
  },
  {
    "id": "potcoc-f-12",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{5}{2}\\right)^3$",
    "options": [
      {
        "latex": "\\frac{15}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{125}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{125}{8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{5^3}{2^3} = \\frac{125}{8}$."
  },
  {
    "id": "potcoc-f-13",
    "difficulty": "easy",
    "prompt": "Simplifica: $\\left(\\frac{m}{n}\\right)^9$",
    "options": [
      {
        "latex": "\\frac{m^9}{n}",
        "correct": false
      },
      {
        "latex": "\\frac{m}{n^9}",
        "correct": false
      },
      {
        "latex": "9\\frac{m}{n}",
        "correct": false
      },
      {
        "latex": "\\frac{m^9}{n^9}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{m^9}{n^9}$."
  },
  {
    "id": "potcoc-m-01",
    "difficulty": "medium",
    "prompt": "Simplifica: $(\\frac{2x}{y})^2$",
    "options": [
      {
        "latex": "\\frac{4x^2}{y^2}",
        "correct": true
      },
      {
        "latex": "\\frac{2x^2}{y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4x^2}{y}",
        "correct": false
      },
      {
        "latex": "\\frac{4x}{y^2}",
        "correct": false
      }
    ],
    "explanation": "$2^2 = 4$, $x^2$ y $y^2$: $\\frac{4x^2}{y^2}$."
  },
  {
    "id": "potcoc-m-02",
    "difficulty": "medium",
    "prompt": "Simplifica: $(\\frac{x}{y^2})^3$",
    "options": [
      {
        "latex": "\\frac{x^3}{y^6}",
        "correct": true
      },
      {
        "latex": "\\frac{x^3}{y^5}",
        "correct": false
      },
      {
        "latex": "\\frac{x^3}{y^3}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{y^6}",
        "correct": false
      }
    ],
    "explanation": "$x^3$ arriba y $(y^2)^3 = y^6$ abajo: $\\frac{x^3}{y^6}$."
  },
  {
    "id": "potcoc-m-03",
    "difficulty": "medium",
    "prompt": "Simplifica: $(-\\frac{x}{y})^2$",
    "options": [
      {
        "latex": "\\frac{x^2}{y^2}",
        "correct": true
      },
      {
        "latex": "-\\frac{x^2}{y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{y}",
        "correct": false
      },
      {
        "latex": "-\\frac{x^2}{y}",
        "correct": false
      }
    ],
    "explanation": "El signo negativo también se eleva al cuadrado y se anula: $\\frac{x^2}{y^2}$."
  },
  {
    "id": "potcoc-m-04",
    "difficulty": "medium",
    "prompt": "Simplifica: $(\\frac{3x}{2y})^2$",
    "options": [
      {
        "latex": "\\frac{9x^2}{4y^2}",
        "correct": true
      },
      {
        "latex": "\\frac{6x^2}{4y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{9x^2}{2y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{9x}{4y^2}",
        "correct": false
      }
    ],
    "explanation": "$3^2 = 9$, $x^2$, $2^2 = 4$ y $y^2$: $\\frac{9x^2}{4y^2}$."
  },
  {
    "id": "potcoc-m-05",
    "difficulty": "medium",
    "prompt": "Simplifica: $(\\frac{a^2}{b})^2$",
    "options": [
      {
        "latex": "\\frac{a^4}{b^2}",
        "correct": true
      },
      {
        "latex": "\\frac{a^4}{b}",
        "correct": false
      },
      {
        "latex": "\\frac{a^2}{b^2}",
        "correct": false
      },
      {
        "latex": "\\frac{a^4}{b^4}",
        "correct": false
      }
    ],
    "explanation": "$(a^2)^2 = a^4$ arriba y $b^2$ abajo: $\\frac{a^4}{b^2}$."
  },
  {
    "id": "potcoc-m-06",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{2x^3}{y^2}\\right)^3$",
    "options": [
      {
        "latex": "\\frac{6x^9}{y^6}",
        "correct": false
      },
      {
        "latex": "\\frac{8x^6}{y^5}",
        "correct": false
      },
      {
        "latex": "\\frac{2x^9}{y^6}",
        "correct": false
      },
      {
        "latex": "\\frac{8x^9}{y^6}",
        "correct": true
      }
    ],
    "explanation": "$2^3=8$, $x^{3 \\cdot 3}=x^9$, $y^{2 \\cdot 3}=y^6$."
  },
  {
    "id": "potcoc-m-07",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{3a^2}{4b^4}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{9a^4}{16b^6}",
        "correct": false
      },
      {
        "latex": "\\frac{9a^2}{16b^4}",
        "correct": false
      },
      {
        "latex": "\\frac{6a^4}{8b^8}",
        "correct": false
      },
      {
        "latex": "\\frac{9a^4}{16b^8}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{3^2(a^2)^2}{4^2(b^4)^2} = \\frac{9a^4}{16b^8}$."
  },
  {
    "id": "potcoc-m-08",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(-\\frac{x^4}{2y^3}\\right)^3$",
    "options": [
      {
        "latex": "-\\frac{x^7}{6y^6}",
        "correct": false
      },
      {
        "latex": "-\\frac{x^{12}}{6y^9}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{12}}{8y^9}",
        "correct": false
      },
      {
        "latex": "-\\frac{x^{12}}{8y^9}",
        "correct": true
      }
    ],
    "explanation": "Potencia impar conserva signo negativo: $-\\frac{x^{12}}{8y^9}$."
  },
  {
    "id": "potcoc-m-09",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{5u^3}{v^5}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{25u^5}{v^7}",
        "correct": false
      },
      {
        "latex": "\\frac{5u^6}{v^{10}}",
        "correct": false
      },
      {
        "latex": "\\frac{10u^6}{v^{10}}",
        "correct": false
      },
      {
        "latex": "\\frac{25u^6}{v^{10}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{5^2u^{3 \\cdot 2}}{v^{5 \\cdot 2}} = \\frac{25u^6}{v^{10}}$."
  },
  {
    "id": "potcoc-m-10",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(-\\frac{2a^2}{3b}\\right)^4$",
    "options": [
      {
        "latex": "\\frac{8a^8}{12b^4}",
        "correct": false
      },
      {
        "latex": "\\frac{16a^6}{81b^4}",
        "correct": false
      },
      {
        "latex": "-\\frac{16a^8}{81b^4}",
        "correct": false
      },
      {
        "latex": "\\frac{16a^8}{81b^4}",
        "correct": true
      }
    ],
    "explanation": "Potencia par da positivo: $\\frac{(-2)^4(a^2)^4}{3^4b^4} = \\frac{16a^8}{81b^4}$."
  },
  {
    "id": "potcoc-m-11",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{x^{-2}}{y^3}\\right)^4$",
    "options": [
      {
        "latex": "\\frac{x^8}{y^{12}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{-8}}{y^7}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{-6}}{y^7}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{-8}}{y^{12}}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos exponentes: $x^{-2 \\cdot 4}=x^{-8}$, $y^{3 \\cdot 4}=y^{12}$."
  },
  {
    "id": "potcoc-m-12",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{4a^3b}{c^2}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{16a^5b^2}{c^4}",
        "correct": false
      },
      {
        "latex": "\\frac{16a^6b}{c^4}",
        "correct": false
      },
      {
        "latex": "\\frac{8a^6b^2}{c^4}",
        "correct": false
      },
      {
        "latex": "\\frac{16a^6b^2}{c^4}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{4^2a^{3 \\cdot 2}b^2}{c^{2 \\cdot 2}} = \\frac{16a^6b^2}{c^4}$."
  },
  {
    "id": "potcoc-m-13",
    "difficulty": "medium",
    "prompt": "Simplifica: $\\left(\\frac{3x^5}{2y^{-2}}\\right)^3$",
    "options": [
      {
        "latex": "\\frac{27x^8}{8y^{-5}}",
        "correct": false
      },
      {
        "latex": "\\frac{27x^{15}}{8y^6}",
        "correct": false
      },
      {
        "latex": "\\frac{9x^{15}}{6y^{-6}}",
        "correct": false
      },
      {
        "latex": "\\frac{27x^{15}}{8y^{-6}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{3^3x^{5 \\cdot 3}}{2^3y^{-2 \\cdot 3}} = \\frac{27x^{15}}{8y^{-6}}$."
  },
  {
    "id": "potcoc-h-01",
    "difficulty": "hard",
    "prompt": "Simplifica y evalúa: $(\\frac{4}{2})^3$",
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
    "explanation": "$(\\frac{4}{2})^3 = 2^3 = 8$, o bien $\\frac{4^3}{2^3} = \\frac{64}{8} = 8$."
  },
  {
    "id": "potcoc-h-02",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\frac{2x^2}{3y})^3$",
    "options": [
      {
        "latex": "\\frac{8x^6}{27y^3}",
        "correct": true
      },
      {
        "latex": "\\frac{8x^6}{27y}",
        "correct": false
      },
      {
        "latex": "\\frac{6x^6}{27y^3}",
        "correct": false
      },
      {
        "latex": "\\frac{8x^5}{27y^3}",
        "correct": false
      }
    ],
    "explanation": "Arriba: $2^3 = 8$ y $(x^2)^3 = x^6$. Abajo: $3^3 = 27$ y $y^3$. Resultado: $\\frac{8x^6}{27y^3}$."
  },
  {
    "id": "potcoc-h-03",
    "difficulty": "hard",
    "prompt": "Si $(\\frac{x}{2})^n = \\frac{x^3}{8}$, ¿cuál es el valor de $n$?",
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
    "explanation": "$(\\frac{x}{2})^3 = \\frac{x^3}{2^3} = \\frac{x^3}{8}$, por lo que $n = 3$."
  },
  {
    "id": "potcoc-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $(\\frac{a^2 b}{c})^2$",
    "options": [
      {
        "latex": "\\frac{a^4 b^2}{c^2}",
        "correct": true
      },
      {
        "latex": "\\frac{a^4 b^2}{c}",
        "correct": false
      },
      {
        "latex": "\\frac{a^4 b}{c^2}",
        "correct": false
      },
      {
        "latex": "\\frac{a^2 b^2}{c^2}",
        "correct": false
      }
    ],
    "explanation": "Arriba: $(a^2)^2 = a^4$ y $b^2$. Abajo: $c^2$. Resultado: $\\frac{a^4 b^2}{c^2}$."
  },
  {
    "id": "potcoc-h-05",
    "difficulty": "hard",
    "prompt": "Simplifica: $(-\\frac{x^3}{2})^2$",
    "options": [
      {
        "latex": "\\frac{x^6}{4}",
        "correct": true
      },
      {
        "latex": "-\\frac{x^6}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{x^6}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{x^5}{4}",
        "correct": false
      }
    ],
    "explanation": "El signo se anula al elevar al cuadrado: $(x^3)^2 = x^6$ y $2^2 = 4$. Resultado: $\\frac{x^6}{4}$."
  },
  {
    "id": "potcoc-h-06",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{x^{n+1}}{y^{n-1}}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{x^{n+3}}{y^{n+1}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{n^2+1}}{y^{n^2-1}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{2n+1}}{y^{2n-1}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{2n+2}}{y^{2n-2}}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos por 2 cada exponente binomial: $2(n+1)=2n+2$, $2(n-1)=2n-2$."
  },
  {
    "id": "potcoc-h-07",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{a^x}{b^y}\\right)^z$",
    "options": [
      {
        "latex": "\\frac{a^{x+z}}{b^{y+z}}",
        "correct": false
      },
      {
        "latex": "\\frac{a^{x^z}}{b^{y^z}}",
        "correct": false
      },
      {
        "latex": "z\\left(\\frac{a^x}{b^y}\\right)",
        "correct": false
      },
      {
        "latex": "\\frac{a^{xz}}{b^{yz}}",
        "correct": true
      }
    ],
    "explanation": "Distribución de exponentes algebraicos: $\\frac{a^{xz}}{b^{yz}}$."
  },
  {
    "id": "potcoc-h-08",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{2^k x^k}{3^k y^k}\\right)^2$",
    "options": [
      {
        "latex": "\\frac{4^k x^k}{9^k y^k}",
        "correct": false
      },
      {
        "latex": "\\frac{2^{k+2} x^{2k}}{3^{k+2} y^{2k}}",
        "correct": false
      },
      {
        "latex": "\\frac{2^{2k} x^k}{3^{2k} y^k}",
        "correct": false
      },
      {
        "latex": "\\frac{4^k x^{2k}}{9^k y^{2k}}",
        "correct": true
      }
    ],
    "explanation": "Elevamos cada factor al cuadrado: $(2^k)^2 = 4^k$, $x^{2k}$, $(3^k)^2 = 9^k$, $y^{2k}$."
  },
  {
    "id": "potcoc-h-09",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{x^{1/2}}{y^{1/3}}\\right)^6$",
    "options": [
      {
        "latex": "\\frac{x^6}{y^6}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{7/2}}{y^{19/3}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^{12}}{y^{18}}",
        "correct": false
      },
      {
        "latex": "\\frac{x^3}{y^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{1}{2} \\cdot 6 = 3$, $\\frac{1}{3} \\cdot 6 = 2$. Resultado: $\\frac{x^3}{y^2}$."
  },
  {
    "id": "potcoc-h-10",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{x^a y^b}{z^c}\\right)^{-2}$",
    "options": [
      {
        "latex": "\\frac{x^{2a}y^{2b}}{z^{2c}}",
        "correct": false
      },
      {
        "latex": "\\frac{z^{-2c}}{x^{-2a}y^{-2b}}",
        "correct": false
      },
      {
        "latex": "-\\frac{x^{2a}y^{2b}}{z^{2c}}",
        "correct": false
      },
      {
        "latex": "\\frac{z^{2c}}{x^{2a}y^{2b}}",
        "correct": true
      }
    ],
    "explanation": "El exponente negativo invierte la fracción y eleva al cuadrado: $\\frac{z^{2c}}{x^{2a}y^{2b}}$."
  },
  {
    "id": "potcoc-h-11",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{a^{m-n}}{b^{m+n}}\\right)^{m}$",
    "options": [
      {
        "latex": "\\frac{a^{2m-n}}{b^{2m+n}}",
        "correct": false
      },
      {
        "latex": "\\frac{a^{m-mn}}{b^{m+mn}}",
        "correct": false
      },
      {
        "latex": "\\frac{a^{m^2-n}}{b^{m^2+n}}",
        "correct": false
      },
      {
        "latex": "\\frac{a^{m^2-mn}}{b^{m^2+mn}}",
        "correct": true
      }
    ],
    "explanation": "Multiplicamos $m(m-n) = m^2-mn$ y $m(m+n) = m^2+mn$."
  },
  {
    "id": "potcoc-h-12",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{e^{2x}}{e^x + 1}\\right)^0$ con $x \\in \\mathbb{R}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "e^x",
        "correct": false
      },
      {
        "latex": "\\frac{e^{2x}}{e^x+1}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Cualquier expresión distinta de cero elevada a la 0 es igual a 1."
  },
  {
    "id": "potcoc-h-13",
    "difficulty": "hard",
    "prompt": "Simplifica: $\\left(\\frac{4x^2}{9y^4}\\right)^{-1/2}$",
    "options": [
      {
        "latex": "\\frac{2x}{3y^2}",
        "correct": false
      },
      {
        "latex": "\\frac{9y^4}{4x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3y^2}{2x}",
        "correct": false
      },
      {
        "latex": "\\frac{3y^2}{2x}",
        "correct": true
      }
    ],
    "explanation": "Invertimos: $\\frac{9y^4}{4x^2}$ y extraemos raíz cuadrada: $\\frac{3y^2}{2x}$."
  }
]
};
