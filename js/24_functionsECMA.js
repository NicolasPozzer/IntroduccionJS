//----------- Forma de exportar funciones -----------

export function sumar(n1,n2){
    return n1 + n2
}

export function restar(n1,n2){
    return n1 - n2
}




// Otra forma de hacerlo:

function sumar2(n1,n2){
    return n1 + n2
}

function restar2(n1,n2){
    return n1 - n2
}

export {
    sumar2,
    restar2
}


//----------- Export default -----------
export default function multiplicar(n1,n2){
    return n1 * n2
}


//----------- Export para arrow functions -----------

export const division = (n1, n2) => {
    return n1 / n2
}

//arrow en una linea, no lleva return

export const division2 = (n1, n2) => n1 /n2