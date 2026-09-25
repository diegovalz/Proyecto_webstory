# Ficha Técnica y Diccionario de Datos

## 1. Ficha Técnica

* **Nombre de la base de datos:** Base Curada de Transferencias, Valor Estimado y Sobreprecio en la Premier League.
* **Archivo asociado en el repositorio:** `Transfers_cleaned2.csv`
* **Fuente primaria y autoría:** David Cariboo - Kaggle.com
  * **Portal de origen:** *Transfermarkt* (GmbH & Co. KG).
  * **Compilación abierta:** Dataset público *Football Data: Player Scores & Transfers*, recopilado y publicado por David Cariboo en la plataforma Kaggle.
* **Metodología de construcción y depuración:**
  * **Selección muestral:** Extracción de transacciones correspondientes exclusivamente a los 20 clubes con mayor cantidad de campañas disputadas en la era contemporánea de la Premier League inglesa.
  * **Depuración de divisiones menores y homónimos:** Eliminación por filtrado booleano y patrones de texto de escuadras formativas juveniles (`U18`, `U21`, `U23`, planteles de reserva) y de instituciones homónimas pertenecientes a otras federaciones internacionales.
  * **Aislamiento de transferencias definitivas:** Selección de operaciones que cuentan simultáneamente con tarifa de traspaso informada (`Valor pagado` > 0) y valoración técnica de mercado (`Valor estimado` > 0).
  * **Estandarización y normalización numérica:** Eliminación de símbolos de divisa (`$`) y separadores de miles tipográficos (comas `,`). Estandarización de las métricas monetarias a valores numéricos enteros puros (`int64`) en euros (€) y del sobreprecio relativo (`Deficit`) como valor porcentual entero.
* **Alcance temporal y geográfico:**
  * **Temporal:** Transacciones oficiales ejecutadas entre las temporadas 2005/06 y 2026/27.
  * **Geográfico:** Primera división del fútbol profesional masculino de Inglaterra (Premier League).
* **Características cuantitativas del conjunto de datos:**
  * **Dimensiones:** 997 filas (registros transaccionales de jugadores) y 8 columnas.
  * **Integridad de datos:** 0 valores nulos o faltantes (`null` / `NaN`) en la totalidad de las columnas.
* **Observaciones editoriales:**
  * La variable `Deficit` representa el sobreprecio porcentual: valores positivos indican que el club comprador pagó por encima de la tasación técnica de mercado previa (sobreprecio), mientras que valores negativos reflejan transacciones cerradas por debajo del valor estimado (infraprecio o compras eficientes).
  * Esto toma como referencia de precio por jugador la tasación otorgada por el portal especializado en traspasos *Transfermarkt*.

---

## 2. Diccionario de Datos

| `Fecha` | Fecha de oficialización del traspaso | Cadena de texto / Fecha (`object` / `string`) | `DD-MM-YYYY` (Rango: `14-07-2004` a `12-08-2026`) | Fecha en que la transferencia fue inscrita oficialmente en el sistema federativo. Permite segmentar mercados de verano e invierno.

| `Temporada` | Temporada liguera de la operación | Cadena de texto (`object` / `string`) | Formato de dos dígitos: `10/11`, `11/12`, ..., `26/27` | Ciclo deportivo anual. Variable clave para segmentar series de tiempo y contrastar ciclos de derechos de televisión. 

| `Club de origen_1` | Club vendedor o de procedencia | Cadena de texto (`object` / `string`) | Nombres propios de clubes globales (ej. *Bayern Munich*, *Girona*, *River Plate*) | Institución que traspasa los derechos federativos del deportista. Permite mapear flujos geográficos hacia Inglaterra. 

| `Club comprador_2` | Club comprador en Premier League | Cadena de texto (`object` / `string`) | 20 clubes estandarizados (ej. *Chelsea*, *Man City*, *Arsenal*, *Wolves*) | Equipo de la Premier League que desembolsa el monto del traspaso. Variable categórica central para comparar políticas de gasto. 

| `Valor pagado` | Monto real pactado de la transferencia | Numérico entero (`int64`) | 57.000 a 145.000.000 € | Cifra monetaria fija acordada entre clubes en euros (€). Excluye variables sujetas a rendimiento no devengadas. 

| `Valor estimado` | Tasación técnica de mercado previa | Numérico entero (`int64`) | 50.000 a 150.000.000 € | Valoración económica calculada por la metodología técnica de Transfermarkt previa al momento de la venta en euros (€). 

| `Deficit` | Porcentaje de sobreprecio o infraprecio | Numérico entero (`int64`) | -97 a 8700 (%) | Métrica analítica porcentual: $\frac{\text{Valor pagado} - \text{Valor estimado}}{\text{Valor estimado}} \times 100$. Positivo = sobrepago; Negativo = compra bajo tasación. 

| `Jugador` | Nombre del futbolista transferido | Cadena de texto (`object` / `string`) | Nombres y apellidos estandarizados (ej. *Piero Hincapié*, *Daniel Peretz*) | Identificador deportivo individual del jugador objeto de la transacción. |
