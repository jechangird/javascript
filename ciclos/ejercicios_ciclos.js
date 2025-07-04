/*1. Segun el siguiente array de numeros, crea un bucle que imprima cada número multiplicado por 2.
  - [1, 2, 3, 4, 5]*/

arreglo = [1, 2, 3, 4, 5];
for(let numero of arreglo){
  console.log("Numero: " + numero*2);
}

/*2. Según el siguiente objeto
    {
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    }
  Imprime todas las verduras.*/

  alimentos={
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    };

  for (let clave in alimentos) {
  console.log(clave + ": " + alimentos[clave]); // Muestra cada clave y su valor
}

 /*3. Según el objeto anterior, imprime todas las verduras, frutas y carnes.
*/
alimentos={
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    };

  for (let propiedad in alimentos) {
  console.log(propiedad + ": " + alimentos[propiedad]); // Muestra cada clave y su valor
}

/*1. Imprimir números del 1 al 10
Usa un ciclo for para imprimir los números del 1 al 10 en la consola.*/

for (let i = 1; i <= 10; i++){
  console.log(i);
}

/*2. Sumar los números del 1 al 100
Usa un ciclo while para calcular la suma de los números del 1 al 100.*/

suma = 0;
numero = 1;
while(numero <=100){
  suma = suma + numero;
  numero++;
}
console.log(suma);

/*3. Imprimir los elementos de un arreglo
Usa un ciclo for...of para recorrer un arreglo y mostrar sus elementos.*/

frutas = ["Manzana", "Banana", "Naranja", "Fresa"];

for(let fruta of frutas){
  console.log("Fruta:" + fruta);
}

/*4. Tabla de multiplicar
Genera la tabla de multiplicar de un número dado usando un ciclo for.*/

let numero=9;
for(let i=1; i <= 10; i++){
  console.log(numero*i);
}

/*5. Números pares del 1 al 20
Usa un ciclo for para imprimir solo los números pares entre 1 y 20.*/

for(let i = 1; i <=20; i++){
  if (i % 2 === 0){
    console.log(i);
  }
}