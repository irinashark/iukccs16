function preload() {
  mySound = loadSound('XYPO.mp3');
}

function setup(){
  createCanvas(600, 600);
  frameRate(40);
  mySound.setVolume(0.1);
  mySound.play();
  noCursor();
}

function draw() {
  background(50,10);
  noStroke();
  translate(mouseX,mouseY);
  fill(0);
  rotate(radians(frameCount%360));
  for(var i =0; i<80; i++){
  	//for (var j=0; j<20; j++){
    push();
    //this means that we are dividing 360 degrees into
    //8 portions
    rotate(TWO_PI * i / 40);
    if(i%2==0){
    	translate(width/((i+1)/2),height/(i+1));
    }
    //play around with the first parameter
    fill(190+(i*2),250-(i*2),30+(i*2));
    rect(frameCount%width/2,0,7.5,7.5);
    pop();
  }
 
function mousePressed(){
  clear();
}

}