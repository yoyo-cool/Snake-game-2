var grant
var score = 0
var gameState="start"
function preload(){
  apple=loadImage("Apple.png")
  banana=loadImage("banana.png")
  snakeImg=loadImage("snake.png")
}
function setup() {
  createCanvas(800,800);
  foodGroup=new Group()
  lineGroup=new Group()
  snake1=new snake()
  food1=new food(random(100,700),random(100,700))
  redLine1=new redLine(400,20,800,40)
  redLine2=new redLine(400,780,800,40)
  redLine3=new redLine(20,400,40,800)
  redLine4=new redLine(780,400,40,800)
  foodGroup.add(food1.body)
  lineGroup.add(redLine1.body)
  lineGroup.add(redLine2.body)
  lineGroup.add(redLine3.body)
  lineGroup.add(redLine4.body)

}

function draw() {
  background("black");  
  drawSprites();
  //snake1.body.x=mouseX
  //snake1.body.y=mouseY
  snake1.body.overlap(foodGroup,eaten)
  //snake1.body.pointTo(food1.body.x,food1.body.y)
  snake1.body.overlap(lineGroup, die)
  if(gameState==="die"){
    textSize(30)
    text("Game Over! Your score is "+score,250,400)
  }
  keyPressed()
}

function eaten(snake1,food1){
  food1.destroy()
  food1=new food(random(100,700),random(100,700))
  foodGroup.add(food1.body)
  score=score+1
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    snake1.body.x=snake1.body.x+10
    snake1.body.rotation=-90
  } else if(keyCode===LEFT_ARROW){
    snake1.body.x=snake1.body.x-10
    snake1.body.rotation=90
  }else if(keyCode===UP_ARROW){
    snake1.body.y=snake1.body.y-10
    snake1.body.rotation=180
  }else if(keyCode===DOWN_ARROW){
    snake1.body.y=snake1.body.y+10
    snake1.body.rotation=0
  }
}
function die(snake1,foodGroup){
  snake1.destroy()
  foodGroup.destroy()
  gameState="die"
}