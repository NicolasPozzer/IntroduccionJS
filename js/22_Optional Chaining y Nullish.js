

// Optional Chaining (?)

// Se utiliza para agregar ? si un elemento existe y que el codigo se siga
//utilizando como un try catch sino lo de abajo del codigo no se ejecuta..
// Ej.

const alumno ={
    nombre: "pedro",
    clase: "programacion 1",
    aprobado: true
}

console.log(alumno.examenes?.examen1) //con ? preguntamos si existe


console.log("Despues de alumno")






// Nullish coalescing operator (??)

// Este basicamente retorna el valor de su derecha cuando el valor propio es null,
//o ondefined. Ej:
const pagina = null ?? 1 // Esto retorna 1.
const pagina2 = 2 ?? 1 // Esto retorna 2, porque su valor no es nulo.

