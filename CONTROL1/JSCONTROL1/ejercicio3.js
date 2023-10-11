//Desarrollar un programa que solicite al usuario un nombre de usuario (nickname) y verifique si cumple con ciertos 
//criterios de validez. El nombre de usuario debe cumplir con los siguientes requisitos para considerarse valido
//a. debe tener al menos 6 caracteres de longitud.
//b. debe contener letras (mayusculas o minusculas) ademas de numeros
//c. debe comenzar con una letra y terminar con un numero
//El programa debe mostrar un mensaje en el navegador indicando si el nombre de usuario ingresado es valido o no
//segun los criterios mencionados. si el nombre de usuario cumple con todos los criterios, se mostrara un mensaje de "El nombre de usuario es valido"
//De lo contrario, se mostrara un mensaje que indica que el nombre de usuario no cumple con los requisitos solicitados

function verificarNombre(nombreUsuario) {
    if (nombreUsuario.length < 6) {
        return false;
    }

    if (!/[a-zA-Z]/.test(nombreUsuario)) {
        return false;
    }

    if (!/\d$/.test(nombreUsuario)) {
        return false;
    }

    if (!/[a-zA-Z0-9]/.test(nombreUsuario)) {
        return false;
    }

    return true;
}

let nombreUsuario = prompt("Ingrese un nombre de usuario que cumpla con los siguientes requisitos:\n" +
                        "- Debe tener al menos 6 caracteres de longitud.\n" +
                        "- debe contener letras (mayusculas o minusculas) ademas de numeros.\n" +
                        "- debe comenzar con una letra y terminar con un numero.", '');
while (!verificarNombre(nombreUsuario)) {
    alert("El nombre de usuario no es válido, no cumple con los requisitos solicitados");
    nombreUsuario = prompt("Ingrese un nombre de usuario que cumpla con los siguientes requisitos:\n" +
                            "- Debe tener al menos 6 caracteres de longitud.\n" +
                            "- debe contener letras (mayusculas o minusculas) ademas de numeros.\n" +
                            "- debe comenzar con una letra y terminar con un numero.", '');
}         

alert("El nombre de usuario es válido.");