# Ficha Técnica: Base de Datos de Inflación (HICP)

## 1. Fuente de los datos
Los datos primarios son propiedad y autoría del **Banco Central Europeo**. La extracción se realizó desde su portal oficial de estadísticas públicas y datos abiertos, navegando a través del explorador de datos corporativo hasta el conjunto de datos específico correspondiente al Índice Armonizado de Precios de Consumo (HICP).

## 2. Metodología de la construcción de la base
La construcción inicial consistió en la descarga directa del conjunto de datos desde la plataforma pública en formato `.csv`, delimitado a las fechas de interés del proyecto. 

Posteriormente, la base original fue sometida a un proceso de limpieza y estandarización programática mediante Python (pandas) para garantizar su replicabilidad y consistencia técnica. Las transformaciones incluyeron:

- Ajuste de la nomenclatura de las variables al estándar de la industria `snake_case`.

- Conversión de variables de texto plano a tipos de datos temporales reales (`datetime`) bajo el estándar internacional ISO 8601.

- Normalización de la dimensión temporal a un formato mensual estandarizado (`YYYY-MM`).

Este procesamiento metodológico se diseñó específicamente para permitir un cruce de datos relacional (JOIN) exacto con la base de datos de fichajes de la Premier League.

## 3. Alcance de los datos
El conjunto de datos representa una serie de tiempo que abarca ininterrumpidamente desde **enero de 2005 hasta junio de 2026**, enfocándose exclusivamente en medir la evolución de la inflación dentro de la zona euro.

## 4. Característica de los datos
Se clasifica como una **serie de tiempo cuantitativa**, estructurada de forma tabular.

## 5. Otras observaciones que tengan sobre la base
La pertinencia metodológica de esta base es crítica para la investigación. Al estar los registros principales de transferencias de la Premier League expresados en euros (variables `transfer_fee` y `market_value_in_eur`), esta tabla de inflación permite descontar la pérdida del poder adquisitivo del dinero a lo largo de las temporadas. Traer los montos históricos a un valor presente real es el mecanismo que permitirá demostrar empíricamente si el incremento en el gasto de los clubes ingleses responde a una distorsión inflacionaria macroeconómica o a un genuino sobreprecio del mercado de fichajes.

## 6. Diccionario de datos

| Nombre de la variable | Descripción | Tipo de dato | Valores posibles | Observaciones editoriales |
| :--- | :--- | :--- | :--- | :--- |
| **`fecha`** | El último día del mes registrado. | Datetime (`YYYY-MM-DD`) | `2005-01-31` a `2026-06-30` | Transformada desde el formato de texto crudo (`DD-MM-YY`) para permitir un graficado temporal continuo. |
| **`periodo`** | Clave alfanumérica que indica el año y mes exacto de la observación. | Cadena de texto (String) | `2005-01` a `2026-06` | Normalizada desde el formato crudo (ej. `2005Jan`) para actuar como llave foránea y permitir cruces relacionales eficientes con la base de fichajes. |
| **`tasa_inflacion`** | El porcentaje de inflación (HICP) registrado en el periodo correspondiente. | Numérico (Float) | Valores decimales (ej. `2.1`, `0.5`, etc.) | Originalmente extraída como `HICP_Inflation_rate`, renombrada y estandarizada a `snake_case`. |
