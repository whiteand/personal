import { useEffect, useState } from "react";
import classnames from "classnames";
import s from "./EnteringTextAnimation.module.scss";
import { CursorState } from "./types";
import { enteringAnimationSteps } from "./enteringAnimationSteps";

const CURSOR_CLASS: Record<CursorState, string> = {
  [CursorState.Blinking]: s.blinking,
  [CursorState.Idle]: s.idle,
};

export default function EnteringTextAnimation({
  texts,
}: {
  texts: string[];
}): JSX.Element | null {
  const [currentText, setCurrentText] = useState(texts[0] || "");
  const [cursorState, setCursorState] = useState(CursorState.Blinking);

  useEffect(() => {
    const stepIterator = enteringAnimationSteps(texts);
    let timeoutId: number | null = null;

    function step(): void {
      const entry = stepIterator.next();
      if (entry.done) return;
      setCurrentText(entry.value.text);
      setCursorState(entry.value.cursorState);
      timeoutId = window.setTimeout(step, entry.value.nextStepTimeout);
    }

    step();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [texts]);

  if (texts.length <= 0) return null;

  return (
    <span>
      {currentText}
      <span className={classnames(s.cursor, CURSOR_CLASS[cursorState])}>
        &nbsp;
      </span>
    </span>
  );
}
