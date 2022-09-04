import flatpickr from "flatpickr";
import { Report } from 'notiflix/build/notiflix-report-aio';

const dataDays = document.querySelector("[data-days]")
const dataHours = document.querySelector("[data-hours]")
const dataMinute = document.querySelector("[data-minutes]")
const dataSecond = document.querySelector("[data-seconds]")
const buttonStartTimer = document.querySelector(' [data-start]')


let timerId = null;
let timerSet = 0

buttonStartTimer.setAttribute('disabled', 'true')


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      getDaysFromDates(selectedDates[0])
  },
};

flatpickr('#datetime-picker', options)


function getDaysFromDates(selectedDate) {  
  const countdownValues = convertMs(selectedDate - Date.now())

 
  timerSet = selectedDate - Date.now()


  if (selectedDate - options.defaultDate < 0) {
    Report.failure("Please choose a date in the future", '')
    return
  }
    addTimeOnWindow(countdownValues)
    buttonStartTimer.removeAttribute('disabled')  
}

function addTimeOnWindow(v) {
  dataDays.textContent = addLeadingZero(v.days)
  dataHours.textContent = addLeadingZero(v.hours)
  dataMinute.textContent = addLeadingZero(v.minutes)
  dataSecond.textContent = addLeadingZero(v.seconds)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(v) {
  return  v.toString().padStart(2, '0')
}


buttonStartTimer.addEventListener('click', () => {
  timerId = setInterval(timer, 1000)
  buttonStartTimer.setAttribute('disabled', 'true')
})

function timer() {
  timerSet -= 1000;  

  if (timerSet === 0) {
    clearInterval(timerId)
    return
  }

  const convertedMs = convertMs(timerSet)

  addTimeOnWindow(convertedMs)
}