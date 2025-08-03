const choices = ["piedra", "papel", "tijera"];
const buttons = document.querySelectorAll(".choice");

let playerScore = 0;
let cpuScore = 0;
let ties = 0;
let history = [];

const playerScoreEl = document.getElementById("player-score");
const cpuScoreEl = document.getElementById("cpu-score");
const tiesEl = document.getElementById("ties");
const historyEl = document.getElementById("history");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, cpuChoice);

    updateScores(result);
    updateHistory(playerChoice, cpuChoice, result);
  });
});

function getResult(player, cpu) {
  if (player === cpu) return "Empate";
  if (
    (player === "piedra" && cpu === "tijera") ||
    (player === "papel" && cpu === "piedra") ||
    (player === "tijera" && cpu === "papel")
  ) return "Jugador";
  return "CPU";
}

function updateScores(result) {
  if (result === "Jugador") playerScore++;
  else if (result === "CPU") cpuScore++;
  else ties++;

  playerScoreEl.textContent = playerScore;
  cpuScoreEl.textContent = cpuScore;
  tiesEl.textContent = ties;
}

function updateHistory(player, cpu, result) {
  const round = `Tú: ${player} | CPU: ${cpu} → Resultado: ${result}`;
  history.unshift(round);
  if (history.length > 5) history.pop();

  historyEl.innerHTML = history.map(h => `<li>${h}</li>`).join("");
}