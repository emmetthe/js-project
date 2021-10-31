export default class Enemy {
  constructor() {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.width = 30;
    this.height = 30;
    this.speed = Math.random() * 1.5 + 10;
    this.frameX = 0;
    this.frameY = 0;
    this.projectileImg = new Image();
    this.projectileImg.src = './imgs/truck.png';
    this.enemy = [];
  }

  spawnEnemy() {
    setInterval(() => {
      this.enemy.push(new Enemy());
    }, 1000);
  }

  // draw() {
  //   this.drawImage(this.projectileImg, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
  // }

  update() {
    this.x -= this.speed;
  }
}
