// data/calculo-integral/inmediatas/preguntas-inmediatas.js
// Pool de integrales inmediatas (fórmulas 1–23 + cambio de variable).
// 85 preguntas: 30 easy / 30 medium / 25 hard.

export default [
  // ================= Fáciles (30) =================
  {
    id: 'int-f-01',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int x^2\\,dx$',
    options: [
      { latex: '\\frac{x^3}{3} + C', correct: true },
      { latex: '\\frac{x^3}{2} + C', correct: false },
      { latex: '2x + C', correct: false },
      { latex: '\\frac{x^2}{2} + C', correct: false }
    ],
    explanation: 'Fórmula (4): $\\int v^n\\,dv = \\frac{v^{n+1}}{n+1} + C$. Aquí $n = 2$.'
  },
  {
    id: 'int-f-02',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int x^3\\,dx$',
    options: [
      { latex: '\\frac{x^4}{4} + C', correct: true },
      { latex: '3x^2 + C', correct: false },
      { latex: '\\frac{x^3}{3} + C', correct: false },
      { latex: 'x^4 + C', correct: false }
    ],
    explanation: 'Fórmula (4) con $n = 3$: $\\frac{x^{3+1}}{3+1} = \\frac{x^4}{4} + C$.'
  },
  {
    id: 'int-f-03',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int x\\,dx$',
    options: [
      { latex: '\\frac{x^2}{2} + C', correct: true },
      { latex: 'x + C', correct: false },
      { latex: '1 + C', correct: false },
      { latex: 'x^2 + C', correct: false }
    ],
    explanation: 'Fórmula (4) con $n = 1$: $\\frac{x^{2}}{2} + C$.'
  },
  {
    id: 'int-f-04',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int 5\\,dx$',
    options: [
      { latex: '5x + C', correct: true },
      { latex: '5 + C', correct: false },
      { latex: 'x + C', correct: false },
      { latex: '\\frac{5x^2}{2} + C', correct: false }
    ],
    explanation: 'Fórmulas (2) y (3): $\\int 5\\,dx = 5 \\int dx = 5x + C$.'
  },
  {
    id: 'int-f-05',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int 3x^2\\,dx$',
    options: [
      { latex: 'x^3 + C', correct: true },
      { latex: '3x^3 + C', correct: false },
      { latex: '6x + C', correct: false },
      { latex: '\\frac{3x^3}{2} + C', correct: false }
    ],
    explanation: 'Fórmula (2) y (4): $3 \\cdot \\frac{x^3}{3} = x^3 + C$.'
  },
  {
    id: 'int-f-06',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\frac{1}{x}\\,dx$',
    options: [
      { latex: '\\ln|x| + C', correct: true },
      { latex: '\\frac{1}{x^2} + C', correct: false },
      { latex: 'x + C', correct: false },
      { latex: '-\\frac{1}{x^2} + C', correct: false }
    ],
    explanation: 'Fórmula (5): $\\int \\frac{dv}{v} = \\ln|v| + C$.'
  },
  {
    id: 'int-f-07',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int e^x\\,dx$',
    options: [
      { latex: 'e^x + C', correct: true },
      { latex: 'x e^{x-1} + C', correct: false },
      { latex: '\\frac{e^x}{x} + C', correct: false },
      { latex: 'e + C', correct: false }
    ],
    explanation: 'Fórmula (7): $\\int e^v\\,dv = e^v + C$.'
  },
  {
    id: 'int-f-08',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\sin x\\,dx$',
    options: [
      { latex: '-\\cos x + C', correct: true },
      { latex: '\\cos x + C', correct: false },
      { latex: '\\sin x + C', correct: false },
      { latex: '-\\sin x + C', correct: false }
    ],
    explanation: 'Fórmula (8): la integral del seno es menos coseno.'
  },
  {
    id: 'int-f-09',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\cos x\\,dx$',
    options: [
      { latex: '\\sin x + C', correct: true },
      { latex: '-\\sin x + C', correct: false },
      { latex: '\\cos x + C', correct: false },
      { latex: '-\\cos x + C', correct: false }
    ],
    explanation: 'Fórmula (9): la integral del coseno es el seno.'
  },
  {
    id: 'int-f-10',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\sec^2 x\\,dx$',
    options: [
      { latex: '\\tan x + C', correct: true },
      { latex: '\\sec x + C', correct: false },
      { latex: '-\\cot x + C', correct: false },
      { latex: '\\sec^2 x + C', correct: false }
    ],
    explanation: 'Fórmula (10): $\\int \\sec^2 v\\,dv = \\tan v + C$.'
  },
  {
    id: 'int-f-11',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\csc^2 x\\,dx$',
    options: [
      { latex: '-\\cot x + C', correct: true },
      { latex: '\\cot x + C', correct: false },
      { latex: '-\\csc x + C', correct: false },
      { latex: '\\tan x + C', correct: false }
    ],
    explanation: 'Fórmula (11): $\\int \\csc^2 v\\,dv = -\\cot v + C$.'
  },
  {
    id: 'int-f-12',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\sec x \\tan x\\,dx$',
    options: [
      { latex: '\\sec x + C', correct: true },
      { latex: '\\tan x + C', correct: false },
      { latex: '-\\sec x + C', correct: false },
      { latex: '\\csc x + C', correct: false }
    ],
    explanation: 'Fórmula (12): $\\int \\sec v \\tan v\\,dv = \\sec v + C$.'
  },
  {
    id: 'int-f-13',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\csc x \\cot x\\,dx$',
    options: [
      { latex: '-\\csc x + C', correct: true },
      { latex: '\\csc x + C', correct: false },
      { latex: '-\\cot x + C', correct: false },
      { latex: '\\cot x + C', correct: false }
    ],
    explanation: 'Fórmula (13): $\\int \\csc v \\cot v\\,dv = -\\csc v + C$.'
  },
  {
    id: 'int-f-14',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int 2^x\\,dx$',
    options: [
      { latex: '\\frac{2^x}{\\ln 2} + C', correct: true },
      { latex: '2^x + C', correct: false },
      { latex: 'x\\,2^{x-1} + C', correct: false },
      { latex: '2^x \\ln 2 + C', correct: false }
    ],
    explanation: 'Fórmula (6): $\\int a^v\\,dv = \\frac{a^v}{\\ln a} + C$.'
  },
  {
    id: 'int-f-15',
    difficulty: 'easy',
    prompt: '¿Qué fórmula (1–23) usas para $\\int x^5\\,dx$?',
    options: [
      { latex: '\\text{(4) Potencia } \\int v^n\\,dv', correct: true },
      { latex: '\\text{(5) Recíproco } \\int \\frac{dv}{v}', correct: false },
      { latex: '\\text{(7) Exponencial } \\int e^v\\,dv', correct: false },
      { latex: '\\text{(8) Seno } \\int \\sin v\\,dv', correct: false }
    ],
    explanation: 'Es una potencia de $x$: aplica la fórmula (4) con $n = 5$.'
  },
  {
    id: 'int-f-16',
    difficulty: 'easy',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\frac{1}{x}\\,dx$?',
    options: [
      { latex: '\\text{(5) Recíproco } \\int \\frac{dv}{v}', correct: true },
      { latex: '\\text{(4) Potencia } \\int v^n\\,dv', correct: false },
      { latex: '\\text{(3) } \\int dx', correct: false },
      { latex: '\\text{(6) Exponencial base } a', correct: false }
    ],
    explanation: '$\\frac{1}{x}$ es el recíproco de la variable: fórmula (5), $\\ln|x| + C$.'
  },
  {
    id: 'int-f-17',
    difficulty: 'easy',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\cos x\\,dx$?',
    options: [
      { latex: '\\text{(9) Coseno } \\int \\cos v\\,dv', correct: true },
      { latex: '\\text{(8) Seno } \\int \\sin v\\,dv', correct: false },
      { latex: '\\text{(10) } \\int \\sec^2 v\\,dv', correct: false },
      { latex: '\\text{(14) } \\int \\tan v\\,dv', correct: false }
    ],
    explanation: 'La integral directa del coseno es la fórmula (9): $\\sin x + C$.'
  },
  {
    id: 'int-f-18',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int (x^2 + x)\\,dx$',
    options: [
      { latex: '\\frac{x^3}{3} + \\frac{x^2}{2} + C', correct: true },
      { latex: 'x^3 + x^2 + C', correct: false },
      { latex: '2x + 1 + C', correct: false },
      { latex: '\\frac{x^3}{3} + x + C', correct: false }
    ],
    explanation: 'Fórmula (1): se integra término a término.'
  },
  {
    id: 'int-f-19',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int (\\sin x + \\cos x)\\,dx$',
    options: [
      { latex: '-\\cos x + \\sin x + C', correct: true },
      { latex: '\\cos x + \\sin x + C', correct: false },
      { latex: '-\\cos x - \\sin x + C', correct: false },
      { latex: '\\cos x - \\sin x + C', correct: false }
    ],
    explanation: 'Fórmulas (1), (8) y (9): $-\\cos x + \\sin x + C$.'
  },
  {
    id: 'int-f-20',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int 7x^6\\,dx$',
    options: [
      { latex: 'x^7 + C', correct: true },
      { latex: '7x^7 + C', correct: false },
      { latex: '\\frac{7x^7}{6} + C', correct: false },
      { latex: '42x^5 + C', correct: false }
    ],
    explanation: 'Fórmulas (2) y (4): $7 \\cdot \\frac{x^7}{7} = x^7 + C$.'
  },
  {
    id: 'int-f-21',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula de la potencia (4)?',
    options: [
      { latex: '\\int v^n\\,dv = \\frac{v^{n+1}}{n+1} + C', correct: true },
      { latex: '\\int v^n\\,dv = n v^{n-1} + C', correct: false },
      { latex: '\\int v^n\\,dv = \\frac{v^{n}}{n} + C', correct: false },
      { latex: '\\int v^n\\,dv = v^{n} + C', correct: false }
    ],
    explanation: 'Se suma 1 al exponente y se divide entre el nuevo exponente.'
  },
  {
    id: 'int-f-22',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int dx$',
    options: [
      { latex: 'x + C', correct: true },
      { latex: '1 + C', correct: false },
      { latex: 'x^2 + C', correct: false },
      { latex: '\\frac{x^2}{2} + C', correct: false }
    ],
    explanation: 'Fórmula (3): $\\int dx = x + C$.'
  },
  {
    id: 'int-f-23',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int 4x^3\\,dx$',
    options: [
      { latex: 'x^4 + C', correct: true },
      { latex: '4x^4 + C', correct: false },
      { latex: '12x^2 + C', correct: false },
      { latex: '\\frac{4x^4}{3} + C', correct: false }
    ],
    explanation: 'Fórmulas (2) y (4): $4 \\cdot \\frac{x^4}{4} = x^4 + C$.'
  },
  {
    id: 'int-f-24',
    difficulty: 'easy',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\tan x\\,dx$?',
    options: [
      { latex: '\\text{(14) } \\int \\tan v\\,dv', correct: true },
      { latex: '\\text{(10) } \\int \\sec^2 v\\,dv', correct: false },
      { latex: '\\text{(12) } \\int \\sec v \\tan v\\,dv', correct: false },
      { latex: '\\text{(15) } \\int \\cot v\\,dv', correct: false }
    ],
    explanation: 'La tangente no es directa: se usa la fórmula (14), $-\\ln|\\cos v| + C$.'
  },
  {
    id: 'int-f-25',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\cot x\\,dx$',
    options: [
      { latex: '\\ln|\\sin x| + C', correct: true },
      { latex: '-\\ln|\\cos x| + C', correct: false },
      { latex: '\\ln|\\cos x| + C', correct: false },
      { latex: '-\\ln|\\sin x| + C', correct: false }
    ],
    explanation: 'Fórmula (15): $\\int \\cot v\\,dv = \\ln|\\sin v| + C$.'
  },
  {
    id: 'int-f-26',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\sec x\\,dx$',
    options: [
      { latex: '\\ln|\\sec x + \\tan x| + C', correct: true },
      { latex: '\\sec x \\tan x + C', correct: false },
      { latex: '\\ln|\\sec x| + C', correct: false },
      { latex: '-\\ln|\\sec x - \\tan x| + C', correct: false }
    ],
    explanation: 'Fórmula (16): $\\int \\sec v\\,dv = \\ln|\\sec v + \\tan v| + C$.'
  },
  {
    id: 'int-f-27',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\csc x\\,dx$',
    options: [
      { latex: '\\ln|\\csc x - \\cot x| + C', correct: true },
      { latex: '\\ln|\\csc x + \\cot x| + C', correct: false },
      { latex: '-\\csc x + C', correct: false },
      { latex: '\\ln|\\csc x| + C', correct: false }
    ],
    explanation: 'Fórmula (17): $\\int \\csc v\\,dv = \\ln|\\csc v - \\cot v| + C$.'
  },
  {
    id: 'int-f-28',
    difficulty: 'easy',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{x^2 + 1}$?',
    options: [
      { latex: '\\text{(18) } \\int \\frac{dv}{v^2 + a^2}', correct: true },
      { latex: '\\text{(19) } \\int \\frac{dv}{v^2 - a^2}', correct: false },
      { latex: '\\text{(20) } \\int \\frac{dv}{\\sqrt{a^2 - v^2}}', correct: false },
      { latex: '\\text{(21) } \\int \\frac{dv}{\\sqrt{v^2 \\pm a^2}}', correct: false }
    ],
    explanation: 'Tiene la forma $v^2 + a^2$ con $v = x$ y $a = 1$: fórmula (18).'
  },
  {
    id: 'int-f-29',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 1}$',
    options: [
      { latex: '\\arctan x + C', correct: true },
      { latex: '\\ln(x^2 + 1) + C', correct: false },
      { latex: '\\arcsin x + C', correct: false },
      { latex: '-\\frac{1}{x} + C', correct: false }
    ],
    explanation: 'Fórmula (18) con $a = 1$: $\\frac{1}{1}\\arctan\\frac{x}{1} + C$.'
  },
  {
    id: 'int-f-30',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int \\frac{dx}{\\sqrt{1 - x^2}}$',
    options: [
      { latex: '\\arcsin x + C', correct: true },
      { latex: '\\arccos x + C', correct: false },
      { latex: '\\ln|x + \\sqrt{1-x^2}| + C', correct: false },
      { latex: '\\arctan x + C', correct: false }
    ],
    explanation: 'Fórmula (20) con $a = 1$: $\\arcsin\\frac{x}{1} + C$.'
  },

  // ================= Medias (30) =================
  {
    id: 'int-m-01',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int 5x^4\\,dx$',
    options: [
      { latex: 'x^5 + C', correct: true },
      { latex: '5x^5 + C', correct: false },
      { latex: '20x^3 + C', correct: false },
      { latex: '\\frac{5x^5}{4} + C', correct: false }
    ],
    explanation: 'Fórmulas (2) y (4): $5 \\cdot \\frac{x^5}{5} = x^5 + C$.'
  },
  {
    id: 'int-m-02',
    difficulty: 'medium',
    prompt: '¿Qué sustitución $u$ resuelve $\\int 2x\\,e^{x^2}\\,dx$?',
    options: [
      { latex: 'u = x^2', correct: true },
      { latex: 'u = e^{x^2}', correct: false },
      { latex: 'u = 2x', correct: false },
      { latex: 'u = x', correct: false }
    ],
    explanation: 'Si $u = x^2$, entonces $du = 2x\\,dx$, que coincide con el factor presente.'
  },
  {
    id: 'int-m-03',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int (x^2 + 1)^5 \\cdot 2x\\,dx$',
    options: [
      { latex: '\\frac{(x^2 + 1)^6}{6} + C', correct: true },
      { latex: '\\frac{(x^2 + 1)^6}{2} + C', correct: false },
      { latex: '(x^2 + 1)^6 + C', correct: false },
      { latex: '10(x^2 + 1)^4 + C', correct: false }
    ],
    explanation: 'Con $u = x^2 + 1$, $du = 2x\\,dx$: fórmula (4), $\\frac{u^6}{6} + C$.'
  },
  {
    id: 'int-m-04',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int 2x\\,e^{x^2}\\,dx$',
    options: [
      { latex: 'e^{x^2} + C', correct: true },
      { latex: 'e^{x^2} + x e^{x^2} + C', correct: false },
      { latex: 'x^2 e^{x^2} + C', correct: false },
      { latex: '2 e^{x^2} + C', correct: false }
    ],
    explanation: 'Con $u = x^2$, $du = 2x\\,dx$: $\\int e^u\\,du = e^{x^2} + C$ (fórmula 7).'
  },
  {
    id: 'int-m-05',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,e^{x^2}\\,dx$',
    options: [
      { latex: '\\frac{1}{2}e^{x^2} + C', correct: true },
      { latex: 'e^{x^2} + C', correct: false },
      { latex: 'x e^{x^2} + C', correct: false },
      { latex: '\\frac{1}{2}x e^{x^2} + C', correct: false }
    ],
    explanation: 'Con $u = x^2$, $du = 2x\\,dx$, falta un $2$: $\\frac{1}{2}\\int e^u\\,du = \\frac{1}{2}e^{x^2} + C$.'
  },
  {
    id: 'int-m-06',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{3x}$',
    options: [
      { latex: '\\frac{1}{3}\\ln|x| + C', correct: true },
      { latex: '\\ln|x| + C', correct: false },
      { latex: '3\\ln|x| + C', correct: false },
      { latex: '\\ln|3x| + C', correct: false }
    ],
    explanation: 'Fórmula (2) y (5): $\\frac{1}{3}\\int\\frac{dx}{x} = \\frac{1}{3}\\ln|x| + C$.'
  },
  {
    id: 'int-m-07',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{2x}{x^2 + 1}\\,dx$',
    options: [
      { latex: '\\ln(x^2 + 1) + C', correct: true },
      { latex: '\\ln|x| + C', correct: false },
      { latex: '\\frac{1}{x^2+1} + C', correct: false },
      { latex: '2\\ln(x^2+1) + C', correct: false }
    ],
    explanation: 'Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\int\\frac{du}{u} = \\ln|u| + C$ (fórmula 5).'
  },
  {
    id: 'int-m-08',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,\\sin(x^2)\\,dx$',
    options: [
      { latex: '-\\frac{1}{2}\\cos(x^2) + C', correct: true },
      { latex: '\\frac{1}{2}\\cos(x^2) + C', correct: false },
      { latex: '-\\cos(x^2) + C', correct: false },
      { latex: '\\cos(x^2) + C', correct: false }
    ],
    explanation: 'Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\sin u\\,du = -\\frac{1}{2}\\cos(x^2) + C$.'
  },
  {
    id: 'int-m-09',
    difficulty: 'medium',
    prompt: '¿La integral $\\int (x^2 + 1)^2\\,dx$ se resuelve directamente con la fórmula (4)?',
    options: [
      { latex: '\\text{No: falta el factor } \\frac{d}{dx}(x^2+1) = 2x', correct: true },
      { latex: '\\text{Sí, directamente con } n = 2', correct: false },
      { latex: '\\text{Sí, con } n = 1', correct: false },
      { latex: '\\text{No existe tal integral}', correct: false }
    ],
    explanation: 'La fórmula (4) requiere la forma $v^n\\,dv$; aquí $dv = 2x\\,dx$ no aparece. Habría que expandir.'
  },
  {
    id: 'int-m-10',
    difficulty: 'medium',
    prompt: '¿Qué fórmula y sustitución usas para $\\int x\\,\\cos(x^2)\\,dx$?',
    options: [
      { latex: '\\text{(9) con } v = x^2', correct: true },
      { latex: '\\text{(9) con } v = x', correct: false },
      { latex: '\\text{(8) con } v = x^2', correct: false },
      { latex: '\\text{(4) con } v = x^2', correct: false }
    ],
    explanation: 'Con $v = x^2$, $dv = 2x\\,dx$: $\\frac{1}{2}\\int\\cos v\\,dv$ → fórmula (9).'
  },
  {
    id: 'int-m-11',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\tan x\\,dx$',
    options: [
      { latex: '-\\ln|\\cos x| + C', correct: true },
      { latex: '\\ln|\\sin x| + C', correct: false },
      { latex: '\\sec^2 x + C', correct: false },
      { latex: '-\\ln|\\sin x| + C', correct: false }
    ],
    explanation: 'Fórmula (14): $\\int \\tan v\\,dv = -\\ln|\\cos v| + C$.'
  },
  {
    id: 'int-m-12',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 4}$',
    options: [
      { latex: '\\frac{1}{2}\\arctan\\frac{x}{2} + C', correct: true },
      { latex: '\\arctan\\frac{x}{2} + C', correct: false },
      { latex: '\\frac{1}{4}\\arctan x + C', correct: false },
      { latex: '\\ln(x^2 + 4) + C', correct: false }
    ],
    explanation: 'Fórmula (18) con $a = 2$: $\\frac{1}{2}\\arctan\\frac{x}{2} + C$.'
  },
  {
    id: 'int-m-13',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 9}$',
    options: [
      { latex: '\\frac{1}{3}\\arctan\\frac{x}{3} + C', correct: true },
      { latex: '\\frac{1}{9}\\arctan x + C', correct: false },
      { latex: '\\arctan\\frac{x}{3} + C', correct: false },
      { latex: '\\ln(x^2 + 9) + C', correct: false }
    ],
    explanation: 'Fórmula (18) con $a = 3$: $\\frac{1}{3}\\arctan\\frac{x}{3} + C$.'
  },
  {
    id: 'int-m-14',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{\\sqrt{4 - x^2}}$',
    options: [
      { latex: '\\arcsin\\frac{x}{2} + C', correct: true },
      { latex: '\\arcsin x + C', correct: false },
      { latex: '\\frac{1}{2}\\arcsin x + C', correct: false },
      { latex: '\\arccos\\frac{x}{2} + C', correct: false }
    ],
    explanation: 'Fórmula (20) con $a = 2$: $\\arcsin\\frac{x}{2} + C$.'
  },
  {
    id: 'int-m-15',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 1}$',
    options: [
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C', correct: true },
      { latex: '\\ln\\left|\\frac{x-1}{x+1}\\right| + C', correct: false },
      { latex: '\\arctan x + C', correct: false },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x+1}{x-1}\\right| + C', correct: false }
    ],
    explanation: 'Fórmula (19) con $a = 1$: $\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$.'
  },
  {
    id: 'int-m-16',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{1 - x^2}$',
    options: [
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{1+x}{1-x}\\right| + C', correct: true },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{1-x}{1+x}\\right| + C', correct: false },
      { latex: '\\arcsin x + C', correct: false },
      { latex: '\\arctan x + C', correct: false }
    ],
    explanation: 'Fórmula (19a) con $a = 1$: $\\frac{1}{2}\\ln\\left|\\frac{1+x}{1-x}\\right| + C$.'
  },
  {
    id: 'int-m-17',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int 3^x\\,dx$',
    options: [
      { latex: '\\frac{3^x}{\\ln 3} + C', correct: true },
      { latex: '3^x \\ln 3 + C', correct: false },
      { latex: '\\frac{x\\,3^x}{\\ln 3} + C', correct: false },
      { latex: '3^x + C', correct: false }
    ],
    explanation: 'Fórmula (6): $\\int a^v\\,dv = \\frac{a^v}{\\ln a} + C$.'
  },
  {
    id: 'int-m-18',
    difficulty: 'medium',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{x^2 - 4}$?',
    options: [
      { latex: '\\text{(19) } \\int \\frac{dv}{v^2 - a^2}', correct: true },
      { latex: '\\text{(18) } \\int \\frac{dv}{v^2 + a^2}', correct: false },
      { latex: '\\text{(19a) } \\int \\frac{dv}{a^2 - v^2}', correct: false },
      { latex: '\\text{(5) } \\int \\frac{dv}{v}', correct: false }
    ],
    explanation: 'Es $v^2 - a^2$ con $a = 2$: fórmula (19).'
  },
  {
    id: 'int-m-19',
    difficulty: 'medium',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\frac{dx}{\\sqrt{x^2 + 4}}$?',
    options: [
      { latex: '\\text{(21) } \\int \\frac{dv}{\\sqrt{v^2 \\pm a^2}}', correct: true },
      { latex: '\\text{(20) } \\int \\frac{dv}{\\sqrt{a^2 - v^2}}', correct: false },
      { latex: '\\text{(22) } \\int \\sqrt{a^2 - v^2}\\,dv', correct: false },
      { latex: '\\text{(23) } \\int \\sqrt{v^2 \\pm a^2}\\,dv', correct: false }
    ],
    explanation: 'Raíz de $v^2 + a^2$ en el denominador: fórmula (21).'
  },
  {
    id: 'int-m-20',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int e^{3x}\\,dx$',
    options: [
      { latex: '\\frac{1}{3}e^{3x} + C', correct: true },
      { latex: '3e^{3x} + C', correct: false },
      { latex: 'e^{3x} + C', correct: false },
      { latex: '\\frac{e^{3x}}{\\ln 3} + C', correct: false }
    ],
    explanation: 'Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int e^u\\,du = \\frac{1}{3}e^{3x} + C$.'
  },
  {
    id: 'int-m-21',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\sin(2x)\\,dx$',
    options: [
      { latex: '-\\frac{1}{2}\\cos(2x) + C', correct: true },
      { latex: '-\\cos(2x) + C', correct: false },
      { latex: '\\frac{1}{2}\\cos(2x) + C', correct: false },
      { latex: '-2\\cos(2x) + C', correct: false }
    ],
    explanation: 'Con $u = 2x$, $du = 2\\,dx$: $-\\frac{1}{2}\\cos(2x) + C$.'
  },
  {
    id: 'int-m-22',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int (4x^3 - 6x^2 + 2)\\,dx$',
    options: [
      { latex: 'x^4 - 2x^3 + 2x + C', correct: true },
      { latex: 'x^4 - 2x^3 + C', correct: false },
      { latex: '12x^2 - 12x + C', correct: false },
      { latex: 'x^4 - 6x^3 + 2x + C', correct: false }
    ],
    explanation: 'Fórmula (1) término a término: $x^4 - 2x^3 + 2x + C$.'
  },
  {
    id: 'int-m-23',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\sec^2(3x)\\,dx$',
    options: [
      { latex: '\\frac{1}{3}\\tan(3x) + C', correct: true },
      { latex: '\\tan(3x) + C', correct: false },
      { latex: '3\\tan(3x) + C', correct: false },
      { latex: '\\sec(3x) + C', correct: false }
    ],
    explanation: 'Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int\\sec^2 u\\,du = \\frac{1}{3}\\tan(3x) + C$.'
  },
  {
    id: 'int-m-24',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{x}{x^2 + 1}\\,dx$',
    options: [
      { latex: '\\frac{1}{2}\\ln(x^2 + 1) + C', correct: true },
      { latex: '\\ln(x^2 + 1) + C', correct: false },
      { latex: '\\frac{1}{2}\\ln|x| + C', correct: false },
      { latex: '\\arctan x + C', correct: false }
    ],
    explanation: 'Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\frac{du}{u} = \\frac{1}{2}\\ln|u| + C$.'
  },
  {
    id: 'int-m-25',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\cos(3x)\\,dx$',
    options: [
      { latex: '\\frac{1}{3}\\sin(3x) + C', correct: true },
      { latex: '\\sin(3x) + C', correct: false },
      { latex: '-\\frac{1}{3}\\sin(3x) + C', correct: false },
      { latex: '3\\sin(3x) + C', correct: false }
    ],
    explanation: 'Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int\\cos u\\,du = \\frac{1}{3}\\sin(3x) + C$.'
  },
  {
    id: 'int-m-26',
    difficulty: 'medium',
    prompt: '¿Qué fórmula (1–23) usas para $\\int \\sec x\\,dx$?',
    options: [
      { latex: '\\text{(16) } \\int \\sec v\\,dv', correct: true },
      { latex: '\\text{(12) } \\int \\sec v \\tan v\\,dv', correct: false },
      { latex: '\\text{(10) } \\int \\sec^2 v\\,dv', correct: false },
      { latex: '\\text{(17) } \\int \\csc v\\,dv', correct: false }
    ],
    explanation: 'La secante sola es la fórmula (16), que da un logaritmo.'
  },
  {
    id: 'int-m-27',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{x^3}{x^4 + 1}\\,dx$',
    options: [
      { latex: '\\frac{1}{4}\\ln(x^4 + 1) + C', correct: true },
      { latex: '\\ln(x^4 + 1) + C', correct: false },
      { latex: '\\frac{1}{4}\\arctan x^4 + C', correct: false },
      { latex: '\\frac{x^4}{4} + C', correct: false }
    ],
    explanation: 'Con $u = x^4 + 1$, $du = 4x^3\\,dx$: $\\frac{1}{4}\\int\\frac{du}{u} = \\frac{1}{4}\\ln|u| + C$.'
  },
  {
    id: 'int-m-28',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 16}$',
    options: [
      { latex: '\\frac{1}{4}\\arctan\\frac{x}{4} + C', correct: true },
      { latex: '\\frac{1}{16}\\arctan x + C', correct: false },
      { latex: '\\arctan\\frac{x}{4} + C', correct: false },
      { latex: '\\ln(x^2 + 16) + C', correct: false }
    ],
    explanation: 'Fórmula (18) con $a = 4$: $\\frac{1}{4}\\arctan\\frac{x}{4} + C$.'
  },
  {
    id: 'int-m-29',
    difficulty: 'medium',
    prompt: '¿La integral $\\int x\\,\\ln x\\,dx$ se resuelve con una fórmula directa (1–23)?',
    options: [
      { latex: '\\text{No: requiere integración por partes}', correct: true },
      { latex: '\\text{Sí, con la fórmula (5)}', correct: false },
      { latex: '\\text{Sí, con la fórmula (4)}', correct: false },
      { latex: '\\text{Sí, con la fórmula (14)}', correct: false }
    ],
    explanation: 'Es un producto de dos funciones de $x$ sin factor $dv$ directo: se usa integración por partes.'
  },
  {
    id: 'int-m-30',
    difficulty: 'medium',
    prompt: '¿Qué sustitución $u$ resuelve $\\int \\sin(x^2)\\cdot 2x\\,dx$?',
    options: [
      { latex: 'u = x^2', correct: true },
      { latex: 'u = \\sin(x^2)', correct: false },
      { latex: 'u = 2x', correct: false },
      { latex: 'u = x', correct: false }
    ],
    explanation: 'Si $u = x^2$, $du = 2x\\,dx$: la integral queda $\\int\\sin u\\,du$.'
  },

  // ================= Difíciles (25) =================
  {
    id: 'int-h-01',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 6x + 10}$',
    options: [
      { latex: '\\arctan(x + 3) + C', correct: true },
      { latex: '\\frac{1}{3}\\arctan\\frac{x+3}{3} + C', correct: false },
      { latex: '\\ln(x^2 + 6x + 10) + C', correct: false },
      { latex: '\\arctan(x + 6) + C', correct: false }
    ],
    explanation: 'Completando el cuadrado: $x^2 + 6x + 10 = (x+3)^2 + 1$. Fórmula (18) con $a = 1$ y $v = x + 3$.'
  },
  {
    id: 'int-h-02',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 6x + 5}$',
    options: [
      { latex: '\\frac{1}{4}\\ln\\left|\\frac{x-5}{x-1}\\right| + C', correct: true },
      { latex: '\\frac{1}{4}\\ln\\left|\\frac{x-1}{x-5}\\right| + C', correct: false },
      { latex: '\\frac{1}{2}\\ln\\left|\\frac{x-5}{x-1}\\right| + C', correct: false },
      { latex: '\\arctan(x-3) + C', correct: false }
    ],
    explanation: 'Completando: $x^2 - 6x + 5 = (x-3)^2 - 4$. Fórmula (19) con $a = 2$, $v = x - 3$.'
  },
  {
    id: 'int-h-03',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x\\,\\sec^2(x^2)\\,dx$',
    options: [
      { latex: '\\frac{1}{2}\\tan(x^2) + C', correct: true },
      { latex: '\\tan(x^2) + C', correct: false },
      { latex: '\\frac{1}{2}\\sec(x^2) + C', correct: false },
      { latex: '\\sec^2(x^2) + C', correct: false }
    ],
    explanation: 'Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\sec^2 u\\,du = \\frac{1}{2}\\tan(x^2) + C$.'
  },
  {
    id: 'int-h-04',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int e^{\\sin x}\\cos x\\,dx$',
    options: [
      { latex: 'e^{\\sin x} + C', correct: true },
      { latex: 'e^{\\cos x} + C', correct: false },
      { latex: '\\sin x\\,e^{\\sin x} + C', correct: false },
      { latex: '\\cos x\\,e^{\\sin x} + C', correct: false }
    ],
    explanation: 'Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int e^u\\,du = e^{\\sin x} + C$ (fórmula 7).'
  },
  {
    id: 'int-h-05',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\cos x\\,\\sin^2 x\\,dx$',
    options: [
      { latex: '\\frac{\\sin^3 x}{3} + C', correct: true },
      { latex: '\\frac{\\cos^3 x}{3} + C', correct: false },
      { latex: '\\sin^3 x + C', correct: false },
      { latex: '-\\frac{\\cos^3 x}{3} + C', correct: false }
    ],
    explanation: 'Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int u^2\\,du = \\frac{\\sin^3 x}{3} + C$ (fórmula 4).'
  },
  {
    id: 'int-h-06',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{\\sqrt{x^2 + 4}}$',
    options: [
      { latex: '\\ln\\left|x + \\sqrt{x^2 + 4}\\right| + C', correct: true },
      { latex: '\\arcsin\\frac{x}{2} + C', correct: false },
      { latex: '\\frac{1}{2}\\ln|x + \\sqrt{x^2+4}| + C', correct: false },
      { latex: '\\sqrt{x^2 + 4} + C', correct: false }
    ],
    explanation: 'Fórmula (21) con $a = 2$: $\\ln|v + \\sqrt{v^2 + a^2}| + C$.'
  },
  {
    id: 'int-h-07',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{\\sqrt{x^2 - 9}}$',
    options: [
      { latex: '\\ln\\left|x + \\sqrt{x^2 - 9}\\right| + C', correct: true },
      { latex: '\\arcsin\\frac{x}{3} + C', correct: false },
      { latex: '\\frac{1}{3}\\ln|x + \\sqrt{x^2-9}| + C', correct: false },
      { latex: '\\sqrt{x^2 - 9} + C', correct: false }
    ],
    explanation: 'Fórmula (21) con $a = 3$: $\\ln|v + \\sqrt{v^2 - a^2}| + C$.'
  },
  {
    id: 'int-h-08',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\sqrt{x^2 + 4}\\,dx$',
    options: [
      { latex: '\\frac{x}{2}\\sqrt{x^2+4} + 2\\ln\\left|x + \\sqrt{x^2+4}\\right| + C', correct: true },
      { latex: '\\frac{x}{2}\\sqrt{x^2+4} + \\ln\\left|x + \\sqrt{x^2+4}\\right| + C', correct: false },
      { latex: '\\frac{x}{2}\\sqrt{x^2+4} + C', correct: false },
      { latex: '\\frac{x}{2}\\sqrt{x^2+4} - 2\\ln\\left|x + \\sqrt{x^2+4}\\right| + C', correct: false }
    ],
    explanation: 'Fórmula (23) con $a = 2$: $\\frac{x}{2}\\sqrt{x^2+4} + \\frac{4}{2}\\ln|x + \\sqrt{x^2+4}| + C$.'
  },
  {
    id: 'int-h-09',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\sqrt{4 - x^2}\\,dx$',
    options: [
      { latex: '\\frac{x}{2}\\sqrt{4-x^2} + 2\\arcsin\\frac{x}{2} + C', correct: true },
      { latex: '\\frac{x}{2}\\sqrt{4-x^2} + \\arcsin\\frac{x}{2} + C', correct: false },
      { latex: '\\frac{x}{2}\\sqrt{4-x^2} + C', correct: false },
      { latex: '\\arcsin\\frac{x}{2} + C', correct: false }
    ],
    explanation: 'Fórmula (22) con $a = 2$: $\\frac{x}{2}\\sqrt{4-x^2} + \\frac{4}{2}\\arcsin\\frac{x}{2} + C$.'
  },
  {
    id: 'int-h-10',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 + 4x + 8}$',
    options: [
      { latex: '\\frac{1}{2}\\arctan\\frac{x+2}{2} + C', correct: true },
      { latex: '\\frac{1}{2}\\arctan\\frac{x+4}{2} + C', correct: false },
      { latex: '\\arctan\\frac{x+2}{2} + C', correct: false },
      { latex: '\\ln(x^2 + 4x + 8) + C', correct: false }
    ],
    explanation: 'Completando: $x^2 + 4x + 8 = (x+2)^2 + 4$. Fórmula (18) con $a = 2$, $v = x+2$.'
  },
  {
    id: 'int-h-11',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x\\,\\cos(x^2 + 1)\\,dx$',
    options: [
      { latex: '\\frac{1}{2}\\sin(x^2 + 1) + C', correct: true },
      { latex: '\\sin(x^2 + 1) + C', correct: false },
      { latex: '-\\frac{1}{2}\\sin(x^2 + 1) + C', correct: false },
      { latex: '\\frac{1}{2}\\cos(x^2 + 1) + C', correct: false }
    ],
    explanation: 'Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\cos u\\,du = \\frac{1}{2}\\sin(x^2+1) + C$.'
  },
  {
    id: 'int-h-12',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x^2\\,e^{x^3}\\,dx$',
    options: [
      { latex: '\\frac{1}{3}e^{x^3} + C', correct: true },
      { latex: 'e^{x^3} + C', correct: false },
      { latex: '3e^{x^3} + C', correct: false },
      { latex: 'x^3 e^{x^3} + C', correct: false }
    ],
    explanation: 'Con $u = x^3$, $du = 3x^2\\,dx$: $\\frac{1}{3}\\int e^u\\,du = \\frac{1}{3}e^{x^3} + C$.'
  },
  {
    id: 'int-h-13',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x\\,\\tan(x^2)\\,dx$',
    options: [
      { latex: '-\\frac{1}{2}\\ln|\\cos(x^2)| + C', correct: true },
      { latex: '\\frac{1}{2}\\ln|\\cos(x^2)| + C', correct: false },
      { latex: '\\ln|\\cos(x^2)| + C', correct: false },
      { latex: '-\\ln|\\cos(x^2)| + C', correct: false }
    ],
    explanation: 'Con $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int\\tan u\\,du = -\\frac{1}{2}\\ln|\\cos u| + C$ (fórmula 14).'
  },
  {
    id: 'int-h-14',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 2x + 5}$',
    options: [
      { latex: '\\frac{1}{2}\\arctan\\frac{x-1}{2} + C', correct: true },
      { latex: '\\frac{1}{2}\\arctan\\frac{x-2}{2} + C', correct: false },
      { latex: '\\arctan\\frac{x-1}{2} + C', correct: false },
      { latex: '\\ln(x^2 - 2x + 5) + C', correct: false }
    ],
    explanation: 'Completando: $x^2 - 2x + 5 = (x-1)^2 + 4$. Fórmula (18) con $a = 2$, $v = x-1$.'
  },
  {
    id: 'int-h-15',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{9x^2 + 4}$',
    options: [
      { latex: '\\frac{1}{6}\\arctan\\frac{3x}{2} + C', correct: true },
      { latex: '\\frac{1}{2}\\arctan\\frac{3x}{2} + C', correct: false },
      { latex: '\\frac{1}{6}\\arctan(3x) + C', correct: false },
      { latex: '\\frac{1}{4}\\arctan(3x) + C', correct: false }
    ],
    explanation: '$9x^2 + 4 = (3x)^2 + 4$. Con $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\cdot\\frac{1}{2}\\arctan\\frac{3x}{2} = \\frac{1}{6}\\arctan\\frac{3x}{2} + C$.'
  },
  {
    id: 'int-h-16',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\sin x\\,\\cos^3 x\\,dx$',
    options: [
      { latex: '-\\frac{\\cos^4 x}{4} + C', correct: true },
      { latex: '\\frac{\\cos^4 x}{4} + C', correct: false },
      { latex: '\\frac{\\sin^4 x}{4} + C', correct: false },
      { latex: '-\\frac{\\sin^4 x}{4} + C', correct: false }
    ],
    explanation: 'Con $u = \\cos x$, $du = -\\sin x\\,dx$: $-\\int u^3\\,du = -\\frac{\\cos^4 x}{4} + C$.'
  },
  {
    id: 'int-h-17',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 4x + 13}$',
    options: [
      { latex: '\\frac{1}{3}\\arctan\\frac{x-2}{3} + C', correct: true },
      { latex: '\\frac{1}{3}\\arctan\\frac{x-4}{3} + C', correct: false },
      { latex: '\\arctan\\frac{x-2}{3} + C', correct: false },
      { latex: '\\ln(x^2 - 4x + 13) + C', correct: false }
    ],
    explanation: 'Completando: $x^2 - 4x + 13 = (x-2)^2 + 9$. Fórmula (18) con $a = 3$, $v = x-2$.'
  },
  {
    id: 'int-h-18',
    difficulty: 'hard',
    prompt: '¿Qué fórmula y transformación usas para $\\int \\frac{dx}{x^2 + 2x + 5}$?',
    options: [
      { latex: '\\text{(18), completando el cuadrado: } (x+1)^2 + 4', correct: true },
      { latex: '\\text{(19) directamente}', correct: false },
      { latex: '\\text{(5) con } v = x^2 + 2x + 5', correct: false },
      { latex: '\\text{(20), completando el cuadrado}', correct: false }
    ],
    explanation: 'El denominador es $(x+1)^2 + 4$, forma $v^2 + a^2$: aplica la fórmula (18).'
  },
  {
    id: 'int-h-19',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{\\sqrt{x^2 - 2x + 5}}$',
    options: [
      { latex: '\\ln\\left|(x-1) + \\sqrt{x^2 - 2x + 5}\\right| + C', correct: true },
      { latex: '\\arcsin\\frac{x-1}{2} + C', correct: false },
      { latex: '\\frac{1}{2}\\ln|x-1 + \\sqrt{x^2-2x+5}| + C', correct: false },
      { latex: '\\sqrt{x^2 - 2x + 5} + C', correct: false }
    ],
    explanation: 'Completando: $x^2 - 2x + 5 = (x-1)^2 + 4$. Fórmula (21) con $v = x-1$, $a = 2$.'
  },
  {
    id: 'int-h-20',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{2x + 4}{x^2 + 4x + 5}\\,dx$',
    options: [
      { latex: '\\ln(x^2 + 4x + 5) + C', correct: true },
      { latex: '\\frac{1}{2}\\ln(x^2 + 4x + 5) + C', correct: false },
      { latex: '\\arctan(x+2) + C', correct: false },
      { latex: '\\frac{1}{2}\\arctan(x+2) + C', correct: false }
    ],
    explanation: 'El numerador es la derivada del denominador: $\\int\\frac{du}{u} = \\ln|u| + C$ (fórmula 5).'
  },
  {
    id: 'int-h-21',
    difficulty: 'hard',
    prompt: '¿Cuál integral se resuelve con la fórmula (20)?',
    options: [
      { latex: '\\int \\frac{dx}{\\sqrt{1 - x^2}}', correct: true },
      { latex: '\\int \\frac{dx}{\\sqrt{x^2 + 1}}', correct: false },
      { latex: '\\int \\frac{dx}{x^2 + 1}', correct: false },
      { latex: '\\int \\sqrt{1 - x^2}\\,dx', correct: false }
    ],
    explanation: 'La fórmula (20) es $\\int\\frac{dv}{\\sqrt{a^2 - v^2}} = \\arcsin\\frac{v}{a} + C$.'
  },
  {
    id: 'int-h-22',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\sin^5 x\\,\\cos x\\,dx$',
    options: [
      { latex: '\\frac{\\sin^6 x}{6} + C', correct: true },
      { latex: '\\frac{\\cos^6 x}{6} + C', correct: false },
      { latex: '\\sin^6 x + C', correct: false },
      { latex: '-\\frac{\\cos^6 x}{6} + C', correct: false }
    ],
    explanation: 'Con $u = \\sin x$, $du = \\cos x\\,dx$: $\\int u^5\\,du = \\frac{\\sin^6 x}{6} + C$.'
  },
  {
    id: 'int-h-23',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int \\frac{dx}{x^2 - 9}$',
    options: [
      { latex: '\\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + C', correct: true },
      { latex: '\\frac{1}{3}\\ln\\left|\\frac{x-3}{x+3}\\right| + C', correct: false },
      { latex: '\\frac{1}{6}\\ln\\left|\\frac{x+3}{x-3}\\right| + C', correct: false },
      { latex: '\\frac{1}{3}\\arctan\\frac{x}{3} + C', correct: false }
    ],
    explanation: 'Fórmula (19) con $a = 3$: $\\frac{1}{2\\cdot 3}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$.'
  },
  {
    id: 'int-h-24',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x\\sqrt{x^2 + 1}\\,dx$',
    options: [
      { latex: '\\frac{1}{3}(x^2 + 1)^{3/2} + C', correct: true },
      { latex: '(x^2 + 1)^{3/2} + C', correct: false },
      { latex: '\\frac{1}{2}(x^2 + 1)^{3/2} + C', correct: false },
      { latex: '\\frac{2}{3}(x^2 + 1)^{3/2} + C', correct: false }
    ],
    explanation: 'Con $u = x^2 + 1$, $du = 2x\\,dx$: $\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{3}(x^2+1)^{3/2} + C$.'
  },
  {
    id: 'int-h-25',
    difficulty: 'hard',
    prompt: '¿Qué cambio de variable resuelve $\\int \\frac{dx}{\\sqrt{9 - 4x^2}}$?',
    options: [
      { latex: 'v = 2x, \\ a = 3 \\text{ (fórmula 20)}', correct: true },
      { latex: 'v = 3x, \\ a = 2', correct: false },
      { latex: 'v = x, \\ a = 3', correct: false },
      { latex: '\\text{Fórmula (21)}', correct: false }
    ],
    explanation: '$9 - 4x^2 = 3^2 - (2x)^2$. Con $v = 2x$, $dv = 2\\,dx$: $\\frac{1}{2}\\arcsin\\frac{2x}{3} + C$.'
  }
];
