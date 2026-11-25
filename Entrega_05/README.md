# Entrega 05: Webstory — Versión Preliminar (Beta)

**Titular del Reportaje:** *El «Impuesto Premier League»: por qué los clubes ingleses pagan un 30% de sobreprecio en el mercado de fichajes (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  
**Curso:** Narración Gráfica de No Ficción (COM-208) — Pontificia Universidad Católica de Chile  

---

## 🌐 Enlace a la Webstory Publicada (GitHub Pages)
* **Webstory (Versión Beta en `/docs`):**
* https://diegovalz.github.io/Proyecto_webstory/docs/ 
* **Código fuente de la Webstory (`docs/`):** [`docs/index.html`](../docs/index.html) · [`docs/style.css`](../docs/style.css) · [`docs/script.js`](../docs/script.js)

---

## 1. Resumen del Reportaje: ¿De qué se trata la historia?
En las últimas dos décadas, la inyección masiva de capital extranjero, el ingreso de fondos soberanos y los multimillonarios contratos de derechos televisivos otorgaron a la **Premier League** inglesa una liquidez financiera sin precedentes en el deporte mundial. Sin embargo, este superávit produjo una distorsión estructural en el mercado europeo: cada vez que un club británico negocia por un futbolista, el precio exigido se multiplica sistemáticamente por encima de su tasación técnica real.

Nuestro reportaje de datos audita **997 operaciones de traspaso** realizadas por los **20 clubes más estables del fútbol inglés entre 2005 y 2026**, cruzando tres fuentes empíricas:
1. **Registros históricos de fichajes y tasaciones de mercado (Transfermarkt):** Demuestran que los clubes ingleses desembolsaron **€19.841,9 millones** por jugadores cuyo valor estimado de mercado previo al traspaso era de **€15.286,8 millones**, acumulando **€4.555,1 millones en sobreprecio neto (+29,8% de recargo estructural)**.
2. **Índice Armonizado de Precios de Consumo (HICP) de la Eurozona (Banco Central Europeo / Eurostat):** Utilizado como grupo de control macroeconómico para desmontar el «doble discurso» de los directivos que culpan a la inflación general. Mientras la inflación real europea promedió un estable **2,14% anual** (alineada con la meta histórica del 2,0% del BCE), la inflación interna del mercado inglés superó el **55% anual** entre 2014 y 2017 (llegando a **68,1%** en 2017).
3. **Evolución patrimonial y valoración de clubes (Forbes & Deloitte Football Money League):** Explica cómo el aumento del patrimonio de los clubes incidió en el crecimiento exponencial del mercado de fichajes y como ello generó una brecha desigual entre los clubes de mayor rango y otros que se mantuvierones estancados con los años.

---

## 2. Análisis de Hipótesis: Evolución y Verificación Empírica

### ¿Logramos demostrar nuestra hipótesis inicial?
**Sí, la hipótesis fue demostrada cuantitativa y estadísticamente**, experimentando además un refinamiento clave a lo largo del semestre:

* **Hipótesis Inicial (Entregas 01 y 02):** Planteábamos que la lluvia de millones por derechos televisivos en Inglaterra generaba que los clubes de la Premier League pagaran precios muy superiores al valor real de los futbolistas, y que la inflación macroeconómica europea no explicaba ese encarecimiento.
* **Refinamiento Metodológico (Entregas 03 y 04):** Al depurar las bases de datos en Python (Pandas) y cruzar las 997 operaciones de compra (`Transfers_cleaned2.csv`) con la serie mensual del HICP del Banco Central Europeo (`INFLACION_LIMPIA.csv`) y las valoraciones de clubes (`Valor_Neto_Premier_League.csv`), pudimos cuantificar con exactitud la magnitud de la brecha: el «Impuesto Premier» equivale prácticamente a **un tercio del capital invertido (29,8% de sobrecosto ponderado, o +€4.555,1M)**.
* **Hallazgo Nuevo en la Webstory (Entrega 05):** Durante el desarrollo de las visualizaciones interactivas descubrimos que el fenómeno no es exclusivo del *Big Six*. Aunque el **Chelsea FC** lidera en volumen absoluto (€837,2M de sobreprecio) y el **Manchester United** en recargo porcentual promedio (272,8%), clubes de mitad de tabla como **Southampton** (121,5% de recargo promedio y 53,3% de sobrecosto ponderado), **Everton** (182,2% de recargo promedio) o **Newcastle** (55,1% de sobrecosto ponderado) sufren una presión inflacionaria proporcionalmente igual o más severa para sostener la categoría.

---

## 3. Tabla de Autoría del Equipo

La webstory y su documentación fueron desarrolladas colaborativamente por los tres integrantes del equipo, manteniendo la separación en tres capas técnicas (`index.html`, `style.css`, `script.js`) y articulando los insumos individuales en una narrativa común:

| Elemento de la Webstory y Documentación | Juan Tapia | Valeria Trujillo | Diego Valenzuela |
|:----------------------------------------|:----------:|:----------------:|:----------------:|
| **Recolección y limpieza de datos HICP (BCE / Eurostat)** | ✅ Autor principal | — | — |
| **Recolección y limpieza de datos de Valoración de Clubes (Forbes / Deloitte)** | — | ✅ Autora principal | — |
| **Recolección y limpieza de datos de Fichajes y Sobreprecio (Transfermarkt)** | — | — | ✅ Autor principal |
| **Crónica Sección 01 (*El Impuesto Premier: Sobreprecio por club*)** | Edición | — | ✅ Autor principal |
| **Crónica Sección 02 (*El doble discurso de la Premier: Inflación HICP*)** | ✅ Autor principal | — | Edición |
| **Crónica Sección 03 (*La otra inflación: Evolución económica de clubes*)** | — | ✅ Autora principal | Edición |
| **Visualización 01 (Ranking interactivo de sobreprecio por club + Podio)** | Integración web | — | ✅ Autor principal |
| **Visualización 02 (Serie HICP del BCE vs. Sobrecosto Premier)** | ✅ Autor principal | — | Apoyo datos |
| **Visualización 03 (Trayectoria longitudinal 2005–2026 + Balanza de Arcos)** | Integración web | ✅ Autora principal | Apoyo datos |
| **Wireframes en baja fidelidad, Arquetipos y User Journey Map** | ✅ Coautor | ✅ Coautora | ✅ Coautor |
| **Sistema de Diseño e Identidad Visual (*Origin Financial* Dark Gallery)** | ✅ Autor principal | ✅ Coautora | ✅ Coautor |
| **Implementación Front-End (`docs/index.html`, `style.css`, `script.js`)** | ✅ Autor principal | ✅ Revisión y pruebas | ✅ Coautor |
| **Documentación de proceso, análisis de diseño y registro de uso de IA** | ✅ Autor principal | ✅ Coautora | ✅ Coautor |

---

## 4. Estructura de la Carpeta `Entrega_05/`

```text
Entrega_05/
├── README.md                              # Resumen general, análisis de hipótesis y tabla de autoría
├── proceso_desarrollo_y_uso_ia.md         # Trazabilidad técnica, prompts de IA, iteraciones y pruebas
├── visualizaciones/
│   ├── analisis_visualizaciones.md        # Análisis narrativo de gráficos y fichas técnicas de CSV
│   ├── codigo/                            # Notebooks (.ipynb) de procesamiento y visualización
│   ├── base_datos/                        # Bases de datos depuradas en formato CSV
│   └── imagenes/                          # Respaldos estáticos de alta resolución de las gráficas
└── diseno-historia/
    ├── analisis_diseno.md                 # Diseño de información, interacción, textos e identidad visual
    └── recursos/                          # PDFs de Identidad Visual, Arquetipos, Mapa de Viaje y Wireframe
```
