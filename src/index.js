

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext("2d");

  canvasEl.width = 600;
  canvasEl.height = 800;
  const keys = [];

  const player = {
    x: 300, // player start pos x
    y: 400,  // player start pos y
    width: 83, // width in px divide by col
    height: 81,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
    attacking: false,
    spriteFrame: 0
  }
  const playerImg = new Image();
  playerImg.src = "./imgs/standing.png";

  const background = new Image();
  background.src = "./imgs/background.jpg";

  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH) 
  }
 
  function animate() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
    drawSprite(playerImg, 0, 0, playerImg.width, playerImg.height, player.x, player.y, playerImg.width, playerImg.height);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("keydown", keyPress);
  window.addEventListener("keyup", keyPress);

});