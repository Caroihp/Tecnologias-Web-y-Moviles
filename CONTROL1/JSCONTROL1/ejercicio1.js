//En una empresa del area TI, sus trabajadores son calificados al final de cada año. Los puntos que pueden obtener en la evaluacion comienzan en 0.0
//y pueden ir aumentando, y de esta forma se traduce en mejores beneficios. Los puntos que pueden conseguir
//los empleados puden ser 0.0, 0.2, 0.4, 0.6 y 0.8, pero no valores intermedios entre las cifras mencionadas. A continuacion se muestra una tabla
//con los niveles correspondientes a cada puntuacion. La cantidad de dinero conseguida en cada nivel es de $350.000
//multiplicada por la puntuacion del nivel correspondiente.

//Desarrollar un programa que lea la puntuacion del usuario e indique su nivel de rendimiento, asi como la cantidad de dinero que recibira el usuario

let puntuacion = parseFloat(prompt("Ingrese la puntuación del usuario: ", ''));
while(isNaN(puntuacion)){
    alert("La puntuacion ingresada no es válida, intente nuevamente");
    puntuacion = parseFloat(prompt("Ingrese la puntuación del usuario: ", ''));
}

let dinero = 350000;

if (puntuacion==0.0){
    dinero=dinero*0.2;
    alert (`Su nivel de rendimiento es Insuficiente\n
            La cantidad de dinero conseguida es ${dinero}`);
} else if (puntuacion==0.2){
    dinero=dinero*0.2;
    alert (`Su nivel de rendimiento es Insuficiente\n
            La cantidad de dinero conseguida es ${dinero}`);
} else if (puntuacion==0.4){
    dinero=dinero*0.4;
    alert (`Su nivel de rendimiento es Aceptable\n
            La cantidad de dinero conseguida es ${dinero}`);
} else if (puntuacion==0.6){
    dinero=dinero*0.6;
    alert (`Su nivel de rendimiento es Meritorio\n
            La cantidad de dinero conseguida es ${dinero}`);
} else if (puntuacion==0.8){
    dinero=dinero*0.8;
    alert (`Su nivel de rendimiento es Excelente\n
            La cantidad de dinero conseguida es ${dinero}`);
} else{;
    alert("La puntuación ingresada no es válida. Debe ser 0.0, 0.2, 0.4, 0.6 o 0.8.")
}