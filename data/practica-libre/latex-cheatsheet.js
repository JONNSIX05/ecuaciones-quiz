// data/practica-libre/latex-cheatsheet.js
// Diccionario de comandos LaTeX para la sección "Práctica libre".
// Cada item se renderiza con KaTeX y, al hacer click, se inserta en el input.

export const cheatsheet = [
  {
    title: 'Fracciones y raíces',
    items: [
      { example: '\\frac{a}{b}', desc: 'Fracción' },
      { example: '\\sqrt{x}', desc: 'Raíz cuadrada' },
      { example: '\\sqrt[n]{x}', desc: 'Raíz n-ésima' },
    ],
  },
  {
    title: 'Potencias y sumas',
    items: [
      { example: 'x^2', desc: 'Potencia' },
      { example: 'x^{n}', desc: 'Potencia genérica' },
      { example: 'x + y', desc: 'Suma' },
      { example: 'x - y', desc: 'Resta' },
      { example: 'a \\cdot b', desc: 'Multiplicación' },
    ],
  },
  {
    title: 'Trigonométricas',
    items: [
      { example: '\\sin(x)', desc: 'Seno' },
      { example: '\\cos(x)', desc: 'Coseno' },
      { example: '\\tan(x)', desc: 'Tangente' },
      { example: '\\cot(x)', desc: 'Cotangente' },
      { example: '\\sec(x)', desc: 'Secante' },
      { example: '\\csc(x)', desc: 'Cosecante' },
      { example: '\\sin^2(x)', desc: 'Seno al cuadrado' },
    ],
  },
  {
    title: 'Logaritmos y exponenciales',
    items: [
      { example: '\\ln(x)', desc: 'Logaritmo natural' },
      { example: '\\log(x)', desc: 'Logaritmo decimal' },
      { example: '\\log_a(x)', desc: 'Logaritmo base a' },
      { example: 'e^x', desc: 'Exponencial e' },
      { example: 'a^x', desc: 'Exponencial base a' },
    ],
  },
  {
    title: 'Derivadas e integrales',
    items: [
      { example: '\\frac{d}{dx}f(x)', desc: 'Derivada' },
      { example: 'f\'(x)', desc: 'Derivada (prima)' },
      { example: '\\int f(x)\\,dx', desc: 'Integral indefinida' },
      { example: 'f(g(x))', desc: 'Composición f(g(x))' },
    ],
  },
  {
    title: 'Productos notables y casos',
    items: [
      { example: '(a + b)^2', desc: 'Binomio al cuadrado' },
      { example: '(a - b)(a + b)', desc: 'Diferencia de cuadrados' },
      { example: 'a^3 + b^3', desc: 'Suma de cubos' },
      { example: 'a^3 - b^3', desc: 'Diferencia de cubos' },
      { example: '\\frac{P(x)}{Q(x)}', desc: 'Cociente de polinomios' },
    ],
  },
];
