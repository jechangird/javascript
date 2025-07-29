let operacion = "";

function calculadora(caracter) {
  operacion += caracter;
  document.getElementById("operation").value = operacion;
}

function reiniciar() {
  operacion = "";
  document.getElementById("operation").value = operacion;
}

function borrar() {
  operacion = operacion.slice(0, -1);
  document.getElementById("operation").value = operacion;
}

function calcular() {
  operacion = eval(operacion);
  document.getElementById("operation").value = operacion;
}
