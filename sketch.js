var bg
var tom 
var jerry 
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomImage1=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3=loadAnimation("images/cat4.png");

    jerryImage1=loadAnimation("images/mouse1.png");
    jerryImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here 
    tom=createSprite(870,600)
tom.addAnimation("Tom1",tomImage1)
tom.scale=0.2


    jerry=createSprite(200,600)
    jerry.addAnimation("Jerry1",jerryImage1);
    jerry.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("Tom4",tomImage3)
        tom.x=300
        tom.scale=0.2
        tom.changeAnimation("Tom4")

        jerry.addAnimation("Jerryfinal",jerryImage3)
        jerry.scale=0.2
        jerry.changeAnimation("Jerryfinal")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("Tom2",tomImage2)
tom.changeAnimation("Tom2")

jerry.addAnimation("Jerry2",jerryImage2)
jerry.frameDelay=25
jerry.changeAnimation("Jerry2")
}

}
