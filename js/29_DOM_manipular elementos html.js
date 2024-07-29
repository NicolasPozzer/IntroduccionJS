// ----- 29_DOM_manipular elementos html con js ------

const heading = document.querySelector('.heading')
const arreglo = document.querySelectorAll('.navegacion a')

// Manipulando contenido del h1 de heading
heading.textContent = "Nuevo contenido del h1!!"

console.log(heading)

// Remover atributos de un elemento html: las clases, id, etc
//ej:
//heading.removeAttribute("class")



// --- seleccionando por medio de id con # ---
const select = document.querySelector("#nombre")

// cambiando el valor seleccionado
select.value = "NicolasPozzer"



// ---- Cambiar valores del arreglo de html ---- 

// 2 formas de cambiar los valores de un arreglo con otra lista

const lista = ["primero","segundo","3ro"]

// cambiar todos con for comun
for(let i = 0; i < arreglo.length; i++){
    if(i < lista.length){
        arreglo[i].textContent = lista[i]
    }
}

// Cambiar todos con forEach
// arreglo.forEach((arreglo, index) => {
//     if (index < lista.length) {
//         arreglo.textContent = lista[index];
//     }
// });