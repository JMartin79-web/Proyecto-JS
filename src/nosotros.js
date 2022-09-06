
// ALGORITMO DE VALIDACIÓN DEL FORMULARIO

// Seleccionamos form
const formContacto = document.getElementById("form-contacto")
// Seleccionamos boton
const btnContactar = document.getElementById("enviar_contacto")
// Seleccionamos inputs
const inputsContacto = document.querySelectorAll("#form-contacto input")

///////////////////////////////////////

// valida caracteres
const caracteres = {
    // Para validar lo ingresado por el usuario
	nombre: /[a-zA-Z\s?]+[a-zA-Z]+/,
    apellido: /[a-zA-Z\s?]+[a-zA-Z]+/,
	telefono: /^\d{5,20}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
// Establecer los campos como falsos por defecto. Cambian a verdaderos cuando son completados y validados
const campos = {
    nombre: false,
    apellido: false,
    mail: false,
    telefono: false
}

// Funcion para activar botón, una vez esté todo validado
function activarBtn(){
    if(campos.apellido && campos.mail && campos.nombre && campos.telefono){
        btnContactar.removeAttribute("disabled")
    }
}


// Funcion para validar el input
// Caracter es la key de "caracteres" que vamos a usar para validar los caracteres inrgesados
// input es el input donde estamos validando
// campo es como se llama el input(cuál es)
// tambien se ejecuta activarBtn, para que si lo ingresado valida el ultimo input necesario, se active el boton
const validarCampo = (caracter, input, campo) => {
    if (caracter.test(input)){
        document.querySelector(`.${campo}-invalido`).innerText = "";
        campos[campo] = true;
        activarBtn()}
    else{
        document.querySelector(`.${campo}-invalido`).innerText = `inválido`;
        campos[campo] = false;
    }
}

const validarInput = (validar) =>{
    
    switch (validar.target.name) {
        case "nombre": validarCampo(caracteres.nombre, validar.target.value, "nombre"); break;
        case "apellido": validarCampo(caracteres.apellido, validar.target.value, "apellido"); break;
        case "telefono": validarCampo(caracteres.telefono, validar.target.value, "telefono"); break;  
        case "mail": validarCampo(caracteres.mail, validar.target.value, "mail"); break;
        default:break;
        }
    
}
// Cuando se escribe o se clickea afuera del input, se ejecuta validarInput
inputsContacto.forEach( (input) => {
    input.addEventListener("keyup", validarInput)
    input.addEventListener("blur", validarInput)
})


// Boton
const btnPulsado = (elemento, textoNuevo) => {
    elemento.setAttribute("id", "btn-clicked"); elemento.innerText = textoNuevo;
}

formContacto.addEventListener("submit", (accion) => { 
    accion.preventDefault() 
    btnPulsado(btnContactar, "CONTACTADO")
    Toastify({
        text: "Este mensaje no se envía a nadie :)",
        gravity: "bottom",
        position: "center",
        duration: 5000,
    }).showToast();
})
