if(isTouching(cat,mouse))
     {
         mouse.addAnimation("happy",mouseimg3);
         mouse.changeAnimation("happy",mouseimg3);
         mouse.scale  = 0.09;
         
         cat.addAnimation("collided",catimg3);
         cat.changeAnimation("collided",catimg3);
         cat.scale  = 0.1;
         cat.velocityX  = 0;
     } else {
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing",mouseimg2);
        mouse.scale  = 0.09;
        mouse.frameDelay  =   2.5;
   
        cat.addAnimation("catmoving",catimg2);
        cat.changeAnimation("catmoving",catimg2);
        cat.scale  = 0.1;
        cat.velocityX   = -3;
        
     }