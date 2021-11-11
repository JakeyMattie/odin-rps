//Computer's random selection of rock/paper/scissors
function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "ROCK";
    else if (choice == 2) return "PAPER";
    else return "SCISSORS";
}

//Player's selection of rock/paper/scissors
function playerPlay() {
    let input;

    do {
        input = prompt("Rock/Paper/Scissors?");
        if (input.toUpperCase() != "ROCK" && input.toUpperCase() != "PAPER" && input.toUpperCase() != "SCISSORS") alert("Incorrect input!")
    } while (input.toUpperCase() != "ROCK" && input.toUpperCase() != "PAPER" && input.toUpperCase() != "SCISSORS");
    //Code above has to specifically check for rock/paper/scissors otherwise it loops for a prompt

    return input;
}

//One game round
function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection == "ROCK") return(tie(computerSelection));
            else if (computerSelection == "PAPER") return(computerWin(playerSelection, computerSelection));
            else return(playerWin(playerSelection, computerSelection));
            break;
        case "PAPER":
            if (computerSelection == "PAPER") return(tie(computerSelection));
            else if (computerSelection == "ROCK") return(playerWin(playerSelection, computerSelection));
            else return(computerWin(playerSelection, computerSelection));
            break;
        case "SCISSORS":
            if (computerSelection == "SCISSORS") return(tie(computerSelection));
            else if (computerSelection == "ROCK") return(computerWin(playerSelection, computerSelection));
            else return(playerWin(playerSelection, computerSelection));
            break;
        default: 
            break;
    }
}

function tie(input) {
    tieScore++;
    tieTotal.textContent = `Tie: ${tieScore}`;
    return `It's a tie! Both chose ${input.charAt(0) + input.substring(1).toLowerCase()}!`;
}

function playerWin(playerSelection, computerSelection) {
    playerScore++;
    playerTotal.textContent = `Player: ${playerScore}`;
    return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)} beat ${computerSelection.charAt(0) + computerSelection.substring(1).toLowerCase()}!`;
}

function computerWin(playerSelection, computerSelection) {
    computerScore++;
    computerTotal.textContent = `Computer: ${computerScore}`;
    return `You lose! ${computerSelection.charAt(0) + computerSelection.substring(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}!`;
}

//GUI VERSION BELOW

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'rock') alert(playRound('rock', computerPlay()));
        else if (button.id == 'paper') alert(playRound('paper', computerPlay()));
        else if (button.id == 'scissors') alert(playRound('scissors', computerPlay()));
        else alert("Invalid button!");
    }); //addEventListener
}); //forEach

const container = document.querySelector('#container');
const score = document.createElement('div');
const playerTotal = document.createElement('div');
const computerTotal = document.createElement('div');
const tieTotal = document.createElement('div');
playerTotal.textContent = `Player: ${playerScore}`;
computerTotal.textContent = `Computer: ${computerScore}`;
tieTotal.textContent = `Tie: ${tieScore}`;

score.appendChild(playerTotal);
score.appendChild(computerTotal);
score.appendChild(tieTotal);
container.appendChild(score);