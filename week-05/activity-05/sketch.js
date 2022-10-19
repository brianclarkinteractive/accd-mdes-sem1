let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let xpos = 0;
let ypos = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(50);
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(
    200+sin(xpos)*100,
    200+sin(ypos)*100,
    45, 45);
  xpos += 0.05;
  ypos += 0.04;
  rect(
    55+sin(xpos)*5,
    55+sin(ypos)*5,
    90, 90);
  xpos += 0.02;
  ypos += 0.10;
  if (millis() > nextChange) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    background(r, g, b);
    nextChange = millis() + timer;
    console.log(`time elapsed: ${round(millis() / 1000)}`);
  }
  // Canvas frame
  function setup() {
    var canvas = createCanvas(400, 400);
   
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-frame');
  
    background(255);
  }
}