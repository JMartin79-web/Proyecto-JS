const btnTheme = document.getElementById("theme")

btnTheme.addEventListener("click", ( ) => {
    document.body.classList.toggle("dark")
    btnTheme.classList.toggle("theme_active")
})