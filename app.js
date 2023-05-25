var score ={
    userScore: 0,
    computerScore: 0
}

const buttonSelections = document.querySelectorAll(".choice");
const computerChoiceImg = document.querySelector("#computer-choice")


buttonSelections.forEach(buttonSelection => {
    buttonSelection.addEventListener('click', e => {
        const userChoice = buttonSelection.getAttribute('value');
        makeSelection(userChoice,getComputerChoice());
        computerChoiceImg.setAttribute('src',"./computer-side/rock.png");
    })
})

function makeSelection(userChoice, computerChoice){
    console.log(`${userChoice}...${computerChoice}`);
}

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}

