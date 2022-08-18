// Obtenemos la información del producto de la página shop

// Almacena un objeto
let JSONobtenido = JSON.parse(localStorage.getItem("carritoJSON"))
// Verificar que tiene el JSONobtenido --> console.log(typeof(JSONobtenido))

arrayProducto = []
arrayProducto.push(JSONobtenido)
console.log(arrayProducto[0])
console.log(arrayProducto.lenght)

// Seleccionamos donde va a ir el contenido
const mainProduct = document.getElementById("main__product")


// Creamos una constante para usar el template de HTML
const templateProduct = document.getElementById("template__product").content;
// Creamos el fragmento para 
const fragmentoProducto = document.createDocumentFragment()









/*
arrayProducto.forEach(elemento => {
    templateProduct.querySelector(".img__poduct").setAttribute("src",elemento.foto)
    templateProduct.querySelector("#nombre") = elemento.nombre
    templateProduct.querySelector("#precio") = elemento.precio


    const clone = templateProduct.cloneNode(true)
    fragmentoProducto.appendChild(clone)
});

*/




// Recorremos cada item del objeto
/*
for(const propiedad in JSONobtenido){
    console.log(JSONobtenido[propiedad])
}
console.log(JSONobtenido)*/