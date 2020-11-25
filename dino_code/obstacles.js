class obstacle{
  constructor(xPos) {
    this.xPos = xPos;
  }
  moveForward(){
    this.xPos -= runVel;
  }
}
class singleSmallCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.06;
   this.height = canvas.width*0.1;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var singleSmallCactus = document.getElementById("singleSmallCactus");
    context.drawImage(singleSmallCactus, this.xPos, this.yPos, this.width, this.height);
  }
}

class doubleSmallCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.12;
   this.height = canvas.width*0.1;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var doubleSmallCactus = document.getElementById("doubleSmallCactus");
    context.drawImage(doubleSmallCactus, this.xPos, this.yPos, this.width, this.height);
  }
}

class tripleSmallCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.18;
   this.height = canvas.width*0.1;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var tripleSmallCactus = document.getElementById("tripleSmallCactus");
    context.drawImage(tripleSmallCactus, this.xPos, this.yPos, this.width, this.height);
  }
}

class singleLargeCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.08;
   this.height = canvas.width*0.14;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var singleLargeCactus = document.getElementById("singleLargeCactus");
    context.drawImage(singleLargeCactus, this.xPos, this.yPos, this.width, this.height);
  }
}

class doubleLargeCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.16;
   this.height = canvas.width*0.14;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var doubleLargeCactus = document.getElementById("doubleLargeCactus");
    context.drawImage(doubleLargeCactus, this.xPos, this.yPos, this.width, this.height);
  }
}

class tripleLargeCactus extends obstacle{ //how to import
  constructor(xPos) {
   super(xPos);
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.24;
   this.height = canvas.width*0.14;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var tripleLargeCactus = document.getElementById("tripleLargeCactus");
    context.drawImage(tripleLargeCactus, this.xPos, this.yPos, this.width, this.height);
  }
}


class flyer extends obstacle{
  constructor(xPos, yPos) {
   super(xPos);
   this.yPos = yPos;
   this.width = canvas.width*0.12;
   this.height = canvas.width*0.12;
   this.multiplyer =  Math.random()*0.2 + 0.9;
   this.animated = true;
   this.framesSince = 0;
  }
  draw(){
    console.log('help');
    context.fillStyle = "black"; //maybe redundant
    var flyerOne = document.getElementById("flyerOne");
    var flyerTwo = document.getElementById("flyerTwo");
    if((this.framesSince%16) < 8){
      console.log('help2');
      context.drawImage(flyerOne, this.xPos, this.yPos, this.width, this.height);
    }else{
      console.log('help3');
      context.drawImage(flyerTwo, this.xPos, this.yPos, this.width, this.height);
    }
    if(this.animated){
      this.framesSince ++;
    }
  }
  toggleFlightOff(){
    this.animated = false;
  }
  calculateFlyerOffset(){
    var offset = -(5 - (5/this.multiplyer))*canvas.width;
    return offset;
  }
  moveForward(){
    this.xPos -= runVel*this.multiplyer;
  }
}



class lowFlyer extends flyer{ //how to import
  constructor(xPos) {
   super(xPos, canvas.height*0.65 + 25);
  }
}

class midFlyer extends flyer{ //how to import
  constructor(xPos) {
   super(xPos, canvas.height*0.65 - 100);
  }
}

class highFlyer extends flyer{ //how to import
  constructor(xPos) {
   super(xPos, canvas.height*0.65 - 225);
  }
}

class cloud{
  constructor(xPos) {
   this.xPos = canvas.width;
   this.yPos = Math.random()*canvas.width*0.36;
   this.width = canvas.width*0.16;
   this.height = canvas.width*0.04;
  }
  draw(){
    context.fillStyle = "black"; //maybe redundant
    var cloud = document.getElementById("cloud");
    context.drawImage(cloud, this.xPos, this.yPos, this.width, this.height);
  }
  moveForward(){
    this.xPos -= runVel*0.25;
  }
}
