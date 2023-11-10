//Además en otra función verificar si el número es par o es impar. El usuario debe ingresar el número por consola.
import "dart:io";
bool esPar(int numero) {
  return numero % 2 == 0;
}

void main() {
  print('Ingrese un número:');
  int numero = int.parse(stdin.readLineSync()!);

  // Verificar si el número es par
  print('El número $numero es ${esPar(numero) ? "par" : "impar"}.');
}