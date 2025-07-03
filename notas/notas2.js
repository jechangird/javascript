function promedioRecursivo(lista, suma = 0, indice = 0) {
  // Caso base: si hemos recorrido toda la lista
  if (indice === lista.length) {
    return lista.length === 0 ? 0 : suma / lista.length;
  }

  // Llamada recursiva sumando el elemento actual
  return promedioRecursivo(lista, suma + lista[indice], indice + 1);
}

// Ejemplo de uso
const numeros = [5, 7.8, 9.3, 6.7,4.8];
const promedio = promedioRecursivo(numeros);
console.log(`El promedio es: ${promedio}`);