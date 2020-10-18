var toggled = false;

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


var numSec = 5.00;
var numClicks = 0;
var alreadyTriggered = false;
var interval;

function CPSTester(){
  numClicks ++;
  document.getElementById('clicks').innerHTML = "Clicks: " + numClicks + " clicks";
  if(!alreadyTriggered){
    alreadyTriggered = true;
    interval = window.setInterval(updateTimer, 10);
    alreadyTriggered = false;
  }
}
function updateTimer(){
  if(numSec != 0){
    numSec = (Math.round((numSec - 0.01)*100))/100;
    document.getElementById('timeLeft').innerHTML = "Time Left: " + numSec + " Seconds";
  }else{
    clearInterval(interval);
    numClicks = 0;
  }
}
//surely there is better way
function toOneSec(){
  document.getElementById('oneSec').className = "btn btn-primary active";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary";
  numSec = 1;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 1 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 1.00 Seconds";
}
function toThreeSec(){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary active";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary";
  numSec = 3;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 3 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 3.00 Seconds";
}
function toFiveSec(){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary active";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary";
  numSec = 5;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 5 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 5.00 Seconds";
}
function toTenSec(){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary active";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary";
  numSec = 10;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 10 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 10.00 Seconds";
}
function toTwentySec(){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary active";
  document.getElementById('hundredSec').className = "btn btn-primary";
  numSec = 20;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 20 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 20.00 Seconds";
}
function toHundredSec(){
  document.getElementById('oneSec').className = "btn btn-primary";
  document.getElementById('threeSec').className = "btn btn-primary";
  document.getElementById('fiveSec').className = "btn btn-primary";
  document.getElementById('tenSec').className = "btn btn-primary";
  document.getElementById('twentySec').className = "btn btn-primary";
  document.getElementById('hundredSec').className = "btn btn-primary active";
  numSec = 100;
  document.getElementById('buttonClicker').innerHTML = "After you click here you will be given 100 seconds of clicking as fast as you can";
  document.getElementById('timeLeft').innerHTML = "Time Left: 100.00 Seconds";
}
