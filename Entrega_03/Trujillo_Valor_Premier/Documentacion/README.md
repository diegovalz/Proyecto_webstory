# Visualización del valor económico de los clubes de la Premier League (2005–2025)

## 1. Proceso de visualización

Desarrollé esta visualización utilizando Python en Google Colab, con apoyo de la librería Pandas para organizar y procesar los datos y Altair para construir el gráfico interactivo. El objetivo fue representar la evolución económica de los clubes de la Premier League durante las últimas dos décadas y facilitar la comparación de su crecimiento.

El proceso comenzó con la recopilación de información financiera publicada por Forbes y Deloitte Football Money League. Posteriormente, organicé los registros en una base de datos CSV, identificando los clubes, los años y las cifras económicas disponibles. Durante la limpieza de los datos, revisé la consistencia de los nombres de los equipos, los períodos registrados y la disponibilidad de información para cada club.

Para la visualización, opté por representar la evolución temporal de las cifras económicas, de manera que fuera posible identificar tendencias de crecimiento, diferencias entre clubes y cambios significativos durante el período estudiado. El gráfico fue elaborado con Altair para facilitar la lectura y comparación de los datos.

Finalmente, la visualización fue exportada en formato `.html` para su incorporación interactiva en la webstory y en `.jpg` como respaldo estático.

## 2. Base de datos utilizada

**Archivo:** `Valor Neto Premier League.csv`

**Por qué la elegí:** Para nuestra investigación grupal necesitábamos comprender cómo ha evolucionado la dimensión económica del fútbol inglés y determinar si el aumento de los precios de los fichajes forma parte de un fenómeno más amplio de crecimiento financiero.

Esta base reúne información económica de los clubes de la Premier League entre 2005 y 2025, recopilada a partir de publicaciones de Forbes y Deloitte Football Money League. Su utilización permite observar las diferencias entre equipos y analizar cómo se ha transformado la industria del fútbol durante las últimas dos décadas.

La seleccioné porque permite complementar las visualizaciones de mis compañeros, particularmente aquellas relacionadas con el mercado de fichajes y la inflación europea. Mientras los datos de inflación muestran la evolución general de los precios en la economía, esta visualización permite explorar el crecimiento económico de los clubes que participan en el mercado futbolístico.

Es importante considerar que las valoraciones publicadas por Forbes y los ingresos informados por Deloitte corresponden a indicadores distintos, por lo que su interpretación requiere distinguir las metodologías de ambas fuentes.

## 3. Preguntas de investigación que responde el gráfico

Esta visualización está pensada para complementar la webstory final y contribuir a responder tres preguntas centrales de nuestra investigación:

**¿Cómo ha evolucionado el valor económico de los clubes de la Premier League durante los últimos 20 años?** El gráfico permite identificar las tendencias de crecimiento y los períodos en los que se producen las variaciones más significativas.

**¿El crecimiento económico ha beneficiado a todos los clubes por igual?** A través de la comparación entre equipos, buscamos identificar si el aumento del valor económico se distribuye de manera relativamente homogénea o si existe una concentración creciente en determinados clubes.

**¿Qué relación existe entre el crecimiento económico de los clubes y el encarecimiento del mercado de fichajes?** La visualización permite aportar contexto financiero al aumento de los precios de los futbolistas. Al contrastarla con los gráficos de fichajes e inflación elaborados por el resto del equipo, buscamos explorar si el encarecimiento de los jugadores responde únicamente al aumento general de los precios o también a la expansión económica de la industria futbolística.

En conjunto, esta visualización permitirá comprender si el aumento del valor de los clubes acompaña el encarecimiento de los fichajes y hasta qué punto ambos fenómenos forman parte de una transformación estructural del fútbol europeo.
