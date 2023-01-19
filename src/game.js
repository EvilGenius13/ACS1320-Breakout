import Ball from './src/ball';
import Paddle from './src/paddle';
import Brick from './src/brick';
import Bricks from './src/bricks';
import Score from './src/score';
// TODO: Add lives after working scenario
// TODO: Flip background to class

class Game {
  constructor(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.ballRadius = 10;

    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    this.paddleY = (this.canvas.height - this.paddleHeight);

    this.brickRowCount = 4;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 75;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
  }
}

export default Game;
