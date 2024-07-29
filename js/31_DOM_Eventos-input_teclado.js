// -------- 31_DOM_Eventos2 --------

const inputNombre = document.querySelector("#nombre")

// Borrar valor por defecto del textBox
inputNombre.addEventListener("click", (evt) => {
    inputNombre.value = ""
    console.log(evt.target.value)//muestra el valor al hacer click
})


// 
const inputPassword = document.querySelector("#password")

//con input toma todo lo que ingreso por teclado
inputPassword.addEventListener("input", functionMaskPassword)// hay que declarar la funcion sin PARENTESIS


function functionMaskPassword(){
    inputPassword.type = 'text'

    // Con timeout enmascaramos el texto despues de medio segundo
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000);
}


