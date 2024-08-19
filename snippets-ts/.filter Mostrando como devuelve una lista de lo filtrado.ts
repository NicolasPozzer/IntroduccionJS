type Persona = {
    id: number,
    name: string,
    edad: number
}

let listaPersonas: Persona[];

listaPersonas = [{id: 1,name: "Nicolas", edad: 16},
                {id: 2, name: 'Daniel', edad: 14},
                {id: 3, name: 'Romina', edad: 13},
                {id: 4, name: 'Juan', edad: 22},
                {id: 5, name: 'Adri', edad: 10},
                {id: 6, name: 'Maria', edad: 9},
                {id: 7, name: 'Manuel', edad: 7},
                ];

// De la lista de personas devolver otra lista de personas de entre 10 y 15 anios


const lista = listaPersonas.filter((item) => item.edad >= 10 && item.edad <= 15 ?(
                item
            ):(
                ""
            ))

// .filter solo crea una lista y devuelve el resultado con los datos que se decidieron filtrar            
console.log(lista)

/*
Resultado:

[{
    "id": 2,
    "name": "Daniel",
    "edad": 14
    }, {
    "id": 3,
    "name": "Romina",
    "edad": 13
    }, {
    "id": 5,
    "name": "Adri",
    "edad": 10
}] 

*/