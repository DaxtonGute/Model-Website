class singleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.06;
   this.height = canvas.width*0.1;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var singleSmallCactus = document.getElementById("singleSmallCactus");
    context.drawImage(singleSmallCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}

class doubleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.12;
   this.height = canvas.width*0.1;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var doubleSmallCactus = document.getElementById("doubleSmallCactus");
    context.drawImage(doubleSmallCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}

class tripleSmallCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 + 25;
   this.width = canvas.width*0.18;
   this.height = canvas.width*0.1;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var tripleSmallCactus = document.getElementById("tripleSmallCactus");
    context.drawImage(tripleSmallCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}

class singleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.08;
   this.height = canvas.width*0.14;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var singleLargeCactus = document.getElementById("singleLargeCactus");
    context.drawImage(singleLargeCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}

class doubleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.16;
   this.height = canvas.width*0.14;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var doubleLargeCactus = document.getElementById("doubleLargeCactus");
    context.drawImage(doubleLargeCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}

class tripleLargeCactus{ //how to import
  constructor(xPos) {
   this.xPos = xPos;
   this.yPos = canvas.height*0.65 - 20;
   this.width = canvas.width*0.24;
   this.height = canvas.width*0.14;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    var tripleLargeCactus = document.getElementById("tripleLargeCactus");
    context.drawImage(tripleLargeCactus, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= runVel;
  }
}
