# Ficha Técnica de la Base de Datos Utilizada para la Visualización

## 1. Características Generales
* **Base de datos de origen:** `Transfers_cleaned2.csv`
* **Número de observaciones procesadas:** 997 transferencias monetarias efectivas.
* **Agrupación analítica:** Nivel agregado por club comprador (20 instituciones de la Premier League) para computar sobreprecios totales, promedios porcentuales y recuento de operaciones.
* **Herramienta de procesamiento:** Python (Pandas) y librería declarativa Altair (`Vega-Lite`).

---

## 2. Variables Incorporadas en la Visualización

| Variable en el Gráfico / Código | Tipo de Dato | Origen / Definición Conceptual |
| :--- | :--- | :--- |
| `Club` (`Club comprador_2`) | Categórica nominal | Nombre de la entidad inglesa que ejecutó la compra. Actúa como eje Y categórico ordenado descendentemente. |
| `Sobreprecio (€M)` | Numérica cuantitativa continua | Monto neto adicional desembolsado por encima de la tasación técnica previa: $\frac{\sum (\text{Valor pagado} - \text{Valor estimado})}{1.000.000}$. Eje X y escala de color secuencial. |
| `Total Pagado (€M)` | Numérica cuantitativa continua | Suma acumulada real de las tarifas de transferencia en millones de euros (€M). Visible vía *tooltip* interactivo. |
| `Valor Estimado Real (€M)` | Numérica cuantitativa continua | Suma acumulada de la tasación técnica previa estimada por Transfermarkt en millones de euros (€M). Visible vía *tooltip*. |
| `Sobreprecio Promedio (%)` | Numérica cuantitativa continua | Promedio aritmético de la columna `Deficit` para cada club, reflejando el sobrecoste relativo por operación. Visible vía *tooltip*. |
| `total_fichajes` | Numérica discreta entera | Recuento total de transferencias con tarifa mayor a cero registradas por cada club. Visible vía *tooltip*. |

---

## 3. Observaciones Editoriales sobre los Datos
* Se excluyeron del cálculo las transferencias a costo cero (agentes libres y préstamos sin cargo) debido a que no reflejan el desembolso de primas comerciales directas entre clubes.
* La escala de colores secuencial en tonos rojos (`scheme="reds"`) se utilizó para connotar visualmente el concepto de "alerta o déficit financiero", intensificando el tono a medida que el sobreprecio en millones de euros se incrementa.
* La interactividad mediante *tooltip* permite al lector explorar la anatomía completa de cada barra sin sobrecargar visualmente el eje principal del reportaje.
