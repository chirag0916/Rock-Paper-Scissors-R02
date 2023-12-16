let computerChoice = "";
let max = 3;

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

  if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
    console.log("Tie");
    alert("Tie");
  }

  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    console.log("You Lose");
    alert("You Lose");
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    console.log("You Win");
    alert("You Win");
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    console.log("You Win");
    alert("You Win");
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
    console.log("Tie");
    alert("Tie");
  }

  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    console.log("You Lose");
    alert("You Lose");
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    console.log("You Lose");
    alert("You Lose");
    computerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    console.log("You Win");
    alert("You Win");
    playerScore++;
  }

  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
    console.log("Tie");
    alert("Tie");
  } 

  else {
    console.log("error");
  }
}



function game () {

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
    console.log("You Win the Match");
    break;
    }

  else {
    console.log("ongoing");
    }

  }
}

game();