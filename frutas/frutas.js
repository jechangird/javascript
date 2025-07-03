
//2. Crea una función que reciba un array de frutas e imprima uno a uno cada fruta.

let frutas = ["uva","melon", "tomate", "cambur", "pina"];

function imprimir_array(lista = [], numero = 0){
  if(numero < lista.length){
    console.log(lista[numero]);
    imprimir_array(lista, numero + 1);
  }
}

imprimir_array(frutas);


