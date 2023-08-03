/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}





/***********************************************************************/
window.addEventListener("load", () => {
    let boton = document.getElementById("boton");
    let check = document.getElementById("politicas");
    check.addEventListener("change", () => {
        boton.addEventListener("click", function () {
            let nombre = document.getElementById("fname");
            let correo = document.getElementById("correo");
            let telefono = document.getElementById("tel");
            if (nombre.value == null || nombre.value == "" || nombre.value == " " || correo.value == null || correo.value == "" || correo.value == "" || telefono.value == null || telefono.value == "" || telefono.value == "") {
                nombre.style.background = "rgb(210, 75, 75, 0.5)";
                nombre.style.color = "white";
                nombre.style.borderColor = "red";
                nombre.setAttribute("placeholder", "Escribe bien tu nombre ...");
                correo.style.background = "rgb(210, 75, 75, 0.5)";
                correo.style.color = "white";
                correo.style.borderColor = "red";
                correo.setAttribute("placeholder", "Escribe bien el correo ...");
                telefono.style.background = "rgb(210, 75, 75, 0.5)";
                telefono.style.color = "white";
                telefono.style.borderColor = "red";
                telefono.setAttribute("placeholder", "Escribe bien el telefono ...");
            } else {
                alert("Consulta enviada correctamente");
            }
        });
    });

});