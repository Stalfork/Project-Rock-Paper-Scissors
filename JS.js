const options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)]; // pick a random option 
}

function playRound() { 
  const playerSelection = prompt("Insert Rock Paper or Scissors").toUpperCase();
  const computerSelection = getComputerChoice().toUpperCase();

  if (options.includes(playerSelection)) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
      return "lose";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      return "win";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      return "win";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      return "lose";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      return "lose";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      return "win";
    } else {
      return "tie";
    }
  }

  return false;
}

let userScore = 0;
let computerScore = 0;

function game() { 
  for (let i = 0; i < 5; i++) {
    const option = playRound();

    if (option === false) {
      alert("Invalid option, try again");
    } else {
      if (option === "win") {
        userScore++;
        alert("You win this round, your score is " + userScore + ", the PC score is " + computerScore);
      } else if (option === "lose") {
        computerScore++;
        alert("You lose this round, your score is " + userScore + ", the PC score is " + computerScore);
      } else {
        i--; // <<< This makes so if there's a tie, it won't count as an attempt //
        alert("It's a tie, try again, your score is " + userScore + ", the PC score is " + computerScore);
      }
    
    }
    const winner = (userScore > computerScore) ? "You Are a Winner!":"You Lost Against the Computer :(";
    if (i === 4) {
      alert(winner);
    }
  }
}

game();



