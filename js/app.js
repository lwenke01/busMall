"use strict"
//create object constructor for products, and Global allClicks counter
function Product(name, fileLoc) {
  this.name = name;
  this.fileLoc = fileLoc;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
  this.percentClicked = function() {
  this.percentClicked = (timesClicked / timesDisplayed).toFixed(2) * 100;
  }
}

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

//generate a random image from array
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
//call the random image
random();


//event handlers to create event for when image is clicked on
function handleClickOnOne(event) {
  clickOne += 1;
  console.log(event);
  totalClicks += 1;
  nameArray[rand1].timesClicked += 1;
  random();
  checkForButton();
  makeClickArray();
}
function handleClickOnTwo(event) {
  clickTwo += 1;
  console.log(event);
  totalClicks += 1;
  nameArray[rand2].timesClicked += 1;
  random();
  checkForButton();
  makeClickArray();
}
function handleClickOnThree(event) {
  clickThree += 1;
  totalClicks += 1;
  nameArray[rand3].timesClicked += 1;
  random();
  checkForButton();
  makeClickArray();
}
//event listeners for event handlers
  productInsert1.addEventListener('click', handleClickOnOne);
  productInsert2.addEventListener('click', handleClickOnTwo);
  productInsert3.addEventListener('click', handleClickOnThree);

//check for button after 15 clicks
  function checkForButton() {
    if(totalClicks < nameArray.length) {
    document.getElementById('button').style.visibility = 'hidden';
  }
  else {
    document.getElementById('button').style.visibility = 'visible';
  }
}
//add event listener for button
  button.addEventListener('click', handleButtonClick);
//handler for button and results
function handleButtonClick(event) {

  button.textContent = 'Here are the results';
  var showResult = document.getElementById('showResult');
  showResult.textContent = productResults;
  //create elements for results to show
  var displayList = document.createElement('ul');
    for (var i = 0; i < nameArray.length; i++) {
      nameArray[i].percentClicked();
      var results = document.createElement('li');
      productResults.textContent = nameArray[i].name + ' has receieved ' + nameArray[i].timesClicked + ' clicks after being displayed ' + nameArray[i].timesDisplayed + ' times, for a ' + nameArray[i].percentClicked + '% selection rate';
      displayList.appendChild(results);
    }
    resultsDisplay.appendChild(displayList);
  }

checkForButton();
handleButtonClick();

//graph
function renderDataTable() {
  var getTableEl = document.getElementById('userDataTable');
  getTableEl.innerHTML = '<h2>Here is the data</h2>';
}
var clicksArrayForChart = [];

function makeClickArray() {
  clicksArrayForChart = [];
  for(var i = 0; i < nameArray.length; i++) {
    clicksArrayForChart.push(nameArray[i].totalClicks);
  }

}

// alert('Hello, Please follow the instructions carefully before starting the survey');
