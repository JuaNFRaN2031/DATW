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
});

function random(numero) {
    let result = Math.floor(Math.random() * (numero + 1));
    console.log(result);
    return result;
}