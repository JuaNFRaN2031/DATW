function calculoLetraDni() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    let dniSinLetra = document.getElementById("dni").value;

    if (dniSinLetra == "" || dniSinLetra <= 0 || dniSinLetra > 99999999) {
        let mensajeError = "Indique un número de DNI válido.";
        document.getElementById("mensajeError").innerHTML = mensajeError;
    } else {
        let calculoLetra = dniSinLetra % 23;
        let letra = letras[calculoLetra];
        document.getElementById("letraDni").innerHTML = "La letra es: " + letra;
        document.getElementById("dni-completo").innerHTML = "El DNI completo es: " + dniSinLetra + " - " + letra;
    }
};