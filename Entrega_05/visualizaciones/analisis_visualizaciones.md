# Análisis de Visualizaciones y Fichas Técnicas de Bases de Datos

**Proyecto:** *La prima del oro británico: Cuando el mercado cobra el «Impuesto Premier» (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  

---

## 1. Análisis de las Visualizaciones en Relación con la Historia

La webstory articula **tres visualizaciones principales de datos** más **dos módulos exploratorios complementarios** (la balanza interactiva de los arcos de fútbol y la tabla auditable de los 20 clubes), diseñados para responder secuencialmente las preguntas de investigación del semestre:

### A. Visualización 01 — Ranking Interactivo: *Sobreprecio acumulado pagado por club (2005–2026)*
* **Autor responsable:** Diego Valenzuela.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_03_sobreprecio_valenzuela.ipynb`](codigo/codigo_vis_03_sobreprecio_valenzuela.ipynb)
  * Implementación interactiva web: Función `renderChart01()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_03_sobreprecio_clubes.png`](imagenes/vis_03_sobreprecio_clubes.png)
  * Base de datos: [`base_datos/Transfers_cleaned2.csv`](base_datos/Transfers_cleaned2.csv)
* **Dimensiones y mensaje que comunica:**
  Responde a la primera pregunta de investigación: *¿Qué clubes de la Premier League acumulan el mayor sobreprecio neto y porcentual en las últimas dos décadas?* Mediante un gráfico de barras horizontales ordenable por tres dimensiones (**Sobreprecio neto en €M**, **Recargo promedio en %** y **Gasto total en €M**), comunica de forma inmediata que el **Chelsea FC** lidera el sobrepago absoluto con **€837,2 millones** en 93 operaciones, mientras que al cambiar la vista a **Recargo promedio (%)**, el lector descubre que el **Manchester United** (272,8%) y clubes como **Bolton** (216,8%), **Everton** (182,2%) o **Newcastle** (154,3%) sufren distorsiones porcentuales extremas.

---

### B. Visualización 02 — Contraste Macroeconómico: *La falsa excusa: Inflación Europea (HICP) vs. Sobreprecio Premier (2005–2026)*
* **Autor responsable:** Juan Tapia.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_01_inflacion_tapia.ipynb`](codigo/codigo_vis_01_inflacion_tapia.ipynb)
  * Implementación interactiva web: Función `renderChart02()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_01_inflacion_hicp.png`](imagenes/vis_01_inflacion_hicp.png)
  * Base de datos: [`base_datos/INFLACION_LIMPIA.csv`](base_datos/INFLACION_LIMPIA.csv)
* **Dimensiones y mensaje que comunica:**
  Funciona como el **«grupo de control»** científico del reportaje para desmentir el argumento de que *"los fichajes son más caros porque todo en la economía está más caro"*. Traza la serie temporal del Índice Armonizado de Precios de Consumo (HICP) de la Eurozona en color `--color-cyan-signal` (`#00b3dd`) junto a una línea horizontal punteada en el **2,0%** (meta histórica de estabilidad del Banco Central Europeo), contrastándola con la curva de sobrecosto de la Premier League en `--color-iris-gleam` (`#847dff`). El lector comprueba visualmente que durante la década de 2010 —cuando la inflación europea era casi nula (0,2% a 1,8%)— el sobrecosto del fútbol inglés se disparó hasta un **68,1%** tras el macro-contrato televisivo de 2016/17.

---

### C. Visualización 03 — Serie Longitudinal: *Veinte años de evolución económica por club (2005–2026)*
* **Autora responsable:** Valeria Trujillo.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_02_valor_trujillo.ipynb`](codigo/codigo_vis_02_valor_trujillo.ipynb)
  * Implementación interactiva web: Función `renderChart03()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_02_valor_premier.jpg`](imagenes/vis_02_valor_premier.jpg)
  * Base de datos: [`base_datos/Valor_Neto_Premier_League.csv`](base_datos/Valor_Neto_Premier_League.csv) y [`base_datos/Transfers_cleaned2.csv`](base_datos/Transfers_cleaned2.csv)
* **Dimensiones y mensaje que comunica:**
  Responde a cómo evolucionó el poder financiero y la desigualdad entre el *Big Six* y la media tabla a lo largo de 20 temporadas. Permite alternar entre **Sobreprecio acumulado (€M)**, **Gasto acumulado (€M)** y **Sobreprecio anual (€M)**, además de filtrar grupos predefinidos (*Top 6*, *Los 20 clubes*, *Clubes de media tabla*) o activar/desactivar clubes individuales. Muestra el punto de inflexión estructural a partir de 2014–2016 y la pendiente casi vertical del Chelsea y del Newcastle tras sus cambios de propiedad en 2022.

---

## 2. Explicación Técnica de la Generación de las Visualizaciones

1. **Fase 1 — Procesamiento y prototipado en Python (Google Colab, Pandas y Altair):**
   En la carpeta [`codigo/`](codigo/) se incluyen los tres Jupyter Notebooks (`.ipynb`) donde se limpiaron los archivos CSV originales, se normalizaron los tipos de datos (`datetime64[ns]` para fechas mensuales del BCE, `float64` para montos en millones de euros y tasas porcentuales) y se generaron las primeras versiones declarativas en **Altair** (`mark_bar()`, `mark_line()`, `mark_area()`, `mark_rule()` para la meta del 2% del BCE).
2. **Fase 2 — Implementación web interactiva en JavaScript y SVG puro (`docs/script.js`):**
   Para que las tres visualizaciones compartieran exactamente el sistema de diseño *Origin Financial* (fondo `#0f1011` Obsidian, tarjetas `#2e2e2e` Graphite, tipografía `Cormorant Garamond` + `Roboto Mono` y señales cromáticas `#00b3dd` Cyan Signal y `#847dff` Iris Gleam) y tuvieran controles de filtrado instantáneo sin depender de iframes aislados, los datos agregados se exportaron desde Python a las constantes `CLUB_DATA`, `YEAR_DATA`, `CLUB_SERIES` y `HICP` en [`../../docs/script.js`](../../docs/script.js), donde las funciones `renderChart01()`, `renderChart02()` y `renderChart03()` construyen dinámicamente los nodos vectoriales `<svg>`.

---

## 3. Fichas Técnicas de las Bases de Datos (`base_datos/`)

### Ficha Técnica 01: `Transfers_cleaned2.csv` (Fichajes y Sobreprecio en la Premier League)
* **Naturaleza:** Base de datos transaccional de transferencias de futbolistas hacia clubes de la Premier League.
* **Alcance temporal y muestral:** 997 operaciones registradas entre las temporadas 2005/06 y 2025/26 en los 20 clubes principales.
* **Fuente original:** [Transfermarkt](https://www.transfermarkt.es/).
* **Variables principales:**
  * `Club Comprador` (`string`): Institución inglesa que realiza el fichaje.
  * `Jugador` (`string`): Nombre del futbolista transferido.
  * `Temporada` / `Año` (`string` / `int`): Periodo en que se efectuó la transacción.
  * `Valor Pagado` (`float`): Monto efectivo desembolsado por el club comprador (en €).
  * `Valor Estimado` (`float`): Tasación técnica de mercado en Transfermarkt al momento del fichaje (en €).
  * `Sobreprecio` (`float`): Diferencia neta calculada (`Valor Pagado − Valor Estimado`).
  * `Porcentaje_Deficit` (`float`): Recargo porcentual de la operación (`((Pagado − Estimado) / Estimado) * 100`).

### Ficha Técnica 02: `INFLACION_LIMPIA.csv` (Índice Armonizado de Precios de Consumo — HICP)
* **Naturaleza:** Serie de tiempo macroeconómica mensual (grupo de control).
* **Alcance temporal:** Enero de 2005 a junio de 2026 (258 observaciones mensuales).
* **Fuente original:** [Portal de Estadísticas del Banco Central Europeo (BCE) / Eurostat](https://data.ecb.europa.eu/).
* **Variables principales:**
  * `fecha` (`datetime64[ns]`): Fecha de cierre del mes evaluado en formato ISO 8601 (`YYYY-MM-DD`).
  * `periodo` (`string`): Cadena normalizada `YYYY-MM` utilizada como llave relacional temporal.
  * `tasa_inflacion` (`float64`): Variación porcentual anualizada del índice HICP en la Eurozona (rango de `-0,6%` a `10,6%`, con promedio histórico de `2,14%` frente a la meta de estabilidad del `2,0%` del BCE).

### Ficha Técnica 03: `Valor_Neto_Premier_League.csv` (Evolución Económica y Valoración de Clubes)
* **Naturaleza:** Panel longitudinal de valoración e ingresos anuales por club de la Premier League.
* **Alcance temporal:** 2005 a 2025/2026 (20 clubes seguidos a lo largo de dos décadas).
* **Fuente original:** Reportes anuales de *Forbes Soccer Valuations*, *Deloitte Football Money League* y registros históricos de valoración de plantillas en *Transfermarkt*.
* **Variables principales:**
  * `Club` (`string`): Nombre oficial de la institución de la Premier League.
  * `Año` (`int`): Año del ejercicio financiero evaluado.
  * `Valor registrado (€)` (`float`): Valoración económica / patrimonial registrada para la institución en dicho periodo.
