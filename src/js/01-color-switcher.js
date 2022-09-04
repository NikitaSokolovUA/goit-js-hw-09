const buttonStart = document.querySelector('[data-start]')
const buttonStop = document.querySelector('[data-stop]')
let timerId = null;

buttonStart.addEventListener('click', startChangeBgColor)
buttonStop.addEventListener('click', stopChangeBgColor)


function startChangeBgColor() {
    timerId = setInterval(changeBgColor, 1000)
    buttonStart.setAttribute('disabled', 'true')
}

function stopChangeBgColor() {
    clearInterval(timerId)
    buttonStart.removeAttribute('disabled')
}

function changeBgColor() {
   document.body.style.backgroundColor = getRandomHexColor() 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}