// Tipos de datos

// String
let cliente = "samu"
console.log(typeof cliente)

// Number: no hay como tal un flotante sino todos son numbers
const n1 = 14
const n2 = 4.65
//console.log(n1 + n2)
console.log(typeof n2)

//BigInt: numero grande
const numeroGrande = BigInt(234982342842834723894234723985255)
// console.log(numeroGrande)
console.log(typeof numeroGrande)

// Boolean
const prendido = true
const apagado = false
console.log(typeof apagado)

// Null
const valorNulo = null
console.log(valorNulo)

// valor Undefined
let precio
let precio2 = undefined
console.log(typeof precio)
console.log(typeof precio2)

// Symbol
//Su caracteristica es que nunca hay 2 symbols iguales 
// por eso da falso el resultado, siempre son diferentes
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol == segundoSymbol)

// Dato: saber el tipo de dato de una variable con typeof
//console.log(typeof cliente)

