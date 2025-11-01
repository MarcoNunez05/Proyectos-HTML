export function cambiarTarea(tarea) {
    localStorage.setItem('ListaTareas', JSON.stringify(tarea));
}

export function cambiarChecked(checked){
    localStorage.setItem('ListaChecked', JSON.stringify(checked));
}

export function obtenerTarea() {
    return JSON.parse(localStorage.getItem('ListaTareas'));
}

export function obtenerChecked() {
    return JSON.parse(localStorage.getItem('ListaChecked'));
}