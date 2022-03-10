const htmlElement = document.documentElement;

const settingsBtnElement = document.getElementById("main-settings-button");
const closeMainSettingsBtnElement = document.getElementById(
  "btn-close-main-settings"
);
const decreaseCounterDurationBtnElement = document.getElementById(
  "js-btn-decrease-timer"
);
const increaseCounterDurationBtnElement = document.getElementById(
  "js-btn-increase-timer"
);
const submitSettingsBtnElement = document.getElementById("btn-submit-settings");

const backdropElement = document.getElementById("backdrop");
const mainSettingsModalElement = document.getElementById("modal-main-settings");
const counterDurationInputElement = document.getElementById(
  "input-timer-duration"
);
const ringtoneSelectElement = document.getElementById("select-ringtone");

function showMainSettingsModalElement() {
  backdropElement.style.display = "block";
  mainSettingsModalElement.style.display = "block";
  htmlElement.classList.add("noscroll");
}

function hideMainSettingsModalElement() {
  backdropElement.style.display = "none";
  mainSettingsModalElement.style.display = "none";
  htmlElement.classList.remove("noscroll");
}

function increaseCounterDuration(event) {
  event.preventDefault;
  counterDurationInputElement.stepUp(5);
}

function decreaseCounterDuration(event) {
  event.preventDefault;
  if (counterDurationInputElement.value > 5) {
    counterDurationInputElement.stepDown(5);
  }
}

function setPomodoroLength() {
  pomodoroLength = counterDurationInputElement.value;
}

function setAlarmSound() {
  if (ringtoneSelectElement.value == "leapfrog") {
    selectedAlarm = alarms.leapfrog;
  } else if (ringtoneSelectElement.value == "marimba") {
    selectedAlarm = alarms.marimba;
  } else {
    selectedAlarm = alarms.twinBell;
  }
}

function submitSettings(event) {
  event.preventDefault;
  setPomodoroLength();
  setAlarmSound();
  displayInitialTimer();
  hideMainSettingsModalElement();
  console.log(selectedAlarm);
}

settingsBtnElement.addEventListener("click", showMainSettingsModalElement);
backdropElement.addEventListener("click", hideMainSettingsModalElement);
closeMainSettingsBtnElement.addEventListener(
  "click",
  hideMainSettingsModalElement
);

increaseCounterDurationBtnElement.addEventListener(
  "click",
  increaseCounterDuration
);
decreaseCounterDurationBtnElement.addEventListener(
  "click",
  decreaseCounterDuration
);
submitSettingsBtnElement.addEventListener("click", submitSettings);