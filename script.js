const handChoices = ['rock', 'scissors', 'paper'];
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}

// Calculates the winner and returns the results
const startRound = function startRoundAndReturnWinner(playerChoice, ComputerChoice) {

    const filteredPlayerChoice = playerChoice.toLowerCase();
    const drawMessage = `It's a draw! Both players used ${filteredPlayerChoice}!`;
    const playerWinningMessage = `You win! Player ${filteredPlayerChoice} beats ${ComputerChoice}!`;
    const playerLosingMessage = `You lose! Computer ${ComputerChoice} beats ${filteredPlayerChoice}!`;

    if (!handChoices.includes(filteredPlayerChoice)) {
        return `${filteredPlayerChoice} is not a hand`;
    }

    // Checks if there's a draw first.
    // Checks to see if player beats computer.
    // Otherwise returns computer as the winner.
    if (filteredPlayerChoice === ComputerChoice) {
        return drawMessage;
    } else if (filteredPlayerChoice === 'rock' && ComputerChoice === 'scissors') {
        playerScore += 1;
        return playerWinningMessage;
    } else if (filteredPlayerChoice === 'scissors' && ComputerChoice === 'paper') {
        playerScore += 1;
        return playerWinningMessage;
    } else if (filteredPlayerChoice === 'paper' && ComputerChoice === 'rock') {
        playerScore += 1;
        return playerWinningMessage;
    } else {
        computerScore += 1;
        return playerLosingMessage;
    }
}

const game = function gameController() {
    let winner;

    while (winner === undefined) {

        let playerChoice = prompt();
        console.log(startRound(playerChoice, getComputerChoice()));

        if (playerScore === 3) {
            winner = 'Player';
        } else if (computerScore === 3) {
            winner = 'Computer';
        }
    }

    console.log(`${winner} is the winner!`);
}

game();
