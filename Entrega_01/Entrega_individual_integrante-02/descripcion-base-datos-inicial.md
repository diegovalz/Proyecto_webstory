# Documentación y Fichas Técnicas de Bases de Datos

Este documento detalla los conjuntos de datos que sustentan la investigación sobre la evolución económica, la inflación y el sobreprecio en el mercado de fichajes de la Premier League entre las temporadas 2010/11 y 2025/26.

---

## Base de Datos 1: Histórico Curado de Transferencias y Valor de Mercado (Existente)

* **Archivo asociado:** `bases-de-datos/transfers_filtered.csv`
* **Autor y publicación de los datos:**
  * **Autor original:** David Cariboo / Comunidad abierta de ciencia de datos deportivos.
  * **Fuente primaria:** Registros consolidados del portal especializado *Transfermarkt*.
  * **Ubicación de descarga:** Repositorio público en Kaggle (*Football Data: Player Scores & Transfers*).
* **Contenido y variables:**
  * **Descripción:** Contiene registros estructurados de operaciones de traspaso vinculadas a los 20 clubes con mayor presencia histórica en la Premier League durante la era moderna.
  * **Dimensiones:** 3.084 registros totales, de los cuales 2.983 pertenecen estrictamente al marco temporal de análisis (temporadas 2010/11 a 2025/26). Incluye 967 compras monetarias con tarifa reportada y 1.839 movimientos a coste cero o cesiones.
  * **Variables clave:**
    * `player_id` (Numérico / Entero): Identificador único del futbolista.
    * `player_name` (Texto): Nombre del jugador transferido.
    * `from_club_id` / `from_club_name` (Entero / Texto): Identificador y nombre del club de origen / vendedor.
    * `to_club_id` / `to_club_name` (Entero / Texto): Identificador y nombre del club comprador en la Premier League.
    * `transfer_season` (Temporal / Texto): Temporada en la que se ejecutó la transacción (desde `10/11` hasta `25/26`).
    * `transfer_date` (Fecha / YYYY-MM-DD): Fecha de registro oficial del movimiento.
    * `transfer_fee` (Numérico / Decimal): Monto de la transferencia en euros (€).
    * `market_value_in_eur` (Numérico / Entero): Tasación estimada del valor de mercado del jugador al momento del traspaso en euros (€).
    * `premium_discount_pct` (Numérico / Entero): Calculo del porcentaje del pago en relacion a la tasacion del mercado, para indicar si se sobrepagó o no por el jugador.
* **Pertinencia:**
  * Constituye la columna vertebral empírica del proyecto.
  * Al contrastar `transfer_fee` frente a `market_value_in_eur`, permite cuantificar de manera directa el sobreprecio monetario absoluto ($\text{Sobreprecio} = \text{Fee} - \text{Market Value}$) y la prima porcentual pagada por los clubes ingleses a lo largo de 15 temporadas.
* **Metodología de curación:**
  * A partir del archivo matriz global (`transfers.csv` con más de 175.000 operaciones), se aplicaron filtros en Python/Pandas para aislar los 20 clubes más usuales de la liga inglesa.
  * Se eliminaron manualmente las divisiones formativas y filiales juveniles (`U18`, `U21`, `U23`, equipos de reserva), así como homónimos de ligas sudamericanas y de Europa del Este, asegurando que la muestra contenga únicamente transferencias de los primeros planteles masculinos.
