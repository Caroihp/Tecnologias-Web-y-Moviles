//Nota 1
let nota1 = parseFloat(prompt("Ingrese la nota 1: ", ''));
  while (isNaN(nota1) || nota1 < 1 || nota1 > 7) {
    alert("La nota 1 no es valida. Debe ser un número entre 1 y 7");
    nota1 = parseFloat(prompt("Ingrese la nota 1: ", ''));
  }

//Nota 2
let nota2 = parseFloat(prompt("Ingrese la nota 2: ", ''));
  while (isNaN(nota2) || nota2 < 1 || nota2 > 7) {
    alert("La nota 1 no es valida. Debe ser un número entre 1 y 7");
    nota2 = parseFloat(prompt("Ingrese la nota 2: ", ''));
  }

//Nota 3
let nota3 = parseFloat(prompt("Ingrese la nota 3: ", ''));
  while (isNaN(nota3) || nota3 < 1 || nota3 > 7) {
    alert("La nota 1 no es valida. Debe ser un número entre 1 y 7");
    nota3 = parseFloat(prompt("Ingrese la nota 3: ", ''));
  }
  
//Promedio
const promedio = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(1);

//Validar Promedio
  if (promedio < 3.95) {
    alert(`Has reprobado la asignatura. Con Promedio: ${promedio}`);
  } else if (promedio >= 3.95 && promedio <= 4.94) {
    alert(`Vas a examen. Con Promedio: ${promedio}`);
  } else {
    alert(`Te eximes de la asignatura. Con Promedio: ${promedio}`);
  }