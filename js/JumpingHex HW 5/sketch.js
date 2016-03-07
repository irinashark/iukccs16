var armRaise, jump;
var rotationSpeed;
var theta;

var colorFrom, colorTo;
//increase this number for more steps between colors
var rectStep = 10;

function setup() {
  createCanvas(650,500);
  background(0);
  colorMode(HSB,360,100,100);
  noCursor();
  rotationSpeed = 0.01;
  theta = 0.0;
}

function draw() {
	
	 colorFrom = color(295,100,70);
  
  //the color we want to interpolate to
  colorTo = color(235,100,70);
  

  for(var x=0; x < width; x += rectStep){
    noStroke();
    //interpolation amount changes each step of our
    //for loop
    var lerpAmt = map(x, 0, width, 0, 1.0);
    
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
	
	//background(0);
  strokeWeight(5);
  strokeJoin(ROUND);
  noFill();
  noStroke();
  /*fill(110,80,100);
  rect(0,windowHeight/4,windowWidth,windowHeight/4);
  for(var i=0;i<13;i++){
  	stroke(0);
  	strokeWeight(8);
  	if(i%2==0){
  	line(0+i*50,3*windowHeight/8,50+i*50,3*windowHeight/8);
  	}
  }*/
  //fill(55,45,100);
  strokeWeight(7);
  if(mouseIsPressed){
		HexCreature1(mouseX,mouseY,10,30);
  } else {
  	HexCreature1(mouseX,mouseY+20,30,20);
  }
  
  if(keyIsPressed){
		HexCreature2(mouseX+100,mouseY+20,10,30);
  } else {
  	HexCreature2(mouseX+100,mouseY+50,30,20);
  }
  
  if(mouseIsPressed && keyIsPressed){
		HexCreature1(mouseX+300,mouseY,10,30);
  } else {
  	HexCreature1(mouseX+320,mouseY+20,30,20);
  }
  	
}

function HexCreature1 (posX, posY, armRaise, jump){

		push();
  	translate(posX, posY);
  	beginShape(); //HEXAGON
  	var numSides = 6; //we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 30; 
  	for(var i=0; i<360; i++){
    	stroke(55,75,100);       
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
  	}
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius, sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i))*radius+40);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+40, sin(radians(angleDivision * i))*radius+jump, cos(radians(angleDivision * i))*radius+80);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+40, sin(radians(angleDivision * i))*radius-jump, cos(radians(angleDivision * i))*radius+80);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+20, sin(radians(angleDivision * i))*radius+25, cos(radians(angleDivision * i))*radius+armRaise);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+20, sin(radians(angleDivision * i))*radius-25, cos(radians(angleDivision * i))*radius+armRaise);
  	endShape(CLOSE);
  	//fill(234,21,100);
  	pop();
  	
  for(var j=0; j<11; j++){
  	push();
  	translate(posX, posY);
  	rotate(theta);
  	beginShape(); //HEXAGON
  	var numSides = 6;
  	//we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 25; 
  	for(var i=0; i<360; i++){
    	stroke(234,21,100);       
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
	 	}
  	endShape(CLOSE);
  	pop();
  	theta+=rotationSpeed;
  }
  
}

function HexCreature2 (posX2, posY2, armRaise2, jump2){

		push();
  	translate(posX2, posY2);
  	beginShape(); //HEXAGON
  	var numSides = 6; //we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 30; 
  	for(var i=0; i<360; i++){
    	stroke(55,75,100);    
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
  	}
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius, sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i))*radius+40);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+40, sin(radians(angleDivision * i))*radius+jump2, cos(radians(angleDivision * i))*radius+80);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+40, sin(radians(angleDivision * i))*radius-jump2, cos(radians(angleDivision * i))*radius+80);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+20, sin(radians(angleDivision * i))*radius+25, cos(radians(angleDivision * i))*radius+armRaise2);
  	line(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius+20, sin(radians(angleDivision * i))*radius-25, cos(radians(angleDivision * i))*radius+armRaise2);
  	endShape(CLOSE);
  	pop();
  	
  for(var j=0; j<11; j++){
  	push();
  	translate(posX2, posY2);
  	rotate(theta);
  	beginShape(); //HEXAGON
  	var numSides = 6;
  	//we divide our total angle by the number of sides
  	var angleDivision = 360/numSides;
  	var radius = 25; 
  	for(var i=0; i<360; i++){
    	stroke(335,35,100);       
    	vertex(sin(radians(angleDivision * i))*radius, cos(radians(angleDivision * i ))*radius);
	 	}
  	endShape(CLOSE);
  	pop();
  	theta+=rotationSpeed;
  }
}
