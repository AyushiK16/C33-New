const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, hulk1 ,hulk2;
var backgroundImg,platform;
var ironMan, slingshot;

var backgroundImage;

var score = 0;

var gameState = "onSling";
var shotsTaken = 0;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImage();


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    hulk1 = new Hulk(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    hulk2 = new Hulk(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    ironMan = new IronMan(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ironMan.body,{x:200, y:50});
}

function draw(){
    if(backgroundImage){
        background(backgroundImage);
    }
    fill("white");
    text("Score = " + score, width-300, 50 );
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    hulk1.display();
    hulk1.score();
    log1.display();

    box3.display();
    box4.display();
    hulk2.display();
    hulk2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    ironMan.display();
    platform.display();
    //log6.display();
    slingshot.display();    

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ironMan.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ironMan.body);
       gameState = 'started'
    }
}

async function getBackgroundImage(){
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var timeJSON = await time.json();
    var dateTime = timeJSON.datetime;
    var hour = dateTime.slice(11,13);
    //console.log(hour);
    if(hour>06 && hour <19){
        bg = "sprites/galaxyBg.jpg";
    }
    else{
        bg =  "sprites/bg2.jpg";
    }
    backgroundImage = loadImage(bg);
    console.log(bg);
}