import Discoteca from "./discoteca.js";
import Rumbero from "./rumbero.js";


let discoteca = new Discoteca()

let rumbero1 = new Rumbero(134, "Luis", 23, "M")
let rumbero2 = new Rumbero(154, "Ana", 22, "F")
let rumbero3 = new Rumbero(324, "José", 18, "M")
let rumbero4 = new Rumbero(286, "Carmen", 19, "F")

discoteca.procesarRumbero(rumbero1)
discoteca.procesarRumbero(rumbero2)
discoteca.procesarRumbero(rumbero3)
discoteca.procesarRumbero(rumbero4)

let salida = document.getElementById("salida")

salida.innerHTML = `

Pago que realiza ${rumbero1.nombre}: ${discoteca.pagoRumbero(rumbero1)}$<br>
Pago que realiza ${rumbero2.nombre}: ${discoteca.pagoRumbero(rumbero2)}$<br>
Pago que realiza ${rumbero3.nombre}: ${discoteca.pagoRumbero(rumbero3)}$<br>
Pago que realiza ${rumbero4.nombre}: ${discoteca.pagoRumbero(rumbero4)}$<br><br>

Total Ganado: ${discoteca.totalganado}$<br><br>

Porcentaje de rumberas mayores de 21 años: ${discoteca.porcentFemeninoMayores()}<br><br>

El sexo que mas asistio a la discoteca fue: ${discoteca.sexomasasistido()}<br>
`