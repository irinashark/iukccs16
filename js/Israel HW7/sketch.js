var x, y, i;
var cushion = 50;
var locY, locX;

var waveLengthOne = 90.0;
var waveLengthTwo = 270.0;
var angle = 0.0;
var amplitudeX = 275;

var translateY=78;

var amplitudeY =60;
function setup() {
  createCanvas(700,500);
  background(255);
  frameRate(45);
  x=0;
  y=0;
  i=0;
}

function draw() {

	noStroke();
 	translate(width/2, height/2-translateY);
 	  background(255,30);
 		strokeWeight(10);
 		stroke(150);
 		textAlign(CENTER, CENTER);
 		textSize(170);
 		textFont("Arial Black");
 		text("LOVE",0,translateY);
 		noStroke();
 		fill(0,0,255);
 		//adjust top left according to translate params
 		rect(-width/2,-height/2+translateY,width,2*cushion);
 		rect(-width/2,height/2-2*cushion+translateY,width,2*cushion);
 		stroke(0,0,255);
 		strokeWeight(15);
 		noFill();
  	
  	angle = i / waveLengthOne * TWO_PI;
  	y = sin(angle)* amplitudeY;
  
  	angle = i / waveLengthTwo * TWO_PI;
  	x = cos(angle)* amplitudeX;
  	
 		triangle(x,y,x+2*37.5,y+2*60,x-2*37.5,y+2*60);
 		triangle(x,y+2*77.5,x-2*37.5,y+2*17.5,x+2*37.5,y+2*17.5);
 		i++;
 		
 		if(i==waveLengthOne*waveLengthTwo) 
 			i=0;
}

