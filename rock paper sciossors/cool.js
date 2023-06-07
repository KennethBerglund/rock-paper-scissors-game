//                     ///*PLAYER input*/////

let person = prompt("enter rock paper or scissors");
function playerSelection() {
    return(person);
}

let userchoice = person;

console.log(userchoice);

                 //// //* Random choice function*//
                       ///* COMPUTER*////


let computer = ["rock", "paper", "scissor"];
function computerSelection() {
    console.log(computer[(Math.floor(Math.random() * computer.length))]);
    return(computer);}

computerSelection(computer);




                

// //                     //////* 1 round of game*////

function playRound(computerSelection, playerSelection) {
     if(computer === person) {
     return("tie");}}
//     }else if (computerSelection === "rock" && playerSelection === "scissors"){
//         return("computer");
//     }else if (computerSelection === "scissors" && playerSelection === "rock"){
//         return("player");
//     }else if(computerSelection === "paper" && playerSelection === "rock"){
//         return("computer");
//     }else if (computerSelection === "rock" && playerSelection === "paper"){
//         return("player");
//     }else if (computerSelection === "paper" && playerSelection === "scissors"){
//         return("player");
//     }else if (computerSelection === "scissors" && playerSelection === "paper"){
//         return("computer"); } {
//             console.log("you lose!!!");
//     }
// };
playRound();

let result = playRound(computerSelection, playerSelection);

if (result === "player"){
    alert ("you won!");
}
else if (result === "computer"){
    alert ("you lose");
}
else if (result === tie){
    alert ("tie!")
}

