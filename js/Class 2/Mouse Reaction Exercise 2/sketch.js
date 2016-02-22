function setup() {
  createCanvas(windowWidth, windowHeight);
  background (50,50,250);
  noCursor();
}

function draw() {
	background (50,50,250,50);
	fill(255);
	noStroke();
	if(mouseX<windowWidth/3){
		ellipse(mouseX,mouseY,15,15);
	}else if(mouseX>windowWidth/3&&mouseX<windowWidth*2/3){
		rectMode(CENTER);
		rect(mouseX,mouseY,15,15);
	}else{
		triangle(mouseX,mouseY,mouseX+7.5,mouseY-15,mouseX+15,mouseY);
	}
   
}