const data = [
  {
    name: 'rock',
    computerImage: './computer-side/rock.png',
    userImage: './user-side/rock.png',
    beats: 'scissor'
  },
  {
    name: 'paper',
    computerImage: './computer-side/paper.png',
    userImage: './user-side/paper.png',
    beats: 'rock'
  },
  {
    name: 'scissor',
    computerImage: './computer-side/scissor.png',
    userImage: './user-side/scissor.png',
    beats: 'paper'
  }
];

const buttonSelections = document.querySelectorAll(".choice");
const computerChoiceImg = document.querySelector("#computer-choice");
const userChoiceImg = document.querySelector("#user-choice");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#comp-score");
const roundWinner = document.querySelector("#round-winner");
const roundContent = document.querySelector("#round-content");
const roundNum = document.querySelector("#round-number");
const userChoicesContainer = document.querySelector(".user-icon-container");
const computerChoicesContainer = document.querySelector(".computer-icon-container");
const pointSelections = document.querySelectorAll('[points]');
const startButton = document.querySelector('.startUp');
const startUpModal = document.querySelector('.start-up')
const overlay = document.querySelector('#overlay')
const endComputerScore = document.querySelector('#computer-score-end');
const endUserScore = document.querySelector('#user-score-end');
const mainMessage = document.querySelector('.main-message');
const secondaryMessage = document.querySelector('.secondary-message');
const theEnd = document.querySelector('.end');
const endOverlay = document.querySelector('#end-overlay');

startButton.classList.remove('startUp-button');

let points;

pointSelections.forEach(pointSelection => {
  pointSelection.addEventListener('click', e => {
    points = parseInt(pointSelection.getAttribute('points'))
    start();
    
  })
})

function start(){
  startButton.classList.add('startUp-button');
  startButton.classList.remove('disabled');
  startButton.addEventListener('click', () =>{
    startUpModal.style.display = 'none';
    overlay.style.display = 'none';
  })
}

const gameData = {
  rounds: [],
  roundLimit: 5
};

let roundCount = 0

let gameEnded = false;

buttonSelections.forEach(buttonSelection => {
  buttonSelection.addEventListener('click', e => {
    if (!gameEnded) {
      const userChoice = buttonSelection.getAttribute('value');
      const userSelection = data.find(selection => selection.name === userChoice);
      const computerSelection = getComputerChoice();

      computerChoiceImg.style.height = '164px';
      computerChoiceImg.style.width = '164px';
      userChoiceImg.style.height = '164px';
      userChoiceImg.style.width = '164px';

      computerChoiceImg.setAttribute('src', computerSelection.computerImage);
      userChoiceImg.setAttribute('src', userSelection.userImage);

      const userWinner = isWinner(userSelection, computerSelection);
      const computerWinner = isWinner(computerSelection, userSelection);

      const roundData = {
        userChoice,
        computerChoice: computerSelection.name,
        winner: ''
      };

      if (userWinner) {
        roundData.winner = 'user';
        incrementScore(userScore);
        roundWinner.innerText = 'Human Wins!';
        roundContent.innerText = `${capitalize(userSelection.name)} beats ${capitalize(computerSelection.name)}`;
      } else if (computerWinner) {
        roundData.winner = 'computer';
        incrementScore(computerScore);
        roundWinner.innerText = 'Computer Wins!';
        roundContent.innerText = `${capitalize(computerSelection.name)} beats ${capitalize(userSelection.name)}`;
      } else {
        roundData.winner = 'draw';
        roundWinner.innerText = 'DRAW!';
        roundContent.innerText = '';
      }

      updateChoicesContainer();
      checkGameEnd();

      gameData.rounds.unshift(roundData);
      if (gameData.rounds.length > gameData.roundLimit) {
        gameData.rounds.pop();
      }

      roundCount++;
      roundNum.innerText = roundCount;
    }
  });
});

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isWinner(choice, opponentChoice) {
  return choice.beats === opponentChoice.name;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

function updateChoicesContainer() {
  userChoicesContainer.innerHTML = '';
  computerChoicesContainer.innerHTML = '';

  gameData.rounds.forEach(round => {
    const userChoiceImg = document.createElement('img');
    const computerChoiceImg = document.createElement('img');

    userChoiceImg.setAttribute('src', data.find(selection => selection.name === round.userChoice).userImage);
    computerChoiceImg.setAttribute('src', data.find(selection => selection.name === round.computerChoice).computerImage);

    userChoiceImg.classList.add('previous-icon');
    computerChoiceImg.classList.add('previous-icon');

    if (round.winner === 'user') {
      userChoiceImg.classList.add('winner');
    } else if (round.winner === 'computer') {
      computerChoiceImg.classList.add('winner');
    }

    userChoicesContainer.appendChild(userChoiceImg);
    computerChoicesContainer.appendChild(computerChoiceImg);
  });
}

function checkGameEnd() {
  const userScoreValue = parseInt(userScore.innerText);
  const computerScoreValue = parseInt(computerScore.innerText);

  if (userScoreValue === points || computerScoreValue === points) {
    gameEnded = true;

    setTimeout(function(){
      theEnd.style.display = 'block';
      endOverlay.style.display = 'block';
      endComputerScore.innerText = '';
      endUserScore.innerText='';

      endComputerScore.innerText = parseInt(computerScoreValue);
      endUserScore.innerText = parseInt(userScoreValue);


      if (userScoreValue === points && computerScoreValue < points) {
        mainMessage.innerText = "Human won the Game !"
        secondaryMessage.innerText = `Human beats Computer by ${userScoreValue - computerScoreValue} points.`;
      } else {
        mainMessage.innerText = "Computer won the Game !"
        secondaryMessage.innerText = `Computer beats Human by ${computerScoreValue - userScoreValue} points.`;
      }
    }, 800);
  }
}