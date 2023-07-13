const handChoices = ['rock', 'scissors', 'paper'];

const getComputerChoice = function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}

// Calculates the winner and returns the results
const startRound = function startRoundAndReturnWinner(playerChoice, ComputerChoice) {

    const filteredPlayerChoice = playerChoice.toLowerCase();
    const playerWinningMessage = `Player wins! ${filteredPlayerChoice} beats ${ComputerChoice}`;
    const playerLosingMessage = `Player loses! ${ComputerChoice} beats ${filteredPlayerChoice}`;

    if (!handChoices.includes(filteredPlayerChoice)) {
        console.log('Invalid Hand');
        return 0;
    }

    // Checks if there's a draw first.
    // Checks to see if player beats computer.
    // Otherwise returns computer as the winner.
    if (filteredPlayerChoice === ComputerChoice) {
        console.log('It\'s a Draw!');
        return 0;
    } else if (filteredPlayerChoice === 'rock' && ComputerChoice === 'scissors') {
        console.log(playerWinningMessage);
        return 1;
    } else if (filteredPlayerChoice === 'scissors' && ComputerChoice === 'paper') {
        console.log(playerWinningMessage);
        return 1;
    } else if (filteredPlayerChoice === 'paper' && ComputerChoice === 'rock') {
        console.log(playerWinningMessage);
        return 1;
    } else {
        console.log(playerLosingMessage);
        return -1;
    }
}

const game = function gameController() {
    let winner;
    let round = 0;
    let score = 0;

    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt();
        
        // Prevents error if user cancels prompt
        if (playerChoice !== null) {
            let roundResults = startRound(playerChoice, getComputerChoice());

            round += Math.abs(roundResults);
            score += roundResults;
            if (roundResults === 0) {
                i--;
            }
        } else {
            console.log('Please decide on a hand!');
            i--;
        }

        // Checks to see if there's a game winner
        if (round === 5) {
            winner = score > 0 ? 'Player' : 'Computer';
        } else if (score === 3 || (round === 4 && score === 2)) {
            winner = 'Player';
            break;
        } else if (score === -3 || (round === 4 && score === -2)) {
            winner = 'Computer';
            break;
        }
    }

    console.log(`${winner} is the winner!`);
}

game();
