/* ==================  .find  ==============================================
No necesitas usar una variable intermedia ni un if dentro del find,
ya que find por sí solo devuelve el primer elemento que cumple la condición.
//=========================================================================*/

type Persoona = {
    id: number,
    name: string,
    edad: number
}

let listapersoonas: Persoona[];

listapersoonas = [{id: 1,name: "Mateo", edad: 16},
                {id: 2, name: 'Daniel', edad: 14},
                {id: 3, name: 'Romina', edad: 13},
                {id: 4, name: 'Juan', edad: 22},
                {id: 5, name: 'Adri', edad: 10},
                {id: 6, name: 'Maria', edad: 9},
                {id: 7, name: 'Nicolas', edad: 7},
                ];

// De la lista de persoonas devolver otra lista de persoonas de entre 10 y 15 anios


function buscarAlumno(id: number){
    const alumno = listapersoonas.find((item) => item.id === id)
    return alumno;
}

console.log(buscarAlumno(7))

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