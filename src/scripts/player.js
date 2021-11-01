export default class Player {
  constructor(canvas, width, height, frameX, frameY, speed, moving, attacking, src) {
    this.x = canvas.width/2; // player start pos x
    this.y = canvas.height/2; // player start pos y
    this.width = width; // width in px divide by col
    this.height = height;
    this.frameX = frameX;
    this.frameY = frameY;
    this.speed = speed;
    this.moving = moving;
    this.attacking = attacking;
    this.playerImg = new Image();
    this.playerImg.src = src;
    this.keys = {};
    this.life = 5;
  }

  addMove(move) {
    this.keys[move] = true;
    // this.moving = true;
  }

  deleteMove(move) {
    delete this.keys[move];
    this.moving = false;
  }

  movePlayer() {
    if (this.keys['ArrowUp'] && this.y > 50) {
      this.y -= this.speed;
      this.moving = true;
    }
    if (this.keys['ArrowDown'] && this.y < canvas.height - 140) {
      this.y += this.speed;
      this.moving = true;
    }
    if (this.keys['ArrowLeft'] && this.x > 15) {
      this.x -= this.speed;
      this.frameY = 0;
      this.moving = true;
    }
    if (this.keys['ArrowRight'] && this.x < canvas.width - 60) {
      this.x += this.speed;
      this.frameY = 1;
      this.moving = true;
    }
  }

  playerWalkAnimation() {
    if (this.frameX < 5 && this.moving) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  addAttack() {
    this.attacking = true;
  }

  deleteAttack() {
    this.attacking = false;
  }

  isFacingLeft() {
    return this.frameY === 0;
  }

  isFacingRight() {
    return this.frameY === 1;
  }
}
