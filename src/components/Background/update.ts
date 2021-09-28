import { IState } from "src/components/Background/types";

export function update(state: IState, currentTime: number) {
  state.previousTime = state.time;
  state.time = currentTime / 100;
  if (state.mouseY !== 0 || state.mouseX !== 0) {
    const dy = state.mouseY - state.pointer.y;
    const dx = state.mouseX - state.pointer.x;
    const d = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx);
    state.pointer.ax = d > 1 ? Math.cos(angle) * 0.001 : 0;
    state.pointer.ay = d > 1 ? Math.sin(angle) * 0.001 : 0;
    state.pointer.vx =
      Math.sign(state.pointer.vx) * Math.min(1e-1, Math.abs(state.pointer.vx));
    state.pointer.vy =
      Math.sign(state.pointer.vy) * Math.min(1e-1, Math.abs(state.pointer.vy));
  } else {
    state.pointer.ax = 0
    state.pointer.ay = 0
  }
  if (state.pointer.x < -100) {
    state.pointer.x = Math.max(state.pointer.x, -100);
    state.pointer.vx = Math.min(1, Math.abs(state.pointer.vx));
  }
  if (state.pointer.x > state.width + 100) {
    state.pointer.x = Math.min(state.pointer.x, state.width + 100);
    state.pointer.vx = -Math.min(Math.abs(state.pointer.vx), 1);
  }
  if (state.pointer.y < -100) {
    state.pointer.y = Math.max(state.pointer.y, -100);
    state.pointer.vy = Math.min(1, Math.abs(state.pointer.vy));
  }
  if (state.pointer.y > state.height + 100) {
    state.pointer.y = Math.min(state.pointer.y, state.height + 100);
    state.pointer.vy = -Math.min(1, Math.abs(state.pointer.vy));
  }
  state.pointer.update(currentTime);
}
