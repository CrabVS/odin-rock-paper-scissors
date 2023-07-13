const handChoices = ['rock', 'scissors', 'paper'];

const getComputerChoice = function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}

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
        return playerWinningMessage;
    } else if (filteredPlayerChoice === 'scissors' && ComputerChoice === 'paper') {
        return playerWinningMessage;
    } else if (filteredPlayerChoice === 'paper' && ComputerChoice === 'rock') {
        return playerWinningMessage;
    } else {
        return playerLosingMessage;
    }
}