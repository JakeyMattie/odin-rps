console.log("Hello world!");

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return console.log("Rock");
    else if (choice == 2) return console.log("Paper");
    else return console.log("Scissors");
}

const computerSelection = computerPlay();