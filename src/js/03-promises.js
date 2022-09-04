import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')

form.addEventListener('submit', onButtonClickAddPromise)

function onButtonClickAddPromise(e) {
  const {
    elements: { delay, step, amount }
  } = e.currentTarget;

  

  for (let i = 1, delayValue = Number(delay.value);
    i <= Number(amount.value);
    i += 1, delayValue += Number(step.value)){   
    
    const elements = {
      position: i,
      delay: delayValue
    }

    const promise = createPromise(elements)
    
    promise
      .then(successPromise)
      .catch(unsuccessPromise)
  }
  

  e.preventDefault()  
}



function createPromise({position, delay}) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    }
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }, delay)
  })

  return promise
}

function successPromise(result) {
  // console.log(result);
  Notify.success(result)
}

function unsuccessPromise(error) {
  // console.log(error);
  Notify.failure(error);
}
