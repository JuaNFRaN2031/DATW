// let day = new Date().getDay();
// console.log(day);
function calcDay() {
    let day = parseInt(document.getElementById("day").value);
    console.log(day);
    let dayNow;
    switch (day) {
        case 1:
            dayNow = "Lunes";
            break;
        case 2:
            dayNow = "Martes";
            break;
        case 3:
            dayNow = "Miércoles";
            break;
        case 4:
            dayNow = "Jueves";
            break;
        case 5:
            dayNow = "Viernes";
            break;
        case 6:
            dayNow = "Sábado";
            break;
        case 7:
            dayNow = "Domingo";
            break;
        default:
            dayNow = "ERROR. Ese día no existe";
            break;
    }
    document.getElementById("dayNow").innerHTML = dayNow;
}

/*
 * EJERCICIO:
 * De la base de la puntuación numérica de los alumnos indicamos que:
 * 0 - 4 -> Insuficiente.
 * 5 -> Suficiente.
 * 6 -> Bien.
 * 7-8 -> Notable.
 * 9 - 10 -> Sobresaliente.
*/

function calcNota() {
    let nota = parseInt(document.getElementById("nota").value);
    console.log(nota);
    let notaAulmno;
    switch (nota) {
        case 0:
            notaAulmno = "Insuficiente";
            break;
        case 1:
            notaAulmno = "Insuficiente";
            break;
        case 2:
            notaAulmno = "Insuficiente";
            break;
        case 3:
            notaAulmno = "Insuficiente";
            break;
        case 4:
            notaAulmno = "Insuficiente";
            break;
        case 5:
            notaAulmno = "Suficiente";
            break;
        case 6:
            notaAulmno = "Bien";
            break;
        case 7:
            notaAulmno = "Bien";
            break;
        case 8:
            notaAulmno = "Notable";
            break;
        case 9:
            notaAulmno = "Notable";
            break;
        case 10:
            notaAulmno = "Sobresaliente. Has sacado la mayor nota, ENHORABUENA";
            break;
        default:
            notaAulmno = "Esa nota no existe";
            break;
    }
    document.getElementById("notaAulmno").innerHTML = notaAulmno;
}

/**********************************************************************/
function crearAlumnos() {
    var cantidadAlumnos = document.getElementById('cantidadAlumnos').value;
    var container = document.getElementById('inputsContainer');
    var outputContainer = document.getElementById('notasContainer');

    // Limpiar los contenedores antes de agregar nuevos elementos
    container.innerHTML = '';
    outputContainer.innerHTML = '';

    for (var i = 0; i < cantidadAlumnos; i++) {
        var input = document.createElement('input');
        input.type = 'number';
        input.name = 'alumno' + (i + 1);
        input.placeholder = 'Alumno ' + (i + 1);

        var output = document.createElement('p');
        output.id = 'nota' + (i + 1);

        container.appendChild(input);
        container.appendChild(document.createElement('br')); // Salto de línea
        outputContainer.appendChild(output);
    }
}

function mostrarNotas() {
    var cantidadAlumnos = document.getElementById('cantidadAlumnos').value;
    var outputContainer = document.getElementById('notasContainer');

    for (var i = 0; i < cantidadAlumnos; i++) {
        var input = document.getElementsByName('alumno' + (i + 1))[0];
        var output = document.getElementById('nota' + (i + 1));

        output.textContent = 'Alumno ' + (i + 1) + ' - Nota: ' + input.value;
    }
}