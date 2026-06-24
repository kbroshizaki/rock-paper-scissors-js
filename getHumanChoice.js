// 
// **what I came up with on my own**
// function getHumanChoice() {
//     let choice = prompt("Rock, Paper, or Scissors?");
//     return choice.toLowerCase();
// }

// let humanChoice = getHumanChoice();
// console.log(humanChoice);

// **chatgpt recommended for doing in vscode**
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("Rock, Paper, or Scissors? ", (answer) => {
//     console.log(answer.toLowerCase());
//     rl.close();
// });

//** what is getting used ** 

const prompt = require("prompt-sync")();

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ");
    return choice.toLowerCase();
}

//console.log(getHumanChoice());
module.exports = getHumanChoice