const pomodoroLength = 0.5;
const pomodoroSetLength = pomodoroLength * 60 * 1000;

const timerState = {
  isRunning: false,
  startTime: 0,
  remainingTime: 0,
  intervalId: undefined,
};

const alarm = new Audio("Audio/alarm.mp3");

const counterFrame = document.querySelector("#js-counter");
const mainButton = document.querySelector("#js-main-button");

function setMainButtonText() {
  mainButton.textContent = timerState.isRunning ? "Stop" : "Start";
}

setMainButtonText();

function calculateCurrentTime() {
  return new Date(Date.now()).getTime();
}

function displayInitialTimer() {
  timerState.remainingTime = pomodoroSetLength;
  displayTimer();
}

function startTimer() {
  timerState.isRunning = !timerState.isRunning;
  setMainButtonText();
  timerState.startTime = calculateCurrentTime();
  timerState.intervalId = setInterval(function () {
    calculateRemainingTime();
    saveTimer(calculateRemainingTime()); //Összevonható?
    displayTimer();
  }, 1000);
}

function stopTimer() {
  timerState.isRunning = !timerState.isRunning;
  setMainButtonText();
  displayInitialTimer();
  clearInterval(timerState.intervalId);
  console.log("Stopped!")
}

function finishedTimer() {
  stopTimer();
  console.log("Finished!");
  alarm.play();
}

function calculateRemainingTime() {
  const current = calculateCurrentTime();
  const elapsed = current - timerState.startTime;
  console.log(elapsed);
  if (elapsed >= pomodoroSetLength) {
    finishedTimer();
  } else {
    return pomodoroSetLength - elapsed;
  }
}

function saveTimer(remainingTime) {
  timerState.remainingTime = remainingTime;
}

function displayTimer() {
  time = timerState.remainingTime / 1000;
  minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = Math.round(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  counterFrame.innerHTML = `${minutes}:${seconds}`;
}

displayTimer();

function handleMainButtonClick() {
  timerState.isRunning ? stopTimer() : startTimer();
}

mainButton.addEventListener("click", handleMainButtonClick);
window.addEventListener("load", displayInitialTimer);
