window.addEventListener('load', function () {
    let mensaje = document.querySelector('#mensaje');
    let msn = "";
    let boton = document.querySelector('.boton');
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    boton.addEventListener('click', function () {
        console.log(altura);
        if (altura == "" || altura == null) {
            msn = "La altura no puede estar vacía";
        }
        if (peso == "") {
            msn = msn + "<br>El peso no puede estar vacío";
        }
        mensaje.innerHTML = msn;
    });
    boton.addEventListener('click', function () {
        let imc = peso / (altura ** 2);
        if (imc == "") {

        }
    });
});