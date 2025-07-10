//Metodos de arrays
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
  - `find()`: Devuelve el primer elemento del array que cumple con la condición proporcionada en la función.
  - `includes()`: Verifica si un elemento está presente en el array.
*/
let frutasArray = ["melon", "tomate", "banana", "manzana", "pera"];
frutasArray.push("uva"); // Agrega "uva" al final del array
frutasArray.pop(); // Elimina el último elemento y lo devuelve
frutasArray.shift(); // Elimina el primer elemento y lo devuelve
frutasArray.unshift("fresa"); // Agrega "fresa" al inicio del array
frutasArray.splice(2, 1, "Kiwi"); // Elimina el elemento en el índice 2 y agrega "kiwi"
let nuevoArray = frutasArray.slice(1, 4); // Crea un nuevo array con los elementos del índice 1 al 3
frutasArray.forEach((fruta) => {
  console.log("Fruta: " + fruta); // Ejecuta una función por cada elemento
});
frutasArray.map((fruta) => {
  console.log("Fruta mapeada: " + fruta);
});
let frutasFiltradas = frutasArray.filter((fruta) => fruta.includes("a")); // Filtra las frutas que contienen "a"
console.log("Frutas filtradas: ", frutasFiltradas); // Muestra las frutas filtradas
console.log(frutasArray.find((fruta) => fruta === "banana")); // Encuentra la primera fruta que sea "banana"
console.log(frutasArray.includes("pera")); // Verifica si "pera" está en el array

/*
  Arrow function o funciones anonimas
  Las arrow functions son una forma concisa de escribir funciones anonimas en JavaScript.
*/

let sumar = (num1, num2) => {
  return num1 + num2;
}

sumar(5, 10); // Esto devuelve 15
sumar(6, 20); // Esto devuelve 26

/*
  Los callbacks
  Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se completa una tarea.
*/
function registro(nombre, callback) {
  if (callback(nombre)) {
    console.log("Registro exitoso para: " + nombre);
  }
}

/*
let funcion = validarNombre;
funcion("juan")
registro("juan", validarNombre); // Esto llama a la función validarNombre como callback
*/
//validarNombre("juan"); // Esto valida el nombre y muestra mensajes de error si es necesario
//validarNombre // La funcion simplemente se pasa como argumento sin ejecutarla

console.log(validarNombre);

function validarNombre(nombre) {
  if (typeof nombre !== "string") {
    console.log("El nombre debe ser una cadena de texto.");
    return false;
  } else if (nombre.length < 3) {
    console.log("El nombre debe tener al menos 3 caracteres.");
    return false;
  } else if (nombre.length > 20) {
    console.log("El nombre no puede tener más de 20 caracteres.");
    return false;
  }
  return true;
}

/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.

  2. Según el siguiente array de objetos
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
  las personas que sean mayores de 25 años.

  Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres

  Fecha de entrega: 11/07/25
*/