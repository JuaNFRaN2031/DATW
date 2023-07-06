window.addEventListener('load', function () {
    console.log(document);

    const card2 = this.document.getElementById('card2');
    console.log(card2);

    let elements = this.document.getElementsByTagName('p');
    console.log(elements);

    let elementsDiv = [...this.document.getElementsByTagName('div')];
    console.log(elementsDiv);

    let elementsParrafos = Array.from(this.document.getElementsByTagName('p'));
    console.log(elementsParrafos);

    let cards = Array.from(this.document.getElementsByClassName('card'));
    console.log(cards);

    let primerParrafo = elementsParrafos[0];
    primerParrafo.style.color = "red";
    primerParrafo = elementsParrafos[1];
    primerParrafo.style.color = "lightgreen";
    primerParrafo = elementsParrafos[2];

    primerParrafo.addEventListener('click', function () {
        primerParrafo.style.color = "violet";
    });

    let cuartoParrafo = elementsParrafos[3];
    cuartoParrafo.addEventListener('click', () => {
        let colorRed = random(255);
        let colorGreen = random(255);
        let colorBlue = random(255);
        let colores = 'rgba(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';
        console.log(colores);
        this.document.body.style.backgroundColor = colores;
    });

    let encabezadoPrincipal = Array.from(this.document.getElementsByClassName('tituloPrincipal'));
    console.log(encabezadoPrincipal);
    encabezadoPrincipal = encabezadoPrincipal[0];
    encabezadoPrincipal.addEventListener('click', () => {
        let colorRed = random(255);
        let colorGreen = random(255);
        let colorBlue = random(255);
        let colores = 'rgba(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';
        console.log(colores);
        encabezadoPrincipal.style.color = colores;
    });

    let encabezados = Array.from(this.document.getElementsByClassName('titulo'));
    console.log(encabezados);
    let titulo1 = encabezados[0];
    titulo1.addEventListener('click', () => {
        let colorRed = random(255);
        let colorGreen = random(255);
        let colorBlue = random(255);
        let colores = 'rgba(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';
        console.log(colores);
        titulo1.style.color = colores;
    });

    let titulo4 = encabezados[3];
    titulo4.addEventListener("click", () => {
        encabezados.forEach(cambiarColor);
    });

    /* Cambiar la letra a cursiva de los parrafos cuando pulses click en el quinto parrafo */

    let parrafos = Array.from(this.document.getElementsByTagName('p'));
    console.log(parrafos);
    let parrafo5 = parrafos[4];
    parrafo5.addEventListener("click", () => {
        parrafos.forEach(cambiarTipoLetraParrafos);
    });

    let div5 = elementsDiv[5];
    div5.addEventListener("mouseover", () => {
        div5.style.opacity = "0.5";
    });

    div5.addEventListener("mouseout", () => {
        div5.style.opacity = "1";
    });

    let imagen = Array.from(this.document.getElementsByClassName('imagen2'));
    let imgFinal = imagen[0];
    imgFinal.addEventListener("mouseover", () => {
        imgFinal.style.opacity = "1";
    });
    imgFinal.addEventListener("mouseout", () => {
        imgFinal.style.opacity = "0.5";
    });
});

function cambiarColor(item, index) {
    console.log(item);
    console.log(index);
    item.style.color = "red";
}

function cambiarTipoLetraParrafos(item, index) {
    console.log(item);
    console.log(index);
    item.style.fontStyle = "italic";
}

function random(numero) {
    let result = Math.floor(Math.random() * (numero + 1));
    console.log(result);
    return result;
}

