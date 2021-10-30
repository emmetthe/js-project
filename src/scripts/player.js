
export default class Player {
  constructor (x, y, width, height, frameX, frameY, speed, moving, attacking, src) {
    this.x = x; // player start pos x
    this.y = y;  // player start pos y
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
  }

  addMove (move) {
    this.keys[move] = true;
    this.moving = true;
  }

  deleteMove (move) {
    delete this.keys[move]
    this.moving = false;
  }
  
  movePlayer() {
    if (this.keys["ArrowUp"] && this.y > 50) {
      this.y -= this.speed;
    }
    if (this.keys["ArrowDown"] && this.y < 650) {
      this.y += this.speed;
    }
    if (this.keys["ArrowLeft"] && this.x > 15) {
      this.x -= this.speed;
      this.frameY = 1;
    }
    if (this.keys["ArrowRight"] && this.x < 500) {
      this.x += this.speed;
      this.frameY = 0;
    }
  }

  playerWalkAnimation() {
    if(this.frameX < 4 && this.moving) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

}