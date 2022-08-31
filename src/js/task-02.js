const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');
console.log(mainList);




const itemLi0 = document.createElement('li');
itemLi0.textContent = ingredients[0];
itemLi0.classList.add('item');
console.log(itemLi0);

const itemLi1 = document.createElement('li');
itemLi1.textContent = ingredients[1];
itemLi1.classList.add('item');
console.log(itemLi1);

const itemLi2 = document.createElement('li');
itemLi2.textContent = ingredients[2];
itemLi2.classList.add('item');
console.log(itemLi2);

const itemLi3 = document.createElement('li');
itemLi3.textContent = ingredients[3];
itemLi3.classList.add('item');
console.log(itemLi3);

const itemLi4 = document.createElement('li');
itemLi4.textContent = ingredients[4];
itemLi4.classList.add('item');
console.log(itemLi4);

const itemLi5 = document.createElement('li');
itemLi5.textContent = ingredients[5];
itemLi5.classList.add('item');
console.log(itemLi5);


mainList.append(itemLi0,itemLi1,itemLi2,itemLi3,itemLi4,itemLi5)

