export default class SceneObject {
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public ax: number;
  public ay: number;
  private lastTime: number;
  public constructor(
    x: number,
    y: number,
    vx: number,
    vy: number,
    ax: number,
    ay: number
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.lastTime = 0;
  }
  public update(time: number) {
    if (!this.lastTime) {
      this.lastTime = time;
      return;
    }
    const dt = time - this.lastTime;
    this.vx = this.ax * dt + this.vx;
    this.vy = this.ay * dt + this.vy;
    this.x = this.vx * dt + this.x;
    this.y = this.vy * dt + this.y;
    this.lastTime = time;
  }
}
