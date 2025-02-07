console.log("Hola");
const entrada = document.getElementById("entrada");
entrada.addEventListener("keydown", valoracion);

function valoracion() {
    let longitud = entrada.value.length;
    if (longitud < 8) {
        const infodata = document.getElementById("info");
        infodata.innerText = "Contraseña no segura";
        infodata.style.color = "red";
    } else if (longitud >= 8 && longitud <= 10) {
        const infodata = document.getElementById("info");
        infodata.innerText = "Contraseña de seguridad intermedia";
        infodata.style.color = "blue";
    } else {
        const infodata = document.getElementById("info");
        infodata.innerText = "Contraseña segura";
        infodata.style.color = "green";
    }
}
