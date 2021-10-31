
export default class Projectile {
  constructor (x, y, src, direction){
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.speed = 9;
    this.frameX = 0;
    this.frameY = 0;
    this.projectileImg = new Image();
    this.projectileImg.src = src;
    this.direction = direction;
  }

}