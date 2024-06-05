let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    document.getElementById("user-choice-display").textContent = playerSelection;
    document.getElementById("computer-choice-display").textContent = computerSelection;

    if (result.includes("You win!")) {
        scorePlayer++;
        document.querySelector(".msgcontainer").style.backgroundColor = "green";
    } else if (result.includes("You lose!")) {
        scoreComputer++;
        document.querySelector(".msgcontainer").style.backgroundColor = "red";
    } else {
        document.querySelector(".msgcontainer").style.backgroundColor = "blue";
    }

    document.getElementById("us").textContent = scorePlayer;
    document.getElementById("cs").textContent = scoreComputer;

    document.querySelector(".msgcontainer").textContent = result;
}