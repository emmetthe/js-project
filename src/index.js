

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
    // spriteFrame: 0
  }
  const playerImg = new Image();
  playerImg.src = "./imgs/alert_0.png";

  const background = new Image();
  background.src = "./imgs/background.jpg";

  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH) 
  }
 
  function animate() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);
    drawSprite(playerImg, 0, 0, playerImg.width, playerImg.height, player.x, player.y, playerImg.width, playerImg.height);
    movePlayer();
    // playerWalkAnimation();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("keydown", function(e) {
    keys[e.code] = true;
    player.moving = true;
    console.log(keys);
  });
  window.addEventListener("keyup", function(e) {
    delete keys[e.code];
    player.moving = false;
  });

  function movePlayer() {
    if (keys["ArrowUp"] && player.y > 50) {
      player.y -= player.speed;
    }
    if (keys["ArrowDown"] && player.y < 650) {
      player.y += player.speed;
    }
    if (keys["ArrowLeft"] && player.x > 15) {
      player.x -= player.speed;
    }
    if (keys["ArrowRight"] && player.x < 500) {
      player.x += player.speed;
    }
  }

  // function playerWalkAnimation() {
  //   if(player.frameX < 3 && player.moving) {
  //     player.frameX++;
  //   } else {
  //     player.frameX = 0;
  //   }
  // }

});