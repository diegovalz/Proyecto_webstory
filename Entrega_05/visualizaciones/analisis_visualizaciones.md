# Análisis de Visualizaciones y Fichas Técnicas de Bases de Datos

**Proyecto:** *La prima del oro británico: Cuando el mercado cobra el «Impuesto Premier» (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  

---

## 1. Análisis de las Visualizaciones en Relación con la Historia

La webstory articula **tres visualizaciones principales de datos** más **dos módulos exploratorios complementarios** (la balanza interactiva de los arcos de fútbol y la tabla auditable de los 20 clubes), diseñados para responder secuencialmente las preguntas de investigación del semestre:

### A. Visualización 01 — Sistema Multi-Vista: *Brecha Dumbbell, Matriz de 4 Cuadrantes y Ranking de Sobreprecio por Club (2005–2026)*
* **Autor responsable:** Diego Valenzuela.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_03_sobreprecio_valenzuela.ipynb`](codigo/codigo_vis_03_sobreprecio_valenzuela.ipynb)
  * Implementación interactiva web: Función `renderChart01()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_03_sobreprecio_clubes.png`](imagenes/vis_03_sobreprecio_clubes.png)
  * Base de datos: [`base_datos/Transfers_cleaned2.csv`](base_datos/Transfers_cleaned2.csv)
* **Por qué elegimos estas tres formas de representación:**
  Un gráfico de barras horizontales simple solo muestra una magnitud aislada, ocultando la relación entre el presupuesto total y la brecha de sobreprecio. Por ello diseñamos un módulo con **tres representaciones complementarias**:
  1. **Gráfico de Mancuernas / Brecha (*Cleveland Dumbbell Plot* — Vista principal):** Conecta para cada uno de los 20 clubes el punto de su **Tasación Técnica Real (`#00b3dd`)** con el punto de su **Monto Efectivo Pagado (`#847dff`)**. El segmento entre ambos puntos materializa visualmente el «Impuesto Premier» (`+€837,2M` en Chelsea, `+€516,0M` en Man Utd).
  2. **Matriz de Dispersión de 4 Cuadrantes (*Scatter Plot* Gasto Total vs. % de Recargo Promedio):** Cruza el volumen de gasto (eje X) con la ineficiencia porcentual por operación (eje Y) y la cantidad de fichajes (tamaño de burbuja), revelando visualmente los dos perfiles del fenómeno: el **Cuadrante I de Opulencia Hiperinflada** (Man Utd `272,8%`, Chelsea `182,2%`) y el **Cuadrante II de Impuesto de Supervivencia en Media Tabla** (Everton `182,2%`, Newcastle `154,3%`, Aston Villa `151,1%`, Southampton `121,5%`).
  3. **Ranking Horizontal con Línea de Promedio de la Liga:** Permite ordenar por sobreprecio neto (€M) o recargo promedio (%) contrastando cada club frente a la media de la competición (`€227,8M` / `117,4%`).

---

### B. Visualización 02 — Contraste Macroeconómico sin Distorsión de Doble Eje: *Inflación Europea (HICP) vs. Sobreprecio Premier (2005–2026)*
* **Autor responsable:** Juan Tapia.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_01_inflacion_tapia.ipynb`](codigo/codigo_vis_01_inflacion_tapia.ipynb)
  * Implementación interactiva web: Función `renderChart02()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_01_inflacion_hicp.png`](imagenes/vis_01_inflacion_hicp.png)
  * Base de datos: [`base_datos/INFLACION_LIMPIA.csv`](base_datos/INFLACION_LIMPIA.csv)
* **Por qué mejoramos la representación eliminando el doble eje Y:**
  En diseño de información, los gráficos de doble eje Y con escalas dispares suelen inducir a error porque hacen parecer que una inflación del `8%` equivale en altura a un recargo del `200%`. Para representar los datos con rigor periodístico implementamos tres vistas honestas:
  1. **Gráfico de Brecha en Escala Real 1:1 (*Same-Scale Gap Chart* — Vista principal):** Coloca la inflación europea HICP (`#00b3dd`, promedio `2,14%`, meta BCE `2,0%`) y el sobrecosto ponderado anual de la Premier League (`#847dff`, que alcanza `60,4%` en 2014 y `68,1%` en 2017) en el **mismo eje Y porcentual (`0% a 75%`)**, sombreando el área entre ambas curvas como la **«Brecha Especulativa Neta»**.
  2. **Serie Mensual Completa del BCE (258 meses, Enero 2005 – Junio 2026):** Despliega las **258 observaciones mensuales reales** de `INFLACION_LIMPIA.csv` con anotaciones de hitos macroeconómicos (*Crisis Subprime jul. 2008: 4,1%*, *Deflación ene. 2015: -0,6%*, *Pico energético oct. 2022: 10,6%*).
  3. **Volumen Monetario Anual Apilado (€M):** Desglosa cada año cuánto correspondió a tasación real de mercado (`#00b3dd`) y cuánto a sobreprecio neto (`#847dff`).

---

### C. Visualización 03 — Serie Longitudinal y Gráfico de Pendiente: *Veinte años de evolución patrimonial y gasto por club (2005–2026)*
* **Autora responsable:** Valeria Trujillo.
* **Archivos asociados:**
  * Código original en Python/Altair: [`codigo/codigo_vis_02_valor_trujillo.ipynb`](codigo/codigo_vis_02_valor_trujillo.ipynb)
  * Implementación interactiva web: Función `renderChart03()` en [`../../docs/script.js`](../../docs/script.js)
  * Imagen de referencia estática: [`imagenes/vis_02_valor_premier.jpg`](imagenes/vis_02_valor_premier.jpg)
  * Base de datos: [`base_datos/Valor_Neto_Premier_League.csv`](base_datos/Valor_Neto_Premier_League.csv) y [`base_datos/Transfers_cleaned2.csv`](base_datos/Transfers_cleaned2.csv)
* **Depuración de datos y elección de representaciones:**
  Durante la auditoría de `Valor_Neto_Premier_League.csv` detectamos y corregimos una inconsistencia de formato entre separadores de miles con punto (`1.530`, `3.200`) y decimales con coma (`836,1`) que en la Entrega 03 generaba saltos artificiales. Con la serie limpia incorporamos cuatro vistas:
  1. **Valoración Patrimonial del Club (€M, 2005–2025):** Muestra la evolución real de la valoración económica de las instituciones (Chelsea de `€250M` a `€3.200M`, Arsenal de `€240M` a `€2.600M`, Liverpool de `€181,2M` a `€836,1M`, Man City de `€90,1M` a `€829,3M`), incluyendo la línea vertical del hito del macro-contrato televisivo de 2016 (`£5.140M`).
  2. **Gráfico de Pendiente (*Slope Chart 2005 vs. 2025*):** Sintetiza el salto patrimonial entre el inicio y el cierre de la serie sin el ruido visual de 20 líneas entrecruzadas, destacando el crecimiento porcentual neto de cada institución (`+1.180%` Chelsea, `+983%` Arsenal, `+820%` Man City, `+603%` Aston Villa).
  3. **Sobreprecio Acumulado en Fichajes (€M, 2005–2026)** y **Gasto Total Acumulado (€M, 2005–2026)**.

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
