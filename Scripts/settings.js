const settingsBtnElement = document.getElementById("main-settings-button");
const closeMainSettingsBtnElement = document.getElementById("btn-close-main-settings")

const backdropElement = document.getElementById("backdrop");
const mainSettingsModalElement = document.getElementById("modal-main-settings")

function showMainSettingsModalElement() {
  backdropElement.style.display = "block";
  mainSettingsModalElement.style.display = "block"
  console.log("Modal!");
}

function hideMainSettingsModalElement() {
    backdropElement.style.display = "none";
    mainSettingsModalElement.style.display = "none"
}

settingsBtnElement.addEventListener("click", showMainSettingsModalElement);
backdropElement.addEventListener("click", hideMainSettingsModalElement);
closeMainSettingsBtnElement.addEventListener("click", hideMainSettingsModalElement);