function ShowSelected() {
    let opcion = document.getElementById("opcion").value;
    switch (opcion) {

        case "prenatal":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria, Tétanos, Tosferina";
            break;

        case "2meses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo Conjugada";
            break;

        case "4meses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo C, Meningococo B, Neumococo Conjugada";
            break;

        case "11meses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo Conjugada";
            break;

        case "12meses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B";
            break;

        case "15meses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Varicela";
            break;

        case "4anos":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Sarampión, Rubeola, Parotiditis, Varicela";
            break;

        case "6anos":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria, Tétanos, Tosferina, Polimielitis";
            break;

        case "12anos":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Varicela, Meningococo ACWY, Papilomavirus";
            break;

        case "14anos":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria, Tétanos";
            break;

        default:
            document.getElementById("resultado").innerHTML = "Seleccione la edad del niño/a";
            break;


    }
}