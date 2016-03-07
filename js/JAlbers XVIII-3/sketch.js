var y, currSqrt, leftCircX, rightCircX, currSqrt2, innerLeftCircX, innerRightCircX;
var R=200;

function setup() {
  createCanvas(700,400);
  colorMode(HSB,360,100,100);
  background(330,80,60);
  strokeCap(SQUARE);
}

function draw() {
	var centerX=windowWidth/2;
  
  stroke(110,80,50);
  
  for (y=0;y<windowHeight;y+=5){
    currSqrt=sqrt(R*R-(R-y)*(R-y));
    leftCircX=centerX-currSqrt;
    rightCircX=centerX+currSqrt; 
    
   //inside lines
    strokeWeight(10);
    if(y%20==0){
    line(leftCircX,y,centerX,y);
    }
    else if(y%10==0){
     line(centerX,y,rightCircX, y);
    }
    
    //outside lines
    strokeWeight(5);
    if(y%10==0){
      line(0,y,leftCircX,y); //lines on the left of the circle
    }else{
      line(rightCircX,y,windowWidth,y); //lines of the right of the circle
    }
  } 
  
}
