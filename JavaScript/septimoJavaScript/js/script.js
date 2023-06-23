// Función para conocer la longitud de una cadena, incluyendo los espacios.
let cadena1 = "Hola, como estais todos. ⭐😊";
let numeroLetras = cadena1.length;
console.log(cadena1);
console.log(numeroLetras);

// Función para concatenar
let cadena2 = " ¡¡¡BIEEEEEEEN!!!";
let cadena = cadena1.concat(cadena2);
console.log(cadena);

// Concatenar en un bucle
for (let i = 0; i < cadena1.length; i++) {
    cadena += cadena1;
}
console.log(cadena);

// Función para pasar a mayúsculas una cadena de texto
cadena1 = cadena1.toUpperCase();
console.log(cadena1);

// Función para pasar a minúsculas una cadena de texto
cadena1 = cadena1.toLowerCase();
console.log(cadena1);

// ESTO ES PARA QUE SE QUEDE LA FRASE COMO EL INICIO
cadena1 = "Hola, como estais todos. ⭐😊";

// Función para obtener el caracter que se encuentra en una posición
let letra = cadena1.charAt(0);
console.log(letra);

// Función indexOf(letra), calcula la posición en la que se encuentra la letra indicada, siempre la buscará de izquierda a derecha y siempre cogera solamente la primera
let posicion = cadena1.indexOf('a');
console.log(posicion);

// lastIndexOf() calcula la última posición del carácter indicado, tanto indexOf() como lastIndexOf() devuelven -1 si no encuentran ese carácter
posicion = cadena1.lastIndexOf('x');
console.log(posicion);

// Función para extraer de una cadena una porción de texto, substring(inicio, final)
let subCadena1 = cadena1.substring(6, 10);
console.log(subCadena1);

// Con split() también puedo extraer todas las letras de una cadena indicando el separador vacio ""
let cadena3 = "Los alumnos son 15 y son muy listos";
let arrayCadena3 = cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

/************* FUNCIONES ÚTILES PARA ARRAY **************/
// Conocer la longitud de un array
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numElementos = miArray.length;
console.log(numElementos);

// Función para unir o concatenar 2 arrays
let array2 = arrayCadena3.concat(miArray);
console.log(array2);

// Función join() que es lo inverso a split() en las cadenas, convierte una array en una cadena
let deArrayACadena = array2.join(" ");
console.log(deArrayACadena);
let miArrayCadena = miArray.join("-");
console.log(miArrayCadena);

// Función pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento
let ultimo = miArray.pop();
console.log(ultimo);
console.log(miArray);

// Función push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento (También es posible añadir más de un elemento a la vez)
miArray.push(9,10);
console.log(miArray);

// Función shift(), elimina el primer elemento del array. El array original se ve modificado y su longitud disminuida en 1 elemento
let primero = miArray.shift();
console.log(primero);
console.log(miArray);

// Función unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento (También es posible añadir más de un elemento a la vez)
let otroValor = 20;
miArray.unshift(otroValor);
console.log(miArray);

// Función reverse() modifica un array colocando sus elemnetos en el orden inverso
miArray.reverse();
console.log(miArray);