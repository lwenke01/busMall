
//IDs to map to HTML images
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
var product4 = document.getElementById('product4');
var product5 = document.getElementById('product5');
var product6 = document.getElementById('product6');
var product7 = document.getElementById('product7');
var product8 = document.getElementById('product8');
var product9 = document.getElementById('product9');
var product10 = document.getElementById('product10');
var product11 = document.getElementById('product11');
var product12 = document.getElementById('product12');
var product13 = document.getElementById('product13');
var product14 = document.getElementById('product14');


first.addEventListener('click', handleClickOnFirst);
second.addEventListener('click', handleClickOnSecond);
third.addEventListener('click', handleClickOnThird);

var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
var click5 = 0;
var click6 = 0;
var click7 = 0;
var click8 = 0;
var click9 = 0;
var click10 = 0;
var click11 = 0;
var click12 = 0;
var click13 = 0;
var click14 = 0;
var click15 = 0;




function handleClickOnFirst() {
  click1++;
  first.textContent = 'First was clicked ' + firstClicks + ' times';
  if (firstClicks % 3 === 0) {
    first.textContent = 'I AM DIVISIBLE BY 3!';
  }
}

function handleClickOnSecond() {
  secondClicks += 1;
  second.textContent = 'Second was clicked ' + secondClicks + ' times';
}

function handleClickOnThird() {
  thirdClicks += 1;
  third.textContent = 'Third was clicked ' + thirdClicks + ' times';
}
