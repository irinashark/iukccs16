var lines=[];
var linesAsString;
var replStr; //orig string with @ replacing end of lines
var dispStr; //replaced string to display
var fntSze=20;
var lexicon;
var time1,time2,time3,time4;

function preload(){
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('PushkinPoem.txt');
}

function setup() {
	createCanvas(800,700); 
	background(0);
	frameRate(20);
	
	time1=2000;
	time2=4000;
	time3=6000;
	time4=8000;
	
	textSize(fntSze);
	textFont("Monaco"); 
	
	lexicon = new RiLexicon();
	linesAsString=lines.join('\n');
	//mark end of lines because tokenize its them, so replacing to  spec character @ 
	replStr=linesAsString.replace(/\n/g,' @ ');
	dispStr=randAdjAndNouns(replStr,150);
}

function draw() {
	var timer=millis();
  background(0);
 	fill(255);
 	
  text(linesAsString,20,20);
 	if (timer>=time1 && timer<time2){
  	text(dispStr, 0, (lines.length+1)*fntSze*1.5);
  	//fill(255);
 	}else if (timer>=time2 && timer<time3){
  	text(randAdjAndNouns(dispStr,150), 0, (lines.length+1)*fntSze*1.5);
  	//fill(255);
 	}
}

function randAdjAndNouns(sourceStr,txtColor)
{
  var words=[]; 
  var spPart, result;
  words=RiTa.tokenize(sourceStr);
	//replacing adj and nouns
	for (var j=0;j<words.length;j++)
	{
	  spPart=RiTa.getPosTags(words[j]);
	  if(spPart=="nn"){
	  	fill(txtColor);
	  	words[j]=lexicon.randomWord("nn");
	  }
	  else if(spPart=="jj"){
	  	fill(txtColor);
	  	words[j]=lexicon.randomWord("jj");
	  }else{
	  	fill(255);
	  	
	  }
	}
	result=words.join(" ");
	//restoring end of lines
	result=result.replace(/ @ /g,'\n');
  return result;
  //put text in here
}

/*function mouseClicked(){
  dispStr=randAdjAndNouns(replStr);
}*/

