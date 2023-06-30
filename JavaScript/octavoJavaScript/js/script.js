function sumar() {
    let a = 5, b = 3;
    let suma = a + b;
    return suma;
}
console.log("La primera suma es: " + sumar());

function sumar2() {
    let suma = a + b;
    return suma;
}
let a = 36, b = 33;
console.log("La segunda suma es: " + sumar2());

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

console.log("La primera multiplicación es: " + multiplicar(25, 33));
console.log("La segunda multiplicación es: " + multiplicar(60, 13));
console.log("La tercera multiplicación es: " + multiplicar(a, b));

function dividir(numero1, numero2) {
    return numero2 / numero1;
}
console.log("La división es: " + dividir(5, 0));

/** EJERCICIO
 * Calcula el precio + IVA de los siguientes productos:
 * leche = 0.76
 * agua = 1.05
 * cereales = 2.35
 * mermelada = 1.96
 * 
 * Tomando en cuenta que el IVA es 4%
 */

let leche = 0.76, agua = 1.05, cereales = 2.35, mermelada = 1.96;
let iva = 1.04;
function precioTotal(producto) {
    return producto * iva;
}

console.log("El precio de la leche es: " + precioTotal(leche).toFixed(2) + "€");
console.log("El precio del agua es: " + precioTotal(agua).toFixed(2) + "€");
console.log("El precio de los cereales es: " + precioTotal(cereales).toFixed(2) + "€");
console.log("El precio de la mermelada es: " + precioTotal(mermelada).toFixed(2) + "€");


function ShowSelected() {
    let opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "leche":
            document.getElementById("resultado").innerHTML = "El precio de la leche es: " + (leche * iva).toFixed(2) + "€";
            break;

        case "agua":
            document.getElementById("resultado").innerHTML = "El precio del agua es: " + (agua * iva).toFixed(2) + "€";
            break;
        case "cereales":
            document.getElementById("resultado").innerHTML = "El precio de los cereales es: " + (cereales * iva).toFixed(2) + "€";
            break;
        case "mermelada":
            document.getElementById("resultado").innerHTML = "El precio de la mermelada es: " + (mermelada * iva).toFixed(2) + "€";
            break;
        default:
            break;
    }
}