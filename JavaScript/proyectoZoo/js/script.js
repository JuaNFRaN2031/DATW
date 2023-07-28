function entradas(evt, tipoEntrada) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tipoEntrada).style.display = "block";
    evt.currentTarget.className += " active";
};

let arrayImg = new Array(4);
arrayImg[0] = new Image();
arrayImg[0].src = "img/jimmi-el-mono.webp";
arrayImg[1] = new Image();
arrayImg[1].src = "img/fotaza-leones.webp";
arrayImg[2] = new Image();
arrayImg[2].src = "img/suricatos-besandose.webp";
arrayImg[3] = new Image();
arrayImg[3].src = "img/zorro.webp";

let contador = 0;

function cambiarImagen() {
    document.querySelector("#banner").src = arrayImg[contador].src;
    contador++;
    console.log(contador);
    contador == 4 ? contador = 0 : contador = contador;
    setTimeout("cambiarImagen()", 5000);
}

function validarFormulario() {
    alert("Validando formulario...");
}

window.addEventListener("load", () => {
    cambiarImagen();
});