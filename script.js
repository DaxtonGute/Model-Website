var toggled = false;
//Switching Menus
function toggleMenuSwitch() {
  if(toggled){
    document.getElementById('DDM').style.display = "none";
    document.getElementById('menuSwitch').innerHTML = "&#9776;";
    toggled = false;
  }
  else{
    document.getElementById('DDM').style.display = "block";
    document.getElementById('menuSwitch').innerHTML = "☓";
    toggled = true;
  }
}


//clicker
var numSec = 5.00;
var countDown;
var numClicks = 0;
var alreadyTriggered = false;
var bestCPS = 0;
var interval;

function CPSTester(){
  numClicks ++;
  document.getElementById('clicks').innerHTML = "Clicks: " + numClicks + " clicks";
  if(!alreadyTriggered){
    countDown = numSec;
    alreadyTriggered = true;
    interval = window.setInterval(updateTimer, 10);
  }
}
function updateTimer(){
  if(countDown != 0){
    countDown = (Math.round((countDown - 0.01)*100))/100;
    document.getElementById('timeLeft').innerHTML = "Time Left: " + countDown + " Seconds";
  }else{
    clearInterval(interval);
    alreadyTriggered = false;
    document.getElementById("Results").style.display = "block";
    document.getElementById('CPS').innerHTML = "CPS: " + (numClicks/numSec) + " clicks per second";
    if((numClicks/numSec) > bestCPS){
      bestCPS = (numClicks/numSec);
    }else{
      document.getElementById('highScore').innerHTML = "You are off your score by " + (bestCPS - (numClicks/numSec)) + " cps"
    }
    countDown = numSec;
    numClicks = 0;
  }
}
//surely there is better way
function toOneSec(){
  universalReset(1);
}
function toThreeSec(){
  universalReset(3);
}
function toFiveSec(){
  universalReset(5);
}
function toTenSec(){
  universalReset(10);
}
function toTwentySec(){
  universalReset(20);
}
function toHundredSec(){
  universalReset(100);
}
function universalReset(seconds){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary";
  if(seconds == 1){
    document.getElementById('oneSec').className = "btn btn-primary active";
  }else if(seconds == 3){
    document.getElementById('threeSec').className = "btn btn-primary active";
  }else if(seconds == 5){
    document.getElementById('fiveSec').className = "btn btn-primary active";
  }else if(seconds == 10){
    document.getElementById('tenSec').className = "btn btn-primary active";
  }else if(seconds == 20){
    document.getElementById('twentySec').className = "btn btn-primary active";
  }else if(seconds == 100){
    document.getElementById('hundredSec').className = "btn btn-primary active";
  }
  numSec = seconds;
  numClicks = 0;
  document.getElementById('clicks').innerHTML = "Clicks: 0 clicks";
  clearInterval(interval);
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given " + seconds + " seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: " + seconds + ".00 Seconds";
}
//closing the modal
function closeModal(){
  document.getElementById("Results").style.display = "none";
  document.getElementById('timeLeft').innerHTML = "Time Left: " + countDown + " Seconds";
  document.getElementById('clicks').innerHTML = "Clicks: " + numClicks + " clicks";
}


//spinner
var timer = 10;
var colors = [];
var originalColors = [];
var pickedColor = "";
var timeout;
function doTheSpin(){
  if (colors.length == 0){
    if(document.getElementById("danger-button").classList.contains("active")){
      colors.push("danger");
      originalColors.push("danger");
    }
    if(document.getElementById("warning-button").classList.contains("active")){
      colors.push("warning");
      originalColors.push("warning");
    }
    if(document.getElementById("success-button").classList.contains("active")){
      colors.push("success");
      originalColors.push("success");
    }
    if(document.getElementById("info-button").classList.contains("active")){
      colors.push("info");
      originalColors.push("info");
    }
    if(document.getElementById("primary-button").classList.contains("active")){
      colors.push("primary");
      originalColors.push("primary");
    }
    if(document.getElementById("secondary-button").classList.contains("active")){
      colors.push("secondary");
      originalColors.push("secondary");
    }
    if(document.getElementById("dark-button").classList.contains("active")){
      colors.push("dark");
      originalColors.push("dark");
    }
    if(document.getElementById("light-button").classList.contains("active")){
      colors.push("light");
      originalColors.push("light");
    }
  }
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  timeout = setTimeout(movePositions(), 10);
}
var tempClass;
function movePositions(){
  tempClass = document.getElementById(originalColors[0]).classList + "";
  for (var i = 1; i < colors.length; i++) {
    document.getElementById(originalColors[i-1]).classList.remove("alert-"+colors[i-1]);
    document.getElementById(originalColors[i-1]).classList.add("alert-"+colors[i]);
  }
  document.getElementById(originalColors[colors.length-1]).classList = tempClass;
  var shiftedColor = colors.shift();//before: [red,warning,success,primary]
  colors.push(shiftedColor);//after: [orange,success,primary,red]
}
function reset(){
  colors = [];
  originalColors = [];
}
