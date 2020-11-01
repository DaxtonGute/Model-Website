var moles = ["but1","but2","but3","but4","but5","but6","but7","but8","but9","but10","but11","but12","but13","but14","but15","but16","but17","but18","but19","but20","but21","but22","but23","but24"];
var molesClicked = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var molesActivated = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var startingInterval = 3000;
var score = 0;
var highScore = 0;
var gameOver = false;
//≧◉ᴥ◉≦
function startWack(){
  document.getElementById("wack_start").disabled = true;
  gameOver = false;
  wack_randomize();
}

function wack_randomize(){
  if (!gameOver){
    var random = Math.floor(Math.random()*23.99);
    popOut(random);
    setTimeout("wack_randomize();", startingInterval);
    startingInterval = startingInterval - 100;
  }
}

function popOut(blockNum){
  molesActivated[blockNum] = true;
  setTimeout("resetBlock(" + blockNum + ");", 1000);
  document.getElementById(moles[blockNum]).innerHTML = "≧◉ᴥ◉≦";
  document.getElementById(moles[blockNum]).classList = "btn btn-light";
}

function resetBlock(blockNum){
  if (molesClicked[blockNum]){
    score ++;
    document.getElementById("wack_score").innerHTML = "Score: " + score;
  }else{
    resetWack();
  }
  document.getElementById(moles[blockNum]).innerHTML = "o";
  document.getElementById(moles[blockNum]).classList = "btn btn-secondary";
  molesActivated[blockNum] = false;
  molesClicked[blockNum] = false;
}

function moleClicked(blockNum){
  if (molesActivated[blockNum]){
    molesClicked[blockNum] = true;
  }
}

function resetWack(){
  gameOver = true;
  setTimeout("turnOnMoles();", 250);
  document.getElementById("wack_score").innerHTML = "Score: 0";
  setTimeout("turnStartOn();", 2000);
  if (score > highScore) {
    highScore = score;
    document.getElementById("wack_high_score").innerHTML = "High Score: " + highScore;
  }
  for (var i = 0; i < molesClicked.length; i++) {
    molesClicked[i] = false;
    molesActivated[i] = false;
  }
  score = 0;
  startingInterval = 3000;
}

function turnStartOn(){
  document.getElementById("wack_start").disabled = false;
}

function turnOnMoles(){
  for (var i = 0; i < moles.length; i++) {
    document.getElementById(moles[i]).classList = "btn btn-light";
  }
  setTimeout("turnOffMoles();", 300);
}

function turnOffMoles(){
  for (var i = 0; i < moles.length; i++) {
    document.getElementById(moles[i]).classList = "btn btn-secondary";
  }
}
