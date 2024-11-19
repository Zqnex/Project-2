//arrays
let counties = ["Accomack", "Amelia", "Amherst", "Bedford", "Caroline", "Charlottesville", "Chesapeake", "Colonial Heights", "Craig", "Essex", "Floyd", "Goochland", "Hanover", "King William", "Loudoun", "Montgomery", "Orange", "Powhatan", "York"]

let blueVotes = ["7,578", "2,411", "5,672", "12,176", "7,657", "20,696", "66,377", "2,972", "587", "3,038", "3,004", "6,685", "25,307", "3,260", "138,372", "23,218", "7,995", "5,320", "17,683"]

let redVotes = ["9,172", "5,390", "11,041", "35,600", "8,336", "3,094", "58,180", "6,007", "2,536", "3,075", "6,225", "9,966", "44,318", "7,320", "82,088", "20,629", "12,426", "14,055", "20,241"]

//variables
let countyIndex;
let wrds1;
let bluevoteIndex;
let countyImages = [];
let wrds2;
let wrds3;

function setup() {
  var canvas = createCanvas(700, 500);
  canvas.parent('sketchHolder');
   boxText();
   boxTrim();
   background("#8ce6dd");
 
  
  //buttons
  button = createButton("Take me Somewhere");
  button.parent("buttonHolder");
  button.mousePressed(() => {
    countyText();  
    showImages(); 
  });
  
  button2 = createButton("Show the Results");
  button2.parent("buttonHolder");
  button2.mousePressed(() => {
    numbers();  
    votes();
  });
  
  
  
  
  
}

//to show the vote numbers
function numbers () {
  //bars
  fill(255)
  fill("#4d2fc4")
  rect(100, 335, 215, 25)
  fill("#c42f2f")
  rect(375, 335, 215, 25)
  
  fill(0);
  textAlign(CENTER);
  
  wrds2 = "#" + blueVotes[countyIndex]
  wrds3 = "#" + redVotes[countyIndex] 
  
  
  textSize(18);
  text(wrds2, 280, 355);
  text(wrds3, 410, 355);
  
}

function draw() {
  
}

//the words
function countyText () {
  fill(255);
  rect(235, 395, 250, 50);
  
  fill(0);
  textAlign(CENTER);
  
  countyIndex = int(random(counties.length));
  
  wrds1 = 'We are in ' + counties[countyIndex] + '.'
  console.log(wrds1);
  boxText();
  
  
}

function boxTrim() {
  fill(255);
  rect(235, 395, 250, 50);
}

function boxText() {
  fill(0);
  textAlign(CENTER);
  
  textSize(18);
  text(wrds1, 355, 425);
}

//images
function preload () {
    countyImages[1] = loadImage("assets/Accomack.png");
    countyImages[2] = loadImage("assets/Amelia.png")
    countyImages[3] = loadImage("assets/Amherst.png")
    countyImages[4] = loadImage("assets/Bedford.png")
    countyImages[5] = loadImage("assets/Caroline.png")
    countyImages[6] = loadImage("assets/Charlottesville.png")
    countyImages[7] = loadImage("assets/Chesapeake.png")
    countyImages[8] = loadImage("assets/ColonialHeights.png")
    countyImages[9] = loadImage("assets/Craig.png")
    countyImages[10] = loadImage("assets/Essex.png")
    countyImages[11] = loadImage("assets/Floyd.png")
    countyImages[12] = loadImage("assets/Goochland.png")
    countyImages[13] = loadImage("assets/Hanover.png")
    countyImages[14] = loadImage("assets/KingWilliam.png")
    countyImages[15] = loadImage("assets/Loudoun.png")
    countyImages[16] = loadImage("assets/Montgomery.png")
    countyImages[17] = loadImage("assets/Orange.png")
    countyImages[18] = loadImage("assets/Powhatan.png")
    countyImages[19] = loadImage("assets/York.png")
  
}
  
//show the pictures with the words
function showImages () {
  if (wrds1 === "We are in Accomack.") {
      image(countyImages[1], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Amelia.") {
    image(countyImages[2], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Amherst.") {
    image(countyImages[3], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Bedford.") {
    image(countyImages[4], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Caroline.") {
    image(countyImages[5], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Charlottesville.") {
    image(countyImages[6], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Chesapeake.") {
    image(countyImages[7], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Colonial Heights.") {
    image(countyImages[8], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Craig.") {
    image(countyImages[9], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Essex.") {
    image(countyImages[10], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Floyd.") {
    image(countyImages[11], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Goochland.") {
    image(countyImages[12], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Hanover.") {
    image(countyImages[13], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in King William.") {
    image(countyImages[14], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Loudoun.") {
    image(countyImages[15], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Montgomery.") {
    image(countyImages[16], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Orange.") {
    image(countyImages[17], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in Powhatan.") {
    image(countyImages[18], 200, 20, 300, 300 )
  }
  if (wrds1 === "We are in York.") {
    image(countyImages[19], 200, 20, 300, 300 )
  }


}
