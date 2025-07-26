
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const resultado = document.getElementById("resultado");
  const botones = document.querySelectorAll(".btn");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const n1 = parseFloat(num1.value);
      const n2 = parseFloat(num2.value);
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
