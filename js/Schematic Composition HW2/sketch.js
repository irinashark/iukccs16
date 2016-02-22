var cushion;
var unit;

function setup() {
  createCanvas(1020,740);
  background(255);
  cushion = 20;
  unit = 40;
  noCursor();
}

function draw() {
	noStroke();
	fill(237,212,182);
	rectMode(CENTER);
	rect(windowWidth/2,windowHeight/2,windowWidth-cushion/2,windowHeight-cushion/2);
	fill(0);
	rect(windowWidth/2,windowHeight/2,windowWidth-cushion/2-unit*4,windowHeight-cushion/2-unit*4);
  
  for(var j=0;j<9;j++){
  	if(j%2==0){
  		fill(237,212,182);
  		rectMode(CORNER);
  		rect(unit*3+cushion/2,unit*3+cushion/2+unit*j,unit*4,unit);
  	}
  }
  
  for (var i=0;i<9;i++){
  if(i==0||(i%2==0 && i%6!=0)){
  		fill(237,212,182);
  		ellipse(cushion/2+unit*8+unit/2,cushion/2+unit*3+unit/2+unit*i,unit,unit);
  	}
  }
  
  for(var k=0;k<9;k++){
  	if(k==0 || (k%2==0 && k%8!=0)){
  		fill(237,212,182);
  		rectMode(CORNER);
  		rect(unit*10+cushion/2,unit*3+cushion/2+unit*k,unit*2,unit);
  	}else if(k%8==0){
  		stroke(20);
  		rect(unit*10+cushion/2,unit*3+cushion/2+unit*k,unit,unit);
  		rect(unit*11+cushion/2,unit*3+cushion/2+unit*k,unit,unit);
  	}
  }
  
  for(var l=0;l<9;l++){
  	fill(237,212,182);
  	ellipse(cushion/2+unit*13+unit/2,cushion/2+unit*3+unit/2+unit*l,unit,unit);
  	ellipse(cushion/2+unit*15+unit/2,cushion/2+unit*3+unit/2+unit*l,unit,unit);
  }	
  
  for(var m=0;m<5;m++){
  	fill(237,212,182);
  	stroke(20);
  	rect(unit*(17+m)+cushion/2,unit*3+cushion/2,unit,unit);
  }
  
  if(mouseX>=unit*17+cushion/2 && mouseX<=unit*17+cushion/2+unit*5 && mouseY>=unit*5+cushion/2 && mouseY<=unit*5+cushion/2+unit*2){
  	rect(unit*17+cushion/2,unit*5+cushion/2,unit*5,unit*2);
  }
  
  for(var n=0;n<8;n++){
  	if(n%2==0){
  	noStroke();
  	fill(237,212,182);
  	rectMode(CORNER);
  	rect(unit*17+cushion/2,unit*8+cushion/2+unit*n,unit*3,unit);
  	ellipse(cushion/2+unit*21+unit/2,cushion/2+unit*8+unit/2+unit*n,unit,unit);
  	}
  }
  
  for(var p=0;p<13;p++){
  	if(p!=1 && p!=4 && p!=6 && p!=11){
  	fill(237,212,182);
  	ellipse(cushion/2+unit*3+unit/2+unit*p,cushion/2+unit*14+unit/2,unit,unit);
  	}
  }
}