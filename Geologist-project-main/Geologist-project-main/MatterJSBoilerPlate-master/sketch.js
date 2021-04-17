
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground= new Ground(300,680,2500,20);
   
  
   Hammer=new Hammer(100,320,70,70);
   stone=new Stone(700,320,70,70);
   rubber=new Rubber(700,350,20,20);
 
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
Hammer.display();
stone.display();
rubber.display();
ground.display();

  drawSprites();
 
}



