let computerChoice = "";
let max = 3;
let outcome = ""

let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let randomNum = getRandomInt(max);

  console.log(randomNum);

  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else if (randomNum === 2) {
    computerChoice = "scissors";
  } else {
    console.log("error");
  }
9
  return computerChoice;
}

function playerMove() {
  let playerSelection = prompt("Please choose a move");
  return playerSelection;
}


function playRound(playerSelection,computerSelection) {

  if (playerSelection === null) {
    console.log("Game Canceled");
    alert("Game Canceled");
    return;
  }
  
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
    console.log("Tie");
    outcome ="Tie";
  }

  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    console.log("You Lose");
    outcome ="You Lose, Paper beats Rock";
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    console.log("You Win");
    outcome ="You Win, Rock beats Scissors";
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    console.log("You Win");
    outcome="You Win, Paper beats Rock";
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
    console.log("Tie");
    outcome= "Tie";
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    console.log("You Lose");
    outcome= "You Lose, Scissors beats Paper";
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    console.log("You Lose");
    outcome ="You Lose, Rock beats Scissors";
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    console.log("You Win");
    outcome = "You Win, Scissors beats Paper";
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
    console.log("Tie");
    outcome ="Tie";
  } 

  else {
    console.log("error");
  }
}



/*function game () {

while (true) {
  let playerSelection=playerMove();
  let computerSelection=getComputerChoice();
  playRound(playerSelection,computerSelection);

    if (playerScore == 3) {
    alert("You Win the Match");
    console.log("You Win the Match");
    break;
    }

  else if (computerScore == 3) {
    alert("You Lose the Match");
    console.log("You lose the Match");
    break;
    }

  else if (playerSelection === null) {
      return;
    }

  }
}

game();*/
function resetColour() {
  document.querySelector("#outcome").style.color ="black";
}

document.addEventListener("DOMContentLoaded", function() {
  let rock = document.querySelector("#rock");
  let paper = document.querySelector("#paper");
  let scissors = document.querySelector("#scissors");

  let playerScoreElement = document.querySelector("#player-score");
  let computerScoreElement = document.querySelector("#computer-score");
  let outcomeElement = document.querySelector("#outcome");

  function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    outcomeElement.textContent = outcome;

    if (playerScore  == 5) {
      playerScore=0;
      computerScore=0;
      outcome = "You Win the Match";
      document.querySelector("#outcome").style.color ="green";
      updateScores();

    
    }

    else if (computerScore == 5) {
      playerScore=0;
      computerScore=0;
      outcome = "You Lose the Match";
      document.querySelector("#outcome").style.color ="red";
      updateScores();
      
    }
  }

  function onClickFunction(move) {
    resetColour();
    let playerSelection = move;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores();
  }

  rock.addEventListener('click', function() {
    onClickFunction("rock");
  });

  paper.addEventListener('click', function() {
    onClickFunction("paper");
  });

  scissors.addEventListener('click', function() {
    onClickFunction("scissors");
  });


});