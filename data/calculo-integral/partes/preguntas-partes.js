// data/calculo-integral/partes/preguntas-partes.js
// Catálogo ampliado a 300 preguntas (100 fáciles, 100 medias, 100 difíciles).

export default [
  {
    "id": "par-f-01",
    "difficulty": "easy",
    "prompt": "¿Cuál es la fórmula de integración por partes?",
    "options": [
      {
        "latex": "\\int u\\,dv = uv - \\int v\\,du",
        "correct": true
      },
      {
        "latex": "\\int u\\,dv = uv + \\int v\\,du",
        "correct": false
      },
      {
        "latex": "\\int u\\,dv = \\frac{du}{dx}\\cdot\\frac{dv}{dx}",
        "correct": false
      },
      {
        "latex": "\\int u\\,dv = \\int u\\,dx \\cdot \\int v\\,dx",
        "correct": false
      }
    ],
    "explanation": "Fórmula de integración por partes: $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-02",
    "difficulty": "easy",
    "prompt": "Para $\\int x\\,e^x\\,dx$, ¿cuál es la elección correcta de $u$?",
    "options": [
      {
        "latex": "u = x",
        "correct": true
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      }
    ],
    "explanation": "Por LIATE, la algebraica $x$ se elige como $u$; $dv = e^x\\,dx$."
  },
  {
    "id": "par-f-03",
    "difficulty": "easy",
    "prompt": "Para $\\int x\\,e^x\\,dx$ con $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = e^x\\,dx",
        "correct": true
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = e^x",
        "correct": false
      },
      {
        "latex": "dv = dx",
        "correct": false
      }
    ],
    "explanation": "Con $u = x$, el resto del integrando es $dv = e^x\\,dx$, luego $v = e^x$."
  },
  {
    "id": "par-f-04",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int x\\,e^x\\,dx$",
    "options": [
      {
        "latex": "x e^x - e^x + C",
        "correct": true
      },
      {
        "latex": "x e^x + e^x + C",
        "correct": false
      },
      {
        "latex": "x e^x + C",
        "correct": false
      },
      {
        "latex": "e^x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = e^x dx$: $x e^x - \\int e^x\\,dx = x e^x - e^x + C$."
  },
  {
    "id": "par-f-05",
    "difficulty": "easy",
    "prompt": "Para $\\int x\\,\\cos x\\,dx$, ¿cuál es la elección correcta de $u$?",
    "options": [
      {
        "latex": "u = x",
        "correct": true
      },
      {
        "latex": "u = \\cos x",
        "correct": false
      },
      {
        "latex": "u = x \\cos x",
        "correct": false
      },
      {
        "latex": "u = \\sin x",
        "correct": false
      }
    ],
    "explanation": "Por LIATE, $u = x$ (algebraica) y $dv = \\cos x\\,dx$."
  },
  {
    "id": "par-f-06",
    "difficulty": "easy",
    "prompt": "¿Cuándo conviene usar integración por partes?",
    "options": [
      {
        "latex": "\\text{Cuando hay producto de funciones sin fórmula directa}",
        "correct": true
      },
      {
        "latex": "\\text{Siempre que aparezca una potencia}",
        "correct": false
      },
      {
        "latex": "\\text{Solo con funciones exponenciales}",
        "correct": false
      },
      {
        "latex": "\\text{Cuando hay una suma de funciones}",
        "correct": false
      }
    ],
    "explanation": "Se usa para productos (o logaritmos/inversas solas) que no se resuelven por fórmula inmediata."
  },
  {
    "id": "par-f-07",
    "difficulty": "easy",
    "prompt": "Para $\\int \\ln x\\,dx$, ¿cuál es la elección correcta de $u$?",
    "options": [
      {
        "latex": "u = \\ln x",
        "correct": true
      },
      {
        "latex": "u = x",
        "correct": false
      },
      {
        "latex": "u = \\frac{1}{x}",
        "correct": false
      },
      {
        "latex": "u = 1",
        "correct": false
      }
    ],
    "explanation": "El logaritmo no se integra fácil: se elige $u = \\ln x$ y $dv = dx$."
  },
  {
    "id": "par-f-08",
    "difficulty": "easy",
    "prompt": "Calcula: $\\int x\\,\\sin x\\,dx$",
    "options": [
      {
        "latex": "-x\\cos x + \\sin x + C",
        "correct": true
      },
      {
        "latex": "x\\cos x + \\sin x + C",
        "correct": false
      },
      {
        "latex": "-x\\cos x - \\sin x + C",
        "correct": false
      },
      {
        "latex": "x\\cos x - \\sin x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = \\sin x\\,dx$: $-x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\sin x + C$."
  },
  {
    "id": "par-f-09",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-10",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{5x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 5e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{25}e^{5x}",
        "correct": false
      },
      {
        "latex": "v = e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{5}e^{5x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{5x}\\,dx = \\frac{1}{5}e^{5x}$."
  },
  {
    "id": "par-f-100",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{1} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{1} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{1}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{1}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-11",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-12",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{3} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{3} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{3}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{3}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-13",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-14",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{2x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 2e^{2x}",
        "correct": false
      },
      {
        "latex": "v = e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{2}e^{2x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x}$."
  },
  {
    "id": "par-f-15",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-16",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{2} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{2} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{2}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{2}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-17",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-18",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{6x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 6e^{6x}",
        "correct": false
      },
      {
        "latex": "v = e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{36}e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{6}e^{6x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{6x}\\,dx = \\frac{1}{6}e^{6x}$."
  },
  {
    "id": "par-f-19",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-20",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{1} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{1} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{1}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{1}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-21",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-22",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{3x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 3e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{9}e^{3x}",
        "correct": false
      },
      {
        "latex": "v = e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{3}e^{3x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{3x}\\,dx = \\frac{1}{3}e^{3x}$."
  },
  {
    "id": "par-f-23",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-24",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{5} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{5} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{5}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{5}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-25",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-26",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{7x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{49}e^{7x}",
        "correct": false
      },
      {
        "latex": "v = 7e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{7}e^{7x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{7x}\\,dx = \\frac{1}{7}e^{7x}$."
  },
  {
    "id": "par-f-27",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-28",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{4} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{4} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{4}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{4}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-29",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-30",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{4x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{16}e^{4x}",
        "correct": false
      },
      {
        "latex": "v = 4e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{4x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{4x}\\,dx = \\frac{1}{4}e^{4x}$."
  },
  {
    "id": "par-f-31",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-32",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{3} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{3} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{3}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{3}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-33",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-34",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{8x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{64}e^{8x}",
        "correct": false
      },
      {
        "latex": "v = 8e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{8}e^{8x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{8x}\\,dx = \\frac{1}{8}e^{8x}$."
  },
  {
    "id": "par-f-35",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-36",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{2} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{2} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{2}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{2}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-37",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-38",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{5x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{25}e^{5x}",
        "correct": false
      },
      {
        "latex": "v = 5e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{5}e^{5x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{5x}\\,dx = \\frac{1}{5}e^{5x}$."
  },
  {
    "id": "par-f-39",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-40",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{1} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{1} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{1}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{1}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-41",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-42",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{2x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 2e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{2x}",
        "correct": false
      },
      {
        "latex": "v = e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{2}e^{2x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x}$."
  },
  {
    "id": "par-f-43",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-44",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{5} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{5} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{5}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{5}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-45",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-46",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{6x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 6e^{6x}",
        "correct": false
      },
      {
        "latex": "v = e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{36}e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{6}e^{6x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{6x}\\,dx = \\frac{1}{6}e^{6x}$."
  },
  {
    "id": "par-f-47",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-48",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{4} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{4} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{4}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{4}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-49",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-50",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{3x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{9}e^{3x}",
        "correct": false
      },
      {
        "latex": "v = 3e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{3}e^{3x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{3x}\\,dx = \\frac{1}{3}e^{3x}$."
  },
  {
    "id": "par-f-51",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-52",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{3} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{3} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{3}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{3}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-53",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-54",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{7x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{49}e^{7x}",
        "correct": false
      },
      {
        "latex": "v = 7e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{7}e^{7x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{7x}\\,dx = \\frac{1}{7}e^{7x}$."
  },
  {
    "id": "par-f-55",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-56",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{2} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{2} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{2}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{2}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-57",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-58",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{4x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{16}e^{4x}",
        "correct": false
      },
      {
        "latex": "v = 4e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{4x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{4x}\\,dx = \\frac{1}{4}e^{4x}$."
  },
  {
    "id": "par-f-59",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-60",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{1} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{1} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{1}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{1}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-61",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-62",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{8x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 8e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{64}e^{8x}",
        "correct": false
      },
      {
        "latex": "v = e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{8}e^{8x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{8x}\\,dx = \\frac{1}{8}e^{8x}$."
  },
  {
    "id": "par-f-63",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-64",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{5} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{5} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{5}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{5}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-65",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-66",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{5x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 5e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{25}e^{5x}",
        "correct": false
      },
      {
        "latex": "v = e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{5}e^{5x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{5x}\\,dx = \\frac{1}{5}e^{5x}$."
  },
  {
    "id": "par-f-67",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-68",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{4} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{4} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{4}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{4}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-69",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-70",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{2x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{2x}",
        "correct": false
      },
      {
        "latex": "v = 2e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{2}e^{2x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x}$."
  },
  {
    "id": "par-f-71",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-72",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{3} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{3} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{3}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{3}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-73",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-74",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{6x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{36}e^{6x}",
        "correct": false
      },
      {
        "latex": "v = 6e^{6x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{6}e^{6x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{6x}\\,dx = \\frac{1}{6}e^{6x}$."
  },
  {
    "id": "par-f-75",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-76",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{2} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{2} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{2}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{2}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-77",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-78",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{3x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{9}e^{3x}",
        "correct": false
      },
      {
        "latex": "v = 3e^{3x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{3}e^{3x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{3x}\\,dx = \\frac{1}{3}e^{3x}$."
  },
  {
    "id": "par-f-79",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-80",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{1} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{1} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{1}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{1}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-81",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-82",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{7x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 7e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{49}e^{7x}",
        "correct": false
      },
      {
        "latex": "v = e^{7x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{7}e^{7x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{7x}\\,dx = \\frac{1}{7}e^{7x}$."
  },
  {
    "id": "par-f-83",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-84",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{5} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{5} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{5}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{5}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-85",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-86",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{4x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 4e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{16}e^{4x}",
        "correct": false
      },
      {
        "latex": "v = e^{4x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{4x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{4x}\\,dx = \\frac{1}{4}e^{4x}$."
  },
  {
    "id": "par-f-87",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-88",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{4} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = x^{4} e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = x^{4}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{4}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-89",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(7x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos(7x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(7x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(7x)\\,dx$."
  },
  {
    "id": "par-f-90",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{8x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = 8e^{8x}",
        "correct": false
      },
      {
        "latex": "v = e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{64}e^{8x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{8}e^{8x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{8x}\\,dx = \\frac{1}{8}e^{8x}$."
  },
  {
    "id": "par-f-91",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-92",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{3} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{3} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{3}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{3}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-93",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(5x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(5x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(5x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(5x)\\,dx$."
  },
  {
    "id": "par-f-94",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{5x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{25}e^{5x}",
        "correct": false
      },
      {
        "latex": "v = 5e^{5x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{5}e^{5x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{5x}\\,dx = \\frac{1}{5}e^{5x}$."
  },
  {
    "id": "par-f-95",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-f-96",
    "difficulty": "easy",
    "prompt": "Para resolver $\\int x^{2} e^x\\,dx$ por partes, según la regla LIATE, ¿cuál es $u$?",
    "options": [
      {
        "latex": "u = e^x",
        "correct": false
      },
      {
        "latex": "u = dx",
        "correct": false
      },
      {
        "latex": "u = x^{2} e^x",
        "correct": false
      },
      {
        "latex": "u = x^{2}",
        "correct": true
      }
    ],
    "explanation": "En LIATE, la función algebraica ($A = x^{2}$) tiene prioridad sobre la exponencial ($E = e^x$) para ser $u$."
  },
  {
    "id": "par-f-97",
    "difficulty": "easy",
    "prompt": "En $\\int x\\sin(3x)\\,dx$ eligiendo $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)",
        "correct": false
      },
      {
        "latex": "dv = \\cos(3x)\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\sin(3x)\\,dx",
        "correct": true
      }
    ],
    "explanation": "Si $u = x$, el factor restante del integrando es $dv = \\sin(3x)\\,dx$."
  },
  {
    "id": "par-f-98",
    "difficulty": "easy",
    "prompt": "Si $dv = e^{2x}\\,dx$, ¿cuál es la función $v$?",
    "options": [
      {
        "latex": "v = e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{4}e^{2x}",
        "correct": false
      },
      {
        "latex": "v = 2e^{2x}",
        "correct": false
      },
      {
        "latex": "v = \\frac{1}{2}e^{2x}",
        "correct": true
      }
    ],
    "explanation": "Integrando $dv$: $v = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x}$."
  },
  {
    "id": "par-f-99",
    "difficulty": "easy",
    "prompt": "¿Cuál es el término faltante en la fórmula: $\\int u\\,dv = uv - \\dots$?",
    "options": [
      {
        "latex": "\\int v\\,dv",
        "correct": false
      },
      {
        "latex": "\\int du\\,dv",
        "correct": false
      },
      {
        "latex": "\\int u\\,du",
        "correct": false
      },
      {
        "latex": "\\int v\\,du",
        "correct": true
      }
    ],
    "explanation": "La fórmula fundamental de integración por partes es $\\int u\\,dv = uv - \\int v\\,du$."
  },
  {
    "id": "par-m-01",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,\\cos x\\,dx$",
    "options": [
      {
        "latex": "x\\sin x + \\cos x + C",
        "correct": true
      },
      {
        "latex": "x\\sin x - \\cos x + C",
        "correct": false
      },
      {
        "latex": "\\sin x + C",
        "correct": false
      },
      {
        "latex": "-x\\sin x + \\cos x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = \\cos x\\,dx$: $x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x + C$."
  },
  {
    "id": "par-m-02",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C",
        "correct": true
      },
      {
        "latex": "\\frac{x^2}{2}\\ln x + \\frac{x^2}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{2}\\ln x + C",
        "correct": false
      },
      {
        "latex": "x\\ln x - x + C",
        "correct": false
      }
    ],
    "explanation": "$u = \\ln x$, $dv = x\\,dx$: $\\frac{x^2}{2}\\ln x - \\int\\frac{x}{2}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$."
  },
  {
    "id": "par-m-03",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^2\\,e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      },
      {
        "latex": "x^2 e^x - 2x e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x + C",
        "correct": false
      },
      {
        "latex": "2x e^x + C",
        "correct": false
      }
    ],
    "explanation": "Dos pasadas de partes (o tabla): $x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-m-04",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\ln x\\,dx$",
    "options": [
      {
        "latex": "x\\ln x - x + C",
        "correct": true
      },
      {
        "latex": "x\\ln x + x + C",
        "correct": false
      },
      {
        "latex": "\\ln x + C",
        "correct": false
      },
      {
        "latex": "x\\ln x + C",
        "correct": false
      }
    ],
    "explanation": "$u = \\ln x$, $dv = dx$: $x\\ln x - \\int x\\cdot\\frac{1}{x}\\,dx = x\\ln x - x + C$."
  },
  {
    "id": "par-m-05",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int \\arctan x\\,dx$",
    "options": [
      {
        "latex": "x\\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C",
        "correct": true
      },
      {
        "latex": "x\\arctan x + \\frac{1}{2}\\ln(1 + x^2) + C",
        "correct": false
      },
      {
        "latex": "x\\arctan x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{1 + x^2} + C",
        "correct": false
      }
    ],
    "explanation": "$u = \\arctan x$, $dv = dx$: $x\\arctan x - \\int\\frac{x}{1+x^2}\\,dx$."
  },
  {
    "id": "par-m-06",
    "difficulty": "medium",
    "prompt": "Según LIATE, ¿qué eliges como $u$ en $\\int x^2\\,\\sin x\\,dx$?",
    "options": [
      {
        "latex": "u = x^2",
        "correct": true
      },
      {
        "latex": "u = \\sin x",
        "correct": false
      },
      {
        "latex": "u = \\cos x",
        "correct": false
      },
      {
        "latex": "u = x",
        "correct": false
      }
    ],
    "explanation": "Algebraica ($x^2$) va antes que trigonométrica en LIATE: $u = x^2$."
  },
  {
    "id": "par-m-07",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x} + C",
        "correct": true
      },
      {
        "latex": "\\frac{x}{2}e^{2x} + \\frac{1}{4}e^{2x} + C",
        "correct": false
      },
      {
        "latex": "x e^{2x} - e^{2x} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x}{2}e^{2x} + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = e^{2x}dx$: $\\frac{x}{2}e^{2x} - \\int\\frac{1}{2}e^{2x}\\,dx = \\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x} + C$."
  },
  {
    "id": "par-m-08",
    "difficulty": "medium",
    "prompt": "En $\\int x\\,\\cos x\\,dx$ con $u = x$, ¿cuál es $dv$?",
    "options": [
      {
        "latex": "dv = \\cos x\\,dx",
        "correct": true
      },
      {
        "latex": "dv = \\sin x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = x\\,dx",
        "correct": false
      },
      {
        "latex": "dv = \\cos x",
        "correct": false
      }
    ],
    "explanation": "Con $u = x$, el resto es $dv = \\cos x\\,dx$, luego $v = \\sin x$."
  },
  {
    "id": "par-m-09",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\,\\sec^2 x\\,dx$",
    "options": [
      {
        "latex": "x\\tan x + \\ln|\\cos x| + C",
        "correct": true
      },
      {
        "latex": "x\\tan x - \\ln|\\cos x| + C",
        "correct": false
      },
      {
        "latex": "x\\tan x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2}{2}\\tan x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = \\sec^2 x\\,dx$: $x\\tan x - \\int\\tan x\\,dx = x\\tan x + \\ln|\\cos x| + C$."
  },
  {
    "id": "par-m-10",
    "difficulty": "medium",
    "prompt": "Para $\\int e^x\\,\\sin x\\,dx$, ¿cuántas veces se aplica integración por partes?",
    "options": [
      {
        "latex": "\\text{Dos veces (caso cíclico)}",
        "correct": true
      },
      {
        "latex": "\\text{Una sola vez}",
        "correct": false
      },
      {
        "latex": "\\text{Tres veces}",
        "correct": false
      },
      {
        "latex": "\\text{No se puede aplicar}",
        "correct": false
      }
    ],
    "explanation": "Tras dos pasadas reaparece la integral original y se despeja."
  },
  {
    "id": "par-m-100",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{2x} - \\frac{e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{2x}\\,dx \\implies du = dx, v = \\frac{e^{2x}}{2}$. Entonces $uv - \\int v\\,du = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{2^2} + C$."
  },
  {
    "id": "par-m-11",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-12",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{4x}\\,dx$",
    "options": [
      {
        "latex": "x e^{4x} - \\frac{e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} + \\frac{e^{4x}}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{4x}\\,dx \\implies du = dx, v = \\frac{e^{4x}}{4}$. Entonces $uv - \\int v\\,du = \\frac{x e^{4x}}{4} - \\frac{e^{4x}}{4^2} + C$."
  },
  {
    "id": "par-m-13",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(5x)}{5} - \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(5x)\\,dx \\implies du = dx, v = \\frac{\\sin(5x)}{5}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-14",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} - \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(6x)\\,dx \\implies du = dx, v = -\\frac{\\cos(6x)}{6}$. Resulta $-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-15",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-16",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{3x}\\,dx$",
    "options": [
      {
        "latex": "x e^{3x} - \\frac{e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} + \\frac{e^{3x}}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{3x}\\,dx \\implies du = dx, v = \\frac{e^{3x}}{3}$. Entonces $uv - \\int v\\,du = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{3^2} + C$."
  },
  {
    "id": "par-m-17",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(4x)}{4} - \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(4x)\\,dx \\implies du = dx, v = \\frac{\\sin(4x)}{4}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-18",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} - \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(5x)\\,dx \\implies du = dx, v = -\\frac{\\cos(5x)}{5}$. Resulta $-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-19",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-20",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{2x} - \\frac{e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{2x}\\,dx \\implies du = dx, v = \\frac{e^{2x}}{2}$. Entonces $uv - \\int v\\,du = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{2^2} + C$."
  },
  {
    "id": "par-m-21",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(3x)}{3} - \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(3x)\\,dx \\implies du = dx, v = \\frac{\\sin(3x)}{3}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-22",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(4x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(4x)}{4} - \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(4x)\\,dx \\implies du = dx, v = -\\frac{\\cos(4x)}{4}$. Resulta $-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-23",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-24",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{6x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{6x}}{6} + \\frac{e^{6x}}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{6x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{6x} - \\frac{e^{6x}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} - \\frac{e^{6x}}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{6x}\\,dx \\implies du = dx, v = \\frac{e^{6x}}{6}$. Entonces $uv - \\int v\\,du = \\frac{x e^{6x}}{6} - \\frac{e^{6x}}{6^2} + C$."
  },
  {
    "id": "par-m-25",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(2x)}{2} - \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(2x)\\,dx \\implies du = dx, v = \\frac{\\sin(2x)}{2}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-26",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(3x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(3x)}{3} - \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(3x)\\,dx \\implies du = dx, v = -\\frac{\\cos(3x)}{3}$. Resulta $-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-27",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-28",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{5x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{5x}}{5} + \\frac{e^{5x}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{5x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{5x} - \\frac{e^{5x}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{5x}\\,dx \\implies du = dx, v = \\frac{e^{5x}}{5}$. Entonces $uv - \\int v\\,du = \\frac{x e^{5x}}{5} - \\frac{e^{5x}}{5^2} + C$."
  },
  {
    "id": "par-m-29",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(6x)}{6} - \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(6x)\\,dx \\implies du = dx, v = \\frac{\\sin(6x)}{6}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-30",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(2x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} - \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(2x)\\,dx \\implies du = dx, v = -\\frac{\\cos(2x)}{2}$. Resulta $-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-31",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-32",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{4x}}{4} + \\frac{e^{4x}}{16} + C",
        "correct": false
      },
      {
        "latex": "x e^{4x} - \\frac{e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{4x}\\,dx \\implies du = dx, v = \\frac{e^{4x}}{4}$. Entonces $uv - \\int v\\,du = \\frac{x e^{4x}}{4} - \\frac{e^{4x}}{4^2} + C$."
  },
  {
    "id": "par-m-33",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(5x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} - \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(5x)\\,dx \\implies du = dx, v = \\frac{\\sin(5x)}{5}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-34",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} - \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(6x)\\,dx \\implies du = dx, v = -\\frac{\\cos(6x)}{6}$. Resulta $-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-35",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-36",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{3x}\\,dx$",
    "options": [
      {
        "latex": "x e^{3x} - \\frac{e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} + \\frac{e^{3x}}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{3x}\\,dx \\implies du = dx, v = \\frac{e^{3x}}{3}$. Entonces $uv - \\int v\\,du = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{3^2} + C$."
  },
  {
    "id": "par-m-37",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} - \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(4x)\\,dx \\implies du = dx, v = \\frac{\\sin(4x)}{4}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-38",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} - \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(5x)\\,dx \\implies du = dx, v = -\\frac{\\cos(5x)}{5}$. Resulta $-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-39",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-40",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x e^{2x} - \\frac{e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{2x}\\,dx \\implies du = dx, v = \\frac{e^{2x}}{2}$. Entonces $uv - \\int v\\,du = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{2^2} + C$."
  },
  {
    "id": "par-m-41",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(3x)}{3} - \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(3x)\\,dx \\implies du = dx, v = \\frac{\\sin(3x)}{3}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-42",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} - \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(4x)\\,dx \\implies du = dx, v = -\\frac{\\cos(4x)}{4}$. Resulta $-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-43",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-44",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{6x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{6x}}{6} + \\frac{e^{6x}}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{6x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{6x} - \\frac{e^{6x}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} - \\frac{e^{6x}}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{6x}\\,dx \\implies du = dx, v = \\frac{e^{6x}}{6}$. Entonces $uv - \\int v\\,du = \\frac{x e^{6x}}{6} - \\frac{e^{6x}}{6^2} + C$."
  },
  {
    "id": "par-m-45",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(2x)}{2} - \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(2x)\\,dx \\implies du = dx, v = \\frac{\\sin(2x)}{2}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-46",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(3x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(3x)}{3} - \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(3x)\\,dx \\implies du = dx, v = -\\frac{\\cos(3x)}{3}$. Resulta $-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-47",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-48",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{5x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{5x}}{5} + \\frac{e^{5x}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{5x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{5x} - \\frac{e^{5x}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{5x}\\,dx \\implies du = dx, v = \\frac{e^{5x}}{5}$. Entonces $uv - \\int v\\,du = \\frac{x e^{5x}}{5} - \\frac{e^{5x}}{5^2} + C$."
  },
  {
    "id": "par-m-49",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(6x)}{6} - \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(6x)\\,dx \\implies du = dx, v = \\frac{\\sin(6x)}{6}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-50",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(2x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(2x)}{2} - \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(2x)\\,dx \\implies du = dx, v = -\\frac{\\cos(2x)}{2}$. Resulta $-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-51",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-52",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{4x}}{4} + \\frac{e^{4x}}{16} + C",
        "correct": false
      },
      {
        "latex": "x e^{4x} - \\frac{e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{4x}\\,dx \\implies du = dx, v = \\frac{e^{4x}}{4}$. Entonces $uv - \\int v\\,du = \\frac{x e^{4x}}{4} - \\frac{e^{4x}}{4^2} + C$."
  },
  {
    "id": "par-m-53",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(5x)}{5} - \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(5x)\\,dx \\implies du = dx, v = \\frac{\\sin(5x)}{5}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-54",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} - \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(6x)\\,dx \\implies du = dx, v = -\\frac{\\cos(6x)}{6}$. Resulta $-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-55",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-56",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{3x}}{3} + \\frac{e^{3x}}{9} + C",
        "correct": false
      },
      {
        "latex": "x e^{3x} - \\frac{e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{3x}\\,dx \\implies du = dx, v = \\frac{e^{3x}}{3}$. Entonces $uv - \\int v\\,du = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{3^2} + C$."
  },
  {
    "id": "par-m-57",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} - \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(4x)\\,dx \\implies du = dx, v = \\frac{\\sin(4x)}{4}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-58",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} - \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(5x)\\,dx \\implies du = dx, v = -\\frac{\\cos(5x)}{5}$. Resulta $-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-59",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-60",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x e^{2x} - \\frac{e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{2x}\\,dx \\implies du = dx, v = \\frac{e^{2x}}{2}$. Entonces $uv - \\int v\\,du = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{2^2} + C$."
  },
  {
    "id": "par-m-61",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(3x)}{3} - \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(3x)\\,dx \\implies du = dx, v = \\frac{\\sin(3x)}{3}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-62",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} - \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(4x)\\,dx \\implies du = dx, v = -\\frac{\\cos(4x)}{4}$. Resulta $-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-63",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-64",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{6x}\\,dx$",
    "options": [
      {
        "latex": "x e^{6x} - \\frac{e^{6x}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{6x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} + \\frac{e^{6x}}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} - \\frac{e^{6x}}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{6x}\\,dx \\implies du = dx, v = \\frac{e^{6x}}{6}$. Entonces $uv - \\int v\\,du = \\frac{x e^{6x}}{6} - \\frac{e^{6x}}{6^2} + C$."
  },
  {
    "id": "par-m-65",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(2x)}{2} - \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(2x)\\,dx \\implies du = dx, v = \\frac{\\sin(2x)}{2}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-66",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} - \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(3x)\\,dx \\implies du = dx, v = -\\frac{\\cos(3x)}{3}$. Resulta $-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-67",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-68",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{5x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{5x}}{5} + \\frac{e^{5x}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{5x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{5x} - \\frac{e^{5x}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{5x}\\,dx \\implies du = dx, v = \\frac{e^{5x}}{5}$. Entonces $uv - \\int v\\,du = \\frac{x e^{5x}}{5} - \\frac{e^{5x}}{5^2} + C$."
  },
  {
    "id": "par-m-69",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(6x)}{6} - \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(6x)\\,dx \\implies du = dx, v = \\frac{\\sin(6x)}{6}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-70",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(2x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(2x)}{2} - \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(2x)\\,dx \\implies du = dx, v = -\\frac{\\cos(2x)}{2}$. Resulta $-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-71",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-72",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{4x}}{4} + \\frac{e^{4x}}{16} + C",
        "correct": false
      },
      {
        "latex": "x e^{4x} - \\frac{e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{4x}\\,dx \\implies du = dx, v = \\frac{e^{4x}}{4}$. Entonces $uv - \\int v\\,du = \\frac{x e^{4x}}{4} - \\frac{e^{4x}}{4^2} + C$."
  },
  {
    "id": "par-m-73",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(5x)}{5} - \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(5x)\\,dx \\implies du = dx, v = \\frac{\\sin(5x)}{5}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-74",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(6x)}{6} - \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(6x)\\,dx \\implies du = dx, v = -\\frac{\\cos(6x)}{6}$. Resulta $-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-75",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-76",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{3x}}{3} + \\frac{e^{3x}}{9} + C",
        "correct": false
      },
      {
        "latex": "x e^{3x} - \\frac{e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{3x}\\,dx \\implies du = dx, v = \\frac{e^{3x}}{3}$. Entonces $uv - \\int v\\,du = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{3^2} + C$."
  },
  {
    "id": "par-m-77",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(4x)}{4} - \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(4x)\\,dx \\implies du = dx, v = \\frac{\\sin(4x)}{4}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-78",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} - \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(5x)\\,dx \\implies du = dx, v = -\\frac{\\cos(5x)}{5}$. Resulta $-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-79",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-80",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x e^{2x} - \\frac{e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{2x}\\,dx \\implies du = dx, v = \\frac{e^{2x}}{2}$. Entonces $uv - \\int v\\,du = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{2^2} + C$."
  },
  {
    "id": "par-m-81",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(3x)}{3} - \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(3x)\\,dx \\implies du = dx, v = \\frac{\\sin(3x)}{3}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(3x)}{3} + \\frac{\\cos(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-82",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} - \\frac{\\sin(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(4x)\\,dx \\implies du = dx, v = -\\frac{\\cos(4x)}{4}$. Resulta $-\\frac{x\\cos(4x)}{4} + \\frac{\\sin(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-83",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-84",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{6x}\\,dx$",
    "options": [
      {
        "latex": "x e^{6x} - \\frac{e^{6x}}{6} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{6x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} + \\frac{e^{6x}}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{6x}}{6} - \\frac{e^{6x}}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{6x}\\,dx \\implies du = dx, v = \\frac{e^{6x}}{6}$. Entonces $uv - \\int v\\,du = \\frac{x e^{6x}}{6} - \\frac{e^{6x}}{6^2} + C$."
  },
  {
    "id": "par-m-85",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(2x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(2x)}{2} - \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(2x)\\,dx \\implies du = dx, v = \\frac{\\sin(2x)}{2}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(2x)}{2} + \\frac{\\cos(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-86",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(3x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} - \\frac{\\sin(3x)}{9} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(3x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(3x)\\,dx \\implies du = dx, v = -\\frac{\\cos(3x)}{3}$. Resulta $-\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{3^2} + C$."
  },
  {
    "id": "par-m-87",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-88",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{5x}\\,dx$",
    "options": [
      {
        "latex": "x e^{5x} - \\frac{e^{5x}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{5x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{5x}}{5} + \\frac{e^{5x}}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{5x}\\,dx \\implies du = dx, v = \\frac{e^{5x}}{5}$. Entonces $uv - \\int v\\,du = \\frac{x e^{5x}}{5} - \\frac{e^{5x}}{5^2} + C$."
  },
  {
    "id": "par-m-89",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(6x)}{6} - \\frac{\\cos(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(6x)\\,dx \\implies du = dx, v = \\frac{\\sin(6x)}{6}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(6x)}{6} + \\frac{\\cos(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-90",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(2x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(2x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} - \\frac{\\sin(2x)}{4} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{4} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(2x)\\,dx \\implies du = dx, v = -\\frac{\\cos(2x)}{2}$. Resulta $-\\frac{x\\cos(2x)}{2} + \\frac{\\sin(2x)}{2^2} + C$."
  },
  {
    "id": "par-m-91",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-92",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{4x}}{4} + \\frac{e^{4x}}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{2} + C",
        "correct": false
      },
      {
        "latex": "x e^{4x} - \\frac{e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{4x}\\,dx \\implies du = dx, v = \\frac{e^{4x}}{4}$. Entonces $uv - \\int v\\,du = \\frac{x e^{4x}}{4} - \\frac{e^{4x}}{4^2} + C$."
  },
  {
    "id": "par-m-93",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(5x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(5x)}{5} - \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(5x)\\,dx \\implies du = dx, v = \\frac{\\sin(5x)}{5}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(5x)}{5} + \\frac{\\cos(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-94",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(6x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(6x)}{6} - \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(6x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{36} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(6x)\\,dx \\implies du = dx, v = -\\frac{\\cos(6x)}{6}$. Resulta $-\\frac{x\\cos(6x)}{6} + \\frac{\\sin(6x)}{6^2} + C$."
  },
  {
    "id": "par-m-95",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-m-96",
    "difficulty": "medium",
    "prompt": "Calcula por partes: $\\int x e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x e^{3x}}{3} + \\frac{e^{3x}}{9} + C",
        "correct": false
      },
      {
        "latex": "x e^{3x} - \\frac{e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = e^{3x}\\,dx \\implies du = dx, v = \\frac{e^{3x}}{3}$. Entonces $uv - \\int v\\,du = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{3^2} + C$."
  },
  {
    "id": "par-m-97",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\cos(4x)\\,dx$",
    "options": [
      {
        "latex": "\\frac{x\\sin(4x)}{4} - \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\cos(4x)}{2} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{16} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\cos(4x)\\,dx \\implies du = dx, v = \\frac{\\sin(4x)}{4}$. Luego $uv - \\int v\\,du = \\frac{x\\sin(4x)}{4} + \\frac{\\cos(4x)}{4^2} + C$."
  },
  {
    "id": "par-m-98",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x\\sin(5x)\\,dx$",
    "options": [
      {
        "latex": "-\\frac{x\\cos(5x)}{5} - \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2\\sin(5x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": false
      },
      {
        "latex": "-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = x, dv = \\sin(5x)\\,dx \\implies du = dx, v = -\\frac{\\cos(5x)}{5}$. Resulta $-\\frac{x\\cos(5x)}{5} + \\frac{\\sin(5x)}{5^2} + C$."
  },
  {
    "id": "par-m-99",
    "difficulty": "medium",
    "prompt": "Calcula: $\\int x^{4}\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^{5}\\ln x}{5} + \\frac{x^{5}}{25} + C",
        "correct": false
      },
      {
        "latex": "x^{5}\\ln x - \\frac{x^{5}}{5} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{4}\\ln x}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{25} + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = \\ln x$ (logarítmica prioritaria en LIATE) y $dv = x^{4}\\,dx \\implies du = \\frac{1}{x}\\,dx, v = \\frac{x^{5}}{5}$. Queda $\\frac{x^{5}\\ln x}{5} - \\frac{x^{5}}{5^2} + C$."
  },
  {
    "id": "par-h-01",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int e^x\\,\\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x}{2}(\\sin x - \\cos x) + C",
        "correct": true
      },
      {
        "latex": "\\frac{e^x}{2}(\\sin x + \\cos x) + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x}{2}\\sin x + C",
        "correct": false
      }
    ],
    "explanation": "Caso cíclico: $I = e^x\\sin x - e^x\\cos x - I$, luego $I = \\frac{e^x}{2}(\\sin x - \\cos x) + C$."
  },
  {
    "id": "par-h-02",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x^2\\,\\sin x\\,dx$",
    "options": [
      {
        "latex": "-x^2\\cos x + 2x\\sin x + 2\\cos x + C",
        "correct": true
      },
      {
        "latex": "-x^2\\cos x + 2x\\sin x + C",
        "correct": false
      },
      {
        "latex": "x^2\\cos x - 2x\\sin x + C",
        "correct": false
      },
      {
        "latex": "-x^2\\cos x - 2x\\sin x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x^2$, luego $\\int x\\sin x\\,dx$: $-x^2\\cos x + 2x\\sin x + 2\\cos x + C$."
  },
  {
    "id": "par-h-03",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int e^x\\,\\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x}{2}(\\sin x + \\cos x) + C",
        "correct": true
      },
      {
        "latex": "\\frac{e^x}{2}(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "e^x\\cos x + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x}{2}\\cos x + C",
        "correct": false
      }
    ],
    "explanation": "Caso cíclico: $I = e^x\\cos x + e^x\\sin x - I$, luego $I = \\frac{e^x}{2}(\\sin x + \\cos x) + C$."
  },
  {
    "id": "par-h-04",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      }
    ],
    "explanation": "$u = (\\ln x)^2$: $x(\\ln x)^2 - 2\\int\\ln x\\,dx = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-05",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x^3\\,\\ln x\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C",
        "correct": true
      },
      {
        "latex": "\\frac{x^4}{4}\\ln x + \\frac{x^4}{16} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^4}{4}\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C",
        "correct": false
      }
    ],
    "explanation": "$u = \\ln x$, $dv = x^3 dx$: $\\frac{x^4}{4}\\ln x - \\int\\frac{x^3}{4}\\,dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C$."
  },
  {
    "id": "par-h-06",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x\\,e^{-x}\\,dx$",
    "options": [
      {
        "latex": "-x e^{-x} - e^{-x} + C",
        "correct": true
      },
      {
        "latex": "-x e^{-x} + e^{-x} + C",
        "correct": false
      },
      {
        "latex": "x e^{-x} - e^{-x} + C",
        "correct": false
      },
      {
        "latex": "-x e^{-x} + C",
        "correct": false
      }
    ],
    "explanation": "$u = x$, $dv = e^{-x}dx$: $-x e^{-x} - \\int(-e^{-x})\\,dx = -x e^{-x} - e^{-x} + C$."
  },
  {
    "id": "par-h-07",
    "difficulty": "hard",
    "prompt": "Calcula: $\\int x^2\\,\\cos x\\,dx$",
    "options": [
      {
        "latex": "x^2\\sin x + 2x\\cos x - 2\\sin x + C",
        "correct": true
      },
      {
        "latex": "x^2\\sin x - 2x\\cos x + C",
        "correct": false
      },
      {
        "latex": "-x^2\\sin x + 2x\\cos x + C",
        "correct": false
      },
      {
        "latex": "x^2\\sin x + 2x\\cos x + C",
        "correct": false
      }
    ],
    "explanation": "$u = x^2$: $x^2\\sin x - 2\\int x\\sin x\\,dx = x^2\\sin x + 2x\\cos x - 2\\sin x + C$."
  },
  {
    "id": "par-h-08",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-09",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-10",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-100",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-11",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-12",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-13",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-14",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-15",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-16",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-17",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-18",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-19",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-20",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-21",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-22",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-23",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-24",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-25",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-26",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-27",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-28",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-29",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-30",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-31",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-32",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-33",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-34",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-35",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-36",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-37",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-38",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-39",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-40",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-41",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-42",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-43",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-44",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-45",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-46",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-47",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-48",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-49",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-50",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-51",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-52",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-53",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-54",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-55",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-56",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-57",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-58",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-59",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-60",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-61",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-62",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-63",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-64",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-65",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-66",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-67",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-68",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-69",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-70",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-71",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-72",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-73",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-74",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-75",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-76",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-77",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-78",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-79",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-80",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-81",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-82",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-83",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-84",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-85",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-86",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-87",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-88",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-89",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-90",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{3x}\\,dx$",
    "options": [
      {
        "latex": "x^2 e^{3x} - \\frac{2x e^{3x}}{3} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{3x}}{33} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} + \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{3x}}{3} - \\frac{2x e^{3x}}{9} + \\frac{2e^{3x}}{27} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-91",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-92",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-93",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{2x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{2x}}{2} + \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{2x} - \\frac{2x e^{2x}}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{2x}}{32} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{2x}}{2} - \\frac{2x e^{2x}}{4} + \\frac{2e^{2x}}{8} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  },
  {
    "id": "par-h-94",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\cos x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\cos x - \\sin x)}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\sin x}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\cos x + \\sin x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\cos x + \\sin x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Aplicando partes dos veces, reaparece la integral original $I$. Despejando $2I = e^x(\\cos x + \\sin x) \\implies I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$."
  },
  {
    "id": "par-h-95",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-96",
    "difficulty": "hard",
    "prompt": "Aplica partes dos veces para calcular: $\\int x^2 e^x\\,dx$",
    "options": [
      {
        "latex": "x^2 e^x + 2x e^x + 2e^x + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x - 2e^x + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^x}{3} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^x - 2x e^x + 2e^x + C",
        "correct": true
      }
    ],
    "explanation": "Primera aplicación: $x^2 e^x - 2\\int x e^x\\,dx$. Segunda aplicación: $x^2 e^x - 2(x e^x - e^x) + C = x^2 e^x - 2x e^x + 2e^x + C$."
  },
  {
    "id": "par-h-97",
    "difficulty": "hard",
    "prompt": "Calcula la integral cíclica por partes: $\\int e^x \\sin x\\,dx$",
    "options": [
      {
        "latex": "\\frac{e^x(\\sin x + \\cos x)}{2} + C",
        "correct": false
      },
      {
        "latex": "e^x(\\sin x - \\cos x) + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x\\cos x}{2} + C",
        "correct": false
      },
      {
        "latex": "\\frac{e^x(\\sin x - \\cos x)}{2} + C",
        "correct": true
      }
    ],
    "explanation": "Integrando dos veces por partes y despejando la integral $I$: $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$."
  },
  {
    "id": "par-h-98",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes: $\\int (\\ln x)^2\\,dx$",
    "options": [
      {
        "latex": "x(\\ln x)^2 + 2x\\ln x + 2x + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - x\\ln x + C",
        "correct": false
      },
      {
        "latex": "\\frac{(\\ln x)^3}{3} + C",
        "correct": false
      },
      {
        "latex": "x(\\ln x)^2 - 2x\\ln x + 2x + C",
        "correct": true
      }
    ],
    "explanation": "Con $u = (\\ln x)^2, dv = dx \\implies du = 2\\frac{\\ln x}{x}dx, v = x$. Luego $x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C$."
  },
  {
    "id": "par-h-99",
    "difficulty": "hard",
    "prompt": "Calcula integrando por partes dos veces: $\\int x^2 e^{4x}\\,dx$",
    "options": [
      {
        "latex": "\\frac{x^2 e^{4x}}{4} + \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^3 e^{4x}}{34} + C",
        "correct": false
      },
      {
        "latex": "x^2 e^{4x} - \\frac{2x e^{4x}}{4} + C",
        "correct": false
      },
      {
        "latex": "\\frac{x^2 e^{4x}}{4} - \\frac{2x e^{4x}}{16} + \\frac{2e^{4x}}{64} + C",
        "correct": true
      }
    ],
    "explanation": "Reduciendo la potencia sucesivamente por partes con $u = x^2$ y luego $u = x$."
  }
];
