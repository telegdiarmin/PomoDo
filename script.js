const counterFrame = document.querySelector("#js-counter");
const mainButton = document.querySelector("#js-main-button");

function setMainButtonText() {
  mainButton.textContent = "Start";
}

setMainButtonText();

function timerFunction() {
  const startingMinutes = 25;
  let time = startingMinutes * 60;
  setInterval(timer, 1000);
  function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    counterFrame.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
}

function handleMainButtonClick() {
  timerFunction();
  //   alert("Hello")
}

mainButton.addEventListener("click", handleMainButtonClick);
