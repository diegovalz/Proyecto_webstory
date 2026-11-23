# Análisis del Diseño de la Información, Interacción e Identidad Visual

**Proyecto:** *La prima del oro británico: Cuando el mercado cobra el «Impuesto Premier» (2005–2026)*  
**Integrantes:** Juan Tapia, Valeria Trujillo y Diego Valenzuela  

---

## 1. Diseño de la Información y Diseño de la Interacción

### A. Estructura Narrativa Definida (*Pirámide Invertida Interactiva + Scrollytelling*)
La arquitectura de información de la webstory se organizó en **siete bloques secuenciales** que combinan la claridad deductiva del periodismo de datos con la exploración progresiva:

1. **Portada de Impacto y Consultor de Datos (`#inicio` — Hero Section):** Presenta de inmediato la tesis central (*«La prima del oro británico»*) junto a un buscador interactivo en lenguaje natural donde el usuario puede consultar desde el primer segundo cuánto sobrepagó cualquier club o cuál fue la inflación del BCE, respaldado por los sellos de verificación de fuentes (*Transfermarkt*, *Eurostat & BCE*, *Forbes & Deloitte*) y una vitrina fotográfica de atmósfera nocturna.
2. **Mapa de Navegación por Ejes y Evidencia Empírica Consolidada:** Tres tarjetas cromáticas de categoría (*Feature Category Cards*) introducen los tres capítulos del reportaje, seguidas por una tarjeta invertida en tono plata (`#cacaca`) que sintetiza las cuatro magnitudes rectoras del estudio (`€19.841,9M` pagados, `€15.286,8M` tasados, `+€4.555,1M` de sobreprecio neto y `2,14%` de inflación promedio del BCE).
3. **Puente Lúdico e Intuitivo (Balanza de Arcos de Fútbol + Podio Histórico):** Antes de entrar a los gráficos estadísticos densos, el lector interactúa con una metáfora visual directa surgida de nuestro wireframe dibujado a mano: dos arcos de fútbol que se llenan de balones (*Arco de Gastos* vs. *Arco de Valor Real*) para visualizar físicamente el desborde del sobreprecio, acompañados por el podio interactivo de los tres mayores pagadores (*1° Chelsea, 2° Man Utd, 3° Man City*).
4. **Sección 01 — Radiografía Institucional (`#sobreprecio` por Diego Valenzuela):** Crónica sobre la mecánica del «Impuesto Premier» en las oficinas europeas + Gráfico interactivo de barras horizontales ordenable por tres métricas e inspector de club.
5. **Sección 02 — El Espejo Macroeconómico (`#inflacion` por Juan Tapia):** Crónica sobre *«El doble discurso de la Premier»* + Gráfico comparativo de doble serie entre la inflación HICP de la Eurozona (meta 2,0% del BCE) y el sobrecosto del fútbol inglés.
6. **Sección 03 — Desigualdad y Evolución Longitudinal (`#clubes` por Valeria Trujillo):** Crónica sobre *«La otra inflación de la Premier League»* + Gráfico de líneas múltiples (2005–2026) con filtros por grupos (*Big Six*, *20 clubes*, *Media tabla*) y botones por institución.
7. **Auditoría Metodológica, Tabla de 20 Clubes y Cierre (`#metodologia`, `#cierre`, `#equipo`):** Tabla completa con buscador en tiempo real y ordenamiento por 7 columnas, tarjeta invertida de conclusión con botones de difusión social (WhatsApp, X y copiado de enlace) y créditos del equipo.

### B. Recorrido del Usuario (*User Journey* según nuestros Arquetipos)
El diseño de interacción responde simultáneamente a los dos perfiles de usuario construidos en la Entrega 04 (disponibles en [`recursos/Perfil de usuario.pdf`](recursos/Perfil%20de%20usuario.pdf) y [`recursos/mapa de viaje.pdf`](recursos/mapa%20de%20viaje.pdf)):
* **Recorrido de Matías «El Hincha» (22 años, usuario medio, lectura desde el celular):**
  1. *Descubrimiento:* Llega desde redes sociales o WhatsApp atraído por saber cuánto ha sobrepagado su equipo (Manchester United).
  2. *Exploración ágil:* En los primeros 10 segundos puede tocar el botón rápido `Man Utd (+272,8%)` en el consultor del Hero o presionar `Man Utd` en la balanza de los dos arcos de fútbol y en el podio interactivo sin sentirse abrumado por jerga financiera.
  3. *Cierre social:* Al final del reportaje encuentra el botón de alto contraste `Compartir en WhatsApp →` para enviar el hallazgo a su grupo de amigos.
* **Recorrido de Claudia «La Economista» (35 años, usuaria extrema, analista financiera):**
  1. *Verificación de fuentes:* Identifica desde el inicio la trazabilidad de los datos (997 operaciones de Transfermarkt y serie HICP de Eurostat/BCE).
  2. *Contraste metodológico:* Utiliza los selectores del Gráfico 02 (`HICP (%) vs. Recargo (%)`, `Pagado vs. Tasación (€M)` y `Zoom BCE 2006–2017`) para comprobar empíricamente la desconexión respecto a la meta del 2,0% del Banco Central Europeo.
  3. *Auditoría granular:* Desciende hasta la sección `#metodologia` para revisar la fórmula de cálculo y ordenar la tabla de los 20 clubes por sobrecosto ponderado, recargo promedio o volumen de operaciones.

---

## 2. Comentarios sobre las Crónicas y Decisiones Textuales

* **Titular y Bajada (*«La prima del oro británico: Cuando el mercado cobra el Impuesto Premier»*):** Utiliza una metáfora financiera (*la prima del oro*) que conecta el prestigio global de la liga inglesa con el sobrecosto monetario que asumen sus clubes.
* **Estilo Narrativo de Periodismo de Datos Económico-Deportivo:** Las tres crónicas individuales fueron escritas y editadas bajo un tono analítico, crítico y libre de lugares comunes deportivos. En lugar de limitarse a describir números, cada texto explica **el mecanismo detrás del dato**:
  * En la **Sección 01**, el texto explica por qué para el Chelsea y el Manchester United el sobreprecio es síntoma de urgencia e ineficiencia, mientras que para el Southampton o el Everton es un «impuesto de supervivencia» frente al descenso.
  * En la **Sección 02**, la crónica desmonta la retórica dirigencial mostrando cómo los clubes usan la palabra «inflación» como comodín (hablan de «mercado inflado» al comprar jugadores por €80M, pero culpan al costo de la vida global cuando suben los abonos a sus hinchas), preparando al lector para leer la línea plana del 2,14% del BCE en el gráfico.
  * En la **Sección 03**, el relato amplía el foco desde el precio del futbolista hacia la valoración patrimonial de los clubes (*Forbes / Deloitte*), explicando cómo el crecimiento desigual de la industria alimenta la espiral de precios.

---

## 3. Decisiones sobre Elementos Visuales e Identidad Gráfica (*Origin Financial Dark Gallery*)

Para la implementación de la webstory evolucionamos nuestra propuesta visual hacia un sistema de **galería financiera nocturna** inspirado en el sistema de diseño de **Origin Financial**, donde el rigor de las finanzas personales y patrimoniales se presenta sobre un lienzo negro profundo con tipografía serif ultraligera y paneles cromáticos luminosos:

1. **Paleta de Superficies y Elevación Plana (Sin Sombras):**
   * **Obsidian Canvas (`#0f1011`) y Abyss (`#090a0b`):** Constituyen el fondo principal y las bandas alternadas de sección. El fondo oscuro reduce el deslumbramiento en pantallas móviles y hace que las curvas de datos resalten como señales luminosas en una sala de control.
   * **Graphite (`#2e2e2e`) y Steel (`#3f4041`):** Superficies elevadas para los contenedores de gráficos y módulos interactivos. Siguiendo la filosofía del sistema, **no se utilizan sombras paralelas (*drop shadows*) en las tarjetas**: la jerarquía espacial se logra exclusivamente mediante el escalonamiento cromático plano (`#0f1011` → `#2e2e2e` → `#cacaca`).
   * **Silver Inverted (`#cacaca` con texto `#000000`):** Empleada estratégicamente en solo dos momentos de la página (el bloque de las 4 cifras clave al inicio y la tarjeta de conclusión final) para romper el ritmo oscuro y otorgar máximo peso editorial a la síntesis empírica.
2. **Tarjetas Cromáticas de Categoría y Señales de Datos:**
   * **Iris Gleam (`#847dff`), Orchid Bloom (`#dd90d8`) y Periwinkle (`#90b8f0`):** Reservados para las tres tarjetas de navegación temática a sangre completa (`border-radius: 30px`, `padding: 32px`), diferenciando visualmente los tres ejes del reportaje únicamente por color.
   * **Cyan Signal (`#00b3dd`) e Iris Gleam (`#847dff`):** Reservados en las visualizaciones como señales de datos de alto contraste sobre el fondo `#0f1011` (donde `#00b3dd` identifica la economía real / inflación HICP del BCE y la tasación de mercado, mientras `#847dff` señala el sobreprecio del «Impuesto Premier»).
3. **Sistema Tipográfico de Tres Voces:**
   * **Voz Emotiva / Editorial (`Cormorant Garamond` en peso `300` Light):** Utilizada en titulares de portada (`80–96px`, `line-height: 0.9`) y encabezados de sección (`38–68px`), combinando siempre la primera palabra en *cursiva* (*La prima*, *Tres*, *El Impuesto*, *El doble*, *La otra*) con texto redondo para generar tensión editorial y autoridad mediante la sutileza en lugar del negrita convencional.
   * **Voz de Lectura e Interfaz (`Inter` en pesos `300` y `400`):** Subtítulos en `18px` peso `300` que hacen eco de la ligereza del titular, y párrafos de crónica en `16px` peso `400` en tono **Ash (`#9f9fa0`)** —nunca blanco puro `#ffffff` en bloques largos de lectura— para evitar la vibración óptica sobre fondo oscuro.
   * **Voz Técnica y de Datos (`Roboto Mono` en mayúsculas, `10–12px`):** Aplicada con espaciado amplio (`letter-spacing: 0.08em–0.14em`) en etiquetas de sección, ejes de gráficos, medallas de fuentes y cifras tabulares (`€19.841,9M`, `+29,8%`, `2,14%`).
4. **Fotografía Atmosférica y Acciones de Contraste 21:1:**
   * La fotografía documental del estadio en la portada recibe un tratamiento desaturado frío enmarcado en un módulo Graphite con `90px` de respiro interno y respaldado por el gradiente estructural *Sky Atmosphere*.
   * Los botones de acción primaria (`Explorar datos →`, `Recorrer la investigación →`) utilizan exclusivamente relleno blanco puro (`#ffffff`) con texto negro (`#000000`, contraste 21:1 AAA) y radio de `8px`.
