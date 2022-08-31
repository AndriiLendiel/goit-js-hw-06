const fsControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fsControl.addEventListener('input', changeSize)

function changeSize(event) {
    textSpan.style = `font-size: ${event.target.value}px`;
};
