window.addEventListener('load', function () {
    let mensaje = document.querySelector('#mensaje');
    let msn = "";
    let boton = document.querySelector('.boton');
    boton.addEventListener('click', function () {
        let nombre = document.querySelector('#nombre').value;
        console.log(nombre);
        if (nombre == "" || nombre == null) {
            msn = "El nombre no puede estar en blanco";
        }
        let password = document.querySelector('#pass').value;
        console.log(password.length);
        if (password == "") {
            msn = msn + "<br>La contraseña no puede estar vacía";
        }
        if (8 > password.length > 12 || password > 1) {
            msn = msn + "<br>La contraseña tiene que tener entre 8 y 12 dígitos";
        }
        mensaje.innerHTML = msn;
    });
});