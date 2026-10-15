
# Evolución del valor económico de los clubes de la Premier League (2005–2025)

## 1. Proceso de visualización

Desarrollé esta visualización utilizando Python en Google Colab, apoyándome en la librería Pandas para organizar y procesar los datos y en Altair para construir el gráfico interactivo. El objetivo fue mostrar cómo ha evolucionado el valor económico de los clubes de la Premier League durante los últimos 20 años y qué diferencias existen entre los equipos.

El trabajo se dividió en cuatro etapas:

**Primero, la recopilación de información.** Reuní datos económicos de los clubes de la Premier League correspondientes al período 2005–2025, utilizando publicaciones de Forbes y Deloitte Football Money League. Estas fuentes fueron seleccionadas por su trayectoria en el análisis financiero del fútbol profesional y por la disponibilidad de información histórica.

**Segundo, la organización y limpieza de los datos.** Importé la información a una base de datos CSV, ordenando los registros según el año y el club correspondiente. Revisé la consistencia de los nombres de los equipos, los períodos disponibles y la existencia de registros incompletos. Esto permitió preparar la información para su procesamiento en Python y facilitar las comparaciones entre clubes.

**Tercero, la construcción de la visualización.** Utilicé Altair para representar la evolución temporal de las cifras económicas. Busqué que el gráfico permitiera identificar tendencias de crecimiento, diferencias entre equipos y cambios significativos durante el período estudiado. La visualización fue diseñada para complementar el análisis grupal sobre el encarecimiento del mercado de fichajes.

**Finalmente, la exportación.** Guardé el gráfico en formato `.html` para incorporarlo de manera interactiva en la webstory y en `.jpg` como respaldo estático.

---

## 2. Base de datos utilizada

**Archivo:** `Valor Neto Premier League.csv`

**Por qué la elegí:** Para nuestra investigación grupal necesitábamos entender qué hay detrás del aumento de los precios de los futbolistas. Si los fichajes son cada vez más caros, también resulta necesario analizar cómo ha evolucionado la capacidad económica de los clubes que participan en este mercado.

La base de datos reúne información económica de los equipos de la Premier League entre 2005 y 2025, recopilada a partir de Forbes y Deloitte Football Money League.

La seleccioné porque permite estudiar el crecimiento económico de los clubes, identificar diferencias entre equipos y explorar si el encarecimiento del fútbol está acompañado por una expansión financiera de la industria.

Además, funciona como complemento de las visualizaciones elaboradas por el resto del equipo. Mientras el gráfico de inflación europea permite observar la evolución general de los precios, esta visualización busca mostrar cómo ha cambiado la dimensión económica de los clubes ingleses.

Es importante considerar que Forbes publica estimaciones del valor económico de los clubes, mientras que Deloitte Football Money League informa principalmente sobre sus ingresos. Por lo tanto, ambos indicadores no deben interpretarse como equivalentes ni combinarse directamente sin una justificación metodológica.

---

## 3. Preguntas de investigación que responde el gráfico

Esta visualización está diseñada para incorporarse en la webstory final y responder tres preguntas centrales de nuestro reportaje:

**¿Cómo ha evolucionado el valor económico de los clubes de la Premier League durante los últimos 20 años?**

El gráfico permite observar los cambios registrados entre 2005 y 2025, identificar tendencias de crecimiento y reconocer los períodos en los que se producen las variaciones más significativas.

**¿Todos los clubes han experimentado el mismo crecimiento económico?**

La visualización busca identificar las diferencias entre equipos y explorar si el crecimiento de la industria se ha distribuido de manera relativamente homogénea o si se ha concentrado en un grupo reducido de clubes.

**¿El aumento del precio de los futbolistas responde únicamente a la inflación o también al crecimiento económico de los clubes?**

Este gráfico permite contextualizar el encarecimiento del mercado de fichajes y contrastar la evolución económica de los clubes con las visualizaciones sobre inflación europea y transferencias realizadas por el resto del equipo.

En conjunto, buscamos investigar si el encarecimiento del fútbol puede explicarse únicamente por el aumento general de los precios o si también responde a transformaciones económicas propias de la industria.

---

## 4. Ficha técnica de la base de datos

### 4.1. Información general

| Característica | Descripción |
|---|---|
| **Tema** | Evolución económica de los clubes de la Premier League |
| **Período de estudio** | 2005–2025 |
| **Cobertura geográfica** | Inglaterra |
| **Unidad de análisis** | Club de fútbol por año |
| **Fuentes de información** | Forbes y Deloitte Football Money League |
| **Formato de la base de datos** | CSV (valores separados por comas) |
| **Herramientas de procesamiento** | Python y Pandas |
| **Herramienta de visualización** | Altair (Python) |
| **Entorno de trabajo** | Google Colab |

### 4.2. Variables incorporadas

La base de datos reúne información económica de los clubes de la Premier League durante el período 2005–2025.

| Variable | Descripción |
|---|---|
| **Año** | Año al que corresponde cada registro de la base de datos. |
| **Club** | Nombre del equipo de fútbol al que corresponde la información. |
| **Valor económico** | Cifra económica registrada para el club en el año correspondiente. |
| **Fuente** | Publicación o informe del que se obtuvo la información. |

**Nota metodológica:** Los nombres de las variables y las unidades monetarias deben coincidir con los encabezados y valores del archivo CSV original.

---

## 5. Observaciones y limitaciones

Durante la recopilación y el procesamiento de los datos se identificaron distintas limitaciones que deben considerarse al interpretar los resultados.

### 5.1. Disponibilidad de información

No todos los clubes cuentan con información económica disponible para la totalidad del período estudiado. Esto puede generar diferencias en la cantidad de observaciones entre equipos y años.

### 5.2. Diferencias metodológicas entre fuentes

Las publicaciones utilizadas presentan diferencias en la forma de medir la situación económica de los clubes:

- **Forbes:** publica estimaciones sobre el valor económico de los equipos.
- **Deloitte Football Money League:** presenta información sobre los ingresos generados por los clubes.

Esta distinción es relevante porque los ingresos anuales no representan necesariamente el valor económico total de una institución.

Por lo tanto, las cifras de ambas fuentes deben identificarse correctamente para evitar comparaciones entre indicadores que miden fenómenos diferentes.

### 5.3. Comparabilidad histórica

Los datos correspondientes a distintos años pueden presentar diferencias en su cobertura, disponibilidad y metodología de estimación.

Estas variaciones deben considerarse al comparar la evolución económica de los clubes durante las últimas dos décadas.

### 5.4. Datos faltantes

La ausencia de información para un determinado club o año no significa que su valor económico sea igual a cero.

Los registros sin información deben identificarse como datos faltantes para evitar interpretaciones incorrectas.

### 5.5. Alcances del análisis

La visualización permite identificar tendencias económicas, diferencias entre clubes y transformaciones durante el período estudiado.

Sin embargo, los resultados no permiten establecer por sí solos una relación causal entre el crecimiento económico de los clubes y el aumento de los precios de los fichajes.

Para explorar esa relación es necesario complementar los resultados con los datos de transferencias e inflación analizados por el resto del equipo.

---

## 6. Preguntas adicionales que permite responder la visualización

Además de las preguntas centrales del reportaje, el gráfico permite explorar otros aspectos de la evolución económica del fútbol inglés:

1. ¿Qué clubes presentan los mayores incrementos económicos durante el período estudiado?
2. ¿Se ha ampliado la diferencia entre los clubes más valiosos y el resto de los equipos?
3. ¿Qué equipos han experimentado las transformaciones económicas más significativas?
4. ¿Existen años en los que se observan aumentos o disminuciones especialmente pronunciados?
5. ¿Qué tendencias permiten identificar posibles procesos de concentración económica dentro de la Premier League?

Estas preguntas permiten profundizar en las desigualdades económicas del fútbol inglés y complementar el análisis del mercado de fichajes.

---

## 7. Archivos del proyecto

El proyecto contempla los siguientes archivos:

| Archivo | Descripción |
|---|---|
| `README.md` | Documentación metodológica y explicación del proyecto. |
| `Ficha_Tecnica.md` | Características, variables y limitaciones de la base de datos. |
| `Valor Neto Premier League.csv` | Base de datos utilizada para construir la visualización. |
| `visualizacion.ipynb` | Notebook de Python con el código utilizado para procesar y visualizar los datos. |
| `premier_league.html` | Versión interactiva de la visualización desarrollada con Altair. |
| `premier_league.jpg` | Versión estática de la visualización. |
| `Cronica.md` | Texto periodístico que acompaña e interpreta la visualización. |

---

## 8. Reproducibilidad

El proyecto busca garantizar la transparencia y replicabilidad del proceso de recopilación, procesamiento y visualización de los datos.

Para reproducir el trabajo se deben seguir los siguientes pasos:

### Paso 1. Descargar los archivos

Descargar desde el repositorio de GitHub:

- `Valor Neto Premier League.csv`
- `visualizacion.ipynb`

### Paso 2. Preparar el entorno de trabajo

Abrir Google Colab o un entorno compatible con Jupyter Notebook.

El código utiliza principalmente las siguientes librerías:

- **Pandas:** para importar, organizar y procesar la base de datos.
- **Altair:** para construir la visualización interactiva.

### Paso 3. Importar la base de datos

Abrir el notebook `visualizacion.ipynb` y cargar el archivo CSV mediante Pandas.

Es necesario verificar que la ruta del archivo corresponda a su ubicación en el entorno de trabajo.

### Paso 4. Ejecutar el procesamiento

Ejecutar las celdas del notebook en el orden establecido.

Este proceso debe permitir reproducir la preparación de los datos y las transformaciones necesarias para construir el gráfico.

### Paso 5. Generar la visualización

Ejecutar el código correspondiente a Altair para obtener la visualización final.

### Paso 6. Exportar los resultados

Guardar la visualización en los siguientes formatos:

- `.html`: versión interactiva para la webstory.
- `.jpg`: versión estática para respaldo y presentación.

### Consideraciones finales

La reproducibilidad depende de utilizar la misma base de datos y aplicar los procedimientos documentados en el notebook.

Cualquier modificación en las fuentes, variables, criterios de limpieza o procedimientos de procesamiento puede generar diferencias respecto de los resultados originales.
