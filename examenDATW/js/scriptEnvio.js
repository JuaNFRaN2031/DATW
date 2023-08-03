function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function calcPrecio() {
    let destino = document.getElementById("destino").value;
    let peso = document.getElementById("peso").value;
    console.log(destino);
    console.log(peso);
    if (destino == "" || peso == "") {
        alert("Selecciona las opciones para realizar el calculo");
    } else {
        let envioPrecio = parseInt(destino) + parseFloat(peso);
        document.getElementById("envioPrecio").innerHTML = "El envío costaría:" + envioPrecio.toFixed(2);
    }
}
