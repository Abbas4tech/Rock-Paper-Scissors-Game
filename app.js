const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS!";
const RESULT_COMPUTER_WINS = "COMPUTER WINS!";

const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selectedValue = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    selectedValue !== ROCK &&
    selectedValue !== PAPER &&
    selectedValue !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for You!`);
    return DEFAULT_CHOICE;
  }
  return selectedValue;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const decideWinner = (compChoice, playChoice) => {
  //Arrow Function Used Here!
  return compChoice === playChoice
    ? RESULT_DRAW
    : (compChoice === ROCK && playChoice === PAPER) ||
      (compChoice === PAPER && playChoice === SCISSORS) ||
      (compChoice === SCISSORS && playChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let winner;
  if (playerSelection) {
    winner = decideWinner(computerSelection, playerSelection);
  } else {
    winner = decideWinner(computerSelection);
  }

  let message = `You Picked ${playerSelection}, Computer picked ${computerSelection}. Therefor You `;
  if (winner === RESULT_DRAW) {
    message = message + "had a Draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "Won.";
  } else {
    message = message + "Lost.";
  }
  alert(message);
  gameIsRunning = false;
});
