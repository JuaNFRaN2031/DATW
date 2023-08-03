/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.addEventListener("load", () => {
    let imagen = document.getElementById("imagen-internacional");
    imagen.addEventListener("mouseover", () => {
        imagen.style.width = "55%";
    });
    imagen.addEventListener("mouseout", () => {
        imagen.style.width = "50%";
    });
});