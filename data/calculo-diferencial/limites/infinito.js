// data/calculo-diferencial/limites/infinito.js
// Catálogo ampliado a 102 preguntas (34 fáciles, 34 medias, 34 difíciles).

export default {
  lawId: "lim-infinito",
  lawName: "Límites en el infinito",
  lawFormula: "\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}: \\text{comparar grados de } P \\text{ y } Q",
  prerequisites: "Grado de polinomios y división entre la mayor potencia de x.",
  available: true,
  questions: [
  {
    "id": "liminf-f-01",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      }
    ],
    "explanation": "Mismo grado: el límite es el cociente de coeficientes principales, $\\frac{2}{1} = 2$."
  },
  {
    "id": "liminf-f-02",
    "difficulty": "easy",
    "prompt": "¿Qué método se usa para $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3}$?",
    "options": [
      {
        "latex": "\\text{Dividir todo entre la mayor potencia de } x",
        "correct": true
      },
      {
        "latex": "\\text{Sustitución directa}",
        "correct": false
      },
      {
        "latex": "\\text{Factorización}",
        "correct": false
      },
      {
        "latex": "\\text{Racionalización}",
        "correct": false
      }
    ],
    "explanation": "Dividir entre $x$ deja $\\frac{2 + 1/x}{1 - 3/x}$; los términos con $1/x$ tienden a 0."
  },
  {
    "id": "liminf-f-03",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{1}{x}$",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Cuando $x$ crece sin límite, $\\frac{1}{x}$ se hace arbitrariamente pequeño: tiende a 0."
  },
  {
    "id": "liminf-f-04",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} 5$",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      }
    ],
    "explanation": "Una constante no depende de $x$: su límite es la misma constante."
  },
  {
    "id": "liminf-f-05",
    "difficulty": "easy",
    "prompt": "Si el grado del numerador es menor que el del denominador, $\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}$ es...",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\text{El cociente de coeficientes principales}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "El denominador crece más rápido que el numerador: el cociente tiende a 0."
  },
  {
    "id": "liminf-f-06",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{3x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{3}$."
  },
  {
    "id": "liminf-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{4}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{4}$."
  },
  {
    "id": "liminf-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{1}$."
  },
  {
    "id": "liminf-f-09",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{2x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{2}$."
  },
  {
    "id": "liminf-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 3}{3x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{2}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{2}{3}$."
  },
  {
    "id": "liminf-f-11",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{3}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{4}$."
  },
  {
    "id": "liminf-f-12",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{1}$."
  },
  {
    "id": "liminf-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{2x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{2}$."
  },
  {
    "id": "liminf-f-14",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{3x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{6}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{3}$."
  },
  {
    "id": "liminf-f-15",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{2}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{2}{4}$."
  },
  {
    "id": "liminf-f-16",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{1}$."
  },
  {
    "id": "liminf-f-17",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{2x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{2}$."
  },
  {
    "id": "liminf-f-18",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{3x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{3}$."
  },
  {
    "id": "liminf-f-19",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{6}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{4}$."
  },
  {
    "id": "liminf-f-20",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 3}{x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{2}{1}$."
  },
  {
    "id": "liminf-f-21",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{2x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{2}$."
  },
  {
    "id": "liminf-f-22",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{3x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{3}$."
  },
  {
    "id": "liminf-f-23",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{5}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{4}$."
  },
  {
    "id": "liminf-f-24",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{1}$."
  },
  {
    "id": "liminf-f-25",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 3}{2x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{2}{2}$."
  },
  {
    "id": "liminf-f-26",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{3x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{3}$."
  },
  {
    "id": "liminf-f-27",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{4x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{4}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{4}$."
  },
  {
    "id": "liminf-f-28",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{1}$."
  },
  {
    "id": "liminf-f-29",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{2x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{6}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{2}$."
  },
  {
    "id": "liminf-f-30",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x + 3}{3x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{2}{3}$."
  },
  {
    "id": "liminf-f-31",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x + 3}{4x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{4}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{3}{4}$."
  },
  {
    "id": "liminf-f-32",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x + 3}{x - 2}$",
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
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{4}{1}$."
  },
  {
    "id": "liminf-f-33",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x + 3}{2x - 2}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{5}{2}$."
  },
  {
    "id": "liminf-f-34",
    "difficulty": "easy",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{6x + 3}{3x - 2}$",
    "options": [
      {
        "latex": "\\infty",
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
        "latex": "\\frac{6}{3}",
        "correct": true
      }
    ],
    "explanation": "Como numerador y denominador tienen el mismo grado 1, el límite es el cociente de los coeficientes principales: $\\frac{6}{3}$."
  },
  {
    "id": "liminf-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": false
      }
    ],
    "explanation": "Grados iguales: cociente de coeficientes principales, $\\frac{3}{5}$."
  },
  {
    "id": "liminf-m-02",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{x^2}{x + 1}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": true
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
        "latex": "\\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "El numerador tiene mayor grado: crece más rápido y el cociente diverge a $\\infty$."
  },
  {
    "id": "liminf-m-03",
    "difficulty": "medium",
    "prompt": "¿Qué regla aplica para decidir $\\lim_{x \\to \\infty} \\frac{4x^3 + 2x}{x^3 + 7}$?",
    "options": [
      {
        "latex": "\\text{Comparar grados y usar coeficientes principales}",
        "correct": true
      },
      {
        "latex": "\\text{Factorizar y simplificar}",
        "correct": false
      },
      {
        "latex": "\\text{Racionalizar con el conjugado}",
        "correct": false
      },
      {
        "latex": "\\text{Sustituir } x = 0",
        "correct": false
      }
    ],
    "explanation": "Ambos polinomios tienen grado 3: el límite es $\\frac{4}{1} = 4$."
  },
  {
    "id": "liminf-m-04",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^3 + 2x}{x^3 + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{2}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      }
    ],
    "explanation": "Divide entre $x^3$: $\\frac{4 + 2/x^2}{1 + 7/x^3} \\to 4$."
  },
  {
    "id": "liminf-m-05",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x}{x^2 + 1}$",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "Grado del denominador (2) mayor que el del numerador (1): el límite es 0."
  },
  {
    "id": "liminf-m-06",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{2}$."
  },
  {
    "id": "liminf-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{3}$."
  },
  {
    "id": "liminf-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{2}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{4}$."
  },
  {
    "id": "liminf-m-09",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{2}$."
  },
  {
    "id": "liminf-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{3}$."
  },
  {
    "id": "liminf-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{4}$."
  },
  {
    "id": "liminf-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{2}$."
  },
  {
    "id": "liminf-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{3}$."
  },
  {
    "id": "liminf-m-14",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{4}$."
  },
  {
    "id": "liminf-m-15",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{2}$."
  },
  {
    "id": "liminf-m-16",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{3}$."
  },
  {
    "id": "liminf-m-17",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{4}$."
  },
  {
    "id": "liminf-m-18",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{2}$."
  },
  {
    "id": "liminf-m-19",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{3}$."
  },
  {
    "id": "liminf-m-20",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{2}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{4}$."
  },
  {
    "id": "liminf-m-21",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{2}$."
  },
  {
    "id": "liminf-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{3}$."
  },
  {
    "id": "liminf-m-23",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{4}$."
  },
  {
    "id": "liminf-m-24",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{2}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{2}$."
  },
  {
    "id": "liminf-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{3}$."
  },
  {
    "id": "liminf-m-26",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{4}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{4}$."
  },
  {
    "id": "liminf-m-27",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{2}$."
  },
  {
    "id": "liminf-m-28",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{3}$."
  },
  {
    "id": "liminf-m-29",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{3}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{4}$."
  },
  {
    "id": "liminf-m-30",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{2}$."
  },
  {
    "id": "liminf-m-31",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{5}{3}$."
  },
  {
    "id": "liminf-m-32",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{2x^2 + 5x}{4x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{4}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{2}{4}$."
  },
  {
    "id": "liminf-m-33",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{2}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{3}{2}$."
  },
  {
    "id": "liminf-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 5x}{3x^2 - 1}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{-1}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{3}",
        "correct": true
      }
    ],
    "explanation": "Ambos polinomios tienen grado 2. Dividiendo entre $x^2$, el límite es $\\frac{4}{3}$."
  },
  {
    "id": "liminf-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{\\sqrt{4x^2 + 1}}{x}$ (con $x > 0$)",
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
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      }
    ],
    "explanation": "Mete $x$ a la raíz: $\\sqrt{\\frac{4x^2+1}{x^2}} = \\sqrt{4 + \\frac{1}{x^2}} \\to 2$."
  },
  {
    "id": "liminf-h-02",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + x}$",
    "options": [
      {
        "latex": "\\frac{5}{2}",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{5}{3}",
        "correct": false
      }
    ],
    "explanation": "Grados iguales: divide entre $x^2$ y queda $\\frac{5 - 3/x^2}{2 + 1/x} \\to \\frac{5}{2}$."
  },
  {
    "id": "liminf-h-03",
    "difficulty": "hard",
    "prompt": "Si $\\lim_{x \\to \\infty} f(x) = L$ con $L$ finito, la recta $y = L$ es...",
    "options": [
      {
        "latex": "\\text{Una asíntota horizontal}",
        "correct": true
      },
      {
        "latex": "\\text{Una asíntota vertical}",
        "correct": false
      },
      {
        "latex": "\\text{Una tangente en } x = 0",
        "correct": false
      },
      {
        "latex": "\\text{Un eje de simetría}",
        "correct": false
      }
    ],
    "explanation": "Cuando la función se acerca a un valor finito en el infinito, su gráfica se aproxima a la recta $y = L$."
  },
  {
    "id": "liminf-h-04",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{x + 1}{x^2 + 1}$",
    "options": [
      {
        "latex": "0",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "Divide entre $x^2$: $\\frac{1/x + 1/x^2}{1 + 1/x^2} \\to 0$."
  },
  {
    "id": "liminf-h-05",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x)$",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "Racionaliza: $\\frac{x}{\\sqrt{x^2+x}+x} = \\frac{1}{\\sqrt{1+1/x}+1} \\to \\frac{1}{2}$."
  },
  {
    "id": "liminf-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{3} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (3) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{4} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (4) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{5} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (5) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{3} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (3) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{4} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (4) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{5} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (5) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{3} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (3) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{4} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (4) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{5} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (5) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{3} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (3) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{4} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (4) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{5} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (5) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-18",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{3} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (3) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{4} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (4) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{5} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (5) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-21",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{3} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (3) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-22",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{4} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (4) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-23",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{5} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (5) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-24",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{3} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (3) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-25",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{4} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (4) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-26",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{5} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (5) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-27",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{3} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (3) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-28",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{4} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (4) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-29",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{5} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (5) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-30",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{3} + 7}$",
    "options": [
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (3) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-31",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{4} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (4) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-32",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{5} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (5) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  },
  {
    "id": "liminf-h-33",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{3x^{3} - 2}{5x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{3}{5}",
        "correct": false
      },
      {
        "latex": "\\text{No existe}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": true
      }
    ],
    "explanation": "El grado del numerador (3) es estrictamente mayor que el grado del denominador (2), por lo que tiende a $\\infty$."
  },
  {
    "id": "liminf-h-34",
    "difficulty": "hard",
    "prompt": "Calcula: $\\lim_{x \\to \\infty} \\frac{4x^2 + 1}{x^{4} + 7}$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "\\frac{4}{7}",
        "correct": false
      },
      {
        "latex": "\\infty",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "El grado del denominador (4) es mayor que el del numerador (2). Por tanto, la fracción tiende a 0."
  }
]
};
