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
  
  const gameData = {
    rounds: [],
    roundLimit: 5
  };

let roundCount = 0
  
let gameEnded = false;

  buttonSelections.forEach(buttonSelection => {
    buttonSelection.addEventListener('click', e => {
      if(!gameEnded){
        const userChoice = buttonSelection.getAttribute('value');
      const userSelection = data.find(selection => selection.name === userChoice);
      const computerSelection = getComputerChoice();

      computerChoiceImg.style.height = '164px';
      computerChoiceImg.style.width = '164px';
      userChoiceImg.style.height = '164px';
      userChoiceImg.style.width = '164px';

      computerChoiceImg.setAttribute('src',computerSelection.computerImage);
      userChoiceImg.setAttribute('src',userSelection.userImage);
  
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
        roundContent.innerText = `${userSelection.name} beats ${computerSelection.name}`;
      } else if (computerWinner) {
        roundData.winner = 'computer';
        incrementScore(computerScore);
        roundWinner.innerText = 'Computer Wins!';
        roundContent.innerText = `${computerSelection.name} beats ${userSelection.name}`;
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
  
    if (userScoreValue === 5 || computerScoreValue === 5) {
      gameEnded = true;
      
      if (userScoreValue === 5 && computerScoreValue < 5) {
        console.log('Human won the game');
      } else {
        console.log('Computer won the game');
      }
    }
  }