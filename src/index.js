import Player from "./scripts/player"

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext("2d");

  canvasEl.width = 600;
  canvasEl.height = 800;

  const player = new Player(300, 400, 83, 81, 0, 0, 5, false, false, "./imgs/walk0.png")

  const background = new Image();
  background.src = "./imgs/background.jpg";
  
  // image, s = source location starting from top left down right, sW(player width), sH(player height), d = destination of where to draw image

  function animate() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
    ctx.drawImage(player.playerImg, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
    player.movePlayer();
    // playerWalkAnimation();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("keydown", function(e) {
    console.log(e.code)
    player.addMove(e.code);
  });
  window.addEventListener("keyup", function(e) {
    player.deleteMove(e.code);
  });

  // function playerWalkAnimation() {
  //   // if(player.frameX < 3 && player.moving) {
  //   //   player.frameX++;
  //   // } else {
  //   //   player.frameX = 0;
  //   // }
  //   for(let i = 0; i < 5; i++) {
      
  //   }
  // }

});