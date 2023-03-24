var score = {
    userScore: 0,
    computerScore: 0
};


function getUserChoice() {
    let userInput = prompt(`Please enter your choice. Your choices are:
1. Rock  2.Paper  3.Scissor`);
    let choice = userInput.toLowerCase();
    if(choice === 'rock' || choice === 'paper' || choice === 'scissor'){
        
    }
    else{
        console.log("Given input is out of given choices. Please try again.")
        getUserChoice();
    }
    return choice;
}

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}

function playRound(userChoice, computerChoice) {
    console.log(userChoice + " " + computerChoice);
    if (userChoice === 'rock' && computerChoice === 'paper') {
        score.computerScore += 1;
        return "You Lose! Paper beats Rock.";
    }
    else if (userChoice === 'rock' && computerChoice === 'scissor') {
        score.userScore += 1;
        return "You Win! Rock beats Scissor.";
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        score.userScore += 1;
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
        score.userScore += 1;
        return "You Win! scissor beats paper.";
    }
    else if (userChoice === computerChoice) {
        score.computerScore += 1;
        score.userScore += 1;
        return "It is a tie.";
    }
}


function game() {
    while (score.userScore < 5 && score.computerScore < 5) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice,computerChoice));
    }
    if (score.userScore === 5) {
        let userWonMessage = `You won the Game!
User Score: ${score.userScore}
Computer Score: ${score.computerScore}`;
        return userWonMessage;
    }
    else if (score.computerScore === 5) {
        let computerWonMessage = `Computer won the Game!
User Score: ${score.userScore}
Computer Score: ${score.computerScore}`;
        return computerWonMessage;
    }
    else if (score.userScore === 5 && score.computerScore === 5) {
        return "This game is a Draw."
    }
}

console.log(game());