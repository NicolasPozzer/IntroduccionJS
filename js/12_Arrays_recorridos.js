// Arrays - y Tipos de Recorridos

const tecnologias = ["HTML","CSS","javaScript","React.js","Node.js"]


// El recorrido mas rapido pero menos legible, lenght = longitud
for(let i = 0; i < tecnologias.length; i++){
    if(tecnologias[i] === "React.js"){
        console.log(`Tecnologia encontrada: ${tecnologias[i]}`)
    }
}


// // ForEach
tecnologias.forEach(function(valor, indice, array){
    console.log(valor)
})


// ForEach con arrow method
const funcionRecorrer = (list) => {
    list.forEach((valor, indice, array) => {
        console.log(valor, indice)
    })
}

funcionRecorrer(tecnologias)

// // map - este genera un arreglo nuevo en base a la condicion que le pasamos
const arrayMap = tecnologias.map(function(tech){
    return tech
})



// // for ... of | el que uso en java
for (let tech of tecnologias){
    console.log(tech)
}