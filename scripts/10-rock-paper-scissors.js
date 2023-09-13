let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0,
    };
  }
  */
  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));
    //setItem saves data in the local storage, also here under 'score' we save how we want to call that property, and then from where we call the data
    updateScoreElement();
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = `You
  <img src="/javascript course/pics/${playerMove}-emoji.png" class="move-icon" />
  <img
    src="/javascript course/pics/${computerMove}-emoji.png"
    class="move-icon"
  />Computer`;
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  } //return statement can return us a value from the function, like 5, or 2+2 or Math.random(), if we have no value, function will return 'undefined'
  //if we use a return statement, it ends the function immidietaly, if we have some more commands later, it won't run the code.
  //what happens here is that we call the function when pressing the button, and it returns a value based on Math random, that value is saved in a variable, which is used in the if statements for result.