// ALGORITMO
// TAREA: funci+on que cree un objeto basado en determinada información pautada por una clase y pedida mediante prompts. Además que no se pueda avanzar al siguente dato si no se valida el que está en curso de asignación.
function agregarProducto(){

    // Se define una clase para estipular los datos necesarios del producto
    class Producto {
        constructor(nombre,talle,cantidad,precio){
            this.nombre = nombre
            this.talle = talle
            this.cantidad = cantidad
            this.precio = precio        
        }
    }

// SE CREAN LAS FUNCIONES QUE PIDEN LOS DATOS

    // El nombre lo ponemos nosotros
    let pedirNombre = "producto1"
    // Dejamos registrado en la consola el nombre del producto
    console.log("Está comprando " + pedirNombre)

    // Pedir talle
    function pedirDatos(){
        // se declara la variable que va a contener el talle dado
        let pedirTalle = "" 
        do {
            // Se pide el talle y la respuesta se la convierte a MAYUS
            pedirTalle = prompt("Ingresá cual de estos talles disponibles desea: XS | S | M | L | XL").toUpperCase();
            // Dejamos registrado en la consola el talle
            console.log("El talle de " + pedirNombre + " que está comprando es " + pedirTalle)
            // Retornar uno de los valores posibles, y sino, avisar que no es válido
            switch(pedirTalle){
                case "XS":
                return pedirTalle;
                case "S":
                return pedirTalle;
                case "M":
                return pedirTalle;
                case "L":
                return pedirTalle;
                case "XL":
                return pedirTalle;
                default:
                alert("No igresaste un talle válido");
            }
        // Mientras no sea valido, volver a pedir el talle
        } while (pedirTalle != "XS" || "S" || "M" || "L" || "XL");

        // Devolvemos el valor que se va a usar en el objeto
        return pedirTalle;
    }
    
        
    // Pedir cantidad del producto
    function pedirDatos2(){

        // Declaramos pedirCantidad
        let pedirCantidad = 0
        //Pedimos el dato
        pedirCantidad = prompt("Ingresá la cantida de "+ pedirNombre + " que desees comprar:")
        // usamos "+" porque devuelve el valor numérico de la cadena, o NaN, si la cadena no es puramente numérica.
        pedirCantidad = +pedirCantidad
        // Dejamos registrado en la consola la cantidad pedida del producto(y nos aseguramos de que sea un número)
        console.log("La cantidad pedida de " + pedirNombre + " es de " + pedirCantidad)
        console.log("El tipo de dato ingresado de "+ pedirCantidad + " es " + typeof(pedirCantidad))

        //Mientras pedirCantidad no sea un numero, volver a pedir que ingrese un valor
        while(isNaN(pedirCantidad)){
            //Se avis que se ingresó un dato inválido
            console.log("Se ingresó un valor inválido de pedirCantidad("+pedirCantidad+"). El tipo de dato ingresado es: "+typeof(pedirCantidad))

            //Se vuelve a pedir el dato
            pedirCantidad = prompt("La cantidad ingresada de "+ pedirNombre + " no es válida. Volvé a ingresar la cantidad:")
            pedirCantidad = +pedirCantidad
            }

        // Devolvemos el valor que se va a usar en el objeto
        return pedirCantidad;
    }

    // El precio lo ponemos nosotros
    let pedirPrecio = 100
    parseInt(pedirPrecio)
    // Dejamos registrado en la consola el precio
    console.log("El precio de " + pedirNombre + " es de:" + pedirPrecio)


//Crear objeto nuevo a partid de la clase y con los datos obtenidos
const producto1 = new Producto(pedirNombre, pedirDatos(), pedirDatos2(), pedirPrecio);

// Verificar que los datos ingresados estén correctos :)
console.log("Detalles del objeto producto 1:")
console.log(producto1)
}


// LLAMAMOS A LA FUNCION
agregarProducto()


















// ALGORITMO
// TAREA: Sumar el total en el carrito de compra

/* 
FUNCION A PAGAR QUE NO FUNCIONA PORQUE CANTIDAD Y PRECIO NO PUEDEN AGARRAR LOS VALORES DE LAS VARIABLES
function aPagar(){
    //Enlazar los valores
    let cantidad = +pedirDatos2
    let precio = +pedirPrecio
    console.log("Tipo de dato de cantidad es: "+typeof(cantidad))
    console.log("El dato de cantidad es: "+(cantidad).value)
    console.log("Tipo de dato de precio es: "+typeof(precio))
    console.log("El dato de precio es: "+(precio.value))

    alert("El precio a pagar es de : "+ parseInt(cantidad * precio)+ "ARS.")
}
aPagar()


*/