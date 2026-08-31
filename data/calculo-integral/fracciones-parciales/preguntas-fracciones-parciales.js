// data/calculo-integral/fracciones-parciales/preguntas-fracciones-parciales.js
// Pool de fracciones parciales. 30 preguntas: 10 easy / 12 medium / 8 hard.

export default [
  // ================= Fáciles (10) =================
  {
    id: 'fra-f-01',
    difficulty: 'easy',
    prompt: '¿Qué descomposición corresponde a $\\frac{1}{(x+1)(x+2)}$?',
    options: [
      { latex: '\\frac{A}{x+1} + \\frac{B}{x+2}', correct: true },
      { latex: '\\frac{Ax + B}{(x+1)(x+2)}', correct: false },
      { latex: '\\frac{A}{(x+1)^2} + \\frac{B}{(x+2)^2}', correct: false },
      { latex: '\\frac{A}{x+1}\\cdot\\frac{B}{x+2}', correct: false }
    ],
    explanation: 'Factores lineales distintos: un término simple por cada factor.'
  },
  {
    id: 'fra-f-02',
    difficulty: 'easy',
    prompt: '¿Qué descomposición corresponde a $\\frac{1}{(x+1)^2}$?',
    options: [
      { latex: '\\frac{A}{x+1} + \\frac{B}{(x+1)^2}', correct: true },
      { latex: '\\frac{A}{(x+1)^2}', correct: false },
      { latex: '\\frac{A}{x+1} + \\frac{B}{x+1}', correct: false },
      { latex: '\\frac{Ax + B}{(x+1)^2}', correct: false }
    ],
    explanation: 'Factor lineal repetido: un término por cada potencia hasta la del factor.'
  },
  {
    id: 'fra-f-03',
    difficulty: 'easy',
    prompt: '¿Qué descomposición corresponde a $\\frac{1}{x^2 + 1}$?',
    options: [
      { latex: '\\frac{Ax + B}{x^2 + 1}', correct: true },
      { latex: '\\frac{A}{x^2 + 1}', correct: false },
      { latex: '\\frac{A}{x} + \\frac{B}{x + 1}', correct: false },
      { latex: '\\frac{A}{x^2} + \\frac{B}{1}', correct: false }
    ],
    explanation: 'Factor cuadrático irreducible: numerador lineal $Ax + B$.'
  },
  {
    id: 'fra-f-04',
    difficulty: 'easy',
    prompt: '¿Cuál es el primer paso para integrar $\\frac{P(x)}{Q(x)}$?',
    options: [
      { latex: '\\text{Verificar que grado de } P < \\text{ grado de } Q', correct: true },
      { latex: '\\text{Integrar directamente el numerador}', correct: false },
      { latex: '\\text{Derivar el denominador}', correct: false },
      { latex: '\\text{Multiplicar por } Q(x)', correct: false }
    ],
    explanation: 'Si el grado del numerador es mayor o igual, primero se hace división larga.'
  },
  {
    id: 'fra-f-05',
    difficulty: 'easy',
    prompt: '¿Cuál es la forma de fracciones parciales de $\\frac{1}{x(x+1)}$?',
    options: [
      { latex: '\\frac{A}{x} + \\frac{B}{x+1}', correct: true },
      { latex: '\\frac{A}{x(x+1)}', correct: false },
      { latex: '\\frac{Ax + B}{x(x+1)}', correct: false },
      { latex: '\\frac{A}{x} + \\frac{B}{x}', correct: false }
    ],
    explanation: 'Dos factores lineales distintos ($x$ y $x+1$): $\\frac{A}{x} + \\frac{B}{x+1}$.'
  },
  {
    id: 'fra-f-06',
    difficulty: 'easy',
    prompt: '¿Qué fórmula se usa para integrar un término $\\frac{A}{x+a}$?',
    options: [
      { latex: 'A\\ln|x + a| + C', correct: true },
      { latex: '\\frac{A}{(x+a)^2} + C', correct: false },
      { latex: 'A\\arctan(x + a) + C', correct: false },
      { latex: 'A(x + a) + C', correct: false }
    ],
    explanation: 'Es la fórmula (5) del formulario: $\\int\\frac{dv}{v} = \\ln|v| + C$.'
  },
  {
    id: 'fra-f-07',
    difficulty: 'easy',
    prompt: 'En la descomposición, ¿qué representan $A$, $B$, $C$?',
    options: [
      { latex: '\\text{Constantes a determinar}', correct: true },
      { latex: '\\text{Variables de integración}', correct: false },
      { latex: '\\text{Los factores del denominador}', correct: false },
      { latex: '\\text{Las raíces del numerador}', correct: false }
    ],
    explanation: 'Son constantes que se hallan evaluando raíces o igualando coeficientes.'
  },
  {
    id: 'fra-f-08',
    difficulty: 'easy',
    prompt: '¿Se puede factorizar $x^2 - 1$?',
    options: [
      { latex: '\\text{Sí: } (x-1)(x+1)', correct: true },
      { latex: '\\text{No, es irreducible}', correct: false },
      { latex: '\\text{Sí: } (x-1)^2', correct: false },
      { latex: '\\text{Sí: } x(x-1)', correct: false }
    ],
    explanation: 'Diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$.'
  },
  {
    id: 'fra-f-09',
    difficulty: 'easy',
    prompt: '¿Qué tipo de factor es $(x - 3)$ en un denominador?',
    options: [
      { latex: '\\text{Factor lineal simple}', correct: true },
      { latex: '\\text{Factor lineal repetido}', correct: false },
      { latex: '\\text{Factor cuadrático irreducible}', correct: false },
      { latex: '\\text{No se puede descomponer}', correct: false }
    ],
    explanation: 'Es lineal y de multiplicidad 1: aporta un término $\\frac{A}{x-3}$.'
  },
  {
    id: 'fra-f-10',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\frac{dx}{x + 1}$',
    options: [
      { latex: '\\ln|x + 1| + C', correct: true },
      { latex: '\\frac{1}{(x+1)^2} + C', correct: false },
      { latex: '\\arctan(x + 1) + C', correct: false },
      { latex: 'x + 1 + C', correct: false }
    ],
    explanation: 'Fórmula (5) con $v = x + 1$: $\\ln|x+1| + C$.'
  },

  // ================= Medias (12) =================
  {
    id: 'fra-m-01',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{(x+1)(x+2)}$',
    options: [
      { latex: '\\ln\\left|\\frac{x+1}{x+2}\\right| + C', correct: true },
      { latex: '\\ln\\left|\\frac{x+2}{x+1}\\right| + C', correct: false },
      { latex: '\\ln|(x+1)(x+2)| + C', correct: false },
      { latex: '\\arctan(x+1) + C', correct: false }
    ],
    explanation: 'Con $A=1$, $B=-1$: $\\ln|x+1| - \\ln|x+2| = \\ln\\left|\\frac{x+1}{x+2}\\right| + C$.'
  },
  {
    id: 'fra-m-02',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 1}$',
    options: [
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C', correct: true },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x+1}{x-1}\\right| + C', correct: false },
      { latex: '\\ln|x^2 - 1| + C', correct: false },
      { latex: '\\arctan x + C', correct: false }
    ],
    explanation: '$A=\\frac{1}{2}$, $B=-\\frac{1}{2}$: $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$.'
  },
  {
    id: 'fra-m-03',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x(x+1)}$',
    options: [
      { latex: '\\ln\\left|\\frac{x}{x+1}\\right| + C', correct: true },
      { latex: '\\ln\\left|\\frac{x+1}{x}\\right| + C', correct: false },
      { latex: '\\ln|x| + \\ln|x+1| + C', correct: false },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x}{x+1}\\right| + C', correct: false }
    ],
    explanation: 'Con $A=1$, $B=-1$: $\\ln|x| - \\ln|x+1| = \\ln\\left|\\frac{x}{x+1}\\right| + C$.'
  },
  {
    id: 'fra-m-04',
    difficulty: 'medium',
    prompt: 'En $\\frac{1}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$, ¿cuánto vale $A$?',
    options: [
      { latex: 'A = 1', correct: true },
      { latex: 'A = -1', correct: false },
      { latex: 'A = \\frac{1}{2}', correct: false },
      { latex: 'A = 2', correct: false }
    ],
    explanation: 'Evaluando $x = -1$: $1 = A(1)$, luego $A = 1$.'
  },
  {
    id: 'fra-m-05',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - x}$',
    options: [
      { latex: '\\ln\\left|\\frac{x-1}{x}\\right| + C', correct: true },
      { latex: '\\ln\\left|\\frac{x}{x-1}\\right| + C', correct: false },
      { latex: '\\ln|x(x-1)| + C', correct: false },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-1}{x}\\right| + C', correct: false }
    ],
    explanation: '$x^2 - x = x(x-1)$. Con $A=-1$, $B=1$: $\\ln|x-1| - \\ln|x| + C$.'
  },
  {
    id: 'fra-m-06',
    difficulty: 'medium',
    prompt: '¿Cuál es la descomposición de $\\frac{1}{x^2 - 4}$?',
    options: [
      { latex: '\\frac{A}{x-2} + \\frac{B}{x+2}', correct: true },
      { latex: '\\frac{A}{x^2} + \\frac{B}{4}', correct: false },
      { latex: '\\frac{Ax+B}{x^2-4}', correct: false },
      { latex: '\\frac{A}{x-2} + \\frac{B}{x-2}', correct: false }
    ],
    explanation: '$x^2 - 4 = (x-2)(x+2)$: dos factores lineales distintos.'
  },
  {
    id: 'fra-m-07',
    difficulty: 'medium',
    prompt: '¿Cuál es la descomposición de $\\frac{1}{x(x+1)^2}$?',
    options: [
      { latex: '\\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2}', correct: true },
      { latex: '\\frac{A}{x} + \\frac{B}{(x+1)^2}', correct: false },
      { latex: '\\frac{A}{x} + \\frac{B}{x+1}', correct: false },
      { latex: '\\frac{Ax+B}{x(x+1)^2}', correct: false }
    ],
    explanation: 'Un lineal simple ($x$) y uno repetido ($(x+1)^2$): tres términos.'
  },
  {
    id: 'fra-m-08',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 2x}$',
    options: [
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x}{x+2}\\right| + C', correct: true },
      { latex: '\\ln\\left|\\frac{x}{x+2}\\right| + C', correct: false },
      { latex: '\\frac{1}{2}\\ln|x(x+2)| + C', correct: false },
      { latex: '\\ln|x(x+2)| + C', correct: false }
    ],
    explanation: '$x^2 + 2x = x(x+2)$. Con $A=\\frac{1}{2}$, $B=-\\frac{1}{2}$: $\\frac{1}{2}\\ln|x| - \\frac{1}{2}\\ln|x+2| + C$.'
  },
  {
    id: 'fra-m-09',
    difficulty: 'medium',
    prompt: 'En $\\frac{1}{x^2 - 4} = \\frac{A}{x-2} + \\frac{B}{x+2}$, ¿cuánto vale $B$?',
    options: [
      { latex: 'B = -\\frac{1}{4}', correct: true },
      { latex: 'B = \\frac{1}{4}', correct: false },
      { latex: 'B = -\\frac{1}{2}', correct: false },
      { latex: 'B = \\frac{1}{2}', correct: false }
    ],
    explanation: 'Evaluando $x = -2$: $1 = B(-4)$, luego $B = -\\frac{1}{4}$.'
  },
  {
    id: 'fra-m-10',
    difficulty: 'medium',
    prompt: '¿Qué haces si el grado del numerador es mayor o igual que el del denominador?',
    options: [
      { latex: '\\text{División larga de polinomios}', correct: true },
      { latex: '\\text{Integrar directamente}', correct: false },
      { latex: '\\text{Multiplicar por el conjugado}', correct: false },
      { latex: '\\text{Cambiar el signo del denominador}', correct: false }
    ],
    explanation: 'Primero se divide para dejar una fracción propia más un polinomio.'
  },
  {
    id: 'fra-m-11',
    difficulty: 'medium',
    prompt: '¿Cómo se factoriza $x^2 + x - 2$?',
    options: [
      { latex: '(x + 2)(x - 1)', correct: true },
      { latex: '(x - 2)(x + 1)', correct: false },
      { latex: '(x + 2)(x + 1)', correct: false },
      { latex: '(x - 2)(x - 1)', correct: false }
    ],
    explanation: 'Buscamos dos números que sumen 1 y multipliquen $-2$: son $2$ y $-1$.'
  },
  {
    id: 'fra-m-12',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x(x-3)}$',
    options: [
      { latex: '\\frac{1}{3}\\ln\\left|\\frac{x-3}{x}\\right| + C', correct: true },
      { latex: '\\frac{1}{3}\\ln\\left|\\frac{x}{x-3}\\right| + C', correct: false },
      { latex: '\\ln\\left|\\frac{x-3}{x}\\right| + C', correct: false },
      { latex: '\\frac{1}{3}\\ln|x(x-3)| + C', correct: false }
    ],
    explanation: 'Con $A=-\\frac{1}{3}$, $B=\\frac{1}{3}$: $\\frac{1}{3}\\ln|x-3| - \\frac{1}{3}\\ln|x| + C$.'
  },

  // ================= Difíciles (8) =================
  {
    id: 'fra-h-01',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 4x + 3}$',
    options: [
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C', correct: true },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-1}{x-3}\\right| + C', correct: false },
      { latex: '\\ln|x^2 - 4x + 3| + C', correct: false },
      { latex: '\\arctan(x-2) + C', correct: false }
    ],
    explanation: 'Factoriza $(x-1)(x-3)$. Con $A=-\\frac{1}{2}$, $B=\\frac{1}{2}$: $\\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C$.'
  },
  {
    id: 'fra-h-02',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{x}{x^2 - 1}\\,dx$',
    options: [
      { latex: '\\frac{1}{2}\\ln|x^2 - 1| + C', correct: true },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C', correct: false },
      { latex: '\\ln|x^2 - 1| + C', correct: false },
      { latex: '\\arctan x + C', correct: false }
    ],
    explanation: 'El numerador es $\\frac{1}{2}$ veces la derivada del denominador: $\\frac{1}{2}\\ln|x^2-1| + C$.'
  },
  {
    id: 'fra-h-03',
    difficulty: 'hard',
    prompt: '¿Cuál es la descomposición de $\\frac{1}{x(x-1)^2}$?',
    options: [
      { latex: '\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}', correct: true },
      { latex: '\\frac{A}{x} + \\frac{B}{(x-1)^2}', correct: false },
      { latex: '\\frac{A}{x} + \\frac{B}{x-1}', correct: false },
      { latex: '\\frac{Ax + B}{x(x-1)^2}', correct: false }
    ],
    explanation: 'Lineal simple $x$ + lineal repetido $(x-1)^2$: tres términos.'
  },
  {
    id: 'fra-h-04',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 2x + 2}$',
    options: [
      { latex: '\\arctan(x + 1) + C', correct: true },
      { latex: '\\frac{1}{2}\\arctan\\frac{x+1}{2} + C', correct: false },
      { latex: '\\ln(x^2 + 2x + 2) + C', correct: false },
      { latex: '\\arctan(x + 2) + C', correct: false }
    ],
    explanation: 'El denominador es irreducible: $(x+1)^2 + 1$. Fórmula (18) con $a=1$.'
  },
  {
    id: 'fra-h-05',
    difficulty: 'hard',
    prompt: 'En $\\frac{x}{x^2 - 1} = \\frac{A}{x-1} + \\frac{B}{x+1}$, ¿cuánto valen $A$ y $B$?',
    options: [
      { latex: 'A = \\frac{1}{2},\\ B = \\frac{1}{2}', correct: true },
      { latex: 'A = \\frac{1}{2},\\ B = -\\frac{1}{2}', correct: false },
      { latex: 'A = 1,\\ B = -1', correct: false },
      { latex: 'A = -\\frac{1}{2},\\ B = \\frac{1}{2}', correct: false }
    ],
    explanation: '$x = A(x+1) + B(x-1)$: en $x=1$ da $A=\\frac{1}{2}$; en $x=-1$ da $B=\\frac{1}{2}$.'
  },
  {
    id: 'fra-h-06',
    difficulty: 'hard',
    prompt: '¿Cómo se factoriza $x^3 - x$?',
    options: [
      { latex: 'x(x - 1)(x + 1)', correct: true },
      { latex: 'x(x^2 - 1)', correct: false },
      { latex: '(x^2 - 1)(x + 1)', correct: false },
      { latex: 'x(x - 1)^2', correct: false }
    ],
    explanation: '$x^3 - x = x(x^2 - 1) = x(x-1)(x+1)$, tres lineales distintos.'
  },
  {
    id: 'fra-h-07',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2(x+1)}$',
    options: [
      { latex: '\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1} \\text{ (descomponer)}', correct: true },
      { latex: '\\frac{A}{x^2} + \\frac{B}{x+1}', correct: false },
      { latex: '\\frac{A}{x} + \\frac{B}{x+1}', correct: false },
      { latex: '\\frac{Ax+B}{x^2(x+1)}', correct: false }
    ],
    explanation: 'Lineal repetido $x^2$ (dos términos) + lineal simple $x+1$: $\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1}$.'
  },
  {
    id: 'fra-h-08',
    difficulty: 'hard',
    prompt: '¿Cuál integral se resuelve con fracciones parciales?',
    options: [
      { latex: '\\int \\frac{dx}{x^2 - 5x + 6}', correct: true },
      { latex: '\\int \\frac{dx}{\\sqrt{x^2 + 1}}', correct: false },
      { latex: '\\int x\\,e^x\\,dx', correct: false },
      { latex: '\\int \\cos x\\,dx', correct: false }
    ],
    explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$: cociente de polinomios factorizable, ideal para fracciones parciales.'
  }
];
