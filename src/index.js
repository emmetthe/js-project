import Player from './scripts/player';
import Projectile from './scripts/projectile';
import ProjectileHandler from './scripts/projectileHandler';
// import Enemy from "./scripts/enemies"
document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 65, 100, 0, 0, 6, false, false, './imgs/player.png');
  const background = new Image();
  background.src = './imgs/background.jpg';

  // image, s = source location starting from top left down right, sW(player width), sH(player height), d = destination of where to draw image

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }
  const projectileHandler = new ProjectileHandler();

  function startAtt() {
    if (player.keys['Space']) {
      player.attacking = true;
      if (player.isFacingLeft()) {
        projectileHandler.projectiles.push(new Projectile(player.x - 25, player.y + 50, './imgs/featherLeft.png', 'left')); // change pos
      } else if (player.isFacingRight()) {
        projectileHandler.projectiles.push(new Projectile(player.x + 45, player.y + 50, './imgs/featherRight.png', 'right'));
      }
    }
  }

  // const enemies = [];
  // function spawnEnemy() {
  //   setInterval(() => {
  //     enemies.push(new Enemy)
  //   }, 1000)
  // }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(
        player.playerImg,
        player.frameX * player.width,
        player.frameY * player.height,
        player.width,
        player.height,
        player.x,
        player.y,
        player.width,
        player.height
      );
      projectileHandler.updateProjectiles(ctx);
      // enemies.forEach((enemy) => {
      //   enemy.update();
      // })
      player.movePlayer();
      player.playerWalkAnimation();
      requestAnimationFrame(animate);
    }
  }
  startAnimation(20);

  window.addEventListener('keydown', (e) => {
    console.log(e.code);
    player.addAttack();
    player.addMove(e.code);
    if (e.code === 'Space') {
      startAtt();
    }
  });
  window.addEventListener('keyup', (e) => {
    player.deleteMove(e.code);
    player.deleteAttack();
  });
});
