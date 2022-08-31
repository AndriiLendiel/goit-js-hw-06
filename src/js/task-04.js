const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');






decrementBtn.addEventListener('click', () => {
   counterValue.textContent -= 1;
});


incrementBtn.addEventListener('click', () => {
    let increment = Number(counterValue.textContent);
    increment += 1;
    counterValue.textContent = increment;

});





