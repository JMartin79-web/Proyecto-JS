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


//POR NOMBRE - RANGO DE PRECIO - SI SON DE DETERMINADA LIGA
