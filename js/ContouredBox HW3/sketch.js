var Life;
var position1;
var position2;

function setup() {
  createCanvas(700,500);
  background(100);
  frameRate(5);
}

function draw() {
  background(100,30);
  position1= random(0,windowWidth);
	position2= random(0,windowHeight);
	
  for (i=10;i<50;i++){
  	
  	Life=random (0,100);
  	if (Life<30){
  
  		fill(12,237,234);
			stroke(255, 0, 0);
			strokeWeight(5);
			beginShape();
			// Exterior part of shape, clockwise winding
			vertex(position1, position2);
			vertex(position1+80+i, position2);
			vertex(position1+80+i, position2+i+80);
			vertex(position1, position2+i+80);
			// Interior part of shape, counter-clockwise winding
			//fill(100); trying to make the center same color as background
			beginContour();
			vertex(position1+30, position2+30);
			vertex(position1+50+i, position2+30);
			vertex(position1+50+i, position2+i+50);
			vertex(position1+30, position2+i+50);
			endContour();
			endShape(CLOSE);
  	
  	}
  }
 
  
	
	
}