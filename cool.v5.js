
const buttons = document.querySelector ('.computerButtons' );

Array.from(buttons).forEach(function(buttons){
    buttons.addEventListerner('click',playRound())
})

// Function to write text before game starts
let i = 0;
let txt = 'Rock, Paper, Scissors?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


const choices = ["rock", "paper", "scissors"];
const winners= [];


let playerScore = 0;
let computerScore = 0;
let ties = 0;

            ////*PLAY GAME*/////
function playGame() {
   for(i = 0; i <= 10; i++)
   if(computerScore === 3 || playerScore === 3){
    console.log("Game Over!");
    if(computerScore === 3){alert("COMPUTER WON! YOU LOSE!");}
    else if(playerScore === 3) {alert("PLAYER WON!");break;}
   }else if(computerScore === 3){alert('COMPUTER WINS!');break;}
   else if(playerScore === 3){alert('PLAYER WINS!');}
   else if(computerScore === 3 || playerScore === 3){break;}
   else{
    playRound();
   }
}

            ///*PLAY ROUND*/////
function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    console.log(winner);

    ///* adds 1+ to round winners score*///
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

            /*PLAYER CHOICE*///
// function playerChoice() {
// let input = prompt("select rock, paper, or scissors");
//     console.log(input);
//     let choiceP = input;
//     return (choiceP);
// }

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
if(playerScore === 3){
    console.log("player")

}
playGame();
