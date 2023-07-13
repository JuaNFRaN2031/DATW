window.addEventListener('load', function () {

    var fechaActual = new Date();
    this.document.querySelector("#fecha").innerHTML = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();

    var horaActual = new Date();
    this.document.querySelector("#hora").innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() + ":" + horaActual.getSeconds();

    var fechaNacimiento = new Date(2002, 10, 8);
    this.document.querySelector("#fechaNacimiento").innerHTML = fechaNacimiento.getDate() + "/" + (fechaNacimiento.getMonth() + 1) + "/" + fechaNacimiento.getFullYear();
});