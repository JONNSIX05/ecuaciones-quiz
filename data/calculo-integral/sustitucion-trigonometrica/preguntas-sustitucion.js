// data/calculo-integral/sustitucion-trigonometrica/preguntas-sustitucion.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default [
  {
    "id": "sust-f-01",
    "difficulty": "easy",
    "prompt": "¿Qué sustitución usas para una integral con $\\sqrt{a^2 - x^2}$?",
    "options": [
      {
        "latex": "x = a\\sin\\theta",
        "correct": true
      },
      {
        "latex": "x = a\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\cos^2\\theta",
        "correct": false
      }
    ],
    "explanation": "Para $\\sqrt{a^2 - x^2}$ se usa $x = a\\sin\\theta$, pues $a^2 - a^2\\sin^2\\theta = a^2\\cos^2\\theta$."
  },
  {
    "id": "sust-f-02",
    "difficulty": "easy",
    "prompt": "¿Qué sustitución usas para una integral con $\\sqrt{a^2 + x^2}$?",
    "options": [
      {
        "latex": "x = a\\tan\\theta",
        "correct": true
      },
      {
        "latex": "x = a\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\csc\\theta",
        "correct": false
      }
    ],
    "explanation": "Para $\\sqrt{a^2 + x^2}$ se usa $x = a\\tan\\theta$: $a^2 + a^2\\tan^2\\theta = a^2\\sec^2\\theta$."
  },
  {
    "id": "sust-f-03",
    "difficulty": "easy",
    "prompt": "¿Qué sustitución usas para una integral con $\\sqrt{x^2 - a^2}$?",
    "options": [
      {
        "latex": "x = a\\sec\\theta",
        "correct": true
      },
      {
        "latex": "x = a\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = a\\cos\\theta",
        "correct": false
      }
    ],
    "explanation": "Para $\\sqrt{x^2 - a^2}$ se usa $x = a\\sec\\theta$: $a^2\\sec^2\\theta - a^2 = a^2\\tan^2\\theta$."
  },
  {
    "id": "sust-f-04",
    "difficulty": "easy",
    "prompt": "Para $\\int \\frac{dx}{\\sqrt{4 - x^2}}$, ¿qué sustitución usas?",
    "options": [
      {
        "latex": "x = 2\\sin\\theta",
        "correct": true
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sin\\theta",
        "correct": false
      }
    ],
    "explanation": "$a^2 = 4$, así que $a = 2$ y $x = 2\\sin\\theta$."
  },
  {
    "id": "sust-f-05",
    "difficulty": "easy",
    "prompt": "Para $\\int \\frac{dx}{\\sqrt{9 + x^2}}$, ¿qué sustitución usas?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": true
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      }
    ],
    "explanation": "$a^2 = 9$, así que $a = 3$ y $x = 3\\tan\\theta$."
  },
  {
    "id": "sust-f-06",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{64 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 64\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 8$, la sustitución trigonométrica estándar es $x = 8\\sin\\theta$."
  },
  {
    "id": "sust-f-07",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 81}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 9$, la sustitución adecuada es $x = 9\\tan\\theta$."
  },
  {
    "id": "sust-f-08",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 4}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 2$, se emplea $x = 2\\sec\\theta$."
  },
  {
    "id": "sust-f-09",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{9 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 3$, la sustitución trigonométrica estándar es $x = 3\\sin\\theta$."
  },
  {
    "id": "sust-f-10",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 16}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 4$, la sustitución adecuada es $x = 4\\tan\\theta$."
  },
  {
    "id": "sust-f-100",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 36}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 6$, la sustitución adecuada es $x = 6\\tan\\theta$."
  },
  {
    "id": "sust-f-11",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 25}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 5$, se emplea $x = 5\\sec\\theta$."
  },
  {
    "id": "sust-f-12",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{36 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 36\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 6$, la sustitución trigonométrica estándar es $x = 6\\sin\\theta$."
  },
  {
    "id": "sust-f-13",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 49}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 7$, la sustitución adecuada es $x = 7\\tan\\theta$."
  },
  {
    "id": "sust-f-14",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 64}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 8$, se emplea $x = 8\\sec\\theta$."
  },
  {
    "id": "sust-f-15",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{81 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 81\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 9$, la sustitución trigonométrica estándar es $x = 9\\sin\\theta$."
  },
  {
    "id": "sust-f-16",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 4}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 2$, la sustitución adecuada es $x = 2\\tan\\theta$."
  },
  {
    "id": "sust-f-17",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 9}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 3$, se emplea $x = 3\\sec\\theta$."
  },
  {
    "id": "sust-f-18",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{16 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 16\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 4$, la sustitución trigonométrica estándar es $x = 4\\sin\\theta$."
  },
  {
    "id": "sust-f-19",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 25}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 5$, la sustitución adecuada es $x = 5\\tan\\theta$."
  },
  {
    "id": "sust-f-20",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 36}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 6$, se emplea $x = 6\\sec\\theta$."
  },
  {
    "id": "sust-f-21",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{49 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 49\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 7$, la sustitución trigonométrica estándar es $x = 7\\sin\\theta$."
  },
  {
    "id": "sust-f-22",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 64}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 8$, la sustitución adecuada es $x = 8\\tan\\theta$."
  },
  {
    "id": "sust-f-23",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 81}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 9$, se emplea $x = 9\\sec\\theta$."
  },
  {
    "id": "sust-f-24",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{4 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 2$, la sustitución trigonométrica estándar es $x = 2\\sin\\theta$."
  },
  {
    "id": "sust-f-25",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 9}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 3$, la sustitución adecuada es $x = 3\\tan\\theta$."
  },
  {
    "id": "sust-f-26",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 16}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 4$, se emplea $x = 4\\sec\\theta$."
  },
  {
    "id": "sust-f-27",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{25 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 25\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 5$, la sustitución trigonométrica estándar es $x = 5\\sin\\theta$."
  },
  {
    "id": "sust-f-28",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 36}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 6$, la sustitución adecuada es $x = 6\\tan\\theta$."
  },
  {
    "id": "sust-f-29",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 49}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 7$, se emplea $x = 7\\sec\\theta$."
  },
  {
    "id": "sust-f-30",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{64 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 64\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 8$, la sustitución trigonométrica estándar es $x = 8\\sin\\theta$."
  },
  {
    "id": "sust-f-31",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 81}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 9$, la sustitución adecuada es $x = 9\\tan\\theta$."
  },
  {
    "id": "sust-f-32",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 4}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 2$, se emplea $x = 2\\sec\\theta$."
  },
  {
    "id": "sust-f-33",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{9 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 3$, la sustitución trigonométrica estándar es $x = 3\\sin\\theta$."
  },
  {
    "id": "sust-f-34",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 16}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 4$, la sustitución adecuada es $x = 4\\tan\\theta$."
  },
  {
    "id": "sust-f-35",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 25}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 5$, se emplea $x = 5\\sec\\theta$."
  },
  {
    "id": "sust-f-36",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{36 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 36\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 6$, la sustitución trigonométrica estándar es $x = 6\\sin\\theta$."
  },
  {
    "id": "sust-f-37",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 49}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 7$, la sustitución adecuada es $x = 7\\tan\\theta$."
  },
  {
    "id": "sust-f-38",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 64}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 8$, se emplea $x = 8\\sec\\theta$."
  },
  {
    "id": "sust-f-39",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{81 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 81\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 9$, la sustitución trigonométrica estándar es $x = 9\\sin\\theta$."
  },
  {
    "id": "sust-f-40",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 4}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 2$, la sustitución adecuada es $x = 2\\tan\\theta$."
  },
  {
    "id": "sust-f-41",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 9}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 3$, se emplea $x = 3\\sec\\theta$."
  },
  {
    "id": "sust-f-42",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{16 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 16\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 4$, la sustitución trigonométrica estándar es $x = 4\\sin\\theta$."
  },
  {
    "id": "sust-f-43",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 25}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 5$, la sustitución adecuada es $x = 5\\tan\\theta$."
  },
  {
    "id": "sust-f-44",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 36}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 6$, se emplea $x = 6\\sec\\theta$."
  },
  {
    "id": "sust-f-45",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{49 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 49\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 7$, la sustitución trigonométrica estándar es $x = 7\\sin\\theta$."
  },
  {
    "id": "sust-f-46",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 64}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 8$, la sustitución adecuada es $x = 8\\tan\\theta$."
  },
  {
    "id": "sust-f-47",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 81}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 9$, se emplea $x = 9\\sec\\theta$."
  },
  {
    "id": "sust-f-48",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{4 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 2$, la sustitución trigonométrica estándar es $x = 2\\sin\\theta$."
  },
  {
    "id": "sust-f-49",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 9}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 3$, la sustitución adecuada es $x = 3\\tan\\theta$."
  },
  {
    "id": "sust-f-50",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 16}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 4$, se emplea $x = 4\\sec\\theta$."
  },
  {
    "id": "sust-f-51",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{25 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 25\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 5$, la sustitución trigonométrica estándar es $x = 5\\sin\\theta$."
  },
  {
    "id": "sust-f-52",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 36}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 6$, la sustitución adecuada es $x = 6\\tan\\theta$."
  },
  {
    "id": "sust-f-53",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 49}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 7$, se emplea $x = 7\\sec\\theta$."
  },
  {
    "id": "sust-f-54",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{64 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 64\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 8$, la sustitución trigonométrica estándar es $x = 8\\sin\\theta$."
  },
  {
    "id": "sust-f-55",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 81}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 9$, la sustitución adecuada es $x = 9\\tan\\theta$."
  },
  {
    "id": "sust-f-56",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 4}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 2$, se emplea $x = 2\\sec\\theta$."
  },
  {
    "id": "sust-f-57",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{9 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 3$, la sustitución trigonométrica estándar es $x = 3\\sin\\theta$."
  },
  {
    "id": "sust-f-58",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 16}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 4$, la sustitución adecuada es $x = 4\\tan\\theta$."
  },
  {
    "id": "sust-f-59",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 25}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 5$, se emplea $x = 5\\sec\\theta$."
  },
  {
    "id": "sust-f-60",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{36 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 36\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 6$, la sustitución trigonométrica estándar es $x = 6\\sin\\theta$."
  },
  {
    "id": "sust-f-61",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 49}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 7$, la sustitución adecuada es $x = 7\\tan\\theta$."
  },
  {
    "id": "sust-f-62",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 64}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 8$, se emplea $x = 8\\sec\\theta$."
  },
  {
    "id": "sust-f-63",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{81 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 81\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 9$, la sustitución trigonométrica estándar es $x = 9\\sin\\theta$."
  },
  {
    "id": "sust-f-64",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 4}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 2$, la sustitución adecuada es $x = 2\\tan\\theta$."
  },
  {
    "id": "sust-f-65",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 9}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 3$, se emplea $x = 3\\sec\\theta$."
  },
  {
    "id": "sust-f-66",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{16 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 16\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 4$, la sustitución trigonométrica estándar es $x = 4\\sin\\theta$."
  },
  {
    "id": "sust-f-67",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 25}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 5$, la sustitución adecuada es $x = 5\\tan\\theta$."
  },
  {
    "id": "sust-f-68",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 36}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 6$, se emplea $x = 6\\sec\\theta$."
  },
  {
    "id": "sust-f-69",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{49 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 49\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 7$, la sustitución trigonométrica estándar es $x = 7\\sin\\theta$."
  },
  {
    "id": "sust-f-70",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 64}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 8$, la sustitución adecuada es $x = 8\\tan\\theta$."
  },
  {
    "id": "sust-f-71",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 81}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 9$, se emplea $x = 9\\sec\\theta$."
  },
  {
    "id": "sust-f-72",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{4 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 2$, la sustitución trigonométrica estándar es $x = 2\\sin\\theta$."
  },
  {
    "id": "sust-f-73",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 9}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 3$, la sustitución adecuada es $x = 3\\tan\\theta$."
  },
  {
    "id": "sust-f-74",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 16}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 4$, se emplea $x = 4\\sec\\theta$."
  },
  {
    "id": "sust-f-75",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{25 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 25\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 5$, la sustitución trigonométrica estándar es $x = 5\\sin\\theta$."
  },
  {
    "id": "sust-f-76",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 36}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 6$, la sustitución adecuada es $x = 6\\tan\\theta$."
  },
  {
    "id": "sust-f-77",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 49}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 7$, se emplea $x = 7\\sec\\theta$."
  },
  {
    "id": "sust-f-78",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{64 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 64\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 8$, la sustitución trigonométrica estándar es $x = 8\\sin\\theta$."
  },
  {
    "id": "sust-f-79",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 81}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 9$, la sustitución adecuada es $x = 9\\tan\\theta$."
  },
  {
    "id": "sust-f-80",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 4}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 2$, se emplea $x = 2\\sec\\theta$."
  },
  {
    "id": "sust-f-81",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{9 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 3$, la sustitución trigonométrica estándar es $x = 3\\sin\\theta$."
  },
  {
    "id": "sust-f-82",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 16}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 4$, la sustitución adecuada es $x = 4\\tan\\theta$."
  },
  {
    "id": "sust-f-83",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 25}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 5$, se emplea $x = 5\\sec\\theta$."
  },
  {
    "id": "sust-f-84",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{36 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 6\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 36\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 6$, la sustitución trigonométrica estándar es $x = 6\\sin\\theta$."
  },
  {
    "id": "sust-f-85",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 49}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 7$, la sustitución adecuada es $x = 7\\tan\\theta$."
  },
  {
    "id": "sust-f-86",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 64}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 8$, se emplea $x = 8\\sec\\theta$."
  },
  {
    "id": "sust-f-87",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{81 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 81\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 9$, la sustitución trigonométrica estándar es $x = 9\\sin\\theta$."
  },
  {
    "id": "sust-f-88",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 4}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 2$, la sustitución adecuada es $x = 2\\tan\\theta$."
  },
  {
    "id": "sust-f-89",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 9}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 3\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 3$, se emplea $x = 3\\sec\\theta$."
  },
  {
    "id": "sust-f-90",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{16 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 4\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 16\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 4$, la sustitución trigonométrica estándar es $x = 4\\sin\\theta$."
  },
  {
    "id": "sust-f-91",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 25}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 5$, la sustitución adecuada es $x = 5\\tan\\theta$."
  },
  {
    "id": "sust-f-92",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 36}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 6\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 6\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 6$, se emplea $x = 6\\sec\\theta$."
  },
  {
    "id": "sust-f-93",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{49 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 7\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 49\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 7\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 7$, la sustitución trigonométrica estándar es $x = 7\\sin\\theta$."
  },
  {
    "id": "sust-f-94",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 64}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 8\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 8\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 8$, la sustitución adecuada es $x = 8\\tan\\theta$."
  },
  {
    "id": "sust-f-95",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 81}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 9\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 9\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 9$, se emplea $x = 9\\sec\\theta$."
  },
  {
    "id": "sust-f-96",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{4 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 2$, la sustitución trigonométrica estándar es $x = 2\\sin\\theta$."
  },
  {
    "id": "sust-f-97",
    "difficulty": "easy",
    "prompt": "Para una integral que contiene $\\sqrt{x^2 + 9}$, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      {
        "latex": "x = 3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\cos\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 3\\tan\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 + a^2}$ con $a = 3$, la sustitución adecuada es $x = 3\\tan\\theta$."
  },
  {
    "id": "sust-f-98",
    "difficulty": "easy",
    "prompt": "Para una integral con $\\sqrt{x^2 - 16}$, ¿qué sustitución trigonométrica corresponde?",
    "options": [
      {
        "latex": "x = 4\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = \\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\sec\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{x^2 - a^2}$ con $a = 4$, se emplea $x = 4\\sec\\theta$."
  },
  {
    "id": "sust-f-99",
    "difficulty": "easy",
    "prompt": "Para eliminar el radical en una integral con $\\sqrt{25 - x^2}$, ¿qué sustitución se usa?",
    "options": [
      {
        "latex": "x = 5\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 25\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\tan\\theta",
        "correct": false
      },
      {
        "latex": "x = 5\\sin\\theta",
        "correct": true
      }
    ],
    "explanation": "Para la forma $\\sqrt{a^2 - x^2}$ con $a = 5$, la sustitución trigonométrica estándar es $x = 5\\sin\\theta$."
  },
  {
    "id": "sust-m-01",
    "difficulty": "medium",
    "prompt": "¿Qué identidad pitagórica se usa con la sustitución $x = a\\sin\\theta$?",
    "options": [
      {
        "latex": "1 - \\sin^2\\theta = \\cos^2\\theta",
        "correct": true
      },
      {
        "latex": "1 + \\tan^2\\theta = \\sec^2\\theta",
        "correct": false
      },
      {
        "latex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
        "correct": false
      },
      {
        "latex": "\\sin^2\\theta + \\cos^2\\theta = 0",
        "correct": false
      }
    ],
    "explanation": "$a^2 - a^2\\sin^2\\theta = a^2(1 - \\sin^2\\theta) = a^2\\cos^2\\theta$."
  },
  {
    "id": "sust-m-02",
    "difficulty": "medium",
    "prompt": "¿Qué identidad pitagórica se usa con la sustitución $x = a\\tan\\theta$?",
    "options": [
      {
        "latex": "1 + \\tan^2\\theta = \\sec^2\\theta",
        "correct": true
      },
      {
        "latex": "1 - \\sin^2\\theta = \\cos^2\\theta",
        "correct": false
      },
      {
        "latex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
        "correct": false
      },
      {
        "latex": "\\tan^2\\theta = \\sin^2\\theta",
        "correct": false
      }
    ],
    "explanation": "$a^2 + a^2\\tan^2\\theta = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta$."
  },
  {
    "id": "sust-m-03",
    "difficulty": "medium",
    "prompt": "¿Qué identidad pitagórica se usa con la sustitución $x = a\\sec\\theta$?",
    "options": [
      {
        "latex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
        "correct": true
      },
      {
        "latex": "1 - \\sin^2\\theta = \\cos^2\\theta",
        "correct": false
      },
      {
        "latex": "1 + \\tan^2\\theta = \\sec^2\\theta",
        "correct": false
      },
      {
        "latex": "\\sec^2\\theta + 1 = \\tan^2\\theta",
        "correct": false
      }
    ],
    "explanation": "$a^2\\sec^2\\theta - a^2 = a^2(\\sec^2\\theta - 1) = a^2\\tan^2\\theta$."
  },
  {
    "id": "sust-m-04",
    "difficulty": "medium",
    "prompt": "Con $x = 2\\sec\\theta$, ¿cuánto vale $dx$?",
    "options": [
      {
        "latex": "dx = 2\\sec\\theta\\tan\\theta\\,d\\theta",
        "correct": true
      },
      {
        "latex": "dx = 2\\sec^2\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\tan\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\cos\\theta\\,d\\theta",
        "correct": false
      }
    ],
    "explanation": "La derivada de $\\sec\\theta$ es $\\sec\\theta\\tan\\theta$."
  },
  {
    "id": "sust-m-05",
    "difficulty": "medium",
    "prompt": "En $x = 3\\sin\\theta$, ¿a qué equivale $\\sqrt{9 - x^2}$?",
    "options": [
      {
        "latex": "3\\cos\\theta",
        "correct": true
      },
      {
        "latex": "3\\sin\\theta",
        "correct": false
      },
      {
        "latex": "\\cos\\theta",
        "correct": false
      },
      {
        "latex": "9\\cos\\theta",
        "correct": false
      }
    ],
    "explanation": "$\\sqrt{9 - 9\\sin^2\\theta} = \\sqrt{9\\cos^2\\theta} = 3\\cos\\theta$ (con $\\cos\\theta \\geq 0$)."
  },
  {
    "id": "sust-m-06",
    "difficulty": "medium",
    "prompt": "¿Qué sustitución transforma $\\frac{dx}{x^2 + 4}$ en una integral trigonométrica?",
    "options": [
      {
        "latex": "x = 2\\tan\\theta",
        "correct": true
      },
      {
        "latex": "x = 2\\sin\\theta",
        "correct": false
      },
      {
        "latex": "x = 2\\sec\\theta",
        "correct": false
      },
      {
        "latex": "x = 4\\tan\\theta",
        "correct": false
      }
    ],
    "explanation": "El denominador es $x^2 + 4 = x^2 + a^2$, con $a = 2$: $x = 2\\tan\\theta$."
  },
  {
    "id": "sust-m-07",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{2}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 4}}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 4}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{x^2 + 4}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $2$, la hipotenusa es $\\sqrt{x^2 + 4}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{2}{\\sqrt{x^2 + 4}}$."
  },
  {
    "id": "sust-m-08",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{3}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{9 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{3}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $3$, el cateto adyacente es $\\sqrt{9 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$."
  },
  {
    "id": "sust-m-09",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 4\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -4\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[4\\sin\\theta] = 4\\cos\\theta$, luego $dx = 4\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-10",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{5}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 25}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 25}}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{x^2 + 25}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $5$, la hipotenusa es $\\sqrt{x^2 + 25}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{5}{\\sqrt{x^2 + 25}}$."
  },
  {
    "id": "sust-m-100",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{4}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 16}}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 16}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{x^2 + 16}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $4$, la hipotenusa es $\\sqrt{x^2 + 16}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{4}{\\sqrt{x^2 + 16}}$."
  },
  {
    "id": "sust-m-11",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{6}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{6}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{36 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{6}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $6$, el cateto adyacente es $\\sqrt{36 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{36 - x^2}}{6}$."
  },
  {
    "id": "sust-m-12",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 7\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 7\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -7\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[7\\sin\\theta] = 7\\cos\\theta$, luego $dx = 7\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-13",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{8}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 64}}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 64}}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{x^2 + 64}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $8$, la hipotenusa es $\\sqrt{x^2 + 64}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{\\sqrt{x^2 + 64}}$."
  },
  {
    "id": "sust-m-14",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{2}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{4 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{4 - x^2}}{2}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $2$, el cateto adyacente es $\\sqrt{4 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$."
  },
  {
    "id": "sust-m-15",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 3\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -3\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[3\\sin\\theta] = 3\\cos\\theta$, luego $dx = 3\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-16",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{4}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 16}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 16}}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{x^2 + 16}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $4$, la hipotenusa es $\\sqrt{x^2 + 16}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{4}{\\sqrt{x^2 + 16}}$."
  },
  {
    "id": "sust-m-17",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{5}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{25 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{25 - x^2}}{5}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $5$, el cateto adyacente es $\\sqrt{25 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{25 - x^2}}{5}$."
  },
  {
    "id": "sust-m-18",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 6\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 6\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -6\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[6\\sin\\theta] = 6\\cos\\theta$, luego $dx = 6\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-19",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{7}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 49}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 49}}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{x^2 + 49}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $7$, la hipotenusa es $\\sqrt{x^2 + 49}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{7}{\\sqrt{x^2 + 49}}$."
  },
  {
    "id": "sust-m-20",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{8}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{8}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{64 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{64 - x^2}}{8}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $8$, el cateto adyacente es $\\sqrt{64 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{64 - x^2}}{8}$."
  },
  {
    "id": "sust-m-21",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 2\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -2\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[2\\sin\\theta] = 2\\cos\\theta$, luego $dx = 2\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-22",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{3}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 9}}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 9}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{x^2 + 9}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $3$, la hipotenusa es $\\sqrt{x^2 + 9}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{3}{\\sqrt{x^2 + 9}}$."
  },
  {
    "id": "sust-m-23",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{4}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{16 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{16 - x^2}}{4}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $4$, el cateto adyacente es $\\sqrt{16 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{16 - x^2}}{4}$."
  },
  {
    "id": "sust-m-24",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 5\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -5\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[5\\sin\\theta] = 5\\cos\\theta$, luego $dx = 5\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-25",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{6}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 36}}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 36}}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\sqrt{x^2 + 36}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $6$, la hipotenusa es $\\sqrt{x^2 + 36}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{6}{\\sqrt{x^2 + 36}}$."
  },
  {
    "id": "sust-m-26",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{7}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{49 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{49 - x^2}}{7}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $7$, el cateto adyacente es $\\sqrt{49 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{49 - x^2}}{7}$."
  },
  {
    "id": "sust-m-27",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 8\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 8\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -8\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[8\\sin\\theta] = 8\\cos\\theta$, luego $dx = 8\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-28",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{2}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 4}}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 4}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{x^2 + 4}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $2$, la hipotenusa es $\\sqrt{x^2 + 4}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{2}{\\sqrt{x^2 + 4}}$."
  },
  {
    "id": "sust-m-29",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{3}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{3}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{9 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{3}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $3$, el cateto adyacente es $\\sqrt{9 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$."
  },
  {
    "id": "sust-m-30",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 4\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -4\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[4\\sin\\theta] = 4\\cos\\theta$, luego $dx = 4\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-31",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{5}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 25}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 25}}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{x^2 + 25}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $5$, la hipotenusa es $\\sqrt{x^2 + 25}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{5}{\\sqrt{x^2 + 25}}$."
  },
  {
    "id": "sust-m-32",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{6}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{36 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{6}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $6$, el cateto adyacente es $\\sqrt{36 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{36 - x^2}}{6}$."
  },
  {
    "id": "sust-m-33",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 7\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 7\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -7\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[7\\sin\\theta] = 7\\cos\\theta$, luego $dx = 7\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-34",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{8}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 64}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 64}}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{x^2 + 64}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $8$, la hipotenusa es $\\sqrt{x^2 + 64}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{\\sqrt{x^2 + 64}}$."
  },
  {
    "id": "sust-m-35",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{2}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{2}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{4 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{4 - x^2}}{2}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $2$, el cateto adyacente es $\\sqrt{4 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$."
  },
  {
    "id": "sust-m-36",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 3\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 3\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -3\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[3\\sin\\theta] = 3\\cos\\theta$, luego $dx = 3\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-37",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{4}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 16}}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 16}}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{x^2 + 16}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $4$, la hipotenusa es $\\sqrt{x^2 + 16}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{4}{\\sqrt{x^2 + 16}}$."
  },
  {
    "id": "sust-m-38",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{5}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{5}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{25 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{25 - x^2}}{5}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $5$, el cateto adyacente es $\\sqrt{25 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{25 - x^2}}{5}$."
  },
  {
    "id": "sust-m-39",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 6\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -6\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[6\\sin\\theta] = 6\\cos\\theta$, luego $dx = 6\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-40",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{7}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 49}}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 49}}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{x^2 + 49}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $7$, la hipotenusa es $\\sqrt{x^2 + 49}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{7}{\\sqrt{x^2 + 49}}$."
  },
  {
    "id": "sust-m-41",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{8}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{64 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{64 - x^2}}{8}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $8$, el cateto adyacente es $\\sqrt{64 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{64 - x^2}}{8}$."
  },
  {
    "id": "sust-m-42",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 2\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 2\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -2\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[2\\sin\\theta] = 2\\cos\\theta$, luego $dx = 2\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-43",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{3}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 9}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 9}}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{x^2 + 9}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $3$, la hipotenusa es $\\sqrt{x^2 + 9}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{3}{\\sqrt{x^2 + 9}}$."
  },
  {
    "id": "sust-m-44",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{4}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{4}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{16 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{16 - x^2}}{4}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $4$, el cateto adyacente es $\\sqrt{16 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{16 - x^2}}{4}$."
  },
  {
    "id": "sust-m-45",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 5\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -5\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[5\\sin\\theta] = 5\\cos\\theta$, luego $dx = 5\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-46",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{6}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 36}}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 36}}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\sqrt{x^2 + 36}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $6$, la hipotenusa es $\\sqrt{x^2 + 36}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{6}{\\sqrt{x^2 + 36}}$."
  },
  {
    "id": "sust-m-47",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{7}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{49 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{49 - x^2}}{7}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $7$, el cateto adyacente es $\\sqrt{49 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{49 - x^2}}{7}$."
  },
  {
    "id": "sust-m-48",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 8\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -8\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[8\\sin\\theta] = 8\\cos\\theta$, luego $dx = 8\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-49",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{2}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 4}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 4}}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{x^2 + 4}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $2$, la hipotenusa es $\\sqrt{x^2 + 4}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{2}{\\sqrt{x^2 + 4}}$."
  },
  {
    "id": "sust-m-50",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{3}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{3}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{9 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{3}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $3$, el cateto adyacente es $\\sqrt{9 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$."
  },
  {
    "id": "sust-m-51",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 4\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -4\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[4\\sin\\theta] = 4\\cos\\theta$, luego $dx = 4\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-52",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{5}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 25}}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 25}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{x^2 + 25}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $5$, la hipotenusa es $\\sqrt{x^2 + 25}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{5}{\\sqrt{x^2 + 25}}$."
  },
  {
    "id": "sust-m-53",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{6}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{6}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{36 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{6}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $6$, el cateto adyacente es $\\sqrt{36 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{36 - x^2}}{6}$."
  },
  {
    "id": "sust-m-54",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 7\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -7\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[7\\sin\\theta] = 7\\cos\\theta$, luego $dx = 7\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-55",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{8}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 64}}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 64}}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{x^2 + 64}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $8$, la hipotenusa es $\\sqrt{x^2 + 64}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{\\sqrt{x^2 + 64}}$."
  },
  {
    "id": "sust-m-56",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{2}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{4 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{4 - x^2}}{2}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $2$, el cateto adyacente es $\\sqrt{4 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$."
  },
  {
    "id": "sust-m-57",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 3\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 3\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -3\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[3\\sin\\theta] = 3\\cos\\theta$, luego $dx = 3\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-58",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{4}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 16}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 16}}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{x^2 + 16}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $4$, la hipotenusa es $\\sqrt{x^2 + 16}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{4}{\\sqrt{x^2 + 16}}$."
  },
  {
    "id": "sust-m-59",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{5}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{5}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{25 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{25 - x^2}}{5}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $5$, el cateto adyacente es $\\sqrt{25 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{25 - x^2}}{5}$."
  },
  {
    "id": "sust-m-60",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 6\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -6\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[6\\sin\\theta] = 6\\cos\\theta$, luego $dx = 6\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-61",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{7}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 49}}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 49}}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{x^2 + 49}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $7$, la hipotenusa es $\\sqrt{x^2 + 49}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{7}{\\sqrt{x^2 + 49}}$."
  },
  {
    "id": "sust-m-62",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{8}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{64 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{64 - x^2}}{8}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $8$, el cateto adyacente es $\\sqrt{64 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{64 - x^2}}{8}$."
  },
  {
    "id": "sust-m-63",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 2\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 2\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -2\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[2\\sin\\theta] = 2\\cos\\theta$, luego $dx = 2\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-64",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{3}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 9}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 9}}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{x^2 + 9}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $3$, la hipotenusa es $\\sqrt{x^2 + 9}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{3}{\\sqrt{x^2 + 9}}$."
  },
  {
    "id": "sust-m-65",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{4}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{4}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{16 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{16 - x^2}}{4}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $4$, el cateto adyacente es $\\sqrt{16 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{16 - x^2}}{4}$."
  },
  {
    "id": "sust-m-66",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 5\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 5\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -5\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[5\\sin\\theta] = 5\\cos\\theta$, luego $dx = 5\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-67",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{6}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 36}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 36}}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\sqrt{x^2 + 36}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $6$, la hipotenusa es $\\sqrt{x^2 + 36}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{6}{\\sqrt{x^2 + 36}}$."
  },
  {
    "id": "sust-m-68",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{7}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{7}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{49 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{49 - x^2}}{7}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $7$, el cateto adyacente es $\\sqrt{49 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{49 - x^2}}{7}$."
  },
  {
    "id": "sust-m-69",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 8\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -8\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[8\\sin\\theta] = 8\\cos\\theta$, luego $dx = 8\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-70",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{2}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 4}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 4}}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{x^2 + 4}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $2$, la hipotenusa es $\\sqrt{x^2 + 4}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{2}{\\sqrt{x^2 + 4}}$."
  },
  {
    "id": "sust-m-71",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{3}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{3}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{9 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{3}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $3$, el cateto adyacente es $\\sqrt{9 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$."
  },
  {
    "id": "sust-m-72",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 4\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -4\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[4\\sin\\theta] = 4\\cos\\theta$, luego $dx = 4\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-73",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{5}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 25}}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 25}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{x^2 + 25}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $5$, la hipotenusa es $\\sqrt{x^2 + 25}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{5}{\\sqrt{x^2 + 25}}$."
  },
  {
    "id": "sust-m-74",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{6}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{6}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{36 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{6}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $6$, el cateto adyacente es $\\sqrt{36 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{36 - x^2}}{6}$."
  },
  {
    "id": "sust-m-75",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 7\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -7\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[7\\sin\\theta] = 7\\cos\\theta$, luego $dx = 7\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-76",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{8}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 64}}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 64}}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{x^2 + 64}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $8$, la hipotenusa es $\\sqrt{x^2 + 64}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{\\sqrt{x^2 + 64}}$."
  },
  {
    "id": "sust-m-77",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{2}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{4 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{4 - x^2}}{2}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $2$, el cateto adyacente es $\\sqrt{4 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$."
  },
  {
    "id": "sust-m-78",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 3\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -3\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[3\\sin\\theta] = 3\\cos\\theta$, luego $dx = 3\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-79",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{4}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 16}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 16}}{4}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{4}{\\sqrt{x^2 + 16}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $4$, la hipotenusa es $\\sqrt{x^2 + 16}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{4}{\\sqrt{x^2 + 16}}$."
  },
  {
    "id": "sust-m-80",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{5}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{5}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{25 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{25 - x^2}}{5}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $5$, el cateto adyacente es $\\sqrt{25 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{25 - x^2}}{5}$."
  },
  {
    "id": "sust-m-81",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 6\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -6\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 6\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[6\\sin\\theta] = 6\\cos\\theta$, luego $dx = 6\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-82",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{7}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 49}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 49}}{7}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{7}{\\sqrt{x^2 + 49}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $7$, la hipotenusa es $\\sqrt{x^2 + 49}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{7}{\\sqrt{x^2 + 49}}$."
  },
  {
    "id": "sust-m-83",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{8}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{64 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{64 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{64 - x^2}}{8}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $8$, el cateto adyacente es $\\sqrt{64 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{64 - x^2}}{8}$."
  },
  {
    "id": "sust-m-84",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 2\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -2\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 2\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[2\\sin\\theta] = 2\\cos\\theta$, luego $dx = 2\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-85",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{3}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 9}}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 9}}{3}",
        "correct": false
      },
      {
        "latex": "\\frac{3}{\\sqrt{x^2 + 9}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $3$, la hipotenusa es $\\sqrt{x^2 + 9}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{3}{\\sqrt{x^2 + 9}}$."
  },
  {
    "id": "sust-m-86",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{4}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{4}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{16 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{16 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{16 - x^2}}{4}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $4$, el cateto adyacente es $\\sqrt{16 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{16 - x^2}}{4}$."
  },
  {
    "id": "sust-m-87",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 5\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = 5\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = -5\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 5\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[5\\sin\\theta] = 5\\cos\\theta$, luego $dx = 5\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-88",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{6}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 36}}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 36}}{6}",
        "correct": false
      },
      {
        "latex": "\\frac{6}{\\sqrt{x^2 + 36}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $6$, la hipotenusa es $\\sqrt{x^2 + 36}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{6}{\\sqrt{x^2 + 36}}$."
  },
  {
    "id": "sust-m-89",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{7}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{7}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{49 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{49 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{49 - x^2}}{7}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $7$, el cateto adyacente es $\\sqrt{49 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{49 - x^2}}{7}$."
  },
  {
    "id": "sust-m-90",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 8\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -8\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 8\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[8\\sin\\theta] = 8\\cos\\theta$, luego $dx = 8\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-91",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{2}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 4}}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 4}}",
        "correct": false
      },
      {
        "latex": "\\frac{2}{\\sqrt{x^2 + 4}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $2$, la hipotenusa es $\\sqrt{x^2 + 4}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{2}{\\sqrt{x^2 + 4}}$."
  },
  {
    "id": "sust-m-92",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{3}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{3}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{9 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{9 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{3}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $3$, el cateto adyacente es $\\sqrt{9 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$."
  },
  {
    "id": "sust-m-93",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 4\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -4\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 4\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[4\\sin\\theta] = 4\\cos\\theta$, luego $dx = 4\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-94",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{5}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 25}}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{x^2 + 25}}{5}",
        "correct": false
      },
      {
        "latex": "\\frac{5}{\\sqrt{x^2 + 25}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $5$, la hipotenusa es $\\sqrt{x^2 + 25}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{5}{\\sqrt{x^2 + 25}}$."
  },
  {
    "id": "sust-m-95",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{6}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{6}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{36 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{36 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{6}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $6$, el cateto adyacente es $\\sqrt{36 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{36 - x^2}}{6}$."
  },
  {
    "id": "sust-m-96",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 7\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -7\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 7\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[7\\sin\\theta] = 7\\cos\\theta$, luego $dx = 7\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-m-97",
    "difficulty": "medium",
    "prompt": "Si $\\tan\\theta = \\frac{x}{8}$, según el triángulo rectángulo asociado, ¿cuál es $\\cos\\theta$?",
    "options": [
      {
        "latex": "\\frac{\\sqrt{x^2 + 64}}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{x}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{x^2 + 64}}",
        "correct": false
      },
      {
        "latex": "\\frac{8}{\\sqrt{x^2 + 64}}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ y cateto adyacente $8$, la hipotenusa es $\\sqrt{x^2 + 64}$. Por tanto, $\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{\\sqrt{x^2 + 64}}$."
  },
  {
    "id": "sust-m-98",
    "difficulty": "medium",
    "prompt": "Si $\\sin\\theta = \\frac{x}{2}$, ¿cuál es el valor de $\\cos\\theta$ en términos de $x$?",
    "options": [
      {
        "latex": "\\frac{2}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\sqrt{4 - x^2}",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}}",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{4 - x^2}}{2}",
        "correct": true
      }
    ],
    "explanation": "Con cateto opuesto $x$ e hipotenusa $2$, el cateto adyacente es $\\sqrt{4 - x^2}$, luego $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$."
  },
  {
    "id": "sust-m-99",
    "difficulty": "medium",
    "prompt": "Si en una integral se hace el cambio $x = 3\\sin\\theta$, ¿cuál es el diferencial $dx$?",
    "options": [
      {
        "latex": "dx = -3\\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = \\cos\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\sin\\theta\\,d\\theta",
        "correct": false
      },
      {
        "latex": "dx = 3\\cos\\theta\\,d\\theta",
        "correct": true
      }
    ],
    "explanation": "Diferenciando: $\\frac{d}{d\\theta}[3\\sin\\theta] = 3\\cos\\theta$, luego $dx = 3\\cos\\theta\\,d\\theta$."
  },
  {
    "id": "sust-h-01",
    "difficulty": "hard",
    "prompt": "Calcula $\\int \\frac{dx}{x^2 + 4}$ usando $x = 2\\tan\\theta$.",
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
    "explanation": "$dx = 2\\sec^2\\theta\\,d\\theta$; la integral da $\\frac{1}{2}\\theta + C = \\frac{1}{2}\\arctan\\frac{x}{2} + C$."
  },
  {
    "id": "sust-h-02",
    "difficulty": "hard",
    "prompt": "Calcula $\\int \\frac{dx}{\\sqrt{9 - x^2}}$ usando $x = 3\\sin\\theta$.",
    "options": [
      {
        "latex": "\\arcsin\\frac{x}{3} + C",
        "correct": true
      },
      {
        "latex": "\\arcsin\\frac{x}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin x + C",
        "correct": false
      },
      {
        "latex": "\\arccos\\frac{x}{3} + C",
        "correct": false
      }
    ],
    "explanation": "$\\int d\\theta = \\theta + C = \\arcsin\\frac{x}{3} + C$."
  },
  {
    "id": "sust-h-03",
    "difficulty": "hard",
    "prompt": "Calcula $\\int \\frac{dx}{x\\sqrt{x^2 - 9}}$ usando $x = 3\\sec\\theta$.",
    "options": [
      {
        "latex": "\\frac{1}{3}\\operatorname{arcsec}\\frac{x}{3} + C",
        "correct": true
      },
      {
        "latex": "\\operatorname{arcsec}\\frac{x}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arctan\\frac{x}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\ln\\left|x + \\sqrt{x^2-9}\\right| + C",
        "correct": false
      }
    ],
    "explanation": "Simplifica a $\\int\\frac{1}{3}\\,d\\theta = \\frac{1}{3}\\theta + C = \\frac{1}{3}\\operatorname{arcsec}\\frac{x}{3} + C$."
  },
  {
    "id": "sust-h-04",
    "difficulty": "hard",
    "prompt": "¿Para qué se usa principalmente la sustitución trigonométrica?",
    "options": [
      {
        "latex": "\\text{Eliminar raíces cuadradas usando identidades pitagóricas}",
        "correct": true
      },
      {
        "latex": "\\text{Convertir logaritmos en potencias}",
        "correct": false
      },
      {
        "latex": "\\text{Derivar funciones compuestas}",
        "correct": false
      },
      {
        "latex": "\\text{Resolver ecuaciones diferenciales lineales}",
        "correct": false
      }
    ],
    "explanation": "Convierte $\\sqrt{a^2 \\pm x^2}$ o $\\sqrt{x^2 - a^2}$ en expresiones trigonométricas sin raíz."
  },
  {
    "id": "sust-h-05",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-06",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-07",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-08",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-09",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-10",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-100",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-11",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-12",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-13",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-14",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-15",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-16",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-17",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-18",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-19",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-20",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-21",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-22",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-23",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-24",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-25",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-26",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-27",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-28",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-29",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-30",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-31",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-32",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-33",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-34",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-35",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-36",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-37",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-38",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-39",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-40",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-41",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-42",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-43",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-44",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-45",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-46",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-47",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-48",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-49",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-50",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-51",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-52",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-53",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-54",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-55",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-56",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-57",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-58",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-59",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-60",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-61",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-62",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-63",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-64",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-65",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-66",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-67",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-68",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-69",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-70",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-71",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-72",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-73",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-74",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-75",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-76",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-77",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-78",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-79",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-80",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-81",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-82",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-83",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-84",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-85",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-86",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-87",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-88",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-89",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-90",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-91",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-92",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-93",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
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
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  },
  {
    "id": "sust-h-94",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{36 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{6}\\arcsin\\left(\\frac{x}{6}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{36 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{36 - x^2}}{36 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 6\\sin\\theta$, la integral se reduce a $\\frac{1}{36}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{36}\\cot\\theta + C = -\\frac{\\sqrt{36 - x^2}}{36 x} + C$."
  },
  {
    "id": "sust-h-95",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 7\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 49}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{7} + \\sqrt{x^2 + 49}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 49} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{7}\\arctan\\left(\\frac{x}{7}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 49}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 7\\tan\\theta, dx = 7\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 49}| + C$."
  },
  {
    "id": "sust-h-96",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 2\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$",
    "options": [
      {
        "latex": "\\arccos\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{4 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\arcsin\\left(\\frac{x}{2}\\right) + C",
        "correct": true
      }
    ],
    "explanation": "Sustituyendo $x = 2\\sin\\theta, dx = 2\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{4(1 - \\sin^2\\theta)} = 2\\cos\\theta$. La integral queda $\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{2}\\right) + C$."
  },
  {
    "id": "sust-h-97",
    "difficulty": "hard",
    "prompt": "Calcula por sustitución trigonométrica: $\\int \\frac{dx}{x^2 \\sqrt{9 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x}{\\sqrt{9 - x^2}} + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}\\arcsin\\left(\\frac{x}{3}\\right) + C",
        "correct": false
      },
      {
        "latex": "-\\frac{\\sqrt{9 - x^2}}{9 x} + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 3\\sin\\theta$, la integral se reduce a $\\frac{1}{9}\\int \\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C = -\\frac{\\sqrt{9 - x^2}}{9 x} + C$."
  },
  {
    "id": "sust-h-98",
    "difficulty": "hard",
    "prompt": "Calcula usando $x = 4\\tan\\theta$: $\\int \\frac{dx}{\\sqrt{x^2 + 16}}$",
    "options": [
      {
        "latex": "\\ln\\left|\\frac{x}{4} + \\sqrt{x^2 + 16}\\right| + C",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\sqrt{x^2 + 16} + C",
        "correct": false
      },
      {
        "latex": "\\ln\\left|x + \\sqrt{x^2 + 16}\\right| + C",
        "correct": true
      }
    ],
    "explanation": "Con $x = 4\\tan\\theta, dx = 4\\sec^2\\theta\\,d\\theta$, la integral queda $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C' = \\ln|x + \\sqrt{x^2 + 16}| + C$."
  },
  {
    "id": "sust-h-99",
    "difficulty": "hard",
    "prompt": "Resuelve mediante sustitución trigonométrica $x = 5\\sin\\theta$: $\\int \\frac{dx}{\\sqrt{25 - x^2}}$",
    "options": [
      {
        "latex": "\\frac{1}{5}\\arcsin\\left(\\frac{x}{5}\\right) + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{\\sqrt{25 - x^2}} + C",
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
    "explanation": "Sustituyendo $x = 5\\sin\\theta, dx = 5\\cos\\theta\\,d\\theta$. El radical es $\\sqrt{25(1 - \\sin^2\\theta)} = 5\\cos\\theta$. La integral queda $\\int \\frac{5\\cos\\theta\\,d\\theta}{5\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\left(\\frac{x}{5}\\right) + C$."
  }
];
