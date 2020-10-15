var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, plantGroup;
var ghost, ghostImg;
var invbl,invblGroup;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  plantGroup = new Group();
  invblGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.4;
  ghost.addImage("ghost", ghostImg);
}
function draw(){
  background("lightblue");
  
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    
    ghost.velocityY = ghost.velocityY + 0.8
    
    if(tower.y > 400){
      tower.y = 300
    }
  spawndoors();
  if (plantGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if (invblGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  gameState="end";
  } 
    drawSprites();
}
  if (gameState==="end"){
    fill("black  ")
    textSize(30);
    text("Game Over",250,250);
  }
  }
function spawndoors(){
  if (frameCount%80===0){
    var door=createSprite(200,50);
    var plant=createSprite(200,100);
    var invbl=createSprite(200,100);
    invbl.width=plant.width;
    invbl.height=3;
  door.x=Math.round(random(120,300))
  plant.x=door.x;
  invbl.x=door.x;  
  door.addImage(doorImg);
  plant.addImage(climberImg);
  door.velocityY=4;
  plant.velocityY=4;
  invbl.velocityY=4;  
  ghost.depth=door.depth;
  ghost.depth+=1;  
  door.lifetime=150;  
  plant.lifetime=150;  
  invbl.lifetime=150;  
  doorsGroup.add(door);
  plantGroup.add(plant);
  invblGroup.add(invbl);  
  }
  
}