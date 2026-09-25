# Valor neto de los clubes de la Premier League

## Metodología de la construcción de la base

La base de datos fue construida a partir de información financiera disponible sobre clubes pertenecientes a la Premier League durante el período comprendido entre 2005 y 2025. La unidad de observación corresponde a la relación entre un club y un determinado año.

Los datos fueron recopilados y organizados de manera cronológica, identificando para cada observación el año correspondiente, el nombre del club y su valor neto expresado en millones de libras esterlinas (£m).

Para facilitar la comparación entre clubes y períodos, todos los valores fueron mantenidos en millones de libras esterlinas. De esta manera, la base permite observar la evolución del valor económico de los clubes a lo largo del tiempo y comparar las diferencias entre instituciones.

La información fue posteriormente estructurada en formato tabular, de manera que cada fila representa una observación correspondiente a un club en un año determinado y cada columna representa una variable.

## Alcance de los datos

La base contempla información correspondiente al período 2005-2025, considerando clubes que han formado parte de la Premier League durante este intervalo.

El alcance temporal permite analizar la evolución del valor de los clubes durante aproximadamente dos décadas, incluyendo períodos de crecimiento, cambios en la estructura económica del fútbol inglés y variaciones en la composición de los equipos de la competición.

El valor se encuentra expresado en millones de libras esterlinas (£ millones), lo que permite trabajar con cifras comparables y facilita posteriormente la realización de operaciones estadísticas y gráficas.

La base está orientada principalmente al análisis financiero de los clubes. En particular, puede utilizarse como insumo para estudiar posteriormente la relación entre el valor de los clubes y variables relacionadas con sus gastos, desempeño deportivo u otros indicadores económicos.

## Características de los datos

Los datos corresponden principalmente a información **cuantitativa y estructurada**. La variable principal, correspondiente al valor neto del club, es numérica y continua, ya que puede adoptar distintos valores expresados en millones de libras esterlinas.

La base presenta una estructura longitudinal, debido a que registra información de los mismos clubes —cuando estos se encuentran presentes en la competición— a través de distintos años. Esto permite observar cambios en el valor de un mismo club a lo largo del tiempo.

La variable temporal permite ordenar las observaciones cronológicamente, mientras que la variable club permite identificar a cada institución.

La base puede ser utilizada para realizar análisis descriptivos, tales como:

* Evolución del valor de los clubes a través del tiempo.
* Comparación del valor entre distintos clubes.
* Identificación de aumentos o disminuciones en el valor de las instituciones.
* Cálculo de promedios y variaciones porcentuales.
* Elaboración de gráficos de evolución temporal.
* Comparación posterior con variables de gasto u otros indicadores financieros.

## Otras observaciones sobre la base

Es importante considerar que el **valor neto o valoración de un club no equivale necesariamente a sus ingresos, gastos o utilidades**. Son conceptos financieros diferentes y, por lo tanto, no deben interpretarse como equivalentes.

Por ejemplo, Deloitte utiliza los ingresos como una medida comparable para analizar la capacidad de generación económica de los clubes y los divide, entre otras categorías, en ingresos de día de partido, derechos de transmisión y actividades comerciales.

Por esta razón, si la base será utilizada posteriormente para estudiar los gastos de los clubes, ambas variables deben mantenerse separadas. El valor neto puede funcionar como una variable de contexto o de comparación frente a los gastos, pero no representa directamente cuánto dinero gasta un club.

También se debe considerar que no todos los clubes permanecieron en la Premier League durante todo el período 2005-2025. Por lo tanto, la ausencia de un club en un determinado año no necesariamente representa un dato faltante, sino que puede indicar que el club no participó de la competición durante ese período.

Finalmente, las diferencias en la forma en que las fuentes financieras calculan o presentan las valoraciones pueden afectar la comparabilidad entre años. Por ello, resulta recomendable mantener una metodología homogénea y registrar la fuente utilizada para cada observación cuando sea posible.

## Diccionario de datos

| Nombre de la variable | Descripción                                                                            | Tipo de dato     | Valores posibles                             | Observaciones editoriales                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `year`                | Año al que corresponde la valoración del club.                                         | Numérico entero  | 2005-2025                                    | Permite ordenar temporalmente las observaciones.                                                                            |
| `club`                | Nombre oficial o estandarizado del club de la Premier League.                          | Texto            | Nombres de los clubes registrados en la base | Se recomienda utilizar una denominación uniforme para evitar que un mismo club aparezca como dos entidades diferentes.      |
| `net_value_gbp_m`     | Valor neto o valoración económica del club expresada en millones de libras esterlinas. | Numérico decimal | Valores positivos expresados en £ millones   | Es la principal variable cuantitativa de la base. No debe interpretarse automáticamente como ingresos, gastos o utilidades. |

### Unidad de observación

Cada fila de la base representa **un club en un año determinado**.

Por ejemplo:

| year | club   | net_value_gbp_m |
| ---- | ------ | --------------: |
| 2005 | Club A |          XXXX.X |
| 2006 | Club A |          XXXX.X |
| 2007 | Club A |          XXXX.X |

Esto permite analizar tanto la dimensión **transversal** —comparar clubes entre sí— como la dimensión **temporal** —observar la evolución de un mismo club durante distintos años—.

### Variable principal

La variable `net_value_gbp_m` constituye la variable de interés financiero de la base. Al estar expresada en millones de libras esterlinas, permite realizar comparaciones directas entre las observaciones siempre que la metodología utilizada para calcular el valor sea consistente.

La base puede posteriormente complementarse con variables relacionadas con **gastos, salarios, ingresos, rendimiento deportivo o posición en la liga**, permitiendo estudiar posibles relaciones entre el valor económico de un club y sus decisiones financieras.
