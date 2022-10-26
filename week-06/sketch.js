const planets = [];

function setup() {
  //createCanvas(400, 400);

  planets.push(new Planet(width * 0.75, height * 0.5));
}

function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

function draw() {
  background(0, 85);
  noStroke();
  for (const dot of dots) {
    dot.draw();
  }
  // sun
  fill(255, 165, 0);
  circle(width / 2, height / 2, 50);

  for (const planet of planets) {
    planet.draw();
  }
}

class Planet {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // random size
    this.size = random(8, 32);

    // random speed
    this.deltaX = random(-1, 1);
    this.deltaY = random(-1, 1);

    // random color
    this.c = color(random(128, 255), random(128, 255), random(128, 255));
  }

  draw() {
    const sunX = width / 2;
    const sunY = height / 2;
    const distanceFromSun = dist(this.x, this.y, sunX, sunY);

    // planets accelerate faster when they're closer to the sun
    // this simulates gravity pulling them in faster and faster
    this.deltaX += (sunX - this.x) / distanceFromSun;
    this.deltaY += (sunY - this.y) / distanceFromSun;

    this.x += this.deltaX;
    this.y += this.deltaY;

    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
}

const dots = [];
const border = 20;

function setup() {
  canvas.parent('sketch-frame');
  createCanvas(600, 600);

  for (let layer = 1; layer <= 3; layer++) {
    for (let i = 0; i < 200; i++) {
      dots.push(new Dot(layer));
    }
  }
}

//function draw() {
//  background(32);

//}

class Dot {
  constructor(layer) {
    this.layer = layer;
    this.x = random(-border, width + border);
    this.y = random(-border, height + border);

    this.r = random(1);
    this.g = random(90);
  }

  draw() {
    let deltaX = 0;
    let deltaY = 0;

    //if(mouseX != 0 && mouseY != 0){
    //  deltaX = -this.layer *
    //    map(mouseX - width / 2, 0, width, 0, 5);
    //  deltaY = -this.layer *
    //    map(mouseY - height / 2, 0, height, 0, 5);
    //}

    this.x += deltaX;
    this.y += deltaY;

    if (this.x < -border) {
      this.x = width + random(border);
      this.y = random(0, height);
    } else if (this.x > width + border) {
      this.x = 0 - random(border);
      this.y = random(0, height);
    }

    if (this.y < -border) {
      this.y = height + random(border);
      this.x = random(0, width);
    } else if (this.y > height + border) {
      this.y = 0 - random(border);
      this.x = random(0, width);
    }

    fill(this.r, this.g, 66);
    circle(this.x, this.y, 10 / (4 - this.layer));
  }
}
