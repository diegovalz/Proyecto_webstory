
# Ficha técnica: Base de datos del valor económico de los clubes de la Premier League (2005–2025)

## 1. Características generales de la base de datos

La base de datos fue elaborada para analizar la evolución económica de los clubes de la Premier League inglesa entre 2005 y 2025. Su objetivo es identificar tendencias de crecimiento, diferencias financieras entre equipos y posibles procesos de concentración económica dentro del fútbol profesional.

La información fue recopilada a partir de publicaciones de Forbes y Deloitte Football Money League, dos fuentes especializadas en el análisis económico de la industria deportiva.

| Característica | Descripción |
|---|---|
| **Tema** | Evolución económica de los clubes de la Premier League |
| **Período de estudio** | 2005–2025 |
| **Cobertura geográfica** | Inglaterra |
| **Unidad de análisis** | Club de fútbol por año |
| **Fuentes de información** | Forbes y Deloitte Football Money League |
| **Formato** | CSV (valores separados por comas) |
| **Herramienta de procesamiento** | Python y Pandas |
| **Herramienta de visualización** | Altair |
| **Entorno de trabajo** | Google Colab |
| **Archivo** | Valor Neto Premier League.csv |

## 2. Variables incorporadas

La base de datos organiza la información económica de los clubes según el año y el equipo correspondiente, permitiendo analizar su evolución histórica.

| Variable | Descripción |
|---|---|
| **Año** | Año al que corresponde cada registro de la base de datos. |
| **Club** | Nombre del equipo de fútbol al que corresponde la información. |
| **Valor económico** | Cifra económica registrada para el club en el año correspondiente. |
| **Fuente** | Publicación o informe del que se obtuvo la información. |

**Nota:** Los nombres de las variables y las unidades monetarias deben coincidir con los encabezados y valores utilizados en el archivo CSV original.

## 3. Observaciones sobre la base de datos

### 3.1. Disponibilidad de información

Una de las principales limitaciones de la investigación es que no todos los clubes cuentan con información económica disponible para cada año del período estudiado.

Esto puede generar diferencias en la cantidad de registros entre equipos y limitar determinadas comparaciones históricas.

La ausencia de un registro no significa que el valor económico de un club sea igual a cero, sino que no se dispone de información para ese año.

### 3.2. Diferencias metodológicas entre fuentes

Las publicaciones utilizadas responden a metodologías diferentes.

- **Forbes:** publica estimaciones del valor económico de los clubes, considerando distintos aspectos de su actividad financiera y comercial.
- **Deloitte Football Money League:** presenta información sobre los ingresos generados por los equipos a partir de sus actividades económicas.

Esta distinción es fundamental porque el valor económico total de un club y sus ingresos anuales no representan la misma variable.

Por lo tanto, ambas fuentes deben identificarse correctamente y sus cifras no deben combinarse directamente como si midieran un mismo indicador.

### 3.3. Comparabilidad histórica

Las estimaciones económicas pueden presentar diferencias entre años debido a cambios en las metodologías, la disponibilidad de información y las condiciones del mercado.

Además, los valores nominales pueden verse afectados por la inflación y por las variaciones monetarias.

Por esta razón, las comparaciones históricas deben considerar las unidades monetarias utilizadas y las posibles diferencias entre las fuentes originales.

### 3.4. Cobertura de los clubes

La información disponible puede variar entre equipos según su relevancia económica y su presencia en los informes consultados.

Esto significa que los clubes con mayor participación en publicaciones financieras pueden contar con una cobertura histórica más amplia que otros equipos.

### 3.5. Limitaciones interpretativas

La visualización permite identificar tendencias económicas y diferencias entre clubes, pero no demuestra por sí sola las causas de dichas variaciones.

El crecimiento del valor económico de un equipo puede estar relacionado con distintos factores, como los derechos de transmisión, los ingresos comerciales, los resultados deportivos y la inversión privada.

Asimismo, el aumento del valor económico de los clubes no demuestra automáticamente que este sea la causa del encarecimiento de los fichajes.

Para estudiar esa relación es necesario complementar la información con los datos de transferencias e inflación utilizados en la investigación grupal.

## 4. Alcances de la base de datos

Esta base permite estudiar la evolución económica de los clubes de la Premier League durante las últimas dos décadas y explorar las diferencias entre las instituciones que participan en la competencia.

Su principal aporte a la investigación es proporcionar contexto financiero al aumento de los precios en el mercado de fichajes.

Al combinar sus resultados con las visualizaciones de inflación europea y transferencias, es posible investigar si el encarecimiento del fútbol forma parte de una transformación económica más amplia de la industria.

## 5. Consideraciones para la reutilización

Para utilizar esta base de datos en nuevas investigaciones se recomienda:

1. Verificar las fuentes originales de las cifras económicas.
2. Identificar correctamente las unidades monetarias.
3. Distinguir entre valoraciones de clubes e ingresos anuales.
4. Considerar los registros faltantes al realizar comparaciones.
5. Revisar la comparabilidad de las cifras entre distintos años.
6. Documentar cualquier transformación adicional aplicada a los datos.

Estas precauciones permiten mejorar la transparencia, interpretación y reproducibilidad del análisis.
