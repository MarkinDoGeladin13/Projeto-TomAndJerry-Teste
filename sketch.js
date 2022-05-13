var cat;
var mouse;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(10,50,50,50);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;
    mouse = createSprite(20,50,200,200);
    mouse.addAnimation("ratoProvocando", mouseImg2);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.changeAnimation("gatoAndando", catImg2);
    }

}
