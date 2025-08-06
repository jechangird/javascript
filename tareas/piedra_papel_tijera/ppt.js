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
    
    const resultadoJuego = resultado(eleccionJugador, eleccionComputador);
    alert(`Tú elegiste ${eleccionJugador}, la PC eligió ${eleccionComputador} - Gano ${resultadoJuego} `);
    

    actualizarPuntuacion(resultadoJuego);
    alert(`Jugador ${puntosJugador}, la PC ${puntosComputador} - Empates ${empate} `);

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

function actualizarPuntuacion(resultadoJuego) {
  if (resultadoJuego === "Jugador") puntosJugador++;
  else if (resultadoJuego === "Computador") puntosComputador++;
  else empate++;

  resultadoJugador.textContent = puntosJugador;
  resultadoComputador.textContent = puntosComputador;
  resultadoEmpate.textContent = empate;
}



function actualizarHistorial(jugador, computador, resultadoJuego) {
  //const round = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultado}`;
  const round = `Tú: ${jugador} | CPU: ${computador} → Resultado: ${resultadoJuego}`;
  historial.unshift(round);
  if (historial.length > 5) historial.pop();

  resultadoHistorial.innerHTML = historial.map(h => `<li>${h}</li>`).join("");
}