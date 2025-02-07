console.log("Hola");
const entrada = document.getElementById("entrada");
entrada.addEventListener("keyup", valoracion);

function valoracion() {
    let longitud = entrada.value.length;
    const infodata = document.getElementById("info");
    if (longitud < 8) {
        infodata.innerText = "Contraseña no segura";
        infodata.style.color = "red";
    } else if (longitud >= 8 && longitud <= 10) {
        infodata.innerText = "Contraseña de seguridad intermedia";
        infodata.style.color = "blue";
    } else {
        infodata.innerText = "Contraseña segura";
        infodata.style.color = "green";
    }
}
