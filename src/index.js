import Player from './scripts/player';
import Projectile from './scripts/projectile';
import ProjectileHandler from './scripts/projectileHandler';
import Enemy from './scripts/enemy';
import EnemyHandler from './scripts/enemyHandler';

document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 65, 100, 0, 0, 8, false, false, './imgs/player.png');
  const background = new Image();
  background.src = './imgs/background.jpg';
  const enemyTruck = new EnemyHandler();

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
        projectileHandler.projectiles.push(new Projectile(player.x - 12, player.y + 50, './imgs/featherL.png', 'left'));
      } else if (player.isFacingRight()) {
        projectileHandler.projectiles.push(new Projectile(player.x + 45, player.y + 50, './imgs/featherR.png', 'right'));
      }
    }
  }

  function spawnEnemy() {
    setInterval(() => {
      enemyTruck.enemies.push(new Enemy(100, 100, './imgs/truck.png'));
    }, 3000);
  }

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
      enemyTruck.update(ctx);
      player.movePlayer();
      player.playerWalkAnimation();
      requestAnimationFrame(animate);
    }
  }
  spawnEnemy(ctx);
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
