let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

const display = document.getElementById("time-display");
const lapsContainer = document.getElementById("laps");

function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("start").onclick = () => {
  if (timer !== null) return;
  timer = setInterval(runStopwatch, 1000);
};

document.getElementById("stop").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapsContainer.innerHTML = '';
};

document.getElementById("lap").onclick = () => {
  if (timer === null) return;
  const lapTime = display.textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsContainer.appendChild(lapItem);
};
