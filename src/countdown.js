// CONTADOR


// Conseguir fecha de 3 a 5 dias desde la fehca actual
// 5 dias equivalen a 432000000 // 3 dias equivalen a 259200000
// 172800000 (milisegundos entre 3 y 5 dias)

const limite = Math.floor(Math.random() * 172800000 + 259200000); // da un numero equivalente a entre 3 y 5 dias

// Milisegundos de hoy, para conseguir el día límite
const hoy = new Date().getTime()

// Conseguimos los milisegundos del dia limite
const diaLimite = hoy + limite

// Lo guardamos en Local storage para que no se cambie la fecha final mientras navegue por el sitio. Si ya está creado, no lo sobreescribe. Si no existe, lo crea
if(localStorage.getItem("diaLimite")){
    console.log(localStorage.getItem("diaLimite"))
} else{
    diaLimiteJSON = JSON.stringify(diaLimite)
    localStorage.setItem("diaLimite", diaLimiteJSON)
}


// Verificamos cual es el dia limite. Esto no es necesario, pero es una guía para verificar el correcto funcionamiento
//const verDiaLimite = new Date(diaLimite)
//console.log(verDiaLimite)




// Función que actualice el DOM con el tiempo restante para la fecha limite
const contador = () => {

    // Conseguir fecha de hoy
    const date = new Date()
    const diaHoy = date.getTime()
    
    // Conseguimos el valor guardado
    const diaLimiteConseguido = JSON.parse(localStorage.getItem("diaLimite"))
    
    // Conseguimos la diferencia entre hoy y la fecha limite
    const diferencia = diaLimiteConseguido - diaHoy

    // Establecer variables de cuanto vale cada unidad
    const sec = 1000; // mil milisegundos, unidad por defecto
    const min = sec * 60; // 60 sec
    const hs = min * 60; // 60 min
    const day = hs *24 // 24 hs

    // Clacular cuantas unidades de tiempo hay entre las dos fechas. Es decir en la variable diferencia
    const dia = Math.floor(diferencia / day)
    const hora = Math.floor((diferencia % day) / hs) // Es el resto que queda de calcular el día dividido la unidad de hora
    const minuto = Math.floor((diferencia % hs) / min)
    const segundo = Math.floor((diferencia % min) / sec)
    
    // Colocarlo en el dom
    document.querySelector(".contador-dia").innerText = dia;
    document.querySelector(".contador-hora").innerText = hora;
    document.querySelector(".contador-minuto").innerText = minuto;
    document.querySelector(".contador-segundo").innerText = segundo;

}

setInterval(contador, 1000)