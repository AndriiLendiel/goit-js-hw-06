function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('[type="number"]');
const divQuan = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes)
// btnDestroy.addEventListener('click',)

input.addEventListener('input', el => {
  console.log(el.currentTarget.value);
  // return el.currentTarget.value
})

const markupTable = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const input = `<div style=""background-color: ${getRandomHexColor()};
  "width: 30px; height:30px"></div> `;
    markupTable.push(input);
  }
  // const divEl = document.createElement('div');
  // divEl.style = "width: 30px; height:30px";
  // divQuan.append(divEl);

}

