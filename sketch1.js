const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground,ball,rope;
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
 
    ground=new Ground(windowWidth/2,windowHeight-50,windowWidth,70)
    box1=new Box(windowWidth-1800,windowHeight-60,200,200)
    box2=new Box(windowWidth-1700,windowHeight-60,200,200)
    box3=new Box(windowWidth-1600,windowHeight-60,200,200)
    box4=new Box(windowWidth-1800,windowHeight-160,200,200)
    box5=new Box(windowWidth-1700,windowHeight-160,200,200)
    box6=new Box(windowWidth-1600,windowHeight-160,200,200)
    box7=new Box(windowWidth-1800,windowHeight-260,200,200)
    box8=new Box(windowWidth-1700,windowHeight-260,200,200)
    box9=new Box(windowWidth-1600,windowHeight-260,200,200)
    box10=new Box(windowWidth-1800,windowHeight-360,200,200)
    box11=new Box(windowWidth-1700,windowHeight-360,200,200)
    box12=new Box(windowWidth-1600,windowHeight-360,200,200)
    box13=new Box(windowWidth-1800,windowHeight-460,200,200)
    box14=new Box(windowWidth-1700,windowHeight-460,200,200)
    box15=new Box(windowWidth-1600,windowHeight-460,200,200)
    box16=new Box(windowWidth-1790,windowHeight-560,200,200)
    box17=new Box(windowWidth-1700,windowHeight-560,200,200)
    box18=new Box(windowWidth-1600,windowHeight-560,200,200)
   box19=new Box(windowWidth-1780,windowHeight-660,200,200)
   box20=new Box(windowWidth-1600,windowHeight-660,200,200)
   box21=new Box(windowWidth-1700,windowHeight-760,200,200)

  ball=new Ball(windowWidth-3000,windowHeight-960,400,400)
  rope= new Rope(ball.body,{x:windowWidth-3000,y:windowHeight-2200})
}

function draw(){
    background(255);
    Engine.update(engine);
   ground.display();
   box1.display();      
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   ball.display();
   rope.display();
   
}


function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }