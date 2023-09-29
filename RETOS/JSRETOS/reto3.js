//Desarrollar un programa en JavaScript que permita calcular la propina en un restaurante. El
//programa debe interactuar con el usuario a través de una interfaz sencilla en HTML5.
//El programa debe cumplir con los siguientes requerimientos:
//1. El usuario podrá ingresar el monto total de la boleta (monto en CLP) en un campo de texto.
//2. Deberá existir un menú desplegable donde el usuario pueda seleccionar el porcentaje de
//propina deseado (por ejemplo, 10%, 15%, 20%).
//3. Al hacer clic en un botón de "Calcular", el programa deberá realizar el cálculo de la propina.
//4. El resultado del cálculo de la propina deberá mostrarse en pantalla, indicando el monto de la
//propina y el total a pagar incluyendo la propina.
//5. El programa debe incluir validaciones para asegurar que el monto de la boleta sea un
//número válido y que se seleccione un porcentaje de propina válido.

//Se debe utilizar JavaScript para realizar los cálculos necesarios y manipular el DOM en HTML5 para
//mostrar los resultados solicitados al usuario. Subir Reto N°3 a Ulagos Virtual, dentro de la fecha
//límite.

function calcularPropina() {
    // Obtener el monto total de la boleta y el porcentaje de propina seleccionado
    const montoBoleta = parseFloat(document.getElementById('monto').value);
    const porcentajePropina = parseFloat(document.getElementById('porcentaje').value);

    // Validar que el monto sea un número válido y que se haya seleccionado un porcentaje válido
    if (isNaN(montoBoleta) || isNaN(porcentajePropina)) {
        alert("Por favor, ingrese un monto válido y seleccione un porcentaje de propina válido.");
        return;
    }

    // Calcular la propina
    const propina = (montoBoleta * porcentajePropina) / 100;

    // Calcular el total a pagar incluyendo la propina
    const totalConPropina = montoBoleta + propina;

    // Mostrar el resultado en pantalla
    const resultado = `Monto de la Propina: CLP ${propina.toFixed(2)}<br>Total a Pagar (con propina): CLP ${totalConPropina.toFixed(2)}`;
    document.getElementById('resultado').innerHTML = resultado;
}