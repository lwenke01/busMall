'use strict'

var productArray = []
function Product(name, fileLoc) {
  this.name = name;
  this.fileLoc = fileLoc;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
  productArray.push(this);
}

//objects
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

var img1 = document.getElementById('productInsert1');
var img2 = document.getElementById('productInsert2');
var img3 = document.getElementById('productInsert3')
var totalClicks = 0;
var rand1;
var rand2;
var rand3;
//generate a random image from array
function generateRandomImage() {
  return Math.floor((Math.random() * productArray.length));
}
//constuctors to generate 3 random images
function random() {
  rand1 = generateRandomImage();
  // console.log(rand1 + "This is rand1");
  img1.src = productArray[rand1].fileLoc;
  productArray[rand1].timesDisplayed += 1;

  rand2 = generateRandomImage();
  while(rand1 === rand2) {
    rand2 = generateRandomImage();
  }
  img2.src = productArray[rand2].fileLoc;
  productArray[rand2].timesDisplayed += 1;
  // console.log(rand2 + "This is rand2");
  rand3 = generateRandomImage();
  while(rand1 === rand3 || rand2 === rand3) {
    rand3 = generateRandomImage();
  }
  img3.src = productArray[rand3].fileLoc;
  productArray[rand3].timesDisplayed += 1;
  // console.log(rand3 + "This is rand3");
 }
//call the random image
//event listeners for all 3 displays
productInsert1.addEventListener('click', handleClickOnOne);
productInsert2.addEventListener('click', handleClickOnTwo);
productInsert3.addEventListener('click', handleClickOnThree);
//event handlers to create event for when image is clicked on
function handleClickOnOne(event) {
  totalClicks += 1;
  productArray[rand1].timesClicked += 1;
  checkForButton();
  random();
}
function handleClickOnTwo(event) {
  totalClicks += 1;
  productArray[rand2].timesClicked += 1;
  checkForButton();
  random();
}
function handleClickOnThree(event) {
  totalClicks += 1;
  productArray[rand3].timesClicked += 1;
  checkForButton();
  random();
}
//check for button after 15 clicks
var showResultButton = document.getElementById('showResultButton');
  function checkForButton() {
    if(totalClicks < productArray.length) {
    button.style.visibility = 'hidden';
  }
  else {
    button.style.visibility = 'visible';
  }
}
// BUTTON FUNCTION
function checkForButton() {
  if(totalClicks < productArray.length) {
    document.getElementById('button').style.visibility = 'hidden';
  }
  else {
    document.getElementById('button').style.visibility = 'visible';
  }
}
button.addEventListener('click', handleButtonClick);

function calculatePercent (obj) {
  return obj.percentClicked = (obj.timesClicked / obj.timesDisplayed).toFixed(2) * 100;
};

function handleButtonClick() {
  //var index = parseInt(evt.target.id);
  //console.log(index);

  localStorage.setItem('chartPersist', JSON.stringify(productArray));

  button.textContent = 'Here are the results';

  dataset1();
  chart1();
}
function clearLsArray() {


  // productArray = localStorage.getItem('chartPersist');
  if (localStorage.chartPersist) {
    productArray = [];
    productArray = JSON.parse(localStorage.chartPersist);
  } else {
    console.log('Local storage empty!! Initializing!');
    localStorage.setItem('chartPersist', JSON.stringify(productArray));
  }
};

// Persist data in HTML5 Local Storage

//chart
var label = ['shark', 'chair', 'pen', 'banana', 'bag', 'boots', 'cthulhu', 'dragon', 'sweep', 'scissors', 'unicorn', 'usb', 'water', 'wine'];

var percentageChart = [];
function dataset1() {
  for(var i = 0; i < productArray.length; i++) {
    console.log(productArray[i]);
    calculatePercent(productArray[i]);
    percentageChart[i] = productArray[i].percentClicked;
  }
}

var data;
function chart1(){
  data = {
    labels: label,
    datasets: [
      {
       label: "My First dataset",
       fillColor: "rgba(63, 84, 191,0.8)",
       strokeColor: "rgba(18, 19, 22,0.9)",
       highlightFill: "rgba(18, 19, 22,0.9)",
       highlightStroke: "rgba(220,220,220,1)",
       data: percentageChart
     }
   ]
 }
 var ctx = document.getElementById('userDataTable').getContext('2d');
 var myBarChart = new Chart(ctx).Bar(data);
}


//clear local storage button
var clearLS = document.getElementById('lsClear');

clearLsArray();
random();
checkForButton();
