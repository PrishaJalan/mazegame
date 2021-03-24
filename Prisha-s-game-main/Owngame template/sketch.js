var bg,dog,maze;
var gamestate,canvas,edges;

function preload(){
    bg=loadImage("bluish greenish bg.jpg")
    dog=loadImage("chihuahua-clipart-halloween-1.png")
}
function setup()
{
 canvas = createCanvas(1600,800)
 wallgroup=createGroup()

 wall1=createSprite(100,200,60,20)
 wall2=createSprite(80,356,20,650)
 wall3=createSprite(830,40,1330,18)
 wall4=createSprite(1500,356,20,650)
 wall5=createSprite(735,680,1330,18)
 wall6=createSprite(730,60,20,30)
 wall7=createSprite(600,60,20,30)
 wall9=createSprite(450,200,120,18)
 wall8=createSprite(400,180,20,280)
 wall10=createSprite(890,180,20,280)
 wall11=createSprite(960,311,150,18)
 wall12=createSprite(1040,285,20,70)
 wall13=createSprite(1020,250,60,20)
 wall14=createSprite(1000,90,20,100)
 wall15=createSprite(1150,149,20,200)
 wall16=createSprite(330,149,150,20)
 wall17=createSprite(1430,149,150,20)
 wall18=createSprite(700,149,150,20)
 wall19=createSprite(700,245,20,200)
 wall20=createSprite(250,400,150,20)
 wall21=createSprite(330,440,20,100)
 wall22=createSprite(280,480,80,20)
 wall23=createSprite(250,549,20,150)
 wall24=createSprite(550,409,20,100)
 wall25=createSprite(600,449,100,20)
 wall26=createSprite(650,449,20,200)
 wall27=createSprite(500,639,20,100)
 wall28=createSprite(800,589,20,200)
 wall29=createSprite(865,489,150,20)
 wall30=createSprite(950,579,20,200)
 wall31=createSprite(1400,479,200,20)
 wall32=createSprite(1200,579,20,200)
 ball=createSprite(130,40,20,20)

 wallgroup.add(wall1);
 wallgroup.add(wall2);
 wallgroup.add(wall3);
 wallgroup.add(wall4);
 wallgroup.add(wall5);
 wallgroup.add(wall6);
 wallgroup.add(wall7);
 wallgroup.add(wall8);
 wallgroup.add(wall9);
 wallgroup.add(wall10);
 wallgroup.add(wall11);
 wallgroup.add(wall12);
 wallgroup.add(wall13);
 wallgroup.add(wall14);
 wallgroup.add(wall15);
 wallgroup.add(wall16);
 wallgroup.add(wall17);
 wallgroup.add(wall18);
 wallgroup.add(wall19);
 wallgroup.add(wall20);
 wallgroup.add(wall21);
 wallgroup.add(wall22);
 wallgroup.add(wall23);
 wallgroup.add(wall24);
 wallgroup.add(wall25);
 wallgroup.add(wall26);
 wallgroup.add(wall27);
 wallgroup.add(wall28);
 wallgroup.add(wall29);
 wallgroup.add(wall30);
 wallgroup.add(wall31);
 wallgroup.add(wall32);


 ball.shapeColor=("lightpink")
 wall1.shapeColor=("lightgreen")
 wall2.shapeColor=("lightgreen")
 wall3.shapeColor=("lightgreen")
 wall4.shapeColor=("lightgreen")
 wall5.shapeColor=("lightgreen")
 wall6.shapeColor=("lightgreen")
 wall7.shapeColor=("lightgreen")
 wall8.shapeColor=("lightgreen")
 wall9.shapeColor=("lightgreen")
 wall10.shapeColor=("lightgreen")
 wall11.shapeColor=("lightgreen")
 wall12.shapeColor=("lightgreen")
 wall13.shapeColor=("lightgreen")
 wall14.shapeColor=("lightgreen")
 wall15.shapeColor=("lightgreen")
 wall16.shapeColor=("lightgreen")
 wall17.shapeColor=("lightgreen")
 wall18.shapeColor=("lightgreen")
 wall19.shapeColor=("lightgreen")
 wall20.shapeColor=("lightgreen")
wall21.shapeColor=("lightgreen")
 wall22.shapeColor=("lightgreen")
 wall23.shapeColor=("lightgreen")
 wall24.shapeColor=("lightgreen")
 wall25.shapeColor=("lightgreen")
 wall26.shapeColor=("lightgreen")
 wall27.shapeColor=("lightgreen")
 wall32.shapeColor=("lightgreen")
 wall28.shapeColor=("lightgreen")
 wall29.shapeColor=("lightgreen")
 wall30.shapeColor=("lightgreen")
 wall31.shapeColor=("lightgreen")
}

function draw(){
    background(0);
    edges=createEdgeSprites();
    if(keyDown(UP_ARROW)) {
        ball.x=ball.x+ 0;
        ball.y= ball.y-2;
      }
      
      if(keyDown("down")) {
        ball.x =ball.x+ 0;
        ball.y=ball.y+ 2;
      }
       
      if(keyDown (RIGHT_ARROW)) {
        ball.velocityX = 2;
        ball.velocityY = 0;
      }
      
      if(keyDown("left")) {
        ball.velocityX =-2 ;
        ball.velocityY = 0;
}

ball.bounceOff (wallgroup)
ball.bounceOff(edges)
    drawSprites();

}