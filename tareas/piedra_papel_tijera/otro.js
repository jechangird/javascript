const botones = document.querySelectorAll(".elecciones");
const resultado = document.getElementById("resultado");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const eleccionJugador = boton.dataset.eleccion;
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionPC = opciones[Math.floor(Math.random() * 3)];

    let mensaje = `Tú elegiste ${eleccionJugador}, la PC eligió ${eleccionPC}. `;

    if (eleccionJugador === eleccionPC) {
      mensaje += "¡Empate!";
    } else if (
      (eleccionJugador === "piedra" && eleccionPC === "tijera") ||
      (eleccionJugador === "papel" && eleccionPC === "piedra") ||
      (eleccionJugador === "tijera" && eleccionPC === "papel")
    ) {
      mensaje += "¡Ganaste!";
    } else {
      mensaje += "Perdiste 😢";
    }

    resultado.textContent = mensaje;
  });
});
