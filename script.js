console.log("Hello world!");

//Computer's random selection of rock/paper/scissors
function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "ROCK";
    else if (choice == 2) return "PAPER";
    else return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection == "ROCK") return `It's a tie! Both chose rock!`;
            else if (computerSelection == "PAPER") return `You lose! Paper beats rock!`;
            else return `You win! Rock beats scissors!`;
            break;
        default: break;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));