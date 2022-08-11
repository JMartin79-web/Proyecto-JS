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

// Creamos un objeto que guarde los elementos seleccionados por el boton de ver mas, para el carrito
let paraCarrito = {} 


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
        console.log(error)
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

        const clone = templateCard.cloneNode(true)
        fragmento.appendChild(clone)
    })
    items.appendChild(fragmento)
}


const addCarrito = elementoClickeado => {
    console.log(elementoClickeado.target)
    // Si el elemento clickeado contiene la clase card__txt__btn
    if(elementoClickeado.target.classList.contains("card__txt__btn")){
        elementoClickeado.parentElement
        console.log(elementoClickeado.parentElement)
    }
    elementoClickeado.stopPropagation()

}

const setCarrito = (objeto) => {

}









































































/* CODIGO CACA


// FILTRAR CONTENIDO POR BOTÓN DE LIGA
// serieA
// premierLeague
// argentina
// ligue1
// laLiga
// bundesliga
// internacional
    

    // Botón para borrar los filtros
    let botonEliminarFiltro = document.createElement("button")
    botonEliminarFiltro.innerHTML =  "Eliminar filtros"
    botonEliminarFiltro.classList.add("eliminarFiltro")
    document.body.append(botonEliminarFiltro)



    /*
document.addEventListener("mousedown", filtrarLiga => {
    let botonEliminarFiltro = document.createElement("button")
    botonEliminarFiltro.innerHTML =  <button class="eliminar_filtros"> Eliminar filtros </button>
    document.body.append(botonEliminarFiltro)

    if(filtrarLiga.target.matches(".serieA")){
        document.querySelectorAll(".card").forEach(card =>{
            card.includes(".serieA")
            // si coincide, le remueve la clase que lo esconde
            ?card.classList.remove("filtro__sacar")
            // si no coincide le agrega la clase que lo esconde
            :card.classList.add("filtro__sacar")
        })
    }
})






// CREAR ARRAY CON TODAS LAS DIFERENTES CARDS

// Creamos una clase, para que la usen todos los objetos que corresponden a los cards (1 objeto = 1 card)
class Articulos {
    constructor(foto, nombre, precio, club, stock){
        this.foto = foto
        this.nombre = nombre
        this.precio = precio
        this.club = club
        this.stock = stock      
    }
}




//POR NOMBRE - RANGO DE PRECIO - SI SON DE DETERMINADA LIGA






// CREAMOS UN OBJETO POR CADA CARD
// Para eso primero contamos la cantidad de cards
function contarCards(){
    // se selecciona todos los elementos con la clase card, y retorna la cantidad
    cantidadCards = document.querySelectorAll(".card").length
    return cantidadCards
}
let cardsContadas = contarCards()
console.log(cardsContadas)

// creamos array donde van a ir todos los objetos
const arrayCards = []
// Hacemos una funcion que tome los datos de cada card, y los coloque en un objeto nuevo, siguiendo la clase.

    




const nombreArticulo = (document.querySelector(".card__txt__h3").innerHTML)
console.log(nombreArticulo)*/





/*

document.querySelectorAll(".card").forEach((element) => {

    element = nuevoArticulo = new Articulos(
    //seleccionar nombre
    
   )
})


// Agarra el nombre de todos los p con el nombre, y crea un objeto por nombre
    document.querySelectorAll(".card__txt__h3").forEach((element) => {
    const nuevoArticulo = new Articulos(
        
        (element.innerHTML),
    )
    arrayCards.push(nuevoArticulo)})

console.log(arrayCards)


*/






/* ITERAR ARRAY
for(let i= 0 ; i< arrayCards.length ; i++){
    console.log(arrayCards[i])
}
*/

/*
    const fotoArticulo = (document.querySelector(".card__img").innerHTML)
    console.log(fotoArticulo)

    const nombreArticulo = (document.querySelector(".card__txt__h3").innerHTML)
    console.log(nombreArticulo)

    const precioArticulo = (document.querySelector(".card__txt__p").innerHTML)
    console.log(precioArticulo)

    const clubArticulo = (document.querySelector(".card__txt__club").innerHTML)
    console.log(clubArticulo)

    const stockArticulo = (document.querySelector(".card__txt__stock").innerHTML)
    console.log(stockArticulo)

    document.querySelectorAll(".card").forEach( (objeto) => {
        arrayCards.push(new Articulos(fotoArticulo.value, nombreArticulo, precioArticulo, clubArticulo, stockArticulo))
        
     } )
    
*/

