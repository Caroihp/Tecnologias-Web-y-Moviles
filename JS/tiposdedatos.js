//Numbers
let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

//Con Notación Cientifica
const x = 1000000;
const n_grande = 1e6;
const n_pequeño = 1e-6;

console.log(n_grande);
console.log(n_pequeño);

//bigInt
const bigInt = 1222222222222222222222222222222222253464523230543435567565484600n;
console.log(bigInt);

//Infinity
console.log(edad / 0);
console.log(Infinity);

//¿Es posible esto?
console.log("2" / 2);

//NaN (Error de Cálculo)
console.log("Hola" / 2);
console.log("Hola" * 2);

//Strings
console.log('########## STRINGS ##########');
let nombre = "Victor";
let ciudad = "Osorno"; //Doble comilla o comilla simple
let capital = "Puerto Montt";
let string1 = "Hola ¿Cómo estás?";
let string2 = "¡Buenas Tardes!";
let frase =  `Este es un saludo: ${string1}`;

//Impresion de variables dentro del strings

//Impresion utilizando Backticks
console.log(frase);

//Utilizando el operador +
console.log(ciudad + " y " + capital + " pertenecen a la Región de Los Lagos");

//Utilizando el metodo concat
console.log("Mi nombre es ".concat(nombre, "y vivo en ", ciudad));

//Booleans
console.log('########## BOOLEAN ##########');
let V = true;
let F = false;

//Ejemplo de un ciclo
if (V){
    console.log("Es Verdadero");
} else {

    console.log("Es Falso");
}

//Null
console.log('########## NULL ##########');
let numero_nuevo = null;
console.log(numero_nuevo);

//UNDEFINED
console.log('########## UNDEFINED ##########');
let institución;
console.log(institución);

//OBJETOS Y SIMBOLOS
//Almacen de colecciones de datos

//Hay dos formas de crear un objeto
console.log('########## OBJETOS ##########');
let user = new Object();
let user1 = {};

//Objeto literal
let usuario = {
    name: "Mateo",
    age: 30,
    city: "Osorno",
    "correo electronico": "mateo@gmail.com"
};

/*let universidad = {name: 'ulagos', departamento: 'Ciencias', carrera: 'ICINF'}*/

//Agregando una propiedad nueva al objetos literal
usuario.provincia = "Provincia de Osorno";
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Masculino";

//Accediendo a una propiedad del objeto
console.log(usuario);

//Accediendo a una propiedad CON MAS DE 2 PALABRAS
console.log(usuario["correo electronico"]);

//Eliminando una propiedad del objeto
delete usuario.estado;

console.log(usuario);

//Si deseo saber el tipo de dato
console.log('########## SABER EL TIPO DE DATO ##########');
console.log(typeof nombre);

//Transformando la variable edad de number a string
console.log('########## TRANSFORMANDO DE NUMBER A STRING');
console.log(typeof edad);
edad = String(edad);
console.log(typeof edad);

//Transformar un string a number
let stock = "1000";

console.log('########## TRANSFORMANDO DE STRING A NUMBER'); //El numero siempre esta en color verde
console.log(typeof stock);

console.log(stock);
stock = Number(stock);
console.log(typeof stock);
console.log(stock);