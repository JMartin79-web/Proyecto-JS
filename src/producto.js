// Obtenemos la información del producto de la página shop

// Almacena un objeto
let JSONobtenido = JSON.parse(localStorage.getItem("carritoJSON"))
// Verificar que tiene el JSONobtenido --> console.log(typeof(JSONobtenido))

arrayProducto = []
arrayProducto.push(JSONobtenido)
console.log(arrayProducto[0])


// Seleccionamos donde va a ir el contenido
const mainProduct = document.getElementById("main__product")


// Creamos una constante para usar el template de HTML
const templateProduct = document.getElementById("template__product").content
// Creamos el fragmento para 
const fragmentoProducto = document.createDocumentFragment()

// Por cada elemento del producto seleccionado, creamos lo siguiente:
arrayProducto.forEach(elemento => {

    templateProduct.querySelector(".img__product").setAttribute("src", elemento.foto)
    templateProduct.querySelector("h2").textContent = elemento.nombre
    templateProduct.querySelector("#precio").textContent = elemento.precio
    templateProduct.querySelector(".info__product__descripcion").textContent = elemento.liga

    // Lo clonamos y lo enviamos como hijo al fragmento
    const clone = templateProduct.cloneNode(true)
    fragmentoProducto.appendChild(clone)
});

// Colocamos el fragmento con la información en el DOM
mainProduct.appendChild(fragmentoProducto)

//////////////////////////////////////////////////////////////////////////////////


// RECOPILAMOS LA INFORMACIÓN INGRESADA DE LA PÁGINA PRODUCTO

const mandarAlCarrito = ( ) => { }

// Seleccionamos el botón
const btnAgregar = document.getElementById("btn__agregar")


// Creamos una clase para que se guarde los nuevos datos a obtener
class Producto {
    constructor(foto, nombre, talle, cantidad, precio){
        this.foto = foto
        this.nombre = nombre
        this.talle = talle
        this.cantidad = cantidad
        
        this.precio = precio
    }
}

// Función para obtener el objeto
obtenerYmandar = (obtener) => {
    obtenidoJSON = JSON.stringify(obtener)
    localStorage.setItem("obtenidoJSON",obtenidoJSON)
}

// Evento de cuando se apreta ese botón, obtiene toda la información siguiendo la clase establecida previamente
btnAgregar.addEventListener("click", () => {

     let productoParaAgregar = new Producto(
        document.querySelector(".img__product").src,
        document.querySelector("h2").innerText,
        document.querySelector("#talle").value,
        document.querySelector("#cantidad").value,
        document.querySelector("#precio").innerText,
     )
     
    // Covnertir el objeto en JSON y guardarlo en LocalStorage
     obtenerYmandar(productoParaAgregar)
})

