// export default class Chicken {
//   constructor() {
//     this.x = 10;
//     this.y = 640;
//     this.width = 40;
//     this.height = 40;
//     this.speed = Math.random() * 1.5 + 2;
//     this.frameX = 0;
//     this.frameY = 0;
//     this.enemyImg = new Image();
//     this.enemyImg.src = src;
//   }

//   draw(ctx) {
//     ctx.drawImage(
//       this.thisImg,
//       this.width * this.frameX,
//       this.height * this.frameY,
//       this.width,
//       this.height,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );
//   }

//   update(ctx) {
//     this.enemies.forEach((enemy) => {
//       this.draw(ctx, enemy);
//       enemy.x -= enemy.speed;
//     });
//   }
// }
