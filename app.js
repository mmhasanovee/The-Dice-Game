
var scores, roundScore, activePlayer, gameState;
init();

//5 minute. 6 no video..

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameState) {
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //updating the round score

    if (dice !== 1) {
      roundScore += dice;
      console.log(roundScore);
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameState) {
    scores[activePlayer] += roundScore; //adding score to global var
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer]; //updating in ui

    if (scores[activePlayer] >= 50) {
      gameState = false;
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameState = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function rules(){
  alert(" 1. Unlimited Rounds\n 2. Each round, player rolls dice as many times wants\n 3. But, if the dice value is 1, all the scores will be 0 and turn to next player\n 4. Player can choose to hold, by doing so it will be turn of 2nd player. But, the score will be intacted. 5. Whoever reaches 50 first, wins the game. \n 6. Once you reach 50, press hold to finish the game!");
}
