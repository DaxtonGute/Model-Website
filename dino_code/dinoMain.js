windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

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
    context.fillRect(this.xPos, canvas.height*0.7, canvas.width*0.06, canvas.width*0.1);
    this.xPos -= runVel;
  }
}





var dinoHeight = canvas.height*0.65;
var dinoVel = 0;
var isJumping = false;

var gravity = 1;
var jumpVel = 20;
var runVel = 10;
var cacti = [new singleSmallCactus(canvas.width*1), new singleSmallCactus(canvas.width*2), new singleSmallCactus(canvas.width*3), new singleSmallCactus(canvas.width*4)];
var cactiOffset = [0, 0, 0, 0];
var lastOffset = 0;

function drawAll(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  //ground
  var grd = context.createLinearGradient(0, 0, 0, canvas.height);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "white");
  context.fillStyle = grd;
  context.fillRect(0, canvas.height*0.8, canvas.width, canvas.height);

  context.fillStyle = "black";
  var dino_character = document.getElementById("dino");
  context.drawImage(dino_character, canvas.width*0.1, dinoHeight, canvas.width*0.12, canvas.width*0.12);
  jump();
  for (var i = 0; i < cacti.length; i++) {
    cacti[i].moveForward();
    if (cacti[i].xPos <= 0){
      var offset =(Math.random()-0.5)*canvas.width
      cacti[i] = new singleSmallCactus(canvas.width*(4) - cactiOffset[i] + ((Math.random()-0.5)*canvas.width*0.5));
      cactiOffset[i] = offset;
    }
  }

  window.requestAnimationFrame(drawAll);
}

function jump () {
  console.log("help");
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
