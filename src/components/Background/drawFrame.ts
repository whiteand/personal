import { IState } from "./types";

export async function getDrawFrame(
  canvas: HTMLCanvasElement
): Promise<(state: IState) => void> {
  const ctx = canvas.getContext("2d");

  if (!ctx) return () => {};

  return (state: IState) => {
    ctx.clearRect(0, 0, state.width, state.height);
    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.arc(state.pointer.x, state.pointer.y, 100, 0, Math.PI * 2, false);
    ctx.fill();
  };
}
