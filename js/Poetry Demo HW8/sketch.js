var lines=[];
var linesAsString;
var replStr; //orig string with @ replacing end of lines
var dispStr = []; //replaced string to display
var fntSze=20;
var lexicon;

function preload(){
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('PushkinPoem.txt');
}

function setup() {
	createCanvas(775,2*(lines.length)*fntSze*1.5); 
	background(0);
	frameRate(20);
	
	textSize(fntSze);
	textFont("Monaco"); 
	textStyle(BOLD);
	
	lexicon = new RiLexicon();
	linesAsString=lines.join('\n');
	//mark end of lines because tokenize its them, so replacing to  spec character @ 
	replStr=linesAsString.replace(/\n/g,' @ ');
	
	for(var i=0; i<10; i++){
		dispStr[i]=randAdjAndNouns(replStr,150);
	}
}

function draw() {
	var timer=millis();
  var index=int(timer / 10000 % 10);
  
  background(0);
  
 	fill(150);
  text(linesAsString,40,40);
 	
 	fill(255);
  text(dispStr[index], 80, (lines.length+1)*fntSze*1.5);
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
	  	words[j]=lexicon.randomWord("nn");
	  }
	  else if(spPart=="jj"){
	  	words[j]=lexicon.randomWord("jj");
	  }
	}
	
	result=words.join(" ");
	//restoring end of lines
	result=result.replace(/ @ /g,'\n');
	result=result.replace(/\s\./g,'.'); 
	result=result.replace(/\s\,/g,',');
	result=result.replace(/\s\;/g,';'); 
  return result;
}



