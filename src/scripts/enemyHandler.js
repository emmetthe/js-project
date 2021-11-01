export default class EnemyHandler {
  constructor() {
    this.list = [];
  }

  draw(ctx, enemy) {
    ctx.drawImage(
      enemy.enemyImg,
      enemy.width * enemy.frameX,
      enemy.height * enemy.frameY,
      enemy.width,
      enemy.height,
      enemy.x,
      enemy.y,
      enemy.width,
      enemy.height
    );
    // if (this.frameX < this.maxFrameX) { // number decided by col
    //   this.frameX++;
    // } else {
    //   this.frameX = 0;
    // }
  }

  update(ctx) {
    this.list.forEach((enemy) => {
      this.draw(ctx, enemy);
      enemy.x -= enemy.speed;
    });
  }

}
