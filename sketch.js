var gameState = 0
var backgroundIMG
var player
var enemyAttack, enemyWalk, enemyDead;
var enemyGroup =[];
var title, playButton;
var d = false;
var a = false;
var espadinha
var teste

var parede1, parede2, parede3, parede4;
var playerAttack, playerDied, playerHit, playerIdle, playerWalkRight;

function preload(){
    backgroundIMG = loadImage("assets/Bg.jpg")
    // enemyAttack = loadImage("assets/enemyAttack.gif")
    // enemyWalk = loadImage("assets/enemyWalk.gif")
    // enemyDead = loadImage("assets/enemyDead.gif")
    playerAttack = loadAnimation(
        "assets/player/attack1.png",
         "assets/player/attack2.png",
         "assets/player/attack3.png",
         "assets/player/attack4.png"
        );
    
    playerIdle = loadAnimation("assets/player/adventurer-idle-00.png")

    playerWalkRight = loadAnimation(
        "assets/player/adventurer-run-00.png",
        "assets/player/adventurer-run-01.png",
        "assets/player/adventurer-run-02.png",
        "assets/player/adventurer-run-03.png",
        "assets/player/adventurer-run-04.png",
        "assets/player/adventurer-run-05.png",
        )
        
    playerHit = loadAnimation("assets/player/damage.png");
    playerDied = loadAnimation("assets/player/morreu.png")
}

function setup(){
    createCanvas(1200, 800);
    player = createSprite(600, 400);
    player.addAnimation("idle", playerIdle);
    player.addAnimation("walkRight", playerWalkRight);
    player.addAnimation("hit", playerHit);
    player.addAnimation("dead", playerDied);
    player.addAnimation("attack", playerAttack)
    player.scale = 2.3



    title = createElement("h1", "Puro's Adventure");
    title.position(400,50);
    title.class("gameTitle");

    playButton= createButton("PLAY");
    playButton.position(450,250);
    playButton.class("playButton");
    playButton.mouseClicked(()=>{
        gameState = 1
    })


    parede1 = createSprite(300,10, width*2,20);
    parede2 = createSprite(300,930, width*2,20);
    parede3 = createSprite(-310, 170, 20, height*2);
    parede4 = createSprite(1300, 170, 20, height*2);
 
    espadinha = createSprite(player.x + 50, player.y, 80, 15)
    for(var i = 1; i < 15; i++){
        var x, y;
        x = random(-1200, 1200)
        y = random(-800, 800)
        enemy = new Enemy(x, y)
        enemyGroup.push(enemy)
        
    }

    
}



function draw(){
    background("black")
   
   //console.log(player.x, player.y)
 

    

    if(gameState === 1){
        title.hide()
        playButton.hide()
        
        //dectectorPersonagem()

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
            a = true
            d = false
            player.x -= 10
        }
        if(keyDown("d")){
            d = true
            a = false
            player.x += 10
            player.changeAnimation("walkRight")
        }
        

    else if(a == false && d == false){
        player.changeAnimation("idle")

}

        //espadinha seguindo jogadora
        espadinha.x = player.x + 50
        espadinha.y = player.y


        //camera no jogador
        camera.position.x = player.x
        camera.position.y = player.y

    

      //  collisionSwordWithEnemy();
        //escrever uma função pra perder vida do jogador
    
    
        drawSprites()
    } 

    if(gameState === 2){
        end();
    } 

    
   
}

function keyReleased(){
    if(keyCode === 32){
        d = false
        console.log(d)
    }
}