const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesList = document.querySelector('.gallery');

const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');



const img0 = document.createElement('img');
img0.alt = images[0].alt;
img0.src = images[0].url;
img0.width = "480";


const img1 = document.createElement('img');
img1.alt = images[1].alt;
img1.src = images[1].url;
img1.width = "480";

const img2 = document.createElement('img');
img2.alt = images[2].alt;
img2.src = images[2].url;
img2.width = "480";



imagesList.append(li0, li1, li2);

li0.insertAdjacentHTML("afterbegin", '<img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat", width = "480">');
li1.insertAdjacentHTML("afterbegin", '<img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish" width="480">');
li2.insertAdjacentHTML("afterbegin", '<img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running" width="480">');