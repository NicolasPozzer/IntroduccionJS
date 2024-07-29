// ECMA Script - Siempre necesita el type=module en la declaracion del script
//en el HTML, para que se puedan importar funciones.

import multiplicar, {sumar as sumarLaSuma, restar,division} from './24_functionsECMA.js'
// con "as" se puede renombrar la funcion como el python si hay nombres iguales.
// multiplicar es un export default, lo cual no va dentro de las "{}"

const resultado = sumarLaSuma(10,20)
const resultado2 = restar(10,20)
const resultado3 = multiplicar(10,20)
const resultado4 = division(10,20)

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)