import {cambiarTarea, cambiarChecked, obtenerTarea, obtenerChecked} from './storage.js';

let tareas = obtenerTarea();
let checked = obtenerChecked();

export function getTareas() {
    return tareas;
}

export function getChecked() {
    return checked;
}

export function eliminarTarea(numTarea) {
    if (numTarea > -1)
    {
        tareas.splice(numTarea, 1);
        checked.splice(numTarea, 1);
        cambiarTarea(tareas);
        cambiarChecked(checked);
    }
}

export function guardarTarea(tarea)
    {
        tareas.push(tarea);
        checked.push(0);
        console.log(checked);
        cambiarTarea(tareas);
        cambiarChecked(checked);
    }