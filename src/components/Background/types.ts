import SceneObject from "src/components/Background/SceneObject";

export interface IState {
  width: number;
  height: number;
  time: number;
  previousTime: number;
  pointer: SceneObject;
  mouseX: number
  mouseY: number
}
