function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Ejemplo de uso:
console.log(factorial(5)); // Salida: 120


6. Función para contar vocales en una cadena
Crea una función llamada contarVocales que reciba una cadena y devuelva el número de vocales que contiene.


Copiar el código
function contarVocales(cadena) {
  const vocales = "aeiouAEIOU";
  let contador = 0;

  for (let letra of cadena) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

// Ejemplo de uso:
console.log(contarVocales("Hola Mundo")); // Salida: 4
Estos ejercicios son un buen punto de partida para practicar funciones en JavaScript. ¡Espero que te resulten útiles y divertidos! 😊

