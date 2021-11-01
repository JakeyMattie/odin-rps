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
            if (computerSelection == "ROCK") return `It's a tie! Both chose rock!`;
            else if (computerSelection == "PAPER") {
                computerScore++;
                return `You lose! Paper beats rock!`;
            }
            else {
                playerScore++;
                return `You win! Rock beats scissors!`;
            }
            break;
        case "PAPER":
            if (computerSelection == "PAPER") return `It's a tie! Both chose paper!`;
            else if (computerSelection == "ROCK") {
                playerScore++;
                return `You win! Paper beats rock!`;
            }
            else {
                computerScore++;
                return `You lose! Scissors beat paper!`;
            }
            break;
        case "SCISSORS":
            if (computerSelection == "SCISSORS") return `It's a tie! Both chose scissors!`;
            else if (computerSelection == "ROCK") {
                computerScore++;
                return `You lose! Rock beats scissors!`;
            }
            else {
                playerScore++;
                return `You win! Scissors beat paper!`;
            }
            break;
        default: 
            break;
    }
}

//The entire game, i depends on the number of rounds you want
function game() {
    let playerSelection;
    let computerSelection;
    let input = prompt("How many rounds?");

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < input; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(`Round ${i+1} - - - - -`);
        console.log(`Player chose: ${playerSelection.toUpperCase()}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`PLAYER'S SCORE: ${playerScore}`);
    console.log(`COMPUTER'S SCORE: ${computerScore}`);

    if (playerScore > computerScore) alert("You win!");
    else alert("You lost!");

    do {
        input = prompt("Play again?");
        if (input.toUpperCase() == "Y") game();
        else if (input.toUpperCase() == "N") alert("Thanks for playing!");
        else alert("Incorrect input!");
    } while (input.toUpperCase() != "Y" && input.toUpperCase() != "N");
}

let playerScore = 0;
let computerScore = 0;
game();