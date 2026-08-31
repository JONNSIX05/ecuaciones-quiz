// data/calculo-diferencial/formulario.js
// Formulario de derivación (fórmulas I–XXVI) usado como pista en el quiz.

export const formulario = {
  title: 'Formulario de Derivación',
  intro: 'Fórmulas de derivación directa (I–XXVI). Úsalo como apoyo para identificar la regla correcta.',
  sections: [
    {
      title: 'Reglas básicas',
      items: [
        {
          id: 'I',
          formula: '\\frac{d}{dx}(c) = 0',
          desc: 'Derivada de una constante',
        },
        {
          id: 'II',
          formula: '\\frac{d}{dx}(x) = 1',
          desc: 'Derivada de la identidad',
        },
        {
          id: 'III',
          formula: '\\frac{d}{dx}(u + v - w) = \\frac{du}{dx} + \\frac{dv}{dx} - \\frac{dw}{dx}',
          desc: 'Suma y resta de funciones',
        },
        {
          id: 'IV',
          formula: '\\frac{d}{dx}(c v) = c \\frac{dv}{dx}',
          desc: 'Constante por una función',
        },
        {
          id: 'V',
          formula: '\\frac{d}{dx}(u v) = u \\frac{dv}{dx} + v \\frac{du}{dx}',
          desc: 'Producto de dos funciones',
        },
        {
          id: 'VI',
          formula: '\\frac{d}{dx}(v^n) = n v^{n-1} \\frac{dv}{dx}',
          desc: 'Potencia de una función (general)',
        },
        {
          id: 'VIa',
          formula: '\\frac{d}{dx}(x^n) = n x^{n-1}',
          desc: 'Potencia de x (caso particular de VI)',
        },
        {
          id: 'VII',
          formula: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}',
          desc: 'Cociente de dos funciones',
        },
        {
          id: 'VIIa',
          formula: '\\frac{d}{dx}\\left(\\frac{u}{c}\\right) = \\frac{\\frac{du}{dx}}{c}',
          desc: 'Función dividida entre una constante',
        },
      ],
    },
    {
      title: 'Regla de la cadena y función inversa',
      items: [
        {
          id: 'VIII',
          formula: '\\frac{dy}{dx} = \\frac{dy}{dv} \\cdot \\frac{dv}{dx}',
          desc: 'Regla de la cadena (y es función de v, v es función de x)',
        },
        {
          id: 'IX',
          formula: '\\frac{dy}{dx} = \\frac{1}{\\frac{dx}{dy}}',
          desc: 'Derivación de la función inversa (y es función de x)',
        },
      ],
    },
    {
      title: 'Logarítmicas y exponenciales',
      items: [
        {
          id: 'X',
          formula: '\\frac{d}{dx}(\\ln v) = \\frac{\\frac{dv}{dx}}{v}',
          desc: 'Logaritmo natural',
        },
        {
          id: 'Xa',
          formula: '\\frac{d}{dx}(\\log v) = \\frac{\\log e}{v} \\cdot \\frac{dv}{dx}',
          desc: 'Logaritmo decimal',
        },
        {
          id: 'XI',
          formula: '\\frac{d}{dx}(a^v) = a^v \\ln a \\cdot \\frac{dv}{dx}',
          desc: 'Exponencial de base a',
        },
        {
          id: 'XIa',
          formula: '\\frac{d}{dx}(e^v) = e^v \\frac{dv}{dx}',
          desc: 'Exponencial natural',
        },
        {
          id: 'XII',
          formula: '\\frac{d}{dx}(u^v) = v u^{v-1} \\frac{du}{dx} + \\ln u \\cdot u^v \\frac{dv}{dx}',
          desc: 'Derivación logarítmica (base y exponente funciones)',
        },
      ],
    },
    {
      title: 'Trigonométricas',
      items: [
        {
          id: 'XIII',
          formula: '\\frac{d}{dx}(\\sin v) = \\cos v \\cdot \\frac{dv}{dx}',
          desc: 'Seno',
        },
        {
          id: 'XIV',
          formula: '\\frac{d}{dx}(\\cos v) = -\\sin v \\cdot \\frac{dv}{dx}',
          desc: 'Coseno',
        },
        {
          id: 'XV',
          formula: '\\frac{d}{dx}(\\tan v) = \\sec^2 v \\cdot \\frac{dv}{dx}',
          desc: 'Tangente',
        },
        {
          id: 'XVI',
          formula: '\\frac{d}{dx}(\\cot v) = -\\csc^2 v \\cdot \\frac{dv}{dx}',
          desc: 'Cotangente',
        },
        {
          id: 'XVII',
          formula: '\\frac{d}{dx}(\\sec v) = \\sec v \\tan v \\cdot \\frac{dv}{dx}',
          desc: 'Secante',
        },
        {
          id: 'XVIII',
          formula: '\\frac{d}{dx}(\\csc v) = -\\csc v \\cot v \\cdot \\frac{dv}{dx}',
          desc: 'Cosecante',
        },
        {
          id: 'XIX',
          formula: '\\frac{d}{dx}(\\operatorname{vers} v) = \\sin v \\cdot \\frac{dv}{dx}',
          desc: 'Seno verso (vers v = 1 − cos v)',
        },
      ],
    },
    {
      title: 'Trigonométricas inversas',
      items: [
        {
          id: 'XX',
          formula: '\\frac{d}{dx}(\\arcsin v) = \\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}',
          desc: 'Arcoseno',
        },
        {
          id: 'XXI',
          formula: '\\frac{d}{dx}(\\arccos v) = -\\frac{\\frac{dv}{dx}}{\\sqrt{1 - v^2}}',
          desc: 'Arcocoseno',
        },
        {
          id: 'XXII',
          formula: '\\frac{d}{dx}(\\arctan v) = \\frac{\\frac{dv}{dx}}{1 + v^2}',
          desc: 'Arcotangente',
        },
        {
          id: 'XXIII',
          formula: '\\frac{d}{dx}(\\operatorname{arccot} v) = -\\frac{\\frac{dv}{dx}}{1 + v^2}',
          desc: 'Arcocotangente',
        },
        {
          id: 'XXIV',
          formula: '\\frac{d}{dx}(\\operatorname{arcsec} v) = \\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}',
          desc: 'Arcosecante',
        },
        {
          id: 'XXV',
          formula: '\\frac{d}{dx}(\\operatorname{arccsc} v) = -\\frac{\\frac{dv}{dx}}{v \\sqrt{v^2 - 1}}',
          desc: 'Arcocosecante',
        },
        {
          id: 'XXVI',
          formula: '\\frac{d}{dx}(\\operatorname{arcvers} v) = \\frac{\\frac{dv}{dx}}{\\sqrt{2v - v^2}}',
          desc: 'Arco verso',
        },
      ],
    },
  ],
};
