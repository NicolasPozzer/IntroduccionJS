// Atributos del objeto Auto
type Cuatri = {
    id: number,
    marca: string
}

//Crear lista de autos de tipo Auto
let listaCuatris: Cuatri[] = []

// Lista de autos con algunos autos
listaCuatris = [{id: 96, marca: "ferrari"},
                {id: 4, marca: "Chevrolet"},
                {id: 5, marca: "Audi"},
                {id: 6, marca: "Vowlswagen"},
                {id: 99, marca: "Renault"},
                {id: 3, marca: "Toyota"}]


//============================================
//Funcion para buscar un elemento de una lista
//============================================

// Con "!" -> le aclaramos que no va a devolver undefined nunca
let encontrando: Cuatri = listaCuatris.find((item) => item.id === 99)!;


// creacion de autito random
let motito1: Cuatri
motito1 = {id: 2, marca: "BMW"}

// Con arrow function
const addItem = (item: Cuatri) => {
    listaCuatris = [item, ...listaCuatris]
}

function addItem4(item: Cuatri){
    listaCuatris = [...listaCuatris, item]
}

addItem2(motito1)
addItem(encontrando)

console.log(listaCuatris)