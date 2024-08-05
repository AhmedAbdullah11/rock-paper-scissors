function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):");
  choice = choice.toLowerCase(); // Convert to lowercase to ensure case insensitivity
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let playedRounds = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`Draw! You both chose ${humanChoice}`);
    }
  }

  while (playedRounds < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playedRounds = humanScore + computerScore;
  }

  console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
