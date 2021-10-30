class Player {
  constructor () {
    this.speed = 100;
    this.x = 300; // player start pos x
    this.y = 400;  // player start pos y
    this.attacking = false;
    this.frameX = 0;
    this.frameY = 0;
    this.moving = false;
  }
  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH) 
  }



  // document.addEventListener("keydown", (e) => {
  //   let dir = directionKeys[e]
    
  // })

  // movePlayer(pos) {
  //   if () {
  //     this.pos[0] += ;
  //   }
  // }
  
}

export default Player;