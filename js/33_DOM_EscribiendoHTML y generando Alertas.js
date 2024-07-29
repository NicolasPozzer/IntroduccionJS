// ------- 33_DOM_EscribiendoHTML y Generando Alertas -------


const formulario = document.querySelector("#formulario")

// Validando un formulario
formulario.addEventListener('submit', evt => {

    // obtengo el valor de nombre y password
    const nombre = document.querySelector("#nombre").value
    const password = document.querySelector("#password").value

    


    // Escribir html de alerta
    // 1- se crea el div
    // 2- se le asigna el contenido
    // 3- y se le asignan las clases
    const alerta = document.createElement('DIV')
    //clases para el contenido html de la alerta
    alerta.classList.add('alerta', 'text-withe', 'uppercase',
    'text-sm', 'text-center', 'p-2', 'font-black')


    // Prevenir que se llame mas de una vez a la alerta
    const prevenirAlerta = document.querySelector('.alerta')
    if(prevenirAlerta){
        prevenirAlerta.remove()
    }


    
    if(nombre !== "" && password !== ""){
        alerta.textContent = 'Formulario enviado Correctamente!'
        alerta.classList.add('bg-green-500')
    }else{
        alerta.textContent = 'Error falta completar el formulario...'
        alerta.classList.add('bg-red-500')
        evt.preventDefault()
    }
    //Esto solo muestra por consola, si queremos agregar la alerta al html hay q utilizar appendChild
    console.log(alerta)

    // Renderizar/Agregar contenido al html con appendChild, esto agrega como hijo del formulario
    formulario.appendChild(alerta)

    // Despues de 3 segundos eliminar alerta del codigo HTML con remove
    setTimeout(() => {
        alerta.remove()
    }, 2000);
})