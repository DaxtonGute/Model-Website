class singleSmallCactus{
  constructor() {
   this.xPos = canvas.width;
  }
  moveForward(){
    context.fillStyle = "black"; //maybe redundant
    context.fillRect(xPos, canvas.height*0.7, canvas.width*0.06, canvas.width*0.1);
    xPos -= runVel;
  }
}
