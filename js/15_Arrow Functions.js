// Funciones - Arrow Functions


// Es igual que el Functions_Expressions. pero con =>
const suma = (n1 = 0,n2 = 0) => {
    console.log(n1 + n2)
}
suma(1,10)


// Tambien la cualidad de esta es que permite ejecutar una 
//funcion corta en una sola linea. Ej:
const suma2 = (n1 = 0,n2 = 0) => console.log(n1 + n2)
suma2(2,10)

