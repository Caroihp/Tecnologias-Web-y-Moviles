//ciclo while
console.log("########## WHILE ##########");
let i=0

while(i<= 5){
    console.log(i);
    i++;
}

//ciclo do-while //ITERACION PRIMERO Y DESPUES CORROBORA LA CONDICION
console.log("\n########## DO-WHILE ##########");
let aux=0

do{
    console.log(aux);
    aux++
} 
while (aux <= 3); 

//ciclo for
console.log("\n########## FOR ##########");
for (let x=1; x<=3; x++){
    console.log(x);
}

//ciclo for
console.log("\n########## OMISIONES DE PARTES EN EL FOR ##########");
let j=0;
for (; j<=7; j++){
    console.log(j);
}

for(; j<=7;){
    console.log(j++); //este bucle a que se parece
}

console.log("\n########## USO DEL BREAK ##########")
let suma = 0;
while (true){

    let valor = +prompt("Ingrese un numero, porfavor", '');
    if (!valor) break; //quiebre del ciclo
    suma += valor;
}
alert(`La suma es de: ${suma}`);

console.log("########## USO DEL CONTINUE ##########")
for(let i=0; i<10; i++){
    if (i%2 == 0) continue;
    alert(i); //1, luego 3, 5, 7, 9 (solo impares)
}