var mr
var r1
var r2
var r3
var r4
var b1 = createSprite(8, 200, 6, 400);
var b2 = createSprite(392, 200, 6, 400);
var b3 = createSprite(200, 8, 400, 6);
var b4 = createSprite(200,392, 400, 6);

function setup() {
  createCanvas(400,400);
  mr=createSprite(width/2, width/2, 50, 50);
  mr.shapeColor= "red";
  mr.velocityX=3;
  mr.velocityY=3;

  r1=createSprite(50,400,50,50)
  r1.shapeColor= "brown";

  r2=createSprite(150,400,50,50)
  r2.shapeColor= "blue";

  r3=createSprite(250,400,50,50)
  r3.shapeColor= "yellow";


  r4=createSprite(350,400,50,50)
  r4.shapeColor= "green";

  b1 = createSprite(8, 200, 6, 400);
   b2 = createSprite(392, 200, 6, 400);
   b3 = createSprite(200, 8, 400, 6);
   b4 = createSprite(200,392, 400, 6);
  
}

function draw() {
  background(255,255,255); 
  //createEdgeSprites();
  //mr.bounceOff(edges);
  if(mr.isTouching(r1)||mr.isTouching(r2)||
   mr.isTouching(r3)|| mr.isTouching(r4)){
    mr.setVelocity(-2, -1);
   }
   
   mr.bounceOff(b1);
   mr.bounceOff(b2);
   mr.bounceOff(b3);
   mr.bounceOff(b4);
 
 //mr.x=World.mouseX
 //mr.y=World.mouseY

 isTouching(r1);
 isTouching(r2);
 isTouching(r3);
 isTouching(r4);

 //mr.bounceOff(edges);
 
 drawSprites();
}






