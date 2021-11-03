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
    this.player = new Player(canvas, 65, 93, 0, 1, 8, false, false, './imgs/player.png');
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
    this.currentFrame = 0;
    this.chickensPerFrame = 50;
    this.enemyTruckPerFrame = 54;
    this.level1DifficultyFrame = 63;
    this.welcomeStatus = true;
    this.highscoreBoard = document.querySelector('.highscore');
    this.highscore = localStorage.getItem('game1highscore') || 0;
    this.highscoreBoard.textContent = 'HIGHSCORE: ' + this.highscore;
  }

  startAtt() {
    if (this.player.keys['Space']) {
      this.player.attacking = true;
      if (this.player.isFacingLeft() && this.currentFrame % 4 === 0) {
        this.projectileHandler.list.push(new Projectile(this.player.x - 12, this.player.y + 50, './imgs/featherL.png', 'left'));
      } else if (this.player.isFacingRight() && this.currentFrame % 4 === 0) {
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
          if (objectArr[i] === this.chickenMob.list[i]) {
            this.player.life -= 1;
          }
          if (enemyArr[j].life <= 0 || enemyArr[j].x < 10) {
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
    let score = document.getElementById('score');
    for (let i = 0; i < chicken.length; i++) {
      if (chicken[i].y <= this.height + 40 - this.height) {
        chicken.splice(i, 1);
        this.score += 1;
        score.innerText = this.score;
        i--;
      }
    }
  }

  // drawScore() {
  // this.ctx.fillStyle = 'blue';
  // this.ctx.font = '25px Arial';
  // this.ctx.fillText('Score: ' + this.score, this.width - 150, 30);
  //   this.updateScore();
  // }

  increaseDifficulty() {
    if (this.currentFrame % this.level1DifficultyFrame === 0 && this.score >= 5) {
      this.enemyTruckPerFrame = 50;
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 52, 70, './imgs/mummy.png', 2, 2, 3));
    }
    if (this.currentFrame % 12 === 0 && this.score > 10) {
      this.enemyTruckPerFrame = 25;
      this.enemyHandler.list.forEach((enemy) => (enemy.speed += 1));
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 34, 31, './imgs/jrnecki.png', 2, 1, 4));
    }
    if ((this.currentFrame % 43 === 0) & (this.score > 23) && this.score % 5 === 0) {
      this.enemyTruckPerFrame -= 5;
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 39, 32, './imgs/jrnecki.png', 2, 2, 5));
      this.enemyHandler.list.push(new EnemyWithAnimation(this.canvas, 53.83, 70, './imgs/mummy.png', 2, 2, 4));
      this.enemyHandler.list.forEach((enemy) => (enemy.speed += 1));
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
      this.ctx.fillStyle = 'black';
      this.ctx.font = '20px arial';
      this.ctx.fillText('Lives Left: ', this.width - 260, 25);
      let eggPos = this.width - 150;
      // let eggPos = 110; for top  left corner
      for (let i = 0; i < this.player.life; i++) {
        this.ctx.drawImage(this.life, eggPos, 5, 25, 25);
        eggPos += 30;
      }
    }
  }

  restartGame() {
    this.player.x = canvas.width / 2;
    this.player.y = canvas.height / 2;
    this.player.life = 5;
    this.player.list = [];
    this.enemyHandler.list = [];
    this.projectileHandler.list = [];
    this.chickenMob.list = [];
    this.score = 0;
    this.gameOver = false;
    this.restartStatus = false;
    this.currentFrame = 0;
    this.enemyHandler.enemyFrame = 0;
    let score = document.getElementById('score');
    score.innerText = 0;
    // this.chickenMob.chickenFrame = 0;
    let gameOver = document.getElementById('end-game-text');
    gameOver.style.display = 'none';
  }

  gameStatus() {
    if (this.isgameOver()) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
      let gameOver = document.getElementById('end-game-text');
      gameOver.style.display = 'block';
      gameOver.innerText;
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
      this.updateScore();
      this.updateLife();
      this.isgameOver();
      this.projectileHandler.updateProjectiles(ctx);
      this.enemyHandler.update(ctx);
      this.chickenMob.update(ctx);
      this.player.movePlayer();
      this.player.playerWalkAnimation();
      this.gameStatus();
      this.checkHighscore();
      this.spawnChicken();
      this.spawnEnemy();
      this.startAtt();
      this.increaseDifficulty();
      this.currentFrame += 1;
      this.enemyHandler.enemyFrame += 1;
    }
  }

  checkHighscore() {
    if (this.score > localStorage.getItem('game1highscore')) {
      localStorage.setItem('game1highscore', this.score);
      this.highscore = this.score;
      this.highscoreBoard.textContent = 'HIGHSCORE: ' + this.highscore;
    }
  }

  welcomeScreen() {
    if (this.welcomeStatus) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
      this.ctx.font = 'bold 40px Rockwell';
      this.ctx.fillStyle = '#2d2b5c';
      let text = '';
      let bottomText = '';
      text = 'Use the arrow keys to move';
      bottomText = 'and Spacebar to shoot!';
      this.ctx.fillText(text, this.width / 4, this.height - 500);
      this.ctx.fillText(bottomText, this.width / 4 + 50, this.height - 400);
    }
  }
}
