const categoriesList = document.querySelector('#categories');

const itemLi = categoriesList.querySelectorAll('.item');

const subTitle = categoriesList.querySelectorAll('h2');



console.log("Number of categories: ", itemLi.length);

console.log('Category: ', subTitle[0].textContent);
console.log('Elements: ', subTitle[0].nextElementSibling.children.length);

console.log('Category: ', subTitle[1].textContent);
console.log('Elements: ', subTitle[1].nextElementSibling.children.length);

console.log('Category: ', subTitle[2].textContent);
console.log('Elements: ', subTitle[2].nextElementSibling.children.length);


