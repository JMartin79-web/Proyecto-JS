const arrayCarrito = []
// RECORREMOS EL STORAGE
for(let i = 0; i< localStorage.length; i++){
    let key = localStorage.key(i)
    clave = key
    console.log(clave)

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


////////////////////////////////////////////////////////////////////////////////


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

        
////////////////////////////////////////////////////////////////////////////////

// ALGORITMO FORMULARIO

// Seleccionamos botones
const btnFinalizarPulsado = document.getElementById("finalizar-compraBtn") // Fin carrito, que manda al formulario
const btnFin = document.getElementById("fin") // Fin formulario

// Seleccionamos main del form
const mainForm = document.getElementById("main-form")

// seleccionamos form
const formulario = document.getElementById("compra")
const inputs = document.querySelectorAll("#compra input")


// ALGORITMO DE VALIDACIÓN DEL FORMULARIO

// valida caracteres
const caracteres = {
    // Para validar lo ingresado por el usuario
	nombre: /[a-zA-Z\s?]+[a-zA-Z]+/,
	telefono: /^\d{5,20}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    dni: /[0-9_.+-\s]+/,
    calle:/[a-zA-Z0-9_.+-]+\s?[a-zA-Z0-9_.+-]/,
    ciudad:/[a-zA-Z0-9_.+-]+\s?[a-zA-Z0-9_.+-]/,
    cp:/[0-9_.+-\s]+/,
    provincia:/[a-zA-Z0-9_.+-\s]+/,
}
const campos = {
    nombre: false,
    apellido: false,
    telefono: false,
    mail: false,
    dni: false,
    calle: false,
    ciudad: false,
    cp: false,
    provincia: false
}

// Funcion para activar botón, una vez esté todo validado
function activarBtn(){
    if (campos.apellido && campos.calle && campos.ciudad && campos.cp && campos.dni && campos.mail && campos.nombre && campos.provincia && campos.telefono){btnFin.removeAttribute("disabled")}
}

// Funcion para validar el input
// Caracter es la key de "caracteres" que vamos a usar para validar los caracteres ingresados
// input es el input donde estamos validando
// campo es como se llama el input(cuál es)
// tambien se ejecuta activarBtn, para que si lo ingresado valida el ultimo input necesario, se active el boton
const validarCampo = (caracter, input, campo) => {
    if (caracter.test(input.value))
    {document.querySelector(`.${campo}-invalido`).innerText = "";campos[campo] = true;activarBtn()}
    else{document.querySelector(`.${campo}-invalido`).innerText = `${campo} inválido`;campos[campo] = false;}
}

const validarInput = (validar) =>{
    switch (validar.target.name) {
        case "nombre": validarCampo(caracteres.nombre, validar.target, "nombre"); break;
        case "apellido": validarCampo(caracteres.nombre, validar.target, "apellido"); break;
        case "telefono": validarCampo(caracteres.telefono, validar.target, "telefono"); break;  
        case "mail": validarCampo(caracteres.mail, validar.target, "mail"); break;
        case "dni": validarCampo(caracteres.dni, validar.target, "dni"); break;
        case "calle": validarCampo(caracteres.calle, validar.target, "calle"); break;            
        case "ciudad": validarCampo(caracteres.ciudad, validar.target, "ciudad"); break;
        case "cp": validarCampo(caracteres.cp, validar.target, "cp"); break;
        case "provincia": validarCampo(caracteres.provincia, validar.target, "provincia"); break;            
        default:break;
    }
    
}
// Cuando se escribe o se clickea afuera del input, se ejecuta validarInput
inputs.forEach( (input) => {
    input.addEventListener("keyup", validarInput)
    input.addEventListener("blur", validarInput)
})


////////////////////////////////////////////////////////////////////////////////


// ALGORITMO PARA FINALIZAR LA COMRPA

// Ejecutamos el total
ejecutarTotal()

// Funcion de cambiar texto y color cuando se apreta un boton
btnPulsado = (elemento, textoNuevo) => {
    elemento.setAttribute("id", "btn-clicked"); elemento.innerText = textoNuevo;
}

// Evento de finalizar compra. Para activar el formulario
btnFinalizarPulsado.addEventListener("click", () => {
    btnPulsado(document.getElementById("finalizar-compraBtn"),"LLENÁ EL FORMULARIO")
    mainForm.classList.remove("filtro__sacar")
    Toastify({
        text: "Llená el formulario para terminar tu compra \n Estás a un paso!",
        gravity: "bottom",
        position: "center",
        duration: 5000,
    }).showToast();
})

// Finalizar compra con los datos del formulario varificados

formulario.addEventListener("submit", (accion) => { 
    accion.preventDefault() 
    btnFin.addEventListener("click", () => {
        btnPulsado(document.getElementById("fin"),"FINALIZASTE TU COMPRA!")})
        Toastify({
            text: "Felicidades! Finalizaste tu compra",
            gravity: "bottom",
            position: "center",
            duration: 5000,
        }).showToast();
})
