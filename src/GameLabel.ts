/* eslint-disable import/extensions */
import Sprite from './Sprite';

class GameLabel extends Sprite {
  text: string;
  value: number;
  font: string;
  constructor(text:string, x:number, y:number, colour = '#8109E5', font = '16px Impact') {
    super(x, y, 0, 0, colour);

    this.text = text;
    this.value = 0;
    this.font = font;
  }

  render(ctx:any) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
  }
}

export default GameLabel;
