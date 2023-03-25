//Initialize score object with userScore and computerScore set to 0.
var score = {
    userScore: 0,
    computerScore: 0
};

//prompt the user to input a choice among rock, paper and scissor;
//returns the user's choice by coverting it to lowercase.
function getUserChoice() {
    let userInput = prompt(`Please enter your choice. Your choices are:
1. Rock  2.Paper  3.Scissor`);
    let choice = userInput.toLowerCase();
    if(choice === 'rock' || choice === 'paper' || choice === 'scissor'){
        return choice;
    }
    else{
        console.log("Given input is out of given choices. Please try again.")
        getUserChoice();
    }
}

//Generates a random choice among rock, paper and scissor as computer choice;
//return computer's choice after converting to lowercase.
function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}

//Determines the winner based on the user and computer choices;
//Update the score object based on the winner of the round;
//returns a message referring to the result of the round.
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

//Executes the game until either the user's or computer's scores' reach 5 points.
//calls userChoice(), computerChoice() and playGround();
//returns score of the both players and a  message indicating the winner of the game.
function game() {
    while (score.userScore < 5 && score.computerScore < 5) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice,computerChoice));
    }
    if (score.userScore === 5 && score.computerScore < 5) {
        let userWonMessage = `You won the Game!
User Score: ${score.userScore}
Computer Score: ${score.computerScore}`;
        return userWonMessage;
    }
    else if (score.computerScore === 5 && score.userScore < 5) {
        let computerWonMessage = `Computer won the Game!
User Score: ${score.userScore}
Computer Score: ${score.computerScore}`;
        return computerWonMessage;
    }
    else if (score.userScore === 5 && score.computerScore === 5) {
        return "This game is a Draw."
    }
}

//start the game by calling the game() function.
console.log(game());