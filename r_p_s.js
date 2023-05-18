const playerSelection = window.prompt("What is your selection")


const choice = [
  "Rock",
  "Paper",
  "Scissors"
];

const outcomeMessage = ['Congrats, you win!', 'Sorry, you lose.','Nobody wins. It\'s a draw']

function getComputerSelection (randomString) {if (playerSelection = 'Rock' || 'Paper' || 'Scissors'){const computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;}}


function playRound (playerSelection, computerSelection)
{

    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){outcomeMessage[1]}

else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
    outcomeMessage[3]
}
else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    outcomeMessage[2]
}

else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
    outcomeMessage[3]
}

else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    outcomeMessage[2]
}

else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    outcomeMessage[1]
}

else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
    outcomeMessage[3]
}

else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    outcomeMessage[1]
}

else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    outcomeMessage[2]
}

}

playRound (playerSelection, computerSelection)
