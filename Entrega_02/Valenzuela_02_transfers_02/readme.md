# Historial de Procesos, Decisiones Metodológicas y Registro de Limpieza de Datos
**Investigador responsable:** Diego Andrés Valenzuela González  
**Tema de investigación:** El "Impuesto Premier League": Radiografía al Sobreprecio e Inflación en el Mercado de Fichajes (2005–2026)  
**Asignatura:** Narración Gráfica  
**Entrega:** Entrega 02 — Preparación, Limpieza y Estructuración de Datos

---

## 1. ¿Qué es este documento y cuál es su función en la investigación periodística?

En el periodismo de datos contemporáneo, la transparencia algorítmica y la reproducibilidad metodológica no son meros requisitos técnicos secundarios, sino la garantía ética sobre la cual descansa la credibilidad del reportaje. Este documento corresponde a la **bitácora de auditoría y documentación de decisiones** exigida en el proyecto. Su objetivo es transparentar la totalidad de las transformaciones, filtros, exclusiones y criterios editoriales aplicados sobre los datos brutos iniciales hasta consolidar la base limpia final (`Transfers_cleaned2.csv`).

Cuando una investigación periodística sostiene que los clubes de fútbol de la Premier League operan bajo un mercado especulativa pagando sobreprecios superiores a las tasaciones de mercado, dicha afirmación no puede derivar de intuiciones subjetivas ni de notas de prensa aisladas. Debe respaldarse en una secuencia verificable de pasos donde cada fila eliminada, cada columna normalizada y cada fórmula matemática empleada responda a un criterio justificado y trazable.

---

## 2. Explicación Detallada del Proceso de Limpieza y Decisiones Metodológicas

El procesamiento técnico consistió en transformar un conjunto masivo, heterogéneo y desestructurado de registros globales de transferencias en una matriz cuantitativa uniforme, limpia y directamente computable mediante librerías de programación como Pandas.

### Paso 1: Diagnóstico inicial de inconsistencias en la base matriz no depurada
El archivo maestro original (`transfers.csv`), obtenido del compilado abierto de Transfermarkt en la plataforma Kaggle, incorporaba más de 175.000 operaciones de traspaso a escala global desde la década de 1970 hasta la actualidad. Una inspección técnica exploratoria desarrollada en Python evidenció fallas estructurales que impedían un análisis económico riguroso:
* **Contaminación por divisiones formativas y juveniles:** Escuadras como *Chelsea U18*, *Arsenal U23*, *Manchester United Reserves* o *Manchester City UEFA U19* figuraban como entidades compradoras independientes. Estas operaciones correspondían a promociones internas o transferencias juveniles sin valoraciones de mercado públicas ni oficiales, lo que distorsionaba los promedios monetarios del primer equipo.
* **Duplicidad por homónimos institucionales en otras ligas:** El conjunto general indexaba instituciones que compartían nombres idénticos o similares fuera de Gran Bretaña (por ejemplo, *Everton de Viña del Mar* de la liga chilena, *Arsenal de Sarandí* del fútbol argentino o *Barcelona Sporting Club* de Ecuador). Un filtrado por texto simple sin discriminación de identificador geográfico asignaba erróneamente transferencias latinoamericanas a la liga inglesa.
* **Sesgo distorsivo de transacciones a costo cero:** Gran parte de las filas del dataset correspondían a préstamos temporales sin cargo, cesiones de juveniles o incorporaciones como agente libre tras culminar contrato (`transfer_fee = 0` o valores nulos `NaN`). Aunque representan movimientos válidos en lo deportivo, su inclusión en el cálculo del sobreprecio generaba indeterminaciones matemáticas (divisiones por cero) o distorsionaba a la baja el valor real pagado en el mercado abierto.

### Paso 2: Criterio editorial de selección muestral (Los 20 clubes más regulares)
Para asegurar la validez estadística y evitar distorsiones producidas por clubes que compitieron únicamente una temporada en la máxima categoría y descendieron de inmediato, se estableció un criterio metodológico: aislar a los **20 clubes con mayor cantidad de campañas disputadas en la era contemporánea de la Premier League**.
Mediante filtrado booleano sobre los nombres estandarizados de clubes (`Club comprador_2`), la muestra se delimitó en las siguientes veinte entidades: *Chelsea, Manchester City, Wolverhampton Wanderers, Newcastle United, Manchester United, Aston Villa, Liverpool, Arsenal, Southampton, Everton, West Ham United, Leicester City, Fulham, Sunderland, Crystal Palace, Stoke City, Middlesbrough, West Bromwich Albion, Blackburn Rovers y Bolton Wanderers*.

### Paso 3: Aislamiento del universo de sobreprecio y homogeneización de tipos de datos
Para medir objetivamente la prima inflacionaria de mercado, se retuvieron únicamente las transacciones que contaban en simultáneo con tarifa de traspaso informada (`Valor pagado` > 0) y tasación técnica de mercado previa (`Valor estimado` > 0). Esto delimitó el universo analítico a **997 transferencias de primer orden**, asegurando una matriz con completitud absoluta (cero registros vacíos o nulos).

Posteriormente, se depuraron las incompatibilidades de formato numérico:
* **Eliminación de símbolos monetarios:** Se erradicaron los caracteres tipográficos de moneda (`$`) presentes en los datos brutos.
* **Supresión de separadores de miles:** Se eliminaron las comas tipográficas de los miles para evitar que los entornos de Python interpretaran los números como cadenas de texto (`object`).
* **Estandarización entera:** Las variables `Valor pagado` y `Valor estimado` se consolidaron como enteros de 64 bits (`int64`) expresados en euros (€).
* **Construcción de la métrica analítica de sobreprecio (`Deficit`):** Se computó algebraicamente la brecha porcentual entre lo pagado y lo tasado:
$$\text{Deficit} = \frac{\text{Valor pagado} - \text{Valor estimado}}{\text{Valor estimado}} \times 100$$
Donde un valor positivo consigna sobreprecio y un valor negativo documenta infraprecio o compra eficiente.

### Herramientas y tecnologías aplicadas
* **Python 3.10+ y Pandas:** Utilizados en entornos Jupyter Notebook y Google Colaboratory para la auditoría de tipos, el filtrado condicional booleano y la validación de integridad estructural.
* **Microsoft Excel / Google Sheets:** Empleados como entorno de apoyo para inspección visual directa celda a celda y control de delimitadores CSV (punto y coma `;`).

---

## 3. Fuentes de Datos Utilizadas y Justificación Periodística

* **Fuente seleccionada:** Base de datos histórica compilada por David Cariboo a partir de la plataforma internacional **Transfermarkt**.
* **Justificación técnica y editorial:** *Transfermarkt* constituye el estándar cuantitativo de referencia más citado y consensuado en la industria del fútbol a nivel mundial, siendo utilizado habitualmente por departamentos de analítica deportiva, directores deportivos y tribunales internacionales de arbitraje deportivo (TAS). Sus valoraciones (`Valor estimado`) no se basan en rumores mediáticos, sino en un proceso técnico que pondera variables objetivas como edad, posición en el campo, minutos disputados, rendimiento estadístico, estatus de selección nacional y vigencia contractual. Al tasarse con anterioridad a la concreción de los fichajes, este valor actúa como un estimador técnico independiente, permitiendo aislar empíricamente el sobreprecio generado por la liquidez británica.

---

## 4. Preguntas de Investigación y Demostración con Tablas Dinámicas (Pivot Tables)

A partir de la base de datos limpia (`Transfers_cleaned2.csv`), es posible someter las hipótesis a contrastación empírica mediante agrupaciones estructuradas (tablas dinámicas / *pivot tables*):

### Pregunta 1: ¿Qué clubes de la Premier League asumen el mayor sobreprecio porcentual promedio en sus incorporaciones y cómo se compara la élite frente a los clubes de mitad de tabla?
* **Construcción analítica (Tabla dinámica 1):** Agrupación por `Club comprador_2`, calculando la suma total de `Valor pagado`, la suma de `Valor estimado` y la media aritmética del porcentaje de sobreprecio (`Deficit`).
* **Hallazgo e interpretación periodística:** Los datos muestran que el sobreprecio no es exclusivo de los clubes del *Big Six*. Mientras Chelsea encabeza el volumen acumulado de compras (€3.002 millones en 93 fichajes con un sobreprecio promedio del 182%) y Manchester United promedia un sobrepago del 272%, instituciones de presupuesto medio e inferior como Everton (182%) y Newcastle (154%) también exhiben primas desproporcionadas. Esto confirma periodísticamente que los clubes de mitad y zona baja de tabla pagan un "recargo de supervivencia" en el mercado exterior para evitar el costo económico del descenso a Championship.

### Pregunta 2: ¿Cómo evolucionó la prima de sobrepago tras la entrada en vigor del macro-contrato televisivo de la Premier League en la temporada 2016/17?
* **Construcción analítica (Tabla dinámica 2):** Agrupación temporal por `Temporada`, calculando la suma del gasto global y el promedio anual de `Deficit`.
* **Hallazgo e interpretación periodística:** La serie temporal refleja un salto estructural sostenido a partir del ciclo 2016/17. Mientras en temporadas previas las primas de transferencia promediaban recargos moderados, con el ingreso récord de los derechos televisivos británicos el sobreprecio medio anual escaló por encima del 40%, registrando picos superiores al 100% en ejercicios recientes (como la temporada 24/25 con un sobreprecio medio del 142%). Esto valida la hipótesis de que los vendedores europeos ajustaron sus precios al alza conscientes del excedente de liquidez del fútbol inglés.

### Pregunta 3: ¿Qué instituciones han logrado operar a contracorriente de la burbuja capturando transacciones bajo la modalidad de "infraprecio" (compras por debajo de la tasación técnica)?
* **Construcción analítica (Tabla dinámica 3):** Filtrado booleano condicional para operaciones donde `Deficit < 0`, agrupando por `Club comprador_2` para contabilizar la frecuencia de operaciones eficientes y el margen de descuento obtenido.
* **Hallazgo e interpretación periodística:** De las 997 transferencias, 249 se concretaron con cifras inferiores a la tasación de mercado. Instituciones con estructuras avanzadas de reclutamiento y *scouting* analítico, como Manchester City (23 operaciones bajo tasación), Arsenal (21) y Wolverhampton (18), han sabido capturar talento infravalorado (con descuentos de hasta el -97%, como la compra de Daniel Bentley por Wolves). Esto permite construir el contrapunto narrativo del reportaje: demostrar que existen clubes capaces de sortear la burbuja inflacionaria mediante una gestión deportiva eficiente.
