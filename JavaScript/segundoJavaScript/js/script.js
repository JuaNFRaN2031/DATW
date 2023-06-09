/* OPERADORES COMPARACIÓN */

// Los operadores comparación devuelven un resultado booleano true o false indicando si la comparación se cumple o no.
let x = 2, y = 3;
// Comparar si son iguales
let resultado = (x == y);
document.getElementById("comp1").innerHTML = resultado;
// Comparar si son distintos
resultado = (x != y);
document.getElementById("comp2").innerHTML = resultado;
// Comparar si un número es mayor que otro
resultado = (x > y);
document.getElementById("comp3").innerHTML = resultado;
// Comparar si un número es mayor o igual que otro
resultado = (x >= y);
document.getElementById("comp4").innerHTML = resultado;
// Comparar si un número es menor que otro
resultado = (x < y);
document.getElementById("comp5").innerHTML = resultado;
// Comparar si un número es menor o igual que otro
resultado = (x <= y);
document.getElementById("comp6").innerHTML = resultado;
// Comparar si son iguales en contenido y en tipo de datos
let z = "2";
resultado = (x === z);
document.getElementById("comp7").innerHTML = resultado;


/* OPERADORES LÓGICOS */

// Operador Y representado por &&
resultado = (x < y) && (x == z);
document.getElementById("comp8").innerHTML = resultado;

resultado = (x == y) && (x === z);
document.getElementById("comp9").innerHTML = resultado;

resultado = (x == y) && (x == z);
document.getElementById("comp10").innerHTML = resultado;

// Operador O representado por ||
resultado = (x < y) || (x == z);
document.getElementById("comp11").innerHTML = resultado;

resultado = (x == y) || (x === z);
document.getElementById("comp12").innerHTML = resultado;

resultado = (x == y) || (x == z);
document.getElementById("comp13").innerHTML = resultado;

// Operador ternario representado por ?
let muestra = x < y ? "X es menor que Y" : "X es mayor que Y";
document.getElementById("muestra").innerHTML = muestra;