import Player from './player';
import Projectile from './projectile';
import ProjectileHandler from './projectileHandler';
import Enemy from './enemy';
import EnemyHandler from './enemyHandler';
import Chicken from './chicken';
import ChickenHandler from './chickenHandler';
import EnemyWithAnimation from './enemyWithAnimation';

export default class Game {
  constructor(ctx, canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player(canvas, 64.6667, 97, 0, 1, 8, false, false, './imgs/player.png');
    this.background = new Image();
    this.background.src = './imgs/background.jpg';
    this.projectileHandler = new ProjectileHandler();
    this.enemyHandler = new EnemyHandler();
    this.chickenMob = new ChickenHandler();
    // this.enemyWolf = new EnemyWithAnimation(this.canvas, 76, 60, './imgs/wolf.png', 2, 3, 1)
    this.score = 0;
    this.gameOver = false;
    this.life = new Image();
    this.life.src = './imgs/egg.png';
    this.restartStatus = false;
    this.currentFrame = 0;
    this.chickensPerFrame = 50;
    this.enemyTruckPerFrame = 54;
    this.level1DifficultyFrame = 63;
  }

  startAtt() {
    if (this.player.keys['Space']) {
      this.player.attacking = true;
      if (this.player.isFacingLeft()) {
        this.projectileHandler.list.push(new Projectile(this.player.x - 12, this.player.y + 50, './imgs/featherL.png', 'left'));
      } else if (this.player.isFacingRight()) {
        this.projectileHandler.list.push(new Projectile(this.player.x + 45, this.player.y + 50, './imgs/featherR.png', 'right'));
      }
    }
  }

  spawnEnemy() {
    if (this.currentFrame % this.enemyTruckPerFrame === 0) {
      this.enemyHandler.list.push(new Enemy(this.canvas, 90, 67, './imgs/truck.png', 1, 3));
    }
    // const enemyInt = setInterval(() => {
    //   this.enemyHandler.list.push(new Enemy(this.canvas, 90, 67, './imgs/truck.png', 1, 3));
    //   if (this.player.life === 0) {
    //     clearInterval(enemyInt);
    //   }
    // }, 2500);
  }

  spawnChicken() {
    if (this.currentFrame % this.chickensPerFrame === 0) {
      this.chickenMob.list.push(new Chicken(this.height));
    }
  }

  isCollide(first, second) {
    if (
      !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
      )
    ) {
      return true;
    }
  }

  checkCollision(object, enemy) {
    const objectArr = object.list;
    const enemyArr = enemy.list;
    for (let i = 0; i < objectArr.length; i++) {
      if (
        objectArr === this.projectileHandler.list &&
        (objectArr[i].x >= this.width - 45 || objectArr[i].x <= this.width + 5 - this.width)
      ) {
        objectArr.splice(i, 1);
        i--;
      }
      for (let j = 0; j < enemyArr.length; j++) {
        if (enemyArr[j] && objectArr[i] && this.isCollide(objectArr[i], enemyArr[j])) {
          enemyArr[j].life -= 1;
          objectArr.splice(i, 1);
          if (objectArr === this.chickenMob.list) {
            this.player.life -= 1;
          }
          if (enemyArr[j].life <= 0) {
            enemyArr.splice(j, 1);
            j--;
          }
          i--;
        }
      }
    }
  }

  playerCollision(enemy) {
    const enemyArr = enemy.list;
    for (let j = 0; j < enemyArr.length; j++) {
      if (this.isCollide(this.player, enemyArr[j]) && !this.isgameOver()) {
        enemyArr[j].life -= 1;
        if (enemyArr[j].life <= 0) {
          enemyArr.splice(j, 1);
          j--;
        }
        this.player.life -= 1;
      }
    }
  }

  updateScore() {
    let chicken = this.chickenMob.list;
    for (let i = 0; i < chicken.length; i++) {
      if (chicken[i].y <= this.height + 40 - this.height) {
        chicken.splice(i, 1);
        this.score += 1;
        i--;
      }
    }
  }

  drawScore() {
    this.ctx.fillStyle = 'blue';
    this.ctx.font = '25px Arial';
    this.ctx.fillText('Score: ' + this.score, this.width - 150, 30);
    this.updateScore();
  }

  increaseDifficulty() {
    if (this.currentFrame % this.level1DifficultyFrame === 0 && this.score > 5) {
      this.enemyTruckPerFrame = 50;
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 53.83, 70, './imgs/mummy.png', 2, 3, 4, 2));
    }
    if (this.currentFrame % 25 === 0 && this.score > 15) {
      this.enemyTruckPerFrame = 25;
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 39, 30, './imgs/jrnecki.png', 2, 2, 6, 1));
    }
    if(this.currentFrame % 10 === 0 && this.score > 25 && this.score % 5 === 0) {
      this.enemyTruckPerFrame -= 5;
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 39, 30, './imgs/jrnecki.png', 2, 2, 8, 1));
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 53.83, 70, './imgs/mummy.png', 2, 3, 6, 2));
    }
  }

  isgameOver() {
    if (this.player.life === 0) {
      return (this.gameOver = true);
    }
    return (this.gameOver = false);
  }

  updateLife() {
    if (!this.gameOver) {
      let eggPos = 0;
      // let eggPos = this.width - 150; for top right corner
      for (let i = 0; i < this.player.life; i++) {
        this.ctx.drawImage(this.life, eggPos, 5, 25, 25);
        eggPos += 30;
      }
    }
  }

  restartGame() {
    this.player.life = 5;
    this.player.list = [];
    this.enemyHandler.list = [];
    this.projectileHandler.list = [];
    this.chickenMob.list = [];
    this.score = 0;
    this.gameOver = false;
    this.restartStatus = false;
    this.currentFrame = 0;
  }

  gameStatus() {
    if (this.isgameOver()) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = 'red';
      this.ctx.font = '60px Arial';
      this.ctx.fillText('GAME OVER', 350, 200);
      let restartButton = document.getElementById('restart');
      restartButton.style.display = 'block';
      restartButton.addEventListener('click', (e) => {
        restartButton.style.display = 'none';
        this.restartGame();
      });
    }
  }

  startGame(ctx) {
    if (!this.gameOver) {
      this.checkCollision(this.chickenMob, this.enemyHandler);
      this.checkCollision(this.projectileHandler, this.enemyHandler);
      this.playerCollision(this.enemyHandler);
      this.drawScore();
      this.updateScore();
      this.updateLife();
      this.isgameOver();
      // this.enemyWolf.enemyWalkAnimation();
      this.projectileHandler.updateProjectiles(ctx);
      this.enemyHandler.update(ctx);
      this.chickenMob.update(ctx);
      this.player.movePlayer();
      this.player.playerWalkAnimation();
      this.gameStatus();
      this.currentFrame += 1;
    }
  }
}
