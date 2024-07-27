// Arrays

// Se puede almacenar cualquier tipo,
//pero siempre respetar el tipo para un arreglo
//y ver que sea igual
const test = [20,"Hola",40,true]

// Acceder a un indice
console.log(test[1])


// Otro arreglo
const tecnologias = ["HTML","CSS","javaScript","React.js","Node.js"]

// Modificar un elemento del arreglo
tecnologias[4] = "Next.js"



//  --- fomas de agregar elementos en el arreglo ---
// Agregar un nuevo elemento al arreglo
tecnologias[5] = "new-element.js"

// Otra forma de agregar usando metodos de arreglos de .js
//esta manera es mejor ya que agrega a lo ultimo sin especificar el indice.
tecnologias.push("text.js") //No sirve porque muta en react

// Otra forma de agregar que es mas eficaz y es con una copia del arreglo Ej:
const newTecnologias = ["primerito.ts", ...tecnologias, "nuevo.me"]


console.table(newTecnologias)





