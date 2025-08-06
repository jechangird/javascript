const valores = ["piedra", "papel", "tijera"];
const botones = document.querySelectorAll(".elecciones");

let puntosJugador = 0;
let puntosComputador = 0;
let empate = 0;
let historial = [];

const resultadoJugador = document.getElementById("resultadoJugador");
const resultadoComputador = document.getElementById("resultadoComputador");
const resultadoEmpate = document.getElementById("empate");
const resultadoHistorial = document.getElementById("historial");
const mensajeResultado = document.getElementById("mensajeResultado");

// 🎵 Archivos de sonido (opcional)
const sonidoGanador = new Audio("./ganador.mp3");
const sonidoEmpate = new Audio("./empate.mp3");
const sonidoPerdedor = new Audio("./perdedor.mp3");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const eleccionJugador = btn.dataset.eleccion;
    const eleccionComputador = valores[Math.floor(Math.random() * 3)];

    const resultadoJuego = resultado(eleccionJugador, eleccionComputador);

    // 🎯 Mostrar el resultado visualmente
    mensajeResultado.textContent = `Elegiste ${eleccionJugador}, la PC eligió ${eleccionComputador}. Ganó: ${resultadoJuego}`;
    mensajeResultado.className = "text-xl font-semibold mt-4 transition-all duration-300";
    if (resultadoJuego === "Jugador") {
      mensajeResultado.classList.add("text-green-400");
      sonidoGanador.play();
    } else if (resultadoJuego === "Computador") {
      mensajeResultado.classList.add("text-red-400");
      sonidoPerdedor.play();
    } else {
      mensajeResultado.classList.add("text-yellow-400");
      sonidoEmpate.play();
    }

    actualizarPuntuacion(resultadoJuego);
    actualizarHistorial(eleccionJugador, eleccionComputador, resultadoJuego);
  });
});

function resultado(jugador, computador) {
  if (jugador === computador) return "Empate";
  if (
    (jugador === "piedra" && computador === "tijera") ||
    (jugador === "papel" && computador === "piedra") ||
    (jugador === "tijera" && computador === "papel")
  ) return "Jugador";
  return "Computador";
}

function actualizarPuntuacion(resultadoJuego) {
  if (resultadoJuego === "Jugador") puntosJugador++;
  else if (resultadoJuego === "Computador") puntosComputador++;
  else empate++;

  resultadoJugador.textContent = `Jugador: ${puntosJugador}`;
  resultadoComputador.textContent = `Computador: ${puntosComputador}`;
  resultadoEmpate.textContent = `Empates: ${empate}`;
}

function actualizarHistorial(jugador, computador, resultadoJuego) {
  const jugada = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultadoJuego}`;
  historial.unshift(jugada);
  if (historial.length > 5) historial.pop();

  resultadoHistorial.innerHTML = historial.map(h => `<li>${h}</li>`).join("");
}

// 🔄 Reiniciar marcador
document.getElementById("reset").addEventListener("click", () => {
  puntosJugador = 0;
  puntosComputador = 0;
  empate = 0;
  historial = [];

  resultadoJugador.textContent = "Jugador: 0";
  resultadoComputador.textContent = "Computador: 0";
  resultadoEmpate.textContent = "Empates: 0";
  resultadoHistorial.innerHTML = "";
  mensajeResultado.textContent = "";
});