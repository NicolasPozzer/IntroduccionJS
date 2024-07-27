// Objetos - Manipulacion

const producto = {
    nombre : "Tablet",
    precio : 350,
    disponible : false
}

// Metodo que congela que no se pueda modificar un objeto
Object.freeze(producto)

// Metodo que permite modificar solo los atributos existentes,
//pero no deja aniadir ni eliminar atributos
Object.seal(producto)


// Setear atributos de un obj
producto.nombre = "Celular"

// Si no existe un atributo se puede añadir
//con esto se puede empezar con un objeto con pocos atributos
producto.imagen = 'imagen.jpg'

// Eliminar atributos/propiedades
delete producto.disponible


console.table(producto)