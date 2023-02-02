/* eslint-disable import/extensions */
import Background from './Background';
import Ball from './Ball';
import Bricks from './Bricks';
import Paddle from './Paddle';
import GameLabel from './GameLabel';

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bg: Background;
  ballRadius: number;
  ballColour: string;
  ball: Ball;
  paddleHeight: number;
  paddleWidth: number;
  paddleSpeed: number;
  paddleColour: string;
  paddleXStart: number;
  paddleYStart: number;
  paddle: Paddle;
  leftPressed: boolean;
  rightPressed: boolean;
  brickRows: number;
  brickColumns: number;
  brickWidth: number;
  brickHeight: number;
  brickPadding: number;
  brickOffsetTop: number;
  brickOffsetLeft: number;
  brickColour: string;
  bricks: Bricks;
  GameLabelScore: GameLabel;
  GameLabelLives: GameLabel;
  constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
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
    this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;
    this.paddleYStart = (this.canvas.height - this.paddleHeight - 5);
    this.paddle = new Paddle(
      this.paddleXStart,
      this.paddleYStart,
      this.paddleWidth,
      this.paddleHeight,
      this.paddleSpeed,
      this.paddleColour,
    );

    this.leftPressed = false;
    this.rightPressed = false;

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
    this.GameLabelScore = new GameLabel('Score', 8, 20);
    // ? Lives:
    this.GameLabelLives = new GameLabel('Lives', this.canvas.width - 65, 20);

    this.loadListeners();
    this.draw();
  }

  loadListeners() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
    this.GameLabelLives.value = 3;
  }

  keyDownHandler(e:KeyboardEvent) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e:KeyboardEvent) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e:MouseEvent) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.moveTo(relativeX - this.paddle.width / 2, this.paddleYStart);
    }
  }

  movePaddle() {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      this.paddle.moveBy(7, 0);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveBy(-7, 0);
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
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddleWidth) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.GameLabelLives.value -= 1;
        if (!this.GameLabelLives.value) {
          // eslint-disable-next-line no-alert
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.ball.x = this.canvas.width / 2;
          this.ball.y = this.canvas.height - 30;
          this.ball.dx = 3;
          this.ball.dy = -3;
        }
      }
    }
  }

  collisionDetection() {
    for (let c = 0; c < this.bricks.columns; c += 1) {
      for (let r = 0; r < this.bricks.rows; r += 1) {
        const brick = this.bricks.bricks[c][r];
        if (brick.status === 1) {
          if (this.ball.x > brick.x && this.ball.x < brick.x + this.brickWidth
            && this.ball.y > brick.y && this.ball.y < brick.y + this.brickHeight) {
            this.ball.dy = -this.ball.dy;
            brick.status = 0;
            this.GameLabelScore.value += 1;
            if (this.GameLabelScore.value === this.bricks.columns * this.bricks.rows) {
              // eslint-disable-next-line no-alert
              alert(`Congratulations, You Win! You scored ${this.GameLabelScore.value} points.`);
            }
          }
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
    this.GameLabelScore.render(this.ctx);
    this.GameLabelLives.render(this.ctx);
    this.collisionDetection();
    this.ball.move();
    this.movePaddle();
    this.ballMovement();
    requestAnimationFrame(this.draw.bind(this));
  }
}

export default Game;
