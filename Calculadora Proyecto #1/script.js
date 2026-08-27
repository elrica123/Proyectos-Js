const botones = document.querySelectorAll(".botones") // busca todos los botones de la pagina
const resultado = document.querySelector(".resultados") // busca el resultado de la operacion

let operacion = "" // variable que almacena la operacion que se va a realizar

function limitarDecimales(valor) {
    return Number(valor.toFixed(3)); // limita el resultado a 3 decimales
}


botones.forEach((boton) =>  { // recorre todos los botones y les agrega un evento de click 
    boton.addEventListener("click", () => {
        const valor = boton.textContent; // obtiene el valor del boton que se presiono

        if (valor === "=") {  
            operacion = String(limitarDecimales(eval(operacion))); // evalua la operacion y la convierte en string 
            // eval() es una funcion que evalua una cadena de texto como si fuera codigo de javascript
            resultado.textContent = operacion; // muestra el resultado de la operacion en el div resultados
        }
        else if (valor == "CE") { 
            operacion = ""; // si se presiona el boton CE, se limpia la operacion
            resultado.textContent = operacion;
        }
        else if (valor == "√") {
            operacion = String( limitarDecimales(Math.sqrt(eval(operacion)))); // evalua la operacion y le aplica la raiz cuadrada
            resultado.textContent = operacion;
        }
        else if (valor == "x²") {
            operacion = String( limitarDecimales(Math.pow(eval(operacion), 2))); // evalua la operacion y le aplica la potencia de 2
            resultado.textContent = operacion; 
        }
        else if (valor == "+/-") {
            operacion = String( limitarDecimales(eval(operacion) * -1)); // evalua la operacion y le aplica el cambio de signo
            resultado.textContent = operacion;
        }
        else{
            operacion += valor; // si se presiona cualquier otro boton, se agrega el valor del boton a la operacion
            resultado.textContent = operacion;
        }
    })
});
