var loonb,loonblue;
var loonp,loonpink; 
var loong,loongreen; 
var loonr,loonred; 
var bow,bowarrow,bowmove; 
var arrow,arrowbow; 
var SCNO = 0;
var losel,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30;
var backpic,backpicture;
var arrlaunchSound,popSound,scorewin;

function preload() {

 loonblue=loadAnimation("blue_balloon0.png");
 loonpink=loadAnimation("pink_balloon0.png");
 loongreen=loadAnimation("green_balloon0.png");
 loonred=loadAnimation("red_balloon0.png");
 bowarrow=loadAnimation("bow.png");
 arrowbow=loadAnimation("arr1.png");
 arrowbowex=loadAnimation("arr.png");
 bowmove=loadAnimation("bow1.png");
 backpicture=loadImage("background0.png");
 arrlaunchSound=loadSound("zapsplat_warfare_bow_arrow_release_15645.mp3");
 popSound=loadSound("zapsplat_foley_balloon_pop_20568.mp3");
 scorewin=loadSound("scorup.mp3");
  
}

function setup() {
  
  createCanvas(400,510);
  
  backpic = createSprite(200,200);
  backpic.addImage("attractive",backpicture);
  backpic.scale = 2.5;
  
  losel = createSprite(200,427.9,390,2);
  losel.visible = false;
  
  l1 = createSprite(6.3,430,12,12);
  l2 = createSprite(20.3,430,12,12);
  l3 = createSprite(33.3,430,12,12);
  l4 = createSprite(46.3,430,12,12);
  l5 = createSprite(60.3,430,12,12);
  l6 = createSprite(73.3,430,12,12);
  l7 = createSprite(86.3,430,12,12);
  l8 = createSprite(100.3,430,12,12);
  l9 = createSprite(113.3,430,12,12);
  l10 = createSprite(126.3,430,12,12);
  l11 = createSprite(140.3,430,12,12);
  l12 = createSprite(153.3,430,12,12);
  l13 = createSprite(166.3,430,12,12);
  l14 = createSprite(180.3,430,12,12);
  l15 = createSprite(193.3,430,12,12);
  l16 = createSprite(206.3,430,12,12);
  l17 = createSprite(220.3,430,12,12);
  l18 = createSprite(233.3,430,12,12);
  l19 = createSprite(246.3,430,12,12);
  l20 = createSprite(260.3,430,12,12);
  l21 = createSprite(273.3,430,12,12);
  l22 = createSprite(286.3,430,12,12);
  l23 = createSprite(300.3,430,12,12);
  l24 = createSprite(313.3,430,12,12);
  l25 = createSprite(326.3,430,12,12);
  l26 = createSprite(340.3,430,12,12);
  l27 = createSprite(353.3,430,12,12);
  l28 = createSprite(366.3,430,12,12);
  l29 = createSprite(380.3,430,12,12);
  l30 = createSprite(393.3,430,12,12);
  
  arrow = createSprite(200,470);
  arrow.addAnimation("shooting",arrowbow);
  arrow.scale = 0.13;
  
  bow = createSprite(200,470);
  bow.addAnimation("shooter",bowarrow);
  bow.scale = 0.11;

  redLs = new Group();
  blueLs = new Group();
  pinkLs = new Group();
  greenLs = new Group();
  
}

function draw() {
    
l1.shapeColor = "#000000";
l2.shapeColor = "#000000";
l3.shapeColor = "#000000";
l4.shapeColor = "#000000";
l5.shapeColor = "#000000";
l6.shapeColor = "#000000";
l7.shapeColor = "#000000";
l8.shapeColor = "#000000";
l9.shapeColor = "#000000";
l10.shapeColor = "#000000";
l11.shapeColor = "#000000";
l12.shapeColor = "#000000";
l13.shapeColor = "#000000";
l14.shapeColor = "#000000";
l15.shapeColor = "#000000";
l16.shapeColor = "#000000";
l17.shapeColor = "#000000";
l18.shapeColor = "#000000";
l19.shapeColor = "#000000";
l20.shapeColor = "#000000";
l21.shapeColor = "#000000";
l22.shapeColor = "#000000";
l23.shapeColor = "#000000";
l24.shapeColor = "#000000";
l25.shapeColor = "#000000";
l26.shapeColor = "#000000";
l27.shapeColor = "#000000";
l28.shapeColor = "#000000";
l29.shapeColor = "#000000";
l30.shapeColor = "#000000";

    if(redLs.isTouching(losel))
    {
      l1.tint = "#ff0000";
      l2.tint = "#ff0000";
      l3.tint = "#ff0000";
      l4.tint = "#ff0000";
      l5.tint = "#ff0000";
      l6.tint = "#ff0000";
      l7.tint = "#ff0000";
      l8.tint = "#ff0000";
      l9.tint = "#ff0000";
      l10.tint = "#ff0000";
      l11.tint = "#ff0000";
      l12.tint = "#ff0000";
      l13.tint = "#ff0000";
      l14.tint = "#ff0000";
      l15.tint = "#ff0000";
      l16.tint = "#ff0000";
      l17.tint = "#ff0000";
      l18.tint = "#ff0000";
      l19.tint = "#ff0000";
      l20.tint = "#ff0000";
      l21.tint = "#ff0000";
      l22.tint = "#ff0000";
      l23.tint = "#ff0000";
      l24.tint = "#ff0000";
      l25.tint = "#ff0000";
      l26.tint = "#ff0000";
      l27.tint = "#ff0000";
      l28.tint = "#ff0000";
      l29.tint = "#ff0000";
      l30.tint = "#ff0000";
      
      redLs.destroyEach();
      
      popSound.play();
      
      SCNO = SCNO - 5;
    }
    
     if(greenLs.isTouching(losel))
    {
      l1.tint = "#52f624";
      l2.tint = "#52f624";
      l3.tint = "#52f624";
      l4.tint = "#52f624";
      l5.tint = "#52f624";
      l6.tint = "#52f624";
      l7.tint = "#52f624";
      l8.tint = "#52f624";
      l9.tint = "#52f624";
      l10.tint = "#52f624";
      l11.tint = "#52f624";
      l12.tint = "#52f624";
      l13.tint = "#52f624";
      l14.tint = "#52f624";
      l15.tint = "#52f624";
      l16.tint = "#52f624";
      l17.tint = "#52f624";
      l18.tint = "#52f624";
      l19.tint = "#52f624";
      l20.tint = "#52f624";
      l21.tint = "#52f624";
      l22.tint = "#52f624";
      l23.tint = "#52f624";
      l24.tint = "#52f624";
      l25.tint = "#52f624";
      l26.tint = "#52f624";
      l27.tint = "#52f624";
      l28.tint = "#52f624";
      l29.tint = "#52f624";
      l30.tint = "#52f624";
      
      greenLs.destroyEach();
      
      popSound.play();
      
      SCNO = SCNO - 5;
    }
    
    if(blueLs.isTouching(losel))
    {
      l1.tint = "#1500d6";
      l2.tint = "#1500d6";
      l3.tint = "#1500d6";
      l4.tint = "#1500d6";
      l5.tint = "#1500d6";
      l6.tint = "#1500d6";
      l7.tint = "#1500d6";
      l8.tint = "#1500d6";
      l9.tint = "#1500d6";
      l10.tint = "#1500d6";
      l11.tint = "#1500d6";
      l12.tint = "#1500d6";
      l13.tint = "#1500d6";
      l14.tint = "#1500d6";
      l15.tint = "#1500d6";
      l16.tint = "#1500d6";
      l17.tint = "#1500d6";
      l18.tint = "#1500d6";
      l19.tint = "#1500d6";
      l20.tint = "#1500d6";
      l21.tint = "#1500d6";
      l22.tint = "#1500d6";
      l23.tint = "#1500d6";
      l24.tint = "#1500d6";
      l25.tint = "#1500d6";
      l26.tint = "#1500d6";
      l27.tint = "#1500d6";
      l28.tint = "#1500d6";
      l29.tint = "#1500d6";
      l30.tint = "#1500d6";
      
      blueLs.destroyEach();
      
      popSound.play();
      
      SCNO = SCNO - 5;
    }
    
    
  if(pinkLs.isTouching(losel))
    {
      l1.tint = "#ff5ade";
      l2.tint = "#ff5ade";
      l3.tint = "#ff5ade";
      l4.tint = "#ff5ade";
      l5.tint = "#ff5ade";
      l6.tint = "#ff5ade";
      l7.tint = "#ff5ade";
      l8.tint = "#ff5ade";
      l9.tint = "#ff5ade";
      l10.tint = "#ff5ade";
      l11.tint = "#ff5ade";
      l12.tint = "#ff5ade";
      l13.tint = "#ff5ade";
      l14.tint = "#ff5ade";
      l15.tint = "#ff5ade";
      l16.tint = "#ff5ade";
      l17.tint = "#ff5ade";
      l18.tint = "#ff5ade";
      l19.tint = "#ff5ade";
      l20.tint = "#ff5ade";
      l21.tint = "#ff5ade";
      l22.tint = "#ff5ade";
      l23.tint = "#ff5ade";
      l24.tint = "#ff5ade";
      l25.tint = "#ff5ade";
      l26.tint = "#ff5ade";
      l27.tint = "#ff5ade";
      l28.tint = "#ff5ade";
      l29.tint = "#ff5ade";
      l30.tint = "#ff5ade";
      
      pinkLs.destroyEach();
      
      popSound.play();
      
      SCNO = SCNO - 5;
   
  }

  l1.visible = true;
  l2.visible = true;
  l3.visible = true;
  l4.visible = true;
  l5.visible = true;
  l6.visible = true;
  l7.visible = true;
  l8.visible = true;
  l9.visible = true;
  l10.visible = true;
  l11.visible = true;
  l12.visible = true;
  l13.visible = true;
  l14.visible = true;
  l15.visible = true;
  l16.visible = true;
  l17.visible = true;
  l18.visible = true;
  l19.visible = true;
  l20.visible = true;
  l21.visible = true;
  l22.visible = true;
  l23.visible = true;
  l24.visible = true;
  l25.visible = true;
  l26.visible = true;
  l27.visible = true;
  l28.visible = true;
  l29.visible = true;
  l30.visible = true;
    
    if(arrow.isTouching(l1))
  {
    l1.visible = false;
  }
  
if(arrow.isTouching(l2))
  {
    l2.visible = false;
  }
  
if(arrow.isTouching(l3))
  {
    l3.visible = false;
  }
  
if(arrow.isTouching(l4))
  {
    l4.visible = false;
  }
  
if(arrow.isTouching(l5))
  {
    l5.visible = false;
  }
  
  if(arrow.isTouching(l6))
  {
    l6.visible = false;
  }
  
  if(arrow.isTouching(l7))
  {
    l7.visible = false;
  }
  
  if(arrow.isTouching(l8))
  {
    l8.visible = false;
  }
  
  if(arrow.isTouching(l9))
  {
    l9.visible = false;
  }
  
  if(arrow.isTouching(l10))
  {
    l10.visible = false;
  }
  
  if(arrow.isTouching(l11))
  {
    l11.visible = false;
  }
  
  if(arrow.isTouching(l12))
  {
    l12.visible = false;
  }
  
  if(arrow.isTouching(l13))
  {
    l13.visible = false;
  }
  
  if(arrow.isTouching(l14))
  {
    l14.visible = false;
  }
  
  if(arrow.isTouching(l15))
  {
    l15.visible = false;
  }
  
  if(arrow.isTouching(l16))
  {
    l16.visible = false;
  }
  
  if(arrow.isTouching(l17))
  {
    l17.visible = false;
  }

  if(arrow.isTouching(l18))
  {
    l18.visible = false;
  }
  
  if(arrow.isTouching(l19))
  {
    l19.visible = false;
  }
  
  if(arrow.isTouching(l20))
  {
    l20.visible = false;
  }
  
  if(arrow.isTouching(l21))
  {
    l21.visible = false;
  }
  
  if(arrow.isTouching(l22))
  {
    l22.visible = false;
  }
  
  if(arrow.isTouching(l23))
  {
    l23.visible = false;
  }
  
  if(arrow.isTouching(l24))
  {
    l24.visible = false;
  }
  
  if(arrow.isTouching(l25))
  {
    l25.visible = false;
  }
  
  if(arrow.isTouching(l26))
  {
    l26.visible = false;
  }
  
  if(arrow.isTouching(l27))
  {
    l27.visible = false;
  }
  
  if(arrow.isTouching(l28))
  {
    l28.visible = false;
  }
  
  if(arrow.isTouching(l29))
  {
    l29.visible = false;
  }
  
  if(arrow.isTouching(l30))
  {
    l30.visible = false;
  }
  
   if(arrow.y > 410)
{
  arrow.x = bow.x;
}

  redDistruction();
  
  blueDistruction();
  
  greenDistruction();
  
  pinkDistruction();
  
var rand = Math.round(random(1,4));  
  
  if(World.frameCount % 40 === 0)
  {
            
   if(rand===1){
      redloon();
     } else if(rand===4){     
      blueloon();
     }else if(rand===2){
      greenloon();
     }else if(rand===3){
      pinkloon();
     } 
                
  } 
    
    if(keyWentDown(32))
{
  arrow.velocityY = -15;
  bow.addAnimation("shooter",bowmove);
  arrlaunchSound.play();
}
    
  backpic.velocityY = 2;
  
  if(backpic.y > 500)
{
 backpic.y = backpic.height/2;
}
  
    if(keyWentUp(32))
    {
      bow.addAnimation("shooter",bowarrow);
    }
  
  if(arrow.y < 0)
    {
      arrow.x = bow.x;
      arrow.y = 470;
      arrow.velocityY = 0; 
      SCNO = SCNO - 5;
    }
    
    bow.x = World.mouseX;
    
  drawSprites();

  if(SCNO === 50)
  {
    fill(rgb((Math.round(random(0,255))),(Math.round(random(0,255))),(Math.round(random(0,255)))))
    textSize(50);
    text("SCORE UP",70,200);
    noFill();
    
    redLs.setVelocityEach(0,0);
    blueLs.setVelocityEach(0,0);
    greenLs.setVelocityEach(0,0);
    pinkLs.setVelocityEach(0,0);
    bow.destroy();
    arrow.addAnimation("shooting",arrowbowex);
    arrow.x = 350;
    arrow.y = 200;
    scorewin.play();
    
  }else if(SCNO === -20||SCNO < -20)
    {
      fill(rgb((Math.round(random(0,255))),(Math.round(random(0,255))),(Math.round(random(0,255)))))
      textSize(50);
      text("SCORE DOWN",10,200);
      noFill();
      
      redLs.setVelocityEach(0,0);
      blueLs.setVelocityEach(0,0);
      greenLs.setVelocityEach(0,0);
      pinkLs.setVelocityEach(0,0);
      bow.destroy();
      arrow.addAnimation("shooting",arrowbowex);
      arrow.x = 390;
      arrow.y = 200;
    }

  SCORE()

}

function blueloon() {

 loonb = createSprite(Math.round(random(370,20)));
 loonb.addAnimation("positionb",loonblue);
 loonb.scale = 0.09;
 loonb.velocityY = 9;
  if(SCNO===30||SCNO > 30)
  {
    loonb.velocityY = loonb.velocityY + 0.3;
  }
 blueLs.add(loonb);
}

function pinkloon() {
  
 loonp = createSprite(Math.round(random(370,20)));
 loonp.addAnimation("postionp",loonpink);
 loonp.scale = 1.09;
 loonp.velocityY = 9;
  if(SCNO===30||SCNO > 30)
  {
    loonp.velocityY = loonp.velocityY + 0.3;
  }
 pinkLs.add(loonp);
}

function greenloon() {
  
 loong = createSprite(Math.round(random(370,20)));
 loong.addAnimation("postiong",loongreen)
 loong.scale = 0.08;
 loong.velocityY = 9;
  if(SCNO===30||SCNO > 30)
  {
    loong.velocityY = loong.velocityY + 0.3;
  }
 greenLs.add(loong);
}

function redloon() {

 loonr = createSprite(Math.round(random(370,20)));
 loonr.addAnimation("postionr",loonred);
 loonr.scale = 0.08;
 loonr.velocityY = 9;
if(SCNO===30||SCNO > 30)
  {
    loonr.velocityY = loonr.velocityY + 0.3;
  }
 redLs.add(loonr);
}

function SCORE() {
  
  fill("#000000");
  textSize(20);
  text("Score:"+SCNO,1,20);
  noFill();
  
}

function greenDistruction(){
  
  if(arrow.isTouching(greenLs))
    {
      greenLs.destroyEach();
      SCNO = SCNO + 1;
      arrow.y = 470;
      arrow.velocityY = 0;
      arrow.x = bow.x;
      popSound.play();
    }
  
}

function pinkDistruction(){
  
  if(arrow.isTouching(pinkLs))
    {
      pinkLs.destroyEach();
      SCNO = SCNO + 1;
      arrow.y = 470;
      arrow.velocityY = 0;
      arrow.x = bow.x;
      popSound.play();
    }
  
}

function blueDistruction(){
  
  if(arrow.isTouching(blueLs))
    {
      blueLs.destroyEach();
      SCNO = SCNO + 1;
      arrow.y = 470;
      arrow.velocityY = 0;
      arrow.x = bow.x;
      popSound.play();
    }
  
}

function redDistruction(){
  
  if(arrow.isTouching(redLs))
    {
      redLs.destroyEach();
      SCNO = SCNO + 1;
      arrow.y = 470;
      arrow.velocityY = 0;
      arrow.x = bow.x;
      popSound.play();
    }
  
}