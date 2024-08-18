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





//=========================================================
//Recorrido con .map complejo y con ternario { IMPORTANTE }
//=========================================================

 // Verificar si el producto ya existe en la orden
 const existingOrderItem = get().order.find(item => item.id === product.id);

 let updatedOrder;
 // en Type script -> let updatedOrder: OrderItem[] = [];

 if (existingOrderItem) {
     // Si el producto ya existe, incrementa la cantidad y el subtotal
     updatedOrder = get().order.map(item =>
         item.id === product.id
             ? ({
                 ...item,
                 quantity: item.quantity + 1,
                 subtotal: item.price * (item.quantity + 1)
                 }
             ):(
                 item
             )
     );
 } else {
     // Si el producto no existe, agrega uno nuevo a la orden
     updatedOrder = [
         ...get().order,
         {
             ...algunosAtributos,
             quantity: 1,
             subtotal: product.price
         }
     ];
 }