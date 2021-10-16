var pathimage;
var path;
var runnerimage,runner;
var left,right;
function preload(){
  //pre-load images
  pathimage = loadImage("path.png");
  runnerimage = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

 path= createSprite(200,200);
 path.addImage(pathimage);
 path.velocityY=3;

 runner=createSprite(200,200);
 runner.addAnimation("running",runnerimage);
 runner .scale=0.08;

 left=createSprite(0,0,100,800);
 right=createSprite(400,0,100,800);
 left.visible=false;
 right.visible=false;

}

function draw() {
  background(0);
  if(path.y>400){
    path.y=height/2;
  }
  runner.x=World.mouseX;
  runner.collide(left);
  runner.collide(right);
  drawSprites();
}
