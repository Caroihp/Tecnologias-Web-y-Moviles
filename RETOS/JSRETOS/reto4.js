function calculoIMC(){
    var pesoPersona = parseFloat(document.getElementById('peso').value);
    var alturaPersona = parseFloat(document.getElementById('altura').value);
    var actividadFisica = parseFloat(document.getElementById('actividadfisica').value);
    var nombre = document.getElementById('nombre').value;

    // Calcular IMC
    var imc = pesoPersona / (alturaPersona * alturaPersona);

    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = 'Peso normal';
    } else if (imc > 24.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    // Calcular GED
    var ged = imc * actividadFisica;

    // Estado Nutricional
    let estadoNutricional = '';
    if (imc < 18.5 || imc >= 30) {
        estadoNutricional = 'Necesita atención especializada';
    } else {
        estadoNutricional = 'Estado nutricional adecuado';
    }

    var resultado = `
    <h2> Resultados para ${nombre}: </h2>
    IMC: ${imc.toFixed(2)} <br>
    <br>
    Clasificación: ${clasificacion} <br>
    <br>
    Gasto Energético Diario: ${ged.toFixed(2)} kcal <br>
    <br>
    Estado Nutricional: ${estadoNutricional}
    `;

    document.getElementById("resultado").innerHTML = resultado;

}