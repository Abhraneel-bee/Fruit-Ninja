var PLAY = 1;
var END = 0;
var gameState = 1;

var sword,swordImage;

var fruitGroup,fruit,fruit1,fruit2,fruit3,fruit4;

var enemyGroup,monster,monsterImage;

var gameOverImage;

var score;

function preload(){
 swordImage = loadImage("sword.png");
  
 fruit1 = loadImage("fruit1.png");
 fruit2 = loadImage("fruit2.png");
 fruit3 = loadImage("fruit3.png");
 fruit4 = loadImage("fruit4.png");
  
 monsterImage = loadAnimation("alien1.png","alien2.png");
  gameOverImage = loadImage("gameover.png");
  
  sound = loadSound("knifeSwooshSound.mp3");
  sound1 = loadSound("gameover.mp3");
 
}

function setup(){
  createCanvas(400,400);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.5;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  score = 0;
}

function draw(){
 background(180);
  
 
 
  if(gameState === PLAY){
  
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  if(fruitGroup.isTouching(sword)){
    
    fruitGroup.destroyEach();
    sound.play();
    score = score+2;
  }
  
  fruits();
  Enemy();
  }else if(enemyGroup.isTouching(sword)){
    
    gameState = END;
    sound1.play();
    
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
    sword.addImage(gameoverImage);
    sword.x = 200;
    sword.y = 200;
  }
  
  
 drawSprites();
  
  text("Score: "+ score, 300,30);
}

function fruits(){
  
  if(World.frameCount%80 === 0){
    
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    
    r= Math.round(random(1,4));
   if(r == 1){
     
     fruit.addImage(fruit1);
   }else if(r== 2){
     
     fruit.addImage(fruit2);
   }else if(r == 3){
     
     fruit.addImage(fruit3);
   }else if(r==4){
     
     fruit.addImage(fruit4);
   }
    
    fruit.y = Math.round(random(50,340));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
  }
}
  
function Enemy(){
  if(World.frameCount%200 === 0){
    monster = createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterImage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.lifetime = 50;
    
    enemyGroup.add(monster);
    
  }
  
}

  
  

