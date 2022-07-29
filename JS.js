    const options = [
        "Rock",
        "Paper",
        "Scissors"
    ];


function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    
    computerSelection = getComputerChoice().toUpperCase();
    
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beat paper";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beat paper"
    } else {
        return "It's a tie, try again";
    }
    
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))
