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
    this.player = new Player(canvas, 65, 100, 0, 0, 8, false, false, './imgs/player.png');
    this.background = new Image();
    this.background.src = './imgs/background.jpg';
    this.projectileHandler = new ProjectileHandler();
    this.enemyHandler = new EnemyHandler();
    this.chickenMob = new ChickenHandler();
    this.score = 0;
    this.gameOver = false;
    this.life = new Image();
    this.life.src = './imgs/egg.png';
    this.restartStatus = false;
    this.frame = 0;
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
    let enemyInt = setInterval(() => {
      this.enemyHandler.list.push(new Enemy(this.canvas, 90, 67, './imgs/truck.png', 1, 3));
      if(this.gameOver) {
        clearInterval(enemyInt);
      }
    }, 2500);
  }

  spawnChicken() {
   let chickenInt = setInterval(() => {
      this.chickenMob.list.push(new Chicken(this.height));
      if(this.gameOver) {
        clearInterval(chickenInt);
      }
    }, 2700);
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
        (objectArr[i].x >= this.width - 30 || objectArr[i].x <= this.width + 5 - this.width)
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
    let increaseDiffInt = setInterval(() => {
      this.drawScore();
      if (this.score > 1) {
        setTimeout(() => {
          this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 90, 90, './imgs/wolf.png', 2, 3, 4));
          if(this.gameOver) {
            clearInterval(increaseDiffInt);
          }
        }, 2000);
      }
    }, 2000);
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
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.player.life = 5;
    this.player.list = [];
    this.enemyHandler.list = [];
    this.projectileHandler.list = [];
    this.chickenMob.list = [];
    this.score = 0;
    this.gameOver = false;
    this.restartStatus = true;
    clearInterval(this.spawnChicken());
    clearInterval(this.spawnEnemy());
    clearInterval(this.increaseDifficulty());
  }

  startGame(ctx) {
    this.checkCollision(this.chickenMob, this.enemyHandler);
    this.checkCollision(this.projectileHandler, this.enemyHandler);
    this.playerCollision(this.enemyHandler);
    this.drawScore();
    this.updateScore();
    this.updateLife();
    // this.enemyHandler.enemyWalkAnimation();
    this.projectileHandler.updateProjectiles(ctx);
    this.enemyHandler.update(ctx);
    this.chickenMob.update(ctx);
    this.player.movePlayer();
    this.player.playerWalkAnimation();
    this.gameStatus();
  }

  gameStatus() {
    if (this.isgameOver()) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = 'red';
      this.ctx.font = '60px Arial';
      this.ctx.fillText('GAME OVER', 100, 200);
      let restartButton = document.getElementById('restart');
      restartButton.addEventListener('click', (e) => {
        this.restartGame();
      });
    }
  }
}
