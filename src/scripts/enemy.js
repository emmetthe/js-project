// export default class Enemy {
//   constructor(width, height, src) {
//     this.x = 570;
//     this.y = Math.floor(Math.random() * 560 + 60);
//     this.width = width;
//     this.height = height;
//     this.speed = Math.random() * 1.5 + 10;
//     this.frameX = 0;
//     this.frameY = 0;
//     this.enemyImg = new Image();
//     this.enemyImg.src = src;
//     this.enemies = [];
//   }

//   spawnEnemy() {
//     setInterval((ctx) => {
//       this.draw(ctx);
//       this.enemy.push(new Enemy(width, height, src));
//     }, 1000);
//   }

//   draw(ctx) {
//     ctx.drawImage(
//       this.enemyImg,
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
//       this.draw(ctx);
//       this.x -= this.speed;
//     });
//   }
// }
