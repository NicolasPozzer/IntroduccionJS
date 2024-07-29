//--------- 27 Medir performance de codigo y gestionar multiples consultas ---------

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'


//  --------- Forma de llamar mas rapido a varias apis ----------
// Se gana muchos milisegundos, UTILIZARLA SI O SI.

const consultarAPI = async () => {
    try {
        // Se obtiene el milisegundo de inicio
        const inicio = performance.now()

        //Consulta
        const [respuesta, respuesta2, respuesta3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

        //Guarda la respuesta del json
        const [data, data2, data3] = await Promise.all([respuesta.json(), respuesta2.json(), respuesta3.json()])
        //Muestra la respuesta
        console.log(data)
        console.log(data2)
        console.log(data3)

        // Se obtiene el milisegundo de fin
        const fin = performance.now()

        // y se restan los dos para comparar el tiempo de respuesta de la api
        console.log(fin - inicio, "milisegundos de respuesta.")
    } catch (error) {
        console.log(error)
    }
}

consultarAPI()