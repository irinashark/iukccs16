var unit1;
var unit2;
var origHue;
var origSat;
var origBright;
var col1;
var col2;
var col3;
var col4;

var col5;
var col6;
var col7;

function setup() {
  createCanvas(600,750);
  unit1=20;
  unit2=50;
  frameRate(1);
  noCursor();
  noStroke();
}

function draw() {
	print(origHue);
	colorMode(HSB,360,100,100);
  origHue=random(360);
  origSat=random(100);
  origBright=random(100);
  
	col1=color(origHue,origSat,origBright);// initializing four circle colors
  col2=color(origHue,origSat,origBright%70+30);
  col3=color(origHue,origSat,origBright%40+60);
  col4=color(origHue,origSat,origBright%10+90);
  
  col5=color(red(col1)%270+90,green(col1)%270+90,blue(col1)%270+90);
  col6=color(red(col5)%270+90,green(col5)%270+90,blue(col5)%270+90);
  col7=color(red(col5)%350+10,green(col5)%350+10,blue(col5)%350+10); //change to call hue and sat from col6, but change brightness
  
  fill(col1);
  rect(0,0,windowWidth,windowHeight);
  fill(col2);
  rect(unit1,unit1,windowWidth-2*unit1,windowHeight-2*unit1);
  fill(col3);
  rect(2*unit1,2*unit1,windowWidth-4*unit1,windowHeight-4*unit1);
  
  fill(col4);
  beginShape();
	vertex(3*unit1, 3*unit1);
	vertex(windowWidth-3*unit1, 4*unit1);
	vertex(windowWidth-3*unit1, 4*unit1+unit2);
	vertex(3*unit1, 4*unit1+unit2);
	endShape(CLOSE);
	
	fill(col5);
	beginShape();
	vertex(3*unit1, 5*unit1+unit2);
	vertex(windowWidth-3*unit1, 5*unit1+unit2);
	vertex(windowWidth-3*unit1, 5.25*unit1+unit2);
	vertex(3*unit1, 5.25*unit1+unit2);
	endShape(CLOSE);
	
	fill(col5);
	beginShape();
	vertex(3*unit1, 6*unit1+unit2);
	vertex(windowWidth-3*unit1, 6*unit1+unit2);
	vertex(windowWidth-3*unit1, 6*unit1+3*unit2);
	vertex(3*unit1, 6*unit1+3*unit2);
	endShape(CLOSE);
	
	fill(col6);
	beginShape();
	vertex(3*unit1+2*unit2, 7*unit1+unit2);
	vertex(windowWidth-4*unit1, 6.5*unit1+unit2);
	vertex(windowWidth-4*unit1, 5.5*unit1+3*unit2);
	vertex(3*unit1+2*unit2, 5*unit1+3*unit2);
	endShape(CLOSE);
	
	fill(col7);
	beginShape();
	vertex(3*unit1, 7*unit1+3*unit2);
	vertex(windowWidth-3*unit1, 7.5*unit1+3*unit2);
	vertex(windowWidth-3*unit1, 7.5*unit1+4*unit2);
	vertex(3*unit1, 7*unit1+4*unit2);
	endShape(CLOSE);
	
}