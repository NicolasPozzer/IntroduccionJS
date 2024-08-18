// Atributos del objeto Auto
type Autoss = {
    id: number,
    marca: string
}

//Crear lista de Autoss de tipo Auto
let listaAutoss: Auto[] = []

// creacion de autito random
let autito2: Auto
autito1 = {id: 2, marca: "BMW"}


// Lista de Autoss con algunos Autoss
listaAutoss = [{id: 96, marca: "ferrari"}, 
                autito1,
                {id: 4, marca: "Chevrolet"},
                {id: 5, marca: "Audi"},
                {id: 6, marca: "Vowlswagen"},
                {id: 99, marca: "Renault"},
                {id: 3, marca: "Toyota"}]



//Funcion a implementar

    listaAutoss.map((item) => (
        item.marca === "Audi"? (
            console.log("Audi encontrado!!! -> ",item)
        ):(
            console.log("no es audi"))
    ))

//============================================
//              DEVUELVE:
//============================================

/*
    [LOG]: "no es audi" 
    [LOG]: "no es audi" 
    [LOG]: "no es audi" 
    [LOG]: "Audi encontrado!!! -> ",  {
    "id": 5,
    "marca": "Audi"
    } 
    [LOG]: "no es audi" 
    [LOG]: "no es audi" 
    [LOG]: "no es audi" 
*/
