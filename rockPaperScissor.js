
let userInput = prompt(`Please enter your choice. Your choices are:
1. Rock  2.Paper  3.Scissor`);
let userChoice = userInput.toLowerCase();

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}

const computerChoice = getComputerChoice();

function playRound(userChoice, computerChoice) {
    console.log(userChoice + " " + computerChoice);
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return "You Lose! Paper beats Rock.";
    }
    else if (userChoice === 'rock' && computerChoice === 'scissor') {
        return "You Win! Rock beats Scissor.";
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "You Win! Paper beats Rock.";
    }
    else if (userChoice === 'paper' && computerChoice === 'scissor') {
        return "You Lose! Scissor beats Paper.";
    }
    else if (userChoice === 'scissor' && computerChoice === 'rock') {
        return "You Lose! Rock beats Scissor.";
    }
    else if (userChoice === 'scissor' && computerChoice === 'paper') {
        return "You Win! scissor beats paper.";
    }
    else if (userChoice === computerChoice) {
        return "It is a tie.";
    }
}