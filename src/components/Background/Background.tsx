import { useEffect, useLayoutEffect, useRef } from "react";
import { fromEvent } from "rxjs";
import s from "./Background.module.scss";
import { getDrawFrame } from "./drawFrame";
import { IState } from "./types";
import SceneObject from "./SceneObject";
import { update } from "src/components/Background/update";

export default function Background() {
  const stateRef = useRef<IState>({
    width: window.innerWidth,
    height: window.innerHeight,
    time: 0,
    previousTime: -1,
    pointer: new SceneObject(
      window.innerWidth / 2,
      window.innerHeight / 2,
      Math.random() * 1e-1,
      Math.random() * 1e-1,
      0,
      0
    ),
    mouseX: 0,
    mouseY: 0,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current: canvas } = canvasRef;
    if (!canvas) return;
    let canceled = false;
    let frameHandle: null | number = null;
    let currentDrawFrame: (state: IState) => void = () => {};
    getDrawFrame(canvas).then((drawFrame) => {
      if (!canceled) {
        currentDrawFrame = drawFrame;
        frameHandle = requestAnimationFrame(draw);
      }
    });

    function draw(currentTime: number) {
      frameHandle = requestAnimationFrame(draw);

      update(stateRef.current, currentTime);

      currentDrawFrame(stateRef.current);
    }

    return () => {
      canceled = true;
      if (frameHandle) cancelAnimationFrame(frameHandle);
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      stateRef.current.width = window.innerWidth;
      stateRef.current.height = window.innerHeight;
      if (canvasRef.current) {
        canvasRef.current.width = stateRef.current.width;
        canvasRef.current.height = stateRef.current.height;
      }
    };
    const sub = fromEvent(window, "resize").subscribe(handleResize);
    handleResize();
    return () => {
      sub.unsubscribe();
    };
  }, [stateRef]);

  useEffect(() => {
    const sub = fromEvent<MouseEvent>(window, "mousemove").subscribe(
      (event) => {
        stateRef.current.mouseX = event.clientX;
        stateRef.current.mouseY = event.clientY;
      }
    );
    sub.add(
      fromEvent<MouseEvent>(window, "mouseout").subscribe(() => {
        stateRef.current.mouseX = 0;
        stateRef.current.mouseY = 0;
      })
    );
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return <canvas ref={canvasRef} className={s.canvas}></canvas>;
}
