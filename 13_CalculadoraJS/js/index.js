seleccionarOperacion()
function seleccionarOperacion() {
    let num1 = Number(prompt("Inserte el primer número", 0));
    let num2 = Number(prompt("Inserte el segundo número", 0));
    let op = prompt("Seleccione su operación: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División", 0);
    let resultado = 0;

    if (op == 1)
    {
        resultado = num1 + num2;
    }
    else if (op == 2)
    {
        resultado = num1 - num2;
    }
    else if (op == 3)
    {
        resultado = num1 * num2;
    }
    else if (op == 4)
    {
        if (num2 != 0)
        {
            resultado = num1 / num2;
        }
        else
        {
            console.log("Esta operación es indefinida.");
            return;
        }
    }
    else
    {
        console.log("Opción inválida.");
        return;
    }

    console.log("El resultado es: " + Number.parseInt(resultado));
}