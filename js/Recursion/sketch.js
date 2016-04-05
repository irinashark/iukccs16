var theta;

function setup() {
  createCanvas(400,400);
  frameRate(15);
  theta=0;
}

function draw() {
  background(0);
  stroke(0,255,200);
  strokeWeight(2);
  
  beginShape();
  translate(width/2, height/2);
  for(var i=0;i<TWO_PI;i+=0.1){
  	push();
  	rotate(theta+i);
  	line(0,0,width/2,height/4);
  	
  	for(var j=0;j<TWO_PI;j+=1){
  		push();
  		translate(width/2,0);
  		rotate(-theta-j);
  		line(0,0,width/4,height/2);
  		pop();
  	}
  	pop();
  }
  endShape();
  theta += 0.01;
}
