var i;

function setup() {
	createCanvas(435,300);
  background(255,10,120);
  i=0;
}

function draw() {
	while (i<windowWidth){
		noStroke();
		fill(10,255,120);
		rect(i,130,15,40);
		i+=30;
	}
}