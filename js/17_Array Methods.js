// Array Methods

const tecnologias = ["HTML","CSS","javaScript","React.js","Node.js"]
const numeros = [12,20,30]


// -------------- filter --------------

// Filter sirve para sacar un elemento del arreglo o modificar ese solo.
const nuevoArray = tecnologias.filter(function(tech){
    console.log(tech)
})

// Filter con funcion Separada!
const nuevoArray2 = tecnologias.filter(ejemploFilter)

function ejemploFilter(tech2){
    console.log(tech2)
}


// Filter con funcion Separada y con Arrow Function!
//lo cual declaramos antes de llamar
const ejemploFilter3 = (tech3) => {
    console.log(tech3)
}

const nuevoArray3 = tecnologias.filter(ejemploFilter3)


console.log("Test condicional filter:")
// Condicional para Arrays con filter, como es de una SOLA Linea NO necesita function antes de (tech)
const nuevoArray4 = tecnologias.filter((tech4) => tech4 !== "HTML") //Saca html
console.log(nuevoArray4)

// function mas largo pero con filter tambien
const nuevoArray5 = tecnologias.filter((tech5) => { //Trae solo html
    if(tech5 === "HTML")
        return tech5
}) 

console.log(nuevoArray5)


// Includes - devuelve true o false, es para saber si el elemento esta en el array, Ej:
const resultadoIncludes = tecnologias.includes("CSS")

console.log(resultadoIncludes)



// ------------- Some --------------
// Devuelve true si al menos un elemento del array cumple la condicion.
const resultadoSome = numeros.some((numero) => numero < 5)
console.log(resultadoSome)

if(resultadoSome){//cuando el condicional solo tiene la variable, significa q espera true o false.
    console.log("Si hay elementos!")
}else{
    console.log("NO hay elementos.")
}


// ------------- find --------------
// Devuelve el primer elemento que cumple una condicion.
const resultadoFind = numeros.find((numero) => numero > 14)
console.log(resultadoFind)


// ------------- Every --------------
// Retorna true o false si todos cumplen la condicion
// Puedes utilizarlo en formularios para saber si todos pagaron una suscrip o algo..
const resultadoEvery = numeros.every((numero) => numero > 5)
console.log(resultadoEvery)



// ------------- Reduce --------------
// Retorna un acumulado del total
// funciona para un carrito de compras donde se le va sumando el precio
//a medida de que sigue agregando productos al carrito.
const resultadoReduce = numeros.reduce((total, numero) => {
    console.log(total)
    console.log(numero)
    
    return total + numero //Esto suma y acumula todo
}, 0)// 0 es el valor inicial

console.log(resultadoReduce)