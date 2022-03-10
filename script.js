let playerScore = 0;
let computerScore = 0;

let playerInput = prompt("Choose your weapon");
let playerSelection = playerInput;
console.log("Player chose " + playerSelection)

let options = ["rock", "paper", "scissors"];
let computerInput = options[Math.floor(Math.random()*options.length)];
let computerSelection = computerInput;
console.log("Your enemy chose " + computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
         return "No winner. Fight again";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            playerScore++
            return "You win. Humanity is saved.";
        } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ) {
            computerScore++;
            return "You lost. Earth is destroyed."
        }
}

console.log(playRound(playerSelection, computerSelection))

let currentPlayerScore = ("You " + playerScore);
let currentComputerScore = ("Enemy " + computerScore)
console.log(currentPlayerScore,":", currentComputerScore)
function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}