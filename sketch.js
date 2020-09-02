
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinObj = new dustbin(1200,650,150,120);
paperObj =  new paper(200,450,20);
groundObject=new ground(600,670,1600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObj.display();
  
  //drawSprites();
  
}


function KeyPressed(){
	if (KeyCode === Up_Arrow){

	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
 }
