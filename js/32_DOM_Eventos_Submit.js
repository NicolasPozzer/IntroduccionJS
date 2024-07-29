// ---------- 32_DOM_Eventos_Submit.js ----------

const formulario = document.querySelector("#formulario")

// Validando un formulario
formulario.addEventListener('submit', evt => {

    // obtengo el valor de nombre y password
    const nombre = document.querySelector("#nombre").value
    const password = document.querySelector("#password").value

    if(nombre !== "" && password !== ""){
        console.log("Enviando formulario...")
    }else{
        console.log("Error falta completar...")
        evt.preventDefault()
    }
})