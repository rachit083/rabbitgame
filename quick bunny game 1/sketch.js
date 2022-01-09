var player,carrot,brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,edges




function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  player= createSprite(40,550,20,20);
  player.shapeColor="white"
  
  

  carrot= createSprite(550,50,40,40)
  carrot.shapeColor="pink"

  brick1=createSprite(60,300,120,20)
  brick2=createSprite(220,300,120,20)
  brick3=createSprite(390,300,120,20)
  brick4=createSprite(550,300,110,20)
  brick5=createSprite(120,240,120,20)
  brick6=createSprite(300,240,120,20)
  brick7=createSprite(470,240,120,20)
  brick8=createSprite(640,240,35,20)

  brick1.shapeColor="yellow"
  brick2.shapeColor="yellow"
  brick3.shapeColor="yellow"
  brick4.shapeColor="yellow"
  brick5.shapeColor="yellow"
  brick6.shapeColor="yellow"
  brick7.shapeColor="yellow"
  brick8.shapeColor="yellow"



}

function draw() {
  background("green"); 
  
  edges.bounceOff(edges[0]);
  edges.bounceOff(edges[1]);
  edges.bounceOff(edges[2]); 
  edges.bounceOff(edges[3]); 
  brick1.bounceOff(edges[1]);
  brick1.bounceOff(edges[0]);
  brick2.bounceOff(edges[0]);
  brick2.bounceOff(edges[0]);
  brick3.bounceOff(edges[1]);
  brick3.bounceOff(edges[0]);
  brick4.bounceOff(edges[1]);
  brick4.bounceOff(edges[0]);
  brick5.bounceOff(edges[1]);
  brick5.bounceOff(edges[0]);
  brick6.bounceOff(edges[1]);
  brick6.bounceOff(edges[0]);
  brick7.bounceOff(edges[1]);
  brick7.bounceOff(edges[0]);
  brick8.bounceOff(edges[1]);
  brick8.bounceOff(edges[0]);



  
  if(keyDown("up")){
    player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}  
if(keyDown("right")){
  player.x=player.x+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}



fill("red")
textSize(30);
if(player.isTouching(carrot)){
  text("YOU WIN",200,200);
}
if(player.isTouching(brick1)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick2)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick3)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick4)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick5)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick6)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick7)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}
if(player.isTouching(brick8)){
  text("YOU LOSE",200,200);
  player.x=40;
  player.y=550;
}


  drawSprites()
}


