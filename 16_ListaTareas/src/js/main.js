import {agregarTarea, actualizarLista, validarTarea} from "./ui.js";
import {guardarTarea} from "./tareas.js";

const tarea = document.getElementById('tareaInput');
const agregar = document.getElementById('agregar');

tarea.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        nuevaTarea();
    }
});

agregar.addEventListener('click', function() {
    nuevaTarea();
})

function nuevaTarea() {
    if (validarTarea()) {
        agregarTarea(tarea.value, 0);
        guardarTarea(tarea.value);
        tarea.value = '';
    }
}

 window.onload = function() {
    actualizarLista();
}