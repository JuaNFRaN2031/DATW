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
        let inputs = document.querySelectorAll('.entrada');
        inputs.forEach(items => {
            items.addEventListener('focus', () => {
                items.style.background = "none";
                items.style.border = "none";
                items.style.borderBottom = "1px solid #ffa600";
            })
        })
    });

});

function validarNombre(nombre) {
    if (nombre.value == null || nombre.value == "" || nombre.value == " ") {
        nombre.style.border = "2px solid red";
        nombre.style.borderColor = "red";
        nombre.style.background = "rgb(243, 77, 77)";
        nombre.setAttribute("placeholder", "Escribe bien tu nombre ...");
    }
}
function validarApellidos(apellidos) {
    if (apellidos.value == null || apellidos.value == "" || apellidos.value == " ") {
        apellidos.style.border = "2px solid red";
        apellidos.style.borderColor = "red";
        apellidos.style.background = "rgb(243, 77, 77)";
        apellidos.setAttribute("placeholder", "Escribe bien tu apellidos ...");
    }
}
function validarFormaContacto() {

}