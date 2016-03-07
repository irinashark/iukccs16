function setup() {
  createCanvas(710,800);
  colorMode(HSB,360,100,100);
  background(350,80,50);
}

function draw() {
  
  stroke(110,80,50);
  
  for (var i=0; i<35; i++){
  	strokeWeight(10);
  	line(10+i*20,0,10+i*20,sqrt(200^2-(10+i*20)^2));
  }
  
}