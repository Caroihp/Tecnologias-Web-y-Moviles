function calculoIMC(){
    var pesoPersona = parseFloat(document.getElementById('peso').value);
    var alturaPersona = parseFloat(document.getElementById('altura').value);
    var actividadFisica = parseFloat(document.getElementById('actividadfisica').value);
    
    if (isNaN(pesoPersona) || isNaN(alturaPersona)) {
        alert("Ingrese un peso y altura válida.");
        return;
    }

    // Calcular IMC
    var imc = pesoPersona / (alturaPersona * alturaPersona);
    document.getElementById('IMCF').innerHTML = imc;

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
    document.getElementById("CLASF").innerHTML = clasificacion;

    // Calcular GED
    var ged = pesoPersona * actividadFisica;
    document.getElementById("GEDF").innerHTML = ged.toFixed(2);
    
    // Estado Nutricional
    let estado = '';
    if (imc < 18.5 || imc >= 30) {
        estado = 'Necesita atención especializada';
    } else {
        estado = 'Estado nutricional adecuado';
    }
        document.getElementById("ENF").textContent = estado;

}
