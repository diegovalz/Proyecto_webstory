# Visualización de Inflación Europea (HICP)

## 1. Proceso de visualización: 
Desarrollamos este gráfico usando Python (en el entorno de Google Colab), apoyándonos en la librería Pandas para ordenar los datos y en Altair para el diseño interactivo. 
El trabajo se dividió en cuatro pasos:

Importamos el archivo INFLACIÓN LIMPIA.csv. El ajuste clave fue convertir la columna de fechas a un formato de tiempo continuo (datetime), para que el sistema la lea como una verdadera línea temporal (eje X) y no como textos aislados.
Optamos por un gráfico de líneas para mostrar la tendencia de los últimos 20 años de forma clara y fluida. Le agregamos un área sombreada debajo de la línea principal para darle un poco más de peso visual a la inflación.
Para darle sentido a los números, trazamos una línea punteada horizontal en el 2%. Esta marca representa la meta histórica de estabilidad del Banco Central Europeo (BCE). Nos sirve como "línea base" para mostrar qué es lo normal en la economía real frente a la volatilidad del fútbol.
Configuramos el gráfico para que al pasar el cursor sobre la línea, aparezca una caja de texto (tooltip) con el mes y el porcentaje exacto. Finalmente, lo exportamos en .html para integrarlo de forma interactiva en la webstory, y en .jpg de alta resolución como respaldo estático.

## 2. Base de datos utilizada
Archivo: INFLACIÓN_LIMPIA.csv
Por qué la elegimos: Para darle validez a la investigación grupal necesitábamos un "grupo de control". Esta base, que contiene el Índice Armonizado de Precios de Consumo (HICP) de la zona euro, la usarémos para desmentir el argumento de "los fichajes son más caros porque todo está más caro". Con estos datos demostramos estadísticamente la diferencia real entre el costo de la vida y el precio de los futbolistas.

## 3. Preguntas de investigación que responde el gráfico Esta visualización está pensada para la webstory final y responde a tres puntos de nuestro reportaje:
¿Es la inflación general la verdadera culpable de que los futbolistas sean tan caros hoy? El gráfico demuestra que no, ya que muestra una curva económica muy estable durante casi todo el periodo estudiado.
¿En qué momentos históricos la economía europea realmente sufrió picos inflacionarios (como en la post-pandemia) que pudieran justificar, al menos temporalmente, un alza en los costos operativos de los clubes?
¿Cómo se compara la estabilidad de la economía real (ese 2% del BCE) con la curva de gasto de la Premier League? Este gráfico será el espejo comparativo para contrastar con las visualizaciones de gasto que presentará el resto del equipo.

