arrayCarrito = []

// RECORREMOS EL STORAGE
for(let i = 0; i< localStorage.length; i++){
    let key = localStorage.key(i)
    clave = key
    console.log(clave)
    //
    
    // Si la clave(es decir el nombre de donde se guardaron los datos del producto en el LocalStorage), es "productoJSON", significa que es un local del la página shop, y por ende no tiene que estar en el carrito(porque su proposito es recopilar la información para mandarlo a la pagina producto). Por eso, solo se pushean al array los que no tienen ese valor en la clave. 
    if((clave !== "productoJSON") && (clave !== "diaLimite") && (clave !== "dark-mode")){
        let producto = JSON.parse(localStorage.getItem(key))
        arrayCarrito.push(producto)
    }
    
}

// Obtener el lugar donde cada product va a ser insertado
const carritoBody = document.getElementById("carrito__body")

// Crear constante para template y fragment
const carritoTemplate = document.getElementById("template__carrito__body").content
const carritoFragmetn = document.createDocumentFragment()

// Crear array para guardar el precio de la cantidad*precio de todos los productos
const precioMultiplicado = []

// Por cada producto, colocamos su info dentro del carrito
arrayCarrito.forEach((producto) => {

    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("src", producto.foto)
    carritoTemplate.querySelector(".carrito__body__div__row2 img").setAttribute("alt", "Img del producto")
    carritoTemplate.querySelector(".carrito__body__div__row3 p").innerText = producto.nombre
    carritoTemplate.querySelector(".carrito__body__div__row4 p").innerText = producto.talle.toUpperCase()
    carritoTemplate.querySelector(".carrito__body__div__row5 p").innerText = producto.cantidad
    carritoTemplate.querySelector(".carrito__body__div__row6 p").innerText = producto.precio

    // Parsear y multiplicar los precios por cantidad de cada producto y guardarlo en un array
    let cantidad = +producto.cantidad
    let precio = +producto.precio
    precioMultiplicado.push(cantidad*precio)

    const clone = carritoTemplate.cloneNode(true)
    carritoFragmetn.appendChild(clone)
});
carritoBody.appendChild(carritoFragmetn)


// ALGORITMO DE AGREGAR CUPÓN



// ALGORITMO PARA FINALIZAR LA COMRPA
// Conseguir el precio del envio y cupon de descuento
const envioCarrito =  +document.getElementById("envio-num").innerText
const cuponCarrito =  +document.getElementById("cupon-num").innerText

let totalCarrito = 0;
precioMultiplicado.forEach( (p) => { totalCarrito += p} )

//console.log(document.getElementById("total-num").innerText)
document.getElementById("total-num").innerText = totalCarrito + (envioCarrito) + (cuponCarrito)

// Evento de finalizar compra
btnFinalizarPulsado = document.getElementById("finalizar-compraBtn")
btnFinalizarPulsado.addEventListener("click", () => {
    btnPulsado = (elemento, textoNuevo) => {
        elemento.setAttribute("id", "btn-clicked"); elemento.innerText = textoNuevo;
        Toastify({
            text: "Felicidades! Finalizaste tu compra",
            gravity: "bottom",
            position: "center",
            duration: 2000,
        }).showToast();
        
    } 
    btnPulsado(document.getElementById("finalizar-compraBtn"),"COMPRA FINALIZADA!")
})


// ELIMINAR PRODUCTO
const deleteBtn = document.querySelectorAll(".btn-carrito-delete")

// como deleteBtn llama a un objeto, no se le puede pasar el addEventListener. Por eso, se hace lo siguiente
for (const btn of deleteBtn) {
    btn.addEventListener("click", () => {
        localStorage.getItem()
    })
}
