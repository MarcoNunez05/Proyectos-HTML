import {eliminarTarea, getTareas, getChecked} from "./tareas.js";

const tarea = document.getElementById('tareaInput');
const tareasList = document.getElementById('tareasList');
let numList = 0;

export function validarTarea() {
    let texto = tarea.value.trim();

    if(!texto) {
        tarea.placeholder = 'No se pueden agregar tareas vacías';
        tarea.focus();
        return false;
    }

    tarea.placeholder = 'Inserte la tarea...';
    return true;
}

export function agregarTarea(texto, completada)
    {
        const card = document.createElement('div');
        card.id = String(numList);
        card.classList.add('card');
        card.classList.add('bg-white');
        card.classList.add('card-xl');
        card.classList.add('shadow-sm');
        card.classList.add('justify-center');

        const cardCenter = document.createElement('div');
        cardCenter.classList.add('flex');
        cardCenter.classList.add('pl-5');
        cardCenter.classList.add('items-center');

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.classList.add('justify-start');

        const tareaText = document.createElement('p');
        tareaText.classList.add('pl-5');
        tareaText.textContent = texto;

        if (completada == 1)
        {
            check.checked = true;
            tareaText.classList.add('text-gray-500');
            tareaText.classList.add('line-through');
        }
        else
        {
            tareaText.classList.add('text-black');
        }

        const eliminar = document.createElement('button');
        eliminar.classList.add('btn');
        eliminar.classList.add('btn-secondary');
        eliminar.classList.add('text-white');
        eliminar.classList.add('text-md');
        eliminar.textContent = 'Eliminar';

        check.addEventListener('change', (e) =>{
            tareaText.classList.toggle('line-through');
            tareaText.classList.toggle('text-black');
            tareaText.classList.toggle('text-gray-500');
            if (check.checked)
            {
                let tempCheck = getChecked();
                tempCheck[parseInt(card.id)] = 1;
                localStorage.setItem('ListaChecked', JSON.stringify(tempCheck));
            }
            else
            {
                let tempCheck = getChecked();
                tempCheck[parseInt(card.id)] = 0;
                localStorage.setItem('ListaChecked', JSON.stringify(tempCheck));
            }
        })

        eliminar.addEventListener('click', (e) =>{
            eliminarTarea(parseInt(card.id));
            numList = 0;
            actualizarLista();
        })

        card.appendChild(cardCenter);
        cardCenter.appendChild(check);
        cardCenter.appendChild(tareaText);
        cardCenter.appendChild(eliminar);
            
        numList++;
        console.log(numList);

        tareasList.appendChild(card);

    }

export function actualizarLista()
    {
        let listaTareas = getTareas();
        let listaChecked = getChecked();
        console.log(listaTareas);
        console.log(listaChecked);
        if (listaTareas == null) {
            listaTareas = [];
        }
        if (listaChecked == null) {
            listaChecked = [];
        }
        tareasList.innerHTML = '';

        listaTareas.forEach(tarea =>{
            agregarTarea(tarea, listaChecked[numList]);
        })
    }