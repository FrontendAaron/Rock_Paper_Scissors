function playRound (playerSelection, computerSelection)

{if (playerSelection == 'Rock' && computerSelection == 'Scissors'){'Congrats, you win. Rock beats scissors'}

else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
   alert ('Sorry, you lose. paper beats rock')
}

else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
   alert ('Sorry, you lose. Rock beats scissors.')
}

else if (playerSelection == 'Scissors' && computerSelection == 'Paper') { alert ('Congrats, you win. Scissors beats Rock.')
}

else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
   alert ('Congrats, you win. paper beats rock.')
}

else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
 alert ('Sorry, you lose. Scissors beats paper.')
}

else if (playerSelection == computerSelection) {
 alert ("It's a draw, try again.")
}

return playerSelection, computerSelection;

}
const playerSelection = window.prompt("What is your selection")

function getComputerSelection (randomString){const computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;}

function game ()


const choice = [
  "Rock",
  "Paper",
  "Scissors"
];

const computerSelection = getComputerSelection ()

if (playerSelection ==  "Rock"||"Paper"||"Scissors" && computerSelection == "Rock"||"Paper"||"Scissors" ) 
{playRound (playerSelection, computerSelection)}