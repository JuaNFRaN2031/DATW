const iva = 1.21;
let valor;

function calcular() {
    let peso = document.getElementById("peso").value;
    if (validarDatos(peso)) {
        calcularPeso(peso);
    }

}

function validarDatos(peso) {
    if (isNaN(peso)) {
        document.getElementById("resultado").innerHTML = "ERROR. No has escrito un número";
    } else {
        return true;
    }
}

function calcularPeso(peso) {
    if (peso > 0 && peso <= 1) {
        valor = (11.82 * iva).toFixed(2);
    }
    if (peso > 1 && peso <= 5) {
        valor = (14.59 * iva).toFixed(2);
    }
    if (peso > 5 && peso <= 10) {
        valor = (19.09 * iva).toFixed(2);
    }
    if (peso > 10 && peso <= 15) {
        valor = (22.73 * iva).toFixed(2);
    }
    if (peso > 15 && peso <= 20) {
        valor = (27.69).toFixed(2);
    }
    if (peso > 20 && peso <= 25) {
        valor = (32.77 * iva).toFixed(2);
    }
    if (peso > 25 && peso <= 30) {
        valor = (37.73 * iva).toFixed(2);
    }
    if (peso > 30 || peso <= 0) {
        document.getElementById("resultado").innerHTML = "Escribe un valor correcto (min. peso 0.01 / max. peso 30)";
    }
    else {
        document.getElementById("resultado").innerHTML = "Te costaría: " + valor + "€";
    }
}