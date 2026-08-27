# Ficha Técnica de Base de Datos: Ingresos de los clubes de fútbol

## Autor y publicación de los datos

### Propietarios/Autores:

Deloitte Sports Business Group.

### Publicación:

Los datos se obtendrán desde el informe anual **Deloitte Football Money League**, elaborado por Deloitte, que registra los clubes de fútbol con mayores ingresos, incluidos los de la Premier League. El informe analiza los ingresos generados por los clubes a partir de tres fuentes principales: año, club, y cuánto dinero tenía en ese tiempo del fichaje.

Para este estudio, se utilizarán las ediciones históricas del *Football Money League* desde 2006 hasta la edición correspondiente a la temporada 2024-25. La edición 2026, publicada en enero de 2026, analiza los ingresos de la temporada 2024-25 y registra ingresos acumulados de €12.400 millones entre los 20 clubes de la *Money League*.

## Contenido

**Descripción:** La base de datos contiene información sobre los ingresos anuales de los principales clubes de fútbol a nivel mundial, desglosados principalmente en tres categorías: ingresos por día de partido (*matchday*), derechos de transmisión (*broadcast*) e ingresos comerciales (*commercial*).

El informe permite observar la evolución de la capacidad económica de los principales clubes europeos y, dentro de ellos, de los equipos de la Premier League. Además, permite analizar cómo ha cambiado la composición de los ingresos de los clubes a lo largo del tiempo.

La metodología de Deloitte utiliza información proveniente de los estados financieros anuales de los clubes, información proporcionada directamente por estos y otras fuentes directas. Para facilitar la comparación, Deloitte clasifica los ingresos en las tres categorías mencionadas. La organización también señala que los ingresos por transferencias de jugadores y entrenadores **no están incluidos en los ingresos reportados**.

Un aspecto relevante para el análisis histórico es que la estructura de ingresos de los clubes ha cambiado considerablemente. Deloitte señala que en la temporada 2009-10 los clubes que ocupaban los primeros diez lugares de la *Money League* obtenían aproximadamente el 26% de sus ingresos del *matchday*, el 43% de la transmisión y el 31% de actividades comerciales. En cambio, en 2023-24, el *top 10* obtenía el 48% de sus ingresos de actividades comerciales, mientras que la transmisión representaba el 34% y el *matchday* el 18%.

En 2023-24, los clubes incluidos en la *Money League* generaron conjuntamente un récord de **€11.200 millones**, mientras que el Real Madrid se convirtió en el primer club en superar los **€1.000 millones de ingresos en una temporada**.

### Tipo de datos y período:

Corresponde a una **serie de tiempo cuantitativa**, complementada con variables categóricas correspondientes a los clubes.

Los datos utilizados abarcarán desde la temporada **2004-05 hasta la temporada 2024-25**, utilizando las distintas ediciones históricas disponibles del *Deloitte Football Money League*. Esto permite incorporar información desde 2005 y mantener una serie histórica de aproximadamente dos décadas. Deloitte señala que sus ediciones anteriores están disponibles desde 2006.

## Variables:

* `AÑO` (Numérico): Temporada correspondiente a los ingresos registrados (ej. 2004-05).
* `CLUB` (Texto): Nombre del club.
* `DINERO_NETO` (Numérico / Decimal): Ingresos totales del club durante la temporada.

## Pertinencia

* Esta base es valiosa para la investigación porque permite contextualizar el precio de los fichajes de la Premier League según la capacidad económica de los clubes. Mientras la base principal registra cuánto pagaron los equipos por los jugadores y la base de inflación permite llevar esos montos a un valor comparable, los ingresos permiten determinar qué tan significativo era ese gasto para el club en cada período.

* De esta manera, se podrá calcular qué porcentaje de los ingresos anuales de un club representaba determinado fichaje. Esto permitirá distinguir entre el aumento nominal de los precios y un eventual aumento del peso económico que tienen las transferencias para los equipos.

* La información también permitirá analizar si el crecimiento de los precios de los fichajes ha sido proporcional al crecimiento de los ingresos de los clubes. Esto es especialmente relevante para la Premier League, considerando el aumento de los ingresos derivados de los derechos audiovisuales y de las actividades comerciales.

* Además, la serie histórica permite observar cómo ha cambiado el modelo económico de los grandes clubes. Por ejemplo, Deloitte identifica un desplazamiento progresivo hacia los ingresos comerciales entre los clubes que ocupan los primeros lugares de la *Money League*. En 2023-24, los ingresos comerciales representaron el 44% de los ingresos totales de los clubes de la *Money League*, frente al 38% correspondiente a transmisión y el 18% correspondiente a *matchday*.

## Metodología

* Los datos serán recopilados mediante la revisión y extracción de información de las distintas ediciones del **Deloitte Football Money League**, disponibles en el portal oficial de Deloitte. La organización publica información sobre los ingresos totales y su distribución entre *matchday*, *broadcast* y *commercial*.

* Para mantener la comparabilidad entre períodos, se registrarán los ingresos en la moneda utilizada por Deloitte y posteriormente se podrá realizar la conversión correspondiente, si fuese necesario para el análisis.

* El plan de procesamiento consiste en realizar un **cruce de datos relacional**: se emparejará la temporada y el club de la base de ingresos con las variables `transfer_date` y `club` de la base principal de fichajes.

* Debido a que Deloitte publica los ingresos correspondientes a temporadas completas y la base de fichajes registra operaciones individuales, el cruce deberá considerar el año o temporada correspondiente a cada transferencia.

* Mediante este cruce se podrá calcular una nueva variable que indique qué porcentaje de los ingresos anuales del club representó cada fichaje.

### La fórmula utilizada será:

**Peso del fichaje sobre los ingresos = `TRANSFER_FEE` / `TOTAL_REVENUE` × 100**

* Este indicador permitirá comparar la importancia económica de fichajes realizados en diferentes momentos, complementando el ajuste por inflación realizado con la segunda base de datos.

* Por ejemplo, un fichaje equivalente al 10% de los ingresos de un club tendrá un peso económico distinto de otro fichaje que también cueste €50 millones, pero represente solamente el 3% de los ingresos de su club. De esta forma, el indicador permitirá analizar la evolución del **peso relativo de los fichajes**, y no solamente su precio nominal o su valor ajustado por inflación.

* Finalmente, se debe considerar que los ingresos reportados por Deloitte **no incluyen las transferencias de jugadores**, por lo que el indicador compara el costo de un fichaje con los ingresos operacionales del club y evita incorporar el propio gasto de transferencia dentro del denominador.
