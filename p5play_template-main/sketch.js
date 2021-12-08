var red_button
var blue_button
function setup() {

  createCanvas(400,400);
  text("red",100,100)
  
  red_button=createSprite(100,100,40,20)
  red_button.shapeColor="red"
  blue_button=createSprite(300,100,40,20)
  blue_button.shapeColor="blue"
}

function draw() 
{
  background("");
  if(mousePressedOver(red_button)){
    background("red")
  }
  if(mousePressedOver(blue_button)){
    background("blue")
  }
  
  drawSprites()
}




