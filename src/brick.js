/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, colour = '#FF009E') {
    super(x, y, width, height, colour);
    this.status = 1;
  }
}

export default Brick;
