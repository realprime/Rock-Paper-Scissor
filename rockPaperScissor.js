
let userInput = prompt(`Please enter your choice. Your choices are:
1. Rock  2.Paper  3.Scissor`);
let userChoice = userInput.toLowerCase();

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * arr.length);
    let choice = arr[randomIndex].toLowerCase();
    return choice;
}