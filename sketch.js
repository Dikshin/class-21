var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 50,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(200,200,50,70);
object2=createSprite(400,250,60,80);
object1.shapeColor="red";
object2.shapeColor="red";


 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
object1.x=mouseX;
object1.y=mouseY;
if(isTouching(object1,movingRect)){
  object1.shapeColor="blue";
  movingRect.shapeColor="blue";
}else{
  object1.shapeColor="red";
  movingRect.shapeColor="red";
}
  drawSprites();
}



