// data/algebra/productos-notables/factor-comun.js
// Catálogo ampliado a 39 preguntas (13 fáciles, 13 medias, 13 difíciles).

export default {
  lawId: "factor-comun",
  lawName: "Factor común",
  lawFormula: "ka + kb + kc = k(a + b + c)",
  prerequisites: "Conocer la propiedad distributiva.",
  available: true,
  questions: [
  {
    "id": "faccom-f-01",
    "difficulty": "easy",
    "prompt": "Factoriza: $3x + 6$",
    "options": [
      {
        "latex": "3(x + 2)",
        "correct": true
      },
      {
        "latex": "3x(1 + 2)",
        "correct": false
      },
      {
        "latex": "6(x + 1)",
        "correct": false
      },
      {
        "latex": "3(x + 6)",
        "correct": false
      }
    ],
    "explanation": "El factor común es 3: $3x + 6 = 3(x + 2)$."
  },
  {
    "id": "faccom-f-02",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + x$",
    "options": [
      {
        "latex": "x(x + 1)",
        "correct": true
      },
      {
        "latex": "x(x^2 + 1)",
        "correct": false
      },
      {
        "latex": "2x(x + 1)",
        "correct": false
      },
      {
        "latex": "x(2x)",
        "correct": false
      }
    ],
    "explanation": "El factor común es $x$: $x^2 + x = x(x + 1)$."
  },
  {
    "id": "faccom-f-03",
    "difficulty": "easy",
    "prompt": "Factoriza: $5a + 5b$",
    "options": [
      {
        "latex": "5(a + b)",
        "correct": true
      },
      {
        "latex": "5(ab)",
        "correct": false
      },
      {
        "latex": "10(a + b)",
        "correct": false
      },
      {
        "latex": "5a(1 + b)",
        "correct": false
      }
    ],
    "explanation": "El factor común es 5: $5a + 5b = 5(a + b)$."
  },
  {
    "id": "faccom-f-04",
    "difficulty": "easy",
    "prompt": "Factoriza: $2x + 4y$",
    "options": [
      {
        "latex": "2(x + 2y)",
        "correct": true
      },
      {
        "latex": "2(2x + y)",
        "correct": false
      },
      {
        "latex": "4(x + y)",
        "correct": false
      },
      {
        "latex": "2x(1 + 2y)",
        "correct": false
      }
    ],
    "explanation": "El factor común es 2: $2x + 4y = 2(x + 2y)$."
  },
  {
    "id": "faccom-f-05",
    "difficulty": "easy",
    "prompt": "Factoriza: $7x - 7$",
    "options": [
      {
        "latex": "7(x - 1)",
        "correct": true
      },
      {
        "latex": "7(x + 1)",
        "correct": false
      },
      {
        "latex": "7x(1 - 1)",
        "correct": false
      },
      {
        "latex": "7(x - 7)",
        "correct": false
      }
    ],
    "explanation": "El factor común es 7: $7x - 7 = 7(x - 1)$."
  },
  {
    "id": "faccom-f-06",
    "difficulty": "easy",
    "prompt": "Factoriza: $4x + 12$",
    "options": [
      {
        "latex": "2(2x + 6)",
        "correct": false
      },
      {
        "latex": "x(4 + 12)",
        "correct": false
      },
      {
        "latex": "4(x + 12)",
        "correct": false
      },
      {
        "latex": "4(x + 3)",
        "correct": true
      }
    ],
    "explanation": "MCD de 4 y 12 es 4: $4(x+3)$."
  },
  {
    "id": "faccom-f-07",
    "difficulty": "easy",
    "prompt": "Factoriza: $5x - 25$",
    "options": [
      {
        "latex": "5(x - 25)",
        "correct": false
      },
      {
        "latex": "x(5 - 25)",
        "correct": false
      },
      {
        "latex": "5(x + 5)",
        "correct": false
      },
      {
        "latex": "5(x - 5)",
        "correct": true
      }
    ],
    "explanation": "MCD es 5: $5(x-5)$."
  },
  {
    "id": "faccom-f-08",
    "difficulty": "easy",
    "prompt": "Factoriza: $7y + 21$",
    "options": [
      {
        "latex": "7(y + 7)",
        "correct": false
      },
      {
        "latex": "7(y + 21)",
        "correct": false
      },
      {
        "latex": "y(7 + 21)",
        "correct": false
      },
      {
        "latex": "7(y + 3)",
        "correct": true
      }
    ],
    "explanation": "MCD es 7: $7(y+3)$."
  },
  {
    "id": "faccom-f-09",
    "difficulty": "easy",
    "prompt": "Factoriza: $8a - 16$",
    "options": [
      {
        "latex": "4(2a - 4)",
        "correct": false
      },
      {
        "latex": "8(a - 16)",
        "correct": false
      },
      {
        "latex": "8(a + 2)",
        "correct": false
      },
      {
        "latex": "8(a - 2)",
        "correct": true
      }
    ],
    "explanation": "MCD es 8: $8(a-2)$."
  },
  {
    "id": "faccom-f-10",
    "difficulty": "easy",
    "prompt": "Factoriza: $9m + 27$",
    "options": [
      {
        "latex": "9(m - 3)",
        "correct": false
      },
      {
        "latex": "3(3m + 9)",
        "correct": false
      },
      {
        "latex": "9(m + 27)",
        "correct": false
      },
      {
        "latex": "9(m + 3)",
        "correct": true
      }
    ],
    "explanation": "MCD es 9: $9(m+3)$."
  },
  {
    "id": "faccom-f-11",
    "difficulty": "easy",
    "prompt": "Factoriza: $6b - 18$",
    "options": [
      {
        "latex": "3(2b - 6)",
        "correct": false
      },
      {
        "latex": "6(b - 18)",
        "correct": false
      },
      {
        "latex": "6(b + 3)",
        "correct": false
      },
      {
        "latex": "6(b - 3)",
        "correct": true
      }
    ],
    "explanation": "MCD es 6: $6(b-3)$."
  },
  {
    "id": "faccom-f-12",
    "difficulty": "easy",
    "prompt": "Factoriza: $10z + 50$",
    "options": [
      {
        "latex": "10(z - 5)",
        "correct": false
      },
      {
        "latex": "10(z + 50)",
        "correct": false
      },
      {
        "latex": "5(2z + 10)",
        "correct": false
      },
      {
        "latex": "10(z + 5)",
        "correct": true
      }
    ],
    "explanation": "MCD es 10: $10(z+5)$."
  },
  {
    "id": "faccom-f-13",
    "difficulty": "easy",
    "prompt": "Factoriza: $x^2 + 5x$",
    "options": [
      {
        "latex": "x(x - 5)",
        "correct": false
      },
      {
        "latex": "5(x + 1)",
        "correct": false
      },
      {
        "latex": "x^2(1 + 5)",
        "correct": false
      },
      {
        "latex": "x(x + 5)",
        "correct": true
      }
    ],
    "explanation": "Factor común monomio $x$: $x(x+5)$."
  },
  {
    "id": "faccom-m-01",
    "difficulty": "medium",
    "prompt": "Factoriza: $6x^2 + 9x$",
    "options": [
      {
        "latex": "3x(2x + 3)",
        "correct": true
      },
      {
        "latex": "3(2x^2 + 3x)",
        "correct": false
      },
      {
        "latex": "6x(x + 3)",
        "correct": false
      },
      {
        "latex": "3x(2x^2 + 3)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es $3x$: $6x^2 + 9x = 3x(2x + 3)$."
  },
  {
    "id": "faccom-m-02",
    "difficulty": "medium",
    "prompt": "Factoriza: $4x^3 - 8x^2$",
    "options": [
      {
        "latex": "4x^2(x - 2)",
        "correct": true
      },
      {
        "latex": "4x(x^2 - 2x)",
        "correct": false
      },
      {
        "latex": "4x^2(x^2 - 2)",
        "correct": false
      },
      {
        "latex": "2x^2(2x - 4)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es $4x^2$: $4x^3 - 8x^2 = 4x^2(x - 2)$."
  },
  {
    "id": "faccom-m-03",
    "difficulty": "medium",
    "prompt": "Factoriza: $ax + ay$",
    "options": [
      {
        "latex": "a(x + y)",
        "correct": true
      },
      {
        "latex": "a(xy)",
        "correct": false
      },
      {
        "latex": "x(a + y)",
        "correct": false
      },
      {
        "latex": "a(x + y + a)",
        "correct": false
      }
    ],
    "explanation": "El factor común es $a$: $ax + ay = a(x + y)$."
  },
  {
    "id": "faccom-m-04",
    "difficulty": "medium",
    "prompt": "Factoriza: $5x^2 + 10xy$",
    "options": [
      {
        "latex": "5x(x + 2y)",
        "correct": true
      },
      {
        "latex": "5x(x + y)",
        "correct": false
      },
      {
        "latex": "10x(x + y)",
        "correct": false
      },
      {
        "latex": "5(x^2 + 2y)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es $5x$: $5x^2 + 10xy = 5x(x + 2y)$."
  },
  {
    "id": "faccom-m-05",
    "difficulty": "medium",
    "prompt": "Factoriza: $12x - 18y$",
    "options": [
      {
        "latex": "6(2x - 3y)",
        "correct": true
      },
      {
        "latex": "6(2x + 3y)",
        "correct": false
      },
      {
        "latex": "3(4x - 6y)",
        "correct": false
      },
      {
        "latex": "6(12x - 18y)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es 6: $12x - 18y = 6(2x - 3y)$."
  },
  {
    "id": "faccom-m-06",
    "difficulty": "medium",
    "prompt": "Factoriza: $12x^3 - 8x^2$",
    "options": [
      {
        "latex": "2x^2(6x - 4)",
        "correct": false
      },
      {
        "latex": "4x^2(3x + 2)",
        "correct": false
      },
      {
        "latex": "4x(3x^2 - 2x)",
        "correct": false
      },
      {
        "latex": "4x^2(3x - 2)",
        "correct": true
      }
    ],
    "explanation": "MCD(12,8)=4 y menor potencia es $x^2$: $4x^2(3x-2)$."
  },
  {
    "id": "faccom-m-07",
    "difficulty": "medium",
    "prompt": "Factoriza: $15a^4b^2 + 25a^2b^3$",
    "options": [
      {
        "latex": "5a^2b^2(3a^2 - 5b)",
        "correct": false
      },
      {
        "latex": "25a^2b^2(3a^2 + b)",
        "correct": false
      },
      {
        "latex": "5ab(3a^3b + 5ab^2)",
        "correct": false
      },
      {
        "latex": "5a^2b^2(3a^2 + 5b)",
        "correct": true
      }
    ],
    "explanation": "MCD=5, $a^2$, $b^2$: $5a^2b^2(3a^2+5b)$."
  },
  {
    "id": "faccom-m-08",
    "difficulty": "medium",
    "prompt": "Factoriza: $18x^5 - 24x^3 + 12x^2$",
    "options": [
      {
        "latex": "6x(3x^4 - 4x^2 + 2x)",
        "correct": false
      },
      {
        "latex": "3x^2(6x^3 - 8x + 4)",
        "correct": false
      },
      {
        "latex": "6x^2(3x^3 - 4x)",
        "correct": false
      },
      {
        "latex": "6x^2(3x^3 - 4x + 2)",
        "correct": true
      }
    ],
    "explanation": "MCD de 18, 24 y 12 es 6, menor potencia $x^2$: $6x^2(3x^3 - 4x + 2)$."
  },
  {
    "id": "faccom-m-09",
    "difficulty": "medium",
    "prompt": "Factoriza: $14u^3v - 21u^2v^2$",
    "options": [
      {
        "latex": "7uv(2u^2 - 3uv)",
        "correct": false
      },
      {
        "latex": "7u^2v(2u + 3v)",
        "correct": false
      },
      {
        "latex": "14u^2v(u - 3v)",
        "correct": false
      },
      {
        "latex": "7u^2v(2u - 3v)",
        "correct": true
      }
    ],
    "explanation": "MCD=7, $u^2$, $v$: $7u^2v(2u-3v)$."
  },
  {
    "id": "faccom-m-10",
    "difficulty": "medium",
    "prompt": "Factoriza: $a(x+2) + b(x+2)$",
    "options": [
      {
        "latex": "(x + 2)(a - b)",
        "correct": false
      },
      {
        "latex": "(x + 2)ab",
        "correct": false
      },
      {
        "latex": "(x - 2)(a + b)",
        "correct": false
      },
      {
        "latex": "(x + 2)(a + b)",
        "correct": true
      }
    ],
    "explanation": "Factor común polinomio $(x+2)$: $(x+2)(a+b)$."
  },
  {
    "id": "faccom-m-11",
    "difficulty": "medium",
    "prompt": "Factoriza: $3m(2x-1) - 5(2x-1)$",
    "options": [
      {
        "latex": "(2x - 1)(3m + 5)",
        "correct": false
      },
      {
        "latex": "(2x - 1)(15m)",
        "correct": false
      },
      {
        "latex": "(2x + 1)(3m - 5)",
        "correct": false
      },
      {
        "latex": "(2x - 1)(3m - 5)",
        "correct": true
      }
    ],
    "explanation": "Factor común polinomio $(2x-1)$: $(2x-1)(3m-5)$."
  },
  {
    "id": "faccom-m-12",
    "difficulty": "medium",
    "prompt": "Factoriza por agrupación: $ax + ay + bx + by$",
    "options": [
      {
        "latex": "(x - y)(a - b)",
        "correct": false
      },
      {
        "latex": "xy(a + b)",
        "correct": false
      },
      {
        "latex": "(x + y)(a - b)",
        "correct": false
      },
      {
        "latex": "(x + y)(a + b)",
        "correct": true
      }
    ],
    "explanation": "$a(x+y) + b(x+y) = (x+y)(a+b)$."
  },
  {
    "id": "faccom-m-13",
    "difficulty": "medium",
    "prompt": "Factoriza por agrupación: $2x^3 - 3x^2 + 4x - 6$",
    "options": [
      {
        "latex": "(2x - 3)(x^2 - 2)",
        "correct": false
      },
      {
        "latex": "(2x - 3)(2x^2 + 2)",
        "correct": false
      },
      {
        "latex": "(2x + 3)(x^2 + 2)",
        "correct": false
      },
      {
        "latex": "(2x - 3)(x^2 + 2)",
        "correct": true
      }
    ],
    "explanation": "$x^2(2x-3) + 2(2x-3) = (2x-3)(x^2+2)$."
  },
  {
    "id": "faccom-h-01",
    "difficulty": "hard",
    "prompt": "Factoriza: $2x^3 + 4x^2 + 6x$",
    "options": [
      {
        "latex": "2x(x^2 + 2x + 3)",
        "correct": true
      },
      {
        "latex": "2(x^3 + 2x^2 + 3x)",
        "correct": false
      },
      {
        "latex": "2x(x^2 + 2x + 6)",
        "correct": false
      },
      {
        "latex": "2x^2(x + 2 + 3)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es $2x$: $2x^3 + 4x^2 + 6x = 2x(x^2 + 2x + 3)$."
  },
  {
    "id": "faccom-h-02",
    "difficulty": "hard",
    "prompt": "Factoriza: $ab + ac + ad$",
    "options": [
      {
        "latex": "a(b + c + d)",
        "correct": true
      },
      {
        "latex": "a(bcd)",
        "correct": false
      },
      {
        "latex": "a(b + c) + d",
        "correct": false
      },
      {
        "latex": "a(b + c + d + a)",
        "correct": false
      }
    ],
    "explanation": "El factor común es $a$: $ab + ac + ad = a(b + c + d)$."
  },
  {
    "id": "faccom-h-03",
    "difficulty": "hard",
    "prompt": "Factoriza: $x(a + b) + y(a + b)$",
    "options": [
      {
        "latex": "(a + b)(x + y)",
        "correct": true
      },
      {
        "latex": "(a + b)(xy)",
        "correct": false
      },
      {
        "latex": "(x + y)(a + b + 1)",
        "correct": false
      },
      {
        "latex": "(a + b)^2(x + y)",
        "correct": false
      }
    ],
    "explanation": "El factor común es $(a+b)$: $x(a+b) + y(a+b) = (a+b)(x+y)$."
  },
  {
    "id": "faccom-h-04",
    "difficulty": "hard",
    "prompt": "Factoriza: $6x^2y + 9xy^2$",
    "options": [
      {
        "latex": "3xy(2x + 3y)",
        "correct": true
      },
      {
        "latex": "3xy(2 + 3)",
        "correct": false
      },
      {
        "latex": "6xy(x + y)",
        "correct": false
      },
      {
        "latex": "3x^2y^2(2 + 3)",
        "correct": false
      }
    ],
    "explanation": "El máximo factor común es $3xy$: $6x^2y + 9xy^2 = 3xy(2x + 3y)$."
  },
  {
    "id": "faccom-h-05",
    "difficulty": "hard",
    "prompt": "Factoriza por agrupación: $x^2 - 3x + 5x - 15$",
    "options": [
      {
        "latex": "(x + 5)(x - 3)",
        "correct": true
      },
      {
        "latex": "(x - 5)(x + 3)",
        "correct": false
      },
      {
        "latex": "(x + 5)(x + 3)",
        "correct": false
      },
      {
        "latex": "(x - 5)(x - 3)",
        "correct": false
      }
    ],
    "explanation": "Agrupa: $x(x-3) + 5(x-3) = (x-3)(x+5)$."
  },
  {
    "id": "faccom-h-06",
    "difficulty": "hard",
    "prompt": "Factoriza: $x^{n+2} + 3x^n$",
    "options": [
      {
        "latex": "x^2(x^n + 3)",
        "correct": false
      },
      {
        "latex": "x^{2n}(1 + 3)",
        "correct": false
      },
      {
        "latex": "x^n(x + 3)",
        "correct": false
      },
      {
        "latex": "x^n(x^2 + 3)",
        "correct": true
      }
    ],
    "explanation": "Extraemos la menor potencia $x^n$: $x^n(x^2+3)$."
  },
  {
    "id": "faccom-h-07",
    "difficulty": "hard",
    "prompt": "Factoriza por agrupación: $x^3 + x^2 + x + 1$",
    "options": [
      {
        "latex": "(x - 1)(x^2 + 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^3",
        "correct": false
      },
      {
        "latex": "(x + 1)(x^2 - 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)(x^2 + 1)",
        "correct": true
      }
    ],
    "explanation": "$x^2(x+1) + 1(x+1) = (x+1)(x^2+1)$."
  },
  {
    "id": "faccom-h-08",
    "difficulty": "hard",
    "prompt": "Factoriza: $2e^{2x} + 4e^x$",
    "options": [
      {
        "latex": "2e^x(e^x + 4)",
        "correct": false
      },
      {
        "latex": "2(e^{2x} + 2e^x)",
        "correct": false
      },
      {
        "latex": "e^x(2e^x + 2)",
        "correct": false
      },
      {
        "latex": "2e^x(e^x + 2)",
        "correct": true
      }
    ],
    "explanation": "Factor común $2e^x$: $2e^x(e^x+2)$."
  },
  {
    "id": "faccom-h-09",
    "difficulty": "hard",
    "prompt": "Factoriza: $x(a-b) + y(b-a)$",
    "options": [
      {
        "latex": "(a - b)(x + y)",
        "correct": false
      },
      {
        "latex": "(a + b)(x - y)",
        "correct": false
      },
      {
        "latex": "(b - a)(x - y)",
        "correct": false
      },
      {
        "latex": "(a - b)(x - y)",
        "correct": true
      }
    ],
    "explanation": "Como $(b-a) = -(a-b)$, reescribimos $x(a-b) - y(a-b) = (a-b)(x-y)$."
  },
  {
    "id": "faccom-h-10",
    "difficulty": "hard",
    "prompt": "Factoriza: $a^2b^2c + ab^3c^2 - a^3bc^2$",
    "options": [
      {
        "latex": "a^2b^2c(1 + bc - ac)",
        "correct": false
      },
      {
        "latex": "abc(a + b - c)",
        "correct": false
      },
      {
        "latex": "ab(ab + b^2c - a^2c)",
        "correct": false
      },
      {
        "latex": "abc(ab + b^2c - a^2c)",
        "correct": true
      }
    ],
    "explanation": "MCD es $abc$: $abc(ab + b^2c - a^2c)$."
  },
  {
    "id": "faccom-h-11",
    "difficulty": "hard",
    "prompt": "Factoriza por agrupación: $xy - 2y + 3x - 6$",
    "options": [
      {
        "latex": "(x + 2)(y - 3)",
        "correct": false
      },
      {
        "latex": "(x + 3)(y - 2)",
        "correct": false
      },
      {
        "latex": "(x - 2)(y - 3)",
        "correct": false
      },
      {
        "latex": "(x - 2)(y + 3)",
        "correct": true
      }
    ],
    "explanation": "$y(x-2) + 3(x-2) = (x-2)(y+3)$."
  },
  {
    "id": "faccom-h-12",
    "difficulty": "hard",
    "prompt": "Factoriza: $(x+1)^3 - 2(x+1)^2$",
    "options": [
      {
        "latex": "(x + 1)^2(x + 1 - 2)",
        "correct": false
      },
      {
        "latex": "(x + 1)(x - 1)",
        "correct": false
      },
      {
        "latex": "(x + 1)^2(x + 3)",
        "correct": false
      },
      {
        "latex": "(x + 1)^2(x - 1)",
        "correct": true
      }
    ],
    "explanation": "Factor común $(x+1)^2$: $(x+1)^2[(x+1)-2] = (x+1)^2(x-1)$."
  },
  {
    "id": "faccom-h-13",
    "difficulty": "hard",
    "prompt": "Factoriza: $6x^{a+1}y^b - 9x^ay^{b+2}$",
    "options": [
      {
        "latex": "3x^ay^b(2x^a - 3y^b)",
        "correct": false
      },
      {
        "latex": "3xy(2x^a - 3y^b)",
        "correct": false
      },
      {
        "latex": "9x^ay^b(2x - 3y^2)",
        "correct": false
      },
      {
        "latex": "3x^ay^b(2x - 3y^2)",
        "correct": true
      }
    ],
    "explanation": "MCD numérico 3, variables con menor exponente $x^a y^b$: $3x^ay^b(2x - 3y^2)$."
  }
]
};
