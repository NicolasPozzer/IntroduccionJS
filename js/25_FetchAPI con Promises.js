//--------- 25_FetchAPI con Promises ---------

const url = 'https://jsonplaceholder.typicode.com/commentsdas'



// ---- Pasos a seguir de fetch ----
// 1- se llama a la url
// 2- se obtiene la respuesta como json
// 3- se obtiene o manipula la data
// 4- con .catch() podemos obtener los errores, pero este se muestra
//solo cuando hay problemas de red o servidor, no por error de tipeo de url



// Este llama y 
fetch(url)// .then significa entonces.
    .then((respuesta) => {
        // Buena practica usando if, sino retorno la respuesta sin condicional y throw
        if(respuesta.ok){
            return respuesta.json()
        }
        throw new Error("Hubo un error...")
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

