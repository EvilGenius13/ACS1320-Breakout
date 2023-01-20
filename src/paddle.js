/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width, height, speed, colour) {
    super(x, y, width, height, colour);
    this.speed = speed;
    this.colour = colour;
  }
}

export default Paddle;
