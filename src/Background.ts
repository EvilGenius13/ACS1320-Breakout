class Background {
  x: number;
  y: number;
  image: HTMLImageElement;
  constructor(x:number, y:number, image:HTMLImageElement) {
    this.x = x;
    this.y = y;
    this.image = image;
  }

  render(ctx:CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y);
  }
}

export default Background;
