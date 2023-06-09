// Acceder a los elementos por id del html
// 1. Crear una variable
// 1.1. Declarar la variable indicando un nombre
//      (comenzar: letras, no numero, no caracteres especiales)
//      (debe ser en minusculas o camelCase -> nombreDeUsuario)
//      (no debe contener espacios -> (así no -> nombre del Usuario))


// alert("Hola Mundo de Desarrollo Web");

let nombre = "Juan Fran Morcillo Sánchez";

let parrafo1 = document.getElementById("parrafo1");
parrafo1.innerHTML = nombre;
console.log(nombre);

document.getElementById("primerTitulo").innerHTML = "Primer HTML con JavaScript";
console.log(primerTitulo.innerHTML);

let numero1 = 69;
let numero2 = 50;
let numero3 = 35;
let suma = numero1 + numero2 + numero3;
console.log(suma);

let nombrePrueba = "Manolo";
let apellidoPrueba = "Pérez Ruiz";
let nombreCompleto = nombrePrueba + " " + apellidoPrueba;
console.log(nombreCompleto);
document.getElementById("nombreCompleto").innerHTML = nombreCompleto;

numero1 = "uno";
let suma2 = numero1 + numero2;
console.log(suma2);


function mostrarAlerta() {
    alert("Lo primero de todo como estan los chavales");
    document.getElementById("parrafo2").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione atque impedit libero architecto veniam totam vitae. Repellat odio cum facere, eveniet ab id omnis magnam nostrum accusantium consequatur perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione atque impedit libero architecto veniam totam vitae. Repellat odio cum facere, eveniet ab id omnis magnam nostrum accusantium consequatur perferendis.";
};

// OTRA FORMA DE ONCLICK ESTE TIPO TIENE PRIORIDAD YA QUE ES DEL PROPIO JAVASCRIPT
/*
document.getElementById("boton1").onclick = function () {
    alert("Hey Alert Wey");
}
*/

/* Paso de parametros a una función */
document.getElementById("suma").innerHTML = sumar(45, 34);
function sumar(a, b) {
    return a + b;
}

/*
function sumar2() {
    let x = parseInt(document.getElementById("numero1").value);
    let y = parseInt(document.getElementById("numero2").value);

    document.getElementById("suma2").innerHTML = "El valor de x es: " + x + " el valor de y es: " + y + " y la suma de los valores es: " + (x + y);
}
console.log(sumar2);
*/

/* FUNCION PARA ELEGIR LA OPERACION QUE QUIERO HACER */
function operar() {
    var x = parseFloat(document.getElementById("numero1").value);
    var y = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado = undefined;

    if (operacion === "suma") {
        resultado = x + y;
        document.getElementById("resultado").innerHTML = "El valor de x es: " + x + " el valor de y es: " + y + " y la suma de los valores es: " + (resultado);
    } else if (operacion === "resta") {
        resultado = x - y;
        document.getElementById("resultado").innerHTML = "El valor de x es: " + x + " el valor de y es: " + y + " y la resta de los valores es: " + (resultado);
    } else if (operacion === "multiplicacion") {
        resultado = x * y;
        document.getElementById("resultado").innerHTML = "El valor de x es: " + x + " el valor de y es: " + y + " y la multiplicación de los valores es: " + (resultado);
    } else if (operacion === "division") {
        resultado = x / y;
        document.getElementById("resultado").innerHTML = "El valor de x es: " + x + " el valor de y es: " + y + " y la división de los valores es: " + (resultado);
    } else {
        document.getElementById("resultado").innerHTML = "Escribe 2 números para hacer la operación y/o elige la operación a realizar.";
    }
}

// Otras formas para declarar las variables
var nombreAlumno = "Rosa Huertas";
console.log(nombreAlumno);
// Diferencia entre var y let
// 1. Se puede volver a declarar la misma variable
var nombreAlumno = "José Martínez";
console.log(nombreAlumno);
let nombrePadre = "Miguel García";
console.log(nombrePadre);
// No se puede declara en el mismo bloque la misma variable cuando la variable es un let
function otroNombrePadre() {
    let nombrePadre = "Gonzalo León";
    console.log("Dentro de la función -> " + nombrePadre);
}
otroNombrePadre();
console.log("Fuera de la función -> " + nombrePadre);

/*
    CONSTANTES

    No cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada
    
    Palabras reservadas(palabras claves) = propias del lenguaje: let, var, const, ....
*/

// Las constantes se declaran en mayúsculas
const PI = 3.141592;
// Area de un circulo: area = r**2xPI
let area = (50**2)*PI;
document.write("El área de una circuferencia de radio 50 es: " + area);