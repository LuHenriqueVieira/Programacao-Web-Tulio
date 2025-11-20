// referencia os elementos html
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
const highScore = document.querySelector("#high-score");
const clouds = document.querySelector(".clouds");
const gameBoard = document.querySelector(".game-board");

// referencia o bullet
const bullet = document.querySelector("#bullet");

// sons
const soundJump = document.querySelector("#soundJump");
const soundDeath = document.querySelector("#soundDeath");''
const soundGame = document.querySelector("#soundGame");
const soundPowerUp = document.querySelector("#soundPowerUp");

// salva os dados do highScore no navegador
const setCookie = function (name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  document.cookie = name + "=" + value + ";" + expires + ";SameSite=Lax;path=/";
};

const getCookie = function (name) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  name = name + "=";

  console.log(ca);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

var scoreValue = -1;
var highScoreValue = getCookie("high-score");

highScore.textContent = getCookie("high-score");

// pular
const jump = () => {
  if (gameOver.style.display === "block" || mario.classList.contains("jump")) {
    return;
  }

  mario.classList.add("jump");
  soundJump.play();

  scoreValue += 1;
  score.textContent = scoreValue;

  if (highScoreValue < scoreValue) {
    setCookie("high-score", scoreValue, 365);
    highScoreValue = scoreValue;
    highScore.textContent = highScoreValue;
  }

  setTimeout(() => {
    mario.classList.remove("jump");
    if (scoreValue >= 11){
      mario.src = "images/mario-pro.gif"
    }
  }, 500);

  // som do powerup tocar somente uma vez
  switch (scoreValue){
    case 6:
      soundPowerUp.play()
      break
    case 11:
      soundPowerUp.play()
      break
  }
    
  // muda o mario conforme a pontuação
  if (scoreValue >= 6 && scoreValue <= 10) {
    mario.src = "images/mario-beginner.gif";
  } else if (scoreValue >= 11) {
    mario.src = "images/mario-flying.gif";
    
  }
};

// espera falhar
const waitingFailure = () => {
  const cloudsPosition = clouds.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  const bulletPosition = bullet.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");


  // colisao do mario com os objetos
  if ((pipePosition <= 120 || bulletPosition <= 120) 
    && (pipePosition > 0 || marioPosition > 0) 
    && marioPosition < 112) {

    mario.style.animationPlayState = "paused";
    mario.style.bottom = `${marioPosition}px`;

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    bullet.style.animation = "none";
    bullet.style.left = `${bulletPosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameOver.style.display = "block";
   
    soundDeath.play();
    soundGame.pause();

    clearInterval(loop);
    
    document.removeEventListener("keydown", jump);
    document.removeEventListener("touchstart", jump);

    gameBoard.classList.add("game-board-over");
  }
};

var loop = setInterval(waitingFailure, 10);

// reiniciar o jogo
const restartGame = function () {

  soundGame.play();

  gameOver.style.display = "none";
  gameBoard.classList.remove('game-board-over');

  mario.style.animationPlayState = "running";
  mario.src = "./images/mario-starter.gif";
  mario.style.width = "125px";
  mario.style.marginLeft = "0";
  mario.style.bottom = "0";

  pipe.style.left = "auto";
  pipe.style.animation = "pipe-animation 2s infinite linear";

  bullet.style.left = "auto";
  bullet.style.animation = "bullet-animation 3s infinite linear";

  clouds.style.left = "auto";
  clouds.style.animation = "clouds-animation 20s infinite linear";

  scoreValue = 0;
  score.textContent = scoreValue;

  document.addEventListener("keydown", jump);
  document.addEventListener("touchstart", jump);

  loop = setInterval(waitingFailure, 10);
};

// chama as funcoes
document.querySelector(".retry").addEventListener("click", restartGame);

document.querySelector(".game-board").addEventListener("keydown", jump);
document.querySelector(".game-board").addEventListener("touchstart", jump);