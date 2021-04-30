// Selectors
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const timer = document.querySelector(".timer")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")

const msSeconds = 1000;
const msMinutes = msSeconds*60;
const msHours = msMinutes*60;

let time = 0;

// Events
timer.addEventListener("change", () => {
    setTime();
    console.log(time);
})

start.addEventListener("click", () => {

    start.disabled = true
    let counter = setInterval(() => {
        if (time >= msSeconds){

            time = time-msSeconds;
            console.log(time)
        } else {
            console.log("Ende");
            clearInterval(counter)
        }
  }, msSeconds) 
})
pause.addEventListener("click", () => {
    console.log("pause");
})
reset.addEventListener("click", () => {
    location.reload();
})

// Functions
function setTime(){
    time = hours.value*msHours+minutes.value*msMinutes+seconds.value*msSeconds;
}

function startTimer(){

}