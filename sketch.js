
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,obObject3,bobObject4,bobObject5;
var roof;
//var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,100,width,20);

	bobObject1=new bob(160,600,90);
	bobObject2=new bob(250,600,90);
	bobObject3=new bob(340,600,90);
	bobObject4=new bob(430,600,90);
	bobObject5=new bob(520,600,90);

	//rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  //rope1.display();

 
}



