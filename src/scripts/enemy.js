export default class Enemy {
  constructor(width, height, src) {
    this.x = 570;
    this.y = Math.floor(Math.random() * 560 + 60);
    this.width = width;
    this.height = height;
    this.speed = Math.random() * 1.5 + 3;
    this.frameX = 0;
    this.frameY = 0;
    this.enemyImg = new Image();
    this.enemyImg.src = src;
  }

}
