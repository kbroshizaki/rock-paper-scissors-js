const getHumanChoice = require('./getHumanChoice.js');
const getComputerChoice = require('./getComputerChoice.js');
// let humanScore = 0;
// let computerScore = 0;


function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(3);

    if (humanChoice === computerChoice) {
        return "tie";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return `human`;
    }
    else {
        return `computer`;
    }}

// const result = playRound(humanSelection, computerSelection)

// console.log(result);
// console.log('Human Score:', humanScore);
// console.log('Computer Score:', computerScore);

module.exports = playRound;