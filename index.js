let num1 = 1;
let num2 = 2;
let num3 = 3;
let result = 0;
let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");
let startingTime = 90;
let time = startingTime * 60;
let count = document.getElementById("countdown-timer");
let interval = null;

function add1Home() {
  result += num1;
  homeResult.textContent = result;
}

function add2Home() {
  result += num2;
  homeResult.textContent = result;
}
function add3Home() {
  result += num3;
  homeResult.textContent = result;
}
function add1Guest() {
  result += num1;
  guestResult.textContent = result;
}

function add2Guest() {
  result += num2;
  guestResult.textContent = result;
}
function add3Guest() {
  result += num3;
  guestResult.textContent = result;
}

function reset() {
  result = 0;
  homeResult.textContent = result;
  guestResult.textContent = result;
  resetTimer();
}

function startTimer() {
  interval = setInterval(timer, 1000);
}

function timer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  count.textContent = `${minutes}:${seconds}`;
  time -= 1;
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  count.textContent = `${minutes}:${seconds}`;
  time = startingTime * 60;
}
