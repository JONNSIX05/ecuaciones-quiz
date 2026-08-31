// data/calculo-integral/formulario.js
// Formulario de integrales inmediatas (fórmulas 1–23 + 19a).
// Referencia usada como pista en el quiz y como pantalla de estudio.

export const formulario = {
  title: 'Formulario de integrales inmediatas',
  intro: 'Fórmulas de integración directa (1–23). Úsalas para identificar qué fórmula aplica en cada integral.',
  sections: [
    {
      title: 'Linealidad y básicas',
      items: [
        {
          id: '1',
          formula: '\\int (du + dv - dw) = \\int du + \\int dv - \\int dw',
          desc: 'Integral de una suma y resta',
        },
        {
          id: '2',
          formula: '\\int a\\,dv = a \\int dv',
          desc: 'Constante que multiplica',
        },
        {
          id: '3',
          formula: '\\int dx = x + C',
          desc: 'Diferencial de x',
        },
      ],
    },
    {
      title: 'Potencia y logaritmo',
      items: [
        {
          id: '4',
          formula: '\\int v^n\\,dv = \\frac{v^{n+1}}{n+1} + C \\quad (n \\neq -1)',
          desc: 'Regla de la potencia',
        },
        {
          id: '5',
          formula: '\\int \\frac{dv}{v} = \\ln|v| + C',
          desc: 'Recíproco de v',
        },
      ],
    },
    {
      title: 'Exponenciales',
      items: [
        {
          id: '6',
          formula: '\\int a^v\\,dv = \\frac{a^v}{\\ln a} + C',
          desc: 'Exponencial de base a',
        },
        {
          id: '7',
          formula: '\\int e^v\\,dv = e^v + C',
          desc: 'Exponencial natural',
        },
      ],
    },
    {
      title: 'Trigonométricas directas',
      items: [
        {
          id: '8',
          formula: '\\int \\sin v\\,dv = -\\cos v + C',
          desc: 'Seno',
        },
        {
          id: '9',
          formula: '\\int \\cos v\\,dv = \\sin v + C',
          desc: 'Coseno',
        },
        {
          id: '10',
          formula: '\\int \\sec^2 v\\,dv = \\tan v + C',
          desc: 'Secante cuadrada',
        },
        {
          id: '11',
          formula: '\\int \\csc^2 v\\,dv = -\\cot v + C',
          desc: 'Cosecante cuadrada',
        },
        {
          id: '12',
          formula: '\\int \\sec v \\tan v\\,dv = \\sec v + C',
          desc: 'Secante por tangente',
        },
        {
          id: '13',
          formula: '\\int \\csc v \\cot v\\,dv = -\\csc v + C',
          desc: 'Cosecante por cotangente',
        },
      ],
    },
    {
      title: 'Trigonométricas no directas',
      items: [
        {
          id: '14',
          formula: '\\int \\tan v\\,dv = -\\ln|\\cos v| + C = \\ln|\\sec v| + C',
          desc: 'Tangente',
        },
        {
          id: '15',
          formula: '\\int \\cot v\\,dv = \\ln|\\sin v| + C',
          desc: 'Cotangente',
        },
        {
          id: '16',
          formula: '\\int \\sec v\\,dv = \\ln|\\sec v + \\tan v| + C',
          desc: 'Secante',
        },
        {
          id: '17',
          formula: '\\int \\csc v\\,dv = \\ln|\\csc v - \\cot v| + C',
          desc: 'Cosecante',
        },
      ],
    },
    {
      title: 'Con inversas trigonométricas y logaritmos',
      items: [
        {
          id: '18',
          formula: '\\int \\frac{dv}{v^2 + a^2} = \\frac{1}{a} \\arctan\\frac{v}{a} + C',
          desc: 'Arcocotangente (o arcotangente)',
        },
        {
          id: '19',
          formula: '\\int \\frac{dv}{v^2 - a^2} = \\frac{1}{2a} \\ln\\left|\\frac{v-a}{v+a}\\right| + C \\quad (v^2 > a^2)',
          desc: 'Diferencia de cuadrados (v² > a²)',
        },
        {
          id: '19a',
          formula: '\\int \\frac{dv}{a^2 - v^2} = \\frac{1}{2a} \\ln\\left|\\frac{a+v}{a-v}\\right| + C \\quad (v^2 < a^2)',
          desc: 'Diferencia de cuadrados (v² < a²)',
        },
        {
          id: '20',
          formula: '\\int \\frac{dv}{\\sqrt{a^2 - v^2}} = \\arcsin\\frac{v}{a} + C',
          desc: 'Arcoseno',
        },
      ],
    },
    {
      title: 'Con raíces cuadradas',
      items: [
        {
          id: '21',
          formula: '\\int \\frac{dv}{\\sqrt{v^2 \\pm a^2}} = \\ln\\left|v + \\sqrt{v^2 \\pm a^2}\\right| + C',
          desc: 'Raíz de v² ± a² en el denominador',
        },
        {
          id: '22',
          formula: '\\int \\sqrt{a^2 - v^2}\\,dv = \\frac{v}{2}\\sqrt{a^2 - v^2} + \\frac{a^2}{2}\\arcsin\\frac{v}{a} + C',
          desc: 'Raíz de a² − v²',
        },
        {
          id: '23',
          formula: '\\int \\sqrt{v^2 \\pm a^2}\\,dv = \\frac{v}{2}\\sqrt{v^2 \\pm a^2} \\pm \\frac{a^2}{2}\\ln\\left|v + \\sqrt{v^2 \\pm a^2}\\right| + C',
          desc: 'Raíz de v² ± a²',
        },
      ],
    },
  ],
};
