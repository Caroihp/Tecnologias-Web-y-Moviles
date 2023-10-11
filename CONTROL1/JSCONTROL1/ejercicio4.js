//Crear una funcion que calcule el total de una factura tras aplicarle el IVA. La funcion debe recibir la cantidad
//sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura (la cantidad y porcentaje debe ingresar el usuario por navegador). 
//Si se invoca la funcion sin pasarle el porcentaje de IVA, debera aplicar un 19% por defecto

function CalcularIva(cantsiniva, porcentajeiva = 19) {
    let total = cantsiniva * (1 + porcentajeiva / 100);
    return total;
}

let cantsiniva = parseFloat(prompt("Ingrese la cantidad de su factura sin IVA: ", ''));

let porcentajeiva = parseFloat(prompt("Ingrese el porcentaje: ", '')) || 19;

let totalFactura = CalcularIva(cantsiniva, porcentajeiva);
  
alert(`El total de la factura con ${porcentajeiva}% de IVA es: ${totalFactura.toFixed(2)}`);