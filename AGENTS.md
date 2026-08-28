# AGENTS.md

Guía de desarrollo para el **Quiz de Ecuaciones Diferenciales**.

## Resumen del proyecto

Quiz interactivo de opción múltiple para estudiar conceptos base de la materia de
Ecuaciones Diferenciales. Organizado en 3 secciones (Álgebra, Cálculo Diferencial,
Cálculo Integral). Las ecuaciones y funciones se presentan con **LaTeX** vía **KaTeX**.

Objetivo de despliegue: subirlo a **Moodle** o, si no es posible, hostearlo en
**GitHub Pages**.

## Stack y restricciones

- **Solo HTML, CSS y JavaScript vanilla.** Prohibido usar frameworks o librerías
  de UI (React, Vue, Tailwind, Bootstrap, jQuery, etc.).
- **Sin bundlers ni build step** (no Vite, no Webpack, no npm). Se edita y se abre
  directo en el navegador.
- **ES modules** (`type="module"`) para organizar el código.
- **KaTeX self-hosted** en `vendor/katex/`. No usar CDN para KaTeX (debe funcionar
  offline dentro de Moodle).
- **Sin dependencias de red.** Todo debe funcionar con `file://` o servidor estático.
- Rutas **siempre relativas** (`./css/...`, `./vendor/...`), nunca absolutas (`/css`).

## Skills relevantes

Usar estas skills de opencode cuando aplique:

- `frontend-design` — para la interfaz (HTML/CSS/JS puros con estética cuidada).
- `accessibility` — accesibilidad WCAG 2.2 (ARIA, foco visible, teclado, contraste).
- `seo` — meta-tags y sitemap cuando se prepare el deploy a GitHub Pages.

**No aplican** (stack vanilla-only): `tailwind-css-patterns`, `vite`,
`nodejs-best-practices`, `nodejs-backend-patterns`, `vercel-react-best-practices`,
`vercel-composition-patterns`, `nestjs-best-practices`, `prisma-*`, `figma-*`,
`bash-defensive-patterns`, `typescript-advanced-types`.

## Estructura de carpetas

```
Ecuaciones/
├── index.html                     # Única página (SPA, router por hash)
├── css/
│   ├── base.css                   # Reset, variables, tipografía, layout
│   └── quiz.css                   # Estilos de vistas (menú, config, quiz, resultados)
├── js/
│   ├── app.js                     # Router hash + bootstrap + render de vistas
│   ├── quiz-engine.js             # Selección de preguntas, scoring, feedback
│   ├── latex.js                   # Wrapper de KaTeX (init + render seguro)
│   └── storage.js                 # localStorage (último intento por ley)
├── data/
│   └── algebra/
│       └── exponentes/
│           ├── index.js           # Re-exporta las leyes + metadata
│           ├── producto.js        # Ley 1: Producto de potencias
│           ├── cociente.js        # Ley 2: Cociente de potencias
│           ├── potencia-potencia.js
│           ├── potencia-producto.js
│           ├── potencia-cociente.js
│           ├── exponente-cero.js
│           ├── exponente-negativo.js
│           └── exponente-fraccionario.js
├── vendor/katex/                  # KaTeX self-hosted (css + js + fonts)
└── AGENTS.md
```

## Esquema de pregunta (canónico)

```js
// data/algebra/exponentes/producto.js
export default {
  lawId: 'producto',
  lawName: 'Producto de potencias de igual base',
  lawFormula: 'a^m \\cdot a^n = a^{m+n}',
  prerequisites: 'Conocer potencias y exponentes enteros.',
  questions: [
    {
      id: 'prod-f-01',
      difficulty: 'easy',              // 'easy' | 'medium' | 'hard'
      prompt: 'Simplifica: 3^2 \\cdot 3^4',
      options: [
        { latex: '3^6', correct: true },
        { latex: '3^8', correct: false },
        { latex: '9^6', correct: false },
        { latex: '6^{2\\cdot4}', correct: false }
      ],
      explanation: 'Misma base, se suman exponentes: 3^{2+4} = 3^6.'
    }
  ]
};
```

### Reglas de los datos

- `id` único por pregunta, con prefijo de ley (ej. `prod-`, `coc-`, `potpot-`).
- Sufijo de dificultad en `id`: `-f` (fácil), `-m` (medio), `-h` (difícil).
- Cada ley tiene **15 preguntas**: 5 fáciles + 5 medias + 5 difíciles.
- `options` debe tener **exactamente 4** opciones y **exactamente 1** `correct: true`.
- `explanation` debe explicar el razonamiento (no solo el resultado).

## Las 8 leyes de los exponentes

1. **Producto de igual base** — `a^m · a^n = a^{m+n}`
2. **Cociente de igual base** — `a^m / a^n = a^{m-n}`
3. **Potencia de potencia** — `(a^m)^n = a^{m·n}`
4. **Potencia de un producto** — `(a·b)^n = a^n · b^n`
5. **Potencia de un cociente** — `(a/b)^n = a^n / b^n`
6. **Exponente cero** — `a^0 = 1`, con `a ≠ 0`
7. **Exponente negativo** — `a^{-n} = 1/a^n`
8. **Exponente fraccionario** — `a^{m/n} = \sqrt[n]{a^m}`

## Convenciones

- **Copy en español**, sin acentos en identificadores (ids, claves) para evitar
  problemas de encoding en Moodle.
- **Sin emojis** salvo que el usuario los pida explícitamente.
- **Accesibilidad**: botones de opción con `role`/`aria`, foco visible, contraste AA,
  atajos de teclado `1`–`4` para elegir opción.
- **Sanitizar** todo `prompt` y `options[].latex` antes de pasarlo a KaTeX
  (`throwOnError: false`) para no romper la UI.
- Cada pregunta renderiza LaTeX con `displayMode: true` (centrado, grande).
- Sin `console.log` en producción. Sin archivos muertos.

## Comandos

Servir localmente (necesario para ES modules en algunos navegadores):

```powershell
# Python 3
python -m http.server 8080

# o con Node/npx
npx serve .
```

Abrir `http://localhost:8080` en el navegador.

## Checklist pre-commit

- [ ] No hay CDN externos (KaTeX es local).
- [ ] Rutas relativas, no absolutas.
- [ ] Sin `console.log` ni `debugger`.
- [ ] Accesibilidad básica: foco visible, teclado funciona, contraste AA.
- [ ] Abrir `index.html` funciona offline (DevTools → Offline).

## Hosting

### GitHub Pages

1. Subir el repo a GitHub.
2. Settings → Pages → Source: `main` branch (o `docs/` si aplica).
3. La app usa rutas relativas, así que funciona en subrutas (`/repo/`).

### Moodle

1. Comprimir el proyecto en un `.zip` manteniendo las carpetas.
2. Subirlo como recurso **Archivo** o **Paquete de contenido IMS**.
3. Verificar que las rutas relativas y KaTeX local funcionan sin internet.
