
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1, rect2,rect3,ground,paper; 



function setup(){
    var canvas = createCanvas(1600, 700);
    engine = Engine.create();
    world = engine.world;
    
    
 rect1 = new Dustbin(1200,675);
   // rect2 = new Dustbin(1700,570,15,190);
    //rect3 = new Dustbin(1450,658,500,15);
    paper=new Paper(30,683,40);
    ground = new Ground(800,685,1600,15);
}

function draw(){
    background("pink");
    Engine.update(engine);
    rect1.display();
   // rect2.display();
   // rect3.display();
   
  //dustbin.display();
    ground.display();
    paper.display();
  
}

function keyPressed(){
 if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:107,y:-118});

 }
}

