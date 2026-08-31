// data/calculo-integral/partes/preguntas-partes.js
// Pool de integración por partes. 25 preguntas: 8 easy / 10 medium / 7 hard.

export default [
  // ================= Fáciles (8) =================
  {
    id: 'par-f-01',
    difficulty: 'easy',
    prompt: '¿Cuál es la fórmula de integración por partes?',
    options: [
      { latex: '\\int u\\,dv = uv - \\int v\\,du', correct: true },
      { latex: '\\int u\\,dv = uv + \\int v\\,du', correct: false },
      { latex: '\\int u\\,dv = \\frac{du}{dx}\\cdot\\frac{dv}{dx}', correct: false },
      { latex: '\\int u\\,dv = \\int u\\,dx \\cdot \\int v\\,dx', correct: false }
    ],
    explanation: 'Fórmula de integración por partes: $\\int u\\,dv = uv - \\int v\\,du$.'
  },
  {
    id: 'par-f-02',
    difficulty: 'easy',
    prompt: 'Para $\\int x\\,e^x\\,dx$, ¿cuál es la elección correcta de $u$?',
    options: [
      { latex: 'u = x', correct: true },
      { latex: 'u = e^x', correct: false },
      { latex: 'u = x e^x', correct: false },
      { latex: 'u = dx', correct: false }
    ],
    explanation: 'Por LIATE, la algebraica $x$ se elige como $u$; $dv = e^x\\,dx$.'
  },
  {
    id: 'par-f-03',
    difficulty: 'easy',
    prompt: 'Para $\\int x\\,e^x\\,dx$ con $u = x$, ¿cuál es $dv$?',
    options: [
      { latex: 'dv = e^x\\,dx', correct: true },
      { latex: 'dv = x\\,dx', correct: false },
      { latex: 'dv = e^x', correct: false },
      { latex: 'dv = dx', correct: false }
    ],
    explanation: 'Con $u = x$, el resto del integrando es $dv = e^x\\,dx$, luego $v = e^x$.'
  },
  {
    id: 'par-f-04',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int x\\,e^x\\,dx$',
    options: [
      { latex: 'x e^x - e^x + C', correct: true },
      { latex: 'x e^x + e^x + C', correct: false },
      { latex: 'x e^x + C', correct: false },
      { latex: 'e^x + C', correct: false }
    ],
    explanation: '$u = x$, $dv = e^x dx$: $x e^x - \\int e^x\\,dx = x e^x - e^x + C$.'
  },
  {
    id: 'par-f-05',
    difficulty: 'easy',
    prompt: 'Para $\\int x\\,\\cos x\\,dx$, ¿cuál es la elección correcta de $u$?',
    options: [
      { latex: 'u = x', correct: true },
      { latex: 'u = \\cos x', correct: false },
      { latex: 'u = x \\cos x', correct: false },
      { latex: 'u = \\sin x', correct: false }
    ],
    explanation: 'Por LIATE, $u = x$ (algebraica) y $dv = \\cos x\\,dx$.'
  },
  {
    id: 'par-f-06',
    difficulty: 'easy',
    prompt: '¿Cuándo conviene usar integración por partes?',
    options: [
      { latex: '\\text{Cuando hay producto de funciones sin fórmula directa}', correct: true },
      { latex: '\\text{Siempre que aparezca una potencia}', correct: false },
      { latex: '\\text{Solo con funciones exponenciales}', correct: false },
      { latex: '\\text{Cuando hay una suma de funciones}', correct: false }
    ],
    explanation: 'Se usa para productos (o logaritmos/inversas solas) que no se resuelven por fórmula inmediata.'
  },
  {
    id: 'par-f-07',
    difficulty: 'easy',
    prompt: 'Para $\\int \\ln x\\,dx$, ¿cuál es la elección correcta de $u$?',
    options: [
      { latex: 'u = \\ln x', correct: true },
      { latex: 'u = x', correct: false },
      { latex: 'u = \\frac{1}{x}', correct: false },
      { latex: 'u = 1', correct: false }
    ],
    explanation: 'El logaritmo no se integra fácil: se elige $u = \\ln x$ y $dv = dx$.'
  },
  {
    id: 'par-f-08',
    difficulty: 'easy',
    prompt: 'Calcula: $\\int x\\,\\sin x\\,dx$',
    options: [
      { latex: '-x\\cos x + \\sin x + C', correct: true },
      { latex: 'x\\cos x + \\sin x + C', correct: false },
      { latex: '-x\\cos x - \\sin x + C', correct: false },
      { latex: 'x\\cos x - \\sin x + C', correct: false }
    ],
    explanation: '$u = x$, $dv = \\sin x\\,dx$: $-x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\sin x + C$.'
  },

  // ================= Medias (10) =================
  {
    id: 'par-m-01',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,\\cos x\\,dx$',
    options: [
      { latex: 'x\\sin x + \\cos x + C', correct: true },
      { latex: 'x\\sin x - \\cos x + C', correct: false },
      { latex: '\\sin x + C', correct: false },
      { latex: '-x\\sin x + \\cos x + C', correct: false }
    ],
    explanation: '$u = x$, $dv = \\cos x\\,dx$: $x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x + C$.'
  },
  {
    id: 'par-m-02',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,\\ln x\\,dx$',
    options: [
      { latex: '\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C', correct: true },
      { latex: '\\frac{x^2}{2}\\ln x + \\frac{x^2}{4} + C', correct: false },
      { latex: '\\frac{x^2}{2}\\ln x + C', correct: false },
      { latex: 'x\\ln x - x + C', correct: false }
    ],
    explanation: '$u = \\ln x$, $dv = x\\,dx$: $\\frac{x^2}{2}\\ln x - \\int\\frac{x}{2}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.'
  },
  {
    id: 'par-m-03',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x^2\\,e^x\\,dx$',
    options: [
      { latex: 'x^2 e^x - 2x e^x + 2e^x + C', correct: true },
      { latex: 'x^2 e^x - 2x e^x + C', correct: false },
      { latex: 'x^2 e^x + C', correct: false },
      { latex: '2x e^x + C', correct: false }
    ],
    explanation: 'Dos pasadas de partes (o tabla): $x^2 e^x - 2x e^x + 2e^x + C$.'
  },
  {
    id: 'par-m-04',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\ln x\\,dx$',
    options: [
      { latex: 'x\\ln x - x + C', correct: true },
      { latex: 'x\\ln x + x + C', correct: false },
      { latex: '\\ln x + C', correct: false },
      { latex: 'x\\ln x + C', correct: false }
    ],
    explanation: '$u = \\ln x$, $dv = dx$: $x\\ln x - \\int x\\cdot\\frac{1}{x}\\,dx = x\\ln x - x + C$.'
  },
  {
    id: 'par-m-05',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int \\arctan x\\,dx$',
    options: [
      { latex: 'x\\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C', correct: true },
      { latex: 'x\\arctan x + \\frac{1}{2}\\ln(1 + x^2) + C', correct: false },
      { latex: 'x\\arctan x + C', correct: false },
      { latex: '\\frac{x}{1 + x^2} + C', correct: false }
    ],
    explanation: '$u = \\arctan x$, $dv = dx$: $x\\arctan x - \\int\\frac{x}{1+x^2}\\,dx$.'
  },
  {
    id: 'par-m-06',
    difficulty: 'medium',
    prompt: 'Según LIATE, ¿qué eliges como $u$ en $\\int x^2\\,\\sin x\\,dx$?',
    options: [
      { latex: 'u = x^2', correct: true },
      { latex: 'u = \\sin x', correct: false },
      { latex: 'u = \\cos x', correct: false },
      { latex: 'u = x', correct: false }
    ],
    explanation: 'Algebraica ($x^2$) va antes que trigonométrica en LIATE: $u = x^2$.'
  },
  {
    id: 'par-m-07',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,e^{2x}\\,dx$',
    options: [
      { latex: '\\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x} + C', correct: true },
      { latex: '\\frac{x}{2}e^{2x} + \\frac{1}{4}e^{2x} + C', correct: false },
      { latex: 'x e^{2x} - e^{2x} + C', correct: false },
      { latex: '\\frac{x}{2}e^{2x} + C', correct: false }
    ],
    explanation: '$u = x$, $dv = e^{2x}dx$: $\\frac{x}{2}e^{2x} - \\int\\frac{1}{2}e^{2x}\\,dx = \\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x} + C$.'
  },
  {
    id: 'par-m-08',
    difficulty: 'medium',
    prompt: 'En $\\int x\\,\\cos x\\,dx$ con $u = x$, ¿cuál es $dv$?',
    options: [
      { latex: 'dv = \\cos x\\,dx', correct: true },
      { latex: 'dv = \\sin x\\,dx', correct: false },
      { latex: 'dv = x\\,dx', correct: false },
      { latex: 'dv = \\cos x', correct: false }
    ],
    explanation: 'Con $u = x$, el resto es $dv = \\cos x\\,dx$, luego $v = \\sin x$.'
  },
  {
    id: 'par-m-09',
    difficulty: 'medium',
    prompt: 'Calcula: $\\int x\\,\\sec^2 x\\,dx$',
    options: [
      { latex: 'x\\tan x + \\ln|\\cos x| + C', correct: true },
      { latex: 'x\\tan x - \\ln|\\cos x| + C', correct: false },
      { latex: 'x\\tan x + C', correct: false },
      { latex: '\\frac{x^2}{2}\\tan x + C', correct: false }
    ],
    explanation: '$u = x$, $dv = \\sec^2 x\\,dx$: $x\\tan x - \\int\\tan x\\,dx = x\\tan x + \\ln|\\cos x| + C$.'
  },
  {
    id: 'par-m-10',
    difficulty: 'medium',
    prompt: 'Para $\\int e^x\\,\\sin x\\,dx$, ¿cuántas veces se aplica integración por partes?',
    options: [
      { latex: '\\text{Dos veces (caso cíclico)}', correct: true },
      { latex: '\\text{Una sola vez}', correct: false },
      { latex: '\\text{Tres veces}', correct: false },
      { latex: '\\text{No se puede aplicar}', correct: false }
    ],
    explanation: 'Tras dos pasadas reaparece la integral original y se despeja.'
  },

  // ================= Difíciles (7) =================
  {
    id: 'par-h-01',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int e^x\\,\\sin x\\,dx$',
    options: [
      { latex: '\\frac{e^x}{2}(\\sin x - \\cos x) + C', correct: true },
      { latex: '\\frac{e^x}{2}(\\sin x + \\cos x) + C', correct: false },
      { latex: 'e^x(\\sin x - \\cos x) + C', correct: false },
      { latex: '\\frac{e^x}{2}\\sin x + C', correct: false }
    ],
    explanation: 'Caso cíclico: $I = e^x\\sin x - e^x\\cos x - I$, luego $I = \\frac{e^x}{2}(\\sin x - \\cos x) + C$.'
  },
  {
    id: 'par-h-02',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x^2\\,\\sin x\\,dx$',
    options: [
      { latex: '-x^2\\cos x + 2x\\sin x + 2\\cos x + C', correct: true },
      { latex: '-x^2\\cos x + 2x\\sin x + C', correct: false },
      { latex: 'x^2\\cos x - 2x\\sin x + C', correct: false },
      { latex: '-x^2\\cos x - 2x\\sin x + C', correct: false }
    ],
    explanation: '$u = x^2$, luego $\\int x\\sin x\\,dx$: $-x^2\\cos x + 2x\\sin x + 2\\cos x + C$.'
  },
  {
    id: 'par-h-03',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int e^x\\,\\cos x\\,dx$',
    options: [
      { latex: '\\frac{e^x}{2}(\\sin x + \\cos x) + C', correct: true },
      { latex: '\\frac{e^x}{2}(\\sin x - \\cos x) + C', correct: false },
      { latex: 'e^x\\cos x + C', correct: false },
      { latex: '\\frac{e^x}{2}\\cos x + C', correct: false }
    ],
    explanation: 'Caso cíclico: $I = e^x\\cos x + e^x\\sin x - I$, luego $I = \\frac{e^x}{2}(\\sin x + \\cos x) + C$.'
  },
  {
    id: 'par-h-04',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int (\\ln x)^2\\,dx$',
    options: [
      { latex: 'x(\\ln x)^2 - 2x\\ln x + 2x + C', correct: true },
      { latex: 'x(\\ln x)^2 - 2x\\ln x + C', correct: false },
      { latex: 'x(\\ln x)^2 + C', correct: false },
      { latex: '\\frac{(\\ln x)^3}{3} + C', correct: false }
    ],
    explanation: '$u = (\\ln x)^2$: $x(\\ln x)^2 - 2\\int\\ln x\\,dx = x(\\ln x)^2 - 2x\\ln x + 2x + C$.'
  },
  {
    id: 'par-h-05',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x^3\\,\\ln x\\,dx$',
    options: [
      { latex: '\\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C', correct: true },
      { latex: '\\frac{x^4}{4}\\ln x + \\frac{x^4}{16} + C', correct: false },
      { latex: '\\frac{x^4}{4}\\ln x + C', correct: false },
      { latex: '\\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C', correct: false }
    ],
    explanation: '$u = \\ln x$, $dv = x^3 dx$: $\\frac{x^4}{4}\\ln x - \\int\\frac{x^3}{4}\\,dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C$.'
  },
  {
    id: 'par-h-06',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x\\,e^{-x}\\,dx$',
    options: [
      { latex: '-x e^{-x} - e^{-x} + C', correct: true },
      { latex: '-x e^{-x} + e^{-x} + C', correct: false },
      { latex: 'x e^{-x} - e^{-x} + C', correct: false },
      { latex: '-x e^{-x} + C', correct: false }
    ],
    explanation: '$u = x$, $dv = e^{-x}dx$: $-x e^{-x} - \\int(-e^{-x})\\,dx = -x e^{-x} - e^{-x} + C$.'
  },
  {
    id: 'par-h-07',
    difficulty: 'hard',
    prompt: 'Calcula: $\\int x^2\\,\\cos x\\,dx$',
    options: [
      { latex: 'x^2\\sin x + 2x\\cos x - 2\\sin x + C', correct: true },
      { latex: 'x^2\\sin x - 2x\\cos x + C', correct: false },
      { latex: '-x^2\\sin x + 2x\\cos x + C', correct: false },
      { latex: 'x^2\\sin x + 2x\\cos x + C', correct: false }
    ],
    explanation: '$u = x^2$: $x^2\\sin x - 2\\int x\\sin x\\,dx = x^2\\sin x + 2x\\cos x - 2\\sin x + C$.'
  }
];
