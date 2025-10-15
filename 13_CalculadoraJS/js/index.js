function seleccionarOperacion() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operacion").value;
    let resultado = 0;

    if (op == "suma")
    {
        resultado = num1 + num2;
    }
    else if (op == "resta")
    {
        resultado = num1 - num2;
    }
    else if (op == "multiplicacion")
    {
        resultado = num1 * num2;
    }
    else if (op == "division")
    {
        if (num2 != 0)
        {
            resultado = num1 / num2;
        }
        else
        {
            console.log("Esta operación es indefinida");
            return;
        }
    }

    console.log(Number.parseInt(resultado));
}