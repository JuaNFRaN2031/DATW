window.addEventListener('load', function (e) {
    e.preventDefault();
    let mensaje = document.querySelector('#mensaje');
    let msn = "";
    let boton = document.querySelector('.boton');
    boton.addEventListener('click', function () {
        msn = "";
        let nombre = document.querySelector('#nombre').value;
        console.log(nombre);
        if (nombre == "" || nombre == null) {
            msn = "El nombre no puede estar en blanco";
        }
        let password = document.querySelector('#pass').value;
        console.log(password.length);
        if (password == "") {
            msn = msn + "<br>La contraseña no puede estar vacía";
        } else if (password.length < 8 || password.length > 12) {
            msn = msn + "<br>La contraseña tiene que tener entre 8 y 12 dígitos";
        }
        mensaje.innerHTML = msn;
        let inputs = document.querySelectorAll(".entrada");
        inputs.forEach(items => {
            items.addEventListener("focus", () => {
                mensaje.innerHTML = " ";
                msn = "";
            });
        });
    });
});