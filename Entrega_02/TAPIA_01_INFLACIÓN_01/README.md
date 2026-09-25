# Historial de Procesos y Decisiones: Limpieza de Datos HICP

## 1. Explicación del Proceso de Limpieza y Decisiones

**Contexto y Auditoría Técnica:** 
Dado que en la primera entrega la base de datos original fue aprobada sin comentarios negativos ni solicitudes de cambios, decidí ir un paso más allá para asegurar la calidad del proyecto. Sometí el archivo a una auditoría técnica utilizando un chat de Gemini especializado en programación e ingeniería de datos. El objetivo era buscar puntos de mejora estructural que, aunque no fueran errores aritméticos evidentes, pudieran dificultar el análisis o la visualización a futuro.

Gracias a este análisis cruzado, identifiqué que la estructura del archivo original no cumplía con los estándares óptimos para el análisis de series de tiempo (nomenclaturas inconsistentes y fechas en formato texto plano). 

**Herramientas utilizadas:**
*   **Lenguaje:** Python 3.
*   **Librerías:** `pandas` (para manipulación de *DataFrames*).
*   **Entorno:** Google Colab.

**Paso a paso de la limpieza:**
1.  **Carga de datos:** Importación del archivo crudo original (`archivo-base-datos.CSV`).
2.  **Estandarización de cabeceras:** Se renombraron las columnas `DATE`, `TIME_PERIOD` y `HICP_Inflation_rate` al estándar `snake_case` (`fecha`, `periodo`, `tasa_inflacion`) para evitar errores de sintaxis en el análisis posterior.
3.  **Casteo temporal (Datetime):** La columna de fecha original venía como texto (`DD-MM-YY`). Se transformó a formato de fecha ISO 8601 (`YYYY-MM-DD`). *Decisión clave:* Esto es obligatorio para que el software de visualización entienda que es una línea de tiempo continua y no texto aleatorio.
4.  **Creación de llave relacional:** Se transformó el texto crudo (ej. `2005Jan`) a un formato universal numérico (`2005-01`). *Decisión clave:* Esta columna (`periodo`) actuará como ancla para hacer el cruce de bases de datos (JOIN) con el mes y año en el que se realizaron los fichajes de la Premier League.
5.  **Exportación:** Se generó el archivo `base_datos_limpia.csv` sin el índice por defecto de pandas para mantener la base liviana y limpia.

## 2. Fuentes de Datos Utilizadas

*   **Fuente:** Banco Central Europeo (BCE) - Base de datos oficial de estadísticas (Data Portal).
*   **Dataset:** Índice Armonizado de Precios de Consumo (HICP - Harmonised Index of Consumer Prices).
*   **Justificación de elección:** Para poder demostrar si el sobreprecio en los fichajes de la Premier League es real o solo un espejismo inflacionario, es matemáticamente obligatorio traer el valor del dinero histórico al presente. Dado que el mercado europeo opera y cotiza a los jugadores en Euros, el BCE es la máxima autoridad financiera y la fuente primaria más rigurosa, oficial e indiscutible para calcular la pérdida de poder adquisitivo de esa moneda desde el año 2005.

## 3. Preguntas que se pueden responder con la Base Limpia

Al cruzar esta tabla de inflación estandarizada con la base de datos de los fichajes y crear tablas dinámicas, el reportaje podrá responder con precisión a las siguientes interrogantes:

1.  **¿Cuál es el valor real (ajustado a la inflación de 2026) del fichaje récord de una temporada antigua comparado con los precios actuales?** *(Permite desmitificar si los clubes hoy gastan "más" o si simplemente el dinero vale menos).*
2.  **¿En qué temporadas específicas el aumento del gasto de los clubes ingleses superó el aumento de la tasa de inflación europea?** *(Agrupando la tasa de inflación por año y comparándola con la curva de gasto total de la liga).*
3.  **¿Cómo se ha comportado el "impuesto de la Premier League" (sobreprecio) en periodos históricos de alta inflación vs. periodos de estabilidad económica?** *(Permite correlacionar la agresividad del mercado de fichajes con el contexto macroeconómico europeo).*
