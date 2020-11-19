var car, wall



function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(200, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "gray";

  wall = createSprite(1500, 200, 50, 100);
  wall.shapeColor = "blue";
}

function draw() {
  background(0);  

  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    
    var deformation=0.5* weight* speed* speed/22509;

   if(deformation>80){
     car.shapeColor = "red";
   }
   if(deformation>180 && deformation<80){
     car.shapeColor = "yellow";
   }
   if(deformation<180){
     car.shapeColor = "green";
   }
  }

  drawSprites();
}