function setup() {
  createCanvas(750,400);
  background(180,185,180);
  stroke(0);
  strokeWeight(10);
}

function draw() {
  var x = 25;
  for(var i=1; i<6; i+=1){
  	stroke(0);
  	line(50+i*x,50,50+i*x,200);
  	line(400+i*x,50,400+i*x,200);
  } //vertical lines
  
  for(var i=1; i<6; i+=1){
  	stroke(0);
  	line(200,50+i*x,350,50+i*x);
  	stroke(252,252,41);
  	line(550,50+i*x,700,50+i*x);
  } //horizonal lines
  
  for(var i=1; i<7; i+=1){
  	stroke(0);
  	line(50+i*x,200,50,200+i*x);
  	stroke(255,0,0);
  	line(400+i*x,200,400,200+i*x);
  } //right leaning diagonal lines part 1
  
  for(var i=1; i<7; i+=1){
  	stroke(0);
  	line(50+i*x,350,200,200+i*x);
  	stroke(255,0,0);
  	line(400+i*x,350,550,200+i*x);
  } //right leaning diagonal lines part 2
  
  for(var i=0; i<6; i+=1){
  	stroke(0);
  	line(200+i*x,200,350,350-i*x);
  	stroke(0,0,255);
  	line(550+i*x,200,700,350-i*x);
  } //left leaning diagonal lines part 1
  
  for(var i=0; i<6; i+=1){
  	stroke(0);
  	line(200,200+i*x,350-i*x,350);
  	stroke(0,0,255);
  	line(550,200+i*x,700-i*x,350);
  } //left leaning diagonal lines part 2
  
  stroke(0);
  fill(255,255,255,0);
  rect(50,50,300,300);
  rect(400,50,300,300);
  line(200,50,200,350);
  line(50,200,350,200);
  line(550,50,550,350);
  line(400,200,700,200);
}