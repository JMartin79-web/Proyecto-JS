// ALGORITMO
// Objetivo: crear un objeto y dejarlo listo para mandarlo al carrito
// En esta instancia el usuario elige el talle y la cantidad que quiere comprar del producto1, que es la página donde estaría situado al ejecutar este algoritmo.


// Se define una clase para estipular los datos necesarios del producto
class Producto {
    constructor(nombre,talle,cantidad,precio, preciototal){
        this.nombre = nombre
        this.talle = talle
        this.cantidad = cantidad
        this.precio = precio
        this.preciototal = preciototal        
    }
}

// SE CREAN LAS FUNCIONES QUE PIDEN LOS DATOS

    // Creamos una función que nos permita crear los nombres de los diferentes productos
    const pedirNombre = function(nombrePedido){
        return nombrePedido
    }

    // Creamos el producto1
    let producto1Nombre = pedirNombre("Producto1")
    // Dejamos registrado en la consola el nombre del producto
    console.log(producto1Nombre)
    console.log(typeof(producto1Nombre))


    // Creamos una funcion que pida el talle
    function pedirTalle(){
        // se declara la variable que va a contener el talle dado
        let talle = "" 
        do {
            // Se pide el talle y la respuesta se la convierte a MAYUS
            talle = prompt("Ingresá cual de estos talles disponibles desea: XS | S | M | L | XL").toUpperCase();
            // Dejamos registrado en la consola el talle
            console.log("El talle seleccionado es: " + talle)
            // Retornar uno de los valores posibles, y sino, avisar que no es válido
            switch(talle){
                case "XS":
                return talle;
                case "S":
                return talle;
                case "M":
                return talle;
                case "L":
                return talle;
                case "XL":
                return talle;
                default:
                alert("No igresaste un talle válido");
            }
        // Mientras no sea valido, volver a pedir el talle
        } while (talle != "XS" || "S" || "M" || "L" || "XL");

        // Devolvemos el valor que se va a usar en el objeto
        return talle;
    }


    // Creamos una funcion que pida la cantidad de producto a comprar
    function pedirCantidad(){

        // Declaramos cantidad
        let cantidad = 0
        //Pedimos el dato
        cantidad = prompt("Ingresá la cantida que desees comprar: ")
        // usamos "+" porque devuelve el valor numérico de la cadena, o NaN, si la cadena no es puramente numérica.
        cantidad = +cantidad
        // Dejamos registrado en la consola la cantidad pedida del producto(y nos aseguramos de que sea un número)
        console.log("La cantidad pedida es de " + cantidad)
        console.log("El tipo de dato ingresado de "+ cantidad + " es " + typeof(cantidad))

        //Mientras cantidad no sea un numero, volver a pedir que ingrese un valor
        while(isNaN(cantidad)){
            //Se avis que se ingresó un dato inválido
            console.log("Se ingresó un valor inválido de cantidad("+cantidad+"). El tipo de dato ingresado es: "+typeof(cantidad))

            //Se vuelve a pedir el dato
            cantidad = prompt("La cantidad ingresada no es válida. Volvé a ingresarla: ")
            cantidad = +cantidad
            }

        // Devolvemos el valor que se va a usar en el objeto
        return cantidad;
    }


    // Creamos una función que nos permita crear los precios de los diferentes productos
    const pedirPrecio = function(precioPedido){
        return precioPedido
    }

    // Creamos el precio del producto1
    let precioProducto1 = parseInt(pedirPrecio(100))
    // Dejamos registrado en la consola el precio
    console.log("El precio es de:" + precioProducto1)

    // Creamos una funcion que calcule el precio total (cantidad*precio)
    let multiplicar = (a, b) => {
        c = a * b
        return c
    }
    

//AHORA SE CREA EL NUEVO OBJETO(producto1) SIGUIENDO LA CLASE "Producto"

alert("Estás por comprar " + producto1Nombre); // Se avisa que estás por comprar
const producto1 = new Producto(producto1Nombre, pedirTalle(), pedirCantidad(), precioProducto1); // Se crea el objeto pidiendo talle y cantidad
producto1.preciototal = (multiplicar(producto1.cantidad, precioProducto1)); // Se multiplica la cantidad del producto por el valor de este
alert("El precio a pagar de " + producto1Nombre + " es de: " + producto1.preciototal) // Se avisa el precio

// Se creará un array donde se guarden los objetos que cree el usuario en relacion a su pedido
const arrayPedido = []
arrayPedido.push(producto1)

// Recorremos el array
for(let i=0; i<arrayPedido.length; i++){
    console.log(arrayPedido[i])
}

