export default class Enemy {
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
  }

  update(ctx) {
    this.list.forEach((enemy) => {
      this.draw(ctx, enemy);
      enemy.x -= enemy.speed;
    });
  }
}
