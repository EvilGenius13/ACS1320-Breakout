/* eslint-disable import/extensions */
import Background from './Background.js';
import Ball from './Ball.js';
import Bricks from './Bricks.js';
import Paddle from './Paddle.js';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    // Background not currently working:
    const background = new Image();
    background.src = './images/clouds.gif';
    this.bg = new Background(background, 0, 0);
    // Ball:
    this.ballRadius = 10;
    this.ballColour = '#D4FF00';
    this.ball = new Ball(100, 200, 2, -2, this.ballRadius, this.ballColour);
    // Paddle:
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleSpeed = 10;
    this.paddleColour = '#FF000E';
    this.paddleX = (this.canvas.width - this.paddleWidth);
    this.paddleY = (this.canvas.height - this.paddleHeight);
    this.paddle = new Paddle(
      this.paddleX,
      this.paddleY,
      this.paddleWidth,
      this.paddleHeight,
      this.paddleSpeed,
      this.paddleColour,
    );
    // Bricks:
    this.brickRows = 4;
    this.brickColumns = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickColour = '#FF009E';

    this.bricks = new Bricks(
      this.brickRows,
      this.brickColumns,
      this.brickWidth,
      this.brickHeight,
      this.brickPadding,
      this.brickOffsetTop,
      this.brickOffsetLeft,
      this.brickColour,
    );
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bricks.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    // this.bg.render(this.ctx);

    requestAnimationFrame(this.draw.bind(this));
  }
}

export default Game;
