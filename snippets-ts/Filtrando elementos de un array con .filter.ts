// Atributos del objeto Auto
type Auto = {
    id: number,
    marca: string
}

//Crear lista de autos de tipo Auto
let listaAutos: Auto[] = []

// Lista de autos con algunos autos
listaAutos = [{id: 96, marca: "ferrari"},
                {id: 4, marca: "Chevrolet"},
                {id: 5, marca: "Chevrolet"},
                {id: 6, marca: "Vowlswagen"},
                {id: 99, marca: "Renault"},
                {id: 3, marca: "Chevrolet"}]


//============================================
//Funcion para buscar un elemento de una lista
//============================================

// Con "!" -> le aclaramos que no va a devolver undefined nunca
const buscandoChevrolets: Auto[] = listaAutos.filter((item) => item.marca === 'Chevrolet')!;


// creacion de autito random
let autito1: Auto
autito1 = {id: 2, marca: "BMW"}

// Con arrow function
const addItem3 = (item: Auto) => {
    listaAutos = [item, ...listaAutos]
}

function addItem2(item: Auto){
    listaAutos = [...listaAutos, item]
}

addItem2(autito1)

console.log(buscandoChevrolets)

//============================================
//              DEVUELVE:
//============================================

/*
    [{
    "id": 4,
    "marca": "Chevrolet"
    }, {
    "id": 5,
    "marca": "Chevrolet"
    }, {
    "id": 3,
    "marca": "Chevrolet"
    }] 
*/