import Player from "./scripts/player"
import Projectile from "./scripts/projectile"

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext("2d");

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 65, 100, 0, 0, 6, false, false, "./imgs/player.png")
  const background = new Image();
  background.src = "./imgs/background.jpg";
  
  // image, s = source location starting from top left down right, sW(player width), sH(player height), d = destination of where to draw image

  class Projectile {
    constructor(x, y, direction) {
      this.x = x;
      this.y = y*1.1;
      this.direction = direction;
      this.width = 30;
      this.height = 30;
      this.speed = 9;
      this.frameX = 0;
      this.frameY = 0;
      this.projectileImg = new Image();
      this.projectileImg.src = "./imgs/arrow.png";
    }
    
    draw() {
      ctx.drawImage(this.projectileImg, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update() {
      if (this.direction === "right") {
        this.draw();
        this.x += this.speed;
      } else if (this.direction === "left") {
        this.draw();
        this.x -= this.speed;
      }
    }
  }

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate(); 
  }
  const projectile = new Projectile(player.x, player.y);
  let projectiles = [];

  function startAtt() {
    if(player.keys["Space"]) {
      player.attacking = true;
      if(player.frameY === 0) {
        projectiles.push(new Projectile(player.x + player.speed, player.y, "left")); // change pos
      } else if(player.frameY === 1) {
        projectiles.push(new Projectile(player.x + player.speed, player.y, "right"));
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(player.playerImg, player.frameX * player.width, player.frameY * player.height, player.width, player.height, player.x, player.y, player.width, player.height);
      projectiles.forEach((projectileEl) => {
        projectileEl.update();
      });
      player.movePlayer();
      player.playerWalkAnimation();
      requestAnimationFrame(animate);
    }
  }
  startAnimation(20);
  
  window.addEventListener("keydown", (e) => {
    console.log(e.code)
    player.addAttack();
    player.addMove(e.code);
    if(e.code === "Space") {
      startAtt();
    }
  });
  window.addEventListener("keyup", (e) => {
    player.deleteMove(e.code);
    player.deleteAttack();
  });
  
  
});