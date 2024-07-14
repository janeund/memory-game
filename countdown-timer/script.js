// Set initial value for timer (in seconds)
let timerSet = 0;

// Set initial value for the hour, min and seconds
let hours = 0;
let minutes = 0;
let seconds = 0;

// DOM elements
const btnStart = document.querySelector('.start-btn');
const form = document.querySelector('.form');
const hoursInput = document.querySelector('.input-hours');
const minutesInput = document.querySelector('.input-minutes');
const secondsInput = document.querySelector('.input-seconds');


// Input validation
const validateInput = (input) => {
  input.addEventListener('')
}

// Start count down when subbmiting form
const startCountDown = (e) => {
  e.preventDefault();
  const timer = document.querySelector('.timer-body');
  timer.innerHTML = `
  <span class="value value-hours">${hours.toString().length === 1 ? `0${hours}` : hours} : </span>
  <span class="value value-minutes">${minutes.toString().length === 1 ? `0${minutes}` : minutes} : </span>
  <span class="value value-seconds">${seconds.toString().length === 1 ? `0${seconds}` : seconds}</span>
  <button class="btn pause-btn" type="button">Pause</button>
  <button class="btn reset-btn" type="button">Reset</button>
  `;
}

const startTimer = () => {
  setInterval(() => {
    timerSet--;
  }, 1000)
}

// Event listeners
// Get input values
hoursInput.addEventListener('change', () => {
  hours = parseInt(hoursInput.value);
})

minutesInput.addEventListener('change', () => {
  minutes = parseInt(minutesInput.value);
  if (minutes >= 60) {
    hours = Math.floor(hours + minutes / 60);
    minutes = minutes % 60;
  }
})

secondsInput.addEventListener('change', () => {
  seconds = parseInt(secondsInput.value);
  if (seconds >= 60) {
    minutes = Math.floor(minutes + seconds / 60);
    seconds = seconds % 60;
    if (minutes > 60) {
      hours = Math.floor(hours + minutes / 60);
      minutes = minutes % 60;
    }
  }
})


form.addEventListener('submit', startCountDown);


// Reset timer
const reset = () => {
  timerSet = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}
// let now = new Date().getTime();
// console.log(now);