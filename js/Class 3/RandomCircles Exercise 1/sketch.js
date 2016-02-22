var Life;
var position1;
var position2;

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(115);
  frameRate(5);
}

function draw() {
	background(115,10);
	position1= random(0,windowWidth);
	position2= random(0,windowHeight);
	
  for (i=10;i<60;i++){
  	Life=random (0,100);
  	if (Life<30){
  		fill(100,100,255);
  		noStroke();
  		ellipse(position1,position2,i,i);
  	}
  }
}