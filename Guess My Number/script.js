let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Please insert a number");
  } else if (secretNumber === guess) {
    displayMessage("Correct Number :) ");
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (secretNumber !== guess) {
    if (score > 0) {
      displayMessage(secretNumber > guess ? "Too low ...!" : "Too high ...!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage = "You lost the game ...! ";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
