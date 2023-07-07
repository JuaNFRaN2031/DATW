window.addEventListener('load', () => {
    const boton = document.querySelectorAll('.boton');
    boton[0].addEventListener('click', () => {
        const bombilla = document.querySelector('#bombilla');
        bombilla.src = "img/pic_bulbon.gif";
    });
    boton[1].addEventListener('click', () => {
        const bombilla = document.querySelector('#bombilla');
        bombilla.src = "img/pic_bulboff.gif";
    });
});