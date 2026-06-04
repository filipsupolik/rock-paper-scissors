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

function textPropertySetter(element) {
  element.style.padding = "8px";
  element.style.fontStyle = "bold";
  element.style.fontSize = "20px";
}

function playGame() {
  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");

  const buttons = document.getElementsByTagName("button");

  const resultsContainer = document.querySelector(".result-container");
  resultsContainer.style.border = "3px solid black";
  resultsContainer.style.margin = "16px";
  resultsContainer.style.display = "flex";
  resultsContainer.style.justifyContent = "space-around";
  resultsContainer.style.alignItems = "center";

  const results = document.querySelector(".content");
  textPropertySetter(results);

  const runningScore = document.querySelector(".runningScore");
  textPropertySetter(runningScore);

  let humanScore = 0,
    computerScore = 0;

  function reset() {
    resultsContainer.style.backgroundColor = "#fff";
    results.textContent = "";
    Array.from(buttons).forEach((element) => {
      element.disabled = true;
    });
    humanScore = 0;
    computerScore = 0;
  }

  function playRound(playerSelection) {
    let humanChoiceLower = playerSelection;
    let computerChoice = getComputerChoice();

    if (humanChoiceLower === computerChoice) {
      results.textContent = "It's tie!";
      resultsContainer.style.backgroundColor = "#fff";
    } else if (
      (humanChoiceLower === "rock" && computerChoice === "scissors") ||
      (humanChoiceLower === "paper" && computerChoice === "rock") ||
      (humanChoiceLower === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      results.textContent = `You win! ${humanChoiceLower} beats ${computerChoice}`;
      resultsContainer.style.backgroundColor = "#00ff26de";
    } else {
      computerScore++;
      results.textContent = `You lose! ${computerChoice} beats ${humanChoiceLower}`;
      resultsContainer.style.backgroundColor = "#f83737";
    }
    runningScore.textContent = `Score: human: ${humanScore} || computer: ${computerScore}`;
    if (humanScore === 5) {
      runningScore.textContent = "Winner is human!";
      reset();
    } else if (computerScore === 5) {
      runningScore.textContent = "Winner is computer!";
      reset();
    }
  }

  btnRock.addEventListener("click", (e) => {
    playRound("rock");
  });

  btnPaper.addEventListener("click", (e) => {
    playRound("paper");
  });

  btnScissors.addEventListener("click", (e) => {
    playRound("scissors");
  });
}

playGame();
