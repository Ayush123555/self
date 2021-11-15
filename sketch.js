const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, player, bg_img, player_img
var ball1, bas;
var slingshot1;
var score=0
var tester
function preload(){
   bg_img=loadImage("images/images.jpg")
   
      }
function setup() {
  createCanvas(1000,550);
  engine = Engine.create();
  world = engine.world;
  ball1 = new Ball(350,300,1,1)
  player= new Player(350,400,450,300)
  slingshot1=new Slingshot(ball1.body,{x:350,y:400})
  bas=new Basket(750,500,200,200)
}
  
function draw() {
  background(bg_img);
  Engine.update(engine);
  stroke("white")
  strokeWeight(5)
  textSize(50)
  text("NBA Basketball Championship",250,50)  

  ball1.display()
  player.display()  
  bas.display()
  slingshot1.display()
  textSize(35)
  stroke("blue")
  strokeWeight(3)
  text("Score: "+score,75,200)

  if(keyCode == 32){
    ball1.velocityY=-4
    ball1.velocityX=-5
  }
   createEdgeSprites()
   
    ball1.velocityX=ball1.velocityX-1.5
    ball1.velocityy=ball1.velocityY-1.5

 
//console.log(ball1.velocityX)
   drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot1.fly()

}
function keyPressed(){
if(keyCode === 32){
   slingshot1.attach(ball1.body);
}
}