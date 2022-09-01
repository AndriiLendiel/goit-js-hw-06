const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let count = 0;




decrementBtn.addEventListener('click', () => {
    counterValue.textContent = (count -= 1)
});


incrementBtn.addEventListener('click', () => {
    counterValue.textContent = (count += 1)
    // let increment = Number(counterValue.textContent);
    // increment += 1;
    // counterValue.textContent = increment;

});





