var x, currSqrt, upperCircY, lowCircY, currSqrt2, innerUpperCircY, innerLowCircY;
var R=150;

function setup() {
  createCanvas(300,500);
  colorMode(HSB,360,100,100);
  background(330,80,60);
  strokeCap(SQUARE);
}

function draw() {
	var centerY=windowHeight/2;
  
  stroke(110,80,50);
  
  for(x=0;x<windowWidth;x+=5){
  	strokeWeight(5);
    currSqrt=sqrt(R*R-(R-x)*(R-x));
    upperCircY=centerY-currSqrt;
    lowCircY=centerY+currSqrt;
    if(x%10==0){
    line(x,0,x,upperCircY); //lines above circle
    }else{
    line(x,lowCircY,x,windowHeight); //lines below circle
    }
  } //outside lines
  
  for(x=0;x<windowWidth;x+=10){
  	strokeWeight(10);
    currSqrt2=sqrt(R*R-(R-x)*(R-x));
    innerUpperCircY=centerY-currSqrt2;
    innerLowCircY=centerY+currSqrt2;
    if(x%20==0){
    line(x,innerUpperCircY,x,centerY); //lines above circle
    }else{
    line(x,centerY,x,innerLowCircY); //lines below circle
    }
  } //inside lines
  
}