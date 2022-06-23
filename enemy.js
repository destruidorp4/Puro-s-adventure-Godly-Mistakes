class Enemy{
     constructor(x,y){
          this.x = x;
          this.y = y;
          this.enemy = createSprite(x,y);
         // this.enemy.shapeColor = "deeppink";
          this.animationRight = loadAnimation(
               "assets/enemyWalkRight/l0_enemyWalk01.png",
               "assets/enemyWalkRight/l0_enemyWalk02.png",
               "assets/enemyWalkRight/l0_enemyWalk03.png",
               "assets/enemyWalkRight/l0_enemyWalk04.png",
               "assets/enemyWalkRight/l0_enemyWalk05.png",
               "assets/enemyWalkRight/l0_enemyWalk06.png",
               "assets/enemyWalkRight/l0_enemyWalk07.png",
               "assets/enemyWalkRight/l0_enemyWalk08.png",
               "assets/enemyWalkRight/l0_enemyWalk09.png",
               "assets/enemyWalkRight/l0_enemyWalk10.png",
               "assets/enemyWalkRight/l0_enemyWalk11.png",
               "assets/enemyWalkRight/l0_enemyWalk12.png",
               "assets/enemyWalkRight/l0_enemyWalk13.png",
          )

          this.animationLeft = loadAnimation(
               "assets/enemyWalkLeft/l0_enemyWalkLeft01.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft02.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft03.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft04.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft05.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft06.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft07.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft08.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft09.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft10.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft11.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft12.png",
               "assets/enemyWalkLeft/l0_enemyWalkLeft13.png",
          )
          this.enemy.addAnimation("right",this.animationRight);
          this.enemy.addAnimation("left",this.animationLeft);
          this.enemy.scale = 2.5;


          this.velocitys = [-2, -3, 2, 3];
          this.selector = Math.round(random(this.velocitys));

          this.enemy.velocityX = this.selector;
          this.enemy.velocityY = this.selector;

          
     }

     animationCorrection(){
          if(this.enemy.velocityX > 0){
               this.enemy.changeAnimation("right")
          }

          else{
               this.enemy.changeAnimation("left")
          }
     }

   

    
}

