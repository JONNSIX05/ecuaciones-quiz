// data/algebra/logaritmos/definicion.js
// Catálogo ampliado a 60 preguntas (20 fáciles, 20 medias, 20 difíciles).

export default {
  lawId: "log-definicion",
  lawName: "Definición de logaritmo",
  lawFormula: "\\log_a x = y \\iff a^y = x",
  prerequisites: "Conocer potencias y exponentes.",
  available: true,
  questions: [
  {
    "id": "logdef-f-01",
    "difficulty": "easy",
    "prompt": "Si $2^3 = 8$, ¿cuánto vale $\\log_2 8$?",
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
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      }
    ],
    "explanation": "$\\log_2 8$ pregunta \"¿a qué exponente debo elevar 2 para obtener 8?\". Como $2^3 = 8$, la respuesta es 3."
  },
  {
    "id": "logdef-f-02",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_{10} 100$?",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      }
    ],
    "explanation": "Como $10^2 = 100$, entonces $\\log_{10} 100 = 2$."
  },
  {
    "id": "logdef-f-03",
    "difficulty": "easy",
    "prompt": "Si $\\log_2 16 = x$, ¿cuánto vale $x$?",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      }
    ],
    "explanation": "$2^4 = 16$, por lo que $\\log_2 16 = 4$."
  },
  {
    "id": "logdef-f-04",
    "difficulty": "easy",
    "prompt": "La forma exponencial de $\\log_3 9 = 2$ es...",
    "options": [
      {
        "latex": "3^2 = 9",
        "correct": true
      },
      {
        "latex": "2^3 = 9",
        "correct": false
      },
      {
        "latex": "3^9 = 2",
        "correct": false
      },
      {
        "latex": "9^2 = 3",
        "correct": false
      }
    ],
    "explanation": "$\\log_3 9 = 2$ significa $3^2 = 9$."
  },
  {
    "id": "logdef-f-05",
    "difficulty": "easy",
    "prompt": "¿A qué es igual $\\log_5 5$?",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      }
    ],
    "explanation": "$\\log_5 5 = 1$ porque $5^1 = 5$."
  },
  {
    "id": "logdef-f-06",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{2}(8)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{3} = 8$."
  },
  {
    "id": "logdef-f-07",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{3}(81)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{4} = 81$."
  },
  {
    "id": "logdef-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{4}(4)$",
    "options": [
      {
        "latex": "2",
        "correct": false
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
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{1} = 4$."
  },
  {
    "id": "logdef-f-09",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{5}(25)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{2} = 25$."
  },
  {
    "id": "logdef-f-10",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{6}(216)$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "216",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Porque $6^{3} = 216$."
  },
  {
    "id": "logdef-f-11",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{7}(2401)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "2401",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Porque $7^{4} = 2401$."
  },
  {
    "id": "logdef-f-12",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{2}(2)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{1} = 2$."
  },
  {
    "id": "logdef-f-13",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{3}(9)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{2} = 9$."
  },
  {
    "id": "logdef-f-14",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{4}(64)$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{3} = 64$."
  },
  {
    "id": "logdef-f-15",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{5}(625)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{4} = 625$."
  },
  {
    "id": "logdef-f-16",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{6}(6)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Porque $6^{1} = 6$."
  },
  {
    "id": "logdef-f-17",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{7}(49)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "49",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Porque $7^{2} = 49$."
  },
  {
    "id": "logdef-f-18",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{2}(8)$",
    "options": [
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{3} = 8$."
  },
  {
    "id": "logdef-f-19",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{3}(81)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "81",
        "correct": false
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{4} = 81$."
  },
  {
    "id": "logdef-f-20",
    "difficulty": "easy",
    "prompt": "Calcula: $\\log_{4}(4)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{1} = 4$."
  },
  {
    "id": "logdef-m-01",
    "difficulty": "medium",
    "prompt": "Si $\\log_x 49 = 2$, ¿cuánto vale $x$?",
    "options": [
      {
        "latex": "7",
        "correct": true
      },
      {
        "latex": "49",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "98",
        "correct": false
      }
    ],
    "explanation": "$\\log_x 49 = 2$ significa $x^2 = 49$, por lo que $x = 7$."
  },
  {
    "id": "logdef-m-02",
    "difficulty": "medium",
    "prompt": "¿A qué es igual $\\log_3 81$?",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      }
    ],
    "explanation": "$3^4 = 81$, por lo que $\\log_3 81 = 4$."
  },
  {
    "id": "logdef-m-03",
    "difficulty": "medium",
    "prompt": "Resuelve: $\\log_2 x = 5$",
    "options": [
      {
        "latex": "32",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      }
    ],
    "explanation": "$\\log_2 x = 5$ significa $2^5 = x$, por lo que $x = 32$."
  },
  {
    "id": "logdef-m-04",
    "difficulty": "medium",
    "prompt": "¿A qué es igual $\\log_{10} 1000$?",
    "options": [
      {
        "latex": "3",
        "correct": true
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "1000",
        "correct": false
      }
    ],
    "explanation": "$10^3 = 1000$, por lo que $\\log_{10} 1000 = 3$."
  },
  {
    "id": "logdef-m-05",
    "difficulty": "medium",
    "prompt": "La forma logarítmica de $5^2 = 25$ es...",
    "options": [
      {
        "latex": "\\log_5 25 = 2",
        "correct": true
      },
      {
        "latex": "\\log_2 25 = 5",
        "correct": false
      },
      {
        "latex": "\\log_5 2 = 25",
        "correct": false
      },
      {
        "latex": "\\log_2 5 = 25",
        "correct": false
      }
    ],
    "explanation": "$5^2 = 25$ equivale a $\\log_5 25 = 2$."
  },
  {
    "id": "logdef-m-06",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{3}(x) = 1$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "3",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 3^{1} = 3$."
  },
  {
    "id": "logdef-m-07",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{4}(x) = 2$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "16",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 4^{2} = 16$."
  },
  {
    "id": "logdef-m-08",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{5}(x) = 3$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "126",
        "correct": false
      },
      {
        "latex": "125",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 5^{3} = 125$."
  },
  {
    "id": "logdef-m-09",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{6}(x) = 1$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "6",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 6^{1} = 6$."
  },
  {
    "id": "logdef-m-10",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{2}(x) = 2$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 2^{2} = 4$."
  },
  {
    "id": "logdef-m-11",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{3}(x) = 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "28",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "27",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 3^{3} = 27$."
  },
  {
    "id": "logdef-m-12",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{4}(x) = 1$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "4",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 4^{1} = 4$."
  },
  {
    "id": "logdef-m-13",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{5}(x) = 2$",
    "options": [
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "26",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 5^{2} = 25$."
  },
  {
    "id": "logdef-m-14",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{6}(x) = 3$",
    "options": [
      {
        "latex": "18",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "217",
        "correct": false
      },
      {
        "latex": "216",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 6^{3} = 216$."
  },
  {
    "id": "logdef-m-15",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{2}(x) = 1$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "2",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 2^{1} = 2$."
  },
  {
    "id": "logdef-m-16",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{3}(x) = 2$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "9",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 3^{2} = 9$."
  },
  {
    "id": "logdef-m-17",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{4}(x) = 3$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "65",
        "correct": false
      },
      {
        "latex": "64",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 4^{3} = 64$."
  },
  {
    "id": "logdef-m-18",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{5}(x) = 1$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 5^{1} = 5$."
  },
  {
    "id": "logdef-m-19",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{6}(x) = 2$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "37",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "36",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 6^{2} = 36$."
  },
  {
    "id": "logdef-m-20",
    "difficulty": "medium",
    "prompt": "Resuelve para $x$: $\\log_{2}(x) = 3$",
    "options": [
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "8",
        "correct": true
      }
    ],
    "explanation": "Por definición: $x = 2^{3} = 8$."
  },
  {
    "id": "logdef-h-01",
    "difficulty": "hard",
    "prompt": "Resuelve: $\\log_3 x = 4$",
    "options": [
      {
        "latex": "81",
        "correct": true
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      }
    ],
    "explanation": "$\\log_3 x = 4$ significa $3^4 = x$, por lo que $x = 81$."
  },
  {
    "id": "logdef-h-02",
    "difficulty": "hard",
    "prompt": "Si $\\log_x 64 = 3$, ¿cuánto vale $x$?",
    "options": [
      {
        "latex": "4",
        "correct": true
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "64",
        "correct": false
      }
    ],
    "explanation": "$x^3 = 64$. Como $4^3 = 64$, entonces $x = 4$."
  },
  {
    "id": "logdef-h-03",
    "difficulty": "hard",
    "prompt": "¿A qué es igual $\\log_{10} 0.001$?",
    "options": [
      {
        "latex": "-3",
        "correct": true
      },
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0.001",
        "correct": false
      }
    ],
    "explanation": "$0.001 = 10^{-3}$, por lo que $\\log_{10} 0.001 = -3$."
  },
  {
    "id": "logdef-h-04",
    "difficulty": "hard",
    "prompt": "Resuelve: $\\log_5 x = 0$",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      }
    ],
    "explanation": "$\\log_5 x = 0$ significa $5^0 = x = 1$."
  },
  {
    "id": "logdef-h-05",
    "difficulty": "hard",
    "prompt": "¿A qué es igual $\\log_4 \\frac{1}{16}$?",
    "options": [
      {
        "latex": "-2",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "-4",
        "correct": false
      },
      {
        "latex": "\\frac{1}{4}",
        "correct": false
      }
    ],
    "explanation": "$\\frac{1}{16} = 4^{-2}$, por lo que $\\log_4 \\frac{1}{16} = -2$."
  },
  {
    "id": "logdef-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}\\left(\\frac{1}{4}\\right)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{-1} = \\frac{1}{4^{1}} = \\frac{1}{4}$."
  },
  {
    "id": "logdef-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}\\left(\\frac{1}{25}\\right)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{-2} = \\frac{1}{5^{2}} = \\frac{1}{25}$."
  },
  {
    "id": "logdef-h-08",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}\\left(\\frac{1}{8}\\right)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{-3} = \\frac{1}{2^{3}} = \\frac{1}{8}$."
  },
  {
    "id": "logdef-h-09",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}\\left(\\frac{1}{3}\\right)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{-1} = \\frac{1}{3^{1}} = \\frac{1}{3}$."
  },
  {
    "id": "logdef-h-10",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}\\left(\\frac{1}{16}\\right)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{-2} = \\frac{1}{4^{2}} = \\frac{1}{16}$."
  },
  {
    "id": "logdef-h-11",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}\\left(\\frac{1}{125}\\right)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{-3} = \\frac{1}{5^{3}} = \\frac{1}{125}$."
  },
  {
    "id": "logdef-h-12",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}\\left(\\frac{1}{2}\\right)$",
    "options": [
      {
        "latex": "\\frac{1}{1}",
        "correct": false
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
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{-1} = \\frac{1}{2^{1}} = \\frac{1}{2}$."
  },
  {
    "id": "logdef-h-13",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}\\left(\\frac{1}{9}\\right)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{-2} = \\frac{1}{3^{2}} = \\frac{1}{9}$."
  },
  {
    "id": "logdef-h-14",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}\\left(\\frac{1}{64}\\right)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{-3} = \\frac{1}{4^{3}} = \\frac{1}{64}$."
  },
  {
    "id": "logdef-h-15",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}\\left(\\frac{1}{5}\\right)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{-1} = \\frac{1}{5^{1}} = \\frac{1}{5}$."
  },
  {
    "id": "logdef-h-16",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}\\left(\\frac{1}{4}\\right)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{-2} = \\frac{1}{2^{2}} = \\frac{1}{4}$."
  },
  {
    "id": "logdef-h-17",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{3}\\left(\\frac{1}{27}\\right)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Porque $3^{-3} = \\frac{1}{3^{3}} = \\frac{1}{27}$."
  },
  {
    "id": "logdef-h-18",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{4}\\left(\\frac{1}{4}\\right)$",
    "options": [
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\frac{1}{1}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Porque $4^{-1} = \\frac{1}{4^{1}} = \\frac{1}{4}$."
  },
  {
    "id": "logdef-h-19",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{5}\\left(\\frac{1}{25}\\right)$",
    "options": [
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-2",
        "correct": true
      }
    ],
    "explanation": "Porque $5^{-2} = \\frac{1}{5^{2}} = \\frac{1}{25}$."
  },
  {
    "id": "logdef-h-20",
    "difficulty": "hard",
    "prompt": "Calcula: $\\log_{2}\\left(\\frac{1}{8}\\right)$",
    "options": [
      {
        "latex": "3",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "\\frac{1}{3}",
        "correct": false
      },
      {
        "latex": "-3",
        "correct": true
      }
    ],
    "explanation": "Porque $2^{-3} = \\frac{1}{2^{3}} = \\frac{1}{8}$."
  }
]
};
