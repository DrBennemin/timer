// Selectors
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const timer = document.querySelector(".timer");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

const msSeconds = 1000;
const msMinutes = msSeconds * 60;
const msHours = msMinutes * 60;

let time = 0;

// Events
timer.addEventListener("change", () => {
  prettifyTime();
  setTime();
});

start.addEventListener("click", () => {
  start.disabled = true;
  let counter = setInterval(() => {
    if (time >= msSeconds) {
      time = time - msSeconds;
      updateTime();
      pause.addEventListener("click", () => {
        clearInterval(counter);
        start.disabled = false;
      });
      console.log(time);
    } else {
      clearInterval(counter);
      new Audio("./assets/aber-leon.mp3").play();
      let alarm = setInterval(() => {
        new Audio("./assets/aber-leon.mp3").play();
      }, 2000);
    }
  }, msSeconds);
});
reset.addEventListener("click", () => {
  location.reload();
});

// Functions
function setTime() {
  time =
    hours.value * msHours +
    minutes.value * msMinutes +
    seconds.value * msSeconds;
}

function startTimer() {}

function timePrettifier(key) {
  if (key.value < 10) {
    key.value = `0${key.value}`.slice(-2);
  }
}

function prettifyTime() {
  timePrettifier(hours);
  timePrettifier(minutes);
  timePrettifier(seconds);
}

function updateTime() {
  hours.value = Math.floor(time / msHours);
  minutes.value = Math.floor((time % msHours) / msMinutes);
  seconds.value = ((time % msHours) % msMinutes) / msSeconds;
  prettifyTime();
}
