function calculoLetraDni() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let dniSinLetra = document.getElementById("dni").value;
    let calculoLetra = dniSinLetra % 23;
    let letra = letras[calculoLetra];
    document.getElementById("letraDni").innerHTML = "La letra es: " + letra;
    document.getElementById("dni-completo").innerHTML = "El DNI es: " + dniSinLetra + " - " + letra;
};