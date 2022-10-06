let gridStep = 50;
let radius = 20;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
  
}

function draw() {
  background(30, 80, 80);

  //showGrid();
  noStroke();  
  for(let x = 0; x < width/gridStep; x++){
    for(let y = 0; y < height/gridStep; y++){
      let posX = (x * gridStep) + (gridStep * 0.5);
      let posY = (y * gridStep) + (gridStep * 0.5);
      posX += random(-5,5);
      posY += random(-5,5);
      fill(posX,posY,100) 
      circle(posX, posY, radius*2)
    } 
  }  
}

function showGrid() {
  stroke(1, 0, 100);
  for (let x = 0; x < 800; x = x + gridStep) {
    line(x, 0, x, height);
  }
  stroke(270, 0, 100);
  for (let y = 0; y < 600; y += gridStep) {
    line(0, y, width, y);
  }
}
