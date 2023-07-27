window.addEventListener('load', function () {
    let mensaje = document.querySelector('#mensaje');
    let msn = "";
    let boton = document.querySelector('.boton');
    boton.addEventListener('click', function () {
        msn = "";
        let altura = document.querySelector('#altura').value;
        let peso = document.querySelector('#peso').value;
        let imc = peso / (altura ** 2);
        if (imc < 18.5) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene bajo peso";
        } else if (imc > 18.5 && imc < 25) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene normopeso";
        } else if (imc > 25 && imc < 27) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene sobrepeso de grado 1";
        } else if (imc > 27 && imc < 30) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene sobrepeso de grado 2";
        } else if (imc > 30 && imc < 35) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene obesidad de grado 1";
        } else if (imc > 35 && imc < 40) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene obesidad de grado 2";
        } else if (imc > 40 && imc < 50) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene obesidad de grado 3 (mórbida)";
        } else if (imc > 50) {
            msn = document.querySelector('#mensaje').innerHTML = "Usted tiene obesidad de grado 4 (extrema)";
        }
        mensaje.innerHTML = msn;
        let mensajeIMC = document.querySelector('#imc').innerHTML = "Tu IMC (índice de masa muscular es): " + imc;
        console.log(mensajeIMC);
    });
});