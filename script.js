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
            if (computerSelection == "ROCK") return(tieWin(computerSelection));
            else if (computerSelection == "PAPER") return(computerWin(playerSelection, computerSelection));
            else return(playerWin(playerSelection, computerSelection));
            break;
        case "PAPER":
            if (computerSelection == "PAPER") return(tieWin(computerSelection));
            else if (computerSelection == "ROCK") return(playerWin(playerSelection, computerSelection));
            else return(computerWin(playerSelection, computerSelection));
            break;
        case "SCISSORS":
            if (computerSelection == "SCISSORS") return(tieWin(computerSelection));
            else if (computerSelection == "ROCK") return(computerWin(playerSelection, computerSelection));
            else return(playerWin(playerSelection, computerSelection));
            break;
        default: 
            break;
    }
}

function tieWin(input) {
    tieScore++;
    tie.textContent = `${tieScore}`;
    return `It's a tie! Both chose ${input.charAt(0) + input.substring(1).toLowerCase()}!`;
}

function playerWin(playerSelection, computerSelection) {
    playerScore++;
    player.textContent = `${playerScore}`;
    return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)} beat ${computerSelection.charAt(0) + computerSelection.substring(1).toLowerCase()}!`;
}

function computerWin(playerSelection, computerSelection) {
    computerScore++;
    computer.textContent = `${computerScore}`;
    return `You lose! ${computerSelection.charAt(0) + computerSelection.substring(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}!`;
}

//==========BUTTON EVENT LISTENERS

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

//==========MAIN CONTAINER AND BUTTONS

const container = document.getElementById('container');
container.classList.add('flex');

const buttonContainer = document.getElementById('buttons');
buttonContainer.classList.add('flex');

//==========SCOREBOARD

const score = document.createElement('div');
score.setAttribute('id', 'score');
score.classList.add('flex');

const playerTotal = document.createElement('div');
playerTotal.setAttribute('id', 'player-total');
playerTotal.classList.add('flex');
const playerHeader = document.createElement('h1');
playerHeader.textContent = `PLAYER`;
const player = document.createElement('p');
player.textContent = `${playerScore}`;

const computerTotal = document.createElement('div');
computerTotal.setAttribute('id', 'computer-total');
computerTotal.classList.add('flex');
const computerHeader = document.createElement('h1');
computerHeader.textContent = `COMPUTER`;
const computer = document.createElement('p');
computer.textContent = `${computerScore}`;

const tieTotal = document.createElement('div');
tieTotal.setAttribute('id', 'tie-total');
tieTotal.classList.add('flex');
const tieHeader = document.createElement('h1');
tieHeader.textContent = `TIE`;
const tie = document.createElement('p');
tie.textContent = `${tieScore}`;

playerTotal.appendChild(playerHeader);
playerTotal.appendChild(player);
computerTotal.appendChild(computerHeader);
computerTotal.appendChild(computer);
tieTotal.appendChild(tieHeader);
tieTotal.appendChild(tie);

score.appendChild(playerTotal);
score.appendChild(computerTotal);
score.appendChild(tieTotal);
container.appendChild(score);