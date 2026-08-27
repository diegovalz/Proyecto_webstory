# Ficha Técnica de Base de Datos: Ingresos de los clubes de fútbol
## Autor y publicación de los datos

Propietarios/Autores: Deloitte Sports Business Group.
Publicación: Los datos se obtendrán desde el informe anual Deloitte Football Money League, elaborado por Deloitte, que registra los clubes de fútbol con mayores ingresos a nivel mundial. Deloitte publica las distintas ediciones del informe y mantiene disponibles ediciones anteriores desde 2006.

## Contenido

Descripción: La base de datos contiene información sobre los ingresos anuales de clubes de fútbol, desglosados principalmente en tres categorías: ingresos por día de partido (matchday), derechos de transmisión (broadcast) e ingresos comerciales (commercial). El informe permite observar la evolución de la capacidad económica de los principales clubes europeos y, dentro de ellos, de los equipos de la Premier League.

Tipo de datos y periodo: Corresponde a una serie de tiempo cuantitativa. Los datos utilizados abarcarán desde la temporada 2005-06 hasta la temporada 2024-25, utilizando las distintas ediciones históricas disponibles del Football Money League. Deloitte señala que sus ediciones anteriores están disponibles desde 2006.

## Variables:

* SEASON (Temporal / Texto): Temporada correspondiente a los ingresos registrados (ej. 2005-06).
* CLUB (Texto): Nombre del club.
* TOTAL_REVENUE (Numérico / Decimal): Ingresos totales del club durante la temporada.
* MATCHDAY_REVENUE (Numérico / Decimal): Ingresos generados por los días de partido.
* BROADCAST_REVENUE (Numérico / Decimal): Ingresos provenientes de derechos de transmisión.
* COMMERCIAL_REVENUE (Numérico / Decimal): Ingresos provenientes de actividades comerciales, patrocinios y merchandising.
* CURRENCY (Texto): Moneda en que se presentan los ingresos originales.

## Pertinencia
* Esta base es valiosa para la investigación porque permite contextualizar el precio de los fichajes de la Premier League según la capacidad económica de los clubes. Mientras la base principal registra cuánto pagaron los equipos por los jugadores y la base de inflación permite llevar esos montos a un valor comparable, los ingresos permiten determinar qué tan significativo era ese gasto para el club en cada período.
* De esta manera, se podrá calcular qué porcentaje de los ingresos anuales de un club representaba determinado fichaje. Esto permitirá distinguir entre el aumento nominal de los precios y un eventual aumento del peso económico que tienen las transferencias para los equipos.
## Metodología
* Los datos serán recopilados mediante la revisión y extracción de información de las distintas ediciones del Deloitte Football Money League, disponibles en el portal oficial de Deloitte. La organización publica información sobre los ingresos totales y su distribución entre matchday, broadcast y commercial.
* El plan de procesamiento consiste en realizar un cruce de datos relacional: se emparejará la temporada y el club de la base de ingresos con las variables transfer_date y club de la base principal de fichajes. Mediante este cruce se podrá calcular una nueva variable que indique qué porcentaje de los ingresos anuales del club representó cada fichaje.
###La fórmula utilizada será:

Peso del fichaje sobre los ingresos = transfer_fee / TOTAL_REVENUE × 100

Este indicador permitirá comparar la importancia económica de fichajes realizados en diferentes momentos, complementando el ajuste por inflación realizado con la segunda base de datos.
