const Engine = Matter .Engine
const World = Matter .World
const Bodies = Matter .Bodies

var engine,world,Box1;

function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;
  
 
  
  Box1 = new Box(700,320,70,70);
  Box2 = new Box(920,320,70,70);
  ground1 = new ground(800,height,1200,20);
  pig1 = new pig(200,200);
  log1 = new log(200,200,30,PI/2);
 



}

function draw() {
  background("purple");  
  
  Engine.update(engine);
  
  Box1.display();
  ground1.display();
  pig1.display();
  log1.display();
  Box2.display();
}