const arrayCarrito = []
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
    carritoTemplate.querySelector(".carrito__body__div__row1 span").setAttribute("id", producto.id)
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




////////////////////////////////////////////////////////////////////////////////

// CREAMOS VARIABLES PARA EL CUPON, ENVIO Y TOTAL
// Conseguir el precio del envio y cupon de descuento
let envioCarrito =  +document.getElementById("envio-num").innerText
let cuponCarrito =  0
// Conseguimos el total del carrito
let totalCarrito = 0;
precioMultiplicado.forEach( (p) => { totalCarrito += p} )
// Funcion que consigue los datos y los suma
function ejecutarTotal(){
    document.getElementById("total-num").innerText = totalCarrito + (envioCarrito) + (cuponCarrito)
}
////////////////////////////////////////////////////////////////////////////////



// ALGORITMO DE AGREGAR CUPÓN
const cuponIngresado = document.getElementById("agregar_cupon")

// Creamos array de descuentos
const descuentos = [{"10off" : 10},{"20off" : 20},{"30off" : 30},{"50off" : 50}]

// Escuchamos cuando se ingresa un cupón
cuponIngresado.addEventListener( "click", () => {
    // Guardamos el valor ingresado por el usuario en la variable cupon
    const cupon = document.getElementById("codigo-cupon").value
    
    // Recorremos array descuentos para buscar coincidencias con lo ingresado
    for (const objeto of descuentos) {
        
        // Si la key de algun objeto concuerda con lo ingresado
        if(Object.keys(objeto) == cupon){
        // Agarramos el valor de la key
        const valor = (objeto[Object.keys(objeto)])
        // Conseguimos el subtotal
        let subTotal = 0;
        precioMultiplicado.forEach( (p) => { subTotal += p} )
        // Calculamos la cantidad que vale el cupón
        const calculoCupon = -(subTotal * (`${0}.${valor}`))
        console.log(calculoCupon)

        // Lo ingresamos en el DOM
        document.getElementById("cupon-num").innerText = calculoCupon
        cuponCarrito = calculoCupon
        ejecutarTotal()
        // Avisamos al usuario mediante un toast
        Toastify({
            text: "El cupón se ingresó con éxito",
            gravity: "bottom",
            position: "center",
            duration: 2000,
        }).showToast();
        // Bloqueamos el ingreso de nuevos cupones
        document.getElementById("codigo-cupon").setAttribute("disabled", "")
        }
        
    }

    // Si no es válido, también se avisa
    if((cupon !== "10off") && (cupon !== "20off") && (cupon !== "30off") && (cupon !== "50off")){
        Toastify({
            text: "El cupón ingresado no es válido",
            gravity: "bottom",
            position: "right",
            duration: 2000,
        }).showToast();
    }
   
})


// ALGORITMO PARA FINALIZAR LA COMRPA

// Ejecutamos el total
ejecutarTotal()

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
        // obtenemos id
        let eliminarId = (btn.id)
        // obtenemos talle
        let padre = (btn.parentElement.parentElement)
        console.log(padre.childNodes[7].innerText.toLowerCase())
        let eliminarTalle = padre.childNodes[7].innerText.toLowerCase()

        // Vamos al storage y lo eliminamos
        localStorage.removeItem(`obtenidoJSON${eliminarId}${eliminarTalle}`)
        location.reload()
    })
}

        