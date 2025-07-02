/*
  Ejercicios para practicar funciones:
  1. Crea una función llamada semaforo que reciba un número del 1 al 3 y muestre un mensaje según el semáforo:
  - 1: "Rojo, detente"
  - 2: "Amarillo, precaución"
  - 3: "Verde, avanza"

  Ejecutala 3 veces con diferentes números, debes realizar validaciones para que al
  enviar un numero fuera del rango 1-3, se muestre un mensaje de error.
*/

function semaforo(numero){
  if(numero === 1){
    alert("Rojo, detente");
  }else if(numero === 2){
    alert("Amarillo, precaución");
  }else  if(numero === 3){
    alert("Verde, avanza");
  }else{
    alert("El numero que ingreso no se encunetra en el rango");
  }
}

numero = Number(prompt("Ingrese un numero entre 1-3: "));

semaforo(numero);