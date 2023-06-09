let dia1 = "Lunes";
let dia2 = "Martes";
let dia3 = "Miercoles";

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

document.getElementById("weekDay1").innerHTML = dias[0];
document.getElementById("weekDay7").innerHTML = dias[6];


function obtenerDiaAleatorio(dias) {
    if (dias.length === 0) {
        return null;
    } else {
        var indiceAleatorio = Math.floor(Math.random() * dias.length);
        return dias[indiceAleatorio];
    }
}

function getDayOfWeek() {
    document.getElementById("diaAleatorio").innerHTML = obtenerDiaAleatorio(dias);
}

/* Ejercicio: Realizar un array con los meses del año y muestra por pantalla al menos 3 meses de verano */

let mesesDelAnio = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

document.getElementById("mesesVerano").innerHTML = mesesDelAnio[5] + ", " + mesesDelAnio[6] + ", " + mesesDelAnio[7];



let valores = [true, 5, false, "Hola", "Adios", 2];

document.getElementById("valores").innerHTML = "El array de valores es este: [" + valores + "]";

let resultado = valores[1] > valores[5] ? "El primer valor numérico que es: " + valores[1] + " es el valor mayor" : "El quinto valor numérico que es: " + valores[5] + "es el valor mayor";

document.getElementById("numeroMayor").innerHTML = resultado;

let suma = valores[1] + valores[5];
document.getElementById("suma").innerHTML = "La suma del primer valor (" + valores[1] + ") y el segundo valor (" + valores[5] + ") es = " + suma;

let resta = valores[1] - valores[5];
document.getElementById("resta").innerHTML = "La resta del primer valor (" + valores[1] + ") y el segundo valor (" + valores[5] + ") es = " + resta;
let multiplicacion = valores[1] * valores[5];
document.getElementById("multiplicacion").innerHTML = "La multiplicación del primer valor (" + valores[1] + ") y el segundo valor (" + valores[5] + ") es = " + multiplicacion;
let division = valores[1] / valores[5];
document.getElementById("division").innerHTML = "La división del primer valor (" + valores[1] + ") entre el segundo valor (" + valores[5] + ") es = " + division;
let restoDivision = valores[1] % valores[5];
document.getElementById("restoDivision").innerHTML = "El resto de la división del primer valor (" + valores[1] + ")  entre el segundo valor (" + valores[5] + ") es = " + restoDivision;

var numero1 = 5;
var numero2 = 8;
function comprobaciones() {
    if (numero1 < numero2) {
        alert("El primer número: " + numero1 + " no es mayor que el segundo número: " + numero2);
    }
    if (numero2 > 0) {
        alert("El segundo número es positivo");
    }
    if (numero1 != 0 || numero1 < 0) {
        alert("El primer número es negativo o distinto de cero");
    }
    if (++numero1 <= numero2) {
        alert("Incrementar en una unidad el valor del número 1 no lo hace mayor o igual que el número 2")
    }
}