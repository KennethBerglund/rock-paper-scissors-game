const choices = ["rock", "paper", "scissors"];

            ////*PLAY GAME*/////
function playGame() {
    playRound();
}

            ///*PLAY ROUND*/////
function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
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
    return "tie!";
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

playGame();
