import { IState } from "src/components/Background/types";

export function update(state: IState, currentTime: number) {
  state.previousTime = state.time;
  state.time = currentTime;

  const dy = state.mouseY - state.pointer.y;
  const dx = state.mouseX - state.pointer.x;
  const d = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  state.pointer.ax = d > 1 ? Math.cos(angle) * 0.0001 : 0;
  state.pointer.ay = d > 1 ? Math.sin(angle) * 0.0001 : 0;

  state.pointer.update(currentTime);
}
