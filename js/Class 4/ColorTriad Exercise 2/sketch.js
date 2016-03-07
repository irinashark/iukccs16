var col1;
var col2;
var col3;
//var tran;
var origColor;

function setup() {
	tran=random(100);
	origColor=random(360);
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,360,100,100,100);
}

function draw() {
	noStroke();
	print(origColor);
	col1=color(origColor,mouseX%100,mouseY%100);
  col2=color(red(col1)%240+120,green(col1)%240+120,blue(col1)%240+120);
  col3=color(red(col1)%240+240,green(col1)%240+240,blue(col1)%240+240);
  fill(col1);
  rect(0,0,windowWidth/3,windowHeight);
  fill(col2);
  rect(windowWidth/3,0,windowWidth/3,windowHeight);
  fill(col3);
  rect(2*windowWidth/3,0,windowWidth/3,windowHeight);
}