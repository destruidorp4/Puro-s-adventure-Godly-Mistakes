var gameState = 0
var backgroundIMG
var player
var enemyAttack, enemyWalk, enemyDead;
var enemyGroup;
var title, playButton;


var espadinha


function preload(){
    backgroundIMG = loadImage("assets/Bg.jpg")
    enemyAttack = loadImage("assets/enemyAttack.gif")
    enemyWalk = loadImage("assets/enemyWalk.gif")
    enemyDead = loadImage("assets/enemyDead.gif")
}

function setup(){
    createCanvas(1200, 800)
    player = createSprite(600, 400)
    player.shapeColor = "lightgreen"
    enemyGroup = new Group()
    addSprites(10, enemyGroup, enemyWalk);


    title = createElement("h1", "Puro's Adventure");
    title.position(400,50);
    title.class("gameTitle");

    playButton= createButton("PLAY");
    playButton.position(450,250);
    playButton.class("playButton");
    playButton.mouseClicked(()=>{
        gameState = 1
    })


    espadinha = createSprite(player.x + 50, player.y, 80, 15)

}



function draw(){
    background("black")
   
   

    

    if(gameState === 1){
        title.hide()
        playButton.hide()
        

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


        //espadinha seguindo jogadora
        espadinha.x = player.x + 50
        espadinha.y = player.y


        //camera no jogador
        camera.position.x = player.x
        camera.position.y = player.y

    

        collisionSwordWithEnemy();
        //escrever uma função pra perder vida do jogador
    
    
        drawSprites()
    } 

    if(gameState === 2){
        end();
    } 

    
   
}




function addSprites(numberOfSprites, spritesGroup, animation){ 
    for(var i = 0; i < numberOfSprites; i++){
        var x, y;
        
        
        
        x = random(-1200, 1200)
        y = random(-800, 800)
        var sprite = createSprite(x, y)
        sprite.scale = 2.7
        sprite.velocityX = random(-3, 3)
        sprite.velocityY = random(-3, 3)
        sprite.debug = true
        sprite.addImage(animation)
        spritesGroup.add(sprite)


    }
}


function dectectorPersonagem(){

}


function collisionSwordWithEnemy(){
   // if(quando tiver a animação de ataque){
        espadinha.overlap(enemyGroup, function(collector, collected) {
            player.score += 21;
            //o sprite é coletado no grupo de colecionáveis que desencadeou
            //o evento
            collected.remove();
          });
  //  }
  
}