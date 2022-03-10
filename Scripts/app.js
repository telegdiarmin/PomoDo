let pomodoroLength = 25;
let shortBreakLength = 5;
let longBreakLength = 15;

//const pomodoroSetLength = pomodoroLength * 60 * 1000;

const timerState = {
  isRunning: false,
  isPomodoroActive: false,
  isShortBreakActive: false,
  isLongBreakActive: false,
  timerSetLength: 0,
  startTime: 0,
  remainingTime: 0,
  intervalId: undefined,
};

const alarms = {
  leapfrog: new Audio("Audio/Leapfrog.ogg"),
  marimba: new Audio("Audio/Marimba.ogg"),
  twinBell: new Audio("Audio/Twin Bell.ogg"),
};

let selectedAlarm = alarms.leapfrog;

const counterFrame = document.querySelector("#js-counter");
const mainButton = document.querySelector("#js-main-button");

function setMainButtonText() {
  mainButton.textContent = timerState.isRunning ? "Stop" : "Start";
}

setMainButtonText();

function calculateCurrentTime() {
  return new Date(Date.now()).getTime();
}

function setTimerLength() {
  timerState.timerSetLength = pomodoroLength * 60 * 1000; //Egyelőre hard-coded
  timerState.remainingTime = timerState.timerSetLength;
}

function displayInitialTimer() {
  setTimerLength();
  displayTimer();
}

function startTimer() {
  timerState.isRunning = !timerState.isRunning;
  setMainButtonText();
  timerState.startTime = calculateCurrentTime();
  timerState.intervalId = setInterval(maintainTimer, 1000);
}

function maintainTimer() {
  if (timerState.remainingTime >= 1000) {
    calculateRemainingTime();
    saveTimer(calculateRemainingTime()); //Összevonható?
    displayTimer();
  } else {
    finishedTimer();
  }
}

function stopTimer() {
  timerState.isRunning = !timerState.isRunning;
  setMainButtonText();
  displayInitialTimer();
  clearInterval(timerState.intervalId);
  console.log("Stopped!");
}

function finishedTimer() {
  stopTimer();
  console.log("Finished!");
  selectedAlarm.play();
}

function calculateRemainingTime() {
  const current = calculateCurrentTime();
  const elapsed = current - timerState.startTime;
  console.log(elapsed);
  return timerState.timerSetLength - elapsed;
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
