// TAREA
// FILTRAR LOS PRODUCTOS

// BUSCADOR
// escuchamos cada tipeo que se hace
document.addEventListener("keyup", busca =>{

    // si lo ingresado coincide con 
    // .target Devuelve el elemento del DOM que disparó el evento (inicialmente). Osea, lo tipeado
    if(busca.target.matches("#buscador")){
        // se seleccionan todos los cards, y en cada uno se ejecuta la funcion cardProducto
        document.querySelectorAll(".card").forEach(cardProducto =>{
            // card producto verifica si en cada card contiene un texto que coincida con lo ingresado
            cardProducto.textContent.toLowerCase().includes(busca.target.value.toLowerCase())
            // si coincide, le remueve la clase que lo esconde
            ?cardProducto.classList.remove("filtro__sacar")
            // si no coincide le agrega la clase que lo esconde
            :cardProducto.classList.add("filtro__sacar")
        })
    }
})



// CREAR FUNCIONALIDAD DE CARDS DINÁMICAS CONSUMIENDO UNA BASE DE DATOS
// Seleccionamos el section items, donde van a ir las tarjetas, y lo guardamos en una variable
const items = document.getElementById("items")

// Conseguir el contenido de template(la guia de la card, porque template no se ve en la página)
const templateCard = document.getElementById("template__card").content
const fragmento = document.createDocumentFragment()


// CONSUMIR  API.JSON
// se ejecuta cuando el documento es completamente cargado. Cuando todo el HTML esté cargado y parseado, cargar los datos del api.json
document.addEventListener("DOMContentLoaded", () =>
    fetchData()
)

// escucha cuando clickeamos en un elemento de la section de cards
items.addEventListener("click", (elementoClickeado) => {
    addCarrito(elementoClickeado)
})

// Usar fetch para conseguir los datos del archivo api.json
        // async y await para esperar a que se lea la informacion de la base de datos, y guardarla
const fetchData = async () => {
    try {
        const respuesta = await fetch("../js/api.json")
        const data = await respuesta.json()

        printCards(data)

    } catch (error) {
        // si da error, registrarlo en la consola
        console.log("Algo salió mal: ", error)
    }
}

// mostramos la informacion

const printCards = (data) => {
    
    data.forEach(producto => {
        // Modificamos el elemento html
        templateCard.querySelector(".card__img__img").setAttribute("src", producto.foto)
        templateCard.querySelector("h3").textContent = producto.nombre
        templateCard.querySelector(".card__txt__p").textContent = producto.precio
        templateCard.querySelector(".card__txt__btn").dataset.id = producto.id
        templateCard.querySelector(".card__txt__liga").textContent = producto.liga
        templateCard.querySelector(".card__txt__stock").textContent = producto.stock

        const clone = templateCard.cloneNode(true)
        fragmento.appendChild(clone)
    })
    items.appendChild(fragmento)
}

const addCarrito = elementoClickeado => {

    // Si el elemento clickeado contiene la clase card__txt__btn
    if(elementoClickeado.target.classList.contains("card__txt__btn")){
        // Si hago click en el botón, agarra el contenido del elemento padre de su elemento padre. Porque la card es el elemento padre de la parte del texto del elemento btn. Es decir el "abuelo" del boton clickeado. De esta manera selecciona tanto la imagen como el texto de la card(toda la card)
        setCarrito(elementoClickeado.target.parentElement.parentElement)

        redirect()
  
    }

    // Paro el evento de mostrar/seleccionar el elemento con click
    elementoClickeado.stopPropagation()

}


// Captura todo el div enviado por el boton.
const setCarrito = (objeto) => {
    // Muestra el objeto(el div de la clase card) en consola
    console.log(objeto)

    // Generamos el objeto para mandarlo a la página de detalles del producto, donde se van a añadir funcionalidades de talle y cantidad del producto mandado
    const productoParaCarrito = {
        // Selecciono los elementos dentro de la card mediante sus clases/id
        id: objeto.querySelector(".card__txt__btn").dataset.id,
        foto: objeto.querySelector(".card__img__img").src,
        nombre: objeto.querySelector(".card__txt__h3").innerText,
        liga: objeto.querySelector(".txt__liga").innerText,
        stock: objeto.querySelector(".card__txt__stock").innerText,      

    }
    console.log(productoParaCarrito)

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// AHORA SE DEBE DE REDIRECCIONAR A LA PAGINA PRODUCTO LLEVANDO LOS DATOS DE setCarrito
function redirect () {window.location.href="http://127.0.0.1:5500/paginas/productos/producto.html"}
console.log(window.location.href)
