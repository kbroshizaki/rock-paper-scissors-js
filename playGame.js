const playRound = require('./playRound.js');

let humanScore =0;
let computerScore=0;

function playGame() {
    for (let i=0; i<5; i++) {
        const winner = playRound();

        if(winner === "human") {
            humanScore++;
            console.log("You win this Round!");
        }else if (winner === "computer") {
            computerScore++;
            console.log("You lost this round!");
        }else {
            console.log("It's a tie");
        }
        console.log("Human Score: ",humanScore);
        console.log("Computer Score: ",computerScore);
    }
    console.log("Final Score");
console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("Computer won the game!");
} else {
    console.log("The game ended in a tie!");
}
}
playGame();