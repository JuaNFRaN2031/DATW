function numeros() {
    let num = 0;
    while (num <= 15) {
        console.log(num);
        num++;
    }
}

function comprobarNombres() {
    let interruptor = false;
    while (!interruptor) {
        let nombre1 = "María", nombre2 = "Juan Fran";
        if (nombre1 != nombre2) {
            interruptor = true;
            console.log(interruptor);
        }
    }
}

function coches() {
    const cars = ["BMW", "Volvo", "Ford", "Volkswagen", "Maserati", "Lamborghini", "Ferrari"];
    let i = 0;
    let text = "";
    while (cars[i]) {
        text += cars[i] + " ";
        console.log(text);
        i++;
    }
}

function escribeNombre() {
    let nombrePrueba = "";
    while (nombrePrueba == "" || nombrePrueba == null) {
        nombrePrueba = prompt("Escriba un nombre: ");
        console.log("Este es un nombre de prueba con el metodo prompt y el nombre es: " + nombrePrueba);
    }
}

function numeroPar() {
    let numero;
    let numeroEsPar = false;
    while (numero % 2 != 0 || !numeroEsPar || numero == null) {
        numero = parseInt(prompt("Escriba un número sino es par no saldrá del bucle: "));
        numeroEsPar = true;
    }
    console.log(numero);
    console.log("¿Tu número ya es par?: " + numeroEsPar);
}