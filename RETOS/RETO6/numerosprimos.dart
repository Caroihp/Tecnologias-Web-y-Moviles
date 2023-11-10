//Crear un programa en Dart que contenga una función que determine si un número dado es primo o no. 
import "dart:io";
bool esPrimo(int numero) {
  if (numero < 2) return false;
  for (int i = 2; i * i <= numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

void main() {
  print('Ingrese un número:');
  int numero = int.parse(stdin.readLineSync()!);
  
  // Verificar si el número es primo
  print('El número $numero ${esPrimo(numero) ? "es" : "no es"} primo.');
}