window.onscroll = function () { mostrarBoton() };

function mostrarBoton() {
    var boton = document.getElementById("boton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

// Ir al inicio de la página cuando se hace clic en el botón
function irAlInicio() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}