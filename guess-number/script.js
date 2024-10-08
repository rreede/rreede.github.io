"use strict";

/*

// selecting class elements

document.querySelector(".message").textContent = "Correct Number? 🥳";
document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "15";
document.querySelector(".highscore").textContent = "0";

// Input class selection

document.querySelector(".guess").value = "0";

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // If no input
    document.querySelector(".message").textContent = "No number! ❌";

    // if Guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent =
      "Correct number! Congrats! 💚";

    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // If guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high! 📈";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      // If guess is too low
    } else {
      document.querySelector(".message").textContent = "You lost the game 🙅‍♂️";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low! 📉";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.background = "#eea849";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "";
});

/*

document.querySelector(".check").addEventListener("click", (event) => {
  this;
  event.target;
  event.currentTarget;
  const value = document.querySelector("[data-guess]").value;
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess);
});
1;

*/
