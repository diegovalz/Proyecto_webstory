# Proceso de Desarrollo e Implementación con Apoyo de IA y Vibecoding

**Proyecto:** *La prima del oro británico: Cuando el mercado cobra el «Impuesto Premier» (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  

---

## 1. Especificación de la Webstory: Qué debe comunicar y cómo debe comportarse

### Objetivo Comunicativo
La webstory tiene como propósito demostrar empíricamente que el encarecimiento del mercado de fichajes de la Premier League entre 2005 y 2026 (**€19.841,9M** pagados frente a **€15.286,8M** de valor real estimado, es decir, **+€4.555,1M** de sobreprecio neto o **+29,8%**) no obedece a la inflación macroeconómica europea (**2,14% promedio anual** según el índice HICP del Banco Central Europeo), sino a una burbuja especulativa interna impulsada por la liquidez televisiva y el ingreso de capitales extranjeros.

### Especificación de Comportamiento e Interacción
1. **Flujo de lectura continuo (*Scrollytelling* vertical):** El lector recorre la historia desde el planteamiento del hallazgo general (Hero Banner + Buscador interactivo de datos + Tarjetas de ejes temáticos + Bloque de 4 KPIs) hacia una metáfora visual lúdica (la balanza de los dos arcos de fútbol y el podio histórico) y luego profundiza en los tres capítulos periodísticos individuales (Sección 01: Sobreprecio por club; Sección 02: Inflación HICP del BCE vs. Recargo Premier; Sección 03: Evolución longitudinal 2005–2026), cerrando con la tabla metodológica auditable de los 20 clubes y las conclusiones.
2. **Exploración sin dependencia de librerías pesadas:** Todas las visualizaciones interactivas se renderizan dinámicamente en SVG desde `docs/script.js`, respondiendo tanto a eventos de cursor (`mouseenter`, `mousemove`) en escritorio como a toques táctiles (`click`, `touchstart`) en teléfonos móviles.
3. **Separación estricta de capas:**
   * [`docs/index.html`](../docs/index.html): Estructura semántica (`<header>`, `<main>`, `<section>`, `<figure>`, `<table>`, `<footer>`), textos periodísticos completos de las tres crónicas y atributos de accesibilidad (`aria-label`, `aria-live`, `role`).
   * [`docs/style.css`](../docs/style.css): Sistema de diseño completo basado en tokens CSS (`:root`), estética de galería nocturna financiera (*Origin Financial* dark theme), tipografía de tres voces y grillas *responsive*.
   * [`docs/script.js`](../docs/script.js): Matrices de datos depurados de las 997 operaciones y serie HICP 2005–2026, motor de consulta en lenguaje natural, animación de arcos de fútbol, renderizado vectorial SVG de los 3 gráficos interactivos y tabla ordenable/filtrable.

---

## 2. Relación entre Hipótesis, Datos, Visualizaciones, Textos, Wireframe e Implementación Web

| Etapa del Proyecto | Decisión Editorial / Investigativa | Traducción en la Implementación Web (`docs/`) |
|:-------------------|:-----------------------------------|:----------------------------------------------|
| **Hipótesis y Datos (Entregas 01–02)** | Cruce de 997 traspasos de Transfermarkt (`Transfers_cleaned2.csv`) con el HICP del BCE (`INFLACION_LIMPIA.csv`) y valoración de clubes (`Valor_Neto_Premier_League.csv`). | Las tres series consolidadas están integradas en estructuras JSON/arrays dentro de `docs/script.js` (`CLUB_DATA`, `YEAR_DATA`, `CLUB_SERIES`, `HICP`), alimentando todos los módulos de la página sin latencia externa. |
| **Visualizaciones Atómicas (Entrega 03)** | Tres gráficos desarrollados originalmente en Python (Pandas + Altair) para probar cada dimensión de la hipótesis. | Convertidos en tres módulos SVG interactivos (`#chart01Wrap`, `#chart02Wrap`, `#chart03Wrap`) con conmutadores de vista, filtros por club, *tooltips* flotantes e inspector de fichajes. |
| **Personas, User Journey y Wireframes (Entrega 04)** | Diseño pensado para **Matías «El Hincha»** (22 años, lectura móvil rápida, metáforas visuales e interacción táctil) y **Claudia «La Economista»** (35 años, rigor metodológico, contraste con el BCE y tabla completa). | Para **Matías** se implementaron la barra de navegación fija con progreso de lectura, el consultor rápido, la balanza animada de balones en dos arcos, el podio interactivo y los botones de compartir en WhatsApp/X. Para **Claudia** se implementaron los conmutadores de tasas HICP vs. BCE, las notas metodológicas y la tabla completa buscable y ordenable por 7 métricas. |
| **Sistema de Diseño (Entrega 04 → 05)** | Estética de galería financiera nocturna (*Origin Financial*): lienzo `#0f1011` (Obsidian), tarjetas cromáticas `#847dff` / `#dd90d8` / `#90b8f0`, señal de datos en `#00b3dd` (Cyan Signal) y bloques invertidos `#cacaca` (Silver). | Implementado íntegramente mediante variables CSS en `docs/style.css`, combinando titulares serif de peso ligero (`Cormorant Garamond` 300), cuerpo `Inter` (`#9f9fa0`) y etiquetas técnicas en mayúsculas (`Roboto Mono`). |

---

## 3. Registro de Encargos Realizados a Herramientas de IA y Vibecoding

Siguiendo los lineamientos del curso, las herramientas de IA (Google AI Studio Build y asistente de programación) se emplearon exclusivamente como soporte técnico de implementación front-end a partir de los textos, datos y bocetos producidos por el equipo:

1. **Encargo 01 — Del boceto a mano al prototipo interactivo (Tarea 03 / Build de Google AI Studio):**
   * *Insumo entregado por el equipo:* Fotografía del boceto dibujado a mano (ver `diseno-historia/recursos/wireframe.pdf`), resumen de las 997 operaciones de Transfermarkt, serie anual del HICP del BCE y estructura de 8 bloques del wireframe de Miro.
   * *Instrucción técnica:* Generar una estructura HTML/CSS/JS sin frameworks que implementara la metáfora dibujada en el boceto (dos arcos de fútbol donde cada balón representa un tramo de millones de euros en gastos vs. valor real, seguidos por el podio interactivo `1° CH`, `2° MU`, `3° MC` y los tres gráficos del equipo).
2. **Encargo 02 — Separación en tres capas (`index.html`, `style.css`, `script.js`) y eliminación de dependencias externas:**
   * *Instrucción técnica:* Refactorizar el código preliminar en tres archivos independientes dentro de `/docs` y reemplazar cualquier librería externa (`Chart.js`) por un motor propio de gráficos vectoriales SVG en JavaScript puro (`renderChart01`, `renderChart02`, `renderChart03`).
3. **Encargo 03 — Aplicación del Sistema de Diseño *Origin Financial* e integración de crónicas completas:**
   * *Instrucción técnica:* Aplicar la paleta de tokens de superficie (`#0f1011` Obsidian, `#090a0b` Abyss, `#2e2e2e` Graphite, `#cacaca` Silver invertido), las tres tarjetas cromáticas de categoría (`#847dff`, `#dd90d8`, `#90b8f0` con `border-radius: 30px`), la señal de datos en `#00b3dd` (Cyan Signal), la jerarquía tipográfica de tres voces (Serif `300` en titulares con palabra inicial en cursiva, Sans `300/400` en cuerpo y `Roboto Mono` en mayúsculas para datos) y el componente de consulta interactiva en el Hero.

---

## 4. Cambios Realizados por el Equipo sobre el Código Generado

El equipo auditó, corrigió y enriqueció el código sugerido en cinco aspectos fundamentales:
1. **Restitución íntegra de las tres crónicas periodísticas:** En el primer prototipo de vibecoding los textos de cada sección habían quedado reducidos a resúmenes de 1 o 2 párrafos. El equipo reincorporó los textos completos redactados por **Diego Valenzuela** (Sección 01), **Juan Tapia** (Sección 02: *"El doble discurso de la Premier"*) y **Valeria Trujillo** (Sección 03: *"La otra inflación de la Premier League"*).
2. **Corrección de la navegación y enlaces institucionales:** Se añadió el enlace directo a la sección de inflación (`#inflacion`) en la barra de navegación superior y en el menú móvil, y se corrigió el enlace del pie de página para que apunte al repositorio oficial del equipo (`https://github.com/diegovalz/Proyecto_webstory`).
3. **Verificación matemática de cifras y unidades:** Se validó que los totales del bloque de KPIs (`€19.841,9M` pagados, `€15.286,8M` tasados, `€4.555,1M` de sobreprecio neto, `272,8%` recargo promedio del Manchester United y `2,14%` inflación promedio del BCE) coincidieran exactamente con los scripts de Python de las Entregas 02 y 03.
4. **Eliminación de scripts residuales:** Se eliminó la etiqueta `<script src="/_aistudio-iframe.js">` que generaba un error 404 en consola al desplegarse en GitHub Pages.
5. **Contraste cromático y legibilidad sin sombras:** Siguiendo las reglas del sistema de diseño, se eliminaron las sombras decorativas en las tarjetas, diferenciando niveles únicamente por escalones de color (`#0f1011` → `#2e2e2e` → `#cacaca`) y asegurando que el cuerpo de texto en `#9f9fa0` mantenga una lectura descansada sobre fondo oscuro.

---

## 5. Problemas Encontrados y Soluciones Aplicadas

* **Problema 1 — Escala dispar entre el gasto de toda la liga y el de un club individual en la balanza de los arcos:** Cuando un balón equivalía a `€250M` (adecuado para los `€19.841,9M` de la liga, equivalente a 79 balones), al filtrar por un club como Newcastle (`€1.173,6M`) aparecían muy pocos balones en el arco.
  * *Solución:* Se programó una escala adaptativa en `renderGoals()` que ajusta automáticamente la equivalencia a `1 balón = €50M` para los clubes del *Big Six* y `1 balón = €10M` para Newcastle, actualizando en vivo la etiqueta `1 BALÓN = €...M`.
* **Problema 2 — Doble escala en el Gráfico 02 (Inflación HICP vs. Sobrecosto Premier):** La inflación europea oscila entre `-0,6%` y `8,4%`, mientras que el sobrecosto anual de la Premier League alcanza hasta `260%` en muestras pequeñas o `68,1%` en 2017. Graficarlos en un mismo eje Y aplanaba visualmente la curva del BCE.
  * *Solución:* Se implementó un gráfico SVG de doble eje Y (eje izquierdo en `#00b3dd` de `0%` a `10%` para el HICP con la línea punteada de la meta del `2,0%` del BCE, y eje derecho en `#847dff` para el sobrecosto porcentual de la Premier), además de añadir dos vistas complementarias (`Pagado vs. Tasación (€M)` y `Zoom BCE 2006–2017`).
* **Problema 3 — Sobrecarga visual al mostrar las 20 líneas simultáneamente en el Gráfico 03:** Mostrar las 20 trayectorias de clubes al mismo tiempo dificultaba distinguir las pendientes en pantallas pequeñas.
  * *Solución:* Se configuró por defecto el filtro preestablecido `Top 6 mayor sobreprecio` y se agregaron botones de grupos (`Los 20 clubes`, `Clubes de media tabla`) junto con píldoras individuales para activar o aislar cualquier club a elección del lector.

---

## 6. Pruebas Realizadas (Contenido, Diseño, Interacción y Responsive)

1. **Verificación de despliegue en GitHub Pages (`main → /docs`):** Comprobación de carga limpia sin errores 404 de hojas de estilo (`style.css`), scripts (`script.js`) ni fuentes tipográficas (`Cormorant Garamond`, `Inter`, `Roboto Mono`).
2. **Pruebas de diseño *responsive* en tres puntos de quiebre:**
   * *Móvil (`375px` — iPhone SE / 14):* El menú superior colapsa en el botón hamburguesa (`#menuToggle`), las tarjetas cromáticas y los dos arcos de fútbol se apilan en 1 columna vertical, los gráficos SVG escalan proporcionalmente gracias a `viewBox` y la tabla de 20 clubes habilita desplazamiento horizontal fluido (`overflow-x: auto`).
   * *Tablet (`768px` — iPad):* La tira de KPIs dentro de la tarjeta invertida `#cacaca` se organiza en 4 columnas y los dos arcos se sitúan frente a frente.
   * *Escritorio (`1200px+`):* La grilla de 3 tarjetas cromáticas (`#847dff`, `#dd90d8`, `#90b8f0`), la vitrina fotográfica con `90px` de relleno interno y el layout de doble columna entre la balanza de arcos y el podio interactivo despliegan toda la jerarquía editorial.
3. **Pruebas de accesibilidad e interacción:** Revisión de navegación por teclado (`:focus-visible`), atributos `aria-live="polite"` en paneles dinámicos y contraste AAA (21:1) en los botones de acción principales (`#ffffff` sobre `#000000`).
