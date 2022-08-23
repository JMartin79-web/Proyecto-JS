let producto = JSON.parse(localStorage.getItem("obtenidoJSON"))
console.log(producto)

arrayCarrito = []
arrayCarrito.push(producto)
// Obtener el lugar donde cada product va a ser insertado
const carritoBody = document.getElementById("carrito__body")

// Crear constante para template y fragment
const carritoTemplate = document.getElementById("template__carrito__body").content
const carritoFragmetn = document.createDocumentFragment()

//

arrayCarrito.forEach( (element) => {
    
    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("src", element.foto)
    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("alt", "Img del producto")
    carritoTemplate.querySelector(".carrito__body__div__row3 p").innerText = element.nombre
    carritoTemplate.querySelector(".carrito__body__div__row4 p").innerText = element.talle.toUpperCase()
    carritoTemplate.querySelector(".carrito__body__div__row5 p").innerText = element.cantidad
    carritoTemplate.querySelector(".carrito__body__div__row6 p").innerText = element.precio

    const clone = carritoTemplate.cloneNode(true)
    carritoFragmetn.appendChild(clone)
});

carritoBody.appendChild(carritoFragmetn)