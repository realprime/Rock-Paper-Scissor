var score = {
    playerScore: 0,
    computerScore: 0
};

function getUserChoice() {
    let userInput = prompt(`Please enter your choice. Your choices are:
1. Rock  2.Paper  3.Scissor`);
    let choice = userInput.toLowerCase();
    return choice;
}

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}

const computerChoice = getComputerChoice();
const userChoice = getComputerChoice();

function playRound(userChoice, computerChoice) {
    console.log(userChoice + " " + computerChoice);
    if (userChoice === 'rock' && computerChoice === 'paper') {
        score.computerScore += 1;
        return "You Lose! Paper beats Rock.";
    }
    else if (userChoice === 'rock' && computerChoice === 'scissor') {
        score.playerScore += 1;
        return "You Win! Rock beats Scissor.";
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        score.playerScore += 1;
        return "You Win! Paper beats Rock.";
    }
    else if (userChoice === 'paper' && computerChoice === 'scissor') {
        score.computerScore += 1;
        return "You Lose! Scissor beats Paper.";
    }
    else if (userChoice === 'scissor' && computerChoice === 'rock') {
        score.computerScore += 1;
        return "You Lose! Rock beats Scissor.";
    }
    else if (userChoice === 'scissor' && computerChoice === 'paper') {
        score.playerScore += 1;
        return "You Win! scissor beats paper.";
    }
    else if (userChoice === computerChoice) {
        score.computerScore += 1;
        score.playerScore += 1;
        return "It is a tie.";
    }
}