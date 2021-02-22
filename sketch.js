var canvas;
var music;
var box1, box2, box3, box4, mainBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    mainBox = createSprite(random(30,770), 50, 50, 50);
    mainBox.velocityY = -5;
    mainBox.velocityX = -3;

    box1 = createSprite(100,550,195,20);
    box1.shapeColor = "blue";

    box2 = createSprite(300,550,195,20);
    box2.shapeColor = "red";

    box3 = createSprite(500,550,195,20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700,550,195,20);
    box4.shapeColor = "green";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    mainBox.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(box1.isTouching(mainBox) && mainBox.bounceOff(box1)){
        mainBox.shapeColor = box1.shapeColor;
        music.play();
        
    }

    if(box2.isTouching(mainBox) && mainBox.bounceOff(box2)){
        mainBox.shapeColor = box2.shapeColor;
        
    }

    if(box3.isTouching(mainBox) && mainBox.bounceOff(box3)){
        mainBox.shapeColor = box3.shapeColor;
        mainBox.setVelocity(0,0);
        music.stop();
    }

    if(box4.isTouching(mainBox) && mainBox.bounceOff(box4)){
        mainBox.shapeColor = box4.shapeColor;
        
    }

    drawSprites();
}
