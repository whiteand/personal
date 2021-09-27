import { CursorState } from "./types";

interface IEnteringAnimationStep {
  cursorState: CursorState;
  text: string;
  nextStepTimeout: number;
}

export function* enteringAnimationSteps(
  texts: string[]
): Generator<IEnteringAnimationStep, void, unknown> {
  if (texts.length <= 0) return;
  while (true) {
    for (let i = 0; i < texts.length; i++) {
      const currentWord = texts[i];
      for (let j = 0; j < currentWord.length; j++) {
        yield {
          cursorState: CursorState.Idle,
          text: currentWord.slice(0, j),
          nextStepTimeout: 100,
        };
      }
      yield {
        cursorState: CursorState.Blinking,
        text: currentWord,
        nextStepTimeout: 4000,
      };
      for (let j = currentWord.length - 1; j >= 0; j--) {
        yield {
          cursorState: CursorState.Idle,
          text: currentWord.slice(0, j),
          nextStepTimeout: 50,
        };
      }
    }
  }
}
