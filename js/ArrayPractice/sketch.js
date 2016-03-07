var myFirstArray = [];
var mySecondArray = [];

function setup() {
  createCanvas (500,500);
  for (var i=0;i<10;i++){
  	myFirstArray[i]=floor(random(12));
  	mySecondArray.push(random(12));
  }
  
  print(myFirstArray);
  print(mySecondArray);
}

function draw() {
  background(0,255,0);
  
  for (var i=0;i<myFirstArray.length;i++){
  	ellipse(windowWidth/2,windowHeight/2,myFirstArray[i]*10,myFirstArray[i]*10);
  }
  
  
  
  for (var i=0;i<mySecondArray.length;i++){
  
  	fill(0,100,100,0,4);
  rect(width/2,height/2,mySecondArray[i]*10,mySecondArray[i]*10);
  	
  }
}

function mousePressed(){
	mySecondArray.push(random(22));
	print(mySecondArray[mySecondArray.length-1]);
	print(mySecondArray.length);
}