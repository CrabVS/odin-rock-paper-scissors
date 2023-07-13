const getComputerChoice = function getComputerChoice() {
    const handChoices = ['rock', 'scissors', 'paper'];
    let randomNumber = Math.floor(Math.random () * 3);
    
    return handChoices[randomNumber];
}