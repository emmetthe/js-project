export default class Enemy {
  constructor(canvas, width, height, src, life) {
    this.x = canvas.width;
    this.y = Math.floor(Math.random() * (canvas.height - 240) + 60);
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
