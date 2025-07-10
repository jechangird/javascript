 //1. Crea una función recursiva que imprima los números pares del 0 al 100.

function pares(numero,limite){
  if (numero <= limite){
    if(numero % 2 === 0) console.log(numero);
    pares(numero+1, limite);
  }
}
pares(0,50)

