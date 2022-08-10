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

    document.querySelectorAll(".card").forEach( () => {} ) 































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
//POR NOMBRE - RANGO DE PRECIO - SI SON DE DETERMINADA LIGA
