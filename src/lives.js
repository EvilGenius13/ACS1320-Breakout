class Lives {
  constructor(x, y, startingLives = 3) {
    this.x = x;
    this.y = y;
    this.startingLives = startingLives;
    this.lives = startingLives;
    this.font = '16px Impact';
    this.color = '#00F0FB';
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLives() {
    this.lives -= 1;
  }

  reset() {
    this.lives = this.startingLives;
  }
}

export default Lives;
