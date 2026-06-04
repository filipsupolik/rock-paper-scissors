let getComputerChoice = () => {
  let result = Math.random() * 100;

  if (result <= 33) {
    return "rock";
  } else if (result > 33 && result <= 66) {
    return "scissors";
  } else {
    return "paper";
  }
};

let getHumanChoice = () => {
  let input = prompt(
    "Please pic 1 choice: rock, paper, scissors",
  ).toLowerCase();
  if (input === "rock" || input === "paper" || input == "scissors") {
    return input;
  }
};

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound() {
    let humanChoiceLower = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoiceLower === computerChoice) {
      console.log("It's tie!");
    } else if (
      (humanChoiceLower === "rock" && computerChoice === "scissors") ||
      (humanChoiceLower === "paper" && computerChoice === "rock") ||
      (humanChoiceLower === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoiceLower} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}`);
    }
    console.log(`Score: human: ${humanScore} || computer: ${computerScore}`);
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame();
