const timer = {
  isRunning: false,
  startTime: 0,
//   currentMinute: minutes,
//   currentSecond: seconds,
}

const counterFrame = document.querySelector("#js-counter");
const mainButton = document.querySelector("#js-main-button");

//mainButton szövegének változtatása
function setMainButtonText() {
  if (timer.isRunning = "false") {
    mainButton.textContent = "Start";
  } else {
    mainButton.textContent = "Stop";
  }
}

//mainButton szövegének változtatása
setMainButtonText();

function timerFunction() {
  let minutes = "";
  let seconds = "";
  const startingMinutes = 1;
  let time = startingMinutes * 60;
  setInterval(timer, 1000);
  function timer() {
    minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds; //ternáris operátor!
    counterFrame.innerHTML = `${minutes}:${seconds}`;
    if (time >= 1) {
      time--;
    }
  }
}

function handleMainButtonClick() {
  timerFunction();
  //   alert("Hello")
}

mainButton.addEventListener("click", handleMainButtonClick);
