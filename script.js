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
    alreadyTriggered = false;
  }
}
function updateTimer(){
  if(countDown != 0){
    countDown = (Math.round((countDown - 0.01)*100))/100;
    document.getElementById('timeLeft').innerHTML = "Time Left: " + countDown + " Seconds";
  }else{
    clearInterval(interval);
    document.getElementById("Results").style.display = "block";
    document.getElementById('CPS').innerHTML = "CPS: " + (numClicks/numSec) + " clicks per second";
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
