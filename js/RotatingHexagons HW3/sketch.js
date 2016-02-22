var scalar;
var rotationSpeed;
var theta;

function setup() {
  createCanvas(650,650);
  background(0);
  rotationSpeed = 0.001;
  theta = 0.0;
}

function draw() {
  background(0,30);
  strokeWeight(5);
  strokeJoin(ROUND);
  noFill();
   
  for(var j=0; j<11; j++){
  	push();
  	translate(width/2, height/2);
  	beginShape(); //HEXAGON
  	var numSides = 6;
  	//we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 300-30*j; //increase this number to make the shape larger
  	for(var i=0; i<360; i++){
    	stroke(38,50,252);       
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
	 	}
  	endShape(CLOSE);
  	pop();
  	}
  
	//push();
 	//translate(width/2, height/2);
  //rotate(theta);
  for(var j=0; j<11; j++){
  	push();
  	translate(width/2, height/2);
  	rotate(theta);
  	beginShape(); //HEXAGON
  	var numSides = 6;
  	//we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 300-30*j; //increase this number to make the shape larger
  	for(var i=0; i<360; i++){
    	stroke(234,21,103);       
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
	 	}
  	endShape(CLOSE);
  	pop();
  	theta+=rotationSpeed;
  	}
}