/* eslint-disable import/extensions */
import Background from './Background.js';
import Ball from './Ball.js';
import Bricks from './Bricks.js';
import Paddle from './Paddle.js';
import Score from './Score.js';
import Lives from './Lives.js';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    // * Background:
    const background = new Image();
    background.src = '../images/clouds.gif';
    this.bg = new Background(0, 0, background);
    // ? Ball:
    this.ballRadius = 10;
    this.ballColour = '#F0B005';
    this.ball = new Ball(100, 200, 2, -2, this.ballRadius, this.ballColour);
    // ? Paddle:
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleSpeed = 10;
    this.paddleColour = '#3AFF00';
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    this.paddleY = (this.canvas.height - this.paddleHeight - 5);
    this.paddle = new Paddle(
      this.paddleX,
      this.paddleY,
      this.paddleWidth,
      this.paddleHeight,
      this.paddleSpeed,
      this.paddleColour,
    );
    // ? Bricks:
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
    // ? Score:
    this.score = new Score(8, 20);
    // ? Lives:
    this.lives = new Lives(this.canvas.width - 65, 20, 3);

    this.loadListeners();
  }

  loadListeners() {
    this.leftPressed = false;
    this.rightPressed = false;
    document.addEventListener('keyup', this.keyUpHandler);
    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('mousemove', this.mouseMoveHandler);
  }

  keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddleX = relativeX - this.paddleWidth / 2;
    }
  }

  paddleMove() {
    if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
      this.paddleX += 10;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 10;
    }
  }

  ballMovement() {
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ballRadius
      || this.ball.x + this.ball.dx < this.ballRadius) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy < this.ballRadius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ballRadius) {
      if (this.ball.x > this.paddleX && this.ball.x < this.paddleX + this.paddleWidth) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.lives -= 1;
        if (!this.lives) {
          // eslint-disable-next-line no-alert
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.ball.x = this.canvas.width / 2;
          this.ball.y = this.canvas.height - 30;
          this.ball.dx = 3;
          this.ball.dy = -3;
          this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        }
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bg.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.render(this.ctx);
    this.score.render(this.ctx);
    this.lives.render(this.ctx);
    this.ballMovement();
    this.paddleMove();
    requestAnimationFrame(this.draw.bind(this));
  }
}

export default Game;
