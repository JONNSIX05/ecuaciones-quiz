// data/algebra/complejos/forma-polar.js
// Catálogo ampliado a 150 preguntas (50 fáciles, 50 medias, 50 difíciles).

export default {
  lawId: "complejos-forma-polar",
  lawName: "Módulo y forma polar",
  lawFormula: "|z| = \\sqrt{a^2 + b^2}",
  prerequisites: "Conocer operaciones con complejos y trigonometría básica.",
  available: true,
  questions: [
  {
    "id": "comppol-f-01",
    "difficulty": "easy",
    "prompt": "¿Cuál es el módulo de $3 + 4i$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{7}",
        "correct": false
      }
    ],
    "explanation": "$|3+4i| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-02",
    "difficulty": "easy",
    "prompt": "¿Cuál es el módulo de $1 + i$?",
    "options": [
      {
        "latex": "\\sqrt{2}",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "\\sqrt{3}",
        "correct": false
      }
    ],
    "explanation": "$|1+i| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."
  },
  {
    "id": "comppol-f-03",
    "difficulty": "easy",
    "prompt": "¿Cuál es el módulo de $5i$?",
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
        "latex": "25",
        "correct": false
      },
      {
        "latex": "i",
        "correct": false
      }
    ],
    "explanation": "$|5i| = \\sqrt{0^2 + 5^2} = 5$."
  },
  {
    "id": "comppol-f-04",
    "difficulty": "easy",
    "prompt": "El módulo de $z = a + bi$ es...",
    "options": [
      {
        "latex": "\\sqrt{a^2 + b^2}",
        "correct": true
      },
      {
        "latex": "a + b",
        "correct": false
      },
      {
        "latex": "a^2 + b^2",
        "correct": false
      },
      {
        "latex": "\\sqrt{a - b}",
        "correct": false
      }
    ],
    "explanation": "$|z| = \\sqrt{a^2 + b^2}$, la distancia al origen en el plano complejo."
  },
  {
    "id": "comppol-f-05",
    "difficulty": "easy",
    "prompt": "¿Cuál es el módulo de $6 + 8i$?",
    "options": [
      {
        "latex": "10",
        "correct": true
      },
      {
        "latex": "14",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{14}",
        "correct": false
      }
    ],
    "explanation": "$|6+8i| = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-06",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 9 - 12i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(9)^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-07",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 9i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+9)^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-08",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 8 + 15i$",
    "options": [
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(8)^2 + (+15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-09",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -15 - 8i$",
    "options": [
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-15)^2 + (-8)^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-10",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 7 + 24i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(7)^2 + (+24)^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-11",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -24 + 7i$",
    "options": [
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-24)^2 + (+7)^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-12",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 3 - 4i$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-13",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -4 + 3i$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-4)^2 + (+3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-14",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 6 + 8i$",
    "options": [
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(6)^2 + (+8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-15",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -8 - 6i$",
    "options": [
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-8)^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-16",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 5 + 12i$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(5)^2 + (+12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-17",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 5i$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-18",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 9 - 12i$",
    "options": [
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(9)^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-19",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 9i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+9)^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-20",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 8 + 15i$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(8)^2 + (+15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-21",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -15 - 8i$",
    "options": [
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-15)^2 + (-8)^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-22",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 7 + 24i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(7)^2 + (+24)^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-23",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -24 + 7i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-24)^2 + (+7)^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-24",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 3 - 4i$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
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
    "explanation": "$|z| = \\sqrt{(3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-25",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -4 + 3i$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
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
    "explanation": "$|z| = \\sqrt{(-4)^2 + (+3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-26",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 6 + 8i$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(6)^2 + (+8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-27",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -8 - 6i$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-8)^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-28",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 5 + 12i$",
    "options": [
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(5)^2 + (+12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-29",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 5i$",
    "options": [
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-30",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 9 - 12i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(9)^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-31",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 9i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+9)^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-32",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 8 + 15i$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(8)^2 + (+15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-33",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -15 - 8i$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-15)^2 + (-8)^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-34",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 7 + 24i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(7)^2 + (+24)^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-35",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -24 + 7i$",
    "options": [
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-24)^2 + (+7)^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-36",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 3 - 4i$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-37",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -4 + 3i$",
    "options": [
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-4)^2 + (+3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-38",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 6 + 8i$",
    "options": [
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(6)^2 + (+8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-39",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -8 - 6i$",
    "options": [
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-8)^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-f-40",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 5 + 12i$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(5)^2 + (+12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-41",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 5i$",
    "options": [
      {
        "latex": "15",
        "correct": false
      },
      {
        "latex": "\\sqrt{13}",
        "correct": false
      },
      {
        "latex": "169",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$."
  },
  {
    "id": "comppol-f-42",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 9 - 12i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(9)^2 + (-12)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-43",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -12 + 9i$",
    "options": [
      {
        "latex": "17",
        "correct": false
      },
      {
        "latex": "225",
        "correct": false
      },
      {
        "latex": "\\sqrt{15}",
        "correct": false
      },
      {
        "latex": "15",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-12)^2 + (+9)^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$."
  },
  {
    "id": "comppol-f-44",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 8 + 15i$",
    "options": [
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(8)^2 + (+15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-45",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -15 - 8i$",
    "options": [
      {
        "latex": "289",
        "correct": false
      },
      {
        "latex": "\\sqrt{17}",
        "correct": false
      },
      {
        "latex": "19",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-15)^2 + (-8)^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$."
  },
  {
    "id": "comppol-f-46",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 7 + 24i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(7)^2 + (+24)^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-47",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -24 + 7i$",
    "options": [
      {
        "latex": "27",
        "correct": false
      },
      {
        "latex": "\\sqrt{25}",
        "correct": false
      },
      {
        "latex": "625",
        "correct": false
      },
      {
        "latex": "25",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(-24)^2 + (+7)^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$."
  },
  {
    "id": "comppol-f-48",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 3 - 4i$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
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
    "explanation": "$|z| = \\sqrt{(3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-49",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = -4 + 3i$",
    "options": [
      {
        "latex": "25",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
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
    "explanation": "$|z| = \\sqrt{(-4)^2 + (+3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$."
  },
  {
    "id": "comppol-f-50",
    "difficulty": "easy",
    "prompt": "Calcula el módulo del número complejo $z = 6 + 8i$",
    "options": [
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "100",
        "correct": false
      },
      {
        "latex": "\\sqrt{10}",
        "correct": false
      },
      {
        "latex": "10",
        "correct": true
      }
    ],
    "explanation": "$|z| = \\sqrt{(6)^2 + (+8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "comppol-m-01",
    "difficulty": "medium",
    "prompt": "¿Cuál es el módulo de $1 + \\sqrt{3}\\,i$?",
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
        "latex": "\\sqrt{3}",
        "correct": false
      },
      {
        "latex": "1 + \\sqrt{3}",
        "correct": false
      }
    ],
    "explanation": "$|1+\\sqrt{3}i| = \\sqrt{1 + 3} = \\sqrt{4} = 2$."
  },
  {
    "id": "comppol-m-02",
    "difficulty": "medium",
    "prompt": "¿Cuál es el argumento de $1 + i$?",
    "options": [
      {
        "latex": "45^\\circ",
        "correct": true
      },
      {
        "latex": "90^\\circ",
        "correct": false
      },
      {
        "latex": "30^\\circ",
        "correct": false
      },
      {
        "latex": "60^\\circ",
        "correct": false
      }
    ],
    "explanation": "$1 + i$ está en el primer cuadrante con partes iguales, así que su ángulo es $45^\\circ$."
  },
  {
    "id": "comppol-m-03",
    "difficulty": "medium",
    "prompt": "¿Cuál es el módulo de $-3 + 4i$?",
    "options": [
      {
        "latex": "5",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "7",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      }
    ],
    "explanation": "$|-3+4i| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9+16} = 5$. El módulo siempre es positivo."
  },
  {
    "id": "comppol-m-04",
    "difficulty": "medium",
    "prompt": "Escribe $2(\\cos 60^\\circ + i \\sin 60^\\circ)$ en forma rectangular",
    "options": [
      {
        "latex": "1 + \\sqrt{3}\\,i",
        "correct": true
      },
      {
        "latex": "\\sqrt{3} + i",
        "correct": false
      },
      {
        "latex": "2 + \\sqrt{3}\\,i",
        "correct": false
      },
      {
        "latex": "1 + i",
        "correct": false
      }
    ],
    "explanation": "$2\\cos 60^\\circ = 2 \\cdot \\frac12 = 1$ y $2\\sin 60^\\circ = 2 \\cdot \\frac{\\sqrt3}{2} = \\sqrt3$. Resultado: $1 + \\sqrt{3}i$."
  },
  {
    "id": "comppol-m-05",
    "difficulty": "medium",
    "prompt": "¿Cuál es el módulo de $2 - 2i$?",
    "options": [
      {
        "latex": "2\\sqrt{2}",
        "correct": true
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
        "latex": "8",
        "correct": false
      }
    ],
    "explanation": "$|2-2i| = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$."
  },
  {
    "id": "comppol-m-06",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -\\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -\\sqrt{3} + i$, se sitúa en el segundo cuadrante, ángulo $5\\pi/6$, por lo que $\\theta = \\frac{5\\pi}{6}$."
  },
  {
    "id": "comppol-m-07",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -2i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{2}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -2i$, se sitúa en el eje imaginario negativo, ángulo $3\\pi/2$, por lo que $\\theta = \\frac{3\\pi}{2}$."
  },
  {
    "id": "comppol-m-08",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 3$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Para $z = 3$, se sitúa en el eje real positivo, ángulo $0$, por lo que $\\theta = 0$."
  },
  {
    "id": "comppol-m-09",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + i$, se sitúa en el primer cuadrante, ángulo $\\pi/4$, por lo que $\\theta = \\frac{\\pi}{4}$."
  },
  {
    "id": "comppol-m-10",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 + i$, se sitúa en el segundo cuadrante, ángulo $3\\pi/4$, por lo que $\\theta = \\frac{3\\pi}{4}$."
  },
  {
    "id": "comppol-m-11",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 - i$, se sitúa en el tercer cuadrante, ángulo $5\\pi/4$, por lo que $\\theta = \\frac{5\\pi}{4}$."
  },
  {
    "id": "comppol-m-12",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 - i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{7\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 - i$, se sitúa en el cuarto cuadrante, ángulo $7\\pi/4$, por lo que $\\theta = \\frac{7\\pi}{4}$."
  },
  {
    "id": "comppol-m-13",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = \\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = \\sqrt{3} + i$, se sitúa en el primer cuadrante, ángulo $\\pi/6$, por lo que $\\theta = \\frac{\\pi}{6}$."
  },
  {
    "id": "comppol-m-14",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + \\sqrt{3}i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{3}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + \\sqrt{3}i$, se sitúa en el primer cuadrante, ángulo $\\pi/3$, por lo que $\\theta = \\frac{\\pi}{3}$."
  },
  {
    "id": "comppol-m-15",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -\\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -\\sqrt{3} + i$, se sitúa en el segundo cuadrante, ángulo $5\\pi/6$, por lo que $\\theta = \\frac{5\\pi}{6}$."
  },
  {
    "id": "comppol-m-16",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -2i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{2}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -2i$, se sitúa en el eje imaginario negativo, ángulo $3\\pi/2$, por lo que $\\theta = \\frac{3\\pi}{2}$."
  },
  {
    "id": "comppol-m-17",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 3$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Para $z = 3$, se sitúa en el eje real positivo, ángulo $0$, por lo que $\\theta = 0$."
  },
  {
    "id": "comppol-m-18",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + i$, se sitúa en el primer cuadrante, ángulo $\\pi/4$, por lo que $\\theta = \\frac{\\pi}{4}$."
  },
  {
    "id": "comppol-m-19",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 + i$, se sitúa en el segundo cuadrante, ángulo $3\\pi/4$, por lo que $\\theta = \\frac{3\\pi}{4}$."
  },
  {
    "id": "comppol-m-20",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 - i$, se sitúa en el tercer cuadrante, ángulo $5\\pi/4$, por lo que $\\theta = \\frac{5\\pi}{4}$."
  },
  {
    "id": "comppol-m-21",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 - i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{7\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 - i$, se sitúa en el cuarto cuadrante, ángulo $7\\pi/4$, por lo que $\\theta = \\frac{7\\pi}{4}$."
  },
  {
    "id": "comppol-m-22",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = \\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = \\sqrt{3} + i$, se sitúa en el primer cuadrante, ángulo $\\pi/6$, por lo que $\\theta = \\frac{\\pi}{6}$."
  },
  {
    "id": "comppol-m-23",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + \\sqrt{3}i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{3}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + \\sqrt{3}i$, se sitúa en el primer cuadrante, ángulo $\\pi/3$, por lo que $\\theta = \\frac{\\pi}{3}$."
  },
  {
    "id": "comppol-m-24",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -\\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -\\sqrt{3} + i$, se sitúa en el segundo cuadrante, ángulo $5\\pi/6$, por lo que $\\theta = \\frac{5\\pi}{6}$."
  },
  {
    "id": "comppol-m-25",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -2i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{2}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -2i$, se sitúa en el eje imaginario negativo, ángulo $3\\pi/2$, por lo que $\\theta = \\frac{3\\pi}{2}$."
  },
  {
    "id": "comppol-m-26",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 3$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Para $z = 3$, se sitúa en el eje real positivo, ángulo $0$, por lo que $\\theta = 0$."
  },
  {
    "id": "comppol-m-27",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + i$, se sitúa en el primer cuadrante, ángulo $\\pi/4$, por lo que $\\theta = \\frac{\\pi}{4}$."
  },
  {
    "id": "comppol-m-28",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 + i$, se sitúa en el segundo cuadrante, ángulo $3\\pi/4$, por lo que $\\theta = \\frac{3\\pi}{4}$."
  },
  {
    "id": "comppol-m-29",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 - i$, se sitúa en el tercer cuadrante, ángulo $5\\pi/4$, por lo que $\\theta = \\frac{5\\pi}{4}$."
  },
  {
    "id": "comppol-m-30",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{7\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 - i$, se sitúa en el cuarto cuadrante, ángulo $7\\pi/4$, por lo que $\\theta = \\frac{7\\pi}{4}$."
  },
  {
    "id": "comppol-m-31",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = \\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = \\sqrt{3} + i$, se sitúa en el primer cuadrante, ángulo $\\pi/6$, por lo que $\\theta = \\frac{\\pi}{6}$."
  },
  {
    "id": "comppol-m-32",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + \\sqrt{3}i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{3}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + \\sqrt{3}i$, se sitúa en el primer cuadrante, ángulo $\\pi/3$, por lo que $\\theta = \\frac{\\pi}{3}$."
  },
  {
    "id": "comppol-m-33",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -\\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -\\sqrt{3} + i$, se sitúa en el segundo cuadrante, ángulo $5\\pi/6$, por lo que $\\theta = \\frac{5\\pi}{6}$."
  },
  {
    "id": "comppol-m-34",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -2i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{2}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -2i$, se sitúa en el eje imaginario negativo, ángulo $3\\pi/2$, por lo que $\\theta = \\frac{3\\pi}{2}$."
  },
  {
    "id": "comppol-m-35",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 3$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Para $z = 3$, se sitúa en el eje real positivo, ángulo $0$, por lo que $\\theta = 0$."
  },
  {
    "id": "comppol-m-36",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + i$, se sitúa en el primer cuadrante, ángulo $\\pi/4$, por lo que $\\theta = \\frac{\\pi}{4}$."
  },
  {
    "id": "comppol-m-37",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 + i$, se sitúa en el segundo cuadrante, ángulo $3\\pi/4$, por lo que $\\theta = \\frac{3\\pi}{4}$."
  },
  {
    "id": "comppol-m-38",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 - i$, se sitúa en el tercer cuadrante, ángulo $5\\pi/4$, por lo que $\\theta = \\frac{5\\pi}{4}$."
  },
  {
    "id": "comppol-m-39",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{7\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 - i$, se sitúa en el cuarto cuadrante, ángulo $7\\pi/4$, por lo que $\\theta = \\frac{7\\pi}{4}$."
  },
  {
    "id": "comppol-m-40",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = \\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = \\sqrt{3} + i$, se sitúa en el primer cuadrante, ángulo $\\pi/6$, por lo que $\\theta = \\frac{\\pi}{6}$."
  },
  {
    "id": "comppol-m-41",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + \\sqrt{3}i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{3}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + \\sqrt{3}i$, se sitúa en el primer cuadrante, ángulo $\\pi/3$, por lo que $\\theta = \\frac{\\pi}{3}$."
  },
  {
    "id": "comppol-m-42",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -\\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -\\sqrt{3} + i$, se sitúa en el segundo cuadrante, ángulo $5\\pi/6$, por lo que $\\theta = \\frac{5\\pi}{6}$."
  },
  {
    "id": "comppol-m-43",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -2i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{2}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -2i$, se sitúa en el eje imaginario negativo, ángulo $3\\pi/2$, por lo que $\\theta = \\frac{3\\pi}{2}$."
  },
  {
    "id": "comppol-m-44",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 3$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "0",
        "correct": true
      }
    ],
    "explanation": "Para $z = 3$, se sitúa en el eje real positivo, ángulo $0$, por lo que $\\theta = 0$."
  },
  {
    "id": "comppol-m-45",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + i$, se sitúa en el primer cuadrante, ángulo $\\pi/4$, por lo que $\\theta = \\frac{\\pi}{4}$."
  },
  {
    "id": "comppol-m-46",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 + i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{3\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 + i$, se sitúa en el segundo cuadrante, ángulo $3\\pi/4$, por lo que $\\theta = \\frac{3\\pi}{4}$."
  },
  {
    "id": "comppol-m-47",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = -1 - i$",
    "options": [
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{5\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = -1 - i$, se sitúa en el tercer cuadrante, ángulo $5\\pi/4$, por lo que $\\theta = \\frac{5\\pi}{4}$."
  },
  {
    "id": "comppol-m-48",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 - i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{7\\pi}{4}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 - i$, se sitúa en el cuarto cuadrante, ángulo $7\\pi/4$, por lo que $\\theta = \\frac{7\\pi}{4}$."
  },
  {
    "id": "comppol-m-49",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = \\sqrt{3} + i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{6}",
        "correct": true
      }
    ],
    "explanation": "Para $z = \\sqrt{3} + i$, se sitúa en el primer cuadrante, ángulo $\\pi/6$, por lo que $\\theta = \\frac{\\pi}{6}$."
  },
  {
    "id": "comppol-m-50",
    "difficulty": "medium",
    "prompt": "Halla el argumento principal $\\theta$ de $z = 1 + \\sqrt{3}i$",
    "options": [
      {
        "latex": "\\pi",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{8}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{2}",
        "correct": false
      },
      {
        "latex": "\\frac{\\pi}{3}",
        "correct": true
      }
    ],
    "explanation": "Para $z = 1 + \\sqrt{3}i$, se sitúa en el primer cuadrante, ángulo $\\pi/3$, por lo que $\\theta = \\frac{\\pi}{3}$."
  },
  {
    "id": "comppol-h-01",
    "difficulty": "hard",
    "prompt": "Si $z = 3 + 4i$ y $w = 1 + 2i$, ¿cuánto vale $|z \\cdot w|$?",
    "options": [
      {
        "latex": "5\\sqrt{5}",
        "correct": true
      },
      {
        "latex": "5 + \\sqrt{5}",
        "correct": false
      },
      {
        "latex": "\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "25",
        "correct": false
      }
    ],
    "explanation": "$|z \\cdot w| = |z| \\cdot |w| = 5 \\cdot \\sqrt{5} = 5\\sqrt{5}$."
  },
  {
    "id": "comppol-h-02",
    "difficulty": "hard",
    "prompt": "¿Cuál es el argumento de $-1 + i$?",
    "options": [
      {
        "latex": "135^\\circ",
        "correct": true
      },
      {
        "latex": "45^\\circ",
        "correct": false
      },
      {
        "latex": "225^\\circ",
        "correct": false
      },
      {
        "latex": "315^\\circ",
        "correct": false
      }
    ],
    "explanation": "$-1 + i$ está en el segundo cuadrante, así que su argumento es $180^\\circ - 45^\\circ = 135^\\circ$."
  },
  {
    "id": "comppol-h-03",
    "difficulty": "hard",
    "prompt": "Usa De Moivre: $(\\cos 30^\\circ + i \\sin 30^\\circ)^3 = ?$",
    "options": [
      {
        "latex": "i",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "-i",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      }
    ],
    "explanation": "De Moivre multiplica el ángulo: $3 \\cdot 30^\\circ = 90^\\circ$. $\\cos 90^\\circ + i\\sin 90^\\circ = i$."
  },
  {
    "id": "comppol-h-04",
    "difficulty": "hard",
    "prompt": "¿Cuál es el módulo de $\\frac{3 + 4i}{1 + 2i}$?",
    "options": [
      {
        "latex": "\\sqrt{5}",
        "correct": true
      },
      {
        "latex": "5\\sqrt{5}",
        "correct": false
      },
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "\\frac{1}{\\sqrt{5}}",
        "correct": false
      }
    ],
    "explanation": "$\\left|\\frac{z}{w}\\right| = \\frac{|z|}{|w|} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$."
  },
  {
    "id": "comppol-h-05",
    "difficulty": "hard",
    "prompt": "Escribe $4(\\cos 90^\\circ + i \\sin 90^\\circ)$ en forma rectangular",
    "options": [
      {
        "latex": "4i",
        "correct": true
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-4i",
        "correct": false
      },
      {
        "latex": "4 + 4i",
        "correct": false
      }
    ],
    "explanation": "$4\\cos 90^\\circ = 0$ y $4\\sin 90^\\circ = 4$. Resultado: $4i$."
  },
  {
    "id": "comppol-h-06",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{3}\\right) + i\\sin\\left(\\frac{4\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-07",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{4}\\right) + i\\sin\\left(\\frac{5\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-08",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{10}\\right) + i\\sin\\left(\\frac{\\pi}{10}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{5}\\right) + i\\sin\\left(\\frac{2\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-09",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{9}\\right) + i\\sin\\left(\\frac{\\pi}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{3}\\right) + i\\sin\\left(\\frac{3\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-10",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{16}\\right) + i\\sin\\left(\\frac{\\pi}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{4}\\right) + i\\sin\\left(\\frac{4\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-11",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{25}\\right) + i\\sin\\left(\\frac{\\pi}{25}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{5}\\right) + i\\sin\\left(\\frac{5\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-12",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{6}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{3}\\right) + i\\sin\\left(\\frac{2\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-13",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{4}\\right) + i\\sin\\left(\\frac{3\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-14",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{5}\\right) + i\\sin\\left(\\frac{4\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-15",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{3}\\right) + i\\sin\\left(\\frac{5\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-16",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{8}\\right) + i\\sin\\left(\\frac{\\pi}{8}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{4}\\right) + i\\sin\\left(\\frac{2\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-17",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{5}\\right) + i\\sin\\left(\\frac{3\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-18",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{3}\\right) + i\\sin\\left(\\frac{4\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-19",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{4}\\right) + i\\sin\\left(\\frac{5\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-20",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{10}\\right) + i\\sin\\left(\\frac{\\pi}{10}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{5}\\right) + i\\sin\\left(\\frac{2\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-21",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{9}\\right) + i\\sin\\left(\\frac{\\pi}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{3}\\right) + i\\sin\\left(\\frac{3\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-22",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{16}\\right) + i\\sin\\left(\\frac{\\pi}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{4}\\right) + i\\sin\\left(\\frac{4\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-23",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{25}\\right) + i\\sin\\left(\\frac{\\pi}{25}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{5}\\right) + i\\sin\\left(\\frac{5\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-24",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{6}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{3}\\right) + i\\sin\\left(\\frac{2\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-25",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{4}\\right) + i\\sin\\left(\\frac{3\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-26",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{5}\\right) + i\\sin\\left(\\frac{4\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-27",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{3}\\right) + i\\sin\\left(\\frac{5\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-28",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{8}\\right) + i\\sin\\left(\\frac{\\pi}{8}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{4}\\right) + i\\sin\\left(\\frac{2\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-29",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{5}\\right) + i\\sin\\left(\\frac{3\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-30",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{3}\\right) + i\\sin\\left(\\frac{4\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-31",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{4}\\right) + i\\sin\\left(\\frac{5\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-32",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{10}\\right) + i\\sin\\left(\\frac{\\pi}{10}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{5}\\right) + i\\sin\\left(\\frac{2\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-33",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{9}\\right) + i\\sin\\left(\\frac{\\pi}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{3}\\right) + i\\sin\\left(\\frac{3\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-34",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{16}\\right) + i\\sin\\left(\\frac{\\pi}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{4}\\right) + i\\sin\\left(\\frac{4\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-35",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{25}\\right) + i\\sin\\left(\\frac{\\pi}{25}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{5}\\right) + i\\sin\\left(\\frac{5\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-36",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{6}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{3}\\right) + i\\sin\\left(\\frac{2\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-37",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{4}\\right) + i\\sin\\left(\\frac{3\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-38",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{5}\\right) + i\\sin\\left(\\frac{4\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-39",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{3}\\right) + i\\sin\\left(\\frac{5\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-40",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{8}\\right) + i\\sin\\left(\\frac{\\pi}{8}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{4}\\right) + i\\sin\\left(\\frac{2\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-41",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{15}\\right) + i\\sin\\left(\\frac{\\pi}{15}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{5}\\right) + i\\sin\\left(\\frac{3\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-42",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{3}\\right) + i\\sin\\left(\\frac{4\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-43",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{4}\\right) + i\\sin\\left(\\frac{5\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-44",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{10}\\right) + i\\sin\\left(\\frac{\\pi}{10}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{5}\\right) + i\\sin\\left(\\frac{2\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-45",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{9}\\right) + i\\sin\\left(\\frac{\\pi}{9}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{3}\\right) + i\\sin\\left(\\frac{3\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-46",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{16}\\right) + i\\sin\\left(\\frac{\\pi}{16}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{4}\\right) + i\\sin\\left(\\frac{4\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 4$."
  },
  {
    "id": "comppol-h-47",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{5}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{25}\\right) + i\\sin\\left(\\frac{\\pi}{25}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{5\\pi}{5}\\right) + i\\sin\\left(\\frac{5\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 5$."
  },
  {
    "id": "comppol-h-48",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)\\right)^{2}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{3}\\right) + i\\sin^n\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{6}\\right) + i\\sin\\left(\\frac{\\pi}{6}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{2\\pi}{3}\\right) + i\\sin\\left(\\frac{2\\pi}{3}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{3}$ y exponente $n = 2$."
  },
  {
    "id": "comppol-h-49",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)\\right)^{3}$",
    "options": [
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{4}\\right) + i\\sin^n\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{4}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{12}\\right) + i\\sin\\left(\\frac{\\pi}{12}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{3\\pi}{4}\\right) + i\\sin\\left(\\frac{3\\pi}{4}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{4}$ y exponente $n = 3$."
  },
  {
    "id": "comppol-h-50",
    "difficulty": "hard",
    "prompt": "Aplica el teorema de De Moivre a $\\left(\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)\\right)^{4}$",
    "options": [
      {
        "latex": "\\cos\\left(\\frac{\\pi}{20}\\right) + i\\sin\\left(\\frac{\\pi}{20}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{\\pi}{5}\\right) + i\\sin\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos^n\\left(\\frac{\\pi}{5}\\right) + i\\sin^n\\left(\\frac{\\pi}{5}\\right)",
        "correct": false
      },
      {
        "latex": "\\cos\\left(\\frac{4\\pi}{5}\\right) + i\\sin\\left(\\frac{4\\pi}{5}\\right)",
        "correct": true
      }
    ],
    "explanation": "Por el teorema de De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Aquí con $\\theta = \\frac{\\pi}{5}$ y exponente $n = 4$."
  }
]
};
