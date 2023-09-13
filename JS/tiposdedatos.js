let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

const x = 1000000;
const n_grande = 1e6;
const n_pequeño = 1e-6;

console.log(n_grande);
console.log(n_pequeño);

const bigInt = 1200000000000000005346452323000000000000;
console.log(bigInt);

console.log(edad / 0);
console.log(Infinity);

console.log("2" / 2);

console.log("Hola" / 2);
console.log("Hola" * 2);

console.log('########## STRINGS ##########');
let nombre = "Victor";
let ciudad = "Osorno";
let capital = "Puerto Montt";
let string1 = "Hola ¿Cómo estás?";
let string2 = "¡Buenas Tardes!";
let frase =  `Este es un saludo: ${string1}`;

console.log(frase);

console.log(ciudad + " y " + capital + " pertenecen a la Región de Los Lagos");
console.log("Mi nombre es ".concat(nombre, "y vivo en ", ciudad));

console.log('########## BOOLEAN ##########');
let V = true;
let F = false;

if (V){
    console.log("Es Verdadero");
} else {

    console.log("Es Falso");
}

console.log('########## NULL ##########');
let numero_nuevo = null;
console.log(numero_nuevo);

console.log('########## UNDEFINED ##########');
let institución;
console.log(institución);

console.log('########## OBJETOS ##########');
let user = new Object();
let user1 = {};

let usuario = {
    name: "Mateo",
    age: 30,
    city: "Osorno",
    "correo electronico": "mateo@gmail.com"
};

usuario.provincia = "Provincia de Osorno";
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Masculino";

console.log(usuario);

console.log(usuario["correo electronico"]);

delete usuario.estado;

console.log(usuario);

console.log('########## SABER EL TIPO DE DATO ##########');
console.log(typeof nombre);

console.log('########## TRANSFORMANDO DE NUMBER A STRING');
console.log(typeof edad);
edad = String(edad);
console.log(typeof edad);

let stock = "1000";

console.log('########## TRANSFORMANDO DE STRING A NUMBER'); //El numero siempre esta en color verde
console.log(typeof stock);

console.log(stock);
stock = Number(stock);
console.log(typeof stock);
console.log(stock);