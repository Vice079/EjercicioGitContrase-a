const entrada = document.getElementById("entrada");
const boton = document.getElementById("boton");
const infodata = document.getElementById("info");

entrada.addEventListener("keyup", valoracion);

function valoracion() {
    let longitud = entrada.value.length;
    if (longitud < 8) {
        infodata.innerText = "Contraseña no segura";
        infodata.style.color = "red";
        boton.disabled = true;
    } else if (longitud >= 8 && longitud <= 10) {
        infodata.innerText = "Contraseña de seguridad intermedia";
        infodata.style.color = "blue";
        boton.disabled = true;
    } else {
        infodata.innerText = "Contraseña segura";
        infodata.style.color = "green";
        boton.removeAttribute("disabled");
    }
}