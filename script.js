const timerState = {
  isRunning: false,
  startTime: 0,
  elapsedTime: 0,
};

const counterFrame = document.querySelector("#js-counter");
const mainButton = document.querySelector("#js-main-button");

//mainButton szövegének változtatása
function setMainButtonText() {
  if (timerState.isRunning === false) {
    mainButton.textContent = "Start";
  } else {
    mainButton.textContent = "Stop";
  }
}

//mainButton szövegének változtatása
setMainButtonText();

function timerFinished() {
  const alarm = new Audio("Audio/alarm.mp3");
  alarm.play();
}

function startTimer() {
  setInterval(function () {
    timer();
    saveTimer();
    displayTimer();
  }, 1000);
}

function timer() {
  // minutes = Math.floor(time / 60);
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = time % 60;
  // seconds = seconds < 10 ? "0" + seconds : seconds;
  // counterFrame.innerHTML = `${minutes}:${seconds}`;
  let minutes = "";
  let seconds = "";
  const startingMinutes = 1;
  let time = startingMinutes * 60;
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  counterFrame.innerHTML = `${timerState.currentMinute}:${timerState.currentSecond}`;
  while (time >= 1) {
    time--;
    return;
  }
  timerFinished();
}

function saveTimer(minutes, seconds) {
  timerState.currentMinute = minutes;
  timerState.currentSecond = seconds;
}

function displayTimer() {}

displayTimer();

function handleMainButtonClick() {
  timerState.isRunning = !timerState.isRunning;
  setMainButtonText();
  startTimer();
}

mainButton.addEventListener("click", handleMainButtonClick);
