// Para cuando deseo cambiar varios objetos que cumplen una condicion

type Carro = {
    marca: string,
    kilometros: number   
}

let listaCarros: Carro[] = []

listaCarros = [{marca: 'ferra', kilometros: 232},
                {marca: 'gdh', kilometros: 14},
                {marca: 'trr', kilometros: 0},
                {marca: 'ggdf', kilometros: 0},]

const incrementando = listaCarros.map((item) => (
    item.kilometros === 0? (
        item.kilometros = 1000 
    ):(
        item.kilometros = 0
    )
))

    console.log(listaCarros)


// MAP SIRVE PARA CAMBIAR VARIOS VALORES DE LOS OBJETOS QUE CUMPLEN UNA 
// CONDICION.
//Resultado de esto:

/* 
    [{
    "marca": "ferra",
    "kilometros": 0
    }, {
    "marca": "gdh",
    "kilometros": 0
    }, {
    "marca": "trr",
    "kilometros": 1000      // Modifica a este porq tenia 0
    }, {
    "marca": "ggdf",
    "kilometros": 1000      // Modifica a este porq tenia 0
    }] 
*/
