// let api = fetch('https://api.bluelytics.com.ar/v2/latest')
//     .then(res => res.json())
//     .then(data => {let valorDBlue = .createObjectURL(data)})  
//     .catch(error => console.log(error))


//     console.log(valorDBlue)


const fiftyh1 = document.getElementById('fiftyh1')
const fiftyFloat = document.getElementById('fiftyFloat')
const pcomprablue = document.getElementById('comprablue')
const pventablue = document.getElementById('ventablue')
const cancion = document.getElementById('cancion')

const cancionesFifty =[
'«In Da Club»' ,'«21 Questions»','«P.I.M.P.»' , '«Many Men (Wish Death)»', "«Patiently Waiting»" , '«What Up Gangsta»' , '«Heat»', "«If I Can't»" , "«Don't Push Me»" , "«Gotta Make It to Heaven»", "«High All the Time»" , "«Blood Hound»" , "«Back Down»" , "«Like My Style»", "«Poor Lil Rich»"
]

const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
      };

let numRandom = generateRandomNumber(0, cancionesFifty.length)
console.log(numRandom)
let cancionRandom = cancionesFifty[numRandom]
console.log(cancionRandom)

cancion.innerHTML = '<i class="fas fa-compact-disc"></i> ' + cancionRandom

async function getDBlue() {
    const bluelyticsAPI = await fetch('https://api.bluelytics.com.ar/v2/latest');
    const data = await bluelyticsAPI.json()
    const dblue = await data.blue;
    const dblueVenta = await dblue.value_sell;
    const decimaldblueVenta = dblueVenta/2 - Math.trunc(dblueVenta/2)
    fiftyh1.innerHTML = Math.trunc(dblueVenta/2);
    fiftyFloat.innerHTML = '.' + decimaldblueVenta*100
    const dblueCompra = await dblue.value_buy;
    pcomprablue.innerHTML = 'Compra: ' + dblueCompra + '$'
    pventablue.innerHTML = 'Venta: ' +'<span>' +  dblueVenta + '</span>' + '$'

}

getDBlue()

