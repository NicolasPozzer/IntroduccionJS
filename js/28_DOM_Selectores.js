// ------28_DOM_Selectores------
// Sirve para seleccionar elementos del HTML

// querySelector trae solo un elemento
const heading = document.querySelector(".heading")
const heading2 = document.getElementById("titulo")


console.log(heading)
// Funciones para el selector
// ver el tagname, osea si es h1,h2,p,etc del html.
console.log(heading.tagName)// devuelve: h1
console.log(heading.textContent)// devuelve: el contenido del h1
console.log(heading.classList) // para ver las clases que tiene aplicado el elemento
console.log(heading.id)// devuelve el id del elemento




// --- querySelectorAll ---
//selecciona todos los elementos de un contenido, se pone acompañado de su etiqueta
//en este ejemplo es: la "a" va porque la etiqueta de su contenido es <a>
//Ejemplo:
/* 
<a href="#">Enlace 1</a>
<a href="#">Enlace 2</a>
<a href="#">Enlace 3</a>
<a href="#">Enlace 4</a> 
*/

const all = document.querySelectorAll('.navegacion a')
console.log(all)