const historial = document.getElementById('historial');
const calculadora = document.getElementById('inputCalc');

let operacion = '';

export function actualizarHistorial(resultado, operacionInicial) {
    const op = document.createElement('p');
    op.classList.add('text-black')
    op.textContent = operacionInicial;

    op.textContent += (" = " + resultado); 
    historial.appendChild(op);
    limpiar();
}

export function agregar(caracter) {
    operacion += caracter;
    calculadora.value = operacion;
}

export function limpiar() {
    calculadora.value = '';
    operacion = '';
}