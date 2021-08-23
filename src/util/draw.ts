const canvas = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext(
  "2d"
) as CanvasRenderingContext2D;

export function draw(): void {
  ctx.beginPath();
  ctx.translate(0, canvas.height);
  ctx.scale(1, -1);

  for (let i = 1; i <= 100; i++) {
    ctx.lineTo(i, i * i);
  }
  ctx.stroke();
}
