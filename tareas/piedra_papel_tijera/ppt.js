const valores = ["piedra", "papel", "tijera"];
const botones = document.querySelectorAll(".elecciones");

let puntosJugador = 0;
let puntosComputador = 0;
let empate = 0;
let historial = [];

const resultadoJugador = document.getElementById("resultado-jugador");
const resultadoComputador = document.getElementById("resultado-computador");
const resultadoEmpate = document.getElementById("empate");
const resultadoHistorial = document.getElementById("historial");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const eleccionJugador = btn.dataset.eleccion;
    const eleccionComputador = valores[Math.floor(Math.random() * 3)];
    //alert(`Tú elegiste ${eleccionJugador}, la PC eligió ${eleccionComputador} `);
    //alert(`jugador $(eleccionJugador)`);
    //let mensaje = `Tú elegiste ${eleccionJugador}, la PC eligió ${eleccionComputador}. `;

    

    const resultado = resultado(eleccionJugador, eleccionComputador);

    actualizarPuntuacion(resultado);
    actualizarHistorial(eleccionJugador, eleccionComputador, resultado);
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

function actualizarPuntuacion(resultado) {
  if (resultado === "Jugador") puntosJugador++;
  else if (resultado === "Computador") puntosComputador++;
  else empate++;

  /*resultadoJugador.textContent = puntosJugador;
  resultadoComputador.textContent = puntosComputador;
  resultadoEmpate.textContent = empate;*/
  resultado-jugador.textContent === puntosJugador;
  resultado-omputador.textContent === puntosComputador;
  resultado-empate.textContent === empate;
}

function actualizarHistorial(jugador, computador, resultado) {
  //const round = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultado}`;
  const round = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultado}`;
  historial.unshift(round);
  if (historial.length > 5) historial.pop();

  resultadoHistorial.innerHTML = historial.map(h => `<li>${h}</li>`).join("");
}