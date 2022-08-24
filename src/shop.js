// TAREA
// FILTRAR LOS PRODUCTOS



// CREAR FUNCIONALIDAD DE CARDS DINÁMICAS CONSUMIENDO UNA BASE DE DATOS

// Primero que nada definimos el array donde se va a guardar el resultado de la acción del usuario( Es decir, cuando complete la acción final del boton ver mas)
const carrito = []


// Seleccionamos el section items, donde van a ir las tarjetas, y lo guardamos en una variable
const items = document.getElementById("items")

// Conseguir el contenido de template(la guia de la card)
const templateCard = document.getElementById("template__card").content
// Creamos un fragmento
const fragmento = document.createDocumentFragment()


// CONSUMIR  API.JSON
// se ejecuta cuando el documento es completamente cargado. Cuando todo el HTML esté cargado y parseado, cargar los datos del api.json
document.addEventListener("DOMContentLoaded", () =>
    fetchData()
)

// Usar fetch para conseguir los datos del archivo api.json
        // async y await para esperar a que se lea la informacion de la base de datos, y guardarla
const fetchData = async () => {
    try {
        const respuesta = await fetch("../src/api.json")
        const data = await respuesta.json()

        printCards(data)

    } catch (error) {
        // si da error, registrarlo en la consola
        console.log("Algo salió mal: ", error)
    }
}

// Creamos la función que toma la información que proporciona el fetch y crea por cada elemento las siguientes clases siguiendo el template
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

// escucha cuando clickeamos en un elemento de la section de cards. Si se clickea, ejecuta getCard
items.addEventListener("click", (elementoClickeado) => {
    getCard(elementoClickeado)
})

const getCard = elementoClickeado => {

    // Si el elemento clickeado contiene la clase card__txt__btn
    if(elementoClickeado.target.classList.contains("card__txt__btn")){
        // Si hago click en el botón, agarra el contenido del elemento padre. De esta manera selecciona tanto la imagen como el texto de la card(toda la card)
        setCarrito(elementoClickeado.target.parentElement)
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
        precio: objeto.querySelector(".card__txt__p").innerText,
        liga: objeto.querySelector(".txt__liga").innerText,
        stock: objeto.querySelector(".card__txt__stock").innerText,      

    }

    // Lo guarda al producto seleccionado en formato JSON para enviarlo a la sigueinte página
    productoJSON =JSON.stringify(productoParaCarrito)
    localStorage.setItem("productoJSON",productoJSON)
    

}



////////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRAR EL CONTENIDO POR BUSCADOR
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

////////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRAR EL CONTENIDO POR BOTON
// creamos const para guardar el lugar del div donde va a ir el boton
const divEliminar = document.getElementById("eliminarFiltro")

// funcion que crea boton de eliminar filtro
function crearBtnEliminador(){
    const btnEliminar = document.createElement("a")
    btnEliminar.textContent = ("Limpiar filtro")
    btnEliminar.classList.add("eliminarFiltro")
    divEliminar.classList.add("eliminarFiltro-creado")
    divEliminar.appendChild(btnEliminar)
}

//función para esconder cards
esconderCards = (liga) => {
    document.querySelectorAll(".card").forEach(cardProducto =>{
        cardProducto.textContent.toLowerCase().includes(liga)
        // si coincide, le remueve la clase que lo esconde
        ?cardProducto.classList.remove("filtro__sacar")
        // si no coincide le agrega la clase que lo esconde
        :cardProducto.classList.add("filtro__sacar")
    })

}

document.addEventListener("click", (filtrarLiga) => {
    // Si el boton apretado coincide con la clase 
    filtrarLiga.target.matches(".filtro_serieA") && esconderCards("serie a") // SERIE A  
    filtrarLiga.target.matches(".filtro_premierLeague") && esconderCards("premier league") // PREMIERE LEAGUE  
    filtrarLiga.target.matches(".filtro_argentina") && esconderCards("argentina") // ARGENTINA  
    filtrarLiga.target.matches(".filtro_ligue1") && esconderCards("ligue 1") // LIGUE 1  
    filtrarLiga.target.matches(".filtro_laLiga") && esconderCards("la liga") // LA LIGA
    filtrarLiga.target.matches(".filtro_bundesliga") && esconderCards("bundesliga") // BUNDESLIGA
    filtrarLiga.target.matches(".filtro_internacional") && esconderCards("internacional") // INTERNACIONAL
    
    // Si lo clickeado tiene la clase filtro => Fijarse si el div donde está el botón de eliminar tiene la clase de "eliminarFiltro-creado". Si la tiene significa que el boton ya está creado. Si no la tiene, entonces se crea el boton.
    if(filtrarLiga.target.matches(".filtro")){divEliminar.classList.contains("eliminarFiltro-creado") ?console.log("ya existe el boton") :crearBtnEliminador()}

})

// evento que escuche cuando se pulsa el boton de eliminar filtro
document.addEventListener("click", (eliminarFiltros) => {
    // Si existe el filtro refrescar la página para eliminarlo
    eliminarFiltros.target.matches(".eliminarFiltro") && location.reload()
})

////////////////////////////////////////////////////////////////////////////////////////////////////////
