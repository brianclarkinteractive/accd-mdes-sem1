/* ways to interact:
1) click on the scene to play song, click again to stop song (audio lines up well if you start it at the very begining)
2) press 'a' on keyboard to move boxes off screen towards bottom right corner, press 'b' to bring them back (or to send them off screen in top left corner) - press any other button on keyboard to pause movement
*/

let song; //declaring variable song
let xPosition = []; //declaring an array for the x variable in rect
let yPosition = []; //declaring an array for the y variable in rect
let rectHeight = []; //declaring an array for the size of the rect
let rectLength = []; //declaring an array for the size of the rect
let rectColorR = []; //declaring an array for the color of the rect
let rectColorG = [];
//let rectColorB = []; //made the colors too random
let numRect = 8000; //I want a large number of rectangles to fill up the screen, but still leave breathing room (white space)

function setup() {
  createCanvas(windowWidth, windowHeight); //should fill up entire screen
  for (let i = 0; i < numRect; i++) {
    xPosition[i] = random(0, windowWidth); //appear randomly + fill the entire length of screen
    yPosition[i] = random(0, windowHeight); //appear randomly + fill the entire width of screen
    rectHeight[i] = random(0, 8); //want the rectangles to be thin and grow long
    rectLength[i] = random(0, 15); //therefore the length shoulde greater than the width
    rectColorR[i] = random(0, 255); //allows variation in the colors
    rectColorG[i] = random(0, 255);
    //rectColorB[i] = random(0, 255); //made the colors too random
  }
}

function preload() { //ensure that the audio will be ready when it is called for
  song = loadSound("can-1.mp3"); //locating the audio file and giving it a variable name of "song"
} 

function draw() {
  background(255, 253, 235); //light pinky-red to compliment the rectangle colors 
  for (let i = 0; i < xPosition.length; i++) {
    //I don't want the colors to be completely random because then they won't match
    fill(rectColorR[i], rectColorG[i], rectColorG[i]); //after some testing found out that if I keep G and B the same color in the array then there will be a cohesive color pallette of blues,reds, and pinks
    stroke(255); //thin white lines to show seperate between the boxes, otherwise it looks to cluttered
    rect(xPosition[i], yPosition[i], rectLength[i], rectHeight[i]);
    rotate(PI / 20); //rotates the lines by the angle degree of PI
    //I want the rectangles to get longer
    rectLength[i] += 0.3 //length increases by .3 each time code is run

    //the rectangles should disapear and then "respawn" whenever they get too long
    if (rectLength[i] > 40) { //if length is greater than 80px the rectangles will respawn at a new size between 0 and 15
      rectLength[i] = random(0, 15)
    } else {
      rectLength[i] += 0.3 //if the rectangle length is not above 80px then they can continue to grow slowly
    }
    //want the rectangles to move off the screen at the users control
    //xPosition[i] += 1;
    if (key == 'a') { //if a is pressed then the boxes will quickly begin to move towards right side and eventually off the screen
      xPosition[i] += 8;
    }
    if (key == 'b') {
      xPosition[i] -= 8; //if b is pressed then the boxes will quickly begin to move towards left side and eventually off the screen
      //if you press another key the motion will automatically come to a halt
    }
  }
}

 //I want the audio to only play when the mouseis pressed, and if you click again the song will stop
function mousePressed() {
  if (song.isPlaying()) { 
    song.stop(); //if the mouse is pressed the audio will stop if already playing 
  } else {
    song.play(); //if the mouse is pressed the audio will play / restart song
  }
}

