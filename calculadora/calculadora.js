/*
  2. Crea una función llamada calculadora que reciba dos números y un operador
  (suma, resta, multiplicación o división) y realice la operación correspondiente.
  - Si el operador no es válido, muestra un mensaje de error.
  Ejecutala 3 veces con diferentes números y operadores, debes realizar validaciones
*/

function calculadora(num1 = 0, num2 = 0, operador){
  if((num1 <= 0 || num1) >= 0 && (num2 <= 0 || num2 >= 0)){
    if(operador === "suma"){
      alert("La suma es: "+ (num1+num2));
    }else if(operador === "resta"){
      alert("La resta es: "+ (num1-num2));
    }else if(operador === "multiplicación" || operador === "multiplicacion"){
      alert("La multiplicación es: "+ (num1*num2));
    }else if(operador === "división" || operador === "division"){
      if(num2 !== 0){
        alert("La división es: "+ (num1/num2));
      }else{
        alert("ERROR!, la division entro 0 es indefinida");
      }
    }else{
      alert("Operador invalido");
    }
  }else{
    alert("ERROR!, Debe ingresar numeros");
  }
}

let numero1 = Number(prompt("Ingrese un numero: "));
let numero2 = Number(prompt("Ingrese un numero: "));
let operador = prompt("Ingrese un operador (suma, resta, multiplicación o división):").toLowerCase();

calculadora(numero1, numero2, operador);