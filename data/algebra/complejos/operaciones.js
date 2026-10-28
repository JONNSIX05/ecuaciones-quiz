// data/algebra/complejos/operaciones.js
// Catálogo ampliado a 150 preguntas (50 fáciles, 50 medias, 50 difíciles).

export default {
  lawId: "complejos-operaciones",
  lawName: "Operaciones con números complejos",
  lawFormula: "z = a + bi, \\quad i^2 = -1",
  prerequisites: "Conocer los números reales y la raíz cuadrada de negativos.",
  available: true,
  questions: [
  {
    "id": "compop-f-01",
    "difficulty": "easy",
    "prompt": "¿Cuánto vale $i^2$?",
    "options": [
      {
        "latex": "-1",
        "correct": true
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-i",
        "correct": false
      }
    ],
    "explanation": "Por definición, $i^2 = -1$. Es la base de los números complejos."
  },
  {
    "id": "compop-f-02",
    "difficulty": "easy",
    "prompt": "Suma: $(2 + 3i) + (1 + 4i)$",
    "options": [
      {
        "latex": "3 + 7i",
        "correct": true
      },
      {
        "latex": "7 + 3i",
        "correct": false
      },
      {
        "latex": "2 + 7i",
        "correct": false
      },
      {
        "latex": "3 - 7i",
        "correct": false
      }
    ],
    "explanation": "Suma partes reales e imaginarias por separado: $(2+1) + (3+4)i = 3 + 7i$."
  },
  {
    "id": "compop-f-03",
    "difficulty": "easy",
    "prompt": "Resta: $(5 + 2i) - (3 + i)$",
    "options": [
      {
        "latex": "2 + i",
        "correct": true
      },
      {
        "latex": "2 - i",
        "correct": false
      },
      {
        "latex": "8 + 3i",
        "correct": false
      },
      {
        "latex": "2 + 3i",
        "correct": false
      }
    ],
    "explanation": "$(5-3) + (2-1)i = 2 + i$."
  },
  {
    "id": "compop-f-04",
    "difficulty": "easy",
    "prompt": "¿Cuál es el conjugado de $3 + 4i$?",
    "options": [
      {
        "latex": "3 - 4i",
        "correct": true
      },
      {
        "latex": "-3 + 4i",
        "correct": false
      },
      {
        "latex": "-3 - 4i",
        "correct": false
      },
      {
        "latex": "4 + 3i",
        "correct": false
      }
    ],
    "explanation": "El conjugado cambia el signo de la parte imaginaria: $3 - 4i$."
  },
  {
    "id": "compop-f-05",
    "difficulty": "easy",
    "prompt": "Suma: $(1 + i) + (1 - i)$",
    "options": [
      {
        "latex": "2",
        "correct": true
      },
      {
        "latex": "2i",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "1 + i",
        "correct": false
      }
    ],
    "explanation": "Las partes imaginarias se cancelan: $(1+1) + (i - i) = 2$."
  },
  {
    "id": "compop-f-06",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{45}$",
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
        "latex": "-i",
        "correct": false
      },
      {
        "latex": "i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $45 = 4(11) + 1$. Por tanto, $i^{45} = i^{1} = i$."
  },
  {
    "id": "compop-f-07",
    "difficulty": "easy",
    "prompt": "Suma: $(1 + 6i) + (4 + 2i)$",
    "options": [
      {
        "latex": "5 - 8i",
        "correct": false
      },
      {
        "latex": "5 + 10i",
        "correct": false
      },
      {
        "latex": "6 + 8i",
        "correct": false
      },
      {
        "latex": "5 + 8i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(1+4) + (6+2)i = 5 + 8i$."
  },
  {
    "id": "compop-f-08",
    "difficulty": "easy",
    "prompt": "Resta: $(2 + 1i) - (5 + 3i)$",
    "options": [
      {
        "latex": "-3 - 3i",
        "correct": false
      },
      {
        "latex": "7 + 4i",
        "correct": false
      },
      {
        "latex": "-1 - 2i",
        "correct": false
      },
      {
        "latex": "-3 - 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(2-5) + (1-3)i = -3 - 2i$."
  },
  {
    "id": "compop-f-09",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{66}$",
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
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $66 = 4(16) + 2$. Por tanto, $i^{66} = i^{2} = -1$."
  },
  {
    "id": "compop-f-10",
    "difficulty": "easy",
    "prompt": "Suma: $(4 + 7i) + (2 + 5i)$",
    "options": [
      {
        "latex": "6 - 12i",
        "correct": false
      },
      {
        "latex": "6 + 14i",
        "correct": false
      },
      {
        "latex": "7 + 12i",
        "correct": false
      },
      {
        "latex": "6 + 12i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(4+2) + (7+5)i = 6 + 12i$."
  },
  {
    "id": "compop-f-11",
    "difficulty": "easy",
    "prompt": "Resta: $(5 + 2i) - (3 + 6i)$",
    "options": [
      {
        "latex": "2 - 5i",
        "correct": false
      },
      {
        "latex": "4 - 4i",
        "correct": false
      },
      {
        "latex": "8 + 8i",
        "correct": false
      },
      {
        "latex": "2 - 4i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(5-3) + (2-6)i = 2 - 4i$."
  },
  {
    "id": "compop-f-12",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{87}$",
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
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $87 = 4(21) + 3$. Por tanto, $i^{87} = i^{3} = -i$."
  },
  {
    "id": "compop-f-13",
    "difficulty": "easy",
    "prompt": "Suma: $(7 + 8i) + (5 + 2i)$",
    "options": [
      {
        "latex": "13 + 10i",
        "correct": false
      },
      {
        "latex": "12 + 12i",
        "correct": false
      },
      {
        "latex": "12 - 10i",
        "correct": false
      },
      {
        "latex": "12 + 10i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(7+5) + (8+2)i = 12 + 10i$."
  },
  {
    "id": "compop-f-14",
    "difficulty": "easy",
    "prompt": "Resta: $(1 + 3i) - (6 + 3i)$",
    "options": [
      {
        "latex": "-5 - 1i",
        "correct": false
      },
      {
        "latex": "7 + 6i",
        "correct": false
      },
      {
        "latex": "-3 + 0i",
        "correct": false
      },
      {
        "latex": "-5 + 0i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(1-6) + (3-3)i = -5 + 0i$."
  },
  {
    "id": "compop-f-15",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{108}$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $108 = 4(27) + 0$. Por tanto, $i^{108} = i^{0} = 1$."
  },
  {
    "id": "compop-f-16",
    "difficulty": "easy",
    "prompt": "Suma: $(3 + 1i) + (3 + 5i)$",
    "options": [
      {
        "latex": "7 + 6i",
        "correct": false
      },
      {
        "latex": "6 + 8i",
        "correct": false
      },
      {
        "latex": "6 - 6i",
        "correct": false
      },
      {
        "latex": "6 + 6i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(3+3) + (1+5)i = 6 + 6i$."
  },
  {
    "id": "compop-f-17",
    "difficulty": "easy",
    "prompt": "Resta: $(4 + 4i) - (4 + 6i)$",
    "options": [
      {
        "latex": "0 - 3i",
        "correct": false
      },
      {
        "latex": "2 - 2i",
        "correct": false
      },
      {
        "latex": "8 + 10i",
        "correct": false
      },
      {
        "latex": "0 - 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(4-4) + (4-6)i = 0 - 2i$."
  },
  {
    "id": "compop-f-18",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{129}$",
    "options": [
      {
        "latex": "-i",
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
        "latex": "i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $129 = 4(32) + 1$. Por tanto, $i^{129} = i^{1} = i$."
  },
  {
    "id": "compop-f-19",
    "difficulty": "easy",
    "prompt": "Suma: $(6 + 2i) + (6 + 2i)$",
    "options": [
      {
        "latex": "12 - 4i",
        "correct": false
      },
      {
        "latex": "12 + 6i",
        "correct": false
      },
      {
        "latex": "13 + 4i",
        "correct": false
      },
      {
        "latex": "12 + 4i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(6+6) + (2+2)i = 12 + 4i$."
  },
  {
    "id": "compop-f-20",
    "difficulty": "easy",
    "prompt": "Resta: $(7 + 5i) - (2 + 3i)$",
    "options": [
      {
        "latex": "5 - 3i",
        "correct": false
      },
      {
        "latex": "7 + 2i",
        "correct": false
      },
      {
        "latex": "9 + 8i",
        "correct": false
      },
      {
        "latex": "5 + 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(7-2) + (5-3)i = 5 + 2i$."
  },
  {
    "id": "compop-f-21",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{150}$",
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
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $150 = 4(37) + 2$. Por tanto, $i^{150} = i^{2} = -1$."
  },
  {
    "id": "compop-f-22",
    "difficulty": "easy",
    "prompt": "Suma: $(2 + 3i) + (4 + 5i)$",
    "options": [
      {
        "latex": "7 + 8i",
        "correct": false
      },
      {
        "latex": "6 + 10i",
        "correct": false
      },
      {
        "latex": "6 - 8i",
        "correct": false
      },
      {
        "latex": "6 + 8i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(2+4) + (3+5)i = 6 + 8i$."
  },
  {
    "id": "compop-f-23",
    "difficulty": "easy",
    "prompt": "Resta: $(3 + 6i) - (5 + 6i)$",
    "options": [
      {
        "latex": "-2 - 1i",
        "correct": false
      },
      {
        "latex": "8 + 12i",
        "correct": false
      },
      {
        "latex": "0 + 0i",
        "correct": false
      },
      {
        "latex": "-2 + 0i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(3-5) + (6-6)i = -2 + 0i$."
  },
  {
    "id": "compop-f-24",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{171}$",
    "options": [
      {
        "latex": "i",
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
        "latex": "-i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $171 = 4(42) + 3$. Por tanto, $i^{171} = i^{3} = -i$."
  },
  {
    "id": "compop-f-25",
    "difficulty": "easy",
    "prompt": "Suma: $(5 + 4i) + (2 + 2i)$",
    "options": [
      {
        "latex": "7 - 6i",
        "correct": false
      },
      {
        "latex": "7 + 8i",
        "correct": false
      },
      {
        "latex": "8 + 6i",
        "correct": false
      },
      {
        "latex": "7 + 6i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(5+2) + (4+2)i = 7 + 6i$."
  },
  {
    "id": "compop-f-26",
    "difficulty": "easy",
    "prompt": "Resta: $(6 + 7i) - (3 + 3i)$",
    "options": [
      {
        "latex": "5 + 4i",
        "correct": false
      },
      {
        "latex": "9 + 10i",
        "correct": false
      },
      {
        "latex": "3 - 5i",
        "correct": false
      },
      {
        "latex": "3 + 4i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(6-3) + (7-3)i = 3 + 4i$."
  },
  {
    "id": "compop-f-27",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{192}$",
    "options": [
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $192 = 4(48) + 0$. Por tanto, $i^{192} = i^{0} = 1$."
  },
  {
    "id": "compop-f-28",
    "difficulty": "easy",
    "prompt": "Suma: $(1 + 5i) + (5 + 5i)$",
    "options": [
      {
        "latex": "6 - 10i",
        "correct": false
      },
      {
        "latex": "6 + 12i",
        "correct": false
      },
      {
        "latex": "7 + 10i",
        "correct": false
      },
      {
        "latex": "6 + 10i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(1+5) + (5+5)i = 6 + 10i$."
  },
  {
    "id": "compop-f-29",
    "difficulty": "easy",
    "prompt": "Resta: $(2 + 8i) - (6 + 6i)$",
    "options": [
      {
        "latex": "-4 - 3i",
        "correct": false
      },
      {
        "latex": "8 + 14i",
        "correct": false
      },
      {
        "latex": "-2 + 2i",
        "correct": false
      },
      {
        "latex": "-4 + 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(2-6) + (8-6)i = -4 + 2i$."
  },
  {
    "id": "compop-f-30",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{213}$",
    "options": [
      {
        "latex": "-i",
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
        "latex": "i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $213 = 4(53) + 1$. Por tanto, $i^{213} = i^{1} = i$."
  },
  {
    "id": "compop-f-31",
    "difficulty": "easy",
    "prompt": "Suma: $(4 + 6i) + (3 + 2i)$",
    "options": [
      {
        "latex": "8 + 8i",
        "correct": false
      },
      {
        "latex": "7 + 10i",
        "correct": false
      },
      {
        "latex": "7 - 8i",
        "correct": false
      },
      {
        "latex": "7 + 8i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(4+3) + (6+2)i = 7 + 8i$."
  },
  {
    "id": "compop-f-32",
    "difficulty": "easy",
    "prompt": "Resta: $(5 + 1i) - (4 + 3i)$",
    "options": [
      {
        "latex": "3 - 2i",
        "correct": false
      },
      {
        "latex": "9 + 4i",
        "correct": false
      },
      {
        "latex": "1 - 3i",
        "correct": false
      },
      {
        "latex": "1 - 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(5-4) + (1-3)i = 1 - 2i$."
  },
  {
    "id": "compop-f-33",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{234}$",
    "options": [
      {
        "latex": "i",
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
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $234 = 4(58) + 2$. Por tanto, $i^{234} = i^{2} = -1$."
  },
  {
    "id": "compop-f-34",
    "difficulty": "easy",
    "prompt": "Suma: $(7 + 7i) + (6 + 5i)$",
    "options": [
      {
        "latex": "13 - 12i",
        "correct": false
      },
      {
        "latex": "14 + 12i",
        "correct": false
      },
      {
        "latex": "13 + 14i",
        "correct": false
      },
      {
        "latex": "13 + 12i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(7+6) + (7+5)i = 13 + 12i$."
  },
  {
    "id": "compop-f-35",
    "difficulty": "easy",
    "prompt": "Resta: $(1 + 2i) - (2 + 6i)$",
    "options": [
      {
        "latex": "-1 - 5i",
        "correct": false
      },
      {
        "latex": "1 - 4i",
        "correct": false
      },
      {
        "latex": "3 + 8i",
        "correct": false
      },
      {
        "latex": "-1 - 4i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(1-2) + (2-6)i = -1 - 4i$."
  },
  {
    "id": "compop-f-36",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{255}$",
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
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $255 = 4(63) + 3$. Por tanto, $i^{255} = i^{3} = -i$."
  },
  {
    "id": "compop-f-37",
    "difficulty": "easy",
    "prompt": "Suma: $(3 + 8i) + (4 + 2i)$",
    "options": [
      {
        "latex": "8 + 10i",
        "correct": false
      },
      {
        "latex": "7 + 12i",
        "correct": false
      },
      {
        "latex": "7 - 10i",
        "correct": false
      },
      {
        "latex": "7 + 10i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(3+4) + (8+2)i = 7 + 10i$."
  },
  {
    "id": "compop-f-38",
    "difficulty": "easy",
    "prompt": "Resta: $(4 + 3i) - (5 + 3i)$",
    "options": [
      {
        "latex": "-1 - 1i",
        "correct": false
      },
      {
        "latex": "9 + 6i",
        "correct": false
      },
      {
        "latex": "1 + 0i",
        "correct": false
      },
      {
        "latex": "-1 + 0i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(4-5) + (3-3)i = -1 + 0i$."
  },
  {
    "id": "compop-f-39",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{276}$",
    "options": [
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $276 = 4(69) + 0$. Por tanto, $i^{276} = i^{0} = 1$."
  },
  {
    "id": "compop-f-40",
    "difficulty": "easy",
    "prompt": "Suma: $(6 + 1i) + (2 + 5i)$",
    "options": [
      {
        "latex": "8 - 6i",
        "correct": false
      },
      {
        "latex": "8 + 8i",
        "correct": false
      },
      {
        "latex": "9 + 6i",
        "correct": false
      },
      {
        "latex": "8 + 6i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(6+2) + (1+5)i = 8 + 6i$."
  },
  {
    "id": "compop-f-41",
    "difficulty": "easy",
    "prompt": "Resta: $(7 + 4i) - (3 + 6i)$",
    "options": [
      {
        "latex": "6 - 2i",
        "correct": false
      },
      {
        "latex": "10 + 10i",
        "correct": false
      },
      {
        "latex": "4 - 3i",
        "correct": false
      },
      {
        "latex": "4 - 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(7-3) + (4-6)i = 4 - 2i$."
  },
  {
    "id": "compop-f-42",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{297}$",
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
        "latex": "-i",
        "correct": false
      },
      {
        "latex": "i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $297 = 4(74) + 1$. Por tanto, $i^{297} = i^{1} = i$."
  },
  {
    "id": "compop-f-43",
    "difficulty": "easy",
    "prompt": "Suma: $(2 + 2i) + (5 + 2i)$",
    "options": [
      {
        "latex": "7 - 4i",
        "correct": false
      },
      {
        "latex": "8 + 4i",
        "correct": false
      },
      {
        "latex": "7 + 6i",
        "correct": false
      },
      {
        "latex": "7 + 4i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(2+5) + (2+2)i = 7 + 4i$."
  },
  {
    "id": "compop-f-44",
    "difficulty": "easy",
    "prompt": "Resta: $(3 + 5i) - (6 + 3i)$",
    "options": [
      {
        "latex": "-3 - 3i",
        "correct": false
      },
      {
        "latex": "-1 + 2i",
        "correct": false
      },
      {
        "latex": "9 + 8i",
        "correct": false
      },
      {
        "latex": "-3 + 2i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(3-6) + (5-3)i = -3 + 2i$."
  },
  {
    "id": "compop-f-45",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{318}$",
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
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $318 = 4(79) + 2$. Por tanto, $i^{318} = i^{2} = -1$."
  },
  {
    "id": "compop-f-46",
    "difficulty": "easy",
    "prompt": "Suma: $(5 + 3i) + (3 + 5i)$",
    "options": [
      {
        "latex": "9 + 8i",
        "correct": false
      },
      {
        "latex": "8 + 10i",
        "correct": false
      },
      {
        "latex": "8 - 8i",
        "correct": false
      },
      {
        "latex": "8 + 8i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(5+3) + (3+5)i = 8 + 8i$."
  },
  {
    "id": "compop-f-47",
    "difficulty": "easy",
    "prompt": "Resta: $(6 + 6i) - (4 + 6i)$",
    "options": [
      {
        "latex": "2 - 1i",
        "correct": false
      },
      {
        "latex": "10 + 12i",
        "correct": false
      },
      {
        "latex": "4 + 0i",
        "correct": false
      },
      {
        "latex": "2 + 0i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(6-4) + (6-6)i = 2 + 0i$."
  },
  {
    "id": "compop-f-48",
    "difficulty": "easy",
    "prompt": "Calcula la potencia de la unidad imaginaria: $i^{339}$",
    "options": [
      {
        "latex": "i",
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
        "latex": "-i",
        "correct": true
      }
    ],
    "explanation": "Dividiendo el exponente entre 4: $339 = 4(84) + 3$. Por tanto, $i^{339} = i^{3} = -i$."
  },
  {
    "id": "compop-f-49",
    "difficulty": "easy",
    "prompt": "Suma: $(1 + 4i) + (6 + 2i)$",
    "options": [
      {
        "latex": "7 - 6i",
        "correct": false
      },
      {
        "latex": "7 + 8i",
        "correct": false
      },
      {
        "latex": "8 + 6i",
        "correct": false
      },
      {
        "latex": "7 + 6i",
        "correct": true
      }
    ],
    "explanation": "Sumando partes reales e imaginarias: $(1+6) + (4+2)i = 7 + 6i$."
  },
  {
    "id": "compop-f-50",
    "difficulty": "easy",
    "prompt": "Resta: $(2 + 7i) - (2 + 3i)$",
    "options": [
      {
        "latex": "0 - 5i",
        "correct": false
      },
      {
        "latex": "4 + 10i",
        "correct": false
      },
      {
        "latex": "2 + 4i",
        "correct": false
      },
      {
        "latex": "0 + 4i",
        "correct": true
      }
    ],
    "explanation": "Restando partes reales e imaginarias: $(2-2) + (7-3)i = 0 + 4i$."
  },
  {
    "id": "compop-m-01",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2i)(3i)$",
    "options": [
      {
        "latex": "-6",
        "correct": true
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "6i",
        "correct": false
      },
      {
        "latex": "-6i",
        "correct": false
      }
    ],
    "explanation": "$(2i)(3i) = 6i^2 = 6(-1) = -6$."
  },
  {
    "id": "compop-m-02",
    "difficulty": "medium",
    "prompt": "Multiplica: $(1 + i)(1 - i)$",
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
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2i",
        "correct": false
      }
    ],
    "explanation": "$(1+i)(1-i) = 1 - i^2 = 1 - (-1) = 2$. Un complejo por su conjugado da un real."
  },
  {
    "id": "compop-m-03",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2 + i)(1 + i)$",
    "options": [
      {
        "latex": "1 + 3i",
        "correct": true
      },
      {
        "latex": "3 + 3i",
        "correct": false
      },
      {
        "latex": "1 + i",
        "correct": false
      },
      {
        "latex": "2 + 3i",
        "correct": false
      }
    ],
    "explanation": "$2 + 2i + i + i^2 = 2 + 3i - 1 = 1 + 3i$."
  },
  {
    "id": "compop-m-04",
    "difficulty": "medium",
    "prompt": "¿Cuánto vale $i^3$?",
    "options": [
      {
        "latex": "-i",
        "correct": true
      },
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      }
    ],
    "explanation": "$i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$."
  },
  {
    "id": "compop-m-05",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3 + 2i)(3 - 2i)$",
    "options": [
      {
        "latex": "13",
        "correct": true
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
        "latex": "13i",
        "correct": false
      }
    ],
    "explanation": "$(3+2i)(3-2i) = 9 - 4i^2 = 9 + 4 = 13$."
  },
  {
    "id": "compop-m-06",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2 + 4i)(4 + 3i)$",
    "options": [
      {
        "latex": "-4 - 22i",
        "correct": false
      },
      {
        "latex": "8 + 12i",
        "correct": false
      },
      {
        "latex": "-2 + 22i",
        "correct": false
      },
      {
        "latex": "-4 + 22i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(2)(4) + (2)(3i) + (4i)(4) + (4i)(3i) = 8 + 6i + 16i - 12 = -4 + 22i$."
  },
  {
    "id": "compop-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $(3 + 5i)^2$",
    "options": [
      {
        "latex": "-16 - 30i",
        "correct": false
      },
      {
        "latex": "9 - 25i",
        "correct": false
      },
      {
        "latex": "34 + 30i",
        "correct": false
      },
      {
        "latex": "-16 + 30i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $3^2 + 2(3)(5i) + (5i)^2 = 9 + 30i - 25 = -16 + 30i$."
  },
  {
    "id": "compop-m-08",
    "difficulty": "medium",
    "prompt": "Multiplica $(4 + 2i)$ por su conjugado $(4 - 2i)$",
    "options": [
      {
        "latex": "20i",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "12",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 4^2 + 2^2 = 16 + 4 = 20$."
  },
  {
    "id": "compop-m-09",
    "difficulty": "medium",
    "prompt": "Multiplica: $(5 + 3i)(3 + 3i)$",
    "options": [
      {
        "latex": "6 - 24i",
        "correct": false
      },
      {
        "latex": "15 + 9i",
        "correct": false
      },
      {
        "latex": "8 + 24i",
        "correct": false
      },
      {
        "latex": "6 + 24i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(5)(3) + (5)(3i) + (3i)(3) + (3i)(3i) = 15 + 15i + 9i - 9 = 6 + 24i$."
  },
  {
    "id": "compop-m-10",
    "difficulty": "medium",
    "prompt": "Calcula: $(1 + 4i)^2$",
    "options": [
      {
        "latex": "-15 - 8i",
        "correct": false
      },
      {
        "latex": "1 - 16i",
        "correct": false
      },
      {
        "latex": "17 + 8i",
        "correct": false
      },
      {
        "latex": "-15 + 8i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $1^2 + 2(1)(4i) + (4i)^2 = 1 + 8i - 16 = -15 + 8i$."
  },
  {
    "id": "compop-m-11",
    "difficulty": "medium",
    "prompt": "Multiplica $(2 + 5i)$ por su conjugado $(2 - 5i)$",
    "options": [
      {
        "latex": "-21",
        "correct": false
      },
      {
        "latex": "29i",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "29",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 2^2 + 5^2 = 4 + 25 = 29$."
  },
  {
    "id": "compop-m-12",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3 + 2i)(2 + 3i)$",
    "options": [
      {
        "latex": "0 - 13i",
        "correct": false
      },
      {
        "latex": "2 + 13i",
        "correct": false
      },
      {
        "latex": "6 + 6i",
        "correct": false
      },
      {
        "latex": "0 + 13i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(3)(2) + (3)(3i) + (2i)(2) + (2i)(3i) = 6 + 9i + 4i - 6 = 0 + 13i$."
  },
  {
    "id": "compop-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $(4 + 3i)^2$",
    "options": [
      {
        "latex": "25 + 24i",
        "correct": false
      },
      {
        "latex": "7 - 24i",
        "correct": false
      },
      {
        "latex": "16 - 9i",
        "correct": false
      },
      {
        "latex": "7 + 24i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $4^2 + 2(4)(3i) + (3i)^2 = 16 + 24i - 9 = 7 + 24i$."
  },
  {
    "id": "compop-m-14",
    "difficulty": "medium",
    "prompt": "Multiplica $(5 + 4i)$ por su conjugado $(5 - 4i)$",
    "options": [
      {
        "latex": "41i",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "9",
        "correct": false
      },
      {
        "latex": "41",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 5^2 + 4^2 = 25 + 16 = 41$."
  },
  {
    "id": "compop-m-15",
    "difficulty": "medium",
    "prompt": "Multiplica: $(1 + 5i)(1 + 3i)$",
    "options": [
      {
        "latex": "-14 - 8i",
        "correct": false
      },
      {
        "latex": "1 + 15i",
        "correct": false
      },
      {
        "latex": "-12 + 8i",
        "correct": false
      },
      {
        "latex": "-14 + 8i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(1)(1) + (1)(3i) + (5i)(1) + (5i)(3i) = 1 + 3i + 5i - 15 = -14 + 8i$."
  },
  {
    "id": "compop-m-16",
    "difficulty": "medium",
    "prompt": "Calcula: $(2 + 2i)^2$",
    "options": [
      {
        "latex": "8 + 8i",
        "correct": false
      },
      {
        "latex": "0 - 8i",
        "correct": false
      },
      {
        "latex": "4 - 4i",
        "correct": false
      },
      {
        "latex": "0 + 8i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $2^2 + 2(2)(2i) + (2i)^2 = 4 + 8i - 4 = 0 + 8i$."
  },
  {
    "id": "compop-m-17",
    "difficulty": "medium",
    "prompt": "Multiplica $(3 + 3i)$ por su conjugado $(3 - 3i)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "18i",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "18",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 3^2 + 3^2 = 9 + 9 = 18$."
  },
  {
    "id": "compop-m-18",
    "difficulty": "medium",
    "prompt": "Multiplica: $(4 + 4i)(4 + 3i)$",
    "options": [
      {
        "latex": "16 + 12i",
        "correct": false
      },
      {
        "latex": "6 + 28i",
        "correct": false
      },
      {
        "latex": "4 - 28i",
        "correct": false
      },
      {
        "latex": "4 + 28i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(4)(4) + (4)(3i) + (4i)(4) + (4i)(3i) = 16 + 12i + 16i - 12 = 4 + 28i$."
  },
  {
    "id": "compop-m-19",
    "difficulty": "medium",
    "prompt": "Calcula: $(5 + 5i)^2$",
    "options": [
      {
        "latex": "50 + 50i",
        "correct": false
      },
      {
        "latex": "0 - 50i",
        "correct": false
      },
      {
        "latex": "25 - 25i",
        "correct": false
      },
      {
        "latex": "0 + 50i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $5^2 + 2(5)(5i) + (5i)^2 = 25 + 50i - 25 = 0 + 50i$."
  },
  {
    "id": "compop-m-20",
    "difficulty": "medium",
    "prompt": "Multiplica $(1 + 2i)$ por su conjugado $(1 - 2i)$",
    "options": [
      {
        "latex": "-3",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "5i",
        "correct": false
      },
      {
        "latex": "5",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 1^2 + 2^2 = 1 + 4 = 5$."
  },
  {
    "id": "compop-m-21",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2 + 3i)(3 + 3i)$",
    "options": [
      {
        "latex": "-3 - 15i",
        "correct": false
      },
      {
        "latex": "-1 + 15i",
        "correct": false
      },
      {
        "latex": "6 + 9i",
        "correct": false
      },
      {
        "latex": "-3 + 15i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(2)(3) + (2)(3i) + (3i)(3) + (3i)(3i) = 6 + 6i + 9i - 9 = -3 + 15i$."
  },
  {
    "id": "compop-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $(3 + 4i)^2$",
    "options": [
      {
        "latex": "25 + 24i",
        "correct": false
      },
      {
        "latex": "9 - 16i",
        "correct": false
      },
      {
        "latex": "-7 - 24i",
        "correct": false
      },
      {
        "latex": "-7 + 24i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $3^2 + 2(3)(4i) + (4i)^2 = 9 + 24i - 16 = -7 + 24i$."
  },
  {
    "id": "compop-m-23",
    "difficulty": "medium",
    "prompt": "Multiplica $(4 + 5i)$ por su conjugado $(4 - 5i)$",
    "options": [
      {
        "latex": "-9",
        "correct": false
      },
      {
        "latex": "41i",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "41",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 4^2 + 5^2 = 16 + 25 = 41$."
  },
  {
    "id": "compop-m-24",
    "difficulty": "medium",
    "prompt": "Multiplica: $(5 + 2i)(2 + 3i)$",
    "options": [
      {
        "latex": "4 - 19i",
        "correct": false
      },
      {
        "latex": "6 + 19i",
        "correct": false
      },
      {
        "latex": "10 + 6i",
        "correct": false
      },
      {
        "latex": "4 + 19i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(5)(2) + (5)(3i) + (2i)(2) + (2i)(3i) = 10 + 15i + 4i - 6 = 4 + 19i$."
  },
  {
    "id": "compop-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $(1 + 3i)^2$",
    "options": [
      {
        "latex": "-8 - 6i",
        "correct": false
      },
      {
        "latex": "1 - 9i",
        "correct": false
      },
      {
        "latex": "10 + 6i",
        "correct": false
      },
      {
        "latex": "-8 + 6i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $1^2 + 2(1)(3i) + (3i)^2 = 1 + 6i - 9 = -8 + 6i$."
  },
  {
    "id": "compop-m-26",
    "difficulty": "medium",
    "prompt": "Multiplica $(2 + 4i)$ por su conjugado $(2 - 4i)$",
    "options": [
      {
        "latex": "-12",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "20i",
        "correct": false
      },
      {
        "latex": "20",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 2^2 + 4^2 = 4 + 16 = 20$."
  },
  {
    "id": "compop-m-27",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3 + 5i)(1 + 3i)$",
    "options": [
      {
        "latex": "-12 - 14i",
        "correct": false
      },
      {
        "latex": "-10 + 14i",
        "correct": false
      },
      {
        "latex": "3 + 15i",
        "correct": false
      },
      {
        "latex": "-12 + 14i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(3)(1) + (3)(3i) + (5i)(1) + (5i)(3i) = 3 + 9i + 5i - 15 = -12 + 14i$."
  },
  {
    "id": "compop-m-28",
    "difficulty": "medium",
    "prompt": "Calcula: $(4 + 2i)^2$",
    "options": [
      {
        "latex": "12 - 16i",
        "correct": false
      },
      {
        "latex": "16 - 4i",
        "correct": false
      },
      {
        "latex": "20 + 16i",
        "correct": false
      },
      {
        "latex": "12 + 16i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $4^2 + 2(4)(2i) + (2i)^2 = 16 + 16i - 4 = 12 + 16i$."
  },
  {
    "id": "compop-m-29",
    "difficulty": "medium",
    "prompt": "Multiplica $(5 + 3i)$ por su conjugado $(5 - 3i)$",
    "options": [
      {
        "latex": "34i",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "16",
        "correct": false
      },
      {
        "latex": "34",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 5^2 + 3^2 = 25 + 9 = 34$."
  },
  {
    "id": "compop-m-30",
    "difficulty": "medium",
    "prompt": "Multiplica: $(1 + 4i)(4 + 3i)$",
    "options": [
      {
        "latex": "-8 - 19i",
        "correct": false
      },
      {
        "latex": "4 + 12i",
        "correct": false
      },
      {
        "latex": "-6 + 19i",
        "correct": false
      },
      {
        "latex": "-8 + 19i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(1)(4) + (1)(3i) + (4i)(4) + (4i)(3i) = 4 + 3i + 16i - 12 = -8 + 19i$."
  },
  {
    "id": "compop-m-31",
    "difficulty": "medium",
    "prompt": "Calcula: $(2 + 5i)^2$",
    "options": [
      {
        "latex": "29 + 20i",
        "correct": false
      },
      {
        "latex": "4 - 25i",
        "correct": false
      },
      {
        "latex": "-21 - 20i",
        "correct": false
      },
      {
        "latex": "-21 + 20i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $2^2 + 2(2)(5i) + (5i)^2 = 4 + 20i - 25 = -21 + 20i$."
  },
  {
    "id": "compop-m-32",
    "difficulty": "medium",
    "prompt": "Multiplica $(3 + 2i)$ por su conjugado $(3 - 2i)$",
    "options": [
      {
        "latex": "5",
        "correct": false
      },
      {
        "latex": "13i",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 3^2 + 2^2 = 9 + 4 = 13$."
  },
  {
    "id": "compop-m-33",
    "difficulty": "medium",
    "prompt": "Multiplica: $(4 + 3i)(3 + 3i)$",
    "options": [
      {
        "latex": "3 - 21i",
        "correct": false
      },
      {
        "latex": "12 + 9i",
        "correct": false
      },
      {
        "latex": "5 + 21i",
        "correct": false
      },
      {
        "latex": "3 + 21i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(4)(3) + (4)(3i) + (3i)(3) + (3i)(3i) = 12 + 12i + 9i - 9 = 3 + 21i$."
  },
  {
    "id": "compop-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $(5 + 4i)^2$",
    "options": [
      {
        "latex": "9 - 40i",
        "correct": false
      },
      {
        "latex": "25 - 16i",
        "correct": false
      },
      {
        "latex": "41 + 40i",
        "correct": false
      },
      {
        "latex": "9 + 40i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $5^2 + 2(5)(4i) + (4i)^2 = 25 + 40i - 16 = 9 + 40i$."
  },
  {
    "id": "compop-m-35",
    "difficulty": "medium",
    "prompt": "Multiplica $(1 + 5i)$ por su conjugado $(1 - 5i)$",
    "options": [
      {
        "latex": "-24",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "26i",
        "correct": false
      },
      {
        "latex": "26",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 1^2 + 5^2 = 1 + 25 = 26$."
  },
  {
    "id": "compop-m-36",
    "difficulty": "medium",
    "prompt": "Multiplica: $(2 + 2i)(2 + 3i)$",
    "options": [
      {
        "latex": "-2 - 10i",
        "correct": false
      },
      {
        "latex": "4 + 6i",
        "correct": false
      },
      {
        "latex": "0 + 10i",
        "correct": false
      },
      {
        "latex": "-2 + 10i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(2)(2) + (2)(3i) + (2i)(2) + (2i)(3i) = 4 + 6i + 4i - 6 = -2 + 10i$."
  },
  {
    "id": "compop-m-37",
    "difficulty": "medium",
    "prompt": "Calcula: $(3 + 3i)^2$",
    "options": [
      {
        "latex": "18 + 18i",
        "correct": false
      },
      {
        "latex": "0 - 18i",
        "correct": false
      },
      {
        "latex": "9 - 9i",
        "correct": false
      },
      {
        "latex": "0 + 18i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $3^2 + 2(3)(3i) + (3i)^2 = 9 + 18i - 9 = 0 + 18i$."
  },
  {
    "id": "compop-m-38",
    "difficulty": "medium",
    "prompt": "Multiplica $(4 + 4i)$ por su conjugado $(4 - 4i)$",
    "options": [
      {
        "latex": "0",
        "correct": false
      },
      {
        "latex": "8",
        "correct": false
      },
      {
        "latex": "32i",
        "correct": false
      },
      {
        "latex": "32",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 4^2 + 4^2 = 16 + 16 = 32$."
  },
  {
    "id": "compop-m-39",
    "difficulty": "medium",
    "prompt": "Multiplica: $(5 + 5i)(1 + 3i)$",
    "options": [
      {
        "latex": "-10 - 20i",
        "correct": false
      },
      {
        "latex": "5 + 15i",
        "correct": false
      },
      {
        "latex": "-8 + 20i",
        "correct": false
      },
      {
        "latex": "-10 + 20i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(5)(1) + (5)(3i) + (5i)(1) + (5i)(3i) = 5 + 15i + 5i - 15 = -10 + 20i$."
  },
  {
    "id": "compop-m-40",
    "difficulty": "medium",
    "prompt": "Calcula: $(1 + 2i)^2$",
    "options": [
      {
        "latex": "5 + 4i",
        "correct": false
      },
      {
        "latex": "1 - 4i",
        "correct": false
      },
      {
        "latex": "-3 - 4i",
        "correct": false
      },
      {
        "latex": "-3 + 4i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $1^2 + 2(1)(2i) + (2i)^2 = 1 + 4i - 4 = -3 + 4i$."
  },
  {
    "id": "compop-m-41",
    "difficulty": "medium",
    "prompt": "Multiplica $(2 + 3i)$ por su conjugado $(2 - 3i)$",
    "options": [
      {
        "latex": "13i",
        "correct": false
      },
      {
        "latex": "4",
        "correct": false
      },
      {
        "latex": "-5",
        "correct": false
      },
      {
        "latex": "13",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 2^2 + 3^2 = 4 + 9 = 13$."
  },
  {
    "id": "compop-m-42",
    "difficulty": "medium",
    "prompt": "Multiplica: $(3 + 4i)(4 + 3i)$",
    "options": [
      {
        "latex": "0 - 25i",
        "correct": false
      },
      {
        "latex": "2 + 25i",
        "correct": false
      },
      {
        "latex": "12 + 12i",
        "correct": false
      },
      {
        "latex": "0 + 25i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(3)(4) + (3)(3i) + (4i)(4) + (4i)(3i) = 12 + 9i + 16i - 12 = 0 + 25i$."
  },
  {
    "id": "compop-m-43",
    "difficulty": "medium",
    "prompt": "Calcula: $(4 + 5i)^2$",
    "options": [
      {
        "latex": "41 + 40i",
        "correct": false
      },
      {
        "latex": "-9 - 40i",
        "correct": false
      },
      {
        "latex": "16 - 25i",
        "correct": false
      },
      {
        "latex": "-9 + 40i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $4^2 + 2(4)(5i) + (5i)^2 = 16 + 40i - 25 = -9 + 40i$."
  },
  {
    "id": "compop-m-44",
    "difficulty": "medium",
    "prompt": "Multiplica $(5 + 2i)$ por su conjugado $(5 - 2i)$",
    "options": [
      {
        "latex": "21",
        "correct": false
      },
      {
        "latex": "10",
        "correct": false
      },
      {
        "latex": "29i",
        "correct": false
      },
      {
        "latex": "29",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 5^2 + 2^2 = 25 + 4 = 29$."
  },
  {
    "id": "compop-m-45",
    "difficulty": "medium",
    "prompt": "Multiplica: $(1 + 3i)(3 + 3i)$",
    "options": [
      {
        "latex": "-6 - 12i",
        "correct": false
      },
      {
        "latex": "-4 + 12i",
        "correct": false
      },
      {
        "latex": "3 + 9i",
        "correct": false
      },
      {
        "latex": "-6 + 12i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(1)(3) + (1)(3i) + (3i)(3) + (3i)(3i) = 3 + 3i + 9i - 9 = -6 + 12i$."
  },
  {
    "id": "compop-m-46",
    "difficulty": "medium",
    "prompt": "Calcula: $(2 + 4i)^2$",
    "options": [
      {
        "latex": "20 + 16i",
        "correct": false
      },
      {
        "latex": "4 - 16i",
        "correct": false
      },
      {
        "latex": "-12 - 16i",
        "correct": false
      },
      {
        "latex": "-12 + 16i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $2^2 + 2(2)(4i) + (4i)^2 = 4 + 16i - 16 = -12 + 16i$."
  },
  {
    "id": "compop-m-47",
    "difficulty": "medium",
    "prompt": "Multiplica $(3 + 5i)$ por su conjugado $(3 - 5i)$",
    "options": [
      {
        "latex": "-16",
        "correct": false
      },
      {
        "latex": "34i",
        "correct": false
      },
      {
        "latex": "6",
        "correct": false
      },
      {
        "latex": "34",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 3^2 + 5^2 = 9 + 25 = 34$."
  },
  {
    "id": "compop-m-48",
    "difficulty": "medium",
    "prompt": "Multiplica: $(4 + 2i)(2 + 3i)$",
    "options": [
      {
        "latex": "2 - 16i",
        "correct": false
      },
      {
        "latex": "4 + 16i",
        "correct": false
      },
      {
        "latex": "8 + 6i",
        "correct": false
      },
      {
        "latex": "2 + 16i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando: $(4)(2) + (4)(3i) + (2i)(2) + (2i)(3i) = 8 + 12i + 4i - 6 = 2 + 16i$."
  },
  {
    "id": "compop-m-49",
    "difficulty": "medium",
    "prompt": "Calcula: $(5 + 3i)^2$",
    "options": [
      {
        "latex": "34 + 30i",
        "correct": false
      },
      {
        "latex": "25 - 9i",
        "correct": false
      },
      {
        "latex": "16 - 30i",
        "correct": false
      },
      {
        "latex": "16 + 30i",
        "correct": true
      }
    ],
    "explanation": "Desarrollando: $5^2 + 2(5)(3i) + (3i)^2 = 25 + 30i - 9 = 16 + 30i$."
  },
  {
    "id": "compop-m-50",
    "difficulty": "medium",
    "prompt": "Multiplica $(1 + 4i)$ por su conjugado $(1 - 4i)$",
    "options": [
      {
        "latex": "-15",
        "correct": false
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "17i",
        "correct": false
      },
      {
        "latex": "17",
        "correct": true
      }
    ],
    "explanation": "El producto de un complejo por su conjugado es real: $a^2 + b^2 = 1^2 + 4^2 = 1 + 16 = 17$."
  },
  {
    "id": "compop-h-01",
    "difficulty": "hard",
    "prompt": "Divide: $\\frac{1 + i}{1 - i}$",
    "options": [
      {
        "latex": "i",
        "correct": true
      },
      {
        "latex": "-i",
        "correct": false
      },
      {
        "latex": "1",
        "correct": false
      },
      {
        "latex": "2i",
        "correct": false
      }
    ],
    "explanation": "Multiplica por el conjugado: $\\frac{(1+i)(1+i)}{(1-i)(1+i)} = \\frac{2i}{2} = i$."
  },
  {
    "id": "compop-h-02",
    "difficulty": "hard",
    "prompt": "Divide: $\\frac{2 + 3i}{1 + i}$",
    "options": [
      {
        "latex": "\\frac{5}{2} + \\frac{1}{2}i",
        "correct": true
      },
      {
        "latex": "\\frac{5}{2} - \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "1 + i",
        "correct": false
      },
      {
        "latex": "2 + i",
        "correct": false
      }
    ],
    "explanation": "$\\frac{(2+3i)(1-i)}{(1+i)(1-i)} = \\frac{5 + i}{2} = \\frac{5}{2} + \\frac{1}{2}i$."
  },
  {
    "id": "compop-h-03",
    "difficulty": "hard",
    "prompt": "¿Cuánto vale $i^4$?",
    "options": [
      {
        "latex": "1",
        "correct": true
      },
      {
        "latex": "-1",
        "correct": false
      },
      {
        "latex": "i",
        "correct": false
      },
      {
        "latex": "-i",
        "correct": false
      }
    ],
    "explanation": "$i^4 = (i^2)^2 = (-1)^2 = 1$."
  },
  {
    "id": "compop-h-04",
    "difficulty": "hard",
    "prompt": "Simplifica: $(1 + i)^2$",
    "options": [
      {
        "latex": "2i",
        "correct": true
      },
      {
        "latex": "2",
        "correct": false
      },
      {
        "latex": "1 + 2i",
        "correct": false
      },
      {
        "latex": "-2i",
        "correct": false
      }
    ],
    "explanation": "$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$."
  },
  {
    "id": "compop-h-05",
    "difficulty": "hard",
    "prompt": "Divide: $\\frac{4 + 2i}{2}$",
    "options": [
      {
        "latex": "2 + i",
        "correct": true
      },
      {
        "latex": "2 - i",
        "correct": false
      },
      {
        "latex": "4 + i",
        "correct": false
      },
      {
        "latex": "2 + 2i",
        "correct": false
      }
    ],
    "explanation": "$\\frac{4}{2} + \\frac{2i}{2} = 2 + i$."
  },
  {
    "id": "compop-h-06",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 1i}$",
    "options": [
      {
        "latex": "3 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{10} - \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} + \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} - \\frac{1}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-1i}{(3+1i)(3-1i)} = \\frac{3-1i}{9+1} = \\frac{3}{10} - \\frac{1}{10}i$."
  },
  {
    "id": "compop-h-07",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 2i}$",
    "options": [
      {
        "latex": "\\frac{4}{20} + \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{20} - \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "4 - 2i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{20} - \\frac{2}{20}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-2i}{(4+2i)(4-2i)} = \\frac{4-2i}{16+4} = \\frac{4}{20} - \\frac{2}{20}i$."
  },
  {
    "id": "compop-h-08",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 3i}$",
    "options": [
      {
        "latex": "\\frac{1}{10} + \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{10} - \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "1 - 3i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} - \\frac{3}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-3i}{(1+3i)(1-3i)} = \\frac{1-3i}{1+9} = \\frac{1}{10} - \\frac{3}{10}i$."
  },
  {
    "id": "compop-h-09",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 1i}$",
    "options": [
      {
        "latex": "2 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{5} - \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} + \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} - \\frac{1}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-1i}{(2+1i)(2-1i)} = \\frac{2-1i}{4+1} = \\frac{2}{5} - \\frac{1}{5}i$."
  },
  {
    "id": "compop-h-10",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 2i}$",
    "options": [
      {
        "latex": "\\frac{3}{13} + \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "3 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{13} - \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{13} - \\frac{2}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-2i}{(3+2i)(3-2i)} = \\frac{3-2i}{9+4} = \\frac{3}{13} - \\frac{2}{13}i$."
  },
  {
    "id": "compop-h-11",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 3i}$",
    "options": [
      {
        "latex": "\\frac{4}{25} + \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "4 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{25} - \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{25} - \\frac{3}{25}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-3i}{(4+3i)(4-3i)} = \\frac{4-3i}{16+9} = \\frac{4}{25} - \\frac{3}{25}i$."
  },
  {
    "id": "compop-h-12",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 1i}$",
    "options": [
      {
        "latex": "\\frac{1}{2} + \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} - \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "1 - 1i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2} - \\frac{1}{2}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-1i}{(1+1i)(1-1i)} = \\frac{1-1i}{1+1} = \\frac{1}{2} - \\frac{1}{2}i$."
  },
  {
    "id": "compop-h-13",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 2i}$",
    "options": [
      {
        "latex": "\\frac{2}{8} + \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "2 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{8} - \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} - \\frac{2}{8}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-2i}{(2+2i)(2-2i)} = \\frac{2-2i}{4+4} = \\frac{2}{8} - \\frac{2}{8}i$."
  },
  {
    "id": "compop-h-14",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 3i}$",
    "options": [
      {
        "latex": "\\frac{3}{18} + \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "3 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{18} - \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{18} - \\frac{3}{18}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-3i}{(3+3i)(3-3i)} = \\frac{3-3i}{9+9} = \\frac{3}{18} - \\frac{3}{18}i$."
  },
  {
    "id": "compop-h-15",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 1i}$",
    "options": [
      {
        "latex": "\\frac{4}{17} + \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "4 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{17} - \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{17} - \\frac{1}{17}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-1i}{(4+1i)(4-1i)} = \\frac{4-1i}{16+1} = \\frac{4}{17} - \\frac{1}{17}i$."
  },
  {
    "id": "compop-h-16",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 2i}$",
    "options": [
      {
        "latex": "\\frac{1}{5} + \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5} - \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "1 - 2i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5} - \\frac{2}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-2i}{(1+2i)(1-2i)} = \\frac{1-2i}{1+4} = \\frac{1}{5} - \\frac{2}{5}i$."
  },
  {
    "id": "compop-h-17",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 3i}$",
    "options": [
      {
        "latex": "\\frac{2}{13} + \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "2 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{13} - \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{13} - \\frac{3}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-3i}{(2+3i)(2-3i)} = \\frac{2-3i}{4+9} = \\frac{2}{13} - \\frac{3}{13}i$."
  },
  {
    "id": "compop-h-18",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 1i}$",
    "options": [
      {
        "latex": "\\frac{3}{10} + \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "3 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{10} - \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} - \\frac{1}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-1i}{(3+1i)(3-1i)} = \\frac{3-1i}{9+1} = \\frac{3}{10} - \\frac{1}{10}i$."
  },
  {
    "id": "compop-h-19",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 2i}$",
    "options": [
      {
        "latex": "\\frac{4}{20} + \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "4 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{20} - \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{20} - \\frac{2}{20}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-2i}{(4+2i)(4-2i)} = \\frac{4-2i}{16+4} = \\frac{4}{20} - \\frac{2}{20}i$."
  },
  {
    "id": "compop-h-20",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 3i}$",
    "options": [
      {
        "latex": "\\frac{1}{10} + \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "1 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{10} - \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} - \\frac{3}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-3i}{(1+3i)(1-3i)} = \\frac{1-3i}{1+9} = \\frac{1}{10} - \\frac{3}{10}i$."
  },
  {
    "id": "compop-h-21",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 1i}$",
    "options": [
      {
        "latex": "2 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{5} - \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} + \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} - \\frac{1}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-1i}{(2+1i)(2-1i)} = \\frac{2-1i}{4+1} = \\frac{2}{5} - \\frac{1}{5}i$."
  },
  {
    "id": "compop-h-22",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 2i}$",
    "options": [
      {
        "latex": "\\frac{3}{13} + \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{13} - \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "3 - 2i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{13} - \\frac{2}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-2i}{(3+2i)(3-2i)} = \\frac{3-2i}{9+4} = \\frac{3}{13} - \\frac{2}{13}i$."
  },
  {
    "id": "compop-h-23",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 3i}$",
    "options": [
      {
        "latex": "\\frac{4}{25} + \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{25} - \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "4 - 3i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{25} - \\frac{3}{25}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-3i}{(4+3i)(4-3i)} = \\frac{4-3i}{16+9} = \\frac{4}{25} - \\frac{3}{25}i$."
  },
  {
    "id": "compop-h-24",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 1i}$",
    "options": [
      {
        "latex": "\\frac{1}{2} + \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "1 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} - \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2} - \\frac{1}{2}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-1i}{(1+1i)(1-1i)} = \\frac{1-1i}{1+1} = \\frac{1}{2} - \\frac{1}{2}i$."
  },
  {
    "id": "compop-h-25",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 2i}$",
    "options": [
      {
        "latex": "2 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{8} - \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} + \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} - \\frac{2}{8}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-2i}{(2+2i)(2-2i)} = \\frac{2-2i}{4+4} = \\frac{2}{8} - \\frac{2}{8}i$."
  },
  {
    "id": "compop-h-26",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 3i}$",
    "options": [
      {
        "latex": "\\frac{3}{18} + \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{18} - \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "3 - 3i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{18} - \\frac{3}{18}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-3i}{(3+3i)(3-3i)} = \\frac{3-3i}{9+9} = \\frac{3}{18} - \\frac{3}{18}i$."
  },
  {
    "id": "compop-h-27",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 1i}$",
    "options": [
      {
        "latex": "4 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{17} - \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{17} + \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{17} - \\frac{1}{17}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-1i}{(4+1i)(4-1i)} = \\frac{4-1i}{16+1} = \\frac{4}{17} - \\frac{1}{17}i$."
  },
  {
    "id": "compop-h-28",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 2i}$",
    "options": [
      {
        "latex": "1 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5} - \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5} + \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5} - \\frac{2}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-2i}{(1+2i)(1-2i)} = \\frac{1-2i}{1+4} = \\frac{1}{5} - \\frac{2}{5}i$."
  },
  {
    "id": "compop-h-29",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 3i}$",
    "options": [
      {
        "latex": "\\frac{2}{13} + \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "2 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{13} - \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{13} - \\frac{3}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-3i}{(2+3i)(2-3i)} = \\frac{2-3i}{4+9} = \\frac{2}{13} - \\frac{3}{13}i$."
  },
  {
    "id": "compop-h-30",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 1i}$",
    "options": [
      {
        "latex": "3 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{10} - \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} + \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} - \\frac{1}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-1i}{(3+1i)(3-1i)} = \\frac{3-1i}{9+1} = \\frac{3}{10} - \\frac{1}{10}i$."
  },
  {
    "id": "compop-h-31",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 2i}$",
    "options": [
      {
        "latex": "\\frac{4}{20} + \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{20} - \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "4 - 2i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{20} - \\frac{2}{20}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-2i}{(4+2i)(4-2i)} = \\frac{4-2i}{16+4} = \\frac{4}{20} - \\frac{2}{20}i$."
  },
  {
    "id": "compop-h-32",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 3i}$",
    "options": [
      {
        "latex": "1 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{10} - \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} + \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} - \\frac{3}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-3i}{(1+3i)(1-3i)} = \\frac{1-3i}{1+9} = \\frac{1}{10} - \\frac{3}{10}i$."
  },
  {
    "id": "compop-h-33",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 1i}$",
    "options": [
      {
        "latex": "\\frac{2}{5} + \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "2 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{5} - \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} - \\frac{1}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-1i}{(2+1i)(2-1i)} = \\frac{2-1i}{4+1} = \\frac{2}{5} - \\frac{1}{5}i$."
  },
  {
    "id": "compop-h-34",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 2i}$",
    "options": [
      {
        "latex": "\\frac{3}{13} + \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "3 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{13} - \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{13} - \\frac{2}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-2i}{(3+2i)(3-2i)} = \\frac{3-2i}{9+4} = \\frac{3}{13} - \\frac{2}{13}i$."
  },
  {
    "id": "compop-h-35",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 3i}$",
    "options": [
      {
        "latex": "\\frac{4}{25} + \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "4 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{25} - \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{25} - \\frac{3}{25}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-3i}{(4+3i)(4-3i)} = \\frac{4-3i}{16+9} = \\frac{4}{25} - \\frac{3}{25}i$."
  },
  {
    "id": "compop-h-36",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 1i}$",
    "options": [
      {
        "latex": "\\frac{1}{2} + \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} - \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "1 - 1i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2} - \\frac{1}{2}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-1i}{(1+1i)(1-1i)} = \\frac{1-1i}{1+1} = \\frac{1}{2} - \\frac{1}{2}i$."
  },
  {
    "id": "compop-h-37",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 2i}$",
    "options": [
      {
        "latex": "\\frac{2}{8} + \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "2 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{8} - \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} - \\frac{2}{8}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-2i}{(2+2i)(2-2i)} = \\frac{2-2i}{4+4} = \\frac{2}{8} - \\frac{2}{8}i$."
  },
  {
    "id": "compop-h-38",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 3i}$",
    "options": [
      {
        "latex": "\\frac{3}{18} + \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "3 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{18} - \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{18} - \\frac{3}{18}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-3i}{(3+3i)(3-3i)} = \\frac{3-3i}{9+9} = \\frac{3}{18} - \\frac{3}{18}i$."
  },
  {
    "id": "compop-h-39",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 1i}$",
    "options": [
      {
        "latex": "4 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{17} - \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{17} + \\frac{1}{17}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{17} - \\frac{1}{17}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-1i}{(4+1i)(4-1i)} = \\frac{4-1i}{16+1} = \\frac{4}{17} - \\frac{1}{17}i$."
  },
  {
    "id": "compop-h-40",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 2i}$",
    "options": [
      {
        "latex": "1 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{5} - \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5} + \\frac{2}{5}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{5} - \\frac{2}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-2i}{(1+2i)(1-2i)} = \\frac{1-2i}{1+4} = \\frac{1}{5} - \\frac{2}{5}i$."
  },
  {
    "id": "compop-h-41",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 3i}$",
    "options": [
      {
        "latex": "\\frac{2}{13} + \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{13} - \\frac{3}{13}i",
        "correct": false
      },
      {
        "latex": "2 - 3i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{13} - \\frac{3}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-3i}{(2+3i)(2-3i)} = \\frac{2-3i}{4+9} = \\frac{2}{13} - \\frac{3}{13}i$."
  },
  {
    "id": "compop-h-42",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 1i}$",
    "options": [
      {
        "latex": "\\frac{3}{10} + \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{10} - \\frac{1}{10}i",
        "correct": false
      },
      {
        "latex": "3 - 1i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{10} - \\frac{1}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-1i}{(3+1i)(3-1i)} = \\frac{3-1i}{9+1} = \\frac{3}{10} - \\frac{1}{10}i$."
  },
  {
    "id": "compop-h-43",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 2i}$",
    "options": [
      {
        "latex": "4 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{20} - \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{20} + \\frac{2}{20}i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{20} - \\frac{2}{20}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-2i}{(4+2i)(4-2i)} = \\frac{4-2i}{16+4} = \\frac{4}{20} - \\frac{2}{20}i$."
  },
  {
    "id": "compop-h-44",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 3i}$",
    "options": [
      {
        "latex": "1 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{10} - \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} + \\frac{3}{10}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{10} - \\frac{3}{10}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-3i}{(1+3i)(1-3i)} = \\frac{1-3i}{1+9} = \\frac{1}{10} - \\frac{3}{10}i$."
  },
  {
    "id": "compop-h-45",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 1i}$",
    "options": [
      {
        "latex": "\\frac{2}{5} + \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{5} - \\frac{1}{5}i",
        "correct": false
      },
      {
        "latex": "2 - 1i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{5} - \\frac{1}{5}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-1i}{(2+1i)(2-1i)} = \\frac{2-1i}{4+1} = \\frac{2}{5} - \\frac{1}{5}i$."
  },
  {
    "id": "compop-h-46",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 2i}$",
    "options": [
      {
        "latex": "\\frac{3}{13} + \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{13} - \\frac{2}{13}i",
        "correct": false
      },
      {
        "latex": "3 - 2i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{13} - \\frac{2}{13}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-2i}{(3+2i)(3-2i)} = \\frac{3-2i}{9+4} = \\frac{3}{13} - \\frac{2}{13}i$."
  },
  {
    "id": "compop-h-47",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{4 + 3i}$",
    "options": [
      {
        "latex": "\\frac{4}{25} + \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "-\\frac{4}{25} - \\frac{3}{25}i",
        "correct": false
      },
      {
        "latex": "4 - 3i",
        "correct": false
      },
      {
        "latex": "\\frac{4}{25} - \\frac{3}{25}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{4-3i}{(4+3i)(4-3i)} = \\frac{4-3i}{16+9} = \\frac{4}{25} - \\frac{3}{25}i$."
  },
  {
    "id": "compop-h-48",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{1 + 1i}$",
    "options": [
      {
        "latex": "\\frac{1}{2} + \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "1 - 1i",
        "correct": false
      },
      {
        "latex": "-\\frac{1}{2} - \\frac{1}{2}i",
        "correct": false
      },
      {
        "latex": "\\frac{1}{2} - \\frac{1}{2}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{1-1i}{(1+1i)(1-1i)} = \\frac{1-1i}{1+1} = \\frac{1}{2} - \\frac{1}{2}i$."
  },
  {
    "id": "compop-h-49",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{2 + 2i}$",
    "options": [
      {
        "latex": "2 - 2i",
        "correct": false
      },
      {
        "latex": "-\\frac{2}{8} - \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} + \\frac{2}{8}i",
        "correct": false
      },
      {
        "latex": "\\frac{2}{8} - \\frac{2}{8}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{2-2i}{(2+2i)(2-2i)} = \\frac{2-2i}{4+4} = \\frac{2}{8} - \\frac{2}{8}i$."
  },
  {
    "id": "compop-h-50",
    "difficulty": "hard",
    "prompt": "Calcula el inverso multiplicativo: $\\frac{1}{3 + 3i}$",
    "options": [
      {
        "latex": "\\frac{3}{18} + \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "3 - 3i",
        "correct": false
      },
      {
        "latex": "-\\frac{3}{18} - \\frac{3}{18}i",
        "correct": false
      },
      {
        "latex": "\\frac{3}{18} - \\frac{3}{18}i",
        "correct": true
      }
    ],
    "explanation": "Multiplicando por el conjugado: $\\frac{3-3i}{(3+3i)(3-3i)} = \\frac{3-3i}{9+9} = \\frac{3}{18} - \\frac{3}{18}i$."
  }
]
};
