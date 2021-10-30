import Player from "./scripts/player"

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext("2d");

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 65.2, 90, 0, 0, 5, false, false, "./imgs/walkLR.png")
  console.log(player.playerImg)
  const background = new Image();
  background.src = "./imgs/background.jpg";
  
  // image, s = source location starting from top left down right, sW(player width), sH(player height), d = destination of where to draw image

  // function animate() {
  //   ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  //   ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
  //   ctx.drawImage(player.playerImg, player.frameX * player.width, player.frameY * player.height, player.width, player.height, player.x, player.y, player.width, player.height);
  //   player.movePlayer();
  //   player.playerWalkAnimation();
  //   requestAnimationFrame(animate);
  //   }
  // animate();

  let fps, fpsInterval, startTime, now, then, elapsed;
  function startAnimation(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate(); 
  }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
      ctx.drawImage(player.playerImg, player.frameX * player.width, player.frameY * player.height, player.width, player.height, player.x, player.y, player.width, player.height);
      player.movePlayer();
      player.playerWalkAnimation();
      requestAnimationFrame(animate);
    }
  }
  startAnimation(25);

  window.addEventListener("keydown", function(e) {
    console.log(e.code)
    player.addMove(e.code);
  });
  window.addEventListener("keyup", function(e) {
    player.deleteMove(e.code);
  });

  
});