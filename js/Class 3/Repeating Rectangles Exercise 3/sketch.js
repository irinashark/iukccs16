
function setup() {
	createCanvas(435,290);
  background(255,10,120);
  i=0;
}

function draw() {
	for (var i=0; i<windowWidth; i+=30){
		for (var j=0; j<windowHeight; j+=20){
			noStroke();
			fill(10,255,120);
			rect(i,j,15,10);
		}
	}
}