//functions_Expressions


// Functions_Expressions
const sumar = function(n1 = 0,n2 = 0){
    console.log(n1 + n2)
}

sumar(10,10)



// Functions_Normal
function suma2(n1 = 0,n2 = 0){
    return n1 + n2
}


// Diferencias: La diferencia es que function normal permite llamar a la
//funcion antes de que fuera creada la funcion, es decir por mas que el
//codigo se ejecute de arriba hacia abajo, la funcion si la llamas arriba
//y abajo la creas igual la llama. Pero esto no pasa con functionExpressions.