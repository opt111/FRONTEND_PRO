const btn = document.querySelector("button")
const message = document.querySelector('p')
const spanTime = document.querySelector('span')
let counter = 5;
let intervalId;

updtaDisplay()

btn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(startTimer, 1000)
  }
})

function startTimer() {
  if (counter != 0) {
    counter--
    updtaDisplay()
  } else {
    message.textContent = 'Час закінчився'
    clearInterval(intervalId);
    intervalId = null;
  }
}

function updtaDisplay() {
  let minutes = Math.floor(counter / 60).toString().padStart(2, '0')
  let seconds = (counter % 60).toString().padStart(2, '0')
  spanTime.textContent = `${minutes}:${seconds}`
}
