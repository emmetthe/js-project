export default class Chicken {
  constructor(height) {
    this.x = 10;
    this.y = height;
    this.width = 39.2;
    this.height = 58;
    this.speed = Math.floor(Math.random() * 1.5 + 2);
    this.frameX = 0;
    this.frameY = 0;
    this.chickenImg = new Image();
    this.chickenImg.src = "./imgs/vonbon.png";
    this.life = 1;
  }

}
