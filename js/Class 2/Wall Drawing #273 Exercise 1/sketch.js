var place;
var placeTwo;

function setup() {
  createCanvas(800,400);
  background(180,185,180);
  strokeWeight(0.5);
  frameRate(10);
  var count = 0;
  place = 400;
  placeTwo = 200;
 
}

function draw() {
	background(180,185,180);
	for (count = 0; count < 60; count ++){
	stroke(0,100,255); //blue lines
	line(0,0,random (0,windowWidth),random (0,windowHeight));
	line(0,place,random (0,windowWidth),random (0,windowHeight));
	line(800,0,random (0,windowWidth),random (0,windowHeight));
	line(800,place,random (0,windowWidth),random (0,windowHeight));
	
	stroke(255,0,0); //red lines
	line(place,0,random (0,windowWidth),random (0,windowHeight));
	line(0,placeTwo,random (0,windowWidth),random (0,windowHeight));
	line(place,place,random (0,windowWidth),random (0,windowHeight));
	line(800,placeTwo,random (0,windowWidth),random (0,windowHeight));
	
	stroke(252,252,41); //yellow lines
	line(place,placeTwo,random (0,windowWidth),random (0,windowHeight));
	line(place,placeTwo,random (0,windowWidth),random (0,windowHeight));
	}

}