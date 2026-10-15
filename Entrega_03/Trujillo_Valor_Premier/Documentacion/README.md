
# Evolución del valor económico de los clubes de la Premier League (2005–2025)

## 1. Proceso de visualización

Desarrollé esta visualización utilizando Python en Google Colab, apoyándome en la librería Pandas para organizar y procesar los datos y en Altair para construir el gráfico interactivo. El objetivo fue representar cómo ha evolucionado el valor económico de los clubes de la Premier League durante las últimas dos décadas y explorar las diferencias financieras entre los equipos.

El trabajo se dividió en cuatro etapas:

**Primero, la recopilación de información.** Reuní datos económicos de los clubes de la Premier League correspondientes al período 2005–2025, utilizando publicaciones de Forbes y Deloitte Football Money League. Estas fuentes fueron seleccionadas por su trayectoria en el análisis financiero del fútbol profesional y por la disponibilidad de registros históricos.

**Segundo, la organización y limpieza de los datos.** La información recopilada se organizó en una base de datos CSV, identificando los clubes, los años y las cifras económicas correspondientes. Para preparar los datos, revisé la consistencia de los nombres de los equipos, el orden cronológico de los registros y la disponibilidad de información para los distintos años. También consideré la existencia de registros incompletos, ya que no todos los clubes cuentan con información para la totalidad del período estudiado.

**Tercero, la construcción de la visualización.** Utilicé Altair para representar gráficamente la evolución temporal de las cifras económicas. La decisión de utilizar una representación cronológica responde a la necesidad de observar las transformaciones de la industria durante los últimos 20 años, identificar tendencias de crecimiento y facilitar la comparación entre clubes.

**Finalmente, la exportación.** La visualización se exportó en formato `.html` para su incorporación interactiva en la webstory y en `.jpg` como respaldo estático.

## 2. Base de datos utilizada

**Archivo:** `Valor Neto Premier League.csv`

**Fuentes:** Forbes y Deloitte Football Money League.

**Período:** 2005–2025.

**Por qué la elegí:** Para nuestra investigación grupal necesitábamos comprender qué hay detrás del aumento de los precios en el mercado de fichajes. Si los futbolistas cuestan cada vez más, también resulta necesario investigar cómo ha evolucionado la capacidad económica de los clubes que los compran.

Esta base de datos permite estudiar la evolución financiera de los equipos de la Premier League durante las últimas dos décadas, identificar diferencias entre clubes y explorar si el encarecimiento del fútbol está acompañado por un crecimiento económico de la industria.

La seleccioné porque complementa las visualizaciones elaboradas por el resto del equipo, especialmente aquellas relacionadas con la inflación europea y los precios de los fichajes. Mientras el gráfico de inflación muestra la evolución general de los precios en la economía, esta visualización permite explorar los cambios económicos de los clubes que participan en el mercado futbolístico.

### Procesamiento de la base de datos

Para preparar la información para su visualización se contemplaron los siguientes procedimientos:

1. **Recopilación:** búsqueda de información económica histórica en las publicaciones de Forbes y Deloitte.
2. **Organización:** estructuración de los registros según club, año y cifra económica.
3. **Revisión:** identificación de posibles inconsistencias en los nombres de los clubes, períodos y registros incompletos.
4. **Preparación:** organización de las variables para permitir su lectura y representación mediante Python y Altair.
5. **Visualización:** construcción del gráfico a partir de los datos procesados.

Es importante distinguir que Forbes publica estimaciones del valor económico de los clubes, mientras que Deloitte Football Money League presenta información sobre sus ingresos. Por lo tanto, ambos indicadores no deben interpretarse como equivalentes ni combinarse directamente sin una justificación metodológica.

## 3. Preguntas de investigación que responde el gráfico

Esta visualización está pensada para complementar la webstory final y contribuir a responder tres preguntas centrales de nuestra investigación.

**¿Cómo ha evolucionado el valor económico de los clubes de la Premier League durante los últimos 20 años?**

El gráfico permite observar las variaciones económicas registradas entre 2005 y 2025, identificar tendencias de crecimiento y reconocer los períodos en los que se producen los cambios más significativos.

**¿Todos los clubes han experimentado el mismo crecimiento económico?**

La visualización busca identificar las diferencias entre equipos y explorar si el crecimiento financiero de la industria se ha distribuido de manera relativamente homogénea o si se ha concentrado en un grupo reducido de clubes.

**¿El aumento del precio de los futbolistas responde únicamente a la inflación o también al crecimiento económico de los clubes?**

Este gráfico permite contextualizar el encarecimiento del mercado de fichajes y contrastar la evolución económica de los clubes con los datos de inflación europea y transferencias analizados por el resto del equipo.

En conjunto, buscamos investigar si el encarecimiento del fútbol responde solamente al aumento general de los precios o si también está relacionado con una transformación económica propia de la industria futbolística.

## 4. Reproducibilidad

Para reproducir la visualización es necesario descargar la base de datos CSV y el notebook de Python disponibles en el repositorio.

El procedimiento consiste en abrir el archivo `.ipynb` en Google Colab, cargar el CSV mediante Pandas y ejecutar las celdas de procesamiento y visualización en el orden establecido.

El código debe permitir reproducir las transformaciones de los datos, generar el gráfico mediante Altair y exportarlo en formatos HTML y JPG.

La reproducción de los resultados depende de utilizar la misma base de datos y aplicar los procedimientos documentados en el notebook.
