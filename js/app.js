"use strict"
//create object constructor for products, and Global allClicks counter
function Product(name, fileLoc) {
  this.name = name;
  this.fileLoc = fileLoc;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
  this.percentClicked = function() {
percentClicked = (timesClicked / timesDisplayed).toFixed(2) * 100;
  // this.timesDisplayed = 0;

  }
}

// totalClicks = 0;

//IDs to map to HTML images

var shark = new Product('shark', 'img/shark.png');
var pen = new Product('pen','img/pens.png');
var banana = new Product('banana','img/banana.png');
var bag = new Product('bag','img/bags.png');
var boots = new Product('boots','img/boots.png');
var cthulhu = new Product('cthulhu','img/monster.png');
var dragon = new Product('dragon','img/dragon.png');
var sweep = new Product('sweep','img/sweep1.png');
var scissors = new Product('scissors','img/pizza.png');
var unicorn = new Product('unicorn','img/unicorn.png');
var usb = new Product('usb','img/usb.png');
var water = new Product('water-can','img/water.png');
var wine = new Product('wine-glass','img/wine.png');
var chair = new Product('chair','img/chair.png');

var nameArray = [shark, chair, pen, banana, bag, boots, cthulhu, dragon, sweep, scissors, unicorn, usb, water, wine];

// var img1 = 0;
// var img2 = 0;
// var img3 = 0;
// var productInsert1 = document.getElementById('productInsert1');
// var productInsert2 = document.getElementById('productInsert2');
// var productInsert3 = document.getElementById('productInsert3');
var img1 = document.getElementById('productInsert1');
var img2 = document.getElementById('productInsert2');
var img3 = document.getElementById('productInsert3')
var totalClicks = 0;
var clickOne = 0;
var clickTwo = 0;
var clickThree = 0;
var rand1;
var rand2;
var rand3;

function generateRandomImage() {
  return Math.floor((Math.random() * nameArray.length));
}

 //constuctors to generate 3 random images
function random() {
  rand1 = generateRandomImage();
  console.log(rand1 + "This is rand1");
  img1.src = nameArray[rand1].fileLoc;
  // this.displayedClicks =

  rand2 = generateRandomImage();
  while(rand1 === rand2) {
    rand2 = generateRandomImage();
}
  img2.src = nameArray[rand2].fileLoc;
  console.log(rand2 + "This is rand2");
  rand3 = generateRandomImage();
  while(rand1 === rand3 || rand2 === rand3) {
    rand3 = generateRandomImage();
  }
  img3.src = nameArray[rand3].fileLoc;
    console.log(rand3 + "This is rand3");
 }

random();


//event contructors
function handleClickOnOne(event) {
  clickOne += 1;
  console.log(event);
  totalClicks += 1;
  nameArray[rand1].timesClicked += 1;
  random();
  checkForButton();
  // nameArray[productInsert1].timesDisplayed += 1;

}

function handleClickOnTwo(event) {
  clickTwo += 1;
  console.log(event);
  totalClicks += 1;
  nameArray[rand2].timesClicked += 1;
  random();
    checkForButton();
    // nameArray[productInsert1].timesDisplayed += 1;
}

function handleClickOnThree(event) {
  clickThree += 1;
  totalClicks += 1;
  nameArray[rand3].timesClicked += 1;
  random();
    checkForButton();
  // console.log(event);
    // nameArray[productInsert1].timesDisplayed += 1;
}
    //event listeners
    productInsert1.addEventListener('click', handleClickOnOne);
    productInsert2.addEventListener('click', handleClickOnTwo);
    productInsert3.addEventListener('click', handleClickOnThree);



//all clicks



function checkForButton() {
  if(totalClicks < nameArray.length) {
    document.getElementById('button').style.visibility = 'hidden';
  }
  else {
    document.getElementById('button').style.visibility = 'visible';
  }

}



button.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  button.textContent = 'Here are the results';
  var showResult = document.getElementById('showResult');
  showResult.textContent = '';
  var displayList = document.createElement('ul');
    for (var i = 0; i < nameArray.length; i++) {
      nameArray[i].percentClicked();
      var results = document.createElement('li');
      productResults.textContent = nameArray[i].name + ' has receieved ' + nameArrays[i].timesClicked + ' clicks after being displayed ' + nameArrays[i].timesDisplayed + ' times, for a ' + nameArrays[i].percentClicked + '% selection rate';
      displayList.appendChild(results);
    }
    resultsDisplay.appendChild(displayList);
  }

checkForButton();

alert('Hello, Please follow the instructions carefully before starting the survey');
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
