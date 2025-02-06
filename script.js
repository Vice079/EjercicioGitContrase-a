console.log("Hola")
const entrada = document.getElementById("entrada")
entrada.addEventListener("keydown", valoracion)


function valoracion() {
    if (entrada.value.length < 8) {
        const infodata = document.getElementById("info")
        infodata.innerText = "Contraseña no segura";
        infodata.style.color = "red";
    } else if (entrada.value.lenght >= 8 && entrada.value.lenght <= 10) {
        const infodata = document.getElementById("info")
        infodata.innerText = "Contraseña de seguridad intermedia";
        infodata.style.color = "blue";
    }  else {
        const infodata = document.getElementById("info")
        infodata.innerText = "Contraseña segura"
        infodata.style.color = "green"
    }   
}         
