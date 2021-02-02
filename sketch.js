var jerryImage,tomImage;
var jerry,tom;
var tomSleep,jerryCheese;
var tomSit,jerryFind;
var bgImage;
function preload() {
jerryImage=loadAnimation("images/mouse2.png","images/mouse3.png");
tomImage=loadAnimation("images/cat2.png","images/cat3.png");
bgImage=loadImage("images/garden.png");
tomSleep=loadAnimation("images/cat1.png");
jerryCheese=loadAnimation("images/mouse1.png");
tomSit=loadAnimation("images/cat4.png");
jerryFind=loadAnimation("images/mouse4.png");

}

function setup(){
createCanvas(1000,600);
tom=createSprite(800,500,5,5);
tom.addAnimation("sleep",tomSleep);
tom.scale=0.1

jerry=createSprite(300,500,10,15);
jerry.addAnimation("cheese",jerryCheese);
jerry.scale=0.1

tom.addAnimation("sit",tomSit);
jerry.addAnimation("find",jerryFind);

}

function draw() {

background(bgImage);
//Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width - jerry.width)/2+50){
tom.velocityX=0
tom.changeAnimation("sit"); 
jerry.changeAnimation("find");  
}
    drawSprites();
}
//text(mouseX + ',' + mouseY,10,45);
function keyPressed(){

  if(keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.addAnimation("walk",tomImage);
  tom.changeAnimation("walk"); 


  }


}
