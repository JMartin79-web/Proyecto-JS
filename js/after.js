function botonFunciones(){

    function ejemplo1(texto1, texto2){
        const response = texto1 + texto2
        return response
    }

    const ejemplo2 = function (texto1, texto2){
        const response = texto1 + texto2
        return response
    }

    const ejemplo3 = (texto1, texto2) => {
        const response = texto1 + texto2
        return response        
    }

    const accion = prompt("Elija que función quiere usar: FUNCION/ANONIMA/ARROW")

    if (accion == "FUNCION"){
        const respuesta = ejemplo1("Hola ", "alumnos")
        alert(respuesta)
    }
    if (accion == "ANONIMA"){
        const respuesta = ejemplo2("Hola ", "alumnos")
        alert(respuesta)
    }
    if (accion == "ARROW"){
        const respuesta = ejemplo3("Hola ", "alumnos")
        alert(respuesta)
    }
}

function botonObjetoSimple(){
    const formSimple = {
    //   clave    valor
    //   key      value
        nombre: "Damian",
        apellido: "Gonzalez",
        telefono: "9999-9999",
        direccion: "la calle 000"
    }
    const Miembros = [
        {
                nombre: "Damian",
                apellido: "Gonzalez",
                telefono: "9999-9999",
                direccion: "la calle 000"
        },
        {
                nombre: "Diego",
                apellido: "Costa",
                telefono: "9999-9999",
                direccion: "la calle 000"
        },
        {
                nombre: "Cristian",
                apellido: "Rodriguez",
                telefono: "9999-9999",
                direccion: "la calle 000"
        },
    ]
    console.log(Miembros)
}

function botonClase(){
    const ejemplos = document.getElementById("ejemplos")

    class Cuadrados {
        constructor(){
            this.nombre = "";
            this.color = "";
            this.tamano = "";
        }
        crearCuadrado(){
            ejemplos.innerHTML = `
                <p style="background-color:${this.color};font-size:${this.tamano}px">${this.nombre}</p>
            `
        }
        eliminarCuadrado(){
            ejemplos.innerHTML = ``
        }
    }

    const ejemploCuadrado = new Cuadrados()
    let accion = ""
    
    do {
        accion = prompt("Elija una acción: (CREAR/BORRAR/SALIR)")
        if (accion == "CREAR"){
            ejemploCuadrado.nombre = prompt("Ingrese nombre: ")
            ejemploCuadrado.color = prompt("Ingrese color: ")
            ejemploCuadrado.tamano = prompt("Ingrese tamaño: ")
            ejemploCuadrado.crearCuadrado()
            accion = "SALIR"
        }
        if (accion == "BORRAR"){
            ejemploCuadrado.eliminarCuadrado()
            accion = "SALIR"
        }
    }
    while (accion != "SALIR")
    
}

function boton1(){
                          //simula usuario en base de datos
    function validarUsuario(usuario){
        let booleano = false;
        while (!booleano){
            const loginUsuario = prompt("Ingrese usuario a loguear: ")
            const loginPassword = prompt("Ingrese la password: ")

            if(loginUsuario == usuario.nombre){
                booleano = true;
            }
            if(booleano && loginPassword == usuario.password){
                booleano = true;
            } else {
                booleano = false;
                alert("Credenciales incorrectas")
            }

        }
        return booleano
    }

    function verSiEsValido(isValid){
        if (isValid){
            alert("es valido")
        } else {
            alert("es invalido")
        }
    }

    function registrarUsuario(){
        let valido = false;
        let nombreUsuario = "";
        let passwordUsuario = "";
        let repetirPassUsu = "";

        while (!valido){
            nombreUsuario = prompt("Ingrese usuario: ")
            passwordUsuario = prompt("Ingrese password: ")       
            repetirPassUsu = prompt("Repita la password: ")
    
            if (passwordUsuario == repetirPassUsu){
                valido = true;
            } else {
                alert("Las password no son iguales")
            }
        }

        const usuario = {
            nombre: nombreUsuario,
            password: passwordUsuario,
        }
        return usuario
    }



   //Aca se empieza a ejecutar el código

    const nuevoUsuario = registrarUsuario()

    const esValido = validarUsuario(nuevoUsuario) //true o false

    verSiEsValido(esValido)

    //const usuarioValido = validarUsuario(nuevoUsuario)

    //darNumero(usuarioValido)
}

function boton2(){
    const ano = prompt("Ingrese año: ")
    const mes = prompt("Ingrese mes: ")
    const dia = prompt("Ingrese dia: ")

    const actual = new Date()

    const ejemplo = new Date(`${ano}-${mes}-${dia}`)

    console.log(ejemplo)
}