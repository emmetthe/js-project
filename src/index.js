import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  const game = new Game(ctx, canvasEl);

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval && !game.isgameOver()) {
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, game.width, game.height);
      ctx.drawImage(game.background, 0, 0, game.width, game.height);
      ctx.drawImage(
        game.player.playerImg,
        game.player.frameX * game.player.width,
        game.player.frameY * game.player.height,
        game.player.width,
        game.player.height,
        game.player.x,
        game.player.y,
        game.player.width,
        game.player.height
      );
      game.checkCollision(game.chickenMob, game.enemyHandler);
      game.checkCollision(game.projectileHandler, game.enemyHandler);
      game.playerCollision(game.enemyHandler);
      game.drawScore();
      game.updateScore();
      game.updateLife();
      game.projectileHandler.updateProjectiles(ctx);
      game.enemyHandler.update(ctx);
      game.chickenMob.update(ctx);
      game.player.movePlayer();
      game.player.playerWalkAnimation();
      game.gameStatus();
      requestAnimationFrame(animate);
    }
  }
  game.spawnChicken(ctx);
  game.spawnEnemy(ctx);
  startAnimation(20);

  window.addEventListener('keydown', (e) => {
    // console.log(e.code);
    game.player.addAttack();
    game.player.addMove(e.code);
    if (e.code === 'Space') {
      game.startAtt();
    }
  });
  window.addEventListener('keyup', (e) => {
    game.player.deleteMove(e.code);
    game.player.deleteAttack();
  });

  // window.addEventListener('resize', function () {
  //   canvas.width = 1000;
  //   canvas.height = 600;
  // });
});
