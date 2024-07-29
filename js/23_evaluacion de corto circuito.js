// Evaluacion de corto circuito

const auth = true
const auth2 = "false"
const auth3 = false

auth2 && console.log("Usuario autenticado") //Solo No se muestra si el false
//y hace solo la accion que se le asigne, en este caso muestra el console.log..
// Basicamente revisa una condicion y ejecuta un codigo.