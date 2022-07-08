const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  const delayValue = Number(form.elements.delay.value);

  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    i;
    const calcDelay = i === 1 ? delayValue : delayValue + (i - 1) * step;
    setTimeout(() => {
      createPromise(i, calcDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${i} in ${delay}ms`);
        });
    }, calcDelay);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      //fullfill
      resolve({ position, delay });
    } else {
      // Reject

      reject({ position, delay });
    }
  });
}

// createPromise(2, 1500);
