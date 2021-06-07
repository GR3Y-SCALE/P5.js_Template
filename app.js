//this is a demo of the p5.js draw functionality
const canvas_width = 400;
const canvas_height = 400;


function setup() {
	//run once
  createCanvas(canvas_width, canvas_height);
}

function update() {
	//updates object before being drawn
}

function draw() {
	//run every frame
	update();
  background(220);
  ellipse(canvas_width/2,canvas_height/2,80,80); //draws a circle in the centre of the screen
}
