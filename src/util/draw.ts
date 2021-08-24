const stage = document.getElementById(
  "stage"
) as HTMLElement;

function createCanvas(
  height: number,
  width: number
): CanvasRenderingContext2D {
  const canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  stage.appendChild(canvas);
  return canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
}

export class Draw {
  private height: number = 300;
  private width: number = 300;
  private ctx: CanvasRenderingContext2D;
  private scaleX: number;
  private scaleY: number;

  constructor(scaleX: number, scaleY: number) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.ctx = createCanvas(this.height, this.width);
    this.ctx.beginPath();
    this.ctx.translate(0, this.height);
    this.ctx.scale(1, -1);
  }

  private realX(x: number): number {
    return this.width * (x / this.scaleX);
  }
  private realY(y: number): number {
    return this.height * (y / this.scaleY);
  }

  lineTo(x: number, y: number) {
    this.ctx.lineTo(this.realX(x), this.realY(y));
  }

  pointAt(x: number, y: number) {
    this.ctx.beginPath();
    this.ctx.arc(
      this.realX(x),
      this.realY(y),
      1,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
  }

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.ctx.fillRect(
      this.realX(x),
      this.realY(y),
      this.realX(width),
      this.realY(height)
    );
  }

  stroke() {
    this.ctx.stroke();
  }
}
