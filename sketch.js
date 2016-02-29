var origHue;
var origSat;
var origBright;
var col1;
var col2;
var col3;
var col4;

var col5;
var col6;
var col7;
var col8;

var circlePos;

function setup() {
  createCanvas(750,500);
  noCursor();
  /*colorMode(HSB,360,100,100);
  origHue=random(360);
  origSat=random(100);
  origBright=random(100);*/
  frameRate(0.5);
  noStroke();
}

function draw() {
	//noStroke();
	print(origHue);
	colorMode(HSB,360,100,100);
  origHue=random(360);
  origSat=random(100);
  origBright=random(100);
  
	col1=color(origHue,origSat,origBright);// initializing four circle colors
  col2=color(origHue,origSat,origBright%70+30);
  col3=color(origHue,origSat,origBright%40+60);
  col4=color(origHue,origSat,origBright%10+90);
  
  //col2=color(red(col1)%295+15,green(col1)%295+30,blue(col1)%295+15);
  //col3=color(red(col1)%295+30,green(col1)%295+60,blue(col1)%295+30);
  //col4=color(red(col1)%295+45,green(col1)%295+90,blue(col1)%295+45);
	
	col5=color(red(col1)%350+10,green(col1)%350+10,blue(col1)%350+10);// rect colors
	col6=color(red(col1)%320+40,green(col1)%320+40,blue(col1)%320+40);
	col8=color(red(col1)%290+70,green(col1)%290+70,blue(col1)%290+70);
	col7=color(red(col1)%260+100,green(col1)%260+100,blue(col1)%260+100);
	
	fill(col5);
  rect(0,0,225,windowHeight);
  fill(col6);
  rect(225,0,175,windowHeight);
  fill(col7);
  rect(400,0,150,windowHeight);
  fill(col8);
  rect(550,0,200,windowHeight);
	noStroke();
	
	
	for (var i=0; i<15;i++){
		for(var j=0; j<10; j++){
			for (var k=0;k<4; k++){		
				circlePos=floor(random(4)); //to randomize four circle colors
					if(circlePos==1){
						fill(col1);
					}else if(circlePos==2){
						fill(col2);
					}else if(circlePos==3){
						fill(col3);
					}else{
						fill(col4);
					}
			//fill(col1);
			ellipse(i*50+25,j*50+25,50,50);
			}
		}
	}
  
}