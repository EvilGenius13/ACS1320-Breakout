import Sprite from './sprite';

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = true;
  }

  render(ctx, color) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
