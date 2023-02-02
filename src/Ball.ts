/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Ball extends Sprite {
  dx: number;
  dy: number;
  radius: number;
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, colour = 'white') {
    super(x, y, 0, 0, colour);
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.colour = colour;
  }

  move() {
    this.moveBy(this.dx, this.dy);
  }

  render(ctx: any) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillstyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
