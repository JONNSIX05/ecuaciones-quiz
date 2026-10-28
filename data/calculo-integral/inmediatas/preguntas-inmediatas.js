// data/calculo-integral/inmediatas/preguntas-inmediatas.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default [
  {
    "id": "int-f-01",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int x^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^3}{3} + C",
        "correct": true
      },
      {
        "latex": "\\frac{x^3}{2} + C",
        "correct": false
      },
      {
        "latex": "2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (4): $\\int v^n\\,dv = \\frac{v^{n+1}}{n+1} + C$. Aquí $n = 2$."
  },
  {
    "id": "int-f-02",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int x^3\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^4}{4} + C",
        "correct": true
      },
      {
        "latex": "3x^2 + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x^4 + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (4) con $n = 3$: $\\frac{x^{3+1}}{3+1} = \\frac{x^4}{4} + C$."
  },
  {
    "id": "int-f-03",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2}{2} + C",
        "correct": true
      },
      {
        "latex": "x + C",
        "correct": false
      },
      {
        "latex": "1 + C",
        "correct": false
      },
      {
        "latex": "x^2 + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (4) con $n = 1$: $\\frac{x^{2}}{2} + C$."
  },
  {
    "id": "int-f-04",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 5\\,dx$",
    "options": [
      {
        "latex": "5x + C",
        "correct": true
      },
      {
        "latex": "5 + C",
        "correct": false
      },
      {
        "latex": "x + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^2}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmulas (2) y (3): $\\int 5\\,dx = 5 \\int dx = 5x + C$."
  },
  {
    "id": "int-f-05",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 3x^2\\,dx$",
    "options": [
      {
        "latex": "x^3 + C",
        "correct": true
      },
      {
        "latex": "3x^3 + C",
        "correct": false
      },
      {
        "latex": "6x + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^3}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (2) y (4): $3 \\cdot \\frac{x^3}{3} = x^3 + C$."
  },
  {
    "id": "int-f-06",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{1}{x}\\,dx$",
    "options": [
      {
        "latex": "\\ln|x| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{x^2} + C",
        "correct": false
      },
      {
        "latex": "x + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{x^2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (5): $\\int \\frac{dv}{v} = \\ln|v| + C$."
  },
  {
    "id": "int-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": true
      },
      {
        "latex": "x e^{x-1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x}{x} + C",
        "correct": false
      },
      {
        "latex": "e + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (7): $\\int e^v\\,dv = e^v + C$."
  },
  {
    "id": "int-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\sin x\\,dx$",
    "options": [
      {
        "latex": "-\\cos x + C",
        "correct": true
      },
      {
        "latex": "\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-\\sin x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (8): la integral del seno es menos coseno."
  },
  {
    "id": "int-f-09",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\sin x + C",
        "correct": true
      },
      {
        "latex": "-\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\cos x + C",
        "correct": false
      },
      {
        "latex": "-\\cos x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (9): la integral del coseno es el seno."
  },
  {
    "id": "int-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\sec^2 x\\,dx$",
    "options": [
      {
        "latex": "\\tan x + C",
        "correct": true
      },
      {
        "latex": "\\sec x + C",
        "correct": false
      },
      {
        "latex": "-\\cot x + C",
        "correct": false
      },
      {
        "latex": "\\sec^2 x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (10): $\\int \\sec^2 v\\,dv = \\tan v + C$."
  },
  {
    "id": "int-f-100",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "6x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-11",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\csc^2 x\\,dx$",
    "options": [
      {
        "latex": "-\\cot x + C",
        "correct": true
      },
      {
        "latex": "\\cot x + C",
        "correct": false
      },
      {
        "latex": "-\\csc x + C",
        "correct": false
      },
      {
        "latex": "\\tan x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (11): $\\int \\csc^2 v\\,dv = -\\cot v + C$."
  },
  {
    "id": "int-f-12",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\sec x \\tan x\\,dx$",
    "options": [
      {
        "latex": "\\sec x + C",
        "correct": true
      },
      {
        "latex": "\\tan x + C",
        "correct": false
      },
      {
        "latex": "-\\sec x + C",
        "correct": false
      },
      {
        "latex": "\\csc x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (12): $\\int \\sec v \\tan v\\,dv = \\sec v + C$."
  },
  {
    "id": "int-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\csc x \\cot x\\,dx$",
    "options": [
      {
        "latex": "-\\csc x + C",
        "correct": true
      },
      {
        "latex": "\\csc x + C",
        "correct": false
      },
      {
        "latex": "-\\cot x + C",
        "correct": false
      },
      {
        "latex": "\\cot x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (13): $\\int \\csc v \\cot v\\,dv = -\\csc v + C$."
  },
  {
    "id": "int-f-14",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2^x\\,dx$",
    "options": [
      {
        "latex": "\\frac{2^x}{\\ln 2} + C",
        "correct": true
      },
      {
        "latex": "2^x + C",
        "correct": false
      },
      {
        "latex": "x\\,2^{x-1} + C",
        "correct": false
      },
      {
        "latex": "2^x \\ln 2 + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (6): $\\int a^v\\,dv = \\frac{a^v}{\\ln a} + C$."
  },
  {
    "id": "int-f-15",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int x^5\\,dx$?",
    "options": [
      {
        "latex": "\\text{(4) Potencia } \\int v^n\\,dv",
        "correct": true
      },
      {
        "latex": "\\text{(5) Recíproco } \\int \\frac{dv}{v}",
        "correct": false
      },
      {
        "latex": "\\text{(7) Exponencial } \\int e^v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(8) Seno } \\int \\sin v\\,dv",
        "correct": false
      }
    ],
    "explanation": "Es una potencia de $x$: aplica la fórmula (4) con $n = 5$."
  },
  {
    "id": "int-f-16",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\frac{1}{x}\\,dx$?",
    "options": [
      {
        "latex": "\\text{(5) Recíproco } \\int \\frac{dv}{v}",
        "correct": true
      },
      {
        "latex": "\\text{(4) Potencia } \\int v^n\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(3) } \\int dx",
        "correct": false
      },
      {
        "latex": "\\text{(6) Exponencial base } a",
        "correct": false
      }
    ],
    "explanation": "$\\frac{1}{x}$ es el recíproco de la variable: fórmula (5), $\\ln|x| + C$."
  },
  {
    "id": "int-f-17",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\cos x\\,dx$?",
    "options": [
      {
        "latex": "\\text{(9) Coseno } \\int \\cos v\\,dv",
        "correct": true
      },
      {
        "latex": "\\text{(8) Seno } \\int \\sin v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(10) } \\int \\sec^2 v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(14) } \\int \\tan v\\,dv",
        "correct": false
      }
    ],
    "explanation": "La integral directa del coseno es la fórmula (9): $\\sin x + C$."
  },
  {
    "id": "int-f-18",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int (x^2 + x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^3}{3} + \\frac{x^2}{2} + C",
        "correct": true
      },
      {
        "latex": "x^3 + x^2 + C",
        "correct": false
      },
      {
        "latex": "2x + 1 + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3}{3} + x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (1): se integra término a término."
  },
  {
    "id": "int-f-19",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int (\\sin x + \\cos x)\\,dx$",
    "options": [
      {
        "latex": "-\\cos x + \\sin x + C",
        "correct": true
      },
      {
        "latex": "\\cos x + \\sin x + C",
        "correct": false
      },
      {
        "latex": "-\\cos x - \\sin x + C",
        "correct": false
      },
      {
        "latex": "\\cos x - \\sin x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmulas (1), (8) y (9): $-\\cos x + \\sin x + C$."
  },
  {
    "id": "int-f-20",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 7x^6\\,dx$",
    "options": [
      {
        "latex": "x^7 + C",
        "correct": true
      },
      {
        "latex": "7x^7 + C",
        "correct": false
      },
      {
        "latex": "\\frac{7x^7}{6} + C",
        "correct": false
      },
      {
        "latex": "42x^5 + C",
        "correct": false
      }
    ],
    "explanation": "Fórmulas (2) y (4): $7 \\cdot \\frac{x^7}{7} = x^7 + C$."
  },
  {
    "id": "int-f-21",
    "difficulty": "easy",
    "prompt": "¿Cuál es la fórmula de la potencia (4)?",
    "options": [
      {
        "latex": "\\int v^n\\,dv = \\frac{v^{n+1}}{n+1} + C",
        "correct": true
      },
      {
        "latex": "\\int v^n\\,dv = n v^{n-1} + C",
        "correct": false
      },
      {
        "latex": "\\int v^n\\,dv = \\frac{v^{n}}{n} + C",
        "correct": false
      },
      {
        "latex": "\\int v^n\\,dv = v^{n} + C",
        "correct": false
      }
    ],
    "explanation": "Se suma 1 al exponente y se divide entre el nuevo exponente."
  },
  {
    "id": "int-f-22",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int dx$",
    "options": [
      {
        "latex": "x + C",
        "correct": true
      },
      {
        "latex": "1 + C",
        "correct": false
      },
      {
        "latex": "x^2 + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (3): $\\int dx = x + C$."
  },
  {
    "id": "int-f-23",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4x^3\\,dx$",
    "options": [
      {
        "latex": "x^4 + C",
        "correct": true
      },
      {
        "latex": "4x^4 + C",
        "correct": false
      },
      {
        "latex": "12x^2 + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^4}{3} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmulas (2) y (4): $4 \\cdot \\frac{x^4}{4} = x^4 + C$."
  },
  {
    "id": "int-f-24",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\tan x\\,dx$?",
    "options": [
      {
        "latex": "\\text{(14) } \\int \\tan v\\,dv",
        "correct": true
      },
      {
        "latex": "\\text{(10) } \\int \\sec^2 v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(12) } \\int \\sec v \\tan v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(15) } \\int \\cot v\\,dv",
        "correct": false
      }
    ],
    "explanation": "La tangente no es directa: se usa la fórmula (14), $-\\ln|\\cos v| + C$."
  },
  {
    "id": "int-f-25",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\cot x\\,dx$",
    "options": [
      {
        "latex": "\\ln|\\sin x| + C",
        "correct": true
      },
      {
        "latex": "-\\ln|\\cos x| + C",
        "correct": false
      },
      {
        "latex": "\\ln|\\cos x| + C",
        "correct": false
      },
      {
        "latex": "-\\ln|\\sin x| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (15): $\\int \\cot v\\,dv = \\ln|\\sin v| + C$."
  },
  {
    "id": "int-f-26",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\sec x\\,dx$",
    "options": [
      {
        "latex": "\\ln|\\sec x + \\tan x| + C",
        "correct": true
      },
      {
        "latex": "\\sec x \\tan x + C",
        "correct": false
      },
      {
        "latex": "\\ln|\\sec x| + C",
        "correct": false
      },
      {
        "latex": "-\\ln|\\sec x - \\tan x| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (16): $\\int \\sec v\\,dv = \\ln|\\sec v + \\tan v| + C$."
  },
  {
    "id": "int-f-27",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\csc x\\,dx$",
    "options": [
      {
        "latex": "\\ln|\\csc x - \\cot x| + C",
        "correct": true
      },
      {
        "latex": "\\ln|\\csc x + \\cot x| + C",
        "correct": false
      },
      {
        "latex": "-\\csc x + C",
        "correct": false
      },
      {
        "latex": "\\ln|\\csc x| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (17): $\\int \\csc v\\,dv = \\ln|\\csc v - \\cot v| + C$."
  },
  {
    "id": "int-f-28",
    "difficulty": "easy",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{x^2 + 1}$?",
    "options": [
      {
        "latex": "\\text{(18) } \\int \\frac{dv}{v^2 + a^2}",
        "correct": true
      },
      {
        "latex": "\\text{(19) } \\int \\frac{dv}{v^2 - a^2}",
        "correct": false
      },
      {
        "latex": "\\text{(20) } \\int \\frac{dv}{\\sqrt{a^2 - v^2}}",
        "correct": false
      },
      {
        "latex": "\\text{(21) } \\int \\frac{dv}{\\sqrt{v^2 \\pm a^2}}",
        "correct": false
      }
    ],
    "explanation": "Tiene la forma $v^2 + a^2$ con $v = x$ y $a = 1$: fórmula (18)."
  },
  {
    "id": "int-f-29",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 1}$",
    "options": [
      {
        "latex": "\\arctan x + C",
        "correct": true
      },
      {
        "latex": "\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin x + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{x} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (18) con $a = 1$: $\\frac{1}{1}\\arctan\\frac{x}{1} + C$."
  },
  {
    "id": "int-f-30",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{dx}{\\sqrt{1 - x^2}}$",
    "options": [
      {
        "latex": "\\arcsin x + C",
        "correct": true
      },
      {
        "latex": "\\arccos x + C",
        "correct": false
      },
      {
        "latex": "\\ln|x + \\sqrt{1-x^2}| + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (20) con $a = 1$: $\\arcsin\\frac{x}{1} + C$."
  },
  {
    "id": "int-f-31",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-32",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "6x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-33",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 7e^x\\,dx$",
    "options": [
      {
        "latex": "7x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{7e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "7e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $7\\int e^x\\,dx = 7e^x + C$."
  },
  {
    "id": "int-f-34",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-35",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-36",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2x^{6}\\,dx$",
    "options": [
      {
        "latex": "12x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-37",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "4x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{4e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "4e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $4\\int e^x\\,dx = 4e^x + C$."
  },
  {
    "id": "int-f-38",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-39",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-40",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int x^{2}\\,dx$",
    "options": [
      {
        "latex": "2x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-41",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 8e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "8x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{8e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "8e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $8\\int e^x\\,dx = 8e^x + C$."
  },
  {
    "id": "int-f-42",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2\\cos x\\,dx$",
    "options": [
      {
        "latex": "-2\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\cos x + C",
        "correct": false
      },
      {
        "latex": "2\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-43",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-44",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 5x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "30x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-45",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 5e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "5x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{5e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "5e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $5\\int e^x\\,dx = 5e^x + C$."
  },
  {
    "id": "int-f-46",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-47",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-48",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "8x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-49",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{2e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "2x e^x + C",
        "correct": false
      },
      {
        "latex": "2e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $2\\int e^x\\,dx = 2e^x + C$."
  },
  {
    "id": "int-f-50",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-51",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-52",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "18x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-53",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 6e^x\\,dx$",
    "options": [
      {
        "latex": "6x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{6e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "6e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $6\\int e^x\\,dx = 6e^x + C$."
  },
  {
    "id": "int-f-54",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2\\cos x\\,dx$",
    "options": [
      {
        "latex": "-2\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-55",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-56",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "4x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-57",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3e^x\\,dx$",
    "options": [
      {
        "latex": "3x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{3e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "3e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $3\\int e^x\\,dx = 3e^x + C$."
  },
  {
    "id": "int-f-58",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-59",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-60",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "6x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-61",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 7e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "7x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{7e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "7e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $7\\int e^x\\,dx = 7e^x + C$."
  },
  {
    "id": "int-f-62",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-63",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-64",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 5x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "10x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-65",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "4x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{4e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "4e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $4\\int e^x\\,dx = 4e^x + C$."
  },
  {
    "id": "int-f-66",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2\\cos x\\,dx$",
    "options": [
      {
        "latex": "-2\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\cos x + C",
        "correct": false
      },
      {
        "latex": "2\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-67",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-68",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "24x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-69",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 8e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "8x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{8e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "8e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $8\\int e^x\\,dx = 8e^x + C$."
  },
  {
    "id": "int-f-70",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-71",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-72",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "6x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-73",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 5e^x\\,dx$",
    "options": [
      {
        "latex": "5x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{5e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "5e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $5\\int e^x\\,dx = 5e^x + C$."
  },
  {
    "id": "int-f-74",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-75",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-76",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "12x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-77",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2e^x\\,dx$",
    "options": [
      {
        "latex": "2x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{2e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "2e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $2\\int e^x\\,dx = 2e^x + C$."
  },
  {
    "id": "int-f-78",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2\\cos x\\,dx$",
    "options": [
      {
        "latex": "-2\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-79",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-80",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int x^{2}\\,dx$",
    "options": [
      {
        "latex": "2x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-81",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 6e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{6e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "6x e^x + C",
        "correct": false
      },
      {
        "latex": "6e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $6\\int e^x\\,dx = 6e^x + C$."
  },
  {
    "id": "int-f-82",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-83",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-84",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 5x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "30x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-85",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{3e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "3x e^x + C",
        "correct": false
      },
      {
        "latex": "3e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $3\\int e^x\\,dx = 3e^x + C$."
  },
  {
    "id": "int-f-86",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-87",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-88",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "8x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{4x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-89",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 7e^x\\,dx$",
    "options": [
      {
        "latex": "7x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{7e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "7e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $7\\int e^x\\,dx = 7e^x + C$."
  },
  {
    "id": "int-f-90",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 2\\cos x\\,dx$",
    "options": [
      {
        "latex": "2\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-2\\sin x + C",
        "correct": false
      },
      {
        "latex": "2\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-91",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-92",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 3x^{6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "18x^{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{7}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{3x^{7}}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 6$."
  },
  {
    "id": "int-f-93",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 4e^x\\,dx$",
    "options": [
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "4x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{4e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "4e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $4\\int e^x\\,dx = 4e^x + C$."
  },
  {
    "id": "int-f-94",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 6\\cos x\\,dx$",
    "options": [
      {
        "latex": "6\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-6\\sin x + C",
        "correct": false
      },
      {
        "latex": "6\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-95",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{9}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{9}{x^2} + C",
        "correct": false
      },
      {
        "latex": "\\ln|9x| + C",
        "correct": false
      },
      {
        "latex": "9x + C",
        "correct": false
      },
      {
        "latex": "9\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-f-96",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 2x^{2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{2}}{2} + C",
        "correct": false
      },
      {
        "latex": "4x^{1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{3}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2x^{3}}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Por la regla de la potencia: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$. Con exponente $n = 2$."
  },
  {
    "id": "int-f-97",
    "difficulty": "easy",
    "prompt": "Calcula la integral: $\\int 8e^x\\,dx$",
    "options": [
      {
        "latex": "8x e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{8e^{x+1}}{x+1} + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      },
      {
        "latex": "8e^x + C",
        "correct": true
      }
    ],
    "explanation": "La integral de $e^x$ es $e^x$. Sacando la constante: $8\\int e^x\\,dx = 8e^x + C$."
  },
  {
    "id": "int-f-98",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int 4\\cos x\\,dx$",
    "options": [
      {
        "latex": "-4\\sin x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "4\\cos x + C",
        "correct": false
      },
      {
        "latex": "4\\sin x + C",
        "correct": true
      }
    ],
    "explanation": "La antiderivada del coseno es el seno: $\\int \\cos x\\,dx = \\sin x + C$."
  },
  {
    "id": "int-f-99",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int \\frac{5}{x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{5}{x^2} + C",
        "correct": false
      },
      {
        "latex": "5x + C",
        "correct": false
      },
      {
        "latex": "\\ln|5x| + C",
        "correct": false
      },
      {
        "latex": "5\\ln|x| + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de la integral del logaritmo: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$."
  },
  {
    "id": "int-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int 5x^4\\,dx$",
    "options": [
      {
        "latex": "x^5 + C",
        "correct": true
      },
      {
        "latex": "5x^5 + C",
        "correct": false
      },
      {
        "latex": "20x^3 + C",
        "correct": false
      },
      {
        "latex": "\\frac{5x^5}{4} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmulas (2) y (4): $5 \\cdot \\frac{x^5}{5} = x^5 + C$."
  },
  {
    "id": "int-m-02",
    "difficulty": "medium",
    "prompt": "¿Qué sustitución $u$ resuelve $\\int 2x\\,e^{x^2}\\,dx$?",
    "options": [
      {
        "latex": "u = x^2",
        "correct": true
      },
      {
        "latex": "u = e^{x^2}",
        "correct": false
      },
      {
        "latex": "u = 2x",
        "correct": false
      },
      {
        "latex": "u = x",
        "correct": false
      }
    ],
    "explanation": "Si $u = x^2$, entonces $du = 2x\\,dx$, que coincide con el factor presente."
  },
  {
    "id": "int-m-03",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int (x^2 + 1)^5 \\cdot 2x\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 1)^6}{6} + C",
        "correct": true
      },
      {
        "latex": "\\frac{(x^2 + 1)^6}{2} + C",
        "correct": false
      },
      {
        "latex": "(x^2 + 1)^6 + C",
        "correct": false
      },
      {
        "latex": "10(x^2 + 1)^4 + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx$: fórmula (4), $\\frac{u^6}{6} + C$."
  },
  {
    "id": "int-m-04",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int 2x\\,e^{x^2}\\,dx$",
    "options": [
      {
        "latex": "e^{x^2} + C",
        "correct": true
      },
      {
        "latex": "e^{x^2} + x e^{x^2} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{x^2} + C",
        "correct": false
      },
      {
        "latex": "2 e^{x^2} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2$, $du = 2x\\,dx$: $\\int e^u\\,du = e^{x^2} + C$ (fórmula 7)."
  },
  {
    "id": "int-m-05",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,e^{x^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}e^{x^2} + C",
        "correct": true
      },
      {
        "latex": "e^{x^2} + C",
        "correct": false
      },
      {
        "latex": "x e^{x^2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}x e^{x^2} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2$, $du = 2x\\,dx$, falta un $2$: $\\frac{1}{2}\\int e^u\\,du = \\frac{1}{2}e^{x^2} + C$."
  },
  {
    "id": "int-m-06",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{3x}$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\ln|x| + C",
        "correct": true
      },
      {
        "latex": "\\ln|x| + C",
        "correct": false
      },
      {
        "latex": "3\\ln|x| + C",
        "correct": false
      },
      {
        "latex": "\\ln|3x| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (2) y (5): $\\frac{1}{3}\\int\\frac{dx}{x} = \\frac{1}{3}\\ln|x| + C$."
  },
  {
    "id": "int-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 1}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 1) + C",
        "correct": true
      },
      {
        "latex": "\\ln|x| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2+1} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2+1) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\int\\frac{du}{u} = \\ln|u| + C$ (fórmula 5)."
  },
  {
    "id": "int-m-08",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,\\sin(x^2)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{2}\\cos(x^2) + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\cos(x^2) + C",
        "correct": false
      },
      {
        "latex": "-\\cos(x^2) + C",
        "correct": false
      },
      {
        "latex": "\\cos(x^2) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\sin u\\,du = -\\frac{1}{2}\\cos(x^2) + C$."
  },
  {
    "id": "int-m-09",
    "difficulty": "medium",
    "prompt": "¿La integral $\\int (x^2 + 1)^2\\,dx$ se resuelve directamente con la fórmula (4)?",
    "options": [
      {
        "latex": "\\text{No: falta el factor } \\frac{d}{dx}(x^2+1) = 2x",
        "correct": true
      },
      {
        "latex": "\\text{Sí, directamente con } n = 2",
        "correct": false
      },
      {
        "latex": "\\text{Sí, con } n = 1",
        "correct": false
      },
      {
        "latex": "\\text{No existe tal integral}",
        "correct": false
      }
    ],
    "explanation": "La fórmula (4) requiere la forma $v^n\\,dv$; aquí $dv = 2x\\,dx$ no aparece. Habría que expandir."
  },
  {
    "id": "int-m-10",
    "difficulty": "medium",
    "prompt": "¿Qué fórmula y sustitución usas para $\\int x\\,\\cos(x^2)\\,dx$?",
    "options": [
      {
        "latex": "\\text{(9) con } v = x^2",
        "correct": true
      },
      {
        "latex": "\\text{(9) con } v = x",
        "correct": false
      },
      {
        "latex": "\\text{(8) con } v = x^2",
        "correct": false
      },
      {
        "latex": "\\text{(4) con } v = x^2",
        "correct": false
      }
    ],
    "explanation": "Con $v = x^2$, $dv = 2x\\,dx$: $\\frac{1}{2}\\int\\cos v\\,dv$ → fórmula (9)."
  },
  {
    "id": "int-m-100",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\tan x\\,dx$",
    "options": [
      {
        "latex": "-\\ln|\\cos x| + C",
        "correct": true
      },
      {
        "latex": "\\ln|\\sin x| + C",
        "correct": false
      },
      {
        "latex": "\\sec^2 x + C",
        "correct": false
      },
      {
        "latex": "-\\ln|\\sin x| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (14): $\\int \\tan v\\,dv = -\\ln|\\cos v| + C$."
  },
  {
    "id": "int-m-12",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x}{2} + C",
        "correct": true
      },
      {
        "latex": "\\arctan\\frac{x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan x + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 4) + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (18) con $a = 2$: $\\frac{1}{2}\\arctan\\frac{x}{2} + C$."
  },
  {
    "id": "int-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 9}$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x}{3} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{9}\\arctan x + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\frac{x}{3} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 9) + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (18) con $a = 3$: $\\frac{1}{3}\\arctan\\frac{x}{3} + C$."
  },
  {
    "id": "int-m-14",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arcsin\\frac{x}{2} + C",
        "correct": true
      },
      {
        "latex": "\\arcsin x + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin x + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\frac{x}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (20) con $a = 2$: $\\arcsin\\frac{x}{2} + C$."
  },
  {
    "id": "int-m-15",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 1}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\ln\\left|\\frac{x-1}{x+1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x+1}{x-1}\\right| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (19) con $a = 1$: $\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$."
  },
  {
    "id": "int-m-16",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{1 - x^2}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{1+x}{1-x}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{1-x}{1+x}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin x + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (19a) con $a = 1$: $\\frac{1}{2}\\ln\\left|\\frac{1+x}{1-x}\\right| + C$."
  },
  {
    "id": "int-m-17",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int 3^x\\,dx$",
    "options": [
      {
        "latex": "\\frac{3^x}{\\ln 3} + C",
        "correct": true
      },
      {
        "latex": "3^x \\ln 3 + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\,3^x}{\\ln 3} + C",
        "correct": false
      },
      {
        "latex": "3^x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (6): $\\int a^v\\,dv = \\frac{a^v}{\\ln a} + C$."
  },
  {
    "id": "int-m-18",
    "difficulty": "medium",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{x^2 - 4}$?",
    "options": [
      {
        "latex": "\\text{(19) } \\int \\frac{dv}{v^2 - a^2}",
        "correct": true
      },
      {
        "latex": "\\text{(18) } \\int \\frac{dv}{v^2 + a^2}",
        "correct": false
      },
      {
        "latex": "\\text{(19a) } \\int \\frac{dv}{a^2 - v^2}",
        "correct": false
      },
      {
        "latex": "\\text{(5) } \\int \\frac{dv}{v}",
        "correct": false
      }
    ],
    "explanation": "Es $v^2 - a^2$ con $a = 2$: fórmula (19)."
  },
  {
    "id": "int-m-19",
    "difficulty": "medium",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{\\sqrt{x^2 + 4}}$?",
    "options": [
      {
        "latex": "\\text{(21) } \\int \\frac{dv}{\\sqrt{v^2 \\pm a^2}}",
        "correct": true
      },
      {
        "latex": "\\text{(20) } \\int \\frac{dv}{\\sqrt{a^2 - v^2}}",
        "correct": false
      },
      {
        "latex": "\\text{(22) } \\int \\sqrt{a^2 - v^2}\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(23) } \\int \\sqrt{v^2 \\pm a^2}\\,dv",
        "correct": false
      }
    ],
    "explanation": "Raíz de $v^2 + a^2$ en el denominador: fórmula (21)."
  },
  {
    "id": "int-m-20",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      },
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^{3x}}{\\ln 3} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int e^u\\,du = \\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-21",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\sin(2x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{2}\\cos(2x) + C",
        "correct": true
      },
      {
        "latex": "-\\cos(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\cos(2x) + C",
        "correct": false
      },
      {
        "latex": "-2\\cos(2x) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx$: $-\\frac{1}{2}\\cos(2x) + C$."
  },
  {
    "id": "int-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int (4x^3 - 6x^2 + 2)\\,dx$",
    "options": [
      {
        "latex": "x^4 - 2x^3 + 2x + C",
        "correct": true
      },
      {
        "latex": "x^4 - 2x^3 + C",
        "correct": false
      },
      {
        "latex": "12x^2 - 12x + C",
        "correct": false
      },
      {
        "latex": "x^4 - 6x^3 + 2x + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (1) término a término: $x^4 - 2x^3 + 2x + C$."
  },
  {
    "id": "int-m-23",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\sec^2(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\tan(3x) + C",
        "correct": true
      },
      {
        "latex": "\\tan(3x) + C",
        "correct": false
      },
      {
        "latex": "3\\tan(3x) + C",
        "correct": false
      },
      {
        "latex": "\\sec(3x) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int\\sec^2 u\\,du = \\frac{1}{3}\\tan(3x) + C$."
  },
  {
    "id": "int-m-24",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{x}{x^2 + 1}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 1) + C",
        "correct": true
      },
      {
        "latex": "\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln|x| + C",
        "correct": false
      },
      {
        "latex": "\\arctan x + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\frac{du}{u} = \\frac{1}{2}\\ln|u| + C$."
  },
  {
    "id": "int-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\cos(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\sin(3x) + C",
        "correct": true
      },
      {
        "latex": "\\sin(3x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{3}\\sin(3x) + C",
        "correct": false
      },
      {
        "latex": "3\\sin(3x) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int\\cos u\\,du = \\frac{1}{3}\\sin(3x) + C$."
  },
  {
    "id": "int-m-26",
    "difficulty": "medium",
    "prompt": "¿Qué fórmula (1–23) usas para $\\int \\sec x\\,dx$?",
    "options": [
      {
        "latex": "\\text{(16) } \\int \\sec v\\,dv",
        "correct": true
      },
      {
        "latex": "\\text{(12) } \\int \\sec v \\tan v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(10) } \\int \\sec^2 v\\,dv",
        "correct": false
      },
      {
        "latex": "\\text{(17) } \\int \\csc v\\,dv",
        "correct": false
      }
    ],
    "explanation": "La secante sola es la fórmula (16), que da un logaritmo."
  },
  {
    "id": "int-m-27",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{x^3}{x^4 + 1}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\ln(x^4 + 1) + C",
        "correct": true
      },
      {
        "latex": "\\ln(x^4 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan x^4 + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^4}{4} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^4 + 1$, $du = 4x^3\\,dx$: $\\frac{1}{4}\\int\\frac{du}{u} = \\frac{1}{4}\\ln|u| + C$."
  },
  {
    "id": "int-m-28",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 16}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\frac{x}{4} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{16}\\arctan x + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\frac{x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 16) + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (18) con $a = 4$: $\\frac{1}{4}\\arctan\\frac{x}{4} + C$."
  },
  {
    "id": "int-m-29",
    "difficulty": "medium",
    "prompt": "¿La integral $\\int x\\,\\ln x\\,dx$ se resuelve con una fórmula directa (1–23)?",
    "options": [
      {
        "latex": "\\text{No: requiere integración por partes}",
        "correct": true
      },
      {
        "latex": "\\text{Sí, con la fórmula (5)}",
        "correct": false
      },
      {
        "latex": "\\text{Sí, con la fórmula (4)}",
        "correct": false
      },
      {
        "latex": "\\text{Sí, con la fórmula (14)}",
        "correct": false
      }
    ],
    "explanation": "Es un producto de dos funciones de $x$ sin factor $dv$ directo: se usa integración por partes."
  },
  {
    "id": "int-m-30",
    "difficulty": "medium",
    "prompt": "¿Qué sustitución $u$ resuelve $\\int \\sin(x^2)\\cdot 2x\\,dx$?",
    "options": [
      {
        "latex": "u = x^2",
        "correct": true
      },
      {
        "latex": "u = \\sin(x^2)",
        "correct": false
      },
      {
        "latex": "u = 2x",
        "correct": false
      },
      {
        "latex": "u = x",
        "correct": false
      }
    ],
    "explanation": "Si $u = x^2$, $du = 2x\\,dx$: la integral queda $\\int\\sin u\\,du$."
  },
  {
    "id": "int-m-31",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 2)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 2$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-32",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-33",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 8}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 8) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 8} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 8) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 8) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 8$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 8) + C$."
  },
  {
    "id": "int-m-35",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 1)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-36",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-37",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-38",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 3}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 3) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 3) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 3) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 3$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 3) + C$."
  },
  {
    "id": "int-m-39",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 5)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 5)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 5$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-40",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-41",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{7x}\\,dx$",
    "options": [
      {
        "latex": "7e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}e^{7x} + C",
        "correct": false
      },
      {
        "latex": "e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}e^{7x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 7x$, $du = 7\\,dx$. La integral resulta $\\frac{1}{7}e^{7x} + C$."
  },
  {
    "id": "int-m-42",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 7}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 7) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 7} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 7) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 7) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 7$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 7) + C$."
  },
  {
    "id": "int-m-43",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 4)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 4)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 4$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-44",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-45",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-46",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 2}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 2) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 2) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 2) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 2$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 2) + C$."
  },
  {
    "id": "int-m-47",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 3)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 3$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-48",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-49",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-50",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 6) + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 6) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 6} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 6) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 6$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 6) + C$."
  },
  {
    "id": "int-m-51",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 2)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 2)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 2$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-52",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-53",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{7x}\\,dx$",
    "options": [
      {
        "latex": "7e^{7x} + C",
        "correct": false
      },
      {
        "latex": "e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}e^{7x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 7x$, $du = 7\\,dx$. La integral resulta $\\frac{1}{7}e^{7x} + C$."
  },
  {
    "id": "int-m-54",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 1}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 1} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 1) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 1$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 1) + C$."
  },
  {
    "id": "int-m-55",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 1)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-56",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-57",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-58",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 5) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 5} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 5) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 5) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 5$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 5) + C$."
  },
  {
    "id": "int-m-59",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 5)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 5)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 5$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-60",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-61",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-62",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 9) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 9$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 9) + C$."
  },
  {
    "id": "int-m-63",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 4)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 4$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-64",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-65",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{7x}\\,dx$",
    "options": [
      {
        "latex": "e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}e^{7x} + C",
        "correct": false
      },
      {
        "latex": "7e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}e^{7x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 7x$, $du = 7\\,dx$. La integral resulta $\\frac{1}{7}e^{7x} + C$."
  },
  {
    "id": "int-m-66",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 4}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 4) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 4} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 4) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 4) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 4$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 4) + C$."
  },
  {
    "id": "int-m-67",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 3)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 3)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 3$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-68",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-69",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-70",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 8}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 8) + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 8) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 8} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 8) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 8$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 8) + C$."
  },
  {
    "id": "int-m-71",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 2)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 2$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-72",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-73",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-74",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 3}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 3) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 3) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 3) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 3$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 3) + C$."
  },
  {
    "id": "int-m-75",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 1)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-76",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-77",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{7x}\\,dx$",
    "options": [
      {
        "latex": "7e^{7x} + C",
        "correct": false
      },
      {
        "latex": "e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}e^{7x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 7x$, $du = 7\\,dx$. La integral resulta $\\frac{1}{7}e^{7x} + C$."
  },
  {
    "id": "int-m-78",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 7}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 7) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 7} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 7) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 7) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 7$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 7) + C$."
  },
  {
    "id": "int-m-79",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 5)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 5)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 5$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-80",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-81",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-82",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 2) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 2} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 2) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 2) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 2$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 2) + C$."
  },
  {
    "id": "int-m-83",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 4)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 4)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 4)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 4$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-84",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-85",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-86",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 6}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 6) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 6} + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 6) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 6) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 6$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 6) + C$."
  },
  {
    "id": "int-m-87",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 3)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 3)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 3)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 3$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-88",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{6}\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "6\\sin(6x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\sin(6x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 6x$, $du = 6\\,dx \\implies dx = \\frac{du}{6}$, por tanto $\\int \\cos(6x)\\,dx = \\frac{1}{6}\\sin(6x) + C$."
  },
  {
    "id": "int-m-89",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{7x}\\,dx$",
    "options": [
      {
        "latex": "e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}e^{7x} + C",
        "correct": false
      },
      {
        "latex": "7e^{7x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}e^{7x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 7x$, $du = 7\\,dx$. La integral resulta $\\frac{1}{7}e^{7x} + C$."
  },
  {
    "id": "int-m-90",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 1}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 1} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 1) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 1$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 1) + C$."
  },
  {
    "id": "int-m-91",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 2)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 2)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 2)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 2$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-92",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "4\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{4}\\sin(4x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\sin(4x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 4x$, $du = 4\\,dx \\implies dx = \\frac{du}{4}$, por tanto $\\int \\cos(4x)\\,dx = \\frac{1}{4}\\sin(4x) + C$."
  },
  {
    "id": "int-m-93",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{5x}\\,dx$",
    "options": [
      {
        "latex": "5e^{5x} + C",
        "correct": false
      },
      {
        "latex": "e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}e^{5x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}e^{5x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 5x$, $du = 5\\,dx$. La integral resulta $\\frac{1}{5}e^{5x} + C$."
  },
  {
    "id": "int-m-94",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 5) + C",
        "correct": false
      },
      {
        "latex": "2\\ln(x^2 + 5) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 5} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 5) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 5$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 5) + C$."
  },
  {
    "id": "int-m-95",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 1)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 1)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 1)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-m-96",
    "difficulty": "medium",
    "prompt": "Calcula mediante sustitución: $\\int \\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "2\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(2x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sin(2x) + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 2x$, $du = 2\\,dx \\implies dx = \\frac{du}{2}$, por tanto $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$."
  },
  {
    "id": "int-m-97",
    "difficulty": "medium",
    "prompt": "Calcula mediante cambio de variable: $\\int e^{3x}\\,dx$",
    "options": [
      {
        "latex": "e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}e^{3x} + C",
        "correct": false
      },
      {
        "latex": "3e^{3x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}e^{3x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = 3x$, $du = 3\\,dx$. La integral resulta $\\frac{1}{3}e^{3x} + C$."
  },
  {
    "id": "int-m-98",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\frac{2x}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "2\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2 + 9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 9) + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = x^2 + 9$, su diferencial es $du = 2x\\,dx$. La integral se reduce a $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2 + 9) + C$."
  },
  {
    "id": "int-m-99",
    "difficulty": "medium",
    "prompt": "Calcula usando cambio de variable: $\\int x(x^2 + 5)^{5}\\,dx$",
    "options": [
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{5}}{12} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2(x^2 + 5)^{6}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{(x^2 + 5)^{6}}{12} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x^2 + 5$, $du = 2x\\,dx \\implies x\\,dx = \\frac{du}{2}$. Entonces $\\frac{1}{2}\\int u^{5}\\,du = \\frac{u^{6}}{12} + C$."
  },
  {
    "id": "int-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 6x + 10}$",
    "options": [
      {
        "latex": "\\arctan(x + 3) + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x+3}{3} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 6x + 10) + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x + 6) + C",
        "correct": false
      }
    ],
    "explanation": "Completando el cuadrado: $x^2 + 6x + 10 = (x+3)^2 + 1$. Fórmula (18) con $a = 1$ y $v = x + 3$."
  },
  {
    "id": "int-h-02",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 6x + 5}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\ln\\left|\\frac{x-5}{x-1}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{4}\\ln\\left|\\frac{x-1}{x-5}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln\\left|\\frac{x-5}{x-1}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x-3) + C",
        "correct": false
      }
    ],
    "explanation": "Completando: $x^2 - 6x + 5 = (x-3)^2 - 4$. Fórmula (19) con $a = 2$, $v = x - 3$."
  },
  {
    "id": "int-h-03",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x\\,\\sec^2(x^2)\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\tan(x^2) + C",
        "correct": true
      },
      {
        "latex": "\\tan(x^2) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\sec(x^2) + C",
        "correct": false
      },
      {
        "latex": "\\sec^2(x^2) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\sec^2 u\\,du = \\frac{1}{2}\\tan(x^2) + C$."
  },
  {
    "id": "int-h-04",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int e^{\\sin x}\\cos x\\,dx$",
    "options": [
      {
        "latex": "e^{\\sin x} + C",
        "correct": true
      },
      {
        "latex": "e^{\\cos x} + C",
        "correct": false
      },
      {
        "latex": "\\sin x\\,e^{\\sin x} + C",
        "correct": false
      },
      {
        "latex": "\\cos x\\,e^{\\sin x} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int e^u\\,du = e^{\\sin x} + C$ (fórmula 7)."
  },
  {
    "id": "int-h-05",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\cos x\\,\\sin^2 x\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\sin^3 x}{3} + C",
        "correct": true
      },
      {
        "latex": "\\frac{\\cos^3 x}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^3 x + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\cos^3 x}{3} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int u^2\\,du = \\frac{\\sin^3 x}{3} + C$ (fórmula 4)."
  },
  {
    "id": "int-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{\\sqrt{x^2 + 4}}$",
    "options": [
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 4}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\arcsin\\frac{x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln|x + \\sqrt{x^2+4}| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 4} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (21) con $a = 2$: $\\ln|v + \\sqrt{v^2 + a^2}| + C$."
  },
  {
    "id": "int-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{\\sqrt{x^2 - 9}}$",
    "options": [
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 - 9}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\arcsin\\frac{x}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln|x + \\sqrt{x^2-9}| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 - 9} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (21) con $a = 3$: $\\ln|v + \\sqrt{v^2 - a^2}| + C$."
  },
  {
    "id": "int-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\sqrt{x^2 + 4}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x}{2}\\sqrt{x^2+4} + 2\\ln\\left|x + \\sqrt{x^2+4}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{x}{2}\\sqrt{x^2+4} + \\ln\\left|x + \\sqrt{x^2+4}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}\\sqrt{x^2+4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}\\sqrt{x^2+4} - 2\\ln\\left|x + \\sqrt{x^2+4}\\right| + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (23) con $a = 2$: $\\frac{x}{2}\\sqrt{x^2+4} + \\frac{4}{2}\\ln|x + \\sqrt{x^2+4}| + C$."
  },
  {
    "id": "int-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\sqrt{4 - x^2}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x}{2}\\sqrt{4-x^2} + 2\\arcsin\\frac{x}{2} + C",
        "correct": true
      },
      {
        "latex": "\\frac{x}{2}\\sqrt{4-x^2} + \\arcsin\\frac{x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}\\sqrt{4-x^2} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\frac{x}{2} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (22) con $a = 2$: $\\frac{x}{2}\\sqrt{4-x^2} + \\frac{4}{2}\\arcsin\\frac{x}{2} + C$."
  },
  {
    "id": "int-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 + 4x + 8}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x+2}{2} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x+4}{2} + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\frac{x+2}{2} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 + 4x + 8) + C",
        "correct": false
      }
    ],
    "explanation": "Completando: $x^2 + 4x + 8 = (x+2)^2 + 4$. Fórmula (18) con $a = 2$, $v = x+2$."
  },
  {
    "id": "int-h-100",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{16 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|16 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x\\,\\cos(x^2 + 1)\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\sin(x^2 + 1) + C",
        "correct": true
      },
      {
        "latex": "\\sin(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2}\\sin(x^2 + 1) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\cos(x^2 + 1) + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\cos u\\,du = \\frac{1}{2}\\sin(x^2+1) + C$."
  },
  {
    "id": "int-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x^2\\,e^{x^3}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}e^{x^3} + C",
        "correct": true
      },
      {
        "latex": "e^{x^3} + C",
        "correct": false
      },
      {
        "latex": "3e^{x^3} + C",
        "correct": false
      },
      {
        "latex": "x^3 e^{x^3} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^3$, $du = 3x^2\\,dx$: $\\frac{1}{3}\\int e^u\\,du = \\frac{1}{3}e^{x^3} + C$."
  },
  {
    "id": "int-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x\\,\\tan(x^2)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{1}{2}\\ln|\\cos(x^2)| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln|\\cos(x^2)| + C",
        "correct": false
      },
      {
        "latex": "\\ln|\\cos(x^2)| + C",
        "correct": false
      },
      {
        "latex": "-\\ln|\\cos(x^2)| + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\tan u\\,du = -\\frac{1}{2}\\ln|\\cos u| + C$ (fórmula 14)."
  },
  {
    "id": "int-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 2x + 5}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x-1}{2} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{x-2}{2} + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\frac{x-1}{2} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 - 2x + 5) + C",
        "correct": false
      }
    ],
    "explanation": "Completando: $x^2 - 2x + 5 = (x-1)^2 + 4$. Fórmula (18) con $a = 2$, $v = x-1$."
  },
  {
    "id": "int-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{9x^2 + 4}$",
    "options": [
      {
        "latex": "\\frac{1}{6}\\arctan\\frac{3x}{2} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\frac{3x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arctan(3x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan(3x) + C",
        "correct": false
      }
    ],
    "explanation": "$9x^2 + 4 = (3x)^2 + 4$. Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\cdot\\frac{1}{2}\\arctan\\frac{3x}{2} = \\frac{1}{6}\\arctan\\frac{3x}{2} + C$."
  },
  {
    "id": "int-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\sin x\\,\\cos^3 x\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\cos^4 x}{4} + C",
        "correct": true
      },
      {
        "latex": "\\frac{\\cos^4 x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^4 x}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^4 x}{4} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = \\cos x$, $du = -\\sin x\\,dx$: $-\\int u^3\\,du = -\\frac{\\cos^4 x}{4} + C$."
  },
  {
    "id": "int-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 4x + 13}$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x-2}{3} + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x-4}{3} + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\frac{x-2}{3} + C",
        "correct": false
      },
      {
        "latex": "\\ln(x^2 - 4x + 13) + C",
        "correct": false
      }
    ],
    "explanation": "Completando: $x^2 - 4x + 13 = (x-2)^2 + 9$. Fórmula (18) con $a = 3$, $v = x-2$."
  },
  {
    "id": "int-h-18",
    "difficulty": "hard",
    "prompt": "¿Qué fórmula y transformación usas para $\\int \\frac{dx}{x^2 + 2x + 5}$?",
    "options": [
      {
        "latex": "\\text{(18), completando el cuadrado: } (x+1)^2 + 4",
        "correct": true
      },
      {
        "latex": "\\text{(19) directamente}",
        "correct": false
      },
      {
        "latex": "\\text{(5) con } v = x^2 + 2x + 5",
        "correct": false
      },
      {
        "latex": "\\text{(20), completando el cuadrado}",
        "correct": false
      }
    ],
    "explanation": "El denominador es $(x+1)^2 + 4$, forma $v^2 + a^2$: aplica la fórmula (18)."
  },
  {
    "id": "int-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{\\sqrt{x^2 - 2x + 5}}$",
    "options": [
      {
        "latex": "\\ln\\left|(x-1) + \\sqrt{x^2 - 2x + 5}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\arcsin\\frac{x-1}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln|x-1 + \\sqrt{x^2-2x+5}| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 - 2x + 5} + C",
        "correct": false
      }
    ],
    "explanation": "Completando: $x^2 - 2x + 5 = (x-1)^2 + 4$. Fórmula (21) con $v = x-1$, $a = 2$."
  },
  {
    "id": "int-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{2x + 4}{x^2 + 4x + 5}\\,dx$",
    "options": [
      {
        "latex": "\\ln(x^2 + 4x + 5) + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 4x + 5) + C",
        "correct": false
      },
      {
        "latex": "\\arctan(x+2) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arctan(x+2) + C",
        "correct": false
      }
    ],
    "explanation": "El numerador es la derivada del denominador: $\\int\\frac{du}{u} = \\ln|u| + C$ (fórmula 5)."
  },
  {
    "id": "int-h-21",
    "difficulty": "hard",
    "prompt": "¿Cuál integral se resuelve con la fórmula (20)?",
    "options": [
      {
        "latex": "\\int \\frac{dx}{\\sqrt{1 - x^2}}",
        "correct": true
      },
      {
        "latex": "\\int \\frac{dx}{\\sqrt{x^2 + 1}}",
        "correct": false
      },
      {
        "latex": "\\int \\frac{dx}{x^2 + 1}",
        "correct": false
      },
      {
        "latex": "\\int \\sqrt{1 - x^2}\\,dx",
        "correct": false
      }
    ],
    "explanation": "La fórmula (20) es $\\int\\frac{dv}{\\sqrt{a^2 - v^2}} = \\arcsin\\frac{v}{a} + C$."
  },
  {
    "id": "int-h-22",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\sin^5 x\\,\\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\sin^6 x}{6} + C",
        "correct": true
      },
      {
        "latex": "\\frac{\\cos^6 x}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^6 x + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\cos^6 x}{6} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int u^5\\,du = \\frac{\\sin^6 x}{6} + C$."
  },
  {
    "id": "int-h-23",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int \\frac{dx}{x^2 - 9}$",
    "options": [
      {
        "latex": "\\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + C",
        "correct": true
      },
      {
        "latex": "\\frac{1}{3}\\ln\\left|\\frac{x-3}{x+3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\ln\\left|\\frac{x+3}{x-3}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x}{3} + C",
        "correct": false
      }
    ],
    "explanation": "Fórmula (19) con $a = 3$: $\\frac{1}{2\\cdot 3}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$."
  },
  {
    "id": "int-h-24",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x\\sqrt{x^2 + 1}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}(x^2 + 1)^{3/2} + C",
        "correct": true
      },
      {
        "latex": "(x^2 + 1)^{3/2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}(x^2 + 1)^{3/2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{2}{3}(x^2 + 1)^{3/2} + C",
        "correct": false
      }
    ],
    "explanation": "Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{3}(x^2+1)^{3/2} + C$."
  },
  {
    "id": "int-h-25",
    "difficulty": "hard",
    "prompt": "¿Qué cambio de variable resuelve $\\int \\frac{dx}{\\sqrt{9 - 4x^2}}$?",
    "options": [
      {
        "latex": "v = 2x, \\ a = 3 \\text{ (fórmula 20)}",
        "correct": true
      },
      {
        "latex": "v = 3x, \\ a = 2",
        "correct": false
      },
      {
        "latex": "v = x, \\ a = 3",
        "correct": false
      },
      {
        "latex": "\\text{Fórmula (21)}",
        "correct": false
      }
    ],
    "explanation": "$9 - 4x^2 = 3^2 - (2x)^2$. Con $v = 2x$, $dv = 2\\,dx$: $\\frac{1}{2}\\arcsin\\frac{2x}{3} + C$."
  },
  {
    "id": "int-h-26",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{3}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{4}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{4}(x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{3}\\,du = \\frac{u^{4}}{4} + C = \\frac{\\sin^{4}(x)}{4} + C$."
  },
  {
    "id": "int-h-27",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 64}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\ln(x^2 + 64) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{64}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-28",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{4 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|4 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-29",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{6}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{7}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{7}(x)}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{6}\\,du = \\frac{u^{7}}{7} + C = \\frac{\\sin^{7}(x)}{7} + C$."
  },
  {
    "id": "int-h-30",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{16}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-31",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{25 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|25 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-32",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{4}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{5}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{5}(x)}{5} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{4}\\,du = \\frac{u^{5}}{5} + C = \\frac{\\sin^{5}(x)}{5} + C$."
  },
  {
    "id": "int-h-33",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 49}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{49}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\ln(x^2 + 49) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-34",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{64 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|64 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-35",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{2}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{3}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{3}(x)}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{2}\\,du = \\frac{u^{3}}{3} + C = \\frac{\\sin^{3}(x)}{3} + C$."
  },
  {
    "id": "int-h-36",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-37",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{16 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|16 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-38",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{5}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{6}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{6}(x)}{6} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{5}\\,du = \\frac{u^{6}}{6} + C = \\frac{\\sin^{6}(x)}{6} + C$."
  },
  {
    "id": "int-h-39",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 36}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{36}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\ln(x^2 + 36) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-40",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{49 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|49 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-41",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{3}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{4}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{4}(x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{3}\\,du = \\frac{u^{4}}{4} + C = \\frac{\\sin^{4}(x)}{4} + C$."
  },
  {
    "id": "int-h-42",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 4}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 4) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-43",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|9 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-44",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{6}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{7}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{7}(x)}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{6}\\,du = \\frac{u^{7}}{7} + C = \\frac{\\sin^{7}(x)}{7} + C$."
  },
  {
    "id": "int-h-45",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 25}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\ln(x^2 + 25) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-46",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{36 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|36 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-47",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{4}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{5}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{5}(x)}{5} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{4}\\,du = \\frac{u^{5}}{5} + C = \\frac{\\sin^{5}(x)}{5} + C$."
  },
  {
    "id": "int-h-48",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 64}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\ln(x^2 + 64) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{64}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-49",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{4 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|4 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-50",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{2}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{3}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{3}(x)}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{2}\\,du = \\frac{u^{3}}{3} + C = \\frac{\\sin^{3}(x)}{3} + C$."
  },
  {
    "id": "int-h-51",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{16}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-52",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{25 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|25 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-53",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{5}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{6}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{6}(x)}{6} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{5}\\,du = \\frac{u^{6}}{6} + C = \\frac{\\sin^{6}(x)}{6} + C$."
  },
  {
    "id": "int-h-54",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 49}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\ln(x^2 + 49) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-55",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{64 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|64 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-56",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{3}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{4}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{4}(x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{3}\\,du = \\frac{u^{4}}{4} + C = \\frac{\\sin^{4}(x)}{4} + C$."
  },
  {
    "id": "int-h-57",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-58",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{16 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|16 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-59",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{6}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{7}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{7}(x)}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{6}\\,du = \\frac{u^{7}}{7} + C = \\frac{\\sin^{7}(x)}{7} + C$."
  },
  {
    "id": "int-h-60",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 36}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{36}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\ln(x^2 + 36) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-61",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{49 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{7}\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|49 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-62",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{4}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{5}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{5}(x)}{5} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{4}\\,du = \\frac{u^{5}}{5} + C = \\frac{\\sin^{5}(x)}{5} + C$."
  },
  {
    "id": "int-h-63",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 4}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 4) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-64",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|9 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-65",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{2}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{3}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{3}(x)}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{2}\\,du = \\frac{u^{3}}{3} + C = \\frac{\\sin^{3}(x)}{3} + C$."
  },
  {
    "id": "int-h-66",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 25}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{25}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\ln(x^2 + 25) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-67",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{36 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|36 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-68",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{5}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{6}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{6}(x)}{6} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{5}\\,du = \\frac{u^{6}}{6} + C = \\frac{\\sin^{6}(x)}{6} + C$."
  },
  {
    "id": "int-h-69",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 64}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{64}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\ln(x^2 + 64) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-70",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{4 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|4 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-71",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{3}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{4}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{4}(x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{3}\\,du = \\frac{u^{4}}{4} + C = \\frac{\\sin^{4}(x)}{4} + C$."
  },
  {
    "id": "int-h-72",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{16}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-73",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{25 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|25 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-74",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{6}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{7}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{7}(x)}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{6}\\,du = \\frac{u^{7}}{7} + C = \\frac{\\sin^{7}(x)}{7} + C$."
  },
  {
    "id": "int-h-75",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 49}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{49}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\ln(x^2 + 49) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-76",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{64 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{8}\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|64 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-77",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{4}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{5}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{5}(x)}{5} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{4}\\,du = \\frac{u^{5}}{5} + C = \\frac{\\sin^{5}(x)}{5} + C$."
  },
  {
    "id": "int-h-78",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-79",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{16 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|16 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-80",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{2}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{3}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{3}(x)}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{2}\\,du = \\frac{u^{3}}{3} + C = \\frac{\\sin^{3}(x)}{3} + C$."
  },
  {
    "id": "int-h-81",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 36}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{36}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\ln(x^2 + 36) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arctan\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-82",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{49 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|49 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-83",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{5}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{6}(x) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{6}(x)}{6} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{5}\\,du = \\frac{u^{6}}{6} + C = \\frac{\\sin^{6}(x)}{6} + C$."
  },
  {
    "id": "int-h-84",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 4}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\ln(x^2 + 4) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-85",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|9 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  },
  {
    "id": "int-h-86",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{3}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{4}(x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{4}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{4}(x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{3}\\,du = \\frac{u^{4}}{4} + C = \\frac{\\sin^{4}(x)}{4} + C$."
  },
  {
    "id": "int-h-87",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 25}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{25}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\ln(x^2 + 25) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-88",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{36 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|36 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 6$."
  },
  {
    "id": "int-h-89",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{6}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{7}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{7}(x)}{7} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{7}(x)}{7} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{6}\\,du = \\frac{u^{7}}{7} + C = \\frac{\\sin^{7}(x)}{7} + C$."
  },
  {
    "id": "int-h-90",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 64}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\ln(x^2 + 64) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{64}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{8}\\arctan\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-91",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{4 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|4 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 2$."
  },
  {
    "id": "int-h-92",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{4}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{5}(x)}{5} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{5}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{5}(x)}{5} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{4}\\,du = \\frac{u^{5}}{5} + C = \\frac{\\sin^{5}(x)}{5} + C$."
  },
  {
    "id": "int-h-93",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 16}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{16}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\ln(x^2 + 16) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 4$."
  },
  {
    "id": "int-h-94",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{25 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|25 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 5$."
  },
  {
    "id": "int-h-95",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{2}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{\\cos^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sin^{3}(x)}{3} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{3}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{3}(x)}{3} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{2}\\,du = \\frac{u^{3}}{3} + C = \\frac{\\sin^{3}(x)}{3} + C$."
  },
  {
    "id": "int-h-96",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 49}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{49}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\ln(x^2 + 49) + C",
        "correct": false
      },
      {
        "latex": "\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 7$."
  },
  {
    "id": "int-h-97",
    "difficulty": "hard",
    "prompt": "Calcula la integral: $\\int \\frac{1}{\\sqrt{64 - x^2}}\\,dx$",
    "options": [
      {
        "latex": "\\frac{1}{8}\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\left(\\frac{x}{8}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln|64 - x^2| + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{8}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$. Con $a = 8$."
  },
  {
    "id": "int-h-98",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución: $\\int \\sin^{5}(x)\\cos(x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{\\sin^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\sin^{6}(x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\cos^{6}(x)}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sin^{6}(x)}{6} + C",
        "correct": true
      }
    ],
    "explanation": "Tomando $u = \\sin x$, $du = \\cos x\\,dx$. La integral es $\\int u^{5}\\,du = \\frac{u^{6}}{6} + C = \\frac{\\sin^{6}(x)}{6} + C$."
  },
  {
    "id": "int-h-99",
    "difficulty": "hard",
    "prompt": "Calcula la integral que da arco tangente: $\\int \\frac{1}{x^2 + 9}\\,dx$",
    "options": [
      {
        "latex": "\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln(x^2 + 9) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{9}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Fórmula de tabla: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$. Con $a = 3$."
  }
];
