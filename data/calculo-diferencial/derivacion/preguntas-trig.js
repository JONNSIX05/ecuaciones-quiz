// data/calculo-diferencial/derivacion/preguntas-trig.js
// Catálogo ampliado a 90 preguntas (30 fáciles, 30 medias, 30 difíciles).

export default [
  {
    "id": "dert-f-01",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": true
      },
      {
        "latex": "-\\cos x",
        "correct": false
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "-\\sin x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XIII con $v = x$: la derivada del seno es el coseno."
  },
  {
    "id": "dert-f-02",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\cos x$",
    "options": [
      {
        "latex": "-\\sin x",
        "correct": true
      },
      {
        "latex": "\\sin x",
        "correct": false
      },
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "-\\cos x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XIV: la derivada del coseno es menos seno. El signo negativo es clave."
  },
  {
    "id": "dert-f-03",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\tan x$",
    "options": [
      {
        "latex": "\\sec^2 x",
        "correct": true
      },
      {
        "latex": "\\tan^2 x",
        "correct": false
      },
      {
        "latex": "\\cot x",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\cos x}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XV: la derivada de la tangente es secante al cuadrado."
  },
  {
    "id": "dert-f-04",
    "difficulty": "easy",
    "prompt": "¿Qué regla usas para derivar $f(x) = \\tan x$?",
    "options": [
      {
        "latex": "\\text{Derivada de la tangente (XV)}",
        "correct": true
      },
      {
        "latex": "\\text{Regla del cociente (VII) obligatoriamente}",
        "correct": false
      },
      {
        "latex": "\\text{Regla de la potencia (VIa)}",
        "correct": false
      },
      {
        "latex": "\\text{Derivada del seno (XIII)}",
        "correct": false
      }
    ],
    "explanation": "Fórmula directa XV: $\\frac{d}{dx}(\\tan x) = \\sec^2 x$."
  },
  {
    "id": "dert-f-05",
    "difficulty": "easy",
    "prompt": "¿Cuál es la fórmula XVI para $\\frac{d}{dx}(\\cot v)$?",
    "options": [
      {
        "latex": "-\\csc^2 v \\cdot \\frac{dv}{dx}",
        "correct": true
      },
      {
        "latex": "\\csc^2 v \\cdot \\frac{dv}{dx}",
        "correct": false
      },
      {
        "latex": "-\\sec^2 v \\cdot \\frac{dv}{dx}",
        "correct": false
      },
      {
        "latex": "\\cot^2 v \\cdot \\frac{dv}{dx}",
        "correct": false
      }
    ],
    "explanation": "La cotangente deriva menos cosecante al cuadrado."
  },
  {
    "id": "dert-f-06",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\sin x$",
    "options": [
      {
        "latex": "-3 \\cos x",
        "correct": false
      },
      {
        "latex": "3 -\\cos x",
        "correct": false
      },
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "3 \\cos x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(3 \\cdot f(x))' = 3 f'(x)$. La derivada de $\\sin x$ es $\\cos x$."
  },
  {
    "id": "dert-f-07",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\cos x$",
    "options": [
      {
        "latex": "-\\sin x",
        "correct": false
      },
      {
        "latex": "4 \\sin x",
        "correct": false
      },
      {
        "latex": "-4 -\\sin x",
        "correct": false
      },
      {
        "latex": "4 -\\sin x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(4 \\cdot f(x))' = 4 f'(x)$. La derivada de $\\cos x$ es $-\\sin x$."
  },
  {
    "id": "dert-f-08",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\tan x$",
    "options": [
      {
        "latex": "-5 \\sec^2 x",
        "correct": false
      },
      {
        "latex": "5 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "5 \\sec^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(5 \\cdot f(x))' = 5 f'(x)$. La derivada de $\\tan x$ es $\\sec^2 x$."
  },
  {
    "id": "dert-f-09",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 6 \\cot x$",
    "options": [
      {
        "latex": "-\\csc^2 x",
        "correct": false
      },
      {
        "latex": "6 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "-6 -\\csc^2 x",
        "correct": false
      },
      {
        "latex": "6 -\\csc^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(6 \\cdot f(x))' = 6 f'(x)$. La derivada de $\\cot x$ es $-\\csc^2 x$."
  },
  {
    "id": "dert-f-10",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\sec x$",
    "options": [
      {
        "latex": "-2 \\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "2 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "\\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "2 \\sec x \\tan x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(2 \\cdot f(x))' = 2 f'(x)$. La derivada de $\\sec x$ es $\\sec x \\tan x$."
  },
  {
    "id": "dert-f-11",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\csc x$",
    "options": [
      {
        "latex": "-\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-3 -\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "3 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "3 -\\csc x \\cot x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(3 \\cdot f(x))' = 3 f'(x)$. La derivada de $\\csc x$ es $-\\csc x \\cot x$."
  },
  {
    "id": "dert-f-12",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "-4 \\cos x",
        "correct": false
      },
      {
        "latex": "4 -\\cos x",
        "correct": false
      },
      {
        "latex": "4 \\cos x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(4 \\cdot f(x))' = 4 f'(x)$. La derivada de $\\sin x$ es $\\cos x$."
  },
  {
    "id": "dert-f-13",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\cos x$",
    "options": [
      {
        "latex": "-\\sin x",
        "correct": false
      },
      {
        "latex": "-5 -\\sin x",
        "correct": false
      },
      {
        "latex": "5 \\sin x",
        "correct": false
      },
      {
        "latex": "5 -\\sin x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(5 \\cdot f(x))' = 5 f'(x)$. La derivada de $\\cos x$ es $-\\sin x$."
  },
  {
    "id": "dert-f-14",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 6 \\tan x$",
    "options": [
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "6 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "-6 \\sec^2 x",
        "correct": false
      },
      {
        "latex": "6 \\sec^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(6 \\cdot f(x))' = 6 f'(x)$. La derivada de $\\tan x$ es $\\sec^2 x$."
  },
  {
    "id": "dert-f-15",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\cot x$",
    "options": [
      {
        "latex": "-\\csc^2 x",
        "correct": false
      },
      {
        "latex": "-2 -\\csc^2 x",
        "correct": false
      },
      {
        "latex": "2 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "2 -\\csc^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(2 \\cdot f(x))' = 2 f'(x)$. La derivada de $\\cot x$ es $-\\csc^2 x$."
  },
  {
    "id": "dert-f-16",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\sec x$",
    "options": [
      {
        "latex": "\\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "-3 \\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "3 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "3 \\sec x \\tan x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(3 \\cdot f(x))' = 3 f'(x)$. La derivada de $\\sec x$ es $\\sec x \\tan x$."
  },
  {
    "id": "dert-f-17",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\csc x$",
    "options": [
      {
        "latex": "-\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-4 -\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "4 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "4 -\\csc x \\cot x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(4 \\cdot f(x))' = 4 f'(x)$. La derivada de $\\csc x$ es $-\\csc x \\cot x$."
  },
  {
    "id": "dert-f-18",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "5 -\\cos x",
        "correct": false
      },
      {
        "latex": "-5 \\cos x",
        "correct": false
      },
      {
        "latex": "5 \\cos x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(5 \\cdot f(x))' = 5 f'(x)$. La derivada de $\\sin x$ es $\\cos x$."
  },
  {
    "id": "dert-f-19",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 6 \\cos x$",
    "options": [
      {
        "latex": "-\\sin x",
        "correct": false
      },
      {
        "latex": "-6 -\\sin x",
        "correct": false
      },
      {
        "latex": "6 \\sin x",
        "correct": false
      },
      {
        "latex": "6 -\\sin x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(6 \\cdot f(x))' = 6 f'(x)$. La derivada de $\\cos x$ es $-\\sin x$."
  },
  {
    "id": "dert-f-20",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\tan x$",
    "options": [
      {
        "latex": "-2 \\sec^2 x",
        "correct": false
      },
      {
        "latex": "2 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "2 \\sec^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(2 \\cdot f(x))' = 2 f'(x)$. La derivada de $\\tan x$ es $\\sec^2 x$."
  },
  {
    "id": "dert-f-21",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\cot x$",
    "options": [
      {
        "latex": "-\\csc^2 x",
        "correct": false
      },
      {
        "latex": "-3 -\\csc^2 x",
        "correct": false
      },
      {
        "latex": "3 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "3 -\\csc^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(3 \\cdot f(x))' = 3 f'(x)$. La derivada de $\\cot x$ es $-\\csc^2 x$."
  },
  {
    "id": "dert-f-22",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\sec x$",
    "options": [
      {
        "latex": "\\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "-4 \\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "4 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "4 \\sec x \\tan x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(4 \\cdot f(x))' = 4 f'(x)$. La derivada de $\\sec x$ es $\\sec x \\tan x$."
  },
  {
    "id": "dert-f-23",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\csc x$",
    "options": [
      {
        "latex": "-5 -\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "5 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "5 -\\csc x \\cot x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(5 \\cdot f(x))' = 5 f'(x)$. La derivada de $\\csc x$ es $-\\csc x \\cot x$."
  },
  {
    "id": "dert-f-24",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 6 \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "6 -\\cos x",
        "correct": false
      },
      {
        "latex": "-6 \\cos x",
        "correct": false
      },
      {
        "latex": "6 \\cos x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(6 \\cdot f(x))' = 6 f'(x)$. La derivada de $\\sin x$ es $\\cos x$."
  },
  {
    "id": "dert-f-25",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\cos x$",
    "options": [
      {
        "latex": "-\\sin x",
        "correct": false
      },
      {
        "latex": "2 \\sin x",
        "correct": false
      },
      {
        "latex": "-2 -\\sin x",
        "correct": false
      },
      {
        "latex": "2 -\\sin x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(2 \\cdot f(x))' = 2 f'(x)$. La derivada de $\\cos x$ es $-\\sin x$."
  },
  {
    "id": "dert-f-26",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\tan x$",
    "options": [
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "-3 \\sec^2 x",
        "correct": false
      },
      {
        "latex": "3 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "3 \\sec^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(3 \\cdot f(x))' = 3 f'(x)$. La derivada de $\\tan x$ es $\\sec^2 x$."
  },
  {
    "id": "dert-f-27",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\cot x$",
    "options": [
      {
        "latex": "-4 -\\csc^2 x",
        "correct": false
      },
      {
        "latex": "4 \\csc^2 x",
        "correct": false
      },
      {
        "latex": "-\\csc^2 x",
        "correct": false
      },
      {
        "latex": "4 -\\csc^2 x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(4 \\cdot f(x))' = 4 f'(x)$. La derivada de $\\cot x$ es $-\\csc^2 x$."
  },
  {
    "id": "dert-f-28",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\sec x$",
    "options": [
      {
        "latex": "\\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "5 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-5 \\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "5 \\sec x \\tan x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(5 \\cdot f(x))' = 5 f'(x)$. La derivada de $\\sec x$ es $\\sec x \\tan x$."
  },
  {
    "id": "dert-f-29",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 6 \\csc x$",
    "options": [
      {
        "latex": "-6 -\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "6 \\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "6 -\\csc x \\cot x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(6 \\cdot f(x))' = 6 f'(x)$. La derivada de $\\csc x$ es $-\\csc x \\cot x$."
  },
  {
    "id": "dert-f-30",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\sin x$",
    "options": [
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "2 -\\cos x",
        "correct": false
      },
      {
        "latex": "-2 \\cos x",
        "correct": false
      },
      {
        "latex": "2 \\cos x",
        "correct": true
      }
    ],
    "explanation": "Constante por función: $(2 \\cdot f(x))' = 2 f'(x)$. La derivada de $\\sin x$ es $\\cos x$."
  },
  {
    "id": "dert-m-01",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\sec x$",
    "options": [
      {
        "latex": "\\sec x \\tan x",
        "correct": true
      },
      {
        "latex": "\\sec^2 x",
        "correct": false
      },
      {
        "latex": "\\sec x \\cot x",
        "correct": false
      },
      {
        "latex": "-\\sec x \\tan x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XVII: la secante deriva secante por tangente."
  },
  {
    "id": "dert-m-02",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\csc x$",
    "options": [
      {
        "latex": "-\\csc x \\cot x",
        "correct": true
      },
      {
        "latex": "\\csc x \\cot x",
        "correct": false
      },
      {
        "latex": "-\\csc^2 x",
        "correct": false
      },
      {
        "latex": "\\csc x \\tan x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XVIII: menos cosecante por cotangente."
  },
  {
    "id": "dert-m-03",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\operatorname{vers} x$",
    "options": [
      {
        "latex": "\\sin x",
        "correct": true
      },
      {
        "latex": "-\\sin x",
        "correct": false
      },
      {
        "latex": "\\cos x",
        "correct": false
      },
      {
        "latex": "1 - \\cos x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XIX con $v = x$: $(1 - \\cos x)' = 0 + \\sin x = \\sin x$."
  },
  {
    "id": "dert-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuál derivada lleva signo negativo?",
    "options": [
      {
        "latex": "\\frac{d}{dx}(\\cos x)",
        "correct": true
      },
      {
        "latex": "\\frac{d}{dx}(\\sin x)",
        "correct": false
      },
      {
        "latex": "\\frac{d}{dx}(\\tan x)",
        "correct": false
      },
      {
        "latex": "\\frac{d}{dx}(\\sec x)",
        "correct": false
      }
    ],
    "explanation": "Fórmula XIV: $(\\cos x)' = -\\sin x$. Las derivadas de $\\sin$, $\\tan$ y $\\sec$ son positivas en esa forma."
  },
  {
    "id": "dert-m-05",
    "difficulty": "medium",
    "prompt": "¿Qué reglas usas para derivar $f(x) = \\operatorname{vers} x$ (seno verso)?",
    "options": [
      {
        "latex": "\\text{Derivada del verso (XIX), o escribir } 1 - \\cos x \\text{ y derivar}",
        "correct": true
      },
      {
        "latex": "\\text{Solo regla de la potencia (VIa)}",
        "correct": false
      },
      {
        "latex": "\\text{Regla del producto (V)}",
        "correct": false
      },
      {
        "latex": "\\text{No se puede derivar}",
        "correct": false
      }
    ],
    "explanation": "$\\operatorname{vers} x = 1 - \\cos x$: derivando queda $\\sin x$ (fórmula XIX)."
  },
  {
    "id": "dert-m-06",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sin 2x$",
    "options": [
      {
        "latex": "\\cos 2x",
        "correct": false
      },
      {
        "latex": "4 \\cos 2x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} \\cos 2x",
        "correct": false
      },
      {
        "latex": "2 \\cos 2x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[2x] = 2$."
  },
  {
    "id": "dert-m-07",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cos 3x$",
    "options": [
      {
        "latex": "-\\sin 3x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3} -\\sin 3x",
        "correct": false
      },
      {
        "latex": "9 -\\sin 3x",
        "correct": false
      },
      {
        "latex": "3 -\\sin 3x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[3x] = 3$."
  },
  {
    "id": "dert-m-08",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\tan 4x$",
    "options": [
      {
        "latex": "\\sec^2 4x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4} \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "16 \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "4 \\sec^2 4x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[4x] = 4$."
  },
  {
    "id": "dert-m-09",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cot 5x$",
    "options": [
      {
        "latex": "-\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "25 -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5} -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "5 -\\csc^2 5x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[5x] = 5$."
  },
  {
    "id": "dert-m-10",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sec 6x$",
    "options": [
      {
        "latex": "\\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{6} \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "36 \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "6 \\sec 6x \\tan 6x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[6x] = 6$."
  },
  {
    "id": "dert-m-11",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\csc 7x$",
    "options": [
      {
        "latex": "-\\frac{1}{7} -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "49 -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "-\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "7 -\\csc 7x \\cot 7x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[7x] = 7$."
  },
  {
    "id": "dert-m-12",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sin 2x$",
    "options": [
      {
        "latex": "\\cos 2x",
        "correct": false
      },
      {
        "latex": "4 \\cos 2x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} \\cos 2x",
        "correct": false
      },
      {
        "latex": "2 \\cos 2x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[2x] = 2$."
  },
  {
    "id": "dert-m-13",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cos 3x$",
    "options": [
      {
        "latex": "-\\sin 3x",
        "correct": false
      },
      {
        "latex": "9 -\\sin 3x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3} -\\sin 3x",
        "correct": false
      },
      {
        "latex": "3 -\\sin 3x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[3x] = 3$."
  },
  {
    "id": "dert-m-14",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\tan 4x$",
    "options": [
      {
        "latex": "\\sec^2 4x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4} \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "16 \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "4 \\sec^2 4x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[4x] = 4$."
  },
  {
    "id": "dert-m-15",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cot 5x$",
    "options": [
      {
        "latex": "-\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5} -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "25 -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "5 -\\csc^2 5x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[5x] = 5$."
  },
  {
    "id": "dert-m-16",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sec 6x$",
    "options": [
      {
        "latex": "\\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "36 \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{6} \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "6 \\sec 6x \\tan 6x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[6x] = 6$."
  },
  {
    "id": "dert-m-17",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\csc 7x$",
    "options": [
      {
        "latex": "-\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "49 -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{7} -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "7 -\\csc 7x \\cot 7x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[7x] = 7$."
  },
  {
    "id": "dert-m-18",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sin 2x$",
    "options": [
      {
        "latex": "-\\frac{1}{2} \\cos 2x",
        "correct": false
      },
      {
        "latex": "4 \\cos 2x",
        "correct": false
      },
      {
        "latex": "\\cos 2x",
        "correct": false
      },
      {
        "latex": "2 \\cos 2x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[2x] = 2$."
  },
  {
    "id": "dert-m-19",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cos 3x$",
    "options": [
      {
        "latex": "-\\sin 3x",
        "correct": false
      },
      {
        "latex": "9 -\\sin 3x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3} -\\sin 3x",
        "correct": false
      },
      {
        "latex": "3 -\\sin 3x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[3x] = 3$."
  },
  {
    "id": "dert-m-20",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\tan 4x$",
    "options": [
      {
        "latex": "-\\frac{1}{4} \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "16 \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "\\sec^2 4x",
        "correct": false
      },
      {
        "latex": "4 \\sec^2 4x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[4x] = 4$."
  },
  {
    "id": "dert-m-21",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cot 5x$",
    "options": [
      {
        "latex": "-\\frac{1}{5} -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "25 -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "-\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "5 -\\csc^2 5x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[5x] = 5$."
  },
  {
    "id": "dert-m-22",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sec 6x$",
    "options": [
      {
        "latex": "-\\frac{1}{6} \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "36 \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "\\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "6 \\sec 6x \\tan 6x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[6x] = 6$."
  },
  {
    "id": "dert-m-23",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\csc 7x$",
    "options": [
      {
        "latex": "-\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{7} -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "49 -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "7 -\\csc 7x \\cot 7x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[7x] = 7$."
  },
  {
    "id": "dert-m-24",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sin 2x$",
    "options": [
      {
        "latex": "\\cos 2x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} \\cos 2x",
        "correct": false
      },
      {
        "latex": "4 \\cos 2x",
        "correct": false
      },
      {
        "latex": "2 \\cos 2x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[2x] = 2$."
  },
  {
    "id": "dert-m-25",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cos 3x$",
    "options": [
      {
        "latex": "-\\sin 3x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3} -\\sin 3x",
        "correct": false
      },
      {
        "latex": "9 -\\sin 3x",
        "correct": false
      },
      {
        "latex": "3 -\\sin 3x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[3x] = 3$."
  },
  {
    "id": "dert-m-26",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\tan 4x$",
    "options": [
      {
        "latex": "\\sec^2 4x",
        "correct": false
      },
      {
        "latex": "16 \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4} \\sec^2 4x",
        "correct": false
      },
      {
        "latex": "4 \\sec^2 4x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[4x] = 4$."
  },
  {
    "id": "dert-m-27",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\cot 5x$",
    "options": [
      {
        "latex": "-\\frac{1}{5} -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "25 -\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "-\\csc^2 5x",
        "correct": false
      },
      {
        "latex": "5 -\\csc^2 5x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[5x] = 5$."
  },
  {
    "id": "dert-m-28",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sec 6x$",
    "options": [
      {
        "latex": "\\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{6} \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "36 \\sec 6x \\tan 6x",
        "correct": false
      },
      {
        "latex": "6 \\sec 6x \\tan 6x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[6x] = 6$."
  },
  {
    "id": "dert-m-29",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\csc 7x$",
    "options": [
      {
        "latex": "-\\frac{1}{7} -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "49 -\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "-\\csc 7x \\cot 7x",
        "correct": false
      },
      {
        "latex": "7 -\\csc 7x \\cot 7x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[7x] = 7$."
  },
  {
    "id": "dert-m-30",
    "difficulty": "medium",
    "prompt": "Aplica regla de la cadena: deriva $f(x) = \\sin 2x$",
    "options": [
      {
        "latex": "\\cos 2x",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} \\cos 2x",
        "correct": false
      },
      {
        "latex": "4 \\cos 2x",
        "correct": false
      },
      {
        "latex": "2 \\cos 2x",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la cadena: se multiplica por la derivada interna $\\frac{d}{dx}[2x] = 2$."
  },
  {
    "id": "dert-h-01",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = \\sin x + \\cos x$",
    "options": [
      {
        "latex": "\\cos x - \\sin x",
        "correct": true
      },
      {
        "latex": "\\cos x + \\sin x",
        "correct": false
      },
      {
        "latex": "-\\cos x - \\sin x",
        "correct": false
      },
      {
        "latex": "\\sin x - \\cos x",
        "correct": false
      }
    ],
    "explanation": "Suma (III) con XIII y XIV: $\\cos x + (-\\sin x) = \\cos x - \\sin x$."
  },
  {
    "id": "dert-h-02",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = \\tan x + \\cot x$",
    "options": [
      {
        "latex": "\\sec^2 x - \\csc^2 x",
        "correct": true
      },
      {
        "latex": "\\sec^2 x + \\csc^2 x",
        "correct": false
      },
      {
        "latex": "\\csc^2 x - \\sec^2 x",
        "correct": false
      },
      {
        "latex": "\\sec^2 x \\cdot \\csc^2 x",
        "correct": false
      }
    ],
    "explanation": "Fórmulas XV y XVI: $\\sec^2 x + (-\\csc^2 x) = \\sec^2 x - \\csc^2 x$."
  },
  {
    "id": "dert-h-03",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = 2 \\sec x$",
    "options": [
      {
        "latex": "2 \\sec x \\tan x",
        "correct": true
      },
      {
        "latex": "2 \\sec^2 x",
        "correct": false
      },
      {
        "latex": "\\sec x \\tan x",
        "correct": false
      },
      {
        "latex": "2 \\tan x",
        "correct": false
      }
    ],
    "explanation": "Constante por función (IV) + fórmula XVII: $2 \\sec x \\tan x$."
  },
  {
    "id": "dert-h-04",
    "difficulty": "hard",
    "prompt": "¿Cuál es la fórmula XVII para $\\frac{d}{dx}(\\sec v)$?",
    "options": [
      {
        "latex": "\\sec v \\tan v \\cdot \\frac{dv}{dx}",
        "correct": true
      },
      {
        "latex": "\\sec^2 v \\cdot \\frac{dv}{dx}",
        "correct": false
      },
      {
        "latex": "\\sec v \\cot v \\cdot \\frac{dv}{dx}",
        "correct": false
      },
      {
        "latex": "-\\sec v \\tan v \\cdot \\frac{dv}{dx}",
        "correct": false
      }
    ],
    "explanation": "La secante deriva secante por tangente, por la derivada del argumento."
  },
  {
    "id": "dert-h-05",
    "difficulty": "hard",
    "prompt": "¿Qué fórmula del formulario corresponde a $\\frac{d}{dx}(\\operatorname{vers} v)$?",
    "options": [
      {
        "latex": "\\sin v \\cdot \\frac{dv}{dx} \\text{ (XIX)}",
        "correct": true
      },
      {
        "latex": "\\cos v \\cdot \\frac{dv}{dx} \\text{ (XIII)}",
        "correct": false
      },
      {
        "latex": "-\\sin v \\cdot \\frac{dv}{dx} \\text{ (XIV)}",
        "correct": false
      },
      {
        "latex": "\\sec^2 v \\cdot \\frac{dv}{dx} \\text{ (XV)}",
        "correct": false
      }
    ],
    "explanation": "Como $\\operatorname{vers} v = 1 - \\cos v$, su derivada es $\\sin v \\cdot \\frac{dv}{dx}$: fórmula XIX."
  },
  {
    "id": "dert-h-06",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-07",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-08",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-09",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-10",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-11",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-12",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-13",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-14",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-15",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-16",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-17",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-18",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-19",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-20",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-21",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-22",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-23",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-24",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-25",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-26",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  },
  {
    "id": "dert-h-27",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{5} \\sin x$",
    "options": [
      {
        "latex": "5x^{4} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x - 5x^{4} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{5} \\cos x + 5x^{4} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{5})'\\sin x + x^{5}(\\sin x)' = 5x^{4}\\sin x + x^{5}\\cos x$."
  },
  {
    "id": "dert-h-28",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{2} \\sin x$",
    "options": [
      {
        "latex": "x^{2} \\cos x - 2x^{1} \\sin x",
        "correct": false
      },
      {
        "latex": "2x^{1} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "x^{2} \\cos x + 2x^{1} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{2})'\\sin x + x^{2}(\\sin x)' = 2x^{1}\\sin x + x^{2}\\cos x$."
  },
  {
    "id": "dert-h-29",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{3} \\sin x$",
    "options": [
      {
        "latex": "x^{3} \\cos x - 3x^{2} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{3} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "3x^{2} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{3} \\cos x + 3x^{2} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{3})'\\sin x + x^{3}(\\sin x)' = 3x^{2}\\sin x + x^{3}\\cos x$."
  },
  {
    "id": "dert-h-30",
    "difficulty": "hard",
    "prompt": "Deriva el producto: $f(x) = x^{4} \\sin x$",
    "options": [
      {
        "latex": "x^{4} \\cos x - 4x^{3} \\sin x",
        "correct": false
      },
      {
        "latex": "x^{4} \\sin x + \\cos x",
        "correct": false
      },
      {
        "latex": "4x^{3} \\cos x",
        "correct": false
      },
      {
        "latex": "x^{4} \\cos x + 4x^{3} \\sin x",
        "correct": true
      }
    ],
    "explanation": "Regla del producto $(u \\cdot v)' = u'v + uv'$: $(x^{4})'\\sin x + x^{4}(\\sin x)' = 4x^{3}\\sin x + x^{4}\\cos x$."
  }
];
