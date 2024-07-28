// Funciones que retornan valores:


const sumar = function(n1, n2){
    return n1 + n2
}

// Esto permite sacar el valor del return de la funcion y reutilizarlo en otro lado.
const resultado = sumar(10,10)
console.log(resultado)



// Arrow Funcitions
// Parra arrow functions no necesita el return, pero solo para los arrow
//que son de UNA sola Linea.
const suma2 = (n1 = 0,n2 = 0) => n1 + n2


console.log(suma2(1,5))