var cat;

function preload() 
{ //load the images here
 bg = loadImage("images/New folder/garden.png")
 catimg1 = loadAnimation("images/cat1.png");
 catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
 catimg3 = loadAnimation("images/cat4.png");
 mouseimg1 =  loadAnimation("images/mouse1.png");
 mouseimg2 =  loadAnimation("images/mouse3.png","images/mouse2.png");
 mouseimg3 =  loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(500,500);
    //create tom and jerry sprites here
    cat = createSprite(390,420,40,40);
    cat.addAnimation("catsitting",catimg1);
    cat.scale = 0.1;

    
    mouse = createSprite(50,420);
    mouse.addAnimation("mousestanding",mouseimg1);
    mouse.scale =  0.09;
}

function draw() {

    background(bg);
    
    cat.addAnimation("catsitting",catimg1);
    cat.scale = 0.1;
    mouse.addAnimation("mousestanding",mouseimg1);
    mouse.scale =  0.09;
   
    drawSprites();
    if(cat.x - mouse.x < ( cat.width - mouse.width / 1.5))
   {
       mouse.addAnimation("mousehappy",mouseimg3);
       mouse.changeAnimation("mousehappy",mouseimg3);
       mouse.scale =  0.09;

       cat.addAnimation("cathappy",catimg3);
       cat.changeAnimation("cathappy",catimg3);
       cat.scale =  0.1;
       cat.velocityX  =  0;

   }
}


function keyPressed()
{
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW )
 {
     mouse.addAnimation("mouseTeasing",mouseimg2);
     mouse.changeAnimation("mouseTeasing",mouseimg2);
     mouse.scale  = 0.09;
     mouse.frameDelay  =   2.5;

     cat.addAnimation("catmoving",catimg2);
     cat.changeAnimation("catmoving",catimg2);
     cat.scale  = 0.1;
     cat.velocityX   = -3;
 }
}





