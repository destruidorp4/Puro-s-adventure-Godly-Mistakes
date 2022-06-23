var backgroundIMG
var player
var enemyAttack, enemyWalk, enemyDead;
var enemyGroup;
var playerAttack1, playerAttack2, playerAttack3, playerAttack4;
var playerHit;
var playerDied;

function preload(){
    backgroundIMG = loadImage("assets/Bg.jpg")
    enemyAttack = loadImage("assets/enemyAttack.gif")
    enemyWalk = loadImage("assets/enemyWalk.gif")
    enemyDead = loadImage("assets/enemyDead.gif")
    playerAttack1 = loadImage("assets/attack1.png");
    playerAttack2 = loadImage("assets/attack2.png");
    playerAttack3 = loadImage("assets/attack3.png");
    playerAttack4 = loadImage("assets/attack4.png");
    playerAttack4 = loadImage("assets/attack4.png");
    playerHit = loadImage("assets/damage.png");
    playerDied = loadImage("assets/morreu.png")
}

function setup(){
    createCanvas(1200, 800)
    player = createSprite(600, 400)
    player.shapeColor = "lightgreen"
    enemyGroup = new Group()
    addSprites(10, enemyGroup, enemyWalk);
}



function draw(){
    background("black")
   imageMode(CENTER)
    image(backgroundIMG, 500, 500, width*2, height*2)
   





    //movimento do jogador
    if(keyDown("w")){
        player.y -= 10
    }
    if(keyDown("s")){
        player.y += 10 
    }
    if(keyDown("a")){
        player.x -= 10
    }
    if(keyDown("d")){
        player.x += 10
    }



    //camera no jogador
    camera.position.x = player.x
    camera.position.y = player.y

   
   
   
   
    drawSprites()
   
}


function addSprites(numberOfSprites, spritesGroup, animation){ 
    for(var i = 0; i < numberOfSprites; i++){
        var x, y;
        
        
        
        //x = random(-1200, 1200)
        //y = random(-800, 800)
        var sprite = createSprite(x, y)
        sprite.scale = 2.7
        sprite.velocityX = random(-3, 3)
        sprite.velocityY = random(-3, 3)
        
        sprite.addImage(animation)
        spritesGroup.add(sprite)

    }
}

