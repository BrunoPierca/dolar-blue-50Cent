const fiftyh1 = document.getElementById('fiftyh1')
const fiftyFloat = document.getElementById('fiftyFloat')
const pcomprablue = document.getElementById('comprablue')
const pventablue = document.getElementById('ventablue')

async function getDBlue() {
    const bluelyticsAPI = await fetch('https://api.bluelytics.com.ar/v2/latest');
    const data = await bluelyticsAPI.json()
    const dblue = await data.blue;
    const dblueVenta = await dblue.value_sell;
    const decimaldblueVenta = (dblueVenta/2 - Math.trunc(dblueVenta/2))*100
    fiftyh1.innerHTML = Math.trunc(dblueVenta/2);
    fiftyFloat.innerHTML = '.' + decimaldblueVenta.toFixed(0)
    const dblueCompra = await dblue.value_buy;
    pcomprablue.innerHTML = 'Compra: ' + dblueCompra + '$'
    pventablue.innerHTML = 'Venta: ' +'<span>' +  dblueVenta + '</span>' + '$'

}

getDBlue()
    
    // Cancion Random con link

    const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
          };
    const cancion = document.getElementById('cancion')
    

    //  array de objetos 
    let arrayCanciones = [ ]; 

    let numRandom = generateRandomNumber(0, arrayCanciones.length)

    
    function AgregarCancion(nombre , link , disco) {
        let objCancion = {cancion : nombre, linkyt: link , album: disco};
        arrayCanciones.push(objCancion);
    }

    AgregarCancion('«Poor Lil Rich»' , 'https://www.youtube.com/watch?v=_x1vRIfotcw' , 'Get rich or die tryin´')
    AgregarCancion('«Like My Style»' , 'https://www.youtube.com/watch?v=o3Gm41HKdQA' , 'Get rich or die tryin´')
    AgregarCancion('«In Da Club»' , 'https://www.youtube.com/watch?v=5qm8PH4xAss' , 'Get rich or die tryin´')
    AgregarCancion('«21 Questions»' , 'https://www.youtube.com/watch?v=cDMhlvbOFaM' , 'Get rich or die tryin´')
    AgregarCancion('«P.I.M.P.»' , 'https://www.youtube.com/watch?v=Jy1D6caG8nU' , 'Get rich or die tryin´')
    AgregarCancion('«Many Men (Wish Death)»' , 'https://www.youtube.com/watch?v=5D3crqpClPY' , 'Get rich or die tryin´')
    AgregarCancion('«Patiently Waiting»' , 'https://www.youtube.com/watch?v=GN3ypSLNIDA' , 'Get rich or die tryin´')
    AgregarCancion('«What Up Gangsta»' , 'https://www.youtube.com/watch?v=xIl4ZGd8MPc' , 'Get rich or die tryin´')
    AgregarCancion('«Heat»' , 'https://www.youtube.com/watch?v=LZIc8VSonVY' , 'Get rich or die tryin´')
    AgregarCancion('«If I Can´t»' , 'https://www.youtube.com/watch?v=z5zz7GHU4ec' , 'Get rich or die tryin´')
    AgregarCancion('«Don´t Push Me»' , 'https://www.youtube.com/watch?v=Mj4YJHDpamg' , 'Get rich or die tryin´')
    AgregarCancion('«Gotta Make It to Heaven»' , 'https://www.youtube.com/watch?v=_NNfJfa672I' , 'Get rich or die tryin´')
    AgregarCancion('«High All the Time»' , 'https://www.youtube.com/watch?v=m13_w0h6s4M' , 'Get rich or die tryin´')
    AgregarCancion('«Blood Hound»' , 'https://www.youtube.com/watch?v=5NRy-Xv2yQI' , 'Get rich or die tryin´')
    AgregarCancion('«Back Down»' , 'https://www.youtube.com/watch?v=3Opytt7bblU' , 'Get rich or die tryin´')






    // Cancion random + link
    
    cancion.innerHTML = '<i class="fas fa-compact-disc"></i> '+'<a target="_blank" id="linkCancion" href="'+ arrayCanciones[numRandom].linkyt + '">' + arrayCanciones[numRandom].cancion +  '</a>'
    
    

// Fetch valores historicos

async function getDhistorico() {
    const bluelyticsAPI = await fetch('https://api.bluelytics.com.ar/v2/evolution.json');
    const data = await bluelyticsAPI.json()
    console.log(data[1].source)
    let i = data.length -1
    // let i = 0
    let dblueChart = [ ] ;
    let dblue21 = [];
    let dOficialChart = [ ];
    let doficial21= [];
    let ejeX = [ ];


        data.forEach(element => {
            if (data[i].date.includes("2021" && "2020")) {
                if (data[i].source == 'Blue') {
                    dblue21.push(data[i].value_sell)
                    ejeX.push(data[i].date)

                } else {
                    doficial21.push(data[i].value_sell)
                }
            }
            i--
        });

    // data.forEach(element => {
    //     if (data[i].source == 'Oficial') {
    //         let valorVenta = data[i].value_sell
    //         dOficialChart.push(valorVenta)
    //         ejeX.push(data[i].date)
    //     } else {
    //         let valorVenta = data[i].value_sell
    //         dblueChart.push(valorVenta)
    //     } 
    //     i--
    // });


    var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  options: {
    maintainAspectRatio: false,
},
  data: {
    labels: ejeX,
    datasets: [
      { 
        data: dblue21,
        label: "Blue", borderColor: "#3e95cd",
        fill: false

      },
      { 
        data: doficial21,
        label: "Oficial",
        borderColor: "#ffffff",
        fill: false
      },
    ]
  },
  

});


    // const dblue = await data.blue;
    // const dblueVenta = await dblue.value_sell;
    // const decimaldblueVenta = (dblueVenta/2 - Math.trunc(dblueVenta/2))*100
    // fiftyh1.innerHTML = Math.trunc(dblueVenta/2);
    // fiftyFloat.innerHTML = '.' + decimaldblueVenta.toFixed(0)
    // const dblueCompra = await dblue.value_buy;
    // pcomprablue.innerHTML = 'Compra: ' + dblueCompra + '$'
    // pventablue.innerHTML = 'Venta: ' +'<span>' +  dblueVenta + '</span>' + '$'

}

getDhistorico()


// Grafico con Chart.js

// Our labels along the x-axis
var years = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
var africa = [0,1,0,1,0,0,0,0,0,0,1]
// For drawing the lines


