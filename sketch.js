var path, runner;
var pathImg, runnerImg, runnerImg1;
var rightwall, leftwall;

function preload(){
  //pre-load images
pathImg = loadImage("path.png");

runnerImg = loadImage("path.png");
runnerImg1 = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  background("black");


  //create sprites here
 path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;


 runner = createSprite(200,300);
 
runner.addAnimation("runner", runnerImg1);
runner.scale = 0.10;

rightwall = createSprite(370,200,10,400);
leftwall = createSprite(35,200,10,400);
}

function draw() {
  background(0);

if (path.y > 400){
  path.y = height/2;
}


runner.bounceOff(rightwall || leftwall);
runner.x = mouseX;

if (runner.isTouching(rightwall || leftwall)){
  runner.collide(rightwall);
  runner.collide(leftwall);
}



rightwall.visible = false;
leftwall.visible = false;

createEdgeSprites();
  drawSprites();
}






