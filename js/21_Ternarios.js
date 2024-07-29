// Condicionales Ternarios

const auth = true

const saldoBilletera = 1000
const pagar = 1200
const tarjeta = true


// Condicional comun:
if(auth){
    console.log("Estas autenticado")
}else{
    console.log("No estas autenticado")
}


// Condicional Ternario:
//funciona asi:
// Ej.   condicion ? if : else
// condicion ? lo que pasa si se cumple : lo que pasa si no se cumple

auth ? console.log("Estas autenticado") : console.log("No estas autenticado")

// otro ej.
saldoBilletera > pagar ?
    console.log("Tenes plata para pagar") :
    tarjeta ?
        console.log("Puedes pagar con tarjeta") :
        console.log("No puedes pagar con nada")


// Mismo ej. pero con OR
saldoBilletera > pagar || tarjeta ?
    console.log("Tenes plata para pagar") :
    console.log("No puedes pagar con nada")