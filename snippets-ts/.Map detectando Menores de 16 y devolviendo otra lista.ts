type Alumno = {
    id: number,
    name: string,
    edad: number
}

let listaAlumnos: Alumno[];

listaAlumnos = [{id: 1,name: "Nicolas", edad: 16},
                {id: 2, name: 'Daniel', edad: 14},
                {id: 3, name: 'Romina', edad: 13},
                {id: 4, name: 'Juan', edad: 22},
                {id: 5, name: 'Adri', edad: 10},
                {id: 6, name: 'Maria', edad: 9},
                {id: 7, name: 'Manuel', edad: 7},
                ];

// Imprimir los menores de 16 con su nombre y edad

let listaMenores: Alumno[] = [];

//Sin function
listaAlumnos.map((item) => {
    if(item.edad < 16){
       listaMenores = [...listaMenores, item]
    }
})

//console.log(listaMenores)

//=======================================================

// LO MISMO Pero: function con parametro

const menorA = 16;
let listaMenoresWithParam: Alumno[] = [];

function detectMenores(edad: number){
    for(let item of listaAlumnos){
        if(item.edad < menorA){
            listaMenoresWithParam = [...listaMenoresWithParam, item]
        }else{
            console.log(`${item.name} es mayor de edad! Tiene: ${item.edad}`)
        }
    }
}

detectMenores(menorA);

console.log(listaMenoresWithParam)

/*
Resultado:

    "Nicolas es mayor de edad! Tiene: 16" 
    "Juan es mayor de edad! Tiene: 22" 
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
    }, {
    "id": 6,
    "name": "Maria",
    "edad": 9
    }, {
    "id": 7,
    "name": "Manuel",
    "edad": 7
    }] 
*/