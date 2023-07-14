const handChoices = ['rock', 'scissors', 'paper'];

let winner = null;
let round = 0;
let score = 0;

const getComputerChoice = function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}

const checkGameWinner = function checkForGameWinner(playerScore, computerScore) {
    if (playerScore === 3) {
        winner = 'Player';
    } else if (computerScore === 3) {
        winner = 'Computer';
    }
}

// Calculates the winner and returns the results
const startRound = function startRoundAndReturnWinner(playerChoice, computerChoice) {
    
    // Checks if there's a draw first. Then if player beats computer. Otherwise returns computer as winner.
    if (playerChoice === computerChoice) {
        return 0;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 1;
    } else {
        return -1;
    }
}

const game = function gameController() {
    const buttons
}

game();
