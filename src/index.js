import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx, canvas);

  const playButton = document.getElementById('play_audio');
  const pauseButton = document.getElementById('pause_audio');
  let audio = document.getElementById('default_audio');
  audio.loop = true;
  let audioPlaying = false;
  playButton.addEventListener('click', (e) => {
    if (!audioPlaying) {
      audio.volume = 0.1;
      audio.play();
      audioPlaying = true;
    }
  });
  pauseButton.addEventListener('click', (e) => {
    if (audioPlaying) {
      audio.pause();
      audioPlaying = false;
    }
  });

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', (e) => {
    startButton.style.display = 'none';
    game.welcomeStatus = false;
    animate();
  });

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  function animate() {
    if (!game.restartStatus) {
      requestAnimationFrame(animate);
      now = Date.now();
      elapsed = now - then;
      if(game.welcomeStatus){
        game.welcomeScreen();
      }
      if (elapsed > fpsInterval && !game.isgameOver() && !game.welcomeStatus && !game.pauseGameStatus) {
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
        game.startGame(ctx);
        requestAnimationFrame(animate);
      }
    }
  }

  game.createHighscore();
  startAnimation(20);

  window.addEventListener('keydown', (e) => {
    // console.log(e.code);
    game.player.addAttack();
    game.player.addMove(e.code);
    if (e.code === 'Escape' && game.pauseGameStatus && !game.welcomeStatus) {
      game.pauseGameStatus = false;
      let restartButton = document.getElementById('restart');
      restartButton.style.display = 'none';
      animate();
    } else if (e.code === 'Escape' && !game.pauseGameStatus && !game.welcomeStatus) {
      game.pauseGameStatus = true;
      game.pauseGame();
      game.gameStatus();
    }
  });

  window.addEventListener('keyup', (e) => {
    game.player.deleteMove(e.code);
    game.player.deleteAttack();
  });
});
