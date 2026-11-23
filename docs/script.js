(function () {
  "use strict";

  const C_RAW = [
    ["Chelsea", 93, 3002.3, 2165.1, 837.2, 182.2, 38.7, [["Enzo Fernández", "Benfica", "22/23", 66, 120], ["Kepa Arrizabalaga", "Athletic Club", "18/19", 60, 300], ["Moisés Caicedo", "Brighton", "23/24", 41, 55]]],
    ["Man Utd", 60, 2362.4, 1846.4, 516.0, 272.8, 27.9, [["Antony", "Ajax", "22/23", 60, 171], ["Anthony Martial", "Monaco", "15/16", 52, 650], ["Harry Maguire", "Leicester", "19/20", 37, 74]]],
    ["Man City", 82, 2463.9, 1973.7, 490.2, 69.0, 24.8, [["Jack Grealish", "Aston Villa", "21/22", 52.5, 81], ["Benjamin Mendy", "Monaco", "17/18", 44.5, 342], ["Nico González", "Porto", "24/25", 42, 233]]],
    ["Newcastle", 56, 1173.6, 756.8, 416.8, 154.3, 55.1, [["Alexander Isak", "Real Sociedad", "22/23", 47.5, 158], ["Nick Woltemade", "Stuttgart", "25/26", 45, 150], ["Yoane Wissa", "Brentford", "25/26", 25.7, 80]]],
    ["Liverpool", 60, 1852.5, 1572.7, 279.8, 82.7, 17.8, [["Virgil van Dijk", "Southampton", "17/18", 54.6, 182], ["Darwin Núñez", "Benfica", "22/23", 30, 55], ["Alexander Isak", "Newcastle", "25/26", 25, 21]]],
    ["Southampton", 65, 747.9, 487.8, 260.2, 121.5, 53.3, [["Roméo Lavia", "Man City U21", "22/23", 20.3, 1013], ["Guido Carrillo", "Monaco", "17/18", 16, 267], ["Sadio Mané", "Salzburg", "14/15", 15.5, 207]]],
    ["West Ham", 59, 1148.2, 890.2, 258.0, 78.9, 29.0, [["Mateus Fernandes", "Southampton", "25/26", 29, 193], ["Nayef Aguerd", "Stade Rennais", "22/23", 23, 192], ["Pablo", "Gil Vicente", "25/26", 18, 360]]],
    ["Everton", 55, 967.9, 711.5, 256.4, 182.2, 36.0, [["Amadou Onana", "Lille", "22/23", 29.9, 299], ["Gylfi Sigurdsson", "Swansea", "17/18", 24.4, 98], ["Tyler Dibling", "Southampton", "25/26", 15.5, 62]]],
    ["Arsenal", 59, 1741.5, 1494.9, 246.6, 78.0, 16.5, [["Ben White", "Brighton", "21/22", 30.5, 109], ["Declan Rice", "West Ham", "23/24", 26.6, 30], ["Kai Havertz", "Chelsea", "23/24", 20, 36]]],
    ["Aston Villa", 64, 977.6, 763.6, 214.0, 151.1, 28.0, [["Jhon Durán", "Chicago", "22/23", 23.5, 392], ["Ollie Watkins", "Brentford", "20/21", 22, 183], ["Tyrone Mings", "Bournemouth", "19/20", 17.3, 346]]],
    ["Wolves", 69, 902.6, 702.8, 199.7, 93.2, 28.4, [["Fábio Silva", "Porto", "20/21", 28, 233], ["Matheus Cunha", "Atlético", "23/24", 25, 100], ["Fer López", "Celta de Vigo", "25/26", 18, 360]]],
    ["Leicester", 50, 712.0, 523.4, 188.6, 119.7, 36.0, [["Wesley Fofana", "Saint-Étienne", "20/21", 25, 250], ["James Maddison", "Norwich", "18/19", 15, 150], ["Ayoze Pérez", "Newcastle", "19/20", 13.4, 67]]],
    ["Crystal Palace", 44, 602.5, 470.0, 132.5, 70.7, 28.2, [["Jaydee Canvot", "Toulouse", "25/26", 19, 475], ["Alexander Sørloth", "Midtjylland", "17/18", 14, 700], ["Marc Guéhi", "Chelsea", "21/22", 13.3, 133]]],
    ["Sunderland", 43, 295.2, 219.4, 75.8, 95.5, 34.6, [["Chemsdine Talbi", "Club Brugge", "25/26", 12, 150], ["Habib Diarra", "R. Strasbourg", "25/26", 11.5, 58], ["Nilson Angulo", "RSC Anderlecht", "25/26", 10.3, 148]]],
    ["Fulham", 37, 430.9, 380.3, 50.6, 16.2, 13.3, [["Kevin", "Shakhtar D.", "25/26", 28, 233], ["Emile Smith Rowe", "Arsenal", "24/25", 9.8, 45], ["Aleksandar Mitrović", "Newcastle", "18/19", 9.7, 65]]],
    ["Middlesbrough", 28, 131.3, 82.0, 49.3, 98.2, 60.1, [["Britt Assombalonga", "Nottm Forest", "17/18", 12.1, 242], ["Emmanuel Latte Lath", "Atalanta", "23/24", 5.6, 373], ["Marten de Roon", "Atalanta", "16/17", 5.5, 110]]],
    ["West Brom", 26, 146.2, 108.8, 37.4, 104.9, 34.4, [["Grady Diangana", "West Ham", "20/21", 9, 200], ["Oliver Burke", "Leipzig", "17/18", 8.2, 117], ["Yuning Zhang", "Vitesse", "17/18", 6.5, 929]]],
    ["Stoke City", 25, 146.6, 109.3, 37.3, 101.8, 34.1, [["Badou Ndiaye", "Galatasaray", "17/18", 9, 129], ["Giannelli Imbula", "FC Porto", "15/16", 8.3, 52], ["Joe Allen", "Liverpool", "16/17", 7.5, 94]]],
    ["Blackburn", 17, 30.5, 24.9, 5.6, 36.2, 22.3, [["Ben Brereton Díaz", "Nott'm Forest", "18/19", 3.3, 66], ["Sammie Szmodics", "Peterborough", "22/23", 2.5, 500], ["Mathias Jørgensen", "Bodø/Glimt", "25/26", 1.5, 60]]],
    ["Bolton", 5, 6.2, 3.2, 3.1, 216.8, 96.7, [["Tim Ream", "New York", "11/12", 2.9, 1140], ["Chung-yong Lee", "FC Seoul", "09/10", 0.5, 25], ["Eoin Toal", "Derry City", "22/23", 0, -20]]]
  ];

  const Y_RAW = [
    [2005, 3, 11.6, 5.6, 6, 106.7], [2006, 1, 0.9, 0.3, 0.7, 260], [2007, 6, 59.9, 44.9, 15, 33.5],
    [2008, 3, 20.5, 15.9, 4.5, 28.5], [2009, 6, 12.2, 8.9, 3.3, 36.9], [2010, 12, 93.7, 70.9, 22.8, 32.2],
    [2011, 17, 224.4, 157.6, 66.8, 42.4], [2012, 24, 165.5, 136.9, 28.6, 20.9], [2013, 30, 257.5, 202.4, 55.1, 27.2],
    [2014, 44, 734, 457.6, 276.3, 60.4], [2015, 62, 830.2, 561.3, 268.9, 47.9], [2016, 73, 1093.6, 682.9, 410.7, 60.1],
    [2017, 60, 1308.5, 778.3, 530.3, 68.1], [2018, 74, 1537.4, 1138.7, 398.7, 35], [2019, 57, 1291.2, 1003.5, 287.7, 28.7],
    [2020, 64, 1263.9, 1017.2, 246.6, 24.2], [2021, 45, 1053.6, 978.2, 75.4, 7.7], [2022, 88, 2000, 1583.8, 416.2, 26.3],
    [2023, 104, 2695.2, 2120.7, 574.5, 27.1], [2024, 88, 1624.1, 1435.8, 188.3, 13.1], [2025, 112, 3005.8, 2386.1, 619.7, 26],
    [2026, 24, 558.3, 499.4, 58.9, 11.8]
  ];

  const S_RAW = [
    ["Chelsea", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0.3,1.8,0.3],[0,1.8,0.3],[7.7,57,8],[5.3,93.3,13.3],[10.8,142.6,24.1],[12.6,201.2,36.7],[20,307.6,56.7],[58.3,410,114.9],[76.5,576,191.4],[61.8,766.8,253.2],[24,875.8,277.2],[35.2,1143,312.4],[13,1256,325.4],[99.8,1553.8,425.2],[281.6,2336.4,706.8],[105.5,2597.4,812.3],[16.9,2949.3,829.1],[8.1,3002.3,837.2]]],
    ["Man Utd", [[0,0,0],[0,0,0],[0.5,25.5,0.5],[0,25.5,0.5],[2.7,32.8,3.2],[14.7,49.5,17.9],[13,92.5,30.9],[-0.7,114,30.3],[8.3,125.8,38.5],[85.7,356.5,124.2],[71,503.5,195.2],[77,688.5,272.2],[57.4,852.9,329.6],[-2,967.9,327.6],[62.8,1127.7,390.4],[-18.1,1255.4,372.3],[-60.7,1424.7,311.6],[114,1662.7,425.6],[51.7,1865.4,477.3],[-25.5,2079.9,451.8],[64.2,2362.4,516],[0,2362.4,516]]],
    ["Man City", [[0,0,0],[0.7,0.9,0.7],[0,0.9,0.7],[0,0.9,0.7],[0,0.9,0.7],[3,64.9,3.6],[13,113.9,16.6],[9.7,129.1,26.3],[3,200.1,29.3],[13,262.6,42.3],[75,452.1,117.3],[48.7,617.6,166],[125.3,880.8,291.3],[59.4,1021,350.8],[6.5,1195.2,357.2],[48.8,1365.6,406],[52.5,1483.1,458.5],[-94.6,1648.5,363.9],[57.6,1900.6,421.5],[-18.5,1944.1,403],[112.2,2368.9,515.2],[-25,2463.9,490.2]]],
    ["Newcastle", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[-6.5,5.5,-6.5],[9.4,27.5,2.9],[23.1,96.7,25.9],[36.2,174.4,62.1],[18.3,206.2,80.4],[2.7,231.9,83.1],[13.4,322.8,96.5],[7.8,361.6,104.3],[13.4,391,117.7],[95.1,635.6,212.8],[43.6,831.2,256.4],[40.2,899.4,296.6],[120.3,1173.6,416.8],[0,1173.6,416.8]]],
    ["Liverpool", [[6,11.2,6],[0,11.2,6],[0,11.2,6],[0,11.2,6],[0,11.2,6],[2.8,16,8.8],[20.5,72.5,29.3],[15,91.5,44.3],[17.9,152.9,62.1],[63.9,296.8,126.1],[-0.6,327.7,125.5],[31.9,409.6,157.4],[25,498.6,182.4],[58.9,775.4,241.2],[-0.1,777.3,241.1],[-8.6,866.3,232.5],[4.5,908.1,236.9],[36.4,1051.5,273.3],[2.5,1265.5,275.8],[-38,1307.5,237.8],[33.4,1788.9,271.2],[8.6,1852.5,279.8]]],
    ["Southampton", [[0,0,0],[0,0,0],[0,0,0],[0.3,1.5,0.3],[0,1.5,0.3],[-0.1,2.9,0.2],[-0.2,3.7,0],[2.4,19.4,2.4],[3,29.4,5.4],[27.5,78.9,32.9],[17.7,130.6,50.6],[22.4,182.5,73],[23.8,221.7,96.8],[51.8,306,148.5],[23.5,363.5,172],[5.3,388.8,177.3],[6.2,426,183.5],[37.2,510,220.7],[15.3,582.5,235.9],[12.6,700.5,248.6],[7.6,739.9,256.2],[4,747.9,260.2]]],
    ["West Ham", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[17.1,27.3,17.1],[7,53.8,24.1],[12.4,108.2,36.5],[13.1,142.7,49.6],[6.9,242.1,56.5],[17.3,331.4,73.8],[19.7,379.6,93.5],[4.6,471.6,98.2],[46.6,656.2,144.8],[4.7,805.7,149.5],[33.4,950.1,182.9],[58.8,1093.9,241.7],[16.3,1148.2,258]]],
    ["Everton", [[0,0.4,0],[0,0.4,0],[0,0.4,0],[0,0.4,0],[-0.1,0.4,0],[0,0.4,0],[-0.3,0.7,-0.3],[0.1,1,-0.2],[12.2,23.8,12],[12.7,64,24.6],[7.5,83.6,32.2],[16.1,122.8,48.3],[63.5,312.8,111.8],[41.7,424.9,153.4],[-13.1,532.8,140.3],[10.1,606.9,150.4],[-6,608.9,144.4],[35.6,729.5,180],[9.5,767,189.5],[17.2,815.2,206.7],[40.8,942.9,247.4],[9,967.9,256.4]]],
    ["Arsenal", [[0,0,0],[0,0,0],[1.8,4.3,1.8],[0,4.3,1.8],[0,4.3,1.8],[0,4.3,1.8],[11.3,18.1,13.2],[-7,64.2,6.2],[0,64.2,6.2],[32.7,150.9,38.9],[7,165.9,45.9],[32,250.4,77.9],[13,303.4,90.9],[4.5,480.9,95.5],[47.5,617.9,143],[18,701.9,161],[46.6,867.5,207.6],[19.4,1000.9,227],[26.4,1287.3,253.4],[-22.4,1394.9,231],[13.6,1689.5,244.6],[2,1741.5,246.6]]],
    ["Aston Villa", [[0,0,0],[0,0,0],[6.7,13.2,6.7],[6.3,28.2,12.9],[0,28.2,12.9],[0,28.2,12.9],[0,28.2,12.9],[0,28.2,12.9],[0.5,31.7,13.4],[0,31.7,13.4],[19.7,87.9,33.1],[9,101.1,42.1],[3.3,104.6,45.4],[3.6,110.7,48.9],[69.1,234.8,118],[49.8,330.9,167.8],[3.6,446.5,171.4],[-20.5,546,150.9],[10,677,160.9],[39.9,871.7,200.7],[4.8,941.2,205.5],[8.5,977.7,214]]],
    ["Wolves", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0.4,1.6,0.4],[3.1,5.8,3.5],[1.7,20.1,5.1],[20,57.1,25.1],[21.4,130.9,46.5],[21.4,249,67.9],[39.4,352.4,107.3],[-1.5,378.8,105.8],[15.2,523,120.9],[36.3,655.6,157.2],[4.4,719.5,161.6],[53.5,887,215.1],[-15.4,902.6,199.7]]],
    ["Leicester", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0.7,1.7,0.7],[1.1,4.2,1.8],[0.2,5.4,2],[-0.3,5.9,1.8],[11.5,41.9,13.3],[18.7,128.1,32],[29.5,222.6,61.5],[34.1,337.2,95.6],[15.6,434.8,111.2],[27.9,490.7,139.1],[-8.4,528.3,130.7],[7,545.3,137.7],[30.1,621.9,167.8],[20.8,710,188.6],[0,712,188.6],[0,712,188.6]]],
    ["Crystal Palace", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,1.3,0],[4,8.6,4.1],[1.1,12.2,5.2],[0,26.2,5.2],[12.3,53.5,17.5],[27.5,115,45],[12.7,141.7,57.7],[-6.9,147.8,50.8],[6.4,166.7,57.2],[2.4,240.2,59.7],[18.1,285.8,77.8],[10.2,336.5,88],[3.8,443.3,91.8],[26,512.8,117.8],[14.7,602.5,132.5]]],
    ["Sunderland", [[0,0,0],[0,0,0],[4.8,10.8,4.8],[0,10.8,4.8],[0,10.8,4.8],[0,13.3,4.8],[1.5,15.7,6.3],[0,15.7,6.3],[3.1,22.9,9.5],[-1.6,24.8,7.9],[0.3,27.6,8.2],[10.1,55.6,18.2],[-0.4,56.2,17.8],[-0.2,56.4,17.6],[0,56.4,17.6],[0,56.4,17.6],[-0.2,56.7,17.4],[1.7,61.6,19.1],[-4.8,70.5,14.3],[4,75.8,18.3],[40.6,270.4,58.9],[16.9,295.2,75.8]]],
    ["Fulham", [[0,0,0],[0,0,0],[1.3,5.9,1.3],[0,5.9,1.3],[0,5.9,1.3],[0,5.9,1.3],[-0.5,7.5,0.8],[0,7.5,0.8],[0,7.5,0.8],[-0.5,7.8,0.3],[1.4,13.9,1.7],[-0.5,14.9,1.2],[0.5,17.4,1.7],[16.6,66.9,18.3],[0,66.9,18.3],[0,101.1,18.2],[2,123.1,20.2],[-2.2,189.4,18],[-9.1,267.7,8.9],[8.6,359.2,17.4],[27,399.7,44.4],[6.2,430.9,50.6]]],
    ["Middlesbrough", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0.1,0.2,0.1],[0,0.2,0.1],[0,0.2,0.1],[0,0.2,0.1],[1.1,2.5,1.1],[-1,5.5,0.1],[5.8,26.8,6],[19,60.8,25],[2.7,66.5,27.7],[2.8,74.3,30.5],[1.3,79.7,31.8],[2.3,87.4,34.1],[5,94,39.2],[6.6,106.9,45.8],[3.4,118.8,49.2],[0.1,131.3,49.3],[0,131.3,49.3]]],
    ["West Brom", [[0,0,0],[0,0,0],[0,0,0],[-2,4,-2],[0,4,-2],[0.1,4.3,-1.9],[0,4.3,-1.9],[0,4.3,-1.9],[0,4.3,-1.9],[1.4,6.7,-0.5],[4.3,32,3.8],[2.9,51.9,6.7],[18.4,88,25.1],[7.5,101.2,32.6],[0.6,102.8,33.2],[4.7,125.5,37.9],[0,125.5,37.9],[0,126.5,37.9],[0,126.5,37.9],[-1.3,131.2,36.6],[0.8,146.2,37.4],[0,146.2,37.4]]],
    ["Stoke City", [[0,0,0],[0,0,0],[-0.1,0.1,-0.1],[0,0.1,-0.1],[0,0.1,-0.1],[2.3,3.9,2.1],[0,3.9,2.1],[-0.1,8.3,2],[-1.4,14.9,0.6],[0,14.9,0.6],[1.9,40.5,2.5],[15.8,80.3,18.2],[-3.3,88,14.9],[14.7,111.2,29.6],[0,111.2,29.6],[1.3,113.4,30.9],[1.1,116.3,32],[0,116.3,32],[3,126.6,35],[-0.3,135.1,34.8],[-1,141.1,33.8],[3.5,146.6,37.3]]],
    ["Blackburn", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[-0.1,0.6,-0.1],[0,0.6,-0.1],[0,0.6,-0.1],[0,0.6,-0.1],[0,0.6,-0.1],[0,0.6,-0.1],[0.1,1.7,0],[0,1.7,0],[0,1.7,0],[0.2,3.9,0.2],[3.3,12.2,3.5],[-2.1,12.8,1.4],[0,12.8,1.4],[2.5,15.8,3.9],[-0.7,16.8,3.2],[0.5,18,3.7],[0.4,26.5,4.1],[1.5,30.5,5.6]]],
    ["Bolton", [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0.5,2.5,0.5],[0,2.5,0.5],[0,2.5,0.5],[2.7,5.9,3.2],[0,5.9,3.2],[0,5.9,3.2],[0,5.9,3.2],[0,5.9,3.2],[0,5.9,3.2],[-0.1,6.1,3.1],[0,6.1,3.1],[0,6.1,3.1],[0,6.1,3.1],[0,6.2,3.1],[0,6.2,3.1],[0,6.2,3.1],[0,6.2,3.1],[0,6.2,3.1]]]
  ];

  const CLUB_DATA = C_RAW.map(function (c) {
    return {
      club: c[0],
      count: c[1],
      paid: c[2],
      est: c[3],
      overpay: c[4],
      avgDef: c[5],
      weightedPct: c[6],
      topDeals: c[7].map(function (d) {
        return { jugador: d[0], orig: d[1], temp: d[2], overpay: d[3], def: d[4] };
      })
    };
  });

  const YEAR_DATA = Y_RAW.map(function (y) {
    return { year: y[0], count: y[1], paid: y[2], est: y[3], overpay: y[4], weightedPct: y[5] };
  });

  const CLUB_SERIES = S_RAW.map(function (s) {
    return {
      club: s[0],
      series: s[1].map(function (a, i) {
        return { y: 2005 + i, yrOver: a[0], cumPaid: a[1], cumOver: a[2] };
      })
    };
  });

  const HICP = {
    2005: 2.2, 2006: 2.2, 2007: 2.1, 2008: 3.3, 2009: 0.3, 2010: 1.6,
    2011: 2.7, 2012: 2.5, 2013: 1.4, 2014: 0.4, 2015: 0.2, 2016: 0.2,
    2017: 1.5, 2018: 1.8, 2019: 1.2, 2020: 0.3, 2021: 2.6, 2022: 8.4,
    2023: 5.4, 2024: 2.4, 2025: 2.1, 2026: 2.0
  };

  /* Origin Financial Data Signals Palette */
  const COLS = [
    "#00b3dd", "#847dff", "#dd90d8", "#90b8f0", "#d1c9ff",
    "#4b49aa", "#f5f5f7", "#00b3dd", "#847dff", "#dd90d8",
    "#90b8f0", "#d1c9ff", "#4b49aa", "#9f9fa0", "#00b3dd",
    "#847dff", "#dd90d8", "#90b8f0", "#d1c9ff", "#6a6b6b"
  ];

  const $ = function (id) { return document.getElementById(id); };
  const fmtM = function (v) {
    return "€" + Number(v).toLocaleString("es-CL", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "M";
  };
  const fmtP = function (v) {
    return Number(v).toLocaleString("es-CL", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%";
  };

  /* Tooltip Manager */
  const tip = $("chartTooltip");
  function posTip(e) {
    if (!tip || !e) return;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    const w = tip.offsetWidth || 250;
    const h = tip.offsetHeight || 115;
    tip.style.left = Math.max(10, cx + 14 + w > window.innerWidth - 10 ? cx - w - 14 : cx + 14) + "px";
    tip.style.top = Math.max(10, cy - h - 14 < 10 ? cy + 14 : cy - h - 14) + "px";
  }
  function showTip(e, title, lines) {
    if (!tip) return;
    tip.innerHTML = '<div class="chart-tooltip-title">' + title + '</div>' + lines.map(function (l) { return '<div>' + l + '</div>'; }).join("");
    tip.classList.add("visible");
    tip.setAttribute("aria-hidden", "false");
    posTip(e);
  }
  function hideTip() {
    if (tip) {
      tip.classList.remove("visible");
      tip.setAttribute("aria-hidden", "true");
    }
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest("[data-tip]")) hideTip();
  });

  /* Mobile Drawer & Scroll Progress */
  const mt = $("menuToggle");
  const md = $("mobileDrawer");
  const rp = $("readingProgress");
  if (mt && md) {
    mt.addEventListener("click", function () {
      const o = md.classList.toggle("open");
      mt.setAttribute("aria-expanded", String(o));
    });
    md.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        md.classList.remove("open");
        mt.setAttribute("aria-expanded", "false");
      });
    });
  }
  window.addEventListener("scroll", function () {
    const d = document.documentElement;
    const m = d.scrollHeight - d.clientHeight;
    if (rp) rp.style.width = (m > 0 ? Math.min(100, Math.max(0, (window.scrollY / m) * 100)) : 0).toFixed(1) + "%";
  }, { passive: true });

  /* ==========================================================================
     1. ORIGIN FINANCIAL AI / DATA QUERY ADVISOR
     ========================================================================== */
  const aiForm = $("aiPromptForm");
  const aiInput = $("aiPromptInput");
  const aiPanel = $("aiAnswerPanel");

  function answerDataQuery(rawQuery) {
    const q = (rawQuery || "").trim().toLowerCase();
    if (!q) return;
    const foundClub = CLUB_DATA.find(function (c) {
      return q.indexOf(c.club.toLowerCase()) !== -1 ||
        (c.club === "Man Utd" && (q.indexOf("united") !== -1 || q.indexOf("manchester united") !== -1)) ||
        (c.club === "Man City" && (q.indexOf("city") !== -1 || q.indexOf("manchester city") !== -1));
    });
    if (foundClub) {
      const top = foundClub.topDeals[0];
      aiPanel.innerHTML =
        '<div class="mono-label" style="color:var(--color-cyan-signal);margin-bottom:4px;">CONSULTA DE CLUB · ' + foundClub.club.toUpperCase() + ' (2005–2026)</div>' +
        '<strong>' + foundClub.club + '</strong> desembolsó <strong class="tabular">' + fmtM(foundClub.paid) + '</strong> en <strong>' + foundClub.count + ' operaciones</strong> (tasadas en ' + fmtM(foundClub.est) + '), acumulando un sobreprecio neto de <strong class="tabular" style="color:var(--color-iris-gleam);">+' + fmtM(foundClub.overpay) + '</strong> y un recargo promedio por fichaje de <strong class="tabular">' + fmtP(foundClub.avgDef) + '</strong>. Su mayor desvío fue <strong>' + top.jugador + '</strong> (+' + fmtM(top.overpay) + ', ' + top.def + '%).';
      return;
    }
    if (q.indexOf("inflac") !== -1 || q.indexOf("bce") !== -1 || q.indexOf("hicp") !== -1 || q.indexOf("euro") !== -1) {
      aiPanel.innerHTML =
        '<div class="mono-label" style="color:var(--color-cyan-signal);margin-bottom:4px;">CONTRASTE MACROECONÓMICO · EUROSTAT HICP VS. PREMIER LEAGUE</div>' +
        'Entre 2005 y 2026, la inflación real europea (HICP del BCE) promedió apenas <strong class="tabular">2,14% anual</strong>, manteniéndose prácticamente plana cerca de la meta del <strong>2,0%</strong>. En cambio, la Premier League pagó un sobrecosto estructural del <strong class="tabular" style="color:var(--color-iris-gleam);">+29,8%</strong> (+€4.555,1M), con picos de <strong>68,1%</strong> en 2017.';
      return;
    }
    if (q.indexOf("recargo") !== -1 || q.indexOf("porcent") !== -1 || q.indexOf("mayor") !== -1) {
      aiPanel.innerHTML =
        '<div class="mono-label" style="color:var(--color-cyan-signal);margin-bottom:4px;">HALLAZGO PRINCIPAL · LÍDERES DEL IMPUESTO PREMIER</div>' +
        'En volumen absoluto, <strong>Chelsea FC</strong> lidera con <strong class="tabular">€837,2M</strong> de sobreprecio neto en 93 fichajes. En recargo porcentual promedio entre los grandes clubes, <strong>Manchester United</strong> encabeza la liga con un <strong class="tabular" style="color:var(--color-iris-gleam);">272,8%</strong> por encima de la tasación de mercado.';
      return;
    }
    aiPanel.innerHTML =
      '<div class="mono-label" style="color:var(--color-cyan-signal);margin-bottom:4px;">SÍNTESIS DE LA BASE DE DATOS · 997 OPERACIONES</div>' +
      'Los 20 clubes analizados invirtieron <strong class="tabular">€19.841,9M</strong> frente a un valor real estimado de <strong class="tabular">€15.286,8M</strong>: un «Impuesto Premier» neto de <strong class="tabular" style="color:var(--color-iris-gleam);">€4.555,1M (+29,8%)</strong>. Prueba consultando por cualquier club (ej. <em>Chelsea, Arsenal, Liverpool, Newcastle, Everton</em>) o por <em>Inflación BCE</em>.';
  }

  if (aiForm) {
    aiForm.addEventListener("submit", function (e) {
      e.preventDefault();
      answerDataQuery(aiInput ? aiInput.value : "");
    });
  }
  document.querySelectorAll("[data-ai-query]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const q = btn.getAttribute("data-ai-query");
      if (aiInput) aiInput.value = q;
      answerDataQuery(q);
    });
  });

  /* ==========================================================================
     2. INTERACTIVE FOOTBALL GOALS (ARCO DE GASTOS VS. ARCO DE VALOR REAL)
     ========================================================================== */
  let curScope = "all";
  let gTimers = [];

  function ballSvg(sz, col) {
    return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="10.5" fill="#0f1011" stroke="' + col + '" stroke-width="2"/>' +
      '<polygon points="12,7 15.8,9.8 14.3,14.2 9.7,14.2 8.2,9.8" fill="' + col + '"/>' +
      '</svg>';
  }

  function renderGoals(scope, anim) {
    curScope = scope;
    gTimers.forEach(clearTimeout);
    gTimers = [];
    let paid = 19841.9, est = 15286.8, over = 4555.1, unit = 250, bSz = 16;
    if (scope !== "all") {
      const f = CLUB_DATA.find(function (c) { return c.club === scope; });
      if (f) {
        paid = f.paid;
        est = f.est;
        over = f.overpay;
        unit = scope === "Newcastle" ? 10 : 50;
        bSz = scope === "Newcastle" ? 12 : 16;
      }
    }
    const sCnt = Math.max(1, Math.round(paid / unit));
    const eCnt = Math.max(1, Math.round(est / unit));
    $("goalUnitBadge").textContent = "1 BALÓN = €" + unit + "M";
    $("goalGapTag").textContent = "EXCESO: +" + fmtM(over) + " (" + Math.max(1, sCnt - eCnt) + " BALONES)";
    $("goalSpentCount").textContent = sCnt + " BALONES";
    $("goalEstCount").textContent = eCnt + " BALONES";

    const sArr = [];
    const eArr = [];
    for (let i = 1; i <= sCnt; i++) {
      sArr.push(
        '<span class="soccer-ball" data-idx="' + i + '" data-cum="' + Math.min(paid, i * unit).toFixed(1) + '" style="width:' + bSz + 'px;height:' + bSz + 'px;">' +
        ballSvg(bSz, i > eCnt ? "#847dff" : "#f5f5f7") +
        '</span>'
      );
    }
    for (let j = 1; j <= eCnt; j++) {
      eArr.push(
        '<span class="soccer-ball" data-idx="' + j + '" data-cum="' + Math.min(est, j * unit).toFixed(1) + '" style="width:' + bSz + 'px;height:' + bSz + 'px;">' +
        ballSvg(bSz, "#00b3dd") +
        '</span>'
      );
    }
    $("goalSpentBalls").innerHTML = sArr.join("");
    $("goalEstBalls").innerHTML = eArr.join("");
    $("goalGapLine").style.bottom = Math.min(198, ($("goalEstBalls").offsetHeight || 105) + 5) + "px";

    const sN = $("goalSpentBalls").querySelectorAll(".soccer-ball");
    const eN = $("goalEstBalls").querySelectorAll(".soccer-ball");
    function bindB(n, lbl) {
      const fn = function () {
        $("goalInspectorText").innerHTML =
          '<strong style="color:var(--color-pure);">' + lbl + ' · Balón #' + n.getAttribute("data-idx") + '</strong>: acumulado de <strong class="tabular" style="color:var(--color-cyan-signal);">' + fmtM(n.getAttribute("data-cum")) + '</strong>';
      };
      n.addEventListener("mouseenter", fn);
      n.addEventListener("click", fn);
    }
    sN.forEach(function (n) { bindB(n, "Arco de Gastos"); });
    eN.forEach(function (n) { bindB(n, "Arco de Valor Real"); });

    if (!anim) {
      sN.forEach(function (n) { n.classList.add("in"); });
      eN.forEach(function (n) { n.classList.add("in"); });
      $("goalSpentVal").textContent = fmtM(paid);
      $("goalEstVal").textContent = fmtM(est);
      return;
    }
    $("goalSpentVal").textContent = "€0,0M";
    $("goalEstVal").textContent = "€0,0M";
    const steps = Math.max(sCnt, eCnt);
    const delay = Math.max(10, Math.min(26, Math.floor(1400 / steps)));
    for (let k = 0; k < steps; k++) {
      (function (st) {
        gTimers.push(setTimeout(function () {
          if (sN[st]) {
            sN[st].classList.add("in");
            $("goalSpentVal").textContent = fmtM(Math.min(paid, (st + 1) * unit));
          }
          if (eN[st]) {
            eN[st].classList.add("in");
            $("goalEstVal").textContent = fmtM(Math.min(est, (st + 1) * unit));
          }
          if (st === steps - 1) {
            $("goalSpentVal").textContent = fmtM(paid);
            $("goalEstVal").textContent = fmtM(est);
          }
        }, st * delay));
      })(k);
    }
  }

  document.querySelectorAll("[data-ball-scope]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-ball-scope]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      renderGoals(b.getAttribute("data-ball-scope"), true);
    });
  });
  if ($("replayGoalsBtn")) {
    $("replayGoalsBtn").addEventListener("click", function () { renderGoals(curScope, true); });
  }
  renderGoals("all", true);

  /* ==========================================================================
     3. INTERACTIVE PODIUM
     ========================================================================== */
  function renderPodium(name) {
    const c = CLUB_DATA.find(function (x) { return x.club === name; });
    if (!c) return;
    $("podiumDetail").innerHTML =
      '<div class="podium-detail-head"><span class="podium-detail-name">' + c.club + '</span>' +
      '<span class="mono-label" style="color:var(--color-cyan-signal);">' + c.count + ' OPERACIONES</span></div>' +
      '<div class="podium-stats">' +
      '<div class="podium-stat"><span>Pagado</span><strong>' + fmtM(c.paid) + '</strong></div>' +
      '<div class="podium-stat"><span>Sobreprecio</span><strong style="color:var(--color-iris-gleam);">' + fmtM(c.overpay) + '</strong></div>' +
      '<div class="podium-stat"><span>Recargo prom.</span><strong style="color:var(--color-cyan-signal);">' + fmtP(c.avgDef) + '</strong></div>' +
      '</div>' +
      '<div class="mono-label" style="font-size:10px;color:var(--color-ash);margin-bottom:4px;">TRASPASOS CON MAYOR SOBREPRECIO</div>' +
      '<ul class="podium-deals-list">' +
      c.topDeals.map(function (d) {
        return '<li><span><strong>' + d.jugador + '</strong> (' + d.orig + ', ' + d.temp + ')</span>' +
          '<span class="tabular" style="color:var(--color-iris-gleam);">+' + fmtM(d.overpay) + ' (' + d.def + '%)</span></li>';
      }).join("") +
      '</ul>';
  }
  document.querySelectorAll("[data-podium-club]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-podium-club]").forEach(function (x) {
        x.classList.remove("active");
        x.setAttribute("aria-selected", "false");
      });
      b.classList.add("active");
      b.setAttribute("aria-selected", "true");
      renderPodium(b.getAttribute("data-podium-club"));
    });
  });
  renderPodium("Chelsea");

  /* ==========================================================================
     4. CHART 01: SOBREPRECIO ACUMULADO POR CLUB (DIEGO VALENZUELA)
     ========================================================================== */
  let c1Mode = "overpay";
  function updateInsp(c) {
    if (!c) return;
    $("inspClubName").textContent = c.club;
    $("inspClubStats").innerHTML =
      'Sobreprecio: <strong class="tabular" style="color:var(--color-iris-gleam);">' + fmtM(c.overpay) + '</strong> · ' +
      'Recargo promedio: <strong class="tabular" style="color:var(--color-cyan-signal);">' + fmtP(c.avgDef) + '</strong> · ' +
      'Pagado: <span class="tabular">' + fmtM(c.paid) + '</span> (' + c.count + ' fichajes)';
    $("inspClubDeals").innerHTML =
      'Mayor desvío: <strong style="color:var(--color-pure);">' + c.topDeals[0].jugador + '</strong> (<span class="tabular">+' + fmtM(c.topDeals[0].overpay) + '</span>)';
  }
  updateInsp(CLUB_DATA[0]);

  function bindTips(wrap, items, getTip) {
    wrap.querySelectorAll("[data-tip]").forEach(function (el) {
      const idx = Number(el.getAttribute("data-tip"));
      const fn = function (e) {
        const t = getTip(items[idx]);
        showTip(e, t[0], t[1]);
      };
      el.addEventListener("mouseenter", fn);
      el.addEventListener("mousemove", posTip);
      el.addEventListener("mouseleave", hideTip);
      el.addEventListener("click", fn);
    });
  }

  function renderChart01() {
    const sorted = CLUB_DATA.slice().sort(function (a, b) { return b[c1Mode] - a[c1Mode]; });
    const max = sorted[0][c1Mode] || 1;
    const u = c1Mode === "paid" ? 500 : c1Mode === "avgDef" ? 50 : 100;
    const nMax = Math.ceil(max / u) * u;
    const W = 900, H = 580, pL = 132, pR = 82, pT = 18, pB = 36, pW = W - pL - pR;
    const step = (H - pT - pB) / sorted.length, bH = step * 0.68;
    const out = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Sobreprecio acumulado por club">'];
    for (let t = 0; t <= 5; t++) {
      const v = (nMax / 5) * t;
      const x = pL + (v / nMax) * pW;
      out.push(
        '<line x1="' + x.toFixed(1) + '" y1="' + pT + '" x2="' + x.toFixed(1) + '" y2="' + (H - pB) + '" stroke="rgba(255,255,255,0.07)"/>' +
        '<text x="' + x.toFixed(1) + '" y="' + (H - 12) + '" text-anchor="middle" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">' +
        (c1Mode === "avgDef" ? Math.round(v) + "%" : "€" + Math.round(v) + "M") + '</text>'
      );
    }
    sorted.forEach(function (c, i) {
      const val = c[c1Mode];
      const r = val / max;
      const bw = Math.max(3, (val / nMax) * pW);
      const y = pT + i * step + (step - bH) / 2;
      const col = r > 0.75 ? "#847dff" : r > 0.48 ? "#00b3dd" : r > 0.28 ? "#90b8f0" : r > 0.14 ? "#d1c9ff" : "#4b49aa";
      out.push(
        '<g data-tip="' + i + '" style="cursor:pointer;">' +
        '<rect x="' + pL + '" y="' + (pT + i * step) + '" width="' + (pW + pR) + '" height="' + step.toFixed(1) + '" fill="transparent"/>' +
        '<text x="' + (pL - 12) + '" y="' + (y + bH / 2 + 4).toFixed(1) + '" text-anchor="end" fill="#f5f5f7" font-size="12.5" font-family="Inter, sans-serif">' + c.club + '</text>' +
        '<rect x="' + pL + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bH.toFixed(1) + '" rx="4" fill="' + col + '"/>' +
        '<text x="' + (pL + bw + 8).toFixed(1) + '" y="' + (y + bH / 2 + 4).toFixed(1) + '" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">' +
        (c1Mode === "avgDef" ? fmtP(val) : fmtM(val)) + '</text></g>'
      );
    });
    out.push('</svg>');
    $("chart01Wrap").innerHTML = out.join("");
    bindTips($("chart01Wrap"), sorted, function (c) {
      updateInsp(c);
      return [
        c.club,
        [
          'Sobreprecio acumulado: <strong class="tabular" style="color:#847dff;">' + fmtM(c.overpay) + '</strong>',
          'Recargo promedio: <strong class="tabular" style="color:#00b3dd;">' + fmtP(c.avgDef) + '</strong>',
          'Sobrecosto ponderado: <span class="tabular">' + fmtP(c.weightedPct) + '</span>',
          'Total pagado: <span class="tabular">' + fmtM(c.paid) + '</span> (' + c.count + ' fichajes)'
        ]
      ];
    });
  }
  document.querySelectorAll("[data-c1-mode]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-c1-mode]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      c1Mode = b.getAttribute("data-c1-mode");
      renderChart01();
    });
  });
  renderChart01();

  /* ==========================================================================
     5. CHART 02: INFLACIÓN HICP DEL BCE VS. SOBREPRECIO PREMIER (JUAN TAPIA)
     ========================================================================== */
  let c2Mode = "rates";
  function renderChart02() {
    const yrs = c2Mode === "bce" ? YEAR_DATA.filter(function (y) { return y.year >= 2006 && y.year <= 2017; }) : YEAR_DATA;
    const W = 900, H = 390, pL = 68, pR = 68, pT = 22, pB = 42, pW = W - pL - pR, pH = H - pT - pB;

    if (c2Mode === "euros") {
      $("chart02Legend").innerHTML =
        '<span class="legend-item"><span class="legend-swatch" style="background:#00b3dd;"></span> VALOR ESTIMADO DE MERCADO (€M)</span>' +
        '<span class="legend-item"><span class="legend-swatch" style="background:#847dff;"></span> SOBREPRECIO NETO PAGADO (€M)</span>';
      const mP = 3200;
      const bw = (pW / yrs.length) * 0.66;
      const out = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Pagado versus valor estimado por año">'];
      for (let g = 0; g <= 4; g++) {
        const v = (mP / 4) * g;
        const y = pT + pH - (v / mP) * pH;
        out.push(
          '<line x1="' + pL + '" y1="' + y.toFixed(1) + '" x2="' + (W - pR) + '" y2="' + y.toFixed(1) + '" stroke="rgba(255,255,255,0.07)"/>' +
          '<text x="' + (pL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">€' + Math.round(v) + 'M</text>'
        );
      }
      yrs.forEach(function (yr, i) {
        const x = pL + (i + 0.5) * (pW / yrs.length) - bw / 2;
        const eH = (yr.est / mP) * pH;
        const oH = (Math.max(0, yr.overpay) / mP) * pH;
        const yE = pT + pH - eH;
        out.push(
          '<g data-tip="' + i + '" style="cursor:pointer;">' +
          '<rect x="' + (x - 4).toFixed(1) + '" y="' + pT + '" width="' + (bw + 8).toFixed(1) + '" height="' + pH + '" fill="transparent"/>' +
          '<rect x="' + x.toFixed(1) + '" y="' + yE.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + eH.toFixed(1) + '" fill="#00b3dd" fill-opacity="0.75"/>' +
          '<rect x="' + x.toFixed(1) + '" y="' + (yE - oH).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + oH.toFixed(1) + '" rx="2" fill="#847dff"/>' +
          (i % 2 === 0 || yrs.length <= 12 ? '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">' + yr.year + '</text>' : '') +
          '</g>'
        );
      });
      out.push('</svg>');
      $("chart02Wrap").innerHTML = out.join("");
    } else {
      $("chart02Legend").innerHTML =
        '<span class="legend-item"><span class="legend-swatch" style="background:#00b3dd;"></span> INFLACIÓN EUROPEA HICP (%)</span>' +
        '<span class="legend-item"><span class="legend-swatch" style="background:#ffffff;"></span> META HISTÓRICA BCE (2,0%)</span>' +
        (c2Mode === "rates" ? '<span class="legend-item"><span class="legend-swatch" style="background:#847dff;"></span> SOBRECOSTO PREMIER (%)</span>' : '');
      const mH = c2Mode === "bce" ? 5 : 10;
      const mPr = 280;
      const xA = function (i) { return pL + (i / (yrs.length - 1)) * pW; };
      const yH = function (v) { return pT + pH - (v / mH) * pH; };
      const yP = function (v) { return pT + pH - (v / mPr) * pH; };
      const out = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Inflación HICP vs sobreprecio Premier">'];
      for (let g = 0; g <= 5; g++) {
        const hv = (mH / 5) * g;
        const y = yH(hv);
        out.push(
          '<line x1="' + pL + '" y1="' + y.toFixed(1) + '" x2="' + (W - pR) + '" y2="' + y.toFixed(1) + '" stroke="rgba(255,255,255,0.07)"/>' +
          '<text x="' + (pL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" fill="#00b3dd" font-size="11" font-family="Roboto Mono, monospace">' + hv.toFixed(0) + '%</text>'
        );
        if (c2Mode === "rates") {
          out.push(
            '<text x="' + (W - pR + 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="start" fill="#847dff" font-size="11" font-family="Roboto Mono, monospace">' + Math.round((mPr / 5) * g) + '%</text>'
          );
        }
      }
      const yB = yH(2);
      out.push(
        '<line x1="' + pL + '" y1="' + yB.toFixed(1) + '" x2="' + (W - pR) + '" y2="' + yB.toFixed(1) + '" stroke="rgba(255,255,255,0.65)" stroke-dasharray="6 5" stroke-width="1.5"/>' +
        '<text x="' + (pL + 10) + '" y="' + (yB - 7).toFixed(1) + '" fill="#ffffff" font-size="10.5" font-family="Roboto Mono, monospace">META BCE 2,0%</text>'
      );
      const hPts = yrs.map(function (yr, i) { return xA(i).toFixed(1) + "," + yH(HICP[yr.year] ?? 2).toFixed(1); }).join(" ");
      out.push(
        '<polygon points="' + pL + ',' + (pT + pH) + ' ' + hPts + ' ' + (pL + pW) + ',' + (pT + pH) + '" fill="rgba(0,179,221,0.14)"/>' +
        '<polyline points="' + hPts + '" fill="none" stroke="#00b3dd" stroke-width="2.6" stroke-linejoin="round"/>'
      );
      if (c2Mode === "rates") {
        out.push(
          '<polyline points="' + yrs.map(function (yr, i) { return xA(i).toFixed(1) + "," + yP(yr.weightedPct).toFixed(1); }).join(" ") + '" fill="none" stroke="#847dff" stroke-width="2.6" stroke-linejoin="round"/>'
        );
      }
      const cW = pW / yrs.length;
      yrs.forEach(function (yr, i) {
        const cx = xA(i);
        out.push(
          '<g data-tip="' + i + '" style="cursor:pointer;">' +
          '<rect x="' + (cx - cW / 2).toFixed(1) + '" y="' + pT + '" width="' + cW.toFixed(1) + '" height="' + pH + '" fill="transparent"/>' +
          '<circle cx="' + cx.toFixed(1) + '" cy="' + yH(HICP[yr.year] ?? 2).toFixed(1) + '" r="4" fill="#00b3dd" stroke="#0f1011" stroke-width="1.5"/>' +
          (c2Mode === "rates" ? '<circle cx="' + cx.toFixed(1) + '" cy="' + yP(yr.weightedPct).toFixed(1) + '" r="4" fill="#847dff" stroke="#0f1011" stroke-width="1.5"/>' : '') +
          (i % 2 === 0 || yrs.length <= 12 ? '<text x="' + cx.toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">' + yr.year + '</text>' : '') +
          '</g>'
        );
      });
      out.push('</svg>');
      $("chart02Wrap").innerHTML = out.join("");
    }
    bindTips($("chart02Wrap"), yrs, function (yr) {
      return [
        "Año " + yr.year,
        [
          'Inflación HICP Eurozona: <strong class="tabular" style="color:#00b3dd;">' + fmtP(HICP[yr.year] ?? 2) + '</strong> (Meta BCE: 2,0%)',
          'Sobrecosto Premier: <strong class="tabular" style="color:#847dff;">' + fmtP(yr.weightedPct) + '</strong>',
          'Pagado: <span class="tabular">' + fmtM(yr.paid) + '</span> · Tasación: <span class="tabular">' + fmtM(yr.est) + '</span>',
          'Sobreprecio neto: <span class="tabular">' + fmtM(yr.overpay) + '</span> (' + yr.count + ' fichajes)'
        ]
      ];
    });
  }
  document.querySelectorAll("[data-c2-mode]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-c2-mode]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      c2Mode = b.getAttribute("data-c2-mode");
      renderChart02();
    });
  });
  renderChart02();

  /* ==========================================================================
     6. CHART 03: 20 AÑOS DE EVOLUCIÓN ECONÓMICA POR CLUB (VALERIA TRUJILLO)
     ========================================================================== */
  let c3Metric = "cumOver";
  let activeClubs = new Set(["Chelsea", "Man Utd", "Man City", "Newcastle", "Liverpool", "Arsenal"]);

  function renderClubToggles() {
    $("c3ClubToggles").innerHTML = CLUB_DATA.map(function (c, i) {
      return '<button type="button" class="club-filter-btn ' + (activeClubs.has(c.club) ? "active" : "") + '" data-toggle-club="' + c.club + '">' +
        '<span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:' + COLS[i % COLS.length] + ';margin-right:6px;"></span>' +
        c.club + '</button>';
    }).join("");
    $("c3ClubToggles").querySelectorAll("[data-toggle-club]").forEach(function (b) {
      b.addEventListener("click", function () {
        const n = b.getAttribute("data-toggle-club");
        if (activeClubs.has(n)) {
          if (activeClubs.size > 1) activeClubs.delete(n);
        } else {
          activeClubs.add(n);
        }
        renderClubToggles();
        renderChart03();
      });
    });
  }

  function renderChart03() {
    const vis = CLUB_SERIES.map(function (cs, idx) {
      return { cs: cs, col: COLS[idx % COLS.length], idx: idx };
    }).filter(function (x) { return activeClubs.has(x.cs.club); });

    let max = 50, min = 0;
    vis.forEach(function (it) {
      it.cs.series.forEach(function (p) {
        if (p[c3Metric] > max) max = p[c3Metric];
        if (p[c3Metric] < min) min = p[c3Metric];
      });
    });
    const su = max > 1200 ? 500 : max > 400 ? 200 : 100;
    const nMax = Math.ceil(max / su) * su;
    const nMin = min < 0 ? Math.floor(min / 50) * 50 : 0;
    const span = Math.max(1, nMax - nMin);
    const W = 900, H = 405, pL = 74, pR = 28, pT = 20, pB = 42, pW = W - pL - pR, pH = H - pT - pB;
    const yLen = CLUB_SERIES[0].series.length;
    const xA = function (i) { return pL + (i / (yLen - 1)) * pW; };
    const yA = function (v) { return pT + pH - ((v - nMin) / span) * pH; };

    const out = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Evolución económica por club 2005-2026">'];
    for (let g = 0; g <= 5; g++) {
      const v = nMin + (span / 5) * g;
      const y = yA(v);
      out.push(
        '<line x1="' + pL + '" y1="' + y.toFixed(1) + '" x2="' + (W - pR) + '" y2="' + y.toFixed(1) + '" stroke="rgba(255,255,255,0.07)"/>' +
        '<text x="' + (pL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">€' + Math.round(v) + 'M</text>'
      );
    }
    if (nMin < 0) {
      out.push('<line x1="' + pL + '" y1="' + yA(0).toFixed(1) + '" x2="' + (W - pR) + '" y2="' + yA(0).toFixed(1) + '" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4 4"/>');
    }
    vis.forEach(function (it) {
      out.push(
        '<polyline points="' + it.cs.series.map(function (p, i) { return xA(i).toFixed(1) + "," + yA(p[c3Metric]).toFixed(1); }).join(" ") +
        '" fill="none" stroke="' + it.col + '" stroke-width="' + (it.idx < 3 ? 2.6 : 1.8) + '" stroke-linejoin="round"/>'
      );
    });
    const cW = pW / yLen;
    const yrsIdx = [];
    for (let yi = 0; yi < yLen; yi++) {
      yrsIdx.push(yi);
      const cx = xA(yi);
      out.push(
        '<g data-tip="' + yi + '" style="cursor:pointer;">' +
        '<rect x="' + (cx - cW / 2).toFixed(1) + '" y="' + pT + '" width="' + cW.toFixed(1) + '" height="' + pH + '" fill="transparent"/>' +
        (yi % 2 === 0 || yi === yLen - 1 ? '<text x="' + cx.toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" fill="#9f9fa0" font-size="11" font-family="Roboto Mono, monospace">' + (2005 + yi) + '</text>' : '') +
        vis.map(function (it) {
          return '<circle cx="' + cx.toFixed(1) + '" cy="' + yA(it.cs.series[yi][c3Metric]).toFixed(1) + '" r="3" fill="' + it.col + '"/>';
        }).join("") +
        '</g>'
      );
    }
    out.push('</svg>');
    $("chart03Wrap").innerHTML = out.join("");

    const mL = c3Metric === "cumPaid" ? "Gasto acumulado" : c3Metric === "yrOver" ? "Sobreprecio anual" : "Sobreprecio acumulado";
    bindTips($("chart03Wrap"), yrsIdx, function (yi) {
      const top = vis.slice().sort(function (a, b) { return b.cs.series[yi][c3Metric] - a.cs.series[yi][c3Metric]; }).slice(0, 7);
      return [
        mL + " · " + (2005 + yi),
        top.map(function (it) {
          const info = CLUB_DATA.find(function (c) { return c.club === it.cs.club; });
          return '<span style="color:' + it.col + ';font-weight:700;">■</span> ' + it.cs.club + ': <strong class="tabular">' + fmtM(it.cs.series[yi][c3Metric]) + '</strong>' +
            (info ? ' (<span class="tabular">' + fmtP(info.avgDef) + '</span>)' : '');
        })
      ];
    });
  }

  document.querySelectorAll("[data-c3-metric]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-c3-metric]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      c3Metric = b.getAttribute("data-c3-metric");
      renderChart03();
    });
  });
  document.querySelectorAll("[data-c3-preset]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-c3-preset]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      const pr = b.getAttribute("data-c3-preset");
      activeClubs = pr === "all"
        ? new Set(CLUB_DATA.map(function (c) { return c.club; }))
        : pr === "mid"
          ? new Set(["Southampton", "West Ham", "Everton", "Aston Villa", "Wolves", "Leicester", "Crystal Palace"])
          : new Set(["Chelsea", "Man Utd", "Man City", "Newcastle", "Liverpool", "Arsenal"]);
      renderClubToggles();
      renderChart03();
    });
  });
  renderClubToggles();
  renderChart03();

  /* ==========================================================================
     7. METHODOLOGY TABLE & SHARE BUTTONS
     ========================================================================== */
  let sKey = "overpay", sAsc = false, sTerm = "";
  function renderTable() {
    $("clubsTableBody").innerHTML = CLUB_DATA.filter(function (c) {
      return c.club.toLowerCase().indexOf(sTerm.toLowerCase()) !== -1;
    }).sort(function (a, b) {
      return sAsc ? a[sKey] - b[sKey] : b[sKey] - a[sKey];
    }).map(function (c) {
      return '<tr>' +
        '<td style="color:var(--color-pure);font-weight:400;">' + c.club + '</td>' +
        '<td class="num">' + c.count + '</td>' +
        '<td class="num">' + fmtM(c.paid) + '</td>' +
        '<td class="num">' + fmtM(c.est) + '</td>' +
        '<td class="num" style="color:var(--color-iris-gleam);">' + fmtM(c.overpay) + '</td>' +
        '<td class="num" style="color:var(--color-cyan-signal);">' + fmtP(c.avgDef) + '</td>' +
        '<td class="num">' + fmtP(c.weightedPct) + '</td>' +
        '</tr>';
    }).join("");
  }
  document.querySelectorAll("[data-sort]").forEach(function (b) {
    b.addEventListener("click", function () {
      const k = b.getAttribute("data-sort");
      if (sKey === k) sAsc = !sAsc;
      else { sKey = k; sAsc = false; }
      document.querySelectorAll("[data-sort]").forEach(function (x) {
        x.classList.remove("active");
        x.textContent = x.textContent.replace(" ↓", "").replace(" ↑", "");
      });
      b.classList.add("active");
      b.textContent += sAsc ? " ↑" : " ↓";
      renderTable();
    });
  });
  if ($("clubSearch")) {
    $("clubSearch").addEventListener("input", function (e) {
      sTerm = e.target.value || "";
      renderTable();
    });
  }
  renderTable();

  const st = encodeURIComponent("El Impuesto Premier: entre 2005 y 2026 los clubes ingleses pagaron €4.555M de sobreprecio neto en 997 fichajes.");
  const pu = encodeURIComponent(window.location.href);
  if ($("shareWhatsapp")) $("shareWhatsapp").href = "https://api.whatsapp.com/send?text=" + st + "%20" + pu;
  if ($("shareX")) $("shareX").href = "https://twitter.com/intent/tweet?text=" + st + "&url=" + pu;
  if ($("copyLinkBtn")) {
    $("copyLinkBtn").addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(function () {
          $("copyLinkLabel").textContent = "¡Enlace copiado!";
          setTimeout(function () { $("copyLinkLabel").textContent = "Copiar enlace →"; }, 2000);
        });
      }
    });
  }
})();
