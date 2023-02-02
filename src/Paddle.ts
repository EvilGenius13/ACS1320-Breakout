/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Paddle extends Sprite {
  speed: number;
  constructor(x:number, y:number, width:number, height:number, speed:number, colour:string) {
    super(x, y, width, height, colour);
    this.speed = speed;
    this.colour = colour;
  }
}

export default Paddle;
