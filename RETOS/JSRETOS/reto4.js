function calculoIMC(){
    var pesoPersona = parseFloat(document.getElementById('peso').value);
    var alturaPersona = parseFloat(document.getElementById('altura').value);
    var actividadFisica = parseFloat(document.getElementById('actividadfisica').value);
    var nombre = document.getElementById('nombre').value;

    // Validaciones:
    if (pesoPersona <= 0 || alturaPersona <= 0) {
        alert('Por favor ingrese valores positivos.');
        return;
    }
    
    if (alturaPersona < 0 || alturaPersona > 3.0) {
        alert('Por favor ingrese una altura válida.');
        return;
    }

    //Calcular IMC
    var imc = pesoPersona / (alturaPersona * alturaPersona);

    //Clasificación del IMC
    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = 'Peso normal';
    } else if (imc > 24.9) {
        clasificacion = 'Sobrepeso';
    }

    //Calcular GED
    var ged = pesoPersona * actividadFisica;

    //Estado Nutricional
    let estadoNutricional = '';
    if (imc < 18.5 || imc > 24.9) {
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