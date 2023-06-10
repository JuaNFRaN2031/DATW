for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("--------------------------------------------------");
function salidaH() {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Encabezado de nivel " + i + "</h" + i + ">");
    }
}

function calcFact() {
    let numero = document.getElementById("numero").value;
    console.log(numero);
    if (numero == NaN || isNaN(numero)) {
        document.getElementById("mensajeError").innerHTML = "Indica un número, no letras!!";
    } else {
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        document.getElementById("resultadoFact").innerHTML = resultado;
    }
}