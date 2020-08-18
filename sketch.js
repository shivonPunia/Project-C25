
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	 dustbinImage = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	//box1=createSprite (600, 600, 250, 20)
	//box2=createSprite(480, 550, 20, 130)
	//box3=createSprite(720, 550, 20, 130)
	//paper=createSprite(100, 600, 30, 30)
	//ground=createSprite(0,620,1600,20)
	//paper.collide(ground);
	//paper.collide(box1)

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(600,600,250,20)
	box2 = new Box(480,550,20,130)
	box3 = new Box(720,550,20,130)
	ground = new Box(400,630,800,20)
	paper = new Paper(100,600,50)

	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 //box1.display()
 //box2.display()
 //box3.display()
 image(dustbinImage,600,490,130,130)
 ground.display()
 paper.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:160,y:-160});
	}
}


