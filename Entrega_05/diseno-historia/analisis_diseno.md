# Análisis del Diseño de la Información, Interacción e Identidad Visual

**Proyecto:** *El «Impuesto Premier League»: por qué los clubes ingleses pagan un 30% de sobreprecio en el mercado de fichajes (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  

---

## 1. Diseño de la Información y Diseño de la Interacción

### A. Estructura Narrativa Definida (*Reportaje Especial Estilo Reuters Graphics / The Athletic*)
La información de la webstory se organizó en **siete bloques secuenciales** inspirados en los reportajes especiales de investigación de **Reuters Graphics** (`@reuters-graphics/style`) y **The Athletic**, priorizando la claridad periodística, el contraste empírico y una experiencia táctil y visual propia de una cobertura de fútbol de élite. Está diseñado para aprender sobre un fenómeno notable que dota de sentido a las interrogantes típicas de todos los fnas del futbol que se quedan confundidos todos los mercados de fichajes vuando en Inglaterra se pagan cantidades por sobre el mercado.

1. **Portada Periodística y Cuadro Contable de Hallazgos (`#inicio` — Hero Section):**
   * Abre con un titular directo, informativo y sin ambigüedades: ***«El "Impuesto Premier League": por qué los clubes ingleses pagan un 30% de sobreprecio en el mercado de fichajes»***.
   * La bajada y la firma (*byline*) establecen de inmediato la muestra (**997 operaciones entre 2005 y 2026**) y las tres fuentes de verificación (**Transfermarkt**, **Banco Central Europeo / Eurostat HICP** y **Forbes & Deloitte**).
   * Debajo de la fotografía principal se despliega una **tira contable de 4 columnas** con borde superior de `3px`  que sintetiza los cuatro pilares numéricos: `€19.841,9M` desembolsados, `€15.286,8M` de tasación real, `+€4.555,1M` de sobreprecio neto (`+29,8%`) y `2,14%` de inflación real europea promedio.
2. **Expediente Interactivo de Fichajes Récord con Fotografías de Jugadores Sin Fondo (`#fichajes`):**
   * Para conectar de inmediato con la cultura visual del fútbol sin caer en metáforas infantiles, diseñamos el módulo **«Radiografía a las transferencias más infladas del fútbol inglés»**.
   * Presenta **4 fichas tácticas con fotografías recortadas sin fondo (PNG transparentes)** de casos emblemáticos de los clubes que lideran el sobreprecio (**Enzo Fernández** en Chelsea `+€66,0M / +120%`, **Antony** en Manchester United `+€60,0M / +171%`, **Jack Grealish** en Manchester City `+€52,5M / +81%` y **Alexander Isak** en Newcastle `+€47,5M / +158%`).
   * Cada tarjeta incluye una **barra de desglose proporcional** que divide el monto pagado entre su **Tasación Real de Mercado (`#1B6B63`)** y el **Sobreprecio Neto (`#C82829`)**, conectada a un explorador inferior donde el lector puede auditar el *Top 3* de fichajes más inflados de cada club.
3. **Capítulo 01 — Radiografía Institucional (`#sobreprecio` por Diego Valenzuela):**
   * Crónica sobre la mecánica del sobreprecio por club + **Gráfico 01 Multi-Vista** (*Gráfico de Brecha Dumbbell: Tasación vs. Pagado*, *Matriz de Dispersión de 4 Cuadrantes: Opulencia vs. Supervivencia* y *Rankings con línea de promedio de liga*).
4. **Capítulo 02 — El Espejo Macroeconómico (`#inflacion` por Juan Tapia):**
   * Crónica sobre *«El doble discurso de la inflación»* + **Gráfico 02 en Escala Real 1:1** (que compara en el mismo eje vertical el sobrecosto de la Premier League con la inflación HICP de la Eurozona, eliminando cualquier distorsión de doble eje) + **Serie Mensual Completa de 258 meses del BCE (2005–2026)**.
5. **Capítulo 03 — Desigualdad y Evolución Patrimonial (`#clubes` por Valeria Trujillo):**
   * Crónica sobre *«La otra inflación de la Premier League»* + **Gráfico 03 Longitudinal** con la serie depurada de valoración patrimonial de *Forbes / Deloitte* (2005–2025), **Gráfico de Pendiente (*Slope Chart 2005 vs. 2025*)** y curvas acumuladas de gasto y sobreprecio.
6. **Simulador del «Impuesto Premier» y Tabla Auditable de los 20 Clubes (`#metodologia`, `#cierre`, `#equipo`):**
   * Calculadora interactiva donde el lector elige cualquier club comprador y simula con un deslizador cuánto costaría un jugador ajustado por la inflación real del BCE (`+2,14%`) frente a lo que termina pagando ese club, seguida por la tabla completa ordenable por 7 columnas y el bloque de conclusión y difusión social.

### B. Recorrido del Usuario (*User Journey* según nuestros Arquetipos)
* **Matías «El Hincha» (22 años, usuario medio, lectura móvil):** Es recibido por un titular claro y por las tarjetas visuales con **jugadores recortados sin fondo** de la Premier League. Puede tocar a su equipo (Manchester United) para ver al instante los sobrecostos de *Antony* (`+€60M`), *Anthony Martial* (`+650%`) y *Harry Maguire* (`+€37M`), probar la calculadora de fichajes y compartir el reportaje en WhatsApp.
* **Claudia «La Economista» (35 años, usuaria extrema, analista financiera):** Encuentra una estética sobria de prensa de investigación (inspirada en *Reuters Graphics* y *Financial Times*), gráficos sin distorsión de doble eje, la serie completa de 258 meses del HICP del Banco Central Europeo con su meta del `2,0%` y la tabla completa de las 997 operaciones agrupadas por club.

---

## 2. Decisiones sobre Elementos Visuales e Identidad Gráfica (*Estética Periodística Reuters Graphics / The Athletic*)

Se descartaron deliberadamente los colores neón o gradientes decorativos asociados a plantillas genéricas de inteligencia artificial, adoptando una **paleta editorial de prensa de investigación y periodismo deportivo**:

1. **Lienzo de Papel Periódico Cálido y Reglas de Prensa (`#F6F4EF` y `#FFFFFF`):**
   * El fondo principal utiliza **Warm Newsprint (`#F6F4EF`)** con contenedores de gráficos en blanco puro (`#FFFFFF`), filetes divisorios de `1px solid #C9C3B6` y encabezados de sección coronados por una regla negra sólida de `3px solid #111417` característica de *Reuters Investigates*, *The New York Times* y *The Athletic*.
   * La barra superior de navegación y el simulador emplean **Dark Pitch Slate (`#10181D`)**, evocando las pizarras tácticas nocturnas de las transmisiones británicas.
2. **Codificación Cromática Semántica de Datos (2 Colores Rectores):**
   * **Rojo Carmesí Editorial (`#C82829`):** Reservado de forma consistente en toda la webstory (tarjetas de jugadores, gráficos 01 y 02, simulador y tabla) para representar el **Sobreprecio / «Impuesto Premier»**.
   * **Verde Pizarra / Banco Central (`#1B6B63`):** Reservado para representar el **Valor Real de Mercado (Transfermarkt)** y la **Inflación Real Europea (HICP del BCE / Meta 2,0%)**.
   * **Ocre Editorial (`#C47F17`):** Utilizado para marcar hitos históricos estructurales como el macro-contrato televisivo de 2016 (`£5.140M`).
3. **Sistema Tipográfico Periodístico:**
   * **Titulares y Cuerpo de Crónica (`Source Serif 4`):** Serif periodística de alto contraste y máxima legibilidad para titulares (`700 Bold`) y columnas de lectura (`18.5px`, interlineado `1.75`, ancho óptimo de `680px`).
   * **Arquitectura de Gráficos e Interfaz (`Inter`):** Sans-serif limpia y neutral empleada en títulos de gráficos (`21px Bold`), subtítulos explicativos, etiquetas de cuadrantes y controles de filtrado, siguiendo el estándar de `@reuters-graphics/style`.
   * **Cifras Tabulares y Lecturas Contables (`JetBrains Mono`):** Fuente monoespaciada con `font-variant-numeric: tabular-nums` para todas las magnitudes en millones de euros (`€19.841,9M`), porcentajes (`+272,8%`) y ejes numéricos.
