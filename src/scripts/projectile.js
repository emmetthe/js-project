// export default class Projectile {
//   constructor(x, y, direction) {
//     this.x = x;
//     this.y = y*1.1;
//     this.direction = direction;
//     this.width = 30;
//     this.height = 30;
//     this.speed = 9;
//     this.frameX = 0;
//     this.frameY = 0;
//     this.projectileImg = new Image();
//     this.projectileImg.src = "./imgs/arrow.png";
//   }
  
//   draw() {
//     this.drawImage(this.projectileImg, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
//   }

//   update() {
//     if (this.direction === "right") {
//       this.draw();
//       this.x += this.speed;
//     } else if (this.direction === "left") {
//       this.draw();
//       this.x -= this.speed;
//     }
//   }
// }

