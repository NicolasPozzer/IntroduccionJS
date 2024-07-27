// Objetos

const producto = {
    nombre : "Mouse",
    precio : 300,
    disponible : false
}

console.log(producto)
console.log("El tipo de dato es -> ",typeof producto)

//Mostrar objeto con forma de tabla!
console.table(producto)

//forma vieja de mostrar atributos de un objeto
//console.log(producto.nombre)
//console.log(producto.precio)


// NUEVA FORMA CON DESTRUCTURING
// Destructuring: un metodo de asignar variables para los atributos
//de un objeto sin utilizar el Ej: nombre = objeto.nombre
// Forma de hacerlo:
const {nombre, precio, disponible} = producto //Todo asignado en una linea

// mostrar
console.log(nombre)
console.log(precio)
console.log(disponible)


// Metodo Object Literal Enhacement:
//asigna variables externas para atributos de un objeto
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}