var input;
var button;
var slider1, slider2, slider3, slider4, slider5, slider6;
var button2;

var elementSpacing;
var bgColor; //must be defined as color not string but cannot run color() prior to setup

function setup() {
	elementSpacing = 50;
  var myCanvas = createCanvas(400,400);
  myCanvas.position(elementSpacing,2*elementSpacing);
  button2 = createButton("Change background");
  button2.position(10*elementSpacing,9.5*elementSpacing);
  //next line defining bgColor as color
  bgColor=color('black');
  button2.mouseReleased(
    // this is a callback function
  function(){
      bgColor = color(random(255),random(255),random(255));
  }
	)

    
  h4 = createElement('h4','Title'); //DOESN'T SHOW
  h4.position(10*elementSpacing, 1.5*elementSpacing);
  input = createInput();
  input.position(10*elementSpacing,2.5*elementSpacing);
  h5 = createElement('h4','Speed'); //DOESN'T SHOW
  h5.position(10*elementSpacing,2.75*elementSpacing);
  slider1 = createSlider(0,100,10);
  slider1.position(10*elementSpacing,3.5*elementSpacing);
  h6 = createElement('h4','Red Color'); //DOESN'T SHOW
  h6.position(10*elementSpacing,3.75*elementSpacing);
  slider2 = createSlider(0,255,255);
  slider2.position(10*elementSpacing,4.5*elementSpacing);
  h7 = createElement('h4','Blue Color'); //DOESN'T SHOW
  h7.position(10*elementSpacing,4.75*elementSpacing);
  slider3 = createSlider(0,255,255);
  slider3.position(10*elementSpacing,5.5*elementSpacing);
  h8 = createElement('h4','Green Color'); //DOESN'T SHOW
  h8.position(10*elementSpacing,5.75*elementSpacing);
  slider4 = createSlider(0,255,255);
  slider4.position(10*elementSpacing,6.5*elementSpacing);
  h9 = createElement('h4','Stroke Weight'); //DOESN'T SHOW
  h9.position(10*elementSpacing,6.75*elementSpacing);
  slider5 = createSlider(1,10,7.5);
  slider5.position(10*elementSpacing,7.5*elementSpacing);
  h10 = createElement('h4','Spokes'); 
  h10.position(10*elementSpacing,7.75*elementSpacing);
  slider6 = createSlider(4,10,8);
  slider6.position(10*elementSpacing,8.5*elementSpacing);
  button = createButton("Submit");
  button.position(13*elementSpacing,2.5*elementSpacing);
  /*h1 = createElement('h1','im a moving h1 p5.element!');
  h1.position(0,0);*/
  button.mousePressed(writeTitle);
  frameRate(10);
  theta=0;
}

function draw() {
  var redColor2 = red(bgColor);
  var greenColor2 = green(bgColor);
  var blueColor2 = blue(bgColor);
  background(redColor2,greenColor2,blueColor2,20);
  
  var redColor = slider2.value();
  var greenColor = slider3.value();
  var blueColor = slider4.value();
  stroke(redColor,greenColor,blueColor);
  
  var thick = slider5.value();
  strokeWeight(thick);

  beginShape();
  translate(width/2, height/2); //HOW TO MOVE DOWN AND CREATE EMPTY SPACE?
  for(var i=0;i<TWO_PI;i+=slider6.value()/10){
    push();
    rotate(theta+i);
    line(0,0,width/4,height/4);

    for(var j=0;j<TWO_PI;j+=slider6.value()/10){
      push();
      translate(width/2,0);
      rotate(-theta-j);
      line(0,0,width/4,height/4);
      pop();
    }
    pop();
  }
  endShape();
  var speed = slider1.value();
  theta += speed/1000;
}

function writeTitle(){
  var name = input.value();
  h1 = createElement('h1', name);
  h1.position(elementSpacing,elementSpacing/2);
}