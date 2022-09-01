
const itemLi = document.querySelectorAll('.item');



console.log("Number of categories: ", itemLi.length);
itemLi.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});

