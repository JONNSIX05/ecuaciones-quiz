// data/algebra/exponentes/exponente-fraccionario.js
// Ley 8: Exponente fraccionario  ->  a^{m/n} = \sqrt[n]{a^m}

export default {
  lawId: 'exponente-fraccionario',
  lawName: 'Exponente fraccionario',
  lawFormula: 'a^{m/n} = \\sqrt[n]{a^m}',
  prerequisites: 'Conocer radicales y potencias.',
  available: true,
  questions: [
    // ---------- Fáciles (5) ----------
    {
      id: 'expfrac-f-01',
      difficulty: 'easy',
      prompt: 'Simplifica: $4^{1/2}$',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '\\frac{1}{2}', correct: false },
        { latex: '16', correct: false }
      ],
      explanation:
        '$4^{1/2} = \\sqrt{4} = 2$. El exponente $1/2$ es la raíz cuadrada.'
    },
    {
      id: 'expfrac-f-02',
      difficulty: 'easy',
      prompt: 'Simplifica: $x^{1/2}$',
      options: [
        { latex: '\\sqrt{x}', correct: true },
        { latex: 'x', correct: false },
        { latex: 'x^2', correct: false },
        { latex: '\\frac{1}{x}', correct: false }
      ],
      explanation:
        '$x^{1/2} = \\sqrt{x}$. El exponente fraccionario se convierte en radical.'
    },
    {
      id: 'expfrac-f-03',
      difficulty: 'easy',
      prompt: 'Simplifica: $9^{1/2}$',
      options: [
        { latex: '3', correct: true },
        { latex: '9', correct: false },
        { latex: '\\frac{1}{3}', correct: false },
        { latex: '81', correct: false }
      ],
      explanation:
        '$9^{1/2} = \\sqrt{9} = 3$.'
    },
    {
      id: 'expfrac-f-04',
      difficulty: 'easy',
      prompt: 'Simplifica: $8^{1/3}$',
      options: [
        { latex: '2', correct: true },
        { latex: '4', correct: false },
        { latex: '8', correct: false },
        { latex: '\\frac{1}{2}', correct: false }
      ],
      explanation:
        '$8^{1/3} = \\sqrt[3]{8} = 2$, porque $2^3 = 8$.'
    },
    {
      id: 'expfrac-f-05',
      difficulty: 'easy',
      prompt: 'Simplifica: $16^{1/2}$',
      options: [
        { latex: '4', correct: true },
        { latex: '16', correct: false },
        { latex: '8', correct: false },
        { latex: '\\frac{1}{4}', correct: false }
      ],
      explanation:
        '$16^{1/2} = \\sqrt{16} = 4$.'
    },

    // ---------- Medias (5) ----------
    {
      id: 'expfrac-m-01',
      difficulty: 'medium',
      prompt: 'Simplifica: $8^{2/3}$',
      options: [
        { latex: '4', correct: true },
        { latex: '2', correct: false },
        { latex: '16', correct: false },
        { latex: '64', correct: false }
      ],
      explanation:
        '$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Primero la raíz, luego la potencia.'
    },
    {
      id: 'expfrac-m-02',
      difficulty: 'medium',
      prompt: 'Simplifica: $27^{1/3}$',
      options: [
        { latex: '3', correct: true },
        { latex: '9', correct: false },
        { latex: '27', correct: false },
        { latex: '\\frac{1}{3}', correct: false }
      ],
      explanation:
        '$27^{1/3} = \\sqrt[3]{27} = 3$, porque $3^3 = 27$.'
    },
    {
      id: 'expfrac-m-03',
      difficulty: 'medium',
      prompt: 'Simplifica: $16^{3/4}$',
      options: [
        { latex: '8', correct: true },
        { latex: '4', correct: false },
        { latex: '12', correct: false },
        { latex: '64', correct: false }
      ],
      explanation:
        '$16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$, porque $2^4 = 16$.'
    },
    {
      id: 'expfrac-m-04',
      difficulty: 'medium',
      prompt: 'Simplifica: $x^{3/2}$',
      options: [
        { latex: 'x\\sqrt{x}', correct: true },
        { latex: '\\sqrt{x}', correct: false },
        { latex: 'x^3', correct: false },
        { latex: 'x^{2/3}', correct: false }
      ],
      explanation:
        '$x^{3/2} = x^{1 + 1/2} = x \\cdot x^{1/2} = x\\sqrt{x}$.'
    },
    {
      id: 'expfrac-m-05',
      difficulty: 'medium',
      prompt: 'Simplifica: $32^{1/5}$',
      options: [
        { latex: '2', correct: true },
        { latex: '5', correct: false },
        { latex: '32', correct: false },
        { latex: '\\frac{1}{5}', correct: false }
      ],
      explanation:
        '$32^{1/5} = \\sqrt[5]{32} = 2$, porque $2^5 = 32$.'
    },

    // ---------- Difíciles (5) ----------
    {
      id: 'expfrac-h-01',
      difficulty: 'hard',
      prompt: 'Simplifica: $64^{2/3}$',
      options: [
        { latex: '16', correct: true },
        { latex: '8', correct: false },
        { latex: '32', correct: false },
        { latex: '4', correct: false }
      ],
      explanation:
        '$64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = 16$, porque $4^3 = 64$.'
    },
    {
      id: 'expfrac-h-02',
      difficulty: 'hard',
      prompt: 'Simplifica: $27^{2/3}$',
      options: [
        { latex: '9', correct: true },
        { latex: '3', correct: false },
        { latex: '18', correct: false },
        { latex: '81', correct: false }
      ],
      explanation:
        '$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$.'
    },
    {
      id: 'expfrac-h-03',
      difficulty: 'hard',
      prompt: 'Simplifica: $x^{1/2} \\cdot x^{1/2}$',
      options: [
        { latex: 'x', correct: true },
        { latex: '\\sqrt{x}', correct: false },
        { latex: 'x^2', correct: false },
        { latex: 'x^{1/4}', correct: false }
      ],
      explanation:
        'Suma de exponentes: $\\frac{1}{2} + \\frac{1}{2} = 1$, por lo que $x^1 = x$.'
    },
    {
      id: 'expfrac-h-04',
      difficulty: 'hard',
      prompt: 'Si $x^{1/2} = 5$, ¿cuál es el valor de $x$?',
      options: [
        { latex: '25', correct: true },
        { latex: '5', correct: false },
        { latex: '10', correct: false },
        { latex: '\\sqrt{5}', correct: false }
      ],
      explanation:
        'Si $\\sqrt{x} = 5$, entonces $x = 5^2 = 25$.'
    },
    {
      id: 'expfrac-h-05',
      difficulty: 'hard',
      prompt: 'Simplifica: $81^{3/4}$',
      options: [
        { latex: '27', correct: true },
        { latex: '9', correct: false },
        { latex: '12', correct: false },
        { latex: '243', correct: false }
      ],
      explanation:
        '$81^{3/4} = (\\sqrt[4]{81})^3 = 3^3 = 27$, porque $3^4 = 81$.'
    }
  ]
};
