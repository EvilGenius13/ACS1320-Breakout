/* eslint-disable import/extensions */
import Bricks from './Bricks.js';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    // Background:

    // Ball:

    // Paddle:

    // Bricks:
    this.brickRows = 4;
    this.brickColumns = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickColour = '#FF009E';

    // eslint-disable-next-line max-len
    this.bricks = new Bricks(this.brickRows, this.brickColumns, this.brickWidth, this.brickHeight, this.brickPadding, this.brickOffsetTop, this.brickOffsetLeft, this.brickColour);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bricks.render(this.ctx);

    requestAnimationFrame(this.draw.bind(this));
  }
}

export default Game;
