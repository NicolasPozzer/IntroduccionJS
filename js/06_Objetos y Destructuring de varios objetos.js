// Objetos - Destructuring de dos o mas objetos

const producto = {
    nombre: "Celular",
    precio: 740,
    disponible: false,
    direccion: {
        calle: "Mori 450"
    }
}

const cliente = {
    nombre : "Nicolas",
    premium: true,
    direccion: {
        calle: "Rivadavia 450"
    }
}

// Destructuring

// Forma de hacerlo
const { nombre, direccion: {calle: calleProducto} } = producto

// Pero si queremos hacer otro destructuring y el atributo del cliente tambien se llama
//nombre, entonces le asignamos otro con nombre: nombreCliente y listo.
// Si hay objeto direccion dentro de un obj, se lo asigna con {} Ej: direccion: {atributos}
const { nombre: nombreCliente, direccion: {calle} } = cliente

console.log(nombre)
console.log(nombreCliente)


console.table(cliente)