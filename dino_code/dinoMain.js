windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

canvas = document.getElementById("dinoGame");
canvas.width = windowWidth - 25;
canvas.height = windowHeight - 25;
canvas.style.border = "1px solid black";

context = canvas.getContext("2d");
document.addEventListener("keydown", myKeyDown);
window.requestAnimationFrame(drawAll);

class singleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var singleSmallCactus = document.getElementById("singleSmallCactus");
    context.drawImage(singleSmallCactus, this.xPos, canvas.height*0.7, canvas.width*0.06, canvas.width*0.1);
    this.xPos -= runVel;
  }
}

class doubleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var doubleSmallCactus = document.getElementById("doubleSmallCactus");
    context.drawImage(doubleSmallCactus, this.xPos, canvas.height*0.7, canvas.width*0.12, canvas.width*0.1);
    this.xPos -= runVel;
  }
}

class tripleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var tripleSmallCactus = document.getElementById("tripleSmallCactus");
    context.drawImage(tripleSmallCactus, this.xPos, canvas.height*0.7, canvas.width*0.18, canvas.width*0.1);
    this.xPos -= runVel;
  }
}

class singleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var singleLargeCactus = document.getElementById("singleLargeCactus");
    context.drawImage(singleLargeCactus, this.xPos, canvas.height*0.61, canvas.width*0.08, canvas.width*0.14);
    this.xPos -= runVel;
  }
}

class doubleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var doubleLargeCactus = document.getElementById("doubleLargeCactus");
    context.drawImage(doubleLargeCactus, this.xPos, canvas.height*0.61, canvas.width*0.16, canvas.width*0.14);
    this.xPos -= runVel;
  }
}

class tripleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var tripleLargeCactus = document.getElementById("tripleLargeCactus");
    context.drawImage(tripleLargeCactus, this.xPos, canvas.height*0.61, canvas.width*0.24, canvas.width*0.14);
    this.xPos -= runVel;
  }
}





var dinoHeight = canvas.height*0.65;
var dinoVel = 0;
var isJumping = false;

var gravity = 2;
var jumpVel = 35;
var runVel = 15;
var cacti = [new singleSmallCactus(canvas.width*(4)), new singleSmallCactus(canvas.width*(3)), new singleSmallCactus(canvas.width*(2)), new singleSmallCactus(canvas.width*(1))];
var cactiOffset = [0, 0, 0, 0];
var lastOffset = 0;
var runningOne = true;

function drawAll(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  //ground
  var grd = context.createLinearGradient(0, 0, 0, canvas.height);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "white");
  context.fillStyle = grd;
  context.fillRect(0, canvas.height*0.8, canvas.width, canvas.height);

  context.fillStyle = "black";
  var dinoIdle = document.getElementById("dinoIdle");
  if (isJumping){
    context.drawImage(dinoIdle, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
  }else{
    if (runningOne){
      context.drawImage(dinoRunningOne, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
      runningOne = false;
    }else{
      context.drawImage(dinoRunningTwo, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
      runningOne = true;
    }
  }
  jump();

  console.log("h");
  for (var i = 0; i < cacti.length; i++) {
    cacti[i].moveForward();
    if (cacti[i].xPos <= canvas.width*(-0.5)){
      var offset =(Math.random()-0.5)*canvas.width*(0.5)
      cacti[i] = spawnRandomObstacle(cactiOffset[i], offset, i);
      cactiOffset[i] = offset;
    }
  }

  window.requestAnimationFrame(drawAll);
}

var obstaclesChoices = ["singleSmallCactus", "doubleSmallCactus", "tripleSmallCactus", "singleLargeCactus", "doubleLargeCactus", "tripleLargeCactus"];
function spawnRandomObstacle(previousOffset, offset){ //do it based off score
  var choice = obstaclesChoices[Math.floor(Math.random() * obstaclesChoices.length)];
  if (choice == "singleSmallCactus"){
    return new singleSmallCactus(canvas.width*(4.5) - previousOffset + offset);
  }else if (choice == "doubleSmallCactus") {
    return new doubleSmallCactus(canvas.width*(4.5) - previousOffset + offset);
  }else if (choice == "tripleSmallCactus") {
     return new tripleSmallCactus(canvas.width*(4.5) - previousOffset + offset);
  }else if (choice == "singleLargeCactus") {
    return new singleLargeCactus(canvas.width*(4.5) - previousOffset + offset);
  }else if (choice == "doubleLargeCactus") {
    return new doubleLargeCactus(canvas.width*(4.5) - previousOffset + offset);
  }else if (choice == "tripleLargeCactus") {
    return new tripleLargeCactus(canvas.width*(4.5) - previousOffset + offset);
  }else{
    console.log("whoops");
  }
}

function jump () {
  if(isJumping){
    var i = 0;
    dinoHeight -= dinoVel;
    if(dinoHeight >= canvas.height*0.65){
      isJumping = false;
      dinoVel = 0;
    }else{
      dinoVel -= gravity;
    }
  }
}

function myKeyDown (event) {
  keyCode = event.which;
  keyStr = event.key;
  console.log(event);
  console.log(keyCode);
  console.log(keyStr);

  if (keyCode == 32) {
    if(!isJumping){
      dinoVel = jumpVel;
      isJumping = true;
    }
  }
}

//three small-cactus, double small, single small cactus, single large cactus, double large cactus, four cactus patch, low-flyer, medium-flyer, high-flyer
