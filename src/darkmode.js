const btnTheme = document.getElementById("theme")

btnTheme.addEventListener("click", ( ) => {

    // Le agregamos la clase dark, o la sacamos si ya la tiene
    document.body.classList.toggle("dark")
    // le agregamos/sacamos(si ya tiene) la clase theme_active al boton 
    btnTheme.classList.toggle("theme_active")

    // Guardar la configuración
   if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "activado")
    } else {
        localStorage.setItem("dark-mode", "desactivado")
    }

})

// Comprobamos si esta activado/desactivado
if(localStorage.getItem("dark-mode") === "activado"){
    document.body.classList.add("dark")
    btnTheme.classList.add("theme_active")
} else {
    document.body.classList.remove("dark")
    btnTheme.classList.remove("theme_active")
}
