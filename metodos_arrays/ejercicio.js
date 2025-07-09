/Metodos de arrays
/*
  Los métodos de arrays son funciones que se pueden aplicar a arrays para realizar diversas operaciones.
  Algunos de los métodos más comunes son:
  - `push()`: Agrega uno o más elementos al final del array.
  - `pop()`: Elimina el último elemento del array y lo devuelve.
  - `shift()`: Elimina el primer elemento del array y lo devuelve.
  - `unshift()`: Agrega uno o más elementos al inicio del array.
  - `splice()`: Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
  - `slice()`: Devuelve una copia superficial de una porción del array dentro de un nuevo array.
  - `forEach()`: Ejecuta una función proporcionada una vez por cada elemento del array.
  - `map()`: Crea un nuevo array con los resultados de la llamada a la función proporcionada en cada elemento del array.
  - `filter()`: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función proporcionada.
  - `reduce()`: Aplica una función contra un acumulador y cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
  - `find()`: Devuelve el primer elemento del array que cumple con la condición proporcionada en la función.
  - `includes()`: Verifica si un elemento está presente en el array.
*/
let frutasArray = ["melon", "tomate", "banana", "manzana", "pera"];
frutasArray.push("uva"); // Agrega "uva" al final del array
frutasArray.pop(); // Elimina el último elemento y lo devuelve
frutasArray.shift(); // Elimina el primer elemento y lo devuelve
frutasArray.unshift("fresa");   // Agrega "fresa" al inicio del array
frutasArray.splice(2, 1, "Kiwi"); // Elimina el elemento en el índice 2 y agrega "kiwi"
let nuevoArray = frutasArray.slice(1, 4); // Crea un nuevo array con los elementos del índice 1 al 3

