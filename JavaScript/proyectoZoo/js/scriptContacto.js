window.addEventListener('load', () => {
    let seleccion = document.querySelector('#formCto');
    let divTel = document.querySelector('.telOculto');
    let divEmail = document.querySelector('.emailOculto');
    let divPostal = document.querySelector('.postalOculto');
    seleccion.addEventListener('change', () => {
        let valorSeleccion = seleccion.value;
        switch (valorSeleccion) {
            case "telefono":
                divTel.style.display = "block";
                divEmail.style.display = "none";
                divPostal.style.display = "none";
                break;

            case "email":
                divTel.style.display = "none";
                divEmail.style.display = "block";
                divPostal.style.display = "none";
                break;

            case "postal":
                divTel.style.display = "none";
                divEmail.style.display = "none";
                divPostal.style.display = "block";
                break;

            default:
                break;
        }
    });

    let boton = document.querySelector('#boton');
    boton.addEventListener('click', () => {
        let nombre = document.querySelector('#fname');
        let apellidos = document.querySelector('#lname');
        let mensajeFormulario = document.querySelector('#mensaje').value;
        console.log("Hola " + nombre + " " + apellidos + ", este es su mensaje: " + mensajeFormulario);
        validarNombre(nombre);
        validarApellidos(apellidos);
        let telefono = document.querySelector('#telefono');
        let email = document.querySelector('#email');
        let postal = document.querySelector('#postal');
        validarFormaContacto(telefono, email, postal);
    });

});

function validarNombre(nombre) {
    if (nombre.value == null || nombre.value == "" || nombre.value == " ") {
        nombre.style.border = "2px solid red";
        nombre.style.borderColor = "red";
        nombre.style.background = "rgb(243, 77, 77)";
        nombre.setAttribute("placeholder", "Escribe bien tu nombre ...");
    } else {
        nombre.style.background = "none";
        nombre.style.border = "none";
        nombre.style.borderBottom = "1px solid #ffa600";
    }
}
function validarApellidos(apellidos) {
    if (apellidos.value == null || apellidos.value == "" || apellidos.value == " ") {
        apellidos.style.border = "2px solid red";
        apellidos.style.borderColor = "red";
        apellidos.style.background = "rgb(243, 77, 77)";
        apellidos.setAttribute("placeholder", "Escribe bien tu apellidos ...");
    } else {
        apellidos.style.background = "none";
        apellidos.style.border = "none";
        apellidos.style.borderBottom = "1px solid #ffa600";
    }
}
function validarFormaContacto() {

}