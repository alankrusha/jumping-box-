var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box1;
var edges;
function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(700,600);
    surface1 = createSprite(100, 550, 150, 20);
    surface1.shapeColor = "red";
    surface2 = createSprite(270, 550, 150, 20);
    surface2.shapeColor = "green";
    surface3 = createSprite(440, 550, 150, 20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(610, 550, 150, 20);
    surface4.shapeColor = "yellow";
    
    box1 = createSprite(Math.round(random(20, 680)), 30, 20, 20);
    box1.shapeColor = "purple";
    box1.velocityX = 5;
    box1.velocityY = 5;

    
    //create box sprite and give velocity
    
}
function draw() {
    background("black");
    createEdgeSprites();
    
   

    if(surface1.isTouching(box1) && box1.bounceOff(surface1)){
        box1.shapeColor = "red";
        music.play();

    }

    if(surface3.isTouching(box1) && box1.bounceOff(surface3)){
        box1.shapeColor = "blue";
    }

    if(surface4.isTouching(box1) && box1.bounceOff(surface4)){
        box1.shapeColor = "yellow";
    }

    if(surface2.isTouching(box1) && box1.bounceOff(surface2)){
        box1.shapeColor = "green";
        box1.velocityX = 0;
        box1.velocityY = 0;
        music.stop();
    }
    edges = createEdgeSprites();
    box1.bounceOff(edges);

    drawSprites();
}
