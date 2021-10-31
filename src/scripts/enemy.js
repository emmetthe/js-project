export default class Enemy {
  constructor(x, width, height, src, life) {
    this.x = x;
    this.y = Math.floor(Math.random() * 560 + 60);
    this.width = width;
    this.height = height;
    this.speed = Math.random() * 1.5 + 3;
    this.frameX = 0;
    this.frameY = 0;
    this.enemyImg = new Image();
    this.enemyImg.src = src;
    this.life = life;
    this.dmg = 1;
  }

}
