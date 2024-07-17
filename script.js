let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");
let display = document.getElementById("display");

let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 10); // Update every 10 milliseconds
        startStopBtn.textContent = "Stop";
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = "Start";
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.textContent = "00:00:00:00";
});

function updateTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function formatMilliseconds(unit) {
    return unit < 100 ? "0" + Math.floor(unit / 10) : Math.floor(unit / 10);
}
