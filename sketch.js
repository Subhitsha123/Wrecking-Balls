const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(3000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

  box_1  = new Box(430,575,30,40);
    box_2  = new Box(460,575,30,40);
    box_3  = new Box(490,575,30,40);
    box_4  = new Box(520,575,30,40);
    box_5  = new Box(550,575,30,40);
    box_6  = new Box(580,575,30,40);
    box_7  = new Box(610,575,30,40);
    box_8  = new Box(640,575,30,40);
    box_9  = new Box(670,575,30,40);

    box_10 = new Box(460,555,30,40);
    box_11 = new Box(490,555,30,40); 
    box_12 = new Box(520,555,30,40);
    box_13 = new Box(550,555,30,40);
    box_14 = new Box(580,555,30,40);
    box_15 = new Box(610,555,30,40);
    box_16 = new Box(640,555,30,40);

    box_17 = new Box(490,535,30,40);
    box_18 = new Box(520,535,30,40);
    box_19 = new Box(550,535,30,40);
    box_20 = new Box(580,535,30,40);
    box_21 = new Box(610,535,30,40);

    box_22 = new Box(520,515,30,40);
    box_23 = new Box(550,515,30,40);
    box_24 = new Box(580,515,30,40);
 
    box_25 = new Box(550,495,30,40);

    ball = new Ball(200,0,80,80);

  rope = new Rope(ball.body,{x:500,y:50});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  ground.display();
  fill(42,245,152);
  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();
  box_6.display();
  box_7.display();
  box_8.display();
  box_9.display();

  fill(34,228,172);
  box_10.display();
  box_11.display();
  box_12.display();
  box_13.display();
  box_14.display();
  box_15.display();
  box_16.display();

  fill(27,215,187)
  box_17.display();
  box_18.display();
  box_19.display();
  box_20.display();
  box_21.display();

  fill(20,201,203)
  box_22.display();
  box_23.display();
  box_24.display();

  fill(15,190,216);
  box_25.display();

  ball.display();

  rope.display();

}

function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    rope.fly();
  
}