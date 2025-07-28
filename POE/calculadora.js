const nroUno = document.querySelector("#numeroUno");
const nroDos = document.querySelector("#numeroDos");
const resultado = document.querySelector("#resultado");
const botones = document.querySelectorAll(".btn");

const btnTotal = document.querySelector("#total");
const btnLimpiar = document.querySelector("#limpiar");




btnLimpiar.addEventListener("click", () => {
  nroUno.value = 0.00;
  nroDos.value = 0.00;
  resultado.value = 0.00;
  
});


botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const n1 = parseFloat(nroUno.value);
      const n2 = parseFloat(nroDos.value);
      const operacion = boton.textContent;
      let total;

      if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "⚠️ Ingrese ambos números.";
        return;
      }

      switch (operacion) {
        case "+": total = n1 + n2; break;
        case "-": total = n1 - n2; break;
        case "*": total = n1 * n2; break;
        case "/": 
          total = n2 !== 0 ? n1 / n2 : "❌ Error: división por cero"; 
          break;
      }

      resultado.textContent = `Resultado: ${total}`;
    });
  });

