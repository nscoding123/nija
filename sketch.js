//Game State variables
var PLAY = 0;
var END = 1;
var score = 0;
var gameState = PLAY;
//Object variables
var sword, swordImg;
var fruitGroup, enemyGroup;
var appleFruit, pearFruit, orangeFruit, bananaFruit;
var enemy1, enemy2, randomDisplay;
var orangeImg, appleImg, pearImg, bananaImg, enemy1Img, enemy2Img;
var gameOver, gameOverImg;
var knifeSwooshSound_mp3;
var GameOver;
var appleFruit1, pearFruit1, bananaFruit1, orangeFruit1;

function preload() {
  //All the images will be loaded here
  swordImg = loadImage("sword.png");
  orangeImg = loadImage("fruit1.png");
  appleImg = loadImage("fruit2.png");
  pearImg = loadImage("fruit3.png");
  bananaImg = loadImage("fruit4.png");
  enemy1Img = loadImage("alien1.png");
  enemy2Img = loadImage("alien2.png");
  gameOverImg = loadImage("gameover.png");
  GameOver = loadSound("gameover.mp3");
  knifeSwooshSound_mp3 = loadSound("knifeSwooshSound.mp3");
}

function setup() {
  //creates Canvas
  createCanvas(400, 400);

  //groups are created
  fruitGroup = createGroup();
  enemyGroup = createGroup();

  //sword is created
  sword = createSprite(200, 100, 10, 10);
  sword.setCollider("rectangle", 25, -30, 50, 50, 35);
  sword.scale = 0.5;
  sword.addAnimation("sword", swordImg);
}

function draw() {
  //Background is created
  background("pink");

  //Game State PLAY
  if (gameState === PLAY) {

    //How the sword can move around
    sword.y = mouseY;
    sword.x = mouseX;
    //functions are called
    fruit();
    enemies();

    //what happens if the sword touches a fruit
    if (sword.isTouching(fruitGroup)) {
    //Adds sound
     knifeSwooshSound_mp3.play();
      //score is incrementated when sword touches fruit
      score++;
      fruitGroup.destroyEach();
    }
    //what happens if the sword touches a enemy
    if (sword.isTouching(enemyGroup)) {
GameOver.play();
      //the gamestate is END and the computer will move on to other if statement
      gameState = END;
    }
  }
  //Game State END
  if (gameState === END) {
    //the sprites are destroyed
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    //gameover message is displayed
    gameOver = createSprite(200, 200, 20, 20);
    gameOver.addAnimation("over", gameOverImg);
  }
  //Sprites are displayed
  drawSprites();

  //Text design for the score
  fill("gold");
  stroke("black");
  textSize(20);
  text("Score: " + score, 300, 20);

  //Assining randomDisplay
  randomDisplay = Math.round(random(30, 370));
  //var position = Math.round(random(1, 2));

  //orange is created and properties are given to it 
  function orange() {
    orangeFruit = createSprite(randomDisplay, 420, 100, 2);
    orangeFruit.scale = 0.2;
    orangeFruit.velocityY = -8;
    //orange is given animation
    orangeFruit.addAnimation("orange", orangeImg);
    orangeFruit.lifetime = 220;
    fruitGroup.add(orangeFruit);
  }
  function orange2() {
    orangeFruit1 = createSprite(randomDisplay, 0, 100, 2);
    orangeFruit1.scale = 0.2;
    orangeFruit1.velocityY = 8;
    //orange is given animation
    orangeFruit1.addAnimation("orange1", orangeImg);
    orangeFruit1.lifetime = 220;
    fruitGroup.add(orangeFruit1);
}

  //apple is created and properties are given to it 
  function apple() {
    appleFruit = createSprite(randomDisplay, 420, 10, 10);
    appleFruit.scale = 0.2;
    appleFruit.addAnimation("apple", appleImg);
    appleFruit.velocityY = -8;
    appleFruit.lifetime = 220;
    fruitGroup.add(appleFruit);
  }
  function apple2() {
    appleFruit1 = createSprite(randomDisplay, 0, 10, 10);
    appleFruit1.scale = 0.2;
    appleFruit1.addAnimation("apple2", appleImg);
    appleFruit1.velocityY = 8;
    appleFruit1.lifetime = 220;
    fruitGroup.add(appleFruit1);
  }

  //pear is created and properties are given to it
  function pear() {
    pearFruit = createSprite(randomDisplay, 420, 10, 10);
    pearFruit.scale = 0.2;
    pearFruit.addAnimation("pear", pearImg);
    pearFruit.velocityY = -8;
    pearFruit.lifetime = 220;
    fruitGroup.add(pearFruit);
  }
  function pear2() {
    pearFruit1 = createSprite(randomDisplay, 0, 10, 10);
    pearFruit1.scale = 0.2;
    pearFruit1.addAnimation("pear1", pearImg);
    pearFruit1.velocityY = 8;
    pearFruit1.lifetime = 220;
    fruitGroup.add(pearFruit1);
  }

  //banana is created and properties are given to it
  function banana() {
    bananaFruit = createSprite(randomDisplay, 420, 10, 10);
    bananaFruit.scale = 0.18;
    bananaFruit.addAnimation("banana", bananaImg);
    bananaFruit.velocityY = -8;
    bananaFruit.lifetime = 220;
    fruitGroup.add(bananaFruit);
  }
   function banana2() {
    bananaFruit1 = createSprite(randomDisplay, 0, 10, 10);
    bananaFruit1.scale = 0.18;
    bananaFruit1.addAnimation("banana1", bananaImg);
    bananaFruit1.velocityY = 8;
    bananaFruit1.lifetime = 220;
    fruitGroup.add(bananaFruit1);
  }

  //enemy1 is created and properties are given to it 
  function enemy_1() {
    enemy1 = createSprite(randomDisplay, 420, 10, 10);
    enemy1.addAnimation("enemy1", enemy1Img);
    enemy1.velocityY = -8;
    enemy1.lifetime = 220;
    enemyGroup.add(enemy1);
  }
  //enemy2 is created and properties are given to it
  function enemy_2() {
    enemy2 = createSprite(randomDisplay, 420, 10, 10);
    enemy2.addAnimation("enemy2", enemy2Img);
    enemy2.velocityY = -8;
    enemy2.lifetime = 220;
    enemyGroup.add(enemy2);
  }

  // this is to make sure fruits spawn at a random order
  function fruit() {
    if (frameCount % 40 === 0) {
      var select_fruit = Math.round(random(1, 8));
       fruitGroup.velocityY = -(8 + score/5);
      switch (select_fruit) {
        case 1:
          orange();
          break;
        case 2:
          apple()
          break;
        case 3:
          pear();
          break;
        case 4:
          banana();
          break;
        case 5:
          apple2();
          break;
        case 6:
          orange2();
          break;
        case 7:
          pear2();
          break;
        case 8:
          banana2();
          break;
        default:
          break;
      }
    }
  }

  // this is to make sure enemies spawn at a random order
  function enemies() {
    if (frameCount % 100 === 0) {
      var select_enemy = Math.round(random(1, 1));
      switch (select_enemy) {
        case 1:
          enemy_1();
          break;
        case 2:
          enemy_2();
          break;
        default:
          break;

      }
    }
  }
}