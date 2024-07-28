// Function Declaration

const n1 = 5
const n2 = 5

function suma(n1,n2){
    return n1 + n2
}

console.log(suma(n1,n2))


// Suma con parametros por default
function sumawDefault(n1 = 0,n2 = 0){
    return n1 + n2
}

// Aunque se le pase 1 numero el otro toma el valor por dafault
console.log(sumawDefault(n1))