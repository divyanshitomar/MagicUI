const inputNumber = document.querySelector("#input-number");
const floatingBtn = document.querySelector("#floating-button-main");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar-main");
const closeSideBar = document.querySelector("#close-button-side-bar");
const toastExample = document.querySelector("#toast-example-success");
const btnToShowToast = document.querySelector(".show-toast-example-btn");

const modalInterstitial = document.querySelector("#example-modal-interstitial");
const modalCloseBtn = document.querySelector("#example-modal-close");
const modalCTA = document.querySelector("#example-modal-CTA");

modalCTA.addEventListener("click", () => {
  modalInterstitial.style.display = "block";
  document.body.style.overflow = "hidden";
});

modalCloseBtn.addEventListener("click", () => {
  modalInterstitial.style.display = "none";
  document.body.style.overflow = "visible";
});

let timerIdForToast;
btnToShowToast.addEventListener("click", () => {
  toastExample.style.display = "block";
  timerIdForToast = setTimeout(() => {
    toastExample.style.display = "none";
  }, 2000);
});

inputNumber.addEventListener("input", isInputValid);

floatingBtn.addEventListener("click", goToTop);

hamburgerMenu.addEventListener("click", openDrawer);

closeSideBar.addEventListener("click", handlerForCloseSideBar);

function handlerForCloseSideBar() {
  document.getElementById("side-bar-mobile").style.display = "none";
}

function isInputValid() {
  var inputNumberLength = inputNumber.value.length;
  if (inputNumberLength === 10 && isNaN(inputNumber.value) == false) {
    inputNumber.style.color = "green";
  } else inputNumber.style.color = "red";
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var displayDrawer = false;
function openDrawer() {
  document.getElementById("side-bar-mobile").style.display = "block";
}

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

floatingBtn.style.visibility = "hidden";

window.addEventListener("scroll", () => {
  if (getScrollPercent() > 99.6) sideBar.classList.add("side-bar-main-static");
  else sideBar.classList.remove("side-bar-main-static");
  if (getScrollPercent() >= 1) floatingBtn.style.visibility = "visible";
  else floatingBtn.style.visibility = "hidden";
  document.getElementById("progress-bar").style.width = `${getScrollPercent()}%`;
});
