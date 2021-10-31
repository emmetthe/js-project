export default class ProjectileHandler {
  constructor() {
    this.list = [];
  }

  draw(ctx, projectile) {
    ctx.drawImage(
      projectile.projectileImg,
      projectile.width * projectile.frameX,
      projectile.height * projectile.frameY,
      projectile.width,
      projectile.height,
      projectile.x,
      projectile.y,
      projectile.width,
      projectile.height
    );
  }

  updateProjectiles(ctx) {
    this.list.forEach((projectile) => {
      if (projectile.direction === 'right') {
        this.draw(ctx, projectile);
        projectile.x += projectile.speed;
      } else if (projectile.direction === 'left') {
        this.draw(ctx, projectile);
        projectile.x -= projectile.speed;
      }
    })
  }
}
