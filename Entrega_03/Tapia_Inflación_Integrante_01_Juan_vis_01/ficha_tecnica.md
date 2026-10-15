# Ficha Técnica: Base de Datos HICP (Inflación Europea)

**Proyecto:** El "Impuesto Premier League"
**Dataset:** `INFLACIÓN_LIMPIA.csv`

## 1. Características de los Datos
*   **Naturaleza:** Serie de tiempo macroeconómica unidimensional (frecuencia mensual).
*   **Alcance temporal:** Enero 2005 — Junio 2026 (258 registros mensuales).
*   **Fuente original:** Portal de Estadísticas del Banco Central Europeo (BCE).
*   **Estado:** Limpio y procesado (ETL completado en la Entrega 02). Formateado específicamente para consumo algorítmico y visualización en librerías de Python.

## 2. Variables Incorporadas (Diccionario de Datos)

| Variable | Tipo de Dato (Pandas) | Rango de Valores | Descripción |
| :--- | :--- | :--- | :--- |
| `fecha` | `datetime64[ns]` | `2005-01-31` a `2026-06-30` | Fecha correspondiente al cierre del mes evaluado. Casteada a formato temporal (ISO 8601) para permitir graficado continuo en el eje X de Altair. |
| `periodo` | `object` (String) | `2005-01` a `2026-06` | Cadena de texto normalizada que indica el año y mes. Funciona como variable de control y futura llave relacional (Foreign Key) para cruzar con la base de fichajes. |
| `tasa_inflacion` | `float64` | `-0.6` a `10.6` | Valor porcentual de la inflación registrada en ese mes específico (Índice HICP). Variable graficada en el eje Y. |

## 3. Observaciones Editoriales y Metodológicas
*   **Tratamiento de nulos:** La base de datos fue auditada y no presenta valores nulos (NaN) ni celdas vacías, garantizando la continuidad de la línea en la visualización gráfica.
*   **Contexto Económico:** Para el correcto análisis de la variable `tasa_inflacion`, debe tenerse en cuenta que el Banco Central Europeo (BCE) establece una meta de estabilidad histórica del 2%. Cualquier variación por debajo o por encima de esta cifra (especialmente los picos observados a partir de 2022) representan las fluctuaciones de la economía real europea.
*   **Trazabilidad:** Esta base de datos es el producto derivado del archivo crudo entregado en la fase anterior del proyecto. Las nomenclaturas se ajustaron al estándar *snake_case* para evitar errores de sintaxis durante la programación del gráfico.