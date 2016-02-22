function setup() {
  createCanvas(320,440);
  background(234,234,234);
  rotate(-PI/3.0);
  fill(16,21,15);
		noStroke();
	
		ellipse(160,300,300,200);
}

function draw() {

	for(var i=2; i<=320; i+=5){
		for(var j=2; j<=440; j+=5){
			if(i%2==0 && j%4==0){
				stroke(46,57,44);
				point(i,j);
			}
		}
	}
		background(234,234,234,150);
		/*fill(16,21,15);
		noStroke();
	
		ellipse(160,300,300,200);*/
		
  
}