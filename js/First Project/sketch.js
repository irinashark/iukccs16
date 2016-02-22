function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255,0,0);
  println("Hello World");
  stroke(0,255,0);
  strokeWeight(10);
  fill(255,0,0); 
  rectMode(CENTER);
  rect(100,100,200,200);
}

function draw() {
	arc(400,240,200,200,radians(180),0);
  
}