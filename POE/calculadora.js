const nroUno = document.querySelector("#numeroUno");
const nroDos = document.querySelector("#numeroDos");
const resultado = document.querySelector("#resultado");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const btnMultiplicacion = document.querySelector("#multiplicacion");
const btnDivision = document.querySelector("#division");
const btnTotal = document.querySelector("#total");
const btnLimpiar = document.querySelector("#limpiar");




btnLimpiar.addEventListener("click", () => {
  nroUno.value = 0.00;
  nroDos.value = 0.00;
  resultado.value = 0.00;
  
});