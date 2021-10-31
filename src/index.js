import Player from './scripts/player';
import Projectile from './scripts/projectile';
import ProjectileHandler from './scripts/projectileHandler';
import Enemy from './scripts/enemy';
import EnemyHandler from './scripts/enemyHandler';
import Chicken from './scripts/chicken';
import ChickenHandler from './scripts/chickenHandler';

document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 65, 100, 0, 0, 8, false, false, './imgs/player.png');
  const background = new Image();
  background.src = './imgs/background.jpg';
  const projectileHandler = new ProjectileHandler();
  const enemyTruck = new EnemyHandler();
  const chickenMob = new ChickenHandler();

  // image, s = source location starting from top left down right, sW(player width), sH(player height), d = destination of where to draw image

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  function startAtt() {
    if (player.keys['Space']) {
      player.attacking = true;
      if (player.isFacingLeft()) {
        projectileHandler.list.push(new Projectile(player.x - 12, player.y + 50, './imgs/featherL.png', 'left'));
      } else if (player.isFacingRight()) {
        projectileHandler.list.push(new Projectile(player.x + 45, player.y + 50, './imgs/featherR.png', 'right'));
      }
    }
  }

  function spawnEnemy() {
    setInterval(() => {
      enemyTruck.list.push(new Enemy(canvasEl.width, 90, 67, './imgs/truck.png', 1));
    }, 3000);
  }

  function spawnChicken() {
    setInterval(() => {
      chickenMob.list.push(new Chicken(canvasEl.height));
    }, 2500);
  }

  function isCollide(first, second) {
    if (
      !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
      )
    ) {
      return true;
    }
  }

  function checkCollision(object, enemy) {
    const objectArr = object.list;
    const enemyArr = enemy.list;
    for (let i = 0; i < objectArr.length; i++) {
      for (let j = 0; j < enemyArr.length; j++) {
        if (enemyArr[j] && objectArr[i] && isCollide(objectArr[i], enemyArr[j])) {
          enemyArr[j].life -= 1;
          objectArr.splice(i, 1);
          if (enemyArr[j].life <= 0) {
            enemyArr.splice(j, 1);
          }
          i--;
        }
      }
    }
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
      checkCollision(chickenMob, enemyTruck);
      checkCollision(projectileHandler, enemyTruck);
      // chickenCollision(enemyTruck);
      // projectileCollision(enemyTruck);
      projectileHandler.updateProjectiles(ctx);
      enemyTruck.update(ctx);
      chickenMob.update(ctx);
      player.movePlayer();
      player.playerWalkAnimation();
      requestAnimationFrame(animate);
    }
  }
  spawnChicken(ctx);
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

  // window.addEventListener('resize', function () {
  //   canvas.width = 1000;
  //   canvas.height = 500;
  // });
});
