document.getElementById('boton').addEventListener('click', Calcular)




function Calcular(){ 
let mdInversion = parseInt( document.getElementById('mdInversion').value) 
let tdCambio = parseInt( document.getElementById('tdCambio').value)

let  porcentajes = mdInversion * 1.2650;
const gastosNotariales = 1000;
let total = Math.ceil((porcentajes + gastosNotariales + 500));
let rEuros=  (6 * mdInversion) /100;
let rArg= rEuros * tdCambio;


document.getElementById('root').innerHTML += "El total es: " +total+ '<br>'+
 "Renta en Euros: "+rEuros+ '<br>'+"Renta en pesos Arg: "+rArg +'<br>';

}
