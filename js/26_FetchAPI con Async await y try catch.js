//--------- 26_FetchAPI con Async / Await ---------

const url = 'https://jsonplaceholder.typicode.com/comments'


// ---- Pasos a seguir de fetch Async / Await ----
// 1- se crea con una funcion asincrona = async y se utiliza await por .then
// 2- se obtiene la respuesta como json con su await
// 3- se obtiene o manipula la data con su await
// 4- con catch (error) podemos obtener los errores, pero este se muestra
//solo cuando hay problemas de red o servidor, no por error de tipeo de url





const consultarAPI = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error("Error de tipeo o de servidor..")
        }
        const data = await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI(url)