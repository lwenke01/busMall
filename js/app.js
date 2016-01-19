"use strict"

function Product(name, fileLoc) {
  this.name = name;
  this.fileLoc = fileLoc;
}

function generateRandomImage() {
  return Math.floor((Math.random() * nameArray.length));
}
//IDs to map to HTML images
var productInsert1 = document.getElementById('productInsert1');
var productInsert2 = document.getElementById('productInsert2');
var productInsert3 = document.getElementById('productInsert3');

var shark = new Product('shark', 'img/shark.png');
var pen = new Product('pen','img/pen.jpg');
var banana = new Product('banana','img/banana.png');
var bag = new Product('bag','img/bags.png');
var boots = new Product('boots','img/boots.jpg');
var cthulhu = new Product('cthulhu','img/monster.png');
var dragon = new Product('dragon','img/dragon.png');
var sweep = new Product('sweep','img/sweep1.png');
var scissors = new Product('scissors','img/pizza.png');
var unicorn = new Product('unicorn','img/unicorn.png');
var usb = new Product('usb','img/usb.png');
var water = new Product('water-can','img/water.png');
var wine = new Product('wine-glass','img/wine.png');
var wine = new Product('chair','img/chair.png');

var nameArray = [shark, pen, banana, bag, boots, cthulhu, dragon, sweep, scissors, unicorn, usb, water, wine];

productInsert1.addEventListener('click', handleClickOn);
productInsert2.addEventListener('click', handleClickOn);
productInsert3.addEventListener('click', handleClickOn);

function random() {
  var img1 = document.getElementById('productInsert1');
  var rand1 = generateRandomImage();
  img1.src = nameArray[rand1].fileLoc;

  var img2 = document.getElementById('productInsert2');
  var rand2 = generateRandomImage();
  while(rand1 === rand2) {
    rand2 = generateRandomImage();
  }
  img2.src = nameArray[rand2].fileLoc;

  var img3 = document.getElementById('productInsert3')
  var rand3 = generateRandomImage();
  while(rand1 === rand3 || rand2 === rand3) {
    rand3 = generateRandomImage();
  }
  img3.src = nameArray[rand3].fileLoc;
}
random();
function handleClickOn() {
  random();
}

//insert in html
      // var h2 = document.createElement('h2');
      // var h2El = document.createElement('h2');
      // h2.textContent = this.name;
      // h2El.appendChild(h2);
      // for(var i = 0; i < timeOfDay.length; i++) {
      //   var tdEl = document.createElement('td');
      //   tdEl.textContent = (this.hourlyBeans[i] + this.hourlyCups[i] / 20).toFixed(2);
      //   trEl.appendChild(tdEl);
      // }

      // function changeAllImgs(event) {
      //   console.log(event);
      //
      // }
