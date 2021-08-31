const fiftyh1 = document.getElementById("fiftyh1");
const fiftyFloat = document.getElementById("fiftyFloat");
const pcomprablue = document.getElementById("comprablue");
const pventablue = document.getElementById("ventablue");

async function getDBlue() {
  const bluelyticsAPI = await fetch("https://api.bluelytics.com.ar/v2/latest");
  const data = await bluelyticsAPI.json();
  const dblue = await data.blue;
  const dblueVenta = await dblue.value_sell;
  const decimaldblueVenta = (dblueVenta / 2 - Math.trunc(dblueVenta / 2)) * 100;
  fiftyh1.innerHTML = Math.trunc(dblueVenta / 2);

  const float = decimaldblueVenta.toFixed(0);
  if (float == 0) {
    fiftyFloat.style.display = "none";
  }
  fiftyFloat.innerHTML = "." + float;
  const dblueCompra = await dblue.value_buy;
  pcomprablue.innerHTML = "Compra: $" + dblueCompra;
  pventablue.innerHTML = "Venta: " + "<strong>$" + dblueVenta + "</strong>";
}

getDBlue();

const fecha = new Date();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

// Cancion Random con link

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const cancion = document.getElementById("cancion");
const album = document.getElementById("album");

//  array de objetos
let arrayCanciones = [];

function AgregarCancion(nombre, link, disco) {
  let objCancion = { cancion: nombre, linkyt: link, album: disco };
  arrayCanciones.push(objCancion);
}

AgregarCancion(
  "«Poor Lil Rich»",
  "https://www.youtube.com/watch?v=_x1vRIfotcw",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Like My Style»",
  "https://www.youtube.com/watch?v=o3Gm41HKdQA",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«In Da Club»",
  "https://www.youtube.com/watch?v=5qm8PH4xAss",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«21 Questions»",
  "https://www.youtube.com/watch?v=cDMhlvbOFaM",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«P.I.M.P.»",
  "https://www.youtube.com/watch?v=Jy1D6caG8nU",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Many Men (Wish Death)»",
  "https://www.youtube.com/watch?v=5D3crqpClPY",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Patiently Waiting»",
  "https://www.youtube.com/watch?v=GN3ypSLNIDA",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«What Up Gangsta»",
  "https://www.youtube.com/watch?v=xIl4ZGd8MPc",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Heat»",
  "https://www.youtube.com/watch?v=LZIc8VSonVY",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«If I Can´t»",
  "https://www.youtube.com/watch?v=z5zz7GHU4ec",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Don´t Push Me»",
  "https://www.youtube.com/watch?v=Mj4YJHDpamg",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Gotta Make It to Heaven»",
  "https://www.youtube.com/watch?v=_NNfJfa672I",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«High All the Time»",
  "https://www.youtube.com/watch?v=m13_w0h6s4M",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Blood Hound»",
  "https://www.youtube.com/watch?v=5NRy-Xv2yQI",
  "Get rich or die tryin´"
);
AgregarCancion(
  "«Back Down»",
  "https://www.youtube.com/watch?v=3Opytt7bblU",
  "Get rich or die tryin´"
);

// Cancion random + link
let numRandom = generateRandomNumber(0, arrayCanciones.length);
cancion.innerHTML =
  '<i class="fas fa-play"></i> <a target="_blank" id="linkCancion" href="' +
  arrayCanciones[numRandom].linkyt +
  '">' +
  arrayCanciones[numRandom].cancion +
  "</a> <br>";
album.append(" " + arrayCanciones[numRandom].album);

// Fetch valores historicos

async function getDhistorico() {
  const bluelyticsAPI = await fetch(
    "https://api.bluelytics.com.ar/v2/evolution.json"
  );
  window.dataHistorica = await bluelyticsAPI.json();
  let i = dataHistorica.length - 1;
  ejeX = [];
  dataHistorica.forEach((element) => {
    if (dataHistorica[i].source == "Blue") {
      dblueHistorico.push(dataHistorica[i].value_sell);
      ejeX.push(dataHistorica[i].date);
    } else {
      doficialHistorico.push(dataHistorica[i].value_sell);
    }
    i--;
  });
  var ctx = document.getElementById("myChart");
  window.myChart = new Chart(ctx, {
    type: "line",
    options: {
      maintainAspectRatio: false,
    },
    data: {
      labels: ejeX,
      datasets: [
        {
          data: dblueHistorico,
          label: "Blue",
          borderColor: "#3e95cd",
          fill: false,
          borderWidth: 1,
          pointStyle: "dash",
          pointRadius: 1,
        },
        {
          data: doficialHistorico,
          label: "Oficial",
          borderColor: "#ffffff",
          fill: false,
          borderWidth: 1,
          pointStyle: "dash",
          pointRadius: 1,
        },
      ],
    },
  });

  //   myChart.destroy();
  return dataHistorica;
  return myChart;
}

getDhistorico();

// Controles chart

const ultMes = document.getElementById("ultMes");
const dblueUltMes = [];
const doficialUltMes = [];

const ultAnio = document.getElementById("ultAnio");
const dblueUltAnio = [];
const doficialUltAnio = [];

const historico = document.getElementById("historico");
const dblueHistorico = [];
const doficialHistorico = [];

let ejeX = [];

// Dibujar ultimo mes:

ultMes.addEventListener("click", function ultimoMes() {
  i = dataHistorica.length - 1;
  ejeX = [];
  dataHistorica.forEach((element) => {
    if (dataHistorica[i].date.includes(anio + "-0" + mes)) {
      if (dataHistorica[i].source == "Blue") {
        dblueUltMes.push(dataHistorica[i].value_sell);
        ejeX.push(dataHistorica[i].date);
      } else {
        doficialUltMes.push(dataHistorica[i].value_sell);
      }
    }
    i--;
  });
  window.myChart.destroy();
  redibujarTabla(dblueUltMes, doficialUltMes, ejeX);
});

// Dibujar ultimo Año:

ultAnio.addEventListener("click", function ultimoAnio() {
  i = dataHistorica.length - 1;
  ejeX = [];
  dataHistorica.forEach((element) => {
    if (dataHistorica[i].date.includes(anio)) {
      if (dataHistorica[i].source == "Blue") {
        dblueUltAnio.push(dataHistorica[i].value_sell);
        ejeX.push(dataHistorica[i].date);
      } else {
        doficialUltAnio.push(dataHistorica[i].value_sell);
      }
    }
    i--;
  });
  window.myChart.destroy();
  redibujarTabla(dblueUltAnio, doficialUltAnio, ejeX);
});

// Dibujar historico:
historico.addEventListener("click", function historico() {
  i = dataHistorica.length - 1;
  ejeX = [];
  dataHistorica.forEach((element) => {
    if (dataHistorica[i].source == "Blue") {
      dblueHistorico.push(dataHistorica[i].value_sell);
      ejeX.push(dataHistorica[i].date);
    } else {
      doficialHistorico.push(dataHistorica[i].value_sell);
    }
    i--;
  });
  ejeX.pop();
  window.myChart.destroy();
  redibujarTabla(dblueHistorico, doficialHistorico, ejeX);
});

function redibujarTabla(arrayDolarBlue, arrayDolarOficial, tiempo) {
  var ctx = document.getElementById("myChart");
  window.myChart = new Chart(ctx, {
    type: "line",
    options: {
      maintainAspectRatio: false,
    },
    data: {
      labels: tiempo,
      datasets: [
        {
          data: arrayDolarBlue,
          label: "Blue",
          borderColor: "#3e95cd",
          fill: false,
          borderWidth: 1,
          pointStyle: "dash",
          pointRadius: 1,
        },
        {
          data: arrayDolarOficial,
          label: "Oficial",
          borderColor: "#ffffff",
          fill: false,
          borderWidth: 1,
          pointStyle: "dash",
          pointRadius: 1,
        },
      ],
    },
  });
}
