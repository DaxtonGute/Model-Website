canvas = document.getElementById("dinoGame");
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
canvas.width = windowWidth - 25;
canvas.height = windowHeight - 25;
canvas.style.border = "1px solid black";

context = canvas.getContext("2d");
document.addEventListener("keydown", myKeyDown);
document.addEventListener("mousedown", getCursorPosition);
window.requestAnimationFrame(drawAll);

var obstaclesChoices = ["singleSmallCactus", "doubleSmallCactus", "tripleSmallCactus", "singleLargeCactus", "doubleLargeCactus", "tripleLargeCactus"];
var dinoHeight = canvas.height*0.65;
var dinoVel = 0;
var isJumping = false;
var distanceRan = 0;
var score = 0;
var highScore = 0;

var gravity = 2;
var jumpVel = 35;
var runVel = 15;
var cacti = [spawnRandomObstacle(canvas.width*(3.5), 0), spawnRandomObstacle(canvas.width*(2.5), 0), spawnRandomObstacle(canvas.width*(1.5), 0), spawnRandomObstacle(canvas.width*(0.5), 0)]; //now I can repleace
var cactiOffset = [0, 0, 0, 0];
var lastOffset = 0;
var runningOne = true;
var framesInBetween = 0;
var backgroundOnePos = 0;
var backgroundTwoPos = 2400;
var gameOverCheck = false;
var resetCheck = false;


function drawAll(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  if(gameOverCheck == false){
    //ground
    var background = document.getElementById("background");
    context.drawImage(background, backgroundOnePos, canvas.width*0.4, 2400, canvas.width*0.02);
    context.drawImage(background, backgroundTwoPos, canvas.width*0.4, 2400, canvas.width*0.02);
    backgroundOnePos -= runVel;
    backgroundTwoPos -= runVel;
    if (backgroundOnePos <= -2400){
      backgroundOnePos = 2400;//there is gap ahhhhh
    }
    if (backgroundTwoPos <= -2400){
      backgroundTwoPos = 2400;
    }

    context.fillStyle = "black";
    var dinoIdle = document.getElementById("dinoIdle");
    if (isJumping){
      context.drawImage(dinoIdle, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
    }else{
      if (runningOne){
        context.drawImage(dinoRunningOne, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
        if(framesInBetween > 5){
          runningOne = false;
          framesInBetween = 0;
        }
        framesInBetween ++;
      }else{
        context.drawImage(dinoRunningTwo, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
        if(framesInBetween > 5){
          runningOne = true;
          framesInBetween = 0;
        }
        framesInBetween ++;
      }
    }
    jump();
    distanceRan += runVel;
    runVel += 0.001;
    displayScore();
    for (var i = 0; i < cacti.length; i++) {
      cacti[i].draw();
      cacti[i].moveForward();
      if (cacti[i].xPos <= canvas.width*(-0.5)){
        var offset =(Math.random()-0.5)*canvas.width*(0.5)
        cacti[i] = spawnRandomObstacle(cactiOffset[i], offset);
        cactiOffset[i] = offset;
      }
    }
    resetCheck = false;
  }else{
    //redraw everything but don't move
    var background = document.getElementById("background");
    context.drawImage(background, backgroundOnePos, canvas.width*0.4, 2400, canvas.width*0.02);
    context.drawImage(background, backgroundTwoPos, canvas.width*0.4, 2400, canvas.width*0.02);
    var dinoDead = document.getElementById("dinoDead");
    context.drawImage(dinoDead, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
    for (var i = 0; i < cacti.length; i++) {
      cacti[i].draw();
    }
    displayScore();

    var gameOver = document.getElementById("gameOver");
    var restartButton = document.getElementById("restartButton");
    context.drawImage(gameOver, canvas.width*0.25, canvas.width*0.2, canvas.width*0.5, canvas.width*0.05);
    context.drawImage(restartButton, canvas.width*0.47, canvas.width*0.26, canvas.width*0.06, canvas.width*0.06);
    if(score > highScore){
      highScore = score;
    }
    if (resetCheck){
      reset();
    }
  }

  if (checkCollisions()){
    gameOverCheck = true;
  }
  window.requestAnimationFrame(drawAll);
}

function reset(){
  cacti = [spawnRandomObstacle(canvas.width*(3.5), 0), spawnRandomObstacle(canvas.width*(2.5), 0), spawnRandomObstacle(canvas.width*(1.5), 0), spawnRandomObstacle(canvas.width*(0.5), 0)];
  dinoVel = 0;
  isJumping = false;
  distanceRan = 0;
  cactiOffset = [0, 0, 0, 0];
  lastOffset = 0;
  runningOne = true;
  backgroundOnePos = 0;
  backgroundTwoPos = 2400;
  gameOverCheck = false;
  resetCheck = false;
  score = 0;
  runVel = 15;
  dinoHeight = canvas.height*0.65;
}

function checkCollisions(){
  var failed = false;
  for (var i = 0; i < 4; i++) {
    if (cacti[i].xPos <= canvas.width*0.14 && canvas.width*0.14 <= cacti[i].xPos + cacti[i].width){ //senses if back side of dinosaur
      if (cacti[i].yPos <= dinoHeight + canvas.width*0.08  && dinoHeight + canvas.width*0.08 <= cacti[i].yPos + cacti[i].height){ //senses bottom side of dinosaur
        failed = true;
      }
    }

    if (cacti[i].xPos <= canvas.width*0.18 && canvas.width*0.18 <= cacti[i].xPos + cacti[i].width){ //senses if front side of dinosaur
      if (cacti[i].yPos <= dinoHeight + canvas.width*0.08  && dinoHeight + canvas.width*0.08 <= cacti[i].yPos + cacti[i].height){ //senses bottom side of dinosaur
        failed = true;
      }
    }
  }
  return failed;
}

function displayScore(){
  score = Math.floor(distanceRan/120);
  var scoreOnes = Math.floor(score%10);
  var scoreTens = Math.floor((score/10)%10);
  var scoreHundreds = Math.floor((score/100)%10);
  var scoreThousands = Math.floor((score/1000)%10);
  var scoreTenThousands = Math.floor((score/10000)%10);
  context.drawImage(numberIdentifyer(scoreOnes), canvas.width*0.96, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
  context.drawImage(numberIdentifyer(scoreTens), canvas.width*0.93, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
  context.drawImage(numberIdentifyer(scoreHundreds), canvas.width*0.9, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
  context.drawImage(numberIdentifyer(scoreThousands), canvas.width*0.87, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
  context.drawImage(numberIdentifyer(scoreTenThousands), canvas.width*0.84, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
  if(highScore!= 0){ //not super efficient
    var hiOnes = Math.floor(highScore%10);
    var hiTens = Math.floor((highScore/10)%10);
    var hiHundreds = Math.floor((highScore/100)%10);
    var hiThousands = Math.floor((highScore/1000)%10);
    var hiTenThousands = Math.floor((highScore/10000)%10);
    context.drawImage(numberIdentifyer(hiOnes), canvas.width*0.78, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
    context.drawImage(numberIdentifyer(hiTens), canvas.width*0.75, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
    context.drawImage(numberIdentifyer(hiHundreds), canvas.width*0.72, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
    context.drawImage(numberIdentifyer(hiThousands), canvas.width*0.69, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
    context.drawImage(numberIdentifyer(hiTenThousands), canvas.width*0.66, canvas.width*0.01, canvas.width*0.025, canvas.width*0.03);
    var hiTag = document.getElementById("hiTag");
    context.drawImage(hiTag, canvas.width*0.6, canvas.width*0.01, canvas.width*0.03, canvas.width*0.03);
  }
}

function numberIdentifyer(num){
  if (num==0){
    return document.getElementById("zero");
  }else if (num==1){
    return document.getElementById("one");
  }else if (num==2){
    return document.getElementById("two");
  }else if (num==3){
    return document.getElementById("three");
  }else if (num==4){
    return document.getElementById("four");
  }else if (num==5){
    return document.getElementById("five");
  }else if (num==6){
    return document.getElementById("six");
  }else if (num==7){
    return document.getElementById("seven");
  }else if (num==8){
    return document.getElementById("eight");
  }else if (num==9){
    return document.getElementById("nine");
  }
}

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

function getCursorPosition(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    if((canvas.width*0.47 <= x <= canvas.width*0.53)&&(canvas.width*0.26 <= y <= canvas.width*0.32)){
      resetCheck = true;
    }
}


//three small-cactus, double small, single small cactus, single large cactus, double large cactus, four cactus patch, low-flyer, medium-flyer, high-flyer
