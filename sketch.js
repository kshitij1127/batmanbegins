var drops = [];
var batman;
var ground;
var batmanImg;
var lightning;
var lightning2;
var lightning3;
var lightning4;
var lightningImg;
var lightning2_Img;
var lightning3_Img;
var lightning4_Img;

function preload(){
 batmanImg = loadImage("images/walking_1.png");
 lightningImg = loadImage("images/1.png");
 lightning2_Img = loadImage("images/2.png");
 lightning3_Img = loadImage("images/3.png");
 lightning4_Img = loadImage("images/4.png");
}


function setup() {
  createCanvas(640, 600);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }

  fill(160,32,240)
  ground = createSprite(320,590,640,30)
  batman = createSprite(ground.x ,ground.y -150,50,50)
  batman.addImage(batmanImg);
  batman.scale = 0.4;

  lightning = createSprite(random(width),random(height/4),10,100);
  lightning.addImage(lightningImg);
  lightning.scale = 0.5;

  lightning2 = createSprite(random(width),random(height/4),10,100);
  lightning2.addImage(lightning2_Img);
  lightning2.scale = 0.5;

  lightning3 = createSprite(random(width),random(height/4),10,100);
  lightning3.addImage(lightning3_Img);
  lightning3.scale = 0.5;

  lightning3 = createSprite(random(width),random(height/4),10,100);
  lightning3.addImage(lightning4_Img);
  lightning3.scale = 0.5;

}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();

  }


  drawSprites();
}

  
