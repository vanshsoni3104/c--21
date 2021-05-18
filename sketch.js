var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);  

  obj1 = createSprite(100, 100, 50, 50);
  obj2 = createSprite(100, 300, 50, 50);
  obj3 = createSprite(300, 100, 50, 50);
  obj4 = createSprite(300, 300, 50, 50);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  obj1.shapeColor = "yellow";
  obj2.shapeColor = "yellow";
  obj3.shapeColor = "blue";
  obj4.shapeColor = "blue";

  obj2.velocityX = 2;
  obj4.velocityX = -2;
}
  
function draw(){  
  background("white");
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(obj1, movingRect)){
    obj1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    obj1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  bounceOff(obj2, obj4);

  drawSprites();  

}

