var blueCarX;
var redCarX;

function setup() {
  createCanvas(600,450);
  background(82,52,7);
  unit = 100;
  noCursor();
  blueCarX=0;
  redCarX=580;
  frameRate(30);
}

function draw() {
	background(82,52,7);
	noStroke();
	fill(255,100,3);
  rect (0,0,600,150);
  fill(100,255,3);
  rect (0,150,600,100);
  fill(100,255,3);
  rect (0,350,600,100);
  fill(255,237,3);
  ellipse(0,0,200,200);
  
   if(blueCarX<width-20){
    fill(38,50,252);
    rect(blueCarX,315,20,10);
    blueCarX++;
  } else {//reset our blueCarX pos to 0
    blueCarX = 0;
  }
  
  if(redCarX>0){
    fill(255,0,0);
    rect(redCarX,272.5,20,10);
    redCarX--;
  } else {//reset our redCarX pos to 580
    redCarX = 580;
  }
  
  for(var i=0;i<11;i++){
  	stroke(255);
  	strokeWeight(5);
  	if(i%2==0){
  	line(0+i*50,300,50+i*50,300);
  	}
  }//road partition
  
  for(var j=0; j<12; j++){
  	noStroke();
		fill(198,8,14);
  	if(j%2==0){
  	beginShape(); //Houses
  	vertex(50*j,400);
  	vertex(50+50*j,400);
  	vertex(50+50*j,350);
  	vertex(45+50*j,345);
  	vertex(45+50*j,325);
  	vertex(35+50*j,325);
  	vertex(35+50*j,335);
  	vertex(25+50*j,325);
  	vertex(50*j,350);
  	endShape(CLOSE);
  	}
  	
  	else{
  	beginShape(); //Houses
  	vertex(50*j,200);
  	vertex(50+50*j,200);
  	vertex(50+50*j,150);
  	vertex(45+50*j,145);
  	vertex(45+50*j,125);
  	vertex(35+50*j,125);
  	vertex(35+50*j,135);
  	vertex(25+50*j,125);
  	vertex(50*j,150);
  	endShape(CLOSE);	
  	}
  }
}