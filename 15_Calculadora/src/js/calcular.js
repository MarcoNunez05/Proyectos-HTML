import { actualizarHistorial, limpiar } from "./ui.js";

const calculadora = document.getElementById('inputCalc');
let operacion;

export function calcular() {
    try {
        operacion = calculadora.value;
        console.log(operacion);
        calculadora.value = eval(operacion);
        actualizarHistorial(calculadora.value, operacion);
    }catch(error){
        limpiar();
        calculadora.value = "ERROR";
    }
}