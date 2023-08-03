window.addEventListener("load", () => {
    let boton = document.getElementById("boton");
    let imagen = document.getElementById("img-nacional");
    boton.addEventListener("click", function () {
        boton.style.display = "none";
        imagen.style.display = "block";
    });
});