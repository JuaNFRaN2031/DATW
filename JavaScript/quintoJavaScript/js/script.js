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
    let notaAlumno;
    switch (nota) {
        case 0:
            notaAlumno = "Insuficiente";
            break;
        case 1:
            notaAlumno = "Insuficiente";
            break;
        case 2:
            notaAlumno = "Insuficiente";
            break;
        case 3:
            notaAlumno = "Insuficiente";
            break;
        case 4:
            notaAlumno = "Insuficiente";
            break;
        case 5:
            notaAlumno = "Suficiente";
            break;
        case 6:
            notaAlumno = "Bien";
            break;
        case 7:
            notaAlumno = "Bien";
            break;
        case 8:
            notaAlumno = "Notable";
            break;
        case 9:
            notaAlumno = "Notable";
            break;
        case 10:
            notaAlumno = "Sobresaliente. Has sacado la mayor nota, ENHORABUENA";
            break;
        default:
            notaAlumno = "ERROR. Esa nota no existe";
            break;
    }
    console.log(nota);
    console.log(notaAlumno);
    document.getElementById("notaAlumno").innerHTML = notaAlumno;
}

function cambiarColor() {
    let colores = ["#f2f2f2", "#001100", "000000", "red", "lightgreen", "#d8d5d7"];
    let indice = parseInt(document.getElementById("numero").value);
    // Decrementamos el numero recogido para hacer coincidir para el array de colores
    --indice;
    for (let i = 0; i < colores.length; i++) {
        if (i == indice) {
            document.getElementById("caja").style.backgroundColor = colores[i];
        }
    }
}