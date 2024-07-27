// Object Assign 3 formas de hacerlo - Asignacion automatica de atributos de un objeto a otro con: ...producto

const producto = {
    nombre: "Celular",
    precio: 740,
    disponible: false
}

const cliente = {
    nombre : "Nicolas",
    premium: true
}

// Forma 1 de unir objetos dentro
const carrito = {
    cantidad: 1,
    ...producto // Spread Operator
    // Esto toma todos los atributos de el obj producto
    //y los agrega a cliente
}

console.log(carrito)

// Forma 2 de unir objetos dentro (UTILIZAR ESTA)
//Unir producto y cliente en un mismo objeto, se logra rodeando el obj con {}
const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto)

// Forma 3 de unir objetos dentro
// Vamos a utilizar Object.assign
// para hacer lo mismo que lo anterior pero en una sola linea.
const nuevoObjeto2 = Object.assign({producto: {...producto}}, {cliente: {...cliente}})

console.table(nuevoObjeto2)