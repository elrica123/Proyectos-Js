const display = document.getElementById("tiempo-pantalla")
const iniciar = document.getElementById("iniciar")
const detener = document.getElementById("detener")
const reiniciar = document.getElementById("reiniciar")
const guardar = document.getElementById("guardar")
const tiempos = document.getElementById("Tiempos-guardados")
const borrar = document.getElementById("borrar")


let corriendo = false;
let tiempo = 0;
let intervalo;
let vueltas = 0;



function actualizarDisplay() {
    tiempo = tiempo+10

    minutos  = Math.floor(tiempo / 60000)
    segundos = Math.floor((tiempo % 60000) / 1000)
    milisegundos = Math.floor((tiempo % 1000) / 10)

    minutosFormateados = minutos.toString().padStart(2, "0");
    segundosFormateados = segundos.toString().padStart(2, "0");
    milisegundosFormateados = milisegundos.toString().padStart(2, "0")

    display.textContent = minutosFormateados + ":" + segundosFormateados + ":" + milisegundosFormateados;
}



iniciar.addEventListener("click", () => {
    if (corriendo === false) {
        intervalo = setInterval(actualizarDisplay, 10)
        corriendo = true
    }
    else if (corriendo === true); {

    }

})

document.addEventListener("keydown", () => {
    if (corriendo === false) {
        intervalo = setInterval(actualizarDisplay, 10)
        corriendo = true
    }
    else if (corriendo == true) {
        let historial = document.createElement("p");
        clearInterval(intervalo)
        corriendo = false
        vueltas += 1
        historial.textContent = "Tiempo " + vueltas + ": " + minutosFormateados + ":" + segundosFormateados + ":" + milisegundosFormateados
        tiempos.appendChild(historial);
    }
})

detener.addEventListener("click", () => {
    let historial = document.createElement("p");
    clearInterval(intervalo)
    corriendo = false
    vueltas += 1
    historial.textContent = "Tiempo " + vueltas + ": " + minutosFormateados + ":" + segundosFormateados + ":" + milisegundosFormateados
    tiempos.appendChild(historial);
})

reiniciar.addEventListener("click", () => {
    clearInterval(intervalo)
    tiempo = 0
    minutosFormateados = "00"
    segundosFormateados = "00"
    milisegundosFormateados = "00"
    corriendo = false
    display.textContent = minutosFormateados + ":" + segundosFormateados + ":" + milisegundosFormateados
})

borrar.addEventListener("click" , () => {
    vueltas = 0
    tiempos.textContent = ""
})