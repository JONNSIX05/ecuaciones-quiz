# PLAN.md — Backup del plan activo

> Regla definida en `AGENTS.md` → "Plan activo".

## Objetivo

Implementar la sección **Cálculo Integral** con 4 subtemas:
1. **Integrales inmediatas** — fórmulas 1–23 del PDF + identificación + sustitución.
2. **Integración por partes**.
3. **Integración por fracciones parciales**.
4. **Sustitución trigonométrica**.

Pool total ~155 preguntas, dificultades mezcladas. Sin librerías nuevas, sin CDN.

## Diagnóstico

- `data/calculo-integral/` no existe.
- `js/sections.js`: `calculo-integral` con `available: false`, `module: null`.
- Patrón ya establecido: subtema con `studyContent` (pantalla de estudio), pool
  unificado por subtema (estilo derivación), quiz engine agnóstico al tamaño del pool.
- `js/app.js`:
  - `renderStudySection` (línea ~265) itera `formulario.sections[sectionIndex]`.
  - Modal "Formulario" se activa solo en `section.id === 'calculo-diferencial'`
    (líneas ~281 y ~528). Hay que generalizar para `calculo-integral`.
- PDF del profesor: escaneado (imágenes). No legible por el modelo → se usa el
  formulario canónico de 23 fórmulas + 19a. VERIFICAR numeración contra el PDF.

## Fórmulas (formulario canónico)

1. ∫(du+dv−dw) = ∫du + ∫dv − ∫dw
2. ∫a dv = a ∫dv
3. ∫dx = x + C
4. ∫vⁿ dv = vⁿ⁺¹/(n+1) + C  (n ≠ −1)
5. ∫dv/v = ln|v| + C
6. ∫aᵛ dv = aᵛ/ln a + C
7. ∫eᵛ dv = eᵛ + C
8. ∫sen v dv = −cos v + C
9. ∫cos v dv = sen v + C
10. ∫sec²v dv = tan v + C
11. ∫csc²v dv = −cot v + C
12. ∫sec v tan v dv = sec v + C
13. ∫csc v cot v dv = −csc v + C
14. ∫tan v dv = −ln|cos v| + C = ln|sec v| + C
15. ∫cot v dv = ln|sen v| + C
16. ∫sec v dv = ln|sec v + tan v| + C
17. ∫csc v dv = ln|csc v − cot v| + C
18. ∫dv/(v²+a²) = (1/a) arctan(v/a) + C
19. ∫dv/(v²−a²) = (1/2a) ln|(v−a)/(v+a)| + C  (v² > a²)
19a. ∫dv/(a²−v²) = (1/2a) ln|(a+v)/(a−v)| + C  (v² < a²)
20. ∫dv/√(a²−v²) = arcsen(v/a) + C
21. ∫dv/√(v²±a²) = ln|v + √(v²±a²)| + C
22. ∫√(a²−v²) dv = (v/2)√(a²−v²) + (a²/2) arcsen(v/a) + C
23. ∫√(v²±a²) dv = (v/2)√(v²±a²) ± (a²/2) ln|v + √(v²±a²)| + C

## Cambios estructurales

### Crear

```
data/calculo-integral/
├── index.js
├── formulario.js                 # fórmulas 1–23 + 19a (referencia)
├── inmediatas/
│   ├── index.js                  # studyContent → formulario.js
│   └── preguntas-inmediatas.js   # ~85 preguntas (int-)
├── partes/
│   ├── index.js                  # studyContent → contenido-partes.js
│   ├── contenido-partes.js
│   └── preguntas-partes.js       # ~25 preguntas (par-)
├── fracciones-parciales/
│   ├── index.js                  # studyContent → contenido-fracciones.js
│   ├── contenido-fracciones.js
│   └── preguntas-fracciones-parciales.js  # ~30 preguntas (fra-)
└── sustitucion-trigonometrica/
    ├── index.js                  # sin studyContent
    └── preguntas-sustitucion.js  # ~15 preguntas (sust-)
```

### Modificar

- `js/sections.js` — importar módulo, `available: true`.
- `js/app.js` — `renderStudySection` acepta `items` inline; generalizar modal.
- `AGENTS.md` — nueva estructura.

## Esquema de datos

Mismo que derivación. `studyContent` en 3 subtemas (inmediatas apunta a
`formulario.js` por `sectionIndex`; partes y fracciones usan `groups` con
`items` inline). Preguntas canónicas `{ id, difficulty, prompt, options, explanation }`.

## Distribución del pool (~155)

| Subtema | easy | medium | hard | Total |
|---|---|---|---|---|
| Inmediatas | 30 | 30 | 25 | 85 |
| Partes | 8 | 10 | 7 | 25 |
| Fracciones parciales | 10 | 12 | 8 | 30 |
| Sustitución trigonométrica | 5 | 6 | 4 | 15 |
| Total | 53 | 58 | 44 | 155 |

IDs: `int-`, `par-`, `fra-`, `sust-` + `-f`/`-m`/`-h`.

## Criterios de verificación

- Menú: Cálculo Integral disponible (3 secciones).
- 4 subtemas. studyContent en inmediatas/partes/fracciones.
- Slider llega a 85/25/30/15.
- Modal "Formulario" en los 4 subtemas.
- localStorage guarda `eqd:result:<lawId>`.
- Pool ≥ 100 (objetivo 155).
- Límites y Derivación intactos. Cero errores en consola.

## Commit sugerido

`se implementa seccion calculo integral con 4 subtemas y pool de 155 preguntas`
