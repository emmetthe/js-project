export default class ChickenHandler {
  constructor() {
    this.chickens = [];
  }

  draw(ctx, chicken) {
    ctx.drawImage(
      chicken.chickenImg,
      chicken.width * chicken.frameX,
      chicken.height * chicken.frameY,
      chicken.width,
      chicken.height,
      chicken.x,
      chicken.y,
      chicken.width,
      chicken.height
    );
  }

  update(ctx) {
    this.chickens.forEach((chicken) => {
      this.draw(ctx, chicken);
      chicken.y -= chicken.speed;
    });
  }
}
