// ---- 30_DOM_Eventos-Click ----

const heading = document.querySelector(".heading")
const navegacion = document.querySelectorAll(".navegacion")

let clic = 0
const defaultHeading = heading.textContent

// Cambiando el titulo con click
heading.addEventListener("click", () => {
    if(clic == 0){
        heading.textContent = "cambio el titulo"
        clic = 1
    }else{
        heading.textContent = defaultHeading
        clic = 0
    }
})


// Eventos para un array con forEach
navegacion.forEach( enlace =>{
    enlace.addEventListener("click", (evento) =>{
        evento.preventDefault()// Con esta linea omitimos las funciones predeterminadas
        //de javaScript como por ejemplo que al precionar un enlace abra otra pagina etc..
        //esto sirve para a la hora de mandar un formulario se ejecute preventDefault al
        //precionar boton de aceptar porque faltan campos por completar, eso seria un ej.!
        
        console.log(evento.target)// Con "target" vemos informacion de a que le hicimos click
        evento.target.textContent = "diste click aca!"
    })
})