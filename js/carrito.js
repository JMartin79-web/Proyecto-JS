// ALGORITMO
// CONSEGUIR LOS DATOS DEL PRODUCTO Y MANDARLOS AL CARRITO
function producto(){
    let producto1 = {
        //img: ,
        nombre: document.getElementById("nombre"), // + el talle del producto 
        precio: document.getElementById("precio"),
        cantidad: document.getElementById("cantidad"),
        subTotal: precio*cantidad,
    }
    console.log(producto1)
}

producto();
// ALGORITMO
// TAREA: Sumar el total en el carrito de compra
