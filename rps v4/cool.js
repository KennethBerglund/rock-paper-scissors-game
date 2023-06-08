const choices = ["rock", "paper", "scissors"];
const winners= [];


let playerScore = 0;
let computerScore = 0;
let ties = 0;

            ////*PLAY GAME*/////
function playGame() {
   for(i = 0; i <= 4; i++) 
   playRound();
}

            ///*PLAY ROUND*/////
function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    console.log(winner);
    if(winner === "player"){
        playerScore++;
    }else if(winner === "tie"){
        ties++;
    }else{
        computerScore++;
    }

    console.log("player:", playerScore);
    console.log ("computer:", computerScore);
    console.log("ties:", ties);
}

            ///*PLAYER CHOICE*///
function playerChoice() {
let input = prompt("select rock, paper, or scissors");
    console.log(input);
    let choiceP = input;
    return (choiceP);
}

            /*COMPUTER CHOICE*///
function computerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);
    return (choice);
}

function checkWinner(choiceP, choice) {
if(choiceP === choice){
    return "tie";
}else if(
    (choiceP === "rock" && choice === "scissors") ||
    (choiceP === "paper" && choice === "rock") || 
    (choiceP === "scissors" && choice === "paper")
){ 
return "player";
}else{
    return "computer";
}
}

function gameScore(winner) {
        if(winner === "player"){
            playerScore++;
        }else if(winner === "tie"){
            ties++;
        }else{
            computerScore++;
    }
    }

playGame();
