/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class GameLabel extends Sprite {
  constructor(text, x, y, colour = '#8109E5', font = '16px Impact') {
    super(x, y, 0, 0, colour);

    this.text = text;
    this.value = 0;
    this.font = font;
  }

  // eslint-disable-next-line class-methods-use-this
  ending(message, canvasWidth, canvasHeight, ctx) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = '32px Impact';
    ctx.fillStyle = '#8109E5';
    ctx.fillText(message, 170, canvasHeight / 2);
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
  }
}

export default GameLabel;
