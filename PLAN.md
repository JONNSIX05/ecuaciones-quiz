# PLAN.md — Backup del plan activo

> Regla definida en `AGENTS.md` → "Plan activo".

## Objetivo

Integrar la app clonada `UlisesAriasS/Ecuaciones-quiziz` (en `D:\8proyecto\EcuacionesU`)
como una **sección nueva "Práctica libre"** en el proyecto principal. Conserva su modelo
interactivo: el alumno escribe su expresión LaTeX, la app detecta qué método/fórmula aplicar
y muestra 4 opciones con explicación.

## Diagnóstico del clon

- `js/app.js` — 15 reglas en `rules[]`, cada una con `match(latex)` regex y `getOptions()`
  que devuelve `{ correct, explanation (HTML), distractors }`.
- Interacción: textarea → live preview KaTeX → "Comenzar quiz" → `analyzeExpression` → topic + 4 opciones + explicación.
- Scoring propio: +10 correcta, −5 incorrecta.
- KaTeX desde CDN (hay que usar el self-hosted del proyecto).
- Script plano (hay que portar a ES module).
- `patchApp.js`, `patchExp.js`, `richExplanations.js`, `updateExplanations.js` son dev helpers (no se importan).

## Cambios estructurales

### Crear
- `data/practica-libre/rules.js` — 15 reglas portadas.
- `data/practica-libre/index.js` — API de sección (sectionId, sectionName, subtemas, getSubtema, getLaw).
- `js/practica-libre.js` — `renderPracticaLibre`, `analyzeExpression`, `renderRichText`.

### Modificar
- `js/sections.js` — nueva entrada `{ id: 'practica-libre', index: '04', ... }`.
- `js/app.js` — rama router + vista.
- `css/quiz.css` — estilos `.practica-*`.
- `AGENTS.md` — estructura + nota del clon.

## Decisiones

- Sección propia (4ª tarjeta del menú), sin lista de leyes ni studyContent: va directo al input.
- Scoring propio del clon (+10/−5), no usa el motor de quiz del proyecto.
- Explicaciones HTML con whitelist (`<b>`, `<i>`, `<br>`) vía `renderRichText`.
- Historial local en `localStorage` `eqd:practice` (JSON array) para no perder intentos antes de Supabase.

## Criterios de verificación

- Menú 4 secciones. "Práctica libre" accesible.
- Input + preview + "Detectar método".
- `\int x^2 dx` → "Integral de una Potencia (Directa)".
- `\sin^2(x) + \cos^2(x)` → "Identidad Trigonométrica (Pitagórica)".
- Sin reconocimiento → alert.
- Correcta → verde + explicación; incorrecta → rojo + explicación.
- Score +10/−5 visible.
- "Probar otra" vuelve al input.
- `localStorage.eqd:practice` se actualiza.
- Otras 3 secciones intactas. Sin errores en consola.

## Commit sugerido

`se integra seccion practica libre con deteccion interactiva de expresiones`
