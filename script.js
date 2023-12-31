const handChoices = ['rock', 'scissors', 'paper'];

let winner = null;

const getComputerChoice = function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}

const checkGameWinner = function checkForGameWinner(score) {
    if (score.includes(5)) {
        return score[0] === 5 ? 'Player' : 'Computer';
    } else return null;
}

// Calculates the winner and returns the results
const checkRoundWinner = function checkForRoundWinner(playerChoice, computerChoice) {

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

const startRound = function startRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const results = checkRoundWinner(playerChoice, computerChoice);

    return results;
}

const addScore = function addScore(playerScore, computerScore, roundResults) {
    if (roundResults > 0) {
        playerScore += 1;
    } else if (roundResults < 0) {
        computerScore += 1;
    }

    return [playerScore, computerScore];
}

const updateScore = function updateDisplayedScore(score) {
    const scoreEls = document.querySelectorAll('.score');
    scoreEls[0].textContent = `Player: ${score[0]}`;
    scoreEls[1].textContent = `Computer: ${score[1]}`;
}

const announceResults = function announceResults(roundResults) {
    const resultsEl = document.getElementById('results');

    if (roundResults > 0) {
        resultsEl.textContent = 'Player Wins!';
    } else if (roundResults < 0) {
        resultsEl.textContent = 'Computer Wins!';
    } else {
        resultsEl.textContent = 'It\'s a Draw!'
    }
}

const announceWinner = function announceWinner(winner) {
    const resultsEl = document.getElementById('results');
    resultsEl.textContent = `${winner} is the winner!`;
}

const game = function gameController() {
    let winner = null;
    // score = [playerScore, computerScore]
    let score = [0, 0];

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (winner === null) {
                const results = startRound(handChoices[index]);
                score = addScore(score[0], score[1], results);
    
                winner = checkGameWinner(score.slice());
    
                updateScore(score.slice());
                if (winner !== null) {
                    announceWinner(winner);
                } else {
                    announceResults(results);
                }
            }
        });
    });
}

game();
