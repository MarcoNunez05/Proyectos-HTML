import { calcular } from "./calcular.js";
import { agregar, limpiar } from "./ui.js";

const botones = document.querySelectorAll('button');
const calculadora = document.getElementById('inputCalc');

botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
        if (this.textContent === '=')
        {
           calcular();
        }
        else if (this.textContent === 'C')
        {
            limpiar();
        }
        else
        {
            agregar(this.textContent);
        }
    })
})

document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    if(!isNaN(tecla) || ['+', '/', '-', '*'].includes(tecla)){
        agregar(tecla);
    }else if(tecla === 'Enter') {
        calcular();
    }else if(tecla === 'Escape') {
        limpiar();
    }
})