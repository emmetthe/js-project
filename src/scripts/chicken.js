export default class Chicken {
  constructor(height) {
    this.x = 10;
    this.y = height;
    this.width = 39.3;
    this.height = 50;
    this.speed = Math.floor(Math.random() * 1.2 + 2);
    this.frameX = 0;
    this.frameY = 0;
    this.chickenImg = new Image();
    this.chickenImg.src = "./imgs/vonbon.png";
    this.life = 1;
  }

}
