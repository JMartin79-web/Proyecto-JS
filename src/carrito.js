arrayCarrito = []


// RECORREMOS EL STORAGE
for(let i = 0; i< localStorage.length; i++){
    let key = localStorage.key(i)
    clave = key
    console.log(clave)
    let producto = JSON.parse(localStorage.getItem(key))
    
    // Si la clave(es decir el nombre de donde se guardaron los datos del producto en el LocalStorage), es "productoJSON", significa que es un local del la página shop, y por ende no tiene que estar en el carrito(porque su proposito es recopilar la información para mandarlo a la pagina producto). Por eso, solo se pushean al array los que no tienen ese valor en la clave. 
    if(clave !== "productoJSON" && "diaLimite"){arrayCarrito.push(producto)}
    
}

// Obtener el lugar donde cada product va a ser insertado
const carritoBody = document.getElementById("carrito__body")

// Crear constante para template y fragment
const carritoTemplate = document.getElementById("template__carrito__body").content
const carritoFragmetn = document.createDocumentFragment()

// Por cada producto, colocamos su info dentro del carrito
arrayCarrito.forEach((producto) => {

    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("src", producto.foto)
    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("alt", "Img del producto")
    carritoTemplate.querySelector(".carrito__body__div__row3 p").innerText = producto.nombre
    carritoTemplate.querySelector(".carrito__body__div__row4 p").innerText = producto.talle.toUpperCase()
    carritoTemplate.querySelector(".carrito__body__div__row5 p").innerText = producto.cantidad
    carritoTemplate.querySelector(".carrito__body__div__row6 p").innerText = producto.precio
    
    const clone = carritoTemplate.cloneNode(true)
    carritoFragmetn.appendChild(clone)
});

carritoBody.appendChild(carritoFragmetn)

// Eliminar producto

const deleteBtn = document.querySelectorAll(".btn-carrito-delete")
console.log(deleteBtn)
deleteBtn.addEventListener("click", () => {
    console.log("hola")
})


// ALGORITMO PARA FINALIZAR LA COMRPA
const envioCarrito =  document.getElementById("envio-num")
const cuponCarrito =  document.getElementById("cupon-num")
const totalCarrito =  document.getElementById("total-num")

// Pusheamos los precios a un array
const sumarCarrito = []
function conseguirPrecios(){document.querySelectorAll(".body-precio").forEach( (precio) => {sumarCarrito.push(precio.innerHTML)})}
setTimeout( (conseguirPrecios()), 0 )








