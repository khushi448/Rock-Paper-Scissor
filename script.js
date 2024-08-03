let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[
    randIdx
  ]; /* math.random give any randaom value less than 1 so when multiplied by 3 it gives any random value between 0 to 2[0,1,2] and math.floor removes decimal value*/
};

const drawGame = () => {
  //console.log("game was draw");
  msg.innerText = "game was draw.play again!";
  msg.style.backgroundColor = "rgb(79, 7, 7)";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    // console.log("you win!");
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    //console.log("you lose!");
    msg.innerText = `you lose.  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playgame = (userChoice) => {
  console.log("user choice =  ", userChoice);
  //generate computer choice
  const compChoice = getCompChoice();
  console.log("comp choice =   ", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playgame(userChoice);
  });
});
