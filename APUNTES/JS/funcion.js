console.log("########## FUNCION BASICA ##########");
function mostrarMensaje(){
    alert("Hola a todos!");
}

mostrarMensaje();

console.log("########## VARIABLES INTERNAS ##########");
function varInterna(){
    let mensaje = "Hola, Soy un mensaje de la variable local";
    alert(mensaje);
}

varInterna();

console.log("########## VARIABLES EXTERNAS ##########");
let nombre = 'Victor';
function mostarNombre(){
    let msj = 'Hola,' + nombre;
    alert(msj);
}

mostarNombre();

let institucion = 'Ulagos'; //Variable Global
function mostarInstitucion(){
    let institucion = "Universidad De Los Lagos";
    let texto = 'Yo estudio en la ' + institucion;
    alert(texto);
}

mostarInstitucion();
alert(institucion); //Ulagos, se mantiene, la funcion no accedio a la variable externa