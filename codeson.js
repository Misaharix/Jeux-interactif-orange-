function preload() {
  // ... tes images
  this.load.audio('bgm', 'bgm.mp3');
  this.load.audio('goomba_hit', 'goomba_hit.wav');
  this.load.audio('star_pickup', 'star_pickup.wav');
  this.load.audio('life_pickup', 'life_pickup.wav');
  this.load.audio('turtle_spawn', 'turtle_spawn.wav');
}

function create() {
  // ... ton code actuel
  
  this.bgm = this.sound.add('bgm', { loop: true, volume: 0.5 });
  this.goombaHitSound = this.sound.add('goomba_hit');
  this.starPickupSound = this.sound.add('star_pickup');
  this.lifePickupSound = this.sound.add('life_pickup');
  this.turtleSpawnSound = this.sound.add('turtle_spawn');

  this.bgm.play();

  // ... le reste de ton code
}

function handlePlayerGoombaCollision(player, goomba){
  if(player.body.velocity.y > 0 && player.y < goomba.y){
    goomba.disableBody(true,true);
    this.goombaHitSound.play();  // son goomba tué
    score++;
    scoreText.setText('Score: '+score);
    player.body.setVelocityY(-200);
    checkVictory(this);
  } else if(!isInvincible && !rainbowMode) loseLife(this);
}

function handlestarPickup(player, star){
  star.disableBody(true,true);
  this.starPickupSound.play(); // son étoile
  activateRainbowMode(this);
}

function handlecoeurPickup(player, coeur){
  coeur.disableBody(true,true);
  coeur.setVisible(false);
  this.lifePickupSound.play(); // son vie
  player.setTint(0x00ff00);
  lives += 2;
  if(lives > 5) lives = 5;
  livesText.setText('Vie: '+lives);
}

function update() {
  // ...

  if(goombas.countActive(true) <= 5 && turtles.getChildren().length === 0){
    for(let i = 0; i < 5; i++){
      let t = turtles.create(150 + i*150, 100, 'turtle').setScale(1);
      t.setCollideWorldBounds(true);
      t.setBounce(1);
      t.lastShot = 0;
    }
    jump.setVisible(true);
    jump.body.enable = true;

    this.turtleSpawnSound.play();  // son turtles
  }

  // ...
}
