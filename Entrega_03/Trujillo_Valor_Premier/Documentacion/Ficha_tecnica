
## 4. Ficha técnica de la base de datos

### Información general

| Característica | Descripción |
|---|---|
| **Tema** | Evolución económica de los clubes de la Premier League |
| **Período de estudio** | 2005–2025 |
| **Cobertura geográfica** | Inglaterra |
| **Unidad de análisis** | Club de fútbol por año |
| **Fuentes de información** | Forbes y Deloitte Football Money League |
| **Formato de la base de datos** | CSV (valores separados por comas) |
| **Herramientas de procesamiento** | Python y herramientas de organización de datos |
| **Herramienta de visualización** | Altair (Python) |

### Variables incorporadas

La base de datos reúne información económica de los clubes de la Premier League durante el período 2005–2025.

| Variable | Descripción |
|---|---|
| **Año** | Año al que corresponde cada registro de la base de datos. |
| **Club** | Nombre del equipo de fútbol al que corresponde la información. |
| **Valor económico** | Cifra económica registrada para el club en el año correspondiente. |
| **Fuente** | Publicación o informe del que se obtuvo la información. |

**Nota metodológica:** Los nombres de las variables y las unidades monetarias deben corresponder a los encabezados y valores utilizados en el archivo CSV original.

---

## 5. Observaciones y limitaciones

Durante la recopilación, organización y análisis de los datos se identificaron distintas limitaciones que deben considerarse al interpretar los resultados.

### 5.1. Disponibilidad de información

No todos los clubes cuentan con registros económicos disponibles para la totalidad del período estudiado. Esto puede generar diferencias en la cantidad de observaciones entre equipos y años.

### 5.2. Diferencias metodológicas entre fuentes

Las cifras publicadas por Forbes y Deloitte responden a metodologías distintas.

- **Forbes:** publica estimaciones sobre el valor económico de los clubes.
- **Deloitte Football Money League:** presenta información sobre los ingresos generados por los equipos.

Por lo tanto, los ingresos anuales no deben interpretarse como equivalentes al valor económico total de un club.

### 5.3. Comparabilidad histórica

Los datos correspondientes a distintos años pueden presentar diferencias en su cobertura, disponibilidad y metodología de estimación.

Estas diferencias deben considerarse al realizar comparaciones históricas y analizar tendencias económicas.

### 5.4. Datos faltantes

La ausencia de información para un determinado club o año no significa que su valor económico sea igual a cero.

Los registros faltantes deben identificarse como tales para evitar interpretaciones incorrectas.

### 5.5. Alcances del análisis

La visualización permite identificar tendencias, diferencias económicas y cambios a lo largo del tiempo.

Sin embargo, los resultados no permiten establecer por sí solos relaciones causales entre el desempeño deportivo de los equipos y su evolución económica.

---

## 6. Preguntas que permite responder la visualización

La visualización fue diseñada para facilitar la exploración de la evolución económica de los clubes de la Premier League.

Entre las principales preguntas que permite abordar se encuentran:

1. **Evolución histórica:** ¿Cómo ha evolucionado el valor económico de los clubes de la Premier League entre 2005 y 2025?

2. **Crecimiento económico:** ¿Qué clubes presentan los mayores incrementos económicos durante el período estudiado?

3. **Desigualdad económica:** ¿Se ha ampliado la diferencia entre los clubes más valiosos y el resto de los equipos?

4. **Transformaciones:** ¿Qué clubes han experimentado los cambios económicos más significativos durante las últimas dos décadas?

5. **Tendencias temporales:** ¿Existen años en los que se observan aumentos o disminuciones especialmente pronunciados?

Estas preguntas permiten analizar la distribución de los recursos económicos dentro del fútbol inglés y explorar posibles procesos de concentración económica.

---

## 7. Archivos del proyecto

El proyecto contempla los siguientes archivos:

| Archivo | Descripción |
|---|---|
| `README.md` | Documentación metodológica, ficha técnica y limitaciones del proyecto. |
| `premier_league.csv` | Base de datos utilizada para construir la visualización. |
| `visualizacion.ipynb` | Notebook de Python con el código utilizado para procesar y visualizar los datos. |
| `premier_league.html` | Versión interactiva de la visualización desarrollada con Altair. |
| `premier_league.jpg` | Versión estática de la visualización para su presentación. |

---

## 8. Reproducibilidad

El proyecto busca garantizar la transparencia y replicabilidad del proceso de análisis y visualización de datos.

Para reproducir el trabajo se deben seguir los siguientes pasos:

### Paso 1. Descargar los archivos

Descargar desde el repositorio de GitHub los siguientes archivos:

- `premier_league.csv`
- `visualizacion.ipynb`

### Paso 2. Preparar el entorno de trabajo

Contar con una instalación de Python y las librerías necesarias para el procesamiento y visualización de los datos.

Las principales librerías utilizadas son:

- **pandas:** permite importar, organizar y procesar bases de datos.
- **Altair:** permite construir visualizaciones de datos interactivas.

### Paso 3. Importar la base de datos

Abrir el notebook `visualizacion.ipynb` y cargar el archivo CSV utilizando pandas.

Es necesario verificar que la ruta del archivo corresponda a su ubicación en el entorno de trabajo.

### Paso 4. Ejecutar el código

Ejecutar las celdas del notebook en el orden establecido para reproducir el procesamiento y la visualización.

### Paso 5. Generar los resultados

Una vez ejecutado el código, se podrá obtener la visualización y exportarla en los formatos correspondientes.

### Consideraciones finales

La reproducibilidad del proyecto depende de utilizar la misma base de datos y aplicar los procedimientos de procesamiento documentados.

Cualquier modificación en las fuentes, variables o criterios de limpieza puede generar diferencias respecto de los resultados originales.

