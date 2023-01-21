class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.font = '16px Impact';
    this.color = '#8109E5';
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  scoreUp() {
    this.score += 10;
  }

  scoreReset() {
    this.score = 0;
  }
}

export default Score;
