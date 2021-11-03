export default class EnemyWithAnimation {
  constructor(canvas, width, height, src, maxFrameX, life, speed) {
    this.x = canvas.width;
    this.y = Math.floor(Math.random() * (canvas.height - 240) + 60);
    this.width = width;
    this.height = height;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrameX = maxFrameX;
    this.enemyImg = new Image();
    this.enemyImg.src = src;
    this.life = life;
    this.speed = Math.random() * 1.5 + speed;
  }

  // enemyWalkAnimation() {
  //   if (this.frameX < this.maxFrameX) { // number decided by col
  //     this.frameX++;
  //   } else {
  //     this.frameX = 0;
  //   }
  // }

}