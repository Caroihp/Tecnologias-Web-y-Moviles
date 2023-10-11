//Escribir un programa en el que se pregunte al usuario por una frase y una letra, 
//y mueste por pantalla el numero de veces que aparece la letra en la frase.

let frase = prompt("Ingrese una frase: ", '');

let letra = prompt("Ingrese una letra: ", '');

let contadorletras = 0;
  
for (let j = 0; j < frase.length; j++) {
  if (frase[j].toLowerCase() === letra.toLowerCase()) {
    contadorletras++;
  }
}

alert(`El número de veces que aparece la letra ${letra} es ${contadorletras}`)