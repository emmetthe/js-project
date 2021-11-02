export default class ChickenHandler {
  constructor() {
    this.list = [];
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
    this.list.forEach((chicken) => {
      chicken.y -= chicken.speed;
      if (chicken.frameX < 5) {
        // number decided by col
        chicken.frameX++;
      } else {
        chicken.frameX = 0;
      }
      this.draw(ctx, chicken);
    });
  }
}
