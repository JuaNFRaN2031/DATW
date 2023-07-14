window.addEventListener('load', function () {
    let formPago = this.document.querySelectorAll("input[name='formaPago']");
    console.log(formPago);
    let divFormTC = document.querySelector("#formTarjetaCredito");
    let divFormPayPal = document.querySelector("#formPayPal");
    let divFormBizum = document.querySelector("#formBizum");
    for (let i = 0; i < 2; i++) {
        formPago[i].addEventListener("change", function () {
            divFormTC.style.display = "block";
            divFormPayPal.style.display = "none";
            divFormBizum.style.display = "none";
        });
    }
    formPago[2].addEventListener("change", function () {
        divFormTC.style.display = "none";
        divFormPayPal.style.display = "block";
        divFormBizum.style.display = "none";
    });
    formPago[3].addEventListener("change", function () {
        divFormTC.style.display = "none";
        divFormPayPal.style.display = "none";
        divFormBizum.style.display = "block";
    });
});