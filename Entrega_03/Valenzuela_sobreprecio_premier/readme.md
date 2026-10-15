# El Sobreprecio e Ineficiencia Financiera en los Clubes de la Premier League  
---

## 1. Explicación del Proceso de Visualización y Decisiones de Diseño

Para comunicar con claridad la magnitud del "Impuesto Premier League", se seleccionó un **gráfico de barras horizontales ordenadas de forma descendente**, construido íntegramente con la librería **Altair** de Python. 

### Decisiones de codificación visual tomadas:
1. **Estructura de barras horizontales (`mark_bar`):** Se prefirió la orientación horizontal sobre la vertical debido a que los nombres de los 20 clubes son extensos. Esta disposición facilita la lectura de izquierda a derecha sin obligar al usuario a inclinar la cabeza ni sobreponer etiquetas tipográficas en el eje categórico.
2. **Ordenamiento jerárquico (`sort="-x"`):** Los clubes están ordenados de mayor a menor según el sobreprecio neto acumulado en millones de euros. Esto permite identificar de inmediato al líder absoluto de la ineficiencia de gasto (Chelsea con €837,2M) y contrastarlo con los clubes de mayor prudencia financiera.
3. **Canal de color redundante pero semántico (`scale=alt.Scale(scheme="reds")`):** El color no se empleó de manera decorativa; se vinculó a una escala cuantitativa secuencial donde el rojo profundo simboliza el mayor "déficit o sobrecosto" económico, permitiendo una jerarquía visual instantánea.
4. **Interactividad exploratoria (*Tooltips* dinámicos):** Para que la visualización fuera apta para una *webstory* periodística sin saturar la pantalla con texto, se programaron ventanas emergentes interactivas. Al posar el cursor sobre cualquier barra, el lector descubre las cifras subyacentes: monto total pagado, tasación real, porcentaje de sobreprecio promedio y cantidad de fichajes analizados.

---

## 2. Procesamiento de la Base de Datos Utilizada

* **Archivo base:** `Transfers_cleaned2.csv` (997 transferencias depuradas con 0 valores nulos).
* **Procedimiento en Python (Pandas):**
  1. Se generó la columna algebraica `sobreprecio_eur` restando `Valor pagado - Valor estimado`.
  2. Se aplicó un agrupamiento relacional (`groupby('Club comprador_2')`) calculando sumas monetarias, promedios porcentuales de la variable `Deficit` y recuento de operaciones (`count`).
  3. Se dividieron los montos monetarios por 1.000.000 para transformar cifras de difícil lectura (ej. 3.002.350.000 €) en unidades periodísticas legibles (€3.002,4M).
* **Exportación dual:** La visualización fue exportada como archivo web interactivo (`vis_01.html`) mediante el método `.save()` nativo de Altair, y convertida a imagen estática de alta resolución (`vis_01.jpg` / `vis_01.png`) para su inclusión en la crónica y visualizadores móviles.

---

## 3. Preguntas que Responde la Visualización

1. **¿Qué institución encabeza la mayor distorsión económica neta en transferencias en Inglaterra?**  
   El gráfico demuestra que Chelsea es el líder indiscutido con **€837,2 millones** pagados por encima del valor estimado de sus jugadores a lo largo de 93 traspasos, superando con holgura a competidores directos como Manchester United (€516M) y Manchester City (€490,2M).

2. **¿Existe una correlación directa entre el volumen de transferencias y la prima porcentual asumida?**  
   No necesariamente. Al interactuar con el gráfico, se observa que Manchester United, con apenas 60 operaciones, registra el porcentaje de sobreprecio medio más alto del torneo (272,8%), evidenciando que asumió operaciones con recargos de urgencia individuales mucho más pronunciados que los de su rival citadino (Man City promedia un recargo del 69% en 82 transferencias).

3. **¿Cómo se posicionan los clubes de mitad de tabla ante la inflación del mercado?**  
   Permite evidenciar que clubes como Newcastle (€416,8M), Southampton (€260,2M) y Everton (€256,4M) asumen sobreprecios acumulados comparables a los de escuadras de la Champions League como Arsenal (€246,6M), reflejando la alta prima que deben pagar los equipos de zona media para convencer al talento continental de unirse a sus proyectos deportivos.
