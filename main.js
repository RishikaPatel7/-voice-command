x = 0;
y = 0;

var sreen_width =0;
var screen_height=0;

function screen_width()
{
   screen_width=window.innerHTML;
}

function screen_height()
{
   screen_height=window.innerHTML;
}

{
  img.src='apple.png';
}
var apple ='';
var speak_data 
{
  SpeechRecognition = window.webkitSpeechRecognition;
}

var speak_data='';

var  to_number
{
      to_number=Number(content);
}
var to_number='';

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
  to_number=Number(content);
 content = event.results[0][0].transcript;
 if(Number.isInteger(to_number))
    Number.isInteger(to_number)=true;
    status ='started drawing apple';
    Number.isInteger(to_number)
 draw_apple='set';
 Number.isInteger(to_number)=nottrue;
 status =' not started drawing apple';

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  canvas=createCanvas(150,150);
  canvas.center();
  video =createCapture(VIDEO);
  video.size(300,300);
  video.hide();

 
}

function canvas.position()
{
  Image(0 to 150);
}


function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}



function preload(){
  function loadImage() 
  {
    src img=apple.png;
  }
}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


