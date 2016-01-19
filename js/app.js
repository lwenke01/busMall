
//IDs to map to HTML images
var product1 = document.getElementById('productInsert1');
var product2 = document.getElementById('productInsert2');
var product3 = document.getElementById('productInsert3');



first.addEventListener('click', handleClickOnFirst);
second.addEventListener('click', handleClickOnSecond);
third.addEventListener('click', handleClickOnThird);

// var click1 = 0;
// var click2 = 0;
// var click3 = 0;
// var click4 = 0;
// var click5 = 0;
// var click6 = 0;
// var click7 = 0;
// var click8 = 0;
// var click9 = 0;
// var click10 = 0;
// var click11 = 0;
// var click12 = 0;
// var click13 = 0;
// var click14 = 0;
// var click15 = 0;



// var images ['img/shark.png','img/banana.jpg','img/bag.jpg','img/boots.jpg','img/chair.jpg', 'img/cthilhu.jpg','img/dragon.jpg', 'img/pen.jpg','img/scissors.jpg',]

function Product (name, src) {
  this.name = name;
  this.src = 'img/' + src;
}


function generateRandomImage() {
  return +(Math.floor((Math.random()) * 3);

    };

    var shark = new Product('shark', 'shark.png');
    var pen = new Product('pen','pen.jpg');
    var banana = new Product('banana','banana.jpg');
    var bag = new Product('bag','bag.jpg');
    var boots = new Product('boots','boots.jpg');
    var cthulhu = new Product('cthulhu','cthulhu.jpg');
    var dragon = new Product('dragon','dragon.jpg');
    var sweep = new Product('sweep','sweep.png');
    var scissors = new Product('scissors','scissors.jpg');
    var unicorn = new Product('unicorn','unicorn.jpg');
    var usb = new Product('usb','usb.gif');
    var water = new Product('water-can','water-can.jpg');
    var wine = new Product('wine-glass','wine-glass.jpg');

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
