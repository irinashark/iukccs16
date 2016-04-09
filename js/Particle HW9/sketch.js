function Particle(posX, posY) {
  this.speed  	 	= random(5);
  this.angle 			= random(-1*PI,PI);  
  this.directionX = cos(this.angle); 
  this.directionY = sin(this.angle); 
  //this.color   	= "#0B0E9B";
  this.red				= 15;
  this.green 			= random(20,60);
  this.blue				=random(50,250);
  this.posX     	= posX;
  this.posY     	= posY;
  this.partSz 		= random(15);
  //this.dispTime 	= 30000;
}

Particle.prototype = {
  constructor : Particle,
  
  display : function (){
  		fill(this.red,this.green,this.blue);
  		triangle(this.posX, this.posY+this.partSz/3, this.posX+this.partSz, this.posY+2*this.partSz, this.posX-this.partSz, this.posY+2*this.partSz);
  		triangle(this.posX, this.posY+8*this.partSz/3, this.posX+this.partSz, this.posY+this.partSz, this.posX-this.partSz, this.posY+this.partSz);
  },
  
  travel : function(){
  	//fill(this.color);
    this.posX+=this.directionX*this.speed;
    if (this.posX > width || this.posX < 0){
      this.speed *= -1;
    }
    this.posY+=this.directionY*this.speed;
    if (this.posY > height || this.posY < 0){
      this.speed *= -1;
    }
	}
};

var particle = [];
var timer;
var show;

function setup() {
	//colorMode(HSB,360,100,100);
  createCanvas(800,600);
  frameRate(30);
  noCursor();
  for (var i = 0; i<50; i++){
  	particle [i] = new Particle(width/2, height/2);
  }
}

function draw() {
	timer = millis();
	background(0,20);
	/*if (millis()<30000)
  	background(0,20);
	else 
		background (0);*/
  noStroke();
 	
 	if(timer>6000){
		for(var j = 0; j<particle.length; j++){
		//if(millis()<particle[j].dispTime){
			particle [j].display();
			particle [j].travel();
		//} 
 	}
 	}
}

function mouseClicked() {
	for (var i = 0; i<10; i++){
		particle.splice(particle.length,0, new Particle(mouseX,mouseY));
	}
}