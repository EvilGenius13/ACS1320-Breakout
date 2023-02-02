/* eslint-disable import/extensions */
import Brick from './Brick';

class Bricks {
  columns: number;
  rows: number;
  bricks: any[];
  width: number;
  height: number;
  padding: number;
  offsetTop: number;
  offsetLeft: number;
  colour: string;
  constructor(rows: number, columns: number, width: number, height: number, padding: number, offsetTop: number, offsetLeft: number, colour: string) {
    this.rows = rows;
    this.columns = columns;
    this.bricks = [];
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;
    this.colour = colour;

    this.loadBricks();
  }

  loadBricks() {
    for (let c = 0; c < this.columns; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = (c * (this.width + this.padding)) + this.offsetLeft;
        const brickY = (r * (this.height + this.padding)) + this.offsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height, this.colour);
      }
    }
  }

  render(ctx:any) {
    for (let c = 0; c < this.columns; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

export default Bricks;
