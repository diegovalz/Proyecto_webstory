# Análisis Crítico Individual: El Impuesto Premier League y la Distorsión del Valor de Mercado por Diego Valenzuela

## 1. Qué espero contar y revelar del tema

En el desarrollo de esta investigación periodística, mi principal objetivo es comprobar empíricamente una de las mayores tensiones financieras del fútbol moderno: la existencia y magnitud real del llamado "impuesto implícito de la Premier League" (*Premier League Premium*). Durante años, la narrativa deportiva convencional ha asumido que el mercado inglés simplemente paga cifras altas porque posee mayores recursos; sin embargo, lo que espero revelar a través de los datos es que la liga opera bajo una distorsión sistemática en la que los clubes desembolsan sumas desproporcionadamente superiores a la tasación técnica previa de los futbolistas (el valor de mercado de *Transfermarkt*), configurando un patrón estructural de **sobreprecio**.

Al cruzar los montos reales pagados (*transfer_fee*) con las valoraciones de mercado (*market_value_in_eur*) en las últimas temporadas para los 20 clubes más regulares de la competición, busco desmitificar la idea de que todos los equipos gestionan sus compras con la misma lógica. Espero evidenciar cómo el sobreprecio no es exclusivo de los fichajes mediáticos del *Big Six*, sino que se ha transformado en un mecanismo de supervivencia forzado para los equipos de clase media y baja, quienes pagan primas de urgencia considerables en ventanas clave para asegurar la permanencia. 

Asimismo, me interesa poner en valor el fenómeno opuesto: el **infraprecio** (compras ejecutadas por debajo o en paridad con la tasación estimada). A través de la base de datos, busco visibilizar qué modelos institucionales (han logrado sortear la burbuja inflacionaria capturando talento a precio justo o con fichajes coste cero, frente a competidores que asumen recargos de más del 50% de forma sistemática.

---

## 2. Ideas para contar la historia visualmente

Para traducir esta matriz cuantitativa en una experiencia visual e intuitiva en la webstory, planteo dos recursos interactivos centrales:

* **Diagrama de Dispersión Interactivo (*Scatter Plot* de Sobreprecio vs. Infraprecio):** 
  En la interfaz web, este gráfico situará a los fichajes con costo en un plano cartesiano donde el Eje X representará el *Valor de Mercado Estimado* y el Eje Y el *Monto Realmente Pagado*, cruzados por una línea diagonal ($y = x$) que representa la paridad o precio justo. Todos los puntos situados por encima de la diagonal ilustrarán el **sobreprecio** (destacados con gradientes cálidos/rojos según el porcentaje extra pagado), mientras que los puntos por debajo reflejarán el **infraprecio o compras de alta eficiencia** (en tonos fríos/azules). Al interactuar con cada punto, una ventana flotante detallará el nombre del futbolista, el club comprador, la temporada y la brecha monetaria exacta, permitiendo explorar casos paradigmáticos de sobrepago frente a compras de gran valor relativo.

* **Matriz de Eficiencia Financiera por Club (Barras Divergentes y Filtro Temporal):**
  Una visualización dinámica que ordene a los 20 clubes según su ratio promedio de sobreprecio a lo largo de las 15 temporadas. Este gráfico permitirá comparar dos épocas (antes y después del contrato televisivo masivo de 2016) para observar la mutación de cada institución: desplegará en barras hacia la derecha a los clubes más inflacionarios e ineficientes (aquellos con recargos promedio elevados) frente a los equipos situados hacia la izquierda con ratios cercanos a 1.0 o negativos (infraprecio). Incluirá un selector para que el usuario filtre a su equipo y examine su comportamiento frente a la media general del torneo.

  * **Linea de tiempo:**
  Una exeriencia visual e interactica que demuestra como el gasto total y la tace de sobrecargo/infracargo evoluciona con el pasar de los años para demostrar la teoria del impuesto premier y como aunqeu evidentemente ha aumentado los ingresos, los gastos no se corresponden porcentualmente con este avance.

---

## 3. Arquetipo de historia

Este proyecto se ajusta principalmente al **Arquetipo de Revelación / El Velo que se Cae**, complementado con la **Observación Longitudinal**.

La premisa del reportaje no se limita a describir que el gasto total aumentó con los años, sino que contrasta una percepción instalada con una realidad numérica oculta: mientras el discurso común asume que pagar montos récord garantiza adquirir futbolistas objetivamente superiores, los datos descorren el velo para demostrar que gran parte de ese capital corresponde a una prima artificial inflada por la liquidez televisiva.

Los elementos del proyecto que se alinean con este arquetipo son:
1. **La brecha entre narrativa y dato:** Desmontar la idea de que un precio elevado refleja fielmente la calidad técnica tasada del jugador.
2. **El hallazgo del patrón estructural:** Evidenciar que el sobreprecio no responde a anécdotas aisladas de mercado, sino a una tasa inflacionaria sostenida durante 15 temporadas.
3. **El contraste entre estrategias:** Exponer la división entre clubes atrapados en la inercia del sobrepago y aquellos que construyen ventaja competitiva identificando infraprecios en el mercado internacional.
