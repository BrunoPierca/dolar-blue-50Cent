const fiftyh1 = document.getElementById("fiftyh1");
const fiftyFloat = document.getElementById("fiftyFloat");
const pcomprablue = document.getElementById("comprablue");
const pventablue = document.getElementById("ventablue");

getDBlue();

async function getDBlue() {
  const bluelyticsAPI = await fetch("https://api.bluelytics.com.ar/v2/latest");
  const data = await bluelyticsAPI.json();
  const dblue = await data.blue;
  const dblueVenta = await dblue.value_sell;
  const decimaldblueVenta = (dblueVenta / 2 - Math.trunc(dblueVenta / 2)) * 100;

  const fiftyAlBlue = Math.trunc(dblueVenta / 2);
  fiftyh1.innerHTML = fiftyAlBlue;
  console.log(fiftyAlBlue);

  const float = decimaldblueVenta.toFixed(0);
  if (float == 0) {
    fiftyFloat.style.display = "none";
  }
  fiftyFloat.innerHTML = "." + float;
  const dblueCompra = await dblue.value_buy;
  pcomprablue.innerHTML = "Compra: $" + dblueCompra;
  pventablue.innerHTML = "Venta: " + "<strong>$" + dblueVenta + "</strong>";

  // Transicion si 0.50USD llega a ser 3 digitos

  if (fiftyAlBlue >= 100 && (fiftyAlBlue != 101 || fiftyAlBlue != 107)) {
    fiftyh1.classList.remove("fiftyh1");
    fiftyh1.classList.add("fiftyh1a100");
  }
  if (fiftyAlBlue == 101) {
    fiftyh1.classList.remove("fiftyh1");
    fiftyh1.classList.add("fiftyh1a101");
  }
  if (fiftyAlBlue == 107) {
    fiftyh1.classList.remove("fiftyh1");
    fiftyh1.classList.add("fiftyh1a107");
  }

  // Setear imagen

  tomarScreen();
}

// Activar decimal
const botonDecimal = document.getElementById("botonDecimal");
botonDecimal.addEventListener("click", function toggleDecimal() {
  if (fiftyFloat.style.display == "none") {
    console.log("desactivar decimal");
    fiftyFloat.style.display = "block";
    botonDecimal.innerHTML = "Desactivar decimal";
    botonDecimal.classList.add("animate__headShake");
    tomarScreen();
  } else {
    console.log("activar decimal");

    fiftyFloat.style.display = "none";
    botonDecimal.innerHTML = "Activar decimal";
    botonDecimal.classList.add("animate__headShake");
    tomarScreen();
  }
  setTimeout(() => {
    botonDecimal.classList.remove("animate__headShake");
  }, 1000);
});

// Ocultar boton de decimal
let fueOcultado = false;

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 670) {
    botonDecimal.classList.add("animate__fadeOutUp");
    botonDecimal.classList.remove("animate__fadeInDown");
    // botonDecimal.style.display = "none";
    fueOcultado = true;
  } else {
    botonDecimal.style.display = "block";
    if (botonDecimal.classList.contains("animate__fadeInDown")) {
      botonDecimal.classList.remove("animate__fadeOutUp");
    } else if (botonDecimal.style.display == "block" && fueOcultado == true) {
      botonDecimal.classList.add("animate__fadeInDown");
      fueOcultado = false;
    }
  }
});

// Fecha

const fecha = new Date();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

// Descargar como imagen

const fiftyjpg = document.getElementById("fiftydiv");
const guardar = document.getElementById("guardar");
const nombreIMG = "Fifty en pesos " + fecha.getDate() + "/" + mes + "/" + anio;

// Dom to image
function tomarScreen(params) {
  domtoimage
    .toPng(fiftyjpg)
    .then(function (dataUrl) {
      let imagenFifty = new Image();
      imagenFifty.src = dataUrl;
      guardar.setAttribute("download", nombreIMG);
      guardar.setAttribute("href", imagenFifty.src);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

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

// ----------------------------------------------------------------------------
// hacer que ultimo mes sean ultimos 31 dias en vez del ultimo mes x ej Octubre
// ----------------------------------------------------------------------------

ultMes.addEventListener("click", function ultimoMes() {
  i = dataHistorica.length - 1;
  ejeX = [];
  dataHistorica.forEach((element) => {
    if (dataHistorica[i].date.includes(anio + "-" + mes)) {
      if (dataHistorica[i].source == "Blue") {
        dblueUltMes.push(dataHistorica[i].value_sell);
        ejeX.push(dataHistorica[i].date);
      } else {
        doficialUltMes.push(dataHistorica[i].value_sell);
      }
    }
    i--;
  });
  // let mesAnterior = mes - 1;
  // i2 = 0;
  // if (ejeX.length < 45) {
  //   dataHistorica.forEach((element) => {
  //     console.log(dataHistorica[i2].date.includes(anio + "-" + mesAnterior));

  //     if (
  //       dataHistorica[i2].date.includes(anio + "-" + mesAnterior) &&
  //       dataHistorica[i2].date.includes(anio + "-" + mes)
  //     ) {
  //       if (dataHistorica[i2].source == "Blue") {
  //         dblueUltMes.push(dataHistorica[i2].value_sell);
  //         ejeX.push(dataHistorica[i2].date);
  //       } else {
  //         doficialUltMes.push(dataHistorica[i2].value_sell);
  //       }
  //     }
  //     i2++;
  //   });
  // }

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
