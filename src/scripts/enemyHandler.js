export default class Enemy {
  constructor() {
    this.enemies = [];
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
    this.enemies.forEach((enemy) => {
      this.draw(ctx, enemy);
      enemy.x -= enemy.speed;
    });
  }
}
