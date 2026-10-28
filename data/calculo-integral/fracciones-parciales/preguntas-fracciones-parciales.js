// data/calculo-integral/fracciones-parciales/preguntas-fracciones-parciales.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default [
  {
    "id": "fra-f-01",
    "difficulty": "easy",
    "prompt": "¿Qué descomposición corresponde a $\\frac{1}{(x+1)(x+2)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x+1} + \\frac{B}{x+2}",
        "correct": true
      },
      {
        "latex": "\\frac{Ax + B}{(x+1)(x+2)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x+1)^2} + \\frac{B}{(x+2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x+1}\\cdot\\frac{B}{x+2}",
        "correct": false
      }
    ],
    "explanation": "Factores lineales distintos: un término simple por cada factor."
  },
  {
    "id": "fra-f-02",
    "difficulty": "easy",
    "prompt": "¿Qué descomposición corresponde a $\\frac{1}{(x+1)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x+1} + \\frac{B}{(x+1)^2}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{(x+1)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x+1} + \\frac{B}{x+1}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x+1)^2}",
        "correct": false
      }
    ],
    "explanation": "Factor lineal repetido: un término por cada potencia hasta la del factor."
  },
  {
    "id": "fra-f-03",
    "difficulty": "easy",
    "prompt": "¿Qué descomposición corresponde a $\\frac{1}{x^2 + 1}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x^2 + 1}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x^2 + 1}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x + 1}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x^2} + \\frac{B}{1}",
        "correct": false
      }
    ],
    "explanation": "Factor cuadrático irreducible: numerador lineal $Ax + B$."
  },
  {
    "id": "fra-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuál es el primer paso para integrar $\\frac{P(x)}{Q(x)}$?",
    "options": [
      {
        "latex": "\\text{Verificar que grado de } P < \\text{ grado de } Q",
        "correct": true
      },
      {
        "latex": "\\text{Integrar directamente el numerador}",
        "correct": false
      },
      {
        "latex": "\\text{Derivar el denominador}",
        "correct": false
      },
      {
        "latex": "\\text{Multiplicar por } Q(x)",
        "correct": false
      }
    ],
    "explanation": "Si el grado del numerador es mayor o igual, primero se hace división larga."
  },
  {
    "id": "fra-f-05",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de fracciones parciales de $\\frac{1}{x(x+1)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x+1}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x(x+1)}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x(x+1)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x}",
        "correct": false
      }
    ],
    "explanation": "Dos factores lineales distintos ($x$ y $x+1$): $\\frac{A}{x} + \\frac{B}{x+1}$."
  },
  {
    "id": "fra-f-06",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula se usa para integrar un término $\\frac{A}{x+a}$?",
    "options": [
      {
        "latex": "A\\ln|x + a| + C",
        "correct": true
      },
      {
        "latex": "\\frac{A}{(x+a)^2} + C",
        "correct": false
      },
      {
        "latex": "A\\arctan(x + a) + C",
        "correct": false
      },
      {
        "latex": "A(x + a) + C",
        "correct": false
      }
    ],
    "explanation": "Es la fórmula (5) del formulario: $\\int\\frac{dv}{v} = \\ln|v| + C$."
  },
  {
    "id": "fra-f-07",
    "difficulty": "easy",
    "prompt": "En la descomposición, ¿qué representan $A$, $B$, $C$?",
    "options": [
      {
        "latex": "\\text{Constantes a determinar}",
        "correct": true
      },
      {
        "latex": "\\text{Variables de integración}",
        "correct": false
      },
      {
        "latex": "\\text{Los factores del denominador}",
        "correct": false
      },
      {
        "latex": "\\text{Las raíces del numerador}",
        "correct": false
      }
    ],
    "explanation": "Son constantes que se hallan evaluando raíces o igualando coeficientes."
  },
  {
    "id": "fra-f-08",
    "difficulty": "easy",
    "prompt": "¿Se puede factorizar $x^2 - 1$?",
    "options": [
      {
        "latex": "\\text{Sí: } (x-1)(x+1)",
        "correct": true
      },
      {
        "latex": "\\text{No, es irreducible}",
        "correct": false
      },
      {
        "latex": "\\text{Sí: } (x-1)^2",
        "correct": false
      },
      {
        "latex": "\\text{Sí: } x(x-1)",
        "correct": false
      }
    ],
    "explanation": "Diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$."
  },
  {
    "id": "fra-f-09",
    "difficulty": "easy",
    "prompt": "¿Qué tipo de factor es $(x - 3)$ en un denominador?",
    "options": [
      {
        "latex": "\\text{Factor lineal simple}",
        "correct": true
      },
      {
        "latex": "\\text{Factor lineal repetido}",
        "correct": false
      },
      {
        "latex": "\\text{Factor cuadrático irreducible}",
        "correct": false
      },
      {
        "latex": "\\text{No se puede descomponer}",
        "correct": false
      }
    ],
    "explanation": "Es lineal y de multiplicidad 1: aporta un término $\\frac{A}{x-3}$."
  },
  {
    "id": "fra-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{dx}{x + 1}$",
    "options": [
      {
        "latex": "\\ln|x + 1| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{(x+1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x + 1) + C",
        "correct": false
      },
      {
        "latex": "x + 1 + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (5) con $v = x + 1$: $\\ln|x+1| + C$."
  },
  {
    "id": "fra-f-100",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-11",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-12",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 5)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 5)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 5}$."
  },
  {
    "id": "fra-f-13",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-14",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-15",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 4)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 4)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 4}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 4}$."
  },
  {
    "id": "fra-f-16",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-17",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-18",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 3)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 3)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 3}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 3)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 3}$."
  },
  {
    "id": "fra-f-19",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-20",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-21",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 2)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 2)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 2}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 2}$."
  },
  {
    "id": "fra-f-22",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-23",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-24",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 8)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 8)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 8}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 8)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 8}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 8}$."
  },
  {
    "id": "fra-f-25",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-26",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-27",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 7)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 7)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 7}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 7)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 7}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 7}$."
  },
  {
    "id": "fra-f-28",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-29",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-30",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 6)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 6)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 6}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 6)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 6}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 6}$."
  },
  {
    "id": "fra-f-31",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-32",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-33",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 5)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 5)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 5}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 5}$."
  },
  {
    "id": "fra-f-34",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-35",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-36",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 4)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 4)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 4)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 4}$."
  },
  {
    "id": "fra-f-37",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-38",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-39",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 3)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 3)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 3}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 3)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 3}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 3}$."
  },
  {
    "id": "fra-f-40",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-41",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-42",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 2)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 2)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 2}$."
  },
  {
    "id": "fra-f-43",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-44",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-45",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 8)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 8)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 8}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 8)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 8}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 8}$."
  },
  {
    "id": "fra-f-46",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-47",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-48",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 7)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 7)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 7}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 7)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 7}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 7}$."
  },
  {
    "id": "fra-f-49",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-50",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-51",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 6)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 6)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 6)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 6}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 6}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 6}$."
  },
  {
    "id": "fra-f-52",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-53",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-54",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 5)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 5)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 5}$."
  },
  {
    "id": "fra-f-55",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-56",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-57",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 4)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 4)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 4)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 4}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 4}$."
  },
  {
    "id": "fra-f-58",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-59",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-60",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 3)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 3)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 3)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 3}$."
  },
  {
    "id": "fra-f-61",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-62",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-63",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 2)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 2)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 2}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 2}$."
  },
  {
    "id": "fra-f-64",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-65",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-66",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 8)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 8)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 8}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 8)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 8}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 8}$."
  },
  {
    "id": "fra-f-67",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-68",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-69",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 7)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 7)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 7}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 7)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 7}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 7}$."
  },
  {
    "id": "fra-f-70",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-71",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-72",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 6)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 6)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 6}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 6)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 6}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 6}$."
  },
  {
    "id": "fra-f-73",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-74",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-75",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 5)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 5)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 5}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 5}$."
  },
  {
    "id": "fra-f-76",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-77",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-78",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 4)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 4)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 4}$."
  },
  {
    "id": "fra-f-79",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-80",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-81",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 3)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 3)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 3)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 3}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 3}$."
  },
  {
    "id": "fra-f-82",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-83",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-84",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 2)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 2)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 2}$."
  },
  {
    "id": "fra-f-85",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-86",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-87",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 8)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 8)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 8}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 8)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 8}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 8}$."
  },
  {
    "id": "fra-f-88",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-89",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-90",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 7)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 7)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 7}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 7)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 7}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 7}$."
  },
  {
    "id": "fra-f-91",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-92",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-93",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 6)}$?",
    "options": [
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 6)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 6}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 6)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 6}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 6}$."
  },
  {
    "id": "fra-f-94",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 5)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{Bx + C}{(x - 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 5} + \\frac{B}{(x - 5)^2}$."
  },
  {
    "id": "fra-f-95",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-96",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 1)(x + 5)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 1)(x + 5)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 1)^2} + \\frac{B}{(x + 5)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} \\cdot \\frac{B}{x + 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 1} + \\frac{B}{x + 5}$."
  },
  {
    "id": "fra-f-97",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición de $\\frac{x + 1}{(x - 2)^2}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{Bx + C}{(x - 2)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}",
        "correct": true
      }
    ],
    "explanation": "Para un factor lineal repetido $(x - a)^2$, se incluye una fracción por cada potencia hasta la multiplicidad: $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$."
  },
  {
    "id": "fra-f-98",
    "difficulty": "easy",
    "prompt": "Para aplicar fracciones parciales a $\\frac{P(x)}{Q(x)}$ sin división previa, ¿qué relación debe cumplirse?",
    "options": [
      {
        "latex": "\\text{gr}(P) > \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) = \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) \\ge \\text{gr}(Q)",
        "correct": false
      },
      {
        "latex": "\\text{gr}(P) < \\text{gr}(Q)",
        "correct": true
      }
    ],
    "explanation": "La función racional debe ser propia, es decir, el grado del numerador debe ser estrictamente menor que el del denominador: $\\text{gr}(P) < \\text{gr}(Q)$."
  },
  {
    "id": "fra-f-99",
    "difficulty": "easy",
    "prompt": "¿Cuál es la forma de descomposición en fracciones parciales de $\\frac{1}{(x - 4)(x + 4)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{(x - 4)(x + 4)}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{(x - 4)^2} + \\frac{B}{(x + 4)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} \\cdot \\frac{B}{x + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 4} + \\frac{B}{x + 4}",
        "correct": true
      }
    ],
    "explanation": "Para factores lineales distintos $(x - a)(x - b)$, corresponde una constante sobre cada factor: $\\frac{A}{x - 4} + \\frac{B}{x + 4}$."
  },
  {
    "id": "fra-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{(x+1)(x+2)}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x+1}{x+2}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\ln\\left|\\frac{x+2}{x+1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x+1)(x+2)| + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x+1) + C",
        "correct": false
      }
    ],
    "explanation": "Con $A=1$, $B=-1$: $\\ln|x+1| - \\ln|x+2| = \\ln\\left|\\frac{x+1}{x+2}\\right| + C$."
  },
  {
    "id": "fra-m-02",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x+1}{x-1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x^2 - 1| + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      }
    ],
    "explanation": "$A=\\frac{1}{2}$, $B=-\\frac{1}{2}$: $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$."
  },
  {
    "id": "fra-m-03",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x(x+1)}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{x+1}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\ln\\left|\\frac{x+1}{x}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x| + \\ln|x+1| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x}{x+1}\\right| + C",
        "correct": false
      }
    ],
    "explanation": "Con $A=1$, $B=-1$: $\\ln|x| - \\ln|x+1| = \\ln\\left|\\frac{x}{x+1}\\right| + C$."
  },
  {
    "id": "fra-m-04",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$, ¿cuánto vale $A$?",
    "options": [
      {
        "latex": "A = 1",
        "correct": true
      },
      {
        "latex": "A = -1",
        "correct": false
      },
      {
        "latex": "A = \\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "A = 2",
        "correct": false
      }
    ],
    "explanation": "Evaluando $x = -1$: $1 = A(1)$, luego $A = 1$."
  },
  {
    "id": "fra-m-05",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - x}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x-1}{x}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\ln\\left|\\frac{x}{x-1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x(x-1)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-1}{x}\\right| + C",
        "correct": false
      }
    ],
    "explanation": "$x^2 - x = x(x-1)$. Con $A=-1$, $B=1$: $\\ln|x-1| - \\ln|x| + C$."
  },
  {
    "id": "fra-m-06",
    "difficulty": "medium",
    "prompt": "¿Cuál es la descomposición de $\\frac{1}{x^2 - 4}$?",
    "options": [
      {
        "latex": "\\frac{A}{x-2} + \\frac{B}{x+2}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x^2} + \\frac{B}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax+B}{x^2-4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x-2} + \\frac{B}{x-2}",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 4 = (x-2)(x+2)$: dos factores lineales distintos."
  },
  {
    "id": "fra-m-07",
    "difficulty": "medium",
    "prompt": "¿Cuál es la descomposición de $\\frac{1}{x(x+1)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{(x+1)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x+1}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax+B}{x(x+1)^2}",
        "correct": false
      }
    ],
    "explanation": "Un lineal simple ($x$) y uno repetido ($(x+1)^2$): tres términos."
  },
  {
    "id": "fra-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 2x}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x}{x+2}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\ln\\left|\\frac{x}{x+2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln|x(x+2)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x(x+2)| + C",
        "correct": false
      }
    ],
    "explanation": "$x^2 + 2x = x(x+2)$. Con $A=\\frac{1}{2}$, $B=-\\frac{1}{2}$: $\\frac{1}{2}\\ln|x| - \\frac{1}{2}\\ln|x+2| + C$."
  },
  {
    "id": "fra-m-09",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{x^2 - 4} = \\frac{A}{x-2} + \\frac{B}{x+2}$, ¿cuánto vale $B$?",
    "options": [
      {
        "latex": "B = -\\frac{1}{4}",
        "correct": true
      },
      {
        "latex": "B = \\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "B = -\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "B = \\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "Evaluando $x = -2$: $1 = B(-4)$, luego $B = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-10",
    "difficulty": "medium",
    "prompt": "¿Qué haces si el grado del numerador es mayor o igual que el del denominador?",
    "options": [
      {
        "latex": "\\text{División larga de polinomios}",
        "correct": true
      },
      {
        "latex": "\\text{Integrar directamente}",
        "correct": false
      },
      {
        "latex": "\\text{Multiplicar por el conjugado}",
        "correct": false
      },
      {
        "latex": "\\text{Cambiar el signo del denominador}",
        "correct": false
      }
    ],
    "explanation": "Primero se divide para dejar una fracción propia más un polinomio."
  },
  {
    "id": "fra-m-100",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{4}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-11",
    "difficulty": "medium",
    "prompt": "¿Cómo se factoriza $x^2 + x - 2$?",
    "options": [
      {
        "latex": "(x + 2)(x - 1)",
        "correct": true
      },
      {
        "latex": "(x - 2)(x + 1)",
        "correct": false
      },
      {
        "latex": "(x + 2)(x + 1)",
        "correct": false
      },
      {
        "latex": "(x - 2)(x - 1)",
        "correct": false
      }
    ],
    "explanation": "Buscamos dos números que sumen 1 y multipliquen $-2$: son $2$ y $-1$."
  },
  {
    "id": "fra-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x(x-3)}$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\ln\\left|\\frac{x-3}{x}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}\\ln\\left|\\frac{x}{x-3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x-3}{x}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln|x(x-3)| + C",
        "correct": false
      }
    ],
    "explanation": "Con $A=-\\frac{1}{3}$, $B=\\frac{1}{3}$: $\\frac{1}{3}\\ln|x-3| - \\frac{1}{3}\\ln|x| + C$."
  },
  {
    "id": "fra-m-13",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{8}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "8\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-14",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+5} + C$."
  },
  {
    "id": "fra-m-15",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 5)} = \\frac{A}{x - 1} + \\frac{B}{x - 5}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 5} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-16",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{4}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{4}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-17",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "7\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+3} + C$."
  },
  {
    "id": "fra-m-18",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 7)} = \\frac{A}{x - 4} + \\frac{B}{x - 7}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 7} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-19",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{7}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-20",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "4\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+1} + C$."
  },
  {
    "id": "fra-m-21",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 4)} = \\frac{A}{x - 2} + \\frac{B}{x - 4}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 4} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-22",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{3}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "3\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-23",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+4} + C$."
  },
  {
    "id": "fra-m-24",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 6)} = \\frac{A}{x - 5} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 6} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-25",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{6}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{6}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "6\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-26",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 2)^2}\\,dx$",
    "options": [
      {
        "latex": "4\\ln|x + 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 2)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x + 2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 2} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+2} + C$."
  },
  {
    "id": "fra-m-27",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 3)(x - 7)} = \\frac{A}{x - 3} + \\frac{B}{x - 7}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 3$, $A = \\frac{1}{3 - 7} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-28",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{2}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "2\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-29",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+5} + C$."
  },
  {
    "id": "fra-m-30",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 4)} = \\frac{A}{x - 1} + \\frac{B}{x - 4}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 4} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-31",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{5}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{5}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-32",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+3} + C$."
  },
  {
    "id": "fra-m-33",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 6)} = \\frac{A}{x - 4} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 6} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-34",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{8}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{8}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "8\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-35",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "7\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+1} + C$."
  },
  {
    "id": "fra-m-36",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 3)} = \\frac{A}{x - 2} + \\frac{B}{x - 3}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 3} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-37",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{4}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-38",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+4} + C$."
  },
  {
    "id": "fra-m-39",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 9)} = \\frac{A}{x - 5} + \\frac{B}{x - 9}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 9} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-40",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{7}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-41",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 2)^2}\\,dx$",
    "options": [
      {
        "latex": "7\\ln|x + 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 2)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x + 2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 2} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+2} + C$."
  },
  {
    "id": "fra-m-42",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 3)(x - 6)} = \\frac{A}{x - 3} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 3$, $A = \\frac{1}{3 - 6} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-43",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{3}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "3\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-44",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "4\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+5} + C$."
  },
  {
    "id": "fra-m-45",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 3)} = \\frac{A}{x - 1} + \\frac{B}{x - 3}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 3} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-46",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{6}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "6\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-47",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+3} + C$."
  },
  {
    "id": "fra-m-48",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 5)} = \\frac{A}{x - 4} + \\frac{B}{x - 5}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 5} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-49",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{2}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{2}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "2\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-50",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+1} + C$."
  },
  {
    "id": "fra-m-51",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 6)} = \\frac{A}{x - 2} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 6} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-52",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{5}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{5}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-53",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+4} + C$."
  },
  {
    "id": "fra-m-54",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 8)} = \\frac{A}{x - 5} + \\frac{B}{x - 8}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 8} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-55",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{8}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{8}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "8\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-56",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 2)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 2} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 2)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 2} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+2} + C$."
  },
  {
    "id": "fra-m-57",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 3)(x - 5)} = \\frac{A}{x - 3} + \\frac{B}{x - 5}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 3$, $A = \\frac{1}{3 - 5} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-58",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{4}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{4}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-59",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "7\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+5} + C$."
  },
  {
    "id": "fra-m-60",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 2)} = \\frac{A}{x - 1} + \\frac{B}{x - 2}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 2} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-61",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{7}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-62",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "4\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+3} + C$."
  },
  {
    "id": "fra-m-63",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 8)} = \\frac{A}{x - 4} + \\frac{B}{x - 8}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 8} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-64",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{3}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "3\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-65",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+1} + C$."
  },
  {
    "id": "fra-m-66",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 5)} = \\frac{A}{x - 2} + \\frac{B}{x - 5}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 5} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-67",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{6}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "6\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-68",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+4} + C$."
  },
  {
    "id": "fra-m-69",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 7)} = \\frac{A}{x - 5} + \\frac{B}{x - 7}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 7} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-70",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{2}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "2\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-71",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 2)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 2} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 2)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 2} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+2} + C$."
  },
  {
    "id": "fra-m-72",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 3)(x - 4)} = \\frac{A}{x - 3} + \\frac{B}{x - 4}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 3$, $A = \\frac{1}{3 - 4} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-73",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{5}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-74",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+5} + C$."
  },
  {
    "id": "fra-m-75",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 5)} = \\frac{A}{x - 1} + \\frac{B}{x - 5}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 5} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-76",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{8}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{8}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "8\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-77",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+3} + C$."
  },
  {
    "id": "fra-m-78",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 7)} = \\frac{A}{x - 4} + \\frac{B}{x - 7}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 7} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-79",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{4}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{4}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-80",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+1} + C$."
  },
  {
    "id": "fra-m-81",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 4)} = \\frac{A}{x - 2} + \\frac{B}{x - 4}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 4} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-82",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{7}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-83",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+4} + C$."
  },
  {
    "id": "fra-m-84",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 6)} = \\frac{A}{x - 5} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 6} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-85",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{3}{x - 1}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{(x - 1)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x - 1} + C",
        "correct": false
      },
      {
        "latex": "3\\ln|x - 1| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-86",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 2)^2}\\,dx$",
    "options": [
      {
        "latex": "4\\ln|x + 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 2)} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x + 2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 2} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+2} + C$."
  },
  {
    "id": "fra-m-87",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 3)(x - 7)} = \\frac{A}{x - 3} + \\frac{B}{x - 7}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 3$, $A = \\frac{1}{3 - 7} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-m-88",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{6}{x - 4}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 4| + C",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x - 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{(x - 4)^2} + C",
        "correct": false
      },
      {
        "latex": "6\\ln|x - 4| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-89",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 5)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 5} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 5| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 5)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 5} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+5} + C$."
  },
  {
    "id": "fra-m-90",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 1)(x - 4)} = \\frac{A}{x - 1} + \\frac{B}{x - 4}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 1$, $A = \\frac{1}{1 - 4} = -\\frac{1}{3}$."
  },
  {
    "id": "fra-m-91",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{2}{x - 2}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 2| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{(x - 2)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x - 2} + C",
        "correct": false
      },
      {
        "latex": "2\\ln|x - 2| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-92",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 3)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 3)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 3| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+3} + C$."
  },
  {
    "id": "fra-m-93",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 4)(x - 6)} = \\frac{A}{x - 4} + \\frac{B}{x - 6}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 4$, $A = \\frac{1}{4 - 6} = -\\frac{1}{2}$."
  },
  {
    "id": "fra-m-94",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{5}{x - 5}\\,dx$",
    "options": [
      {
        "latex": "-\\frac{5}{(x - 5)^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x - 5} + C",
        "correct": false
      },
      {
        "latex": "\\ln|x - 5| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x - 5| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-95",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{7}{(x + 1)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{7}{x + 1} + C",
        "correct": false
      },
      {
        "latex": "7\\ln|x + 1| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{2(x + 1)} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{7}{x + 1} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $7$: $-\\frac{7}{x+1} + C$."
  },
  {
    "id": "fra-m-96",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 2)(x - 3)} = \\frac{A}{x - 2} + \\frac{B}{x - 3}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 2$, $A = \\frac{1}{2 - 3} = -\\frac{1}{1}$."
  },
  {
    "id": "fra-m-97",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial: $\\int \\frac{8}{x - 3}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x - 3| + C",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x - 3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{8}{(x - 3)^2} + C",
        "correct": false
      },
      {
        "latex": "8\\ln|x - 3| + C",
        "correct": true
      }
    ],
    "explanation": "La integral directa es $c\\int \\frac{dx}{x-a} = c\\ln|x-a| + C$."
  },
  {
    "id": "fra-m-98",
    "difficulty": "medium",
    "prompt": "Calcula la integral del término parcial repetido: $\\int \\frac{4}{(x + 4)^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{4}{x + 4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{2(x + 4)} + C",
        "correct": false
      },
      {
        "latex": "4\\ln|x + 4| + C",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{x + 4} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de potencias: $\\int (x+a)^{-2} dx = -\\frac{1}{x+a}$, multiplicando por $4$: $-\\frac{4}{x+4} + C$."
  },
  {
    "id": "fra-m-99",
    "difficulty": "medium",
    "prompt": "En $\\frac{1}{(x - 5)(x - 9)} = \\frac{A}{x - 5} + \\frac{B}{x - 9}$, ¿cuál es el valor de $A$?",
    "options": [
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}",
        "correct": true
      }
    ],
    "explanation": "Usando el método de Heaviside (tapar): evaluando en $x = 5$, $A = \\frac{1}{5 - 9} = -\\frac{1}{4}$."
  },
  {
    "id": "fra-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 4x + 3}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-1}{x-3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x^2 - 4x + 3| + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x-2) + C",
        "correct": false
      }
    ],
    "explanation": "Factoriza $(x-1)(x-3)$. Con $A=-\\frac{1}{2}$, $B=\\frac{1}{2}$: $\\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C$."
  },
  {
    "id": "fra-h-02",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{x}{x^2 - 1}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln|x^2 - 1| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|x^2 - 1| + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      }
    ],
    "explanation": "El numerador es $\\frac{1}{2}$ veces la derivada del denominador: $\\frac{1}{2}\\ln|x^2-1| + C$."
  },
  {
    "id": "fra-h-03",
    "difficulty": "hard",
    "prompt": "¿Cuál es la descomposición de $\\frac{1}{x(x-1)^2}$?",
    "options": [
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{(x-1)^2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x-1}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x(x-1)^2}",
        "correct": false
      }
    ],
    "explanation": "Lineal simple $x$ + lineal repetido $(x-1)^2$: tres términos."
  },
  {
    "id": "fra-h-04",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 2x + 2}$",
    "options": [
      {
        "latex": "\\arctan(x + 1) + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x+1}{2} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 2x + 2) + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x + 2) + C",
        "correct": false
      }
    ],
    "explanation": "El denominador es irreducible: $(x+1)^2 + 1$. Fórmula (18) con $a=1$."
  },
  {
    "id": "fra-h-05",
    "difficulty": "hard",
    "prompt": "En $\\frac{x}{x^2 - 1} = \\frac{A}{x-1} + \\frac{B}{x+1}$, ¿cuánto valen $A$ y $B$?",
    "options": [
      {
        "latex": "A = \\frac{1}{2},\\ B = \\frac{1}{2}",
        "correct": true
      },
      {
        "latex": "A = \\frac{1}{2},\\ B = -\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "A = 1,\\ B = -1",
        "correct": false
      },
      {
        "latex": "A = -\\frac{1}{2},\\ B = \\frac{1}{2}",
        "correct": false
      }
    ],
    "explanation": "$x = A(x+1) + B(x-1)$: en $x=1$ da $A=\\frac{1}{2}$; en $x=-1$ da $B=\\frac{1}{2}$."
  },
  {
    "id": "fra-h-06",
    "difficulty": "hard",
    "prompt": "¿Cómo se factoriza $x^3 - x$?",
    "options": [
      {
        "latex": "x(x - 1)(x + 1)",
        "correct": true
      },
      {
        "latex": "x(x^2 - 1)",
        "correct": false
      },
      {
        "latex": "(x^2 - 1)(x + 1)",
        "correct": false
      },
      {
        "latex": "x(x - 1)^2",
        "correct": false
      }
    ],
    "explanation": "$x^3 - x = x(x^2 - 1) = x(x-1)(x+1)$, tres lineales distintos."
  },
  {
    "id": "fra-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2(x+1)}$",
    "options": [
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1} \\text{ (descomponer)}",
        "correct": true
      },
      {
        "latex": "\\frac{A}{x^2} + \\frac{B}{x+1}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x} + \\frac{B}{x+1}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax+B}{x^2(x+1)}",
        "correct": false
      }
    ],
    "explanation": "Lineal repetido $x^2$ (dos términos) + lineal simple $x+1$: $\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1}$."
  },
  {
    "id": "fra-h-08",
    "difficulty": "hard",
    "prompt": "¿Cuál integral se resuelve con fracciones parciales?",
    "options": [
      {
        "latex": "\\int \\frac{dx}{x^2 - 5x + 6}",
        "correct": true
      },
      {
        "latex": "\\int \\frac{dx}{\\sqrt{x^2 + 1}}",
        "correct": false
      },
      {
        "latex": "\\int x\\,e^x\\,dx",
        "correct": false
      },
      {
        "latex": "\\int \\cos x\\,dx",
        "correct": false
      }
    ],
    "explanation": "$x^2 - 5x + 6 = (x-2)(x-3)$: cociente de polinomios factorizable, ideal para fracciones parciales."
  },
  {
    "id": "fra-h-09",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-10",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-100",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-12",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-13",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-15",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-16",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-18",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-19",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-21",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-22",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-23",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-24",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-25",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-26",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-27",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-28",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-29",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-30",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-31",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-32",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-33",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-34",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-35",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-36",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-37",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-38",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-39",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-40",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-41",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-42",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-43",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-44",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-45",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-46",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-47",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-48",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-49",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-50",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-51",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-52",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-53",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-54",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-55",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-56",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-57",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-58",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-59",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-60",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-61",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-62",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-63",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-64",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-65",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-66",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-67",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-68",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-69",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-70",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-71",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-72",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-73",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-74",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-75",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-76",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-77",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-78",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-79",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-80",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-81",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-82",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-83",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-84",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-85",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-86",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-87",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  },
  {
    "id": "fra-h-88",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 4)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 2}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 4}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 4)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-89",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-90",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 3)(x - 4)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 3)(x - 4)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 4} - \\frac{1}{x - 3}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 4| - \\ln|x - 3|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 3}\\right| + C$."
  },
  {
    "id": "fra-h-91",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 25)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 25}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 5} + \\frac{C}{x - 5}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 25}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 25)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-92",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-93",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 2)(x - 3)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 2)(x - 3)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 3} - \\frac{1}{x - 2}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 3| - \\ln|x - 2|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 3}{x - 2}\\right| + C$."
  },
  {
    "id": "fra-h-94",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 16)}$?",
    "options": [
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 4} + \\frac{C}{x - 4}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 16}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 16}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 16)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-95",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-96",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 1)(x - 2)}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 1)(x - 2)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 2} - \\frac{1}{x - 1}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 2| - \\ln|x - 1|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$."
  },
  {
    "id": "fra-h-97",
    "difficulty": "hard",
    "prompt": "¿Cuál es la forma correcta para $\\frac{x^2 + 1}{(x - 1)(x^2 + 9)}$?",
    "options": [
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{B}{x + 3} + \\frac{C}{x - 3}",
        "correct": false
      },
      {
        "latex": "\\frac{Ax + B}{x - 1} + \\frac{Cx + D}{x^2 + 9}",
        "correct": false
      },
      {
        "latex": "\\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 9}",
        "correct": true
      }
    ],
    "explanation": "Para el factor lineal $(x - 1)$ corresponde una constante $A$; para el factor cuadrático irreducible $(x^2 + 9)$ corresponde un numerador lineal $Bx + C$."
  },
  {
    "id": "fra-h-98",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Separando la fracción en $\\frac{2x}{x^2 + 16} + \\frac{1}{x^2 + 16}$. La primera integral es $\\ln(x^2 + 16)$ y la segunda es $\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$."
  },
  {
    "id": "fra-h-99",
    "difficulty": "hard",
    "prompt": "Calcula la integral completa por fracciones parciales: $\\int \\frac{1}{(x - 4)(x - 5)}\\,dx$",
    "options": [
      {
        "latex": "\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln|(x - 4)(x - 5)| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 4}{x - 5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Descomponiendo: $\\frac{1}{1}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 4}\\right)$. Al integrar da $\\frac{1}{1}(\\ln|x - 5| - \\ln|x - 4|) + C = \\frac{1}{1}\\ln\\left|\\frac{x - 5}{x - 4}\\right| + C$."
  }
];
