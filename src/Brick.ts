/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Brick extends Sprite {
  x: number;
  y: number;
  status: number;
  constructor(x:number, y:number, width = 75, height = 20, colour = '#FF009E') {
    super(x, y, width, height, colour);
    this.status = 1;
  }
}

export default Brick;
