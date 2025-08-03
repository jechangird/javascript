const valores = ["piedra", "papel", "tijera"];
const botones = document.querySelectorAll(".eleccion");

let puntosJugador = 0;
let puntosComputador = 0;
let empate = 0;
let historial = [];

const resultadoJugador = document.getElementById("resultado-jugador");
const resultadoCpu = document.getElementById("resultado-computador");
const resultadoEmpate = document.getElementById("empate");
const resultadoHistorial = document.getElementById("historial");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const eleccionJugador = btn.dataset.eleccion;
    const eleccionComputador = valores[Math.floor(Math.random() * 3)];
    const resultado = getResult(eleccionJugador, eleccionComputador);

    updateScores(resultado);
    updateHistory(eleccionJugador, eleccionComputador, resultado);
  });
});

function getResult(jugador, computador) {
  if (jugador === computador) return "Empate";
  if (
    (jugador === "piedra" && computador === "tijera") ||
    (jugador === "papel" && computador === "piedra") ||
    (jugador === "tijera" && computador === "papel")
  ) return "Jugador";
  return "Computador";
}

function updateScores(resultado) {
  if (resultado === "Jugador") puntosJugador++;
  else if (resultado === "Computador") puntosComputador++;
  else empate++;

  resultadoJugador.textContent = puntosJugador;
  resultadoComputador.textContent = puntosComputador;
  resultadoEmpate.textContent = empate;
}

function updateHistory(jugador, computador, resultado) {
  const round = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultado}`;
  historial.unshift(round);
  if (historial.length > 5) historial.pop();

  resultadoHistorial.innerHTML = historial.map(h => `<li>${h}</li>`).join("");
}