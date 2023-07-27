window.addEventListener('load', function () {
    let boton = document.querySelector('.boton');
    boton.addEventListener('click', function () {
        let nombre = document.querySelector('#nombre').value;
        console.log(nombre);
        if (nombre == "" || nombre == null) {
            document.querySelector('#mensaje').innerHTML = "El nombre no puede estar en blanco";
        }
        let password = document.querySelector('#pass').value;
        console.log(password);
        if (password == "") {
            document.querySelector('#mensaje2').innerHTML = "La contraseña no puede estar vacía";
        }
        if (8 > password.length > 12 || password > 1) {
            document.querySelector('#mensaje2').innerHTML = "La contraseña tiene que tener entre 8 y 12 dígitos";
        }
    });
});