// data/calculo-integral/partes/contenido-partes.js
// Resumen teórico para la pantalla de estudio de integración por partes.

export const contenido = [
  {
    title: 'Fórmula',
    items: [
      {
        id: 'F',
        formula: '\\int u\\,dv = uv - \\int v\\,du',
        desc: 'Se usa cuando el integrando es un producto que no se resuelve por fórmula directa.',
      },
    ],
  },
  {
    title: 'Elección de u y dv',
    items: [
      {
        id: 'LIATE',
        formula: '\\text{Regla LIATE}',
        desc: 'Orden de prioridad para elegir u: Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial.',
      },
      {
        id: 'L',
        formula: '\\int \\ln x\\,dx',
        desc: 'Elige u = ln x y dv = dx (el logaritmo no se integra fácil).',
      },
      {
        id: 'A',
        formula: '\\int x^n e^x\\,dx',
        desc: 'Elige u = xⁿ (algebraica) y dv = eˣ dx; repite o usa tabla.',
      },
      {
        id: 'I',
        formula: '\\int \\arctan x\\,dx',
        desc: 'Elige u = arctan x y dv = dx (la inversa trigonométrica no se integra fácil).',
      },
    ],
  },
  {
    title: 'Casos especiales',
    items: [
      {
        id: 'C1',
        formula: '\\int e^x \\sin x\\,dx',
        desc: 'Caso cíclico: aplica partes dos veces y despeja la integral original.',
      },
      {
        id: 'C2',
        formula: '\\int x^n e^x\\,dx',
        desc: 'Tabla (DI): deriva u = xⁿ sucesivamente e integra dv = eˣ dx.',
      },
    ],
  },
];
