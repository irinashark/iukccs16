var myGeometry = [];
var name;
var shapeColor;
var size;

function setup() {
	createCanvas(400,400);
	for (var i=0;i<10;i++){
  	myGeometry[i]=floor(random(200));
	}
	frameRate(2);
}

function draw() {
  background(150);
 	stroke(255);
  strokeWeight(5)
  for (var i=0;i<myGeometry.length;i++){
  	if(myGeometry[i]%2==0){
  	fill(255,0,0);
  	ellipse(random(windowWidth),random(windowHeight),myGeometry[i],myGeometry[i]);
  	}else if(myGeometry[i]%3==0){
  		fill(0,255,0);
  		rect(random(windowWidth),random(windowHeight),myGeometry[i],myGeometry[i]);
  	}else{
  		fill(0,0,255);
  	triangle(random(windowWidth),random(windowHeight),random(windowWidth)+myGeometry[i]/10,random(windowHeight)-myGeometry[i]/10,random(windowWidth)+2*myGeometry[i]/10,random(windowHeight));
  	}
  		
  	}
  
  
}