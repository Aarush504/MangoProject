const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;
var bird2, bird3, bird4,bird5;
var slingShot1, slingShot2, slingShot3, slingShot4, slingShot5;
var ground; //groundy;
var pig3;
var mango1, mn2, mn3,mn4, mnImage;
var boy, boyimg;
var boy_image;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    //groundy = loadImage("sprites/tree.png");
    mnImage= loadImage("sprites/mango.png");
   // boyimg= loadImage("sprites/boy.png");
   boy_image= loadImage("sprites/boy.png");
}

function setup(){
    var canvas = createCanvas(1400,1200);
    engine = Engine.create();
    world = engine.world;
    boy= new Boy(100,1080,50,50);
   // boy.addImage(boy_image);
   // boy.addImage("boy",boyimg);
    pig3 = new Bird(350, 1190);
   // box1 = new Box(300,1190,70,70);
    ground = new Ground(650,1200,1400,20);
    
    //mango1= createSprite(500,100,50,50);
   // mango1= addImage(mnImage);
    //ground = addImage("tree",groundy);
    /*//platform = new Ground(150, 305, 300, 170);

    //
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    bird = new Pig(700,900,50,50);
    bird2 = new Pig(600,800,50,50);
    bird3 = new Pig(700,870,50,50);
    bird4 = new Pig(800,900,50,50);
    bird5 = new Pig(790,850,50,50);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(pig3.body, { x: 200, y: 1080});
    /*slingShot1 = new Slingshot(bird2.body, { x: 1040, y: 500});
    slingShot2 = new Slingshot(bird3.body, { x: 1020, y: 700});
    slingShot3 = new Slingshot(bird4.body, { x: 700, y: 690});
    slingShot4 = new Slingshot(bird5.body, { x: 460, y: 900});
    slingShot5 = new Slingshot(bird.body, { x: 500, y: 800});*/
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    //boy.display();
   // boyimg.display();
   /* if(bird.body.x- pig3.body.x < (pig3.body.width+ bird.body.width)/2){
        Matter.Body.setStatic(bird.body, false);
    }
    if(pig3.body.x- bird2.body.x < (pig3.body.width+ bird2.body.width)/2){
        Matter.Body.setStatic(bird2.body, false);
    }
    if(pig3.body.x- bird3.body.x < (pig3.body.width+ bird3.body.width)/2){
        Matter.Body.setStatic(bird3.body, false);
    }
    if(pig3.body.x- bird4.body.x < (pig3.body.width+ bird4.body.width)/2){
        Matter.Body.setStatic(bird4.body, false);
    }

    if(bird5.body.x- pig3.body.x < (pig3.body.width+ bird5.body.width)/2){
        Matter.Body.setStatic(bird5.body, false);
    }*/

   // box1.display();
    pig3.display();
   // mango1.display();
    //slingShot5.display();

    
  /*  
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    log4.display();
    log5.display();*/

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
   bird5.display();
    //platform.display();
   // log6.display();
    slingShot.display(); 
   /* slingShot1.display(); 
    slingShot2.display(); 
    slingShot3.display(); 
    slingShot4.display();   */ 
   detectcollison(pig3, bird);
   detectcollison(pig3, bird2);
   detectcollison(pig3, bird3);
   detectcollison(pig3, bird4);
   detectcollison(pig3, bird5);
}

function mouseDragged() {

Matter.Body.setPosition(pig3.body,{x: mouseX, y: mouseY});

}

function mouseReleased() {

slingShot.fly();

}

function keyPressed(){

if(keyCode=== 32){
    //Matter.Body.setPosition(pig3.body, {x:235, y:900})
    slingShot.attach(pig3.body);
}

}

function detectcollison(lstone, lmango) {

a= lstone.body.position;
b= lmango.body.position;


var distance=dist(a.x, a.y, b.x, b.y);
if(distance<lstone.r+lmango.r){
    Matter.Body.setStatic(lmango.body,false);
}
}
