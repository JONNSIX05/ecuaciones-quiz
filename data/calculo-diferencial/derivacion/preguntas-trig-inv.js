// data/calculo-diferencial/derivacion/preguntas-trig-inv.js
// Catálogo ampliado a 90 preguntas (30 fáciles, 30 medias, 30 difíciles).

export default [
  {
    "id": "derti-f-01",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\arcsin x$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": true
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "\\cos x",
        "correct": false
      }
    ],
    "explanation": "Fórmula XX con $v = x$. No es $\\cos x$: la derivada no es la función inversa del coseno."
  },
  {
    "id": "derti-f-02",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\arccos x$",
    "options": [
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 + x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXI: igual que el arcoseno pero con signo negativo."
  },
  {
    "id": "derti-f-03",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 + x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 - x^2}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXII con $v = x$."
  },
  {
    "id": "derti-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuál es la fórmula XXII para $\\frac{d}{dx}(\\arctan v)$?",
    "options": [
      {
        "latex": "\\frac{\\frac{dv}{dx}}{1 + v^2}",
        "correct": true
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{1 - v^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{v^2 + v}",
        "correct": false
      }
    ],
    "explanation": "La arcotangente deriva $\\frac{1}{1 + v^2}$ por la derivada del argumento."
  },
  {
    "id": "derti-f-05",
    "difficulty": "easy",
    "prompt": "¿Qué regla usas para derivar $f(x) = \\arcsin x$?",
    "options": [
      {
        "latex": "\\text{Derivada del arcoseno (XX)}",
        "correct": true
      },
      {
        "latex": "\\text{Derivada del seno (XIII)}",
        "correct": false
      },
      {
        "latex": "\\text{Derivación de la función inversa (IX) directamente}",
        "correct": false
      },
      {
        "latex": "\\text{Regla de la potencia (VIa)}",
        "correct": false
      }
    ],
    "explanation": "Es una función trigonométrica inversa: se usa su fórmula directa (XX)."
  },
  {
    "id": "derti-f-06",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\arcsin x$",
    "options": [
      {
        "latex": "-4 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-07",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\arccos x$",
    "options": [
      {
        "latex": "-5 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-08",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "-2 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-09",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-3 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-10",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\operatorname{arcsec} x$",
    "options": [
      {
        "latex": "\\frac{1}{|x|\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "-4 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-11",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\arcsin x$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "-5 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-12",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\arccos x$",
    "options": [
      {
        "latex": "-2 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-13",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-3 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-14",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-4 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-15",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\operatorname{arcsec} x$",
    "options": [
      {
        "latex": "\\frac{1}{|x|\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "-5 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-16",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\arcsin x$",
    "options": [
      {
        "latex": "-2 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-17",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\arccos x$",
    "options": [
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "-3 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-18",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "-4 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-19",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "-5 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-20",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\operatorname{arcsec} x$",
    "options": [
      {
        "latex": "\\frac{1}{|x|\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "-2 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-21",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\arcsin x$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "-3 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-22",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\arccos x$",
    "options": [
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "-4 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-23",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-5 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-24",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-2 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-25",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\operatorname{arcsec} x$",
    "options": [
      {
        "latex": "\\frac{1}{|x|\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "-3 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-26",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\arcsin x$",
    "options": [
      {
        "latex": "-4 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-27",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 5 \\arccos x$",
    "options": [
      {
        "latex": "-5 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "5 \\left(\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "5 \\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-28",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 2 \\arctan x$",
    "options": [
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "2 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-2 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "2 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-29",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 3 \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "3 \\left(\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "-3 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": false
      },
      {
        "latex": "3 \\left(-\\frac{1}{1 + x^2}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-f-30",
    "difficulty": "easy",
    "prompt": "Deriva: $f(x) = 4 \\operatorname{arcsec} x$",
    "options": [
      {
        "latex": "-4 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "4 \\left(-\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": false
      },
      {
        "latex": "\\frac{1}{|x|\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "4 \\left(\\frac{1}{|x|\\sqrt{x^2 - 1}}\\right)",
        "correct": true
      }
    ],
    "explanation": "La derivada de una constante multiplicada por una función es la constante por la derivada de la función."
  },
  {
    "id": "derti-m-01",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\operatorname{arccot} x$",
    "options": [
      {
        "latex": "-\\frac{1}{1 + x^2}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{1 + x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x^2}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXIII: igual que la arcotangente pero con signo negativo."
  },
  {
    "id": "derti-m-02",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\operatorname{arcsec} x$ (con $x > 1$)",
    "options": [
      {
        "latex": "\\frac{1}{x \\sqrt{x^2 - 1}}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{x \\sqrt{1 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{x \\sqrt{x^2 - 1}}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXIV con $v = x$: denominador $x \\sqrt{x^2 - 1}$."
  },
  {
    "id": "derti-m-03",
    "difficulty": "medium",
    "prompt": "Deriva: $f(x) = \\operatorname{arccsc} x$ (con $x > 1$)",
    "options": [
      {
        "latex": "-\\frac{1}{x \\sqrt{x^2 - 1}}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{x \\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{\\sqrt{x^2 - 1}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{x \\sqrt{1 + x^2}}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXV con $v = x$."
  },
  {
    "id": "derti-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuál es la fórmula XXV para $\\frac{d}{dx}(\\operatorname{arccsc} v)$?",
    "options": [
      {
        "latex": "-\\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}",
        "correct": true
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}",
        "correct": false
      },
      {
        "latex": "-\\frac{\\frac{dv}{dx}}{v \\sqrt{1 - v^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{1 + v^2}",
        "correct": false
      }
    ],
    "explanation": "La arcocosecante deriva la expresión de la arcosecante con signo negativo."
  },
  {
    "id": "derti-m-05",
    "difficulty": "medium",
    "prompt": "¿Qué par de derivadas difiere solo en el signo?",
    "options": [
      {
        "latex": "\\arctan x \\text{ y } \\operatorname{arccot} x",
        "correct": true
      },
      {
        "latex": "\\arcsin x \\text{ y } \\arctan x",
        "correct": false
      },
      {
        "latex": "\\arctan x \\text{ y } \\operatorname{arcsec} x",
        "correct": false
      },
      {
        "latex": "\\arcsin x \\text{ y } \\operatorname{arccsc} x",
        "correct": false
      }
    ],
    "explanation": "$\\frac{1}{1+x^2}$ contra $-\\frac{1}{1+x^2}$. Lo mismo pasa con arcsen/arccos y arcsec/arccsc."
  },
  {
    "id": "derti-m-06",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(3x)$",
    "options": [
      {
        "latex": "\\frac{3}{1 + 3x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 9x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, se obtiene $\\frac{3}{1 + 9x^2}$."
  },
  {
    "id": "derti-m-07",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 16x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, se obtiene $\\frac{4}{1 + 16x^2}$."
  },
  {
    "id": "derti-m-08",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 5x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 25x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, se obtiene $\\frac{5}{1 + 25x^2}$."
  },
  {
    "id": "derti-m-09",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(6x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 6x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 36x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 6x$, $u' = 6$ y $u^2 = 36x^2$, se obtiene $\\frac{6}{1 + 36x^2}$."
  },
  {
    "id": "derti-m-10",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 2x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, se obtiene $\\frac{2}{1 + 4x^2}$."
  },
  {
    "id": "derti-m-11",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(3x)$",
    "options": [
      {
        "latex": "\\frac{3}{1 + 3x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 9x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, se obtiene $\\frac{3}{1 + 9x^2}$."
  },
  {
    "id": "derti-m-12",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 16x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, se obtiene $\\frac{4}{1 + 16x^2}$."
  },
  {
    "id": "derti-m-13",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 5x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 25x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, se obtiene $\\frac{5}{1 + 25x^2}$."
  },
  {
    "id": "derti-m-14",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(6x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 6x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 36x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 6x$, $u' = 6$ y $u^2 = 36x^2$, se obtiene $\\frac{6}{1 + 36x^2}$."
  },
  {
    "id": "derti-m-15",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(2x)$",
    "options": [
      {
        "latex": "\\frac{2}{1 + 2x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, se obtiene $\\frac{2}{1 + 4x^2}$."
  },
  {
    "id": "derti-m-16",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(3x)$",
    "options": [
      {
        "latex": "\\frac{3}{1 + 3x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 9x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, se obtiene $\\frac{3}{1 + 9x^2}$."
  },
  {
    "id": "derti-m-17",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 16x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, se obtiene $\\frac{4}{1 + 16x^2}$."
  },
  {
    "id": "derti-m-18",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 5x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 25x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, se obtiene $\\frac{5}{1 + 25x^2}$."
  },
  {
    "id": "derti-m-19",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(6x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 6x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 36x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 6x$, $u' = 6$ y $u^2 = 36x^2$, se obtiene $\\frac{6}{1 + 36x^2}$."
  },
  {
    "id": "derti-m-20",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(2x)$",
    "options": [
      {
        "latex": "\\frac{2}{1 + 2x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, se obtiene $\\frac{2}{1 + 4x^2}$."
  },
  {
    "id": "derti-m-21",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(3x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 3x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 9x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, se obtiene $\\frac{3}{1 + 9x^2}$."
  },
  {
    "id": "derti-m-22",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(4x)$",
    "options": [
      {
        "latex": "\\frac{4}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 16x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, se obtiene $\\frac{4}{1 + 16x^2}$."
  },
  {
    "id": "derti-m-23",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 5x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 25x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, se obtiene $\\frac{5}{1 + 25x^2}$."
  },
  {
    "id": "derti-m-24",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(6x)$",
    "options": [
      {
        "latex": "\\frac{6}{1 + 6x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 36x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 6x$, $u' = 6$ y $u^2 = 36x^2$, se obtiene $\\frac{6}{1 + 36x^2}$."
  },
  {
    "id": "derti-m-25",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(2x)$",
    "options": [
      {
        "latex": "\\frac{2}{1 + 2x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, se obtiene $\\frac{2}{1 + 4x^2}$."
  },
  {
    "id": "derti-m-26",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(3x)$",
    "options": [
      {
        "latex": "\\frac{3}{1 + 3x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 9x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{1 + 9x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, se obtiene $\\frac{3}{1 + 9x^2}$."
  },
  {
    "id": "derti-m-27",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{1 + 16x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{1 + 16x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, se obtiene $\\frac{4}{1 + 16x^2}$."
  },
  {
    "id": "derti-m-28",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(5x)$",
    "options": [
      {
        "latex": "\\frac{5}{1 + 5x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 25x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{1 + 25x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, se obtiene $\\frac{5}{1 + 25x^2}$."
  },
  {
    "id": "derti-m-29",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(6x)$",
    "options": [
      {
        "latex": "\\frac{6}{1 + 6x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{6}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 36x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{1 + 36x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 6x$, $u' = 6$ y $u^2 = 36x^2$, se obtiene $\\frac{6}{1 + 36x^2}$."
  },
  {
    "id": "derti-m-30",
    "difficulty": "medium",
    "prompt": "Deriva aplicando la regla de la cadena: $f(x) = \\arctan(2x)$",
    "options": [
      {
        "latex": "\\frac{2}{1 + 2x^2}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1 + 4x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1 + u^2}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, se obtiene $\\frac{2}{1 + 4x^2}$."
  },
  {
    "id": "derti-h-01",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = \\arctan(x^2)$",
    "options": [
      {
        "latex": "\\frac{2x}{1 + x^4}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{1 + x^4}",
        "correct": false
      },
      {
        "latex": "\\frac{2x}{1 + 2x}",
        "correct": false
      },
      {
        "latex": "\\frac{2x}{\\sqrt{1 - x^4}}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXII con cadena: $\\frac{(x^2)'}{1 + (x^2)^2} = \\frac{2x}{1 + x^4}$."
  },
  {
    "id": "derti-h-02",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{1 + 4x^2}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XX con cadena: $\\frac{(2x)'}{\\sqrt{1 - (2x)^2}} = \\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-03",
    "difficulty": "hard",
    "prompt": "Deriva: $f(x) = \\operatorname{arcsec}(e^x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{e^{2x} - 1}}",
        "correct": true
      },
      {
        "latex": "\\frac{e^x}{\\sqrt{e^{2x} - 1}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{e^x \\sqrt{1 - e^{2x}}}",
        "correct": false
      },
      {
        "latex": "\\frac{e^x}{e^{2x} - 1}",
        "correct": false
      }
    ],
    "explanation": "Fórmula XXIV con cadena: $\\frac{e^x}{e^x \\sqrt{e^{2x} - 1}} = \\frac{1}{\\sqrt{e^{2x} - 1}}$."
  },
  {
    "id": "derti-h-04",
    "difficulty": "hard",
    "prompt": "¿Cuál es la fórmula XXVI para $\\frac{d}{dx}(\\operatorname{arcvers} v)$?",
    "options": [
      {
        "latex": "\\frac{\\frac{dv}{dx}}{\\sqrt{2v - v^2}}",
        "correct": true
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{\\sqrt{2v + v^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\frac{dv}{dx}}{2v - v^2}",
        "correct": false
      }
    ],
    "explanation": "El arco verso deriva $\\frac{1}{\\sqrt{2v - v^2}}$ por la derivada del argumento."
  },
  {
    "id": "derti-h-05",
    "difficulty": "hard",
    "prompt": "¿Qué reglas usas para derivar $f(x) = \\arctan(3x + 1)$?",
    "options": [
      {
        "latex": "\\text{Arcotangente (XXII) + cadena (VIII)}",
        "correct": true
      },
      {
        "latex": "\\text{Solo arcotangente (XXII)}",
        "correct": false
      },
      {
        "latex": "\\text{Tangente (XV) + cadena (VIII)}",
        "correct": false
      },
      {
        "latex": "\\text{Cociente (VII)}",
        "correct": false
      }
    ],
    "explanation": "El argumento no es $x$: fórmula XXII multiplicada por $(3x + 1)' = 3$. Queda $\\frac{3}{1 + (3x+1)^2}$."
  },
  {
    "id": "derti-h-06",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-07",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-08",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-09",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-10",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-11",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-12",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-13",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-14",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-15",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-16",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-17",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-18",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-19",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-20",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-21",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-22",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-23",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-24",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-25",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-26",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  },
  {
    "id": "derti-h-27",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(5x)$",
    "options": [
      {
        "latex": "-\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 5x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 25x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{1 - 25x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 5x$, $u' = 5$ y $u^2 = 25x^2$, resulta $\\frac{5}{\\sqrt{1 - 25x^2}}$."
  },
  {
    "id": "derti-h-28",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(2x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 2x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{1 - 4x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 2x$, $u' = 2$ y $u^2 = 4x^2$, resulta $\\frac{2}{\\sqrt{1 - 4x^2}}$."
  },
  {
    "id": "derti-h-29",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(3x)$",
    "options": [
      {
        "latex": "-\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 3x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{1 - 9x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{1 - 9x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 3x$, $u' = 3$ y $u^2 = 9x^2$, resulta $\\frac{3}{\\sqrt{1 - 9x^2}}$."
  },
  {
    "id": "derti-h-30",
    "difficulty": "hard",
    "prompt": "Deriva aplicando regla de la cadena: $f(x) = \\arcsin(4x)$",
    "options": [
      {
        "latex": "\\frac{1}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 4x^2}}",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{1 - 16x^2}}",
        "correct": true
      }
    ],
    "explanation": "$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1 - u^2}}$. Con $u = 4x$, $u' = 4$ y $u^2 = 16x^2$, resulta $\\frac{4}{\\sqrt{1 - 16x^2}}$."
  }
];
