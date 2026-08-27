# Ficha Técnica de Base de Datos: Índice de Inflación (HICP)

## Autor y publicación de los datos
**Propietarios/Autores:** Banco Central Europeo.
**Publicación:** Los datos se obtuvieron desde el portal oficial de estadísticas del Banco Central Europeo, primero entramos al explorador de datos, luego al conjunto de datos y finalmente al HICP. El archivo fue extraído mediante descarga directa desde su plataforma de datos abiertos y ajustada a las fechas correspondientes.

## Contenido
**Descripción:** La base de datos contiene el registro histórico mensual del Índice Armonizado de Precios de Consumo (HICP), el cual mide la evolución de la inflación en la zona euro. 
**Tipo de datos y periodo:** Corresponde a una serie de tiempo cuantitativa. Los datos abarcan desde enero de 2005 hasta junio de 2026.
**Variables:** 
  * `DATE` (Temporal / Fecha): El último día del mes registrado (ej. 2005-01-31).
  * `TIME PERIOD` (Texto): Alfanumérico que indica el año y mes de la observación (ej. 2005Jan).
  * `HICP Inflation rate` (Numérico / Decimal): El porcentaje de inflación registrado en ese periodo específico.

## Pertinencia
* Esta base es valiosa para la investigación porque permite traer los montos históricos del mercado de fichajes a un valor presente y real. Dado que el archivo principal registra las transferencias de la Premier League en euros (variables `transfer_fee` y `market_value_in_eur`), el HICP ajusta estos montos considerando la pérdida de poder adquisitivo a lo largo de las temporadas abarcadas. Esto permitirá demostrar si el sobreprecio pagado por los clubes ingleses ha aumentado o si las cifras responden a una distorsión inflacionaria.

## Metodología
* Los datos fueron recopilados mediante exportación directa en formato `.csv` desde las bases públicas del banco. 
* El plan de procesamiento consiste en realizar un cruce de datos relacional: se emparejará el año y mes de la variable `transfer_date` del archivo de fichajes con la columna `TIME PERIOD` de esta base. Mediante este cruce, se calculará el ajuste por inflación acumulada para cada transacción individual, generando una nueva variable dentro del proyecto.

